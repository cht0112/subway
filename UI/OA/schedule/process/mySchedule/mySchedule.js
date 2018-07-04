var __dialog_operator = "";
var __dialog_schedule_id = "";
var refresh_scheduler_flag = false;
var scroll_top;
var lastTab = "scheduleTab";
var confirmFlag = true;
/*******************************************************************************
 * **model事件
 */ 
function mdMainload(event) {
	initSchedule();
	refreshScheduler(scheduler._mode, scheduler._date);

	var dateStr = justep.Request.URLParams.dateStr;
	if (dateStr) {
		scheduler.setCurrentView(new Date(dateStr.substring(0, 4),
				(Number(dateStr.substring(5, 7)) - 1).toString(), dateStr
						.substring(8, 10)));
	}/**/
}
function listTabxforms_select(event) {
	refreshListData();
}
function schedulerTabxforms_select(event) {
	refreshScheduler(scheduler._mode, scheduler._date);
}
function triSeeChanged(event) {
	refreshListData();
}
function query_keywordxforms_value_changed(event) {
	refreshListData();
}
/*******************************************************************************
 * 重写scheduler组件
 */
if (typeof scheduler != "undefined") {
	scheduler.showLightbox = function(id) {
		var ev = scheduler.getEvent(id);
		if (ev.scheduleID)
			showSchedule("view", ev.scheduleID, "日程编辑");
		else
			showSchedule("new", "", "日程编辑");
	};
	scheduler._on_mouse_down = function(e) {
		var src = e.target || e.srcElement;
		var id = this._locate_event(src);
		switch (src.className.split(" ")[0]) {
			case "dhx_cal_event_line" :
				if (hasPermissionToHandle(id) && !isMultiDaySchedule(id)) {
					this._drag_mode = "move"; // item in table mode
				}
				break;
			case "dhx_header" :
			case "dhx_title" :
				if (hasPermissionToHandle(id) && !isMultiDaySchedule(id)) {
					this._drag_mode = "move"; // item in table mode
				}
				break;
			case "dhx_footer" :
				if (hasPermissionToHandle(id) && !isMultiDaySchedule(id)) {
					this._drag_mode = "resize"; // item in table mode
				}
				break;
			case "dhx_scale_holder" :
			case "dhx_scale_holder_now" :
			case "dhx_month_body" :
				this._drag_mode = "create";
				break;
			default :
				this._drag_mode = null;
				this._drag_id = null;
		}
		if (this._drag_mode) {
			if (!this.config["drag_" + this._drag_mode])
				this._drag_mode = this._drag_id = 0;
			else {
				this._drag_id = this._locate_event(src);
				this._drag_event = this._copy_event(this
						.getEvent(this._drag_id)
						|| {});
			}
		}
		this._drag_start = null;
	};
	scheduler._click = {
		dhx_cal_data : function(e) {
			var trg = e ? e.target : event.srcElement;
			var id = scheduler._locate_event(trg);
			if (id) {
				scheduler.callEvent("onClick", [id, (e || event)]);
				scheduler.select(id);
				var mask = trg.className;
				if (mask.indexOf("_icon") != -1)
					scheduler._click.buttons[mask.split(" ")[1].replace(
							"icon_", "")](id);
			} else if (new Date().valueOf() - (scheduler._new_event || 0) > 500
					&& scheduler._edit_id) {
				if (confirm(scheduler.locale.labels.confirm_closing))
					scheduler.editStop(scheduler.config.positive_closing);
			}
		},
		dhx_cal_prev_button : function() {
			scheduler.setCurrentView(scheduler.date.add(scheduler._date, -1,
					scheduler._mode));
		},
		dhx_cal_next_button : function() {
			scheduler.setCurrentView(scheduler.date.add(scheduler._date, 1,
					scheduler._mode));
		},
		dhx_cal_today_button : function() {
			scheduler.setCurrentView(new Date());
		},
		dhx_cal_tab : function() {
			var mode = this.getAttribute("name").split("_")[0];
			scheduler.setCurrentView(scheduler._date, mode);
		},
		buttons : {
			"delete" : function(id) {
				if (hasPermissionToHandle(id)) {
					var c = scheduler.locale.labels.confirm_deleting;
					if (!c || confirm(c))
						scheduler.deleteEvent(id);
				} else {
					alert("您没有删除日程的权限");
				}
			},
			edit : function(id) {
				if (hasPermissionToHandle(id) && (!isMultiDaySchedule(id))) {
					scheduler.edit(id);
				} else if (isMultiDaySchedule(id)) {
					scheduler.showLightbox(id);
				} else {
					alert("您没有编辑日程的权限");
				}
			},
			save : function(id) {
				event_object = scheduler.getEvent(id);
				saveSchedule(event_object);
				scheduler.editStop(true);
			},
			details : function(id) {
				scheduler.showLightbox(id);
			},
			cancel : function(id) {
				scheduler.editStop(false);
			}
		}
	};
	scheduler._on_dbl_click = function(e) {
		var src = e.target || e.srcElement;
		switch (src.className.split(" ")[0]) {
			case "dhx_scale_holder" :
			case "dhx_scale_holder_now" :
			case "dhx_month_body" :
				if (!scheduler.config.drag_create)
					break;
				var pos = this._mouse_coords(e);
				var start = this._min_date.valueOf()
						+ (pos.y * this.config.time_step + (this._table_view
								? 0
								: pos.x)
								* 24 * 60) * 60000;
				var end = start + this.config.time_step * 60000;
				this._drag_id = this.uid();
				this._drag_mode = "new-size";
				this._loading = true;
				this.addEvent(new Date(start), new Date(end),
						this.locale.labels.new_event, this._drag_id);
				this._loading = false;
				this._on_mouse_up(e);
				break;
			case "dhx_body" :
				var id = this._locate_event(src);
				if (hasPermissionToHandle(id)) {
					if (this.config.details_on_dblclick
							|| isMultiDaySchedule(id))
						this.showLightbox(id);
					else
						this.edit(id);
				}
				break;
			case "dhx_cal_event_line" :
			case "dhx_cal_event_clear" :
				var id = this._locate_event(src);
				this.showLightbox(id);
				break;
		}
	};
};

/*******************************************************************************
 * scheduler事件
 */

function formatScheduleDate(date) {
	return justep.Date.toString(date, "yyyy-MM-dd hh:mm");
}

scheduleHandles = {
	onClick : function(event_id, native_event_object) {
		return true;
	},
	onContextMenu : function(event_id, native_event_object) {
		return true;
	},
	onBeforeDrag : function(event_id, mode, native_event_object) {
		return true;
	},
	onBeforeEventDelete : function(event_id, event_object) {
		if (event_object.scheduleID) {
			var dFlag = callDeleteSchedule(event_object.scheduleID);
			refreshScheduler(event_object.mode, event_object.date);
			return dFlag;
		} else {
			return true;
		}
	},
	onEventAdded : function(event_id, event_object) {
		if (refresh_scheduler_flag)
			return;
		saveSchedule(event_object);
	},
	onEventChanged : function(event_id, event_object) {
		if (refresh_scheduler_flag)
			return;
		saveSchedule(event_object);
		refreshScheduler(event_object.mode, event_object.date);
	},
	onBeforeViewChange : function(old_mode, old_date, mode, date) {
		if (old_mode != "month")
			scroll_top = document.getElementById("scheduleDataDIV").scrollTop;
		return true;
	},
	onViewChange : function(mode, date) {
		refreshScheduler(mode, date);
		if (mode != "month")
			document.getElementById("scheduleDataDIV").scrollTop = scroll_top;
		return true;
	}
};

function initScheduleEventHandles() {
	scheduler.attachEvent("onClick", function(event_id, native_event_object) {
		return scheduleHandles.onClick(event_id, native_event_object);
	});
	scheduler.attachEvent("onContextMenu", function(event_id,
			native_event_object) {
		return scheduleHandles.onContextMenu(event_id, native_event_object);
	});
	scheduler.attachEvent("onBeforeDrag", function(event_id, mode,
			native_event_object) {
		return scheduleHandles
				.onBeforeDrag(event_id, mode, native_event_object);
	});
	scheduler.attachEvent("onEventAdded", function(event_id, event_object) {
		return scheduleHandles.onEventAdded(event_id, event_object);
	});
	scheduler.attachEvent("onEventChanged", function(event_id, event_object) {
		return scheduleHandles.onEventChanged(event_id, event_object);
	});
	scheduler.attachEvent("onBeforeEventDelete", function(event_id,
			event_object) {
		return scheduleHandles.onBeforeEventDelete(event_id, event_object);
	});
	scheduler.attachEvent("onBeforeViewChange", function(old_mode, old_date,
			mode, date) {
		return scheduleHandles.onBeforeViewChange(old_mode, old_date, mode,
				date);
	});
	scheduler.attachEvent("onViewChange", function(mode, date) {
		return scheduleHandles.onViewChange(mode, date);
	});
}

/*******************************************************************************
 * 刷新数据
 */
function joinCondition(condition1, condition2, operator) {
	if (condition1 != "" && condition2 != "") {
		return "(" + condition1 + ") " + operator + " (" + condition2 + ")";
	} else {
		return condition1 + condition2;
	}
}
function refreshListData() {
	lastTab = "listTab";
	IDFilter = "OA_SD_Schedule IN ( SELECT e.fSDMasterID FROM OA_SD_Executor e WHERE e.fExecutorID ='"
			+ justep.Context.getCurrentPersonID() + "')";
	justep.xbl("dList").filters.setFilter("IDFilter", IDFilter);
	justep.xbl("dList").refreshData();
}

function refreshScheduleData(mode, date) {
	var template = "(:toDate(':begin')<OA_SD_Schedule.fEndTime OR :toDate(':begin')=OA_SD_Schedule.fEndTime)AND(:toDate(':end')>OA_SD_Schedule.fBeginTime OR :toDate(':end')=OA_SD_Schedule.fBeginTime)";
	var dateFilter = getScheduleDateFilter(mode, date, template);
	justep.xbl("dSchedule").filters.setFilter("scheduleFilter", "");
	IDFilter = "OA_SD_Schedule IN ( SELECT e.fSDMasterID FROM OA_SD_Executor e WHERE e.fExecutorID ='"
			+ justep.Context.getCurrentPersonID() + "')";
	justep.xbl("dSchedule").filters.setFilter("IDFilter", IDFilter);
	justep.xbl("dSchedule").filters.setFilter("datetimeFilter", dateFilter);
	justep.xbl("dSchedule").refreshData();
}

/*******************************************************************************
 * 初始化和刷新日程组件
 */

function initSchedule() {
	scheduler.config.multi_day = true;
	scheduler.config.xml_date = "%Y-%m-%d %H:%i";
	scheduler.config.api_date = '%Y-%m-%d %H:%i:%s';
	scheduler.init('schedulerComponent', null, "week");
	scheduler.init_templates();
	initScheduleEventHandles();
	scroll_top = init_scroll_top;
	document.getElementById("scheduleDataDIV").scrollTop = scroll_top;
}

function refreshScheduler(mode, date) {
	lastTab = "scheduleTab";
	refreshScheduleData(mode, date);
	scheduler.clearAll();
	var scheduleData = justep.xbl('dSchedule');
	refresh_scheduler_flag = true;
	try {
		var beginDate = '';
		var beginTime = '';
		var endDate = '';
		var endTime = '';
		for (var i = 0; i < scheduleData.getCount(); i++) {
			var rowid = scheduleData.getRowId(i);
			var scheduleID = rowid;
			var start_date = scheduleData.getValue('fBeginTime', rowid);
			var end_date = scheduleData.getValue('fEndTime', rowid);
			var text = scheduleData.getValue('fTitle', rowid);
			var createPsnID = scheduleData.getValue('fCreatePsnID', rowid);
			if (start_date) {
				start_date = start_date.replace('T', ' ');
				start_date = start_date.replace('.000Z', '');
				beginDate = start_date.substring(0, 10);
				beginTime = start_date.substring(11);
			}
			if (end_date) {
				end_date = end_date.replace('T', ' ');
				end_date = end_date.replace('.000Z', '');
				endDate = end_date.substring(0, 10);
				endTime = end_date.substring(11);
			}
			// TODO 分解跨天的日程为多个event
			var days = DateDiff(start_date.substring(0, 10), end_date
					.substring(0, 10));
			if (days > 0 && mode != 'month') {// 跨天的日程

				// 第一天的日程
				scheduler.addEvent(start_date, beginDate + " 23:59:59", text,
						scheduler.uid(), {
							scheduleID : scheduleID,
							createPsnID : createPsnID,
							multiDayFlag : 1
						});
				for (var k = 1; k <= days; k++) {
					var dateTemp = getDate(beginDate, k);
					if (k == days) {// 最后一天的日程
						scheduler.addEvent(dateTemp + " 00:00:00", end_date,
								text, scheduler.uid(), {
									scheduleID : scheduleID,
									createPsnID : createPsnID,
									multiDayFlag : 1
								});
					} else {
						scheduler.addEvent(dateTemp + " 00:00:00", dateTemp
								+ " 23:59:59", text, scheduler.uid(), {
							scheduleID : scheduleID,
							createPsnID : createPsnID,
							multiDayFlag : 1
						});
					}
				}
			} else if (days > 0 && mode == 'month') {// 跨天的日程月模式
				var startnew = start_date.substring(0, 10);
				var endnew = end_date.substring(0, 10);
				var endtimenew = end_date.substring(11);
				if (endtimenew.indexOf("00:00:00") < 0) {
					var c = new Date(end_date.substring(0, 4), end_date
							.substring(5, 7), end_date.substring(8, 10));
					var d = scheduler.date.add(c, 1, "day");
					endnew = d.getFullYear()
							+ "-"
							+ (d.getMonth().length > 1
									? d.getMonth()
									: ("0" + d.getMonth())) + "-" + d.getDate();
				}
				scheduler.addEvent(startnew, endnew, text, scheduler.uid(), {
					scheduleID : scheduleID,
					createPsnID : createPsnID,
					multiDayFlag : 1
				});
			} else {// 非跨天的日程
				scheduler.addEvent(start_date, end_date, text, scheduler.uid(),
						{
							scheduleID : scheduleID,
							createPsnID : createPsnID,
							multiDayFlag : 0
						});
			}
		}
	} finally {
		refresh_scheduler_flag = false;
	}
}

function hasPermissionToHandle(id) {
	var eventCreatePsnID = scheduler.getEvent(id).createPsnID;
	var sysCreatePsnID = justep.Context.getCurrentPersonID();
	return (eventCreatePsnID == sysCreatePsnID);
}

function isMultiDaySchedule(id) {
	var multiFlag = scheduler.getEvent(id).multiDayFlag;
	return (multiFlag == 1);
}

function scheduleDialogReturn(params) {
	if (params.data && params.data == "ok") {
		// TODO 判断当前的tab页，刷新数据
		if (lastTab == "scheduleTab")
			refreshScheduler(scheduler._mode, scheduler._date);
		else
			refreshListData();
	}
}

function openMyScheduleDialog(data) {
	return '<a href="javascript:void(0)" onclick="openAndViewMySchedule(this);">'
			+ data.value + '</a>';
}

function openAndViewMySchedule(element) {
	var gridInfo = commonUtils.getGridInfoByElement(element);
	var gridID = '';
	if (gridInfo) {
		gridID = gridInfo.rowId;
	}
	if (!gridID || gridID == '') {
		gridID = $('listData').xfElement.getValueByName('rowid');
	}
	var index = $('listData').xfElement.store.getRowIndex(gridID);
	var fMasterID = $('listData').xfElement
			.getValueByName('fSDMasterID', index);
	showSchedule("view", fMasterID, "日程编辑");
}

function saveSchedule(event_object){
	if(!event_object.scheduleID){
		callNewSchedule(event_object);
	}else{
		callUpdateSchedule(event_object);
	}
}

function callNewSchedule(event_object) {
	event_object.multiDayFlag = 0;
	event_object.createPsnID = justep.Context.getCurrentPersonID();
	
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	// param.setString('fID',fID);
	param.setString('fTitle', event_object.text);
	param.setString('fBeginTime', formatScheduleDate(event_object.start_date));
	param.setString('fEndTime', formatScheduleDate(event_object.end_date));
	var action = "newScheduleAction";
	var r = justep.Request.sendBizRequest(process, activity, action, param,
			null, null, true);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "新建日程失败"));
	}
	event_object.scheduleID = justep.Request.transform(justep.Request.getData(r.responseXML));
}

function callUpdateSchedule(event_object) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	param.setString('fID', event_object.scheduleID);
	param.setString('fTitle', event_object.text);
	param.setString('fBeginTime', formatScheduleDate(event_object.start_date));
	param.setString('fEndTime', formatScheduleDate(event_object.end_date));
	var action = "updateScheduleAction";
	var r = justep.Request.sendBizRequest(process, activity, action, param,
			null, null, true);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "修改日程失败"));
	}
	return true;
}

function callDeleteSchedule(fID) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	var action = "deleteScheduleAction";
	param.setString('fID', fID);
	var r = justep.Request.sendBizRequest(process, activity, action, param,
			null, null, true);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "删除日程失败"));
	}
	return true;
}

function deleteSchedule() {
	var ensureDelete = confirm('确实要删除选 中的日程吗？');
	if (ensureDelete) {
		var mainData = justep.xbl("dList");
		var index = mainData.getIndex();
		var fID = mainData.getRowId();
		var fCreatePsnID = mainData.getValue('fCreatePsnID', fID);
		var sysCreatePsnID = justep.Context.getCurrentPersonID();
		if (fCreatePsnID == sysCreatePsnID) {
			callDeleteSchedule(fID);
			justep.xbl("dList").refreshData();
			alert('删除成功');
		} else {
			alert("您沒有刪除权限");
		}
	}
}

function grid1RowDblclick(event) {

	__dialog_schedule_id = justep.xbl("dList").getValue("rowid");
	__dialog_operator = "view";
	var scheduleArrangeDlg = justep.xbl("dlgScheduleArrange");
	scheduleArrangeDlg.initEveryTimes = true;
	scheduleArrangeDlg.open();
}
function showSchedule(operator, scheduleID, title) {
	__dialog_operator = operator;
	__dialog_schedule_id = scheduleID;
	var scheduleArrangeDlg = justep.xbl("dlgScheduleArrange");
	scheduleArrangeDlg.initEveryTimes = true;
	scheduleArrangeDlg.open();
}

function openMyScheduleDialog(data) {
	var fid = data.rowId;
	var html = "<a href=\"javascript:openAndViewMySchedule('" + fid + "')\">"
			+ data.value + "</a>";
	return html;
}

function openAndViewMySchedule(fID) {
	__dialog_schedule_id = fID;
	dlgOpetator = "view";
	showSchedule("view", __dialog_schedule_id, "日程编辑");
}
// 给对话框传值
function scheduleArrangeDialogSend(event) {
	var params = {
		"operator" : __dialog_operator,
		"scheduleID" : __dialog_schedule_id,
		"executor" : justep.Context.getCurrentPersonName(),
		"title" : "日程安排",
		"executorID" : justep.Context.getCurrentPersonID()
	};
	return params;
}

// 接收对话框返回
function scheduleArrangeDialogReceive(obj) {
	if (lastTab == "scheduleTab")
		refreshScheduler(scheduler._mode, scheduler._date);
	else {
		var id = obj.data;
		var data = justep.xbl("dList");
		appCommon.DataUtils.refreshDataByRowIds(data, id, null);
	}
}
function listTabSelect(event){
	scheduler.editStop(scheduler.config.positive_closing);
}

var __dialog_operator = "";
var __dialog_schedule_id = "";
var refresh_scheduler_flag = false;
//scroll:卷轴，画卷；名册；卷形物
var scroll_top;
//初始化时显示“占用信息”页签
var lastTab = "scheduleTab";
var confirmFlag = true;
	var data = new Array();//标记操作员的序号，画日程的开始位置
	var monthDays = 30;
/*******************************************************************************
 * **model事件
 */ 
function mdMainload(event) {
	debugger;
	initSchedule();
	refreshScheduler(scheduler._mode, scheduler._date);

	var dateStr = justep.Request.dateStr;
	if (dateStr) {
		scheduler.setCurrentView(new Date(dateStr.substring(0, 4),
				(Number(dateStr.substring(5, 7)) - 1).toString(), dateStr
						.substring(8, 10)));
	}/**/
}
function listTabxforms_select(event) {
	
	refreshListData();
}
//
function schedulerTabxforms_select(event) {
	
	refreshScheduler(scheduler._mode, scheduler._date);
		scheduler.editStop(scheduler.config.positive_closing);
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
	
//	scheduler.showLightbox = function(id) {
//		var ev = scheduler.getEvent(id);
//		if (ev.scheduleID)
//			showSchedule("view", ev.scheduleID, "日程编辑");
//		else
//			showSchedule("new", "", "日程编辑");
//	};
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
				//this._drag_mode = "create";
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
//			var trg = e ? e.target : event.srcElement;
//			var id = scheduler._locate_event(trg);
//			if (id) {
//				scheduler.callEvent("onClick", [id, (e || event)]);
//				scheduler.select(id);
//				var mask = trg.className;
//				if (mask.indexOf("_icon") != -1)
//					scheduler._click.buttons[mask.split(" ")[1].replace(
//							"icon_", "")](id);
//			} else if (new Date().valueOf() - (scheduler._new_event || 0) > 500
//					&& scheduler._edit_id) {
//				if (confirm(scheduler.locale.labels.confirm_closing))
//					scheduler.editStop(scheduler.config.positive_closing);
//			}
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
					//scheduler.showLightbox(id);
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
				//scheduler.showLightbox(id);
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
//				if (!scheduler.config.drag_create)
//					break;
//				var pos = this._mouse_coords(e);
//				var start = this._min_date.valueOf()
//						+ (pos.y * this.config.time_step + (this._table_view
//								? 0
//								: pos.x)
//								* 24 * 60) * 60000;
//				var end = start + this.config.time_step * 60000;
//				this._drag_id = this.uid();
//				this._drag_mode = "new-size";
//				this._loading = true;
//				this.addEvent(new Date(start), new Date(end),
//						this.locale.labels.new_event, this._drag_id);
//				this._loading = false;
//				this._on_mouse_up(e);
				break;
			case "dhx_body" :
//				var id = this._locate_event(src);
//				if (hasPermissionToHandle(id)) {
//					if (this.config.details_on_dblclick
//							|| isMultiDaySchedule(id)){
//						//this.showLightbox(id);							
//							}
//
//					else
//						this.edit(id);
//				}
				break;
			case "dhx_cal_event_line" :
			case "dhx_cal_event_clear" :
				//var id = this._locate_event(src);
				//this.showLightbox(id);
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
//	onClick : function(event_id, native_event_object) {
//		return true;
//	},
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
		//if (old_mode != "month")
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
	//lastTab = "listTab";
	
	//IDFilter = "OA_SD_Schedule IN ( SELECT e.fSDMasterID FROM OA_SD_Executor e WHERE e.fExecutorID ='"
	//		+ justep.Context.getCurrentPersonID() + "')";
	//justep.xbl("dList").filters.setFilter("IDFilter", IDFilter);
	//justep.xbl("hrData").refreshData();
}
//过滤数据，显示占用时间合法、结束占用时间还没到的占用信息
function refreshScheduleData(mode, date) {
	debugger;
//	var template = "(:toDate(':begin')<HR_OCCUPY_INFO.oCCUPYSTARTDATETIME OR :toDate(':begin')=HR_OCCUPY_INFO.oCCUPYENDDATETIME)AND(:toDate(':end')>HR_OCCUPY_INFO.oCCUPYSTARTDATETIME OR :toDate(':end')=HR_OCCUPY_INFO.oCCUPYSTARTDATETIME)";
//	var dateFilter = getScheduleDateFilter(mode, date, template);
//	justep.xbl("dSchedule").filters.setFilter("scheduleFilter", template);
	//IDFilter = "OA_SD_Schedule IN ( SELECT e.fSDMasterID FROM OA_SD_Executor e WHERE e.fExecutorID ='"
	//		+ justep.Context.getCurrentPersonID() + "')";
	//justep.xbl("dSchedule").filters.setFilter("IDFilter", IDFilter);
//	justep.xbl("dSchedule").filters.setFilter("datetimeFilter", dateFilter);
	justep.xbl("dSchedule").refreshData();
}

/*******************************************************************************
 * 初始化和刷新日程组件
 */

function initSchedule() {
	debugger;
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
debugger;
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
			var start_date = scheduleData.getValue('oCCUPYSTARTDATETIME', rowid);
			var end_date = scheduleData.getValue('oCCUPYENDDATETIME', rowid);
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
			//项目名称（开始日期——结束日期）	
			var text = scheduleData.getValue('pROJECTNAME', rowid)+" ("+beginDate.substring(5, 10)+"-"+endDate.substring(5, 10)+")";
			if(mode=="month"){
				var text = scheduleData.getValue('pROJECTNAME', rowid)+" (——"+endDate.substring(5, 10)+")";
			}		
			
			//createPsnID：操作员；
			var createPsnID = rowid;//改成工具ID
			// TODO 分解跨天的日程为多个event
			//用两个日期相减得到日程持续几天
			var days = DateDiff(start_date.substring(0, 10), end_date
					.substring(0, 10));
			if (days > 0 && mode != 'month') {// 跨天的日程

				// 第一天的日程
				scheduler.addEvent(start_date, start_date, 0,text,
						scheduler.uid(), {
							scheduleID : scheduleID,
							createPsnID : createPsnID,
							multiDayFlag : 1
						});
				for (var k = 1; k <= days; k++) {
					//从开始日期一天一天往后推    dateTemp  =   beginDate  +  k
					var dateTemp = getDate(beginDate, k);
					if (k == days) {// 最后一天的日程
						scheduler.addEvent(dateTemp + " 00:00:00", end_date,k,
								text, scheduler.uid(), {
									scheduleID : scheduleID,
									createPsnID : createPsnID,
									multiDayFlag : 1
								});
					} else {
						scheduler.addEvent(dateTemp + " 00:00:00", dateTemp
								+ " 23:59:59", k,text, scheduler.uid(), {
							scheduleID : scheduleID,
							createPsnID : createPsnID,
							multiDayFlag : 1
						});
					}
				}
			} else if (days > 0 && mode == 'month') {// 跨天的日程月模式
//				//debugger;
//				var startnew = start_date.substring(0, 10);
//				var endnew = end_date.substring(0, 10);
//				var endtimenew = end_date.substring(11);
//				if (endtimenew.indexOf("00:00:00") < 0) {
//					var c = new Date(end_date.substring(0, 4), end_date
//							.substring(5, 7), end_date.substring(8, 10));
//					var d = scheduler.date.add(c, 1, "day");
//					endnew = d.getFullYear()
//							+ "-"
//							+ (d.getMonth().length > 1
//									? d.getMonth()
//									: ("0" + d.getMonth())) + "-" + d.getDate();
//				}
//				scheduler.addEvent(startnew, endnew, text, scheduler.uid(), {
//					scheduleID : scheduleID,
//					createPsnID : createPsnID,
//					multiDayFlag : 1
//				});


				// 第一天的日程
				scheduler.addEvent(start_date, start_date, 0,text,
						scheduler.uid(), {
							scheduleID : scheduleID,
							createPsnID : createPsnID,
							multiDayFlag : 1
						});
				for (var k = 1; k <= days; k++) {
					//从开始日期一天一天往后推    dateTemp  =   beginDate  +  k
					var dateTemp = getDate(beginDate, k);
					if (k == days) {// 最后一天的日程
						scheduler.addEvent(dateTemp + " 00:00:00", end_date,k,
								text, scheduler.uid(), {
									scheduleID : scheduleID,
									createPsnID : createPsnID,
									multiDayFlag : 1
								});
					} else {
						scheduler.addEvent(dateTemp + " 00:00:00", dateTemp
								+ " 23:59:59", k,text, scheduler.uid(), {
							scheduleID : scheduleID,
							createPsnID : createPsnID,
							multiDayFlag : 1
						});
					}
				}

			} else {// 非跨天的日程
				scheduler.addEvent(start_date, end_date,0, text, scheduler.uid(),
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
//只出现这一次
//function scheduleDialogReturn(params) {
//	
//	if (params.data && params.data == "ok") {
//		// TODO 判断当前的tab页，刷新数据
//		if (lastTab == "scheduleTab")
//			refreshScheduler(scheduler._mode, scheduler._date);
//		else
//			refreshListData();
//	}
//}

function openMyScheduleDialog(data) {
	
//	return '<a href="javascript:void(0)" onclick="openAndViewMySchedule(this);">'
//			+ data.value + '</a>';
}

function openAndViewMySchedule(element) {
	
//	var gridInfo = commonUtils.getGridInfoByElement(element);
//	var gridID = '';
//	if (gridInfo) {
//		gridID = gridInfo.rowId;
//	}
//	if (!gridID || gridID == '') {
//		gridID = $('listData').xfElement.getValueByName('rowid');
//	}
//	var index = $('listData').xfElement.store.getRowIndex(gridID);
//	var fMasterID = $('listData').xfElement
//			.getValueByName('fSDMasterID', index);
//	showSchedule("view", fMasterID, "日程编辑");
}

function saveSchedule(event_object){
	
	if(!event_object.scheduleID){
		//callNewSchedule(event_object);
	}else{
		//callUpdateSchedule(event_object);
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
	event_object.scheduleID = r.responseXML.selectSingleNode("/root/data").text;
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
		var mainData = justep.xbl("hrData");
		var index = mainData.getIndex();
		var fID = mainData.getRowId();
		//删除时，不能删除别人的记录
		var fCreatePsnID = "";
		var sysCreatePsnID = justep.Context.getCurrentPersonID();
		if (fCreatePsnID == sysCreatePsnID) {
			callDeleteSchedule(fID);
			justep.xbl("hrData").refreshData();
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
	
//	var fid = data.rowId;
//	var html = "<a href=\"javascript:openAndViewMySchedule('" + fid + "')\">"
//			+ data.value + "</a>";
//	return html;
}

function openAndViewMySchedule(fID) {
	
	__dialog_schedule_id = fID;
	dlgOpetator = "view";
	showSchedule("view", __dialog_schedule_id, "人员编辑");
}
// 给对话框传值
function scheduleArrangeDialogSend(event) {
	
	var params = {
		"operator" : __dialog_operator,
		"scheduleID" : __dialog_schedule_id,
		"executor" : justep.Context.getCurrentPersonName(),
		"title" : "人员安排",
		"executorID" : justep.Context.getCurrentPersonID()
	};
	return params;
}

// 接收对话框返回
function scheduleArrangeDialogReceive(obj) {
	
	//if (lastTab == "scheduleTab")
		refreshScheduler(scheduler._mode, scheduler._date);
//	else {
//		var id = obj.data;
//		var data = justep.xbl("hrData");
//		appCommon.DataUtils.refreshDataByRowIds(data, id, null);
//	}
}
function listTabSelect(event){
	
	scheduler.editStop(scheduler.config.positive_closing);
}

function addHrOccupyInfo(event){
	
	justep.xbl("dlgScheduleArrange").open();
}



/******************************************************************/






/**
	* 	@desc: constructor, data processor object 
	*	@param: serverProcessorURL - url used for update
	*	@type: public
	*/
function dataProcessor(serverProcessorURL){
	
    this.serverProcessor = serverProcessorURL;
    this.action_param="!nativeeditor_status";
    
	this.obj = null;
	this.updatedRows = []; //ids of updated rows
	
	this.autoUpdate = true;
	this.updateMode = "cell";
	this._tMode="GET"; 
	
    this._waitMode=0;
    this._in_progress={};//?
    this._invalid={};
    this.mandatoryFields=[];
    this.messages=[];
    
    this.styles={
    	updated:"font-weight:bold;",
    	inserted:"font-weight:bold;",
    	deleted:"text-decoration : line-through;",
    	invalid:"background-color:FFE0E0;",
    	invalid_cell:"border-bottom:2px solid red;",
    	error:"color:red;",
    	clear:"font-weight:normal;text-decoration:none;"
    };
    
    this.enableUTFencoding(true);
    dhtmlxEventable(this);

    return this;
    }

dataProcessor.prototype={
	/**
	* 	@desc: select GET or POST transaction model
	*	@param: mode - GET/POST
	*	@param: total - true/false - send records row by row or all at once (for grid only)
	*	@type: public
	*/

	setTransactionMode:function(mode,total){
        this._tMode=mode;
		this._tSend=total;
    },
    escape:function(data){
    	if (this._utf)
    		return encodeURIComponent(data);
    	else
        	return escape(data);
	},
    /**
	* 	@desc: allows to set escaping mode
	*	@param: true - utf based escaping, simple - use current page encoding
	*	@type: public
	*/	
	enableUTFencoding:function(mode){
        this._utf=convertStringToBoolean(mode);
    },
    /**
	* 	@desc: allows to define, which column may trigger update
	*	@param: val - array or list of true/false values
	*	@type: public
	*/
	setDataColumns:function(val){
		this._columns=(typeof val == "string")?val.split(","):val;
    },
    /**
	* 	@desc: get state of updating
	*	@returns:   true - all in sync with server, false - some items not updated yet.
	*	@type: public
	*/
	getSyncState:function(){
		return !this.updatedRows.length;
	},
	/**
	* 	@desc: enable/disable named field for data syncing, will use column ids for grid
	*	@param:   mode - true/false
	*	@type: public
	*/
	enableDataNames:function(mode){
		this._endnm=convertStringToBoolean(mode);
	},
	/**
	* 	@desc: enable/disable mode , when only changed fields and row id send to the server side, instead of all fields in default mode
	*	@param:   mode - true/false
	*	@type: public
	*/
	enablePartialDataSend:function(mode){
		this._changed=convertStringToBoolean(mode);
	},
	/**
	* 	@desc: set if rows should be send to server automaticaly
	*	@param: mode - "row" - based on row selection changed, "cell" - based on cell editing finished, "off" - manual data sending
	*	@type: public
	*/
	setUpdateMode:function(mode,dnd){
		this.autoUpdate = (mode=="cell");
		this.updateMode = mode;
		this.dnd=dnd;
	},
	/**
	* 	@desc: mark row as updated/normal. check mandatory fields,initiate autoupdate (if turned on)
	*	@param: rowId - id of row to set update-status for
	*	@param: state - true for "updated", false for "not updated"
	*	@param: mode - update mode name
	*	@type: public
	*/
	setUpdated:function(rowId,state,mode){
		var ind=this.findRow(rowId);
		
		mode=mode||"updated";
		var existing = this.obj.getUserData(rowId,this.action_param);
		if (existing && mode == "updated") mode=existing;
			
		if (state){
			this.set_invalid(rowId,false); //clear previous error flag
			this.updatedRows[ind]=rowId;
			this.obj.setUserData(rowId,this.action_param,mode);
		} else{
			if (!this.is_invalid(rowId)){
				this.updatedRows.splice(ind,1);
				this.obj.setUserData(rowId,this.action_param,"");
			}
		}

		//clear changed flag
		if (!state)
			this._clearUpdateFlag(rowId);
     			
		this.markRow(rowId,state,mode);
		if (state && this.autoUpdate) this.sendData(rowId);
	},
	_clearUpdateFlag:function(){
		if (this.obj.mytype!="tree"){
        	var row=this.obj.getRowById(rowId);
            if (row)
	      	for (var j=0; j<this.obj._cCount; j++)
         		this.obj.cells(rowId,j).cell.wasChanged=false;	//using cells because of split
     	}			
	},
	markRow:function(id,state,mode){ 
		var str="";
		var invalid=this.is_invalid(id);
		if (invalid){
        	str=this.styles[invalid];
        	state=true;
    	}
		if (this.callEvent("onRowMark",[id,state,mode,invalid])){
			//default logic
			if (state)
				str+=this.styles[mode];
			else
        		str+=this.styles.clear;
        	this.obj[this._methods[0]](id,str);

			if (invalid && invalid.details){
				str+=this.styles[invalid+"_cell"];
				for (var i=0; i < invalid.details.length; i++)
					if (invalid.details[i])
        				this.obj[this._methods[1]](id,i,str);
			}
		}
	},
	getState:function(id){
		return this.obj.getUserData(id,this.action_param);
	},
	is_invalid:function(id){
		return this._invalid[id];
	},
	set_invalid:function(id,mode,details){ 
		if (details) mode={value:mode, details:details, toString:function(){ return this.value.toString(); }};
		this._invalid[id]=mode;
	},
	/**
	* 	@desc: check mandatory fields and varify values of cells, initiate update (if specified)
	*	@param: rowId - id of row to set update-status for
	*	@type: public
	*/
	checkBeforeUpdate:function(rowId){ 
		var valid=true; var c_invalid=[];
		for (var i=0; i<this.obj._cCount; i++)
			if (this.mandatoryFields[i]){
				var res=this.mandatoryFields[i](this.obj.cells(rowId,i).getValue(),rowId,i);
				if (typeof res == "string")
					this.messages.push(res);
				else {
					valid&=res;
					c_invalid[i]=!res;
				}
			}
		if (!valid){
			this.set_invalid(rowId,"invalid",c_invalid);
			this.setUpdated(rowId,false);
		}
		return valid;
	},
	/**
	* 	@desc: send row(s) values to server
	*	@param: rowId - id of row which data to send. If not specified, then all "updated" rows will be send
	*	@type: public
	*/
	sendData:function(rowId){
		if (this._waitMode && (this.obj.mytype=="tree" || this.obj._h2)) return;
		if (this.obj.editStop) this.obj.editStop();
		if (this.obj.linked_form) this.obj.linked_form.update();
		
		
		if(typeof rowId == "undefined" || this._tSend) return this.sendAllData();
		if (this._in_progress[rowId]) return false;
		
		this.messages=[];
		if (!this.checkBeforeUpdate(rowId) && this.callEvent("onValidatationError",[rowId,this.messages])) return false;
		this._beforeSendData(this._getRowData(rowId),rowId);
    },
    _beforeSendData:function(data,rowId){
    	if (!this.callEvent("onBeforeUpdate",[rowId,this.getState(rowId)])) return false;	
		this._sendData(data,rowId);
    },
    _sendData:function(a1,rowId){
    	if (!a1) return; //nothing to send
    	if (rowId)
			this._in_progress[rowId]=(new Date()).valueOf();
	    
		if (!this.callEvent("onBeforeDataSending",rowId?[rowId,this.getState(rowId)]:[])) return false;				
		var a2=new dtmlXMLLoaderObject(this.afterUpdate,this,true);
        var a3=this.serverProcessor;

		if (this._tMode!="POST")
        	a2.loadXML(a3+((a3.indexOf("?")!=-1)?"&":"?")+a1);
		else
        	a2.loadXML(a3,true,a1);

		this._waitMode++;
    },
	sendAllData:function(){
		if (!this.updatedRows.length) return;			

		this.messages=[]; var valid=true;
		for (var i=0; i<this.updatedRows.length; i++)
			valid&=this.checkBeforeUpdate(this.updatedRows[i]);
		if (!valid && !this.callEvent("onValidatationError",["",this.messages])) return false;
	
		if (this._tSend) 
			this._sendData(this._getAllData());
		else
			for (var i=0; i<this.updatedRows.length; i++)
				if (!this._in_progress[this.updatedRows[i]]){
					if (this.is_invalid(this.updatedRows[i])) continue;
					this._beforeSendData(this._getRowData(this.updatedRows[i]),this.updatedRows[i]);
					if (this._waitMode && (this.obj.mytype=="tree" || this.obj._h2)) return; //block send all for tree
				}
	},
    
	
	
	
	
	
	
	
	_getAllData:function(rowId){
		var out=new Array();
		var rs=new Array();
		for(var i=0;i<this.updatedRows.length;i++){
			var id=this.updatedRows[i];
			if (this._in_progress[id] || this.is_invalid(id)) continue;
			if (!this.callEvent("onBeforeUpdate",[id,this.getState(id)])) continue;	
			out[out.length]=this._getRowData(id,id+"_");
			rs[rs.length]=id;
			this._in_progress[id]=(new Date()).valueOf();
		}
		if (out.length)
			out[out.length]="ids="+rs.join(",");
		return out.join("&");
	},
	_getRowData:function(rowId,pref){
		pref=(pref||"");
        if (this.obj.mytype=="tree"){
			var z=this.obj._globalIdStorageFind(rowId);
			var z2=z.parentObject;
			
			var i=0;
			for (i=0; i<z2.childsCount; i++)
				if (z2.childNodes[i]==z) break;
			
			var str=pref+"tr_id="+this.escape(z.id);
			str+="&"+pref+"tr_pid="+this.escape(z2.id);
			str+="&"+pref+"tr_order="+i;
			str+="&"+pref+"tr_text="+this.escape(z.span.innerHTML);
			
			z2=(z._userdatalist||"").split(",");
			for (i=0; i<z2.length; i++)
				str+="&"+pref+this.escape(z2[i])+"="+this.escape(z.userData["t_"+z2[i]]);

        }
        else{
           var str=pref+"gr_id="+this.escape(rowId);
		   if (this.obj.isTreeGrid())
		   str+="&"+pref+"gr_pid="+this.escape(this.obj.getParentId(rowId));

           var r=this.obj.getRowById(rowId);

           for (var i=0; i<this.obj._cCount; i++)
               {
			   if (this.obj._c_order)
			   		var i_c=this.obj._c_order[i];
			   else
				   	var i_c=i;

			   var c=this.obj.cells(r.idd,i);
			   if (this._changed && !c.wasChanged()) continue;
			   if (this._endnm)
	               str+="&"+pref+this.obj.getColumnId(i)+"="+this.escape(c.getValue());
			   else
	               str+="&"+pref+"c"+i_c+"="+this.escape(c.getValue());
               }
           var data=this.obj.UserData[rowId];
           if (data){
               for (var j=0; j<data.keys.length; j++)
                   str+="&"+pref+data.keys[j]+"="+this.escape(data.values[j]);
           }
           var data=this.obj.UserData["gridglobaluserdata"];
           if (data){
               for (var j=0; j<data.keys.length; j++)
                   str+="&"+pref+data.keys[j]+"="+this.escape(data.values[j]);
           }
           
        }
        if (this.obj.linked_form)
        	str+=this.obj.linked_form.get_serialized(rowId,pref);
    	return str;
	},
	
	
	
	
	
	
	
	
	/**
	* 	@desc: specify column which value should be varified before sending to server
	*	@param: ind - column index (0 based)
	*	@param: verifFunction - function (object) which should verify cell value (if not specified, then value will be compared to empty string). Two arguments will be passed into it: value and column name
	*	@type: public
	*/
	setVerificator:function(ind,verifFunction){
		this.mandatoryFields[ind] = verifFunction||(function(value){return (value!="");});
	},
	/**
	* 	@desc: remove column from list of those which should be verified
	*	@param: ind - column Index (0 based)
	*	@type: public
	*/
	clearVerificator:function(ind){
		this.mandatoryFields[ind] = false;
	},
	
	
	
	
	
	findRow:function(pattern){
		var i=0;
    	for(i=0;i<this.updatedRows.length;i++)
		    if(pattern==this.updatedRows[i]) break;
	    return i;
    },

   
	


    





	/**
	* 	@desc: define custom actions
	*	@param: name - name of action, same as value of action attribute
	*	@param: handler - custom function, which receives a XMl response content for action
	*	@type: private
	*/
	defineAction:function(name,handler){
	
        if (!this._uActions) this._uActions=[];
            this._uActions[name]=handler;
	},




	/**
*     @desc: used in combination with setOnBeforeUpdateHandler to create custom client-server transport system
*     @param: sid - id of item before update
*     @param: tid - id of item after up0ate
*     @param: action - action name
*     @type: public
*     @topic: 0
*/
	afterUpdateCallback:function(sid, tid, action, btag) {
	
		delete this._in_progress[sid];
		var correct=(action!="error" && action!="invalid");
		if (!correct) this.set_invalid(sid,action);
		if ((this._uActions)&&(this._uActions[action])&&(!this._uActions[action](btag))) return;
    	this.setUpdated(sid, false);
	    
	    var soid = sid;
	
	    switch (action) {
	    case "inserted":
	    case "insert":
	        if (tid != sid) {
	            this.obj[this._methods[2]](sid, tid);
	            sid = tid;
	        }
	        break;
	    case "delete":
	    case "deleted":
	    	this.obj.setUserData(sid, this.action_param, "true_deleted");
	        this.obj[this._methods[3]](sid);
	        return this.callEvent("onAfterUpdate", [sid, action, tid, btag]);
	        break;
	    }
	    //???
	    if (correct) this.obj.setUserData(sid, this.action_param,'');
	    this.callEvent("onAfterUpdate", [sid, action, tid, btag]);
	},

	/**
	* 	@desc: response from server
	*	@param: xml - XMLLoader object with response XML
	*	@type: private
	*/
	afterUpdate:function(that,b,c,d,xml){
	
		xml.getXMLTopNode("data"); //fix incorrect content type in IE
		if (!xml.xmlDoc.responseXML) return;
		var atag=xml.doXPath("//data/action");
		for (var i=0; i<atag.length; i++){
        	var btag=atag[i];
			var action = btag.getAttribute("type");
			var sid = btag.getAttribute("sid");
			var tid = btag.getAttribute("tid");
			
		    
			that.afterUpdateCallback(sid,tid,action,btag);
		}
		if (that._waitMode) that._waitMode--;
		
		if ((that.obj.mytype=="tree" || that.obj._h2) && that.updatedRows.length) 
			that.sendData();
		that.callEvent("onAfterUpdateFinish",[]);
		if (!that.updatedRows.length)
			that.callEvent("onFullSync",[]);
	},




	
	/**
	* 	@desc: initializes data-processor
	*	@param: anObj - dhtmlxGrid object to attach this data-processor to
	*	@type: public
	*/
	init:function(anObj){
		////debugger;
		this.obj = anObj;
		if (this.obj._dp_init) return this.obj._dp_init(this);
		var self = this;
		
        if (this.obj.mytype=="tree"){
        	this._methods=["setItemStyle","","changeItemId","deleteItem"];
            this.obj.attachEvent("onEdit",function(state,id){
                if (state==3)
                    self.setUpdated(id,true);
                return true;
            });
            this.obj.attachEvent("onDrop",function(id,id_2,id_3,tree_1,tree_2){
                if (tree_1==tree_2)
                	self.setUpdated(id,true);
            });
    		this.obj._onrdlh=function(rowId){
    			if (self.getState(rowId)=="true_deleted")
    				return true;
    			self.setUpdated(rowId,true,"deleted");
    			return false;
    		};
    		this.obj._onradh=function(rowId){
    			self.setUpdated(rowId,true,"inserted");
    		};
        }
        else{
        	this._methods=["setRowTextStyle","setCellTextStyle","changeRowId",,"deleteRow"];
      		this.obj.attachEvent("onEditCell",function(state,id,index){
      			if (self._columns && !self._columns[index]) return true;
      			var cell = self.obj.cells(id,index);
      			if(state==1){
					if(cell.isCheckbox()){
      					self.setUpdated(id,true);
      				}
      			}else if(state==2){
      				if(cell.wasChanged()){
						self.setUpdated(id,true);
      				}
      			}
                return true;
      		});
      		this.obj.attachEvent("onRowPaste",function(id){
      			self.setUpdated(id,true);
  			});
  			this.obj.attachEvent("onRowIdChange",function(id,newid){
  				var ind=self.findRow(id);
  				if (ind<self.updatedRows.length)
      				self.updatedRows[ind]=newid;
  			});
      		this.obj.attachEvent("onSelectStateChanged",function(rowId){
      			if(self.updateMode=="row")
      				self.sendData();
                    return true;
      		});
      		this.obj.attachEvent("onEnter",function(rowId,celInd){
      			if(self.updateMode=="row")
      				self.sendData();
                    return true;
      		});
      		this.obj.attachEvent("onBeforeRowDeleted",function(rowId){
      			if (this.dragContext && self.dnd) {
      				window.setTimeout(function(){
      					self.setUpdated(rowId,true);
  					},1);
      				return true;
  				}
                var z=self.getState(rowId);
				if (this._h2){
      				this._h2.forEachChild(rowId,function(el){
      					self.setUpdated(el.id,false);
      					self.markRow(el.id,true,"deleted");
  					},this);
      			}
    			if (z=="inserted") {  self.setUpdated(rowId,false);		return true; }
    			if (z=="deleted")  return false;
    			if (z=="true_deleted")  return true;

      			self.setUpdated(rowId,true,"deleted");
      			return false;
      		});
      		this.obj.attachEvent("onRowAdded",function(rowId){
      			if (this.dragContext && self.dnd) return true;
				self.setUpdated(rowId,true,"inserted");
                return true;
      		});
      		this.obj.on_form_update=function(id){
				self.setUpdated(id,true);
				return true;
			};
        }
	},
	
	
	link_form:function(obj){
		obj.on_update=this.obj.on_form_update;
	},
	setOnAfterUpdate:function(ev){
		this.attachEvent("onAfterUpdate",ev);
	},
	enableDebug:function(mode){
	},
	setOnBeforeUpdateHandler:function(func){  
		this.attachEvent("onBeforeDataSending",func);
	}
};
//(c)dhtmlx ltd. www.dhtmlx.com


dataProcessor.prototype._o_init = dataProcessor.prototype.init;
dataProcessor.prototype.init=function(obj){

    this._console=this._console||this._createConsole();
    this.attachEvent("onValidatationError",function(rowId){
    	this._log("Validation error for ID="+(rowId||"[multiple]"));
    	return true;
	});
    return this._o_init(obj);
};

dataProcessor.prototype._createConsole=function(){

    var c=document.createElement("DIV");
    c.style.cssText='width:450px; height:420px; overflow:auto; position:absolute; z-index:99999; background-color:white; top:0px; right:0px; border:1px dashed black; font-family:Tahoma; Font-size:10pt;';
    c.innerHTML="<div style='width:100%; background-color:gray; font-weight:bold; color:white;'><span style='cursor:pointer;float:right;' onclick='this.parentNode.parentNode.style.display=\"none\"'><sup>[close]&nbsp;</sup></span><span style='cursor:pointer;float:right;' onclick='this.parentNode.parentNode.childNodes[2].innerHTML=\"\"'><sup>[clear]&nbsp;</sup></span>&nbsp;DataProcessor</div><div style='width:100%; height:200px; overflow-Y:scroll;'>&nbsp;Current state</div><div style='width:100%; height:200px; overflow-Y:scroll;'>&nbsp;Log:</div>";
    if (document.body) document.body.insertBefore(c,document.body.firstChild);
    else dhtmlxEvent(window,"load",function(){
        document.body.insertBefore(c,document.body.firstChild);
    });    
    dhtmlxEvent(window,"dblclick",function(){ 
        c.style.display='';
    });    
    return c;
};

dataProcessor.prototype._error=function(data){

	this._log("<span style='color:red'>"+data+"</span>");
};
dataProcessor.prototype._log=function(data){

	var div=document.createElement("DIV");
	div.innerHTML = data;
	var parent=this._console.childNodes[2];
    parent.appendChild(div);
    parent.scrollTop=parent.scrollHeight;
    
    if (window.console && window.console.log)
    	window.console.log("DataProcessor :: "+data.replace("&nbsp;"," ").replace("<b>","").replace("</b>",""));
    
};
dataProcessor.prototype._updateStat=function(data){

    var data=["&nbsp;Current state"];
    for(var i=0;i<this.updatedRows.length;i++)
	    data.push("&nbsp;ID:"+this.updatedRows[i]+" Status: "+(this.obj.getUserData(this.updatedRows[i],"!nativeeditor_status")||"updated")+", "+(this.is_invalid(this.updatedRows[i])||"valid"));
	this._console.childNodes[1].innerHTML=data.join("<br/>")+"<hr/>Current mode: "+this.updateMode;
};
dataProcessor.prototype.xml_analize=function(xml){

	if (_isFF){
		if (!xml.xmlDoc.responseXML)
			this._error("Not an XML, probably incorrect content type specified ( must be text/xml ), or some text output was started before XML data");
		else if (xml.xmlDoc.responseXML.firstChild.tagName=="parsererror")
			this._error(xml.xmlDoc.responseXML.firstChild.textContent);
		else return true;
	} else if (_isIE){
		if (xml.xmlDoc.responseXML.parseError.errorCode)
			this._error("XML error : "+xml.xmlDoc.responseXML.parseError.reason);
		else if (!xml.xmlDoc.responseXML.documentElement) 
			this._error("Not an XML, probably incorrect content type specified ( must be text/xml ), or some text output was started before XML data");
		else return true;
	}
	return false;
};

dataProcessor.wrap=function(name,before,after){

	var d=dataProcessor.prototype;
	if (!d._wrap) d._wrap={};
	d._wrap[name]=d[name];
	d[name]=function(){
		if (before) before.apply(this,arguments);
		var res=d._wrap[name].apply(this,arguments);
		if (after) after.apply(this,[arguments,res]);
		return res;
	};
};

dataProcessor.wrap("setUpdated",function(rowId,state,mode){

	this._log("&nbsp;row <b>"+rowId+"</b> "+(state?"marked":"unmarked")+" ["+(mode||"updated")+","+(this.is_invalid(rowId)||"valid")+"]");
},function(){
	this._updateStat();
});



dataProcessor.wrap("sendData",function(rowId){

	if (rowId){
		this._log("&nbsp;Initiating data sending for <b>"+rowId+"</b>");
		if (this.obj.mytype=="tree"){
        	if (!this.obj._idpull[rowId])
	    		this._log("&nbsp;Error! item with such ID not exists <b>"+rowId+"</b>");
		} else {
			if (!this.obj.rowsAr[rowId])
	        	this._log("&nbsp;Error! row with such ID not exists <b>"+rowId+"</b>");
        }
	}
},function(){
	
});

dataProcessor.wrap("sendAllData",function(){

	this._log("&nbsp;Initiating data sending for <b>all</b> rows ");
},function(){
	
});

dataProcessor.wrap("_sendData",function(url,rowId){

	if (rowId)
		this._log("&nbsp;Sending in one-by-one mode, current ID = "+rowId);
	else
		this._log("&nbsp;Sending all data at once");
	this._log("&nbsp;Server url: "+this.serverProcessor+" <a onclick='this.parentNode.nextSibling.firstChild.style.display=\"block\"' href='#'>parameters</a>");
	this._log("<blockquote style='display:none;'>"+url.replace(/\&/g,"<br/>")+"<blockquote>");
},function(){
	
});


dataProcessor.wrap("afterUpdate",function(that,b,c,d,xml){

	that._log("&nbsp;Server response received <a onclick='this.nextSibling.style.display=\"block\"' href='#'>details</a><blockquote style='display:none'><code>"+(xml.xmlDoc.responseText||"").replace(/\&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</code></blockquote>");			
	if (!that.xml_analize(xml)) return;
	var atag=xml.doXPath("//data/action");
	if (!atag){
		that._log("&nbsp;No actions found");
		var atag=xml.getXMLTopNode("data");
		if (!atag) that._log("&nbsp;XML not valid");
		else that._log("&nbsp;Incorrect content type - need to be text/xml"); 
	}
},function(){
	
});

dataProcessor.wrap("afterUpdateCallback",function(sid,tid,action){
	if (this.obj.mytype=="tree"){
		if (!this.obj._idpull[sid]) this._log("Incorrect SID, item with such ID not exists in grid");
	} else {
		if (!this.obj.rowsAr[sid]) this._log("Incorrect SID, row with such ID not exists in grid");
	}
	this._log("&nbsp;Action: "+action+" SID:"+sid+" TID:"+tid);
},function(){
	
});








if (window.dhtmlXGridObject){
	dhtmlXGridObject.prototype._init_point_connector=dhtmlXGridObject.prototype._init_point;
	dhtmlXGridObject.prototype._init_point=function(){
		var clear_url=function(url){
			url=url.replace(/(\?|\&)connector[^\f]*/g,"");
			return url+(url.indexOf("?")!=-1?"&":"?")+"connector=true";
		};
		var combine_urls=function(url){
			return clear_url(url)+(this._connector_sorting||"")+(this._connector_filter||"");
		};
		var sorting_url=function(url,ind,dir){
			this._connector_sorting="&sort_ind="+ind+"&sort_dir="+dir;
			return combine_urls.call(this,url);
		};
		var filtering_url=function(url,inds,vals){
			this._connector_filter="&filter="+this._cCount+"&";
			for (var i=0; i<inds.length; i++)
				inds[i]="col"+inds[i]+"="+encodeURIComponent(vals[i]);
			this._connector_filter+=inds.join("&");
			return combine_urls.call(this,url);
		};
		this.attachEvent("onCollectValues",function(ind){
				if (this._server_lists && this._server_lists[ind])
					return this._server_lists[ind];
				return true;
		});		
		this.attachEvent("onBeforeSorting",function(ind,type,dir){
			if (type=="connector"){
				var self=this;
				this.clearAndLoad(sorting_url.call(this,this.xmlFileUrl,ind,dir),function(){
					self.setSortImgState(true,ind,dir);
				});
				return false;
			}
			return true;
		});
		this.attachEvent("onFilterStart",function(a,b){
			if (this._connector_filter_used){
				this.clearAndLoad(filtering_url.call(this,this.xmlFileUrl,a,b));
				return false;
			}
			return true;
		});
		this.attachEvent("onXLE",function(a,b,c,xml){
			if (!xml) return;
			
			var form=this.getUserData("","!linked_form");
			
			if (form && (form=document.forms[form]) && !form.dhtmlx){
				this.linked_form=new dhtmlXForm(form.name,this.xmlFileUrl);
				this.attachEvent("onRowSelect",function(id){
					this.linked_form.load(id);
					return;
				});
				if (this.on_form_update) this.linked_form.on_update=this.on_form_update;
			}
			
			if (!this._server_lists){
				var selects=this.xmlLoader.doXPath("//options",xml);
				if (selects) this._server_lists=[];
				for (var i=0; i < selects.length; i++) {
					var ind = selects[i].getAttribute("for");
					var opts = this.xmlLoader.doXPath("./option",selects[i]);
					var result = [];
					for (var k=0; k < opts.length; k++) {
						result[k]=opts[k].firstChild?opts[k].firstChild.data:"";
					};
					this._server_lists[ind]=result;
					this._loadSelectOptins(this.getFilterElement(ind),ind);
				};
			}
			//we are using server side defined filters, so blocking filter updates
			if (this.refreshFilters) this._loadSelectOptins=function(){};
		});
		
		if (this._init_point_connector) this._init_point_connector();
	};
	dhtmlXGridObject.prototype._in_header_connector_text_filter=function(t,i){
		this._connector_filter_used=true;
		return this._in_header_text_filter(t,i);
	};
	dhtmlXGridObject.prototype._in_header_connector_select_filter=function(t,i){
		this._connector_filter_used=true;
		return this._in_header_select_filter(t,i);
	};
}

if (window.dataProcessor){
	dataProcessor.prototype.init_original=dataProcessor.prototype.init;
	dataProcessor.prototype.init=function(obj){
		this.init_original(obj);
		obj._dataprocessor=this;
		
		this.setTransactionMode("POST",true);
		this.serverProcessor+=(this.serverProcessor.indexOf("?")!=-1?"&":"?")+"editing=true";
	};
}

dhtmlxError.catchError("LoadXML",function(a,b,c){
	alert(c[0].responseText);
});

//初始化数据，默认显示当前时间所在的周数据
window.dhtmlXScheduler=window.scheduler={};
scheduler.init=function(id,date,mode){
	//第一次加载为当前时间
	date=date||(new Date());
	mode=mode||"week";
	//id="schedulerComponent"  document.getElementById(id)= "\n\t\t\t\t\t\t\t\t\t\t<div class=\"dhx_cal_navline\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dhx_cal_prev_button\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dhx_cal_next_button\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dhx_cal_today_button\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"dhx_cal_date\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"right: 204px;\" class=\"dhx_cal_tab\" name=\"day_tab\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"right: 140px;\" class=\"dhx_cal_tab\" name=\"week_tab\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div style=\"right: 76px;\" class=\"dhx_cal_tab\" name=\"month_tab\">\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"dhx_cal_header\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div id=\"scheduleDataDIV\" class=\"dhx_cal_data\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t"
	//this._obj为日历的各个部件
	this._obj=(typeof id == "string")?document.getElementById(id):id;
	this._els=[];
	this._scroll=true;
	//Quirks Mode是一种浏览器（像IE，Firefox，Opera）操作模式。从根本上说，怪异模式（也称之为兼容模式）意味着一个相对新的浏览器故意模拟许多在旧浏览器中存在的bug，特别是在IE4和IE5中。
	//Quirks Mode的目标是使旧页面显示出他们的作者想要的那样。旧页面可能利用旧浏览器已知的特性写成，或者至少是适应旧浏览器。
	this._quirks=(_isIE && document.compatMode == "BackCompat");
	this._quirks7=(_isIE && navigator.appVersion.indexOf("MSIE 8")==-1);
	
	dhtmlxEventable(this);
	
	this.init_templates();
	this.get_elements();	
	this.set_actions();
	dhtmlxEvent(window,"resize",function(){
		window.clearTimeout(scheduler._resize_timer);
		scheduler._resize_timer=window.setTimeout(function(){
			scheduler.update_view();
		}, 100);
	});
	
	this.set_sizes();
	this.setCurrentView(date,mode);
};
scheduler.xy={
	nav_height:22,
	scale_left:50,
	scroll_width:18,
	scale_height:20
};
scheduler.set_sizes=function(){
	var w = this._x = this._obj.clientWidth;
	var h = this._y = this._obj.clientHeight;
	if(this._table_view){
		w = 3140 ;
	}
	//not-table mode always has scroll - need to be fixed in future
	//var scale_x=this._table_view?0:(this.xy.scale_left+this.xy.scroll_width);
	var scale_x=this.xy.scale_left+this.xy.scroll_width;
	//var scale_s=this._table_view?-1:this.xy.scale_left;
	var scale_s=this.xy.scale_left;
	var data_y=this.xy.scale_height+this.xy.nav_height+(this._quirks?-2:0);
	
	this.set_xy(this._els["dhx_cal_navline"][0],w,this.xy.nav_height,0,0);
	this.set_xy(this._els["dhx_cal_header"][0],w-scale_x,this.xy.scale_height,scale_s,this.xy.nav_height+(this._quirks?-1:1));
	this.set_xy(this._els["dhx_cal_data"][0],w,h-(data_y+2),0,data_y+2);
};
scheduler.set_xy=function(node,w,h,x,y){

	node.style.width=(w<0?0:w)+"px";//w出现了小于0 的情况
	node.style.height=(h<0?0:h)+"px";//h出现了小于0的情况
	if (arguments.length>3){
		node.style.left=x+"px";
		node.style.top=y+"px";	
	}
};
scheduler.get_elements=function(){

	//get all child elements as named hash
	var els=this._obj.getElementsByTagName("DIV");
	for (var i=0; i < els.length; i++){
		var name=els[i].className;
		if (!this._els[name]) this._els[name]=[];
		this._els[name].push(els[i]);
		
		//check if name need to be changed
		var t=scheduler.locale.labels[els[i].getAttribute("name")||name];
		if (t) els[i].innerHTML=t;
	}
};
scheduler.set_actions=function(){
	for (var a in this._els)
		if (this._click[a])
			for (var i=0; i < this._els[a].length; i++)
				if(a!="dhx_cal_data"){
					this._els[a][i].onclick=scheduler._click[a];
				}
				
	this._obj.onselectstart=function(e){ return false; };
	this._obj.onmousemove=function(e){
		//scheduler._on_mouse_move(e||event);
	};
	this._obj.onmousedown=function(e){
		scheduler._on_mouse_down(e||event);
	};
	this._obj.onmouseup=function(e){
		scheduler._on_mouse_up(e||event);
	};
	this._obj.ondblclick=function(e){
		scheduler._on_dbl_click(e||event);
	};
};
scheduler.select=function(id){

	if (this._table_view) return; //temporary block
	if (this._select_id==id) return;
	this.editStop(false);
	this.unselect();
	this._select_id = id;
	this.updateEvent(id);
};
scheduler.unselect=function(id){

	if (id && id!=this._select_id) return;
	var t=this._select_id;
	this._select_id = null;
	if (t) 
	this.updateEvent(t);
};
scheduler._click={

		dhx_cal_data:function(e){
			
		var trg = e?e.target:event.srcElement;
		var id = scheduler._locate_event(trg);
		if (id) {
			scheduler.callEvent("onClick",[id,(e||event)]);
			scheduler.select(id);
			var mask = trg.className;
			if (mask.indexOf("_icon")!=-1)
				scheduler._click.buttons[mask.split(" ")[1].replace("icon_","")](id);
			} else if (new Date().valueOf()-(scheduler._new_event||0) > 500 && scheduler._edit_id){
				var c=scheduler.locale.labels.confirm_closing;
					if (!c || confirm(c))
						scheduler.editStop(scheduler.config.positive_closing);
				}
	},
	dhx_cal_prev_button:function(){
		scheduler.setCurrentView(scheduler.date.add(scheduler._date,-1,scheduler._mode));
	},
	dhx_cal_next_button:function(){
		scheduler.setCurrentView(scheduler.date.add(scheduler._date,1,scheduler._mode));
	},
	dhx_cal_today_button:function(){
		scheduler.setCurrentView(new Date());
	},
	dhx_cal_tab:function(){
		var mode = this.getAttribute("name").split("_")[0];
		scheduler.setCurrentView(scheduler._date,mode);
	},
	buttons:{
		"delete":function(id){ var c=scheduler.locale.labels.confirm_deleting; if (!c||confirm(c)) scheduler.deleteEvent(id); },
		edit:function(id){ scheduler.edit(id); },
		save:function(id){ scheduler.editStop(true); },
		details:function(id){
		 //scheduler.showLightbox(id); 
		 },
		cancel:function(id){ scheduler.editStop(false); }
	}
};
scheduler._on_dbl_click=function(e){

	var src = e.target||e.srcElement;
	switch(src.className.split(" ")[0]){
		case "dhx_scale_holder":
		case "dhx_scale_holder_now":
		//双击空白处新建占用信息
		case "dhx_month_body":
//			if (!scheduler.config.drag_create) break;
//			var pos=this._mouse_coords(e);
//			var start=this._min_date.valueOf()+(pos.y*this.config.time_step+(this._table_view?0:pos.x)*24*60)*60000;
//			var end = start+this.config.time_step*60000;
//			this._drag_id=this.uid();
//			this._drag_mode="new-size";
//			this._loading=true;
//			this.addEvent(new Date(start), new Date(end),this.locale.labels.new_event,this._drag_id);		
//			this._loading=false;
//			this._on_mouse_up(e);		
			break;
		case "dhx_body":
//			var id = this._locate_event(src);
//			if (this.config.details_on_dblclick)
//				this.showLightbox(id);
//			else
//				this.edit(id);
//			break;
		case "dhx_cal_event_line":
		case "dhx_cal_event_clear":
			var id = this._locate_event(src);
			//this.showLightbox(id);
			break;
	}
};
scheduler._mouse_coords=function(ev){

	var pos;
	if(ev.pageX || ev.pageY)
	    pos={x:ev.pageX, y:ev.pageY};
	else pos={
	    x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
	    y:ev.clientY + document.body.scrollTop  - document.body.clientTop
	};
	//apply layout
	pos.x-=getAbsoluteLeft(this._obj)+(this._table_view?0:this.xy.scale_left);
	pos.y-=getAbsoluteTop(this._obj)+this.xy.nav_height+this.xy.scale_height-this._els["dhx_cal_data"][0].scrollTop;
	//transform to date
//	if (!this._table_view){
//		pos.x=Math.max(0,Math.ceil(pos.x/this._cols[0])-1);
//		pos.y=Math.max(0,Math.ceil(pos.y*60/(this.config.time_step*this.config.hour_size_px))-1)+this.config.first_hour*(60/this.config.time_step);
//	} else {
//		
//		pos.y=(Math.max(0,Math.ceil(pos.x/this._cols[0])-1)+Math.max(0,Math.ceil(pos.y/this._colsS.height)-1)*7)*24*60/this.config.time_step; 
//		pos.x=0;
//	}
	pos.x=Math.max(0,Math.ceil(pos.x/this._cols[0])-1);
	pos.y=Math.max(0,Math.ceil(pos.y*60/(this.config.time_step*this.config.hour_size_px))-1)+this.config.first_hour*(60/this.config.time_step);
	return pos;
};
scheduler._on_mouse_move=function(e){
	if (this._drag_mode){
		var pos=this._mouse_coords(e);
		if (!this._drag_pos || this._drag_pos.x!=pos.x || this._drag_pos.y!=pos.y){
			this._drag_pos=pos;
			
			if (this._drag_mode=="create"){
				this._loading=true; //will be ignored by dataprocessor
				
				var start=this._min_date.valueOf()+(pos.y*this.config.time_step+(this._table_view?0:pos.x)*24*60)*60000;
				if (!this._drag_start){
					this._drag_start=start; return; 
				}
				var end = start;
				if (end==this._drag_start) return;
				
				this._drag_id=this.uid();
				this.addEvent(new Date(this._drag_start), new Date(end),this.locale.labels.new_event,this._drag_id);
				this._loading=false;
				this._drag_mode="new-size";
				
			} 

			var ev=this.getEvent(this._drag_id);
			var start,end;
			if (this._drag_mode=="move"){
				start = this._min_date.valueOf()+(pos.y*this.config.time_step+pos.x*24*60)*60000;
				end = ev.end_date.valueOf()-(ev.start_date.valueOf()-start);
			} else {
				start = ev.start_date.valueOf();
				if (this._table_view)
					end = this._min_date.valueOf()+(pos.y+(24*60/this.config.hour_size_px))*this.config.time_step*60000;
				else
					end = this.date.date_part(ev.end_date).valueOf()+pos.y*this.config.time_step*60000;
				if (this._drag_mode == "new-size"){ 
					if (end <= this._drag_start){
						start = end;
						end = this._drag_start;
					} 
				} else if (end<=start) 
					end=start+this.config.time_step*60000;
			}
			
			ev.start_date=new Date(start);
			ev.end_date=new Date(end);
			this.updateEvent(this._drag_id);
		}
	}
};
scheduler._on_mouse_down=function(e){
	var src = e.target||e.srcElement;
		switch(src.className.split(" ")[0]){
		case "dhx_cal_event_line":
			this._drag_mode="move"; //item in table mode
			break;
		case "dhx_header":
		case "dhx_title":
			this._drag_mode="move"; //item in table mode
			break;
		case "dhx_footer":
			this._drag_mode="resize"; //item in table mode
			break;
		case "dhx_scale_holder":
		case "dhx_scale_holder_now":
		case "dhx_month_body":
			//this._drag_mode="create";
			break;
		default:
			this._drag_mode=null;
			this._drag_id=null;
	}
	if (this._drag_mode){
		if (!this.config["drag_"+this._drag_mode])
			this._drag_mode=this._drag_id=0;
		else {
			this._drag_id=this._locate_event(src);
			this._drag_event=this._copy_event(this.getEvent(this._drag_id)||{});
		}
	}
	this._drag_start=null;
};
scheduler._on_mouse_up=function(e){
//	if (this._drag_mode && this._drag_id){
//		var ev=this.getEvent(this._drag_id);
//		if (!this._drag_event.start_date || ev.start_date.valueOf()!=this._drag_event.start_date.valueOf() || ev.end_date.valueOf()!=this._drag_event.end_date.valueOf()){
//			var is_new=(this._drag_mode=="new-size");
//			if (is_new && this.config.edit_on_create){
//				this.unselect();
//				//this._new_event=new Date();//timestamp of creation
//				if (this._table_view || this.config.edit_on_create_details) {
//					this._drag_mode=null;
//					//return this.showLightbox(this._drag_id);
//				}
//				this._select_id=this._edit_id=this._drag_id;
//			}else
//				this.callEvent(is_new?"onEventAdded":"onEventChanged",[this._drag_id,this.getEvent(this._drag_id)]);
//			this.render_view_data();
//		}
//	}
	this._drag_mode=null;
};
//设置日历的大小模式
scheduler.update_view=function(){
	this.set_sizes();
	this._reset_scale();
	if (this._load_mode && !this._loaded[this._load_format(this._load_date(this._date))]){
		this._load();
	} else
		this.render_view_data();
};
scheduler.setCurrentView=function(date,mode){
if (!this.callEvent("onBeforeViewChange",[this._mode,this._date,mode,date])) return;
	this._mode=mode||this._mode;
	this._date=date;
	this._table_view=(this._mode=="month");
	
	var tabs=this._els["dhx_cal_tab"];
	for (var i=0; i < tabs.length; i++) {
		//tabs[i].className="dhx_cal_tab"+((tabs[i].getAttribute("name")==this._mode+"_tab")?" active":"");
		tabs[i].className="dhx_cal_tab";
	};
	this.update_view();
	this.callEvent("onViewChange",[this._mode,this._date]); 
};

//处理头部日期
scheduler._reset_scale=function(){
	//debugger;
		var d,dd,sd,today;
	//dd ：一周/一月的第一天
	dd=this.date[this._mode+"_start"](new Date(this._date.valueOf()));//按照标准日历格式，从周日开始，上月日期发灰显示
	//d=sd=this._table_view?scheduler.date.week_start(dd):dd;
	d=sd=dd;
	today=this.date.date_part(new Date());
	
	//reset date in header
	//ed ：一周/一月的最后一天
	var ed=scheduler.date.add(dd,1,this._mode);

	
	monthDays = Math.abs(Math.round((dd.valueOf()-ed.valueOf())/60/60/1000/24));
	var count=7;
	if(this._mode=="day"){
		count =1;
	}else if(this._mode=="month"){
		count = monthDays;
	}
	//var count=(this._mode=="day"?1:7);
	var h=this._els["dhx_cal_header"][0];//头部日期
	var b=this._els["dhx_cal_data"][0];//中间数据
	h.innerHTML="";
	b.innerHTML="";
		
	this._cols=[];	//store for data section
	this.set_sizes();
	var summ=parseInt(h.style.width); //border delta
//	if(this._table_view){
//		summ=3000;
//	}
	var left=0;
	//显示月份标签
	this._els["dhx_cal_date"][0].innerHTML=this.templates[this._mode+"_date"](dd,ed,this._mode);
	var hrBaseData =  justep.xbl("hrBaseData");
	
	//this._min_date=d;
	this._min_date=dd;
	for (var i=0; i<count; i++){
		this._cols[i]=Math.floor(summ/(count-i));//每天的宽度
		//header scale	
		var c=document.createElement("DIV"); c.className="dhx_scale_bar";
		this.set_xy(c,this._cols[i]-1,20,left,0);//-1 for border
		//c.innerHTML=this.templates[this._mode+"_scale_date"](d,this._mode); //TODO - move in separate method
		//c.innerHTML=this.templates[this._mode+"_scale_date"](dd,this._mode); 
		c.innerHTML=this.templates["week_scale_date"](d,"week");
		h.appendChild(c);
		
		//if (!this._table_view){
		var data=document.createElement("DIV"); data.className="dhx_scale_holder";
		if (d.valueOf()==today.valueOf()) data.className="dhx_scale_holder_now";
		else data.className="dhx_scale_holder";
		this.set_xy(data,this._cols[i]-1,this.config.hour_size_px*(hrBaseData.getCount()),left+51,0);//-1 for border
		b.appendChild(data);
		//}
		
		d=this.date.add(d,1,"day");
		summ-=this._cols[i];
		left+=this._cols[i];
	}
	this._max_date=d;
	
//	if (this._table_view)
//		this._reset_month_scale(b,dd,sd);
//	else
		this._reset_hours_scale(b,dd,sd);
};

//处理左边时间小时
scheduler._reset_hours_scale=function(b,dd,sd){
debugger;
	var c=document.createElement("DIV");
	c.className="dhx_scale_holder";
	var hrBaseData =  justep.xbl("hrBaseData");
	//var date = new Date(1980,1,1,this.config.first_hour,0,0);

//	for (var i=this.config.first_hour; i < this.config.last_hour; i++) {
//		var cc=document.createElement("DIV");
//		cc.className="dhx_scale_hour";
//		cc.style.height=this.config.hour_size_px-(this._quirks?0:1)+"px";
//		cc.innerHTML=scheduler.templates.hour_scale(date);
//		c.appendChild(cc);
//		date=this.date.add(date,1,"hour");
//	};
	
	for (var i=0; i < hrBaseData.getCount(); i++) {
		var hrRowId = hrBaseData.getRowId(i);
		var cc=document.createElement("DIV");
		cc.className="dhx_scale_hour";
		cc.style.height=this.config.hour_size_px-(this._quirks?0:1)+"px";
		cc.innerHTML = hrBaseData.getValue("tOOLCNAME", hrRowId);//工具名称
		c.appendChild(cc);
		data[i] = hrRowId+"."+ i;
	};
	
	b.appendChild(c);
};
scheduler._reset_month_scale=function(b,dd,sd){
	//debugger;
	var ed=scheduler.date.add(dd,1,"month");
	
	//trim time part for comparation reasons
	var cd=new Date();
	//取当前日期时间部分
	this.date.date_part(cd);
	//取开始日期的时间部分
	this.date.date_part(sd);
	
	var rows=Math.ceil((ed.valueOf()-sd.valueOf())/(60*60*24*1000*7));
	var tdcss=[];
	var height=(Math.floor(b.clientHeight/rows)-22);
	
	this._colsS={height:height+22};
	for (var i=0; i<=7; i++){
		tdcss[i]=" style='height:"+height+"px; width:"+((this._cols[i]||0)-1)+"px;' ";
		this._colsS[i]=(this._cols[i-1]||0)+(this._colsS[i-1]||0);
	}
	
	
	
	
	this._min_date=sd;
	var html="<table cellpadding='0' cellspacing='0'>";
	for (var i=0; i<rows; i++){
		html+="<tr>";
			for (var j=0; j<7; j++){
				html+="<td";
				if (sd<dd)
					html+=" class='dhx_before' ";
				else if (sd>=ed)
					html+=" class='dhx_after' ";
				else if (sd.valueOf()==cd.valueOf())
					html+=" class='dhx_now' ";
				html+="><div class='dhx_month_head'>"+this.templates.month_day(sd)+"</div><div class='dhx_month_body' "+tdcss[j]+"></div></td>";
				sd=this.date.add(sd,1,"day");
			}
		html+="</tr>";
	}
	html+="</table>";
	this._max_date=sd;
	
	b.innerHTML=html;	
};

scheduler.date={
	date_part:function(date){
	
		date.setHours(0);
		date.setMinutes(0);
		date.setSeconds(0);
		date.setMilliseconds(0);	
		return date;
	},
	week_start:function(date){
			var shift=date.getDay();
			if (scheduler.config.start_on_monday){
				if (shift==0) shift=6;
				else shift--;
			}
			return this.date_part(this.add(date,-1*shift,"day"));
	},
	month_start:function(date){
		date.setDate(1);
		return this.date_part(date);
	},
	year_start:function(date){
		date.setMonth(0);
		return this.month_start(date);
	},
	day_start:function(date){
			return this.date_part(date);
	},
	add:function(date,inc,mode){
		var ndate=new Date(date.valueOf());
		switch(mode){
			case "day": ndate.setDate(ndate.getDate()+inc); break;
			case "week": ndate.setDate(ndate.getDate()+7*inc); break;
			case "month": ndate.setMonth(ndate.getMonth()+inc); break;
			case "year": ndate.setYear(ndate.getYear()+inc); break;
			case "hour": ndate.setHours(ndate.getHours()+inc); break;
			case "minute": ndate.setMinutes(ndate.getMinutes()+inc); break;
		}
		return ndate;
	},
	to_fixed:function(num){
		if (num<10)	return "0"+num;
		return num;
	},
	copy:function(date){
		return new Date(date.valueOf());
	},
	date_to_str:function(format,utc){
		format=format.replace(/%[a-zA-Z]/g,function(a){
			switch(a){
				case "%d": return "\"+date.getDate()+\"";
				case "%m": return "\"+(date.getMonth()+1)+\"";
				case "%y": return "\"+date.getYear()+\"";
				case "%Y": return "\"+date.getFullYear()+\"";
				case "%D": return "\"+scheduler.locale.date.day_short[date.getDay()]+\"";
				case "%l": return "\"+scheduler.locale.date.day_full[date.getDay()]+\"";
				case "%M": return "\"+scheduler.locale.date.month_short[date.getMonth()]+\"";
				case "%F": return "\"+scheduler.locale.date.month_full[date.getMonth()]+\"";
				case "%h": return "\"+scheduler.date.to_fixed((date.getHours()%12))+\"";
				case "%H": return "\"+scheduler.date.to_fixed(date.getHours())+\"";
				case "%i": return "\"+scheduler.date.to_fixed(date.getMinutes())+\"";
				case "%a": return "\"+(date.getHours()>12?\"am\":\"pm\")+\"";
				case "%A": return "\"+(date.getHours()>12?\"AM\":\"PM\")+\"";
				default: return a;
			}
		});
		if (utc) format=format.replace(/date\.get/g,"date.getUTC");
		return new Function("date","return \""+format+"\";");
	},
	str_to_date:function(format,utc){
		var splt="var temp=date.split(/[^0-9]+/g);";
		var mask=format.match(/%[a-zA-Z]/g);
		for (var i=0; i<mask.length; i++){
			switch(mask[i]){
				case "%d": splt+="set[2]=temp["+i+"]||0;";
					break;
				case "%m": splt+="set[1]=(temp["+i+"]||1)-1;";
					break;
				case "%y": splt+="set[0]=temp["+i+"]*1+(temp["+i+"]>50?1900:2000);";
					break;
				case "%h": 
				case "%H":
							splt+="set[3]=temp["+i+"]||0;";
					break;
				case "%i":
							splt+="set[4]=temp["+i+"]||0;";
					break;
				case "%Y":  splt+="set[0]=temp["+i+"]||0;";
					break;
			}
		}
		var code ="set[0],set[1],set[2],set[3],set[4]";
		if (utc) code =" Date.UTC("+code+")";
		return new Function("date","var set=[0,0,0,0,0]; "+splt+" return new Date("+code+");");
	}
};


scheduler.locale={
	date:{
		month_full:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		month_short:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		day_full:["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    	day_short:["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    },
    labels:{
    	dhx_cal_today_button:"Today",
    	day_tab:"Day",
    	week_tab:"Week",
    	month_tab:"Month",
    	new_event:"New event",
		icon_save:"Save",
		icon_cancel:"Cancel",
		icon_details:"Details",
		icon_edit:"Edit",
		icon_delete:"Delete",
		confirm_closing:"",//Your changes will be lost, are your sure ?
		confirm_deleting:"Event will be deleted permanently, are you sure?",
		section_description:"Description",
		section_time:"Time period"
    }
};

/*
%e	Day of the month without leading zeros (01..31)
%d	Day of the month, 2 digits with leading zeros (01..31)
%j	Day of the year, 3 digits with leading zeros (001..366)
%a	A textual representation of a day, two letters
%W	A full textual representation of the day of the week

%c	Numeric representation of a month, without leading zeros (0..12)
%m	Numeric representation of a month, with leading zeros (00..12)
%b	A short textual representation of a month, three letters (Jan..Dec)
%M	A full textual representation of a month, such as January or March (January..December)

%y	A two digit representation of a year (93..03)
%Y	A full numeric representation of a year, 4 digits (1993..03)
*/

scheduler.config={
	default_date: "%d %M %Y",
	month_date: "%F %Y",
	week_date: "%l",
	day_date: "%D, %F %d",
	hour_date: "%H:%i",
	month_day : "%d",
	xml_date:"%m/%d/%Y %H:%i",
	api_date:"%d-%m-%Y %H:%i",

	hour_size_px:42,
	time_step:5,

	start_on_monday:0,
	first_hour:0,
	last_hour:24,
	drag_resize:1,
	drag_move:1,
	drag_create:1,
	edit_on_create:1,
	details_on_create:0,
	click_form_details:0,
	
	server_utc:false,

	positive_closing:false,

	icons_edit:["icon_save","icon_cancel"],
	icons_select:["icon_details","icon_edit","icon_delete"],
	
	lightbox:{
		sections:[	{name:"description", height:200, map_to:"text", type:"textarea" , focus:true},
					{name:"time", height:72, type:"time", map_to:"auto"}	]
	}
};
//初始化模板
scheduler.init_templates=function(){
	//////debugger;
	var d=scheduler.date.date_to_str;
	var c=scheduler.config;
	
	scheduler.templates={
		day_date:d(c.default_date),
		month_date:d(c.month_date),
		week_date:function(d1,d2){
			return scheduler.templates.day_date(d1)+" &ndash; "+scheduler.templates.day_date(scheduler.date.add(d2, -1, 'day'));
		},
		day_scale_date:d(c.default_date),
		month_scale_date:d(c.week_date),
		week_scale_date:d(c.day_date),
		hour_scale:d(c.hour_date),
		month_day:d(c.month_day),
		xml_date:scheduler.date.str_to_date(c.xml_date,c.server_utc),
		xml_format:d(c.xml_date,c.server_utc),
		api_date:scheduler.date.str_to_date(c.api_date),
		
		event_header:function(start,end,ev){
			return scheduler.templates.hour_scale(start)+" - "+scheduler.templates.hour_scale(end);
		},
		event_text:function(start,end,ev){
			return ev.text;
		},
		event_class:function(start,end,ev){
			return "";
		},
		event_bar_date:function(start,end,ev){
			return scheduler.templates.hour_scale(start)+" ";
		},
		event_bar_text:function(start,end,ev){
			return ev.text;
		}
	};
};




scheduler.uid=function(){

	if (!this._seed) this._seed=(new Date).valueOf();
	return this._seed++;
};
scheduler._events={};
scheduler.clearAll=function(){
	this._events={};
	this.clear_view();
};
scheduler.addEvent=function(start_date,end_date,k,text,id,extra_data){
debugger;
	var ev=start_date;
	//arguments.lengt是所传参数的个数
	if (arguments.length!=1){
		ev=extra_data||{};
		ev.start_date=start_date;
		ev.end_date=end_date;
		ev.text=text;
		ev.id=id;
		ev.k=k;
	}
		
	ev.id = ev.id||scheduler.uid();
	ev.text = ev.text||"";
	ev.extra_data = ev.extra_data||{};
	
	if (typeof ev.start_date == "string")  ev.start_date=this.templates.api_date(ev.start_date);
	if (typeof ev.end_date == "string")  ev.end_date=this.templates.api_date(ev.end_date);
	ev._timed=this.is_one_day_event(ev);

	var is_new=!this._events[ev.id];
	this._events[ev.id]=ev;
	this.event_updated(ev);
	//this.callEvent(is_new?"onEventAdded":"onEventChanged",[ev.id,ev]);
};
scheduler.deleteEvent=function(id,silent){ 

	var ev=this._events[id];
	if (!silent && !this.callEvent("onBeforeEventDelete",[id,ev])) return;
	
	if (ev){
		delete this._events[id];
		this.unselect(id);
		this.event_updated(ev);
	}
};
scheduler.getEvent=function(id){

	return this._events[id];
};
scheduler.setEvent=function(id,hash){
	this._events[id]=hash;
};
scheduler.for_rendered=function(id,method){

	for (var i=this._rendered.length-1; i>=0; i--)
		if (this._rendered[i].getAttribute("event_id")==id)
			method(this._rendered[i],i);
};
scheduler.changeEventId=function(id,new_id){

	var ev=this._events[id];
	if (ev){
		ev.id=new_id;
		this._events[new_id]=ev;
		delete this._events[id];
	}
	this.for_rendered(id,function(r){
		r.setAttribute("event_id",new_id);
	});
	if (this._select_id==id) this._select_id=new_id;
	if (this._edit_id==id) this._edit_id=new_id;
};

(function(){
	var attrs=["Text","StartDate","EndDate"];
	var create_getter=function(name){
		return function(id){ return (scheduler.getEvent(id))[name]; };
	};
	var create_setter=function(name){
		return function(id,value){ var ev=scheduler.getEvent(id); ev[name]=value; ev._changed=true; scheduler.event_updated(ev); };
	};
	for (var i=0; i<attrs.length; i++){
		scheduler["getEvent_"+attrs[i]]=create_getter(attrs[i]);
		scheduler["setEvent"+attrs[i]]=create_setter(attrs[i]);
	}
})();

scheduler.event_updated=function(ev){
debugger;
	if (this.is_visible_events(ev))
		this.render_view_data();
};
scheduler.is_visible_events=function(ev){
//////debugger;
	if (ev.start_date<this._max_date && this._min_date<ev.end_date) return true;
	return false;
};
scheduler.is_one_day_event=function(ev){
	return (ev.start_date.getDate()==ev.end_date.getDate() && ev.start_date.getMonth()==ev.end_date.getMonth() && ev.start_date.getFullYear()==ev.end_date.getFullYear());
};
scheduler.get_visible_events=function(){
	//not the best strategy for sure
	////debugger;
	var stack=[];
	for( var id in this._events)
		if (this.is_visible_events(this._events[id]))
			if (this._table_view || this._events[id]._timed)
				stack.push(this._events[id]);
	return stack;
};
scheduler.render_view_data=function(){
	debugger;
//	alert("3");
	if (this._not_render) {
		this._render_wait=true;
		return;
	}
	this._render_wait=false;
	
	this.clear_view();
	var evs=this.get_visible_events();
	this.render_data(evs);	
};
scheduler.render_data=function(evs,hold){
	debugger;
	evs=this._pre_render_events(evs,hold);
	for (var i=0; i<evs.length; i++)
//		if (this._table_view)
//			this.render_event_bar(evs[i]);
//		else
			this.render_event(evs[i]);
};
scheduler._pre_render_events=function(evs,hold){
	//////debugger;
//	if (!this._table_view) return this._pre_render_events_line(evs,hold); //ignore long events for now
//	else return this._pre_render_events_table(evs,hold);
	return this._pre_render_events_line(evs,hold);
};

scheduler._pre_render_events_line=function(evs,hold){
	debugger;
	evs.sort(function(a,b){ return a.start_date>b.start_date?1:-1; });
	var days=[[],[],[],[],[],[],[]]; //events by weeks
	if(this._table_view){
		days = new Array(monthDays);
		for(var i=0;i<monthDays;i++){
			days[i]=new Array();
		}
	}
	for (var i=0; i < evs.length; i++) {
		var ev=evs[i];
		ev._sday=this.locate_holder_day(ev.start_date);
		
		if (!hold){
			var stack=days[ev._sday];
			while (stack.length && stack[stack.length-1].end_date<=ev.start_date)
				stack.splice(stack.length-1,1);
			if (stack.length) stack[stack.length-1]._inner=true;
			ev._sorder=stack.length; stack.push(ev);
			if (stack.length>(stack.max_count||0)) stack.max_count=stack.length;
		}
	}
	if (!hold)
	for (var i=0; i < evs.length; i++) {
		evs[i]._count=days[evs[i]._sday].max_count;
	}
	
	return evs;
};
//scheduler._pre_render_events_table=function(evs){
//	////debugger;
//	evs.sort(function(a,b){ 
//		if (a.start_date.valueOf()==b.start_date.valueOf()){
//			if (a._timed && !b._timed) return 1;
//			if (!a._timed && b._timed) return -1;
//			return 0;
//		}
//		return a.start_date>b.start_date?1:-1;
//	 });
//		
//	var out=[];
//	var weeks=[[],[],[],[],[],[],[]]; //events by weeks
//	var start_date;
//	for (var i=0; i < evs.length; i++) {
//		var ev=evs[i];
//		var sd = (start_date||ev.start_date);
//		var ed = ev.end_date;
//		//trim events which are crossing through current view
//		if (sd<this._min_date) sd=this._min_date;
//		if (ed>this._max_date) ed=this._max_date;
//		
//		ev._sday=this.locate_holder_day(sd);
//		ev._eday=this.locate_holder_day(ed)||7;
//		
//		//3600000 - compensate 1 hour during winter|summer time shift
//		ev._sweek=Math.floor((sd.valueOf()+3600000-this._min_date.valueOf())/(60*60*1000*24*7)); 	
//		
//		//check order position
//		var stack=weeks[ev._sweek];
//		while (stack.length && stack[stack.length-1].end_date<=this.date.date_part(this.date.copy(ev.start_date)) )
//				stack.splice(stack.length-1,1);
//		ev._sorder=stack.length; stack.push(ev);
//		
//		ev._length=Math.ceil((ed.valueOf()-sd.valueOf())/(60*60*1000*24));
//		
//		if (ev._sday+ev._length<=7){
//			start_date=null;
//			out.push(ev);
//		} else{ // split long event in chunks
//			copy=this._copy_event(ev);
//			copy._length=7-ev._sday;
//			copy._eday=7; copy._sday=ev._sday;
//			copy._sweek=ev._sweek; copy._sorder=ev._sorder;
//			copy.end_date=this.date.add(sd,copy._length,"day");
//			
//			out.push(copy);
//			
//			start_date=copy.end_date;
//			i--; continue;  //repeat same step
//		}
//	};
//
//	return out;
//};
scheduler._copy_event=function(ev){
	return {start_date:ev.start_date, end_date:ev.end_date, text:ev.text, id:ev.id};
};
scheduler._rendered=[];
scheduler.clear_view=function(){
	////debugger;
	for (var i=0; i<this._rendered.length; i++){
		var obj=this._rendered[i];
		if (obj.parentNode) obj.parentNode.removeChild(obj);		
	}
	this._rendered=[];
};
scheduler.updateEvent=function(id){
	//debugger;
//	alert("2");
//	var ev=this.getEvent(id);
//	this.clear_event(id);
//	if (ev) this.render_data([ev],true);
};
scheduler.clear_event=function(id){
	this.for_rendered(id,function(node,i){
		if (node.parentNode)
			node.parentNode.removeChild(node);
		scheduler._rendered.splice(i,1);
	});
};
scheduler.render_event=function(ev){
	debugger;
	var parent=scheduler.locate_holder(ev._sday);	

	var operatorId = ev.createPsnID;
	var start_date = new Date(ev.start_date);
	//周中日程所对应的天，值为（‘日’——————”六“）
	var day = scheduler.locale.date.day_short[start_date.getDay()];
	if(this._table_view){
		day = start_date.getDate();
	}
	//size:操作员开始位置距数据区顶部的位置
	var size = 1;
	for(var i = 0;i<data.length; i++){
		var a = data[i].split(".");
		if(a[0]==operatorId){
			size = parseInt(a[1]);
			break;
		}
	}
	var k = ev.k;
	var scrder = ev._sorder;
	var date = Math.round((ev.end_date.valueOf()-ev.start_date.valueOf())/60/60/1000/24);
		
	//var top = (Math.round((ev.start_date.valueOf()-this._min_date.valueOf()-this.config.first_hour*60*60*1000)*this.config.hour_size_px/(60*60*1000)))%(this.config.hour_size_px*24)+1; //42px/hour
	var top = (Math.round((size)*this.config.hour_size_px))%(this.config.hour_size_px*24)+10; //42px/hour
	//var height = Math.max(25,Math.round((ev.end_date.valueOf()-ev.start_date.valueOf())*(this.config.hour_size_px)/(60*60*1000))-10);  //42px/hour 
	var height = 30;
	var width = 165;
	if(this._table_view){
		width = 110;
	}else if(this._mode=="day"){
		width = 500;
	}
	var left=0;
	var d;
//	if(this._table_view){
//		left=day*100;
//	}
	if(k==0){
		left += 15;
	}
	if(this._mode=="day"){
		left += 300;
	}
	if(this._table_view){
		if(k==0 || day=="1"){
			d=this._render_v_bar(ev.id,left,top,width,height,ev._text_style," ",scheduler.templates.event_text(ev.start_date,ev.end_date,ev));
		}else{
			d=this._render_v_bar(ev.id,left,top,width,height,ev._text_style," "," ");
		}
	}else if(this._mode=="day"){
		d=this._render_v_bar(ev.id,left,top,width,height,ev._text_style," ",scheduler.templates.event_text(ev.start_date,ev.end_date,ev));
	}else{
		if(k==0 || day=="日"){
			d=this._render_v_bar(ev.id,left,top,width,height,ev._text_style," ",scheduler.templates.event_text(ev.start_date,ev.end_date,ev));
		}else{
			d=this._render_v_bar(ev.id,left,top,width,height,ev._text_style," "," ");
		}
	}
	if (!ev._inner) width=width*(ev._count-ev._sorder);

	
	//旧var d=this._render_v_bar(ev.id,25+left,top,width,height,ev._text_style,scheduler.templates.event_header(ev.start_date,ev.end_date,ev),scheduler.templates.event_text(ev.start_date,ev.end_date,ev));
	//var d=this._render_v_bar(ev.id,25+left,top,width,height,ev._text_style," ",scheduler.templates.event_text(ev.start_date,ev.end_date,ev));
	this._rendered.push(d);
	parent.appendChild(d);
	
	left=left+parseInt(parent.style.left)+25;
	
	if (this._edit_id==ev.id){
		width=Math.max(width-4,140);
		var d=document.createElement("DIV");
		d.setAttribute("event_id",ev.id);
		this.set_xy(d,width,height-6,left,top+14);
		d.className="dhx_cal_editor";
			
		var d2=document.createElement("DIV");
		this.set_xy(d2,width-6,height-12);
		d2.style.cssText+=";margin:2px 2px 2px 2px;";
		
		d.appendChild(d2);
		this._els["dhx_cal_data"][0].appendChild(d);
		this._rendered.push(d);
	
		d2.innerHTML="<textarea class='dhx_cal_editor'>"+ev.text+"</textarea>";
		if (this._quirks7) d2.firstChild.style.height=height-16+"px"; //IEFIX
		this._editor=d2.firstChild;
		this._editor.onkeypress=function(e){ 
			if ((e||event).shiftKey) return true;
			var code=(e||event).keyCode; 
			if (code==13) scheduler.editStop(true); 
			if (code==27) scheduler.editStop(false); 
		};
		d2.firstChild.focus();
		d2.firstChild.select();
	}
	
	if (this._select_id==ev.id){
		var icons=this.config["icons_"+((this._edit_id==ev.id)?"edit":"select")];
		var icons_str="";
		for (var i=0; i<icons.length; i++)
			icons_str+="<div class='dhx_menu_icon "+icons[i]+"' title='"+this.locale.labels[icons[i]]+"'></div>";
		var obj = this._render_v_bar(ev.id,left-24,top,25,icons.length*20+12,"","<div class='dhx_menu_head'></div>",icons_str,true);
		obj.style.left=left-(this._quirks7?24:24);
		this._els["dhx_cal_data"][0].appendChild(obj);
		this._rendered.push(obj);
	}
};
scheduler._render_v_bar=function(id,x,y,w,h,style,contentA,contentB,bottom){
	var d=document.createElement("DIV");
	var ev = this.getEvent(id);
	var cs = "dhx_cal_event";
	var cse = scheduler.templates.event_class(ev.start_date,ev.end_date,ev);
	if (cse) cs=cs+" "+cse;
	var html='<div event_id="'+id+'" class="'+cs+'" style="position:absolute; top:'+y+'px; left:'+x+'px; width:'+(w-4)+'px; height:'+h+'px;'+(style||"")+'">';
	//html+='<div class="dhx_header" style=" width:'+(w-6)+'px;" >&nbsp;</div>';
	//html+='<div class="dhx_title">'+contentA+'</div>';
	html+='<div class="dhx_body" style=" width:'+(w-(this._quirks?4:14))+'px; height:'+(h-(this._quirks?6:16))+'px;">'+contentB+'</div>';
	//html+='<div class="dhx_footer" style=" width:'+(w-8)+'px;'+(bottom?' margin-top:-1px;':'')+'" ></div></div>';
	d.innerHTML=html;
	return d.firstChild;
};
scheduler.locate_holder=function(day){
	if (this._mode=="day") return this._els["dhx_cal_data"][0].firstChild; //dirty
	return this._els["dhx_cal_data"][0].childNodes[day];
};
//返回某一天在第几个位置
scheduler.locate_holder_day=function(date){
debugger;
	if(!this._table_view){
		var day = date.getDay()-this.config.start_on_monday;
		if (day<0) day+=7;
		return day;
	}else{
		return date.getDate()-1;
	}
};
scheduler.render_event_bar=function(ev){
	//debugger;
	var parent=this._els["dhx_cal_data"][0];

	var x=this._colsS[ev._sday];
	var x2=this._colsS[ev._eday];
	if (x2==x) x2=this._colsS[ev._eday+1];
	
	var y=this._colsS.height*ev._sweek+22+ev._sorder*20; 
			
	var d=document.createElement("DIV");
	var cs = ev._timed?"dhx_cal_event_clear":"dhx_cal_event_line";
	var cse = scheduler.templates.event_class(ev.start_date,ev.end_date,ev);
	if (cse) cs=cs+" "+cse; 
	
	var html='<div event_id="'+ev.id+'" class="'+cs+'" style="position:absolute; top:'+y+'px; left:'+x+'px; width:'+(x2-x-15)+'px;'+(ev._text_style||"")+'">';
	if (ev._timed)
		html+=scheduler.templates.event_bar_date(ev.start_date,ev.end_date,ev);
	html+=scheduler.templates.event_bar_text(ev.start_date,ev.end_date,ev)+'</div>';
	html+='</div>';
	
	d.innerHTML=html;
	
	this._rendered.push(d.firstChild);
	parent.appendChild(d.firstChild);
};

scheduler._locate_event=function(node){
//	var id=null;
//	while (node && !id && node.getAttribute){
//		id=node.getAttribute("event_id"); 
//		node=node.parentNode;
//	}
//	return id;
};


scheduler.edit=function(id){
//	if (this._edit_id==id) return;
//	this.editStop(false,id);
//	this._edit_id=id;
//	this.updateEvent(id);
};
scheduler.editStop=function(mode,id){

	if (id && this._edit_id!=id) return;
	var ev=this.getEvent(this._edit_id);
	if (mode && justep.String.trim(this._editor.value)== "") {
		alert("日程标题不能为空");
		return;
	}
	if (ev){
		if (mode) ev.text=this._editor.value;
		this._edit_id=null;
		this._editor=null;	
		this.updateEvent(ev.id);
		this._edit_stop_event(ev,mode);
	}
};
scheduler._edit_stop_event=function(ev,mode){
	if (this._new_event){
		if (!mode) this.deleteEvent(ev.id,true);		
		else this.callEvent("onEventAdded",[ev.id,ev]);
		this._new_event=null;
	} else
		if (mode) this.callEvent("onEventChanged",[ev.id,ev]);
};


scheduler._loaded={};
scheduler._load_format = scheduler.date.date_to_str("%Y-%m-%d");
scheduler._load=function(url,from){
	//debugger;
	url=url||this._load_url;
	url+=(url.indexOf("?")==-1?"?":"&")+"timeshift="+(new Date()).getTimezoneOffset();
		
	var to;
	from=from||this._date;
	
	if (this._load_mode){
		from = this._load_date(from);
		from = new Date(from.valueOf()-from.getTimezoneOffset()*60000); //correct timezone
	
		if (this._loaded[this._load_format(from)]) return true; //already loaded
		to=this.date.add(from,1,this._load_mode);
		dhtmlxAjax.get(url+"&from="+this._load_format(from)+"&to="+this._load_format(to),function(l){scheduler.on_load(l);});
		this._loaded[this._load_format(from)]=true;
	} else
		dhtmlxAjax.get(url,function(l){scheduler.on_load(l);});
};
scheduler._load_date=function(date){
	return this.date[this._load_mode+"_start"](new Date(date.valueOf()));
};
scheduler.on_load=function(loader){

	this._loading=true;
	if (this._process)
		var evs=this[this._process].parse(loader.xmlDoc.responseText);
	else
		var evs=this._magic_parser(loader);
	
	this._not_render=true;
	for (var i=0; i<evs.length; i++)
		this.addEvent(evs[i]);
	this._not_render=false;
	if (this._render_wait) this.render_view_data();
	
	if (this._after_call) this._after_call();
	this._after_call=null;
	this._loading=false;
};
scheduler.load=function(url,call){

	if (typeof call == "string"){
		this._process=call;
		call = arguments[2];
	}
	
	this._load_url=url;
	this._after_call=call;
	this._load(url,this._date);
};
//possible values - day,week,month,year,all
scheduler.setLoadMode=function(mode){
	if (mode=="all") mode="";
	this._load_mode=mode;
};

//current view by default, or all data if "true" as parameter provided
scheduler.refresh=function(refresh_all){
	alert("not implemented");
	/*
	this._loaded={};
	this._load();
	*/
};
scheduler._magic_parser=function(loader){

	//xml only for now
	var xml=loader.getXMLTopNode("data");
	if (xml.tagName!="data") return [];//not an xml
	
	var evs=[];
	var xml=loader.doXPath("//event");
	
	for (var i=0; i < xml.length; i++) {
		evs[i]=this.xmlNodeToJSON(xml[i]);
		
		evs[i].text=evs[i].text||evs[i]._tagvalue;
		evs[i].start_date=this.templates.xml_date(evs[i].start_date);
		evs[i].end_date=this.templates.xml_date(evs[i].end_date);
	}
	return evs;
};
scheduler.xmlNodeToJSON = function(node){

        var t={};
        for (var i=0; i<node.attributes.length; i++)
            t[node.attributes[i].name]=node.attributes[i].value;
        
        for (var i=0; i<node.childNodes.length; i++){
        	var child=node.childNodes[i];
            if (child.nodeType==1)
                t[child.tagName]=child.firstChild?child.firstChild.nodeValue:"";
        }
                 
        if (!t.text) t.text=node.firstChild?node.firstChild.nodeValue:"";
        
        return t;
};

scheduler.form_blocks={
	textarea:{
		render:function(sns){
			var height=(sns.height||"130")+"px";
			return "<div class='dhx_cal_ltext' style='height:"+height+";'><textarea></textarea></div>";
		},
		set_value:function(node,value,ev){
			node.firstChild.value=value||"";
		},
		get_value:function(node,ev){
			return node.firstChild.value;
		},
		focus:function(node){
			var a=node.firstChild; a.select(); a.focus(); 
		}
	},
	select:{
		render:function(sns){
			var height=(sns.height||"23")+"px";
			var html="<div class='dhx_cal_ltext' style='height:"+height+";'><select style='width:552px;'>";
			for (var i=0; i < sns.options.length; i++)
				html+="<option value='"+sns.options[i].key+"'>"+sns.options[i].label+"</option>";
			html+="</select></div>";
			return html;
		},
		set_value:function(node,value,ev){
			node.firstChild.value=value||"";
		},
		get_value:function(node,ev){
			return node.firstChild.value;
		},
		focus:function(node){
			var a=node.firstChild; a.select(); a.focus(); 
		}
	},	
	time:{
		render:function(){
			//hours
			var dt = this.date.date_part(new Date());
			var html="<select>";
			for (var i=0; i<60*24; i+=this.config.time_step){
				var time=this.templates.hour_scale(dt);
				html+="<option value='"+i+"'>"+time+"</option>";
				dt=this.date.add(dt,this.config.time_step,"minute");
			}
			
			//days
			html+="</select> <select>";
			for (var i=1; i < 32; i++) 
				html+="<option value='"+i+"'>"+i+"</option>";
			
			//month
			html+="</select> <select>";
			for (var i=0; i < 12; i++) 
				html+="<option value='"+i+"'>"+this.locale.date.month_full[i]+"</option>";
			
			//year
			html+="</select> <select>";
			dt = dt.getFullYear()-5; //maybe take from config?
			for (var i=0; i < 10; i++) 
				html+="<option value='"+(dt+i)+"'>"+(dt+i)+"</option>";
			html+="</select> ";
			
			return "<div style='height:30px; padding-top:0px; font-size:inherit;' class='dhx_cal_lsection'>"+html+"<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>"+html+"</div>";
		},
		set_value:function(node,value,ev){
			function _fill_lightbox_select(s,i,d){
				s[i+0].value=d.getHours()*60+d.getMinutes();	
				s[i+1].value=d.getDate();
				s[i+2].value=d.getMonth();
				s[i+3].value=d.getFullYear();
			}
			s=node.getElementsByTagName("select");
			_fill_lightbox_select(s,0,ev.start_date);
			_fill_lightbox_select(s,4,ev.end_date);
		},
		get_value:function(node,ev){
			s=node.getElementsByTagName("select");
			ev.start_date=new Date(s[3].value,s[2].value,s[1].value,0,s[0].value);
			ev.end_date=new Date(s[7].value,s[6].value,s[5].value,0,s[4].value);
		},
		focus:function(node){
			node.getElementsByTagName("select")[0].focus(); 
		}
	}
};
//scheduler.showLightbox=function(id){
//
//	if (!id) return;
//	this.show_cover();
//	var box = this._get_lightbox();
//	box.style.display="block";
//	box.style.top=Math.round((document.body.offsetHeight-box.offsetHeight)/2)+"px";
//	box.style.left=Math.round((document.body.offsetWidth-box.offsetWidth)/2)+"px";	
//	
//	this._fill_lightbox(id,box);
//};
scheduler._fill_lightbox=function(id,box){ 

//	var ev=this.getEvent(id);
//	var s=box.getElementsByTagName("span");
//	s[1].innerHTML=this.templates.event_header(ev.start_date,ev.end_date,ev);
//	s[2].innerHTML=this.templates.event_text(ev.start_date,ev.end_date,ev);
//	
//	var sns = this.config.lightbox.sections;	
//	for (var i=0; i < sns.length; i++) {
//		var node=document.getElementById(sns[i].id).nextSibling;
//		var block=this.form_blocks[sns[i].type];
//		block.set_value.call(this,node,ev[sns[i].map_to],ev);
//		if (sns[i].focus)
//			block.focus.call(this,node);
//	};
//	
//	scheduler._lightbox_id=id;
};
scheduler._empty_lightbox=function(){

//	var id=scheduler._lightbox_id;
//	var ev=this.getEvent(id);
//	var box=this._get_lightbox();
//	
//	var sns = this.config.lightbox.sections;	
//	for (var i=0; i < sns.length; i++) {
//		var node=document.getElementById(sns[i].id).nextSibling;
//		var block=this.form_blocks[sns[i].type];
//		var res=block.get_value.call(this,node,ev);
//		if (sns[i].map_to!="auto")
//			ev[sns[i].map_to]=res;
//	};
//	
//	ev._timed=this.is_one_day_event(ev);
//	this.setEvent(ev.id,ev);
//	this._edit_stop_event(ev,true);
//	this.render_view_data();
};
scheduler.hide_lightbox=function(id){
	this._get_lightbox().style.display="none";
	this.hide_cover();
	this._lightbox_id=null;
};
scheduler.hide_cover=function(){
	if (this._cover) 
		document.body.removeChild(this._cover);
	this._cover=null;
};
scheduler.show_cover=function(){
//	this._cover=document.createElement("DIV");
//	this._cover.className="dhx_cal_cover";
//	document.body.appendChild(this._cover);
};
//scheduler._init_lightbox_events=function(){
//
//	this._get_lightbox().onclick=function(e){
//		var src=e?e.target:event.srcElement;
//		if (!src.className) src=src.previousSibling;
//		if (src && src.className)
//			switch(src.className){
//				case "dhx_save_btn":
//					scheduler._empty_lightbox();
//					scheduler.hide_lightbox();
//					break;
//				case "dhx_delete_btn":
//					var c=scheduler.locale.labels.confirm_deleting; 
//					if (!c||confirm(c)) {
//						scheduler.deleteEvent(scheduler._lightbox_id);
//						scheduler.hide_lightbox();
//					}
//					break;
//				case "dhx_cancel_btn":
//					scheduler._edit_stop_event(scheduler.getEvent(scheduler._lightbox_id),false);
//					scheduler.hide_lightbox();
//					break;
//			}
//	};
//	this._get_lightbox().onkeypress=function(e){
//		switch((e||event).keyCode){
//			case 13:
//				scheduler._empty_lightbox();
//				scheduler.hide_lightbox();
//				break;
//			case 27:
//				scheduler._edit_stop_event(scheduler.getEvent(scheduler._lightbox_id),false);
//				scheduler.hide_lightbox();
//				break;
//		}
//	};
//};
//scheduler._get_lightbox=function(){
//
//	if (!this._lightbox){
//		var d=document.createElement("DIV");
//		d.className="dhx_cal_light";
//		d.style.visibility="hidden";
//		d.innerHTML=this._lightbox_template;
//		document.body.insertBefore(d,document.body.firstChild);
//		this._lightbox=d;
//		
//		var sns=this.config.lightbox.sections;
//		var html="";
//		for (var i=0; i < sns.length; i++) {
//			var block=this.form_blocks[sns[i].type];
//			if (!block) continue; //ignore incorrect blocks
//			sns[i].id="area_"+this.uid();
//			html+="<div id='"+sns[i].id+"' class='dhx_cal_lsection'>"+this.locale.labels["section_"+sns[i].name]+"</div>"+block.render.call(this,sns[i]);
//		};
//		
//	
//		//localization
//		var ds=d.getElementsByTagName("div");
//		ds[4].innerHTML=scheduler.locale.labels.icon_save;
//		ds[7].innerHTML=scheduler.locale.labels.icon_cancel;
//		ds[10].innerHTML=scheduler.locale.labels.icon_delete;
//		//sections
//		ds[1].innerHTML=html;
//		//sizes
//		ds[1].style.height=ds[1].scrollHeight+"px";		
//		d.style.height=ds[1].scrollHeight+50+"px";		
//		ds[1].style.height=ds[1].scrollHeight+"px";		 //its pretty incredible , how ugly IE can be 
//		
//		this._init_lightbox_events(this);
//		d.style.display="none";
//		d.style.visibility="visible";
//	}
//	return this._lightbox;
//};
//scheduler._lightbox_template="<div class='dhx_cal_ltitle'><span class='dhx_mark'>&nbsp;</span><span class='dhx_time'></span><span class='dhx_title'></span></div><div class='dhx_cal_larea'></div><div class='dhx_btn_set'><div class='dhx_save_btn'></div><div>&nbsp;</div></div><div class='dhx_btn_set'><div class='dhx_cancel_btn'></div><div>&nbsp;</div></div><div class='dhx_btn_set' style='float:right;'><div class='dhx_delete_btn'></div><div>&nbsp;</div></div>";

scheduler._dp_init=function(dp){
	dp._methods=["setEventTextStyle","","changeEventId","deleteEvent"];
	
	this.attachEvent("onEventAdded",function(id){
		if (!this._loading)
			dp.setUpdated(id,true,"inserted");
	});
	this.attachEvent("onBeforeEventDelete",function(id){
        var z=dp.getState(id);
		if (z=="inserted") {  dp.setUpdated(id,false);		return true; }
		if (z=="deleted")  return false;
    	if (z=="true_deleted")  return true;
    	
		dp.setUpdated(id,true,"deleted");
      	return false;
	});
	this.attachEvent("onEventChanged",function(id){
		if (!this._loading)
			dp.setUpdated(id,true,"updated");
	});
	
	dp._getRowData=function(id,pref){
		pref=pref||"";
		var ev=this.obj.getEvent(id);
		
		var str=[];
		for (var a in ev){
			if (a.indexOf("_")==0) continue;
			if (a.indexOf("_date")!=-1)
				str.push(a+"="+this.obj.templates.xml_format(ev[a]));
			else
				str.push(a+"="+this.escape(ev[a]));
		}
		
		return pref+str.join("&"+pref);
	};
	dp._clearUpdateFlag=function(){};
};


scheduler.setUserData=function(id,name,value){
	this.getEvent(id)[name]=value;
};
scheduler.getUserData=function(id,name){
	return this.getEvent(id)[name];
};
scheduler.setEventTextStyle=function(id,style){
	this.for_rendered(id,function(r){
		r.style.cssText+=";"+style;
	});
	this.getEvent(id)["_text_style"]=style;
};



/*
Translation by FreezeSoul
*/
scheduler.config.day_date="%M %d日 %D";
scheduler.config.default_date="%Y年 %M %d日";
scheduler.config.month_date="%Y年 %M";

scheduler.locale={
	date: {
		month_full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
		month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
		day_full: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
		day_short: ["日", "一", "二", "三", "四", "五", "六"]
	},
	labels: {
		dhx_cal_today_button: "今天",
		day_tab: "日",
		week_tab: "周",
		month_tab: "月",
		new_event: "新建日程",
		icon_save: "保存",
		icon_cancel: "关闭",
		icon_details: "详细",
		icon_edit: "编辑",
		icon_delete: "删除",
		confirm_closing: "请确认是否撤销修改!", //Your changes will be lost, are your sure?
		confirm_deleting: "是否删除日程?",
		section_description: "描述",
		section_time: "时间范围",
		confirm_recurring:"请确认是否将日程设为重复模式?",
		section_recurring:"重复周期",
		button_recurring:"禁用",
		button_recurring_open:"启用",
		
		/*agenda view extension*/
		agenda_tab:"议程",
		date:"日期",
		description:"说明",
		
		/*year view extension*/
		year_tab:"今年"
	}
};


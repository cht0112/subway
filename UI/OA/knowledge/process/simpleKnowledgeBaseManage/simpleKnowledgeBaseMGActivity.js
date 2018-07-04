function mdKnowledgexforms_model_construct_done(event) {
	var grdFolder = xforms('grdFolder').grid;
	var rowid = grdFolder.selectRowID;
	
	if(rowid != '' && rowid != null && rowid != undefined) {
		grdFolder.expand(rowid);
	}
}

function grdFolderShowNodeImg(event) {
	var data = justep.xbl(event.instance.element.id);
	if (!data)
		return;
	if (event.rowId == 'public') {
		return "/UI/OA/common/images/org_root.gif";
	} else {
		return "/UI/OA/common/images/org.gif";
	}
}

function grdFolderRowExpand(event) {
	if (event.delay) {
		var grdFolder = xforms('grdFolder').grid;
		var parent = event.rowId;
		var subFolders = getDirectSubFoldersMG(parent);
		if ((subFolders != '') && (subFolders != null)) {
			var arrFolder = subFolders.split("|");
			var len = arrFolder.length;
			if (len <= 0) {
				return;
			}

			var nodeHead = "<rows parent=\"" + parent + "\">";
			var nodeTail = "</rows>";
			var rows = "";
			for (var i = 0; i < len; i++) {
				var folder = arrFolder[i];
				var folderID = folder.split(":")[0];
				var folderName = folder.split(":")[1];
				var folderFullID = folder.split(":")[2];
				grdFolder.addRowPro(folderID, [folderName, folderFullID], i,
						parent);
			}
		}
		event.source.setNodeLoadSuccess(event.rowId);
	}
}

// 获取父栏目下的直属级子栏目
function getDirectSubFoldersMG(folderID) {
	var param = new justep.Request.ActionParam();
	param.setString("folderID", folderID);

	var r = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "getDirectSubFoldersMGAction",
			param);

	if (!justep.Request.isBizSuccess(r)) {
		return '';
	} else {
		return justep.Request.transform(justep.Request.getData(r.responseXML));
	}
}

function grdFolderAfterIndexChanged(event) {
	displayKnowledge();
}

function displayKnowledge() {
	var filterCondition = "";
	var dKW = justep.xbl('dKnowledge');
	var folderID = justep.xbl('dFolder').getCurrentRowId();
	var psnID = justep.Context.getCurrentPersonID();
	var managers = getFolderManagers(folderID);
	if (managers.indexOf(psnID) > -1) {
		var folderCondition = "(fFolderID = '" + folderID + "')";
		filterCondition = folderCondition;
	} else {
		filterCondition = "1=0";
	}

	// alert(filterCondition);
	dKW.filters.setFilter("knowledgeFilter", filterCondition);
	dKW.refreshData();
}


function hyperlink2Knowledge(data) {
	try {
		var value = data.value;// 当前行/列
		return '<a href="javascript:void(0)" onclick="viewKnowlegde(this);">'
				+ value + '</a>';
	} catch (e) {
		alert(e);
	}
}

function viewKnowlegde(gridElement) {
	var gridInfo = getGridInfoByElement(gridElement);
	var gridID = '';
	if (gridInfo) {
		gridID = gridInfo.rowId;
	}
	if (!gridID || gridID == '') {
		gridID = $('main').xfElement.getValueByName('rowid');
	}
	
	var process = "/OA/knowledge/process/publishKnowledge/publishKnowledgeProcess";
	var activity = "publishKWActivity";
	var url = "/OA/knowledge/process/publishKnowledge/publishKWActivity.w"
			+ "?process=" + process + "&activity=" + activity + "&KWID="
			+ gridID + "&operator=manage";

	justep.Portal.openWindow(gridElement.title, url);
}

// 发布知识
function relaseKnowledge() {
	var data = justep.xbl('dKnowledge');
	if (data) {
		try {
			var kwid = data.getCurrentRowId();
			if (kwid != undefined && kwid != '') {
				appCommon.DataUtils.refreshDataByRowIds(data,kwid);
				var releaseStatus = data.getValue("fReleaseStatus",kwid);
				if(releaseStatus == '1') {
					alert("该知识已经发布!");
					return;
				}
			
				/*else if(releaseStatus =='2') {
					alert("该知识已经取消发布!");
					return;
				}*/
				
				
				var cfm = window.confirm('确定要发布吗?');
				if (cfm) {
					var fReleaseOgnID = justep.Context.getCurrentOgnID();
					var fReleaseOgnName = justep.Context.getCurrentOgnName();
					var fReleaseDeptID = justep.Context.getCurrentDeptID() || justep.Context.getCurrentOgnID();
					var fReleaseDeptName = justep.Context.getCurrentDeptName() || justep.Context.getCurrentOgnName();
					var fReleasePsnID = justep.Context.getCurrentPersonID();
					var fReleasePsnName = justep.Context.getCurrentPersonMemberNameWithAgent();
					var fReleasePsnFID = justep.Context.getCurrentPersonMemberFID();
					var fReleasePsnFName = justep.Context.getCurrentPersonMemberFNameWithAgent();
					var fReleaseTime = justep.Date.toString(justep.System
							.datetime(), justep.Date.STANDART_FORMAT);
					data.setRowData(kwid, [fReleaseOgnID, fReleaseOgnName,
							fReleaseDeptID, fReleaseDeptName, fReleasePsnID,
							fReleasePsnName, fReleasePsnFID, fReleasePsnFName,
							fReleaseTime, '1', '已发布'], ['fReleaseOgnID',
							'fReleaseOgnName', 'fReleaseDeptID',
							'fReleaseDeptName', 'fReleasePsnID',
							'fReleasePsnName', 'fReleasePsnFID',
							'fReleasePsnFName', 'fReleaseTime',
							'fReleaseStatus', 'fReleaseStatusName']);
					data.saveData();
					alert("发布成功!");
				}
			} else {
				alert("当前没有可供发布的知识!");
				return;
			}
		} catch (e) {
			alert("发布知识出错!");
		}
	}
}

// 取消发布知识
function cancelRelaseKnowledge() {
	var data = justep.xbl('dKnowledge');
	if (data) {
		try {
			var kwid = data.getCurrentRowId();
			if (kwid != undefined && kwid != '') {
				appCommon.DataUtils.refreshDataByRowIds(data,kwid);
				var releaseStatus = data.getValue("fReleaseStatus",kwid);
				if(releaseStatus == '0') {
					alert("该知识还未发布!");
					return;
				} else if(releaseStatus =='2') {
					alert("该知识已经取消发布!");
					return;
				}
				var cfm = window.confirm('确定要取消发布吗?');
				if (cfm) {
					data.setValue("fReleaseStatus", "2");
					data.setValue("fReleaseStatusName", "已取消");
					data.saveData();
					alert('取消发布成功!');
				}
			} else {
				alert("当前没有可供取消的知识!");
				return;
			}
		} catch (e) {
			alert("取消发布失败! ");
		}
	}
}
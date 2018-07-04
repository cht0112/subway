var mainActivity = {};
mainActivity.isTreeRoot = function(rowID) {
	var dOrgTree = justep.xbl("dOrgTree");
	if (!rowID)
		rowID = dOrgTree.getCurrentRowId();
	return justep.OpmUtils.isTreeRoot(rowID);
};
mainActivity.getDisplayOrgKinds = function() {
	var displayOrgKinds = "";
	displayOrgKinds = displayOrgKinds + ",ogn";
//	if (document.getElementById("cbShowOgn").checked)
//		displayOrgKinds = displayOrgKinds + ",ogn";
	if (document.getElementById("cbShowDpt").checked)
		displayOrgKinds = displayOrgKinds + ",dpt";
//	if (document.getElementById("cbShowPos").checked)
//		displayOrgKinds = displayOrgKinds + ",pos";
	if (document.getElementById("cbShowPsm").checked)
		displayOrgKinds = displayOrgKinds + ",psm";
	if (displayOrgKinds.length > 0)
		displayOrgKinds = displayOrgKinds.substring(1);
	else
		displayOrgKinds = "ogn,dpt,pos,psm";
	return displayOrgKinds;
};
mainActivity.gridOrgTreeShowNodeImg = function(event) {
	var orgKind = event.grid.getValueById(event.rowId, "sOrgKindID");
	var validState = event.grid.getValueById(event.rowId, "sValidState");
	if (mainActivity.isTreeRoot(event.rowId)) {
		orgKind = "root";
		validState = 1;
	}
	return justep.Resource.getOrgImgURL(orgKind, validState == 0);
};
mainActivity.refreshNewItemsMenu = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	var orgKind = "";
	if (mainActivity.isTreeRoot())
		orgKind = "root";
	else
		orgKind = dOrgTree.getValue("sOrgKindID");
	/**
	if ("root,ogn".indexOf(orgKind) > -1)
		xforms("newItemsMenu").menu.setItemEnabled("newOgn");
	else
		xforms("newItemsMenu").menu.setItemDisabled("newOgn");
**/
//	if ("ogn,dpt".indexOf(orgKind) > -1) {
	if ("ogn".indexOf(orgKind) > -1) {
		xforms("newItemsMenu").menu.setItemEnabled("newDpt");
//		xforms("newItemsMenu").menu.setItemEnabled("newPos");
	} else {
		xforms("newItemsMenu").menu.setItemDisabled("newDpt");
//		xforms("newItemsMenu").menu.setItemDisabled("newPos");
	}

//	if ("ogn,dpt,pos".indexOf(orgKind) > -1) {
	if ("ogn,dpt".indexOf(orgKind) > -1) {
		xforms("newItemsMenu").menu.setItemEnabled("newPerson");
		xforms("newItemsMenu").menu.setItemEnabled("assignPerson");
	} else {
		xforms("newItemsMenu").menu.setItemDisabled("newPerson");
		xforms("newItemsMenu").menu.setItemDisabled("assignPerson");
	}
};
mainActivity.btnInsertMoreClick = function(event) {
	mainActivity.refreshNewItemsMenu();
	xforms("newItemsMenu").show(event.srcElement || event.target);
};
mainActivity.dOrgTreeAfterRefresh = function(event) {
	xforms("newItemsMenu").hide();
	mainActivity.refreshListData();
};
mainActivity.dOrgTreeIndexChanged = function(event) {
	xforms("newItemsMenu").hide();
	mainActivity.refreshListData();
};
mainActivity.dOrgListAfterRefresh = function(event) {
	mainActivity.setComponentsStatus();
};
mainActivity.dOrgListAfterRefreshPage = function(event) {
	mainActivity.setComponentsStatus();
};
mainActivity.dOrgListIndexChanged = function(event) {
	mainActivity.setComponentsStatus();
};
mainActivity.gridOrgListSOrgKindIDRender =
		function(event) {
			var orgKind = event.value;
			var disable = (event.cell.getValueByColId("sValidState") != 1);
			var isMasterPsm = (event.cell.getValueByColId("sParent") == event.cell.getValueByColId("personMainOrgID"));

			return "<img src='"
					+ justep.Request.convertURL(justep.OpmUtils.getOrgImgURL(orgKind, disable, isMasterPsm))
					+ "' alt='" + justep.OpmUtils.getOrgKindLabel(orgKind) + "'/>";
		};
mainActivity.gridOrgTreeCellHint = function(event) {
	var rowIndex = event.grid.getRowIndex(event.rowId);
	return event.grid.getValueByName("sFName", rowIndex);
};
mainActivity.btnEditClick = function(event) {
	var dOrgList = justep.xbl("dOrgList");
	if (dOrgList.getRowId() == "")
		return;
	var orgKind = dOrgList.getValue("sOrgKindID");
	if (orgKind != "psm")
		justep.xbl("wdOrgDetail").open( {
			"openMode" : "edit",
			"id" : dOrgList.getRowId()
		});
	else
		justep.xbl("wdPersonDetail").open( {
			"openMode" : "edit",
			"personID" : dOrgList.getValue("sPersonID"),
			"orgID" : dOrgList.getValue("sParent"),
			"sCode" : dOrgList.getValue("sCode")
		});
};
mainActivity.newItemsMenuClick = function(event) {
	var dOrgTree = justep.xbl("dOrgTree");
	menuitemId = event.getData().itemId;
	var parentID = (mainActivity.isTreeRoot() ? "" : dOrgTree.getRowId());
	/**
	if (menuitemId == "newOgn") {
		justep.xbl("wdOrgDetail").open( {
			"openMode" : "new",
			"orgKindID" : "ogn",
			"parent" : parentID
		});
	} else 
**/
	if (menuitemId == "newDpt") {
		justep.xbl("wdOrgDetail").open( {
			"openMode" : "new",
			"orgKindID" : "dpt",
			"parent" : parentID
		});
	} 
/**	
	else if (menuitemId == "newPos") {
		justep.xbl("wdOrgDetail").open( {
			"openMode" : "new",
			"orgKindID" : "pos",
			"parent" : parentID
		});
	} 
**/	else if (menuitemId == "newPerson") {
		justep.xbl("wdPersonDetail").open( {
			"openMode" : "new",
			"orgID" : parentID
		});
	} else if (menuitemId == "assignPerson") {
		justep.xbl("wdAssignPerson").open( {
			"rootFilter" : "SA_OPOrg.sParent is null",
			"fixedFilter" : "",
			"manageTypeCodes" : "",
			"displayableOrgKinds" : "ogn,dpt,pos,psm",
			"selectableOrgKinds" : "psm",
			"onlyMasterPsm" : true,
			"forceRefresh" : true
		});
	}
};
mainActivity.wdAssignPersonReceive =
		function(event) {
			var dOrgTree = justep.xbl("dOrgTree");
			var orgID = mainActivity.isTreeRoot() ? null : dOrgTree.getCurrentRowId();
			var personIDs = new justep.Request.ListParam();

			for ( var i = 0; i < event.data.getRowsNum(); i++) {
				var personID = event.data.getValueByName("sPersonID", i);
				personIDs.add(new justep.Request.SimpleParam(personID, justep.XML.Namespaces.XMLSCHEMA_STRING));
			}

			var params = new justep.Request.ActionParam();
			params.setList("personIDs", personIDs);
			if (orgID)
				params.setString("orgID", orgID);
			params.setInteger("psmValidState", 1);
			params.setBoolean("autoEnableOldPsm", false);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
					"assignPersonAction", params, null, function(callbackData) {
						if (callbackData.state) {
							alert("分配人员成功。");
							mainActivity.refreshListData();
						} else {
							justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						}
					});
		};
mainActivity.wdOrgDetailReceive = function(event) {
	mainActivity.resetTreeNode();
	mainActivity.refreshListData(event.data.id);
};
mainActivity.wdPersonDetailReceive = function(event) {
	mainActivity.resetTreeNode();
	mainActivity.refreshListData(justep.OpmUtils.formatPsmID(event.data.personID, event.data.orgID));
};
mainActivity.resetTreeNode = function(rowID) {
	var dOrgTree = justep.xbl("dOrgTree");
	justep.OpmUtils.resetTreeNode(dOrgTree, rowID);
};
mainActivity._isTreeRefreshing = false;
mainActivity.refreshTreeData = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	/*var isShowDisabled = document.getElementById("cbShowDisabled").checked;
	if (isShowDisabled)
		dOrgTree.setFilter("disableFilter", "SA_OPOrg.sValidState in (0, 1)");
	else
		dOrgTree.setFilter("disableFilter", "SA_OPOrg.sValidState = 1");*/

	var gridOrgTree = justep.xbl("gridOrgTree").grid;
	var oldIDPath = justep.OpmUtils.getTreeGridIdPath(gridOrgTree);
	var oldIndex = dOrgTree.getIndex(dOrgTree.getCurrentRowId());

	mainActivity._isTreeRefreshing = true;
	try {
		dOrgTree.refreshData();
		if (oldIndex <= 0 && !!dOrgTree.getCurrentRowId())
			dOrgTree.expandRow(dOrgTree.getCurrentRowId());
		else
			dOrgTree.expandTreeByIdPath(oldIDPath);
	} finally {
		mainActivity._isTreeRefreshing = false;
		mainActivity.refreshListData();
	}
};
mainActivity.refreshListData =
		function(id) {
			var dOrgList = justep.xbl("dOrgList");
			var dOrgTree = justep.xbl("dOrgTree");

			if (mainActivity._isTreeRefreshing)
				return;

			var isShowAllChildren = document.getElementById("cbShowAllChildren").checked;
			if (mainActivity.isTreeRoot()) {
				if (isShowAllChildren)
					dOrgList.setFilter("parentFilter", "");
				else
					dOrgList.setFilter("parentFilter", "SA_OPOrg.sParent is null");
			} else if (!dOrgTree.getCurrentRowId()) {
				dOrgList.setFilter("parentFilter", "1=0");
			} else {
				if (isShowAllChildren)
					dOrgList.setFilter("parentFilter", "SA_OPOrg.sFID like '"
							+ dOrgTree.getValue("sFID") + "/%'");
				else
					dOrgList.setFilter("parentFilter", "SA_OPOrg.sParent = '"
							+ dOrgTree.getCurrentRowId() + "'");
			}
			
			/*var isOnlyShowMasterPsm = document.getElementById("cbOnlyShowMasterPsm").checked;
			if (isOnlyShowMasterPsm)
				dOrgList.setFilter("masterPsmFilter",
						"SA_OPOrg.sOrgKindID <> 'psm' or SA_OPOrg.sParent = SA_OPPerson.sMainOrgID");
			else
				dOrgList.setFilter("masterPsmFilter", "");*/
			
			/*var isShowDisabled = document.getElementById("cbShowDisabled").checked;
			if (isShowDisabled)
				dOrgList.setFilter("disableFilter", "SA_OPOrg.sValidState in (0, 1)");
			else
				dOrgList.setFilter("disableFilter", "SA_OPOrg.sValidState = 1");*/
				
			var displayOrgKinds = mainActivity.getDisplayOrgKinds();
			if (displayOrgKinds) {
				dOrgList.setFilter("orgKindsFilter", "SA_OPOrg.sOrgKindID in ('"
						+ displayOrgKinds.split(",").join("','") + "')");
			} else
				dOrgList.setFilter("orgKindsFilter", "");
				
			var searchText = document.getElementById("inputSearchList").value;
			if (!justep.OpmUtils.checkSearchText(searchText, true)) {
				document.getElementById("inputSearchList").value = "";
				searchText = "";
			}
			
			if (!!searchText)
				dOrgList.setFilter("searchFilter", justep.OpmUtils.getMultiLikeFilter(
						"SA_OPOrg.sName,SA_OPOrg.sCode,SA_OPPerson.sSex,SA_OPPerson.sIDCard", searchText));
			else
				dOrgList.setFilter("searchFilter", "");

			dOrgList.refreshData();
			if (id && dOrgList.getCurrentRowId() != id) {
				dOrgList.setIndex(dOrgList.getIndex(id));
			}
		};
mainActivity.model1ModelConstructDone = function(event) {
	mainActivity.refreshTreeData();
};
mainActivity.setComponentsStatus = function() {
	var dOrgTree = justep.xbl("dOrgTree");
	var dOrgList = justep.xbl("dOrgList");

	var treeValidState = dOrgTree.getValue("sValidState");
	var listRowID = dOrgList.getCurrentRowId();
	var listValidState = dOrgList.getValue("sValidState");
	var listOrgKind = dOrgList.getValue("sOrgKindID");

	var listIsMasterPsm = dOrgList.getValue("sParent") == dOrgList.getValue("personMainOrgID");

	justep.xbl("btnInsertMore").setDisabled(!mainActivity.isTreeRoot() && (treeValidState == 0));
	justep.xbl("btnEdit").setDisabled(!listRowID);
	//justep.xbl("btnEnable").setDisabled(!listRowID || listValidState == 1);
	//justep.xbl("btnDisable").setDisabled(!listRowID || listValidState == 0);
	justep.xbl("btnLogicDelete").setDisabled(!listRowID);
	justep.xbl("btnSort").setDisabled(!listRowID);
	justep.xbl("btnMove").setDisabled(!listRowID);

	//justep.xbl("btnChangeMainOrg").setDisabled(!listRowID || listOrgKind != "psm" || !listIsMasterPsm);
	justep.xbl("btnResetPassword").setDisabled(!listRowID || listOrgKind != "psm");
};
mainActivity.btnEnableClick =
		function(event) {
			var dOrgList = justep.xbl("dOrgList");
			var id = dOrgList.getCurrentRowId();
			var name = dOrgList.getValue("sName");
			var version = dOrgList.getValue("version");
			var orgKind = dOrgList.getValue("sOrgKindID");
			var isMasterPsm = (dOrgList.getValue("sParent") == dOrgList.getValue("personMainOrgID"));
			var personValidState = dOrgList.getValue("personValidState");
			var personID = dOrgList.getValue("personID");
			var params = new justep.Request.ActionParam();
			if (orgKind != "psm" || isMasterPsm || personValidState == 1) {
				if (!confirm("提示：“启用”操作会同时启用当前选中组织的所有直属下级。\n\r\n\r确实要启用“" + name + "”吗？"))
					return;

				params.setString("id", id);
				params.setInteger("version", version);
				params.setBoolean("enableSlavePsm", false);
				justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
						"enableOrgAction", params, null, function(callbackData) {
							if (callbackData.state) {
								alert("启用“" + name + "”成功。");
								if (orgKind != "psm")
									mainActivity.resetTreeNode();
								mainActivity.refreshListData();
							} else
								justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						});
			} else {
				if (!confirm("提示：当前人员的主人员成员已被禁用，如果要启用当前人员成员，必须先启用主人员成员。\n\r\n\r确实要启用“" + name + "”的主人员成员和当前人员成员吗？"))
					return;
				params.setString("psmID", id);
				params.setInteger("psmVersion", version);
				params.setString("personID", personID);
				justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
						"enableSlavePsmAction", params, null, function(callbackData) {
							if (callbackData.state) {
								alert("启用“" + name + "”成功。");
								mainActivity.refreshListData();
							} else
								justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						});
			}
		};
//mainActivity.btnDisableClick =
//		function(event) {
//			var dOrgList = justep.xbl("dOrgList");
//			var id = dOrgList.getCurrentRowId();
//			var name = dOrgList.getValue("sName");
//			var version = dOrgList.getValue("version");
//			var orgKind = dOrgList.getValue("sOrgKindID");
//			if (!confirm("提示：“禁用”操作会同时禁用当前选中组织的所有直属下级及直属人员的所有人员成员。\n\r\n\r确实要禁用“" + name + "”吗？"))
//				return;
//
//			var params = new justep.Request.ActionParam();
//			params.setString("id", id);
//			params.setInteger("version", version);
//			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
//					"disableOrgAction", params, null, function(callbackData) {
//						if (callbackData.state) {
//							alert("禁用“" + name + "”成功。");
//							if (orgKind != "psm")
//								mainActivity.resetTreeNode();
//							mainActivity.refreshListData();
//						} else {
//							justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
//						}
//					});
//		};
mainActivity.btnLogicDeleteClick =
		function(event) {
			var dOrgList = justep.xbl("dOrgList");
			var id = dOrgList.getCurrentRowId();
			var name = dOrgList.getValue("sName");
			var version = dOrgList.getValue("version");
			var orgKind = dOrgList.getValue("sOrgKindID");
			if (!confirm("提示：“删除”操作会同时删除当前选中组织的所有直属下级及直属人员的所有人员成员。删除后的组织您还可以在回收站中进行“还原”和“清除”操作。\n\r\n\r确实要删除“" + name
					+ "”吗？"))
				return;

			var params = new justep.Request.ActionParam();
			params.setString("id", id);
			params.setInteger("version", version);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
					"logicDeleteOrgAction", params, null, function(callbackData) {
						if (callbackData.state) {
							alert("删除“" + name + "”成功。");
							if (orgKind != "psm")
								mainActivity.resetTreeNode();
							mainActivity.refreshListData();
						} else {
							justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						}
					});
		};
mainActivity.btnSortClick = function(event) {
	var dOrgTree = justep.xbl("dOrgTree");
	justep.xbl("wdSortOrgs").open( {
		"parentID" : mainActivity.isTreeRoot() ? null : dOrgTree.getCurrentRowId()
	});
};
mainActivity.wdSortOrgsReceive =
		function(event) {
			var dOrgTree = justep.xbl("dOrgTree");
			var parentID = mainActivity.isTreeRoot() ? null : dOrgTree.getCurrentRowId();
			var ids = new justep.Request.ListParam();
			var versions = new justep.Request.ListParam();

			for ( var i = 0; i < event.data.getRowsNum(); i++) {
				var id = event.data.getRowId(i);
				var version = event.data.getValueByName("version", i);
				ids.add(new justep.Request.SimpleParam(id, justep.XML.Namespaces.XMLSCHEMA_STRING));
				versions.add(new justep.Request.SimpleParam(version, justep.XML.Namespaces.XMLSCHEMA_INTEGER));
			}

			var params = new justep.Request.ActionParam();
			params.setList("ids", ids);
			params.setList("versions", versions);
			if (parentID)
				params.setString("parentID", parentID);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
					"sortOrgsAction", params, null, function(callbackData) {
						if (callbackData.state) {
							alert("排序成功。");
							mainActivity.resetTreeNode();
							mainActivity.refreshListData();
						} else {
							justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						}
					});
		};
mainActivity.btnMoveClick = function(event) {
	var dOrgList = justep.xbl("dOrgList");
	var name = dOrgList.getValue("sName");
	if (!confirm("警告：如果组织已发生过业务数据，移动组织可能会造成相关的业务功能错误！\n\r\n\r确实要移动“" + name + "”吗？"))
		return;
	var fixedFilter = "not (SA_OPOrg.sFID like '" + dOrgList.getValue("sFID") + "%')";
	justep.xbl("wdSelectMoveToOrg").open( {
		"rootFilter" : "SA_OPOrg.sParent is null",
		"fixedFilter" : fixedFilter,
		"manageTypeCodes" : "",
		"displayableOrgKinds" : "ogn,dpt,pos",
		"selectableOrgKinds" : "ogn,dpt,pos",
		"onlyMasterPsm" : false,
		"forceRefresh" : true,
		"displayVirtualRoot" : true
	});
};
mainActivity.wdSelectMoveToOrgReceive =
		function(event) {
			var dOrgList = justep.xbl("dOrgList");
			var dOrgTree = justep.xbl("dOrgTree");
			
			var id = dOrgList.getCurrentRowId();
			var name = dOrgList.getValue("sName");
			var version = dOrgList.getValue("version");
			var oldParentID = dOrgList.getValue("sParent");
			if (!oldParentID) oldParentID = "";
			var newParentID = event.data.getRowId(0);
			if (mainActivity.isTreeRoot(newParentID)) 
				newParentID = "";
			
			if (newParentID == oldParentID) {
				alert("不能移动到当前所在的组织！");
				return;
			}
				
			var newParentName = event.data.getValueByName("sName", 0);
			var orgKind = dOrgList.getValue("sOrgKindID");
			if (!confirm("确实要移动“" + name + "”到“" + newParentName + "”下吗？"))
				return;

			var params = new justep.Request.ActionParam();
			params.setString("id", id);
			params.setInteger("version", version);
			params.setString("newParentID", newParentID);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
					"moveOrgAction", params, null, function(callbackData) {
						if (callbackData.state) {
							alert("移动“" + name + "”成功。");

							if (orgKind != "psm") {
								var currentTreeFID = dOrgTree.getValue("sFID");
								if (currentTreeFID.indexOf("/" + newParentID) > -1) {
									mainActivity.resetTreeNode(newParentID);
								} else {
									mainActivity.resetTreeNode();
									mainActivity.resetTreeNode(newParentID);
								}
							}
							dOrgTree.setIndex(dOrgTree.getIndex(newParentID));
						} else {
							justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						}
					});
		};
//mainActivity.btnChangeMainOrgClick = function(event) {
//	var dOrgList = justep.xbl("dOrgList");
//	var name = dOrgList.getValue("sName");
//	if (!confirm("提示：变更人员所属组织会同时禁用当前的主人员成员。\n\r\n\r确实要设置人员“" + name + "”的所属组织吗？"))
//		return;
//	justep.xbl("wdChangeMainOrg").open( {
//		"rootFilter" : "SA_OPOrg.sParent is null",
//		"fixedFilter" : "",
//		"manageTypeCodes" : "",
//		"displayableOrgKinds" : "ogn,dpt,pos",
//		"selectableOrgKinds" : "ogn,dpt,pos",
//		"onlyMasterPsm" : false,
//		"forceRefresh" : true
//	});
//};
mainActivity.wdChangeMainOrgReceive =
		function(event) {
			var dOrgList = justep.xbl("dOrgList");
			var name = dOrgList.getValue("sName");
			var personID = dOrgList.getValue("personID");
			var personVersion = dOrgList.getValue("personVersion");
			var newMainOrgID = event.data.getRowId(0);
			var newMainOrgName = event.data.getValueByName("sName", 0);
			var oldMainOrgID = dOrgList.getValue("personMainOrgID");
			if (newMainOrgID == oldMainOrgID) {
				alert("选中的组织与当前的所属组织相同！");
				return;
			}
			if (!confirm("确实要设置“" + name + "”的所属组织为“" + newMainOrgName + "”吗？"))
				return;

			var params = new justep.Request.ActionParam();
			params.setString("id", personID);
			params.setInteger("version", personVersion);
			params.setString("newMainOrgID", newMainOrgID);
			params.setBoolean("disableOldMasterPsm", true);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
					"changePersonMainOrgAction", params, null, function(callbackData) {
						if (callbackData.state) {
							alert("设置“" + name + "”的所属组织成功。");
							mainActivity.refreshListData();
						} else {
							justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						}
					});
		};
mainActivity.btnResetPasswordClick =
		function(event) {
			var dOrgList = justep.xbl("dOrgList");
			var name = dOrgList.getValue("sName");
			var personID = dOrgList.getValue("personID");
			var personVersion = dOrgList.getValue("personVersion");
			if (!confirm("提示：重置密码后，请尽快修改密码！\n\r\n\r确实要重置“" + name + "”的密码吗？"))
				return;

			var params = new justep.Request.ActionParam();
			params.setString("id", personID);
			params.setInteger("version", personVersion);
			justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
					"resetPasswordAction", params, null, function(callbackData) {
						if (callbackData.state) {
							alert("重置“" + name + "”的密码成功。");
							mainActivity.refreshListData();
						} else {
							justep.OpmUtils.showError(justep.Request.getServerError(callbackData));
						}
					});
		};
mainActivity.gridOrgListRowDblClick = function(event) {
	mainActivity.btnEditClick(event);
};
//mainActivity.btnSyncClick =
//		function(event) {
//			var r =
//					justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context
//							.getCurrentActivity(), "synchronizeMessengerOrgAction");
//			var msg = "同步即时通讯组织数据成功！";
//			if (!justep.Request.isBizSuccess(r)) {
//				msg = justep.Request.getServerError(r, '同步即时通讯组织数据失败！');
//			} else if (justep.XML.getNodeText(r.responseXML, "/root/data/*/*/@success") == 'false') {
//				msg =
//						justep.Request.getServerError(r, justep.XML.getNodeText(r.responseXML,
//								"/root/data/*/*/@message"));
//			}
//			justep.OpmUtils.showError(msg);
//		};
mainActivity.cbShowOgnClick = function(event){
	mainActivity.refreshListData();
};
mainActivity.cbShowDptClick = function(event){
	mainActivity.refreshListData();
};
mainActivity.cbShowPosClick = function(event){
	mainActivity.refreshListData();
};
mainActivity.cbShowPsmClick = function(event){
	mainActivity.refreshListData();
};
mainActivity.cbShowAllChildrenClick = function(event){
	mainActivity.refreshListData();
};
/*mainActivity.cbOnlyShowMasterPsmClick = function(event){
	mainActivity.refreshListData();
};*/
mainActivity.inputSearchListKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.refreshListData();
};
mainActivity.imageSearchListClick = function(event){
	mainActivity.refreshListData();
};
/*mainActivity.cbShowDisabledClick = function(event){
	mainActivity.refreshTreeData();
};*/
mainActivity.dOrgListRefreshCreateParam = function(event){
	event.param.setBoolean("splitFullIDCodeName", true);
};
mainActivity.imageSearchOrgClick = function(event){
	mainActivity.openSearchOrg();
};
mainActivity.inputSearchOrgKeydown = function(event){
	if (event.keyCode == 13)
		mainActivity.openSearchOrg();
};
mainActivity.openSearchOrg = function() {
	var searchText = document.getElementById("inputSearchOrg").value;
	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		document.getElementById("inputSearchOrg").value = "";
		searchText = "";
	}
	justep.xbl("wdSearchOrg").open({
		orgKinds : "ogn,dpt,pos",
		searchText : searchText
	});
};
mainActivity.wdSearchOrgReceive = function(event){
	var dOrgTree = justep.xbl("dOrgTree");
	var gridOrgTree = justep.xbl("gridOrgTree").grid;
	var sFID = event.data.getValueByName("sFID", 0);
	var idPath = justep.OpmUtils.getTreeGridIDPathByFullID(gridOrgTree, sFID);
	if (!!idPath)
		dOrgTree.expandTreeByIdPath(idPath);
};



/*mainActivity.trigger2Click = function(event){
	alert(77);
	var tt = justep.xbl("dOrgList");
	tt.refreshData();
};*/




mainActivity.trigger3Click = function(event){
	var dOrgList = justep.xbl("dOrgList");
	 var tt = dOrgList.getCurrentRowId();
//	 alert(tt);
};

mainActivity.trigger4Click = function(event){
	
};

//mainActivity.trigger1Click = function(event){
//	var dOrgList = justep.xbl("dOrgList");
//	var personData = justep.xbl("personData");
//	var scode = dOrgList.getValue("sCode");
//	//alert(scode);
//	//alert(personData.getCount());
//	personData.setFilter("filter1", "HR_BASE_INFO.Scode='"+scode+"'");
//	personData.refreshData();
//	//alert(personData.getCount());
//	//alert(personData.getCurrentId());
//	//var operatorId = personData.getValue("");
//	var operatorId = personData.getCurrentId()
//	alert(operatorId);
//	justep.xbl("wdPersonSkill").open({"HR_SKILL_INFO.oPERATORID":operatorId});
//	
//};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.wdPersonDetailClose = function(event){
	var orgList = justep.xbl("dOrgList");
	orgList.refreshData();
};

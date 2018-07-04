var orgSelect = {};

orgSelect.oldOrgs = [];

function addCurrentExecutor(event){
	var orgData = justep.xbl("orgTreeData");
	var sFID = orgData.getValue("sFID");
	if (sFID != "" && !existFID(sFID)) {
		var newRowId = generateGuid();
		var mainData = justep.xbl("main");
		mainData.insert(newRowId, mainData.getCount());
		mainData.setValue("sFID", sFID, newRowId);
		var sFName = orgData.getValue("sFName");
		mainData.setValue("sFName", sFName, newRowId);
		var sName = orgData.getValue("sName");
		mainData.setValue("sName", sName, newRowId);
	}
}

function existFID(sFID){
	var mainData = justep.xbl("main");
	var len = mainData.getCount();
	for (var i=0; i<len; i++){
		var rowId = mainData.getRowId(i);
		if (mainData.getValue("sFID", rowId) == sFID){
			return true;
		}
	}
	
	return false;
}



function generateGuid() {
	var guid = [];
	for (var i = 1; i <= 32; i++) {
		guid.push(Math.floor(Math.random() * 16.0).toString(16));
	}
	return guid.join("");
}


function removeCurrentExecutor(event){
	var mainData = justep.xbl("main");
	var currRowIndex = mainData.getIndex();
	if (currRowIndex >= 0) {
		mainData.removeByIndex(currRowIndex);
		mainData.xformsRefresh();
	}
}
function addExecutorTriggerClick(event){
	addCurrentExecutor();
}
function deleteExecutorTriggerClick(event){
	removeCurrentExecutor();
}

function allowToRight() {
	var orgData = justep.xbl("orgTreeData");
	var sFID = orgData.getValue("sFID");
	if (sFID != "" && !existFID(sFID)) {
		return true;
	}else{
		return false;
	}
}

function allowToLeft() {
	var mainData = justep.xbl("main");
	return mainData.getCount() > 0;
}

orgSelect.model1ModelConstruct = function(event){
		var process = justep.Context.getCurrentProcess();
		var activity = justep.Context.getCurrentActivity();
		var resourceID = justep.Context.getRequestParameter("resourceID");
		if (resourceID != null && resourceID != undefined && resourceID != ""){
			var parameter = '	<parameters xmlns:xbiz="http://www.justep.com/xbiz#">' +
			'		<parameter name="resourceID">' +
			'			<xbiz:simple type="' + justep.XML.Namespaces.XMLSCHEMA_STRING + '"' +
			'				>' + resourceID + '</xbiz:simple>' +
			'		</parameter>' +
			'		<parameter name="typeID">' +
			'			<xbiz:simple type="' + justep.XML.Namespaces.XMLSCHEMA_STRING + '"' +
			'				>SA_ProcessTemplate</xbiz:simple>' +
			'		</parameter>' +
			'	</parameters>';
			
			justep.Request.sendBizRequest(process, activity, "queryOrgsByResourceAction", parameter, null, function(data){
				if (data.state){
					
					var items = justep.XML.eval(data.response, "//item", "array");
					if (items != null && items != undefined && items.length > 0){
						for (var i=0; i<items.length; i++){
							var item = items[i];
							var sFID = justep.XML.getNodeText(item, "./sFID/text()", "");
							var sFName = justep.XML.getNodeText(item, "./sFName/text()", "");
							var sName = justep.XML.getNodeText(item, "./sName/text()", "");
							
							orgSelect.oldOrgs[sFID] = [];
							orgSelect.oldOrgs[sFID].sFID = sFID;
							orgSelect.oldOrgs[sFID].sFName = sFName;
							orgSelect.oldOrgs[sFID].sName = sName;
							
							var newRowId = generateGuid();
							var mainData = justep.xbl("main");
							mainData.insert(newRowId, mainData.getCount());
							mainData.setValue("sFID", sFID, newRowId);
							mainData.setValue("sFName", sFName, newRowId);
							mainData.setValue("sName", sName, newRowId);
						}
					}
				}
			});		
		}
};

orgSelect.grid1AfterIndexChanged = function(event){
	var mainData = justep.xbl("main");
	mainData.xformsRefresh();
};
function trigger6Click(event){
	var dialog = parent.justep.xbl("windowDialog1");
	if (dialog) {
		dialog.close();
	}
}
function trigger5Click(event){
	var newOrgs = [];
	var mainData = justep.xbl("main");
	var len = mainData.getCount();
	for (var i=0; i<len; i++){
		var rowId = mainData.getRowId(i);
		var sFID = mainData.getValue("sFID", rowId);
		var sFName = mainData.getValue("sFName", rowId);
		newOrgs[sFID] = [];
		newOrgs[sFID].sFID = sFID;
		newOrgs[sFID].sFName = sFName;
	}
	
	if (!eq(orgSelect.oldOrgs, newOrgs)){
		var process = justep.Context.getCurrentProcess();
		var activity = justep.Context.getCurrentActivity();
		var resourceID = justep.Context.getRequestParameter("resourceID");
		var newOrgsMap = "<xbiz:map>";
		for (var item in newOrgs){
			var sFID = newOrgs[item].sFID;
			var sFName = newOrgs[item].sFName;
			newOrgsMap = newOrgsMap + '<item key="' + sFID + '">' +
				'<xbiz:simple type="' + justep.XML.Namespaces.XMLSCHEMA_STRING + '">' + sFName + '</xbiz:simple>' +
				'</item>';						
		}
		newOrgsMap = newOrgsMap + "</xbiz:map>";
		
		var parameter = '	<parameters xmlns:xbiz="http://www.justep.com/xbiz#">' +
		'		<parameter name="resourceID">' +
		'			<xbiz:simple type="' + justep.XML.Namespaces.XMLSCHEMA_STRING + '"' +
		'				>' + resourceID + '</xbiz:simple>' +
		'		</parameter>' +
		'		<parameter name="typeID">' +
		'			<xbiz:simple type="' + justep.XML.Namespaces.XMLSCHEMA_STRING + '"' +
		'				>SA_ProcessTemplate</xbiz:simple>' +
		'		</parameter>' +
		'		<parameter name="typeName">' +
		'			<xbiz:simple type="' + justep.XML.Namespaces.XMLSCHEMA_STRING + '"' +
		'				>流程模板</xbiz:simple>' +
		'		</parameter>' +
		'		<parameter name="newOrgs">' + newOrgsMap + 
		'		</parameter>' +
		'	</parameters>';
		
		justep.Request.sendBizRequest(process, activity, "saveResourceControl2Action", parameter, null, function(data){
			if (!data.state){
				alert("保存数据失败！");
			}
		});		
	}
	
	trigger6Click();
}

function eq(a1, a2){
	if (a1.length == a2.length){
		for (var i in a1){
			if (a2[i]==null || a2[i]==undefined){
				return false;
			}
		}
		for (var i in a2){
			if (a1[i]==null || a1[i]==undefined){
				return false;
			}
		}
		
		return true;
	}else{
		return false;
	}
}


orgSelect.searchTextKeydown = function(event){
	if (event.keyCode == 13){
		searchOrg();
	}
};

orgSelect.searchButtonOnclick = function(event){
	searchOrg();
};

function searchOrg(){
	var searchText = justep("searchText").value;

	if (!justep.OpmUtils.checkSearchText(searchText, true)) {
		document.getElementById("searchText").value = "";
		searchText = "";
	}
	justep.xbl("wdSearchOrg").open({
		orgKinds : "ogn,dpt,pos,psm",
		searchText : searchText
	});
}
orgSelect.wdSearchOrgReceive = function(event){
	var dOrgTree = justep.xbl("orgTreeData");
	var sFID = event.data.getValueByName("sFID", 0);
	var gridOrgTree = justep.xbl("allOrgGrid").grid;
	var idPath = justep.OpmUtils.getTreeGridIDPathByFullID(gridOrgTree, sFID);
	if (!!idPath)
		dOrgTree.expandTreeByIdPath(idPath);
};
orgSelect.model1Load = function(event){
	var dOrgTree = justep.xbl("orgTreeData");
	if (dOrgTree.getCurrentRowId())
		dOrgTree.getStore().expand(dOrgTree.getCurrentRowId());


};

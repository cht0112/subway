var docCenterPermission = {};
var docPath = null;
justep.windowDialogReceiver.acceptParentParamsFun = function(event){
	var data = event.data;
	docPath = data.docPath;
	var docAuthList = justep.xbl("docAuthList");
	docAuthList.filters.setFilter("docPathFilter", "SA_DocAuth.sDocPath='" + docPath + "'");
	docAuthList.refreshData();
	/*if(data.docType=="doc"){
		justep.xbl('permissionType').loadXML("<rows>" +
				"<row id='per0'><cell>不可见</cell><cell>0</cell><cell>true</cell></row>" +
				
				"<row id='per3'><cell>读取</cell><cell>3</cell><cell>true</cell></row>" +
				"<row id='per7'><cell>下载</cell><cell>7</cell><cell>true</cell></row>" +
				"<row id='per519'><cell>下载 修改</cell><cell>519</cell><cell>true</cell></row>" +
				"<row id='per1543'><cell>下载 修改 删除</cell><cell>1543</cell><cell>true</cell></row>" +
				"<row id='per16384'><cell>管理</cell><cell>16384</cell><cell>true</cell></row>" +
				"<row id='per32767'><cell>完全控制</cell><cell>32767</cell><cell>true</cell></row>" +
				"</rows>");
		//justep.xbl('permissionType').deleteData('per1,per257,per263,per775,per1799');
	}else{
		justep.xbl('permissionType').loadXML("<rows>" +
				"<row id='per0'><cell>不可见</cell><cell>0</cell><cell>true</cell></row>" +
				"<row id='per1'><cell>列表</cell><cell>1</cell><cell>true</cell></row>" +
				"<row id='per3'><cell>读取</cell><cell>3</cell><cell>true</cell></row>" +
				"<row id='per7'><cell>下载</cell><cell>7</cell><cell>true</cell></row>" +
				"<row id='per519'><cell>下载 修改</cell><cell>519</cell><cell>true</cell></row>" +
				"<row id='per1543'><cell>下载 修改 删除</cell><cell>1543</cell><cell>true</cell></row>" +
				"<row id='per257'><cell>上传</cell><cell>257</cell><cell>true</cell></row>" +
				"<row id='per263'><cell>下载 上传</cell><cell>263</cell><cell>false</cell></row>" +
				"<row id='per775'><cell>下载 上传 修改</cell><cell>775</cell><cell>false</cell></row>" +
				"<row id='per1799'><cell>下载 上传 修改 删除</cell><cell>1799</cell><cell>false</cell></row>" +
				"<row id='per16384'><cell>管理</cell><cell>16384</cell><cell>true</cell></row>" +
				"<row id='per32767'><cell>完全控制</cell><cell>32767</cell><cell>true</cell></row>" +
				"</rows>");
	}*/	
}


function newDocAuth(event){
	if(event){
		var item = event.getData().menuitem;
		if("org" == item.value){
			justep.xbl("orgPermissionDialg").open();
			//justep.xbl("orgSelectDialog").open();
		}else if("person" == item.value){
			justep.xbl("personPermissionDialg").open();
			//justep.xbl("personSelectDialog").open();
		}
	}	
}

function beforeOrgSelected() {
/*    return {
   getSimpleStore : function() {
    var store = new SimpleStore("spcdata", "sName");
    return store;
   },
   getShowAlias : function() {
    return null;
   },
   selectKind : 'ogn,dpt',
   viewKind : 'ogn,dpt'
  }
*/  
  return {
	  orgKind : "ogn,dpt,pos",
	  returnColumn : "sFID,sName"
  };
}

function beforePersonSelected() { 
  return {
	  returnColumn : "sFID,sName"
  };
}

function afterOrgSelected(event){
	//var store = event.data.getSimpleStore();
	//if (store.getValueByName("sFID") == null || store.getValueByName("sFID") == "undefined" || store.getValueByName("sFID") === "" ) return;
	if(!event.data[0])
		return;
	var orgName = event.data[0].sName;
	var orgCode = event.data[0].sFID;
	if(orgName && orgCode){
		newDocAuthList();
		var docAuthList = justep.xbl("docAuthList");
		var rowId = docAuthList.getCurrentRowId();
		docAuthList.setValue("sAuthorizeeDeptName", orgName, rowId);
		docAuthList.setValue("sAuthorizeeFID", orgCode, rowId);
	}
}

function afterPersonSelected(event){
	//var store = event.data.getSimpleStore();
	//if (store.getValueByName("sFID") == null || store.getValueByName("sFID") == "undefined" || store.getValueByName("sFID") === "" ) return;
	if(!event.data[0])
		return;
	var personName = event.data[0].sName;
	var personCode = event.data[0].sFID;
	if(personName && personCode){
		newDocAuthList();
		var docAuthList = justep.xbl("docAuthList");
		var rowId = docAuthList.getCurrentRowId();
		docAuthList.setValue("sAuthorizeeName", personName, rowId);
		docAuthList.setValue("sAuthorizeeFID", personCode, rowId);
	}
}

function newDocAuthList(){
	var docAuthList = justep.xbl("docAuthList");
	docAuthList.newData(0);
	var rowId = docAuthList.getCurrentRowId();
	docAuthList.setValue("sDocPath", docPath, rowId);
	docAuthList.setValue("sAuthorizerFID", justep.Context.getCurrentPersonMemberFID(), rowId);
	docAuthList.setValue("sAuthorizerName", justep.Context.getCurrentPersonMemberName(), rowId);
	docAuthList.setValue("sAuthorizerDeptName", justep.Context.getCurrentDeptName(), rowId);
	docAuthList.setValue("sGrantTime", justep.System.datetimeString(), rowId);
	docAuthList.getStore().setValueById(rowId, "version", "0");
}

function getAccessLabel() {
	var docAuthList = justep.xbl("docAuthList");
	var rowId = docAuthList.getCurrentRowId();
	var access = docAuthList.getValue("sAccess", rowId);
	var permissionType = justep.xbl("permissionType");
	var ids = permissionType.locate([access], ["col2"]);
	if (ids.length > 0){
		return permissionType.getValue('col1', ids[0]);
	}
	else{
		return "";
	}
}



function docAuthListGridInit(event){
	event.source.grid.initXFCalculate=true;
}


docCenterPermission.trigger1Click = function(event){
	var targetEle = event.srcElement || event.target;
    xforms("newAuthMenu").show(targetEle.id);
};

docCenterPermission.trigger5Click = function(event){
	justep.windowDialogReceiver.windowCancel()
};

/**
	name:orgDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
docCenterPermission.orgPermissionDialgReceive = function(event){
	newDocAuthList();
};

/**
	name:orgDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
docCenterPermission.personPermissionDialgReceive = function(event){
	newDocAuthList();
};

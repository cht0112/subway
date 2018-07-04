function displayNameCheck(){
	return new RegExp(/^[A-Za-z0-9]{0,200}$/g).test(justep.xbl('nameSpace').getValue('sDisplayName'));
}
var docSetting = {};
var docAuthList=null;
var docAuthListArr=null;
var access=1;
function openNewDialog(){
	var tmpNameSpace = justep.xbl("tmpNameSpace");
	tmpNameSpace.setValue("sDisplayName", "", "tmpNameSpaceRow");
	tmpNameSpace.setValue("sUrl", "", "tmpNameSpaceRow");
	xforms("newNameSpaceDlg").open();
}

function newDocSetting(){
	var nameSpace = justep.xbl("nameSpace");
	nameSpace.newData(0, "_is_root_");
	var nameSpaceId = nameSpace.getCurrentRowId();
	var tmpNameSpace = justep.xbl("tmpNameSpace");
	var displayName = tmpNameSpace.getValue("sDisplayName", "tmpNameSpaceRow");
	nameSpace.setValue("sDisplayName", displayName, nameSpaceId);
	nameSpace.setValue("sUrl", tmpNameSpace.getValue("sUrl", "tmpNameSpaceRow"), nameSpaceId);
	nameSpace.setValue("sAccessMode", tmpNameSpace.getValue("sAccessMode", "tmpNameSpaceRow"), nameSpaceId);
	nameSpace.setValue("sFlag","1", nameSpaceId);
	nameSpace.getStore().setValueById(nameSpaceId, "version", "0");
	nameSpace.setRowState(nameSpaceId, "new");
	var docNode = justep.xbl("docNode");
	docNode.newData(0);
	var newDirID = docNode.getCurrentRowId();
	docNode.setValue("sDocName",displayName, newDirID);
	docNode.setValue("sKind","dir", newDirID);
	docNode.setValue("sDocPath","/", newDirID);
	docNode.setValue("sDocDisplayPath","/", newDirID);
	docNode.setValue("sCreatorFID",justep.Context.getCurrentPersonMemberFID(), newDirID);
	docNode.setValue("sCreatorName",justep.Context.getCurrentPersonName(), newDirID);
	docNode.setValue("sCreatorDeptName",justep.Context.getCurrentDeptName(), newDirID);
	docNode.setValue("sCreateTime",justep.System.datetimeString(), newDirID);
	docNode.setValue("sLastWriterFID",justep.Context.getCurrentPersonName(), newDirID);
	docNode.setValue("sLastWriterDeptName",justep.Context.getCurrentDeptName(), newDirID);
	docNode.setValue("sLastWriteTime",justep.System.datetimeString(), newDirID);
	docNode.setValue("sNameSpace",nameSpaceId, newDirID);
	docNode.setValue("sFlag","1", newDirID);
	docNode.getStore().setValueById(newDirID, "version", "0");
	docNode.setRowState(newDirID, "new");
	xforms("newNameSpaceDlg").close();
}

function cancleNewDocSetting(){
	xforms("newNameSpaceDlg").close();
}

function deleteDocSetting(){
/*	var nameSpaceId = nameSpace.getCurrentRowId();
	var flag = nameSpace.deleteData();
	if(flag){
		var docNode = justep.xbl("docNode");
		var docNodeId = docNode.locate([nameSpaceId], ["sNameSpace"])[0];
		if(docNodeId){
			docNode.setValue("sFlag", "0", docNodeId);
			docNode.setRowState(docNodeId, "edit");
		}
	}*/
	var nameSpace = justep.xbl("nameSpace");
	if(nameSpace.getCurrentRowId() == "defaultDocNameSpace"){
		alert("不能删除默认文档服务器!如果需要设置默认文档服务器，请修改修改当前配置的服务器地址内容。");
		return;
	}
	
	
	if(!confirm('是否删除“'+nameSpace.getValue("sDisplayName")+'”？(提示：文档中心对应文件夹及文件同时会删除)')){
		return;
	}
	var sendParam = new justep.Request.ActionParam();
	sendParam.setBoolean("isHttps", window.location.protocol == "https:");
	sendParam.setString('sID',nameSpace.getCurrentRowId());
	var options = {};
	options.process = "/SA/doc/system/systemProcess";
	options.activity = "mainActivity";
	options.dataType = "json";
	options.parameters = sendParam;
	options.action = "deleteNameSpace";
	options.directExecute = true;
	options.callback = function(result) {
		if (result.state) {
			nameSpace.refreshData();
			nameSpace.expandAll();
			onTreeIndexChanged();
		} else {
			throw new Error(result.response.message);
		}
	};
	justep.Request.sendBizRequest2(options);
	
}

function saveDocNode(){
	var docNode = justep.xbl("docNode"); 
	if(docNode.isChanged()){
		docNode.saveData();
	}
}

function onTreeIndexChanged(){
	var nameSpace = justep.xbl("nameSpace");
	var buttonState = justep.xbl("buttonState");
	$('#docServerIframe').attr('src',"about:blank");
	if("_is_root_" == nameSpace.getCurrentRowId()){
		document.getElementById("nameSpaceDetails").style.display="none";
		document.getElementById("trigger1").style.display="none";
		document.getElementById("docServerIframe").style.display="none";
		buttonState.setValue("new", (access % 512) >= 256?"true":"false", "buttonStateRow");
		buttonState.setValue("delete", "false", "buttonStateRow");
	}else{
		document.getElementById("nameSpaceDetails").style.display="block";
		buttonState.setValue("new", "false", "buttonStateRow");
		buttonState.setValue("delete", (access % 2048) >= 1024?"true":"false", "buttonStateRow");
		document.getElementById("trigger1").style.display = "inline-table";
		document.getElementById("docServerIframe").style.display="block";
	}
}

function showNodeImg(){
	var nameSpace = justep.xbl("nameSpace");
	if("_is_root_" == nameSpace.getCurrentRowId()){
		return "/UI/system/images/doc/doc_namespace.gif";
	}else if("defaultDocNameSpace" == nameSpace.getCurrentRowId()){
		return "/UI/system/images/doc/doc_permission_root.gif";
	}else{
		return "/UI/system/images/doc/doc_namespace.gif";
	}
}
function loadPermission(){
	if(!docAuthList){
		getDocAuthList();
	}
	
	var docPath = "/";
	var docFullPath = "/";
	access = getAccessBysDocPath(docFullPath,1);
	
	var permissions = justep.xbl("buttonState");
	permissions.setValue("new", ((access % 512) >= 256).toString());
	permissions.setValue("delete",((access % 2048) >= 1024).toString());
}

function getAccessBysDocPath(docFullPath , defaultAccess){
	var docAccess = null;
	for(var item in docAuthListArr){
		var itemAceess = defaultAccess;  
		$.each(docAuthListArr[item],function(n,value){
		    if(value.sDocPath == docFullPath){	
		    	itemAceess = value.sAccess;
		       return false;
		    }
		});
		if (!docAccess) docAccess = itemAceess ;
		if(itemAceess > docAccess) docAccess = itemAceess;
	}
	return (docAccess != null && docAccess) > defaultAccess ? docAccess:defaultAccess;
}

function getDocAuthList(){
	docAuthList = justep.doc.InnerUtils.getDocAuthList();
	if(!docAuthListArr) 
	    docAuthListArr = {}
	for(var deptFID in docAuthList) {
		var authItems = docAuthList[deptFID];
		var deptAuth = new Array();
		var i=0;
		for(var authId in authItems) {
			var authItem = authItems[authId];
			deptAuth[i] = {"authId":authId,"sDocPath":authItem.sDocPath,"sAuthorizeeFID" : authItem.sAuthorizeeFID,"sAccess":authItem.sAccess};
			i++;
		}
		docAuthListArr[deptFID] = deptAuth;
	}
}

docSetting.docSettingModelLoad = function(event){
	loadPermission();	
};

docSetting.trigger1Click = function(event){
	var nameSpaceData = justep.xbl('nameSpace');
	if(nameSpaceData.isChanged()){
		alert('请先保存然后进行文档配置的测试');
		return;
	}
	
	var url = justep.xbl('nameSpace').getValue('sUrl');
	if(url.indexOf('/')+1 != url.length){
		url+="/";
	}
	url= "/UI/system/service/doc/common/uploadDoc.j?dochost="+url+"&rType=test";
	url = justep.Request.convertURL(url);
	$('#docServerIframe').attr('src',url);
	function pageWidth() {
		  return window.innerWidth != null ? window.innerWidth : document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body != null ? document.body.clientWidth : null;
	}
	function pageHeight() {
	  return window.innerHeight != null? window.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body != null? document.body.clientHeight : null;
	}
	function topPosition() {
	  return typeof window.pageYOffset != 'undefined' ? window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0;
	}
	function leftPosition() {
	  return typeof window.pageXOffset != 'undefined' ? window.pageXOffset : document.documentElement && document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft ? document.body.scrollLeft : 0;
	}
	var dialog = document.createElement('div');
	dialog.id = 'testDocServer';
	dialog.style.position = "absolute";
	dialog.style.zIndex = "2000";
	dialog.style.background = "#fff";
	dialog.style.border = "1px solid #C2D5DC";
	dialog.style.width = "260px";
	dialog.style.height = "80px";
	dialog.style.top = topPosition() + (pageHeight() / 3) + "px";
	dialog.style.left = leftPosition() + (pageWidth() / 3) + "px";
	dialog.innerHTML = "<div style='border:1px solid #D3E2E5;height:78px;position:relative;'><img style='position:absolute;top:20px;left:30px;' src='"+justep.Request.convertURL("/UI/system/service/report/dialog/waiting1.gif")+"'/>" +
			"<span style='position:absolute;top:32px;left:80px;font-size:13px'>正在测试中...</span></div>";
	document.body.appendChild(dialog);
	$('#docServerIframe').bind(
		'load',
		function(){
			$('#testDocServer').remove();
		}
	);
};

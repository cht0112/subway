var NeoshineOffice = {};

NeoshineOffice.zbEditorReceive = function(event){
	var jsonObj = JSON.parse(decodeURI(event.data));
	this.OVP = jsonObj;
	jsonObj.filename=decodeURI(jsonObj.filename);
  	var docPath = jsonObj.host;
  	var fileID = jsonObj.fileID;
  	var fileExt = jsonObj.fileExt;
  	var versionID= jsonObj.versionID ? jsonObj.versionID : "last";
  	var partType = partType ? partType : "content";
  	var u="";
	u=justep.Doc2.getdocServerAction(docPath, "/repository/file/view/" + fileID + "/" + versionID + "/" + partType,true);
	//u =justep.Doc2.getdocServerAction(docPath, "/repository/file/cache/office/new");
	var docUrl = u.indexOf(window.location.protocol) < 1 ? u : window.location.protocol+"//"+ window.location.host + u;
	this.OVP.docUrl = docUrl;
	$OV.GetRemoteContent(docUrl,jsonObj.filename);
		
};

NeoshineOffice.btn_saveClick = function(event){
	var u = justep.Doc2.getdocServerAction(
			this.OVP.host, "/repository/file/cache/upload", true)
	var docUrl = u.indexOf(window.location.protocol) < 1 ? u : window.location.protocol+"//"+ window.location.host + u;
	$OV.NEOSHINE_Office.HttpInit();
	$OV.NEOSHINE_Office.HttpPost(docUrl);
	var responseValue = $OV.NEOSHINE_Office.HttpResponsePaste();
	var begin = responseValue.indexOf('<?xml');
	var end = responseValue.indexOf('</root>')+7;
	responseValue = responseValue.substring(begin,end); 
	justep.xbl('zbEditorReceiver').windowEnsure(responseValue);
};
NeoshineOffice.btn_refreshClick = function(event){
	justep.xbl('zbEditorReceiver').windowRefresh();
};
$(function(){
	var oOffice = document.getElementById('office');
	$OV =  new Office(oOffice);
});

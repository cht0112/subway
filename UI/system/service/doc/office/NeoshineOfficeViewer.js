var NeoshineOfficeViewer = {};


NeoshineOfficeViewer.NeoshineOfficeViewLoad = function(event){
	var param = justep.Context.getRequestBody().text;
	var jsonObj = JSON.parse(decodeURI(param));
	jsonObj.filename = decodeURI(jsonObj.filename);
  	var docPath = jsonObj.host;
  	var fileID = jsonObj.fileID;
  	var fileExt = jsonObj.fileExt;
  	var versionID= jsonObj.versionID ? jsonObj.versionID : "last";
  	var partType = partType ? partType : "content";
  	var host = justep.Doc.getdocServerAction(uploader.docPath, "/repository/file/cache/upload");
	var docUrl = u.indexOf(window.location.protocol) < 1 ? u : window.location.protocol+"//"+ window.location.host + u;
	var neoOffice = document.getElementById('office');
	neoOffice.style.width = $('#view_1').width()-20;
	neoOffice.style.height = $('#view_1').height()-20;
	neoOffice.GetRemoteContent(docUrl,"查看文件");
};

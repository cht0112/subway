var mainActivity = {};

mainActivity.model1Load = function(){
	mainActivity.refresh();
};

mainActivity.refresh = function(){
	var url = justep.Request.convertURL("/UI/system/service/common/queryOnlineUsers.j");
	var xmlHttpRequest = justep.Request.sendHttpRequest(url);
	if (justep.Request.isSuccess(xmlHttpRequest)){
		var users = justep.Request.getData(xmlHttpRequest.responseXML);
		var data = justep.xbl("data1");
		data.loadXML(users);
		var count = data.getCount();
		justep('count').innerHTML = "" + count;
	}else{
		var message = justep.XML.eval(xmlHttpRequest.responseXML, "/root/message", "single");
		alert(justep.XML.getNodeText(message));
	}
};


mainActivity.data1CustomRefresh = function(event){
	mainActivity.refresh();
};

var flowTrack = {};
flowTrack.mdMainLoad = function(event){
	var process = justep.Context.getRequestParameter('process');
	var bizID = justep.Context.getRequestParameter('bizID');
	
	var control = justep.xbl("processChart");
	control.loadByData(process, bizID);
};

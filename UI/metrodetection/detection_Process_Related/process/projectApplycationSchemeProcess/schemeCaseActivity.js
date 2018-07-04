var schemeCaseActivity = {};
var schemeId = "";
/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
schemeCaseActivity.schemeCaseWRReceive = function(event){
	if(event.data.schemeId != null && event.data.schemeId != ""){
		var schemeId = event.data.schemeId;
		var caseData = justep.xbl("schemeCaseBD");
		caseData.setFilter("cdFilete0", "TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+schemeId);
		caseData.refreshData();
		//alert(schemeId);
	}
};

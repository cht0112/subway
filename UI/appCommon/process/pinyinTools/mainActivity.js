var mainActivity = {};

mainActivity.btnGenerateClick = function(event) {
	var params = new justep.Request.ActionParam();
	params.setString("dataModel", inputDataModel.value);
	params.setString("concept", inputConcept.value);
	params.setString("chineseRelation", inputChineseRelation.value);
	params.setString("simplePinyinRelation", inputSimplePinyinRelation.value);
	params.setString("fullPinyinRelation", inputFullPinyinRelation.value);
	justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), 
		justep.Context.getCurrentActivity(), "generatePinyinAction", params);
	alert("生成拼音成功");
};

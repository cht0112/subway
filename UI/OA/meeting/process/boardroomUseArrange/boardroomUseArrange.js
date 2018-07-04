var boardroomUseArrange = {};
acceptParentParamsFun = "acceptData";
var fID = "";
function grdArrangeRowDblClick(event)
{	
	var cardData = justep.xbl("dArrange");
	windowEnsure(cardData);
}
function acceptData(data) {
	fID = data.fID;
	var dMain = justep.xbl("dArrange");
	if (fID && (fID != "")) {
		dMain.filters.setFilter("arrangeFilter", "OA_MT_RoomArrange = '" + fID + "'");
	}
	dMain.refreshData();
}
function iptKeywordxforms_value_changed(event)
{
	var keyword = justep.xbl("dCondition").getValue("keyword");	
	var filter = appCommon.FilterUtils.getMultiLikeFilter("fMeetName", keyword, ",");
	var dMain	= justep.xbl("dArrange");
	if (keyword && (keyword != "")) {
		dMain.filters.setFilter("likeFilter", filter);
	}
	dMain.refreshData();
}

boardroomUseArrange.trgOKClick = function(event){
	var cardData = justep.xbl("dArrange");
	windowEnsure(cardData);
};

boardroomUseArrange.trgCancelClick = function(event){
	windowCancel();
};

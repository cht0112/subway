var especialPersonListDialog = {};
function checkBox(data) {
	var fid = data.rowId;
	var html = "<input type=\"checkbox\" name=\"checkbox\" id=\"" + fid + "\">";
	return html;
}
especialPersonListDialog.trigger1Click = function(event){
	  windowRefresh();	
};
especialPersonListDialog.trigger2Click = function(event){
	 windowEnsure(windowSend());
};
especialPersonListDialog.trigger3Click = function(event){
   	 windowCancel();	
};
especialPersonListDialog.trigger4Click = function(event){
	var searchData = justep.xbl('searchData');
	var bizData = justep.xbl('personListData');
	var searchText = searchData.getValue("inputValue");
	bizData.setFilter("filter0", "OA_SD_especialSchedulePerson.fExecutorName like '%"
			+ searchText + "%' or OA_SD_especialSchedulePerson.fExecutorID like '%"
			+ searchText + "%'");
	bizData.refreshData();	
};
especialPersonListDialog.grid1RowDblClick = function (event){
	 windowEnsure(windowSend());
};
function windowSend() {
	return xforms('grid1').grid;
}
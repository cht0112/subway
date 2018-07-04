var mainActivity2 = {};

mainActivity2.model1Load = function(event){
	var progressData = justep.xbl("proData");
	var labData = justep.xbl("laboratoryData");
	var toolNO = labData.getID(0);
	progressData.setFilter("filter0", "JINDU_VIEW.TOOLNO="+toolNO);
	progressData.refreshData();
	if(progressData.getCount() > 0) {
		var pId = progressData.getValue("FPARENTID", progressData.getID(0));
		//alert(pId);
		progressData.setFilter("filter0", "JINDU_VIEW.TOOLNO="+toolNO+" or JINDU_VIEW='"+pId+"' or JINDU_VIEW.FPARENTID IS NULL");
		progressData.refreshData();
		progressData.expandAll();
	}
};

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
mainActivity2.grid2RowClick = function(event){
	var progressData = justep.xbl("proData");
	var toolNO = event.rowID;
	progressData.setFilter("filter0", "JINDU_VIEW.TOOLNO="+toolNO);
	progressData.refreshData();
	if(progressData.getCount() > 0) {
		var pId = progressData.getValue("FPARENTID", progressData.getID(0));
		//alert(pId);
		progressData.setFilter("filter0", "JINDU_VIEW.TOOLNO="+toolNO+" or JINDU_VIEW='"+pId+"' or JINDU_VIEW.FPARENTID IS NULL");
		progressData.refreshData();
		progressData.expandAll();
	}
};

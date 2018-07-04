var mainActivity = {};

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
mainActivity.grid1RowClick = function(event){
	var rowId = event.rowID;
	var progressData = justep.xbl("proData");
	progressData.setFilter("filter0", "JINDU_VIEW.TASKID='"+rowId+"'");
	progressData.refreshData();
	if(progressData.getCount() > 0) {
		var rowId = progressData.getCurrentID();
		var pId = progressData.getValue("FPARENTID", rowId);
		progressData.setFilter("filter0", "JINDU_VIEW.FPARENTID is null or JINDU_VIEW in ('"+rowId+"','"+pId+"')");
		progressData.refreshData();
		progressData.expandAll();
	}
};

/**
	页面初始化时默认第一条任务信息
**/
mainActivity.model1Load = function(event){
	var taskData = justep.xbl("taskData");
	var cou = taskData.getCount();
	if(cou > 0) {
		var rowId = taskData.getID(0);
		var progressData = justep.xbl("proData");
		progressData.setFilter("filter0", "JINDU_VIEW.TASKID='"+rowId+"'");
		progressData.refreshData();
		if(progressData.getCount() > 0) {
			var rowId = progressData.getCurrentID();
			var pId = progressData.getValue("FPARENTID", rowId);
			progressData.setFilter("filter0", "JINDU_VIEW.FPARENTID is null or JINDU_VIEW in ('"+rowId+"','"+pId+"')");
			progressData.refreshData();
			progressData.expandAll();
		}
	}
};

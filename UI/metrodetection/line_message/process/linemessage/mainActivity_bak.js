var mainActivity = {};

mainActivity.model1Load = function(event){
	var progressData = justep.xbl("proData");
	var labData = justep.xbl("laboratoryData");
	if(labData.getCount()>0){
		var lineID = labData.getID(0);
		progressData.setFilter("filter0", "JINDU_VIEW.LINEID="+lineID);
		progressData.refreshData();
		if(progressData.getCount() > 0) {
			/*var pId = progressData.getValue("FPARENTID", progressData.getID(0));
			//alert(pId);
			progressData.setFilter("filter0", "JINDU_VIEW.LINEID="+lineID+" or JINDU_VIEW='"+pId+"' or JINDU_VIEW.FPARENTID IS NULL");
			progressData.refreshData();
			progressData.expandAll();*/
			
			var cou = progressData.getCount();
			var arrayObj = new Array();
			for ( var i = 0; i < cou; i++) {
				var rId = progressData.getCurrentID();
				var pId = progressData.getValue("FPARENTID", rId);
				arrayObj.push("'"+pId+"'");
				progressData.next();
			}
			//alert(arrayObj);
			for ( var i = 0; i < cou; i++) {
				var rId = progressData.getCurrentID();
				var pId = progressData.getValue("FPARENTID", rId);
				//arrayObj.push("'"+pId+"'");
				progressData.setFilter("filter0", "JINDU_VIEW='"+pId+"'");
				progressData.refreshData();
				var proId = progressData.getCurrentID();
				var pjId = progressData.getValue("FPARENTID",proId);
				arrayObj.push("'"+pjId+"'");
				progressData.next();
			}
			
			progressData.setFilter("filter0", "JINDU_VIEW.LINEID="+lineID+" or JINDU_VIEW in ( "+arrayObj+") or JINDU_VIEW.FPARENTID IS NULL");
			progressData.refreshData();
			progressData.expandAll();
		}
	}
	var grid = justep.xbl('grid2');
	grid.grid.expandAll();
	var cou = progressData.getCount();
	for ( var j = 0; j < cou; j++) {
		var rowId = progressData.getCurrentID();
		var taskId = progressData.getValue("TASKID", rowId);
		if(taskId != null && taskId != "") {
			progressData.setValue("TPERSONNAME", "", rowId);
			progressData.setValue("TSTART", "", rowId);
			progressData.setValue("TEND", "", rowId);
			progressData.setValue("TEXECUTE", "", rowId);
			progressData.setValue("TCHECK", "", rowId);
		}
		progressData.next();
	}
};

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
mainActivity.grid1RowClick = function(event){
	var progressData = justep.xbl("proData");
	var lineID = event.rowID;
	progressData.setFilter("filter0", "JINDU_VIEW.LINEID="+lineID);
	progressData.refreshData();
	if(progressData.getCount() > 0) {
		/*var pId = progressData.getValue("FPARENTID", progressData.getID(0));
		//alert(pId);
		progressData.setFilter("filter0", "JINDU_VIEW.LINEID="+lineID+" or JINDU_VIEW='"+pId+"' or JINDU_VIEW.FPARENTID IS NULL");
		progressData.refreshData();
		progressData.expandAll();*/
		
		var cou = progressData.getCount();
		var arrayObj = new Array();
		for ( var i = 0; i < cou; i++) {
			var rId = progressData.getCurrentID();
			var pId = progressData.getValue("FPARENTID", rId);
			arrayObj.push("'"+pId+"'");
			progressData.next();
		}
		//alert(arrayObj);
		for ( var i = 0; i < cou; i++) {
			var rId = progressData.getCurrentID();
			var pId = progressData.getValue("FPARENTID", rId);
			//arrayObj.push("'"+pId+"'");
			progressData.setFilter("filter0", "JINDU_VIEW='"+pId+"'");
			progressData.refreshData();
			var proId = progressData.getCurrentID();
			var pjId = progressData.getValue("FPARENTID",proId);
			arrayObj.push("'"+pjId+"'");
			progressData.next();
		}
		
		progressData.setFilter("filter0", "JINDU_VIEW.LINEID="+lineID+" or JINDU_VIEW in ( "+arrayObj+") or JINDU_VIEW.FPARENTID IS NULL");
		progressData.refreshData();
		progressData.expandAll();
	}
	var grid = justep.xbl('grid2');
	grid.grid.expandAll();
	var cou = progressData.getCount();
	for ( var j = 0; j < cou; j++) {
		var rowId = progressData.getCurrentID();
		var taskId = progressData.getValue("TASKID", rowId);
		if(taskId != null && taskId != "") {
			progressData.setValue("TPERSONNAME", "", rowId);
			progressData.setValue("TSTART", "", rowId);
			progressData.setValue("TEND", "", rowId);
			progressData.setValue("TEXECUTE", "", rowId);
			progressData.setValue("TCHECK", "", rowId);
		}
		progressData.next();
	}
};

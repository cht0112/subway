var mainActivity3 = {};

mainActivity3.model1Load = function(event){
	var progressData = justep.xbl("proData");
	var labData = justep.xbl("laboratoryData");
	
	if(labData.getCount() > 0) {
		var roomId = labData.getID(0);
		progressData.setFilter("filter0", "JINDU_VIEW_NEW.TOOLNO="+roomId);
		progressData.refreshData();
		if(progressData.getCount() > 0) {
		/*var pId = progressData.getValue("FPARENTID", progressData.getID(0));
		//alert(pId);
		progressData.setFilter("filter0", "JINDU_VIEW_NEW.TOOLNO="+roomId+" or JINDU_VIEW_NEW='"+pId+"' or JINDU_VIEW_NEW.FPARENTID IS NULL");
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
		/*for ( var i = 0; i < cou; i++) {
			var rId = progressData.getCurrentID();
			var pId = progressData.getValue("FPARENTID", rId);
			//arrayObj.push("'"+pId+"'");
			progressData.setFilter("filter0", "JINDU_VIEW_NEW='"+pId+"'");
			progressData.refreshData();
			var proId = progressData.getCurrentID();
			var pjId = progressData.getValue("FPARENTID",proId);
			arrayObj.push("'"+pjId+"'");
			progressData.next();
		}*/
		var arrayObj2 = new Array();
		for(var j=0;j<arrayObj.length;j++) {
			var rowId = arrayObj[j];
			progressData.setFilter("filter0", "JINDU_VIEW_NEW="+rowId);
			progressData.refreshData();
			var pId = progressData.getValue("FPARENTID", progressData.getCurrentID());
			arrayObj2.push("'"+pId+"'");
			//alert(pId);
		}
		
		progressData.setFilter("filter0", "JINDU_VIEW_NEW.TOOLNO="+roomId+" or JINDU_VIEW_NEW in ( "+arrayObj+") or JINDU_VIEW_NEW.FPARENTID IS NULL or JINDU_VIEW_NEW in ( "+arrayObj2+")");
		progressData.refreshData();
		progressData.expandAll();
	}
	}
	var grid = justep.xbl('grid2');
	//grid.grid.expandAll();
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
mainActivity3.grid1RowClick = function(event){
	var progressData = justep.xbl("proData");
	var rowId = event.rowID;
	progressData.setIndex(0);
	progressData.setFilter("filter0", "JINDU_VIEW_NEW.TOOLNO="+rowId);
	progressData.refreshData();
	if(progressData.getCount() > 0) {
		/*var pId = progressData.getValue("FPARENTID", progressData.getID(0));
		//alert(pId);
		progressData.setFilter("filter0", "JINDU_VIEW_NEW.TOOLNO="+rowId+" or JINDU_VIEW_NEW='"+pId+"' or JINDU_VIEW_NEW.FPARENTID IS NULL");
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
		/*for ( var i = 0; i < cou; i++) {
			var rId = progressData.getCurrentID();
			var pId = progressData.getValue("FPARENTID", rId);
			//arrayObj.push("'"+pId+"'");
			progressData.setFilter("filter0", "JINDU_VIEW_NEW='"+pId+"'");
			progressData.refreshData();
			var proId = progressData.getCurrentID();
			var pjId = progressData.getValue("FPARENTID",proId);
			arrayObj.push("'"+pjId+"'");
			progressData.next();
		}*/
		var arrayObj2 = new Array();
		for(var j=0;j<arrayObj.length;j++) {
			var rowId = arrayObj[j];
			progressData.setFilter("filter0", "JINDU_VIEW_NEW="+rowId);
			progressData.refreshData();
			var pId = progressData.getValue("FPARENTID", progressData.getCurrentID());
			arrayObj2.push("'"+pId+"'");
			//alert(pId);
		}
		
		progressData.setFilter("filter0", "JINDU_VIEW_NEW.TOOLNO="+event.rowID+" or JINDU_VIEW_NEW in ( "+arrayObj+") or JINDU_VIEW_NEW.FPARENTID IS NULL or JINDU_VIEW_NEW in ( "+arrayObj2+")");
		progressData.refreshData();
		progressData.expandAll();
		
	}
	var grid = justep.xbl('grid2');
	//grid.grid.expandAll();
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


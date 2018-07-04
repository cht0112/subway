var zhibiaoDialog = {};



zhibiaoDialog.gridSelect2Closeup = function(event){
	var cData = justep.xbl("cData");
	var id = cData.getValue("value");
//	alert(id);
	if(id!=null && id!=''){
		var indexData = justep.xbl("indexData");
		indexData.setFilter("filter0", "INDEX_SYSTEM_VALUE.INDEXSYSTEMNO="+id);
		indexData.refreshData();
	//	alert(indexData.getCount());
	}
	var indexData = justep.xbl("indexData");
	var name  = indexData.getValue("INDEXSYSTEMNAME");
//	alert(name);
	justep.xbl("excelExport1").downloadFilename=name+'.xls';	
};



zhibiaoDialog.model1XBLLoaded = function(event){
	var cData = justep.xbl("cData");
	var indexFilterData = justep.xbl("indexFilterData");
	var count = indexFilterData.getCount();
	if(count!=0){
		var id = indexFilterData.getCurrentID();
		var name =indexFilterData.getValue("iNDEXSYSTEMNAME",id);
		cData.setValue("value", id);
		cData.setValue("name", name);
		var indexData = justep.xbl("indexData");
		var param = new justep.Request.ActionParam(); 
		var response = justep.Request.sendBizRequest("/metrodetection/testing_standard/process/zhibiaokuvalueProcess/zhibiaokuvalueProcessProcess","mainActivity", "newMulIndexQueryAction", param );
		var result = justep.Request.transform(justep.Request.getData(response.responseXML));
		indexData.loadXML(justep.XML.toString(result));
		indexData.setFilter("filter0", "INDEX_SYSTEM_VALUE.INDEXSYSTEMNO="+id);
		indexData.refreshData();
		var name  = indexData.getValue("INDEXSYSTEMNAME");
		justep.xbl("excelExport1").downloadFilename=name+'.xls';
		var ii = document.getElementById('saveMas');
		ii.disabled = true;
		var cc = justep.Request.convertURL(
				"/UI/system/images/standardToolbar/standard/un_save.gif", true);
		$("#saveMas").attr("src", cc);
		justep.xbl('saveMas').setDisabled(true);
		indexData.refreshData();
	}
};




zhibiaoDialog.saveMasClick = function(event){
debugger;
	var indexData = justep.xbl("indexData");
	var count = indexData.getCount();
	var param = new justep.Request.ActionParam();
	var map = new justep.Request.MapParam();
	var list = new justep.Request.ListParam();
	for(var i=0;i<count;i++){
		var id = indexData.getRowId(i);
//		alert(id);
		var value = indexData.getValue("INDEXVALUE",id);
		var desc = indexData.getValue("INDEXVALUEDESC",id);		
		var indexNo = indexData.getValue("INDEXNO", id);
		if(value != null && value != '' && desc !=null && desc != ''){
			var list = new justep.Request.ListParam();
			//value和desc不为空且已有主键------需要删除再添加
			if(indexNo!=null && indexNo!=''){
				list.add(new justep.Request.SimpleParam(parseInt(indexNo),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
				list.add(new justep.Request.SimpleParam(value,justep.XML.Namespaces.XMLSCHEMA_STRING));
				list.add(new justep.Request.SimpleParam(desc,justep.XML.Namespaces.XMLSCHEMA_STRING));		
				map.put(id,list);
			}else{
				list.add(new justep.Request.SimpleParam(0,justep.XML.Namespaces.XMLSCHEMA_STRING));
				list.add(new justep.Request.SimpleParam(indexData.getValue("BUSINESSID",id),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
				list.add(new justep.Request.SimpleParam(indexData.getValue("INDEXID",id),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
				list.add(new justep.Request.SimpleParam(indexData.getValue("APPLYFOROBJECT",id),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
				list.add(new justep.Request.SimpleParam(indexData.getValue("APPLYFORDEVICETYPE",id),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
				list.add(new justep.Request.SimpleParam(value,justep.XML.Namespaces.XMLSCHEMA_STRING));
				list.add(new justep.Request.SimpleParam(desc,justep.XML.Namespaces.XMLSCHEMA_STRING));	
				list.add(new justep.Request.SimpleParam(indexData.getValue("INDEXSYSTEMNO",id),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
				map.put(id,list);

			}
			
		}else if(indexNo!=null && indexNo!=''){
			var list = new justep.Request.ListParam();
			list.add(new justep.Request.SimpleParam(parseInt(indexNo),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
			list.add(new justep.Request.SimpleParam(value,justep.XML.Namespaces.XMLSCHEMA_STRING));
			list.add(new justep.Request.SimpleParam(desc,justep.XML.Namespaces.XMLSCHEMA_STRING));	
			map.put(id,list);
		}else if(value != '' && desc =='' || value == '' && desc != ''){
			alert("指标值公式和指标值文字描述都不能为空！");
		}
	}
	debugger;
	param.setMap("map", map);
	//var response = justep.Request.sendBizRequest("/metrodetection/testing_standard/process/zhibiaokuvalueProcess/zhibiaokuvalueProcessProcess","mainActivity", "saveIndexValueAction", param);
		justep.Request.sendBizRequest(justep.Context.getCurrentProcess(),
			justep.Context.getCurrentActivity(), "saveIndexValueAction",
			param, null, function(callbackData) {
				if (callbackData.state) {
					alert("保存数据成功。");
				} else
					justep.OpmUtils.showError(justep.Request
							.getServerError(callbackData));
			});
	
	var ii = document.getElementById('saveMas');
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
	indexData.refreshData();
//	alert("保存成功！");
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
zhibiaoDialog.indexDataValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
	
};

zhibiaoDialog.trigger2Click = function(event){
	var windowDialog=justep.xbl("windowDialog2");
	windowDialog.open();
};
 

///**
//	name:windowDialog#onReceive
//	@event {"source":组件的js对象,"data":传回的数据}
//description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
//*/
//zhibiaoDialog.windowDialog2Receive = function(event){
//debugger;
//	var fileName = event.data.flag;
//	var indexData = justep.xbl("indexData");
//	indexData.refreshData();
//};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
zhibiaoDialog.windowDialog2Close = function(event){
debugger;
	var indexData = justep.xbl("indexData");
	indexData.refreshData();	
};


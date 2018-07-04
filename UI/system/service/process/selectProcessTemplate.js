var selectProcessTemplate = {};
selectProcessTemplate._type = null;
selectProcessTemplate._process = null;

selectProcessTemplate.modelModelConstruct = function(event){
	
};

/**
	name:bizData#onBeforeRefresh
	description: <b>[回调型事件]</b>业务数据刷新前
	@param event 它的结构如下:<br/>{"source":组件的js对象,"cancel":可修改，设置为true后中断当前刷新动作}
*/
selectProcessTemplate.mainBeforeRefresh = function(event){
	var filter = "";
	if (selectProcessTemplate._type == "graph"){
		filter = " SA_ProcessTemplate.sTypeID='graph' ";
	}else if (selectProcessTemplate._type == "PROCESS_TEMPLATE"){
		filter = " SA_ProcessTemplate.sTypeID='PROCESS_TEMPLATE'";
		
	}else{
		filter = "(SA_ProcessTemplate.sTypeID='grid' or SA_ProcessTemplate.sTypeID is null)";
	}
	
	filter = "(" + filter + " and (SA_ProcessTemplate.sKindID='template') and (SA_ProcessTemplate.sProcess='" + selectProcessTemplate._process + "'))";
	event.source.setFilter("_customFilter", filter);
};

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
selectProcessTemplate.windowReceiverReceive = function(event){
	selectProcessTemplate._type = event.data.type;
	if (!!event.data.process){
		selectProcessTemplate._process = event.data.process;
	}else{
		selectProcessTemplate._process = justep.Context.getCurrentProcess();
	}
	
	justep.xbl("main").refreshData();
};

/**
	name:bizData#onRefreshCreateParam
	description: <b>[回调型事件]</b>业务新增数据创建新增参数事件，可以增加和修改用户自定义的参数
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"param":新增参数对象({@link justep.Request.ActionParam})}
*/
selectProcessTemplate.mainRefreshCreateParam = function(event){
	if (event.param){
		var queryRange = "";
		if (selectProcessTemplate._type == "PROCESS_TEMPLATE"){
			//新版本的流程模板查询所有的模板，不关联权限
			queryRange = "";
		}else{
			queryRange = "OWNER";
		}
		event.param.setString("queryRange", queryRange);
	}else{
		var msg = new justep.Message(justep.Message.JUSTEP230057);
		throw justep.Error.create(msg);
	}
};

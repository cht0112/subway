var relationIndex = {};
var relationIndex={};
var id ="";
var ver = "";
var testId = "";

/**
	name:windowReceiver#onReceive
	@event 
description: <b>[回调型事件]</b> window接收对话框传入的数据
	@param event {"source":组件的js对象,"data":传入的数据}
*/
relationIndex.windowReceiver1Receive = function(event){
	if(event.data.id){
		id = event.data.id;
	}
	if(event.data.ver){
		ver = event.data.ver;
	}
	if(event.data.testId){
		testId = event.data.testId;
	}
	//alert(id+","+ver+","+testId);
	var relationIndexD = justep.xbl("relationIndexD");
	relationIndexD.setFilter("filterRelation", "RELATIONSHIP_INDEX_AND_CASE.tESTCASEVER="+event.data.ver+" and RELATIONSHIP_INDEX_AND_CASE.tESTCASEID='"+event.data.testId+"'");
	relationIndexD.refreshData();
	
};

/**
	name:bizData#onAfterRefresh
	description: <b>[回调型事件]</b>业务数据刷新后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
relationIndex.relationIndexDAfterRefresh = function(event){
	//alert(id+","+ver+","+testId);
//	var relationIndexD = justep.xbl("relationIndexD");
//	relationIndexD.setFilter("filterRelation", "RELATIONSHIP_INDEX_AND_CASE.tESTCASEVER="+event.data.ver+" and RELATIONSHIP_INDEX_AND_CASE.tESTCASEID='"+event.data.id+"'");
//	relationIndexD.refreshData();
};

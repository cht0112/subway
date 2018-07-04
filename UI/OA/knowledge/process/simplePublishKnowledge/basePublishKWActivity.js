var basePublishKWActivity = {};

/**
	name:bizData#onSaveCommit
	description: <b>[回调型事件]</b>业务数据保存事务提交后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
basePublishKWActivity.dKnowledgeSaveCommit = function(event){
	var data = justep.xbl('dKnowledge');
	var rowid = data.getCurrentID();
	data.setFilter("dataFilter11", "OA_KM_Knowledge='" + rowid + "'");
	data.refreshData();
};

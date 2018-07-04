var list = {};

list.openDetail = function(operator, id){
	var runner = justep.xbl("detailRunner");
	runner.open({
		operator : operator,
		id : id
	},runner.domNode.getAttribute('url')+"?detailId="+id);
}

list.insertItemClick = function (event){
	list.openDetail("new");
};

list.listGridRowDblClick = function(event){
	var data = justep.xbl('listData');
	var id = data.getCurrentRowId();
	if (!!id)
		list.openDetail("edit", id);
};
list.detailRunnerReceive = function(event){
	var data = justep.xbl("listData");
	data.refreshData();
	var id = event.data.id;
	if (!!id && (data.getCurrentRowId() != id) && (data.getIndex(id) >= 0))
		data.setIndex(data.getIndex(id));
}
list.editItemClick = function(event){
	var data = justep.xbl('listData');
	var id = data.getCurrentRowId();
	if (!!id)
		list.openDetail("edit", id);
};

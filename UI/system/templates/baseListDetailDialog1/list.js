var list = {};

list.openDialog = function(operator, id){
	justep.xbl("detailDialog").open({
		operator : operator,
		id : id
	});
}

list.insertItemClick = function(event){
	list.openDialog("new");
};

list.listGridRowDblClick = function(event){
	var data = justep.xbl('listData');
	var id = data.getCurrentRowId();
	if (!!id)
		list.openDialog("edit", id);
};
list.detailDialogReceive = function(event){
	var data = justep.xbl("listData");
	data.refreshData();
	id = event.data.id;
	if (!!id && (data.getCurrentRowId() != id) && (data.getIndex(id) >= 0))
		data.setIndex(data.getIndex(id));
};
list.editItemClick = function(event){
	var data = justep.xbl('listData');
	var id = data.getCurrentRowId();
	if (!!id)
		list.openDialog("edit", id);
};

var getRelationValueDialog = {};
var getRelationValueDialog = {
	//默认过滤条件
	filter: null
};

getRelationValueDialog.queryData = function(event){
	var param = new justep.Request.ActionParam(),
		dataFilter = this.getFilterString();
	param.setInteger("offset", event.offset);
	param.setInteger("limit", event.limit);
	param.setString("columns", window.frameElement.relationAlias);
	param.setString("orderBy", "");
	param.setBoolean("distinct", true);
	if (dataFilter) {
		var realFilter = "";
		if (this.filter != "") {
			realFilter = "((UPPER(" + this.relation.relation + ") LIKE "+justep.System.toExprString("STRING","%"+dataFilter.toUpperCase()+"%",true) + ") AND " + this.filter + ")";
		} else {
			realFilter = "(UPPER(" + this.relation.relation + ") LIKE "+justep.System.toExprString("STRING","%"+dataFilter.toUpperCase()+"%",true) + ")";
		}
		param.setString("filter", realFilter);
	} else if (this.filter) {
		param.setString("filter", this.filter);
	}
	var translateParam = "<translate-parameter data-type=\"row-list\" transform-idcolumn=\"false\">" +
		"<rows-config concept=\"" + this.filterData.getConceptName() + "\" sequence=\"" + window.frameElement.relationAlias + "\"></rows-config>" +
		"</translate-parameter>";

	var loader = justep.Request.sendBizRequest(this.filterData.getProcess(), this.filterData.getActivity(), this.filterData.getQueryAction(), param, translateParam, null, true);
	var result = justep.Request.isSuccess(loader);
	if(result){
		var insData = justep.xbl("mainData");
		var rowsE = justep.XML.eval(loader.responseXML, "//rows");
		var total = 0;
		if (rowsE.length > 0) {
			insData.loadXML(justep.XML.toString(rowsE[0]));
			total = justep.XML.getNodeText(loader.responseXML, "//rows/userdata[@name='sys.count']/text()", "-1");
		} else {
			insData.loadXML("<rows></rows>");
		}
		if(event.offset == 0)
			event.instance.total = total;
	} else {
		var msgE = justep.XML.eval(loader.responseXML, "/root/message");
		var msgT = msgE.length > 0 ? msgE[0].text : "";
		var msg = new justep.Message(justep.Message.JUSTEP231033, msgT);
		throw justep.Error.create(msg);
	}
};

getRelationValueDialog.getFilterString = function(){
	return $("#filter-input").val();
};

getRelationValueDialog.generateDefaultFilter = function() {
	this.filterData.filters.setFilter("_advance_filter_", "");
	var ret = this.filterData.filters.toString();
	this.filterData.advanceFilter.apply();
	return ret;
};

getRelationValueDialog.mainDataCustomRefresh = function(event){
	getRelationValueDialog.queryData(event);
};

getRelationValueDialog.init = function(){
	if(!this.inited){
		this.inited = true;
		this.filterData = window.frameElement.filterData;
		this.data = justep.xbl('mainData');
		this.data.limit = 6;
		this.filter = this.generateDefaultFilter();
		this.relation = this.filterData.defRelations[window.frameElement.relationAlias];
		var me = this;
		$("#filter-input").keydown(function(event){
			if(event.keyCode == 13)//回车
				me.data.refreshData();
		});
	}
};

getRelationValueDialog.mainDataBeforeRefresh = function(event){
	getRelationValueDialog.init();
};

getRelationValueDialog.trigger1Click = function(event){
	this.data.refreshData();	
};

getRelationValueDialog.btn_cancel_idClick = function(event){
	parent.selectDialogCloseProcess(window.name, 'cancel', "");	
};

getRelationValueDialog.btn_ok_idClick = function(event){
	var insData = justep("mainData").xformsObject;
	var value = insData.store.getValue(insData.store.selectRowID, 0);
	if (this.relation.type == "Date") {
		var date = xforms.I8N.parse(value, xforms.I8N.get("format.date"));
		value = xforms.I8N.format(date, "yyyy-MM-dd");
	} else if (this.relation.type == "Time") {
		var date = xforms.I8N.parse(value, xforms.I8N.get("format.datetime"));
		value = xforms.I8N.format(date, "hh:mm:ss");
	} else if (this.relation.type == "DateTime") {
		var date = xforms.I8N.parse(value, xforms.I8N.get("format.datetime"));
		value = xforms.I8N.format(date, "yyyy-MM-dd hh:mm:ss");
	}
	parent.selectDialogCloseProcess(window.name, 'ok', value);
};

justep.TreeLocate = function(opt){
	this._id = opt.id;
	this._dataId = opt.dataId;
	this._relation = opt.relation;
	this._pathRelation = opt.pathRelation;
	this._dataId = opt.data;
	this._pathRelation = opt.pathRelation;
	this._treeId = opt.treeId;
	this._onGetCondition = opt.onGetCondition;
	
	this._filter = null;
	this._oldFilter = "";
	this._index = 0;
	this._rows = [];
};

justep.TreeLocate._locateFilterName = "_dialog_template_";
justep.TreeLocate._locateTreeRoot = "_is_root_";

justep.TreeLocate.prototype = {
	_joinFilter : function(filter1, filter2, operator) {
		if (!operator)
			operator = "and";

		if (filter1 && filter2)
			return "(" + filter1 + ") " + operator + " (" + filter2 + ")";
		else
			return (filter1 ? filter1 : "") + (filter2 ? filter2 : "");
	},
		
	_getMultiLikeFilter : function(fields, value, split) {
		if (!split)	split = ",";
		var fieldArray = [];
		if (typeof (fields) == "string")
			fieldArray = fields.split(split);
		else if (Object.prototype.toString.apply(fields) == "[object Array]")
			fieldArray = fields
		else
			throw new Error("无效的fields");

		value = value.toUpperCase();
		var filter = "";
		for ( var i = 0; i < fieldArray.length; i++) {
			filter = this._joinFilter(filter, "UPPER("
					+ fieldArray[i] + ") LIKE '%" + value + "%'", "OR");
		}
		return filter;
	},
		
	_getTreeGridIDPathByFullID : function(treeGrid, fullID) {
		var idArray = fullID.split("/");
		/** 对组织机构sFID的特殊处理 **/
		for (var i = 0; i < idArray.length; i++)
			if(idArray[i].indexOf(".")>0) idArray[i] = idArray[i].substring(0, idArray[i].indexOf("."));
		var result = justep.TreeLocate._locateTreeRoot + idArray.join("/");
		
		for (var i = 0; i < idArray.length; i++) {
			var id = idArray[i];
			if (treeGrid.grid.getRowIndex(id) >= 0) {
				var rootIDPath = treeGrid.getParentsID(id,true);
				var idPath = idArray.slice(i+1).join("/");
				if (!!idPath)
					rootIDPath = rootIDPath + "/" + idPath;
				return rootIDPath;
			}
		}	
		return result;
	},
	setFilter : function(fields,value){
		if(fields && value) {
			this._oldFilter = this._filter;
			this._filter = this._getMultiLikeFilter(fields,value);
		}
	},
	getFilter : function(){
		var data = justep.xbl(this._dataId);
		return data.getFilter(this._locateFilterName);
	},
	request : function(){
		try{
			var data = justep.xbl(this._dataId);
			if(!data) throw new Error("id 为：["+id+"]的data不存在!");
			data.setFilter(this._locateFilterName,this._filter);
			/** 取消data上的tree相关状态 **/
			data.defTreeOption.isTree = false;
			data.setTreeFilter("");
			/** 构造新的查询 **/
			data._createRefreshParam(0, -1);
			var options = {};			
			options.process = data.getProcess();
			options.activity = data.getActivity();
			options.action = data.getQueryAction();
			options.parameters = data.queryParam;
			options.dataType = "json";
			options.translateParam = data.createRefreshTranslateParam();
			
			var r = justep.Request.sendBizRequest2(options);
			var rows = justep.Request.responseParseJSON(r).data.value.rows;			
		}finally{
			data.setFilter(this._locateFilterName,"");					
			data.defTreeOption.isTree = true;
		}			
		
		return rows;
	},
	/**
	 * 开始定位
	 */
	locate : function(path){
		var value = document.getElementById("input-"+this._id).value;
		if(!value || value=="") return;
		
		if(!path){
			this.setFilter(this._relation,value); 
			
			var fun = justep.Function.get(this._onGetCondition);
			if (fun) {
				var eventData = {
					"id" : id,
					"filterData" : filterData,
					"filterRelations" : filterRelations,
					"value" : value,
					"defaultCondition" : this._filter,
					"handled" : false
				};
				var customCondition = fun(eventData);
				if (eventData.handled)
					this._filter = customCondition;
			}
			
			/** 数据请求 **/
			if(this._oldFilter != this._filter){
				this._rows = this.request();
			}else{
				/** 查询出多条数据后依次定位**/
				this._index = ((this._index+1) < this._rows.length )?this._index + 1 : 0 ;				
			}
			var row = this._rows[this._index],raletion = null;
			if(row) {
				raletion = row[this._pathRelation];
			}else{
				alert("没有符合条件的数据");
			}
			if(raletion) path = raletion.value;
		}
		
		if(path){			
			var grid = justep.xbl(this._treeId);
			if(grid) var idPath = this._getTreeGridIDPathByFullID(grid, path);
			if (!!idPath) {
				var data = justep.xbl(this._dataId);
				data.expandTreeByIdPath(idPath);
			}
		}
	}		
};
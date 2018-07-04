justep.ProcessDesigner = function(xblObject){
	dhtmlxEventable(this);
	
	this._id = xblObject.domNode.getAttribute("id");
	if (!this._id){
		this._id = "processDesigner1";
		xblObject.domNode.setAttribute("id", this._id);
	}
	
	this.LOAD_TEMPLATE_AFTER = "onLoadTemplateAfter";
	this._addListener(this.LOAD_TEMPLATE_AFTER, xblObject.domNode.getAttribute(this.LOAD_TEMPLATE_AFTER), xblObject);
	
	this._selectExecutorDialogID = this._id + "_selectExecutorDialogID";
	this._process = null;
	this._activity = null;
	this._designer = null;
	this._task = null;
	this._selectExecutorDialog = null;
	this._selectExecutorDialogWindow = "/UI/system/service/process/dialogs/selectExecutorsDialog.w";
	
	this._selectProcessTemplateDialogID = this._id + "_selectProcessTemplateDialogID";
	this._selectProcessTemplateDialog = null;
	this._selectProcessTemplateDialogWindow = "/UI/system/service/process/selectProcessTemplate.w";
	
	var self = this;
	var param = {id: self._id, activities:null, loadProcess: function(){
		return xblObject._loadProcess();
		
	}, selectExecutor: function(container, node, curValue){
		var dialog = xblObject._getSelectExecutorDialog(container);
		dialog.open({
			range: [{fid: "/"}],
			selected: curValue.items,
			orgKinds: "",
			cascade: false
		}, new justep.Message(justep.Message.JUSTEP230055).getMessage());
	}, 
	loadTemplate : function(){
		
		var dialog = xblObject._getSelectProcessTemplateDialog();
		dialog.open({type: "graph", "process":self._process}, new justep.Message(justep.Message.JUSTEP230056).getMessage());
	}};
	this._designer = new justep.graphics.ProcessWebCanvas(param);
};

justep.ProcessDesigner.prototype._addListener = function(name, funname, xblObject){
	var fun = justep.Function.get(funname);
	if (fun  != null){
		this.attachEvent(name, fun, xblObject);
	}
};

justep.ProcessDesigner.prototype._getSelectProcessTemplateDialog = function(){
	var self = this;
	if (!this._selectProcessTemplateDialog) {
		this._selectProcessTemplateDialog = new justep.WindowDialog(this._selectProcessTemplateDialogID, 
			this._selectProcessTemplateDialogWindow, "", true, null, 600, 400,
			null, null, false, null, function(event){
			if (event.data && event.data[0]){
				var data = [event.data[0].sContent, event.data[0].sContent2];
				self._designer.setData(data);
				
				
				var eventData = {'data':event.data[0]};
				if (self.checkEvent(self.LOAD_TEMPLATE_AFTER)){
					self.callEvent(self.LOAD_TEMPLATE_AFTER, [eventData]);
				}
			}
		});
	}
	return this._selectProcessTemplateDialog;	
};


justep.ProcessDesigner.prototype._getSelectExecutorDialog = function(container){
	if (!this._selectExecutorDialog) {
		this._selectExecutorDialog = new justep.WindowDialog(this._selectExecutorDialogID, 
			this._selectExecutorDialogWindow, "", true, null, 600, 400,
			null, null, false, null, function(event){
			var items = event.data.selected;
			items = items || [];
			var expr = "";
			for (var i=0; i<items.length; i++){
				if (expr == ""){
					expr = "'" + items[i].fid + "'";
				}else{
					expr = expr + "," + "'" + items[i].fid + "'"; 
				}
			}
			
			if (expr != ""){
				expr = "findOrgUnitsByFID(list(" + expr + "))";
			}
			
			container.setExecuteRuleProp("executor-range",{"items": items, "expr": expr});
		});
	}
	return this._selectExecutorDialog;	
};

justep.ProcessDesigner.prototype._loadProcess = function(){
	var param = new justep.Request.ActionParam();
	param.setString("process", this._process);
	var action = "queryProcessDefineAction";
	var options = {};
	options.contentType = 'json';
	options.process = justep.Context.getCurrentProcess();
	options.activity = justep.Context.getCurrentActivity();
	options.dataType = "json";
	options.action = action;
	options.parameters = param;
	options.directExecute = true;
	var response = justep.Request.sendBizRequest2(options);
	var result = ["", ""];
	if (justep.Request.isBizSuccess(response, "json")){
		result = justep.Request.responseParseJSON(response).data.value;
	}
	
	return result;
};

justep.ProcessDesigner.prototype.init = function(process, activity, task){
	this._process = process;
	this._activity = activity;
	this._task = task;
	this._designer.initToolbox(this._getActivities());
};

justep.ProcessDesigner.prototype.setData = function(data){
	return this._designer.setData(data);
};


justep.ProcessDesigner.prototype.getData = function(){
	return this._designer.getData();
};


justep.ProcessDesigner.prototype._getActivities = function(){
	var param = new justep.Request.ActionParam();
	var action = null;
	if (this._task){
		param.setString("task", this._task);
		action = "queryCustomizedRangeAction";
	}else{
		param.setString("process", this._process);
		param.setString("activity", this._activity);
		action = "queryCustomizedRange2Action";
	}
	
	var response = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(),
			action, param, null, null, true);
	
	var result = null;
	if (justep.Request.isBizSuccess(response)) {
		result = justep.Request.transform(justep.Request.getData(response.responseXML));
	}	
	return result;	
};


justep.ActionPermission = function(xblObject) {
	dhtmlxEventable(this);

	this._attachEvent($(xblObject.domNode).attr(justep.ActionPermission.EVENT_BEFORE_EXECUTE));
	this._attachEvent($(xblObject.domNode).attr(justep.ActionPermission.EVENT_AFTER_EXECUTE));
	
	var children = $(xblObject.domNode).children();
	this._items = [];
	for (var i = 0; i < children.length; i++) {
		var child = $(children[i]);
		this._items.push({
			"action": this._getActionName(child.attr("action")),
			"control": child.attr("control"),
			"hasPermission": false
		});
	}
	
	var eventData = {
		"items": this._items,
		'source': this
	};
	if (this.checkEvent(justep.ActionPermission.EVENT_BEFORE_EXECUTE)){
		this.callEvent(justep.ActionPermission.EVENT_BEFORE_EXECUTE, [eventData]);
	}
	
	var data = justep.ActionPermission.checkActionPermissions(this._items);
	
	for (var i = 0; i < this._items.length; i++) {
		this._items[i].hasPermission = (data[i].hasPermission == true || data[i].hasPermission == "true");
		if (this._items[i].control && !this._items[i].hasPermission) {
			justep.ActionPermission.setControlDisabled(this._items[i].control, true);
		}
	}
	
	if (this.checkEvent(justep.ActionPermission.EVENT_AFTER_EXECUTE)){
		this.callEvent(justep.ActionPermission.EVENT_AFTER_EXECUTE, [eventData]);
	}
};

justep.ActionPermission.EVENT_BEFORE_EXECUTE = "onBeforeExecute";
justep.ActionPermission.EVENT_AFTER_EXECUTE = "onAfterExecute";

justep.ActionPermission.prototype._attachEvent = function(event){
	var func = eval('(' + event + ')');
	if (typeof func == 'function') this.attachEvent(event, func, this);
};

justep.ActionPermission.prototype._getActionName = function(actionFullName){
	if (typeof actionFullName == "undifined" || actionFullName == null) {
		return "";
	}
	return actionFullName.substring(actionFullName.lastIndexOf("/") + 1);
};

justep.ActionPermission.prototype.getItems = function() {
	return this._items;
};

justep.ActionPermission.prototype.getItemsByAction = function(action) {
	var items = [];
	for (var i = 0; i < this._items.length; i++) {
		if (this._items[i].action == action) {
			items.push(this._items[i]);
		}
	}
	return items;
};

justep.ActionPermission.prototype.getPermissionByAction = function(action) {
	var items = this.getItemsByAction(action);
	if (items.length == 0) {
		var msg = new justep.Message(justep.Message.JUSTEP231031, action);
		throw justep.Error.create(msg);
	}
	return items[0].hasPermission;
};

justep.ActionPermission.setControlDisabled = function(controlID, disable) {
	if (justep.xbl(controlID)) {
		if (justep.xbl(controlID).setDisabled && (typeof justep.xbl(controlID).setDisabled == "function")) {
			justep.xbl(controlID).setDisabled(disable);
		}
	} else if ($("#" + controlID).length > 0) {
		$("#" + controlID).attr("disabled", disable);
	} else {
		var msg = new justep.Message(justep.Message.JUSTEP231032, controlID);
		throw justep.Error.create(msg);
	}
};

justep.ActionPermission.checkActionPermission = function(action, process, activity, executor) {
	var actions = [ {
		"process" : process,
		"activity" : activity,
		"executor" : executor,
		"action" : action
	} ];
	var data = justep.ActionPermission.checkActionPermissions(actions);
	return (data[0].hasPermission == true || data[0].hasPermission == "true");
};

justep.ActionPermission.checkActionPermissions = function(actions) {
	var listParam = new justep.Request.ListParam();
	for ( var i = 0; i < actions.length; i++) {
		var item = actions[i];
		var process = item.process ? item.process : justep.Context.getCurrentProcess();
		var activity = item.activity ? item.activity : justep.Context.getCurrentActivity();
		var executor = item.executor ? item.executor : justep.Context.getExecutor();
		var action = item.action;

		var mapParam = new justep.Request.MapParam();
		mapParam.put("process", new justep.Request.SimpleParam(process,	justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("activity", new justep.Request.SimpleParam(activity, justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("executor", new justep.Request.SimpleParam(executor, justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("action", new justep.Request.SimpleParam(action, justep.XML.Namespaces.XMLSCHEMA_STRING));
		listParam.add(mapParam);
	}
	var param = new justep.Request.ActionParam();
	param.setList("permissions", listParam);
	var r = justep.Request.sendBizRequest(null, null, "checkPermissionAction", param);
	var data = justep.Request.transform(justep.Request.getData(r.responseXML));
	return data;
};

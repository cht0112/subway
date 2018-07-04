justep.OrgDialog = function(xblObject) {
	var node = xblObject.domNode;
	var multi = node.getAttribute("multi-select");
	var dialog = new justep.WindowDialog(node.id, this.getURL(multi), node.getAttribute("title"), node.getAttribute("modal")=="true", node.getAttribute("status"),
	                  node.getAttribute("width"), node.getAttribute("height"), node.getAttribute("left"), node.getAttribute("top"), node.getAttribute("reload-on-open")=="true",
	                  node.getAttribute("onSend"), node.getAttribute("onReceive"), node.getAttribute("onInit"), node.getAttribute("onOpen"), node.getAttribute("onClose"));
	dialog.setClosable(node.getAttribute("closable")!="false");
	dialog.setMinmaxable(node.getAttribute("minmaxable")!="false");
	dialog.setResizable(node.getAttribute("resizable")!="false");
	dialog.setNeighbor(node.getAttribute("neighbor"));
	dialog.setAutoSize(node.getAttribute("autosize")=="true");
	dialog.setShowTitle(node.getAttribute("show-title")!="false");
	dialog.setProcess(node.getAttribute("process"));
	dialog.setActivity(node.getAttribute("activity"));
	dialog._open_bak = dialog.open;

	// 覆盖windowDialog的open方法
	dialog.open = function(data, title, multi, process, activity, executor, executorContext) {
		this._open_bak(data ? data : this.getDefaultData(), title, (multi != null && typeof(multi) != "undefined") ? this.getURL(multi) : null, process, activity, executor, executorContext);
	};

	justep.Object.extend(xblObject, dialog);
};

justep.OrgDialog.prototype.getURL = function(multi) {
	// 返回单选或多选对应的页面URL
	if (multi == true || multi == "true") {
		return "/UI/system/components/orgDialog/dialogs/orgMultiSelect.w";
	} else {
		return "/UI/system/components/orgDialog/dialogs/orgSingleSelect.w";
	}
};

justep.OrgDialog.prototype.getDefaultData = function() {
	var node = this.domNode;
	if (!node) {
		return null;
	} else {
		return {
			"filter": node.getAttribute("filter"),
			"rootFilter": node.getAttribute("root-filter"),
			"manageCodes": node.getAttribute("manage-codes"),
			"orgKinds": node.getAttribute("org-kinds"),
			"showVirtualRoot": (node.getAttribute("show-virtual-root") == "true"),
			"includeDisabledOrg": (node.getAttribute("include-disable-org") == "true"),
			"cascade": (node.getAttribute("cascade") != "false"),
			"listMode": (node.getAttribute("list-mode") == "true"),
			"showCommonGroup": (node.getAttribute("show-common-group") == "true")
		};	
	}
};


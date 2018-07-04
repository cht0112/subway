var folderInterfaceWindow;

var KnowledgeInterface = {
	/**
	 * 发布知识接口
	 */
	publishKnowledgeFun : function(bizData) {
		var param = new justep.Request.ActionParam();
		var xmlParam = new justep.Request.XMLParam(bizData);
		param.setXml("bizData", xmlParam);
		param.setString("delFlag","1");
		var r = justep.Request.sendBizRequest(justep.Context
				.getCurrentProcess(), justep.Context.getCurrentActivity(),
				"publishKnowledgeInterfaceAction", param);
		if (justep.Request.isBizSuccess(r)) {
			return true;
		}
		return false;
	},

	/**
	 * 发布知识接口UI层
	 */
	publishKWByFolder : function(bizData) {
		var bizDom = justep.XML.fromString(bizData);
		if (!folderInterfaceWindow) {
			folderInterfaceWindow = new justep.WindowDialog(
					"folderInterfaceWindow",
					"/OA/knowledge/process/dialog/folderInterface/folderInterface.w",
					"选择栏目", true, null, 575, 325, 0, 0, false);
			folderInterfaceWindow.attachEvent("onSend", function() {
				return {
					fTitle : justep.XML.getNodeText(bizDom, "/root/fTitle"),
					fFolderID : justep.XML.getNodeText(bizDom,
							"/root/fFolderID"),
					fOtherFolderIDs : justep.XML.getNodeText(bizDom,
							"/root/fOtherFolderIDs"),
					fOtherFolderNames : justep.XML.getNodeText(bizDom,
							"/root/fOtherFolderNames")
				};
			}, folderInterfaceWindow);
			folderInterfaceWindow.attachEvent("onReceive", function(event) {
				var folderInfos = event.data.instance;
				justep.XML.setNodeText(bizDom, "/root/fTitle", folderInfos
						.getValueByName("fTitle"));
				justep.XML.setNodeText(bizDom, "/root/fFolderID", folderInfos
						.getValueByName("fFolderID"));
				justep.XML.setNodeText(bizDom, "/root/fOtherFolderIDs",
						folderInfos.getValueByName("fOtherFolderIDs"));
				justep.XML.setNodeText(bizDom, "/root/fOtherFolderNames",
						folderInfos.getValueByName("fOtherFolderNames"));

				var param = new justep.Request.ActionParam();
				var xmlParam = new justep.Request.XMLParam(bizDom);
				param.setXml("bizData", xmlParam);
				var r = justep.Request.sendBizRequest(justep.Context
						.getCurrentProcess(), justep.Context
						.getCurrentActivity(),
						"publishKwInterfaceByFolderAction", param);
				if (!justep.Request.isBizSuccess(r)) {
					throw new Error("发布失败!");
				}
			}, folderInterfaceWindow);
		}
		folderInterfaceWindow.open();
	},

	// 转换XML特殊字符：& < > ' "
	xmlTranslate : function(str) {
		str = str.replace(/&/g, "&amp;");
		str = str.replace(/</g, "&lt;");
		str = str.replace(/>/g, "&gt;");
		str = str.replace(/'/g, "&apos;");
		str = str.replace(/"/g, "&quot;");

		return str;
	},

	isPublishedByBiz : function(bizID, bizType) {
		var param = new justep.Request.ActionParam();
		param.setString("fBizID", bizID);
		param.setString("fBizType", bizType);
		var r = justep.Request.sendBizRequest(justep.Context
				.getCurrentProcess(), justep.Context.getCurrentActivity(),
				"isPublishedByBizAction", param);

		if (!justep.Request.isBizSuccess(r)) {
			throw new Error("判断是否发布过时出错了!");
		} else {
			return (justep.Request.transform(justep.Request.getData(r.responseXML)) == "true");
		}
	},

	getPublishedRangeByBiz : function(bizID, bizType) {
		var param = new justep.Request.ActionParam();
		param.setString("fBizID", bizID);
		param.setString("fBizType", bizType);
		var r = justep.Request.sendBizRequest(justep.Context
				.getCurrentProcess(), justep.Context.getCurrentActivity(),
				"getPublishedRangeByBizAction", param);

		if (!justep.Request.isBizSuccess(r)) {
			throw new Error("获取发布范围出错了!");
		} else {
			return justep.Request.transform(justep.Request.getData(r.responseXML));
		}
	}
}
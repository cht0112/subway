justep.Report = function(xblObject) {
	this.xblObject = xblObject;
	this.waittingDialog = null;
	this.pageSetupDialog = null;
};

justep.Report.prototype._hideWaittingDialog = function() {
	if (this.waittingDialog != null) {
		this.waittingDialog.dialog.close();
	}
}

justep.Report.prototype._getWaittingDialogTips = function(type) {
	if (type == 'print') {
		return "正在准备打印文档，请稍候..."
	}
	else if (type == 'pdf') {
		return "正在生成PDF文档，请稍候..."
	}
	else if (type == 'doc') {
		return "正在生成Word文档，请稍候..."
	}
	else if (type == 'xls') {
		return "正在生成Excel工作表，请稍候..."
	}
	else {
		return "类型不支持";
	}

}

justep.Report.prototype._openWaittingDialog = function(type) {
	if (this.waittingDialog == null) {
		this.waittingDialog = new justep.WindowDialog(this._getReportDefineID() + "WaittingDialog","/system/service/report/dialog/waittingDialog.w", "正在生成...", true, null, 320, 120, 0, 0, true);
  		this.waittingDialog.attachEvent("onSend",function(event){return this.waittingDialogTips;} , this);
  		this.waittingDialog.attachEvent("onReceive",function(event){justep(this._getReportExportFrameID()).src = "";}, this);		
	}
	this.waittingDialogTips = this._getWaittingDialogTips(type);
	this.waittingDialog.open();
}

justep.Report.prototype._getReportDefineID = function() {
	return this.xblObject.reportDefineID;
}

justep.Report.prototype._getReportContentID = function() {
	return this.xblObject.reportContentID;
}

justep.Report.prototype._getReportExportFrameID = function() {
	return this.xblObject.reportExportFrameID;
}

justep.Report.prototype.getReportName = function() {
	return justep(this._getReportContentID()).getAttribute("report-name");
}

justep.Report.prototype.setReportName = function(value) {
	justep(this._getReportContentID()).getAttributeNode("report-name").nodeValue = value;
}

justep.Report.prototype.getReportDefine = function() {
	return eval("get" + this._getReportDefineID() + "()");
};


/*常量DATA 与 BIZ-DATA*/ 
justep.Report.prototype._procReoprtCommonDataQueryAction = function(instance,dataset,datasets,id,i){
	instance.setAttribute("type", "CONSTANT");
	var dataInfo = " <dataset> ";				
	var datasetStore = dataset.getStore();
	var n = datasetStore.getRowsNum();
	for(var r=0; r< n; r++){
		dataInfo += " <record> ";		
		for(var c =0; c<datasets[i].childNodes.length; c++){
			var relationN = datasets[i].childNodes[c].nodeName;
			if(relationN =='#text'){
				continue;
			}
			var rp = '';
			if(relationN == id){
				rp = datasetStore.getRowId(r);
			}else{
				rp = datasetStore.getValueByName(relationN,r);
			}
			dataInfo += " <" + relationN + ">";
			dataInfo += rp;
			dataInfo += " </" + relationN + ">";
		}
		dataInfo += " </record> ";
	}				
	dataInfo += " </dataset> ";
	instance.appendChild($(justep.XML.fromString(dataInfo)).firstElement().cloneNode(true));
}


justep.Report.prototype._getReportRequest = function(type, reportName) {
	var request = justep.XML.fromString('<request xmlns:xreport="http://www.justep.com/x5/xreport" xmlns:rdl="http://www.justep.com/RDL"><xreport:params /><xreport:model /><xreport:view /></request>');
	var reportDefine = $(this.getReportDefine()).firstElement().cloneNode(true);
	if(reportDefine.tagName != 'rdl:report'){
		reportDefine = justep.XML.eval(reportDefine, 'rdl:report', null, 'xmlns:rdl="http://www.justep.com/RDL"')[0];
	}
	
	/* xreport:view */
	var view = justep.XML.eval(request, '//request/xreport:view', null, 'xmlns:xreport="http://www.justep.com/x5/xreport"')[0];
	view.setAttribute("output-type", type);
	view.appendChild(reportDefine);
	
	/*处理背景图片请求问题*/
	var baseUrl = window.location.href.substring(0,window.location.href.indexOf(justep.Request.BASE_URL4NORESOURCE)) +justep.Request.BASE_URL4NORESOURCE;
	var imageTableCells = justep.XML.eval(reportDefine, "//rdl:table-cell[@background !='' ]", null, "xmlns:rdl='http://www.justep.com/RDL'");
	for (var i = 0; i < $(imageTableCells).length; i++) {
		var cbg = $(imageTableCells)[i].getAttribute('background');
		$(imageTableCells)[i].setAttribute('background',baseUrl+cbg);
	}	


	/* object对象处理 */
	var objects = justep.XML.eval(reportDefine, '//rdl:report-object', null, 'xmlns:rdl="http://www.justep.com/RDL"');
	for (var i = 0; i < objects.length; i++) {
		var parent = objects[i].parentNode;
		var getObjectDefine = objects[i].attributes.getNamedItem('get-object-define');
		if (getObjectDefine != null) {
			var o = $(eval(getObjectDefine.nodeValue));
			parent.appendChild(o.firstElement().cloneNode(true));	
		}else {
			/* 尚未支持 */
		}
		parent.removeChild(objects[i]);
	}
	
	/* xreport:param */
	var params = justep.XML.eval(request, '//request/xreport:params', null, 'xmlns:xreport="http://www.justep.com/x5/xreport"')[0];
	var reportNameE = request.createElement("report-name");
	params.appendChild(reportNameE);
	if ((typeof reportName != "undefined") && (reportName != null)) {
		justep.XML.setNodeText(reportNameE,'.',reportName);
	}else {
		justep.XML.setNodeText(reportNameE,'.',"report");
	}

	var uiserverUrlE = request.createElement("uiserver-url");
	params.appendChild(uiserverUrlE);
	justep.XML.setNodeText(uiserverUrlE,'.',baseUrl);
	var currentProcessE = request.createElement("current-process");
	params.appendChild(currentProcessE);
	justep.XML.setNodeText(currentProcessE,'.',justep.Context.getCurrentProcess());
	var currentActivityE = request.createElement("current-activity");
	params.appendChild(currentActivityE);
	justep.XML.setNodeText(currentActivityE,'.',justep.Context.getCurrentActivity());
	
	/* xreport:model */
	var model = justep.XML.eval(request, '//request/xreport:model', null, 'xmlns:xreport="http://www.justep.com/x5/xreport"')[0];
	var datasets = justep.XML.eval(reportDefine, '//rdl:model/rdl:mapping/*', null, 'xmlns:rdl="http://www.justep.com/RDL"');
	for (var i = 0; i < datasets.length; i++) {
		var id = datasets[i].getAttribute("id");
		if (justep.XML.eval(model, "/instance[@id='" + id + "']", null).length == 0) {
			var dataset = justep.xbl(id);
			var datasetType = dataset.type;			
			if (datasetType == "sql" || datasetType == "ksql") {				
				var insDoc = dataset.refreshData();
				model.appendChild($(insDoc).firstElement().cloneNode(true));		
			}else {
				var instance = request.createElement("instance");
				instance.setAttribute("id", id)
				this._procReoprtCommonDataQueryAction(instance,dataset ,datasets ,id ,i);
				model.appendChild(instance);
			}
		}
	}
	
	return request;
};
	
justep.Report.prototype.refresh = function(){
	var result = justep.Request.sendHttpRequest("/UI/system/service/report/reportEditor.j", justep.XML.toString(this._getReportRequest("xhtml")), null,null,null,null,null);
	
/*	var cWidth = this.domNode.clientWidth;
	var cHeight = this.domNode.clientHeight;
	if(!justep.Browser.IE){
		cWidth = cWidth -2;
		cHeight = cHeight -4;
	}
	if( cWidth <= 0){
		cWidth = '100%';
	}
	if( cHeight <= 0){
		cHeight = '100%';
	}
	reportContent.style.overflow='auto';
	reportContent.style.width = cWidth;
	reportContent.style.height = cHeight;
*/	
	var reportContent = justep(this._getReportContentID());	
	reportContent.innerHTML = result.responseText;

	return result; 
};

justep.Report.prototype._getCell = function(value) {
	if (value != null) {
		return "<cell>" + value + "</cell>";
	}else {
		return "<cell/>";
	}
}

justep.Report.prototype._getPageInfo = function() {
	var layout = justep.XML.eval(this.getReportDefine(), '//rdl:layout-set/rdl:layout', null, 'xmlns:rdl="http://www.justep.com/RDL"')[0];
	var type = layout.getAttribute('master-name');
	var width = layout.getAttribute('page-width');
	var height = layout.getAttribute('page-height');
	var orientation = layout.getAttribute('orientation');
	var marginTop = layout.getAttribute('margin-top');
	var marginBottom = layout.getAttribute('margin-bottom');
	var marginLeft = layout.getAttribute('margin-left');
	var marginRight = layout.getAttribute('margin-right');
	var marginHeader = layout.getAttribute('margin-header');
	var marginFootter = layout.getAttribute('margin-footter');
	return "<rows><row>" + this._getCell(type) + this._getCell(width) + this._getCell(height) + 
		this._getCell(orientation) + this._getCell(marginTop) + this._getCell(marginBottom) + 
		this._getCell(marginLeft) + this._getCell(marginRight) + this._getCell(marginHeader) + 
		this._getCell(marginFootter) + "</row></rows>";
}

justep.Report.prototype._setPageInfo = function(pageInfo) {
	var layout = justep.XML.eval(this.getReportDefine(), '//rdl:layout-set/rdl:layout', null, 'xmlns:rdl="http://www.justep.com/RDL"')[0];
	layout.parentNode.setAttribute('master-name', pageInfo.getValue('sPageType'));
	layout.setAttribute('master-name', pageInfo.getValue('sPageType'));
	layout.setAttribute('page-width', pageInfo.getValue('sWidth'));
	layout.setAttribute('page-height', pageInfo.getValue('sHeight'));
	layout.setAttribute('orientation', pageInfo.getValue('sOrientation'));
	layout.setAttribute('margin-top', pageInfo.getValue('sMarginTop'));
	layout.setAttribute('margin-bottom', pageInfo.getValue('sMarginBottom'));
	layout.setAttribute('margin-left', pageInfo.getValue('sMarginLeft'));
	layout.setAttribute('margin-right', pageInfo.getValue('sMarginRight'));
	layout.setAttribute('margin-header', pageInfo.getValue('sMarginHeader'));
	layout.setAttribute('margin-footter', pageInfo.getValue('sMarginFootter'));
}

justep.Report.prototype.pageSetup = function() {
	if (this.pageSetupDialog == null) {
		this.pageSetupDialog = new justep.WindowDialog(this._getReportDefineID() + "PageSetupDialog","/system/service/report/dialog/pageSetupDialog.w", "页面设置", true, null, 505, 395, 0, 0, true);
  		this.pageSetupDialog.attachEvent("onSend",function(event){return this._getPageInfo()} , this);
  		this.pageSetupDialog.attachEvent("onReceive",function(event){this._setPageInfo(event.data)}, this);		
	}
	this.pageSetupDialog.open();
};

justep.Report.prototype.preview = function() {
	//justep.Request.callURL("/system/service/report/reportExport.p", '_null', justep.XML.toString(this._getReportRequest('preview', this.getReportName())), false);
	justep.Request.callURL2("/UI/system/service/report/reportEditor.j", '_null', justep.XML.toString(this._getReportRequest('preview',this.getReportName())));
};

justep.Report.prototype.print = function() {
	this._openWaittingDialog('print');
	//justep.Request.callURL("/system/service/report/reportPrint.p", this.reportExportFrameID, justep.XML.toString(this._getReportRequest('print', this.getReportName())), false);
	justep.Request.callURL2("/UI/system/service/report/reportEditor.j", this.reportExportFrameID, justep.XML.toString(this._getReportRequest('print',this.getReportName())));
};

justep.Report.prototype._export = function(type) {
	this._openWaittingDialog(type);
	//justep.Request.callURL("/system/service/report/reportExport.p", this._getReportExportFrameID(), justep.XML.toString(this._getReportRequest(type, this.getReportName())), false);
	justep.Request.callURL2("/UI/system/service/report/reportEditor.j", this._getReportExportFrameID(), justep.XML.toString(this._getReportRequest(type,this.getReportName())));
};

justep.Report.prototype.exportPDF = function() {
	this._export('pdf');
};
	
justep.Report.prototype.exportWord = function() {
	this._export('doc');
};
	
justep.Report.prototype.exportExcel = function() {
	this._export('xls');
};

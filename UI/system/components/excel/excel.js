/*
 * excel导出对象
 */
justep.ExportExcel = function(xblObject) {
	this._create(xblObject);
};

justep.ExportExcel.getProcess = function(xblObject){
	var action = xblObject.getAttributeValue('action');
	if(!action)
		return "/SA/excel/system/systemProcess";
	else 
		return justep.Context.getCurrentProcess();
};

justep.ExportExcel.getActivity = function(xblObject){
	var action = xblObject.getAttributeValue('action');
	if(!action)
		return "mainActivity";
	else
		return justep.Context.getCurrentActivity();
};

justep.ExportExcel.getAction = function(xblObject, defaultValue){
	var action = xblObject.getAttributeValue('action');
	if(!action)
		return defaultValue;
	else{
		var l = action.split("/");
		if(l.length>1) return l[l.length-1];
		else return action;
	}
};

justep.ExportExcel.exportConfigURL = "/system/components/excel/export/exportConfig.w";

justep.ExportExcel.downloadURL = "/UI/system/components/excel/export/download.j";

justep.ExportExcel.FromKind = {
	'UI' : 'UI',
	'DB' : 'DB'
};

justep.ExportExcel.prototype = {
	_create : function(xblObject){
		if(!xblObject) return;
		this.xblObjId = xblObject.__getAttributeValue('xbl-obj-id');
		this.triggerId = xblObject.__getAttributeValue('trigger-id');

		this.downloadFilename = xblObject.domNode.getAttribute('download-filename');
		this.exportKey = 'true' == xblObject.domNode
				.getAttribute('export-key-relation');
		this.exportCalculate = 'true' == xblObject.domNode
				.getAttribute('export-calc-relation');

		this.onBeforeExport = xblObject.domNode.getAttribute('onBeforeExport');
		if (this.onBeforeExport)
			this.onBeforeExport = justep.Function.get(this.onBeforeExport);
		else
			this.onBeforeExport = null;
		this.onSuccess = xblObject.domNode.getAttribute('onAfterExport');
		if (this.onSuccess)
			this.onSuccess = justep.Function.get(this.onSuccess);
		else
			this.onSuccess = null;
		this.onError = xblObject.domNode.getAttribute('onError');
		if (this.onError)
			this.onError = justep.Function.get(this.onError);
		else
			this.onError = null;
	},
	getAttributeValue : function(name) {
		return this.domNode.getAttribute(name);
	},
	setTabIndex : function(tabIndex) {
		var xf = xforms(this.triggerId);
		if (xf)
			xf.setTabIndex(tabIndex);
	},
	getTabIndex : function() {
		var xf = xforms(this.triggerId);
		if (xf)
			return xf.getTabIndex();
	},
	setAccessKey : function(key) {
		var xf = xforms(this.triggerId);
		if (xf)
			xf.setAccessKey(key);
	},
	getAccessKey : function() {
		var xf = xforms(this.triggerId);
		if (xf)
			return xf.getAccessKey();
	},
	setDisabled : function(disabled) {
		var xf = xforms(this.triggerId);
		if (xf)
			xf.setDisabled(disabled);
	},
	getDisabled : function() {
		var xf = xforms(this.triggerId);
		if (xf)
			return xf.getDisabled();
	},
	getData : function() {
		if (!this.dataId)
			this.dataId = this.getAttributeValue('data');
		return justep.xbl(this.dataId);
	},
	isExportKey : function() {
		return this.exportKey;
	},
	isExportCalculate : function() {
		return this.exportCalculate
				&& (justep.ExportExcel.FromKind.UI == this.getFromKind());
	},
	_getExportConfigURL : function(){
		return justep.ExportExcel.exportConfigURL;
	},
	getConfigDlg : function() {
		// 不存在就创建一个
		if (!this.configDlg) {
			this.configDlg = new justep.WindowDialog(this.xblObjId
					+ "_configDialog_",
					this._getExportConfigURL(), (new justep.Message(justep.Message.JUSTEP231048)).getMessage(),
					true, null, 430, 350, 0, 0, false);
			this.configDlg.dialog.minmaxable = false;
			this.configDlg.attachEvent("onSend", function(event) {
				return this;
			}, this);
			this.configDlg.attachEvent("onReceive", function(event) {
				var resultData = event.data;
				var exportConfigData = this.createExportConfigParam(resultData,
						true);
				this._doExport(exportConfigData);
			}, this);
		}
		return this.configDlg;
	},
	getFromKind : function() {
		if (!this.fromKind)
			this.fromKind = this.getAttributeValue('from') ? this
					.getAttributeValue('from') : justep.ExportExcel.FromKind.DB;
		return this.fromKind;
	},
	isUseConfigDlg : function() {
		if (typeof (this.useConfigDlg) == 'undefined')
			this.useConfigDlg = ('false' != this
					.getAttributeValue('use-config-dlg'));
		return this.useConfigDlg;
	},
	showConfigDlg : function() {
		var dlg = this.getConfigDlg();
		dlg.open();
	},
	getRelationWidths : function(){
		if(!this._relationWidths){
			this._relationWidths = {};
			var r = this.domNode.getAttribute('relations');
			var rlabel = this.domNode.getAttribute('label-relations');
			var labelList = rlabel?rlabel.split(','):[];
			if(r){
				var list = r.split(',');
				for(var i in list){
					var s = list[i];
					if(s){
						var ls = s.split(':');
						if(ls.length==1) this._relationWidths[ls[0]]={w:"", l:(i<labelList.length?labelList[i]:'')};
						else if(ls.length==2) this._relationWidths[ls[0]]={w:ls[1], l:(i<labelList.length?labelList[i]:'')};
					}
				}
			}
		}
		return this._relationWidths;
	},
	getRelationWidth : function(relation){
		var o = (this.getRelationWidths())[relation];
		return o?o.w:'';
	},
	getRelationLabel : function(relation){
		var o = (this.getRelationWidths())[relation];
		return o?o.l:'';
	},
	getRelations : function(){
		var ls = this.getRelationWidths();
		var rs = [];
		for(var i in ls){
			rs.push(i);
		}
		return rs;
	},
	createExportConfigParam : function(data, isConfigDlgResult) {
		/*
		 * <config><show-label>true</show-label><start-row>1</start-row></config>
		 * <concept excelCellNo="1"> <relation metaName="name" metaLabel="名称"
		 * metaCellNo="1" type="http://www.w3.org/2001/XMLSchema#String"
		 * excelCellNo="2" /> <relation metaName="birthdate" metaLabel="生日"
		 * metaCellNo="2" type="http://www.w3.org/2001/XMLSchema#Time"
		 * excelCellNo="4"/> <relation metaName="age" metaLabel="年龄"
		 * metaCellNo="3" type="http://www.w3.org/2001/XMLSchema#Integer"
		 * excelCellNo="3"/> </concept>
		 */
		if (!isConfigDlgResult) {
			var result = "<config><show-label>true</show-label><start-row>1</start-row></config>"
					+ (this.isExportKey() ? '<concept excelCellNo="1">'
							: '<concept>');
			var ids = this.getRelations();
			if(ids.length<=0){
				ids = data.getColumnIds();
				if(ids) ids = ids.split(data.delim);
			}
			var cellNO = this.isExportKey() ? 2 : 1;
			for ( var i = 0; i < ids.length; i++) {
				var colInfo = data.getColumnInfo(ids[i]);
				if (data.versionRelation != ids[i]
				&& (this.isExportCalculate() || ('EXPRESS' != colInfo.define))) {
					var l = this.getRelationLabel(ids[i]);
					var s = '<relation metaName="' + ids[i]
					+ '" width="' + this.getRelationWidth(ids[i])
					+ '" metaLabel="' + (l?l:colInfo.label)
					+ '" metaCellNo="' + (i + 1) + '" type="'
					+ colInfo.type + '" excelCellNo="' + cellNO
					+ '"/>';
					result += s;
					cellNO++;
				}
			}
			return '<root>' + result + '</concept></root>';
		} else {
			var result = "<config><show-label>true</show-label><start-row>1</start-row></config>";
			var len = data.getCount();
			var conceptStr = "";
			var relationStr = "";
			var excelCellNO = 1;
			for ( var i = 0; i < len; i++) {
				var rowId = data.getRowId(i);
				if ('1' == data.getValue('ch', rowId)) {
					if (this.isExportKey()
							&& 'key' == data.getValue('type', rowId)
							&& '0' == data.getValue('NO', rowId)) {
						conceptStr = '<concept excelCellNo="' + excelCellNO
								+ '">';
						excelCellNO++;
					} else {
						var s = '<relation metaName="'
								+ data.getValue('id', rowId) + '" metaLabel="'
								+ data.getValue('label', rowId)
								+ '" width="' + data.getValue('width', rowId)
								+ '" metaCellNo="' + data.getValue('NO', rowId)
								+ '" type="' + data.getValue('type', rowId)
								+ '" excelCellNo="' + excelCellNO + '"/>';
						relationStr += s;
						excelCellNO++;
					}
				}
			}
			if (conceptStr == '')
				conceptStr = '<concept>';
			return '<root>' + result + conceptStr + relationStr
					+ '</concept></root>';
		}
	},

	getDataQueryActionParam : function(data){
		var mapParam = new justep.Request.MapParam();
		if(!(data instanceof justep.XBizData)){
			var msg = new justep.Message(justep.Message.JUSTEP231049);
			throw justep.Error.create(msg);
		}
		data.setTreeFilter("");
		data._createRefreshParam(0, -1);
		mapParam.put("process", new justep.Request.SimpleParam(data.getProcess(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("activity", new justep.Request.SimpleParam(data.getActivity(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("action", new justep.Request.SimpleParam(data.getQueryAction(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		var temp = new justep.Request.MapParam();
		var dataQueryParam = data.queryParam.param;
		for (var o in dataQueryParam) temp.put(o, dataQueryParam[o]);
		mapParam.put("parameters", temp);
		return mapParam;
	},
	
	_getDataTable : function(){
		return this.getData().serialize(false,false);
	},
	
	getActionParam : function(exportConfigData) {
		var from = this.getFromKind();
		var data = this.getData();
		var param = new justep.Request.ActionParam();
		param.setString('from', from);
		param.setXml('config', new justep.Request.XMLParam(exportConfigData));
		if (from == justep.ExportExcel.FromKind.UI) {
			param.setTable('data', new justep.Request.TableParam(this._getDataTable()));
		}else if(from == justep.ExportExcel.FromKind.DB){
			param.setMap('queryActionParam', this.getDataQueryActionParam(data));
		}
		return param;
	},

	exportExcel : function() {
		var enableExport = true;
		if (this.onBeforeExport)
			enableExport = this.onBeforeExport({
				'source' : this
			});
		if (!enableExport)
			return;
		var useConfigDlg = this.isUseConfigDlg();
		if (!useConfigDlg) {
			var exportConfigData = this.createExportConfigParam(this.getData());
			this._doExport(exportConfigData);
		} else
			this.showConfigDlg();
	},

	_getContentType : function(){
		return "application/xml";
	},
	_doExport : function(exportConfigData) {
		var options = {};
		options.process = justep.ExportExcel.getProcess(this);
		options.activity = justep.ExportExcel.getActivity(this);
		options.action = justep.ExportExcel.getAction(this, "exportExcel");
		options.contentType = this._getContentType();
		options.dataType = "json";
		options.parameters = this.getActionParam(exportConfigData);
		var self = this;
		options.callback = function(data) {
			if (data.state) {
				var fileName = data.response;
				if(!justep.Browser.hasTouch) $(self.getElementByXblID('download'))
						.attr(
								'src',
								justep.Request
										.setBizParams(
												justep.Request
														.convertURL(justep.ExportExcel.downloadURL+"?action=downloadExportExcel&fileName="
																+ encodeURI(fileName)
																+ (self.downloadFilename ? ('&$downloadFilename=' + encodeURI(self.downloadFilename))
																		: '')),
												justep.ExportExcel.getProcess(self),
												justep.ExportExcel.getActivity(self)));
				else window.open(justep.Request
						.setBizParams(
								justep.Request
										.convertURL(justep.ExportExcel.downloadURL+"?action=downloadExportExcel&fileName="
												+ encodeURI(fileName)
												+ (self.downloadFilename ? ('&$downloadFilename=' + encodeURI(self.downloadFilename))
														: '')),
								justep.ExportExcel.getProcess(self),
								justep.ExportExcel.getActivity(self)));
				if (self.onSuccess)
					self.onSuccess({
						'source' : self
					});
			} else {
				var msg = justep.Request.getServerError(data.httpResponse,
						(new justep.Message(justep.Message.JUSTEP231050)).getMessage());
				if (self.onError)
					self.onError({
						'source' : self,
						'message' : msg,
						'result' : data
					});
				throw new Error(msg);
			}
		};
		justep.Request.sendBizRequest2(options);
	}
};

/*
 * excel导入对象
 */
justep.ImportExcel = function(xblObject) {
	this._create(xblObject);
};

justep.ImportExcel.uploadURL = justep.Request.convertURL("/UI/system/components/excel/import/upload.j");
justep.ImportExcel.getProcess = justep.ExportExcel.getProcess;
justep.ImportExcel.getActivity = justep.ExportExcel.getActivity;
justep.ImportExcel.getAction = justep.ExportExcel.getAction;

justep.ImportExcel.ToKind = justep.ExportExcel.FromKind;


justep.ImportExcel.prototype = {
	_create : function(xblObject){
		if(!xblObject) return;
		this.xblObjId = xblObject.__getAttributeValue('xbl-obj-id');
		this.dialogId = xblObject.__getAttributeValue('dialog-id');
		this.formId = xblObject.__getAttributeValue('form-id');
		this.triggerId = xblObject.__getAttributeValue('trigger-id');
		this.configId = xblObject.__getAttributeValue('config-id');

		this.onBeforeImport = xblObject.domNode.getAttribute('onBeforeImport');
		if (this.onBeforeImport)
			this.onBeforeImport = justep.Function.get(this.onBeforeImport);
		else
			this.onBeforeImport = null;
		this.onSuccess = xblObject.domNode.getAttribute('onAfterImport');
		if (this.onSuccess)
			this.onSuccess = justep.Function.get(this.onSuccess);
		else
			this.onSuccess = null;
		this.onError = xblObject.domNode.getAttribute('onError');
		if (this.onError)
			this.onError = justep.Function.get(this.onError);
		else
			this.onError = null;
	},
	setTabIndex : function(tabIndex) {
		var xf = xforms(this.triggerId);
		if (xf)
			xf.setTabIndex(tabIndex);
	},
	getTabIndex : function() {
		var xf = xforms(this.triggerId);
		if (xf)
			return xf.getTabIndex();
	},
	setAccessKey : function(key) {
		var xf = xforms(this.triggerId);
		if (xf)
			xf.setAccessKey(key);
	},
	getAccessKey : function() {
		var xf = xforms(this.triggerId);
		if (xf)
			return xf.getAccessKey();
	},
	setDisabled : function(disabled) {
		var xf = xforms(this.triggerId);
		if (xf)
			xf.setDisabled(disabled);
	},
	getDisabled : function() {
		var xf = xforms(this.triggerId);
		if (xf)
			return xf.getDisabled();
	},
	getXblObjId : function() {
		return this.xblObjId;
	},
	getForm : function(kind) {
		if (!this.form)
			this.form = justep(this.formId);
		return this.form;
	},
	getDialog : function() {
		if (!this.dialog)
			this.dialog = justep.xbl(this.dialogId);
		return this.dialog;
	},
	getAttributeValue : function(name) {
		return this.domNode.getAttribute(name);
	},
	getData : function() {
		if (!this.dataId)
			this.dataId = this.getAttributeValue('data');
		var data = justep.xbl(this.dataId);
		return data;
	},
	getProcess : function() {
		var s = justep.xbl(this.domNode.getAttribute('process'));
		if (!s)
			return justep.Context.getCurrentProcess();
		else
			return s;
	},
	getActivity : function() {
		var s = justep.xbl(this.domNode.getAttribute('activity'));
		if (!s)
			return justep.Context.getCurrentActivity();
		else
			return s;
	},
	dialogOk : function() {
		this.isUseDefault = this.useDefault();
		var ok = true;
		var filePath = $("#" + this.formId).children("input[name='excel']").val();
		if (this.onBeforeUpload)
			ok = this.onBeforeUpload({
				'source' : this,
				'file' : filepath
			});
		if (ok) {
			if(!filePath || filePath==""){
				var msg = new justep.Message(justep.Message.JUSTEP231051);
				throw justep.Error.create(msg);
			}
			this.upLoadExcel();
		}
	},
	dialogCancel : function() {
		this.isUseDefault = this.useDefault();
		if (this.getDialog())
			this.getDialog().close();
	},
	importExcel : function() {
		if (!this.getMappingUrl() || !this.getData()) {
			var msg = new justep.Message(justep.Message.JUSTEP231052);
			throw justep.Error.create(msg);
		}
		var enableImport = true;
		if (this.onBeforeImport)
			enableImport = this.onBeforeImport({
				'source' : this
			});
		if (!enableImport)
			return;
		this.showConfigDlg();
	},
	readyUpload : function() {
		var form = this.getForm();
		if (!form)
			return;

		justep.Request.setFormAction(form, justep.ImportExcel.uploadURL);
		//$(form).children("input[name='mapping']")
		//		.val(this.getMappingUrl());
		$(form).children("input[name='process']")
				.val(justep.ImportExcel.getProcess(this));
		$(form).children("input[name='activity']")
				.val(justep.ImportExcel.getActivity(this));
		$(form).children("input[name='action']")
				.val("uploadImportExcel");
	},
	upLoadExcel : function() {
		this.readyUpload();
		if (this.getForm())
			this.getForm().submit();
	},
	getToKind : function() {
		if (!this.toKind)
			this.toKind = this.getAttributeValue('to') ? this
					.getAttributeValue('to') : justep.ImportExcel.ToKind.DB;
		return this.toKind;
	},
	getMappingUrl : function() {
		if (!this.mappingUrl)
			this.mappingUrl = this.getAttributeValue('mapping-src');
		return this.mappingUrl;
	},
	useDefault : function() {
/**			
		if (typeof (this.isUseDefault) == 'undefined')
 			this.isUseDefault = this.getAttributeValue('use-default') == 'true';**/
			this.isUseDefault = !($("#"+this.__getAttributeValue('input-id')).attr('checked'));	
		return this.isUseDefault;
	},
	createConfigParam : function() {
		if (this.useDefault())
			return "";
		$f = $("#" + this.configId);
		var sheet = '<sheet all="'
				+ ($f.find("input[name='all-sheet']").attr('checked') ? "true"
						: "false") + '" ' + 'start="'
				+ $f.find("input[name='sheet-start']").attr('value') + '" '
				+ 'end="' + $f.find("input[name='sheet-end']").attr('value')
				+ '"/>';
		var row = '<row all="'
				+ ($f.find("input[name='all-row']").attr('checked') ? "true"
						: "false") + '" ' + 'start="'
				+ $f.find("input[name='row-start']").attr('value') + '" '
				+ 'end="' + $f.find("input[name='row-end']").attr('value')
				+ '"/>';
		return sheet + row;
	},
	createDataParam : function() {
		var data = this.getData();
		if (!data){
			var msg = new justep.Message(justep.Message.JUSTEP231053);
			throw justep.Error.create(msg);
		}
		var conceptParam = '<concept name="' + data.getConceptName() + '">';
		var relationParam = '';
		var ids = data.getColumnIds();
		if (ids) {
			ids = ids.split(data.delim);
			for ( var i = 0; i < ids.length; i++) {
				var colInfo = data.getColumnInfo(ids[i]);
				relationParam += '<relation name="' + ids[i] + '" type="'
						+ colInfo.type + '"/>';
			}
		}
		conceptParam += relationParam + '</concept>';
		return conceptParam;
	},
	
	getDataNewActionParam : function(data){
		var mapParam = new justep.Request.MapParam();
		if(!(data instanceof justep.XBizData)){
			var msg = new justep.Message(justep.Message.JUSTEP231054);
			throw justep.Error.create(msg);
		}
		var oldDataType = data.dataType;
		try{//导入只是用xml格式进行
			data.dataType = 'xml';
			data._createNewParam();
		}finally{
			data.dataType = oldDataType; 
		}
		mapParam.put("process", new justep.Request.SimpleParam(data.getProcess(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("activity", new justep.Request.SimpleParam(data.getActivity(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("action", new justep.Request.SimpleParam(data.getNewAction(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		var temp = new justep.Request.MapParam();
		var dataNewParam = data.newParam.param;
		for (var o in dataNewParam) temp.put(o, dataNewParam[o]);
		mapParam.put("parameters", temp);
		return mapParam;
	},

	getDataSaveActionParam : function(data){
		var mapParam = new justep.Request.MapParam();
		if(!(data instanceof justep.XBizData)){
			var msg = new justep.Message(justep.Message.JUSTEP231054);
			throw justep.Error.create(msg);
		}
		data._createSaveParam();
		mapParam.put("process", new justep.Request.SimpleParam(data.getProcess(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("activity", new justep.Request.SimpleParam(data.getActivity(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		mapParam.put("action", new justep.Request.SimpleParam(data.getSaveAction(),
				justep.XML.Namespaces.XMLSCHEMA_STRING));
		var temp = new justep.Request.MapParam();
		var dataSaveParam = data.saveParam.param;
		for (var o in dataSaveParam) temp.put(o, dataSaveParam[o]);
		mapParam.put("parameters", temp);
		return mapParam;
	},
	
	getActionParam : function(options) {
		var param = new justep.Request.ActionParam();
		var to = this.getToKind();
		var configParam = '<config use-default="'
			+ (this.useDefault() ? "true" : "false") + '" to="'
			+ to + '" excel-file="' + options.excel
			+ '" mapping-file="' + options.mapping + '">'
			+ this.createConfigParam() + "<data>" + this.createDataParam() + "</data>"
			+ "</config>";
		param.setXml('config', new justep.Request.XMLParam(configParam));
		param.setMap('createActionParam', this.getDataNewActionParam(this.getData()));
		if(to == justep.ImportExcel.ToKind.DB){
			param.setMap('saveActionParam', this.getDataSaveActionParam(this.getData()));
		}
		return param;
	},
	_getDataType : function(){
		return "";
	},
	_getContentType : function(){
		return "application/xml";
	},
	_loadDataToUI : function(response){
		if (justep.ImportExcel.ToKind.UI == this.getToKind()) {
			var data = this.getData();
			data.loadXML(response, null, true);
			justep.XData.xformsRefresh(data);
			data.getOperation('save').setEnable(data.canSave());//这里不舒服，因为没有事件刺激
		}
	},
	_transformResult : function(data){
		var result = {};
		var childs = data.childNodes;
		for (var j=0; j<childs.length; j++) {
			var c = childs[j];
			result[c.getAttribute('key')] = justep.XML.getNodeText(c.childNodes[0]);
		}
		return result;
	},
	doImport : function(iframe) {
		if (iframe && iframe.contentWindow && iframe.contentWindow.document) {
			var doc = (!justep.Browser.IE||(justep.Browser.IE>=9))?iframe.contentWindow.document:iframe.contentWindow.document.XMLDocument;
			if(doc){
				var data = justep.XML.eval0(doc, "/root/data/*","single");
				var flag = justep.Request.getFlag(doc);
			}
			if (flag) {
				var isok = 'false' != flag;

				if (isok) {//特殊处理转换,支持ie9
					if(!data){
						if (this.onError)
							this.onError({
								'source' : this,
								'message' : (new justep.Message(justep.Message.JUSTEP231056)).getMessage(),
								'result' : doc
							});
						var msg = new justep.Message(justep.Message.JUSTEP231055);
						throw justep.Error.create(msg);
					}

					var result = this._transformResult(data);
					var options = {};
					options.process = justep.ImportExcel.getProcess(this);
					options.activity = justep.ImportExcel.getActivity(this);
					options.action = justep.ImportExcel.getAction(this, "importExcel");
					options.contentType = this._getContentType();
					options.dataType = this._getDataType();
					options.parameters = this.getActionParam(result);
					var self = this;
					options.callback = function(response) {
						if (response.state) {
							self._loadDataToUI(response.response);

							if (self.onSuccess)
								self.onSuccess({
									'source' : self,
									'response' : response.response
								});
						} else {
							var msg = justep.Request.getServerError(response.httpResponse,
									(new justep.Message(justep.Message.JUSTEP231057)).getMessage());
							if (self.onError)
								self.onError({
									'source' : self,
									'message' : msg,
									'result' : response
								});
							throw new Error(msg);
						}
					};
					justep.Request.sendBizRequest2(options);
				} else {
					var msg = justep.Request.getCode(doc);
					if(msg == justep.Request.SESSION_TIMEOUT){
						msg = justep.Request.getMessage(doc);
					}
					if (this.onError)
					this.onError({
						'source' : this,
						'message' : msg,
						'result' : doc
					});
					var msg = new justep.Message(justep.Message.JUSTEP231058,msg);
					throw justep.Error.create(msg);
				}
			}
			if (this.getDialog())
				this.getDialog().close();
		}
	},
	showConfigDlg : function() {
		var dlg = this.getDialog();
		dlg.open();
	}
};
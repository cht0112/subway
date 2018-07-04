justep.OfficeViewer = function() {
	this.constructor = justep.OfficeViewer;
};

/**
 * 
 */
justep.OfficeViewer.prototype = {
	initComponent : function(){
		this.autoLoad = this.getAttribute("autoLoad",false);
		this.showToolbar = this.getAttribute("showToolbar");
		this.protectType = parseInt(this.getAttribute("protectType"));
		this.gridline = this.getAttribute("gridline",false);
		this.id = this.getAttribute('id');
		this.printAble = this.getAttribute("printAble",true);
		this.ocxID = this.id + "_ocx";
		dhtmlxEventable(this);
		this.addEvents();
		if (this.checkEvent("onInit")){
	 		this.callEvent("onInit", [{"source":this}]);
		}
		if(this.protectType == 3){
			this.showToolbar = false;
		}
	},
	initContent : function(){
		$("#"+this.id).append('<div style="overflow:hidden;width:100%;height:100%;"><div style="overflow:auto;width:100%;height:100%;" id="'+this.ocxID+'"></div></div>');
		if(this.autoLoad){
			this.refresh();
		}	
	},
	createOfficeOcx : function(){
		$('#'+this.ocxID).attr('showToolbar',this.showToolbar);
		$OV2(this.ocxID).CreateOfficeViewer('100%','100%');
		this.officeObj = $OV2(this.ocxID);
		this.initOfficeLayout();
		if (this.checkEvent("onReady")){
	 		this.callEvent("onReady", [{"source":this}]);
		}
	},
	_docOpened:function(){
		this.officeObj.DisplayGridline(this.gridline);
	},
	initOfficeLayout : function(){
		this.officeObj.DisablePrint(!this.printAble);
	},
	refresh : function(){
		if(this.officeObj == undefined){
			this.createOfficeOcx();
		}
	},
	addEvents : function(eventName){
		var events = ["onInit","onReady","onBeforeDocumentNew","onAfterDocumentNew","onBeforeDocumentOpen","onAfterDocumentOpen","onDocumentOpenError","onBeforeDocumentClose","onAfterDocumentClose","onBeforeDocumentSave","onAfterDocumentSave","onDocumentSaveError"];
		for(var eventIndex in events){
			var temp  = this.domNode.getAttribute(events[eventIndex])? justep.Function.get(this.domNode.getAttribute(events[eventIndex])):null;
			if(temp && typeof temp =="function"){
				this.attachEvent(events[eventIndex], temp, this);
			}
		}
	},
	newDoc :function(progID){
		if (this.checkEvent("onBeforeDocumentNew")){
			var eventData = {
				"source" : this,
				data : progID,
				"cancel":false
			};
	 		this.callEvent("onBeforeDocumentNew", [eventData]);
	 		if(eventData.cancel == true){
				return false;
			}
		}
		
		this.officeObj.CreateNew(progID);
		this._docOpened();
		if (this.checkEvent("onAfterDocumentNew")){
			this.callEvent("onAfterDocumentNew", [{"source":this}]);
		}
		return true;
	},
	
	openDocByGet : function(path,progID){
		if (this.checkEvent("onBeforeDocumentOpen")){
			var eventData = {
				"source" : this,
				data : {
					"path" : path,
					"progID" : progID
				},
				"cancel": false
			};
	 		this.callEvent("onBeforeDocumentOpen", [eventData]);
	 		if(eventData.cancel == true){
				return false;
			}
		}
		
		var success = true;
		if(progID){
			success = this.officeObj.Open(path,progID);
		}else{
			success = this.officeObj.Open(path);
		}
		if(success){
			this._docOpened();
			if (this.checkEvent("onAfterDocumentOpen")){
				var eventData = {"source":this};
		 		this.callEvent("onAfterDocumentOpen",[eventData]);
			}
		}else {
			if (this.checkEvent("onDocumentOpenError")){
				var eventData = {"source":this};
		 		this.callEvent("onDocumentOpenError", [eventData]);
			}
			if(this.officeObj.IsOpened()){
				this.officeObj.CloseDoc();
			}
			return false;
		}
		if("Word.Application" == this.officeObj.GetCurrentProgID()){
			//0:只能修订,1:只能批注,2:只能填表格域,3:只读,-1:无限制
			this.officeObj.ProtectDoc(this.protectType);
			if(this.protectType == 3){
				this.officeObj.DisableSaveHotKey(true);
				this.officeObj.DisableCopyHotKey(true);
				this.officeObj.DisableViewRightClickMenu(true);
			}
		}
		return true;
	},
	openDoc : function(path,progID,params){
		
		if (this.checkEvent("onBeforeDocumentOpen")){
			var eventData = {
				"source": this,
				data : {
					"path" : path,
					"progID" : progID,
					"params" : params
				},
				"cancel": false
			};
	 		this.callEvent("onBeforeDocumentOpen", [eventData]);
	 		if(eventData.cancel == true){
				return false;
			}
		}
		
		this.officeObj.HttpInit();
		for(var param in params){
			this.officeObj.HttpAddpostString(param, params[param]);
		}
		this.officeObj.HttpOpenFileFromStream(path,progID);
		var errorCode = this.officeObj.GetErrorCode();
		if(errorCode!= 0){
			if (this.checkEvent("onDocumentOpenError")){
				var eventData = {"source":this,data:errorCode};
		 		this.callEvent("onDocumentOpenError", [eventData]);
			}
			if(this.officeObj.IsOpened()){
				this.officeObj.CloseDoc();
			}
			return false;
		}else {
			this._docOpened();
			if (this.checkEvent("onAfterDocumentOpen")){
				var eventData = {"source":this};
		 		this.callEvent("onAfterDocumentOpen", [eventData]);
			}
		}
		if(progID == "Word.Application"){
			//0:只能修订,1:只能批注,2:只能填表格域,3:只读,-1:无限制
			this.officeObj.ProtectDoc(this.protectType);
			if(this.protectType == 3){
				this.officeObj.DisableSaveHotKey(true);
				this.officeObj.DisableCopyHotKey(true);
			}
		}
		return true;
	},
	saveFile : function(path,fileName,params){
		this.officeObj.DisableStandardCommand(1,false);
		
		if(fileName == undefined){
			fileName = this.officeObj.GetDocumentName();
		}
		if (this.checkEvent("onBeforeDocumentSave")){
			var eventData = {
				"source" : this,
				data : {
					"path" : path,
					"fileName" : fileName,
					"params" : params
				},
				"cancel" : false
			};
	 		this.callEvent("onBeforeDocumentSave", [eventData]);
	 		if(eventData.cancel == true){
				return false;
			}
		}
		
		this.officeObj.HttpInit();
		for(var param in params){
			this.officeObj.HttpAddpostString(param, params[param]);
		}
		this.officeObj.HttpAddPostOpenedFile(fileName);
		this.officeObj.HttpPost(path);
		var errorCode = this.officeObj.GetErrorCode();
		if(errorCode!= 0){
			if (this.checkEvent("onDocumentSaveError")){
				var eventData = {"source":this,data:errorCode};
		 		this.callEvent("onDocumentSaveError", [eventData]);
			}
			$OV2("ov").DisableStandardCommand(1,true);
			return false;
		}else {
			if (this.checkEvent("onAfterDocumentSave")){
				var eventData = {"source":this};
		 		this.callEvent("onAfterDocumentSave", [eventData]);
			}
			$OV2("ov").DisableStandardCommand(1,true);
			return true;
		}
	},
	
	getOfficeObj : function(){
		return this.officeObj;
	},
	getApplication :function(){
		return this.getOfficeObj().GetApplication();
	},
	getActiveDocument :function(){
		return this.getOfficeObj().ActiveDocument();
	},
	
	
	
	getAttribute : function(attrName, defaultValue) {
		var attrValue = this.domNode.getAttribute(attrName);
		if (defaultValue) {
			var returnValue = attrValue ? attrValue : defaultValue;
			if(returnValue == "true"){
				return true;
			}else if(returnValue == "false"){
				return false;
			}	
			return returnValue; 
		} else {
			return attrValue;
		}
	}
};
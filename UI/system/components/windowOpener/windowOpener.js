
/**
 * WindowOpener
 * 
 * @author lzg
 * @createDate 2013年9月9日
 */
/*
 * id, url, title, modal, status, width, height,
		left, top, resizable, onSendToFrame, onReceiveFromFrame
		
alwaysLowered | yes/no | 指定窗口隐藏在所有窗口之后 
alwaysRaised | yes/no | 指定窗口悬浮在所有窗口之上 
depended | yes/no | 是否和父窗口同时关闭 
directories | yes/no | Nav2和3的目录栏是否可见 
height | pixel value | 窗口高度 
hotkeys | yes/no | 在没菜单栏的窗口中设安全退出热键 
innerHeight | pixel value | 窗口中文档的像素高度 
innerWidth | pixel value | 窗口中文档的像素宽度 
location | yes/no | 位置栏是否可见 
menubar | yes/no | 菜单栏是否可见 
outerHeight | pixel value | 设定窗口(包括装饰边框)的像素高度 
outerWidth | pixel value | 设定窗口(包括装饰边框)的像素宽度 
resizable | yes/no | 窗口大小是否可调整 
screenX | pixel value | 窗口距屏幕左边界的像素长度 
screenY | pixel value | 窗口距屏幕上边界的像素长度 
scrollbars | yes/no | 窗口是否可有滚动栏 
titlebar | yes/no | 窗口题目栏是否可见 
toolbar | yes/no | 窗口工具栏是否可见 
Width | pixel value | 窗口的像素宽度 
z-look | yes/no | 窗口被激活后是否浮在其它窗口之上		
 */
justep.openers = {};
justep.WindowOpener = function(option) {
	if(typeof(dhtmlxEventable)!='undefined') dhtmlxEventable(this);
	else if(typeof(justep.Utils.eventable)!='undefined') justep.Utils.eventable(this);
	this.id = option.id ? option.id : (new justep.UUID()).valueOf();
	this.url = option.url;

	this.windowId = this.id + "_window";
	this.process = option.process;
	this.activity = option.activity;
	this.executor = null;
	this.executorContext = null;
	this.window = null;
	this.modal = !!option.modal;
	this.status = option.status;
	this.width = option.width;
	this.height = option.height;
	this.left = option.left;
	this.top = option.top;
	this.resizable = !!option.resizable;
	this.parameters = option.parameters?option.parameters:'';
	this.isOverlaid = false;

	if(typeof this.width=="string"){
		try{
			this.width = parseInt(this.width);
		}catch(e){
			var msg = new justep.Message(justep.Message.JUSTEP231047,"width",this.width);
			throw justep.Error.create(msg);
		}
	}
	if(typeof this.height=="string"){
		try{
			this.height = parseInt(this.height);
		}catch(e){
			var msg = new justep.Message(justep.Message.JUSTEP231047,"height",this.height);
			throw justep.Error.create(msg);
		}
	}

	if (option.onSend && option.onSend != "") {
		var f = null;
		try {
			f = eval(option.onSend);
		} catch (e) {
		}
		if (f && typeof f == "function") {
			this.attachEvent("onSend", f, this);
		}
	}

	if (option.onReceive && option.onReceive != "") {
		var f = null;
		try {
			f = eval(option.onReceive);
		} catch (e) {
		}
		if (f && typeof f == "function") {
			this.attachEvent("onReceive", f, this);
		}
	}

	if (option.onClose && option.onClose != "") {
		var f = null;
		try {
			f = eval(option.onClose);
		} catch (e) {
		}
		if (f && typeof f == "function") {
			this.attachEvent("onClose", f, this);
		}
	}

	if (option.onOpen && option.onOpen != "") {
		var f = null;
		try {
			f = eval(option.onOpen);
		} catch (e) {
		}
		if (f && typeof f == "function") {
			this.attachEvent("onOpen", f, this);
		}
	}
};

justep.WindowOpener.prototype.setURL = function(url) {
	this.url = url;
	this.window = null;
};

justep.WindowOpener.prototype.getWindow = function() {
	return this.window;
};

justep.WindowOpener.prototype._getPrames = function(){
	var left = this.left, top = this.top, height = this.height, width = this.width;
	if(left==null || left==undefined || left=='') left = (window.screen.availWidth - width)/2;  
	if(top==null || top==undefined || top=='') top = (window.screen.availHeight - height)/2; 
	if(justep.Browser.IE){
		var s = (this.modal?'modal=1,':'')
		+ (width?'width='+width+',':'')
		+ (height?'height='+height+',':'')
		+ (left!=null?'left='+left+',':'')
		+ (top!=null?'top='+top+',':'')
		+ (this.status=='fullscreen'?'channelmode=1,fullscreen=1,':'')
		+ (this.resizable?'resizable=1,':'')
		+ 'depended=1,z-look=1,location=0,'
		+ this.parameters;
		return s;
	}else{
		if(this.status=='fullscreen'){//计算全屏
			height = window.screen.availHeight - 60;
			width = window.screen.availWidth - 10;
			top = 0;
			left = 0;
		}
		var s = (this.modal?'modal=1,':'')
		+ (width?'width='+width+',':'')
		+ (height?'height='+height+',':'')
		+ (left!=null?'left='+left+',':'')
		+ (top!=null?'top='+top+',':'')
		+ (this.status=='fullscreen'?'channelmode=1,fullscreen=1,':'')
		+ (this.resizable?'resizable=1,':'')
		+ 'depended=1,z-look=1,location=0,'
		+ this.parameters;
		return s;
	}
};

justep.WindowOpener.prototype._getUrl = function(){
	var url = this.url + ((this.url.indexOf("?")>0)? "&" : "?") + "$opener="+this.id;
	return justep.Request.setBizParams(justep.Request.convertURL(url),this.process,this.activity,this.executor,this.executorContext);
};

justep.WindowOpener.prototype.createOverlay = function(){
    var isIE6 = typeof document.body.style.maxHeight === "undefined";
	var sizeOverlay = function(){
		var $ModalOverlay = $('#ModalOverlay');
		if(isIE6){
			var overlayViewportHeight = document.documentElement.offsetHeight + document.documentElement.scrollTop - 4;
			var overlayViewportWidth = document.documentElement.offsetWidth - 21;
			$ModalOverlay.css({'height':overlayViewportHeight +'px','width':overlayViewportWidth+'px'});
		}else{
			$ModalOverlay.css({'height':'100%','width':'100%','position':'fixed'});
		}	
	};
	
	var sizeIE6Iframe = function(){
		var overlayViewportHeight = document.documentElement.offsetHeight + document.documentElement.scrollTop - 4;
		var overlayViewportWidth = document.documentElement.offsetWidth - 21;
		$('#ModalOverlayIE6FixIframe').css({'height':overlayViewportHeight +'px','width':overlayViewportWidth+'px'});
	};
	
    var overlayColor = '#C1C1C1', overlayOpacity = 30;
    $('body').append('<div id="ModalOverlay" style="z-index:10000;display:none;position:absolute;top:0;left:0;background-color:'+overlayColor+';filter:alpha(opacity='+overlayOpacity+');-moz-opacity: 0.'+overlayOpacity+';opacity: 0.'+overlayOpacity+';"></div>');
    
    if(isIE6){// if IE 6
    	$('body').append('<iframe id="ModalOverlayIE6FixIframe"  src="about:blank"  style="width:100%;height:100%;z-index:9999;position:absolute;top:0;left:0;filter:alpha(opacity=0);"></iframe>');
    	sizeIE6Iframe();
    }
    this.isOverlaid = true;
    sizeOverlay();
    var $ModalOverlay = $('#ModalOverlay');
    $ModalOverlay.fadeIn('fast');
};

justep.WindowOpener.prototype.removeOverlay = function(){
	$('#ModalOverlayIE6FixIframe').remove();
	$('#ModalOverlay').remove();
	this.isOverlaid = false;
};

justep.WindowOpener.prototype.open = function(options) {
	this.sendData = undefined;
	if(options){
		this.sendData = options.data;
		if(options.title)	this.setTitle(options.title);
		if(options.process) this.setProcess(options.process);
		if(options.activity) this.setActivity(options.activity);
		if(options.executor) this.setExecutor(options.executor);
		if(options.executorContext) this.setExecutorContext(options.executorContext);
		if(options.url) this.setURL(options.url);
	}

	//打开窗口
	this.window = window.open("about:blank", this.windowId, this._getPrames());
	justep.openers[this.id] = this;
	this.window.location.href = this._getUrl();
	if(this.modal && !this.isOverlaid) this.createOverlay();
	if (this.checkEvent("onOpen")) {
		this.callEvent("onOpen", [{
			source : this,
			'window' : this.window 
		}]);
	}
};

justep.WindowOpener.prototype.dispatchCloseEvent = function(){
	var self = this;
	window.setTimeout(function(){
		if(!self.window || (self.window && self.window.closed)){
			if (self.isOverlaid) self.removeOverlay();
			if (self.checkEvent("onClose")) {
				self.callEvent("onClose", [{
					source : self
				}]);
			}
		}
	}, 200);
};

justep.WindowOpener.prototype.close = function() {
	if(this.window){
		this.window.close();
		this.window = null;
	}
};

/**
 * 确定 接收从window获得的数据
 */
justep.WindowOpener.prototype.ensure = function(store, noclose) {
	if (this.window && this.window.xforms && this.window.xforms.blur)
		this.window.xforms.blur(true);
	
	if (this.checkEvent("onReceive")) {
		this.callEvent("onReceive", [{
			source : this,
			data : store
		}]);
	}

	this.onReceiveByMapping(this, store);
	
	// 如果是xforms页面直接进行页面向instance写值
	if(typeof(noclose) == "undefined" || noclose == false){
		this.close();		
	}
};

justep.WindowOpener.prototype.refresh = function() {
	this.open();	
};

/**
 * 取消
 */
justep.WindowOpener.prototype.cancel = function() {
	this.close();
};

/**
 * 向frame发送数据
 */
justep.WindowOpener.prototype.sendToWindow = function() {
	var b = false;
	try{//沉默跨域的url
		b = !!this.window;
	}catch (e){};
	if (b && this.window && this.window.justep
			&& this.window.justep.windowReceiver
			&& this.window.justep.windowReceiver.windowReceive) {
		this.window.justep.windowReceiver.windowParentObj = this;
		var eventData = {source : this,	data : this.sendData};
		if (this.checkEvent("onSend")) {
			eventData.data = this.callEvent("onSend", [{
				source : this,
				data : this.sendData
			}]);
		}
		this.window.justep.windowReceiver.windowReceive(eventData);
	}
};

/**
 * 是否允许拖拽改变大小
 */
justep.WindowOpener.prototype.setResizable = function(flag) {
	this.resizable = flag;
};

justep.WindowOpener.prototype.setExecutor = function(executor) {
	this.executor = executor;
};

justep.WindowOpener.prototype.setExecutorContext = function(executorContext) {
	this.executorContext = executorContext;
};

justep.WindowOpener.prototype.setProcess = function(process) {
	this.process = process;
};

justep.WindowOpener.prototype.setActivity = function(activity) {
	this.activity = activity;
};

justep.WindowOpener.prototype.getExecutor = function() {
	return this.executor;
};

justep.WindowOpener.prototype.getExecutorContext = function() {
	return this.executorContext;
};

justep.WindowOpener.prototype.getProcess = function() {
	return this.process;
};

justep.WindowOpener.prototype.getActivity = function() {
	return this.activity;
};

justep.WindowOpener.prototype.onReceiveByMapping = function(node, store) {
	if (!node.domNode) return;
	var $C = $(node.domNode), mapping = [], operation = null, dataId = null, locfrom = [], locto = [], isArr = false;

	dataId = $C.find('result').attr("concept");
	operation = $C.find('result').attr("operation");
	$C.find('mapping').each(function(){
		mapping.push(this);
		if (this.getAttribute("locator") == "true") {
			locfrom.push(this.getAttribute("from"));
			locto.push(this.getAttribute("to"));
		}		
	});
	
	if (!dataId || dataId == "" || !operation || operation == "") {
		return;
	}

	var dataTar = justep.xbl(dataId);
	if (!dataTar) return;
	
	var dataOri = null;
	if(Object.prototype.toString.apply(store) === '[object Array]'){
		dataOri = store;isArr = true;
	}else{
		try{
			dataOri = store.getSimpleStore();
		} catch(e){
			var msg = new justep.Message(justep.Message.JUSTEP231067,"WindowOpener");
			throw justep.Error.create(msg);
		}		
	}

	if(!dataOri) return;
	var c = isArr?dataOri.length:dataOri.rowsBuffer.length;
	if (operation == "new") {
		justep.XData.disableControls();
		try{
			var newData = [];
			for (var i = 0; i < c; i++) {
				var o = {};
				for (var j = 0; j < mapping.length; j++) {
					setValue(o, mapping[j], i);
				}
				newData.push(o);
			}
			if(newData.length>0) dataTar.newData(dataTar.getCount(),null,newData);
		}finally{
			justep.XData.enableControls();
		}
	} else if (operation == "edit") {
		var newData = [];
		for (var i = 0; i < c; i++) {
			var query = dataTar.locate(createLocfrom(locfrom, i), locto, false,
					false, false);
			
			if (query && query.length > 0) {
				for (var k = 0; k < query.length; k++) {
					for (var j = 0; j < mapping.length; j++) {
						setValue(null, mapping[j], i, query[k]);
					}
				}
			} else {
				var o = {};
				for (var j = 0; j < mapping.length; j++) {
					setValue(o, mapping[j], i);
				}
				newData.push(o);
			}
		}
		if(newData.length>0) dataTar.newData(dataTar.getCount(),null,newData);		
	} else if (operation == "clear") {
		removeAll(dataTar);
		justep.XData.disableControls();
		try{
			var newData = [];
			for (var i = 0; i < c; i++) {
				var o = {};
				for (var j = 0; j < mapping.length; j++) {
					setValue(o, mapping[j], i);
				}
				newData.push(o);
			}
			if(newData.length>0) dataTar.newData(dataTar.getCount(),null,newData);
		}finally{
			justep.XData.enableControls();
		}

	} else if (operation == "modify") {
		for (var i = 0; i < c; i++) {
			for (var j = 0; j < mapping.length; j++) {
				setValue(null, mapping[j], i, dataTar.getCurrentRowId());
			}
		}
	} else {
		return;
	}		

	function removeAll(data) {
		var c = data.getCount();
		data.deleteConfirm = false;
		for (i = 0; i < c; i++) {
			data.deleteData(data.getRowId(i));
		}
		data.deleteConfirm = true;
	}

	function setValue(data, node, rownum, rowid) {
		var from = node.getAttribute("from");
		var to = node.getAttribute("to");
		if (!from || from == "" || !to || to == "") return;
		var val = "";
		if(isArr){
			val = (dataOri[rownum])[from];
		}else{
			if(from=="rowid") 
				val = dataOri.getRowId(rownum);
			else
				val = dataOri.getValueByName(from, rownum);			
		}
		if(data) data[to] = val || "";
		else dataTar.setValue(to, val || "", rowid);
	}

	function createLocfrom(locfrom, rownum) {
		var re = [];
		for (var i = 0, c = locfrom.length; i < c; i++) {
			if(isArr){
				re.push((dataOri[rownum])[locfrom[i]]);
			}else{
				re.push(dataOri.getValueByName(locfrom[i], rownum));				
			}
		}
		return re;
	}
};

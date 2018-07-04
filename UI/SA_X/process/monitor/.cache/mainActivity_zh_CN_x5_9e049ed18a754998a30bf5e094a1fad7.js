
__initXBL__ = function(){	justep.XBLObject._registerClasses = function() {
justep.XBLObject._classes["/UI/system/components/dialog.xbl.xml#dialog"] = _xbl_JSClassDefine_dialog;
justep.XBLObject._classes["/UI/system/components/select.xbl.xml#simpleSelect"] = _xbl_JSClassDefine_simpleSelect;
justep.XBLObject._classes["/UI/system/components/process.xbl.xml#process"] = _xbl_JSClassDefine_process;
justep.XBLObject._classes["/UI/system/components/borderLayout.xbl.xml#borderLayout"] = _xbl_JSClassDefine_borderLayout;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processPertChart"] = _xbl_JSClassDefine_processPertChart;
justep.XBLObject._classes["/UI/system/components/window.xbl.xml#window"] = _xbl_JSClassDefine_window;
justep.XBLObject._classes["/UI/system/components/tabs.xbl.xml#tabs"] = _xbl_JSClassDefine_tabs;
justep.XBLObject._classes["/UI/system/components/windowDialog.xbl.xml#windowDialog"] = _xbl_JSClassDefine_windowDialog;
justep.XBLObject._classes["/UI/system/components/tableLayout.xbl.xml#tableLayout"] = _xbl_JSClassDefine_tableLayout;
justep.XBLObject._classes["/UI/system/components/dateFilter.xbl.xml#dateFilter"] = _xbl_JSClassDefine_dateFilter;
justep.XBLObject._classes["/UI/system/components/processChart.xbl.xml#processTrackChart"] = _xbl_JSClassDefine_processTrackChart;
justep.XBLObject._classes["/UI/system/components/toolbars.xbl.xml#toolbars"] = _xbl_JSClassDefine_toolbars;
justep.XBLObject._classes["/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog"] = _xbl_JSClassDefine_bizDataFilterDialog;
justep.XBLObject._classes["/UI/system/components/pageNavigator.xbl.xml#pageNavigator"] = _xbl_JSClassDefine_pageNavigator;
 };
justep.XBLObject._registerClasses();function _xbl_JSClassDefine_dialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_dialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var dialog = new justep.Dialog(node.getAttribute("id"),node.getAttribute("title"),node.getAttribute("modal")=="true",node.getAttribute("status"),node.getAttribute("width"),node.getAttribute("height"),node.getAttribute("left"),node.getAttribute("top")
					,node.getAttribute("onInit"),node.getAttribute("onOpen"),node.getAttribute("onClose")
				);
				dialog.setClosable(node.getAttribute("closable")!="false");
				dialog.setMinmaxable(node.getAttribute("minmaxable")!="false");
				dialog.setResizable(node.getAttribute("resizable")!="false");
				dialog.setNeighbor(node.getAttribute("neighbor"));
				dialog.setAutoSize(node.getAttribute("auto-size")=="true");
				dialog.setShowTitle(node.getAttribute("show-title")!="false");
				justep.Object.extend(this, dialog);
			} 
		}));

function _xbl_JSClassDefine_simpleSelect(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_simpleSelect.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					window.dhx_globalImgPath=justep.Request.convertURL("/form/dhtmlx/dhtmlxCombo/imgs/", true);
					var el = jQuery(this.domNode);
					var onChanged = el.attr("onChanged");
					var defaultValue = el.attr("default-select");
					var width = el.width()||"100%";
					el.height() || el.height(20); 
					this.tabindex = el.attr("tabindex");
					this.accesskey = el.attr("accesskey");
					var disable = el.attr("disabled")=="true";
					var initValue = el.attr("initValue");
					var ref = el.attr("ref");
					var labelRef = el.attr("label-ref");

					this.optionDataId = el.attr("option-data");
					this.optionLabel = el.attr("option-label");
					this.optionValue = el.attr("option-value");
					this.dropdownHeight = el.attr("dropdown-height");
					this.valueSeparator  = el.attr("value-separator");
					this.labelSeparator  = el.attr("label-separator");
					var onDropdown = el.attr("onDropdown");
					if(onDropdown){
						this.onDropdown = justep.Function.get(onDropdown);
					}
					var onCloseup = el.attr("onCloseup");
					if(onCloseup){
						this.onCloseup = justep.Function.get(onCloseup);
					}					
					this.isMulti = el.attr("multi-select") ? (el.attr("multi-select") == "true") : false;
			    	this.combo = new dhtmlXCombo(this.domNode.id, "", width, this.isMulti?"checkbox":"", this.tabindex);
			    	var selfCombo = this.combo;
			    	var _doresize = function(){
			    		/*如果初始是隐藏的， 那么会设置为0*/
			    		if(el.innerWidth())
			    			selfCombo.setSize(el.innerWidth());
			    		var ji = jQuery(selfCombo.DOMelem_input);
			    		ji.css('top',(el.innerHeight()-ji.outerHeight(true))/2);
			    		var jb = jQuery(selfCombo.DOMelem_button);
			    		jb.css('top',(el.innerHeight()-jb.outerHeight(true))/2);
			    	};
			    	el.bind('resize', _doresize);
			    	_doresize();
			    	this.onWindowResize = _doresize;
			    	this.combo.disable(disable);
			    	if(this.onDropdown){
			    		var that = this;
			    		this.combo.attachEvent("onOpen", function(){
			    			that.onDropdown({source: that});
			    		});	
			    	}
			    	if(this.onCloseup){
			    		var that = this;
			    		this.combo.attachEvent("onClose", function(){
			    			that.onCloseup({source: that, label: that.text, value: that.value, valueChanged: (that.oldValue!=that.value)});
			    		});	
			    	}
			    	if(this.dropdownHeight){
			    		if(this.dropdownHeight.indexOf("px") == -1 ) this.dropdownHeight = this.dropdownHeight + "px";
			    		jQuery(this.combo.DOMlist).height(this.dropdownHeight);
			    		if (this.combo.DOMlistF) 
			    			jQuery(this.combo.DOMlistF).height(this.dropdownHeight);
			    	}	
			    	if(initValue){
			    		eval("initValue = " + initValue + ";");
				    	this.combo.addOption(initValue);
				    	this._optionsLoaded = true;
			    	}else if(this.optionDataId){
			    		this.optionData = justep.xbl(this.optionDataId);
			    		var data = this.optionData;
			    		var that = this;
			    		$(this.combo.DOMelem).bind("click", function(){
				    		if(!that._optionsLoaded){
				    			if(!data.loaded) data.refreshData();
				    			var options = [];
				    			for(var i = 0; i<data.getCount();i++){
				    				var rowId = data.getRowId(i);
				    				var label = data.getValue(that.optionLabel, rowId);
				    				if(that.optionLabel && that.optionLabel.toLowerCase() == "rowid")
				    					value = rowId;
				    				var value = rowId;
				    				if(that.optionValue && that.optionValue.toLowerCase() != "rowid")
				    					value = data.getValue(that.optionValue, rowId);
				    				options.push([value, label]);
				    			}
				    			that.combo.addOption(options);
				    			that._optionsLoaded = true;
				    		}	
			    		});
			    	}
			    	if(ref){
					  	var xpathr = /(instance|data)\([\"\'](.*)[\"\']\)\/(.*)/i;
					  	var info = ref.match(xpathr);
					  	this.dataId = info[2];
					  	this.relation = info[3];
					  	if(labelRef)
					  		this.labelRelation = labelRef.match(xpathr)[3];
					  	this.data = justep.xbl(this.dataId);
						this.field = this.data.getStore().fields[this.relation];
						this.jelement = jQuery(this.combo.DOMelem);
					  	var that = this;
					  	var func = function(event){
							var value = event.source.getValue(that.relation, event.rowId);
							that.value = value;
					  		if(that._optionsLoaded){
					  			if(!that.isMulti){
									that.combo.setComboValue(value);					  			
					  			}else{
					  				var vals = value.split(" ");
					  				for(i in vals){
						  				that.combo.setCheckedByValue(vals[i]);
					  				}
								   that.combo.setComboText(that.combo.getCheckedText());
					  			}
					  		}	
							that.combo.setValue(value);
					  		if(that.labelRelation){
					  			that.rowId = event.rowId;
								var label = event.source.getValue(that.labelRelation, event.rowId);
								that.combo.setComboText(label);
					  		}
							that._reprint();
						};
					  	this.data.attachEvent("onIndexChanged", function(event){var evt=event;window.setTimeout(function(){func(evt);},10);});
					  	this.data.attachEvent("onAfterRefresh", function(event){var evt=event;window.setTimeout(function(){func(evt);},10);});
					  	this.data.attachEvent("onValueChanged", function(event){if(!that.disablePrint && event.column && event.column==that.relation) {func(event);that.value = event.value;}});
					  	if(this.data.getCount() > 0){
					  		var rowId = this.data.getRowId(0);
					  		var event = {
					  			source: this.data, 
					  			rowId: rowId,
					  			rowIndex: 0
					  		};
					  		func(event);
					  	}else this._reprint(); 
			    	}
			    	this.combo.readonly(true);
		    		if(this.data && this.relation){
		    			var that = this;
				    	this.combo.attachEvent("onBlur", function(){
				    		that.oldValue = that.value;
				    		if(that.value == that.combo.getValue()) return;
				    		that.value = that.combo.getValue();
				    		that.disablePrint = true;
				    		that.data.setValue(that.relation, that.value, that.rowId);
				  			if(!that.isMulti){
						    	that.text = that.combo.getComboText();
				  			}else{
						    	that.text = that.combo.getCheckedText();
				  			}
				    		if(that.labelRelation){
				    			that.data.setValue(that.labelRelation, that.text, that.rowId);
				    		}
				    		that.disablePrint = false;
				    		that._reprint();	
				    	});
		    		}else{
		    		}
		    		this.value = this.getValue(); 
		    		this.oldValue = this.value;
		    		this.text = this.getText(); 
				},
				_reprint :function(){
				    if(this.data.getCount()==0){
					  this.combo.disable(true);
					  this.jelement.addClass("xforms-readonly");
					  this.jelement.removeClass("grid-invalid");
					  return;
				    }
					this.combo.disable(this.field.readonly);
					if(this.field.readonly) this.jelement.addClass("xforms-readonly");
					else this.jelement.removeClass("xforms-readonly");
		    		if (this.field.valid == false){
		    			this.jelement.addClass("grid-invalid");
		    		}else{
		    			this.jelement.removeClass("grid-invalid");
		    		}
		    	},				
				getValue : function(){
					return this.combo.getValue();
				},
				getText : function(){
		  			if(!this.isMulti){
				    	return this.combo.getComboText();
		  			}else{
				    	return this.combo.getCheckedText();
		  			}
				},
				_hasRef : function(){
					var el = jQuery(this.domNode);
					var ref = el.attr("ref");
					return ref ? true : false; 
				},
				_extractRef : function(ref){
				},
				getDisabled : function(){
					return this.combo._disabled;
				},
				setDisabled : function(value){
					this.combo.disable(value);
				},
				getTabIndex : function(){
					return this.tabindex;
				},	setTabIndex : function(index){
					this.tabindex = index;
				},
				getAccessKey : function(){
					return this.accesskey;
				},
				setAccessKey : function(key){
					this.accesskey = key;
				},
				dispose: function(){
					this.combo.destructor();
					this.combo = null;
					justep.XBLObject.prototype.dispose.call(this);
				}
			}));

function _xbl_JSClassDefine_process(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_process.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function(){
					justep.supportCustomOperation(this);
					justep.Object.extend(this, new justep.ProcessEngine(this));
				}
			}));

function _xbl_JSClassDefine_borderLayout(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_borderLayout.prototype = justep.Object.extend(new justep.XBLObject(), eval({

			"initXBL" : function() {
			   	if(!this.domNode.id || this.domNode.id ==""){
					this.domNode.id = (new UUID()).valueOf();
			   	}
			   	var baseCls = '.xui-borderlayout-';
			   	var id = this.domNode.id; 
			   	this.el = $("#" + id);
			   	this.rootEl = $("#" + id + " > div");
			   	this.topEl = $("#" + id + " > div > " + baseCls + "top");
			   	this.leftEl = $("#" + id + " > div > " + baseCls + "left");
			   	this.rightEl = $("#" + id + " > div > " + baseCls + "right");
			   	this.bottomEl = $("#" + id + " > div > " + baseCls + "bottom");
			   	this.centerEl = $("#" + id + " > div > " + baseCls + "center");
			   	this.topBorderEl = $("#" + id + " > div > " + baseCls + "border-top");
			   	this.leftBorderEl = $("#" + id + " > div > " + baseCls + "border-left");
			   	this.rightBorderEl = $("#" + id + " > div > " + baseCls + "border-right");
			   	this.bottomBorderEl = $("#" + id + " > div > " + baseCls + "border-bottom");
			   	this.onWindowResize();
			},
			onWindowResize: function(){
				var b = parseFloat(this.rootEl.attr('borderSize')),
					top = left = right = bottom = 0,
					w = this.el.width()-2*b, h = this.el.height()-2*b,
					bp = function(el, isHeight){
						return isHeight? (el.outerHeight()-el.height()): (el.outerWidth()-el.width());
					},
					size = function(el, isHeight){
						var value = el.attr('size');
						if(value!='auto'){
							value = parseFloat(value) - bp(el, isHeight);
						}
						return value;
					},
					area = $(" >.xui-borderlayout-area", this.rootEl);

/*				area.css({overflow:'hidden'});	
				area.css({overflow:'auto'});
*/				
				this.rootEl.height(h);
				this.rootEl.width(w);
				this.rootEl.css({top: b, left:b});					
				if(this.topEl.get(0)){
					this.topEl.css({top: top, left:left});
					this.topEl.height(size(this.topEl, true));
					this.topEl.width(w - bp(this.topEl));
					top = this.topEl.outerHeight();
					if(this.topBorderEl.get(0)){
						this.topBorderEl.css({top: top,left:left});
						top += this.topBorderEl.height();
					} 
				}
				if(this.leftEl.get(0)){
					this.leftEl.css({top: top, left:left});
					this.leftEl.width(size(this.leftEl));
					left = this.leftEl.outerWidth(); 
					if(this.leftBorderEl.get(0)){
						this.leftBorderEl.css({top: top, left: left});
						left += this.leftBorderEl.width(); 
					} 
				}
				if(this.rightEl.get(0)){
					this.rightEl.css({top: top, right:right});
					this.rightEl.width(size(this.rightEl));
					right = this.rightEl.outerWidth(); 
					if(this.rightBorderEl.get(0)){
						this.rightBorderEl.css({top: top,right: right});
						right += this.rightBorderEl.width();
					} 
				}
				if(this.bottomEl.get(0)){
					this.bottomEl.height(size(this.bottomEl, true));
					this.bottomEl.width(w - bp(this.bottomEl));
					bottom = this.bottomEl.outerHeight(); 
					if(this.bottomBorderEl.get(0)){
						this.bottomBorderEl.css({left:0, bottom: bottom});
						bottom += this.bottomBorderEl.height();  
					} 
				}
				this.centerEl.css({top: top, left: left});
				this.centerEl.width(w - left - right - bp(this.centerEl));
				h = h - top - bottom;
				this.leftEl.height(h - bp(this.leftEl, true));  
				this.centerEl.height(h - bp(this.centerEl, true));  
				this.rightEl.height(h - bp(this.rightEl, true));
				this.leftBorderEl.height(h);  
				this.rightBorderEl.height(h);
			}   	
		}));

function _xbl_JSClassDefine_processPertChart(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_processPertChart.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"_task" : null,
				"_p" : null,
				"_pi" : null,
				"_bizData" : null,
				"load" : function(){
					var task = justep.Context.getTask();
					if (task != null){
						this.loadByTask(task);
					}else{
						var process = justep.Context.getCurrentProcess();
						this.loadByData(process, null);
					}
				},
				"loadByTask" : function(task){
					if (task != this._task){
						this._task = task;
						this.__load(null, null, null, task);
					}
				},
				"loadByPI" : function(pi){
					if (pi != this._pi){
						this._pi = pi;
						this.__load(null, null, pi, null);
					}
				},
				"loadByData" : function(p, bizData){
					if ((p != this._p) || (bizData != this._bizData)){
						this._p = p;
						this._bizData = bizData;
						this.__load(bizData, p, null, null);
					}
				},
				"__load": function(bizData, p, pi, task) {
					var ext = this.domNode.getAttribute('ext');
					var processChartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task, ext);
					this.__loadByChartData(processChartData);
				},
				"__loadByChartData": function(chartData) {
					var interface = this.getElementByXblID("interface");
					var onClick = this.domNode.getAttribute('onPertItemClick');
					if (onClick && (onClick!='')){
						onClick = justep.Function.get(onClick);
					}
					__wfLoadBot(interface.getAttribute('chartControlID'), chartData, onClick);
				}
			}));

function _xbl_JSClassDefine_window(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_window.prototype = justep.Object.extend(new justep.XBLObject(), eval({}));

function _xbl_JSClassDefine_tabs(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_tabs.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				this.tabbar = new justep.JSTabbar(this.domNode.id);
				justep.Utils.proxable(this, this.tabbar, justep.JSTabbar);
			}
		}));

function _xbl_JSClassDefine_windowDialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_windowDialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
				var node = this.domNode;
				var dialog = new justep.WindowDialog(node.id,node.getAttribute('url'),node.getAttribute('title'),node.getAttribute('modal')=="true",node.getAttribute('status'),
				                  node.getAttribute('width'),node.getAttribute('height'),node.getAttribute('left'),node.getAttribute('top'),node.getAttribute("reload-on-open") =='true',
				                  node.getAttribute('onSend') , node.getAttribute('onReceive') ,node.getAttribute('onInit') ,node.getAttribute('onOpen') ,node.getAttribute('onClose'));
				dialog.setClosable(node.getAttribute('closable')!="false");
				dialog.setMinmaxable(node.getAttribute('minmaxable')!="false");
				dialog.setResizable(node.getAttribute('resizable')!="false");
				dialog.setNeighbor(node.getAttribute('neighbor'));
				dialog.setAutoSize(node.getAttribute('autosize')=="true");
				dialog.setShowTitle(node.getAttribute("show-title")!="false");
				dialog.setProcess(node.getAttribute("process"));
				dialog.setActivity(node.getAttribute("activity"));
				justep.Object.extend(this, dialog);
			} 
		}));

function _xbl_JSClassDefine_tableLayout(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_tableLayout.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function() {
			   	if(!this.domNode.id || this.domNode.id ==""){
					this.domNode.id = (new UUID()).valueOf();
			   	}
			   	var id = this.domNode.id; 
			   	this.el = $("#" + id);
			   	this.trs = $(">tbody tr", this.el);
			   	this.spacing = this._getSpace();
			   	/*为了兼容ie789, cellpadding都强设为0*/
			   	this.el.attr("cellpadding", "0");
			   	$(">tbody>tr>td", this.el).css("padding", "0");
			   	this.padding = this._getPadding();
		   		this.onWindowResize();
			},
			_getSpace : function(){
				/*默认2是为了解决ie下无法获得默认值的问题*/
				var spacing = this.el.attr("cellspacing") || (!justep.Browser.IE?this.el.css("border-spacing"):null) || "2px";
			   	spacing = spacing.split(" ");
			   	return parseInt(spacing[1] || spacing[0]) || 0;  
			},
			_getPadding : function(){
				/*默认是为了解决ie下无法获得默认值的问题，ie7默认是2px,ie89默认是1px*/
				var ret = parseInt(this.el.attr("cellpadding"));
				return ret || (ret===0 ? 0 : (justep.Browser.IE7 ? "2" : "1")); 
			},
			onWindowResize : function(){
				if(!justep.Browser.IE){
					$(">tbody >tr", this.el).each(function(index, tr){
						var td = $(tr.children[0]);
						tr = $(tr);
						var h = tr.attr('height') || tr.get(0).style["height"],
							hd = td.attr('height') || td.get(0).style["height"];
						if((h == null || h == '') && (hd == null || hd == '')){
							td.get(0).height = '100%';
							td.get(0).style["height"] = '100%';
						}
					});
					return;
				}	
				var el = this.el;
				if(el.parent().get(0).tagName.toLowerCase()=="td"){
					el = el.parent();
				}
				var h = el.height(),that = this,
					a = [], b = this.spacing*(this.trs.length + 1);
				this.trs.each(function(index, tr){
					var td = $(tr.children[0]);
					tr = $(tr);
					var h = tr.get(0).height || tr.get(0).style["height"],
						hd = td.get(0).height || td.get(0).style["height"];
					/*为了兼容已有应用*/ 
					if(h=='100%') {
						h=null;
						tr.get(0).height = null;
						tr.get(0).style["height"] = null;
					}
					if(hd=='100%') {
						hd=null;
						td.get(0).height = null;
						td.get(0).style["height"] = null;
					}
					if(!tr.attr("noheight") && ((h!=null && h!=''&& h!='auto') || (hd!=null && hd!=''&& hd!='auto'))){
						var mh = Math.max(
							parseInt(tr.get(0).height)||0,
							parseInt(tr.get(0).style["height"])||0,
							(parseInt(td.get(0).height) + that.padding*2)||0,
							(parseInt(td.get(0).style["height"]) + that.padding*2)||0
						);
						b += mh;
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));/*这是防止td被内容撑开*/
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}	 
					}else{
						tr.attr("noheight", true);/*noheight这个笔记是为了解决ie7执行多次resize的问题*/
						a.push(tr);
					}
				});
				if(a[0]){
					a[0].get(0).setAttribute("height", (h-b)+"px");
					if(a[0].get(0).children[0]){
						/*第一个td*/
						var mh = h-b-this.padding*2; 
						a[0].get(0).children[0].setAttribute("height", (h-b-this.padding*2)+"px");
						var td = $(a[0].get(0).children[0]);
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			},   	
			resize2 : function(){
				var h = this.el.parent().height(),that = this,
					w = this.el.parent().width(),
					a = [], b = this.spacing*(this.trs.length + 1);
				this.el.width(w);
				this.trs.each(function(index, tr){
					var td = $(tr.children[0]);
					tr = $(tr);
					var h = tr.get(0).style["height"] || tr.attr('height'),
						hd = td.get(0).style["height"] || tr.attr('height');
					/*为了兼容已有应用*/ 
					if(h=='100%') h=null;
					if(hd=='100%') hd=null;
					if(!tr.attr("noheight") && ((h!=null && h!=''&& h!='auto') || (hd!=null && hd!=''&& hd!='auto'))){
						b += tr.outerHeight();
						/*这是防止td被内容撑开*/
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(td.height()));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(td.height());
						}	 
					}else{
						tr.attr("noheight", true);/*noheight这个笔记是为了解决ie7执行多次resize的问题*/
						a.push(tr);
					}
				});
				if(a[0]){
					a[0].get(0).setAttribute("height", (h-b)+"px");
					/*第一个td*/
					var td;
					if(td = a[0].get(0).children[0]){
						var mh = h-b-this.padding*2; 
						td.setAttribute("height", mh+"px");
						td = $(td);
						if(!td.attr("wraped")){
							td.wrapInner($(document.createElement("div")).height(mh));
							td.attr("wraped", true);
						}else{
							$(">div", td).height(mh);
						}
					}	
				} 
			}   	
		}));

function _xbl_JSClassDefine_dateFilter(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_dateFilter.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				initXBL : function() {
					var labels = (new justep.Message(justep.Message.JUSTEP231074)).getMessage().split(",");
					this.alertLabel1 = (new justep.Message(justep.Message.JUSTEP231075)).getMessage();
					this.alertLabel2 = (new justep.Message(justep.Message.JUSTEP231076)).getMessage();
					this.partId = this.domNode.id + "_part";
					this.modelId = this.domNode.id + "_model";
					this.dataId = this.domNode.id + "_data";
					this.dialogId = this.domNode.id + "_dialog";
					var el = jQuery(this.domNode);
					var onChanged = el.attr("onChanged");
					if(onChanged)
						this.onChanged = justep.Function.get(onChanged);
					var onGetCondition = el.attr('onGetCondition');
					if(onGetCondition)	
						this.onGetCondition = justep.Function.get(onGetCondition);
					this.defaultValue = el.attr("default-select");
					var width = el.width()||100;
					var tabindex = el.attr("tabindex");
					var disable = el.attr("disabled");
					this.autoRefresh = el.attr('auto-refresh') == "true";
					this.filterDateMode = el.attr('filter-date-mode');
					this.filterDataID = el.attr('filter-data');
					if(this.filterDataID)
						this.filterData = justep.xbl(this.filterDataID);
					this.dateRelation1 = el.attr('filter-date-relation1');
					this.dateRelation2 = el.attr('filter-date-relation2');
					this.dropdownHeight = el.attr("dropdown-height") || "225";
					this._disabled = disable = disable ? ((''+disable)=="true"): false; 
					window.dhx_globalImgPath=justep.Request.convertURL("/form/dhtmlx/dhtmlxCombo/imgs/", true);
			    	this.combo = new dhtmlXCombo(this.domNode.id, "", width, "", tabindex);
			    	this.combo.addOption([["0", labels[0]], ["1", labels[1]], ["2", labels[2]], ["3", labels[3]], ["4", labels[4]], ["5", labels[5]], ["6", labels[6]], ["7", labels[7]], ["8", labels[8]], ["9", labels[9]]]);
			    	if(this.defaultValue != undefined) this.combo.setComboValue(this.defaultValue);
			    	this.jelement = jQuery(this.combo.DOMelem); 
			    	this.combo.readonly(true);
			    	this.setDisabled(disable);
			    	if(this.dropdownHeight){
			    		if(this.dropdownHeight.indexOf("px") == -1 ) this.dropdownHeight = this.dropdownHeight + "px";
			    		jQuery(this.combo.DOMlist).height(this.dropdownHeight);
			    		if (this.combo.DOMlistF) 
			    			jQuery(this.combo.DOMlistF).height(this.dropdownHeight);
			    	}	

		    		var that = this;
		    		var callback = function(){
		    			if(that.getCurrentSelect() == 9){
		    				that.openDialog();
		    			}else{
			    			var event = {source: that};
			    			that.setFilter();
			    			if(that.onChanged)
			    				that.onChanged.call(that, event);
		    			}	
		    		};
		    		this.combo.attachEvent("onChange",callback);
				},
				setDisabled : function(disabled){
					this.combo.disable(disabled);
					if(disabled) this.jelement.addClass("xforms-readonly");
					else this.jelement.removeClass("xforms-readonly");
					this._disabled = disabled;
				},
				getDisabled : function(){
					return this._disabled;
				},
				setReadonly : function(readonly){
					this.combo.readonly(true);
					this._readOnly;
				},
				getReadonly : function(){
					return this._readOnly;
				},
				setTabIndex : function(tabIndex){
					this._tabIndex = tabIndex;
				},
				getTabIndex : function(){
					return this._tabIndex;
				},
				setAccessKey : function(key){
					this._accessKey = key;
				},
				getAccessKey : function(){
					return this._accessKey;
				},
				setAutoRefresh : function(autoRefresh){
					this.autoRefresh = autoRefresh;
				},
				clearFilter : function(){
					this.filterData.setFilter(this.getFilterName(),"");
					if(this.defaultValue != undefined) 
						this.combo.setComboValue(this.defaultValue);
					else
						this.combo.setComboValue("0");
				},			
				setFilter : function(){
					if(!this.filterData || !this.dateRelation1) return;
					var condition = this.getCondition();
					var old = this.filterData.getFilter(this.getFilterName());
					if (condition != old) {
						this.filterData.setFilter(this.getFilterName(), condition);
						if (this.autoRefresh)
							this.filterData.refreshData();
					}			
				},
				getCondition : function(){
					var r = this.getDateRange();
					var condition;
					if (this.filterDateMode == "single"){
						var relationAlias = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,this.dateRelation1);
						condition = justep.Components.FilterUtils.getDateFilter(relationAlias, r.beginDate, r.endDate);
					}else{
						var r1 = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,this.dateRelation1);
						var r2 = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,this.dateRelation2);
						condition = justep.Components.FilterUtils.getDateRangeFilter(r1, r2, r.beginDate, r.endDate);					
					}
					if (this.onGetCondition) {
						var eventData = {
							"filterData" : this.filterData,
							"filterMode" : this.filterDateMode,
							"dateRelation1" : this.dateRelation1,
							"dateRelation2" : this.dateRelation2,
							"currentSelect" : this.getCurrentSelect(),
							"defaultSelect" : this.defaultValue,
							"customBeginDate" : r.beginDate,
							"customEndDate" : r.endDate,
							"defaultCondition" : condition
						};
						var ret = this.onGetCondition(eventData);
						if (ret)	condition = ret;
					}
					return condition;		
				},
				getFilterName : function(){
					return "_" + this.domNode.id + "_filter";
				},
				getDateFilter : function(relation){
					if(!relation) return '';
					var range = this.getDateRange();
					var r = justep.Components.FilterUtils.getRelationAlias(this.filterDataID,relation);
					return justep.Components.FilterUtils.getDateFilter(r, range.beginDate, range.endDate);
				},
				getBeginDatetime : function(){
					return this.getDateRange().beginDate;                   
				},
				getEndDatetime : function(){
					return this.getDateRange().endDate;
				},
				getCurrentSelect : function(){
					return this.combo.getSelectedValue();
				},
				getValue : function(){
					return this.getCurrentSelect();
				},
				getInnerDialog : function(){
					this._loadPart();
					return this.dialog;				
				},
				getInnerSelect : function(){
					return this.combo;
				},
				getDateRange : function() {
					var select = this.combo.getSelectedValue();
					var result = {'beginDate': null, 'endDate': null};
					if(typeof(select) == "string" && select) select = parseInt(select);
					if(typeof(select) != "number") return result;
					var today = justep.DateFilter._getToday();
					switch(select){
						case 0: break;
						case 1:{
							result.beginDate = today;
							result.endDate = result.beginDate;
							break;
						}
						case 2:{
							result.beginDate = justep.Date.increase(today, -1, "d");
							result.endDate = result.beginDate;
							break;
						}
						case 3:{
							result.beginDate = justep.Date.increase(today, -today.getDay(), "d");
							result.endDate = justep.Date.increase(result.beginDate, 6, "d");
							break;
						}
						case 4:{
							result.beginDate = justep.Date.increase(today, -today.getDay()-7, "d");
							result.endDate = justep.Date.increase(result.beginDate, 6, "d");
							break;
						}
						case 5:{
							result.beginDate = new Date(today.getFullYear(), today.getMonth(), 1);
							result.endDate = justep.Date.increase(new Date(today.getFullYear(), today.getMonth()+1, 1), -1, "d");
							break;
						}
						case 6:{
							result.beginDate = new Date(today.getFullYear(), today.getMonth()-1, 1);
							result.endDate = justep.Date.increase(new Date(today.getFullYear(), today.getMonth(), 1), -1, "d");
							break;
						}
						case 7:{
							result.beginDate = new Date(today.getFullYear(), 0, 1);
							result.endDate = justep.Date.increase(new Date(today.getFullYear()+1, 0, 1), -1, "d");
							break;
						}
						case 8:{
							result.beginDate = new Date(today.getFullYear()-1, 0, 1);
							result.endDate = justep.Date.increase(new Date(today.getFullYear(), 0, 1), -1, "d");
							break;
						}
						case 9:{
							customBeginDate = this.getCustomBeginDate();  
							customEndDate = this.getCustomEndDate();
							if (customBeginDate) 
								result.beginDate = this._str2date(customBeginDate);
							if (customEndDate) 
								result.endDate = this._str2date(customEndDate);
							break;
						}
					}
					return result;	
				},
				getCustomBeginDate : function(){
					return this.data.getValue("beginDate", 1);
				},
				getCustomEndDate : function(){
					return this.data.getValue("endDate", 1);
				},
				openDialog : function(){
					this._loadPart();
					this.dialog.open();				
				},
				_loadPart : function(){
					if(!this._hasLoaded){
						xforms.load_part(this.partId);
						this.model = justep.xbl(this.modelId);
						this.data = justep.xbl(this.dataId);
						this.dialog = justep.xbl(this.dialogId);
						this._hasLoaded = true;
						this.dialog.attachEvent("onOpen", function(event) {
							this._doDialogOpen(event);
						}, this);
						this.dialog.attachEvent("onClose", function(event) {
							this._doDialogClose(event);
						}, this);
						this._lastCustomBeginDate = null;
						this._lastCustomEndDate = null;
					}
				},
				_doDialogOpen : function(){
					this._isDialogOK = false;
					if (this.getCustomBeginDate() == "" && this.getCustomEndDate() == "") {
						var today = justep.Date.toString(this._getToday(), "YYYY-MM-DD");
						this.data.setValue("beginDate", today, 1);
						this.data.setValue("endDate", today, 1);
					}
				},
				_getToday : function() {
					return this._str2date(justep.System.datetimeString());
				},
				_doDialogClose : function(){
					xforms.blur();
					if (this._isDialogOK) {
						this._lastCustomBeginDate = this.getCustomBeginDate();
						this._lastCustomEndDate = this.getCustomEndDate();
						this.setFilter();
						if(this.onChanged) this.onChanged({'source':this});
					} else {
						this.data.setValue("beginDate", this._lastCustomBeginDate, 1);
						this.data.setValue("endDate", this._lastCustomEndDate, 1);
					}
				},
				getCurrentLabel : function(){
					return this.combo.getComboText();
				},
				_str2date : function(d) {
					return new Date(parseInt(d.substr(0, 4), 10), parseInt(d.substr(5, 2), 10) - 1, parseInt(d.substr(8, 2), 10));
				},
				_doDialogCheck : function(){
					if (this.getCustomBeginDate() == "" || this.getCustomEndDate() == "") {
						alert(this.alertLabel1);
						return false;
					}
					var beginDate = this._str2date(this.getCustomBeginDate());
					var endDate = this._str2date(this.getCustomEndDate());
					if (beginDate > endDate) {
						alert(this.alertLabel2);
						return false;
					}
					this._isDialogOK = true;
					return true;
				},
				dispose: function(){
					this.combo.destructor();
					this.combo = null;
					justep.XBLObject.prototype.dispose.call(this);
				}
			}));

function _xbl_JSClassDefine_processTrackChart(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_processTrackChart.prototype = justep.Object.extend(new justep.XBLObject(), eval({
				"_task" : null,
				"_p" : null,
				"_pi" : null,
				"_bizData" : null,
				"load" : function(){
					var task = justep.Context.getTask();
					if (task != null){
						this.loadByTask(task);
					}else{
						var process = justep.Context.getCurrentProcess();
						this.loadByData(process, null);
					}
				},
				"loadByTask" : function(task){
					if (task != this._task){
						this._task = task;
						this.__load(null, null, null, task);
					}
				},
				"loadByPI" : function(pi){
					if (pi != this._pi){
						this._pi = pi;
						this.__load(null, null, pi, null);
					}
				},
				"loadByData" : function(p, bizData){
					if ((p != this._p) || (bizData != this._bizData)){
						this._p = p;
						this._bizData = bizData;
						this.__load(bizData, p, null, null);
					}
				},
				"__load": function(bizData, p, pi, task) {
					var ext = this.domNode.getAttribute('ext');
					var processChartData = createActionStringAndExecuteActionGetFlowTrack(bizData, p, pi, task, ext);
					this.__loadByChartData(processChartData);
				},
				"__loadByChartData": function(chartData) {
					var interface = this.getElementByXblID("interface");
					var onClick = this.domNode.getAttribute('onTrackItemClick');
					if (onClick && (onClick!='')){
						onClick = justep.Function.get(onClick);
					}
					__wfLoadTrack(interface.getAttribute('chartControlID'), chartData, onClick);
				},
				"getSelectedActivities" : function(){
					var ret = [];
					var interface = this.getElementByXblID("interface");
					var canvas = JustepFlowTrack[interface.getAttribute('chartControlID')];
					var selections = canvas.selections;
					for(var id in selections){
						if((selections[id].type!='Connection')&&(typeof selections[id].type!='undefined')){
							var activity = canvas.modelData.processMainData[id];
							ret.push(activity);
						}
					}
					return ret;
				},
				"getTrackCanvas" : function(){
					var ret = [];
					var interface = this.getElementByXblID("interface");
					var canvas = JustepFlowTrack[interface.getAttribute('chartControlID')];
					return canvas;
				}
			}));

function _xbl_JSClassDefine_toolbars(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_toolbars.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL" : function(){
				this.initXFormEvent();	
			},
			"initXFormEvent" : function(){
				var id = this.domNode.id;
				this.xformInfo = {};
				var that = this;
				var attr = "readonly";
				var cb = function(){
					var modelId = $(this).attr("model");
					if (!modelId) return;
					that.xformInfo[modelId] = that.xformInfo[modelId] || [];
					var info = {};
					info["id"] = this.id;
					info["dataId"] = $(this).attr("data");
					info[attr] = $(this).attr(attr);
					that.xformInfo[modelId].push(info);
				}; 
				jQuery("[readonly]", this.domNode).each(cb);
				var attr = "relevant";
				jQuery("[relevant]", this.domNode).each(cb);
				for(var model in this.xformInfo){
					var that = this; 
					new xforms.Listener(justep(model), "xforms-refresh", null, function(){that.modelRefreshcb();});
					/*
					todo: 相似组件以后可以集中统一触发一次 
					xforms.XMLEvents.dispatch(justep.xbl(model), "xforms-refresh");
					*/
					this.modelRefreshcb();
				} 
			},
			"modelRefreshcb" : function(){
				for(var model in this.xformInfo){
					var infos = this.xformInfo[model];
					for(var i in infos){
						var info = infos[i];
						if (info.readonly){
							var xpath = xforms.XPath.get(info.readonly);
							var img = jQuery("#" + info.id + ".xforms-trigger-img,"+"#" + info.id + " .xforms-trigger-img");
							var a = jQuery("#" + info.id);
							if(0!=img.size()){
								if (!info.enImg){
									info.enImg = img.attr("src");
									if(info.enImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)
										info.enImg = justep.Request.convertURL(info.enImg, true);
								}
								if (!info.disImg){
									info.disImg = img.attr("dis-src");
									if(info.disImg.indexOf(justep.Request.BASE_URL.substr(0, 7)) == -1)
										info.disImg = justep.Request.convertURL(info.disImg, true);
								}
							}
							if (!info.click){
								info.click = a.attr("onclick") || function(){};
								a.attr("onclick", null);
							}
							if(xpath.evaluate({})){								img.attr("src", info.disImg);
								a.unbind("click");
								a.addClass("xforms-readonly");
							}else{
								img.attr("src", info.enImg);
								a.unbind("click");
								a.bind("click", function(){if(xforms)xforms.blur(true);});
								a.bind("click", info.click);
								a.removeClass("xforms-readonly");
							}
						}else if(info.relevant){
							var xpath = xforms.XPath.get(info.relevant);
							var el = jQuery("#" + info.id);
							if(xpath.evaluate({})){
								el.parent('td').show();
							}else{
								el.parent('td').hide();
							}
						}
					}
				}
			},
			"__dragObject" : null,
			"mousedownAction" : function(event) {
				event = event || window.event;
				var group = this.__findToolGroup(event.srcElement||event.target);
				if (!group) { 
					return;
				}
				var posX = parseInt(window.event.clientX) + parseInt(document.body.scrollLeft);
				var posY = parseInt(window.event.clientY) + parseInt(document.body.scrollTop);
				this.__dragObject = new Object();
				this.__dragObject.obj = group;
				this.__dragObject.manager = group.parentNode;
				group.style.position = "absolute";
				group.style.border = "1px ridge";
				group.style.top = posY - 0 + 4;
				group.style.left = posX - 0 + 4;
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);
				xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
				xforms.Event.attach(document, "selectstart", this.selectstartAction, null, this);
			},
			"mousemoveAction" : function() {
				var posX = parseInt(window.event.clientX) + parseInt(document.body.scrollLeft);
				var posY = parseInt(window.event.clientY) + parseInt(document.body.scrollTop);
				if (this.__dragObject) {
					this.__dragObject.obj.style.top = posY - 0 + 4;
					this.__dragObject.obj.style.left = posX - 0 + 4;
				}
			},
			"findParentTDOrTH" : function(node) {
				var cur = node;
				while (cur) {
					var tmp = cur.localName || cur.tagName;
					if (tmp.toLowerCase()=="body")
						return null;
					else if (tmp.toLowerCase()=="td" || tmp.toLowerCase()=="th") {
						return cur;
					}
					cur = cur.parentNode;
				}
				return cur;

			},
			"mouseupAction" : function(event) {
				if (this.__dragObject) {
					event = event || window.event;
					var target = event.srcElement || event.target;
					var td = this.findParentTDOrTH(target);
					var group = this.__findToolGroup(target);
					if (group && group.parentNode==this.__dragObject.manager) {
						if (td && td.name=="group_anchor") {
							var manager = this.__dragObject.obj.parentNode;
							manager.removeChild(this.__dragObject.obj);
							manager.insertBefore(this.__dragObject.obj, group);
						}
						else {
							var manager = this.__dragObject.obj.parentNode;
							manager.removeChild(this.__dragObject.obj);
							manager.appendChild(this.__dragObject.obj);
						}
					}
					this.__dragObject.obj.style.position = "static";
					this.__dragObject.obj.style.border = "none";
				}
				xforms.Event.attach(document, "mousemove", this.mousemoveAction, null, this);
				xforms.Event.attach(document, "mouseup", this.mouseupAction, null, this);
				xforms.Event.attach(document, "selectstart", this.selectstartAction, null, this);
				this.__dragObject = null;
			},
			"selectstartAction" : function() {
				return false;
			},
			"__findToolGroup" : function(node) {
				var cur = node;
				while (cur) {
					if (cur.tagName=="BODY") {
						return null;
					}
					else if (cur.tagName=="DIV" && cur.name=="toolbargroup") {
						return cur;
					}
					cur = cur.parentNode;
				}
				return null;
			}
		}));

function _xbl_JSClassDefine_bizDataFilterDialog(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_bizDataFilterDialog.prototype = justep.Object.extend(new justep.XBLObject(), eval({
			"initXBL": function() {
				var dialogEl = this.getElementByXblID("filter-dialog");
				this.dialogId = $(dialogEl).firstElement().id;
				var frameEl = this.getElementByXblID("filter-dialog-iframe");
				this.iframeId = frameEl.id;
			},
			"show": function(data, callBack) {
				var filterData = data;
				if (typeof(filterData) == "string") {
					filterData = justep.xbl(filterData);
				}
				if (filterData) {
					if (typeof(filterData.advanceFilter) != "undefined") {
						var dialog = xforms(this.dialogId);
						if(dialog) {
							var frameEl = justep(this.iframeId);
							if (frameEl) {
								frameEl.dialogId = this.dialogId;
								frameEl.filterData = filterData;
								frameEl.callBack = callBack;
								dialog.open();
								return true;
							}
						}
					}
				}
				return false;
			}
		}));

function _xbl_JSClassDefine_pageNavigator(obj) {
 	if (obj) {
 		this.domNode = obj;
  	obj.xblObject = this;
 	}
}
_xbl_JSClassDefine_pageNavigator.prototype = justep.Object.extend(new justep.XBLObject(), eval({ 
			"initXBL" : function() {
			    this.__attribute_node = this.getElementByXblID('attribute');
			    this.__limit = 20;
			    this.__offset = 1;
			    this.__count = 0;
			    this.__pageCount = 5;
			    this.__navigatorContent = '';
			    this.__navigatorPageConten = '';
			    this.__firstButton = '';
			    this.__prevButton = '';
			    this.__nextButton = '';
			    this.__lastButton = '';
			    this.__extendArea = '';
				justep.Object.extend(this, new justep.PageNavigator(this));
				this.attachStoreEvent();
				this.refresh();
			},
			"__getAttributeValue" : function(name){
				return this.__attribute_node?this.__attribute_node.getAttribute(name):'';
			}
		}));

	var ids=[{id:'flow_monitor_app', name:'/UI/system/components/window.xbl.xml#window', children:[{id:'specFlowoutDialog', name:'/UI/system/components/windowDialog.xbl.xml#windowDialog'},{id:'customFilterDialog', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_1613218663', name:'xforms:dialog'}]},{id:'taskDataProcess', name:'/UI/system/components/process.xbl.xml#process', children:[{id:'taskDataProcess_processControlDialog', name:'xforms:dialog'},{id:'taskDataProcess_processChartDialogID', name:'xforms:dialog'},{id:'taskDataProcess_processConfirmDialog', name:'xforms:dialog', children:[{id:'a9c9a09086054d42b5635a31489b4bc2', name:'xforms:trigger', children:[{id:'5133ff7f18bd4f9fa8c514ccd0e51dd1', name:'xforms:label'}]},{id:'a1b89cbdd9bf4e7491b24e7d46498843', name:'xforms:trigger', children:[{id:'d64b618114a24f0788d00eefb1621b80', name:'xforms:label'}]}]},{id:'taskDataProcess_customizedDialogID', name:'/UI/system/components/dialog.xbl.xml#dialog'}]},{id:'modifyExecutorDialog', name:'xforms:dialog'},{id:'modifyTitleDialog', name:'xforms:dialog', children:[{id:'09ddacaa8e034c70ab63605344498bb5', name:'xforms:input'},{id:'8dbd0aefb6f14c1ab0946071433e389a', name:'xforms:trigger', children:[{id:'6143569adf3c474aa4f13586d7e59348', name:'xforms:label'}]},{id:'1e1f8aa2b61e44c28d7ac15bb91b9015', name:'xforms:trigger', children:[{id:'be99b04d76d6485d857e55b9fc71154d', name:'xforms:label'}]}]},{id:'tablist', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'65436cc2010947928ce916b93df8b22f', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'flowData_ToolBar', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'b9b7b59dfadb4aaead61bfc9ebf34173', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'82d2e2bf1cc04a23a9dbb27ec1270985', name:'xforms:trigger', children:[{id:'0b7fbc14dfa14ba9b9ae72b0f32ddeb5', name:'xforms:label'}]}]},{id:'date-selector', name:'/UI/system/components/dateFilter.xbl.xml#dateFilter', children:[{id:'date-selector_part', name:'xforms:group', children:[{id:'date-selector_dialog', name:'xforms:dialog', children:[{id:'8991798ba7c74b67b049841890438460', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'15fb3df324cd4188aaa5fd3bd89e757f', name:'xforms:input'},{id:'fb6f1da992484051bb30db2751f00e67', name:'xforms:input'},{id:'8ac13ae2909042ae8520e7ba5a1be98a', name:'xforms:trigger', children:[{id:'dc5cbaf0b8fb49b59c253149617f4805', name:'xforms:label'}]},{id:'47be1624400d49ca894392b9c066f180', name:'xforms:trigger', children:[{id:'65b19226011741218b0f76afb5116e0d', name:'xforms:label'}]}]}]}]}]},{id:'status-ctl-id', name:'/UI/system/components/select.xbl.xml#simpleSelect'},{id:'7a94cbfbb9f643138ed6e8bc9e26f032', name:'xforms:input'},{id:'seach-trigger', name:'xforms:trigger', children:[{id:'0b7324d03c144f5bbb26abc0543485e7', name:'xforms:label'}]},{id:'flowData_Grid', name:'xforms:grid'}]},{id:'056e192ce84448e19fce2ae264b5880b', name:'/UI/system/components/tableLayout.xbl.xml#tableLayout', children:[{id:'taskData_ToolBar', name:'/UI/system/components/toolbars.xbl.xml#toolbars', children:[{id:'ecee1c41f9404b849b3562053995a6ac', name:'/UI/system/components/pageNavigator.xbl.xml#pageNavigator'},{id:'trigger1', name:'xforms:trigger', children:[{id:'xuiLabel1', name:'xforms:label'}]},{id:'trigger2', name:'xforms:trigger', children:[{id:'xuiLabel2', name:'xforms:label'}]},{id:'076bfb43f71348aba22a579497c8258d', name:'xforms:trigger', children:[{id:'30c2d90515ad4626aab0792138dfa0d9', name:'xforms:label'}]},{id:'e4963ca6aa484eb7b1e9ea5c2e566142', name:'xforms:trigger', children:[{id:'c1e5efa598434eaa8a7f829fb83d75d0', name:'xforms:label'}]},{id:'80d7c3811df5420e80f7801402d4da5b', name:'xforms:trigger', children:[{id:'53a442a7f8df4cf2a9e9ceb86728bc25', name:'xforms:label'}]},{id:'b211209dcdbe499188f35fddde58ece9', name:'xforms:trigger', children:[{id:'b05e9cf854964da782a8a91493dc8bce', name:'xforms:label'}]},{id:'d5792afbf98a487e8cb781c2af567426', name:'xforms:trigger', children:[{id:'751fdbc9bb2d4a2ebe2310213da13539', name:'xforms:label'}]}]},{id:'taskData_Grid', name:'xforms:grid'}]},{id:'GLOBAL_ID_924397310', name:'/UI/system/components/tabs.xbl.xml#tabs', children:[{id:'track', name:'/UI/system/components/processChart.xbl.xml#processTrackChart', children:[{id:'bl2', name:'/UI/system/components/borderLayout.xbl.xml#borderLayout'}]},{id:'pert', name:'/UI/system/components/processChart.xbl.xml#processPertChart'}]}]},{id:'filter-dialog-7d99a12c-5b9b-4fd0-9524-5c6aeb886c8b', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N1537210312', name:'xforms:dialog'}]},{id:'filter-dialog-85ec4373-028e-4283-b267-050ce455b17a', name:'/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog', children:[{id:'GLOBAL_ID_N128587948', name:'xforms:dialog'}]}]}]; 
justep.XBLObject.initXBL(ids);
}; 
xforms.Core.fileName='form.js';	
xf._a(null,'a9c9a09086054d42b5635a31489b4bc2');xf._a('a9c9a09086054d42b5635a31489b4bc2','5133ff7f18bd4f9fa8c514ccd0e51dd1');xf._a(null,'a1b89cbdd9bf4e7491b24e7d46498843');xf._a('a1b89cbdd9bf4e7491b24e7d46498843','d64b618114a24f0788d00eefb1621b80');xf._a(null,'09ddacaa8e034c70ab63605344498bb5');xf._a(null,'8dbd0aefb6f14c1ab0946071433e389a');xf._a('8dbd0aefb6f14c1ab0946071433e389a','6143569adf3c474aa4f13586d7e59348');xf._a(null,'1e1f8aa2b61e44c28d7ac15bb91b9015');xf._a('1e1f8aa2b61e44c28d7ac15bb91b9015','be99b04d76d6485d857e55b9fc71154d');xf._a(null,'82d2e2bf1cc04a23a9dbb27ec1270985');xf._a('82d2e2bf1cc04a23a9dbb27ec1270985','0b7fbc14dfa14ba9b9ae72b0f32ddeb5');xf._a(null,'date-selector_part');xf._a('date-selector_part','15fb3df324cd4188aaa5fd3bd89e757f');xf._a('date-selector_part','fb6f1da992484051bb30db2751f00e67');xf._a('date-selector_part','8ac13ae2909042ae8520e7ba5a1be98a');xf._a('8ac13ae2909042ae8520e7ba5a1be98a','dc5cbaf0b8fb49b59c253149617f4805');xf._a('date-selector_part','47be1624400d49ca894392b9c066f180');xf._a('47be1624400d49ca894392b9c066f180','65b19226011741218b0f76afb5116e0d');xf._a(null,'7a94cbfbb9f643138ed6e8bc9e26f032');xf._a(null,'seach-trigger');xf._a('seach-trigger','0b7324d03c144f5bbb26abc0543485e7');xf._a(null,'flowData_Grid');xf._a(null,'trigger1');xf._a('trigger1','xuiLabel1');xf._a(null,'trigger2');xf._a('trigger2','xuiLabel2');xf._a(null,'076bfb43f71348aba22a579497c8258d');xf._a('076bfb43f71348aba22a579497c8258d','30c2d90515ad4626aab0792138dfa0d9');xf._a(null,'e4963ca6aa484eb7b1e9ea5c2e566142');xf._a('e4963ca6aa484eb7b1e9ea5c2e566142','c1e5efa598434eaa8a7f829fb83d75d0');xf._a(null,'80d7c3811df5420e80f7801402d4da5b');xf._a('80d7c3811df5420e80f7801402d4da5b','53a442a7f8df4cf2a9e9ceb86728bc25');xf._a(null,'b211209dcdbe499188f35fddde58ece9');xf._a('b211209dcdbe499188f35fddde58ece9','b05e9cf854964da782a8a91493dc8bce');xf._a(null,'d5792afbf98a487e8cb781c2af567426');xf._a('d5792afbf98a487e8cb781c2af567426','751fdbc9bb2d4a2ebe2310213da13539');xf._a(null,'taskData_Grid');function init() {	
var begin = new Date().getTime();	
xf._b("instance('flowData')/sDistributeTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sDistributeTime')))));	
xf._b("instance('flowData')/sCreateTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('flowData')/sLastModifyTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sLastModifyTime')))));	
xf._b("instance('flowData')/sLimitTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("instance('flowData')/sWarningTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xf._b("instance('flowData')/sExecuteTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sExecuteTime')))));	
xf._b("instance('flowData')/sExpectStartTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sExpectStartTime')))));	
xf._b("instance('flowData')/sExpectFinishTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sExpectFinishTime')))));	
xf._b("instance('flowData')/sActualStartTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sActualStartTime')))));	
xf._b("instance('flowData')/sActualFinishTime",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sActualFinishTime')))));	
xf._b("instance('flowData')/sSequence",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('flowData')/version",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('flowData')/sEDField21",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEDField21')))));	
xf._b("instance('flowData')/sEDField22",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEDField22')))));	
xf._b("instance('flowData')/sEDField23",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEDField23')))));	
xf._b("instance('flowData')/sEDField24",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEDField24')))));	
xf._b("instance('flowData')/sEIField41",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEIField41')))));	
xf._b("instance('flowData')/sEIField42",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEIField42')))));	
xf._b("instance('flowData')/sEIField43",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEIField43')))));	
xf._b("instance('flowData')/sEIField44",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sEIField44')))));	
xf._b("instance('flowData')/sENField11",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sENField11')))));	
xf._b("instance('flowData')/sENField12",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sENField12')))));	
xf._b("instance('flowData')/sENField13",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sENField13')))));	
xf._b("instance('flowData')/sENField14",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sENField14')))));	
xf._b("instance('flowData')/sWithdraw",xf._g(xf._f('instance',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sWithdraw')))));	
xf._b("instance('taskData')/sDistributeTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sDistributeTime')))));	
xf._b("instance('taskData')/sCreateTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sCreateTime')))));	
xf._b("instance('taskData')/sLastModifyTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sLastModifyTime')))));	
xf._b("instance('taskData')/sLimitTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sLimitTime')))));	
xf._b("instance('taskData')/sWarningTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sWarningTime')))));	
xf._b("instance('taskData')/sExecuteTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sExecuteTime')))));	
xf._b("instance('taskData')/sExpectStartTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sExpectStartTime')))));	
xf._b("instance('taskData')/sExpectFinishTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sExpectFinishTime')))));	
xf._b("instance('taskData')/sActualStartTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sActualStartTime')))));	
xf._b("instance('taskData')/sActualFinishTime",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sActualFinishTime')))));	
xf._b("instance('taskData')/sSequence",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sSequence')))));	
xf._b("instance('taskData')/version",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','version')))));	
xf._b("instance('taskData')/sEDField21",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEDField21')))));	
xf._b("instance('taskData')/sEDField22",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEDField22')))));	
xf._b("instance('taskData')/sEDField23",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEDField23')))));	
xf._b("instance('taskData')/sEDField24",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEDField24')))));	
xf._b("instance('taskData')/sEIField41",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEIField41')))));	
xf._b("instance('taskData')/sEIField42",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEIField42')))));	
xf._b("instance('taskData')/sEIField43",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEIField43')))));	
xf._b("instance('taskData')/sEIField44",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sEIField44')))));	
xf._b("instance('taskData')/sENField11",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sENField11')))));	
xf._b("instance('taskData')/sENField12",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sENField12')))));	
xf._b("instance('taskData')/sENField13",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sENField13')))));	
xf._b("instance('taskData')/sENField14",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sENField14')))));	
xf._b("instance('taskData')/sWithdraw",xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sWithdraw')))));	
xf._b("data('customData')/flow_awaken",xf._g(xf._f('data',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','flow_awaken')))));	
xf._b("-1>=index('flowData') or not(data('flowData')/sStatusID = 'tesPaused')",xf._l(xf._l(new xforms.UnaryMinusExpr(xf._i(1.0)), '>=',xf._f('index',xf._i("flowData"))), 'or',xf._f('not',xf._l(xf._g(xf._f('data',xf._i("flowData")),xf._h(false, xf._k("child",xf._j('','sStatusID')))), '=',xf._i("tesPaused")))));	
xf._b("data('customData')/recycle",xf._g(xf._f('data',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','recycle')))));	
xf._b("-1>=index('taskData') or (data('taskData')/sCatalogID != 'tsProcess') or (not((data('taskData')/sStatusID = 'tesReady' or data('taskData')/sStatusID = 'tesExecuting'))) or not(call('justep.Context.getCurrentPersonID') = data('taskData')/sCreatorPersonID) or (data('taskData')/sExecutorPersonID='')",xf._l(xf._l(new xforms.UnaryMinusExpr(xf._i(1.0)), '>=',xf._f('index',xf._i("taskData"))), 'or',xf._l(xf._l(xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sCatalogID')))), '!=',xf._i("tsProcess")), 'or',xf._l(xf._f('not',xf._l(xf._l(xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sStatusID')))), '=',xf._i("tesReady")), 'or',xf._l(xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sStatusID')))), '=',xf._i("tesExecuting")))), 'or',xf._l(xf._f('not',xf._l(xf._f('call',xf._i("justep.Context.getCurrentPersonID")), '=',xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sCreatorPersonID')))))), 'or',xf._l(xf._g(xf._f('data',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sExecutorPersonID')))), '=',xf._i("")))))));	
xf._b("data('customData')/spec_flow_out",xf._g(xf._f('data',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','spec_flow_out')))));	
xf._b("-1>=index('taskData') or not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting')) or (instance('taskData')/sExecutorPersonID='')",xf._l(xf._l(new xforms.UnaryMinusExpr(xf._i(1.0)), '>=',xf._f('index',xf._i("taskData"))), 'or',xf._l(xf._f('not',xf._l(xf._l(xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sStatusID')))), '=',xf._i("tesReady")), 'or',xf._l(xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sStatusID')))), '=',xf._i("tesExecuting")))), 'or',xf._l(xf._g(xf._f('instance',xf._i("taskData")),xf._h(false, xf._k("child",xf._j('','sExecutorPersonID')))), '=',xf._i("")))));	
xf._b("data('customData')/modify_flow_data",xf._g(xf._f('data',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','modify_flow_data')))));	
xf._b("instance('customData')/title",xf._g(xf._f('instance',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','title')))));	
xf._b("instance('customData')/flow_awaken",xf._g(xf._f('instance',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','flow_awaken')))));	
xf._b("instance('date-selector_data')/beginDate",xf._g(xf._f('instance',xf._i("date-selector_data")),xf._h(false, xf._k("child",xf._j('','beginDate')))));	
xf._b("instance('date-selector_data')/endDate",xf._g(xf._f('instance',xf._i("date-selector_data")),xf._h(false, xf._k("child",xf._j('','endDate')))));	
xf._b("instance('customFilter')/like",xf._g(xf._f('instance',xf._i("customFilter")),xf._h(false, xf._k("child",xf._j('','like')))));	
xf._b("sName",xf._h(false, xf._k("child",xf._j('','sName'))));	
xf._b("sCreateTime",xf._h(false, xf._k("child",xf._j('','sCreateTime'))));	
xf._b("true",xf._h(false, xf._k("child",xf._j('','true'))));	
xf._b("sActualStartTime",xf._h(false, xf._k("child",xf._j('','sActualStartTime'))));	
xf._b("sActualFinishTime",xf._h(false, xf._k("child",xf._j('','sActualFinishTime'))));	
xf._b("sStatusName",xf._h(false, xf._k("child",xf._j('','sStatusName'))));	
xf._b("sData1",xf._h(false, xf._k("child",xf._j('','sData1'))));	
xf._b("space-column",xf._h(false, xf._k("child",xf._j('','space-column'))));	
xf._b("data('customData')/process",xf._g(xf._f('data',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','process')))));	
xf._b("instance('customData')/recycle",xf._g(xf._f('instance',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','recycle')))));	
xf._b("instance('customData')/spec_flow_out",xf._g(xf._f('instance',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','spec_flow_out')))));	
xf._b("instance('customData')/modify_flow_data",xf._g(xf._f('instance',xf._i("customData")),xf._h(false, xf._k("child",xf._j('','modify_flow_data')))));	
xf._b("sExecutorDeptName",xf._h(false, xf._k("child",xf._j('','sExecutorDeptName'))));	
xf._b("sExecutorPersonName",xf._h(false, xf._k("child",xf._j('','sExecutorPersonName'))));	
xf._b("sCreatorFID",xf._h(false, xf._k("child",xf._j('','sCreatorFID'))));	
xf._b("sCreatorPersonName",xf._h(false, xf._k("child",xf._j('','sCreatorPersonName'))));	
xf._b("sLimitTime",xf._h(false, xf._k("child",xf._j('','sLimitTime'))));	
xf._b("sFlowID",xf._h(false, xf._k("child",xf._j('','sFlowID'))));	
xforms.Schema.registerPrefix('xsd', 'http://www.w3.org/2001/XMLSchema');xforms.Schema.registerPrefix('dateTime', 'null');var xf_model_mainmodel = new xforms.XFModel('mainmodel',null);	
new xforms.XFInstance2('customFilter','mainmodel',null,'<rows><row><cell>executing</cell><cell></cell><cell></cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('customFilter','status,org,person,parent_org,like');	
new xforms.XFInstance2('customData','mainmodel',null,'<rows><row><cell></cell><cell></cell><cell></cell><cell></cell><cell>true</cell><cell>true</cell><cell>true</cell><cell></cell><cell></cell></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('customData','flow_awaken,recycle,spec_flow_out,modify_flow_data,need_refresh_taskData,need_refresh_taskDetail,need_refresh_processChart,title,process');	
xf._c('xf-bind-50','mainmodel',"data('customData')/flow_awaken",null,"-1>=index('flowData') or not(data('flowData')/sStatusID = 'tesPaused')",null,null,null,null,null);	
xf._c('xf-bind-51','mainmodel',"data('customData')/recycle",null,"-1>=index('taskData') or (data('taskData')/sCatalogID != 'tsProcess') or (not((data('taskData')/sStatusID = 'tesReady' or data('taskData')/sStatusID = 'tesExecuting'))) or not(call('justep.Context.getCurrentPersonID') = data('taskData')/sCreatorPersonID) or (data('taskData')/sExecutorPersonID='')",null,null,null,null,null);	
xf._c('xf-bind-52','mainmodel',"data('customData')/spec_flow_out",null,"-1>=index('taskData') or not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting')) or (instance('taskData')/sExecutorPersonID='')",null,null,null,null,null);	
xf._c('xf-bind-53','mainmodel',"data('customData')/modify_flow_data",null,"-1>=index('taskData') or not((instance('taskData')/sStatusID = 'tesReady' or instance('taskData')/sStatusID = 'tesExecuting')) or (instance('taskData')/sExecutorPersonID='')",null,null,null,null,null);	
var xf_action_xf_action_0=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.mainmodelLoad(event)}));xf._p(justep('mainmodel'),"onload",null,function(evt) { xforms.run(xf_action_xf_action_0,'mainmodel', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_1613218663',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N1472119256');if (frameEl) { if(frameEl.contentWindow.document.body){ frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>"; } }justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N1472119256", "");}));xf._p(justep('GLOBAL_ID_1613218663'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_1,'GLOBAL_ID_1613218663', evt,false)});	
var xf_model_xf_model_1 = new xforms.XFModel('xf-model-1',null);	
var xf_action_xf_action_2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){}));xf._p(justep('xf-model-1'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_2,'xf-model-1', evt,false)});	
new xforms.XFDialog('taskDataProcess_processControlDialog',"流转信息",'modal',true,false,true,true,false,"",'700','465',null,null,null,null);	
var xf_script_xf_script_3=xf._o(null,null,function(element, ctx, event){var processControlDialog = justep('taskDataProcess_processControlDialog').xformsObject; var isOk = processControlDialog._isOk; var processControl = processControlDialog._processControl; var task = processControlDialog._task; var callback = processControlDialog._callback; var options = processControlDialog._options; processControlDialog._isOk = false; processControlDialog._processControl = null; processControlDialog._task = null; processControlDialog._callback = null; processControlDialog._options = null; if (isOk){ var process = justep.xbl('taskDataProcess'); process[callback](task, processControl, options); } justep('taskDataProcess_processControlDialogIFrame').src="";});xf._p(justep('taskDataProcess_processControlDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_3,'taskDataProcess_processControlDialog', evt,false)});	
new xforms.XFDialog('taskDataProcess_processChartDialogID',"流程图",'modal',true,false,true,true,false,"",'700','445',null,null,null,'maximize');	
var xf_script_xf_script_4=xf._o(null,null,function(element, ctx, event){justep('taskDataProcess_processChartDialogIFrame').src="";});xf._p(justep('taskDataProcess_processChartDialogID'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_4,'taskDataProcess_processChartDialogID', evt,false)});	
var xf_script_xf_script_5=xf._o(null,null,function(element, ctx, event){var url = "/UI/system/service/process/processChart.w?process=" + justep.Context.getCurrentProcess() + "&activity=" + justep.Context.getCurrentActivity(); var task = justep.Context.getTask(); if (task != null){ url = url + "&task=" + task; } url = justep.Request.convertURL(url); justep('taskDataProcess_processChartDialogIFrame').src=url;});xf._p(justep('taskDataProcess_processChartDialogID'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_script_xf_script_5,'taskDataProcess_processChartDialogID', evt,false)});	
new xforms.XFDialog('taskDataProcess_processConfirmDialog',null,'modal',true,false,true,true,false,"",'250','90',null,null,null,null);	
var xf_script_xf_script_6=xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('taskDataProcess_processConfirmDialog').xformsObject; var isOk = processConfirmDialog._isOk; var processControl = processConfirmDialog._processControl; var task = processConfirmDialog._task; var callback = processConfirmDialog._callback; var options = processConfirmDialog._options; processConfirmDialog._isOk = false; processConfirmDialog._task = null; processConfirmDialog._processControl = null; processConfirmDialog._callback = null; processConfirmDialog._options = null; if (isOk && processControl.isOk()){ var process = justep.xbl('taskDataProcess'); process[callback](task, processControl, options); }});xf._p(justep('taskDataProcess_processConfirmDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_script_xf_script_6,'taskDataProcess_processConfirmDialog', evt,false)});	
var xf_trigger_a9c9a09086054d42b5635a31489b4bc2=new xforms.XFTrigger('a9c9a09086054d42b5635a31489b4bc2',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_3=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('taskDataProcess_processConfirmDialog').xformsObject; processConfirmDialog._isOk = true; xforms('taskDataProcess_processConfirmDialog').close();}));xf._p(justep('a9c9a09086054d42b5635a31489b4bc2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_3,'a9c9a09086054d42b5635a31489b4bc2', evt,false)});	
var xf_trigger_a1b89cbdd9bf4e7491b24e7d46498843=new xforms.XFTrigger('a1b89cbdd9bf4e7491b24e7d46498843',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_4=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var processConfirmDialog = justep('taskDataProcess_processConfirmDialog').xformsObject; processConfirmDialog._isOk = false; xforms('taskDataProcess_processConfirmDialog').close();}));xf._p(justep('a1b89cbdd9bf4e7491b24e7d46498843'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_4,'a1b89cbdd9bf4e7491b24e7d46498843', evt,false)});	
new xforms.XFDialog('modifyExecutorDialog',"修改执行者",'modal',true,false,true,true,false,null,'520px','450px',null,null,null,null);	
var xf_action_xf_action_5=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.modifyExecutorDialogOpened(event);}));xf._p(justep('modifyExecutorDialog'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_5,'modifyExecutorDialog', evt,false)});	
var xf_action_xf_action_6=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.modifyExecutorDialogClosed(event);}));xf._p(justep('modifyExecutorDialog'),"xforms-dialog-close",null,function(evt) { xforms.run(xf_action_xf_action_6,'modifyExecutorDialog', evt,false)});	
new xforms.XFDialog('modifyTitleDialog',"修改任务标题",'modal',true,false,true,true,false,null,'400px','111px',null,null,null,null);	
xf._d('09ddacaa8e034c70ab63605344498bb5','text',xf._q("instance('customData')/title"),null,null,null,null,false,false);	
var xf_trigger_8dbd0aefb6f14c1ab0946071433e389a=new xforms.XFTrigger('8dbd0aefb6f14c1ab0946071433e389a',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_7=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.modifyTitleDialogOkClick(event);}));xf._p(justep('8dbd0aefb6f14c1ab0946071433e389a'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_7,'8dbd0aefb6f14c1ab0946071433e389a', evt,false)});	
var xf_trigger_1e1f8aa2b61e44c28d7ac15bb91b9015=new xforms.XFTrigger('1e1f8aa2b61e44c28d7ac15bb91b9015',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_8=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.modifyTitleDialogCancelClick(event);}));xf._p(justep('1e1f8aa2b61e44c28d7ac15bb91b9015'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_8,'1e1f8aa2b61e44c28d7ac15bb91b9015', evt,false)});	
var xf_trigger_82d2e2bf1cc04a23a9dbb27ec1270985=new xforms.XFTrigger('82d2e2bf1cc04a23a9dbb27ec1270985',xf._q("instance('customData')/flow_awaken"),null,null,false,false,false,null,null,null);	
var xf_action_xf_action_9=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.awakenProcess(event);}));xf._p(justep('82d2e2bf1cc04a23a9dbb27ec1270985'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_9,'82d2e2bf1cc04a23a9dbb27ec1270985', evt,false)});	
var xf_model_date_selector_model = new xforms.XFModel('date-selector_model',null);	
var xf_action_xf_action_10=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){justep.DateFilter.setFilter("date-selector", justep.xbl(""), "single", "", "", "", "3", null, null, "", false);}));xf._p(justep('date-selector_model'),"xforms-model-construct",null,function(evt) { xforms.run(xf_action_xf_action_10,'date-selector_model', evt,false)});	
xf._d('7a94cbfbb9f643138ed6e8bc9e26f032','text',xf._q("instance('customFilter')/like"),null,null,null,null,false,false);	
var xf_action_xf_action_13=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.likeInputValueChanged(event);}));xf._p(justep('7a94cbfbb9f643138ed6e8bc9e26f032'),"xforms-value-changed",null,function(evt) { xforms.run(xf_action_xf_action_13,'7a94cbfbb9f643138ed6e8bc9e26f032', evt,false)});	
var xf_action_xf_action_14=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.refreshClick(event);}));xf._p(justep('7a94cbfbb9f643138ed6e8bc9e26f032'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_14,'7a94cbfbb9f643138ed6e8bc9e26f032', evt,false)});	
var xf_trigger_seach_trigger=new xforms.XFTrigger('seach-trigger',null,"/UI/SA/task/taskCenter/images/search.gif",null,false,false,false,null,null,null);	
var xf_action_xf_action_15=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.refreshClick(event);}));xf._p(justep('seach-trigger'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_15,'seach-trigger', evt,false)});	
new xforms.XFGrid({id:'flowData_Grid',instance:'flowData',systemColumnsPro:'sParent,sContent,sRemark,sFlowID,sSourceID,sFrontID,sCatalogID,sKindID,sResponsible,sExecuteMode2,sExecuteMode,sPreemptMode,sRemindMode,sTypeID,sTypeName,sImportanceID,sImportanceName,sEmergencyID,sEmergencyName,sCURL,sEURL,sDistributeTime,sLastModifyTime,sLimitTime,sWarningTime,sExecuteTime,sExpectStartTime,sExpectFinishTime,sCreatorFID,sCreatorFName,sExecutorFID,sExecutorFName,sCreatorPersonID,sCreatorPersonName,sCreatorPosID,sCreatorPosName,sCreatorDeptID,sCreatorDeptName,sCreatorOgnID,sCreatorOgnName,sExecutorPersonID,sExecutorPersonName,sExecutorPosID,sExecutorPosName,sExecutorDeptID,sExecutorDeptName,sExecutorOgnID,sExecutorOgnName,sExecutorNames,sCustomerID,sCustomerName,sProjectID,sProjectName,sPlanID,sPlanName,sData2,sData3,sData4,sVariable,sActive,sStatusID,sAIActive,sAIID,sAIStatusID,sAIStatusName,sSequence,sLock,sHints,sShortcut,sProcess,sActivity,sProcessName,sActivityName,version,sProcessTemplateID,sProcessTemplateItemSequence,sTempPermissionID,sESField01,sESField02,sESField03,sESField04,sESField05,sESField06,sESField07,sESField08,sEDField21,sEDField22,sEDField23,sEDField24,sETField31,sETField32,sETField33,sETField34,sEIField41,sEIField42,sEIField43,sEIField44,sEBField51,sEBField52,sEBField53,sEBField54,sENField11,sENField12,sENField13,sENField14,sSummary,sActivityNames,sCode,sWithdraw,sProcessTemplateID2,sActivityInTemplate',onInit:null,type:'grid',smartRender:null,delay:false,ids:'sName,sCreateTime,sActualStartTime,sActualFinishTime,sStatusName,sData1,space-column',headNames:'名称,创建时间,开始时间,结束时间,任务状态,单据号,&nbsp;',widths:'200,130,130,130,60,300,*',types:'ro,dateTime,dateTime,dateTime,ro,ro,ro',hiddenColumns:'',aligns:',,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:'mainActivity.flowData_GridAfterIndexChanged',contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:'gotoTaskDataTab',onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'sCreateTime','true');this.grid.bindColReadonly(null,'sActualStartTime','true');this.grid.bindColReadonly(null,'sActualFinishTime','true');}});	
var xf_action_xf_action_16=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.taskData_TabSelect()}));xf._p(justep('taskData_Tab'),"xforms-select",null,function(evt) { xforms.run(xf_action_xf_action_16,'taskData_Tab', evt,false)});	
var xf_trigger_trigger1=new xforms.XFTrigger('trigger1',xf._q("data('customData')/process"),"/UI/system/images/standardToolbar/standard/stop.gif","/UI/system/images/standardToolbar/standard/un_stop.gif",false,false,false,null,null,null);	
var xf_action_action1=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger1Click(event)}));xf._p(justep('trigger1'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action1,'trigger1', evt,false)});	
var xf_trigger_trigger2=new xforms.XFTrigger('trigger2',xf._q("data('customData')/process"),"/UI/system/images/standardToolbar/standard/pause.gif","/UI/system/images/standardToolbar/standard/un_pause.gif",false,false,false,null,null,null);	
var xf_action_action2=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger2Click(event)}));xf._p(justep('trigger2'),"DOMActivate",null,function(evt) { xforms.run(xf_action_action2,'trigger2', evt,false)});	
var xf_trigger_076bfb43f71348aba22a579497c8258d=new xforms.XFTrigger('076bfb43f71348aba22a579497c8258d',xf._q("instance('customData')/recycle"),"/UI/system/images/standardToolbar/standard/recycle_task.gif","/UI/system/images/standardToolbar/standard/un_recycle_task.gif",false,false,false,null,null,null);	
var xf_action_xf_action_19=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.recycleClick(event);}));xf._p(justep('076bfb43f71348aba22a579497c8258d'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_19,'076bfb43f71348aba22a579497c8258d', evt,false)});	
var xf_trigger_e4963ca6aa484eb7b1e9ea5c2e566142=new xforms.XFTrigger('e4963ca6aa484eb7b1e9ea5c2e566142',xf._q("instance('customData')/spec_flow_out"),null,null,false,false,false,null,null,null);	
var xf_action_xf_action_20=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.specflowClick(event);}));xf._p(justep('e4963ca6aa484eb7b1e9ea5c2e566142'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_20,'e4963ca6aa484eb7b1e9ea5c2e566142', evt,false)});	
var xf_trigger_80d7c3811df5420e80f7801402d4da5b=new xforms.XFTrigger('80d7c3811df5420e80f7801402d4da5b',xf._q("instance('customData')/modify_flow_data"),null,null,false,false,false,null,null,null);	
var xf_action_xf_action_21=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.modifyExecutorClick(event);}));xf._p(justep('80d7c3811df5420e80f7801402d4da5b'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_21,'80d7c3811df5420e80f7801402d4da5b', evt,false)});	
var xf_trigger_b211209dcdbe499188f35fddde58ece9=new xforms.XFTrigger('b211209dcdbe499188f35fddde58ece9',xf._q("instance('customData')/modify_flow_data"),null,null,false,false,false,null,null,null);	
var xf_action_xf_action_22=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.modifyCaptionClick(event);}));xf._p(justep('b211209dcdbe499188f35fddde58ece9'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_22,'b211209dcdbe499188f35fddde58ece9', evt,false)});	
var xf_trigger_d5792afbf98a487e8cb781c2af567426=new xforms.XFTrigger('d5792afbf98a487e8cb781c2af567426',xf._q("instance('customData')/modify_flow_data"),"/UI/system/images/standardToolbar/standard/customized.gif","/UI/system/images/standardToolbar/standard/un_customized.gif",false,false,false,null,null,null);	
var xf_action_xf_action_23=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.trigger3Click(event)}));xf._p(justep('d5792afbf98a487e8cb781c2af567426'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_23,'d5792afbf98a487e8cb781c2af567426', evt,false)});	
new xforms.XFGrid({id:'taskData_Grid',instance:'taskData',systemColumnsPro:'sParent,sContent,sRemark,sSourceID,sFrontID,sCatalogID,sKindID,sResponsible,sExecuteMode2,sExecuteMode,sPreemptMode,sRemindMode,sTypeID,sTypeName,sImportanceID,sImportanceName,sEmergencyID,sEmergencyName,sCURL,sEURL,sDistributeTime,sCreateTime,sLastModifyTime,sWarningTime,sExecuteTime,sExpectStartTime,sExpectFinishTime,sCreatorFName,sExecutorFID,sExecutorFName,sCreatorPersonID,sCreatorPosID,sCreatorPosName,sCreatorDeptID,sCreatorDeptName,sCreatorOgnID,sCreatorOgnName,sExecutorPersonID,sExecutorPosID,sExecutorPosName,sExecutorDeptID,sExecutorOgnID,sExecutorOgnName,sExecutorNames,sCustomerID,sCustomerName,sProjectID,sProjectName,sPlanID,sPlanName,sData1,sData2,sData3,sData4,sVariable,sActive,sStatusID,sAIActive,sAIID,sAIStatusID,sAIStatusName,sSequence,sLock,sHints,sShortcut,sProcess,sActivity,sProcessName,sActivityName,version,sProcessTemplateID,sProcessTemplateItemSequence,sTempPermissionID,sESField01,sESField02,sESField03,sESField04,sESField05,sESField06,sESField07,sESField08,sEDField21,sEDField22,sEDField23,sEDField24,sETField31,sETField32,sETField33,sETField34,sEIField41,sEIField42,sEIField43,sEIField44,sEBField51,sEBField52,sEBField53,sEBField54,sENField11,sENField12,sENField13,sENField14,sSummary,sActivityNames,sCode,sWithdraw,sProcessTemplateID2,sActivityInTemplate',onInit:null,type:'grid',smartRender:null,delay:false,ids:'sName,sExecutorDeptName,sExecutorPersonName,sCreatorFID,sCreatorPersonName,sActualStartTime,sLimitTime,sActualFinishTime,sStatusName,sFlowID,space-column',headNames:'名称,执行者部门,执行人,提交者FID,提交人,开始时间,限制时间,结束时间,任务状态,sFlowID,&nbsp;',widths:'200,200,200,200,60,130,130,130,60,*,*',types:'ro,ro,ro,ro,ro,dateTime,dateTime,dateTime,ro,ro,ro',hiddenColumns:'sFlowID',aligns:',,,,,,,,,,',serverSort:true,sorts:'na,na,na,na,na,na,na,na,na,na,na',fixColumnSize:null,nodeImgCallback:'',multiSelection:'',checkedRef:'',filters:'\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0,\u00A0',sysColumns:'',treeColumnReadonly:true,showTreeIndex:null,editMode:null,filterColumn:true,drag:null,beforeDragCallback:null,afterDragCallback:null,afterFillRowCallback:null,beforeIndexChangedCallback:null,afterIndexChangedCallback:'mainActivity.taskData_GridAfterIndexChanged',contextMenuId:null,rightClickSelected:'true',rightClickCallback:null,allowCheckCallback:null,rowHeight:null,hdrRowH:null,hdrFilterH:null,moveColumn:null,rowValueChangedCallback:null,groupColumn:true,adjustColumn:true,saveColumn:true,showHeaderMenu:'',hintCallback:null,cascade:null,hasChildrenCallback1:null,onRowCheck:null,onRowChecked:null,onRowCheckedAll:null,onRowExpand:null,onRowClick:null,onRowDblClick:null,onLastEditorPressEnter:null,initFun:function(){this.grid.bindColReadonly(null,'sActualStartTime','true');this.grid.bindColReadonly(null,'sLimitTime','true');this.grid.bindColReadonly(null,'sActualFinishTime','true');}});	
var xf_action_xf_action_24=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.flowTrack_TabSelect()}));xf._p(justep('flowTrack_Tab'),"xforms-select",null,function(evt) { xforms.run(xf_action_xf_action_24,'flowTrack_Tab', evt,false)});	
var xf_action_xf_action_25=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){mainActivity.taskData_Detail_TabSelect()}));xf._p(justep('taskData_Detail_Tab'),"xforms-select",null,function(evt) { xforms.run(xf_action_xf_action_25,'taskData_Detail_Tab', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N1537210312',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_26=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_1882778050');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_1882778050", "");}));xf._p(justep('GLOBAL_ID_N1537210312'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_26,'GLOBAL_ID_N1537210312', evt,false)});	
new xforms.XFDialog('GLOBAL_ID_N128587948',"查询对话框",'modal',true,false,true,true,false,null,'490','340',null,null,null,null);	
var xf_action_xf_action_27=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){var frameEl = justep('GLOBAL_ID_N409136597');									if (frameEl) {										if(frameEl.contentWindow.document.body){											frameEl.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center' style='font-size: 12px'>正在载入页面，请稍候......</td></tr></table>";										}										}justep.Request.callURL("/system/components/bizDataFilterDialog/bizDataFilterDialog.w", "GLOBAL_ID_N409136597", "");}));xf._p(justep('GLOBAL_ID_N128587948'),"xforms-dialog-open",null,function(evt) { xforms.run(xf_action_xf_action_27,'GLOBAL_ID_N128587948', evt,false)});	
xforms.DebugConsole.writeTime(begin, 'new js objects');	
begin = new Date().getTime();	
xforms.init();	
xforms.DebugConsole.writeTime(begin, 'xforms init');};	
var flowData_part_loaded = false;	
function load_flowData_part(callback){if (flowData_part_loaded) return;flowData_part_loaded = true;	
new xforms.XFInstance2('flowData','mainmodel',null,null,null,null,null,null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-0','mainmodel',"instance('flowData')/sDistributeTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-1','mainmodel',"instance('flowData')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-2','mainmodel',"instance('flowData')/sLastModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-3','mainmodel',"instance('flowData')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-4','mainmodel',"instance('flowData')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-5','mainmodel',"instance('flowData')/sExecuteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-6','mainmodel',"instance('flowData')/sExpectStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-7','mainmodel',"instance('flowData')/sExpectFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-8','mainmodel',"instance('flowData')/sActualStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-9','mainmodel',"instance('flowData')/sActualFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-10','mainmodel',"instance('flowData')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-11','mainmodel',"instance('flowData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-12','mainmodel',"instance('flowData')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-13','mainmodel',"instance('flowData')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-14','mainmodel',"instance('flowData')/sEDField23","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-15','mainmodel',"instance('flowData')/sEDField24","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-16','mainmodel',"instance('flowData')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-17','mainmodel',"instance('flowData')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-18','mainmodel',"instance('flowData')/sEIField43","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-19','mainmodel',"instance('flowData')/sEIField44","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-20','mainmodel',"instance('flowData')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-21','mainmodel',"instance('flowData')/sENField12","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-22','mainmodel',"instance('flowData')/sENField13","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-23','mainmodel',"instance('flowData')/sENField14","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-24','mainmodel',"instance('flowData')/sWithdraw","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var flowData_part_init_loaded = false;	
function load_flowData_part_init(){if (flowData_part_init_loaded) return;flowData_part_init_loaded = true;	
if(xforms.ready)justep('mainmodel').xformsObject.construct_part();}	
var taskData_part_loaded = false;	
function load_taskData_part(callback){if (taskData_part_loaded) return;taskData_part_loaded = true;	
new xforms.XFInstance2('taskData','mainmodel',null,null,'false','sFlowID','flowData',null,null,null,null,null,'whereVersion');	
xf._c('xf-bind-25','mainmodel',"instance('taskData')/sDistributeTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-26','mainmodel',"instance('taskData')/sCreateTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-27','mainmodel',"instance('taskData')/sLastModifyTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-28','mainmodel',"instance('taskData')/sLimitTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-29','mainmodel',"instance('taskData')/sWarningTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-30','mainmodel',"instance('taskData')/sExecuteTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-31','mainmodel',"instance('taskData')/sExpectStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-32','mainmodel',"instance('taskData')/sExpectFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-33','mainmodel',"instance('taskData')/sActualStartTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-34','mainmodel',"instance('taskData')/sActualFinishTime","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-35','mainmodel',"instance('taskData')/sSequence","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-36','mainmodel',"instance('taskData')/version","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-37','mainmodel',"instance('taskData')/sEDField21","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-38','mainmodel',"instance('taskData')/sEDField22","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-39','mainmodel',"instance('taskData')/sEDField23","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-40','mainmodel',"instance('taskData')/sEDField24","xsd:dateTime",null,null,null,null,null,null);	
xf._c('xf-bind-41','mainmodel',"instance('taskData')/sEIField41","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-42','mainmodel',"instance('taskData')/sEIField42","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-43','mainmodel',"instance('taskData')/sEIField43","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-44','mainmodel',"instance('taskData')/sEIField44","xsd:integer",null,null,null,null,null,null);	
xf._c('xf-bind-45','mainmodel',"instance('taskData')/sENField11","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-46','mainmodel',"instance('taskData')/sENField12","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-47','mainmodel',"instance('taskData')/sENField13","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-48','mainmodel',"instance('taskData')/sENField14","xsd:float",null,null,null,null,null,null);	
xf._c('xf-bind-49','mainmodel',"instance('taskData')/sWithdraw","xsd:integer",null,null,null,null,null,null);	
if(callback)callback();}	
var taskData_part_init_loaded = false;	
function load_taskData_part_init(){if (taskData_part_init_loaded) return;taskData_part_init_loaded = true;	
if(xforms.ready)justep('mainmodel').xformsObject.construct_part();}	
function load_date_selector_part(){if (justep("date-selector_part").getAttribute('loaded') && justep("date-selector_part").getAttribute('loaded') == 'true') return;justep("date-selector_part").setAttribute('loaded', 'true');	
if(typeof(load_date_selector_part_html) == 'function')load_date_selector_part_html();	
new xforms.XFGroup('date-selector_part',null);var xf_model_xf_model_3 = new xforms.XFModel('xf-model-3',null);	
xf._c('xf-bind-54','xf-model-3',"instance('date-selector_data')/beginDate","xsd:date",null,null,null,null,null,null);	
xf._c('xf-bind-55','xf-model-3',"instance('date-selector_data')/endDate","xsd:date",null,null,null,null,null,null);	
new xforms.XFInstance2('date-selector_data','xf-model-3',null,'<rows rows=""><row></row></rows>',null,null,null,null,null,null,null,null,null);new SimpleStore('date-selector_data','value,label,beginDate,endDate');	
new xforms.XFDialog('date-selector_dialog',"自定义",'model',true,false,true,false,false,null,'238','112',null,null,null,null);	
xf._d('15fb3df324cd4188aaa5fd3bd89e757f','text',xf._q("instance('date-selector_data')/beginDate"),null,null,null,null,false,false);	
xf._d('fb6f1da992484051bb30db2751f00e67','text',xf._q("instance('date-selector_data')/endDate"),null,null,null,null,false,false);	
var xf_trigger_8ac13ae2909042ae8520e7ba5a1be98a=new xforms.XFTrigger('8ac13ae2909042ae8520e7ba5a1be98a',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_11=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms.blur(true); if(justep.xbl('date-selector')._doDialogCheck()) xforms('date-selector_dialog').close();}));xf._p(justep('8ac13ae2909042ae8520e7ba5a1be98a'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_11,'8ac13ae2909042ae8520e7ba5a1be98a', evt,false)});	
var xf_trigger_47be1624400d49ca894392b9c066f180=new xforms.XFTrigger('47be1624400d49ca894392b9c066f180',null,null,null,false,false,false,null,null,null);	
var xf_action_xf_action_12=xf._n(null,null,null,null,false).add(xf._o(null,null,function(element, ctx, event){xforms('date-selector_dialog').close();}));xf._p(justep('47be1624400d49ca894392b9c066f180'),"DOMActivate",null,function(evt) { xforms.run(xf_action_xf_action_12,'47be1624400d49ca894392b9c066f180', evt,false)});	
}	
function load_date_selector_part_xblinit(){if (justep("date-selector_part").getAttribute('xblloaded') && justep("date-selector_part").getAttribute('xblloaded') == 'true') return;justep("date-selector_part").setAttribute('xblloaded', 'true');	
if(xforms.ready)justep('xf-model-3').xformsObject.construct_part();	
xforms.refresh(justep("date-selector_part"));	
justep.XBLObject.loadXBL(justep("date-selector_part"));}	
var __actions__ = {	
};	
function load_date_selector_part_html(){var a = [];a.push('<div class="xforms-group-content" style="" >');a.push('<div id="date-selector_dialog" style="display:none" >');a.push('</div>');a.push('<div style="width:234px;height:87px;position:absolute;left:-9000px;top:-9000px" >');a.push('<div class="xforms-dialog" height="112" id="date-selector_dialog-content" minmax="false" resizable="false" style="width:100%;height:100%" title="自定义" width="238" >');a.push('<table border="0" cellpadding="0" cellspacing="8" class="component_42908985 tableLayout" component="/UI/system/components/tableLayout.xbl.xml#tableLayout" id="8991798ba7c74b67b049841890438460" style="width:100%;height:100%;tabel-layout:fixed" >');a.push('<tr style="height: 28px" valign="middle" >');a.push('<td style="width: 56px;" >');a.push('<div style="padding-top:8px" >');a.push('开始日期');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-input xforms-appearance-minimal xui-input" id="15fb3df324cd4188aaa5fd3bd89e757f" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<input accesskey="" class="xforms-value" tabindex="" type="text" >');a.push('</input>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('<td class="xui-ie-input-bug" >');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('<tr style="height: 28px" valign="middle" >');a.push('<td style="width: 56px;" >');a.push('<div style="padding-top:8px" >');a.push('结束日期');a.push('</div>');a.push('</td>');a.push('<td>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-input xforms-appearance-minimal xui-input" id="fb6f1da992484051bb30db2751f00e67" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="focus" style="display:none;width:0px" >');a.push('</td>');a.push('<td class="xxf-value" >');a.push('<input accesskey="" class="xforms-value" tabindex="" type="text" >');a.push('</input>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('<td class="xui-ie-input-bug" >');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('<tr valign="middle" >');a.push('<td align="right" colspan="2" >');a.push('<table cellpadding="0" cellspacing="0" class="button-green xforms-control xforms-trigger xforms-appearance-minimal xui-button" id="8ac13ae2909042ae8520e7ba5a1be98a" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="width:75px;margin-right:8px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="xxf-value" >');a.push('<button class="xui-button-label" onmouseout="xforms.Core.setClass(this,\'xforms-trigger-over\')" onmouseover="xforms.Core.setClass(this,\'xforms-trigger-over\',true)" tabindex="" type="button" >');a.push('<span class="xforms-label " id="dc5cbaf0b8fb49b59c253149617f4805" >');a.push('确定');a.push('</span>');a.push('</button>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('<table cellpadding="0" cellspacing="0" class="xforms-control xforms-trigger xforms-appearance-minimal xui-button" id="47be1624400d49ca894392b9c066f180" onmouseout="xforms.showMessage(this,false)" onmouseover="xforms.showMessage(this,true)" style="width:75px;;table-layout:fixed" >');a.push('<tbody>');a.push('<tr>');a.push('<td class="xxf-value" >');a.push('<a class="xui-button-label" tabindex="" >');a.push('<i class="icon " >');a.push('</i>');a.push('<span class="xforms-label " id="65b19226011741218b0f76afb5116e0d" >');a.push('取消');a.push('</span>');a.push('</a>');a.push('</td>');a.push('<td class="xxf-alert" >');a.push('<span class="xforms-alert" >');a.push('<span class="xforms-alert-icon" onmouseout="show(this, null, false)" onmouseover="show(this, null, true)" >');a.push('</span>');a.push('<div class="xforms-alert-value" id="" >');a.push('</div>');a.push('</span>');a.push('</td>');a.push('</tr>');a.push('</tbody>');a.push('</table>');a.push('</td>');a.push('</tr>');a.push('</table>');a.push('</div>');a.push('</div>');a.push('</div>');justep('date-selector_part').innerHTML = a.join('');}
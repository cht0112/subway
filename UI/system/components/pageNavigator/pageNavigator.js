/*
 * 通用导航条组件对象
 *
 * lzg 2010.5 
 */

justep.PageNavigator = function(xblObject){
	this._create(xblObject);
};

justep.PageNavigator.prototype = {
		dispose : function(){
			if(this.domNode) this.domNode.onselectstart = null;
			var $C = $(this.domNode);
			this._disposeEvent($C.find(".xui-pageNavigator-button"));
			this._disposeEvent($C.find(".xui-pageNavigator-page"));
			
			justep.XBLObject.prototype.dispose.call(this);
		},
		_disposeEvent : function($node){
			$node.each(function(){
				$(this).children().each(function(){
					this.onkeyup = null;
					this.onclick = null;
				});
			});
		},
		_create : function(xblObject){
		if(xblObject){
			this.__limit = justep.String.toInt(xblObject.__getAttributeValue('limit'),20);
			this.__offset = justep.String.toInt(xblObject.__getAttributeValue('offset'),0);
			this.__count = justep.String.toInt(xblObject.__getAttributeValue('count'),0);
			this.__pageCount = justep.String.toInt(xblObject.__getAttributeValue('page-count'),5);
			this.__dataid = xblObject.__getAttributeValue('data');
			if(this.__dataid) this.__data = justep.xbl(this.__dataid);
			this.onPageChanged = null;
			xblObject.domNode.onselectstart = function(){return false;};
		}
	},
	generateButton: function($dom, src, disSrc, enable, alt, attrs, gotoPage){
		var img = "",path="/UI/system/components/pageNavigator/images/";
		if(enable){
			img = src;
			$dom.removeAttr("_disabled");
		}else{
			img = disSrc;
			$dom.attr("_disabled","true");
		}
		$dom.find('img').attr("src",justep.Request.convertURL(path+img, true));
		if(gotoPage)
			$dom[0].onclick = function(){
				if(!this.getAttribute("_disabled")) justep.XBLObject.getXBLObject(this).gotoPage(gotoPage);	
			};		
	},

	generateLink: function (iPage, iCur){
		var onClickText = " onclick=\"justep.XBLObject.getXBLObject(this).gotoPage("+ (iPage + 1) +");\"";
		if(iCur == iPage + 1) return "<a " + onClickText + " style=\"color:red;\" >" + (iPage + 1) + "</a>";
		else return "<a " + onClickText + ">" + (iPage + 1) + "</a>";
	},

	attachStoreEvent : function(){
		if(this.__data){
			callback = function(event){
				this.refresh();
			};
			this.__data.attachEvent(justep.XData.EVENT_REFRESHPAGEDATA_AFTER, callback, this);
			this.__data.attachEvent(justep.XData.EVENT_REFRESHDATA_AFTER, callback, this);
			//this.__data.attachEvent(justep.XData.EVENT_INDEX_CHANGED, callback, this);
		}
	},
	
	_getRefreshPage : function(data){
		var fix = Math.floor(this.__pageCount / 2);
		if(this.__pageCount>=3){
			data.begin = (data.iCur - fix <= 1)?1:(data.iCur - fix);   //begin page num
			data.end = (data.iCur + fix >= data.iNum)?data.iNum:(data.iCur + fix);  //end page num
			
			/** 到最后几页时，左边页数不变 **/
			if((data.iNum > this.__pageCount) && (this.__pageCount > (data.iNum - data.begin)))
				data.begin = data.iNum - this.__pageCount+1;
			/** 最开始几页时，右边页数不变 **/
			var t = Math.min(data.iNum,this.__pageCount);
			if(data.end < t) data.end = t;				
			/** 当前页小于显示页数量，则开始页等于1 **/
			if(data.iNum <= this.__pageCount)
				data.begin = 1;
		}else if(this.__pageCount==2){
			data.begin = data.iCur;   //begin page num
			data.end = (data.iCur + 1 >= data.iNum)?data.iNum:(data.iCur + 1);  //end page num
		}else if(this.__pageCount==1){
			data.begin = data.iCur;   //begin page num
			data.end = data.iCur;  //end page num
		}else if(this.__pageCount==0){
			data.begin = 0;   //begin page num
			data.end = 0;  //end page num
		}
	},
	
	_getRefreshOffset : function(){
		var result = {iSize : this.__limit,
				iOffset : this.__offset,
				iCount : this.__count};
		
		if(this.__data){//关联data处理
			if(this.__data.active){
				result.iSize = this.__data.limit!=-1?this.__data.limit:99999;
				result.iOffset = this.__data.limit!=-1?(this.__data.offset+1-result.iSize):0;
				result.iCount = this.__data.limit!=-1?this.__data.getTotal():0;
				if(result.iOffset<0) result.iOffset = 0;
				if(isNaN(result.iCount)) result.iCount = 0;
			}else{
				result.iSize = 99999;
				result.iOffset = 0;
				result.iCount = 0;
			}
		}
		this.__limit = result.iSize;//保存后面有使用
		result.iNum = Math.floor((result.iCount - 1) / result.iSize + 1);  //page count
		result.iCur = Math.floor((result.iOffset - 1) / result.iSize + 1); //current page num
		result.isShowInputPage = result.iNum > 1; 

		this._getRefreshPage(result);
		return result;
	},
	
	refresh: function(){
		var pageLabel = (new justep.Message(justep.Message.JUSTEP231061)).getMessage();
		var _p = this._getRefreshOffset();
		/**
		 * 展现部分
		 * $C:容器DIV
		 * $B:四个按钮 
		 **/
		var text = "";			
		var $C = $(this.domNode);
		var $B = $C.find(".xui-pageNavigator-button");
		var img = "",path="/UI/system/components/pageNavigator/images/";
		this.generateButton($B.eq(0),"first-page.gif","un_first-page.gif",_p.iOffset > 1,"","",1);
		this.generateButton($B.eq(1),"pre-page.gif","un_pre-page.gif",_p.iCur - 1 >= 1,"","",_p.iCur - 1);
		this.generateButton($B.eq(2),"next-page.gif","un_next-page.gif",_p.iOffset + _p.iSize <= _p.iCount,"","",_p.iCur + 1);
		this.generateButton($B.eq(3),"last-page.gif","un_last-page.gif",_p.iOffset + _p.iSize <= _p.iCount,"","",_p.iNum);

		if(_p.isShowInputPage)	$C.find(".xui-pageNavigator-ext").html("<input onkeyup=\"if(event.keyCode==13) justep.XBLObject.getXBLObject(this).redirecGo(this, " + _p.iNum + ")\" value=\"" + _p.iCur + "\" /><span>/</span><span style='padding-right : 4px;'>" + _p.iNum + pageLabel+"</span>");
		else $C.find(".xui-pageNavigator-ext").html(_p.iCount!=0?"<span style='padding-right : 4px;'>1/1"+pageLabel+"</span>":"");	

		if(_p.begin < _p.end){
			for(var i = _p.begin - 1; i < _p.iCur; i++){
				text += this.generateLink(i, _p.iCur);
			}
			for(var i = _p.iCur; i < _p.end; i++){
				text += this.generateLink(i, _p.iCur);
			}
		}else if(_p.begin == _p.end && _p.end>0){
			text += this.generateLink(_p.iCur-1, _p.iCur);
		}
		
		var $D = $C.find(".xui-pageNavigator-page");
		this._disposeEvent($D);
		$D.html(text);
	},

	redirecGo: function(pageOwner, iPage){
		if(!pageOwner) return;
		var inputAlert = (new justep.Message(justep.Message.JUSTEP231062, iPage)).getMessage();
		var s = pageOwner.value;
		if(!(s.match(/^[0-9]+$/g))){
			alert(inputAlert);
			pageOwner.select();
			pageOwner.focus();
			return;
		}
		var newPage = parseInt(s);
		if(newPage < 1 || newPage > iPage){
			alert(inputAlert);
			pageOwner.select();
			pageOwner.focus();
			return;
		}
		this.gotoPage(newPage);
	},

	setLimit : function(limit){
		this.__limit = limit;
	},

	setOffset : function(offset){
		this.__offset = offset;
	},
	
	setCount : function(count){
		this.__count = count;
	},
	
	setPageCount : function(pageCount){
		this.__pageCount = pageCount;
	},
	
	gotoPage: function(page){
		var offset = 0;
		if(page && typeof(page) == "number"){
			offset = (page - 1) * this.__limit + 1;
		}
		if(typeof(offset) != "number") return;
		if(this.__data){
			var changed = this.__data.isChanged?this.__data.isChanged():false;
			if(!changed||(changed && this.__data.refreshConfirm?confirm((new justep.Message(justep.Message.JUSTEP231063)).getMessage()):true))
				this.__data.loadPageData(page, false);
			else return;	
		}else{
			this.__offset = offset;
			this.refresh();
		}
		if($(this.domNode).attr('onPageChanged')){
			if(!this.onPageChanged) this.onPageChanged = justep.Function.get($(this.domNode).attr('onPageChanged'));
			if(this.onPageChanged && typeof this.onPageChanged == 'function')
				this.onPageChanged({'source':this,'offset':offset,'page':page});
		}
	}
}
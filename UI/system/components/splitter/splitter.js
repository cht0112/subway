justep.Splitter = function(id,type,drag,arrow,resizable,collapseType) {
	
	this.type=(type=="horz"?"x":"y");
	this.drag=drag;
	this.arrow=arrow;
	this.status ="normal";
	this.resizable = true;
	if(resizable!=null) this.resizable = resizable;
	this.collapseType = {first:true,second:true};
	if(collapseType){
		this.collapseType.first = (collapseType=="left" || collapseType=="top" || collapseType=="normal") && collapseType!="none";
		this.collapseType.second = (collapseType=="right" || collapseType=="bottom" || collapseType=="normal") && collapseType!="none";
	}
	this.spacing = 5;
	
	/* $C:容器,$F:左或上区域,$R:中间分隔条,$S:右或下区域,$FA:分隔条按钮,$SA:分隔条按钮,$H:拖拽浮动条*/
	this.$C = $C = $("#"+id).find("table:first");
	this.$F = $C.find(".splitter-first:first"); 
	this.$R = $C.find(".splitter-resizer:first"); 
	this.$S = $C.find(".splitter-second:first");
	this.dir = type=="horz"?"width":"height";
	this.edge = type=="horz"?"left":"top";
	this.table = $C[0];
	
	//没有table-layout:fix 需要-5
	
	var me = this;
	this.setOldSize = function(){
		me._w1 = me.$F[0].offsetWidth;
		me._w2 = me.$S[0].offsetWidth - me.spacing;
		me._h1 = me.$F[0].offsetHeight;
		me._h2 = me.$S[0].offsetHeight - me.spacing;
		me._w2 = me._w2 < 0?0:me._w2;
		me._h2 = me._h2 < 0?0:me._h2;		
	};
	this.setOldSize();
	if(this.resizable){
		this.$R.bind("mousedown",function(){
			if(me.status=="normal") me.buildDrag(me);
		});		
	}
	//visibility:hidden; visibility:visible
	if(arrow){
		this.$FA = this.$R.find("img:eq(0)");
		this.$SA = this.$R.find("img:eq(1)");
		
		if(!this.collapseType.first || !this.collapseType.second){
			if(!this.collapseType.first){
				this.$FA.css("visibility","hidden");
			}
			if(!this.collapseType.second){
				this.$SA.css("visibility","hidden");
			}					
		}
		
		this.$FA.bind("mousedown",function(){
			if(me.status=="normal"){
				me.moveToStart();
			}else if(me.status=="second"){
				me.moveToMiddle();
			}
			window.event.cancelBubble=true;
		});

		this.$SA.bind("mousedown",function(){
			if(me.status=="normal"){
				me.moveToEnd();
			}else if(me.status=="first"){
				me.moveToMiddle();
			}
			window.event.cancelBubble=true;
		});
	}
};

justep.Splitter.prototype.buildDrag = function() {
	var me = this;
	this.$H = $("<div />").appendTo("body");
	if(xforms.Core.isIE){
		this.$H[0].setCapture();
	}
	
	var splitter = this.$R[0];
	var pos = this.cumulativeOffset(splitter);

	this.$H.css({position:"absolute",backgroundColor:"#999999",zIndex:"99999",fontSize:"1px"
			,top:pos[1],left:pos[0],height:splitter.offsetHeight,width:splitter.offsetWidth});

	this.minPosition = this.$C.offset()[this.edge];
	this.maxPosition = this.minPosition + (this.type=="x"?this.$C.outerWidth():this.$C.outerHeight()) - this.spacing;
	
	me.orgPos = {
		x : pos[0],
		y : pos[1]
	};
	me.draging_call = function(e) {
		me.draging(e);
	};
	me.done_call = function(e) {
		me.done(e);
	};
	$(document).bind("mousemove",me.draging_call);
	$(document).bind("mouseup",me.done_call);

};
justep.Splitter.prototype.draging = function(e) {
	var attr = this.type == "x" ? "pageX" : "pageY";
	this.$H.css(this.edge,Math.min(Math.max((e[attr]-2),this.minPosition),this.maxPosition));
};
justep.Splitter.prototype.done = function() {

	var dir = this.type == "x" ? "offsetWidth" : "offsetHeight";
	var pos = this.cumulativeOffset(this.$H[0]);  //current pos
	var offset = pos[this.type == "x"?0:1] - this.orgPos[this.type]; //relative old pos
	var orgSize = this.$F[0][dir]; 	//first width
	var newSize = orgSize + offset;
	var parentSize = this.$C[0][dir];
	
	var f = newSize;
	var s = parentSize - newSize - this.spacing;
	f==0?this.$F.hide():this.$F.show();
	s==0?this.$S.hide():this.$S.show();
	this.$F.css(this.dir,f);
	this.$S.css(this.dir,s);
	
	this._w1 = this.$F[0].offsetWidth;
	this._w2 = this.$S[0].offsetWidth - this.spacing;
	this._h1 = this.$F[0].offsetHeight;
	this._h2 = this.$S[0].offsetHeight - this.spacing;
	this._w2 = this._w2 < 0?0:this._w2;
	this._h2 = this._h2 < 0?0:this._h2;
	
	if(xforms.Core.isIE){
		this.$H[0].releaseCapture();
	}

	document.body.removeChild(this.$H[0]);
	
	$(document).unbind("mousemove",this.draging_call);
	$(document).unbind("mouseup",this.done_call);
	
	var self = this; 
	window.setTimeout(function(){
		xforms.XFExt.util.resizeChildren(self.table);
		}, 1);
	
	if(this.onRegionResize)this.onRegionResize({source:this});
	$(window).resize();
};

justep.Splitter.prototype.moveToMiddle = function(notResizeChildren) {
	var me = this;  
	if(me.status == "normal") return;
	me.$F.css({width: me._w1, height: me._h1});
	me.$S.css({width: me._w2, height: me._h2});
	(me._w1 == 0 || me._h1 == 0 )?me.$F.hide():me.$F.show();
	(me._w2 == 0 || me._h2 == 0 )?me.$S.hide():me.$S.show();
	me.$FA.css({visibility: (me.collapseType.first?"visible":"hidden")});
	me.$SA.css({visibility: (me.collapseType.second?"visible":"hidden")});
	me.status = "normal";
	if(!notResizeChildren){
		window.setTimeout(function(){
			xforms.XFExt.util.resizeChildren(me.table);
			}, 1);
	}
	if(this.onRegionResize) this.onRegionResize({source: this});
};

justep.Splitter.prototype.moveToStart = function() {
	var me = this;
	if(me.status == "first") return;
	me.setOldSize();
	me.$F.css(me.dir, "0px");
	me.$S.css(me.dir, "100%");
	me.$F.hide();
	me.$S.show();
	me.$FA.css({visibility: "hidden"});
	me.$SA.css({visibility: "visible"});
	me.status = "first";
	window.setTimeout(function() {
		xforms.XFExt.util.resizeChildren(me.table);
	}, 1);
	if(this.onRegionResize) this.onRegionResize({source: this});
};

justep.Splitter.prototype.moveToEnd = function() {
	var me = this;
	if(me.status == "second") return;
	me.setOldSize();
	me.$F.css(me.dir, "100%");
	me.$S.css(me.dir, "0px");
	me.$F.show();
	me.$S.hide();
	me.$FA.css({visibility: "visible"});
	me.$SA.css({visibility: "hidden"});
	me.status = "second";
	window.setTimeout(function() {
		xforms.XFExt.util.resizeChildren(me.table);
	}, 1);
	
	if(this.onRegionResize)this.onRegionResize({source:this});
};

justep.Splitter.prototype.setFirstSize= function(newSize) {
	if(this.status != "normal"){
  		this.moveToMiddle(true);
 	}
	this.$F.css(this.dir,newSize);
	var me = this;
	window.setTimeout(function() {
		xforms.XFExt.util.resizeChildren(me.table);
	}, 1);

	if(this.onRegionResize)this.onRegionResize({source:this});
};

//copy from prototype.js
justep.Splitter.prototype.cumulativeOffset= function(element) {
    var valueT = 0, valueL = 0;
    do {
      valueT += element.offsetTop  || 0;
      valueL += element.offsetLeft || 0;
      element = element.offsetParent;
    } while (element);
    return [valueL, valueT];
  };


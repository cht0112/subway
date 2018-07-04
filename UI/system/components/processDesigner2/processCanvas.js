$.fn.extend({
	setCapture:function(el){
	 	  if(el.setCapture){
	 		el.setCapture();
	    }else if(window.captureEvents){
	       window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP);
	    }
		},
	releaseCapture:function(el){
	  if(el.releaseCapture){
		  el.releaseCapture();
	}else if(window.captureEvents){
	   window.captureEvents(Event.MOUSEMOVE|Event.MOUSEUP);
	}
	}
});

(function($) {
    function mnpXml(opCode, xmlStr) {
        return this.each(function() {
            if (typeof xmlStr != "string") return;
            if (!jQuery.isXMLDoc(this)) return;
            var node = $.parseXml(xmlStr).firstChild.cloneNode(true);
            switch (opCode) {
                case "append":
                    this.appendChild(node);
                    break;
                case "prepend":
                    if (this.childNodes.length > 0)
                        this.insertBefore(node, this.firstChild);
                    else
                        this.appendChild(node);
                    break;
                case "after":
                    if (this.nextSibling)
                        this.parentNode.insertBefore(node, this.nextSibling);
                    else
                        this.parentNode.appendChild(node);
                    break;
                case "before":
                    this.parentNode.insertBefore(node, this);
                    break;
            }
        });
    }
    $.fn.extend({
        appendXml: function(s) {
            return mnpXml.call(this, "append", s);
        },
        prependXml: function(s) {
            return mnpXml.call(this, "prepend", s);
        },
        afterXml: function(s) {
            return mnpXml.call(this, "after", s);
        },
        beforeXml: function(s) {
            return mnpXml.call(this, "before", s);
        },
        xml: function() {
            var elem = this[0];
            return elem.xml || (new XMLSerializer()).serializeToString(elem);
        },
        innerXml: function() {
            var s = this.xml();
            var i = s.indexOf(">"), j = s.lastIndexOf("<");
            if (j > i)
                return s.substring(i + 1, j);
            else
                return "";
        }
    });
    $.extend(jQuery, {
        parseXml: function(xmlStr) {
	        try{
	            var xd = new DOMParser().parseFromString(xmlStr, "text/xml");
	            return xd;
	    	}catch(e){
	            var xd = new ActiveXObject("Microsoft.XMLDOM");
	            xd.async = false;
	            xd.loadXML(xmlStr);
	            return xd;
	    	}
        },
        toXml: function(obj, nodeName, useAttr) {
            var x = $($.parseXml("<" + nodeName + " />"));
            var n = x.find(":first");
            for (var p in obj) {
                if (useAttr)
                    n.attr(p, obj[p]);
                else
                    n.appendXml("<" + p + " />").find(p).text(obj[p]);
            }
            return x[0];
        }
    });
})(jQuery);

var console;
var idx = 0;
var msgBuf = [];
println = function(msg){
   if(!console){
	   console = document.getElementById("console");
   }
   msgBuf.splice(0, 0, msg +"  ["+(idx++)+"]\n");
   console.value = msgBuf.join(" ");
   $("#console").val( msgBuf.join(" "));//msg +"  ["+(idx++)+"]\n"+console.value;
   if(idx% 50 == 0){
	   msgBuf.splice(idx-1, 1);
   }
}
 

//====================== main ==========================
String.prototype.replaceAll = function(s1, s2) {
	return this.replace(new RegExp(s1, "gm"), s2);
}  

justep.graphics = {};
justep.process = {};
justep.PortDirection = {UP:'n',RIGHT:'e',DOWN:'s',LEFT:'w'};

/** 直角线路由 **/
justep.graphics.ManhattanConnectionRouter=function()
{
   this.MINDIST = 30;
   this.points = []; 
}

justep.graphics.ManhattanConnectionRouter.prototype = {
	route : function(conn, fromPt, fromDir, toPt, toDir) {
		var shape = conn.getShape();
		fromPt = fromPt || shape[0];
		fromDir = fromDir || conn.outPort.direction;

		toPt = toPt || shape[shape.length - 1];
		toDir = toDir || conn.inPort.direction;
		this.points = [];

		this._route(conn, toPt, toDir, fromPt, fromDir);
		return this.points;
	},
	isManhattanRouter : function(linePoits) {
		for ( var i = 0; i < linePoits.length - 1; i++) {
			if (!this.isInAline(linePoits[i], linePoits[i + 1])) {
				return false;
			}
		}
		return true;
	},
	isInAline : function(pt1, pt2) {
		if (Math.abs(pt1.x - pt2.x) < 0.5 || Math.abs(pt1.y - pt2.y) < 0.5) {
			return true;
		}
		return false;
	},
	newPoint : function(x, y) {
		return {
			x : x,
			y : y
		};
	},
	_route : function(/* :Connection */conn,/* :Point */fromPt, /* :int */fromDir, /* :Point */
			toPt, /* :int */toDir) {
		var TOL = 0.1;
		var TOLxTOL = 0.01;

		var UP = 'n';// 向北
		var RIGHT = 'e';// 向东
		var DOWN = 's';// 向南
		var LEFT = 'w';// 向西

		var xDiff = fromPt.x - toPt.x;
		var yDiff = fromPt.y - toPt.y;
		var point;
		var dir;
		if (((xDiff * xDiff) < (TOLxTOL)) && ((yDiff * yDiff) < (TOLxTOL))) {
			this.points.push(this.newPoint(toPt.x, toPt.y));
			return;
		}
		if (fromDir == LEFT) {
			if ((xDiff > 0) && ((yDiff * yDiff) < TOL) && (toDir == RIGHT)) {
				point = toPt;
				dir = toDir;
			} else {
				if (xDiff < 0) {
					point = this.newPoint(fromPt.x - this.MINDIST, fromPt.y);
				} else if (((yDiff > 0) && (toDir == DOWN))
						|| ((yDiff < 0) && (toDir == UP))) {
					point = this.newPoint(toPt.x, fromPt.y);
				} else if (fromDir == toDir) {
					var pos = Math.min(fromPt.x, toPt.x) - this.MINDIST;
					point = this.newPoint(pos, fromPt.y);
				} else {
					point = this.newPoint(fromPt.x - (xDiff / 2), fromPt.y);
				}

				if (yDiff > 0) {
					dir = UP;
				} else {
					dir = DOWN;
				}
			}
		} else if (fromDir == RIGHT) {
			if ((xDiff < 0) && ((yDiff * yDiff) < TOL) && (toDir == LEFT)) {
				point = toPt;
				dir = toDir;
			} else {
				if (xDiff > 0) {
					point = this.newPoint(fromPt.x + this.MINDIST, fromPt.y);
				} else if (((yDiff > 0) && (toDir == DOWN))
						|| ((yDiff < 0) && (toDir == UP))) {
					point = this.newPoint(toPt.x, fromPt.y);
				} else if (fromDir == toDir) {
					var pos = Math.max(fromPt.x, toPt.x) + this.MINDIST;
					point = this.newPoint(pos, fromPt.y);
				} else {
					point = this.newPoint(fromPt.x - (xDiff / 2), fromPt.y);
				}

				if (yDiff > 0)
					dir = UP;
				else
					dir = DOWN;
			}
		} else if (fromDir == DOWN) {
			if (((xDiff * xDiff) < TOL) && (yDiff < 0) && (toDir == UP)) {
				point = toPt;
				dir = toDir;
			} else {
				if (yDiff > 0) {
					point = this.newPoint(fromPt.x, fromPt.y + this.MINDIST);
				} else if (((xDiff > 0) && (toDir == RIGHT))
						|| ((xDiff < 0) && (toDir == LEFT))) {
					point = this.newPoint(fromPt.x, toPt.y);
				} else if (fromDir == toDir) {
					var pos = Math.max(fromPt.y, toPt.y) + this.MINDIST;
					point = this.newPoint(fromPt.x, pos);
				} else {
					point = this.newPoint(fromPt.x, fromPt.y - (yDiff / 2));
				}

				if (xDiff > 0)
					dir = LEFT;
				else
					dir = RIGHT;
			}
		} else if (fromDir == UP) {
			if (((xDiff * xDiff) < TOL) && (yDiff > 0) && (toDir == DOWN)) {
				point = toPt;
				dir = toDir;
			} else {
				if (yDiff < 0) {
					point = this.newPoint(fromPt.x, fromPt.y - this.MINDIST);
				} else if (((xDiff > 0) && (toDir == RIGHT))
						|| ((xDiff < 0) && (toDir == LEFT))) {
					point = this.newPoint(fromPt.x, toPt.y);
				} else if (fromDir == toDir) {
					var pos = Math.min(fromPt.y, toPt.y) - this.MINDIST;
					point = this.newPoint(fromPt.x, pos);
				} else {
					point = this.newPoint(fromPt.x, fromPt.y - (yDiff / 2));
				}

				if (xDiff > 0)
					dir = LEFT;
				else
					dir = RIGHT;
			}
		}
		this._route(conn, point, dir, toPt, toDir);
		
		this.points.push(fromPt);
	}
}

/** 图形工具类* */
justep.graphics.Utils = {
		/**
		 * 计算坐标x,y是否在直线line上.
		 */
		containInLine:function(x,y,line){
			var d1 = this.distance({x:line[0].x,y:line[0].y},{x:x,y:y});
			var d2 = this.distance({x:line[1].x,y:line[1].y},{x:x,y:y});
			var d = this.distance({x:line[1].x,y:line[1].y},{x:line[0].x,y:line[0].y});
			var offset = Math.abs(d-d1-d2);  
			if(offset<=3){ 
				return true;
			}else{
				return false;
			}  
		},
		
		containInRect:function(x,y,bound){
			if(x>=bound.x && x<=bound.x+bound.w && y>=bound.y && y<=bound.y+bound.h){
				return true;
			}
		},
		
		/**
		 * 计算两点的距离.
		 */
		distance:function (a,b) {
			var offX = a.x - b.x;
			var offY = a.y - b.y;
			return Math.sqrt(offX * offX + offY * offY);
		},
		
		//直角路由运算
		manhattanRoute:function(conn, fromPt, fromDir, toPt, toDir){
			if(!this.manhattanRouter){
				this.manhattanRouter = new justep.graphics.ManhattanConnectionRouter();
			}
			return this.manhattanRouter.route(conn, fromPt, fromDir, toPt, toDir);
		}
}

justep.graphics.Port = function(config){
	this.connections = {};
	for(var p in config){
		this[p] = config[p];
	}
	this.shape = this.shape || {x:0,y:0,w:12,h:12};
	//this.setVisible(false);
}
justep.graphics.Port.prototype = {
    initFigure:function(){
       if(!this.figure){
    		this.figure = new justep[this.figureType].Circle({parent:this.parent,shape:this.shape});
    		this.figure.setFill("green"); 
    		this.figure.setVisible(false);
       }
    },
	setVisible:function(visible){ 
		this.visible = visible;
		this.initFigure();
		if(!visible){
	        this.setHighLight(false);
		}
		this.figure.setVisible(visible);
	},
	addConnection:function(connection,portType){
		this.connections[connection.id] = connection;
	},
	hasConnection:function(){
		for(var p in this.connections){
			return true;
		}
		return false;
	},
	removeConnection : function(connection){
		var id = connection.id;
		this.connections[id] = null;
		delete this.connections[id];
	},
	getPortType:function(){
		if(this.connections){
			for(var p in this.connections){
				var conn = this.connections[p];
				if(conn.inPort == this){
					return 'inPort';
				}else if(conn.outPort == this){
					return 'outPort';
				}
			}
		}
		return this.portType;
	},
	getCenter:function(){
		var bound = this.getShape();
		return {x:bound.x+bound.w/2,y:bound.y+bound.h/2};
	},
	setHighLight:function(highLight){
        this.initFigure();
		if(this.figureType != 'vml'){
			return;
		}
		if(highLight && !this.highLightPort){
			this.highLightPort = this.figure.createVmlElement(this.parent,"v:oval","z-index:1000;Behavior: url(#default#VML);position:absolute;width:19px;height:19px;",{filled:'t',fillcolor:'#f57bff',stroked:'f'});//document.createElement('<v:oval style= filled = "t" fillcolor = "#f57bff" stroked = "f"></v:oval>');
			if($.browser.version == '7.0' || $.browser.version == '8.0'){
				this.highLightPort.fill.opacity =0.5;
			}else{
				var fill =  this.figure.createVmlElement(this.highLightPort,"v:fill","",{opacity:"0.5"});
				this.highLightPort.appendChild(fill); 
			}
			
			
			var c = this.getCenter();
			this.highLightPort.style.top = (c.y-11) +"px";
			this.highLightPort.style.left = (c.x-11) +"px"
		}else if(!highLight && this.highLightPort){ 
			this.parent.removeChild(this.highLightPort);
			this.highLightPort = null;
		}
	},
	updateConnectionPosition : function(connection,center){
		 var center = center || this.getCenter(); 
		 var shape = connection.getShape();  
		 var idx = 0;
		 if(this.getPortType() == 'inPort'){
			   idx = shape.length-1;
		 }  
		 var dx = center.x - shape[idx].x;
		 var dy = center.y - shape[idx].y;

		 if(connection.inPort && connection.outPort){
			var c1 = connection.outPort.getCenter();
			var c2 = connection.inPort.getCenter();
			shape[0].x = c1.x;
			shape[0].y = c1.y;
			shape[shape.length-1].x = c2.x;
			shape[shape.length-1].y = c2.y;

			var hasCusMovePt = false;
			for(var i =0,l=shape.length;i<l;i++){
				if(shape[i].cusMove){
					hasCusMovePt = true;
					break;
				}
			}
			if(!hasCusMovePt){   
				shape = justep.graphics.Utils.manhattanRoute(connection);
			}else{
				var tempIdx = -1;
				var direction = connection.inPort.direction;
				if(idx == shape.length -1){ 
					tempIdx = idx-1;
				}else{
					tempIdx = idx+1;
					direction = connection.outPort.direction;
				}
				switch(direction){
					case justep.PortDirection.UP:
					case justep.PortDirection.DOWN:
					   shape[tempIdx].x+=dx;
					   break;
					case justep.PortDirection.LEFT:
					case justep.PortDirection.RIGHT:
					   shape[tempIdx].y+=dy;
				}
			} 
		}
		for(var i =0,l = shape.length;i<l;i++){
			if(shape[i].x<0) shape[i].x = 1;
			if(shape[i].y<0) shape[i].y = 1;
		} 
		connection.setShape(shape);
	},
	getBound:function(){
		this.initFigure();
		if(this.figureType == 'vml'){
		   var x = this.figure.rawNode.style.left;
		   var y = this.figure.rawNode.style.top;
		   var jObj = $(this.figure.rawNode);
		   var pos = jObj.position();
		   return {x:(x?parseInt(x):pos.left),y:(y?parseInt(y):pos.top),w:this.w,h:this.h};
		}else{
			return this.figure.getBound();
		}
	},
	getShape:function(){
		return this.shape;
	},
	
	setShape:function(shape){
		this.shape = shape;
		if(this.figure){
			this.figure.setShape(shape);
		}else if(this.visible){
			this.initFigure();
		}
	},

	/**跟新位置信息**/
	updatePosition : function(){  
		if(this.calcuPosition){
		   var pos = this.calcuPosition.call(this); 
		   var oldShape =  this.getShape();
		   oldShape.x = pos.x-3;
		   oldShape.y = pos.y-3;
		   this.setShape(oldShape);
		   var center = this.getCenter();
		 
		   for(var p in this.connections){
			   var conn = this.connections[p];
			   this.updateConnectionPosition(conn);
		   }
		   if(this.highLightPort){
				var c = this.getCenter();
				this.highLightPort.style.top = (c.y-6) +"px";
				this.highLightPort.style.left = (c.x-6) +"px"
		   }
		}
	},
	 dispose : function(){  
		if(this.highLightPort){
			this.highLightPort.parentNode.removeChild(this.highLightPort);
			this.highLightPort = null;
		}
		if(this.figure){
		   this.figure.dispose();
		}
		this.figure = null;
	}
}

/** ==   连接线端口类  == **/ 
justep.vml.Port = function(config){
	this.connections = {};
	justep.vml.Shape.call(this,config);  
	this.w = 12;
	this.h = 12;
	this.rawNode = this.createVmlElement(this.parent, "v:oval", "display:none;z-index:1000;Behavior: url(#default#VML);position:absolute;width:"+this.w+"px;height:"+this.h+"px", {fillcolor:'green',stroked:'f'});//document.createElement("<v:oval  fillcolor = 'green' stroked = 'f' style='display:none;z-index:1000;Behavior: url(#default#VML);position:absolute;width:"+this.w+"px;height:"+this.h+"px'/>");
	this.parent.appendChild(this.rawNode);  
}
justep.vml.Port.prototype = new justep.vml.Shape();

justep.vml.Port.prototype.setVisible = function(visible){
	this.rawNode.style.display = visible?"":"none";
}
justep.vml.Port.prototype.addConnection = function(connection,portType){
	this.connections[connection.id] = connection;
}

justep.vml.Port.prototype.getPortType = function(){
	if(this.connections){
		for(var p in this.connections){
			var conn = this.connections[p];
			if(conn.inPort == this){
				return 'inPort';
			}else if(conn.outPort == this){
				return 'outPort';
			}
		}
	}
	return this.portType;
}

justep.vml.Port.prototype.removeConnection = function(connection){
	var id = connection.id;
	this.connections[id] = null;
	delete this.connections[id];
}

justep.vml.Port.prototype.getCenter = function(){
	var bound = this.getShape();
	return {x:bound.x+bound.w/2,y:bound.y+bound.h/2};
}

justep.vml.Port.prototype.setVisible = function(visible){
	if(!visible){
        this.setHighLight(false);
	}
	this.rawNode.style.display = visible?"block":"none";
}

/**设置高亮显示**/
justep.vml.Port.prototype.setHighLight = function(highLight){
	if(highLight && !this.highLightPort){
		this.highLightPort = this.createVmlElement(this.parent,"v:oval","z-index:1000;Behavior: url(#default#VML);position:absolute;width:19px;height:19px;",{filled:'t',fillcolor:'#f57bff',stroked:'f'});//document.createElement('<v:oval style= filled = "t" fillcolor = "#f57bff" stroked = "f"></v:oval>');
		var fill =  this.createVmlElement(this.highLightPort,"v:fill","",{opacity:".5"});
		this.highLightPort.appendChild(fill);
		var c = this.getCenter();
		this.highLightPort.style.top = (c.y-9) +"px";
		this.highLightPort.style.left = (c.x-9) +"px"
	}else if(!highLight && this.highLightPort){ 
		this.parent.removeChild(this.highLightPort);
		this.highLightPort = null;
	}
}

/** 跟新连接线的位置 **/
justep.vml.Port.prototype.updateConnectionPosition = function(connection,center){
	 var center = center || this.getCenter(); 
	 var shape = connection.getShape();  
	 var idx = 0;
	 if(this.getPortType() == 'inPort'){
		   idx = shape.length-1;
	 }  
	 var dx = center.x - shape[idx].x;
	 var dy = center.y - shape[idx].y;

	 if(connection.inPort && connection.outPort){
		var c1 = connection.outPort.getCenter();
		var c2 = connection.inPort.getCenter();
		shape[0].x = c1.x;
		shape[0].y = c1.y;
		shape[shape.length-1].x = c2.x;
		shape[shape.length-1].y = c2.y;

		var hasCusMovePt = false;
		for(var i =0,l=shape.length;i<l;i++){
			if(shape[i].cusMove){
				hasCusMovePt = true;
				break;
			}
		}
		if(!hasCusMovePt){   
			shape = justep.graphics.Utils.manhattanRoute(connection);
		}else{
			var tempIdx = -1;
			var direction = connection.inPort.direction;
			if(idx == shape.length -1){ 
				tempIdx = idx-1;
			}else{
				tempIdx = idx+1;
				direction = connection.outPort.direction;
			}
			switch(direction){
				case justep.PortDirection.UP:
				case justep.PortDirection.DOWN:
				   shape[tempIdx].x+=dx;
				   break;
				case justep.PortDirection.LEFT:
				case justep.PortDirection.RIGHT:
				   shape[tempIdx].y+=dy;
			}
		} 
	}
	for(var i =0,l = shape.length;i<l;i++){
		if(shape[i].x<0) shape[i].x = 1;
		if(shape[i].y<0) shape[i].y = 1;
	}
	connection.setShape(shape);
}

justep.vml.Port.prototype.getBound = function(){
   var x = this.rawNode.style.left;
   var y = this.rawNode.style.top;
   var jObj = $(this.rawNode);
   var pos = jObj.position();
   return {x:(x?parseInt(x):pos.left),y:(y?parseInt(y):pos.top),w:this.w,h:this.h};
}

/**跟新位置信息**/
justep.vml.Port.prototype.updatePosition = function(){
	if(this.calcuPosition){
	   var pos = this.calcuPosition.call(this); 
	   this.setShape({x:pos.x-3,y:pos.y-3,w:this.w,h:this.h});
	   var center = this.getCenter();
	   
	   for(var p in this.connections){
		   var conn = this.connections[p];
		   this.updateConnectionPosition(conn);
	   }
	   if(this.highLightPort){
			var c = this.getCenter();
			this.highLightPort.style.top = (c.y-6) +"px";
			this.highLightPort.style.left = (c.x-6) +"px"
	   }
	}
}
justep.vml.Port.prototype.dispose = function(){
	if(this.highLightPort){
		this.highLightPort.parentNode.removeChild(this.highLightPort);
		this.highLightPort = null;
	}
	justep.vml.Shape.prototype.dispose.call(this);
	
}
 

/**===================流程环节图形=========================**/
justep.graphics.ProcessRect = function(ownerCanvas,modelData){
	this.modelData = modelData;
	this.ownerCanvas = ownerCanvas;
	this.figureType = ownerCanvas.figureType;
	this.id = modelData.id;
	var type = this.type = modelData.type;
	var figureConfig = modelData.style ||{};
    if(figureConfig.bound){//兼容以前的数据格式
    	figureConfig.shape = figureConfig.bound;
    	figureConfig.bound = null; 
        delete figureConfig.bound;
    }    
    
    figureConfig.parent = ownerCanvas.canvasElement;
    var portConfig ,defaultW = 106,defaultH =34,fixV = 44;;

    var label,condition,tagName;
    var suffix = ownerCanvas.genaUniqueNameIdx(type);

    //兼容旧版本图形格式
    if(!this.ownerCanvas.version){ 
    	var shape = figureConfig.shape;
    	if(shape){ 
    		if(shape.w){ 
    			//shape.w += 3;
    		}
    		if(shape.h){
    			//shape.h += 3;
    		}
    	}
    }
    
    //初始化默认配置
	switch(type){
		case 'start' :
			portConfig = [['inPort','e'],['outPort','s'],['inPort','w']];
			defaultW = fixV;defaultH = fixV;
			label =  '开始';
			tagName = 'place';
			break;
		case 'conditionActivity' :
			portConfig = [['inPort','n'],['outPort','s']];
			label = '条件环节'+suffix;
			condition = 'true';
			tagName = 'condition-activity';
			break;
		case 'businessActivity' :
			portConfig = [['inPort','n'],['','e'],['','s'],['','w']];
			label = '活动环节'+suffix;
			condition ='true';
			tagName = 'business-activity';
			break;
		case 'conditionBranch' :
			portConfig = [['inPort','n'],['','e'],['','s'],['','w']];
			label =  '条件分支'+suffix;
			defaultH = 40;
			condition ='true';
			tagName = 'if-else-activity';
			break;
		case 'and' :
			portConfig = [['inPort','n'],['','e'],['','s'],['','w']];
			defaultW = fixV;defaultH = fixV;
			label =  'AND';
			tagName = 'and-activity';
			break;
		case 'xor' :
			portConfig = [['inPort','n'],['','e'],['','s'],['','w']];
			defaultW = fixV;defaultH = fixV;
			label =  'XOR';
			tagName = 'place';
			break;
		case 'autoActivity' :
			portConfig = [['inPort','n'],['','e'],['','s'],['','w']];
			label =  '自动环节'+suffix;
			condition ='true';
			tagName = 'auto-activity';
			break;
		case 'end' :
			portConfig = [['inPort','n'],['inPort','e'],['inPort','s'],['inPort','w']];
			defaultW = fixV;defaultH = fixV;
			label =  '结束';
			tagName = 'place';
			break;
	} 
	modelData["CONDITION"] = modelData["CONDITION"] || condition;
	modelData["name"] = modelData["name"] || (type+suffix);
	modelData["LABEL"] = modelData["LABEL"] || label;
	modelData['tagName'] = tagName;
    if(!modelData.xmlNode){
    	var ref = "";
    	if(tagName == 'business-activity' && modelData.ref){
    		ref = ' ref="'+modelData.ref+'" ';
    	}
    	var root = $.parseXml('<'+tagName+' name="'+modelData["name"]+'"'+ref+'><label language="zh_CN"></label></'+tagName+'>');
    	modelData.xmlNode = root.childNodes[0];
    }else{
    	modelData.xmlNode.setAttribute("name",modelData["name"]);
    }
    
    if(figureConfig.shape){
    	var shape = figureConfig.shape;
    	shape.x = shape.x<1?100:shape.x;
    	shape.y = shape.y<1?100:shape.y;
    	shape.w = shape.w || defaultW;
    	shape.h = shape.h || defaultH;
    }else{
    	figureConfig.shape = {x:100,y:100,w:defaultW,h:defaultH};
    }

	
	//流程节点类型与图形的映射.
	this.figureTypeMap = {businessActivity:'Rect',conditionActivity:'Triangular',conditionBranch:'Rhombus',and:'Circle',xor:'Circle',start:'Circle',end:'Circle',autoActivity:'Trapezoid'};
	this.rawFigureType = this.figureTypeMap[type];

	var modelLabel = modelData["LABEL"];
	var styleLabel = figureConfig["LABEL"];
	if(styleLabel && styleLabel.replaceAll("@br@","")==modelLabel){
		figureConfig.text = styleLabel;
	}else{
		figureConfig.text = modelLabel;
	} 

	var figure = new justep[this.figureType][this.rawFigureType](figureConfig);
 
	this.createPorts(portConfig);
 
	this.rawFigure = figure;
	figure.rawNode.ownerFigure = this;
	figure.textNode.ownerFigure = this;
	this.updatePortsPosition();
	figure.setStroke({color:'black'});
}

justep.graphics.ProcessRect.prototype = {
   /**获取原生的图形对象**/
   getRawFigure:function(){
	   return this.rawFigure;
   },
   getShape:function(){
	 return this.rawFigure.getShape();  
   },
   
   createGhost:function(){
	   if(this.ghost){
		   return this.ghost;
	   }
	   var shape = $.extend({},this.getShape());
	   this.ghost = new justep[this.figureType][this.rawFigureType]({parent:this.rawFigure.parent,shape:shape});
	   this.ghost.rawNode.style.zIndex = "2";
	   this.ghost.setFill({color:"blue",opacity:0.4});
	   this.ghost.setStroke({color:'blue'});
	   return this.ghost;
   },
   
   getModelData:function(){
	   return {
			figureType : this.getType(),
			name : this.getName(),
			LABEL : this.getText(),
			CONDITION : this.modelData["CONDITION"]
	   }  
   },

   getName:function(){
	 return this.modelData["name"];  
   },
   getType:function(){
		 return this.modelData["type"];  
   },
   setShape:function(shape){
	   this.rawFigure.setShape(shape);
	   this.updatePortsPosition();
       this.updateSelectBoxPosition(); 
   },
   
   getBound:function(){
	  return this.rawFigure.getBound();  
   },
   
   setText:function(text){
	   this.rawFigure.setText(text);
	   this.modelData["label"] = text;
   },
   getText:function(){ 
	   return  this.rawFigure.getText();
   },
   getCenter:function(){
	 var bound = this.getShape();
	 return {x:bound.x + bound.w/2,y:bound.y + bound.h/2};
   },
   
   /** 获取所有连接当前图形的连接线对象 **/
   getBindingConnections:function(){
	   var connections = [];
	   for(var i = 0,l=this.ports.length;i<l;i++){
		   var c = this.ports[i].connections;  
		   for(var p in c){
			   connections.push(c[p]);
		   }
	   }
	   return connections;
   },
   
   /**
     * 创建图形对外连接端口.
     * @ownerFigure 所属图形。
     * @typeCfg [['inPort'或者'outPort' 方向类型,'n'或'e'或's'或'w' 位置类型],...]
     */
   createPorts:function(typeCfg){
	   var ports = [];
       for(var i = 0,l=typeCfg.length;i<l;i++){
    	 var calcuPosFun ;
    	 switch(typeCfg[i][1]){
    	    case 'n':
    	      calcuPosFun = function(){
    	    	  var shape = this.owner.getShape();
    	    	  return {x:shape.x+shape.w/2-($.browser.msie?4:3),y:shape.y-4};
    	       };
    	       break;
    	    case 'e':
	    	   if(this.type == 'conditionBranch'){//校正菱形与连接线不紧密问题
	     	      calcuPosFun = function(){
	 	    	     var shape = this.owner.getShape();
	 	    	     return {x:shape.x+shape.w-10,y:shape.y+shape.h/2-($.browser.msie?5:3)};
	 	          };
	    	   }else if(this.type == 'autoActivity'){
		     	      calcuPosFun = function(){
			 	    	     var shape = this.owner.getShape();
			 	    	     return {x:shape.x+shape.w-19,y:shape.y+shape.h/2-($.browser.msie?5:3)};
			 	      };
	    	   }else{
	     	      calcuPosFun = function(){
	 	    	     var shape = this.owner.getShape();
	 	    	     return {x:shape.x+shape.w-4,y:shape.y+shape.h/2-($.browser.msie?5:3)};
	 	          };
	    	   }
    	      break;
    	    case 's':
    	       if(this.type == 'conditionBranch'){//校正菱形与连接线不紧密问题
   	     	      calcuPosFun = function(){
   	 	    	     var shape = this.owner.getShape();
   	 	    	 return {x:shape.x+shape.w/2-($.browser.msie?4:3),y:shape.y+shape.h-($.browser.msie?6:4)};
   	 	          };
   	    	   }else{
   	      	      calcuPosFun = function(){
   		    	     var shape = this.owner.getShape();
   		    	     return {x:shape.x+shape.w/2-($.browser.msie?4:3),y:shape.y+shape.h-4};
   		          };
   	    	   }

    	      break;
    	    case 'w':
    	    	if(this.type == 'conditionBranch'){//校正菱形与连接线不紧密问题
   	     	      calcuPosFun = function(){
   	 	    	     var shape = this.owner.getShape();
   	 	    	     return {x:shape.x-3,y:shape.y+shape.h/2-($.browser.msie?5:3)};
   	 	          };
   	    	   }else if(this.type == 'autoActivity'){
		     	      calcuPosFun = function(){
			 	    	     var shape = this.owner.getShape();
			 	    	     return {x:shape.x+8,y:shape.y+shape.h/2-($.browser.msie?5:3)};
			 	      };
	    	   }else{
	       	      calcuPosFun = function(){
	 	    	     var shape = this.owner.getShape();
	 	    	     return {x:shape.x-4,y:shape.y+shape.h/2-($.browser.msie?5:3)};
	 	          };
	    	   }

    	 }  
    	 ports.push(new justep.graphics.Port({figureType:this.figureType,direction:typeCfg[i][1],parent:this.ownerCanvas.canvasElement,owner:this,portType:typeCfg[i][0],calcuPosition:calcuPosFun}));
    	// ports.push(new justep[this.figureType].Port({direction:typeCfg[i][1],parent:this.ownerCanvas.canvasElement,owner:this,portType:typeCfg[i][0],calcuPosition:calcuPosFun}));
         this.ports = ports;
       }
	},
	
	/** 根据端口类型好方向获取端口对象 **/
	getPort:function(portType,dir){ 
		portType = portType == "inPort"?'outPort':'Inport';
		var port = null;
		for(var i =0,l=this.ports.length;i<l;i++){
			if(this.ports[i].getPortType() != portType){
				port = this.ports[i];
				if(dir){
					if(this.ports[i].direction == dir){
						 return this.ports[i];
					}
				}else{
					return this.ports[i];
				}
			}
		}
		return port;
	},
	
   /**选择当前图形**/
   setSelection:function(){  
	    if(this.selectionBoxE){ 
	    	return;
	    }
		var bound = this.rawFigure.getBound();
		var boxHtml = [];
	 
		var boxCommonStyle = "height:6px;line-height:6px;width:6px;background:green;position:absolute;";
		boxHtml.push('<div style="; width:'+(bound.w)+'px;height:'+(bound.h)+'px;top:'+(bound.y-2)+'px;left:'+(bound.x-2)+'px;z-index:1;position:absolute;padding:2px;">');
		boxHtml.push('  <div name="selectBoxContainer" style="background:blue;filter:alpha(opacity=5);opacity: 0.1;width:100%;height:100%;border:1px dotted red;cursor:default;"></div>');
		boxHtml.push('  <div dir="wn" name="selectBox" style="'+boxCommonStyle+'top:0;left:0;cursor:nw-resize">&nbsp;</div>');//西北方向
		boxHtml.push('  <div dir="ne" name="selectBox" style="'+boxCommonStyle+'top:0;right:-1px;cursor:ne-resize">&nbsp;</div>');
		boxHtml.push('  <div dir="es" name="selectBox" style="'+boxCommonStyle+'bottom:-1px;right:-1px;cursor:nw-resize"">&nbsp;</div>');
		boxHtml.push('  <div dir="sw" name="selectBox" style="'+boxCommonStyle+'bottom:-1px;left:0;cursor:ne-resize">&nbsp;</div>');
		boxHtml.push('  <div dir="w" name="selectBox" style="'+boxCommonStyle+'top:48%;left:0;cursor:e-resize">&nbsp;</div>');
		boxHtml.push('  <div dir="e" name="selectBox" style="'+boxCommonStyle+'top:48%;right:-1px;cursor:e-resize">&nbsp;</div>');
		boxHtml.push('  <div dir="n" name="selectBox" style="'+boxCommonStyle+'left:48%;top:0;cursor:s-resize">&nbsp;</div>');
		boxHtml.push('  <div dir="s" name="selectBox" style="'+boxCommonStyle+'left:48%;bottom:-1px;cursor:s-resize">&nbsp;</div>');
		boxHtml.push('</div>'); 
		this.selectionBoxE = $(boxHtml.join('')).appendTo(this.ownerCanvas.dContainer)[0]; 
		this.selectionBoxE.ownerFigure = this;
		this.selectionBoxE.owner = this;
   },
   
   /**是否被选择**/
   isSelected:function(){
	   return this.selectionBoxE?true:false;
   },
   
   /**清楚当期图形的选择**/
   clearSelection:function(){
	   if(this.selectionBoxE){
		   this.selectionBoxE.owner = null;
		   this.selectionBoxE.parentNode.removeChild(this.selectionBoxE);
		   this.selectionBoxE = null;
	   }
   },
   
   /**设置端口号的隐藏状态**/
   setPortsVisible:function(visible,excludePortType){
 	   var ports = this.ports; 
	   for(var i = 0,l=ports.length;i<l;i++){
		   if(excludePortType){
			   if(ports[i].getPortType() != excludePortType){
				   ports[i].setVisible(visible);
			   }
		   }else{
			   ports[i].setVisible(visible);
		   }
	   }
   },
   
   /**根据位置获取距离最近的端口号**/
   getPortByPosition:function(x,y,excludePortType){
		var ports = this.ports;
		var minD = 1000,portIdx;
		var port;
		for(var i = 0,l=ports.length;i<l;i++){
			if(ports[i].getPortType() != excludePortType){
				var bound = ports[i].getBound(); 
				var d = justep.graphics.Utils.distance(bound,{x:x,y:y}); 
				if(d<minD){
					minD = d;
					port = ports[i]; 
				}
			}
		}
		
		return port;
   },
   
   updateSelectBoxPosition:function(){
	   if(this.selectionBoxE){
		   var bound = this.rawFigure.getBound();
		   $(this.selectionBoxE).css({left:bound.x-2,top:bound.y-2,width:bound.w,height:bound.h});
	   }
   },
   
   /** 执行拖拽改变位置 **/
   executeDrag:function(e,canvas){  
		var targetE = e.target; 
		canvas.isDrag = false;
		$.fn.setCapture(targetE);
		var mouseDownPos = canvas.mouseDownPos;
        var x= mouseDownPos?mouseDownPos.x:e.clientX;
        var y= mouseDownPos?mouseDownPos.y:e.clientY;
        var oldPos = [];
        var self = this;
        var selections = canvas.selections;
        var l = selections.length;
        var minX=10000,minY=10000,maxX = 0,maxY = 0;
        for(var i= 0;i<l;i++){
        	if(selections[i].type != 'connection'){
            	var shape = selections[i].getShape();
            	oldPos.push({top:shape.y,left:shape.x});
            	minX = Math.min(minX,shape.x);
            	minY = Math.min(minY,shape.y);
            	maxX = Math.max(maxX,shape.x+shape.w);
            	maxY = Math.max(maxY,shape.y+shape.h);
        	}
        }
        var otherBounds = [];//存储没有选择的图形的bound
        var allFigure = canvas.figures;
        for(var p in allFigure){
        	var figure = allFigure[p];
        	if(figure.type != 'connection' && !figure.isSelected()){
        		otherBounds.push(figure.getShape());
        	}
        }
        var d = document;
        var currentBound = {x:minX,y:minY,w:maxX-minX,h:maxY-minY}; //当前选择图形的区域信息
        
        d.onmousemove = function(e){ 
        	canvas.isDrag = true;
    		e= e || window.event;
            var dx=e.clientX-x;
            var dy=e.clientY-y;
            if(dx == 0 && dy == 0){
            	return;
            }
            targetE.style.cursor = "move";
            currentBound.x = Math.max(minX + dx,9); //不允许拖出左边界或者上边界,最小坐标为5
            currentBound.y = Math.max(minY + dy,9);
            currentBound = autoAlign(currentBound, otherBounds,canvas.dContainer);//执行自动对齐后返回新的坐标点
            //选择框先移动
            for(var i= 0;i<l;i++){
            	if(selections[i].type != 'connection'){
            		selections[i].createGhost();
            		var shape = selections[i].ghost.getShape();
            		shape.x = selections[i].getShape().x +( currentBound.x-minX);
            		shape.y =  selections[i].getShape().y +( currentBound.y-minY);
            		selections[i].ghost.setShape(shape);
            	}
            } 
    	};
    	
        d.onmouseup = function(e){   
        	hiddenAlignLine(canvas.dContainer);//隐藏自动对齐线
    		e= e || window.event;
    		$.fn.releaseCapture(targetE);
    		d.onmousemove = null;
    		d.onmouseup = null;
    		targetE.style.cursor = "default";
            if(e.clientX-x == 0 && e.clientY-y == 0){
            	return;
            }
            canvas.undoManager.startBatch();
            for(var i= 0;i<l;i++){ 
            	if(selections[i].type != 'connection'){
            		if(selections[i].ghost){
            			canvas.undoManager.changeShapeAction(selections[i].id,selections[i].ghost.getShape());
            			//selections[i].setShape(selections[i].ghost.getShape()); 
                		selections[i].ghost.dispose();
                		selections[i].ghost = null;
            		}
            	}
            }
            canvas.undoManager.endBatch();
            canvas.transInterPointToArc();
            canvas.fireFigureStyleChanged();
    	}
	},
	
   /**执行改变大小操作**/
   executeResize:function(e,canvas){
		var targetE = e.srcElement || e.target;
		$.fn.setCapture(targetE);  
        var oldSize = [];
        var l = canvas.selections.length;
        for(var i= 0;i<l;i++){
        	var boxContainer = $(canvas.selections[i].selectionBoxE);
        	var pos = boxContainer.position();
        	oldSize.push({top:pos.top,left:pos.left,width:boxContainer.outerWidth(),height:boxContainer.outerHeight()});
        }
        var x= e.clientX;
        var y= e.clientY;
        var dir = targetE.getAttribute("dir");//方向
        var minH = 20,minW = 20;
        var self = this;
        var mousemove = function(e){
    		e= e || window.event;
            var dx=e.clientX-x;
            var dy=e.clientY-y;  
   		    var scrollLeft = canvas.canvasElement.scrollLeft;
		    var scrollTop = canvas.canvasElement.scrollTop;
            for(var i= 0;i<l;i++){
            	var boxContainer = canvas.selections[i].selectionBoxE;
            	if(canvas.selections[i] instanceof justep[canvas.figureType].Circle){
            		var c1 = dx>0?1:-1,c2 = dy>0?1:-1;
            		dx = dy = Math.min(Math.abs(dx),Math.abs(dy));
            		dx = c1*dx;
            		dy = c2*dy;
            	}
            	var newW = oldSize[i].width+dx,newW1 = oldSize[i].width-dx,newH = oldSize[i].height+dy,newH1 = oldSize[i].height-dy,newTop=oldSize[i].top+dy+scrollTop,newLeft=oldSize[i].left+dx+scrollLeft;
            	if(dir == 'es'){
            		if(newW>minW && newH>minH){
            			$(boxContainer).width(newW).height(newH);
            		}
            	}else if(dir == 'e'){
            		if(newW>minW){
            		  $(boxContainer).width(newW);
            		}
            	}else if(dir == 's'){
            		if(newH>minH){
              		  $(boxContainer).height(newH);
              		}
            	}else if(dir == 'wn'){
            		if(newTop>2 && newLeft>2 &&newW1-2>minW && newH1-2>minH){
            			$(boxContainer).css({top:newTop,left:newLeft,width:newW1-2,height:newH1-2});
            		}
            	}else if(dir == 'w'){
            		if(newLeft>2 &&newW1-2>minW ){
            			$(boxContainer).css({left:newLeft,width:newW1-2});
            		}
            	}else if(dir == 'n'){
             		if(newTop>2 && newH1-2>minH){
            			$(boxContainer).css({top:newTop,height:newH1-2});
            		}
            	}else if(dir == 'ne'){
            		if(newTop>2  && newW-2>minW && newH1-2>minH){
            			$(boxContainer).css({top:newTop,width:newW-2,height:newH1-2});
            		}
            	}else if(dir == 'sw'){ 
            		if(newLeft>2  && newH-2>minH && newW1-2>minW){
            			$(boxContainer).css({left:newLeft,height:newH-2,width:newW1-2});
            		}
            	}
            }
    	};
    	
        var mouseup = function(e){  
    		e= e || window.event;
    		$.fn.releaseCapture(targetE);
//    		targetE.onmousemove = null;
//    		targetE.onmouseup = null;
            if($.browser.msie){
 			   $(targetE).unbind("mousemove");
 			   $(targetE).unbind("mouseup");
             }else{
  			   $(document.body).unbind("mousemove");
 			   $(document.body).unbind("mouseup");
             }
            if(e.clientX-x == 0 && e.clientY-y == 0){
            	return;
            }
    		 var scrollLeft = canvas.canvasElement.scrollLeft;
    		 var scrollTop = canvas.canvasElement.scrollTop;
    		 canvas.undoManager.startBatch();
    		 for(var i= 0,l=canvas.selections.length;i<l;i++){
             	var boxContainer = $(canvas.selections[i].selectionBoxE);
             	var pos = boxContainer.position();
             	var dx = pos.left - oldSize[i].left;
             	var dy = pos.top  - oldSize[i].top;
             	var dw = boxContainer.outerWidth() - oldSize[i].width;
             	var dh = boxContainer.outerHeight() - oldSize[i].height;
             	var shape = $.extend({},canvas.selections[i].getShape());
             	shape.x += dx;shape.y += dy;shape.w += dw;shape.h += dh; 
             	canvas.undoManager.changeShapeAction(canvas.selections[i].id,shape);//.setShape(shape);
    		 } 
    		 canvas.undoManager.endBatch();
    		 self = null;
    		canvas.transInterPointToArc();
    		canvas.fireFigureStyleChanged();
    	}
		 if($.browser.msie){
		     $(targetE).bind("mousemove",mousemove);
		     $(targetE).bind({mouseup:mouseup});
		 }else{
			 $(document.body).bind("mousemove",mousemove);
			 $(document.body).bind({mouseup:mouseup});
		 }
        
	},
	/** 更新端口号的位置 **/
	updatePortsPosition:function(){
		var ports = this.ports;
		if(ports){
			for(var i=0,l=ports.length;i<l;i++){
				ports[i].updatePosition();
			}
		}
	},
	
   /** 销毁 **/
   dispose:function(){
	   this.clearSelection();
	   if(this.ports){
		  for(var i=0,l=this.ports.length;i<l;i++){
			  this.ports[i].dispose();
		  }
	   }
	   this.rawFigure.rawNode.ownerFigure = null;
	   this.rawFigure.dispose();
	   for(var p in this){
		   this[p] = null;
	   }
   }
}

/** ====================流程连接线类 ===========================**/
justep.graphics.ProcessConnection = function(ownerCanvas,modelData){ 
	this.modelData = modelData;
	this.id = modelData.id;
	this.ownerCanvas = ownerCanvas;
	this.figureType = ownerCanvas.figureType;
	var figureConfig = modelData.style;
	figureConfig.parent = ownerCanvas.canvasElement;
    if(figureConfig.points){ //兼容以前的数据格式
    	figureConfig.shape = figureConfig.points;
    	figureConfig.points = null; 
        delete figureConfig.points;
    }
    this.rawFigure = new justep[this.figureType]["Path"](figureConfig);
    this.rawFigure.rawNode.ownerFigure = this;
    this.rawFigure.textNode.ownerFigure = this;
    this.type = modelData.type;
    
    modelData['varIn'] = modelData['varIn'] || 'x';
    modelData['varOut'] = modelData['varOut'] || 'x';
    var label = modelData["LABEL"] || modelData["text"] || figureConfig["LABEL"];
	var source = ownerCanvas.figures[modelData.sourceNode];
	var target = ownerCanvas.figures[modelData.targetNode]; 
	if(source && target){
	  var portMap = {"0":'n',"1":"e","2":'s','3':'w'}; //兼容以前的数据格式
	  this.bindPort(target.getPort('inPort', portMap[figureConfig.inPortDir] || (figureConfig.inPortDir+"")),'inPort');
	  this.bindPort(source.getPort('outPort', portMap[figureConfig.outPortDir] || (figureConfig.outPortDir+"")),'outPort');	
	}else{
		 
	}
	this.rawFigure.setStroke({color:'black',weight:"1px"}); 
	this.rawFigure.paintEndArrow();
	if(label){
	   this.setText(label);
	}
}

justep.graphics.ProcessConnection.prototype = {
   updateConditionBranch:function(ifElseAct){     
	   if(!ifElseAct.modelData ||!ifElseAct.modelData.xmlNode){
		   return;
	   }
	   var xmlNode = ifElseAct.modelData.xmlNode;
	   var trueOutPut = $("true-output",xmlNode);
	   var falseOutPut = $("false-output",xmlNode);
  
	   var cons = ifElseAct.getBindingConnections();
	   var exsit1 = false,exsit2=false;
	   var targets = []; 
	   for(var i = 0;i<cons.length;i++){
		   if(cons[i].outPort.owner == ifElseAct){  
			   if(!cons[i].inPort){
				   continue;
			   }
			   var name = cons[i].inPort.owner.getName();
			   if(name == trueOutPut.attr("unit")){
				   exsit1 = true;
			   }else if(name == falseOutPut.attr("unit")){  
				   exsit2 = true;
			   }else{
				   targets.push(cons[i]);
			   }
		   }
	   }
	   if(!exsit1){
		   trueOutPut.remove();
	   }
	   if(!exsit2){
		   falseOutPut.remove();
	   } 
	   var trueTarget,falseTarget;
	   if(!exsit1 && !exsit2){
		   trueTarget = targets[0];
		   falseTarget = targets[1];
	   }else if(!exsit1){
		   trueTarget = targets[0];
	   }else if(!exsit2){
		   falseTarget = targets[0];
	   }  
	   if(trueTarget){
		   $(xmlNode).appendXml('<true-output name="x" xmlns="http://www.justep.com/model" unit="'+trueTarget.inPort.owner.getName()+'"/>');
		   trueTarget.setText("是");
	   }
	   if(falseTarget){
		   $(xmlNode).appendXml('<false-output name="x" xmlns="http://www.justep.com/model" unit="'+falseTarget.inPort.owner.getName()+'"/>');
		   falseTarget.setText("否");
	   }
   },
   
   
   /**获取原生的图形对象**/
   getRawFigure:function(){
	   return this.rawFigure;
   },
   getName:function(){ 
	   if(!this.modelData.name){
		   if(this.inPort && this.outPort && this.outPort.owner && this.inPort.owner){
			   this.modelData.name = this.outPort.owner.getName()+"|"+this.inPort.owner.getName();
		   }
	   }
		 return this.modelData.name ;  
   },
   getType:function(){
		 return this.modelData["type"];  
   },
   getModelData:function(){
	   return {
			figureType : this.getType(),
			name : this.getName(),
			LABEL : this.getText(),
			sourceNode : this.outPort.owner.getName(),
			targetNode :this.inPort.owner.getName(),
			varIn:this.modelData['varIn'],
			varOut:this.modelData['varOut']
	   }  
   },
   getShape:function(){
	   return this.rawFigure.getShape();  
   },   
   setShape:function(shape,noUpdateBox){    
       this.rawFigure.setShape(shape); 
       if(!noUpdateBox){
    	   this.updateBoxPostion();   
       }
   },
   getBound:function(){
		return this.rawFigure.getBound();  
   },
   setText:function(text){
	   this.rawFigure.setText(text);
   },
   getText:function(){
	   return  this.rawFigure.getText();
   },
   /**绑定端口号**/
   bindPort:function(port,portType,autoUpdatePosition){  
	  if(port){
		    var oldPort = this[portType];
			if(oldPort){
				oldPort.removeConnection(this);
			}
			port.addConnection(this,portType);
			if(portType == 'inPort'){  
              this.modelData.targetNode = port.owner.id;
			}else if(portType == 'outPort'){
				 this.modelData.sourceNode = port.owner.id;
			}
			this[portType] = port;
			if(this.inPort && this.outPort){
				if(autoUpdatePosition){
				   port.updateConnectionPosition(this);
				}else{
					var shape = this.getShape();
					if(shape.length == 2 && Math.abs(shape[0].x - shape[1].x)<2 && Math.abs(shape[0].y - shape[1].y)<2){
						port.updateConnectionPosition(this);
					}
				}
				this.modelData.name = this.outPort.owner.getName()+"|"+this.inPort.owner.getName();
				   if(this.outPort && this.outPort.owner.type == 'conditionBranch'){  
					   this.updateConditionBranch(this.outPort.owner)
				   }
			}
	
	  }
   },
   
   /**改变端口号**/
   changePort:function(e){
	   e = e|| window.event;
	   var targetE = e.srcElement || e.target;
	   $.fn.setCapture(targetE); 
       var x= e.clientX;
       var y= e.clientY;
       var idx = targetE.index;
       var connection = targetE.ownerConnection;  
      
       var shape = this.getShape();
       //记录旧的位置信息以便后面的还原
       var oldShape = [];
       for(var i = 0,l=shape.length;i<l;i++){
          oldShape.push($.extend({},shape[i]));
       }
       //当前端口号类型
       var portType = idx == 0?'outPort':'inPort';
       var oldPoint = {x:shape[idx].x,y:shape[idx].y};//旧的位置
       var currentFigure,currentPort;
       var figures = connection.ownerCanvas.figures;
       var ownerCanvas = connection.ownerCanvas;
       var fixNode = idx == 0?connection.inPort.owner:connection.outPort.owner;

	   var mousemove = function(e){  
		   e = e|| window.event;
           var dx=e.clientX-x;
           var dy=e.clientY-y;
           if(e.clientX<10 || e.clientY<10){
        	   return;
           } 
 
           shape = connection.getShape();
           idx = idx == 0?0:shape.length-1;
           var excludePortType = idx == 0?'inPort':'outPort';
           shape[idx].x = oldPoint.x + dx;
           shape[idx].y = oldPoint.y + dy;
           //重新路由
           
           shape = justep.graphics.Utils.manhattanRoute(connection);
           for(var i =0,l=shape.length;i<l;i++){ //限制超出范围
        	   if(shape[i].x<0) shape[i].x = 1;
        	   if(shape[i].y<0) shape[i].y = 1;
           }
           connection.setShape(shape,true);
           
           currentPort = ownerCanvas.getPortByPos(shape[idx],excludePortType);
        
           if(currentPort){ 
        	   if(currentPort != this.lastPort){
        		   if(this.lastPort){ 
        			   this.lastPort.setHighLight(false);
        			   if(this.lastPort.ower != currentPort.owner){
        				   this.lastPort.owner.setPortsVisible(false);
        			   }
        			   this.lastPort = null;
        		   }
        		   
        		   if(!ownerCanvas.hasConnection(fixNode,currentPort.owner,idx == 0?'outPort':'inPort',connection)){ //判断当前连接点在制定方向类型下是否已经有连线
            		   this.lastPort = currentPort; 
            		   currentPort.owner.setPortsVisible(true,excludePortType);
            		   currentPort.setHighLight(true); 
        		   }else{
        			   currentPort = null;
        		   }
        	   }
           }else if(this.lastPort){
        	   this.lastPort.owner.setPortsVisible(false);
        	   this.lastPort = null;
           }
		} 
	   var bindE = $(targetE);
	   if(!$.browser.msie){
		   bindE = $(document.body);
	   }
	   
		var mouseup = function(e){ 
			e = e|| window.event;
			bindE.unbind("mousemove").unbind("mouseup");
			if(ownerCanvas.highLightFigure){
				ownerCanvas.highLightFigure.setPortsVisible(false);
			}
			if(currentPort && currentPort != connection.inPort && connection != connection.outPort){ 
				var oldSourceName = connection.outPort.owner.getName();
				var oldTargetName = connection.inPort.owner.getName();
				
				ownerCanvas.unSelection(connection);
				//重新绑定端口号
				//connection.bindPort(currentPort,portType,true);
				connection.ownerCanvas.undoManager.changePortAction(connection.id,currentPort,portType)
				currentPort.setHighLight(false);
				connection.ownerCanvas.transInterPointToArc();
				ownerCanvas.addSelection(connection);//connection.setSelection();
				
				//触发端口改变事件
				var params = {
						eventType : "portChanged",
						jsFunc : "",
						portType : currentPort.getPortType(),
						oldSourceNode : oldSourceName,
						newSourceNode : connection.outPort.owner.getName(),
						oldTargetNode : oldTargetName,
						newTargetNode : connection.inPort.owner.getName(),
						styles : ownerCanvas.getFigureStyles()
					};
				ownerCanvas.dispatchEvent(params);
			}else{
				//还原
				connection.setShape(oldShape);
			}
			if(this.lastPort){
				this.lastPort.owner.setPortsVisible(false);
				this.lastPort = null;
			}
			$.fn.releaseCapture(targetE); 
			oldShape = null;
			connection.ownerCanvas.highLightFigure = null;
			connection.ownerCanvas.highLightPort = null;
			currentPort = null;

		}
		bindE.bind({mousemove:mousemove,mouseup:mouseup});
   },
   
   /**选择当前图形**/ 
   setSelection:function(){
	   if(this.boxes){
		   return;
	   }
      this.boxes = [];
      var p = this.ownerCanvas.dContainer;
      var boxCommonStyle = "height:6px;line-height:6px;width:6px;background:green;position:absolute;z-index:1000;font-size:0;";
      var shape = this.rawFigure.getShape();
      var self = this;
      for(var i =0,l=1;i<shape.length;i++){ 
    	  var box = $('<div style="'+boxCommonStyle+'top:'+(shape[i].y-2)+'px;left:'+(shape[i].x-3)+'px;">&nbsp;</div>').appendTo(p)[0];
         // p.appendChild(box);
          if(i == 0 || i == shape.length-1){
        	 box.style.cursor = "move";
        	 $(box).bind('mousedown',function(e){self.changePort(e)});
        	// box.onmousedown = function(e){self.changePort(e)}
          }
          this.boxes.push(box);
          box.ownerConnection = this;
          box.index = i;
      }
	  this.rawFigure.setStroke({color:"red",weight:"2"});
   },
   
   /**是否被选择**/
   isSelected:function(){
	   return this.boxes?true:false;
   },
   
   /**清楚当期图形的选择**/
   clearSelection:function(){
	  if(this.boxes){
		  this.rawFigure.setStroke({color:'black',weight:"1px"}); 
		  for(var i=0,l=this.boxes.length;i<l;i++){
			  this.boxes[i].ownerConnection = null;
			  this.boxes[i].index = null;
			  this.boxes[i].onmousedown = null;
			  this.boxes[i].parentNode.removeChild(this.boxes[i]);
		  }
		  this.boxes = null;
	  }
   },

   /**执行改变大小操作**/
   executeResize:function(){},
   
   executeDrag:function(e,canvas){ 
	   var targetE = e.srcElement || e.target;
	   canvas.isDrag = false;
	   var self = this;
       var x= e.clientX;
       var y= e.clientY;
       var l = canvas.selections.length;
       var self = this;
       var shape = this.getShape();//$.extend({},this.getShape()); 
	   var scrollLeft = canvas.dContainer.scrollLeft;
	   var scrollTop = canvas.dContainer.scrollTop;
       var idx = -1;

       for(var i =0 ,l=shape.length-1;i<l;i+=1){
       	if(justep.graphics.Utils.containInLine(x+scrollLeft-$(canvas.dContainer).offset().left,y+scrollTop-$(canvas.dContainer).offset().top,[shape[i],shape[i+1]])){
       		idx = i;
       		 break;
       	}
       }     
       if(idx<=0 || idx == shape.length-2){
    	  $.fn.releaseCapture(targetE);//.releaseCapture();
       	  return;
       }
       var ghostShape = [{x:shape[idx].x,y:shape[idx].y},{x:shape[idx+1].x,y:shape[idx+1].y}]
       var ghostPath = canvas.createShape({type:'Path',shape:ghostShape});
       ghostPath.setStroke({color:'red'})
       var targetE = ghostPath.rawNode;
       targetE.style.display = "none";
       $.fn.setCapture(targetE); 
       var oldShape = [shape[idx].x,shape[idx].y,shape[idx+1].x,shape[idx+1].y];
       var moveX = shape[idx].x == shape[idx+1].x?false:true;
	   var bindE = $(targetE);
	   if(!$.browser.msie || !bindE.tagName){
		   bindE = $(document.body);
	   }
	   
       var mousemove = function(e){ 
       	  canvas.isDrag = true;
   		  e= e || window.event;
          if(e.clientX-x == 0 && e.clientY-y == 0){ 
           	return;
          }
          targetE.style.cursor = "move";
          var dx=e.clientX-x;
          var dy=e.clientY-y;
          targetE.style.display = "";
   		  var scrollLeft = canvas.canvasElement.scrollLeft;
   		  var scrollTop = canvas.canvasElement.scrollTop;
   	      var x1 = oldShape[0] + dx,y1 = oldShape[1] + dy,x2 = oldShape[2] + dx,y2 = oldShape[3] + dy;
 
   	      if(!moveX){
               if( oldShape[0] + dx > 2){
               	    ghostShape[0].x = oldShape[0] + dx;
                }
        		if(oldShape[2] + dx > 2){
        			ghostShape[0+1].x = oldShape[2] + dx;
         		}	
   	      }else{
               if(oldShape[1] + dy > 2){
               	    ghostShape[0].y = oldShape[1] + dy;
                }
        		if(oldShape[3] + dy > 2){
        			ghostShape[0+1].y = oldShape[3] + dy;
        		}
   	     }
   	     ghostPath.setShape(ghostShape);
   	};
   	
    var mouseup = function(e){   
   		e= e || window.event;
   		$.fn.releaseCapture(targetE);   
   		targetE.style.cursor = "default"; 
   		bindE.unbind("mousemove").unbind("mouseup");
   		   shape  =$.extend(true,[],shape); 
           if(e.clientX != x || e.clientY != y){  
           	shape[idx].x = ghostShape[0].x;
           	shape[idx].y = ghostShape[0].y;
           	shape[idx+1].x = ghostShape[1].x;
           	shape[idx+1].y = ghostShape[1].y;
           	shape[idx].cusMove = true;
           	shape[idx+1].cusMove = true;
         	canvas.undoManager.changeShapeAction(self.id,shape);
          	//self.setShape(shape);
       		canvas.transInterPointToArc();
       		canvas.fireFigureStyleChanged();
           } 
           ghostPath.dispose();
           targetE = null;
   		target = null;
   		self = null;
   	} 
    bindE.bind({mousemove:mousemove,mouseup:mouseup})
 
   },
   
   updateBoxPostion:function(){  
		if(this.boxes){
			var shape = this.getShape();
			for(var i=0,l=shape.length;i<l;i++){
				$(this.boxes[i]).css({top:shape[i].y-1,left:shape[i].x-1});
			}
		}
	},
   /**销毁**/
   dispose:function(){
	   this.clearSelection();
	   if(this.inPort && this.inPort.removeConnection){
		   this.inPort.removeConnection(this);
	   }
	   if(this.outPort && this.outPort.removeConnection){  
		   this.outPort.removeConnection(this);
	   }
	   this.rawFigure.rawNode.ownerFigure = null;
	   this.rawFigure.dispose();
	   for(var p in this){
		   this[p] = null;
	   }
   }
}

/** =====================画布 =============**/
justep.graphics.ProcessCanvas = function(config){
	if(!config){
		return;
	}
	this.id = config.id;
	this.nameIdx = 1;
	this.draggable = config.draggable;
	this.figureType = ($.browser.msie && $.browser.version < 10.0)?"vml":"svg";
	this.selections = [];
	this.figures = {};
	this.idIdx = 0;
	this._init();
}
justep.graphics.ProcessCanvas.prototype = {
	processFile:'unknown',
	/**画布初始化**/
	_init:function(){
		this.dContainer = document.getElementById(this.id);
		if(this.figureType == 'vml'){
			document.namespaces.add("v","urn:schemas-microsoft-com:vml");
			this.canvasElement =document.createElement('<v:group style="WIDTH: 2000px; POSITION: absolute; HEIGHT: 3000px;border:2px solid green;" coordsize="2000,3000">');
			var rect = document.createElement('<v:rect style="LEFT: 0px; WIDTH: 2000px; TOP: 0px; HEIGHT: 3000px" coordsize="21600,21600" filled="f" stroked="f"></v:rect>');
			this.canvasElement.appendChild(rect);
		}else{
			this.canvasElement = document.getElementById("svgc");
		}
		this.dContainer.appendChild(this.canvasElement);
	 
		this._installListener(this);
	},
	
	/**添加画图监听**/
	_installListener:function(self){
		$(self.dContainer).bind({
			mousedown:function(event){self._mouseDown(event);},
			mouseup:function(event){self._mouseUp(event);},
			mousemove:function(event){self._mouseMove(event);},
			dblclick:function(event){self._dblClick(event);},
			keydown:function(event){self._keydown(event);},
			contextmenu:function(event){ self._showPopuMenu(event); return false;}
			});
	},
	
	/**卸载监听**/
	_unStallListener:function(){
		$(self.dContainer).unbind();
	},
	
	_keydown:function(event){  
		var event = window.event;
		if (event.keyCode == 116) {
			event.keyCode = 0;
			event.cancelBubble = true;
			return false;
		}
		if(event.ctrlKey && event.keyCode == 65){
			this.selectAll();
			event.keyCode = 0;
			event.cancelBubble = true;
		}
 
		this.startCache();  
		var dx = 0, dy = 0;
		var count = this.selections.length;
		if (count > 0) {  
			//键盘微调移动图形
			switch (event.keyCode) {
				case 37 :
					dx = -1;
					break;
				case 38 :
					dy = -1;
					break;
				case 39 :
					dx = 1;
					break;
				case 40 :
					dy = 1;
					break;
			}
			if (dx != 0 || dy != 0) { 
				for (var i = 0,l=this.selections.length;i<l;i++) {
					var figure = this.selections[i];
					if (figure instanceof justep.graphics.ProcessRect) {
						var shape = figure.getShape();
						shape.x += dx;
						shape.y += dy; 
						figure.setShape(shape);
					}
				}
				this.transInterPointToArc();
				this.endCache();
				return;
			}
		}
		if (event.keyCode == 27) { //ESC 取消创建
			this.selectProcessItemType();
		} else if (event.keyCode == 46) {//按delete键删除
			this.removeSelections();
		} else if (event.keyCode == 83 && event.ctrlKey) { //按ctrl+s键保存
			var params = {
				eventType : "save",
				jsFunc : "",
				styles : this.getFigureStyles()
			};
			this.dispatchEvent(params);
		}else if(event.ctrlKey){
			   if(event.keyCode == 89){  //按ctrl+z 撤销
			   	  this.dispatchEvent({eventType : "redo"});
			   }else if(event.keyCode == 90){ //按ctrl+y 重做
			   	  this.dispatchEvent({eventType : "undo"});
			   } 
			}
		this.endCache();
	},
	
	/** 画布上鼠标按下**/
	_mouseDown:function(e){
		 e = e || window.event;
		 var targetE = e.srcElement || e.target;
		 this.oldStyle = this.getFigureStyles();
		 if(e.button == 2){
			 this.selectProcessItemType();
		 } 
		 if(this.currentTextInput){  
			 this.currentTextInput.blur();
		 }
		 var ownerFigure = this.getOwnerFigure(targetE);   
		 //当前鼠标点在滚动条上直接返回
		  if(!$.browser.msie){ 
				 if(!ownerFigure){ 
		             ownerFigure = this.getFigureByPoint(e);
				 }
		 }else{
			 //当前鼠标点在滚动条上直接返回
	         if(!this.processItemType && !ownerFigure && this._isInScrollBar(e.clientX, e.clientY) || targetE.ownerConnection){   
	        	  return;
	         }
		 }
         this.mouseDownPos = {x:e.clientX,y:e.clientY};//记录鼠标按下时的位置
		 this.mouseDownFlag = true;//记录鼠标是否按下
		
		 if(this.processItemType){ //判断当前是否是要创建图形  
			 if(this.processItemType != 'connection'){  
				 //创建非连接线图形
				 var figure = this.undoManager.newAction({type:this.processItemType,style:{shape:{x:e.clientX+this.dContainer.scrollLeft+$(this.dContainer).offset().left-3,y:e.clientY+this.dContainer.scrollTop-3-$(this.dContainer).offset().top}}});//this.createProcessShape({type:this.processItemType,style:{shape:{x:e.clientX+$(this.dContainer).offset().left-3-this.dContainer.offsetLeft,y:e.clientY+this.dContainer.scrollTop-3-$(this.dContainer).offset().top}}}); 
                 this.fireAddFigureEvent(figure);
                 this.setSelection(figure);
			 }else if(this.currentPort){//判断鼠标当前的位置是不是在端口上
				 this.currentOutPort = this.currentPort;
				 //创建连接线的模拟连接图
				 this.connectionGhost = this.createShape({type:'Path',shape:[this.currentOutPort.getCenter(),{x:e.clientX+this.dContainer.scrollLeft+$(this.dContainer).offset().left+1,y:e.clientY+this.dContainer.scrollTop+1-$(this.dContainer).offset().top}]});
				// $.fn.setCapture(this.dContainer);
			 }
			 return;
		 }
 
		 if(targetE.getAttribute("name") == 'selectBox'){ //鼠标点在选择高亮点上
			 targetE.parentNode.owner.executeResize(e,this); 
		 }else if(targetE.getAttribute("name") == 'selectBoxContainer'){ //鼠标点在图形选择框内
			 if(!e.ctrlKey){  
				 targetE.parentNode.owner.executeDrag(e,this); 
			 }
		 }else if(ownerFigure && ownerFigure.isProcessShape){ //鼠标点在流程图形上
			 if(!e.ctrlKey){  
			     if($.browser.msie){
					 if(!ownerFigure.isSelected()){
						 if(this.mouseIsOnFigure(e,ownerFigure)){
							 this.executeSelect(e,ownerFigure); 
						 }
					 }				
					 if(ownerFigure.isSelected()){  
						 this.mouseDownFigure = ownerFigure;//记录当前鼠标按下时所在的图形，在移动图形的时候用到
					 }
			     }else{ 
					 if(!this.mouseIsOnFigure(e,ownerFigure)){
						 var tempFigure;
						 if(ownerFigure instanceof justep.graphics.ProcessConnection){
							 tempFigure = this.getFigureByPoint(e);
						 }
						 if(!tempFigure){
							 this.clearFlag = true;
							 return;						 
						 }else{
							 ownerFigure = tempFigure;
						 }
					 }
					 if(!ownerFigure.isSelected()){
					     this.executeSelect(e,ownerFigure);  
					 }				 
					// if(ownerFigure.isSelected()){ 
						 this.mouseDownFigure = ownerFigure;//记录当前鼠标按下时所在的图形，在移动图形的时候用到
					// }
			     
			     }

			 } 
		 }else{  
			 if(!this._isInScrollBar(e.clientX, e.clientY))
				 this.clearFlag = true;
		 }
	},  
	getFigureByPoint:function(point){
		 var figures = this.figures;
   	 for(var p in figures){
   		var figure = figures[p];
   		if(this.mouseIsOnFigure(point,figure)){
   			return  figure;
   		}
   	 }
	},
	//鼠标点击是否在图形上，主要用来判断svg的path
	mouseIsOnFigure:function(e,ownerFigure){
	   if($.browser.msie && (!document.documentMode || document.documentMode < 10)){
		      return this.mouseIsOnFigure_svg(e,ownerFigure);
		   }
			if(ownerFigure.rawFigure instanceof justep.svg.Path){
				var x = e.clientX + this.dContainer.scrollLeft;//e.pageX;  //e.offsetX;
				var y = e.clientY+this.dContainer.scrollTop-60; //e.pageY;  //e.offsetY;
				var points = ownerFigure.rawFigure.getShape();
				for ( var i = 0; i <= points.length-2; i++) {
					var p1 = points[i];
					var p2 = points[i+1];
					var offset = $.browser.msie?10:10;
					if(p1.x==p2.x){
						//  |
						if(p1.x-offset<x && x<p1.x+offset && Math.min(p1.y,p2.y)<=y && y<=Math.max(p1.y,p2.y)){
							return true;
						}
					}else{
						// -
						if(p1.y-offset<y && y<p1.y+offset && Math.min(p1.x,p2.x)<=x && x<=Math.max(p1.x,p2.x)){
							return true;
						}
					}
				}
				return false;
			}else{  
	   			var bound = ownerFigure.getBound();
				if(justep.graphics.Utils.containInRect(e.clientX+this.dContainer.scrollLeft,e.clientY+this.dContainer.scrollTop-60,bound)){
					return true;
				}
				return false;
			}
			return true;
	},

	mouseIsOnFigure_svg:function(e,ownerFigure){
		if(ownerFigure.rawFigure instanceof justep.svg.Path){
			var x = e.layerX;//e.pageX;  //e.offsetX;
			var y = e.layerY; //e.pageY;  //e.offsetY;
			var points = ownerFigure.rawFigure.getShape();
			for ( var i = 0; i <= points.length-2; i++) {
				var p1 = points[i];
				var p2 = points[i+1];
				if(p1.x==p2.x){
					//  |
					if(p1.x-10<x && x<p1.x+10 && Math.min(p1.y,p2.y)<=y && y<=Math.max(p1.y,p2.y)){
						return true;
					}
				}else{
					// -
					if(p1.y-10<y && y<p1.y+10 && Math.min(p1.x,p2.x)<=x && x<=Math.max(p1.x,p2.x)){
						return true;
					}
				}
			}
			return false;
		}
		return true;
	},

	/** 画图上鼠标移动操作 **/
	_mouseMove:function(e){
		e = e || window.event;
		if(this.processItemType){ //判断当前是否是要创建图形  
			if(this.processItemType == 'connection'){ // 判断创建的图形是否是连接线
				if(!this.mouseDownFlag || (this.mouseDownFlag && this.currentOutPort)){
					var excludePortType = this.mouseDownFlag?"outPort":"inPort";
					//当鼠标没有按下或者鼠标已经按下并且按下的位置是在某一个端口上时继续获取当前鼠标所在的端口
					var currentPort = this.getPortByPos({x:e.clientX+this.dContainer.scrollLeft-$(this.dContainer).offset().left,y:e.clientY+this.dContainer.scrollTop-$(this.dContainer).offset().top},excludePortType,this.currentOutPort?this.currentOutPort.owner:null);
				
					if(currentPort){
		        	   if(currentPort != this.currentPort){
		        		   if(this.currentPort){
		        			   this.currentPort.setHighLight(false);
		        			   if(this.currentPort.ower != currentPort.owner){
		        				   this.currentPort.owner.setPortsVisible(false);
		        			   }
		        			   this.currentPort = null;
		        		   }

		        		   if(!this.currentOutPort || !this.hasConnection(this.currentOutPort.owner,currentPort.owner,'inPort')){
		            		   this.currentPort = currentPort;  
		            		   currentPort.owner.setPortsVisible(true,excludePortType);
		            		   currentPort.setHighLight(true);
		        		   }else{
		        			   currentPort = null;
		        		   }
		        	   }
		            }else if(this.currentPort){
		        	   this.currentPort.owner.setPortsVisible(false);
		        	   this.currentPort = null;
		            }
				}
				if(this.mouseDownFlag && this.connectionGhost){
					//移动模拟图
					var shape = this.connectionGhost.getShape();
					shape[shape.length-1].x = e.clientX+this.dContainer.scrollLeft-$(this.dContainer).offset().left;
					shape[shape.length-1].y = e.clientY+this.dContainer.scrollTop-$(this.dContainer).offset().top;
					this.connectionGhost.setShape(shape);
				}
			}
			return;
		}
		if(this.mouseDownFigure){  
			this.mouseDownFigure.executeDrag(e, this);
			this.mouseDownFigure = null;
		}else{
			if(this.mouseDownFlag && this.clearFlag && !this.selectDiv){
				this._dragSelect(e, this);
			} 
		}
	},
	
	/** 画图上鼠标弹起 **/ 
	_mouseUp:function(e){ 
		// $.fn.releaseCapture(this.dContainer);
		e = e || window.event;
		var targetE = e.srcElement || e.target;
        if(targetE == this.dContainer && this._isInScrollBar(e.clientX, e.clientY)){ 
       	   return;
        }
		
	
		this.mouseDownFlag = false;
		this.mouseDownFigure = null;
		
		if(this.processItemType){  //判断当前是否是要创建图形  
			 if(this.connectionGhost){ //判断连接线模拟图是否存在
				 if(this.currentPort && this.currentOutPort.owner.id!=this.currentPort.owner.id){//当期鼠标的位置是否在
					 var shape = this.connectionGhost.getShape(); 
					 //创建实际的连接线
				     var figure = this.undoManager.newAction({sourceNode:this.currentOutPort.owner.id,targetNode:this.currentPort.owner.id,type:this.processItemType,style:{outPortDir:this.currentOutPort.direction,inPortDir:this.currentPort.direction,shape:shape}});//this.createProcessShape({type:this.processItemType,style:{shape:shape}});
				     //this.currentPort.updateConnectionPosition(figure);
				     //绑定端口
				    // figure.bindPort(this.currentOutPort,'outPort');
				    // figure.bindPort(this.currentPort,'inPort',true);
				     this.fireAddFigureEvent(figure);
				     this.setSelection(figure);
				 }
			     this.connectionGhost.dispose();
				 this.connectionGhost = null;	
				 this.transInterPointToArc();
			 }
			 if(this.currentPort){
			       this.currentPort.owner.setPortsVisible(false);
			 }
			 this.selectProcessItemType();
			 this.processItemType = null;
			 this.currentPort = null;
			 this.currentPort = null;
			 this.currentOutPort = null;
			 this.isDrag = false;
		     this.clearFlag = false; 
		     return;
		}

		if(targetE.ownerConnection){
			this.isDrag = false;
			this.clearFlag = false; 
		   return;
		}
 
		 if(e.ctrlKey){ //按着ctrl键
			var ownerFigure = this.getOwnerFigure(targetE);
			if(ownerFigure  && ownerFigure.isProcessShape){  
				this.executeSelect(e,ownerFigure);  
			}else if(targetE.getAttribute("name") == 'selectBoxContainer'){
				this.executeSelect(e,targetE.parentNode.owner.target);  
			}
		 }else if(!this.isDrag && targetE.getAttribute("name") == 'selectBoxContainer'){   
			 this.executeSelect(e,targetE.parentNode.owner || this.getOwnerFigure(targetE)); //
		 }else if(this.clearFlag){    
			this.clearSelection();
			this.selectProcessRoot();
		}else{
			var ownerFigure = this.getOwnerFigure(targetE);
			if(ownerFigure  && ownerFigure.isProcessShape){
				this.executeSelect(e,ownerFigure);  
			}
		}
		this.isDrag = false;
		this.clearFlag = false; 
	},
	
	/** 在画布上拖拽选择**/
	_dragSelect:function(e,self){
		var x = e.clientX +self.dContainer.scrollLeft- $(self.dContainer).offset().left-3,y = e.clientY +self.dContainer.scrollTop-3-$(self.dContainer).offset().top;
		var d = document;
		var selectDiv = $("<div style='background:blue; filter:alpha(opacity=10);opacity:0.1; border:1px dotted green;position:absolute;top:"+y+"px;left:"+x+"px;font-size:0;height:1px;'>&nbsp;</div>").appendTo(self.dContainer);
		$.fn.setCapture(selectDiv[0]);
        this.selectDiv = selectDiv;
        var bindE = $(d.body);
         var mousemove = function(e){
        	e = e || window.event;
        	var w = e.clientX - x + +self.dContainer.scrollLeft-$(self.dContainer).offset().left;
        	var h = e.clientY - y + self.dContainer.scrollTop-$(self.dContainer).offset().top;
        	if(w<1){
        		selectDiv.css("left",x+w)
        	}
        	selectDiv.width(Math.abs(w));
        
			if(h<1){
				selectDiv.css("top",y+h)
			}
			selectDiv.height(Math.abs(h));
        }
       var mouseup = function(e){ 
    	   bindE.unbind("mousemove").unbind("mouseup");
        	var pos = selectDiv.position();
        	var selectBound = {x:pos.left+self.dContainer.scrollLeft,y:pos.top+self.dContainer.scrollTop,w:selectDiv.width(),h:selectDiv.height()};
        	var figures = self.figures;
        	self.clearSelection();
        	var lastFigure;
        	for(var p in figures){
        		var figure = figures[p];
        		
        		if(figure instanceof justep.graphics.ProcessRect){
        			self.unSelection(figure);
        			var bound = figure.getBound();
        			if(self.containInSelectBound(selectBound,bound)){
        				self.addSelection(figure,true); 
        				lastFigure = figure;
        			}
        		}else if(figure instanceof justep.graphics.ProcessConnection){
        			
        		}
        	}
        	if(lastFigure){
        		self.fireSelectChangedEvent("add",lastFigure);	
        	}
        	$.fn.releaseCapture(selectDiv[0]); 
			selectDiv.remove().empty();
		 
	 
			selectDiv = null;
            self.selectDiv = null;
    		self.mouseDownFlag = false;
    		self.mouseDownFigure = null;
    		self.isDrag = false;
    		self.clearFlag = false; 
    		self = null;
        }
       bindE.bind({mousemove:mousemove,mouseup:mouseup});
	},
	
	/**右键菜单**/
	_showPopuMenu:function(e){
		e = e || window.event; 
		this.popuPos = {x:e.clientX - $(this.dContainer).offset().left,y:e.clientY+ this.dContainer.scrollTop};//记录菜单弹起的位置
		var targetE = e.srcElement || e.target;
		this.currentFigure = null;
		var ownerFigure = this.getOwnerFigure(targetE); 
		 if(targetE.getAttribute("name") == 'selectBoxContainer'){
			 ownerFigure =  targetE.parentNode.owner;
		} 
		var haveSelect = false; 
		if (ownerFigure) {
			this.currentFigure = ownerFigure;
			haveSelect = true;
		}else {  
			this.currentFigure = null;
			var pos = $(this.dContainer).position();
			this.menuPos = {
				x : e.clientX - pos.left -$(this.dContainer).offset().left,
				y : e.clientY - pos.top + this.dContainer.scrollTop -50 
			};
		}
		var params = {eventType: "contextmenu", jsFunc: "", haveSelect: haveSelect};
		this.dispatchEvent(params);
		return false;
	
	},
	/**判断图形在某个方向上是否有连接线**/
	hasConnection:function(sourceFigure,targetFigure,portType,excludeConn){
        if(sourceFigure == targetFigure){
        	return true;
        }
		if(sourceFigure && targetFigure){  
			var connections = sourceFigure.getBindingConnections();
			for(var i=0,l=connections.length;i<l;i++){
				if(connections[i]!= excludeConn && connections[i][portType].owner == targetFigure){
					return true;
				}
			}			
		}
	},
	
	/**根据位置信息获取端口对象**/
	getPortByPos:function(point,excludePortType,excludeFigure){
		 var figures = this.figures;
         //获取当前光标所在的图形
         for(var p in figures){
         	var figure = figures[p];
         	if(figure.isProcessShape && figure.type != 'connection'){
         		var bound = figure.getBound();	
         		if(point && justep.graphics.Utils.containInRect(point.x,point.y,{x:bound.x-5,y:bound.y-5,w:bound.w+5,h:bound.h+5}) && figure != excludeFigure){  
         			return figure.getPortByPosition(point.x,point.y,excludePortType);
         		}
         	 }
         } 
	},
	
	/**生成名称唯一序号**/
	genaUniqueNameIdx:function(type){
		var idx = this.nameIdx++;
		var name = type+idx;
        if(!this.getFigureByName(name)){
        	this.nameIdx = 1;
        	return idx;
        }else{
        	var idx = this.genaUniqueNameIdx(type);
        	if(idx){
        		return idx;
        	}
        }
       
	},
	
	/**根据名称获取图形对象**/
	getFigureByName:function(name){
		var figures = this.figures;
		for(var p in figures){
			var figure = figures[p];
			if(name == figure.getName()){
				return figure;
			}
		}
	},
	/**派发onafterupdate事件，在java端会接收到这个事件，主要用于把js端的数据主动发往java端处理**/
	dispatchEvent : function(eventData) {
		this.eventData = eventData;
		//document.fireEvent("onafterupdate");
	},
     
	/**判断一个范围是否部分或者全部包含在另外一个范围里面**/
	containInSelectBound : function(sBound, tBound) {
		return Math.abs((sBound.x + sBound.x + sBound.w)
				- (tBound.x + tBound.x + tBound.w)) < (sBound.x + sBound.w
				+ tBound.x + tBound.w - sBound.x - tBound.x)
				&& Math.abs((sBound.y + sBound.y + sBound.h)
						- (tBound.y + tBound.y + tBound.h)) < (sBound.y
						+ sBound.h + tBound.y + tBound.h - sBound.y - tBound.y);
	},
	
	/** 画布鼠标双击操作 **/
	_dblClick:function(e){
		e = e || window.event;
		var targetE = e.srcElement || e.target;
		var ownerFigure = this.getOwnerFigure(targetE); 
		if(ownerFigure  && ownerFigure.type == 'connection'){ //双击的目标为连接线
			var x = event.clientX + this.dContainer.scrollLeft- $(this.dContainer).offset().left; 
			var y = event.clientY  + this.dContainer.scrollTop - $(this.dContainer).offset().top; 
			var idx = this.getPointIndex(ownerFigure,{x:x,y:y});
            this.insertPoint(ownerFigure, idx+1, {x:x,y:y});
            this.insertPoint(ownerFigure, idx+2, {x:x,y:y});
		}else if(ownerFigure){
			this.showLabelInput(ownerFigure);
		}else if(targetE.ownerConnection){
			 this.removePoint(targetE.ownerConnection, targetE.index);
		}
	},
	
	/**
	 * 插入新折点.
	 */
	insertPoint:function(connection,idx,newPoint){
		idx = parseInt(idx);
		var shape = connection.getShape();  
		var p1 = shape[idx-1];
		var p2 =shape[idx];
		if(p1 && p1.x == p2.x){
			newPoint.x = p1.x;
		}else if(p1 && p1.y == p2.y){
			newPoint.y = p1.y;
		}else if (p2){
			newPoint.x = p2.x;
			newPoint.y = p2.y;
		}
		shape.splice(idx,0,newPoint);
		this.unSelection(connection);
		connection.setShape(shape);
		this.addSelection(connection);
	},
	/**
	 * 删除折点.
	 */
	removePoint:function(connection,idx){  
		idx = parseInt(idx);
		var shape = connection.getShape();
		if(idx>1 && idx < (shape.length -2)){
			if(idx+2 == (shape.length-1)){
				idx -=1;
			}
			if(idx-1 == 0){
				idx +=1;
			}
			var p1 = shape[idx-1],p2 = shape[idx],p3 = shape[idx+1]; 
			if((p1.x==p2.x && p1.y==p2.y)){ 
				shape.splice(idx-1,2);
			}else if((p2.x==p3.x && p2.y==p3.y)){ 
			    shape.splice(idx,2);
			}else{  
 				var point = this.calcuNewPoint(p1,p2,p3);
			    shape.splice(idx-1,3,point);
			} 
			this.unSelection(connection);
			connection.setShape(shape);
			this.addSelection(connection);
	  }
	},
	
	calcuNewPoint:function(p1,p2,p3){
		var p ={};
		if(p1.x==p2.x && p2.y==p3.y){
			p.x = p3.x;
			p.y = p1.y; 
		}else if(p1.y == p2.y && p2.x == p3.x){  
			p.x = p1.x;
			p.y = p3.y; 
		}else if(p1.x<p2.x && p2.y<p3.y){
			p.x = p1.x;
			p.y = p3.y; 
		}else if(p1.x>p2.x && p2.y<p3.y){
			p.x = p1.x;
			p.y = p3.y; 
		}else if(p1.x<p2.x && p2.y>p3.y){
			p.x = p1.x;
			p.y = p3.y; 
		}
		return p;
	},
	
	/**
	 * 获取当前折点的序号.
	 */
	getPointIndex:function(connection,point){
		var index = -1;
		var shape = connection.getShape();
		for(var i=0,l=shape.length;i<l;i++){
			if((i+1)<shape.length){
			  var flag = justep.graphics.Utils.containInLine(point.x,point.y,[{x:shape[i].x,y:shape[i].y},{x:shape[i+1].x,y:shape[i+1].y}]);		 
			  if(flag == true){
	             return i;
			  }
			}
		}
		return index ;
	},
	
	/**显示标签输入框**/
	showLabelInput:function(figure){
		return;
		this.setSelection(figure);
		var textNode = figure.rawFigure.textNode;
		var shape = figure.getShape();
		document.body.onselectstart="";
		this.labelChanging = true;
		var input = document.createElement("<textarea  style='border:1px solid;position:absolute;font:normal 12px 宋体, arial, serif;overflow:visible;word-wrap:normal'/>");
		this.dContainer.appendChild(input); 
		var width = textNode.offsetWidth+30;
		if(width<50){
			width = 50;
		}
		
		$(input).css({left:shape.x+shape.w/2-width/2,top:textNode.offsetTop,width:width});
		input.onmousedown =  function(){ window.event.cancelBubble=true;};
		input.onmouseup = function(){window.event.cancelBubble=true;};
		input.onmousemove = function(){window.event.cancelBubble=true;};
		input.onkeydown = function(){
			if(event.keyCode==13){
				if(event.altKey){
					var sel=document.selection.createRange(); 
					sel.text = "\r\n"; 
				}else{
					input.onblur();
				}
			}
			window.event.cancelBubble=true;
		};
	
		input.value = figure.getText().replaceAll("@br@","\r\n");
		input.focus();
		var r = input.createTextRange();      
	    r.moveStart("character",input.value.length);     
	    r.collapse(true);
	    r.select();
		var self = this;
		self.currentTextInput = input;
		input.onblur = function(){
			document.body.onselectstart=function(){return false;};
			var value = input.value;
			value = value.replaceAll("\r\n","@br@"); 
			if(figure.getText()!=value){
				var params = {
					eventType : "updateNodeName",
					jsFunc : "",
					nodeName : figure.modelData.name,
					nodeValue : value
				};
				figure.modelData["LABEL"]=value;
				figure.setText(value);
				if(self.updatePropUI){
                    self.updatePropUI("label",value);
				}
				self.dispatchEvent(params);
				self.fireFigureStyleChanged();
			}
			self.currentTextInput = null;
			self.labelChanging = false;
			self.dContainer.removeChild(input);
		}
		
	},
	
	/**根据dom节点获取所属图形对象. **/
	getOwnerFigure:function(targetE){  
		var p = targetE;
		while(p){
			var figure = p.ownerFigure;
			if(figure){
				return figure;
			}
			p = p.parentNode;
		}
	},
	/** 判断坐标点是否在画布滚动条上 **/
	_isInScrollBar:function(x,y){
		if((this.dContainer.scrollHeight!=this.dContainer.clientHeight && x>this.dContainer.clientWidth) 
				|| (this.dContainer.scrollWidth!=this.dContainer.clientWidth && y>this.dContainer.clientHeight)){
			 //alert(this.dContainer.scrollWidth+"=="+this.dContainer.clientWidth+"=y:="+y+"=="+this.dContainer.clientHeight);
			 return true;
		}
		return false;
	},
	
	/**
	 * 根据流程节点类型创建对应的图形。
	 */
	createProcessShape:function(modelData){
		//流程节点类型与图形的映射.
		var figureTypeMap = {businessActivity:'Rect',conditionActivity:'Triangular',connection:'Path',conditionBranch:'Rhombus',and:'Circle',xor:'Circle',start:'Circle',end:'Circle',autoActivity:'Trapezoid'};
		var type = modelData.type;
		if(!modelData.id){
			modelData.id = type+new Date().getTime();
		}
		var figure; 
		if(this.initData){
			$.extend(modelData,this.initData);
			this.initData = null;
		}
		if(type != 'connection'){ 
			figure = new justep.graphics.ProcessRect(this,modelData);
		}else{
			figure = new justep.graphics.ProcessConnection(this,modelData);
		}
 
		figure.isProcessShape = true;
		this.figures[figure.id] = figure;
		return figure;
	},
	
	/**
	 * 清除画布上的所有图型.
	 */
	clear:function(){
		this.undoManager.clear();
		this.clearSelection();
		for(var p in this.figures){
			this.figures[p].dispose();
		}
		this.figures = {};
	},
	
	/**
	 * 加载流程模型数据.
	 */
	loadData:function(modelData){
		this.clear();

		if (!modelData || modelData == '') {
			return;
		}
		this.version = modelData.version;
		this.modelData = modelData;
		var mainData = modelData.processMainData || {};
		var connections = [];
		
		//创建环节图形
		for (var p in mainData) { 
			var data = mainData[p];
			data.id = p; 
			if (data.style && data.type != 'connection') {
               this.createProcessShape(data);
			} else if (data.type == 'connection') {
				connections.push(data);
			}
		}
 
		//创建连接线图形
		for (var i = 0,l=connections.length;i<l;i++) {  
			var data = connections[i];
			var source = this.figures[data.sourceNode];
			var target = this.figures[data.targetNode];
			if (!source || !target) {  
				continue;
			}
			this.createProcessShape(data);
		}
 
		if(!this.version){//没有版本标识说明是旧的数据格式
			var figures = this.figures;
			for(var p in figures){
				var figure = figures[p];
				if(figure.type != 'connection'){
					figure.updatePortsPosition();
				}
			}
		}
	},
	
	/** 直接创建图形 **/
	createShape:function(config){
		config.parent = this.canvasElement;
	   return new justep[this.figureType][config.type](config);
	},

	/**选择菜单上的图形类型时调用的方法**/
	selectProcessItemType:function(itemType,fromPopuMenu,initData){ 
		if(!itemType){
			this.initData = null;
			this.processItemType = null;
			this.dContainer.style.cursor = "default";  
			return;
		}
		var validateMsg = this.newShapeValidate(itemType);
		if(validateMsg){  
			this.dContainer.style.cursor = "default";  
			alert(validateMsg);
			return;
		}
		this.initData = initData;
		this.processItemType = itemType;
		this.dContainer.style.cursor = itemType?"crosshair":"default";  
		if(itemType && itemType != 'connection' && this.selections.length>0){
			this.autoCreateShape(itemType);
			return;
		}
		if(itemType && fromPopuMenu){
			if(this.popuPos){ //右键菜单创建
				this.dContainer.style.cursor = "default";  
				this.processItemType = null;
				var figure = this.createProcessShape({type:itemType,style:{shape:{x:this.popuPos.x-5,y:this.popuPos.y-5}}}); 
				this.setSelection(figure);
			}
		}
	},
	
	/**自动创建图形:当前有选择的非连接线图形时，点菜单上的图形类型时，直接在选择的图形指定的方向上创建创建图形以及连接线**/
	autoCreateShape:function(itemType){
		var outFigure,outPort,direction = this.direction || 's';
		for(var i = 0,l = this.selections.length;i<l;i++){
			if(this.selections[i] instanceof justep.graphics.ProcessRect && this.selections[i].type != 'end'){
				outFigure = this.selections[i];
				if(outFigure.type == 'conditionBranch'){
					if(!this.direction){
						direction = "w";
						outPort = outFigure.getPort('outPort',"w");
						if(outPort.hasConnection()){
							direction = "e";
							outPort = outFigure.getPort('outPort',"e");
						}
					}else{
						outPort = outFigure.getPort('outPort',direction);
					}
					
				}else{
					outPort = outFigure.getPort('outPort',direction);
				}
				
				if(!outPort){
					outPort = outFigure.getPort('outPort');
				}
				if(outPort){
					break;
				}
			}
		}
		if(outPort){
			var bound1 = outFigure.getBound();
			this.undoManager.startBatch();
			//自动在选择的图形下创建图形
			var inFigure = this.undoManager.newAction({type:itemType,style:{shape:{x:bound1.x,y:bound1.y}}}); 
            var bound2 = inFigure.getBound();
             
			var c1 = outFigure.getCenter(); 
			var c2 = inFigure.getCenter(); 
			var x = bound1.x,y=bound1.y,offset = 25,inDirection;
			switch(direction){
			case 'n':
				y -= (bound2.h +offset);
				x -= (c2.x - c1.x);
				inDirection = 's';
				break;
			case 'e':
				x += (bound1.w+offset);
				y -= (c2.y - c1.y);
				inDirection = 'w';
				break;
			case 's':
				y += (bound1.h+offset);
				x -= (c2.x - c1.x);
				inDirection = 'n';
				break;
			case 'w':
				x -= (bound2.w + offset);
				y -= (c2.y - c1.y);
				inDirection = 'e';
			}
			var shape = inFigure.getShape();
			shape.x = Math.max(x,9);//边界不能超出左边界，上边界
			shape.y = Math.max(y,9);
			inFigure.setShape(shape);
			this.fireAddFigureEvent(inFigure);
            var inPort = inFigure.getPort('inPort',inDirection);
            if(!inPort){
            	inPort = inFigure.getPort('inPort');
            }
            if(inPort){
            	//自动创建连接线
           	    var connection = this.undoManager.newAction({type:"connection",sourceNode:outPort.owner.id,targetNode:inPort.owner.id,style:{outPortDir:outPort.direction,inPortDir:inPort.direction,shape:[outPort.getCenter(),inPort.getCenter()]}});//this.createProcessShape({type:"connection",style:{shape:[outPort.getCenter(),inPort.getCenter()]}});
			     //绑定端口
           	    // connection.bindPort(outPort,'outPort');
           	     //connection.bindPort(inPort,'inPort',true);   
			    this.fireAddFigureEvent(connection);
            }
			this.processItemType = null;
			this.dContainer.style.cursor = "default"; 
			this.setSelection(inFigure);
			this.undoManager.endBatch();
		}
	},
	
	/**图形创建前的校验**/
	newShapeValidate:function(type){
		var figures = this.figures;
		if(type == 'start' || type == 'end'){
			for(var p in figures){ 
				if(figures[p].type == type){
					return "只能创建一个开始或者结束节点！";
				}
			}
		}
	},
 
	/**
	 * 获得所有的连接线
	 */
	getAllConnections : function(sortBySN) {
		var conns = [];
		for (var p in this.figures) {
			if (this.figures[p].type == 'connection') {
				conns.push(this.figures[p]);
			}
		}
		return conns;
	},
	
	/** 删除自定义折点标识 **/
	removeCusPointFlag:function(connection){
		var shape = connection.getShape();
		for(var i =0,l=shape.length;i<l;i++){
			if(shape[i].cusMove){
				delete shape[i].cusMove
			}
		}
	},
	
	/**
	 * 把直角折线之间的交点转换成弧形.
	 */
	transInterPointToArc : function() {
		this.arcs = {};
		var connections = this.getAllConnections(true);    
		for (var ii = 0, l = connections.length; ii < l; ii++) {
			var figure = connections[ii];
			var shape = figure.getShape();
			var hasInterPoint = this.calcuInterPoint(figure, ii + 1,
					connections);
			if (hasInterPoint) {
				figure.setShape(shape);
			}
		}
	},
	/** 获取线段在折线中的方向 **/
	getLineDirection : function(p1, p2) {
		if (p1.x == p2.x) {
			return (p2.y - p1.y > 0)
					? justep.PortDirection.DOWN
					: justep.PortDirection.UP;

		} else if (p1.y == p2.y) {
			return (p2.x - p1.x > 0)
					? justep.PortDirection.RIGHT
					: justep.PortDirection.LEFT;
		}
	},
	arcR : 4,
	/**
	 * 计算直角折线的交点.
	 */
	calcuInterPoint : function(figure, startIdx, connections) {
		var arcR = this.arcR;
		var hasInterPoint = false; // 是否有交点
		var points = figure.getShape();
		var l = connections.length;
		for (var j = 0; j < points.length - 1; j++) {
			if (points[j].attach) {
				points[j].attach = null;
				delete points[j].attach;
				hasInterPoint = true;
			}
			var minX = Math.min(points[j].x, points[j + 1].x), minY = Math.min(
					points[j].y, points[j + 1].y);
			var maxX = Math.max(points[j].x, points[j + 1].x), maxY = Math.max(
					points[j].y, points[j + 1].y);
			var dir = this.getLineDirection(points[j], points[j + 1]); // 方向
			for (var jj = startIdx; jj < l; jj++) { // 计算与下层折线的交点
				var tempPoints = connections[jj].getShape();
				if (points[j].x == points[j + 1].x) { // 竖线
					for (var n = 0; n < tempPoints.length - 1; n += 1) {
						if (tempPoints[n].y == tempPoints[n + 1].y
								&& (points[j].x > Math.min(tempPoints[n].x,
										tempPoints[n + 1].x) && points[j].x < Math
										.max(tempPoints[n].x,
												tempPoints[n + 1].x))
								&& (tempPoints[n].y > minY && tempPoints[n].y < maxY)) {
							points[j].attach = points[j].attach || [];
							var x = points[j].x, y = tempPoints[n].y; // 交点
							var s = x + " " + (y - arcR) + " C" + (x - arcR)
									+ " " + (y - arcR) + " " + (x - arcR) + " "
									+ (y + arcR) + " " + x + " " + (y + arcR); // 弧形路径
							if (dir == justep.PortDirection.UP) {
								s = x + " " + (y + arcR) + " C" + (x - arcR)
										+ " " + (y + arcR) + " " + (x - arcR)
										+ " " + (y - arcR) + " " + x + " "
										+ (y - arcR); // 弧形路径
							}
							points[j].attach.push({
								v : s,
								pos : y,
								x : x,
								y : y
							});
							hasInterPoint = true;
						}
					}
				} else if (points[j].y == points[j + 1].y) { // 横线
					for (var n = 0; n < tempPoints.length - 1; n += 1) {
						if (tempPoints[n].x == tempPoints[n + 1].x
								&& (points[j].y > Math.min(tempPoints[n].y,
										tempPoints[n + 1].y) && points[j].y < Math
										.max(tempPoints[n].y,
												tempPoints[n + 1].y))
								&& (tempPoints[n].x > minX && tempPoints[n].x < maxX)) {
							points[j].attach = points[j].attach || [];
							var x = tempPoints[n].x, y = points[j].y; // 交点
							var s = (x - arcR) + " " + y + " C" + (x - arcR)
									+ " " + (y - arcR) + " " + (x + arcR) + " "
									+ (y - arcR) + " " + (x + arcR) + " " + y; // 弧形路径
							if (dir == justep.PortDirection.LEFT) {
								s = (x + arcR) + " " + y + " C" + (x + arcR)
										+ " " + (y - arcR) + " " + (x - arcR)
										+ " " + (y - arcR) + " " + (x - arcR)
										+ " " + y;
							}
							points[j].attach.push({
								v : s,
								pos : x,
								x : x,
								y : y
							});
							hasInterPoint = true;
						}
					}
				}
			}//
			if (points[j].attach) {
				var attach = points[j].attach.sort(function(p1, p2) {
					if (dir == justep.PortDirection.UP
							|| dir == justep.PortDirection.LEFT) {
						return p1.pos > p2.pos ? -1 : 1;
					}
					return p1.pos > p2.pos ? 1 : -1;
				});
				var values = [];
				for (var i = 0; i < attach.length; i++) {
					values.push(attach[i].v);
				}
				points[j].attach = values.join(" L");
			}

		}
		return hasInterPoint;
	},
	
	/**
	 * 执行选择.
	 */ 
	executeSelect : function(e, figure) {  
		if (!figure) { 
			return;
		}
		if(this.labelChanging){
			return;
		}
		var count = this.selections.length;   
		if (e.type == 'mousedown') {
			if (!e.ctrlKey && count <= 1) { 
				// *非Ctrl键的单选*/
				this.setSelection(figure);
			}
		} else {   
			if (e.ctrlKey) { 
				if (figure.isSelected()) {
					this.unSelection(figure);
				} else {
					// *按下Ctrl键进行多选*/
					this.addSelection(figure);
				}
			} else if (count > 1 && e.button != 2) { 
				this.setSelection(figure);
			}
		}
	},
	/**把图形加入选择**/
	addSelection:function(target,noFireEvent){
		if(!target.isSelected()){
			target.setSelection();
	        this.selections.push(target);
	        if(!noFireEvent){
	        	this.fireSelectChangedEvent("add",target);	        	
	        }
		}
	},
	
	/**设置选择一个图形**/
	setSelection:function(target){
		 this.clearSelection();
		 this.addSelection(target);
	},
	
	/**取消选择一个图形**/
	unSelection:function(target){ 
		var flag = false;
		for(var i = 0;i<this.selections.length;i++){
			if(this.selections[i] == target){
				this.selections[i].clearSelection();
				this.selections.splice(i,1);
				flag = true;
				break;
			}
		} 
		if(flag){
			this.fireSelectChangedEvent("unselect");
		}
	}, 
	
	/**清除所有图形的选择**/
	clearSelection:function(){
		for(var i = 0,l=this.selections.length;i<l;i++){
			this.selections[i].clearSelection();
		}
		this.selections = [];
	},
	
	/**全选**/
	selectAll:function(){
		designer.clearSelection();
		var figures = designer.figures;
		var lastFigure ;
		for (var p in figures) {
			var figure = figures[p];
			this.addSelection(figures[p],true);
			if(figure.type != 'connection'){
				lastFigure = figure;
			}
		}
		if(lastFigure)
			this.fireSelectChangedEvent("add",lastFigure);	   
	},
	
	/**删除选择的图形**/
	removeSelections:function(){
		var removeids = [];
		var removetypes = [];

		this.deleteFigures = [];
		var selections = this.selections;
		var connections = {};
		for (var i=0,l=selections.length;i<l;i++) { 
			if(selections[i].status){
				alert("当前环节不允许删除！");
				return;
			}
		}
		var ids = [];
		//删除非连接线的图形
		for (var i=0,l=selections.length;i<l;i++) { 
			ids.push(selections[i].id);
		}
		this.undoManager.removeAction(ids);
		this.selections = [];

		var params = {
			eventType : "figureRemoved",
			jsFunc : "",
			removeids : removeids.join(","),
			types : removetypes.join(","),
			styles : this.getFigureStyles()
		};
		this.dispatchEvent(params);
	},
	
	/***触发图形样式改变事件**/
	fireFigureStyleChanged:function(){
	   	this.startCache();
		var params = {
				eventType : "figureChanged",
				jsFunc : "",
				styles : this.getFigureStyles(),
				oldStyles:this.oldStyle
		};
		this.dispatchEvent(params);
	   	this.endCache();
    },
    
    /**触发图形选择事件**/
	fireSelectChangedEvent : function(changeType, figure) {
		if(!figure){
			if(this.selections.length>0){
				figure = this.selections[0];
			}
		}
		var params = {
			eventType : "selectChanged",
			jsFunc : "",
			selectType : figure?figure.getType():"",
			selectFigure : figure?figure.getName():""
		};
		this.dispatchEvent(params);
	},
	
	/**触发添加图形事件**/
	fireAddFigureEvent:function(figure){
		var params = {
			eventType : "figureAdded",
			jsFunc : "",
			styles:this.getFigureStyles()
		}; 
		$.extend(params,figure.getModelData());
		this.dispatchEvent(params);
	},
	
	startCache:function(){
		this.dispatchEvent({eventType : "startCache"});
	},
	endCache:function(){
		this.dispatchEvent({eventType : "endCache"});
	},
	setProcessFile : function(fileName) {
		this.processFile = fileName || '';
	},
	
	/**获取图形的样式信息**/
	getFigureStyles : function() {
		var styles = {};
		var figures = this.figures;
		for (var p in figures) {
			var figure = figures[p];
			var name = figure.getName();
			
			if (figure.type != 'connection') {
				styles[name] = { shape : figure.getShape(), LABEL:figure.getText()};
				
			}else{
				styles[name] = {
						LABEL:figure.getText(),
						outPortDir : figure.outPort.direction,
						inPortDir : figure.inPort.direction,
						targetNode :figure.inPort.owner.getName(),
						sourceNode : figure.outPort.owner.getName(),
						shape : figure.getShape()
					};
			}
		} 
		var fp = this.processFile.replaceAll('\\\\','/');
		styles = {
			version:"2", //加入新版本标识
			shapeStyle : styles,
			scale : this.scale,
			processFile: fp.substring(fp.lastIndexOf("/")+1)
		};
		return JSON.stringify(styles);
	},
	getFigureStyle:function(figure){
		var name = figure.getName();
		
		if (figure.type != 'connection') {
			return { shape : $.extend({},figure.getShape()), LABEL:figure.getText()};
			
		}else{  
			return {
					LABEL:figure.getText(),
					outPortDir : figure.outPort.direction,
					inPortDir : figure.inPort.direction,
					targetNode :figure.inPort.owner.getName(),
					sourceNode : figure.outPort.owner.getName(),
					shape : $.extend([],figure.getShape())
				};
		}
	},
	/** 选择流程根节点 **/
	selectProcessRoot:function(){
		var params = {
				eventType : "selectChanged",
				jsFunc : "",
				selectType : "",
				selectFigure : ""
			};
	   this.dispatchEvent(params);
	},
	
	/**设置对齐**/
	alignFigures : function(direct) {
		var selections = this.selections;
		if (selections.length < 2)
			return;
		var center = {
			x : 1800,
			y : 1800
		};
		for (var i = 0,l=selections.length;i<l;i++) {
			var figure = selections[i];
			if (figure instanceof justep.graphics.ProcessRect) {
				if (direct == 'h') {
					if (center.y > figure.getCenter().y) {
						center = figure.getCenter();
					}
				} else if (direct == 'v') {
					if (center.x > figure.getCenter().x) {
						center = figure.getCenter();
					}
				}
			}
		}
		var contents = [];
		this.undoManager.startBatch();
		for (var i = 0,l=selections.length;i<l;i++) {
			var figure = selections[i];
			if (figure instanceof justep.graphics.ProcessRect) {
				var shape = $.extend({},figure.getShape());
				contents.push({
					figureId : figure.id,
					value : $({}, figure.getBound())
				});
				if (direct == 'h') {
					shape.y = center.y - shape.h / 2;
				} else if (direct == 'v') {
					shape.x = center.x - shape.w / 2;
				}
				this.undoManager.changeShapeAction(figure.id,shape);
				//figure.setShape(shape);
			}
		}
		this.undoManager.endBatch();
		this.fireFigureStyleChanged();
	},
	
	/**销毁画布**/
	dispose:function(){
		this._unStallListener();
		this.clear();
		this.dContainer.innerHTML = "";
		this.dContainer.parentNode.removeChild(this.dContainer);
		for(var p in this){
			this[p]= null;
		}
	}
}

/**自动对齐**/
function autoAlign(currentBound/*当前区域*/,otherBounds/*数组，其他的区域*/,canvas){
	if(!otherBounds || otherBounds.length == 0){
		  return currentBound;
	}
	if(!canvas)canvas = document.body;
	if(!canvas.valignLine){
		var div = $("<div style='left:0px;top:0;display:none;overflow:hidden;border-top:1px dotted green;position:absolute;width:100%;height:1px;'/>").appendTo(canvas)[0];;
		//canvas.appendChild(div);
		canvas.valignLine = div;
	}
	if(!canvas.halignLine){
		var div = $("<div style='top:0px;display:none;overflow:hidden;border-left:1px dotted green;position:absolute;width:1px;height:100%;'/>").appendTo(canvas)[0];
		//canvas.appendChild(div);
		canvas.halignLine = div;
	}
	
	var minVOffset ={offset:10,bound:null,align:null};
	var minHOffset = {offset:10,bound:null,align:null};
	for(var i = 0;i<otherBounds.length;i++){
		var b2 = otherBounds[i];
		var top_top = Math.abs(currentBound.y-b2.y);
		
		if(top_top<minVOffset.offset){
			minVOffset.offset = top_top;
			minVOffset.bound = b2;
			minVOffset.align = "top";
		}
		if(Math.abs(b2.h-currentBound.h)>2){//高度不相同才比较
			var vcenter_vcenter = Math.abs(currentBound.y+currentBound.h/2-b2.y-b2.h/2);
			if(vcenter_vcenter<minVOffset.offset){
				minVOffset.offset = vcenter_vcenter;
				minVOffset.bound = b2;
				minVOffset.align = "vcenter";
			}
			var bottom_bottom = Math.abs(currentBound.y+currentBound.h-b2.y-b2.h);
			if(bottom_bottom<minVOffset.offset){
				minVOffset.offset = bottom_bottom;
				minVOffset.bound = b2;
				minVOffset.align = "bottom";
			}
		}
		
		var left_left = Math.abs(currentBound.x-b2.x);
		if(left_left<minHOffset.offset){
			minHOffset.offset = left_left;
			minHOffset.bound = b2;
			minHOffset.align = "left";
		}
		if(Math.abs(b2.w-currentBound.w)>2){//宽度不相同才比较
			var hcenter_hcenter = Math.abs(currentBound.x+currentBound.w/2-b2.x-b2.w/2);
			if(hcenter_hcenter<minHOffset.offset){
				minHOffset.offset = hcenter_hcenter;
				minHOffset.bound = b2;
				minHOffset.align = "hcenter";
			}
			var right_right = Math.abs(currentBound.x+currentBound.w-b2.x-b2.w);
			if(right_right<minHOffset.offset){
				minHOffset.offset = right_right;
				minHOffset.bound = b2;
				minHOffset.align = "right";
			}
		}

	}
	//TODO 有偏移量处理
	if(minVOffset.bound){ 
		if(minVOffset.align=="top"){
			currentBound.y = minVOffset.bound.y;
			canvas.valignLine.style.top = (minVOffset.bound.y)+"px";;
		}else if(minVOffset.align=="vcenter"){
			currentBound.y = minVOffset.bound.y+minVOffset.bound.h/2-currentBound.h/2;
			canvas.valignLine.style.top = (minVOffset.bound.y+minVOffset.bound.h/2)+"px";;
		}else{//bottom
			currentBound.y = minVOffset.bound.y+minVOffset.bound.h-currentBound.h;
			canvas.valignLine.style.top = (minVOffset.bound.y+minVOffset.bound.h)+"px";;
		}
		canvas.valignLine.style.left = canvas.scrollLeft+"px";
		canvas.valignLine.style.display="block";
	}else{
	   canvas.valignLine.style.display="none";
	}
	
	if(minHOffset.bound){ 
		if(minHOffset.align=="left"){
			currentBound.x = minHOffset.bound.x;
			canvas.halignLine.style.left = (minHOffset.bound.x)+"px";;
		}else if(minHOffset.align=="hcenter"){
			currentBound.x = minHOffset.bound.x+minHOffset.bound.w/2-currentBound.w/2;
			canvas.halignLine.style.left = (minHOffset.bound.x+minHOffset.bound.w/2)+"px";;
		}else{//right
			currentBound.x = minHOffset.bound.x+minHOffset.bound.w-currentBound.w;
			canvas.halignLine.style.left = (minHOffset.bound.x+minHOffset.bound.w)+"px";;
		}
		canvas.halignLine.style.top = canvas.scrollTop+"px";
		canvas.halignLine.style.display="block";  
	}else{
	 	canvas.halignLine.style.display="none";
	}
	return currentBound;;
}

/**隐藏自动对齐线条**/
function hiddenAlignLine(canvas){
	if(!canvas)canvas = document.body;
	if(canvas.valignLine)canvas.valignLine.style.display="none";
	if(canvas.halignLine)canvas.halignLine.style.display="none";
}

justep.graphics.ProcessWebCanvas = function(config){
	this.activities = config.activities;
	this.loadProcess = config.loadProcess;
	this.loadTemplate = config.loadTemplate;
	this.selectExecutor = config.selectExecutor;
	this.toolboxItems = config.toolboxItems;
	this.undoManager = justep.graphics.UndoRedoManager;
	this.undoManager.designer = this;
	justep.graphics.ProcessCanvas.call(this,config);
}
justep.graphics.ProcessWebCanvas.prototype = new justep.graphics.ProcessCanvas();
justep.graphics.ProcessWebCanvas.prototype.nameMap = {
		    "start":"start",
		    "end":"end",
			"place":"place",
			"arc":"connection",
			"connection":"connection",
			"and-activity":"and",
			"xor-activity":"xor",
			"business-activity":"businessActivity",
			"if-else-activity":"conditionBranch",
			"condition-activity":"conditionActivity",
			"auto-activity":"autoActivity"};
justep.graphics.ProcessWebCanvas.prototype._init = function(){
	var parent = document.getElementById(this.id);
	//if(!this.dContainer){ 
		this.initUI(parent,this);
		//this.dContainer = document.getElementById(this.id);
	//}
	if(this.figureType == 'vml'){
//		document.namespaces.add("v","urn:schemas-microsoft-com:vml");
//		this.canvasElement =document.createElement('<v:group style="WIDTH: 2000px; POSITION: absolute; HEIGHT: 3000px;border:0px solid green;" coordsize="2000,3000">');
//		var rect = document.createElement('<v:rect style="LEFT: 0px; WIDTH: 2000px; TOP: 0px; HEIGHT: 3000px" coordsize="21600,21600" filled="f" stroked="f"></v:rect>');
//		this.canvasElement.appendChild(rect);
		
		document.namespaces.add("v", "urn:schemas-microsoft-com:vml");
		this.canvasElement = document.createElement('v:group');
		this.canvasElement.style.cssText = "WIDTH: 100px; POSITION: absolute; HEIGHT: 100px;";
		this.canvasElement.setAttribute("coordsize","100,100");
		
		var rect = justep.vml.Shape.prototype.createVmlElement(this.canvasElement,"v:rect","LEFT: 0px; WIDTH: 100px; TOP: 0px; HEIGHT: 100px",{filled:'f',stroked:'f'});//document.createElement('<v:rect style="LEFT: 0px; WIDTH: 100px; TOP: 0px; HEIGHT: 100px" coordsize="21600,21600" filled="f" stroked="f"></v:rect>');
		//this.canvasElement.appendChild(rect);
		this.dContainer.appendChild(this.canvasElement);
		
	}else{
		//this.canvasElement = document.getElementById("svgc");
		var svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
		svg.setAttribute("width", 4000);
		svg.setAttribute("height", 2000);
		svg.setAttribute("version", "1.1%");
		this.canvasElement = svg;
		this.dContainer.appendChild(svg);
	}
	this.dContainer.appendChild(this.canvasElement);
 
	this._installListener(this);
	if(this.activities){
	   this.initToolbox(this.activities);
	}
	var self = this;
	$(window).bind('resize',function(){  
		self.layout();
	});
}
justep.graphics.ProcessWebCanvas.prototype.setLoadTmplBtnVisible = function(visible){
	 $("button[name='loadTemplate']",this.dContainer.parentNode)[visible?"show":"hide"]();
}
justep.graphics.ProcessWebCanvas.prototype.initUI = function(parent,self){
	var sToolbar = '';
	if(this.toolbar){
		for(var p in this.toolbar){
			var toolItem = this.toolbar[p];
			sToolbar += '<button onclick="'+toolItem.handler+';">'+toolItem.text+'</button>'
		}
	}
    var html=  '<div style="position:relative;overflow:auto;">'+
		    '<div class="canvas-toolbar">'+sToolbar+
		    '<button name="loadModel" class="tool-item" style="width:92px;"><span class="icon load-process" >加载流程图</span></button>'+
		    '<button name="loadTemplate" class="tool-item" style="width:80px"><span class="icon load-template">加载模板</span></button>'+
		    '<button name="importTemplate" class="tool-item" ><span class="icon load-template">导入</span></button>'+
		    '<button name="viewSource" class="tool-item" style=""><span class="icon load-template">源码</span></button>'+
		    '<button name="copy" class="tool-item" style="text-align:left;"><span class="icon copy">复制</span></button><button name="delete" class="tool-item"><span class="icon remove">删除</span></button>'+
		    '<button name="hAlign" class="tool-item" style="width:82px"><span class="icon h-align">水平对齐</span></button><button name="vAlign" class="tool-item" style="width:82px"><span class="icon v-align">垂直对齐</span></button>'+
		    '<button name="undo" class="tool-item" disabled="true"><span class="icon undo">撤销</span></button><button name="redo" disabled="true" class="tool-item"><span class="icon redo">重做</span></button>'+
		    '<button name="viewSoudce" class="tool-item" style="width:70px;display:none;">查看源码</button><button name="reload" class="tool-item" >刷新</button><span style="padding-left:10px;"></span><label style="font-size:10pt;padding-right:5px;">已流转</label><span style="width:15px;height:22px;display:inline;background:green;padding-left:30px;padding-top:3px;">&nbsp;</span><label style="font-size:10pt;padding-right:5px;padding-left:10px;">当前</label><span style="width:15px;height:22px;display:inline;background:#0080FF;padding-left:30px;padding-top:3px;">&nbsp;</span></div>'+   
			'<div class="mydesigner" style="-moz-user-select:none;border:1px solid #8DB2E3;position:relative; width: 1000px; height:800px; ; overflow: auto" >'+//background-image: url(images/grid_10.png)
			'</div>'+
			'<div class="toolbox" style="width:150px;height:800px;position:absolute;top:25px;left:999px;border:1px solid #8DB2E3;overflow:hidden;background:white;overflow:auto;">'+
			'    <div class="toolbox-title"><span>环节列表</span></div>'+
			'    <ul class="toolbox-items">'+
			'       <li><a href="javascript:void(0);" onfocus="this.blur();" class="cancel-selected"  title="activity1">取消选择</a></li>'+
			'       <li style="padding:0;margin:0;font-size:0;position:relative;height:12px;position:relative;"><div style="position:absolute;top:8px;left:0;border-top:1px dotted #8DB2E3;font-size:0;height:0px;width:100%;"></div></li>'+	
			       '<li style="padding:0;margin:0;position:relative;height:18px;position:relative;"><div style="position:absolute;top:8px;left:0;border-top:1px dotted #8DB2E3;font-size:0;height:0px;width:100%;"></div></li>'+
			       '<li><a href="javascript:void(0);" onfocus="this.blur();" class="start" label="开始" >开始</a></li>'+
			       '<li><a href="javascript:void(0);" onfocus="this.blur();" class="and-activity" label="and" title="conditionactivity1">and环节</a></li>'+
			       '<li><a href="javascript:void(0);" onfocus="this.blur();" class="xor-activity"  label="xor" title="conditionactivity1">xor环节</a></li>'+
			       '<li><a href="javascript:void(0);" onfocus="this.blur();" class="connection"  title="connection">连接</a></li>'+
			       '<li><a href="javascript:void(0);" onfocus="this.blur();" class="end" label="结束" >结束</a></li>'+
			    '</ul><textarea id="console" style="display:none;width:100%;height:200px;"></textarea>'+			    
			'</div>'+
			'<div class="prop-area" style="height:100px;border:1px solid #8DB2E3;">'+
			'    <div class="toolbox-title"><span>属性列表</span></div>'+
			'    <div class="prop-list">'+
			    '</div>'+	
		    '</div>'+
		'</div>';
	 var container = $(html).appendTo(parent || document.body).css({width:"100%",height:"100%"});
 
	 this.dContainer = $(".mydesigner",container)[0];
	 this.dContainer.style.cursor = "default";
	 this.dContainer.onselectstart= function(){return false;}
	 $(".canvas-toolbar button",container).bind("click",function(){
		   var name = $(this).attr('name');
		   if(name == 'setProp'){
			  
		   }else if(name == 'loadModel'){
			   if(self.loadProcess){
			    	for(var p in self.figures){
			    		if(!confirm("加载流程图将会覆盖当前内容，是否要继续？")){
			    			return;
			    		}
			    		break;
			    	} 
                  self.setData(self.loadProcess.call(window));
			   }
		   }else if(name=='loadTemplate'){
			   if(self.loadTemplate){
			    	for(var p in self.figures){
			    		if(!confirm("加载模板将会覆盖当前内容，是否要继续？")){
			    			return;
			    		}
			    		break;
			    	} 
                 self.setData(self.loadTemplate.call(window));
			   }
		   }else if(name == 'importTemplate'){
			   self.showImportDlg(self);
		   }else if(name=='viewSoudce'){
			   self.showPropertyDlg(self,self.getData());
		   }else if(name == 'copy'){
			   self.copyFigure();
		   }else if(name == 'delete'){
			   self.removeSelections();
		   }else if(name == 'trace'){
			   var from = self.figures["deptActivity"];
			   var to = self.figures["leadActivity"];
			   var trace = self.getTrace(from,to);
			   self.setFillColor(trace,"green");
		   }else if(name == 'reload'){
			   var data = self.getData();
			   self.setData(data);
		   }else if(name == 'vAlign'){
			   self.alignFigures("v");
		   }else if(name == 'hAlign'){
			   self.alignFigures('h');
		   }else if(name == 'undo'){
			   self.undoManager.undo();
		   }else if(name == 'redo'){
			   self.undoManager.redo();
		   }
	 }).bind('mouseover',function(){
		 $(this).addClass("tool-item-over");
	 }).bind('mouseout',function(){
		 $(this).removeClass("tool-item-over");
	 });
	 this.layout();
}
justep.graphics.ProcessWebCanvas.prototype.copyFigure = function(){
	var figures = [];
	this.undoManager.startBatch();
	for(var i = 0;i<this.selections.length;i++){
		var selection = this.selections[i];
		if(selection.type != 'connection'){ 
			 var bound = selection.getBound();
			 var text = selection.getText();
			 var xmlNode = selection.modelData.xmlNode;
			 if(xmlNode){
				 var xmlDoc = $.parseXml($(xmlNode).xml());
				 xmlNode = xmlDoc.firstChild;
			 } 
			 figures.push(this.undoManager.newAction({xmlNode:xmlNode,LABEL:text,type:selection.type ,style:{shape:{x:bound.x+30,y:bound.y+20,w:bound.w,h:bound.h}}})); 
		}
	}
	this.undoManager.endBatch();
	if(figures.length>0){
		this.clearSelection();
		for(var i = 0;i<figures.length;i++){
            this.addSelection(figures[i]);
		}
	}
}
/**构建属性栏**/
justep.graphics.ProcessWebCanvas.prototype.buildProperty = function(figure){
	var propContainer = $(".prop-area>.prop-list",this.dContainer.parentNode);
	$("select,input",propContainer).unbind(); 
	if(!figure){
		propContainer.html(""); 
		return;
	}
	var htmlBuf = ["<table cellspacing=0 cellpadding=0 style='font-size:10pt;'><tr>"];
	
	var self = this;
	var label = figure.getText()
	var xmlNode = figure.modelData.xmlNode;
	var trueFalseOutput = [];
	htmlBuf.push('<td>标签：</td><td style="height:22px;"><input name="label"  value="'+label+'" class="prop-input" style="margin-right:15px;" ></td>');
	propContainer.html(htmlBuf.join("")); 
	if(figure.type == 'businessActivity'){
		var executeRule = $(">execute-rule",xmlNode);
		var executorRange = $(">executor-range",executeRule);
		var executeMode = $(">task-relation-value>item[relation='sExecuteMode']",executeRule);
		var advanceRule = $(">advance-rule",xmlNode);
		var customizedEnabled = advanceRule.attr("customized-enabled");
		var dRangeExpr = executorRange.attr("d-range-expr");
		var rangeExpr = executorRange.attr("range-expr");
		var executeModeName = executeMode.text();

		htmlBuf.push('<td>允许定制：</td><td><input name="customized-enabled" type="checkbox"  style="margin-right:15px" ></td>');
		htmlBuf.push('<td style="width:80px;">执行者模式：</td><td style="height:24px;"><select name="executeMode"  style="margin-right:15px ">');
		htmlBuf.push('<option value="\'temPreempt\'">抢占</option>');
		htmlBuf.push('<option value="\'temSequential\'" >顺序</option>');
		htmlBuf.push('<option value="\'temSimultaneous\'" >同时</option>');
		htmlBuf.push('</select></td>');
		htmlBuf.push('<td style="width:60px;">执行者：</td><td style="height:22px;"><input name="executor-range" class="prop-input" readonly  ></td><td><input class="tool-item" type="button" value="选择..." name="rangeExprSelect" style="height:20px;padding:0;margin:0"></td>');
		htmlBuf.push('</tr></table>');
		
		propContainer.html(htmlBuf.join("")); 
		$("input[name='rangeExprSelect']",propContainer).bind('click',function(){
		    if(self.selectExecutor){
		    	var executorRange = $(">execute-rule>executor-range",xmlNode);
				var dRangeExpr = executorRange.attr("d-range-expr");
				dRangeExpr = eval("("+dRangeExpr+")")
				var rangeExpr = executorRange.attr("range-expr");	    	
		    	self.selectExecutor.call(window,self,xmlNode,{items:dRangeExpr||[],expr:rangeExpr});
		    }
		});
		this.updatePropUI("customized-enabled", customizedEnabled);
		this.updatePropUI("executeMode", executeModeName);
		this.updatePropUI("executor-range", this.getExecutorDispay(dRangeExpr));
	}else if(figure.type == 'conditionBranch'){
		var data = [];
		var cons = figure.getBindingConnections();  
		for(var i=0;i<cons.length;i++){
			var con = cons[i];
			var targetFigure = con.outPort.owner;
			if(targetFigure == figure){
				var inPutFigure = con.inPort.owner;
				var name = inPutFigure.getName();
				data.push([name,inPutFigure.getText()||name]);
			}
		}
		trueFalseOutput = data;
		htmlBuf.push('<td>条件为真：</td><td><select name="true-output" style="margin-right:20px">');
		for(var i = 0;i<data.length;i++){
			htmlBuf.push('<option value="'+data[i][0]+'" >'+data[i][1]+'</option>');
		}
		htmlBuf.push('</select></td>');
		htmlBuf.push('<td>条件为假：</td><td><select name="false-output" style="margin-right:20px">');
		for(var i = 0;i<data.length;i++){
			htmlBuf.push('<option value="'+data[i][0]+'" >'+data[i][1]+'</option>');
		}
		htmlBuf.push('</select></td>');
		htmlBuf.push('</tr></table>');
		propContainer.html(htmlBuf.join("")); 
		this.updatePropUI("true-output", $('true-output',xmlNode).attr("unit"));
		this.updatePropUI("false-output", $('false-output',xmlNode).attr("unit"));
	}else{
		htmlBuf.push('</tr></table>');
		propContainer.html(htmlBuf.join("")); 
	}
	if(figure.status == 'finished'){
		$("select,input",propContainer).attr("disabled","true");
	}else{
		$("select,input",propContainer).bind('change',function(){
			  var input = $(this);
			  self.updatePropertyFromUI(figure, input);
		});		
	}
}

/**从属性输入框中把值更新到模型中**/
justep.graphics.ProcessWebCanvas.prototype.updatePropertyFromUI = function(figure,input){
	  var xmlNode = figure.modelData.xmlNode;
	  var name = input.attr("name");
	  var value = input.val();
	  if(name == 'label'){
		  figure.setText(value);  
	  }else if(name == 'executeMode'){ 
		 this.setExecuteRuleProp(name,value);
	  }else if(name == 'customized-enabled'){  
		 this.setExecuteRuleProp(name,input.attr('checked'));
	  }else if(name == 'true-output' || name == 'false-output'){
		  var otherName = name=='true-output'?'false-output':'true-output';
		  var conText = name=='true-output'?'是':'否';
		  $(name,xmlNode).remove();
		  if(value){ 
		     $(xmlNode).appendXml('<'+name+' name="x" xmlns="http://www.justep.com/model" unit="'+value+'"/>');
		  }
          this.setIfElseConnectionText(figure, value, conText)
		  for(var i = 0;i<trueFalseOutput.length;i++){
			  if(trueFalseOutput[i][0] != value){
				  $(otherName,xmlNode).remove();
				  $(xmlNode).appendXml('<'+otherName+' name="x" xmlns="http://www.justep.com/model" unit="'+trueFalseOutput[i][0]+'"/>');
				  this.updatePropUI(otherName,trueFalseOutput[i][0]);
				  this.setIfElseConnectionText(figure, trueFalseOutput[i][0],otherName=='true-output'?'是':'否')
				  break;
			  }
		  }
	  } 
};

justep.graphics.ProcessWebCanvas.prototype.setIfElseConnectionText = function(figure,targetName,text){
	 var cons = figure.getBindingConnections();  
	 for(var i =0;i<cons.length;i++){ 
	    if(cons[i].inPort.owner.getName() == targetName){
	    	cons[i].setText(text);
	    	break;
	    }
	 }
}

justep.graphics.ProcessWebCanvas.prototype.setExecuteRuleProp = function(propName,value,xmlNode){
	xmlNode = xmlNode || this.selections[0].modelData.xmlNode;;
	var executeRule = $(">execute-rule",xmlNode);
	if(executeRule.length == 0 && (propName == 'executor-range' ||propName=='executeMode' )){
		$(xmlNode).appendXml('<execute-rule xmlns="http://www.justep.com/model"></execute-rule>');
		executeRule = $(">execute-rule",xmlNode);
	}
	if(propName == 'customized-enabled'){
		var advanceRule = $(">advance-rule",xmlNode);
		if(advanceRule.length == 0){
			$(xmlNode).appendXml('<advance-rule xmlns="http://www.justep.com/model"></advance-rule>');
			advanceRule = $(">advance-rule",xmlNode);
		}
		advanceRule.attr("customized-enabled",value); 
	}else if(propName == 'executor-range'){
		var rangeNode = $(">executor-range",executeRule);
		if(rangeNode.length == 0){
			executeRule.appendXml('<executor-range xmlns="http://www.justep.com/model"><kind>PSM</kind></executor-range>');
			rangeNode = $(">executor-range",executeRule);
		} 
		rangeNode.attr("range-expr",value.expr);
		rangeNode.attr("default-expr",value.expr);
		rangeNode.attr("d-range-expr",JSON.stringify(value.items));
		this.updatePropUI("executor-range", this.getExecutorDispay(JSON.stringify(value.items)));
	}else if(propName=='executeMode'){
		var relationValue = $(">task-relation-value",executeRule);
		if(relationValue.length == 0){
			executeRule.appendXml('<task-relation-value xmlns="http://www.justep.com/model"></task-relation-value>');
			relationValue = $(">task-relation-value",executeRule);
		}
		var excuteMode = $(">item[relation='sExecuteMode']",relationValue); 
	
		if(excuteMode.length == 0){	
			relationValue.appendXml('<item relation="sExecuteMode" xmlns="http://www.justep.com/model">'+value+'</item>  '); 
		}else{
			excuteMode.text(value);
		}
	}
}

justep.graphics.ProcessWebCanvas.prototype.updatePropUI = function(propName,value){
   var input = $(".prop-area>.prop-list *[name='"+propName+"']",this.dContainer.parentNode);  
   if(propName == 'customized-enabled'){ 
	   if(value == 'true'){
		   input.attr('checked','true');
	   }else{
		   input.removeAttr('checked');
	   }
   }else{  
	   $(".prop-area>.prop-list *[name='"+propName+"']",this.dContainer.parentNode).val(value);		   
   }
}

justep.graphics.ProcessWebCanvas.prototype.getExecutorDispay = function(dRangeExpr){
	if(dRangeExpr){
		var names = [];
		dRangeExpr = eval("("+dRangeExpr+")");
		for(var i = 0;i<dRangeExpr.length;i++){
			var fname = dRangeExpr[i].fname||"";
			var idx = fname.lastIndexOf("/");
			if(idx != -1){
				fname = fname.substring(idx+1);
			}
			names.push(fname);
		}
		return names.join(",")
	}
	return "";
}


justep.graphics.ProcessWebCanvas.prototype.showImportDlg = function(self){  
	if(this.importDialog){
		return;
	}
 
	var html = ["<div style='position:absolute;border:1px solid #baceeb;background:white;width:650px;'><div class='toolbox-title' style=' height:22px;line-height:22px;padding-left:5px; '>输入模板内容</div>"];
	html.push("<div class='content' style='height:390px;padding:10px;'><textarea style='border:1px solid gray;width:622px;height:388px'></textarea></div>");
	html.push("<div class='propdlg-footer' style='border:1px solid #baceeb;'>  <button style='width:60px;float:right;' name='cancel'>取消</button> <button style='width:60px;float:right;' name='ok'>确定</button></div></div>");
	
	this.importDialog = $(html.join("")).appendTo(document.body).css({top:(document.body.clientHeight/2-260)+"px",left:(document.body.clientWidth/2-400)+"px"}); 
	$(".propdlg-footer button",this.importDialog).bind('click',function(){
		var name = $(this).attr("name");  
		if(name == 'ok'){ 
			var content = $("textarea",self.importDialog).val();
			var idx = content.indexOf("</model>");
			if(idx != -1){
              var content1 = content.substring(0,idx+8);
              var content2 = content.substring(idx+8);
              self.setData([content1,content2]);
			}
		} 
	    $(".propdlg-footer button",self.importDialog).unbind();
	    self.importDialog.remove().empty();
	    self.importDialog = null;
	});
};

justep.graphics.ProcessWebCanvas.prototype.showPropertyDlg = function(self,data){  
	if(this.propDialog){
		return;
	}
	if(this.selections.length<0){
		alert("请选择需要设置的图形!");
		return;
	}
	var selection  = this.selections[0];
	var html = ["<div style='position:absolute;border:1px solid #baceeb;background:white;width:650px;'><div class='toolbox-title' style=' height:22px;line-height:22px;padding-left:5px; '>流程源码</div>"];
	html.push("<div class='content' style='height:390px;padding:10px;'><textarea style='border:1px solid gray;width:622px;height:388px'></textarea></div>");
	html.push("<div class='propdlg-footer' style='border:1px solid #baceeb;'> <button style='width:60px;float:right;' name='cancel'>关闭</button></div></div>");
	
	this.propDialog = $(html.join("")).appendTo(document.body).css({top:(document.body.clientHeight/2-260)+"px",left:(document.body.clientWidth/2-400)+"px"}); 
    $("textarea",this.propDialog).val(data);
	$(".propdlg-footer button",this.propDialog).bind('click',function(){
		var name = $(this).name;
		if(name == 'ok'){
			
		}
        self.closePropertyDlg();
	});
}
justep.graphics.ProcessWebCanvas.prototype.closePropertyDlg = function(){
	if(this.propDialog){
	  $(".propdlg-footer button",this.propDialog).unbind();
	  this.propDialog.remove().empty();
	  this.propDialog = null;
	}
}


justep.graphics.ProcessWebCanvas.prototype.layout = function(){
	var self = this;
	setTimeout(function(){
		   var toolboxW = 180;
		   var propH = 70;
		   var toobarH = $(".canvas-toolbar").outerHeight();
		   var p = $(self.dContainer.parentNode); 
		   var w = p.width()-toolboxW;
		   var h = p.height();
		  // $(".canvas-toolbar").height(toobarH);
		   $(".mydesigner",p).width(w+3).height(h-toobarH-propH-3);
		   $(".prop-area",p).css({height:propH,"border-top":"0",width:p.width()-2});
		   
		   $(".toolbox",p).css({left:w+4,width:toolboxW-6,height:h-toobarH-2-propH-1,top:toobarH});
	},200);
};

justep.graphics.ProcessWebCanvas.prototype.parseModelAsJson = function(xmlDoc,shape){
	if(!xmlDoc){
		return {};
	}
	var shape = shape||{};
	var shapeStyle = shape.shapeStyle||{}; 
	var modelData = {verstion:shape.version,processMainData:{LABEL:""}}; 
	var t1 = new Date().getTime();

	var nodes = xmlDoc.childNodes;
	var processNode; 
	for(var i = 0;i<nodes.length;i++){ 
		var tagName = nodes[i].tagName;
		if(tagName == 'model'){
			var nodes1 = nodes[i].childNodes; 
			for(var j = 0;j<nodes1.length;j++){
				if(nodes1[j].tagName == 'process' || nodes1[j].tagName == 'template'){
					processNode = nodes1[j];
					break;
				}
			}
			break;
		}else if(tagName == 'process' || tagName == 'template'){
			processNode = nodes[i];
			break;
		}
	} 
	if(!processNode){
	   return;	
	}
	var otherData = [];
	this.root = processNode;
 	var nameMap = this.nameMap;
    var start = processNode.getAttribute("start");
    var end = processNode.getAttribute("end");
    modelData["templateName"] = processNode.getAttribute("name");
    modelData["process"] = processNode.getAttribute("process");
    this.startName = start;
	var nodes = processNode.childNodes;
	var processMainData = modelData.processMainData;
    var inputs = [],outputs=[];
    for(var i = 0,l=nodes.length;i<l;i++){
    	var node = nodes[i];
    	var type = nameMap[node.tagName];
    	if(type){
    		if(type == 'place'){ 
        		if(name == start){
        			type = "start";
        		}else if(name == end){
        			type = 'end';
        		}else{
        			type = "xor";
        		}
    		}
    		var key = node.getAttribute("name"); 
    		if(type == 'connection'){
    			key = node.getAttribute("from")+"|"+node.getAttribute("to"); 
    			processMainData[key] = {sourceNode:node.getAttribute("from"),targetNode:node.getAttribute("to"),xmlNode:node,name:key,ref:key,type:type,LABEL:$(">label",node).text(),style:shapeStyle[key]};
    		}else{
    			processMainData[key] = {xmlNode:node,name:key,ref:key,type:type,LABEL:$(">label",node).text(),style:shapeStyle[key]};
    		}
    		
    	 
    		$(">output,>true-output,>false-output,>input",node).each(function(idx){
    			var target = $(this);
    			var unit = target.attr("unit");
    			var label = $(">label",target).text();
    			var conKey ,sNode,tNode;
    			if(target[0].tagName == 'input'){
    				conKey = unit+"|"+key;  
    				sNode = unit;
    				tNode = key;
    			}else{ 
    				conKey = key+"|"+unit;  
    				sNode = key;
    				tNode = unit;
    			}
    			var cfg = processMainData[conKey];
    			if(!cfg){
    				processMainData[conKey] = {type:'connection',sourceNode:sNode,targetNode:tNode,LABEL:label,style:shapeStyle[conKey]};
    			}else{
    				cfg.LABEL = cfg.LABEL || label;
    			}
    		});		
    	}else if(node.nodeType == 1){
    		otherData.push($(node).xml());
    	}
    }
    modelData.otherData = otherData;
   return modelData;
}

justep.graphics.ProcessWebCanvas.prototype.setData=function(data){
    if(!data){
    	return;
    }
    var xml = data[0];
    var shape = data[1];
 
    shape = typeof shape =='string'?eval("("+shape +")"):shape; 
    var xmlDoc = $.parseXml(xml);
    var t1 = new Date().getTime();
    var modelData = this.parseModelAsJson(xmlDoc, shape);
    this.loadData(modelData);
    var currents = data[2]||[];
    var finishedActivities = data[3]||[];
 
    var isNew = data[4]; //新方式
    
    var currentColor = '#0080FF';//当前颜色
    var finishColor = 'green';//已完成颜色

    if(isNew){// 最新版本标识
    	 for(var i = 0,l=finishedActivities.length;i<l;i++){
    		 var figure = this.getFigureByName(finishedActivities[i]);
    		 if(figure){
    			 this.setFillColor(figure,finishColor);	
    		 }
    	 }
    	 for(var p in this.figures){
    		 var figure = this.figures[p];
    		 if(figure.outPort && figure.inPort){
    			 var outPortName= figure.outPort.owner.getName();
    			 var inPortName = figure.inPort.owner.getName();
    			 if($.inArray(outPortName,finishedActivities) !=-1 && $.inArray(inPortName,finishedActivities)!=-1){
    				 this.setFillColor(figure,finishColor);	
    			 }
    		 }
    	 }
    	 for(var i = 0,l=currents.length;i<l;i++){
    		 var figure = this.getFigureByName(currents[i]);
    		 if(figure){
    			 figure.status = "finished";
    			 this.setFillColor(figure,currentColor);	
    		 }
    	 }
		   $("button[name='loadModel'],button[name='loadTemplate']",this.dContainer.parentNode).removeClass('tool-item-over').attr("disabled","true");
		   $("button[name='loadModel'],button[name='loadTemplate']",this.dContainer.parentNode).removeAttr("disabled");
    }else{ //兼容以前
    	   //设置已经流程的环节高亮
    	   if(finishedActivities.length>0){
    		   for(var i = 0,l=finishedActivities.length;i<l;i++){
    			   var act = finishedActivities[i];
    			   if(act[2]){
    				   continue;
    			   }
    			   var from = this.figures[act[0]]; 
    			   var to = this.figures[act[1]];
    			   var trace = this.getTrace(from,to);
    			   for(var j=0,ll=trace.length;j<ll;j++){
    				   trace[j].status = "finished";
    				   this.setFillColor(trace[j],finishColor);	
    			   }
    		   }
    	   }
    	   
    	   //设置当前环节高亮
    	   if(currents.length>0){
    		    for(var p in this.figures){
    		    	var figure = this.figures[p];
    		    	for(var i = 0;i<currents.length;i++){
    		    		if(figure.getName() == currents[i]){
    		    			figure.status = "finished";
    		               this.setFillColor(figure,currentColor);
    		    		}    		
    		    	}
    		    }
    	   }
    	   
    	   if((finishedActivities.length>0 || currents.length>0)){
    		   if(this.startName){
    			  var figure = this.getFigureByName(this.startName);
    			  if(figure){
    				  figure.status = "finished";
    				  this.setFillColor(figure,finishColor);
    				  var cons = figure.getBindingConnections();
    				  for(var i = 0;i<cons.length;i++){
    					  if(cons[i].outPort.owner == figure){
    						  cons[i].status = "finished";
    						  this.setFillColor(cons[i],finishColor); 
    					  }
    				  }
    			  }
    		   } 
    		   $("button[name='loadModel'],button[name='loadTemplate']",this.dContainer.parentNode).removeClass('tool-item-over').attr("disabled","true");
    	   }else{
    		   $("button[name='loadModel'],button[name='loadTemplate']",this.dContainer.parentNode).removeAttr("disabled");
    	   }
    }
   this.layout();
};


/**获取从from到to的轨迹**/
justep.graphics.ProcessWebCanvas.prototype.getTrace = function(from/*开始节点*/,to/*结束节点*/,traces/*存储轨迹数组*/,flag/*[flag]是否已经到达目的节点*/,start/*起始节点*/){
	if(from == to || from == start || !from || !to){
		return;
	}
	if(!traces){
		traces = [];
		flag = [false];
		start = from;
		traces.push(from);
	}
	var cons = from.getBindingConnections();
	for(var i=0;i<cons.length;i++){
		if(cons[i].outPort.owner == from){
			var inFigure = cons[i].inPort.owner;
			if(inFigure == to){
				flag[0] = true;
				traces.push(to);
				traces.push(cons[i]);
				break;
			}else{
                this.getTrace(inFigure, to, traces,flag,start||from);
                if(flag[0]){
                	traces.push(inFigure);
                	traces.push(cons[i]);
                }
			}
		}
		if(flag[0]){
			break;
		}
	}
	return traces;
},

justep.graphics.ProcessWebCanvas.prototype.setFillColor= function(figure,color){  
	var figure = figure.getRawFigure();
	figure.setFill(color);
	figure.setStroke({color:color})
}
   	
justep.graphics.ProcessWebCanvas.prototype.getData=function(){
	return [this.parseModelAsXml(),this.getFigureStyles()];
}
	
justep.graphics.ProcessWebCanvas.prototype.initToolbox=function(xml){ 
    var p = this.dContainer.parentNode; 
	//清除内容
   $(".toolbox-items>li>a", p).unbind();
   $(".toolbox-items>li[name='dynItem']",p).remove().empty();
   this.modelNodeMap = {};
   var itemsNode;
   if($.browser.msie && typeof xml != 'string'){
	   xml = xml.xml;
   }
   if(typeof xml == 'string'){
	   var xmlDoc = $.parseXml(xml);
	   var nodes = xmlDoc.childNodes;
	
	   for(var i = 0;i<nodes.length;i++){
		   if(nodes[i].tagName == 'items'){
			   itemsNode = nodes[i];
			   break;
		   }
	   }
	   }else{
		   itemsNode = xml;
	   }
   if(itemsNode){
	   var htmlBuf = [];
	   var items = itemsNode.childNodes;
	   for(var i = 0;i<items.length;i++){
		   var item = items[i];
		   
		   var activity = item.getAttribute("activity")||"";
		   
		   var bizNode = item.childNodes[0];
		   
		   var cls = item.getAttribute("tag");
		   var label = item.getAttribute("label") || activity;
		   if(cls == 'activity'){
			   cls = "business-activity";
			   if(bizNode){
				   bizNode.setAttribute("ref",activity);
			   }
		   }
		   if(bizNode){
			   this.modelNodeMap[activity] = bizNode;
		   }
		   if("true" == item.getAttribute("isEnd")){
			   cls= "end"; 
		   }

		   htmlBuf.push('<li name="dynItem"><a href="javascript:void(0);" label="'+label+'"  onfocus="this.blur();" class="'+cls+'" ref='+activity+' title="'+activity+'">'+label+'</a></li>');
	   }
	  $(".toolbox-items li:eq(1)",p).after(htmlBuf.join(""));
	   
 	  var self = this;
   $(".toolbox-items>li>a",p).each(function(idx){
	  var target = $(this);
	  target.bind("mousedown",function(event){
		 var clsName = target[0].className;  
		 if(clsName == 'cancel-selected'){
			 self.selectProcessItemType();
		 }else{
			 var type = self.nameMap[clsName];
			 if(type){   
				 var xmlNode = self.modelNodeMap[target.attr("ref")];
				 if(xmlNode){
					 xmlNode = xmlNode.cloneNode(true);
				 }
				 self.selectProcessItemType(type,false,{ref:target.attr("ref"),xmlNode:xmlNode,LABEL:target.attr("label")||'',type:type});
			 }
		 }
	 });
  });
   }
}
justep.graphics.ProcessWebCanvas.prototype.removeNs=function(xml){
	xml = xml.replace(/xmlns=""/gm, "");
	xml = xml.replace(/xmlns="http:\/\/www.justep.com\/model"/gm, "");
	return xml;
};

justep.graphics.ProcessWebCanvas.prototype.parseModelAsXml=function(){
	   var language = "zh_CN";
	   var xmlBuf = [];
	   var start;
	   var end;
	   var key;
	   if(this.root){
			  if(!start){
				  start = this.root.getAttribute("start");		  
			  }
			  if(!end){
				  end = this.root.getAttribute("end");		  
			  }
		  }
	   for(var p in this.figures){
	  	 var figure = this.figures[p];
	  	 if(figure.isProcessShape && figure.type != 'connection'){
	         var modelData = figure.modelData;
	         var xmlNode = modelData.xmlNode; 
	         var cons = figure.getBindingConnections();
	         var hasInput = false;

	         $("label",xmlNode).text(figure.getText()); 
	         if(figure.type == 'start'){ 
	        	
	        	 start = modelData.name;
	         }else if(figure.type == 'end'){
	        	 end = modelData.name;
	         }
	         if(xmlNode.tagName == 'place'){
	         	 for(var i = 0;i<cons.length;i+=1){
	         		 if(cons[i].inPort.owner == figure){
	         			 hasInput = true;
	         			 break;
	         		 }
	         	 }
	              if(hasInput == false){ 
	              	//start = modelData.name;
	              }        	 
	              if(xmlNode.getAttribute("name") != start){
	              	xmlBuf.push("  "+$(xmlNode).xml()+"\n");            	
	              }else{
	            	  $("has-token",xmlNode).remove();
	              	var tokenId = "t"+new Date().getTime();
	              	xmlBuf.push('<token name="'+tokenId+'"/> \n ');
	              	var xml = $(xmlNode).xml();
	              	var idx = xml.indexOf("</place>");
	              	if(idx != -1){
	              		xml = xml.substring(0,idx)+'<has-token token="'+tokenId+'"/> '+xml.substring(idx);
	              	}
	              	xmlBuf.push("  "+xml+"\n");            
	              }
	         	continue;
	         }
	         if(xmlNode){
	         	$("input,output",xmlNode).remove();
	         }
	         var xml = [];
	         for(var i = 0;i<cons.length;i+=1){
	         	var con = cons[i];
	         	if(con.outPort.owner == figure){
	         		if(xmlNode.tagName != 'if-else-activity'){
	         			$(xmlNode).appendXml('  <output name="x" xmlns="http://www.justep.com/model" unit="'+con.inPort.owner.getName()+'"/>\n');         			
	         		}
	         	}else{
	         		hasInput = true;
	         		$(xmlNode).appendXml('  <input name="x" xmlns="http://www.justep.com/model" unit="'+con.outPort.owner.getName()+'"/>\n');
	         	}
	         } 
	         if(hasInput == false){ 
	         	//start = modelData.name;
	         	key = p;  
	         }
	         xmlBuf.push("  "+$(xmlNode).xml()+"\n");
	  	 }else {
	  		var output = figure.outPort.owner;
	  		var input = figure.inPort.owner;
	  		if(output.modelData.tagName == 'place' && input.modelData.tagName == 'place'){
	  			xmlBuf.push('<arc name="arc'+this.genaUniqueNameIdx("arc")+'" from="'+output.getName()+'" to="'+input.getName()+'"/>\n');
	  		}
	  	 }
	  } 

	  if(start){
		  start= 'start="'+start+'"';
	  }else{
		  start = "";
	  }
	 
	  end= end?('end="'+end+'"'):"";
	 
	  var templateName = this.modelData["templateName"];
	  var process = this.modelData["process"];
	  for(var i = 0;i<xmlBuf.length;i+=1){
		  xmlBuf[i] = this.removeNs(xmlBuf[i]);
	  }
	  xmlBuf.splice(0, 0, '<?xml version="1.0" encoding="UTF-8"?>\n<model xmlns="http://www.justep.com/model">\n<template name="'+templateName+'" process="'+process+'" '+start+' '+end+'>\n');
	  xmlBuf.push("</template>\n</model>\n");
	  return xmlBuf.join("");
}

/**把图形加入选择**/
justep.graphics.ProcessWebCanvas.prototype.addSelection = function(target,noFireEvent){
	if(!target.isSelected()){ 
		target.setSelection();
        this.selections.push(target);
        if(!noFireEvent){
        	this.fireSelectChangedEvent("add",target);	        	
        }
        this.buildProperty(target);
	}
}
/**清楚当期图形的选择**/
justep.graphics.ProcessWebCanvas.prototype.clearSelection=function(){ 
	var propContainer = $(".prop-area>.prop-list",this.dContainer.parentNode);
	$("select,input",propContainer).each(function(){ 
		$(this)[0].blur(); 
	})
	for(var i = 0,l=this.selections.length;i<l;i++){
		if(this.selections[i] && this.selections[i].clearSelection)
		  this.selections[i].clearSelection();
	}
	this.selections = [];
	this.buildProperty(null);
}

/* ============================== 撤销重做 ======================================*/
justep.graphics.UndoRedoManager = {
	designer:null,
	undoList:[],
	redoList:[],
	actions:[],
	isBatch:false,
	clear:function(){
		this.undoList = [];
		this.redoList = [];
	},
	startBatch:function(){
		this.isBatch = true;
		this.actions = [];
	},
	endBatch:function(){
		this.isBatch = false;
		this.redoList = [];
		this.undoList.push(this.actions);
		this.updateButtonState();
	},
	addAction:function(action){ 
		action.designer = this.designer;
		if(this.isBatch){ 
			this.actions.push(action);			
		}else{
			this.redoList = [];
			this.undoList.push([action]);
		}
        this.updateButtonState();
	},

	newAction:function(modelData){
	  var action = new justep.graphics.undoable.NewAction(modelData);
	  
	  this.addAction(action);
	  return action.execute();
	},
	removeAction:function(id){
	  if(id.length == 0){
		  return;
	  }
	  var action = new justep.graphics.undoable.RemoveAction(id);
	  this.addAction(action);
	  return action.execute();
	},
	changeShapeAction:function(figureId,newShape){
	  var action = new justep.graphics.undoable.ChangeShapeAction(figureId,newShape);
	  this.addAction(action);
	  return action.execute();
	},
	changePortAction:function(figureId,newPort,portType){
	  var action = new justep.graphics.undoable.ChangePortAction(figureId,newPort,portType);
	  this.addAction(action);
	  return action.execute();
	},
	updateButtonState:function(){
		if(this.redoList.length == 0){
		  $("button[name='redo']",this.designer.dContainer.parentNode).removeClass('tool-item-over').attr("disabled","true");
		}else{
		  $("button[name='redo']",this.designer.dContainer.parentNode).removeAttr("disabled");
		}
		if(this.undoList.length == 0){
		  $("button[name='undo']",this.designer.dContainer.parentNode).removeClass('tool-item-over').attr("disabled","true");
		}else{
		  $("button[name='undo']",this.designer.dContainer.parentNode).removeAttr("disabled");
		}		
	},
	redo:function(){
		if(this.redoList.length == 0){
			return;
		}
		var actions = this.redoList[this.redoList.length-1];
		if(actions){
			for(var i = 0;i<actions.length;i++){
				actions[i].execute();
			}
			this.redoList.splice(this.redoList.length-1,1);
			this.undoList.push(actions);
		}
		this.designer.transInterPointToArc();
		this.updateButtonState();
	},
	undo:function(){
		
		if(this.undoList.length == 0){
			return;
		}
		var actions = this.undoList[this.undoList.length-1];
		if(actions){
			for(var i = 0;i<actions.length;i++){
				actions[i].undo();
			}
			this.undoList.splice(this.undoList.length-1,1);
			this.redoList.push(actions);
		}
		this.designer.transInterPointToArc();
		this.updateButtonState();
	}
};
justep.graphics.undoable = {};
/**新建动作**/
justep.graphics.undoable.NewAction = function(modelData){
	this.modelData = $.extend({},modelData);
};
justep.graphics.undoable.NewAction.prototype = {
	execute:function(){  
		var figure = this.designer.createProcessShape(this.modelData);
		this.id = figure.id;
		if(figure.type == 'connection'){
			if(figure.getShape().length == 2){ 
				var shape = figure.getShape();
				if(shape[0].x !=shape[1].x && shape[0].y != shape[1].y){
					figure.inPort.updateConnectionPosition(figure);
				}
			}
		}
		return figure;
	},
	undo:function(){  
		this.designer.unSelection(this.figure);
		var id = this.id;
        var figure = this.designer.figures[id];
		this.designer.figures[id] = null;
		delete this.designer.figures[id];
		figure.dispose();
	}
};

/**删除动作**/
justep.graphics.undoable.RemoveAction = function(id){
	this.ids = $.isArray(id)?id:[id];
	this.processRects = [];
	this.connections = [];
};
justep.graphics.undoable.RemoveAction.prototype = {
	execute:function(){
		var figures = [];  
		for(var i=0;i<this.ids.length;i++){
			var id = this.ids[i];
			var figure = this.designer.figures[id]; 
			if(!figure){
				continue;
			}
			if(figure.type !='connection'){ 
				figures.push(figure);
			}
			var cons = figure.getBindingConnections?figure.getBindingConnections():[figure];   
			//先删除连接线
			for(var j = 0;j<cons.length;j++){
				if(this.isInit!=false){
					var modelData = $.extend({},cons[j].modelData);
					modelData.style = this.designer.getFigureStyle(cons[j]);
					this.connections.push(modelData);
				}
				this.designer.figures[cons[j].id] = null;
				delete this.designer.figures[cons[j].id];
				cons[j].dispose();
			}
		}
        //后删除非连接线图形
		for(var i = 0;i<figures.length;i++){
			var figure = figures[i];
			if(this.isInit!=false){
				var modelData = $.extend({},figure.modelData); 
				modelData.style = this.designer.getFigureStyle(figure);
				this.processRects.push(modelData);
			}
			this.designer.figures[figure.id] = null;
			delete this.designer.figures[figure.id];
			figure.dispose();
		}
		this.isInit = false;
		
	},
	undo:function(){
		if(this.processRects){
			for(var i = 0;i<this.processRects.length;i++){
				this.designer.createProcessShape(this.processRects[i]);
			}
		}
        if(this.connections){
    		for(var i = 0;i<this.connections.length;i++){ 
    			this.designer.createProcessShape(this.connections[i]);
    		}
        }
	}	
};

/**改变端口**/
justep.graphics.undoable.ChangePortAction = function(id,newPort,portType){
	this.id = id;
	this.newPort = newPort;
	this.portType = portType;
};
justep.graphics.undoable.ChangePortAction.prototype = {
	execute:function(){ 
		var figure = this.designer.figures[this.id];
		if(!this.oldPort){
			var port = figure[this.portType];
			this.oldPortCfg = {ownerId:port.owner.id,direction:port.direction};
		}
		if(!this.newPortCfg){
			figure.bindPort(this.newPort,this.portType,true);	
			this.newPortCfg = {ownerId:this.newPort.owner.id,direction:this.newPort.direction};
		}else{
			var newPort = this.designer.figures[this.newPortCfg.ownerId].getPort(this.portType,this.newPortCfg.direction);
			figure.bindPort(newPort,this.portType,true);
		}
	},
	
	undo:function(){
		var figure = this.designer.figures[this.id];
		var oldPort = this.designer.figures[this.oldPortCfg.ownerId].getPort(this.portType,this.oldPortCfg.direction);
		figure.bindPort(oldPort,this.portType,true);
	}	
};

/**改变形状**/
justep.graphics.undoable.ChangeShapeAction = function(id,newShape){
	this.id = id; 
	this.newShape = $.extend(true,$.isArray(newShape)?[]:{},newShape);
};
justep.graphics.undoable.ChangeShapeAction.prototype = {
	execute:function(){
		var figure = this.designer.figures[this.id];
		if(!this.oldShape){
		   this.oldShape = $.extend(true,$.isArray(this.newShape)?[]:{},figure.getShape());
		}
		figure.setShape($.extend(true,$.isArray(this.newShape)?[]:{},this.newShape));
	},
	
	undo:function(){ 
		this.designer.figures[this.id].setShape($.extend(true,$.isArray(this.newShape)?[]:{},this.oldShape));
	}	
};
/**
 * @param	gridOrInstance		需要定位的grid或者instance，必选项，取值范围为：
 * 									1、grid的对象或者grid的id；
 * 									2、instance的对象或者instance的id；
 * 									3、获取grid的或者instance的函数，该函数的返回值为1、2之一，用于动态定位不同的grid或者instance，该函数声明如下：
 * 										function XXX(source){
 * 											//source	快速定位对象，即justep.QuickLocate的返回值
 * 											return gridOrInstance;
 * 										}
 * @param	onPrepareContent	准备快速查询下拉面板内容的函数的函数名或者函数对象，可选项，该函数声明如下：
 * 									function XXX(source, value){
 * 										//source	指快速定位的对象，即justep.QuickLocate的返回值
 * 										//value		为查询输入框内部的值
 * 										return htmlCodeOrElement; //返回要在下拉框显示的内容，可以为超文本代码或者页面对象
 * 									}
 * @param	offset				下拉面板左上角顶点横坐标距离查询框的偏移量，类型为number，可选项，如果不存在或者不为number，则默认为0
 * @param	autoDropDown		是否自动下拉出查询结果，可选项，类型为boolean，如果不存在或者不为true，则默认为false
 */
justep.QuickLocate = function(gridOrInstance, onPrepareContent, offset, autoDropDown){
	this.inputDefaultText = "快速定位……";
	this.inputNormalFontColor = "black";
	this.inputDefaultFontColor = "#C0C0C0";
	this.buttonMouseOverBorder = "1px ridge";
	this.buttonMouseOutBorder = "1px solid #ffffff";
	this.__onLocateNext = null;

	var table = document.createElement("TABLE");
	this.__main = table;
	this.__gridOrInstance = gridOrInstance;
	this.__autoDropDown = autoDropDown;
	var fun = null;
	if(typeof(onPrepareContent) == "function") fun = onPrepareContent;
	else if(typeof(onPrepareContent) == "string" && onPrepareContent != ""){
		eval("if(typeof(" + onPrepareContent + ") == 'function') fun = " + onPrepareContent + ";");
	}
	this.__prepareContent = fun;
	this.__content = null;

	table.cellPadding = "0";
	table.cellSpacing = "0";

	table.border = "0";
	var tr = table.insertRow();
	var iptTd = tr.insertCell();

	var ipt = document.createElement("INPUT");
	iptTd.appendChild(ipt);
	this.__input = ipt;

	ipt.value = this.inputDefaultText;
	ipt.style.border = "1px solid #99BBE8";
	ipt.style.color = "#C0C0C0";
	ipt.__owner = this;
	ipt.onfocus = function(){
		if(this.value != this.__owner.inputDefaultText) return;
		this.style.color = this.__owner.inputNormalFontColor;
		this.value = "";
	};
	ipt.onblur = function(){
		if(this.value != "") return;
		this.style.color = this.__owner.inputDefaultFontColor ;
		this.value = this.__owner.inputDefaultText;
	};
	ipt.onkeydown = function(){
		if (event.keyCode == 13) {
			var owner = this.__owner;
			var autoDropDown = owner.__autoDropDown;
			if(typeof(autoDropDown) == "boolean" && autoDropDown == true) owner.__dropDown(true);
			else owner.__prepare(true);
		}else if (event.keyCode == 38) {
			this.__owner.__closeUp();
		}else if (event.keyCode == 40){
			var self = this;
			setTimeout(function(){
				self.__owner.__dropDown();
			}, 1);
		}
	};

	var sp = tr.insertCell();
	sp.style.width = 5;
	sp.style.fontSize = "1pt";

	var searchBtn = tr.insertCell();
	searchBtn.__owner = this;
	searchBtn.vAlign = "middle";
	searchBtn.style.height = "100%";
	searchBtn.style.border = this.buttonMouseOutBorder;
	searchBtn.onmouseover = function(){
		this.style.border = this.__owner.buttonMouseOverBorder;
	};
	searchBtn.onmouseout = function(){
		this.style.border = this.__owner.buttonMouseOutBorder;
	};
	searchBtn.onclick = function(){
		this.__owner.__prepare(true);
	};
	var searchImg = document.createElement("IMG");
	this.__searchImg = searchImg;
	searchBtn.appendChild(searchImg);
	searchImg.src = justep.Request.convertURL("/UI/system/images/search.gif", true);

	sp = tr.insertCell();
	sp.style.width = 5;
	sp.style.fontSize = "1pt";

	var dropdownBtn = tr.insertCell();
	dropdownBtn.__owner = this;
	dropdownBtn.vAlign = "middle";
	dropdownBtn.style.height = "100%";
	dropdownBtn.style.border = this.buttonMouseOutBorder;
	dropdownBtn.onmouseover = function(){
		this.style.border = this.__owner.buttonMouseOverBorder;
	};
	dropdownBtn.onmouseout = function(){
		this.style.border = this.__owner.buttonMouseOutBorder;
	};
	dropdownBtn.onclick = function(){
		var self = this;
		setTimeout(function(){
			self.__owner.__dropDown();
		}, 1);
	};
	var dropdownImg = document.createElement("IMG");
	this.__dropdownImg = dropdownImg;
	dropdownBtn.appendChild(dropdownImg);
	dropdownImg.src = justep.Request.convertURL("/UI/system/images/expanded.gif", true);

	this.__main.__offset = typeof(offset) == "number"?offset:0;
	this.__main.__owner = this;
}

justep.QuickLocate.prototype.getMain = function(){
	return this.__main;
}

justep.QuickLocate.prototype.getInput = function(){
	return this.__input;
}

justep.QuickLocate.prototype.getSearchImage = function(){
	return this.__searchImg;
}

justep.QuickLocate.prototype.getDropDownImage = function(){
	return this.__dropdownImg;
}

justep.QuickLocate.prototype.locate = function(idPath){
	if(!(typeof(idPath) == "string" && idPath != "")) return;
	var obj = this.__gridOrInstance;
	if(!obj) return;
	var grid = obj;
	if(typeof(obj) == "function") grid = obj(this);
	if(!obj) return;
	this.__expandTreeByIdPath(obj, idPath, function(grid, rowId){
		if (!grid)	return;
		if (!rowId || rowId == "") return;
		if (grid._goto && typeof(grid._goto) == "function")	grid._goto(rowId);
		var quickLocateObject = grid.__expandOwner;
		if(!quickLocateObject) return;
		var fun = null;
		var obj = quickLocateObject.__onLocated;
		if(typeof(obj) == "function") fun = obj;
		else if(typeof(obj) == "string" && obj != "") eval("if(typeof(" + obj + ")=='function') fun = " + obj + ";");
		if(fun) fun(quickLocateObject, grid, rowId);

	});
}

/**
 * 设置定位下一条调用的函数
 * @param	onLocateNext	定位下一条的实现函数的函数名或者函数对象，必选项，该函数声明如下：
 * 							function XXX(source, popBoard){
 * 								//source	快速定位对象，即justep.QuickLocate的返回值
 * 								//popBoard	下拉的面板的内容
 * 							}
 */
justep.QuickLocate.prototype.setLocateNextEvent = function(onLocateNext){
	this.__onLocateNext = onLocateNext;
}

/**
 * 设置定位成功后的回调函数
 * @param	onLocated	定位成功后的函数的函数名或者函数对象，必选项，该函数声明如下：
 * 							function XXX(source, grid, rowId){
 * 								//source	快速定位对象，即justep.QuickLocate的返回值
 * 								//grid		定位的grid对象
 * 								//rowId		定位到的rowId
 * 							}
 */
justep.QuickLocate.prototype.setLocatedEvent = function(onLocated){
	this.__onLocated = onLocated;
}

/**
 * 内部临时
 */
justep.QuickLocate.prototype.__prepare = function(canFocusNext){
	var oldValue = this.__oldValue;
	var value = this.__input.value;
	value = value == this.inputDefaultText?"":value;
	this.__oldValue = value;
	var board = this.__getPopBoard(this.__main);
	if(typeof(canFocusNext) == "boolean" && canFocusNext == true && oldValue == value){
		var tmBoard = board?board:this.__content;
		if(tmBoard){
			var fun = this.__onLocateNext;
			if(fun) fun(this, tmBoard);
		}
		return;
	}
	this.__content = null;

	if(board){
		for(var i = $(board).children().length - 1; i >= 0; i--){
			board.removeChild($(board).children()[i]);
		}
	}
	var elementOrHTML = null;
	var fun = this.__prepareContent;
	if(fun) elementOrHTML = fun(this, value == this.inputDefaultText?"":value);
	if(typeof(elementOrHTML) == "string" && elementOrHTML != ""){
		if(board) board.innerHTML = elementOrHTML;
		else this.__content = elementOrHTML;
	}
	else if(elementOrHTML && elementOrHTML.currentStyle){
		var parent = elementOrHTML.parentNode;
		if(parent) parent.removeChild(elementOrHTML);
		if(board) board.appendChild(elementOrHTML);
		else this.__content = elementOrHTML;
	}
}

justep.QuickLocate.prototype.__dropDown = function(force){
	this.__dropDownBoard(this.__main, function(neighbor, options){
		options.beforePopFunOrName = neighbor.__owner.__beforePop;
		options.left += neighbor.__offset;
	});
	this.__prepare(force);
}

justep.QuickLocate.prototype.__beforePop = function(popBoard, owner){
	if(!popBoard || !owner) return;
	var quickLoateObject = owner.__owner;
	if(!quickLoateObject) return;
	var content = quickLoateObject.__content;
	quickLoateObject.__content = null;
	if(!content) return;
	if(typeof(content) == "string" && content != "") popBoard.innerHTML = content;
	else if(content && content.currentStyle) popBoard.appendChild(content);
}

justep.QuickLocate.prototype.__closeUp = function(){
	this.__closePopBoard(this.__main, true, null);
}

/**
 * 内部基础1
 */
justep.QuickLocate.prototype.__linkPopBoard = function(anchor, popBoardElement, beforeCloseUpFunOrName, closeUpFunOrName){
	if(!popBoardElement) return false;
	if(popBoardElement._hasLinked) return true;
	popBoardElement._hasLinked = true;
	var closeUpFun = null;
	if(typeof(closeUpFunOrName) == "string"){
		if(closeUpFunOrName != ""){
			eval("if(typeof(" + closeUpFunOrName + ") == \"function\"); closeUpFun = " + closeUpFunOrName + ";");
		}
	}
	else if(typeof(closeUpFunOrName) == "function") closeUpFun = closeUpFunOrName;
	var beforeCloseUpFun = null;
	if(typeof(beforeCloseUpFunOrName) == "string"){
		if(beforeCloseUpFunOrName != ""){
			eval("if(typeof(" + beforeCloseUpFunOrName + ") == \"function\"); beforeCloseUpFun = " + beforeCloseUpFunOrName + ";");
		}
	}
	else if(typeof(beforeCloseUpFunOrName) == "function") beforeCloseUpFun = beforeCloseUpFunOrName;

	var closeUpStruct = document.__CloseUp;
	if(!closeUpStruct){
		document.__CloseUp = {
			innerCloseUpList: new Array(),
			innerCloseUpFun: function(evt){
				if(!evt || evt.button != 1 || !closeUpStruct) return;
				var list = closeUpStruct.innerCloseUpList;
				if(!list) return;
				for(var i = list.length - 1; i >=0; i--){
					var item = list[i];
					if(!item) continue;
					item.sender.__innerClosePopBoard(evt, item, false, null);
				}
			}
		};
		closeUpStruct = document.__CloseUp;
		try{
			document.attachEvent("onmousedown", closeUpStruct.innerCloseUpFun);
		}
		catch (ex){
			document.addEventListener("mousedown", closeUpStruct.innerCloseUpFun, false);
		}
	};
	closeUpStruct.innerCloseUpList.push({sender: this, anchor: anchor, popBoard: popBoardElement, onBeforeClose: beforeCloseUpFun, onClose: closeUpFun});
	return true;
}

justep.QuickLocate.prototype.__innerClosePopBoard = function(event, popBoardData, accept, data){
	if(!popBoardData) return false;
	if(popBoardData.popBoard.currentStyle.display == "none") return true;
	try{
		var bounds = justep.Element.getBounds(popBoardData.popBoard);
		if(!bounds) return false;
		var actionOption = {close: true, accept: (typeof(accept) == "boolean")?accept:false, inBoard: false, data: data?data:null};
		var dLT = justep.Element.getDocLeftTop();
		var x = dLT.left + (event?event.clientX:0);
		var y = dLT.top + (event?event.clientY:0);
		actionOption.inBoard = (popBoardData.popBoard.currentStyle.display != "none") && event && (x >= bounds.left && x <= bounds.right && y >= bounds.top && y <= bounds.bottom);
		actionOption.close = !(actionOption.inBoard);
		if(typeof(popBoardData.onBeforeClose) == "function"){
			popBoardData.onBeforeClose(event, popBoardData.anchor, popBoardData.popBoard, actionOption);
		}
		if(actionOption.close == true){
			popBoardData.popBoard.style.display = "none";
			if(typeof(popBoardData.onClose) == "function") popBoardData.onClose(event, popBoardData.anchor, popBoardData.popBoard, actionOption.accept, actionOption.data);
			return true;
		}
		return false;
	}
	catch(e){}
}

justep.QuickLocate.prototype.__getPopBoard = function(anchorOrPopBoard){
	if(!anchorOrPopBoard) return null;
	var closeUpStruct = document.__CloseUp;
	if(!closeUpStruct) return null;

	var list = closeUpStruct.innerCloseUpList;
	if(!list) return;
	for(var i = list.length - 1; i >=0; i--){
		var item = list[i];
		if(!item) continue;
		if(anchorOrPopBoard == item.popBoard || anchorOrPopBoard == item.anchor){
			return item.popBoard;
		}
	}
	return null;
}

justep.QuickLocate.prototype.__closePopBoard = function(anchorOrPopBoard, accept, data){
	if(!anchorOrPopBoard) return false;
	var closeUpStruct = document.__CloseUp;
	if(!closeUpStruct) return false;

	var list = closeUpStruct.innerCloseUpList;
	if(!list) return;
	var popBoardData = null;
	for(var i = list.length - 1; i >=0; i--){
		var item = list[i];
		if(!item) continue;
		if(anchorOrPopBoard == item.popBoard || anchorOrPopBoard == item.anchor){
			popBoardData = item;
			break;
		}
	}
	if(!popBoardData) return false;
	return this.__innerClosePopBoard(null, popBoardData, accept, data);
}

justep.QuickLocate.prototype.__removePopBoard = function(anchorOrPopBoard){
	if(!anchorOrPopBoard) return false;
	var closeUpStruct = document.__CloseUp;
	if(!closeUpStruct) return false;

	var list = closeUpStruct.innerCloseUpList;
	if(!list) return;
	var popBoardData = null;
	for(var i = list.length - 1; i >=0; i--){
		var item = list[i];
		if(!item) continue;
		if(anchorOrPopBoard == item.popBoard || anchorOrPopBoard == item.anchor){
			list[i] = undefined;
			var parent = $(item.popBoard).parent().get(0);
			if(parent && parent.tagName == "BODY" && typeof(item.popBoard.__dynamicCreate) == "boolean" && item.popBoard.__dynamicCreate == true){
				item.anchor._popBoard = undefined;
				parent.removeChild(item.popBoard);
			}
			item.anchor = undefined;
			item.popBoard = undefined;
			item.onBeforeClose = undefined;
			item.beforeCloseUpFun = undefined;
			item.onClose = undefined;
			item = undefined;
		}
	}
	return true;
}

justep.QuickLocate.prototype.__hasPopBoard = function(){
	var closeUpStruct = document.__CloseUp;
	if(!closeUpStruct) return false;
	var list = closeUpStruct.innerCloseUpList;
	if(!list) return;
	var popBoardData = null;
	for(var i = list.length - 1; i >=0; i--){
		var item = list[i];
		if(!item) continue;
		if(item.popBoard.currentStyle.display == "") return true;
	}
	return false;
}

justep.QuickLocate.prototype.__popBoard = function(ownerElement, x, y, w, h, beforePopFunOrName, beforeCloseUpFunOrName, closeUpFunOrName){
	if(!ownerElement) return null;
	var div = ownerElement._popBoard;
	if(!div){
		div = document.createElement("div");
		ownerElement._popBoard = div;
		div.style.display = "none";
		div.style.position = "absolute";
		div.style.zIndex = 9999998;
		div.style.border = "solid 1px #D3D3D3";
		div.__dynamicCreate = true;
		//div.style.backgroundColor = "red";
		div.ownerElement = ownerElement;
		document.body.appendChild(div);
		this.__linkPopBoard(ownerElement, div, beforeCloseUpFunOrName, closeUpFunOrName);
	}
	else div.ownerElement = ownerElement;
	div.style.left = typeof(x) == "number"?x:0;
	div.style.top = typeof(y) == "number"?y:0;
	div.style.width = (typeof(w) == "number" && w > 0)?w:ownerElement.offsetWidth;
	if(typeof(h) == "number" && h > 0) div.style.height = h;
	var beforePopFun = null;
	if(typeof(beforePopFunOrName) == "string"){
		if(closeUpFunOrName != ""){
			eval("if(typeof(" + beforePopFunOrName + ") == \"function\"); beforePopFun = " + beforePopFunOrName + ";");
		}
	}
	else if(typeof(beforePopFunOrName) == "function") beforePopFun = beforePopFunOrName;
	if(beforePopFun) beforePopFun(div, ownerElement);
	div.style.display = "";
	return div;
}

justep.QuickLocate.prototype.__dropDownBoard = function(neighbor, initFunName){
	if(!neighbor) return null;
	var bs = justep.Element.getBounds(neighbor);
	var pos = {left: bs.left, top: bs.top};
	if(!pos) return null;
	var initOptions = {
		left: pos.left,
		top: pos.top + neighbor.offsetHeight,
		height: null,
		width: neighbor.offsetWidth,
		beforePopFunOrName: null,
		beforeCloseUpFunOrName: null,
		closeUpFunOrName: null};
	var beforeCloseUpFun = function(evt, anchor, popBoard, actionOption){
		if(!evt || !actionOption || !popBoard || !anchor) return;
		try{
			var bounds = justep.Element.getBounds(anchor);
			if(actionOption.close == true){
				var dLT = justep.Element.getDocLeftTop();
				var x = dLT.left + evt.clientX;
				var y = dLT.top + evt.clientY;
				actionOption.close = (x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom);
			}
		}
		catch(e){}
		var beforeCloseUpFunInner = null;
		if(typeof(initOptions.beforeCloseUpFunOrName) == "string"){
			if(initOptions.beforeCloseUpFunOrName != ""){
				eval("if(typeof(" + initOptions.beforeCloseUpFunOrName + ") == \"function\"); beforeCloseUpFunInner = " + initOptions.beforeCloseUpFunOrName + ";");
			}
		}
		else if(typeof(initOptions.beforeCloseUpFunOrName) == "function") beforeCloseUpFunInner = initOptions.beforeCloseUpFunOrName;
		if(beforeCloseUpFunInner){
			try{
				beforeCloseUpFunInner(evt, anchor, popBoard, actionOption);
			}catch(e){
			}
		}
	};
	if(typeof(initFunName) == "string" && initFunName != ""){
		var initFun = null;
		eval("if(typeof(" + initFunName + ") == \"function\") initFun = " + initFunName + ";");
		if(initFun) initFun(neighbor, initOptions);
	}
	return this.__popBoard(neighbor, initOptions.left, initOptions.top, initOptions.width, initOptions.height,
		initOptions.beforePopFunOrName, beforeCloseUpFun, initOptions.closeUpFunOrName);
}

justep.QuickLocate.prototype.__dropDownBoard = function(neighbor, initFunOrName){
	if(!neighbor) return null;
	var bs = justep.Element.getBounds(neighbor);
	var pos = {left: bs.left, top: bs.top};
	var initOptions = {
		left: pos.left,
		top: pos.top + neighbor.offsetHeight,
		height: null,
		width: neighbor.offsetWidth,
		beforePopFunOrName: null,
		beforeCloseUpFunOrName: null,
		closeUpFunOrName: null};
	var beforeCloseUpFun = function(evt, anchor, popBoard, actionOption){
		if(!evt || !actionOption || !popBoard || !anchor) return;
		try{
			var bounds = justep.Element.getBounds(anchor);
			if(actionOption.close == true){
				var dLT = justep.Element.getDocLeftTop();
				var x = dLT.left + evt.clientX;
				var y = dLT.top + evt.clientY;
				actionOption.close = (x < bounds.left || x > bounds.right || y < bounds.top || y > bounds.bottom);
			}
		}
		catch(e){}
		var beforeCloseUpFunInner = null;
		if(typeof(initOptions.beforeCloseUpFunOrName) == "string"){
			if(initOptions.beforeCloseUpFunOrName != ""){
				eval("if(typeof(" + initOptions.beforeCloseUpFunOrName + ") == \"function\"); beforeCloseUpFunInner = " + initOptions.beforeCloseUpFunOrName + ";");
			}
		}
		else if(typeof(initOptions.beforeCloseUpFunOrName) == "function") beforeCloseUpFunInner = initOptions.beforeCloseUpFunOrName;
		if(beforeCloseUpFunInner){
			try{
				beforeCloseUpFunInner(evt, anchor, popBoard, actionOption);
			}catch(e){
			}
		}
	};
	var initFun = null;
	if(typeof(initFunOrName) == "string" && initFunOrName != ""){
		eval("if(typeof(" + initFunOrName + ") == \"function\") initFun = " + initFunOrName + ";");
	}else if(typeof(initFunOrName) == "function") initFun = initFunOrName;
	if(initFun) initFun(neighbor, initOptions);

	return this.__popBoard(neighbor, initOptions.left, initOptions.top, initOptions.width, initOptions.height,
		initOptions.beforePopFunOrName, beforeCloseUpFun, initOptions.closeUpFunOrName);
}

/**
 * 内部基础2
 */
justep.QuickLocate.prototype.__expandTree = function(gridOrInstance, rowId, expandedFunOrName, caller){
	if(!gridOrInstance) return false;
	rowId = justep.String.trim(rowId);
	if(rowId == "") return false;
	var obj = null;
	if(typeof(gridOrInstance) == "string"){
		if(gridOrInstance == "") return false;
		obj = xforms(gridOrInstance);
	}
	else if(typeof(gridOrInstance) == "object") obj = gridOrInstance;
	else return false;
	if(typeof(obj.kind) == "string" && obj.kind == "grid-data") obj = obj.store;
	if(typeof(obj.expand) != "function") return false;
	var grid = obj;
	obj = expandedFunOrName;
	if(typeof(obj) == "string" && obj != "") obj = eval(obj);
	var funObj = null;
	if(typeof(obj) == "function") funObj = obj;
	var r= grid._h2.get[rowId];
	grid.__excuteAtOnce = false;
	grid.__expandOwner = this;
	if(!funObj){
		if(r && r.state=="plus") grid.expand(rowId);
		else{
			grid.__excuteAtOnce = true;
			grid.__expandOwner.__treeExpandListener.apply(grid, [grid.getRowById(rowId), rowId]);
		}
		return true;
	}                                              

	if(typeof(grid.__treeExpandListenerDataInfo) != "object"){
		grid.__treeExpandListenerDataInfo = {"invoke": null, "params": null, "caller": null};
		grid.attachEvent("onRowExpand", grid.__expandOwner.__treeExpandListener, grid);
	}
	grid.__treeExpandListenerDataInfo.invoke = funObj;
	grid.__treeExpandListenerDataInfo.caller = caller;
	grid.__treeExpandListenerDataInfo.params = new Array();
	for(var i = 4; i < arguments.length; i ++){
		grid.__treeExpandListenerDataInfo.params.push(arguments[i]);
	}
	if(r && r.state=="plus") grid.expand(rowId);
	else{
		grid.__excuteAtOnce = true;
		grid.__expandOwner.__treeExpandListener.apply(grid, [grid.getRowById(rowId), rowId]);
	}
	return true;
}

justep.QuickLocate.prototype.__treeExpandListener = function(row){
	var curGird = this;
	if(!curGird) return;
	if(!(curGird.__treeExpandListenerDataInfo)) return;
	var fun = curGird.__treeExpandListenerDataInfo.invoke;
	var caller = curGird.__treeExpandListenerDataInfo.caller;
	var params = curGird.__treeExpandListenerDataInfo.params;
	var excuteAtOnce = typeof(curGird.__excuteAtOnce) == "boolean" && curGird.__excuteAtOnce == true;
	curGird.__treeExpandListenerDataInfo.invoke = null;
	curGird.__treeExpandListenerDataInfo.caller = null;
	curGird.__treeExpandListenerDataInfo.params = null;
	curGird.__excuteAtOnce = false;
	if(typeof(fun) != "function") return;
	var rowId = row?row.idd:(arguments.length > 1?arguments[1]:"");
	params.unshift(rowId);
	params.unshift(curGird);
	if(excuteAtOnce) fun.apply(caller, params);
	else window.setTimeout(function(){ fun.apply(caller, params); }, 200);
}

justep.QuickLocate.prototype.__expandTreeByIdPath = function(gridOrInstance, IdPath, findedFunOrName){
	if(!findedFunOrName) return false;
	var findedFun = null;
	if(typeof(findedFunOrName) == "string"){
		if(findedFunOrName == "") return false;
		eval("var obj = " + findedFunOrName + ";");
		if(obj && typeof(obj) == "function") findedFun = obj;
	}
	else if(typeof(findedFunOrName) == "function") findedFun = findedFunOrName;
	if(!findedFun) return false;
	IdPath = justep.String.trim(IdPath);
	if(IdPath == "") return false;
	var expandInnerFun = function(grid, rowId, paramInfo){
			if(!grid || !rowId || rowId == "" || !paramInfo) return false;
			if(!(paramInfo.list) || paramInfo.list.length <= 0) return false ;
			if(rowId != paramInfo.list.shift()) return;
  			if(paramInfo.list.length > 1) return grid.__expandOwner.__expandTree(grid, paramInfo.list[0], expandInnerFun, paramInfo, paramInfo);
  			else if(paramInfo.list.length <= 1){
  				var newId = rowId;
  				if(paramInfo.list.length == 1) newId = paramInfo.list[0];
  				var funx = paramInfo.fun;
  				if(funx && typeof(funx) == "function")
  					funx.call(grid, grid, newId);
  				return true;
  			}
  			return false;
    	};
    var expandText = IdPath;
    var list = expandText.split("/");
    if(list.length <= 0) return false;
    var params = {"list": list, "fun": findedFun};
    if(list.length == 1){
    	var grid = null;
		if(typeof(gridOrInstance) == "string"){
			if(gridOrInstance != "") grid = xforms(gridOrInstance);
		}
		else if(typeof(gridOrInstance) == "object") grid = gridOrInstance;
		if(grid){
			grid.store.__expandOwner = this;
        	var tempParams = new Array();
        	tempParams.push(grid.store);
        	tempParams.push(list[0]);
        	tempParams.push(params);
        	return expandInnerFun.apply(params, tempParams);
		}
		return false;
    }
    else return this.__expandTree(gridOrInstance, list[0], expandInnerFun, params, params);
}
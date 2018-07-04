/**
 * @param	gridOrInstance		需要定位的grid或者instance，必选项，与justep.QuickLocate中的参数gridOrInstance含义相同
 * @param	dataModel			需要查询数据用的数据模块，必选项，类型为string，例如：/system/data/opm
 * @param	sql					需要查询的sql语句，多个sql语句之间用“；”隔开，多个sql语句用别名进行统一，必选项，类型为string，
 * 								其中[QUICKTEXT]为查询文本的占位符。
 * @param	displayMap			需要显示的字段(为sql语句中的别名)与显示名称的对应关系，必选项，类型为string，多个之间用；隔开，
 * 								字段和名称用=隔开，形如：字段=字段的显示名称,字段=字段的显示名称....
 * @param	commonTrans			需要查询但是不需要显示的字段(为sql语句中的别名)的转换关系，可选项，类型为string，多个之间用；隔开，
 * 								原字段和目标名称=隔开，形如：原字段=目标名称,原字段=目标字段....
 * @param	locateField			获取定位所用path所存储的字段名称(为sql语句中的别名)，必选项，类型为string
 * @param	ensurePathFunOrName	定位时允许重新获取path的函数的函数名或者函数对象，可选项，该函数声明如下：
 * 									function XXX(source, node, idPath){
 * 										//source	为快速定位对象justep.DbQuickLocate
 * 										//node		为存储数据的xml节点
 * 										//idPath	为当前需要定位的idPath
 * 										return realIdPath; //返回真正的idPath
 * 									}
 * @param	offset				可选项，与justep.QuickLocate中的参数offset含义相同
 * @param	autoDropDown		可选项，与justep.QuickLocate中的参数autoDropDown含义相同
 */
justep.DbQuickLocate = function(gridOrInstance, dataModel, sql, displayMap, commonTrans, locateField, ensurePathFunOrName, offset, autoDropDown){
	this.__dataModel = dataModel;
	this.__sql = sql;
	this.__displayMap = displayMap;
	this.__commonTrans = commonTrans;
	this.__locateField = locateField;
	this.__ensurePathFunOrName = ensurePathFunOrName;
	this.__debug = false;
	this.__onOneOffLocated = undefined;
	this.__onFilterLocate = undefined;
	this.__onLocated = undefined;

	this.__QuickLocate = new justep.QuickLocate(gridOrInstance, function(source, value){
		if(!source) return;
		var locateObject = source.__owner;
		if(!locateObject) return;

		var map = locateObject.__displayMap;
		map = typeof(map) == "string" && map != ""?map:"";
		if(map == "") return;
		var maps = new Array();

		var searchMap = new Array();
		searchMap.push(locateObject.__locateField.toUpperCase() + "=" + locateObject.__locateField);
		var list = map.split(",");
		for(var i = 0; i < list.length; i++){
			var tm = justep.String.trim(list[i]);
			if(!tm || tm == "") continue;
			var tx = tm.split("=");
			var field = tx;
			var name = tx;
			if(tx.length > 1){
				var xtm = justep.String.trim(tx[0]);
				if(xtm != "") field = xtm;
				name = tx[1];
			}
			searchMap.push(field.toUpperCase() + "=" + field);
			maps.push({field: field, name: name});
		}
		var commonTrans = locateObject.__commonTrans;
		if(typeof(commonTrans) == "string" && commonTrans != ""){
			var xt = commonTrans.split(";");
			for(var i = 0; i < xt.length; i++) searchMap.push(xt[i]);
		}

		var imageURL = window.location.protocol + "//" + window.location.host + justep.Request.convertURL("/UI/system/components/quickLocate/images/grid-hrow.gif", true);
		var titleStyle = "background-image: url('" + imageURL + "'); background-repeat: repeat-x; background-position-y: center";
		var s = "<table border=\"0\" cellpadding=\"1\" cellspacing=\"2\" style=\"font-size:10pt;width:100%\"><tr height=\"20\"><td align=\"center\" style=\"" + titleStyle + "\" nowrap=\"true\">&nbsp;</td>";

		for(var i = 0; i < maps.length; i++){
			var tm = maps[i];
			if(!tm) continue;
			s += "<td align=\"center\" style=\"" + titleStyle + "\" nowrap=\"true\">" + tm.name + "</td>";
		}
		s += "</tr>";
		s += "</table>";

		var firstPath = "";
		var firstNode = null;
		var content = document.createElement("DIV");
		content.style.width = "100%";
		//content.style.height = "200";
		content.style.overflowY = "auto";
		content.style.backgroundColor = "white";
		content.innerHTML = s;
		content.__dblclick = function(){
			var row = this;
			var table = row.parentNode.parentNode;
			if(!table || !row) return;
			table.__focusRow(row);

			var path = row.__idPath;
			var quickLoacateOwner = row.__owner;
			if(!quickLoacateOwner || !path) return;
			quickLoacateOwner.locate(row.__node, path);
		};
		content.__keydown = function(){
			var row = this;
			var table = row.parentNode.parentNode;
			if(!table || !row) return;
			if (event.keyCode == 38){
				table.__focusRow(table.__getPrevRow());
				return;
			}else if (event.keyCode == 40){
				table.__focusRow(table.__getNextRow());
				return;
			}else if (event.keyCode != 13) return;
			var tmRow = table.__getCurrentRow();
			if(!tmRow) return;
			var path = tmRow.__idPath;
			var quickLoacateOwner = tmRow.__owner;
			if(!quickLoacateOwner || !path) return;
			quickLoacateOwner.locate(tmRow.__node, path);
		};
		content.__error = function(error){
			alert(error);
		};
		var searchFun = locateObject.excuteSQLQuery;
		var tables = content.getElementsByTagName("TABLE");
		if(tables.length > 0 && searchFun){
			var table = tables[0];
			table.__getCurrentRow = function(){
				var list = table.getElementsByTagName("TR");
				for(var i = 0; i < list.length; i++){
					var tmRow = list[i];
					var tm = tmRow.__focus;
					if(typeof(tm) == "boolean" && tm == true){
						return tmRow;
					}
				}
				return null;
			};
			table.__getPrevRow = function(){
				var cnt = table.rows.length;
				if(cnt <= 0) return null;
				var row = table.__getCurrentRow();
				if(!row) return table.rows[0];
				if(cnt == 1) return row;
				var idx = row.rowIndex;
				if(idx - 1 > 0) idx -= 1;
				else idx = cnt - 1;
				return table.rows[idx];
			};
			table.__getNextRow = function(){
				var cnt = table.rows.length;
				if(cnt <= 0) return null;
				var row = table.__getCurrentRow();
				if(!row) return table.rows[0];
				if(cnt == 1) return row;
				var idx = row.rowIndex;
				if(idx + 1 < cnt) idx += 1;
				else idx = 1;
				return table.rows[idx];
			};
			table.__focusRow = function(newRow){
				if(!newRow) return;
				var oldRow = table.__getCurrentRow();
				if(oldRow){
					oldRow.__focus = false;
					oldRow.style.backgroundColor = oldRow.__srcBackColor;
				}
				if(newRow){
					newRow.__focus = true;
					newRow.style.backgroundColor = "#FFFFCC";
				}
			};

			var sql = locateObject.__sql;
			var list = locateObject.__sql.match(/\[[^\]]*[Qq][Uu][Ii][Cc][Kk][Tt][Ee][Xx][Tt][^\[]*\]/g);
			if(list && list.length > 0){
				for(var i = 0; i < list.length; i++){
					var part = list[i];
					var newPart = part.replace(/\[|\]/g,"").replace(/[Qq][Uu][Ii][Cc][Kk][Tt][Ee][Xx][Tt]/g, "\"" + value + "\"");
					eval("newPart = " + newPart + ";");
					sql = sql.replace(part, newPart);
				}
			}
			var doc = searchFun(locateObject.__dataModel, sql, searchMap.join(","), locateObject.__debug, content.__error);
			if(doc){
				var customCellEvent = null;
				var obj = locateObject.__customCell;
				if(typeof(obj) == "function") customCellEvent = obj;
				else if(typeof(obj) == "string" && obj != "") eval("if(typeof(" + obj + ")=='function') customCellEvent=" + obj + ";");

				var locateField = locateObject.__locateField;
				
				var filterDataFun = null;
				obj = locateObject.__onFilterLocate;
				if(typeof(obj) == "function") filterDataFun = obj;
				else if(typeof(obj) == "string" && obj != "") eval("if(typeof(" + obj + ")=='function') filterDataFun=" + obj + ";");
				
				var idx = 0;
				var list = justep.XML.eval(doc, "./item/record");
				for(var i = 0; i < list.length; i++){
					var node = list[i];
					var idPath = justep.XML.getNodeText(node, "./" + locateField + "/text()", "");
					var rt = true;
					if(filterDataFun) rt = filterDataFun(locateObject, node, idPath);
					if(!(typeof(rt) == "boolean" && rt == true)) continue;
					
					var tmTr = table.insertRow();
					tmTr.ondblclick = content.__dblclick;
					tmTr.onkeydown = content.__keydown;
					tmTr.__node = node;
					tmTr.__idPath = idPath;
					tmTr.__owner = locateObject;
					tmTr.__srcBackColor = idx % 2 == 0?"#E3EBF7":"white";
					tmTr.style.cursor = "default";
					tmTr.style.backgroundColor = idx % 2 == 0?"#E3EBF7":"white";
					tmTr.style.height = "20px";
					if(!firstNode){
						tmTr.__focus = true;
						tmTr.style.backgroundColor = "#FFFFCC";
						firstPath = idPath;
						firstNode = node;
					}
					var std = tmTr.insertCell();
					std.noWrap = true;
					std.innerText = idx + 1;
					std.align = "center";
					idx += 1;

					for(var j = 0; j < maps.length; j++){
						var tmMap = maps[j];
						if(!tmMap) continue;
						var td = tmTr.insertCell();
						td.noWrap = true;
						var srcText = justep.XML.getNodeText(node, "./" + tmMap.field + "/text()", "");

						td.innerHTML = customCellEvent?customCellEvent(locateObject, node, tmMap.field, srcText):srcText;
					}
				}
			}
		}
		if(firstPath && firstPath != "" && firstNode) locateObject.locate(firstNode, firstPath);
		return content;
	}, offset, autoDropDown);
	this.__QuickLocate.__owner = this;
	this.__currentNode = null;
	this.__currentIdPath = null;
	this.__QuickLocate.setLocateNextEvent(function(source, popBoard){
			var tables = popBoard.getElementsByTagName("TABLE");
			if(!tables || tables.length <= 0) return;
			var table = null;
			for(var i = 0; i < tables.length; i++){
				var tm = tables[i];
				if(tm && tm.__getNextRow){
					table = tm;
					break;
				}
			}
			if(!table) return;
			var nextRow = table.__getNextRow();
			if(!nextRow) return;
			table.__focusRow(nextRow);

			var path = nextRow.__idPath;
			var quickLoacateOwner = nextRow.__owner;
			if(!quickLoacateOwner || !path) return;
			quickLoacateOwner.locate(nextRow.__node, path);
		});
	this.__QuickLocate.setLocatedEvent(function(source, grid, rowId){
			if(!source) return;
			var locateObject = source.__owner;
			if(!locateObject) return;
			
			var fun = null;
			var obj = locateObject.__onLocated;
			if(typeof(obj) == "function") fun = obj;
			else if(typeof(obj) == "string" && obj != "") eval("if(typeof(" + obj + ")=='function') fun = " + obj + ";");
			if(fun) fun(locateObject, grid, rowId, locateObject.__currentNode, locateObject.__currentIdPath);
			fun = null;
			obj = locateObject.__onOneOffLocated;
			locateObject.__onOneOffLocated = undefined;
			if(typeof(obj) == "function") fun = obj;
			else if(typeof(obj) == "string" && obj != "") eval("if(typeof(" + obj + ")=='function') fun = " + obj + ";");
			if(fun) fun(locateObject, grid, rowId, locateObject.__currentNode, locateObject.__currentIdPath);			
		});
}

justep.DbQuickLocate.prototype.getMain = function(){
	return this.__QuickLocate.getMain();
}

justep.DbQuickLocate.prototype.getInput = function(){
	return this.__QuickLocate.getInput();
}

justep.DbQuickLocate.prototype.getSearchImage = function(){
	return this.__QuickLocate.getSearchImage();
}

justep.DbQuickLocate.prototype.getDropDownImage = function(){
	return this.__QuickLocate.getDropDownImage();
}

justep.DbQuickLocate.prototype.locate = function(node, idPath){
	var fun = null;
	var tm = this.__ensurePathFunOrName;
	if(typeof(tm) == "function") fun = tm;
	else if(typeof(tm) == "string" && tm != "") eval("if(typeof(" + tm + ")=='function') fun = " + tm + ";");
	var realIdPath = idPath;
	if(fun) realIdPath = fun(this, node, idPath);
	this.__currentNode = node;
	this.__currentIdPath = realIdPath;
	return this.__QuickLocate.locate(realIdPath);
}

justep.DbQuickLocate.prototype.setDebug = function(debug){
	this.__debug = debug;
}

justep.DbQuickLocate.prototype.setSQL = function(sql){
	this.__sql = sql;
}

/**
 * 设置自定义重绘单元格的事件
 *
 * @param	onCustomCell	必选项，绘制单元格时调用的函数的函数名或者函数对象，该函数的声明如下：
 * 								function XXX(source, node, field, text){
 * 									//source	为快速定位对象justep.DbQuickLocate
 * 									//node		为存储数据的xml节点
 * 									//field		当前单元格对应的field
 * 									//text		当前单元格对应的值
 * 								}
 */
justep.DbQuickLocate.prototype.setCustomCellEvent = function(onCustomCell){
	this.__customCell = onCustomCell;
}

/**
 * 设置定位成功后的回调函数
 * @param	onLocated	定位成功后的函数的函数名或者函数对象，必选项，该函数声明如下：
 * 							function XXX(source, grid, rowId, node, idPath){
 * 								//source	快速定位对象，即justep.DbQuickLocate的返回值
 * 								//grid		定位的grid对象
 * 								//rowId		定位到的rowId
 * 								//node		当前的定位的数据的xml节点
 * 								//idPath	当前的定位的idPath
 * 							}
 */
justep.DbQuickLocate.prototype.setLocatedEvent = function(onLocated){
	this.__onLocated = onLocated;
}

/**
 * 设置定位成功后的回调函数(一次性)
 * @param	onOneOffLocated	定位成功后的函数的函数名或者函数对象，必选项，该函数声明如下：
 * 							function XXX(source, grid, rowId, node, idPath){
 * 								//source	快速定位对象，即justep.DbQuickLocate的返回值
 * 								//grid		定位的grid对象
 * 								//rowId		定位到的rowId
 * 								//node		当前的定位的数据的xml节点
 * 								//idPath	当前的定位的idPath
 * 							}
 */
justep.DbQuickLocate.prototype.setOneOffLocatedEvent = function(onOneOffLocated){
	this.__onOneOffLocated = onOneOffLocated;
}

/**
 * 设置对展现的数据进行过滤的函数
 * @param	onFilterLocate	对展现的数据进行过滤的函数或者函数对象，必选项，该函数声明如下：
 * 								function XXX(source, node, idPath){
 *									//source	快速定位对象，即justep.DbQuickLocate的返回值
 *	 								//node		当前的定位的数据的xml节点
 * 									//idPath	当前的定位的idPath
 * 									return true; //明确返回true才表示该数据有效
 * 								} 
 */
justep.DbQuickLocate.prototype.setFilterLocateEvent = function(onFilterLocate){
	this.__onFilterLocate = onFilterLocate;
}

justep.DbQuickLocate.prototype.excuteSQLQuery = function(dataModel, sqlsText, map, debug, errorMsgFunOrName){
	var param = "<parameter><cmd><jscheme:xml xmlns:jscheme=\"http://www.justep.com/Scheme#\"><root data-model='" + dataModel + "' map='" + map + "' debug='" + (typeof(debug) == "boolean" && debug == true?"true":"false")  + "'><![CDATA[" + sqlsText + "]]></root></jscheme:xml></cmd></parameter>";
	var r = justep.Request.sendBizRequest("/SA/OPM/system/systemProcess", "mainActivity", 'excuteSQLQueryAction', param, null, null, true);
	var s = "";
	if(justep.Request.isBizSuccess(r)){
		var node = justep.XML.eval(r.responseXML, "/root/data/jscheme:xml/root/@success", "single", "xmlns:jscheme=\"http://www.justep.com/Scheme#\"");
		if(node && node.value == "true"){
			return justep.XML.eval(r.responseXML, "/root/data/jscheme:xml/root", "single", "xmlns:jscheme=\"http://www.justep.com/Scheme#\"");
		}
		node = justep.XML.eval(r.responseXML, "/root/data/jscheme:xml/root/@message", "single", "xmlns:jscheme=\"http://www.justep.com/Scheme#\"");
		if(node) s = node.nodeValue;
	}else s = justep.Request.getServerError(r.responseXML, "失败！");
	var fun = null;
	if(typeof(errorMsgFunOrName) == "function") fun = errorMsgFunOrName;
	else if(typeof(errorMsgFunOrName) == "string" && errorMsgFunOrName != "") eval("if(typeof(" + errorMsgFunOrName + ")=='function') fun = " + errorMsgFunOrName + ";");
	if(fun) fun(s);
	return null;
}
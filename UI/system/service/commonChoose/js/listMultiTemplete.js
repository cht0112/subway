/**
 * 弹出对话框 list - multi 对应js
 * 
 * @createDate 2010年4月12日
 * @author zhangn
 */
var chooseData = {
	returnData : null
}
/**
 * 在以选区域创建显示内容 checkbox + label
 * 
 * @parameters
 * @label 显示在页面的内容
 * @id 主键
 * @loader 当前选择最后要返回的数据集
 * 
 */
chooseData.showCheckboxUI = function(label, id, loader) {
	var parentContent = document.getElementById('choose-parent');
	if (!parentContent)
		return;
	var childContent = document.getElementById(id + "input"); /* 通过id判断已经存在的，不再添加 */
	if (childContent)
		return;
	var cb = document.createElement("input");
	cb.type = "checkbox";
	cb.value = id;
	cb.id = id + "input";
	cb.loader = loader;
	parentContent.appendChild(cb);
	var fnt = document.createElement("font");
	fnt.size = "2";
	fnt.innerHTML = label + "&nbsp;&nbsp;";
	fnt.id = id + "font";
	parentContent.appendChild(fnt);
	var countObj = document.getElementById('select-count-value');
	countObj.innerHTML = parseInt(countObj.innerHTML) + 1;

}
/**
 * 在已选区域添加一条已选
 * 
 * @parameters
 * @id 主键
 */
chooseData.addSelectRow = function(id) {
	var loader = chooseData.constructSelectData(id);
	var showAlias = document.getElementById('displayAlias').value;
	var showValue = null;
	if (showAlias)
		showValue = justep.xbl('main').getStore().getValueById(id, justep.String.trim(showAlias));
	if (!showValue)
		showValue = id;
	chooseData.showCheckboxUI(showValue, id, loader);
}
/**
 * 从已选区域删除一条已选
 * 
 * @paramters
 * @id 主键
 * 
 */
chooseData.removeSelectRow = function(id) {
	var parentContent = document.getElementById('choose-parent');
	var input = document.getElementById(id + "input");
	if (input)
		parentContent.removeChild(input);
	var font = document.getElementById(id + "font");
	if (font) {
		parentContent.removeChild(font);
		var countObj = document.getElementById('select-count-value');
		countObj.innerHTML = parseInt(countObj.innerHTML) - 1;
	}
}

/**
 * 处理grid一条已选
 * 
 * @evt xxforms-row-checkeds事件
 */
chooseData.checkSelectRow = function(evt) {
	var checked = evt.checked;
	var id = evt.rowId;
	chooseData.helpCheckSelectRow(id, checked);
}

chooseData.helpCheckSelectRow = function(id, checked) {
	if (checked)
		chooseData.addSelectRow(id);
	else
		chooseData.removeSelectRow(id);
}
/**
 * 处理grid 全选
 * 
 * @evt xxforms-row-checked-all事件
 */
chooseData.checkSelectRows = function(evt) {
	var checked = evt.checked;
	if (checked) {
		var ids = evt.grid.getCheckedRowIds();
		for (var i = 0; i < ids.length; i++) {
			chooseData.helpCheckSelectRow(ids[i], checked);
		}
	} else {
		var ids = evt.grid.getAllRowIds();
		ids = ids.split(",");
		for (var i = 0; i < ids.length; i++) {
			chooseData.helpCheckSelectRow(ids[i], checked);
		}
	}
}
/**
 * 依据id 和 配置构建一行返回数据集
 * 
 * @id 主键
 */
chooseData.constructSelectData = function(id) {
	var dataStr = "";
	var store = justep.xbl('main').getStore();
	var relations = document.getElementById('returnAliasList').value.split(",");
	if (relations && relations.length > 0) {
		for (var i = 0; i < relations.length; i++) {
			var relation = justep.String.trim(relations[i]);
			var value = store.getValueById(id, relation);
			if (!value)
				value = "";
			dataStr = dataStr + "<cell>" + value + "</cell>"
		}
	}
	dataStr = "<row id=\"" + id + "\">" + dataStr + "</row>";
	if ("" == dataStr)
		dataStr = "<rows/>"
	else
		dataStr = "<rows>" + dataStr + "</rows>";
	return dataStr;
}
/**
 * 删除在已选区域选中的数据
 */
chooseData.clearSelected = function() {
	var parent = document.getElementById("choose-parent");
	var ids = [];
	if (parent) {
		var list = parent.getElementsByTagName("INPUT");
		var k = 0; 
		for (var i = 0; i < list.length; i++) {
			if (list[i].type != "checkbox")
				continue;
			if (list[i].checked == false)
				continue;
			var id = list[i].value;
			chooseData.clearGridCheck(id);
			ids[k] = id;
			k++ ;
			
		}
		for (var i = 0 ; i < ids.length ;i++){
			chooseData.removeSelectRow(ids[i]);
		}
	}
}
/**
 * 删除在已选区域所有的数据
 */
chooseData.clearAllSelected = function() {
	var parent = document.getElementById("choose-parent");
	if (parent) {
		var list = parent.getElementsByTagName("INPUT");
		for (var i = 0; i < list.length; i++) {
			var obj = list[i];
			var id = obj.value;
			chooseData.clearGridCheck(id);
		}
		parent.innerHTML = "";
	}
	var countObj = document.getElementById('select-count-value');
	countObj.innerHTML = 0;
}
/**
 * 去除grid上特定id的选择状态
 */
chooseData.clearGridCheck = function(id) {
	var store = justep.xbl('main').getStore();
	store.setValueById(id, "ch", "0");
}
/**
 * 添加grid上特定id 的选择状态
 */
chooseData.checkGrid = function() {
	var parent = document.getElementById("choose-parent");
	if (parent) {
		var list = parent.getElementsByTagName("INPUT");
		for (var i = 0; i < list.length; i++) {
			var id = list[i].value;
			var store = justep.xbl('main').getStore();
			store.setValueById(id, "ch", "1");
		}
	}
}
var parentObj;
var onWindowSend;
/**
 * dialog-select 接口函数。用来获取从父页面传入的参数
 */
function acceptData(event) {
	chooseData.clearAllSelected();
	chooseData.returnData = null;
	
	var relations = document.getElementById('returnAliasList').value;
	try{
	var data = event.data;
	var paraStore = data?data.getSimpleStore():null;
	var paramsDocLoader = null;
	if(paraStore)
		paramsDocLoader = paraStore.getDoc();
	
	var nodeList = paramsDocLoader?justep.XML.eval(justep.XML.fromString(paramsDocLoader),
			"/rows/row", justep.XML.ResultType.array):null;

	if (nodeList) {
		var showRelation = document.getElementById('displayAlias').value;
		var showLabelPosition = null;
		if(relations)
		    relations = relations.split(',');
		if (relations && relations.length > 0) {
			for (var i = 0; i < relations.length; i++) {
				if (justep.String.trim(showRelation) == justep.String.trim(relations[i])) {
					showLabelPosition = i + 1;
					break;
				}
			}
		}
		for (var i; i < nodeList.length; i++) {
			var node = nodeList[i];
			var label = null;
			if (showLabelPosition) {
				label = justep.XML.getNodeText(node, "./cell[" + showLabelPosition
						+ "]");
			}
			var id = justep.XML.getNodeText(node, "./@id");

			if (!label)
				label = id;
			var nodeStr = "<rows>" + justep.XML.toString(node) + "</rows>";
			chooseData.showCheckboxUI(label, id, nodeStr);
		}
	}
	chooseData.checkGrid();
	/* 处理动态显示列 */
  
	var store = justep.xbl('main').getStore();
	var showList = data?data.getShowAlias():null;    
	showList = !showList || showList == ""? null : showList.split(",");
	if (showList && showList.length > 0) {
		for (var i = 0; i < showList.length; i++) {
			var index = store.getColIndexById(justep.String.trim(showList[i]));
			if (index >= 0) {
				store.setColumnHidden(index, false);
			}

		}
	} else {
		for (var i = 0; i < store.getColumnsNum(); i++) {
			store.setColumnHidden(store.getColIndexById(store.getColumnId(i)),
					false);  
		}
	}
	//适应列宽
	store.setSizes();
	
	}catch(e){
		
	}	
}

function windowSend() {
	if (chooseData.returnData == null) {
		var relations = document.getElementById('returnAliasList').value;
		chooseData.returnData = new SimpleStore("returnData", relations);
	}	
	var parent = document.getElementById("choose-parent");
	if (parent) {
		var list = parent.getElementsByTagName("INPUT");
		for (var i = 0; i < list.length; i++) {  
			var obj = list[i];
			chooseData.returnData.loadData(null, obj.loader, null, true);
		}
	}
	var showRelation = document.getElementById('displayAlias').value;
	return new justep.CommonChoosePara(showRelation ,chooseData.returnData);
}
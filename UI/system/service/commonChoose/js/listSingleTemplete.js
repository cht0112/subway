var chooseData = {
	returnData : null
};

chooseData.showCheckboxUI = function(label) {
	var parentContent = $('#choose-parent')[0];
	if (!parentContent)
		return;
	parentContent.innerHTML = "";
	var fnt = document.createElement("font");
	fnt.size = "2";
	fnt.innerHTML = label;
	parentContent.appendChild(fnt);
	/* 显示数量 */
	var countObj = $('#select-count-value')[0];
	if (countObj && 0 == parseInt(countObj.innerHTML)) {
		countObj.innerHTML = 1;
	}
};

chooseData.gridRowDblClick = function(){
//	chooseData.indexChangeFun();
	$("#ensure-btn").click();
};

chooseData.indexChangeFun = function() {
	var ins = justep.xbl('main').getInstance();
	if (!ins)
		return false;
	var docLoader = chooseData.getDocLoader('choose-parent');
	if (!docLoader)
		return false;
	var rowId = ins.store.getSelectedRowId();
	justep.XML.removeNodes(docLoader, "/rows//row");
	if (rowId != "_is_root_") {
		var loader = chooseData.constructSelectData();
		var list1 = justep.XML.eval(loader, "//row",justep.XML.ResultType.array);
		var list2 = [];
		for(var j = 0; j < list1.length; j++){
			list2[j] = list1[j].cloneNode(true);
		}
		justep.XML.appendChildren(docLoader ,"/rows" ,list2);
	}
};

chooseData.constructSelectData = function() {
	var dataStr = "";
	var ins = justep.xbl('main').getInstance();
	var relations = $('#returnAliasList').attr('value').split(",");
	if (relations && relations.length > 0 && relations[0]!="") {
		for (var i = 0; i < relations.length; i++) {
			var relation = justep.String.trim(relations[i]);
			var value = ins.getValueByName(relation);
			if (!value)
				value = "";
			dataStr = dataStr + "<cell>" + value + "</cell>";
		}
	}
	dataStr = "<row id=\"" + ins.store.getSelectedRowId() + "\">" + dataStr
			+ "</row>";
	if ("" == dataStr)
		dataStr = "<rows/>";
	else
		dataStr = "<rows>" + dataStr + "</rows>";
	return justep.XML.fromString(dataStr);
};

chooseData.clearAllSelected = function() {
	var ins = justep.xbl('main').getInstance();
	if (!ins)
		return false;

	// 处理选中框
	var parentContent = $('#choose-parent')[0];
	if (!parentContent)
		return;
	parentContent.innerHTML = "";
	var docLoader = chooseData.getDocLoader('choose-parent');
	if (!docLoader)
		return false;
	justep.XML.removeNodes(docLoader, "/rows//row");
	// 处理数量
	var countObj = $('#select-count-value')[0];
	if (1 == parseInt(countObj.innerHTML)) {
		countObj.innerHTML = 0;
	}
};
chooseData.getDocLoader = function(ownerId) {
	var obj = document.getElementById(ownerId);
	if (!obj)
		return null;
	if (!(obj.docLoader))
		obj.docLoader = justep.XML.fromString("<rows/>");
	return obj.docLoader;
};
function acceptData(event) {
	/* 加载传入的数据 */
	var docLoader = chooseData.getDocLoader('choose-parent');
	if (!docLoader) return false;
	
	try{		
	var data = event.data;
	var paramStore = data?data.getSimpleStore():null;
	var paramsDocLoader = paramStore?justep.XML.fromString(paramStore.getDoc()):null;
	var rowNode = paramsDocLoader?justep.XML.eval(paramsDocLoader ,"/rows/row", justep.XML.ResultType.single):null;
	if (rowNode) {
		var showRelation = $('#displayAlias').attr('value');
		var showLabelPosition = null;
		relations = relations? relations.split(","):null;
		if (relations && relations.length > 0) {
			for (var i = 0; i < relations.length; i++) {
				if (justep.String.trim(showRelation) == justep.String.trim(relations[i])) {
					showLabelPosition = i + 1;
					break;
				}
			}
		}
		var label = justep.XML.getNodeText(paramsDocLoader,"/rows/row/cell[" + showLabelPosition+ "]");
		if (!label) {
			label =justep.XML.getNodeText(paramsDocLoader,"/rows/row/@id");
		}
		if (label) {
			chooseData.showCheckboxUI(label);
			justep.XML.appendChildren(docLoader, "/rows", rowNode.cloneNode(true));
		}
	}
	
	/* 处理动态显示列 */
	var store = justep.xbl('main').getStore();
	var showList = data?data.getShowAlias():null;
	showList = !showList || showList == "" ? null : showList.split(",");
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
	chooseData.indexChangeFun();
	var docLoader = chooseData.getDocLoader('choose-parent');
	var relations = document.getElementById('returnAliasList').value;
	chooseData.returnData = null;
	chooseData.returnData = new SimpleStore("returnData", relations);
	chooseData.returnData.loadData(null, justep.XML.toString(docLoader));
	var showRelation = document.getElementById('displayAlias').value;
	return new justep.CommonChoosePara(showRelation ,chooseData.returnData);
}
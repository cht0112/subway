var mainActivity = {};

mainActivity.grdMainRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
//	justep.xbl("iptTRAINING_NAME").input.focus();
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMain").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
//	justep.xbl("iptTRAINING_NAME").input.focus();
	var id = document.getElementById('insertTrigger1');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTrigger1").attr("src", tt);
	justep.xbl('insertTrigger1').setDisabled(true);
};

mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("iptTRAINING_NAME").input).attr("maxlength",50);
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('textarea2').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}});
};

mainActivity.deleteTriggerClick = function(event){
	var data = justep.xbl('dataMain');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的培训内容信息！");
	} else {
		if (confirm("是否确定删除数据？")) {
			for ( var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
			}
			if (deleteIDs != "") {
				data.deleteData(deleteIDs);
				data.saveData();
			}
		}
	}		
};

mainActivity.tabListSelect = function(event){
	var data = justep.xbl('dataMain');
	data.refreshData();	
};

/**
	name:treeSelect#onCloseup
	description: <b>[回调事件]</b> 关闭下拉事件
	@param event 事件属性:<br/>{"source":XFExtSelect对象,"label":选择的label,"rowID":行ID,"grid":下拉表格对象,"instance":下拉instance对象,"value":选择的value,"valueChanged":value是否改变}
*/
mainActivity.treeSelect1Closeup = function(event){
	debugger;
	var dataMain = justep.xbl("dataMain");
	var docNode = dataMain.getValue("sParentID", dataMain.getCurrentID());
	var docNodeTree = justep.xbl("docNodeTree");
	var id = docNodeTree.getCurrentID();
	//alert(id);
	if(docNode!='' &&docNode!=null){
		var docData = justep.xbl("docData");
		docData.setFilter("filter0", "SA_DocNode.sSize is not null and SA_DocNode.sKind <> 'dir' and SA_DocNode.sParentID ='"+id+"'");
		docData.refreshData();
		if(docData.getCount()==0){
			alert("本目录下没有有效的文件！");
		}
	}
	dataMain.setValue("TRAINING_DOC_ID",'');
	dataMain.setValue("sDocName",'');	
};


mainActivity.insertTrigger1Click = function(event){
	justep.xbl("dataMain").newData();
//	justep.xbl("tabpanel1").setTabActive("tabDetail");	
//	justep.xbl("iptTRAINING_NAME").input.focus();
	var id = document.getElementById('insertTrigger1');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertTrigger1").attr("src", tt);
	justep.xbl('insertTrigger1').setDisabled(true);
};

mainActivity.saveMasClick = function(event){
	var dataMain = justep.xbl("dataMain");
	dataMain.saveData();
	var id = document.getElementById('insertTrigger1');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertTrigger1").attr("src", tt);
	justep.xbl('insertTrigger1').setDisabled(false);
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMainValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);	
};

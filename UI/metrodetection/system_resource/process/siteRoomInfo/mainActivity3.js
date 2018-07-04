var mainActivity3 = {};
debugger;
mainActivity3.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity3.newItemClick = function(event){
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var id= document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src",tt);	
};

//<item id="barItem12"> 
//          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
//            onclick="personDetail.inserMore(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
//            style="border:none" title="新建" id="insertMas"/> 
//        </item>  
//}
//var id= document.getElementById('saveMas');
//id.disabled = true;
//var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
//$("#saveMas").attr("src",tt);
//var skill = justep.xbl("bizData2");
//skill.refreshData();
//insert.disabled = false;
//var tr = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
//$("#insertMas").attr("src",tr); 

mainActivity3.saveMore = function(event){
	justep.xbl("dataMaster").saveData();
	var id= document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src",tt);
	var idd= document.getElementById('insertMas');
	idd.disabled = false;
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src",t);		
};

mainActivity3.insertMore = function(event){
	justep.xbl("windowDialog1").open({
	openMode : "new"
	});
};

mainActivity3.tabListSelect = function(event){
	var id= document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src",tt);	
};

mainActivity3.save2More = function(event){
	justep.xbl("dataDetail").saveData();
	var id= document.getElementById('save2Mas');
	id.disabled = true;
	var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#save2Mas").attr("src",tt);
};


function assetDelete(event){
	var data = justep.xbl('dataMaster');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的工具信息！");
	} else {
		for (var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
		}
	}
}



/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/


/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/

/**
	name:windowDialog#onOpen
	@event 
description: <b>[回调型事件]</b>打开时触发
*/
mainActivity3.windowDialog1Open = function(event){
var projectDialog = justep.xbl("windowDialog1");
	projectDialog.setAutoSize(true);	
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity3.windowDialog1Close = function(event){
var mData = justep.xbl("dataDetail");
	mData.refreshData();
};





mainActivity3.grid1_iMAGEButtonClick = function(event){
	alert(0);
};


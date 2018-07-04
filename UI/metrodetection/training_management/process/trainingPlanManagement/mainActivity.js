var mainActivity = {};

mainActivity.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	var i = document.getElementById('saveMas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
//	var id = document.getElementById('save2Mas');
//	id.disabled = true;
//	var c = justep.Request.convertURL(
//			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
//	$("#save2Mas").attr("src", c);
//	justep.xbl('save2Mas').setDisabled(true);
};

mainActivity.newItemClick = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");		
	var checkRecordData = justep.xbl("dataMaster");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
	//alert(perId);
	dataMaster.setValue("PLAN_MAKER",perId);
	dataMaster.setValue("oPERATORNAME",name);
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	var ii = document.getElementById('saveMas');
	justep.xbl('insertMas').setDisabled(true);
	ii.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
//	justep.xbl("input1").input.focus();
//详细页面主数据新建按钮
	var id = document.getElementById('insertMas1');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas1").attr("src", tt);
	justep.xbl('insertMas1').setDisabled(true);

};



mainActivity.tabListSelect = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.refreshData();
};

mainActivity.saveMore = function(event){
	var d = justep.xbl("dataMaster");
	d.saveData();
	var idd = document.getElementById('insertMas');
	idd.disabled = false;
	var t = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src", t);
	justep.xbl('insertMas').setDisabled(false);
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);
	d.refreshData();
		var id = document.getElementById('insertMas1');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas1").attr("src", tt);
	justep.xbl('insertMas1').setDisabled(false);
};

//mainActivity.save2More = function(event){
//	justep.xbl("dataDetail").saveData();
//	justep.xbl("dataDetail").refreshData();
//	var id = document.getElementById('save2Mas');
//	id.disabled = true;
//	var tt = justep.Request.convertURL(
//			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
//	$("#save2Mas").attr("src", tt);
//	justep.xbl('save2Mas').setDisabled(true);
//};

mainActivity.insertMasClick = function(event){
debugger;
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
	var dataDetail = justep.xbl("dataDetail");
	dataDetail.setFilter("filter0", "RELATION_PLAN_SUBJECT.TRAINING_PLAN_ID ="+parseInt(id));
	dataDetail.refreshData();
	var list = new Array();
	var count = dataDetail.getCount();
	for(var i=0;i<count;i++){
		list[i]=dataDetail.getValue("COURSE_ID",dataDetail.getRowId(i));
	}
	justep.xbl("CourseDialog").open({
		list : list
	});
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
mainActivity.CourseDialogClose = function(event){
	var mData = justep.xbl("dataDetail");
	justep.xbl("dataDetail").saveData();
	mData.refreshData();
//	var id = document.getElementById('save2Mas');
//	id.disabled = false;
//	var tt = justep.Request.convertURL(
//			"/UI/system/images/standardToolbar/standard/save.gif", true);
//	$("#save2Mas").attr("src", tt);
//	justep.xbl('save2Mas').setDisabled(false);
};

/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
mainActivity.dataMasterValueChanging = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};

mainActivity.tabDetailSelect = function(event){
	var i = document.getElementById('saveMas');
	i.disabled = true;
	var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", cc);
	justep.xbl('saveMas').setDisabled(true);
//	var id = document.getElementById('save2Mas');
//	id.disabled = true;
//	var c = justep.Request.convertURL(
//			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
//	$("#save2Mas").attr("src", c);
//	justep.xbl('save2Mas').setDisabled(true);
};

mainActivity.deleteTriggerClick = function(event){
	var data = justep.xbl('dataMaster');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的培训计划信息！");
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

mainActivity.deleteTrigger1Click = function(event){
	var data = justep.xbl('dataDetail');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的培训课程信息！");
	} else {
		if (confirm("是否删除数据？")) {
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

mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl("input10").input).attr("maxlength",10);
	$(justep.xbl("input1").input).bind('keydown',function(evt){evt.preventDefault();});
	
};

mainActivity.insertMas1Click = function(event){
	var dataMaster = justep.xbl("dataMaster");
	dataMaster.newData();
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	//alert(orgData.getCount());
	var oprScode = orgData.getValue("sCode");
	//alert(oprScode);
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = '';
	var name = '';
	if(hrPerData.getCount()!=0){
		perId = hrPerData.getCurrentID();
		name = hrPerData.getValue("oPERATORNAME",perId);
	}
	
	//alert(perId);
	dataMaster.setValue("PLAN_MAKER",perId);
	dataMaster.setValue("oPERATORNAME",name);
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(true);
	var id = document.getElementById('insertMas1');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas1").attr("src", tt);
	justep.xbl('insertMas1').setDisabled(true);	
};

mainActivity.removeMasClick = function(event){
	var dataMaster = justep.xbl("dataMaster");
	var id = dataMaster.getCurrentID();
	if (confirm("是否删除数据？")) {
			dataMaster.deleteData(id);
			dataMaster.saveData();
	}
};

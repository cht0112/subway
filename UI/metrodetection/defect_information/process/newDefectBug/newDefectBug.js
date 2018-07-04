var newDefectBug = {};

newDefectBug.grdMainRowDblClick = function(event){
debugger;
	justep.xbl("tabpanel1").setTabActive("tabDetail");
	isEditOrSee();
};
function isEditOrSee(){
	debugger;
	var dataMain = justep.xbl("dataMain");
	var status =  dataMain.getValue("DEFECT_STATUS");
	var creator = dataMain.getValue("CREATOR");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId='';
	var sCode='';
	if(hrPerData.getCount()!= 0){
		var perId = hrPerData.getCurrentID();
		var sCode = hrPerData.getValue("Scode",perId);
	}
//	alert(sCode);
	if(parseInt(status)!=1 || justep.String.trim(creator)!=justep.String.trim(perId)){
		var i = document.getElementById('removeTrigger2');
		i.disabled = true;
		var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_remove.gif", true);
		$("#removeTrigger2").attr("src", cc);
		justep.xbl('removeTrigger2').setDisabled(true);
		justep.xbl('projectSelect').setDisabled(true);
		justep.xbl('gridSelect2').setDisabled(true);
		justep.xbl('gridSelect3').setDisabled(true);
		justep.xbl('iptFUNC_ID').setDisabled(true);
		justep.xbl('iptPLATFORM_INFO').setDisabled(true);
		justep.xbl('gridSelect1').setDisabled(true);
		justep.xbl('iptSEVERITY').setDisabled(true);
		justep.xbl('iptCC_PERSON').setDisabled(true);
		justep.xbl('iptPRIORITY').setDisabled(true);
		justep.xbl('iptDEFECT_DESC').setDisabled(true);
		justep.xbl('iptDEFECT_DETAIL').setDisabled(true);
		justep.xbl('iptMEMO').setDisabled(true);
	}else{
	debugger;
		var i = document.getElementById('removeTrigger2');
		i.disabled = false;
		var cc = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/remove.gif", true);
		$("#removeTrigger2").attr("src", cc);
		justep.xbl('removeTrigger2').setDisabled(false);
		justep.xbl('projectSelect').setDisabled(false);
		justep.xbl('gridSelect2').setDisabled(false);
		justep.xbl('gridSelect3').setDisabled(false);
		justep.xbl('iptFUNC_ID').setDisabled(false);
		justep.xbl('iptPLATFORM_INFO').setDisabled(false);
		justep.xbl('gridSelect1').setDisabled(false);
		justep.xbl('iptSEVERITY').setDisabled(false);
		justep.xbl('iptCC_PERSON').setDisabled(false);
		justep.xbl('iptPRIORITY').setDisabled(false);
		justep.xbl('iptDEFECT_DESC').setDisabled(false);
		justep.xbl('iptDEFECT_DETAIL').setDisabled(false);
		justep.xbl('iptMEMO').setDisabled(false);	
	}
}
newDefectBug.newItemClick = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
	dataMain.newData();
	justep.xbl('projectSelect').setDisabled(false);
	justep.xbl('gridSelect2').setDisabled(false);
	justep.xbl('gridSelect3').setDisabled(false);
	justep.xbl('iptFUNC_ID').setDisabled(false);
	justep.xbl('iptPLATFORM_INFO').setDisabled(false);
	justep.xbl('gridSelect1').setDisabled(false);
	justep.xbl('iptSEVERITY').setDisabled(false);
	justep.xbl('iptCC_PERSON').setDisabled(false);
	justep.xbl('iptPRIORITY').setDisabled(false);
	justep.xbl('iptDEFECT_DESC').setDisabled(false);
	justep.xbl('iptDEFECT_DETAIL').setDisabled(false);
	justep.xbl('iptMEMO').setDisabled(false);	
	var i = document.getElementById('removeTrigger2');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/remove.gif", true);
	$("#removeTrigger2").attr("src", cc);
	justep.xbl('removeTrigger2').setDisabled(false);
	
	var i = document.getElementById('insertTrigger1');
	i.disabled = true;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertTrigger1").attr("src", cc);
	justep.xbl('insertTrigger1').setDisabled(true);	
	
	var i = document.getElementById('saveTrigger2');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger2").attr("src", cc);
	justep.xbl('saveTrigger2').setDisabled(false);
	
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	if(hrPerData.getCount()>0){
		var perId = hrPerData.getCurrentID();
		dataMain.setValue("CREATOR",perId);
		dataMain.setValue("CREATOR_NAME",hrPerData.getValue("oPERATORNAME",perId));
	}
};

newDefectBug.projectSelectCloseup = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	var project = dataMain.getValue("PROJECT_ID",dataMain.getCurrentID());
//	var project = justep.xbl("projectSelectData").getCurrentID();
//	alert(project);
	if(project != null && project != ''){
		var productSelectData = justep.xbl('productSelectData');
		productSelectData.setFilter("filter0", "DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID ="+project);
		productSelectData.refreshData();
		if(productSelectData.getCount()>0){
			var productId = productSelectData.getCurrentId();
			var productName = productSelectData.getValue("PRODUCT_NAME",productId);
			dataMain.setValue("PRODUCT_IDID",productId);
			dataMain.setValue("PRODUCT_NAME",productName);
			var projectData = justep.xbl("projectSelectData");
			var id = projectData.getValue("PROJECT_MANAGER",projectData.getCurrentID());
			dataMain.setValue("ASSIGN_PERSON", id);
			var data =justep.xbl("hrPerData");
			data.setFilter("filter2", "HR_BASE_INFO ='"+id+"'");
			data.refreshData();
			if(data.getCount()>0){
				var name =data.getValue("oPERATORNAME");
				dataMain.setValue("ASSIGN_PERSON_NAME",name);
			}			
			var versionData = justep.xbl("versionData");	
			versionData.setFilter("filter0", "DEFECT_TRACK_VERSION_INFO.PRODUCT_ID = "+productId);
			versionData.refreshData();
			if(versionData.getCount()>0){
				var versionId = versionData.getCurrentID();
				var myVersionId = versionData.getValue("MAJOR_VERSION_NUMBER",versionId)+"."+versionData.getValue("MINOR_VERSION_NUMBER",versionId)+"."+versionData.getValue("REVISION_NUMBER",versionId);
				dataMain.setValue("VERSION_ID",versionId);
				dataMain.setValue("myVersionId",myVersionId);
			}else{
				//alert("本产品没有版本信息！");
				dataMain.setValue("VERSION_ID",'');
				dataMain.setValue("myVersionId",'');
				dataMain.setValue("MODULE_ID",'');
				dataMain.setValue("MODULE_NAME",'');			
				dataMain.setValue("FUNC_ID",'');
				dataMain.setValue("FUNC_NAME",'');	
				dataMain.setValue("ASSIGN_PERSON",'');
				dataMain.setValue("ASSIGN_PERSON_NAME",'');			
			}
			var moduleSelectData = justep.xbl("moduleSelectData");
			moduleSelectData.setFilter("filter0", "DEFECT_TRACK_MODULE_INFO.PRODUCT_IDID ="+productId);
			moduleSelectData.refreshData();	
			if(moduleSelectData.getCount()>0){
				var moduleId = moduleSelectData.getCurrentID();
				var moduleName = moduleSelectData.getValue("MODULE_NAME",moduleId);
				dataMain.setValue("MODULE_ID",moduleId);
				dataMain.setValue("MODULE_NAME",moduleName);		
				var funcSelectData = justep.xbl("funcSelectData");
				funcSelectData.setFilter("filter0", "DEFECT_TRACK_FUNC_INFO.MODULE_ID="+moduleId);
				funcSelectData.refreshData();
				if(funcSelectData.getCount()>0){
					var funcId = funcSelectData.getCurrentID();
					var funcName = funcSelectData.getValue("FUNC_NAME",funcId);
					dataMain.setValue("FUNC_ID",funcId);	
					dataMain.setValue("FUNC_NAME",funcName);	
				}else{
					//alert("本模块下没有功能！");
					dataMain.setValue("FUNC_ID",'');
				}
			}else{
				//alert("本产品下没有模块！");
				dataMain.setValue("MODULE_ID",'');
				dataMain.setValue("FUNC_ID",'');
			}
		}else{
			alert("此项目没有产品！");
			dataMain.setValue("VERSION_ID",'');
			dataMain.setValue("myVersionId",'');
			dataMain.setValue("MODULE_ID",'');
			dataMain.setValue("MODULE_NAME",'');			
			dataMain.setValue("FUNC_ID",'');
			dataMain.setValue("FUNC_NAME",'');
			dataMain.setValue("PRODUCT_IDID",'');
			dataMain.setValue("PRODUCT_NAME",'');
			dataMain.setValue("ASSIGN_PERSON",'');
			dataMain.setValue("ASSIGN_PERSON_NAME",'');	
		}
		
	}
};

newDefectBug.gridSelect2Closeup = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	var versionData = justep.xbl("versionData");
	var product = justep.xbl("productSelectData").getCurrentID();
	if(product != null && product != ''){
		versionData.setFilter("filter0", "DEFECT_TRACK_VERSION_INFO.PRODUCT_ID = "+product);
		versionData.refreshData();
		if(versionData.getCount()>0){	
			var versionId = versionData.getCurrentID();
			var myVersionId = versionData.getValue("MAJOR_VERSION_NUMBER",versionId)+"."+versionData.getValue("MINOR_VERSION_NUMBER",versionId)+"."+versionData.getValue("REVISION_NUMBER",versionId);
			dataMain.setValue("VERSION_ID",versionId);
			dataMain.setValue("myVersionId",myVersionId);
		}else{
			alert("此产品没有版本，无法新建缺陷！");
			dataMain.setValue("VERSION_ID",'');
			dataMain.setValue("myVersionId",'');
			dataMain.setValue("MODULE_ID",'');
			dataMain.setValue("MODULE_NAME",'');			
			dataMain.setValue("FUNC_ID",'');
			dataMain.setValue("FUNC_NAME",'');
			dataMain.setValue("ASSIGN_PERSON",'');
			dataMain.setValue("ASSIGN_PERSON_NAME",'');	
		}
		var moduleSelectData = justep.xbl("moduleSelectData");
		moduleSelectData.setFilter("filter0", "DEFECT_TRACK_MODULE_INFO.PRODUCT_IDID ="+product);
		moduleSelectData.refreshData();	
		if(moduleSelectData.getCount()>0){
			var moduleId = moduleSelectData.getCurrentID();
			var moduleName = moduleSelectData.getValue("MODULE_NAME",moduleId);
			dataMain.setValue("MODULE_ID",moduleId);
			dataMain.setValue("MODULE_NAME",moduleName);		
			var funcSelectData = justep.xbl("funcSelectData");
			funcSelectData.setFilter("filter0", "DEFECT_TRACK_FUNC_INFO.MODULE_ID="+moduleId);
			funcSelectData.refreshData();
			if(funcSelectData.getCount()>0){
				var funcId = funcSelectData.getCurrentID();
				var funcName = funcSelectData.getValue("FUNC_NAME",funcId);
				dataMain.setValue("FUNC_ID",funcId);	
				dataMain.setValue("FUNC_NAME",funcName);	
			}else{
				alert("本模块下没有功能！");
				dataMain.setValue("FUNC_ID",'');
				dataMain.setValue("FUNC_NAME",'');				
			}
		}else{
			alert("本产品没有模块");
			dataMain.setValue("MODULE_ID",'');
			dataMain.setValue("MODULE_NAME",'');			
			dataMain.setValue("FUNC_ID",'');
			dataMain.setValue("FUNC_NAME",'');
		}
	}
};

newDefectBug.gridSelect3Closeup = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	var funcSelectData = justep.xbl("funcSelectData");
	var module = justep.xbl("moduleSelectData").getCurrentID();
	if(module != null && module != ''){
		funcSelectData.setFilter("filter0", "DEFECT_TRACK_FUNC_INFO.MODULE_ID="+module);
		funcSelectData.refreshData();
		if(funcSelectData.getCount()>0){
			var funcId = funcSelectData.getCurrentID();
			var funcName = funcSelectData.getValue("FUNC_NAME",funcId);
			dataMain.setValue("FUNC_ID",funcId);	
			dataMain.setValue("FUNC_NAME",funcName);	
		}else{
			alert("本模块下没有功能！");
			dataMain.setValue("FUNC_ID",'');
		}
	}
};

newDefectBug.tabListSelect = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	dataMain.refreshData();	
};

newDefectBug.gridSelect2Dropdown = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	var id = dataMain.getValue("PROJECT_ID");
	if(id == null || id == ''){
		alert("请先选择项目！");
		var productSelectData = justep.xbl('productSelectData');
		productSelectData.setFilter("filter0", "1=0");
		productSelectData.refreshData();
	}
};

newDefectBug.gridSelect3Dropdown = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	var id = dataMain.getValue("PROJECT_ID");
	var productId = dataMain.getValue("PRODUCT_IDID");
	if(id == null || id == ''){
		alert("请先选择项目！");
		var productSelectData = justep.xbl('moduleSelectData');
		productSelectData.setFilter("filter0", "1=0");
		productSelectData.refreshData();
	}else if(productId == null || productId == ''){
		alert("请先选择产品");
		var productSelectData = justep.xbl('moduleSelectData');
		productSelectData.setFilter("filter0", "1=0");
		productSelectData.refreshData();
	}else{
		var productSelectData = justep.xbl('moduleSelectData');
		productSelectData.setFilter("filter0", "DEFECT_TRACK_MODULE_INFO.PRODUCT_IDID ="+productId);
		productSelectData.refreshData();
	}
};

newDefectBug.iptFUNC_IDDropdown = function(event){
debugger;
	var dataMain = justep.xbl("dataMain");
	var moduleId = dataMain.getValue("MODULE_ID");
	var id = dataMain.getValue("PROJECT_ID");
	var productId = dataMain.getValue("PRODUCT_IDID");
	if(id == null || id == ''){
		alert("请先选择项目！");
		var productSelectData = justep.xbl('funcSelectData');
		productSelectData.setFilter("filter0", "1=0");
		productSelectData.refreshData();		
	}else if(productId == null || productId == ''){
		alert("请先选择产品");
		var productSelectData = justep.xbl('moduleSelectData');
		productSelectData.setFilter("filter0", "1=0");
		productSelectData.refreshData();
	}else if(moduleId == null || moduleId == ''){
		alert("请先选择模块！");
		var productSelectData = justep.xbl('funcSelectData');
		productSelectData.setFilter("filter0", "1=0");
		productSelectData.refreshData();
	}	
};

newDefectBug.tabDetailSelect = function(event){
debugger;
	isEditOrSee();	
};

/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
newDefectBug.dataMainIndexChanged = function(event){
debugger;
	isEditOrSee();
};

newDefectBug.removeTriggerClick = function(event){
debugger;
	var dataMain = justep.xbl('dataMain');
	var id = dataMain.getCurrentID();
	var creator = dataMain.getValue("CREATOR",id);
	var perId = getLoginId();
	if(creator==perId){
		dataMain.deleteData(id);
	}else{
		alert("对不起，您无权删除此数据！");
	}
};

newDefectBug.removeTrigger2Click = function(event){
debugger;
	var dataMain = justep.xbl('dataMain');
	var id = dataMain.getCurrentID();
	dataMain.deleteData(id);
};

newDefectBug.mdDefaultXBLLoaded = function(event){
debugger;
	$(justep.xbl('iptMEMO').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
	$(justep.xbl('iptDEFECT_DESC').input).bind('keydown', function(evt){if(this.value.length>=200){return false;}});
	$(justep.xbl('iptDEFECT_DETAIL').input).bind('keydown', function(evt){if(this.value.length>=1000){return false;}});
};
function getLoginId(){
debugger;
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOperData");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("hrPerData");
	hrPerData.setFilter("filter2", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	return perId;
}
newDefectBug.trigger3Click = function(event){
debugger;
	var cData = justep.xbl("cData");
	var value = cData.getValue("value");
	var dataMain = justep.xbl('dataMain');
//	alert(value);
	if(value==1){
//		alert(getLoginId());
		dataMain.setFilter("filter0", "DEFECT_TRACK_BUG_INFO.CREATOR = '"+getLoginId()+"'");
		dataMain.refreshData();
	}else{
		dataMain.setFilter("filter0", "");
		dataMain.refreshData();
	}
};

newDefectBug.saveTrigger2Click = function(event){
debugger;
	var dataMain = justep.xbl('dataMain');
	dataMain.saveData();
	var i = document.getElementById('insertTrigger1');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertTrigger1").attr("src", cc);
	justep.xbl('insertTrigger1').setDisabled(false);
		
	var i = document.getElementById('saveTrigger2');
	i.disabled = true;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveTrigger2").attr("src", cc);
	justep.xbl('saveTrigger2').setDisabled(true);	
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
newDefectBug.dataMainValueChanged = function(event){
debugger;
	var i = document.getElementById('saveTrigger2');
	i.disabled = false;
	var cc = justep.Request.convertURL(
		"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveTrigger2").attr("src", cc);
	justep.xbl('saveTrigger2').setDisabled(false);		
};

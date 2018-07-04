var mainActivity = {};
function tabPage2xforms_select(event) {
	load_part("vFlow");
	justep.xbl('flwc').load();
}
function xforms_model_construct_done(event) {
	var data = justep.xbl('dataMain');
	var sData1 = justep.Context.getProcessData1();
	if (sData1 == null || sData1 == undefined) {
		data.newData();
		concatForTittle();
	} else {
		data.filters.setFilter("flowFilter", "OA_GZJH='" + sData1 + "'");
		data.refreshData();
	}
	concatForTittle();
}
function dataMainValueChanged(event) {
	var data = justep.xbl('dataMain');
	if ((event.column == 'fPlanYear' || event.column == 'fCreateDeptID'
			|| event.column == 'fCreateDeptName' || event.column == 'fPlanWeek' || event.column == 'fPlanMonth')) {
		concatForTittle();
	}
}
function concatForTittle() {
	
	var data = justep.xbl('dataMain');
	var rowID = data.getRowId();
	var fPlanYear = data.getValue("fPlanYear", rowID);
	var fPlanMonth = data.getValue("fPlanMonth", rowID);
	var fPlanWeek = data.getValue("fPlanWeek", rowID);
	var fCBBM = data.getValue("fCreateDeptName", rowID);
	var fCBR = data.getValue("fCreatePsnName", rowID);
	var title = "";
	if ("" != fPlanYear && "" != fPlanMonth && "" != fPlanWeek) {
		title = fCBBM + " " + fPlanYear + "年" + fPlanMonth + "月" + fPlanWeek + " 工作计划";
	} else if ("" != fPlanYear && "" != fPlanMonth) {
		title = fCBBM + " " + fPlanYear + "年" + fPlanMonth + "月" + " 工作计划";
	} else if ("" != fPlanYear) {
		title = fCBBM + " " + fPlanYear + "年" + fPlanMonth + " 工作计划";
	}
	
	data.setValue("fJHZT", title, rowID);
	document.getElementById('iptTitle').value = title;
	if ("" != fPlanYear && "" == fPlanMonth) {
		data.setValue("fJHKSRQ", fPlanYear + "-01-01", rowID);
		return;
	}
	if ("" != fPlanYear && fPlanMonth.length > 1) {
		data.setValue("fJHKSRQ", fPlanYear + "-" + fPlanMonth + "-01", rowID);
	} else if ("" != fPlanYear && fPlanMonth.length == 1) {
		data.setValue("fJHKSRQ", fPlanYear + "-0" + fPlanMonth + "-01", rowID);
	} else {
		data.setValue("fJHKSRQ","", rowID);
	}
}
function dataMainBeforeSave(event){
	var contentData = justep.xbl('dGZNR');
	var len = contentData.getCount();
	if(len <= 0){
		event.cancel = true;
		alert("工作内容为空,请填写!")
	}
}
mainActivity.insertItemClick = function(event){
	var been = justep.xbl('dGZNR');
	been.newData(been.getCount());	
};
mainActivity.treeSelectDropdown = function(event){
	var dOrgDept = justep.xbl('dOrgDept');
	var orgID = justep.Context.getCurrentOgnID();
	var filterCon = "SA_OPOrg.sParent = '" + orgID + "'";
	dOrgDept.setTreeRootFilter(filterCon);
	dOrgDept.refreshData();
};
mainActivity.mdDefaultXBLLoaded = function(event){
	$(justep.xbl('fCreateTime').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('fPlanYear').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('fPlanMonth').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('fPlanWeek').input).bind('keydown', function(evt){evt.preventDefault();});
	$(justep.xbl('treeSelect1').input).bind('keydown', function(evt){evt.preventDefault();});
};

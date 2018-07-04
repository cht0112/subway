function groupField(typeGroud) {
	var uGrid = justep.xbl('grid1');
	uGrid.grid.groupBy(typeGroud);
}

function typeFilter(dataFilterCondition) {
	var data = justep.xbl('bizData1');
	// var conData = justep.xbl('dType');
	// conData.setValue("condition",dataFilterCondition);
	data.filters.setFilter("typeFilter", dataFilterCondition);
	// data.refreshData();
}

function bizData1BeforeRefresh(event) {
	var typeData = justep.xbl('dType');
	var type = typeData.getValue("radioTypeValue");
	var kind = typeData.getValue("radioKindValue");
	var filterCondition = "";
	if (type == 2) {
		filterCondition = "OA_GZJH.fPlanMonth is NULL";
		typeFilter(filterCondition);
	} else if (type == 3) {
		filterCondition = "OA_GZJH.fPlanWeek is NULL and OA_GZJH.fPlanMonth is not NULL";
		typeFilter(filterCondition);
	} else if (type == 4) {
		filterCondition = "OA_GZJH.fPlanMonth is not NULL and OA_GZJH.fPlanWeek is not NULL";
		typeFilter(filterCondition);
	} else {
		filterCondition = "1=1";
		typeFilter(filterCondition);
	}
	if (kind == 2) {
		filterCondition += " and OA_GZJH.fGZJHLX = '个人工作计划'";
		typeFilter(filterCondition);
	} else if (kind == 3) {
		filterCondition += " and OA_GZJH.fGZJHLX = '部工作计划'";
		typeFilter(filterCondition);
	} else if (kind == 4) {
		filterCondition += " and OA_GZJH.fGZJHLX = '处工作计划'";
		typeFilter(filterCondition);
	}
}
function bizData1AfterRefresh(event) {
	//groupField(5);
}
function grid1RowClick(event) {
	var subData = justep.xbl('dGZNR');
	subData.filters.setFilter("subGridFilter", "OA_GZNR.fGZJHID = '"
			+ event.rowId + "'");
	subData.refreshData();
}
function dTypeValueChanged(event) {
	justep.xbl('bizData1').refreshData();
	getTitle();
}
function model1XformsModelConstructDone(event){
	justep.xbl('bizData1').refreshData();
	getTitle();
}
function getTitle(){
	var title = justep.xbl('bizData1').getValue("fJHZT");
	//document.getElementById('optTitle').value = title;
}

function model1XformsModelConstructDone(event){
	var rowid = justep.Request.URLParams.rowid;
	var planTitle = justep.Request.URLParams.planTitle;
	if(rowid && rowid != "" && rowid != null){
		justep.xbl("bizData1").setFilter("filter1", "OA_GZJH = '"+rowid+"'");
		justep.xbl("bizData1").refreshData();
		document.getElementById("iptTitle").value = planTitle;
	}
}

var assetKindSummaryActivity = {};

assetKindSummaryActivity.mdMainXBLLoaded = function(event){
	refreshData();
	
};
function treeSelectCloseup(event) {
	refreshData();
}

function refreshData() {
	var dTemp = justep.xbl("dTemp");
	var tempOrgID = dTemp.getValue("tempOrgID");
	var sqlReportOrcl = "", sqlReportSQL = "", sqlPieOrcl = "", sqlPieSQL = "", sqlBarOrcl = "", sqlBarSQL = "";

	sqlReportOrcl = sqlPieOrcl = sqlBarOrcl = "SELECT FKIND,rtrim(lTRIM(convert(varchar,SUM(FREMAINVALUE)/10000))) FREMAINVALUE FROM OA_AS_CARD";
	sqlReportSQL = sqlPieSQL = sqlBarSQL = "SELECT FKIND,CONVERT(VARCHAR(20),CONVERT(DECIMAL(18,2),SUM(FREMAINVALUE)/10000)) FREMAINVALUE FROM OA_AS_CARD";
	if (tempOrgID != '') {
		tempOrgID = "'" + tempOrgID + "'";
		tempOrgID = tempOrgID.replace(" ", "','");
		sqlReportOrcl += " where fDutyDeptID in (" + tempOrgID + ")";
		sqlReportSQL += " where fDutyDeptID in (" + tempOrgID + ")";
		sqlPieOrcl += " where fDutyDeptID in (" + tempOrgID + ")";
		sqlPieSQL += " where fDutyDeptID in (" + tempOrgID + ")";
		sqlBarOrcl += " where fDutyDeptID in (" + tempOrgID + ")";
		sqlBarSQL += " where fDutyDeptID in (" + tempOrgID + ")";
	}
	sqlReportOrcl += " GROUP BY FKIND";
	sqlReportSQL += " GROUP BY FKIND";
	sqlPieOrcl += " GROUP BY FKIND";
	sqlPieSQL += " GROUP BY FKIND";
	sqlBarOrcl += " GROUP BY FKIND";
	sqlBarSQL += " GROUP BY FKIND";
	justep.xbl('dReport').setSQL(sqlReportOrcl, "SYBASE");
	justep.xbl('dReport').setSQL(sqlReportSQL, "MSSQL");
	justep.xbl('dPie').setSQL(sqlPieOrcl, "SYBASE");
	justep.xbl('dPie').setSQL(sqlPieSQL, "MSSQL");
	justep.xbl('dBar').setSQL(sqlBarOrcl, "SYBASE");
	justep.xbl('dBar').setSQL(sqlBarSQL, "MSSQL");
	justep.xbl('mixedChart').refresh();
	//justep.xbl('chartPie').refresh();
}


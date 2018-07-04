/**
 * ReportData
*/
justep.ReportData = function (opt){
	/*增加回调事件机制*/
	this.id = opt.id;
	this._src = opt.src;
	this._autoLoad = opt.autoLoad;
	this.type = opt.type;
	this.ksql = opt.ksql;
	this.sql = {
		defaultSql:opt.sql.defaultSql,
		mssql:opt.sql.mssql,
		oracle:opt.sql.oracle,
		sybase:opt.sql.sybase,
		db2:opt.sql.db2
	};
	
	this.dataModel = opt.dataModel;
	this.fnModel = opt.fnModel;
	this.onBeforeRefresh = opt.onBeforeRefresh;
	this.onAfterRefresh = opt.onAfterRefresh;
	
	this.action = opt.action;
	this.columns = opt.columns;
	this.actionParam = new justep.Request.ActionParam();

	this.element = document.getElementById(opt.id);
};

justep.ReportData.EVENT_REFRESHDATA_BEFORE = "onBeforeRefresh";
justep.ReportData.EVENT_REFRESHDATA_AFTER = "onAfterRefresh";

/**
 * 刷新数据 合成报表请求
 */
justep.ReportData.prototype.refreshData = function() {
	var eventData = {
		'cancel' : false,
		'source' : this
	};	
	if (this.onBeforeRefresh && this.onBeforeRefresh != "") {
		var f = justep.Function.get(this.onBeforeRefresh);
		if (f && typeof f == "function") {
			f(eventData);
		}
	}
	if (eventData.cancel) return;
	if (this.onAfterRefresh && this.onAfterRefresh != "") {
		var f = justep.Function.get(this.onAfterRefresh);
		if (f && typeof f == "function") {
			f({source:this});
		}
	}
};

justep.ReportData.prototype.getSQL = function(dbType) {
	if(typeof(dbType) == 'undefined'){
		dbType = "DEFAULT";
	}
	var sqlText = '';
	if(dbType == 'DEFAULT'){
		sqlText = this.sql.defaultSql ;
	}else if(dbType == 'ORACLE'){
		sqlText = this.sql.oracle ;
	}else if(dbType == 'MSSQL'){
		sqlText = this.sql.mssql ;
	}else if(dbType == 'SYBASE'){
		sqlText = this.sql.sybase ;
	}else if(dbType == 'DB2'){
		sqlText = this.sql.db2 ;
	}
	
	return sqlText;
};

justep.ReportData.prototype.setSQL = function(sql, dbType) {
	this.type = 'sql';

	if(dbType == 'ORACLE'){
		this.sql.oracle = sql;
	}else if(dbType == 'MSSQL'){
		this.sql.mssql = sql;
	}else if(dbType == 'SYBASE'){
		this.sql.sybase = sql;
	}else if(dbType == 'DB2'){
		this.sql.db2 = sql;
	}else{
		this.sql.defaultSql = sql;
	}
	
};

justep.ReportData.prototype.setDataModel = function(dataModelStr) {
	this.dataModel = dataModelStr;
};

justep.ReportData.prototype.getDataModel = function() {
	return this.dataModel = dataModelStr;
};

justep.ReportData.prototype.setFnModel = function(fnModelStr) {
	this.fnModel = fnModelStr;
};

justep.ReportData.prototype.getFnModel = function() {
	return this.fnModel;
};

justep.ReportData.prototype.setKSQL = function(ksqlText) {
	this.type = 'ksql';
	this.ksql = ksqlText;
};

justep.ReportData.prototype.getKSQL = function() {
	return this.ksql;
};

justep.ReportData.prototype.isEmptyByKsqlVariables = function() {
	for (var o in this.actionParam.param){
		return false;
	}
	return true;
};

justep.ReportData.prototype.clearVars = function() {
	for (var o in this.actionParam.param){
		delete this.actionParam.param[o];
	}
};

justep.ReportData.prototype.setStringVar = function(name, value) {
	this.actionParam.setString(name, value);
};

justep.ReportData.prototype.setIntegerVar = function(name, value) {
	this.actionParam.setInteger(name, value);
};

justep.ReportData.prototype.setFloatVar = function(name, value) {
	this.actionParam.setFloat(name, value);
};

justep.ReportData.prototype.setDateVar = function(name, value) {
	this.actionParam.setDate(name, value);
};

justep.ReportData.prototype.setTimeVar = function(name, value) {
	this.actionParam.setTime(name, value);
};

justep.ReportData.prototype.setDateTimeVar = function(name, value) {
	this.actionParam.setDateTime(name, value);
};

justep.ReportData.prototype.getVar = function(name){
	return this.actionParam.getParam(name);
};
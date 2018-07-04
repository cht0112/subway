
/**
 * DecisionData
*/
justep.DecisionData = function (opt){
	this.id = opt.id;
	this.type = opt.type;
	this.dataSource = opt.datasource;
	this.catalog = opt.catalog;
	this.query = opt.query;
};

justep.DecisionData.prototype.getModel = function() {
	return {
		id:this.id,
		type:this.type,
		dataSource:this.dataSource,
		catalog:this.catalog,
		query:this.query
	};
};

justep.DecisionData.prototype.getDecisionDataSource = function() {
	return this.dataSource;
};

justep.DecisionData.prototype.getDecisionCatalog = function() {
	return this.catalog;
};

justep.DecisionData.prototype.getDecisionQuery = function() {
	return this.query;
};

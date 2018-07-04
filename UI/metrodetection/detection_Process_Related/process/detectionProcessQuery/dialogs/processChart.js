var processChart = {};
processChart.model1Load = function(event){
	var pi = justep.Request.URLParams["pi"];
	justep.xbl('processChart1').loadByPI(pi);
};

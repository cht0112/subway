var processChart = {};

processChart.isPertLoaded = false;

processChart.model1Load = function(event){
	justep.xbl('track').load();
};

processChart.tabPage1Select = function(event){
	if (!processChart.isPertLoaded){
		processChart.isPertLoaded = true;
		justep.xbl("pert").load();
	}
};

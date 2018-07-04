var customizedProcessQEdit = {};
var customizedProcessQEdit = {
	inited: false,
	process: null,
	activity: null,
	taskId: null,
	isNew: true,
	addChild: false,
	endActivities: "",
	activityTags:{},
	selectExecutorFunc: null
};
customizedProcessQEdit.loadActivities = function() {
	var param = new justep.Request.ActionParam();
	param.setString("task", this.taskId);
	var result = justep.Request.sendBizRequest(this.process, this.activity,
		"queryCustomizedRangeAction", param, null, null, true);
	if (justep.Request.isBizSuccess(result)) {
		var rows = [];
		var items = justep.XML.eval(result.responseXML, "//item");
		if (items.length > 0) {
			rows.push({
				name: "",
				label: ""
			});
			for (var i = 0; i < items.length; i++) {
				var item = items[i];
				rows.push({
					name: item.getAttribute("activity"),
					label: item.getAttribute("label")
				});
				if (item.getAttribute("isEnd")) {
					this.endActivities = item.getAttribute("activity");
				}
				var tag = item.getAttribute("tag");
				if (tag){
					this.activityTags[item.getAttribute("activity")] = tag;
				}
			}
			rows.push({
				name: "and",
				label: "And环节"
			});
			rows.push({
				name: "xor",
				label: "Xor环节"
			});
			rows.push({
				name: "sequence",
				label: "Sequence环节"
			});
		}
		var activityData = justep.xbl("activities");
		activityData.insert(rows, null, false);
		this.inited = true;
	}
};
customizedProcessQEdit.executeModeLoad = function(id){
	var rows = [
	   {
		   label: "抢占",
		   value: "temPreempt"
	   },
	   {
		   label: "顺序",
		   value: "temSequential"
	   },
	   {
		   label: "同时",
		   value: "temSimultaneous"
	   }
	];
	return {flag: 1, rows: rows};
};
customizedProcessQEdit.windowReceiver1Receive = function(event){
	if (!this.inited) {
		this.process = event.data.process;
		this.activity = event.data.activity;
		this.taskId = event.data.taskId;
		this.loadActivities();
	}
	
	if (!event.data.openFromInner) {
		this.selectExecutorFunc = event.data.executorFunc;
		
		this.isNew = event.data.isNew;
		this.addChild = event.data.addChild;
	
		var unit = "";
		var unitLabel = "";
		var executeMode = "temPreempt";
		var executeModeLabel = "抢占";
		var isCustomized = "0";
		if (!this.isNew) {
			unit = event.data.unit;
			unitLabel = event.data.unitLabel;
			executeMode = event.data.executeMode;
			executeModeLabel = event.data.executeModeLabel;
			isCustomized = event.data.isCustomized;
		} else {
			var activityData = justep.xbl("activities");
			if (activityData.getCount() == 4) {
				activityData.eachRow(function(id) {
					var name = activityData.getValue("name", id);
					if (name != "and" && name != "xor" && name != "sequence") {
						unit = name;
						unitLabel = activityData.getValue("label", id);
						return false;
					}
				});
			}
		}
		
		var main = justep.xbl("main");
		main.clear();
		
		main.insert([{
			unit: unit,
			unit_label: unitLabel,
			execute_mode: executeMode,
			execute_mode_label: executeModeLabel,
			is_customized: isCustomized
		}]);
		
		var chkCustomized = $("#chk1")[0];
		chkCustomized.checked = (isCustomized != "0");
	}
	if (event.data.executorFNames.length > 0) {
		$("#label1").text(event.data.executorFNames[0]);
		$("#label1")[0].title = event.data.executorFNames.join(",");
	} else {
		$("#label1").text("");
		$("#label1")[0].title = "";
	}
	
	this.resetControlState();
};
customizedProcessQEdit.input1Click = function(event){
	var chkCustomized = $("#chk1")[0];
	var main = justep.xbl("main");
	main.setValue("is_customized", (chkCustomized.checked ? "1" : "0"));
};
customizedProcessQEdit.buttonQ2Click = function(event){
	var main = justep.xbl("main");
	var unit = main.getValue("unit");
	if (unit == "") {
		alert("环节不能为空.");
		return;
	}
	var unitLabel = main.getValue("unit_label");
	var executeMode = main.getValue("execute_mode");
	var executeModeLabel = main.getValue("execute_mode_label");
	var isCustomized = main.getValue("is_customized");
	var type = (unit == "and") ? "and" : (unit == "xor") ? "xor" : (unit == "sequence") ? "sequence" : (unit == this.endActivities) ? "end" : this.activityTags[unit];

	justep.windowReceiver.windowEnsure({
		unit: unit,
		unitLabel: unitLabel,
		executeMode: executeMode,
		executeModeLabel: executeModeLabel,
		isCustomized: isCustomized,
		type: type,
		isNew: this.isNew,
		addChild: this.addChild
	});
};
customizedProcessQEdit.buttonQ3Click = function(event){
	justep.windowReceiver.windowCancel();	
};
customizedProcessQEdit.buttonQ1Click = function(event){
	this.selectExecutorFunc();
};

customizedProcessQEdit.dselectQ2Change = function(event){
	this.resetControlState();
};

customizedProcessQEdit.resetControlState = function() {
	var currSelect = justep.xbl("dselectQ2").getValue();
	if (currSelect == "and" || currSelect == "xor" || currSelect == "sequence" || currSelect == this.endActivities
			|| this.activityTags[curSelect] == "if-else-activity" 
			|| this.activityTags[curSelect] == "condition-activity") {
		document.getElementById("chk1").disabled = true;
		document.getElementById("buttonQ1").disabled = true;
	} else {
		document.getElementById("chk1").disabled = false;
		document.getElementById("buttonQ1").disabled = false;
	}
};
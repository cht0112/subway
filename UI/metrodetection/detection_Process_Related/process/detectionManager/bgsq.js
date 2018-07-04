var bgsq = {};

bgsq.mdDefaultLoad = function(event) {
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
	// $(justep.xbl("input1").input).attr("maxlength", 10);
	$(justep.xbl("CHANGE_TITLETITLE2").input).attr("maxlength", 256);
	$(justep.xbl("textarea1_2").input).attr("maxlength", 50);
	$(justep.xbl('textarea2_2').input).bind('keydown', function(evt) {
		if (this.value.length >= 100) {
			return false;
		}
	});
	$(justep.xbl('textarea3_2').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea4_2').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea5_2').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});
	$(justep.xbl('textarea6_2').input).bind('keydown', function(evt) {
		if (this.value.length >= 1000) {
			return false;
		}
	});
	$(justep.xbl('textarea7_2').input).bind('keydown', function(evt) {
		if (this.value.length >= 200) {
			return false;
		}
	});

	var dataMaster = justep.xbl("dataMain");
	var s = dataMaster.getCurrentID();
	var a = justep.xbl("xiangmu");
	a.setFilter("filter", "TEST_PROJECT_INFO.aPPLICATIONNO=" + s);
	a.refreshData();
	var projectId = a.getCurrentID();
	var biangeng = justep.xbl("biangeng");
	var qw = a.getValue("pROJECTMANAGER");
	
	biangeng.setFilter("filter0", "CHANGE_APPLY_INFO.PROJECT_IDID=" + projectId);
	biangeng.refreshData();
	if (biangeng.getCount() != 0) {
		biangeng.loadData();
	} else {
		biangeng.newData();
		a.setFilter("filter", "TEST_PROJECT_INFO.aPPLICATIONNO=" + s);
		a.refreshData();
		var q = a.getValue('pROJECTNAME');
		var id = a.getCurrentID();
		biangeng.setValue("PROJECT_NAMENAME", q);
		biangeng.setValue("PROJECT_IDID", id);
	}
	var sysOperData = justep.xbl("sysOperData");
	sysOperData.setFilter("filter1","HR_BASE_INFO='"+qw+"'");
	sysOperData.refreshData();
	var aa =sysOperData.getValue("oPERATORNAME");
	biangeng.setValue("APPLY_APPROVER",qw);
	biangeng.setValue("oPERATORNAME1",aa);
//	debugger;
	var dataMaster = justep.xbl("dataMain");
	var operId = justep.Context.getOperatorID();
	var orgData = justep.xbl("sysOper");
	orgData.setFilter("filter1", " SA_OPOrg like'"+operId+"@%'");
	orgData.refreshData();
	var oprScode = orgData.getValue("sCode");
	var hrPerData = justep.xbl("sysOperData");
	
	hrPerData.setFilter("filter1", " HR_BASE_INFO.Scode ='"+oprScode+"'");
	hrPerData.refreshData();
	var perId = hrPerData.getCurrentID();
	var name = hrPerData.getValue("oPERATORNAME",perId);
	biangeng.setValue("APPLY_PERSONPERSON",perId);
	biangeng.setValue("oPERATORNAME",name);	
	
	$(justep.xbl("APPLY_DATEDATE2").input).bind('keydown',function(evt){evt.preventDefault();});
	$(justep.xbl("CHANGE_TIMETIME2").input).bind('keydown',function(evt){evt.preventDefault();});
	$(justep.xbl("APPLY_APPROVE_DATE2").input).bind('keydown',function(evt){evt.preventDefault();});
};

//bgsq.gridSelect1_1Closeup = function(event) {
//	var c = justep.xbl("biangeng");
//	var a = c.getValue("PROJECT_NAMENAME");
//	var b = justep.xbl("bizData1");
//	b.setFilter("filter", "TEST_PROJECT_INFO=" + a);
//	var d = b.getCurrentID();
//	c.setValue("PROJECT_IDID", d);
//	var w = justep.xbl("dataMain");
//	var s = w.getCurrentID();
//
//};

/**
	name:process#onAdvanceCommit
	description: <b>[回调型事件]</b>流转成功
	@param event 它的结构如下:<br/>{"source":组件的js对象,"task":任务标识,"processControl":流转信息,"cancel":false}
*/
bgsq.flwAdvanceCommit = function(event){
  	var biangeng = justep.xbl("biangeng");
  	biangeng.saveData();
};

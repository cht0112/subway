var bizActivity4 = {};
var valiDis = false;
var staticSchemeId = "";
var valiScheModified = false;
/**$(function() {
	var tptD = justep.xbl("testProjectTask");
	tptD.setFilter("filter0", "TEST_PROJECT_TASK_INFO.pROJECTID = (select TEST_PROJECT_INFO from "+
		"TEST_PROJECT_INFO TEST_PROJECT_INFO where TEST_PROJECT_INFO.aPPLICATIONNO='"+justep.Context.getProcessData1() + "')");
	//tptD.setFilter("filter0", "");
	tptD.refreshData();
});**/

/**
	name:grid#onRowClick
	description: 行单击事件
	@param event 事件属性:<br/>{"source":XFGrid对象, "instance":instance,"grid":dhtmlxGrid对象,"rowID":行ID}
*/
bizActivity4.grid1_9RowClick = function(event){
	/**var tab = justep.xbl("taskTab").tabbar;
	tab.setTabActive("tabPage2_7");**/
	/**justep.xbl('grid1_9').grid.attachEvent("onRowSelect",function(rowid,cellIndex){
		alert(this.getValue(rowid,cellIndex));
	});**/
	var tptD = justep.xbl("testProjectTask");
	justep.xbl("taskTab").setTabActive("tabPage2_7");
};



bizActivity4.mdDefaultLoad = function(event){
	var mainData = justep.xbl("dataMain");
	mainData.setFilter("filter0", "TEST_APPLICATION_INFO="+parseInt(justep.Context.getProcessData1()));
	mainData.refreshData();
	//根据申请序号取到项目信息 判断是否立项
	var pData = justep.xbl("pData");
	pData.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	pData.loadData();
	//加载项目成员信息
	var ptmData = justep.xbl("projectMember");
	//alert(justep.Context.getProcessData1());
	ptmData.setFilter("filter0", "TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO="+justep.Context.getProcessData1());
	ptmData.loadData();
	//alert(justep.Context.getProcessData1());
	//如果没有确立项目则把后面两个tab禁用
	if(pData.getCount()==0) {
		pData.newData();
		pData.setValue("eNDINGDATE","");
		$('#tabPage8_9').attr('disabled',true);
		$('#tabPage1_2').attr('disabled',true);
	} else {
		pData.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
		pData.loadData();
		var schemeId = pData.getValue("tESTSCHEMEID", pData.getCurrentID());
		staticSchemeId = schemeId;
		
		var taskData = justep.xbl("taskData");
		var pId = pData.getID(0);
		taskData.setFilter("filter0", "t1.pROJECTID="+pId);
		taskData.loadData();
		//如果确立了项目但是没有制定计划则把选择房间和工具的tab设为禁用
		if(taskData.getCount() <= 0) {
			$('#tabPage1_2').attr('disabled',true);
		}
	}
	//判断是否制定了计划为计划的回显设立条件
	var caseHouseData = justep.xbl("caseHouseData");
	caseHouseData.setFilter("filter0", "CASE_HOUSE.FAPPLICATIONNO='"+justep.Context.getProcessData1()+"'");
	caseHouseData.loadData();
	if(caseHouseData.getCount() > 0) {
		vali=true;
	}

};

bizActivity4.image1Click = function(event) {
	var tt = justep.xbl("testProjectTask");
	tt.newData();
	justep.xbl("taskTab").tabbar.setTabActive("tabPage2_7");
};

bizActivity4.image2Click = function(event) {
	/**var tt = justep.xbl("testProjectTask");
	tt.setValue("tASKEXECUTE", 0);
	tt.setValue("tASKCHECK", 0);
	tt.setValue("tASKTYPE", 1);
	tt.setValue("tASKID",justep.Function.toDecimal(toString(nextSeq('1000000000'))));
	tt.saveData();
	justep.xbl("taskTab").tabbar.setTabActive("tabPage1_7");
	tt.refreshData();**/
	justep.XData.refreshControls();
	var projectData = justep.xbl("projectData");
	
	
	var tt = justep.xbl("testProjectTask");
	var paramForSave = new justep.Request.ActionParam();
	var pm = new justep.Request.MapParam();
	pm.put("pROJECTID", new justep.Request.SimpleParam(tt.getValue("pROJECTID"),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	pm.put("tASKTYPE", new justep.Request.SimpleParam(tt.getValue("tASKTYPE"),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	pm.put("pLANOPERATORID", new justep.Request.SimpleParam(tt.getValue("pLANOPERATORID"),justep.XML.Namespaces.XMLSCHEMA_STRING));
	pm.put("pLANSTARTDATE", new justep.Request.SimpleParam(tt.getValue("pLANSTARTDATE"),justep.XML.Namespaces.XMLSCHEMA_DATE));
	pm.put("pLANENDINGDATE", new justep.Request.SimpleParam(tt.getValue("pLANENDINGDATE"),justep.XML.Namespaces.XMLSCHEMA_DATE));
	pm.put("tESTTASKAREA", new justep.Request.SimpleParam(tt.getValue("tESTTASKAREA"),justep.XML.Namespaces.XMLSCHEMA_STRING));
	pm.put("tESTTASKITERATIVE", new justep.Request.SimpleParam(tt.getValue("tESTTASKITERATIVE"),justep.XML.Namespaces.XMLSCHEMA_STRING));
	pm.put("tESTTASKREASON", new justep.Request.SimpleParam(tt.getValue("tESTTASKREASON"),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	pm.put("aCTUALOPERATORID", new justep.Request.SimpleParam(tt.getValue("aCTUALOPERATORID"),justep.XML.Namespaces.XMLSCHEMA_STRING));
	pm.put("aCTUALSTARTDATE", new justep.Request.SimpleParam(tt.getValue("aCTUALSTARTDATE"),justep.XML.Namespaces.XMLSCHEMA_DATE));
	pm.put("aCTUALENDINGDATE", new justep.Request.SimpleParam(tt.getValue("aCTUALENDINGDATE"),justep.XML.Namespaces.XMLSCHEMA_DATE));
	pm.put("tASKEXECUTE", new justep.Request.SimpleParam(tt.getValue("tASKEXECUTE"),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	pm.put("tASKCHECK", new justep.Request.SimpleParam(tt.getValue("tASKCHECK"),justep.XML.Namespaces.XMLSCHEMA_INTEGER));
	
	
	paramForSave.setMap("paramMap", pm);
	
	
	var res = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", "bizActivity4", "saveTaskProjectInfo", paramForSave, null, null, null, null, null);
	if(!justep.Request.isBizSuccess(res)){
		alert("调用Action失败");
	}
	justep.xbl("taskTab").tabbar.setTabActive("tabPage1_7");
	tt.refreshData();
};

/**
	name:bizData#onAfterSave
	description: <b>[回调型事件]</b>业务数据保存后
	@param event 它的结构如下:<br/>{"source":组件的js对象}
*/
/**bizActivity4.testProjectTaskAfterSave = function(event){
	//var tg = justep.xbl("barItem12_9");
	var npt = $('#barItem12_9').attr('dis-src');
	alert(npt);
	$('#barItem12_9').attr('src',npt);
};**/

bizActivity4.gridSelect3_7Dropdown = function(event){
	var projectData = justep.xbl("projectData");
	projectData.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	projectData.loadData();
};

bizActivity4.trigger1_3Click = function(event){
	justep.xbl("caseDialog").open();
};



/**
	name:bizData#onAfterNew
	description: <b>[回调型事件]</b>业务数据新增后
	@param event 它的结构如下:<br/>{"source":组件的js对象,"id":新增的行Id}
*/
bizActivity4.pDataAfterNew = function(event){
	var mData = justep.xbl("dataMain");
	var weiduodanwei = mData.getValue("aSSIGNEDMANUFACTUREID"); 
	var weiduodanweiName = mData.getValue("mANUFACTUREIDCNAME"); 
	var lineId = mData.getValue("lINEID");
	var pData = justep.xbl("pData");
	var linker = mData.getValue("cONTACTPERSON");
	var linkMobile = mData.getValue("cONTACTMOBILE");
	var linkTel = mData.getValue("cONTACTTELEPHONE");
	var linkEmail = mData.getValue("cONTACTEMAIL");
	var yqDate = mData.getValue("eXPECTENDINGDATE");
	var bussiness = mData.getValue("bUSINESSID");
	var gongyingshang = mData.getValue("pRODUCTMANUFACTUREID");
	var gongyingshangName = mData.getValue("wtName");
	
	pData.setValue("mANUFACTUREID", gongyingshang);
	pData.setValue("cname1", gongyingshangName);
	pData.setValue("aSSIGNEDMANUFACTUREID",weiduodanwei);
	pData.setValue("cname2",weiduodanweiName);
	pData.setValue("lINEID", lineId);
	pData.setValue("cONTACTPERSON", linker);
	pData.setValue("cONTACTMOBILE", linkMobile);
	pData.setValue("cONTACTTELEPHONE",linkTel );
	pData.setValue("cONTACTEMAIL",linkEmail );
	pData.setValue("bUSINESSID",bussiness );
	pData.setValue("eNDINGDATE", yqDate);
	pData.setValue("nOTIFYTYPE",1 );
	var testScheData = justep.xbl("testSchemeData");
	testScheData.setFilter("filte0", "TEST_SCHEME_BASE_INFO.bUSINESSID="+bussiness+" and TEST_SCHEME_BASE_INFO.vALIDSTATE=2");
	testScheData.refreshData();
	
	pData.setValue("tESTSCHEMEID", testScheData.getValue("TEST_SCHEME_BASE_INFO", testScheData.getID(0)));
	
	var appliNo=justep.Context.getProcessData1();
	
	var cpId=justep.Context.getCurrentPersonID();
	var coId=justep.Context.getCurrentOrgID();
	var personData = justep.xbl("personData");
	personData.setFilter("filter0", "OPERATOR_PASSWORD.oRGID='"+cpId+"@"+coId+"'");
	personData.loadData();
	var pId = personData.getID(0);
	pData.setValue("eXECUTESTATE",0);
	pData.setValue("aPPLICATIONNO",appliNo);
	pData.setValue("pROJECTTYPE",1);
	pData.setValue("pROJECTMANAGER", pId);
};


/**
*选择业务类型之后检测方案联动变化
**/

bizActivity4.gridSelect4_24Closeup = function(event){
	var pData = justep.xbl("pData");
	var bussinessId = pData.getValue("bUSINESSID");
	
	
	var testScheData = justep.xbl("testSchemeData");
	testScheData.setFilter("filte0", "TEST_SCHEME_BASE_INFO.bUSINESSID="+bussinessId+" and TEST_SCHEME_BASE_INFO.vALIDSTATE=2");
	testScheData.refreshData();
	
	pData.setValue("tESTSCHEMEID", testScheData.getValue("TEST_SCHEME_BASE_INFO", testScheData.getID(0)));
};

/**
*保存项目信息
**/
bizActivity4.saveProject = function() {
	//var pData = justep.xbl("pData");
	
};

function colorFun(tData,cou) {
	for(var i=0;i<cou;i++) {
		var rowID = tData.getID(i);
		var parId = tData.getValue("fPARENTID", rowID);
		if(parId == "root") {
			//justep.xbl("grid13_2").grid.setRowColor(rowID,"green"); 
			var valiLab = tData.getValue("pName", rowID);
			if(valiLab == null || valiLab == "") {
				justep.xbl("grid13_2").grid.setCellTextStyle(rowID,9,"background-color: #CCFFCC"); 
				tData.setValue("pName", "--请选择人员--", rowID);
			} 
		}
	}
}

/**
*选择制定计划的Tab
**/
bizActivity4.tabPage8_9Select = function(event){
	var tData = justep.xbl("vData");
	var no = justep.Context.getProcessData1();
	var projectData = justep.xbl("pData");
	
	projectData.setFilter("filter1", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	projectData.refreshData();
	if(projectData.getCount() > 0) {
		$('#tabPage8_9').attr('disabled',false);
		/*var param = new justep.Request.ActionParam();
		param.setString("applicationNO", no);
		var res = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", "bizActivity4", "queryCaseAndSubCaseBySche",param , null, null, null, null, null);
		if(!justep.Request.isBizSuccess(res)){
			alert("调用Action失败");
		} else {
			alert('操作已成功');
			tData.loadXML(res.responseXML, null, false, true);
		}*/
		/*tData.setFilter("filter0", "tv in (select DISTINCT(tsci.tESTCASEID) from TEST_SCHEME_CASE_INFO tsci WHERE tsci.tESTSCHEMEID=" +
			"(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO='"+no+"')) or "+
			"tv.fPARENTID in (select DISTINCT(tsci.tESTCASEID) from TEST_SCHEME_CASE_INFO tsci WHERE tsci.tESTSCHEMEID=" +
			"(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO='"+no+"')) or "+
			"tv.fPARENTID is null");*/
//		var proData = justep.xbl("pData");
//		proData.setFilter("TEST_PROJECT_INFO.aPPLICATIONNO="+no);
//		proData.refreshData();
//		var tt = proData.getValue("tESTSCHEMEID", proData.getCurrentID());
//		alert(tt);
		
		tData.setFilter("filter0", "tv='root' or TEST_SCHEME_CASE_INFO.tESTSCHEMEID=(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO="+no+")");
		//tData.setFilter("filter0", "tv='root' or TEST_SCHEME_CASE_INFO.tESTSCHEMEID="+schemeId);
//		tData.setFilter("filter1", "PLAN_VIEW='root' or PLAN_VIEW in (select concat(tsci.tESTCASEVER,concat('-',tsci.tESTCASEID)) from TEST_SCHEME_CASE_INFO tsci where tsci.tESTSCHEMEID=("+
//						"select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO='"+no+"')"+
//						") or PLAN_VIEW.fPARENTID in  (select concat(tsci.tESTCASEVER,concat('-',tsci.tESTCASEID)) from TEST_SCHEME_CASE_INFO tsci where tsci.tESTSCHEMEID=("+
//						"select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO='"+no+"'))");
		tData.refreshData();
		tData.loadData();
		tData.expandAll();
		var grid = justep.xbl("grid13_2");
		grid.grid.expandAll();
		var total = tData.getTotal();
		var count = tData.getCount();
		colorFun(tData,count);
		//debugger;
		//var arrs = ['a1','b1','b2','a2','b3','b4','a3','b5','b6'];
		var res = "";
		/**for(var i = 0;i < count;i++) {
			var rowId = tData.getRowId(i);
			var columns = grid.grid.columnIds.length;
			var name = tData.getValue("tESTCASENAME", rowId);
			res += name+"_";
	//		for(var j = 0;j<columns;j++) {
	//			var name = grid.grid.columnIds[j];
	//			var con = tData.getValue(name, rowId);
	//			alert(con);
	//		}
		}**/
		//alert(res);
		
	//	var vl = tData.getValue("tESTCASENAME", "b1");
	//	alert(vl);
	//debugger;
		var caseId =  null;
		var allTotal = 0;
		//遍历data找到每个父集数据
		for(var i = 0;i < count;i++) {
			//alert(tData.getCurrentID());
			//debugger;
			//取到每条数据的父关系
			var par = tData.getValue("fPARENTID", tData.getCurrentID());
			//如果父关系为空则本条数据为父集数据
			if(par == "root") {
				caseId =  tData.getCurrentID();
				if(caseId != null && caseId != "" && caseId != "_is_root_") {
					//得到本条数据的索引
					var index = tData.getIndex(caseId);
					var totalTime = 0;
					//再遍历一次数据找到该条父集数据的子集数据
					for(var j = 0;j < count;j++) {
						//取父关系
						var tarId =  tData.getValue("fPARENTID",tData.getCurrentID());
						var shijian = tData.getValue("sHIJIAN",tData.getCurrentID());
						//如果父关系是刚取到的数据id即为本条父集数据的子集数据
						if(tarId == caseId && tarId != "root") {
							totalTime += shijian*1;
						}
						if(!tData.eof()) {
							tData.next();
						} else {
							break;
						}
					}
					allTotal += totalTime;
					tData.setValue("sHIJIAN",totalTime,caseId);
					tData.setIndex(index);
				}
			}
			if(!tData.eof()) {
				tData.next();
			} else {
				break;
			}
		};
		var rootId = tData.getID(0);
		//alert("虚根："+rootId);
		tData.setValue("sHIJIAN",allTotal,rootId);
		//alert(res);
		//var temp = justep.xbl("testData");
		//temp.loadData();
		//temp.refreshData();
		//debugger;
		//var vv = temp.getStore().getTESTCASEID();
		//var tt = justep.xbl("subcaseData");
		//tt.loadData();
		/*var temp = justep.xbl("caseData");
		//var data = justep.xbl("dataDEMO_DocKind");
		// var rowid = event.rowId;
		var columns = event.grid.columnIds;
		var length = columns.length;
		for (i=0; i<length ;i++){
			var value = temp.getValue(columns[i]);
			alert(value);
		}*/
		
		var temp = justep.xbl("temp");
		var tt = temp.setValue("name",1);
		var tempOption = justep.xbl("tempoption");
		tempOption.setValue("name",1);
		
		var pmData = justep.xbl("projectMember");
		//alert(justep.Context.getProcessData1());
		pmData.setFilter("filter0", "TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO="+justep.Context.getProcessData1());
		pmData.loadData();
		
		var caseHouseData = justep.xbl("caseHouseData");
		var schemeId=projectData.getValue("tESTSCHEMEID");
		caseHouseData.setFilter("filter0", "CASE_HOUSE.FAPPLICATIONNO='"+justep.Context.getProcessData1()+"' and CASE_HOUSE.SCHEMEID="+schemeId);
		caseHouseData.refreshData();
		caseHouseData.loadData();
		if(caseHouseData.getCount() > 0 && valiScheModified == false) {
			//debugger;
			valiDis=true;
			var c = caseHouseData.getCount();
			//给有效时间赋值
			var timeVal = caseHouseData.getValue("TIMEPARAM",caseHouseData.getID(0));
			var ams = $('#input17_3').val(timeVal.split("_")[0]);
			var ame = $('#input18_3').val(timeVal.split("_")[1]);
			var pms = $('#input19_3').val(timeVal.split("_")[2]);
			var pme = $('#input20_3').val(timeVal.split("_")[3]);
			var temp = justep.xbl('temp');
			var rs = temp.setValue("name",timeVal.split("_")[4]);
			var tempOpt = justep.xbl('tempoption');
			tempOpt.setValue("name",timeVal.split("_")[5]);
			//遍历树并赋值
			for(var k=0;k<c;k++) {
				//var fId = caseHouseData.getID(k);
				var fId = caseHouseData.getCurrentID();
				var rId = caseHouseData.getValue("FCID", fId);
				var sT = caseHouseData.getValue("FSTIME", fId);
				var eT = caseHouseData.getValue("FETIME",fId);
				var qrw = caseHouseData.getValue("FQZRW",fId);
				var person = caseHouseData.getValue("FPID",fId);
				var taskId = caseHouseData.getValue("TASKID", fId);
				
				//alert(rId);
				if(qrw != null && qrw != "") {
					tData.setValue("qZRW", qrw, rId);
				}
				if(eT != null && eT != "") {
					tData.setValue("eNDTIME", eT, rId);
				}
				if(sT != null && sT != "") {
					tData.setValue("sTARTTIME", sT, rId);
				}
				if(taskId != null && taskId != "") {
					tData.setValue("tASKID", taskId, rId);
				}
				
				if(person != null && person != "") {
					temp += (person+",");
					var tempArr = person.split("");
					var alg = 0;
					if(tempArr.length < 8) {
						alg = 8-tempArr.length;
					}
					for ( var m = 0; m < alg; m++) {
						person+=" ";
					}
					var hata = justep.xbl("hrData");
					var pName = hata.getValue("oPERATORNAME", person);
					var tt = hata.getValue("oPERATORSEX", person);
					//alert(person+"--->"+pName);
					tData.setValue("pName", pName, rId);
					tData.setValue("oPERATORNAME", person, rId);
					var vali = tData.getValue("fPARENTID", rId);
					if(vali == "root") {
						justep.xbl("grid13_2").grid.setCellTextStyle(rId,9,"background-color: #E3EBF7"); 
					}
				}
				//caseHouseData.next();
				if(!caseHouseData.eof()) {
					caseHouseData.next();
				} else {
					break;
				}
				
			}
			caseHouseData.setIndex(0);
		} else {
			qzrwFun();
		}
		valiDis = false;
	} else {
		alert("您还没有确立项目!");
	}
	
};


bizActivity4.trigger2_3Click = function(event){
	var testData = justep.xbl("testProjectTask");
	var testGrid = justep.xbl("grid1_9");
	var rows = testData.getCount();
	var columns = testGrid.grid.columnIds.length;
	//alert(rows);
	//alert(columns);
	for(var i = 0;i<rows;i++) {
		var rowId = testData.getID(i);
		//alert(rowId);
		for(var j = 0;j<columns;j++) {
			var columnsId = testGrid.grid.columnIds[j];
			//alert(columnsId);
			var con = testData.getValue(columnsId, rowId);
			//alert(con);
		}
	}
};


/**
**计算时间差
* return结果以毫秒表示
*/
function restHours(h1,h2) {
	var hour1 = h1.split(":")[0];
	var min1 = h1.split(":")[1];
	var hour2 = h2.split(":")[0];
	var min2 = h2.split(":")[1];
	
	if(min1 == "00") {
		min1 = 0;
	}
	if(min2 == "00") {
		min2 = 0;
	}
	
	var date1 = new Date();
	var date2 = new Date();

	date1.setHours(hour1, min1, 0, 0);
	date2.setHours(hour2, min2, 0, 0);
	
	var res = date2.getTime()-date1.getTime();
	return res;
}

/**
**计算2天的时间间隔
* return结果以毫秒表示
*/
function nextDay(h1,h2) {
	var hour1 = h1.split(":")[0];
	var min1 = h1.split(":")[1];
	var hour2 = h2.split(":")[0];
	var min2 = h2.split(":")[1];
	
	if(min1 == "00") {
		min1 = 0;
	}
	if(min2 == "00") {
		min2 = 0;
	}
	
	var date1 = new Date();
	var date2 = new Date();

	date1.setHours(hour1, min1, 0, 0);
	date2.setFullYear(date2.getFullYear(), date2.getMonth(), date2.getDate()+1);
	date2.setHours(hour2, min2, 0, 0);
	
	var res = date2.getTime()-date1.getTime();
	return res;
}

/**
*计算两个日期之间有多少周六日
*返回天数
*/
function weekend(datestart,dateend,rv) {
	var d1 = new Date(datestart.toDateString());
	var d2 = new Date(dateend.toDateString());
	
	//计算2个日期之间总共有多少天
	var allDay = parseInt(d2 - d1) / (24 * 60 * 60 * 1000) + 1;
	//初始化周六日
	var weekday = 0;
	for(var i = 0;i<allDay;i++) {
		//逐天构建日期对象
		var valiDay = new Date(d1.getFullYear(),d1.getMonth(),d1.getDate()+i);
		if(rv == 1) {//正常工作日
			if(valiDay.getDay() == 0 || valiDay.getDay() == 6) {
				weekday++;
			}
		} else if(rv == 2) {//周六加班
			if(valiDay.getDay() == 0) {
				weekday++;
			}
		} else if(rv ==3) {//周日加班
			if(valiDay.getDay() == 6) {
				weekday++;
			}
		}
	}
	return weekday;
}

/**
*取到父级数据下的子集数据的开始和结束时间
*参数：caseId为父关系
*/
function getNodeTime(caseId,startTime,index) {
	var vData = justep.xbl("vData");
	var count = vData.getCount();
	var minDate = 10000000000000000;
	var maxDate = 0;
	//遍历数据
	//if(caseId == "root") {
		for(var i = 0;i<count;i++) {
		var rowId = vData.getRowId(i);
		//取到每条数据的父关系
		var parId = vData.getValue("fPARENTID",rowId);
		//如果父关系和参数一致 
		if(parId == caseId) {
			var starttime = vData.getValue("sTARTTIME",rowId);
			var s1 = new Date(starttime.replace("-","/").replace("-","/")).getTime();
			if(s1 < minDate) {
				minDate = s1;
			}
			var enttime = vData.getValue("eNDTIME",rowId);
			var e1 = new Date(enttime.replace("-","/").replace("-","/")).getTime();
			if(maxDate < e1) {
				maxDate = e1;
			}
		}
	}
	
	var min = new Date(minDate).toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
	var max = new Date(maxDate).toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
	
	vData.setIndex(index);
	return min+"_"+max;
	//}
}

/**
**用例时间的修改
**/
function getNodeTimeNew() {
	var vData = justep.xbl("vData");
	var count = vData.getCount();
	//遍历数据
	//debugger;
	var res = "";
	var rootMin = 1000000000000000;
	var rootMax = 0;
	for(var i = 0;i<count;i++) {
		var rowId = vData.getRowId(i);
		//取到每条数据的父关系
		var parId = vData.getValue("fPARENTID",rowId);
		if(parId == "root") {
			//如果父关系为root则为用例数据
			var minDate = 10000000000000000;
			var maxDate = 0;
			var vali = 0;
			for(var j=0;j<count;j++) {
				var rid = vData.getRowId(j);
				var subCasePar = vData.getValue("fPARENTID",rid);
				//取得用例的子用例
				if(subCasePar == rowId) {
					var subCaseName = vData.getValue("tESTCASENAME",rid);
					var starttime = vData.getValue("sTARTTIME",rid);
					var enttime = vData.getValue("eNDTIME",rid);
					var s1 = new Date(starttime.replace("-","/").replace("-","/")).getTime();
					if(s1 < minDate) {
						minDate = s1;
					}
					var e1 = new Date(enttime.replace("-","/").replace("-","/")).getTime();
					if(maxDate < e1) {
						maxDate = e1;
					}
					vali += s1;
				}
			}
			//var min = new Date(minDate).toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
			//var max = new Date(maxDate).toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
			var min = toDateString(new Date(minDate));
			var max = toDateString(new Date(maxDate));
			var caseTime = vData.getValue("sTARTTIME",rowId);
			if(maxDate > 0) {
				vData.setValue("sTARTTIME",min,rowId);
				vData.setValue("eNDTIME",max,rowId);
			}
			if(minDate < rootMin) {
				rootMin = minDate;
			}
			if(rootMax < maxDate) {
				rootMax = maxDate;
			}
		}
	}
	if(rootMax > 0) {
		//var minroot = new Date(rootMin).toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
		//var maxroot = new Date(rootMax).toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
		var minroot = toDateString(new Date(rootMin));
		var maxroot = toDateString(new Date(rootMax));
		vData.setValue("sTARTTIME",minroot,vData.getID(0));
		vData.setValue("eNDTIME",maxroot,vData.getID(0));
	}
	//alert(res);
}

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
bizActivity4.vDataValueChanged = function(event){
	if(!valiDis) {
	//debugger;
	var vData = justep.xbl("vData");
	var count = vData.getCount();
	var column = event.column;
	var rowId = event.rowIndex;
	//取得所设置的有效时间段
	var amstart = $('#input17_3').val();
	var amend = $('#input18_3').val();
	var pmstart = $('#input19_3').val();
	var pmend = $('#input20_3').val();
	var amendH = amend.split(":")[0];
	var amendM = amend.split(":")[1];
	var pmstartH = pmstart.split(":")[0];
	var pmstartM = pmstart.split(":")[1];
	if(amend.split(":")[1] == "00") {
		amendM = 0;
	};
	if(pmstart.split(":")[1] == "00") {
		pmstartM = 0;
	};
	var amstartH = amstart.split(":")[0];
	var amstartM = amstart.split(":")[1];
	if(amstart.split(":")[1] == "00") {
		amstartM = 0;
	};
	var pmendH = pmend.split(":")[0];
	var pmendM = pmend.split(":")[1];
	if(pmend.split(":")[1] == "00") {
		pmendM = 0;
	};
	//取得一天有效的工作时间
	var dayTime = restHours(amstart,amend)+restHours(pmstart,pmend);
	//取得两天之间的间隔时间
	var jiange = nextDay(pmend,amstart);
	//取得中午午休时间
	var wuxiu = restHours(amend,pmstart);
	//周六日是否加班
	var jiaban = false;
	var temp = justep.xbl("temp");
	var rv = temp.getValue("name");
	if(rv == 2) {
		jiaban = true;
	}
	
	var isQzrw = false;
	var isStarttime = false;
	
	//取得前置任务
	var qzrw = vData.getValue("qZRW");
	var vali = vData.getValue("fPARENTID");
	//debugger;
	if(column == "qZRW" && vali != "root" && vali != null && vali != "") {
		isQzrw = true;
		//如果有前置任务找到前置任务的结束时间  设为本任务的开始时间
		var count = vData.getCount();
		for(var i = 0;i<count;i++) {
			var rowID = vData.getRowId(i);
			var sn = vData.getValue("calculate0", rowID);
			if(sn == qzrw) {
				var starttime = vData.getValue("eNDTIME",rowID);
				if(starttime != "" && starttime != null) {
					//取到上午有效时间
					var am = restHours(amstart,amend);
					var valiDate = new Date(starttime.replace("-","/").replace("-","/").replace("T"," ").replace("Z",""));
					//得到点数
					var valiHour = valiDate.getHours();
					//得到分数
					var valiM = valiDate.getMinutes();
					//设置开始时间
					var str = starttime.replace("-","/").replace("-","/").replace("T"," ").replace("T"," ").replace("Z","");
					var transDate = new Date(str);
					//开始时间是否在有效时间段内
					if(transDate.getHours() == amendH && transDate.getMinutes() == amendM) {
						transDate.setHours(pmstartH, pmstartM, 0, 0);
					} else if(transDate.getHours() == pmendH && transDate.getMinutes() == pmendM) {
						transDate.setDate(transDate.getDate()+1);
						transDate.setHours(amstartH, amstartM, 0, 0);
					}
					//正常工作日时如果开始时间为周六日则要设为有效工作日
					/*if(jiaban == false) {
						if(transDate.getDay() == 0) {
							transDate = new Date(transDate.getTime()+24*60*60*1000);
						} else if(transDate.getDay() == 6) {
							transDate = new Date(transDate.getTime()+24*60*60*1000*2);
						}
					}*/
					//starttime = transDate.toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
					starttime = toDateString(transDate);
					vData.setValue("sTARTTIME", starttime, vData.getCurrentID());
					//利用开始时间构建Date对象
					var temp = starttime.replace("-","/").replace("-","/").replace("T"," ").replace("T"," ").replace("Z","");
					var tempDate = new Date(temp);
					var targetDate = null;
					//取得子用例耗时
					var casetime = vData.getValue("sHIJIAN", vData.getCurrentID());
					//debugger;
					//如果耗时大于一天的有效时间 判断耗时需要多少有效天数
					var needDays = Math.floor((casetime*60*60*1000)/dayTime);
					//除去整天外还所需的时间
					var leveTime = (casetime*60*60*1000)%dayTime;
					//debugger;
					if(leveTime > 0) {
						if(leveTime > am) {
							//如果耗时大于一天并且开始时间在上午有效时间内要加上午休时间
							if(needDays > 0 && tempDate.getHours() <= amend.split(":")[0]) {
								tempDate = new Date(tempDate.getTime()+wuxiu);
							}
							var wuxiu = restHours(amend,pmstart);
							//如果耗时大于下午有效时间段或者小于上午有效时间则要加上午休的时间
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu);
							if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
								targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
								//如果取到的点数大于上午时间段
								if(targetDate.getHours() > amendH) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
								}
							}
						} else {
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
							if(targetDate.getHours() == pmstartH) {
								//alert(targetDate);
								var wuxiu = restHours(amend,pmstart);
								targetDate = new Date(targetDate.getTime()+wuxiu);
							}
							if(targetDate.getHours() > pmend.split(":")[0]) {
								targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
							}
						}
					} else {
						targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
					}
					
					//计算期间有多少周六日
					//debugger;
					if(rv != 4) {
						var weekends = weekend(tempDate,targetDate,rv);
						if(weekends > 0) {
							targetDate = new Date(weekends*24*60*60*1000+targetDate.getTime());
							if(rv == 1) {
								//如果计算后的日期是周六或者周日
								if(targetDate.getDay()==0) {
									targetDate = new Date(24*60*60*1000+targetDate.getTime());
								} else if(targetDate.getDay()==6) {
									targetDate = new Date(2*24*60*60*1000+targetDate.getTime());
								}
							} else if(rv ==2) {//周六加班
								//如果计算后的日期是周日
								if(targetDate.getDay()==0) {
									targetDate = new Date(24*60*60*1000+targetDate.getTime());
								} 
							} else if(rv ==3) {//周日加班
								//如果计算后的日期是周六
								if(targetDate.getDay()==6) {
									targetDate = new Date(24*60*60*1000+targetDate.getTime());
								}
							}
						}
					}
					
					//将计算后的结束时间转化为目标String格式
					var res = targetDate.toLocaleString();
					//var targetStr = res.replace("年", "-").replace("月", "-").replace("日", "");
					var targetStr = toDateString(targetDate);
					
					//页面设置结束时间
					vData.setValue("eNDTIME",targetStr, vData.getCurrentID());
					//相应的父级数据开始和结束时间也要改变
//					var index = event.rowIndex;
//					var res = getNodeTime(vData.getValue("fPARENTID"),tempDate.getTime(),index);
//					vData.setValue("sTARTTIME",res.split("_")[0],vData.getValue("fPARENTID"));
//					vData.setValue("eNDTIME",res.split("_")[1],vData.getValue("fPARENTID"));
				}
			}
			
		}
	}
	
	
	
	//如果是开始时间那一列的值变化：
	var vali = vData.getValue("fPARENTID");
	if(column == "sTARTTIME" && vali != "root" && vali != null && vali != "") {
		//debugger;
		isStarttime = true;
		//取得本行的开始时间
		var starttime = vData.getValue("sTARTTIME");
		if(qzrw == "" || qzrw == null) {
			//利用开始时间构建Date对象
			var vh = starttime.indexOf(".");
			if(vh != -1) {
				starttime=starttime.substring(0,vh);
			}
			var temp = starttime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
			var tempDate = new Date(temp);
			//设为有效时间开始
			if(amstart.indexOf(":") != -1) {
				var h = amstart.split(":")[0];
				var m = amstart.split(":")[1].split("")[0];
				tempDate.setHours(h, m, 0, 0);
			} else {
				tempDate.setHours(amstart, 0, 0, 0);
			}
			//正常工作日时如果选的是周六日则要设为有效工作日
			if(rv == 1) {
				if(tempDate.getDay() == 0) {
					tempDate = new Date(tempDate.getTime()+24*60*60*1000);
				} else if(tempDate.getDay() == 6) {
					tempDate = new Date(tempDate.getTime()+24*60*60*1000*2);
				}
			} else if(rv == 2) {//周六加班要排除周日
				if(tempDate.getDay() == 0) {
					tempDate = new Date(tempDate.getTime()+24*60*60*1000);
				}
			} else if(rv == 3) {//周日加班要排除周六
				if(tempDate.getDay() == 6) {
					tempDate = new Date(tempDate.getTime()+24*60*60*1000);
				}
			} 
			//将计算后的有效开始时间转化为目标String格式
			var kaishi = tempDate.toLocaleString();
			//var kaishistr = kaishi.replace("年", "-").replace("月", "-").replace("日", "");
			var kaishistr = toDateString(tempDate);
			vData.setValue("sTARTTIME",kaishistr);
			
			//取得子用例耗时
			var casetime = vData.getValue("sHIJIAN");
			//判断耗时是否大于上午有效时间段
			var am = restHours(amstart,amend);
			var targetDate = null;
			if(casetime*60*60*1000 <= am) {
				//利用开始时间+耗时构建结束时间对象
				targetDate = new Date(tempDate.getTime()+casetime*60*60*1000);
			} else {
				//debugger;
				if(am < casetime*60*60*1000 && casetime*60*60*1000 < dayTime) {
					//如果耗时大于上午有效时间段则要加上午休的时间
					var wuxiu = restHours(amend,pmstart);
					targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu);
				} else if(casetime*60*60*1000 >= dayTime) {
					//如果耗时大于一天的有效时间 判断耗时需要多少有效天数
					var needDays = Math.floor((casetime*60*60*1000)/dayTime);
					//除去整天外还所需的时间
					var leveTime = (casetime*60*60*1000)%dayTime;
					//debugger;
					if(leveTime > 0) {
						if(leveTime > am) {
							//如果耗时大于一天并且开始时间在上午有效时间内要加上午休时间
							if(needDays > 0 && tempDate.getHours() <= amend.split(":")[0]) {
								tempDate = new Date(tempDate.getTime()+wuxiu);
							}
							//如果耗时大于上午有效时间段则要加上午休的时间
							var wuxiu = restHours(amend,pmstart);
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
							if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
								targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
								//如果取到的点数大于上午时间段
								if(targetDate.getHours() > amendH) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
								}
							}
						} else {
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
						}
					} else {
						targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*(needDays-1));
					}
					
					/*var wuxiu = restHours(amend,pmstart);
					var jiange = nextDay(pmend,amstart);
					targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu+jiange);*/
				}
			}
			
			//计算期间有多少周六日
			if(rv != 4) {
				var weekends = weekend(tempDate,targetDate,rv);
				if(weekends > 0) {
					targetDate = new Date(weekends*24*60*60*1000+targetDate.getTime());
					if(rv == 1) {
						//如果计算后的日期是周六或者周日
						if(targetDate.getDay()==0) {
							targetDate = new Date(24*60*60*1000+targetDate.getTime());
						} else if(targetDate.getDay()==6) {
							targetDate = new Date(2*24*60*60*1000+targetDate.getTime());
						}
					} else if(rv == 2) {//周六加班
						if(targetDate.getDay()==0) {
							targetDate = new Date(24*60*60*1000+targetDate.getTime());
						}
					} else if(rv == 3) {//周日加班
						if(targetDate.getDay()==6) {
							targetDate = new Date(24*60*60*1000+targetDate.getTime());
						}
					}
				}
			} 
			
			//将计算后的结束时间转化为目标String格式
			var res = targetDate.toLocaleString();
			//var targetStr = res.replace("年", "-").replace("月", "-").replace("日", "");
			var targetStr = toDateString(targetDate);
			
			//页面设置结束时间
			vData.setValue("eNDTIME",targetStr);
			
			//相应的父级数据开始和结束时间也要改变
//			var index = event.rowIndex;
//			var res = getNodeTime(vData.getValue("fPARENTID"),tempDate.getTime(),index);
//			vData.setValue("sTARTTIME",res.split("_")[0],vData.getValue("fPARENTID"));
//			vData.setValue("eNDTIME",res.split("_")[1],vData.getValue("fPARENTID"));
			
			//如果下面任务中的前置任务设置的是本行：
			//先取到本行的序号
			var sn = vData.getValue("calculate0");
			//取到本行的结束时间
			var endtime = vData.getValue("eNDTIME");
			//遍历vData
			for(var i =0;i<count;i++) {
				var rowID = vData.getRowId(i);
				//取到每行的前置任务
				var qzrwRow = vData.getValue("qZRW", rowID);
				if(qzrwRow != "" && qzrwRow != null) {
					if(sn == qzrwRow) {
						//把这一行的开始时间设为取到的结束时间
						var str = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var transDate = new Date(str);
						
						//开始时间是否在有效时间段内
						if(transDate.getHours() == amendH && transDate.getMinutes() == amendM) {
							transDate.setHours(pmstartH, pmstartM, 0, 0);
						} else if(transDate.getHours() == pmendH && transDate.getMinutes() == pmendM) {
							transDate.setDate(transDate.getDate()+1);
							transDate.setHours(amstartH, amstartM, 0, 0);
						}
						//如果在正常工作日开始时间为周六日则要设为有效时间
						if(rv == 1) {
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							} else if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000*2);
							}
						} else if(rv == 2) {//周六加班排除周日
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						} else if(rv == 3) {//周日加班排除周六
							if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						}
						//endtime = transDate.toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
						endtime = toDateString(transDate);
						vData.setValue("sTARTTIME", endtime, rowID);
						
						//利用开始时间构建Date对象
						var temp = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var tempDate = new Date(temp);
						//取得子用例耗时
						var casetime = vData.getValue("sHIJIAN", rowID);
						
						
						//如果耗时大于一天的有效时间 判断耗时需要多少有效天数
						var needDays = Math.floor((casetime*60*60*1000)/dayTime);
						//除去整天外还所需的时间
						var leveTime = (casetime*60*60*1000)%dayTime;
						//debugger;
						if(leveTime > 0) {
							if(leveTime > am) {
								//如果耗时大于一天并且开始时间在上午有效时间内要加上午休时间
								if(needDays > 0 && tempDate.getHours() < amend.split(":")[0]) {
									tempDate = new Date(tempDate.getTime()+wuxiu);
								}
								//如果耗时大于上午有效时间段则要加上午休的时间
								var wuxiu = restHours(amend,pmstart);
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu);
								if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
									//如果取到的点数大于上午时间段
									if(targetDate.getHours() > amendH) {
										targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
									}
								}
							} else {
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
								if(targetDate.getHours() > pmend.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu+jiange);
								}
							}
						} else {
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
						}
						
						//计算期间有多少周六日
						if(rv != 4) {
							var weekends = weekend(tempDate,targetDate,rv);
							if(weekends > 0) {
								targetDate = new Date(weekends*24*60*60*1000+targetDate.getTime());
								if(rv == 1) {
									//如果计算后的日期是周六或者周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									} else if(targetDate.getDay()==6) {
										targetDate = new Date(2*24*60*60*1000+targetDate.getTime());
									}
								} else if(rv == 1) {//周六加班
									//如果计算后的日期是周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									} 
								} else if(rv ==2) {//周日加班
									//如果计算后的日期是周六
									if(targetDate.getDay()==6) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									}
								}
							}
						}
						
						//将计算后的结束时间转化为目标String格式
						var res = targetDate.toLocaleString();
						//var targetStr = res.replace("年", "-").replace("月", "-").replace("日", "");
						var targetStr = toDateString(targetDate);
						
						//页面设置结束时间
						vData.setValue("eNDTIME",targetStr, rowID);
						//相应的父级数据开始和结束时间也要改变
//						var index = event.rowIndex;
//						var res = getNodeTime(vData.getValue("fPARENTID"),tempDate.getTime(),index);
//						vData.setValue("sTARTTIME",res.split("_")[0],vData.getValue("fPARENTID"));
//						vData.setValue("eNDTIME",res.split("_")[1],vData.getValue("fPARENTID"));
						//重新设置序号和开始时间继续循环
						sn = vData.getValue("calculate0",rowID);
						endtime = vData.getValue("eNDTIME", rowID);
					} else {
						var qzrwRow = vData.getValue("qZRW", rowID);
						for(var j =0;j<count;j++) {
							var rId = vData.getRowId(j);
							//取到每行的序号
							var snRow = vData.getValue("calculate0",rId);
							
							if(qzrwRow == snRow) {
								endtime = vData.getValue("eNDTIME",rId);
								sn = vData.getValue("calculate0",rId);
							}
						}
						//endtime = vData.getValue("eNDTIME",vData.getID(qzrwRow-1));
						//sn = vData.getValue("calculate0",rowID);
						//判断是否在有效时间段内
						var str = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var transDate = new Date(str);
						if(transDate.getHours() == amendH && transDate.getMinutes() == amendM) {
							transDate.setHours(pmstartH, pmstartM, 0, 0);
						} else if(transDate.getHours() == pmendH && transDate.getMinutes() == pmendM) {
							transDate.setDate(transDate.getDate()+1);
							transDate.setHours(amstartH, amstartM, 0, 0);
						}
						//如果在正常工作日开始时间为周六日则要设为有效时间
						if(rv == 1) {
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							} else if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000*2);
							}
						} else if(rv == 2) {//周六加班
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						} else if(rv ==3) {//周日加班
							if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						}
						//endtime = transDate.toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
						endtime = toDateString(transDate);
						//把这一行的开始时间设为取到的结束时间
						vData.setValue("sTARTTIME", endtime, rowID);
						
						//利用开始时间构建Date对象
						var temp = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var tempDate = new Date(temp);
						//取得子用例耗时
						var casetime = vData.getValue("sHIJIAN", rowID);
						
						
						//如果耗时大于一天的有效时间 判断耗时需要多少有效天数
						var needDays = Math.floor((casetime*60*60*1000)/dayTime);
						//除去整天外还所需的时间
						var leveTime = (casetime*60*60*1000)%dayTime;
						//debugger;
						if(leveTime > 0) {
							if(leveTime > am) {
								//如果耗时大于一天并且开始时间在上午有效时间内要加上午休时间
								if(needDays > 0 && tempDate.getHours() < amend.split(":")[0]) {
									tempDate = new Date(tempDate.getTime()+wuxiu);
								}
								//如果耗时大于上午有效时间段则要加上午休的时间
								var wuxiu = restHours(amend,pmstart);
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu);
								if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
									//如果取到的点数大于上午时间段
									if(targetDate.getHours() > amendH) {
										targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
									}
								}
							} else {
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
								if(targetDate.getHours() > pmend.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu+jiange);
								}
							}
						} else {
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
						}
						
						//计算期间有多少周六日
						if(rv != 4) {
							var weekends = weekend(tempDate,targetDate,rv);
							if(weekends > 0) {
								targetDate = new Date(weekends*24*60*60*1000+targetDate.getTime());
								if(rv == 1) {
									//如果计算后的日期是周六或者周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									} else if(targetDate.getDay()==6) {
										targetDate = new Date(2*24*60*60*1000+targetDate.getTime());
									}
								} else if(rv ==2) {//周六加班
									//如果计算后的日期是周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									}
								} else if(rv ==3) {//周日加班
									//如果计算后的日期是周六
									if(targetDate.getDay()==6) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									}
								}
							}
						}
						
						//将计算后的结束时间转化为目标String格式
						var res = targetDate.toLocaleString();
						//var targetStr = res.replace("年", "-").replace("月", "-").replace("日", "");
						var targetStr = toDateString(targetDate);
						
						//页面设置结束时间
						vData.setValue("eNDTIME",targetStr, rowID);
						//相应的父级数据开始和结束时间也要改变
//						var index = event.rowIndex;
//						var res = getNodeTime(vData.getValue("fPARENTID"),tempDate.getTime(),index);
//						vData.setValue("sTARTTIME",res.split("_")[0],vData.getValue("fPARENTID"));
//						vData.setValue("eNDTIME",res.split("_")[1],vData.getValue("fPARENTID"));
					}
					
				}
				
			}
			
		} else {
			var sn = vData.getValue("calculate0");
			//取到本行的结束时间
			var endtime = vData.getValue("eNDTIME");
			//遍历vData
			for(var i =0;i<count;i++) {
				var rowID = vData.getRowId(i);
				//取到每行的前置任务
				var qzrwRow = vData.getValue("qZRW", rowID);
				if(qzrwRow != "" && qzrwRow != null) {
					if(sn == qzrwRow) {
						//把这一行的开始时间设为取到的结束时间
						var str = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var transDate = new Date(str);
						
						//开始时间是否在有效时间段内
						if(transDate.getHours() == amendH && transDate.getMinutes() == amendM) {
							transDate.setHours(pmstartH, pmstartM, 0, 0);
						} else if(transDate.getHours() == pmendH && transDate.getMinutes() == pmendM) {
							transDate.setDate(transDate.getDate()+1);
							transDate.setHours(amstartH, amstartM, 0, 0);
						}
						//如果在正常工作日开始时间为周六日则要设为有效时间
						if(rv == 1) {
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							} else if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000*2);
							}
						} else if(rv == 2) {//周六加班
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						} else if(rv = 3) {//周日加班
							if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						}
						//endtime = transDate.toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
						endtime = toDateString(transDate);
						vData.setValue("sTARTTIME", endtime, rowID);
						
						//利用开始时间构建Date对象
						var temp = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var tempDate = new Date(temp);
						//取得子用例耗时
						var casetime = vData.getValue("sHIJIAN", rowID);
						
						
						//如果耗时大于一天的有效时间 判断耗时需要多少有效天数
						var needDays = Math.floor((casetime*60*60*1000)/dayTime);
						//除去整天外还所需的时间
						var leveTime = (casetime*60*60*1000)%dayTime;
						//debugger;
						if(leveTime > 0) {
							if(leveTime > am) {
								//如果耗时大于一天并且开始时间在上午有效时间内要加上午休时间
								if(needDays > 0 && tempDate.getHours() < amend.split(":")[0]) {
									tempDate = new Date(tempDate.getTime()+wuxiu);
								}
								//如果耗时大于上午有效时间段则要加上午休的时间
								var wuxiu = restHours(amend,pmstart);
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu);
								if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
									//如果取到的点数大于上午时间段
									if(targetDate.getHours() > amendH) {
										targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
									}
								}
							} else {
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
								if(targetDate.getHours() > pmend.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu+jiange);
								}
							}
						} else {
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
						}
						
						//计算期间有多少周六日
						if(rv != 4) {
							var weekends = weekend(tempDate,targetDate,rv);
							if(weekends > 0) {
								targetDate = new Date(weekends*24*60*60*1000+targetDate.getTime());
								if(rv == 1) {
									//如果计算后的日期是周六或者周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									} else if(targetDate.getDay()==6) {
										targetDate = new Date(2*24*60*60*1000+targetDate.getTime());
									}
								} else if(rv == 2) {//周六加班
									//如果计算后的日期是周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									}
								} else if(rv == 3) {//周日加班
									//如果计算后的日期是周六
									if(targetDate.getDay()==6) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									}
								}
							}
						}
						
						//将计算后的结束时间转化为目标String格式
						var res = targetDate.toLocaleString();
						//var targetStr = res.replace("年", "-").replace("月", "-").replace("日", "");
						var targetStr = toDateString(targetDate);
						
						//页面设置结束时间
						vData.setValue("eNDTIME",targetStr, rowID);
						//相应的父级数据开始和结束时间也要改变
//						var index = event.rowIndex;
//						var res = getNodeTime(vData.getValue("fPARENTID"),tempDate.getTime(),index);
//						vData.setValue("sTARTTIME",res.split("_")[0],vData.getValue("fPARENTID"));
//						vData.setValue("eNDTIME",res.split("_")[1],vData.getValue("fPARENTID"));
						//重新设置序号和开始时间继续循环
						sn = vData.getValue("calculate0",rowID);
						endtime = vData.getValue("eNDTIME", rowID);
					} else {
						var qzrwRow = vData.getValue("qZRW", rowID);
						for(var j =0;j<count;j++) {
							var rId = vData.getRowId(j);
							//取到每行的序号
							var snRow = vData.getValue("calculate0",rId);
							
							if(qzrwRow == snRow) {
								endtime = vData.getValue("eNDTIME",rId);
								sn = vData.getValue("calculate0",rId);
							}
						}
						//endtime = vData.getValue("eNDTIME",vData.getID(qzrwRow-1));
						//sn = vData.getValue("calculate0",rowID);
						//判断是否在有效时间段内
						var str = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var transDate = new Date(str);
						if(transDate.getHours() == amendH && transDate.getMinutes() == amendM) {
							transDate.setHours(pmstartH, pmstartM, 0, 0);
						} else if(transDate.getHours() == pmendH && transDate.getMinutes() == pmendM) {
							transDate.setDate(transDate.getDate()+1);
							transDate.setHours(amstartH, amstartM, 0, 0);
						}
						//如果在正常工作日开始时间为周六日则要设为有效时间
						if(rv == 1) {
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							} else if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000*2);
							}
						} else if(rv == 2) {
							if(transDate.getDay() == 0) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						} else if(rv ==3) {
							if(transDate.getDay() == 6) {
								transDate = new Date(transDate.getTime()+24*60*60*1000);
							}
						}
						//endtime = transDate.toLocaleString().replace("年", "-").replace("月", "-").replace("日", "");
						endtime = toDateString(transDate);
						//把这一行的开始时间设为取到的结束时间
						vData.setValue("sTARTTIME", endtime, rowID);
						
						//利用开始时间构建Date对象
						var temp = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var tempDate = new Date(temp);
						//取得子用例耗时
						var casetime = vData.getValue("sHIJIAN", rowID);
						
						
						//如果耗时大于一天的有效时间 判断耗时需要多少有效天数
						var needDays = Math.floor((casetime*60*60*1000)/dayTime);
						//除去整天外还所需的时间
						var leveTime = (casetime*60*60*1000)%dayTime;
						//debugger;
						if(leveTime > 0) {
							if(leveTime > am) {
								//如果耗时大于一天并且开始时间在上午有效时间内要加上午休时间
								if(needDays > 0 && tempDate.getHours() < amend.split(":")[0]) {
									tempDate = new Date(tempDate.getTime()+wuxiu);
								}
								//如果耗时大于上午有效时间段则要加上午休的时间
								var wuxiu = restHours(amend,pmstart);
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu);
								if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
									//如果取到的点数大于上午时间段
									if(targetDate.getHours() > amendH) {
										targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
									}
								}
							} else {
								targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
								if(targetDate.getHours() > pmend.split(":")[0]) {
									targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+wuxiu+jiange);
								}
							}
						} else {
							targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
						}
						
						//计算期间有多少周六日
						if(rv != 4) {
							var weekends = weekend(tempDate,targetDate,rv);
							if(weekends > 0) {
								targetDate = new Date(weekends*24*60*60*1000+targetDate.getTime());
								if(rv == 1) {
									//如果计算后的日期是周六或者周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									} else if(targetDate.getDay()==6) {
										targetDate = new Date(2*24*60*60*1000+targetDate.getTime());
									}
								} else if(rv == 2) {//周六加班
									//如果计算后的日期是周日
									if(targetDate.getDay()==0) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									} 
								} else if(rv == 3) {//周日加班
									//如果计算后的日期是周六
									if(targetDate.getDay()==6) {
										targetDate = new Date(24*60*60*1000+targetDate.getTime());
									}
								}
							}
						}
						
						//将计算后的结束时间转化为目标String格式
						var res = targetDate.toLocaleString();
						//var targetStr = res.replace("年", "-").replace("月", "-").replace("日", "");
						var targetStr = toDateString(targetDate);
						
						//页面设置结束时间
						vData.setValue("eNDTIME",targetStr, rowID);
						//相应的父级数据开始和结束时间也要改变
//						var index = event.rowIndex;
//						var res = getNodeTime(vData.getValue("fPARENTID"),tempDate.getTime(),index);
//						vData.setValue("sTARTTIME",res.split("_")[0],vData.getValue("fPARENTID"));
//						vData.setValue("eNDTIME",res.split("_")[1],vData.getValue("fPARENTID"));
					}
					
				}
				
			}
		}
		
	}
	getNodeTimeNew();
		
	}
};





bizActivity4.trigger1_2Click = function(event){
	var vData = justep.xbl("vData");
	var grid = justep.xbl("grid13_2");
	debugger;
	var length = grid.grid.columnIds.length;
	var count = vData.getCount();
	var minDate = 10000000000000000;
	var maxDate = 0;
	//遍历数据
	var res = "";
	for(var i = 0;i<count;i++) {
		var rowId = vData.getRowId(i);
		//for (j=0; j<length ;j++){
			//var name = grid.grid.columnIds[j];
			var con = vData.getValue("sTARTTIME", rowId);
			res += con;
		//}
	}
	//alert(res);
};

function valiData() {
	var tData = justep.xbl("vData");
	
}

bizActivity4.trigger9_1Click = function(event){
	var paramTab = justep.xbl("vData");
	var alertCon = paramTab.Serialize(false, false);
	//debugger;
	//alert(alertCon);
	//取得申请编号
	var applicationNO = justep.Context.getProcessData1();
	//获取当前人的id
	var cpId=justep.Context.getCurrentPersonID();
	var coId=justep.Context.getCurrentOrgID();
	var personData = justep.xbl("personData");
	personData.setFilter("filter0", "OPERATOR_PASSWORD.oRGID='"+cpId+"@"+coId+"'");
	personData.loadData();
	var currentPersonId = personData.getID(0);
	//获取生成任务的模式（日,周,月）
	var pattern = justep.xbl("tempoption").getValue("name");
	//取得有效时间的设置参数
	var ams = $('#input17_3').val();
	var ame = $('#input18_3').val();
	var pms = $('#input19_3').val();
	var pme = $('#input20_3').val();
	var temp = justep.xbl('temp');
	var rs = temp.getValue("name");
	var tempOpt = justep.xbl('tempoption');
	var ptn = tempOpt.getValue("name");
	var res = ams+"_"+ame+"_"+pms+"_"+pme+"_"+rs+"_"+ptn;
	var pData=justep.xbl("pData");
	var schemeId=pData.getValue("tESTSCHEMEID");
	
	var param = new justep.Request.ActionParam();
	param.setTable("tabParam", new justep.Request.TableParam(paramTab.Serialize(true, false)));
	param.setString("applicationNo", applicationNO);
	param.setString("currentPersonId", currentPersonId);
	param.setInteger("pattern", pattern);
	param.setString("timeParam", res);
	param.setInteger("schemeParam", schemeId);
	
	
	var testData = justep.xbl("testProjectTask");
	testData.setFilter("filter0", "TEST_PROJECT_TASK_INFO.pROJECTID=(select tpi from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO="+justep.Context.getProcessData1()+")");
	testData.refreshData();
	if(testData.getCount() > 0) {
		if(confirm("该项目已制定计划是否重新制定?")){
			var res = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", "bizActivity4", "planAction",param , null, null, null, null, null);
			if(!justep.Request.isBizSuccess(res)){
				alert("调用Action失败");
			} else {
				var rst = justep.Request.transform(justep.Request.getData(res.responseXML));
				if(rst == 'success') {
					alert('操作已成功');
					var vDataCB = justep.xbl("vData");
					//将用例所属任务回显
					var caseHouseData = justep.xbl("caseHouseData");
					caseHouseData.setFilter("filter0", "CASE_HOUSE.FAPPLICATIONNO='"+justep.Context.getProcessData1()+"' and CASE_HOUSE.SCHEMEID="+schemeId);
					caseHouseData.refreshData();
					caseHouseData.loadData();
					//alert("检测方案："+schemeId+"用例仓库："+caseHouseData.getCount());
					if(caseHouseData.getCount() > 0 && valiScheModified == false) {
						var c = caseHouseData.getCount();
						//遍历树并赋值
						for(var k=0;k<c;k++) {
							var fId = caseHouseData.getCurrentID();
							var rId = caseHouseData.getValue("FCID", fId);
							var taskId = caseHouseData.getValue("TASKID", fId);
							if(taskId != null && taskId != "") {
								vDataCB.setValue("tASKID", taskId, rId);
							}
							if(!caseHouseData.eof()) {
								caseHouseData.next();
							} else {
								break;
							}
						}
					}
					//将生产任务按钮置灰
					$('#trigger9_1').attr('disabled',true);
				} else {
					alert(rst);
				}
				
			}
			//alert('x_x');
		}else {
			return false;
		}
	} else {
		var res = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", "bizActivity4", "planAction",param , null, null, null, null, null);
		if(!justep.Request.isBizSuccess(res)){
			alert("调用Action失败");
		} else {
			var rst = justep.Request.transform(justep.Request.getData(res.responseXML));
			if(rst == 'success') {
				alert('操作已成功');
				var vDataCB = justep.xbl("vData");
				//将用例所属任务回显
				var caseHouseData = justep.xbl("caseHouseData");
				caseHouseData.setFilter("filter0", "CASE_HOUSE.FAPPLICATIONNO='"+justep.Context.getProcessData1()+"' and CASE_HOUSE.SCHEMEID="+schemeId);
				caseHouseData.refreshData();
				caseHouseData.loadData();
				if(caseHouseData.getCount() > 0 && valiScheModified == false) {
					var c = caseHouseData.getCount();
					//遍历树并赋值
					for(var k=0;k<c;k++) {
						var fId = caseHouseData.getCurrentID();
						var rId = caseHouseData.getValue("FCID", fId);
						var taskId = caseHouseData.getValue("TASKID", fId);
						if(taskId != null && taskId != "") {
							vDataCB.setValue("tASKID", taskId, rId);
						}
						if(!caseHouseData.eof()) {
							caseHouseData.next();
						} else {
							break;
						}
					}
				}
				//将生产任务按钮置灰
				$('#trigger9_1').attr('disabled',true);
			} else {
				alert(rst);
			}
		}
	}
	
};


/**
**选择房间及工具tab之后 将本项目所排任务取出
**/
bizActivity4.tabPage1_2Select = function(event){
	//保存按钮置灰不可用
	//alert(justep.Context.getProcessData1());
	$('#saveRoomAndTool').attr('disabled',true);
	var ipath = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveRoomAndTool").attr("src",ipath);
	
	var pData = justep.xbl("pData");
	pData.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	pData.refreshData();
	if(pData.getCount() > 0) {
		$('#tabPage1_2').attr('disabled',false);
		var taskData = justep.xbl("taskData");
		var pId = pData.getID(0);
		taskData.setFilter("filter0", "t1.pROJECTID="+pId);
		taskData.refreshData();
		if(taskData.getCount() <= 0) {
			alert('您还没有制定计划!');
		}
		
		//取得本项目所有受测样品
		var pId = pData.getID(0);
		var sdData = justep.xbl("sampleDeviceData");
		sdData.setFilter("filter0", "SAMPLE_DEVICE_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
		sdData.refreshData();
		
		
	} else {
		alert('您还没有确立项目!');
	}
	
};

/**
**保存房间和工具的占用信息
**/
bizActivity4.saveItemClick = function(event){
	var tData = justep.xbl("taskData");
	var param = new justep.Request.ActionParam();
	param.setTable("tabParam", new justep.Request.TableParam(tData.Serialize(true, false)));
	//取得项目id
	var pData = justep.xbl("pData");
	pData.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	pData.refreshData();
	param.setInteger("projectId", pData.getID(0));
	
	var res = justep.Request.sendBizRequest("/metrodetection/detection_Process_Related/process/detectionManager/detectionManagerProcess", "bizActivity4", "occupyOperate", param, null, null, null, null, null);
	if(!justep.Request.isBizSuccess(res)) {
		alert("调用Action失败!");
	} else {
		alert("操作已成功!");
		$('#saveRoomAndTool').attr('disabled',true);
		var ipath = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
		$("#saveRoomAndTool").attr("src",ipath);
	}
};


/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
bizActivity4.taskDataValueChanging = function(event){
	$('#saveRoomAndTool').attr('disabled',false);
	var ipath = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveRoomAndTool").attr("src",ipath);
};

/**
	房间场地占用信息
*/
bizActivity4.trigger2_2Click = function(event){
	justep.xbl("roomScheduleDialog").open();
};

bizActivity4.trigger4_2Click = function(event){
	justep.xbl("deviceScheduleDialog").open();
};

bizActivity4.trigger3_2Click = function(event){
	justep.xbl("toolScheduleDialog").open();	
};

/**
	项目成员tab选择后时间
**/
bizActivity4.tabPage2_2Select = function(event){
	var memberData = justep.xbl("projectMember");
	memberData.setFilter("filter0", "TEST_PROJECT_MEMBER_INFO.aPPLICATION_NO="+justep.Context.getProcessData1());
	memberData.loadData();
	//alert(memberData.getCount());
};



bizActivity4.tabPage7_9Select = function(event){
	var pData = justep.xbl("pData");
	//alert(justep.Context.getProcessData1());
	pData.setFilter("filter0", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	pData.loadData();
	if(pData.getCount() == 0) {
		pData.newData();
	} else {
		pData.loadData();
	}
};


function toDateString(resDate) {
	var year = resDate.getFullYear();
	var mon = resDate.getMonth()+1;
	var dt = resDate.getDate();
	var h = resDate.getHours();
	var m = resDate.getMinutes();
	var s = resDate.getSeconds();
	var hh="";
	var mm="";
	var ss="";
	if(h==0) {
		hh="00";
	} else {
		if(h<10) {
			hh="0"+h;
		} else {
			hh=h;
		}
	}
	if(m==0) {
		mm="00";
	} else {
		if(m<10) {
			mm="0"+m;
		} else {
			mm=m;
		}
	}
	if(s==0) {
		ss="00";
	} else {
		if(s<10) {
			ss="0"+s;
		} else {
			ss=s;
		}
	}
	
	var res = year+"-"+mon+"-"+dt+" "+hh+":"+mm+":"+ss;
	return res;
}

/**
用例一级选择人员其下所有子用例都设定为此人
**/
bizActivity4.hrselectCloseup = function(event){
	//所选人员value
	var pValue = event.value;
	//人员label
	var pLabel = event.label;
	var caseData = justep.xbl("vData");
	//当前行id
	var caseId = caseData.getCurrentID();
	var cou = caseData.getCount();
	//遍历数据父id为当前行id的即为本用例子用例
	for(var i=0;i<cou;i++) {
		var rowId = caseData.getID(i);
		var pId = caseData.getValue("fPARENTID", rowId);
		if(pId == caseId) {
			caseData.setValue("oPERATORNAME", pValue, rowId);
			caseData.setValue("pName", pLabel, rowId);
		}
	}
	justep.xbl("grid13_2").grid.setCellTextStyle(caseId,9,"background-color: E3EBF7"); 
};

/**
	2012.12.11页面初始化载入默认前置任务
**/
function qzrwFun() {
	var vData = justep.xbl("vData");
	var cou = vData.getCount();
	//定义一个子用例行的字符串按照顺序
	var rwStr = '';
	var rwArr = new Array();
	//遍历树形结构设置前置任务
	for ( var i=0; i < cou; i++) {
		var rowId = vData.getID(i);
		var fpd = vData.getValue("fPARENTID", rowId);
		//得到子用例的行
		if(fpd != null && fpd != "root" && fpd != "") {
			var sn = vData.getValue("calculate0", rowId);
			//将子用例的行号写入字符串
			rwStr += (sn+"_");
			rwArr.push(sn);
		}
	}
	//取到第一个子用例的行号
	var snStart = rwStr.split("_")[0];
	//alert("第一个子用例的行号是："+snStart);
	//将前置任务循环写入
	for(var j=0;j<cou;j++) {
		var rowId = vData.getID(j);
		var fpd = vData.getValue("fPARENTID", rowId);
		//根据父id得到子用例的行
		if(fpd != null && fpd != "root" && fpd != "") {
			//子用例的行号
			var snC = vData.getValue("calculate0", rowId);
			//排除第一行子用例
			if(snC != snStart) {
				for(var k=0;k<rwArr.length;k++) {
					if(rwArr[k] == snC) {
						var qzrw = rwArr[k-1];
						vData.setValue("qZRW", qzrw, rowId);
					}
				}
			}
		}
	}
}

bizActivity4.trigger1_17Click = function(event){
	var ams = $('#input17_3').val();
	var ame = $('#input18_3').val();
	var pms = $('#input19_3').val();
	var pme = $('#input20_3').val();
	var temp = justep.xbl('temp');
	var rs = temp.getValue("name");
	//var rs = $('#radio1_1').val();
	var res = ams+"_"+ame+"_"+pms+"_"+pme+"_"+rs;
	//alert(res);
};

bizActivity4.tabPage1_8Select = function(event){
	var pDataList = justep.xbl("projectMemberData");
	pDataList.setFilter("filter", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	pDataList.loadData();
};

/**
 **判断制定完计划之后检测方案是否重新选了
**/
bizActivity4.gridSelect5_24Closeup = function(event){
	var projectData = justep.xbl("pData");
	var schemeData = justep.xbl("testSchemeData");
	projectData.setFilter("filter1", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	projectData.loadData();
	
	if(projectData.getCount() < 1) {
		//还没有确立项目不做操作
	} else {
		//已经立项取得立项时的检测方案
		//var schemeId = projectData.getValue("tESTSCHEMEID", projectData.getCurrentID());
		//在取出现在操作之后的检测方案
		var currenScheId = schemeData.getCurrentID();
		//如果两次结果不同则valiScheModified设为true
		//alert(staticSchemeId + ":" + currenScheId);
		if(staticSchemeId != currenScheId) {
			valiScheModified = true;
		}
	}
	
	
	
};


bizActivity4.triggerOutClick = function(event){
	debugger;
	//alert(33);
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var paramForSave = new justep.Request.ActionParam();
//	var pm = new justep.Request.MapParam();
//	var data = justep.xbl('dataMain');
//	var i = data.getValue("sData1", data.getCurrentID());
//	pm.put("applicationNo",parseInt(justep.Context.getProcessData1()));
//	var applicationNo = parseInt(justep.Context.getProcessData1());
//	var projectData = justep.xbl("pData");
//	var schemeData = justep.xbl("testSchemeData");
//	projectData.setFilter("filter1", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	
	paramForSave.setInteger("applicationNo", parseInt(justep.Context.getProcessData1()));
//	setInt("paramMap", pm);
	var action = justep.Request.sendBizRequest(process, activity, "createMppAction",paramForSave, null, null, null, null, null);
	var ui = justep.Request.transform(justep.Request.getData(action.responseXML));
	debugger;
	if(null!=ui){
		var elemIF = document.createElement("iframe");
		var url = window.location.protocol + "//" + window.location.host + justep.Request.convertURL(ui,true);
		//var urlSolid = window.location.protocol + "//" + window.location.host+"/F:/X5.2.3/model/UI/projectPlan/"+ui;
		
		elemIF.src = url;
//		document.body.appendChild(elemIF); 
		window.open(elemIF.src);
		//window.location.reload();
	}
};	

bizActivity4.triggerinputClick = function(event){
    var applicationNo = justep.Context.getProcessData1();
	var ams = $('#input17_3').val();
	var ame = $('#input18_3').val();
	var pms = $('#input19_3').val();
	var pme = $('#input20_3').val();
	var temp = justep.xbl('temp');
	var rs = temp.getValue("name");
	var res = ams+"_"+ame+"_"+pms+"_"+pme+"_"+rs;
	var windowDialog=justep.xbl("windowDialog2");
	windowDialog.open(applicationNo+","+res);
};

/**
	name:windowDialog#onReceive
	@event {"source":组件的js对象,"data":传回的数据}
description: <b>[回调型事件]</b> 对话框返回数据，该事件函数有一个参数event，是对话框返回的数据
*/
bizActivity4.windowDialog2Receive = function(event){
	//justep.xbl('windowDialog2').windowRefresh();
	//alert(99);
};

/**
	name:windowDialog#onClose
	@event 
description: <b>[回调型事件]</b>关闭时触发
*/
bizActivity4.windowDialog2Close = function(event){
		var tData = justep.xbl("vData");
		var no = justep.Context.getProcessData1();
		var caseHouseData = justep.xbl("caseHouseData");
		caseHouseData.setFilter("filter0", "CASE_HOUSE.FAPPLICATIONNO='"+justep.Context.getProcessData1()+"'");
		caseHouseData.refreshData();
		caseHouseData.loadData();
		if(caseHouseData.getCount() > 0 && valiScheModified == false) {
			//debugger;
			valiDis=true;
			var c = caseHouseData.getCount();
			//给有效时间赋值
			var timeVal = caseHouseData.getValue("TIMEPARAM",caseHouseData.getID(0));
			var ams = $('#input17_3').val(timeVal.split("_")[0]);
			var ame = $('#input18_3').val(timeVal.split("_")[1]);
			var pms = $('#input19_3').val(timeVal.split("_")[2]);
			var pme = $('#input20_3').val(timeVal.split("_")[3]);
			var temp = justep.xbl('temp');
			var rs = temp.setValue("name",timeVal.split("_")[4]);
			//遍历树并赋值
			for(var k=0;k<c;k++) {
				//var fId = caseHouseData.getID(k);
				var fId = caseHouseData.getCurrentID();
				var rId = caseHouseData.getValue("FCID", fId);
				var sT = caseHouseData.getValue("FSTIME", fId);
				var eT = caseHouseData.getValue("FETIME",fId);
				var qrw = caseHouseData.getValue("FQZRW",fId);
				var person = caseHouseData.getValue("FPID",fId);
				
				//alert(rId);
				if(qrw != null && qrw != "") {
					tData.setValue("qZRW", qrw, rId);
				}
				if(eT != null && eT != "") {
					tData.setValue("eNDTIME", eT, rId);
				}
				if(sT != null && sT != "") {
					tData.setValue("sTARTTIME", sT, rId);
				}
				
				if(person != null && person != "") {
					temp += (person+",");
					var tempArr = person.split("");
					var alg = 0;
					if(tempArr.length < 8) {
						alg = 8-tempArr.length;
					}
					for ( var m = 0; m < alg; m++) {
						person+=" ";
					}
					var hata = justep.xbl("hrData");
					var pName = hata.getValue("oPERATORNAME", person);
					var tt = hata.getValue("oPERATORSEX", person);
					//alert(person+"--->"+pName);
					tData.setValue("pName", pName, rId);
					tData.setValue("oPERATORNAME", person, rId);
				}
				//caseHouseData.next();
				if(!caseHouseData.eof()) {
					caseHouseData.next();
				} else {
					break;
				}
				
			}
			caseHouseData.setIndex(0);
		} else {
			qzrwFun();
		}
};


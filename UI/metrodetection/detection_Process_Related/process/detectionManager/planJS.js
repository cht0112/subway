var planJS = {};
var valiDis = false;

planJS.mdDefaultLoad = function(event){
	
};


/**
 * 设置前置任务
 */
function qzrwFun() {
	var vData = justep.xbl("vData");
	var cou = vData.getCount();
	//定义一个用例行的字符串按照顺序
	var rwStr = '';
	var rwArr = new Array();
	var rIdArr = new Array();
	//遍历树形结构设置前置任务
	for ( var i=0; i < cou; i++) {
		var rowId = vData.getID(i);
		var fpd = vData.getValue("fPARENTID", rowId);
		
		//得到用例的行
		if(fpd == "root") {
			var sn = vData.getValue("calculate0", rowId);
			//将用例的行号写入字符串
			rwStr += (sn+"_");
			rwArr.push(sn);
			
			//将id写入id数组
			rIdArr.push(rowId);
		}
	}
	//取到第一个用例的行号
	/**var snStart = rwStr.split("_")[0];
	//alert("第一个用例的行号是："+snStart);
	//将前置任务循环写入
	for(var j=0;j<cou;j++) {
		var rowId = vData.getID(j);
		var fpd = vData.getValue("fPARENTID", rowId);
		//根据父id得到用例的行
		if(fpd == "root") {
			//用例的行号
			var snC = vData.getValue("calculate0", rowId);
			//排除第一行用例
			if(snC != snStart) {
				for(var k=0;k<rwArr.length;k++) {
					if(rwArr[k] == snC) {
						var qzrw = rwArr[k-1];
						vData.setValue("qZRW", qzrw, rowId);
					}
				}
			}
		}
	}**/
	
	var len = rwArr.length;
	for(var j = 1;j<len;j++) {
		var qzrw = rwArr[j-1];
		vData.setValue("qZRW",qzrw,rIdArr[j]);
	}
	
};


/**
 * 提醒颜色
 * @param tData
 * @param cou
 */
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
};

/**
 * 得到用例下的子用例个数
 * @param caseId
 * @returns
 */
function getSubCaseCou(caseId) {
	var cou=0;
	var vData = justep.xbl("vData");
	var cou = vData.getCount();
	//定义一个用例行的字符串按照顺序
	var rwStr = '';
	var rwArr = new Array();
	//遍历树形结构设置前置任务
	for ( var i=0; i < cou; i++) {
		var rowId = vData.getID(i);
		var fpd = vData.getValue("fPARENTID", rowId);
		//得到用例的行
		if(fpd == caseId) {
			cou++;
		}
	}
	return cou;
};

/**
**根用例时间的修改
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
			
			/**for(var j=0;j<count;j++) {
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
			}**/
			
			var starttime = vData.getValue("sTARTTIME",rowId);
			var enttime = vData.getValue("eNDTIME",rowId);
			var s1 = new Date(starttime.replace("-","/").replace("-","/")).getTime();
			if(s1 < minDate) {
				minDate = s1;
			}
			var e1 = new Date(enttime.replace("-","/").replace("-","/")).getTime();
			if(maxDate < e1) {
				maxDate = e1;
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
		var minroot = toDateString(new Date(rootMin));
		var maxroot = toDateString(new Date(rootMax));
		vData.setValue("sTARTTIME",minroot,vData.getID(0));
		vData.setValue("eNDTIME",maxroot,vData.getID(0));
	}
}


/**
 * 根据当前的前置任务找到该用例的结束时间
 * @param qzrw
 * @returns
 */
function getCaseByQzrw(qzrw) {
	var vData = justep.xbl("vData");
	var cou = vData.getCount();
	for(var d =0;d<cou;d++) {
		var rowIDTemp = vData.getRowId(d);
		//取到用例一级
		var parIdValiTemp = vData.getValue("fPARENTID",rowIDTemp);
		if(parIdValiTemp == "root") {
			//取到每行的行号
			var snTemp = vData.getValue("calculate0",rowIDTemp);
			if(snTemp == qzrw) {
				var tarTime = vData.getValue("eNDTIME",rowIDTemp);
				return tarTime;
			}
		}
	}
}


/**
 * 制定计划tab页选择后触发
 */
planJS.tabPage8_9Select = function(event){

	var tData = justep.xbl("vData");
	var no = justep.Context.getProcessData1();
	var projectData = justep.xbl("pData");
	
	projectData.setFilter("filter1", "TEST_PROJECT_INFO.aPPLICATIONNO="+justep.Context.getProcessData1());
	projectData.refreshData();
	if(projectData.getCount() > 0) {
		$('#tabPage8_9').attr('disabled',false);
		
		tData.setFilter("filter0", "tv='root' or TEST_SCHEME_CASE_INFO.tESTSCHEMEID=(select tpi.tESTSCHEMEID from TEST_PROJECT_INFO tpi where tpi.aPPLICATIONNO="+no+")");
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
		var caseId =  null;
		var allTotal = 0;
		//遍历data找到每个父集数据
		for(var i = 0;i < count;i++) {
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
					/**for(var j = 0;j < count;j++) {
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
					}**/
					
					totalTime = tData.getValue("sHIJIAN",tData.getCurrentID());
					allTotal += totalTime*1;
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



/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
planJS.vDataValueChanged = function(event) {
	var newVal = event.value;
	var oldVal = event.originalValue;
	if(newVal != oldVal) {
		if(!valiDis) {
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
			//取得前置任务
			var qzrw = vData.getValue("qZRW");
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
			var am = restHours(amstart,amend);
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
			
			
			
			
			//用例的开始时间发生变化
			var vali = vData.getValue("fPARENTID");
			if(column == "sTARTTIME" && vali == "root") {
				//取得本行的开始时间
				var starttime = vData.getValue("sTARTTIME");
				//取得本行的耗时
				var casetime = vData.getValue("sHIJIAN");
				//没有前置任务
				if(qzrw == "" || qzrw == null) {
					//构建开始日期
					if(starttime.lastIndexOf(".") != -1) {
						starttime = starttime.substring(0,starttime.lastIndexOf("."));
					}
					var temp = starttime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
					var tempDate = new Date(temp);
					//将开始日期格式化为有效时间
					havQzrw = false;
					tempDate=formatStartDate(tempDate, rv, amstart,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw);
					
					var kaishistr = toDateString(tempDate);
					vData.setValue("sTARTTIME",kaishistr);
					
					//计算结束日期
					var targetDate = getEndDate(tempDate, casetime, dayTime, wuxiu, am, amstart, amend, pmend, jiange,rv);
					var targetStr = toDateString(targetDate);
					//设置结束时间
					vData.setValue("eNDTIME",targetStr);
					
					
					//本行序号
					var sn = vData.getValue("calculate0");
					//取到本行的结束时间
					var endtime = vData.getValue("eNDTIME");
					//遍历vData
					for(var i =0;i<count;i++) {
						var rowID = vData.getRowId(i);
						//取到用例一级
						var parIdVali = vData.getValue("fPARENTID",rowID);
						if(parIdVali == "root") {
							//取到每行的前置任务
							var qzrwRow = vData.getValue("qZRW", rowID);
							//若前置任务是本行
							if(qzrwRow == sn) {
								//把这一行的开始时间设为取到的结束时间
								var str = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
								var transDate = new Date(str);
								//格式化为有效时间
								havQzrw = true;
								transDate = formatStartDate(transDate, rv,amstart,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw);
								endtime = toDateString(transDate);
								vData.setValue("sTARTTIME", endtime, rowID);
								
								//取得用例耗时
								var casetime = vData.getValue("sHIJIAN", rowID);
								//计算结束日期
								targetDate = getEndDate(transDate, casetime, dayTime, wuxiu, am, amstart, amend, pmend, jiange, rv);
								targetStr = toDateString(targetDate);
								vData.setValue("eNDTIME",targetStr, rowID);
								
								//var subCaseCou = getSubCaseCou(rowID);
								//valiCurrSn(rowID, subCaseCou, sn);
								
								//重新设置序号和开始时间继续循环
								sn = vData.getValue("calculate0",rowID);
								endtime = vData.getValue("eNDTIME", rowID);
							} else {
								if(qzrwRow != "" && qzrwRow != null && typeof(qzrwRow) != "undefined") {
									var endtime = getCaseByQzrw(qzrwRow);
									if(endtime != null && endtime != "" && typeof(endtime) != "undefined") {
										//把这一行的开始时间设为取到的结束时间
										var str = endtime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
										var transDate = new Date(str);
										//格式化为有效时间
										havQzrw = true;
										transDate = formatStartDate(transDate, rv,amstart,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw);
										endtime = toDateString(transDate);
										vData.setValue("sTARTTIME", endtime, rowID);
										
										//取得用例耗时
										var casetime = vData.getValue("sHIJIAN", rowID);
										//计算结束日期
										targetDate = getEndDate(transDate, casetime, dayTime, wuxiu, am, amstart, amend, pmend, jiange, rv);
										targetStr = toDateString(targetDate);
										vData.setValue("eNDTIME",targetStr, rowID);
									}
								}
							}
						}
						
					}
					
					
					
					
				} 
				
			}  else if(column == "qZRW" && vali == "root") {//如果是前置任务发生变化
				//取得前置任务
				var qzrw = vData.getValue("qZRW");
				//取得当前行序号
				var curRowSn = vData.getValue("calculate0");
				//如果有前置任务找到前置任务的结束时间  设为本任务的开始时间
				var count = vData.getCount();
				for(var c = 0;c<count;c++) {
					var rowID = vData.getRowId(c);
					//取到用例一级
					var parIdVali = vData.getValue("fPARENTID",rowID);
					if(parIdVali == "root") {
						var sn = vData.getValue("calculate0", rowID);
						if(sn == qzrw) {
							var starttime = vData.getValue("eNDTIME",rowID);
							//把这一行的开始时间设为取到的结束时间
							var str = starttime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
							var transDate = new Date(str);
							//格式化为有效时间
							havQzrw = true;
							transDate = formatStartDate(transDate, rv,amstart,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw);
							starttime = toDateString(transDate);
							vData.setValue("sTARTTIME", starttime, vData.getCurrentID());
							
							//取得用例耗时
							var casetime = vData.getValue("sHIJIAN", vData.getCurrentID());
							//计算结束日期
							targetDate = getEndDate(transDate, casetime, dayTime, wuxiu, am, amstart, amend, pmend, jiange, rv);
							targetStr = toDateString(targetDate);
							vData.setValue("eNDTIME",targetStr, vData.getCurrentID());
							
						} 
					}
					
				}
				
				
				//依次遍历前置任务 先取本行结束时间
				var entTimeCur = vData.getValue("eNDTIME");
				for(var n = 0;n<count;n++) {
					var rowID = vData.getRowId(n);
					//取到用例一级
					var parIdVali = vData.getValue("fPARENTID",rowID);
					if(parIdVali == "root") {
						var parValiId= vData.getValue("qZRW",rowID);
						//前置任务是本行
						if(parValiId == curRowSn) {
							//把这一行的开始时间设为取到的结束时间
							var str = entTimeCur.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
							var transDate = new Date(str);
							//格式化为有效时间
							havQzrw = true;
							transDate = formatStartDate(transDate, rv,amstart,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw);
							entTimeCur = toDateString(transDate);
							vData.setValue("sTARTTIME", entTimeCur, rowID);
							
							//取得用例耗时
							var casetime = vData.getValue("sHIJIAN", rowID);
							//计算结束日期
							targetDate = getEndDate(transDate, casetime, dayTime, wuxiu, am, amstart, amend, pmend, jiange, rv);
							targetStr = toDateString(targetDate);
							vData.setValue("eNDTIME",targetStr, rowID);
							
							entTimeCur=vData.getValue("eNDTIME",rowID);
							curRowSn=vData.getValue("calculate0",rowID);	
						}
					}
				}
				
			}
			
			//设置子用例时间
			setSubCaseTime(dayTime, wuxiu, am, amstart, amend, pmend, jiange, rv,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,true);
			//根用例时间的修改
			getNodeTimeNew();
		}
	}
	
	
	
};








/**
 * 格式化开始时间将开始时间设置为有效时间
 * @param transDate		初始开始时间
 * @param rv			加班情况
 * @param amstart		上午开始时间(9:00)
 * @param amstartH		上午开始点数
 * @param amstartM		上午开始分钟
 * @param amendH		上午结束点数
 * @param amendM		上午结束分钟
 * @param pmstartH		下午开始点数
 * @param pmstartM		下午开始分钟
 * @param pmendH		下午结束点数
 * @param pmendM		下午结束分钟
 * @returns				格式化之后的开始时间
 */
function formatStartDate(transDate,rv,amstart,amstartH,amstartM,amendH,amendM,pmstartH,pmstartM,pmendH,pmendM,havQzrw) {
	if(!havQzrw) {
		//设为有效时间开始
		if(amstart.indexOf(":") != -1) {
			var h = amstart.split(":")[0];
			var m = amstart.split(":")[1].split("")[0];
			transDate.setHours(h, m, 0, 0);
		} else {
			transDate.setHours(amstart, 0, 0, 0);
		}
	} else {
		//开始时间是否在有效时间段内
		if(transDate.getHours() == amendH && transDate.getMinutes() == amendM) {
			transDate.setHours(pmstartH, pmstartM, 0, 0);
		} else if(transDate.getHours() == pmendH && transDate.getMinutes() == pmendM) {
			transDate.setDate(transDate.getDate()+1);
			transDate.setHours(amstartH, amstartM, 0, 0);
		}
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
	return transDate;
};

/**
 * 由当前时间根据用例时间计算结束时间
 * @param tempDate		当前开始日期(Date对象)
 * @param casetime		用例耗时(/小时)
 * @param dayTime		一天的有效工作时间(毫秒)
 * @param wuxiu			午休时间(毫秒)
 * @param amTimes		上午工作时间段耗时(毫秒)
 * @param amstart		上午上班时间
 * @param amend			上午下班时间
 * @param pmend			下午下班时间
 * @param jiange		两日有效工作时间的间隔时间(毫秒)
 * @param rv			加班情况(1正常工作日,2周六加班,3周日加班,4周六日加班)
 */
function getEndDate(tempDate,casetime,dayTime,wuxiu,amTimes,amstart,amend,pmend,jiange,rv) {
	var targetDate = null;
	//计算用例耗时需要多少有效天数
	var needDays = Math.floor((casetime*60*60*1000)/dayTime);
	//除去整天外还所需的时间
	var leveTime = (casetime*60*60*1000)%dayTime;
	
	//耗时在一天之内或者大于一天但不是一天的整数倍数
	if(leveTime > 0) {
		if(leveTime > amTimes) {
			//如果耗时大于一天并且开始时间在上午有效时间内要加上午休时间
			//if(needDays > 0 && tempDate.getHours() < amend.split(":")[0]) {
			//	tempDate = new Date(tempDate.getTime()+wuxiu);
			//}
			//如果耗时大于上午有效时间段则要加上午休的时间
			targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu+wuxiu*needDays+jiange*needDays);
			if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
				targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
				//如果取到的点数大于上午时间段
				if(targetDate.getHours() > amend.split(":")[0]) {
					targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
				}
			}
		} else {
			targetDate = new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays);
			if(targetDate.getHours() > pmend.split(":")[0] || targetDate.getHours() < amstart.split(":")[0]) {
				targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange);
				//如果取到的点数大于上午时间段
				if(targetDate.getHours() > amend.split(":")[0]) {
					targetDate =  new Date(tempDate.getTime()+casetime*60*60*1000+wuxiu*needDays+jiange*needDays+jiange+wuxiu);
				}
			}
		}
	} else {//耗时是一天有效时间的整数倍
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
	
	return targetDate;
	
};


/**
**计算时间差
* @param h1
* @param h2 
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
};

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
};

/**
 * 计算两个日期之间有多少周六日
 * @param datestart	开始日期
 * @param dateend	结束日期
 * @param rv		加班情况
 * @returns {Number}返回天数
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
};


/**
 * 根据用例时间设置子用例时间
 * @param dayTime			一天的有效工作时间(毫秒)
 * @param wuxiu				午休时间(毫秒)
 * @param amTimes			上午工作时间段耗时(毫秒)
 * @param amstart			上午上班时间
 * @param amend				上午下班时间
 * @param pmend				下午下班时间
 * @param jiange			两日有效工作时间的间隔时间(毫秒)
 * @param rv				加班情况(1正常工作日,2周六加班,3周日加班,4周六日加班)
 * @param amstartH			上午开始点数
 * @param amstartM			上午开始分钟
 * @param amendH			上午结束点数
 * @param amendM			上午结束分钟
 * @param pmstartH			下午开始点数
 * @param pmstartM			下午开始分钟
 * @param pmendH			下午结束点数
 * @param pmendM			下午结束分钟
 */
function setSubCaseTime(dayTime, wuxiu, amTimes, amstart, amend, pmend, jiange, rv,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw) {
	var vData = justep.xbl("vData");
	var count = vData.getCount();
	
	var idArr = new Array();
	for(var m=0;m<count;m++) {
		var rowID = vData.getRowId(m);
		var lastId = 'root';
		if(m > 0) {
			lastId = vData.getRowId(m-1)
		}
		idArr.push(rowID+'+=+'+lastId);
	}
	
	for(var i = 0;i<count;i++) {
		var rowID = vData.getRowId(i);
		var parId = vData.getValue("fPARENTID",rowID);
		//耗时
		var casetime=vData.getValue("sHIJIAN", rowID);
		if(parId != '' && parId != null && parId != 'root') {
			var lastRowId = idArr[i].split('+=+')[1];
			var lastRowEndTime = vData.getValue("eNDTIME", lastRowId);
			var lastRowParId = vData.getValue("fPARENTID",lastRowId);
				
			if(lastRowEndTime != null && lastRowEndTime != '') {
				var startDt = '';
				if(lastRowParId != 'root') {
					startDt = lastRowEndTime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
				} else {
					var lastRowStartTime = vData.getValue("sTARTTIME", lastRowId);
					startDt = lastRowStartTime.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
				}
				var tempDate = new Date(startDt);
				//havQzrw = true;
				tempDate = formatStartDate(tempDate, rv,amstart,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw);
				var starttime = toDateString(tempDate);
				vData.setValue("sTARTTIME", starttime, rowID);
				//根据耗时计算结束时间
				var targetDate = getEndDate(tempDate, casetime, dayTime, wuxiu, amTimes, amstart, amend, pmend, jiange, rv);
				var targetStr = toDateString(targetDate);
				//设置结束时间
				vData.setValue("eNDTIME",targetStr,rowID);
			}
		}
	}
	
	//先找出所有用例
	/**var caseArr = new Array();
	for(var n = 0;n<count;n++) {
		var rowID = vData.getRowId(n);
		var sn = vData.getValue("calculate0", rowID);
		var valiParId = vData.getValue("fPARENTID",rowID);
		if(valiParId == "root") {
			caseArr.push(rowID);
		}
	}
	
	
	//循环设置每个用例的子用例
	for (var j = 0; j < caseArr.length; j++) {
		//用例id
		var caseId = caseArr[j];
		//用例行号
		var caseSn = vData.getValue("calculate0", caseId);
		//用例开始时间
		var caseStartDate = vData.getValue("sTARTTIME", caseId);
		if(caseStartDate != "" && caseStartDate != null) {
			caseStartDate = caseStartDate.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
			var tempDate = new Date(caseStartDate);
			for(var i = 0;i<count;i++) {
				var rowID = vData.getRowId(i);
				var parId = vData.getValue("fPARENTID",rowID);
				//若是本用例的子用例
				if(parId == caseId) {
					//取得子用例耗时
					var casetime=vData.getValue("sHIJIAN", rowID);
					//取得子用例行号
					var subSn = vData.getValue("calculate0", rowID);
					
					var startDt = null;
					//开始时间是前一行的结束时间
					for(var t = 0;t<count;t++) {
						var tempID = vData.getRowId(t);
						var valiSn = vData.getValue("calculate0", tempID);
						var tempPar = vData.getValue("fPARENTID",tempID);
						if(tempPar == caseId) {
							if(valiSn == (subSn-1)) {
								startDt = vData.getValue("eNDTIME", tempID);
							} else if(caseSn == (subSn-1)){
								startDt = vData.getValue("sTARTTIME", caseId);
							}
						}
					}
					if(startDt != null && startDt != "") {
						startDt = startDt.replace("-","/").replace("-","/").replace("T"," ").replace("Z","");
						var tempDate = new Date(startDt);
						//havQzrw = true;
						tempDate = formatStartDate(tempDate, rv,amstart,amstartH, amstartM, amendH, amendM, pmstartH, pmstartM, pmendH, pmendM,havQzrw);
						starttime = toDateString(tempDate);
						vData.setValue("sTARTTIME", starttime, rowID);
						//根据耗时计算结束时间
						targetDate = getEndDate(tempDate, casetime, dayTime, wuxiu, amTimes, amstart, amend, pmend, jiange, rv);
						var targetStr = toDateString(targetDate);
						//设置结束时间
						vData.setValue("eNDTIME",targetStr,rowID);
					}
				}
			}
		}
	}**/
	
	
	
};

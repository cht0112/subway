/*******************************************************************************
 * author: wh; date : 2011-1-25
 ******************************************************************************/
var mainActivity = {};
mainActivity.searchButtonClick = function(event) {
	var mianData = justep.xbl('especialData');
	var fBeginDatePart = mianData.getValue("fBeginDatePart");
	var fBeginTimePart = mianData.getValue("fBeginTimePart");
	var fEndDatePart = mianData.getValue("fEndDatePart");
	var fEndTimePart = mianData.getValue("fEndTimePart");
	if (fBeginDatePart != "" || fEndDatePart != "") {
		if (fBeginDatePart > fEndDatePart) {
			alert("开始日期必须小于结束日期");
		} else if (fBeginDatePart == fEndDatePart) {
			if (fBeginTimePart >= fEndTimePart) {
				alert("开始时间必须小于结束时间");
			}else{
				var fBeginTime = fBeginDatePart + 'T' + fBeginTimePart + ':00.000Z';
				var fEndTime = fEndDatePart + 'T' + fEndTimePart + ':00.000Z';
				mianData.setValue("fBeginTime", fBeginTime);
				mianData.setValue("fEndTime", fEndTime);
				justep.xbl("selectPersonDialog").open();
			}
		}else if((fBeginDatePart < fEndDatePart)){
			var fBeginTime = fBeginDatePart + 'T' + fBeginTimePart + ':00.000Z';
			var fEndTime = fEndDatePart + 'T' + fEndTimePart + ':00.000Z';
			mianData.setValue("fBeginTime", fBeginTime);
			mianData.setValue("fEndTime", fEndTime);
			justep.xbl("selectPersonDialog").open();
		}
	}
};
/*******************************************************************************
 * 当选择了dialog选择完成之后，将选择的人设置到日程的执行者这个概念中去
 ******************************************************************************/
mainActivity.selectPersonDialogReceive = function(event) {
	var data = event.data;
	var mainData = justep.xbl("especialData");
	var executors = "";
	var executorData = justep.xbl("executorData");
	clearExecutors();
	if (data.getCheckedRowIds() != 0) {
		var checkRowId = data.getCheckedRowIds();
		for ( var i = 0; i < checkRowId.length; i++) {
			var fExecutorName = data.getValueById(checkRowId[i],
					'fExecutorName');
			var fExecutorID = data.getValueById(checkRowId[i], 'fExecutorID');
			executorData.newData();
			executorData.setValue("fExecutorID", fExecutorID);
			executorData.setValue("fExecutorName", fExecutorName);
			executorData.setValue("fRemark", "");
			if (checkRowId.length - 1 == i) {
				executors += fExecutorName;
			} else {
				executors += fExecutorName + ",";
			}
		}
		mainData.setValue("fExecutors", executors);
	} else {
		var fExecutorName = data.getValueByName("fExecutorName");
		var fExecutorID = data.getValueByName("fExecutorID");
		executorData.newData();
		executorData.setValue("fExecutorID", fExecutorID);
		executorData.setValue("fExecutorName", fExecutorName);
		executorData.setValue("fRemark", "");
	}
};
mainActivity.fEndTimePartCloseup = function(event) {

};
/*******************************************************************************
 * 在保存之前验证结束时间日期部分和时间部分是否大于开始时间日期部分和时间部分，以及设置开始时间和结束时间的值。
 ******************************************************************************/
mainActivity.especialDataBeforeSave = function(event) {
	var mianData = justep.xbl('especialData');
	var fBeginDatePart = mianData.getValue("fBeginDatePart");
	var fBeginTimePart = mianData.getValue("fBeginTimePart");
	var fEndDatePart = mianData.getValue("fEndDatePart");
	var fEndTimePart = mianData.getValue("fEndTimePart");
	if (fBeginDatePart != "" || fEndDatePart != "") {
		if (fBeginDatePart > fEndDatePart) {
			alert("开始日期必须小于结束日期");
			event.cancel = true;
		} else if (fBeginDatePart == fEndDatePart) {
			if (fBeginTimePart >= fEndTimePart) {
				alert("开始时间必须小于结束时间");
				event.cancel = true;
			}
		}
		/**
		 * 设置fBeginTime和fEndTime的值！
		 */
		var fBeginTime = fBeginDatePart + 'T' + fBeginTimePart + ':00.000Z';
		var fEndTime = fEndDatePart + 'T' + fEndTimePart + ':00.000Z';
		mianData.setValue("fBeginTime", fBeginTime);
		mianData.setValue("fEndTime", fEndTime);
	}
};
mainActivity.fBeginDatePartChange = function(event) {

};
mainActivity.barItem1Click = function(event) {
	justep.xbl('tabpanel1').tabbar.setTabActive("tabPage2");
	justep.xbl('especialData').newData();
};
mainActivity.grid1RowDblClick = function(event) {
	justep.xbl('tabpanel1').tabbar.setTabActive("tabPage2");
};
/*******************************************************************************
 * 当修改的时候，清楚原来该日程的执行者
 ******************************************************************************/
function clearExecutors() {
	var fMasterID = justep.xbl("especialData").getCurrentRowId();
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	var action = "deleteScheduleExecutorsAction";
	param.setString('fMasterID', fMasterID);
	var r = justep.Request.sendBizRequest(process, activity, action, param,
			null, null, true);
	if (!justep.Request.isBizSuccess(r)) {
		throw new Error(justep.Request.getServerError(r, "删除日程执行人失败"));
	}
	return true;
}
/*******************************************************************************
 * 检查选择的执行人，是否已经存在日程！
 ******************************************************************************/
function checkPersonSchedule() {
	var executorsStr = justep.xbl("especialData").getValue("fExecutors");
	var beginDate = justep.xbl("especialData").getValue("fBeginTime");
	var endDate = justep.xbl("especialData").getValue("fEndTime");
	var title = justep.xbl("especialData").getValue("fTitle");
	var executorsAry = executorsStr.split(",");
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var param = new justep.Request.ActionParam();
	var action = "checkPersonScheduleAction";
	for ( var i = 0; i < executorsAry.length; i++) {
		param.setString('beginDate', beginDate);
		param.setString('title', title);
		param.setString("name", executorsAry[i]);
		param.setString('endDate', endDate);
		var r = justep.Request.sendBizRequest(process, activity, action, param,
				null, null, true);
		var responseText = justep.Request.transform(justep.Request.getData(r.responseXML));
		if((responseText != "") && (responseText != null)){
			alert(executorsAry[i]+":已经存在此时间段内已经存在如下日程："+"\n"+justep.Request.transform(justep.Request.getData(r.responseXML)));
			return true;
		}
	}
}
mainActivity.fExecutorsChange = function(event){
    /**
	 * 检查选择的人员在该段时间内是否已经存在其他日程了！
	 */
      var  executors = justep.xbl("especialData").getValue("fExecutors");
   //   var  newID = justep.xbl("especialData").getChangedIDList("new");
     // if(newID!=""){
    	  if(""!=executors){
        	  if(checkPersonSchedule()){
        		  var mainData = justep.xbl("especialData");
        		  mainData.setValue("fExecutors", "");
        	  }	
       //   }  
      }
};

mainActivity.trigger1Click = function(event){
	justep.xbl('tabpanel1').tabbar.setTabActive("tabPage2");
	justep.xbl('especialData').newData();
};

var personDetail = {};

personDetail._inputParams = {};
personDetail._defaultInputParams = {
	openMode : null,
	personID : null,
	orgID : null,
	sCode : null
};

personDetail.receiverReceive = function(event) {

 	//alert(justep.Context.getSystemParameter('operatorName'));
	var id= document.getElementById('saveMas');
	id.disabled = false;
	
	var insert = document.getElementById("insertMas");
	
	var t = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src",t);
	for (o in personDetail._defaultInputParams)
		personDetail._inputParams[o] = personDetail._defaultInputParams[o];
	
	personDetail._inputParams.openMode = event.data.openMode;
	if (event.data.personID)
		personDetail._inputParams.personID = event.data.personID;
	if (event.data.orgID)
		personDetail._inputParams.orgID = event.data.orgID;
	if (event.data.sCode)
		personDetail._inputParams.sCode = event.data.sCode;

	var personData = justep.xbl("dPerson");
	var mainOrgData = justep.xbl("dMainOrg");
	var mData = justep.xbl("myData");
	if (personDetail._inputParams.openMode == "new") {
		personData.setFilter("idFilter", "1=0");
		insert.disabled = true;
		var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_insert.gif", true);
			$("#insertMas").attr("src",tt);
		justep.xbl("inputLoginName").setReadonly(false);
		//var insert = justep.xbl("navigatorBar1");
		//alert(insert);
		//insert.attr("item_readonly",true);
		personData.refreshData();
		mData.refreshData();

		personData.newData();
		mData.newData();
		mData.setValue("oPERATORSTATE",1);
		mData.setValue("oFFICEID",999);
		mData.setValue("oFFICEIDCNAME","其它");
		mData.setValue("pOSITIONID",999);
		mData.setValue("pOSITIONIDCNAME","其它");
		mData.setValue("dEGREEID",999);
		mData.setValue("dEGREEIDCNAME","其它");
		mData.setValue("eDUCATIONID",999);
		mData.setValue("eDUCATIONIDCNAME","其它");
		mData.setValue("pOLITICALID",999);
		mData.setValue("pOLITICALIDCNAME","其它");
		personData.setValue("sMainOrgID", personDetail._inputParams.orgID);
		//personData.setValue("sName", "新建人员");
		//alert("扩展");
	} else {
		personData.setFilter("idFilter", "SA_OPPerson = '"
				+ personDetail._inputParams.personID + "'");
		personData.refreshData();
		mData.setFilter("scodeFilter", "Scode = '" + personDetail._inputParams.sCode + "'");
		mData.refreshData();
		//alert(mData.getColumns());
		//var logName = document.getElementById("inputLoginName");
		//logName.setAttribute("readonly", true);
		//$("#inputLoginName").attr('readonly',true);
		//logName.readOnly = true;
		//personData.instance.readonly = true;
		justep.xbl("inputLoginName").setReadonly(true);
	}
	
//	var c = mData.getCount();
//	if(c == 0) {
//		mData.revalidate();
//		mData.newData();
//	}
	
	mainOrgData.setFilter("idFilter", "SA_OPOrg = '"
			+ personData.getValue("sMainOrgID") + "'");
	mainOrgData.refreshData();
};

personDetail.getReadOnly = function() {
	return (!personDetail._inputParams || personDetail._inputParams.openMode == "view");
};

personDetail.btnCancelClick = function(event) {
	justep.windowDialogReceiver.windowCancel();
};
personDetail.btnOKClick = function(event) {
	xforms.blur(true);
	var personData = justep.xbl("dPerson");
	var mData = justep.xbl("myData");
	//alert(personData.getValue("sLoginName"));
	//mData.setValue("currentId", personData.getValue("sLoginName"));
	mData.setValue("oPERATORNAME", personData.getValue("sName"));
	mData.setValue("Scode", personData.getValue("sCode"));
	try {
		if (personData.saveData()&&mData.saveData()) {
			if (personDetail._inputParams.openMode == "new") {
				personDetail._inputParams.personID = personData.getRowId();
				personDetail._inputParams.orgID = personData
						.getValue("sMainOrgID");
			
			}
		}
	} catch (e) {
		justep.OpmUtils.showError(e.message);
	}
//	var mData = justep.xbl("myData");
//	mData.setValue("oPERATORNAME", personData.getValue("sName"));
//	mData.setValue("Scode", personData.getValue("sCode"));
//	mData.saveData();

	justep.windowDialogReceiver
					.windowEnsure(personDetail._inputParams);
};

personDetail.image1Click = function(event){
	xforms.blur(true);
	debugger;
	var personData = justep.xbl("dPerson");
	var mData = justep.xbl("myData");
	
	//hr_base_info所需的所有数据
	var sName = personData.getValue("sName");
	var sCode = personData.getValue("sLoginName");
	personData.setValue("sCode", sCode);
	var reg = /[0-9]/;
	var flag = sCode.match(reg);
	if(flag) {
		var sLogName = personData.getValue("sLoginName");
		var sex = mData.getValue("oPERATORSEX");
		var birthDay = mData.getValue("oPERATORBIRTHDAY");
		var nation = mData.getValue("nATION");
		var office = mData.getValue("oFFICEID");
		var position = mData.getValue("pOSITIONID");
		var degree = mData.getValue("dEGREEID");
		var education = mData.getValue("eDUCATIONID");
		var political = mData.getValue("pOLITICALID");
		var profession = mData.getValue("pROFESSIONAL");
		var title = mData.getValue("pOSITIONALTITLE");
		var email = mData.getValue("eMAILADDRESS");
		var moble = mData.getValue("mOBILE");
		var state = mData.getValue("oPERATORSTATE");
		var memo = mData.getValue("mEMO");
		var cardId = mData.getValue("cARDID");
		
		//向action传递的参数
		var mDataParam = new justep.Request.ActionParam();
		mDataParam.setString("operatorId",sLogName);
		mDataParam.setString("sName",sName);
		mDataParam.setString("sCode",sCode);
		mDataParam.setInteger("sex",sex);
		mDataParam.setDate("birthDay",birthDay);
		mDataParam.setString("nation",nation);
		mDataParam.setInteger("office",office);
		mDataParam.setInteger("position",position);
		mDataParam.setInteger("degree",degree);
		mDataParam.setInteger("education",education);
		mDataParam.setInteger("political",political);
		mDataParam.setString("profession",profession);
		mDataParam.setInteger("title",title);
		mDataParam.setString("email",email);
		mDataParam.setString("moble",moble);
		mDataParam.setInteger("state",state);
		mDataParam.setString("memo",memo);
		mDataParam.setString("cardId",cardId);
		//alert("can shu quan");
		
		var process = justep.Context.getCurrentProcess();
		var activity = justep.Context.getCurrentActivity();
		//justep.Request.sendBizRequest(process, activity, "saveHrBaseInfoAction", mDataParam, null, null, null, null, null);
		//alert("4");
	//	if(!justep.Request.isBizSuccess(res)){
	//		alert("Action调用成功");
	//	}else{
	//		elert("Action调用失败");
	//	}
	//	alert(personData.getValue("sLoginName"));
	//	alert(mData.getValue("HR_BASE_INFO"));
	//	mData.setValue("HR_BASE_INFO", personData.getValue("sLoginName"));
		//alert(mData.getCurrentID());
		//mData.setID(mData.getCurrentID(), personData.getValue("sLoginName"));
	//	mData.setValue("HR_BASE_INFO", personData.getValue("sLoginName"), mData.getCurrentID());
		//alert(mData.getCurrentID());
		//alert(5);
	//	mData.setValue("oPERATORNAME", personData.getValue("sName"));
	//	mData.setValue("Scode", personData.getValue("sCode"));
		
		var insert = document.getElementById("insertMas");
		
		try {
			if (personData.saveData()/*&&mData.saveData()*/) {
				if (personDetail._inputParams.openMode == "new") {
					personDetail._inputParams.personID = personData.getRowId();
					personDetail._inputParams.orgID = personData
							.getValue("sMainOrgID");
					//$("#saveMas").attr("src","/UI/system/images/standardToolbar/standard/un_save.gif");
					//$("#saveMas").attr("disabled",true);
				}
				//var id= document.getElementById('saveMas');
				//id.disabled = true;
				var id = justep.xbl("saveMas");
				id.setDisabled(true);
				var tt = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/un_save.gif", true);
				$("#saveMas").attr("src",tt);
	//			var skill = justep.xbl("bizData2");
	//			skill.refreshData();
				insert.disabled = false;
				var tr = justep.Request.convertURL("/UI/system/images/standardToolbar/standard/insert.gif", true);
				$("#insertMas").attr("src",tr);
			}
		} catch (e) {
			justep.OpmUtils.showError(e.message);
		}
		var saveFlag = justep.Request.sendBizRequest(process, activity, "saveHrBaseInfoAction", mDataParam, null, null, null, null, null);
		if(justep.Request.isBizSuccess(saveFlag)){
			alert(" 保存成功");
		}else{
			alert(" 保存失败");
		}
		//alert("4");
	//	var mData = justep.xbl("myData");
	//	mData.setValue("oPERATORNAME", personData.getValue("sName"));
	//	mData.setValue("Scode", personData.getValue("sCode"));
	//	mData.saveData();
	
	//	justep.windowDialogReceiver
	//				.windowEnsure(personDetail._inputParams);	
	} else {
		alert("编码只能是数字");
	}	
	
	
	
};



personDetail.inserMore = function(event){
	var dPerson = justep.xbl("dPerson");
	var logName = dPerson.getValue("sLoginName");
//	alert(logName);
	var skill = justep.xbl("bizData2");
	//skill.refreshData();
	skill.newData();
	skill.setValue("oPERATORID",logName);
};

//personDetail.inputLoginNameBlur = function(event){
//	//var inputLogName = document.getElementById("inputLoginName").value;
//	var inputLongName = justep.xbl("inputLoginName");
//	var logName = inputLongName.getValue("sLoginName");
//	alert(logName);
//	if(logName != null && logName != ""){
//		var count = logName.length;
//		//alert(count); 
//		if(count!=8){
//			alert("登录名的长度必须8位");
//		}
//	}
//};


personDetail.gridSelect6Closeup = function(event){
	//alert(6);
	var detectionObject = justep.xbl("gridSelect6");
	var objectValue = detectionObject.getValue("aPPLYFOROBJECT");
	//alert(typeof(objectValue));
	var deviceObject = justep.xbl("yyjcdx");
	if(objectValue !=null && objectValue != "" && objectValue.length != 0){
		//alert(3);
		deviceObject.setFilter("filter1", "DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE="+objectValue);
		deviceObject.refreshData();
	}
	
};


personDetail.model1XBLLoaded = function(event){
	$(justep.xbl("inputLoginName").input).attr("maxlength",8);
};



/**
	name:bizData#onNewCreateParam
	description: <b>[回调型事件]</b>业务新增数据创建新增参数事件，可以增加和修改用户自定义的参数
	@param event 它的结构如下:<br/>{"source":组件的js对象,"param":新增参数对象,"defaultValues":默认值数组,表示新增动作返回有行数和默认值,格式是[{rowID:默认值,列名1:默认值,列名2:默认值},{...}],rowID指定概念的默认值}
	@link {justep.Request.ActionParam}
*/
/*personDetail.myDataNewCreateParam = function(event){
	var personData = justep.xbl("dPerson");
	var mData = justep.xbl("myData");
	var sLogName = personData.getValue("sLoginName");
	alert(sLogName+"*****");
	event.defaultValues.push({rowID:sLogName});
};*/

personDetail.insert1 = function(event){
	justep.xbl("tabpanel1").setTabActive("tabList");
	var dPerson = justep.xbl("dPerson");
	//myData.loadData();
	var operatorId = dPerson.getValue("sLoginName");
	//alert(operatorId);
	justep.xbl("tabpanel1").setTabActive("educationTP");
	//alert(operatorId);
	//justep.xbl("educationJobWD").open();
	//justep.xbl("educationJobWD").open({"operatorId":operatorId,"openModel":"new"});
	var educationJobD = justep.xbl("educationJobD");
	educationJobD.newData();
	educationJobD.setValue("oPERATORID",operatorId);
	
};

personDetail.grid1RowDblClick = function(event){
	var educationJobD = justep.xbl("educationJobD");
	var fid = educationJobD.getCurrentId();
	//justep.xbl("educationJobWD").open({"fid":fid,"openModel":"edit"});
};


/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
personDetail.dPersonValueChanging = function(event){
	justep.xbl("saveMas").setDisabled(false);
};

/**
	name:bizData#onValueChanging
	description: <b>[回调型事件]</b>数据变化中
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,通过修改它的值影响setvalue的行为,"originalValue":旧值}
*/
personDetail.myDataValueChanging = function(event){
	justep.xbl("saveMas").setDisabled(false);
};

var personDetail = {};

personDetail._inputParams = {};
personDetail._defaultInputParams = {
	openMode : null,
	personID : null,
	orgID : null 
};

personDetail.clearData = function() {
	var personData = justep.xbl("dPerson");
	personData.setFilter("idFilter", "1=0");
	personData.refreshData();
};

personDetail.receiverReceive = function(event) {
	for (o in personDetail._defaultInputParams)
		personDetail._inputParams[o] = personDetail._defaultInputParams[o];
	
	personDetail._inputParams.openMode = event.data.openMode;
	if (event.data.personID)
		personDetail._inputParams.personID = event.data.personID;
	if (event.data.orgID)
		personDetail._inputParams.orgID = event.data.orgID;

	var personData = justep.xbl("dPerson");
	var mainOrgData = justep.xbl("dMainOrg");
	if (personDetail._inputParams.openMode == "new") {
		personDetail.clearData();
		personData.newData();
		personData.setValue("sMainOrgID", personDetail._inputParams.orgID);
		personData.setValue("sName", "新建人员");
	} else {
		personData.setFilter("idFilter", "SA_OPPerson = '" + personDetail._inputParams.personID + "'");
		personData.refreshData();
	}
	mainOrgData.setFilter("idFilter", "SA_OPOrg = '" + personData.getValue("sMainOrgID") + "'");
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
	if (personData.saveData()) {
		if (personDetail._inputParams.openMode == "new") {
			personDetail._inputParams.personID = personData.getRowId();
			personDetail._inputParams.orgID = personData.getValue("sMainOrgID");
			personDetail._inputParams.name = personData.getValue("sName");
			personDetail._inputParams.passwordClearText = personData.getUserData("password");
		}
		justep.windowDialogReceiver.windowEnsure(personDetail._inputParams);
	}
};

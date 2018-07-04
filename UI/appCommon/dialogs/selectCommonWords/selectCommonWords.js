var selectCommonWords = {};

selectCommonWords.btnCancelClick = function(event){
	justep.xbl("windowReceiver").windowCancel();
};

selectCommonWords.btnOKClick = function(event){
	var data = justep.xbl("dCommonWords");
	if (data.saveData()) {
		if (data.getCurrentID()) {
			var commonWords = data.getValue("fCommonWords");
			justep.xbl("windowReceiver").windowEnsure({
				commonWords : commonWords
			});
		}
	}
};

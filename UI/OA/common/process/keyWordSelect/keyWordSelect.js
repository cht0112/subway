var keyWordSelect = {};
// 接收父窗体传入的参数,刷新数据
acceptParentParamsFun = "acceptData";
var keyWord = "";
function acceptData(obj) {
	keyWord = obj.keyWord;
	var data = justep.xbl("dTemp");
	var keyWordView = keyWord.replace(/(^\s*)|(\s*$)/g, "");
	var keyWordFirst = keyWord.substring(0,keyWord.indexOf(" "));
	var keyWordSencond = keyWord.substring(keyWord.indexOf(" ")+1,keyWord.lastIndexOf(" ")).replace(/(^\s*)|(\s*$)/g, "");
	var keyWordEnd = keyWord.substring(keyWord.lastIndexOf(" ")+1,keyWord.length);
	data.setValue("keyWordFirst",keyWordFirst);
	data.setValue("keyWordSencond",keyWordSencond);
	data.setValue("keyWordEnd",keyWordEnd);
	data.setValue("keyWordView",keyWordView);

}
function setKeyWordView(){
	var data = justep.xbl("dTemp");
	var keyWordFirst = data.getValue("keyWordFirst");
	var keyWordSencond = data.getValue("keyWordSencond").replace(/(^\s*)|(\s*$)/g, "");
	var keyWordEnd = data.getValue("keyWordEnd");
	var keyWordView = keyWordFirst +" "+keyWordSencond+" "+keyWordEnd;
	data.setValue("keyWordView",keyWordView);
}
keyWordSelect.trgRefreshClick = function(event){
	var data = justep.xbl("dTemp");
	data.refreshData();
};
keyWordSelect.trgSureClick = function(event){
	var data = justep.xbl("dTemp");
	var keyWordView = data.getValue("keyWordView");
	windowEnsure(keyWordView);
};
keyWordSelect.trgCancelClick = function(event){
	windowCancel();
};
keyWordSelect.searchSltFirstCloseup = function(event){
	setKeyWordView();
};
keyWordSelect.searchSltEndCloseup = function(event){
	setKeyWordView();
};

keyWordSelect.trgSencondKeyWordClick = function(event){
	var wDlgSencondKeyWord = justep.xbl("wDlgSencondKeyWord");
	wDlgSencondKeyWord.initEveryTimes = true;
	wDlgSencondKeyWord.open();
};
keyWordSelect.wDlgSencondKeyWordReceive = function(evt){
	var doc = evt.data.getSimpleStore();
	var len = doc.rowsBuffer.length;
	var fName ="",names="";
	for (var i = 0; i < len; i++) {
		fName = doc.getValueByName("fName",i);
		if(names==""){
			names = fName;
		}else{
			names = names+" "+fName;
		}
	}	
	var oldNames = justep.xbl("dTemp").getValue("keyWordSencond").replace(/(^\s*)|(\s*$)/g, "");
	if(oldNames==""){
		justep.xbl("dTemp").setValue("keyWordSencond",names);
	}else{
		justep.xbl("dTemp").setValue("keyWordSencond",oldNames+" "+names);
	}
};
keyWordSelect.textareaChange = function(event){
	setKeyWordView();
};

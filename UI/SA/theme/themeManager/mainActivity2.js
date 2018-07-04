var mainActivity2 = {};
function grid1SFNameButtonClick(event){
	var mainData = justep.xbl("main");
	theme.currentRowID = mainData.getCurrentRowId();
	justep.xbl("testsingleMulti").open();
}
function grid1SThemeNameButtonClick(event){
	var mainData = justep.xbl("main");
	theme.currentRowID = mainData.getCurrentRowId();
	if(!theme.chooseTemplateDialog){
			var url ="/SA/theme/themeManager/themeSelect2.w";
			theme.chooseTemplateDialog = new justep.WindowDialog("_chooseTemplateDialog_", url, "选择模板", true, null, 500,400,0,0, false);
			theme.chooseTemplateDialog.attachEvent("onReceive", function(event){
				var data = event.data;
				TemplateDataFrom(data);
			} , theme.chooseTemplateDialog);   
	}
	theme.chooseTemplateDialog.open();
} 
function TemplateDataFrom(data){
	if(!data) return;
	var mainData = justep.xbl('main');
	var sThemeName = data[0].sThemeName;
	var themeid = data[0].rowid;
	mainData.setRowData(theme.currentRowID,[themeid,sThemeName],["sThemeID","sThemeName"])
}

function singleMultiToFrameValue(){
	return{
		orgKind:"ogn,dpt"
	};
}

function singleMultiFromFreameValue(evt) {
	var data = evt.data;
	var sFName = data[0].sFName;
	var sID = data[0].rowid;
	var mainData = justep.xbl("main");
	mainData.setRowData(theme.currentRowID,[sID,sFName],["sOrgID","sFName"]);
}

var theme={
	currentRowID:""
	
}

mainActivity2.model1Load = function(event){
	if(!justep.Portal._isPortal2()){
		window.location.href = window.location.href.replace('/SA/theme/themeManager/mainActivity2.w', '/SA/theme/themeManager/mainActivity.w');
	}
};

var mainActivity2 = {};
//function loadLayOut(){
//	var mainData = justep.xbl("main");
//	if(template.currentId==""){
//		mainData.refreshData();
//	}
//	var currentrowid = mainData.getCurrentRowId();
//	var instance = mainData.getInstance();
//	var layoutinfo = instance.getValue("sThemeLayoutInfo",currentrowid);
//	template.currentId = currentrowid;
//	template.currentState= mainData.getValue("sThemeActivity",currentrowid);
//	justep.Portal._getJPolite().setLayOutWithUI(layoutinfo);
//	var store =mainData.getStore(); 
//	for(var i=0;i<store.getRowsNum();i++){
//		var templatemanageid = store.getRowId(i);
//		var activity = store.getValueByName("sThemeActivity",templatemanageid)
//		if(templatemanageid==currentrowid){
//			document.getElementById('theme_state_'+currentrowid).innerText = "修改中";
//			mainData.setRowData(template.currentId,["reworking"],["sThemeActivity"]);
//		}
//	}
//}

function addLayOut(){
	if(beforeAddConfirm()){
		var mainData = justep.xbl("main");
		var newRowId = mainData.createUUID();
		mainData.insert(newRowId,0);
		mainData.setRowState(newRowId,justep.XData.STATE.NEW);
		
		var current = justep.xbl("data2"),
			personId = justep.Context.getCurrentPersonID(),
			condition =	"Portal2Profiles.sPublishType='person' and Portal2Profiles.sPersonID='" + personId + "'";

		current.filters.setFilter("filter", condition);
		current.refreshData();

		mainData.setRowData(newRowId, 
			[ "0", "", current.getValue('sFunctree'), current.getValue('sPortal'), current.getValue('sOther'), 'system', 'activity', personId], 
			[ 'version', 'sThemeName', 'sFunctree', 'sPortal', 'sOther', 'sPublishType', 'sThemeActivity', "sPersonID"]
		);
	};
}

function beforeAddConfirm(){
	if(template.currentId !=""){
		if(confirm("数据正在修改中，新增数据会取消修改，是否新增?")){
			var mainData = justep.xbl("main");
			mainData.refreshConfirm=false;
			mainData.refreshData();
			mainData.refreshConfirm=true;
			return true;
		}else{
			return false;
		}
	}else{
		return true;
	}
}

function disableLayOut(){
	var mainData = justep.xbl("main");
	mainData.setRowData(mainData.getCurrentRowId(),['disable'],['sThemeActivity']);
	mainData.saveData(function(){mainData.refreshData();});
}
function activityLayOut(){
	var mainData = justep.xbl("main");
	mainData.setRowData(mainData.getCurrentRowId(),['activity'],['sThemeActivity']);
	mainData.saveData(function(){mainData.refreshData();});
}



var template = {
	currentId:"",
	currentState:"",//保存修改前的状态
	/**
	 * 生成带图标形式的按钮组件<br/>
	 * @param	imgURL		图标的url，必选项，类型为string
	 * @param	text		显示的文本，可选项，类型为string
	 * @param	title		按钮的提示文本，必选项，类型为string
	 * @param	enable		按钮是否可用，必选项，类型为boolean
	 * @param	onclickText	按钮点击时执行的代码，必选项，类型为string
	 * @return	string		返回按钮的超文本代码
	 */
 	generateImageButton: function(imgURL, text, title, enable, onclickText){
 		imgURL = typeof(imgURL) == "string" && imgURL != ""?imgURL:"";
 		text = typeof(text) == "string" && text != ""?text:"";
 		title = typeof(title) == "string" && title != ""?title:"";
		var s = "<table cellpadding='0' cellspacing='0' onselectstart='return false;' style='cursor:default' " + 
			" onclick=\"" + (enable == true?onclickText:"") + "\" " + (title == ""?"":(" title='" + title + "' ")) + 
			" ><tr> "; 
		if(imgURL != "") {
			s += "<td align='" + (text == ""?"center":"left") + "' valign='middle'><img align='absmiddle' src='" + justep.Request.BASE_URL + '/' + imgURL + "' " + (enable == true?"":"style='filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)'") + "/></td> "
		}
		if(text != "") s += "<td style='font-size:10pt' align='left' valign='middle' nowrap='true'>" + text + "</td>";
		s += " </tr></table>";
		return s;
	},
	//创建另存为按钮
	generateSaveAsTemplateUI:function(){
		return template.generateImageButton('UI/system/images/standardToolbar/standard/insert.gif', '新建', '新建', true, 'addLayOut()');
	},
	//创建停用按钮
	generateDisableTemplateUI:function(){
		var mainData = justep.xbl("main");
		if(mainData.getValue("sThemeActivity",mainData.getCurrentRowId())=="activity"){
			return template.generateImageButton('UI/system/images/standardToolbar/standard/pause.gif', '停用', '停用',true, 'disableLayOut()');
		}else{
			return template.generateImageButton('UI/system/images/standardToolbar/standard/next.gif', '启用', '启用',true, 'activityLayOut()');
		}

	},

	generateCondition:function(){
		var mainData = justep.xbl("main");
		var condition =	"SA_ThemeDefine.sThemeActivity<>'disable' and SA_ThemeDefine.sThemePublishType='system'";
		mainData.filters.setFilter("filter",condition);
	},
	showState:function(data){
		var rowId = data.rowId;
		return "<div id='theme_state_"+rowId+"'>使用中</div>";
	}
}
function mainBeforeSave(event){
//	if(template.currentId!=""){
//		var mainData = justep.xbl("main");
//		var layoutinfo = justep.Portal._getJPolite().getLayOutForUI();
//		mainData.setRowData(template.currentId,[template.currentState,layoutinfo],["sThemeActivity","sThemeLayoutInfo"]);
//		template.currentId="";
//		template.currentState="";
//	}
}

function mainSaveCommit(event){
	var mainData = justep.xbl("main");
	mainData.refreshData();
	//template.currentId="";
	//template.currentState="";
}
function gridSelect3Dropdown(){
	var customFilterData = justep.xbl("custom_filter");
	var rowId = customFilterData.getCurrentRowId();
	var activity = customFilterData.getValue("activity", rowId);
	var condition =	"Portal2Profiles.sPublishType='system'";
	if(activity!="all"){
	   condition += "and Portal2Profiles.sThemeActivity = '"+activity+"'"	;
	}
	justep.xbl("main").filters.setFilter("filter", condition);
	justep.xbl("main").refreshData();
}
function model1Load(){
	if(!justep.Portal._isPortal2()){
		window.location.href = window.location.href.replace('/SA/theme/themeDefine/mainActivity2.w', '/SA/theme/themeDefine/mainActivity.w');
	}else{
		//justep.xbl("main").refreshData();
		gridSelect3Dropdown();
	}
}
function mainAfterRefresh(event){
	var mainData = justep.xbl("main");
	var store = mainData.getStore();
//	template.currentId="";
//	template.currentState="";
	for(var i=0;i<store.getRowsNum();i++){
		var templatemanageid = store.getRowId(i);
		var activity = store.getValueByName("sThemeActivity",templatemanageid)
		if(activity=="activity"){
			document.getElementById('theme_state_'+templatemanageid).innerText = "使用中";
		}else if(activity=="disable"){
			document.getElementById('theme_state_'+templatemanageid).innerText = "停用";
		}
	}
	mainActivity2.refreshBtnStatus();
}
/**
	name:bizData#onIndexChanged
	description: <b>[回调型事件]</b>行记录变化
	@param {object} event 它的结构如下:<br/>{"source":组件的js对象,"rowID":行Id,"rowIndex":行索引}
*/
mainActivity2.mainIndexChanged = function(event){
	mainActivity2.refreshBtnStatus();
}
mainActivity2.refreshBtnStatus = function(event){
	var mainData = justep.xbl("main");
	justep.xbl("btn-on").setDisabled(mainData.getValue("sThemeActivity",mainData.getCurrentRowId())=="activity");
	justep.xbl("btn-off").setDisabled(mainData.getValue("sThemeActivity",mainData.getCurrentRowId())!="activity");
};

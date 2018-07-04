function loadLayOut(){
	var mainData = justep.xbl("main");
	if(template.currentId==""){
		mainData.refreshData();
	}
	var currentrowid = mainData.getCurrentRowId();
	var instance = mainData.getInstance();
	var layoutinfo = instance.getValue("sThemeLayoutInfo",currentrowid);
	template.currentId = currentrowid;
	template.currentState= mainData.getValue("sThemeActivity",currentrowid);
	justep.Portal._getJPolite().setLayOutWithUI(layoutinfo);
	var store =mainData.getStore(); 
	for(var i=0;i<store.getRowsNum();i++){
		var templatemanageid = store.getRowId(i);
		var activity = store.getValueByName("sThemeActivity",templatemanageid)
		if(templatemanageid==currentrowid){
			document.getElementById('theme_state_'+currentrowid).innerText = "修改中";
			mainData.setRowData(template.currentId,["reworking"],["sThemeActivity"]);
		}
	}
}

function addLayOut(){
	if(beforeAddConfirm()){
		var mainData = justep.xbl("main");
		var newRowId = mainData.createUUID();
		mainData.insert(newRowId,0);
		mainData.setRowState(newRowId,justep.XData.STATE.NEW);
		var layoutinfo = justep.Portal._getJPolite().getLayOutForUI();
		mainData.setRowData(newRowId, ["0","",layoutinfo,'system','activity','',''], 
		['version','sThemeName','sThemeLayoutInfo','sThemePublishType','sThemeActivity',"sCreatorID",'btn']);
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
		var s = "<table cellpadding='0' cellspacing='0' onselectstart='return false;' style='width:26;height:26;cursor:default' " + 
			" onclick=\"" + (enable == true?onclickText:"") + "\" " + (title == ""?"":(" title='" + title + "' ")) + 
			" ><tr> "; 
		if(imgURL != "") {
			s += "<td align='" + (text == ""?"center":"left") + "' valign='middle'><img src='" + justep.Request.BASE_URL + '/' + imgURL + "' " + (enable == true?"":"style='filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)'") + "/></td> "
		}
		if(text != "") s += "<td style='font-size:10pt' align='left' valign='middle' nowrap='true'>" + text + "</td>";
		s += " </tr></table>";
		return s;
	},
	//创建另存为按钮
	generateSaveAsTemplateUI:function(){
		return template.generateImageButton('UI/system/images/standardToolbar/standard/insert.gif', '新增', '新增', true, 'addLayOut()');
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
	if(template.currentId!=""){
		var mainData = justep.xbl("main");
		var layoutinfo = justep.Portal._getJPolite().getLayOutForUI();
		mainData.setRowData(template.currentId,[template.currentState,layoutinfo],["sThemeActivity","sThemeLayoutInfo"]);
		template.currentId="";
		template.currentState="";
	}
}

function mainSaveCommit(event){
	var mainData = justep.xbl("main");
	mainData.refreshData();
	template.currentId="";
	template.currentState="";
}
function gridSelect3Dropdown(){
	var customFilterData = justep.xbl("custom_filter");
	var rowId = customFilterData.getCurrentRowId();
	var activity = customFilterData.getValue("activity", rowId);
	var condition =	"SA_ThemeDefine.sThemePublishType='system'";
	if(activity!="all"){
	   condition += "and SA_ThemeDefine.sThemeActivity = '"+activity+"'"	;
	}
	justep.xbl("main").filters.setFilter("filter", condition);
	justep.xbl("main").refreshData();
}
function model1Load(){
	gridSelect3Dropdown()
}
function mainAfterRefresh(event){
	var mainData = justep.xbl("main");
	var store = mainData.getStore();
	template.currentId="";
	template.currentState="";
	for(var i=0;i<store.getRowsNum();i++){
		var templatemanageid = store.getRowId(i);
		var activity = store.getValueByName("sThemeActivity",templatemanageid)
		if(activity=="activity"){
			document.getElementById('theme_state_'+templatemanageid).innerText = "使用中";
		}else if(activity=="disable"){
			document.getElementById('theme_state_'+templatemanageid).innerText = "停用";
		}
	}
}
function themegridRowClick(event){
	var rowId = event.rowId;
	var mainData = justep.xbl("main");
	var state = mainData.getValue("sThemeActivity",rowId);
	var stateManagement = justep.xbl("disableManagement");
	stateManagement.setValue(template.generateDisableTemplateUI('main'))
}
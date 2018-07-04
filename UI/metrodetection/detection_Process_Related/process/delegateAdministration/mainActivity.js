	var mainActivity = {};

mainActivity.grdMasterRowDblClick = function(event){
	justep.xbl("tabpanel1").setTabActive("tabDetail");
};

mainActivity.newItemClick = function(event){
	justep.xbl("dataMaster").newData();
	justep.xbl("tabpanel1").setTabActive("tabDetail");	
	aa();
	var id = document.getElementById('insertMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(true);
};



mainActivity.mdDefaultXBLLoaded = function(event){
	debugger;
	$(justep.xbl("iptCONTACTMOBILE").input).attr("maxlength",20);
	$(justep.xbl("iptMANUFACTUREPOSTCODE").input).attr("maxlength",6);
	$(justep.xbl("iptMANUFACTUREIDCNAME").input).attr("maxlength",200);
	$(justep.xbl("iptMANUFACTUREIDENAME").input).attr("maxlength",200);
	$(justep.xbl("iptMANUFACTUREADDRESS").input).attr("maxlength",200);
	$(justep.xbl("iptCONTACTEMAIL").input).attr("maxlength",200);
	$(justep.xbl("iptCONTACTTELEPHONE").input).attr("maxlength",20);
	$(justep.xbl("iptFAXNUMBER").input).attr("maxlength",20);
	$(justep.xbl('textarea1').input).bind('keydown', function(evt){if(this.value.length>=2000){return false;}} );
};


mainActivity.tabListSelect = function(event){
	justep.xbl("dataMaster").refreshData();	
};

mainActivity.gridSelect1Closeup = function(event){
		var data = justep.xbl('dataMaster');
		var currentId = data.getCurrentId();
		if(data.getValue("mANUFACTURETYPE1")==4){
			$('#view1').css('display','block');
			load_part("view1");
			$('#view2').css('display','none');
		}else{
			$('#view2').css('display','block');
			load_part("view2");
			$(justep.xbl("input1").input).attr("maxlength",50);
			$('#view1').css('display','none');			
		}
};

mainActivity.tabDetailSelect = function(event){
debugger;
	aa();

};

function aa(){
var data = justep.xbl("dataMaster");
	var currentId = data.getCurrentId();
	if(data.getValue("mANUFACTURETYPE1",currentId)==4){
		$('#view1').css('display','block');
		load_part("view1");
		$('#view2').css('display','none');		
	}else{
		$('#view2').css('display','block');
		load_part("view2");
		$('#view1').css('display','none');	
	}
}

mainActivity.assetDelete = function(event){
	var data = justep.xbl('dataMaster');
	var infoIDs = data.getStore().getCheckedRowIds();
	var deleteIDs = "";
	var length = infoIDs.length;
	if (length == '0') {
		alert("请先选择要删除的厂商信息！");
	} else {
		for (var i = 0; i < length; i++) {
				if (deleteIDs == "") {
					deleteIDs = infoIDs[i];
				} else {
					deleteIDs += "," + infoIDs[i];
				}
		}
		if (deleteIDs != "") {
			data.deleteData(deleteIDs);
		}
	}
};

mainActivity.saveMasClick = function(event){
	var data = justep.xbl('dataMaster');
	data.saveData();
	var id = document.getElementById('insertMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/insert.gif", true);
	$("#insertMas").attr("src", tt);
	justep.xbl('insertMas').setDisabled(false);
	var id = document.getElementById('saveMas');
	id.disabled = true;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/un_save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(true);	
	
};

/**
	name:bizData#onValueChanged
	description: <b>[回调型事件]</b>数据变化
	@param event 它的结构如下:<br/>{"source":组件的js对象,"column":关系,"rowIndex":行索引,"value":新值,"originalValue":旧值}
*/
mainActivity.dataMasterValueChanged = function(event){
	var id = document.getElementById('saveMas');
	id.disabled = false;
	var tt = justep.Request.convertURL(
			"/UI/system/images/standardToolbar/standard/save.gif", true);
	$("#saveMas").attr("src", tt);
	justep.xbl('saveMas').setDisabled(false);
};

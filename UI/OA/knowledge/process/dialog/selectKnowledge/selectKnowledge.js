function trfFolderShowNodeImg(event) {
	return "/UI/OA/common/images/org.gif";
}

function windowSend() {
	return xforms('grdDes').grid;
}

//选择
function select() {
	var data = justep.xbl('dKnowledge');
	var kwid = data.getCurrentRowId();
	if(kwid != '' && kwid != undefined) {
		var des = xforms('grdDes').grid;
		var ind = des.getIndex() + 1;
		var pos = des.getRowIndex(kwid); 
		if(pos == -1) {
			var fTitle = data.getValue("fTitle");
			var fKeyword = data.getValue("fKeyword");
			var fWriter = data.getValue("fWriter");
			var fContentTypeName = data.getValue("fContentTypeName");
			var fReleaseTime = data.getValue("fReleaseTime");
			var text = ['',fTitle,fKeyword,fWriter,fContentTypeName,fReleaseTime];
			
			des.addRowPro(kwid, text, ind);
			des.selectRow(ind, true);
		} else {
			des.selectRow(pos, true);
		}
	}
}

//取消
function cancel() {
	var des = xforms('grdDes').grid; 
	ind = des.getIndex();
	des.del(ind);
}

//取消所有
function cancelAll() {
	xforms('grdDes').grid.clearAll(); 
}
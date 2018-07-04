function onRefreshCreateParam(evt){
	var param = evt.param;
	var customFilterData = justep.xbl("custom_filter");
	var rowId = customFilterData.getCurrentRowId();
	var status = customFilterData.getValue("status", rowId);
	param.setString("status", status);
	
	
	var sels = justep.xbl("orgPersonFilter").getSelecteds();
	var org = "";
	for (var i=0; i<sels.length; i++){
		var item = sels[i];
		if (item.sOrgKindID == "psn"){
			org = org + "," + item.sID;
			/*
			if (item.sName == "本人"){
				persons = persons + "," + item.sID;
				
			}else{
				var parentOrg = opFilter.getData().getValue("sFID", item.sParent);
				persons = persons + "," + item.sID + "|" + parentOrg;
			}
			*/
		}else{
			org = org + "," + item.sFID;			
		}
	}
	
	param.setString("org", org);
}

function getPersonNameByFName(fid, fname){
	return getOrgNameByFName(fid, fname, "psm");
}

function getPersonIDByFID(fid){
	return getOrgIDByFID(fid, "psm");
}

function getPosNameByFName(fid, fname){
	return getOrgNameByFName(fid, fname, "pos");
}

function getPosIDByFID(fid){
	return getOrgIDByFID(fid, "pos");
}

function getDeptNameByFName(fid, fname){
	return getOrgNameByFName(fid, fname, "dpt");
}

function getDeptIDByFID(fid){
	return getOrgIDByFID(fid, "dpt");
}

function getOgnNameByFName(fid, fname){
	return getOrgNameByFName(fid, fname, "ogn");
}

function getOgnIDByFID(fid){
	return getOrgIDByFID(fid, "ogn");
}

function getOrgNameByFName(fid, fname, orgKind){
	var suffix = "." + orgKind;
	if (typeof fid != "string" || fid.length == 0 || fid.indexOf(suffix) == -1 || typeof fname != "string" || fname.length == -1){
		return "";
	}else{
		var ids = fid.split("/");
		var names = fname.split("/");
		if (ids.length != names.length){
			throw new Error("fid: " + fid + " 与 fname: " + fname + " 不匹配!");
			
		}else{
			for (var i=ids.length-1; i>=0; i--){
				if (ids[i].length == 0){
					continue;
				}
				
				if (endsWith(ids[i], suffix)){
					return names[i];
				}
			}
			
			return "";
		}
	
	}	

}

function getOrgIDByFID(fid, orgKind){
	var suffix = "." + orgKind;
	if (typeof fid != "string" || fid.length == 0 || fid.indexOf(suffix) == -1){
		return "";
		
	}else{
		var ids = fid.split("/");
		for (var i=ids.length-1; i>=0; i--){
			if (ids[i].length == 0){
				continue;
			}
			
			if (endsWith(ids[i], suffix)){
				if (orgKind == "psm"){
					if (ids[i].indexOf("@") != -1){
						return ids[i].substring(0, ids[i].indexOf("@"));	
					}else{
						throw new Error("不是合法的人员成员FID: " + fid);
					}
				}else{
					return ids[i].substring(0, ids[i].length-suffix.length);	
				}
			
				
			}
		}
		
		return "";
	}
}

function startsWith(str, search){
	if ((typeof str == "string") && (typeof search == "string") ){
		return (str.indexOf(search) == 0);  
	}else{
		return false;
	}
}

function endsWith(str, search){
	if ((typeof str != "string") || (typeof search != "string") || str.length==0 || search.length==0){
		return false;
	}else if (search.length > str.length){
		return false;
	}else if (str.length-search.length == str.lastIndexOf(search)){
		return true;
	}
	
	return false;
} 			





/*设置类型过滤条件*/
function setTypeFilter(mainDataID, filterDataID, concept) {
	var customFilterData = justep.xbl(filterDataID);
	var rowId = customFilterData.getCurrentRowId();
	var typeValue = customFilterData.getValue("type", rowId);
	var filterText = "";
	if (typeValue && typeValue != "") {
		var filters = [];
		var types = typeValue.split(" ");
		for (var i = 0, len = types.length; i < len; i++) {
			if (0<filters.length) {
				filters.push(" OR ");
			}

			filters.push("(");					
			filters.push(concept + ".sTypeID");
			filters.push("=");
			filters.push("'" + types[i] + "'");
			filters.push(")");
		}
		filterText = filters.join("");					
	}
	justep.xbl(mainDataID).filters.setFilter("_custom_type_filter_", filterText);
}

/*设置日期时间过滤条件*/
function setDateTimeFilter(mainDataID, concept, dateSelectorID) {
	var dateSelector = justep.xbl(dateSelectorID);
	var dateTimeCondition = dateSelector.getDateFilter(concept + ".sCreateTime");
	justep.xbl(mainDataID).filters.setFilter("_custom_datetime_filter_", dateTimeCondition);
}


/*设置模糊过滤条件*/
function setLikeFilter(mainDataID, filterDataID, concept) {
	var customFilterData = justep.xbl(filterDataID);
	var rowId = customFilterData.getCurrentRowId();
	var likeValue = customFilterData.getValue("like", rowId);
	var filterText = "";
	if (likeValue && likeValue != "") {
		if (likeValue.indexOf("%") == -1) {
			likeValue = "%" + likeValue + "%";
		}
		filterText = "(" + concept + ".sName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sImportanceName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sTypeName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sStatusName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sCreatorFName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sExecutorFName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sProjectName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sCustomerName LIKE '" + likeValue + "') OR"
				+ "(" + concept + ".sPlanName LIKE '" + likeValue + "')";
	}
	justep.xbl(mainDataID).filters.setFilter("_custom_like_filter_", filterText);
}
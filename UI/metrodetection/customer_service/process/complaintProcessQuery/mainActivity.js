var mainActivity = {};


mainActivity.model1Load = function(event){
	var main = justep.xbl("main");
	var dFilter = justep.xbl("custom_filter");
	var currentPsId = justep.Context.getCurrentPersonID();
//	alert(currentPsId);
	main.setFilter("filter", "SA_Task.sCreatorPersonID = '"+currentPsId+"'");
	var parameter = justep.Context.getRequestParameter("parameter");
	if (parameter == "submited") {
		dFilter.setValue("status", "处理中,编辑中,已完成");
		dFilter.setValue("statusLabel", "处理中,编辑中,已完成");
		dFilter.setValue("org",1);
		dFilter.setValue("orgLabel","本人");
		main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','尚未处理','已完成')");
		main.refreshData();
	} else {
		dFilter.setValue("status", "处理中,编辑中,已完成");
		dFilter.setValue("statusLabel", "处理中,编辑中,已完成");
		dFilter.setValue("org",1);
		dFilter.setValue("orgLabel","本人");
		main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','尚未处理','已完成')");
		main.refreshData();
	}
	
};


mainActivity.gridRowDblClick = function(event){
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/metrodetection/customer_service/process/complaintProcessQuery/complaintProcessQueryDetail.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&operator="
			+ operator
			+ "&id=" + event.rowId;
	justep.Portal.openWindow("投诉处理流程查询详细", url);

};

mainActivity.grid_sNameRender = function(event){
	if (event.value == "") {
		event.value = "&#160;&#160;&#160;&#160;&#160;";
	}
	var html = "<a href=\"javascript:openBuyApplyDetail('" + event.rowId
			+ "')\">" + event.value + "</a>";
	return html;
};
function openBuyApplyDetail(id) {
	var process = justep.Context.getCurrentProcess();
	var activity = justep.Context.getCurrentActivity();
	var operator = "view";
	var url = "/metrodetection/customer_service/process/complaintProcessQuery/complaintProcessQueryDetail.w?process="
			+ process
			+ "&activity="
			+ activity
			+ "&operator="
			+ operator
			+ "&id=" + id;
	justep.Portal.openWindow("投诉处理流程查询详细", url);
}

mainActivity.gridSelect1Closeup = function(event){
	var dFilter = justep.xbl("custom_filter");
	var main = justep.xbl("main");
	var status = dFilter.getValue("status");
	var status1 =  new Array();
	status1 = status.split(",");
//	alert(status1.length);
	if(status1.length==1){
	    if(status1[0]=='处理中'){
	    	main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理')");
	    	main.refreshData();
	    } else {
	    	main.setFilter("filter1", "sStatusName='"+status+"'");
	    	main.refreshData();
	    }
	}
	if(status1.length==2){
//		alert(status1[0]+","+status1[1]);
		if(status1[0]=='处理中'){
	    	main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[1]+"')");
	    	main.refreshData();
	    } if (status1[1]=='处理中'){
	    	main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[0]+"')");
	    	main.refreshData();
	    } if (status1[0]!='处理中' && status1[1]!='处理中') {
	    	main.setFilter("filter1", "sStatusName in('"+status1[0]+"','"+status1[1]+"')");
	    	main.refreshData();
	    }
	} 
	if(status1.length==4){
		main.setFilter("filter1", "1=1");
		main.refreshData();
	}
	if(status1.length==3){
		if(status1[0]=='处理中'){
			main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[1]+"','"+status1[2]+"')");
			main.refreshData();
		}
		if(status1[1]=='处理中'){
			main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[0]+"','"+status1[2]+"')");
			main.refreshData();
		}
		if(status1[2]=='处理中'){
			main.setFilter("filter1", "sStatusName in ('已回退','已暂停','已转发','正在处理','"+status1[1]+"','"+status1[0]+"')");
			main.refreshData();
		} 
        if(status1[0]!='处理中' && status1[1]!='处理中' && status1[2]!='处理中') {
			main.setFilter("filter1", "sStatusName in ('"+status1[0]+"','"+status1[1]+"','"+status1[2]+"')");
			main.refreshData();
		}
	}
//	main.refreshData();
};

mainActivity.trgSearchClick = function(event){
	justep.xbl("main").refreshData();
};

mainActivity.gridSelect2Closeup = function(event){
	var dFilter = justep.xbl("custom_filter");
	var org = dFilter.getValue("org");
	//alert(org);
	var main = justep.xbl("main");
	var currentPsId = justep.Context.getCurrentPersonID();
	if(org == 0){
//		alert("全部");
		main.setFilter("filter","");
		main.refreshData();
	}else if(org ==1){
//		alert(currentPsId);
		main.setFilter("filter", "SA_Task.sCreatorPersonID = '"+currentPsId+"'");
		main.refreshData();
	}
};

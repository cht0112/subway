﻿﻿﻿﻿﻿﻿﻿var portalConfig = {};

var portalSystemConfig = {};

portalSystemConfig.funcIframe = "system/widgets/wFuncFrame.html";

portalConfig.shortcuts=[
	  {title:'Justep', url:'http://www.justep.com', openType:'blank'},
	  {title:'关于我们', url:'http://www.justep.com/jj_contact.html', openType:'dialog'}
];           

portalConfig.themes = {
	 defaultTheme:{title:"默认",tooltip:"系统默认风格",icon:"x5/css/d/settings/templet/m1.jpg"},
	 otherTheme:{title:"绿色版",tooltip:"绿色版风格",icon:"x5/css/d/settings/templet/others.jpg"}
};

portalConfig.layouts ={
	_default: {a1:'33%',a2:'33%',a3:'34% last',a4:'100%',background:'normal'},
	_dynamic: {a1:'100% last',a2:'hide',a3:'hide',a4:'hide'},
	l1_0: {a1:'100% last',a2:'hide',a3:'hide',a4:'hide'},
	l2_0: {a1:'50%',a2:'50% last',a3:'hide',a4:'hide'},
	l3_0: {a1:'33%',a2:'34%',a3:'33% last',a4:'hide'},
	l3_1: {a1:'100% last',a2:'50%',a3:'50% last',a4:'hide'},
	l3_2: {a1:'50%',a2:'50% last',a3:'100% last',a4:'hide'},
	l4_0: {a1:'25%',a2:'25%',a3:'25%',a4:'25% last'},
	l4_1: {a1:'100% last',a2:'33%',a3:'34%',a4:'33% last'},
	l4_2: {a1:'33%',a2:'34%',a3:'33% last',a4:'100% last'},
	l4_3: {a1:'100% last',a2:'50%',a3:'50% last',a4:'100% last'},
	l4_4: {a1:'66%',a2:'34% last',a3:'34%',a4:'66% last'},
	l4_5: {a1:'66%',a2:'34% right last',a3:'33%',a4:'33% last'},
	l4_6: {a1:'66% right',a2:'34% last',a3:'33% right',a4:'33% right last'}
}

portalConfig.layoutsToolbar={
	l1:{category:"一个区域",layoutIDs:["l1_0"]},
	l2:{category:"二个区域",layoutIDs:["l2_0"]},
	l3:{category:"三个区域",layoutIDs:["l3_0", "l3_1", "l3_2"]},
	l4:{category:"四个区域",layoutIDs:["l4_0", "l4_1", "l4_2", "l4_3", "l4_4", "l4_5", "l4_6"]}
}

portalConfig.widgets={
	/*	
	TaskWaiting:{
		title:"待办任务",
		icon:'',
		refresh:false,
		arguments:{url:'/SA/task/taskView/waitingTask.p',process:'',activity:'',params:''},
		more:{title:'任务中心',url:'/SA/task/taskCenter/mainActivity.w',process:'',activity:'',params:'&parameter=waiting'}
	},
	TaskSubmit:{
		title:"提交任务",
		icon:'',
		refresh:false,
		arguments:{url:'/SA/task/taskView/submitTask.p',process:'',activity:'',params:''},
		more:{title:'任务中心',url:'/SA/task/taskCenter/mainActivity.w',process:'',activity:'',params:'&parameter=submited'}
	}
	*/
	TaskWaiting:{
		title:"待办任务",
		height:'115',
		icon:'',
	    refresh:false,
	    arguments:{url:'/SA/task/taskView/waitingTask.p',process:'',activity:'',params:'&displayCount=6&deptDisplay=0&personDisplay=0&dateDisplay=0'},
	    more:{title:'任务中心',url:'/SA/task/taskCenter/mainActivity.w',process:'/SA/task/taskCenter/taskCenterProcess',activity:'mainActivity',params:'&parameter=waiting'}
    },
    ToDo:{
		title:"我的待办",
		icon:'',
	    height:'115',
		refresh:true,
		arguments:{url:'/OA/common/process/toDoWidget/mainActivity.p',process:'',activity:'',params:''}
	},
	wSchedule:{
		title:"我的日程",
		icon:'',
		height:'271',
		refresh:false,
		arguments:{url:'/OA/schedule/process/schedulePortlet/schedulePortlet.w',process:'/OA/schedule/process/schedulePortlet/schedulePortletProcess',activity:'startActivity',params:''},
		more:{title:'我的日程',url:'/OA/schedule/process/mySchedule/mySchedule.w',process:'/OA/schedule/process/mySchedule/myScheduleProcess',activity:'startActivity',params:''}
	},
	wDocReadPortlet:{
		title:"待阅公文",
		icon:'',
		height:'115',
		refresh:false,
		arguments:{url:'/OA/doc/process/docPortlet/waitReadDoc.p',process:'',activity:'',params:'&displayCount=7'},
		more:{title:'待阅公文',url:'/OA/doc/process/readDocQuery/readDocQuery.w',process:'/OA/doc/process/readDocQuery/readDocQueryProcess',activity:'readDocQueryActivity',params:''}
	},
	wDocRecvPortlet:{
		title:"待收公文",
		icon:'',
		height:'115',
		refresh:false,
		arguments:{url:'/OA/doc/process/docPortlet/waitRecvDoc.p',process:'',activity:'',params:'&displayCount=7'},
		more:{title:'待收公文',url:'/OA/doc/process/receiveDocQuery/receiveDocQuery.w',process:'/OA/doc/process/receiveDocQuery/receiveDocQueryProcess',activity:'receiveDocQueryActivity',params:''}
	},
	wNewAndPicPortlet:{
		title:"新闻",
		icon:'',
		height:'271',
		refresh:false,
		arguments:{url:'/OA/knowledge/process/knowledgePortlet/textAndPicPortlet.p',process:'',activity:'',params:'&folderFullID=public/news&displayCount_pic=6'},
		more:{title:'新闻',url:'/OA/knowledge/process/knowledgeMore/knowledgeMoreActivity.w',process:'/OA/knowledge/process/knowledgeMore/knowledgeMoreProcess',activity:'knowledgeMoreActivity',params:'&folderFullID=public/news'}
	},
    wNoticePortlet:{
		title:"公告",
		icon:'',
		height:'115',
		refresh:false,
		arguments:{url:'/OA/knowledge/process/knowledgePortlet/textPortlet.p',process:'',activity:'',params:'&folderFullID=public/notice&displayCount=7&isMarquee=0'},
		more:{title:'公告',url:'/OA/knowledge/process/knowledgeMore/knowledgeMoreActivity.w',process:'/OA/knowledge/process/knowledgeMore/knowledgeMoreProcess',activity:'knowledgeMoreActivity',params:'&folderFullID=public/notice'}
	},
    wDocPortlet:{
		title:"文件中心",
		icon:'',
		height:'115',
		refresh:false,
		arguments:{url:'/OA/knowledge/process/knowledgePortlet/textPortlet.p',process:'',activity:'',params:'&folderFullID=public/doc&displayCount=7&isMarquee=0'},
		more:{title:'文件中心',url:'/OA/knowledge/process/knowledgeMore/knowledgeMoreActivity.w',process:'/OA/knowledge/process/knowledgeMore/knowledgeMoreProcess',activity:'knowledgeMoreActivity',params:'&folderFullID=public/doc'}
	}
}
	
portalConfig.widgetsToolbar = {
	/*
	w1:{category:"任务相关",widgetIDs:["TaskWaiting", "TaskSubmit"]}
	*/
	w1:{category:"任务相关",widgetIDs:["TaskWaiting", "ToDo"]},
	w2:{category:"我的日程",widgetIDs:["wSchedule"]},
	w3:{category:"信息发布",widgetIDs:["wNewAndPicPortlet","wDocPortlet","wNoticePortlet"]},
	w4:{category:"公文",widgetIDs:["wDocReadPortlet","wDocRecvPortlet"]}
};

portalConfig.defaultTabs={
	/*
	t001:{title:'首页',layoutID:'l1_0',widgets:['TaskWaiting a1 ', 'ToDo a1'],authority:{tab:{removeable:true},widget:{addable:true,removeable:true,sortable:true}},refresh:false,hideTree:false}
	*/
	t001:{title:"首页", layoutID:"l3_0", widgets:["TaskWaiting a2 green","wDocPortlet a2 blue","wNewAndPicPortlet a1 blue","ToDo a3 blue","wNoticePortlet a1 blue","wDocReadPortlet a2 bule","wSchedule a3 blue"],authority:{tab:{removeable:true},widget:{addable:true,removeable:true,sortable:true}},refresh:false,hideTree:false}
}; 

portalConfig.reminds = {  
	   reminds_r0:{'url':'/SA/task/remind/remindNewCount.p','process':'','activity':'','params':'','interval':'5'}
//	   reminds_r1:{'url':'/SA/theme/themeDefine/test2.p','process':'','activity':'','params':'','interval':'1','width':'20'},
  
};

/*
 var _auto_run_hide_funcs = [
 	{'name':'任务提醒','url':'/SA/task/remind/useActivity.w?process=/SA/task/remind/remindProcess&activity=mainActivity','process':'','activity':'','params':''}
 ];
*/
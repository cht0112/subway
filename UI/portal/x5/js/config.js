﻿﻿﻿﻿﻿﻿﻿﻿var portalConfig = {};

var portalSystemConfig = {};

portalSystemConfig.funcIframe = "../UI/portal/system/widgets/wFuncFrame.html";

portalConfig.showRemind = false;

portalConfig.captcha = false;

portalConfig.shortcuts=[
	  {title:'Justep', url:'http://www.justep.com', openType:'blank'},
	  {title:'关于我们', url:'http://www.justep.com/html/qiyejianjie/AG00.html', openType:'dialog'}
];           

portalConfig.themes = {
	 defaultTheme:{title:"默认",tooltip:"系统默认风格",icon:"../UI/portal/x5/css/d/settings/templet/m1.jpg"},
	 otherTheme:{title:"绿色版",tooltip:"绿色版风格",icon:"../UI/portal/x5/css/d/settings/templet/others.jpg"}
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


portalConfig.defaultTabs={
	t001:{title:'首页',layoutID:'l1_0',widgets:['TaskWaiting a1 ', 'TaskSubmit a1'],authority:{tab:{removeable:true},widget:{addable:true,removeable:true,sortable:true}},refresh:false,hideTree:false}
//	t002:{title:'功能树',isFunc:true,hideTree:true,url:"/portal/functree.w",process:"/SA/OPM/system/systemProcess",activity:"mainActivity"}
};

portalConfig.reminds = {  
	   reminds_r0:{'url':'/SA/task/remind/remindNewCount.j','process':'','activity':'','params':'','interval':'5'}
//	   reminds_r1:{'url':'/SA/theme/themeDefine/test2.p','process':'','activity':'','params':'','interval':'1','width':'20'},
  
};

/*
 var _auto_run_hide_funcs = [
 	{'name':'任务提醒','url':'/SA/task/remind/useActivity.w?process=/SA/task/remind/remindProcess&activity=mainActivity','process':'','activity':'','params':''}
 ];
*/
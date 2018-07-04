justep.design.ProcessBar = function(config){ 
	justep.design.ProcessBar.superclass.constructor.call(this,config);
};

//依赖justep.design.BaseBar,在bar中实现
justep.extend(justep.design.ProcessBar, justep.design.BaseBar,{
	getDefaultItems:function(){
		var basePath =  ComponentConfig[this.componentName].basePath + "/images/";
		return [ ['back-process-item',"回退", basePath + "back.gif",true],
		         ["advance-process-item","流转", basePath + "turn.gif",true],
	   			 ["transfer-task-item","转发", basePath + "redirect.gif",true],
				 ["suspend-process-item","暂停", basePath + "pause.gif",true],
				 ["abort-process-item","终止", basePath + "stop.gif",true],
				 ['customized-process-item',"定制", basePath + "customized.gif",true],
				 ["process-chart-item","流程图", basePath + "chart.gif",true],
				 ["execute-list-item","流程记录", basePath + "executeList.png",true],
		 	     ["withdraw-task-item","回收", basePath + "recycle_task.gif",true],
				 ["modify-executor-item","修改执行者", basePath + "modify_executor.gif",true]
				 ];
	}
});

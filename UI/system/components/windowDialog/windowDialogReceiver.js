/**
 * 兼容性保留
 * lzg 2011.3
 */

justep.windowReceiver = {};
/**
 * 父页面注册对象，使用者不必处理
 */
justep.windowReceiver.windowParentObj = null; 

/**
 * 使用页面注册接收接收数据函数 
 */
justep.windowReceiver.acceptParentParamsFun = null;

/**
 * 接收父页面传入的参数 ，使用者不必处理
 */
justep.windowReceiver.windowReceive = function (obj){
	if(typeof(justep.windowReceiver.acceptParentParamsFun) == "function")
		justep.windowReceiver.acceptParentParamsFun(obj);
	else if(typeof(justep.windowReceiver.acceptParentParamsFun) == 'string'){
		eval(justep.windowReceiver.acceptParentParamsFun + "(obj)")
	}
}

/**
 * 确定调用的函数 ，参数为返回父页面的对象
 */
justep.windowReceiver.windowEnsure = function (obj,noclose){
	if(justep.windowReceiver.windowParentObj)
		justep.windowReceiver.windowParentObj.ensure(obj,noclose);
}

/**
 * 取消调用的函数
 */
justep.windowReceiver.windowCancel = function (){
	if(justep.windowReceiver.windowParentObj)
		justep.windowReceiver.windowParentObj.cancel();
}

/**
 * 刷新调用的函数
 */
justep.windowReceiver.windowRefresh = function (){
	if(justep.windowReceiver.windowParentObj)
		justep.windowReceiver.windowParentObj.refresh();
}

justep.windowDialogReceiver = justep.windowReceiver;

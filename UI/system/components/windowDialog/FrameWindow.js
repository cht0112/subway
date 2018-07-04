
/**
 * 父页面注册对象，使用者不必处理
 */ 
/**
 * 兼容性保留
 * lzg 2011.3
 */
var windowParentObj; 

/**
 * 使用页面注册接收接收数据函数 
 */
var acceptParentParamsFun ;

/**
 * 接收父页面传入的参数 ，使用者不必处理
 */
function windowReceive(obj){
	if(typeof(acceptParentParamsFun) == "function")
		acceptParentParamsFun(obj.data);
	else if(typeof(acceptParentParamsFun) == 'string'){
		eval(acceptParentParamsFun + "(obj.data)")
	}
}

/**
 * 确定调用的函数 ，参数为返回父页面的对象
 */
function windowEnsure(obj,noclose){
	if(windowParentObj)
		windowParentObj.ensure(obj,noclose);
}

/**
 * 取消调用的函数
 */
function windowCancel(){
	if(windowParentObj)
		windowParentObj.cancel();
}

/**
 * 刷新调用的函数
 */
function windowRefresh(){
	if(windowParentObj)
		windowParentObj.refresh();
}


var initActivity = {};

initActivity.initClick = function(event){
	var callback = function(data){
		$.isLoading( "hide" );
		if (data.state){
			var msg = "初始化系统库成功。<br/><br/>系统管理员用户名：<span style='color:#FF0000;font-size:16px;font-weight:bold;'>system</span>，<br/>密码：<span style='color:#FF0000;font-size:16px;font-weight:bold;'>123456</span>"
			+ "<br/><br/>是否以系统管理员身份登录系统？";
			var okBack = function(){
				var client = justep.Request.getData(data.httpResponse);
				loginDate = (function(){
						var date = new Date(), y, M, d;
						y = date.getFullYear();
						M = date.getMonth() + 1;
						d = date.getDate();
						return y + "-" + (M<10?"0":"") +  M + "-" + (d<10?"0":"") + d;
					})();
				var url = window.location.protocol + "//" + window.location.host + "/x5/UI/portal2/process/portal/DirectLogin.j?client=" + client 
					+ "&username=system" 
					+ "&password=" + hex_md5("123456")
					+ "&loginDate=" + loginDate;
				window.location.href=url;
			};
			var cancelBack = undefined;
			justep.OpmUtils.showConfirm(msg, okBack, cancelBack);
			
		}else{
			data.ignoreError = false;
		}
	};
	var options = {'url' : "/UI/SA/init/initSysDb.j",
				   'contentType' : "json",
				   'callback' : callback,
				   'directExecute' : true,
				   'async': true,
				   'dataType' : "json"};
	justep.Request.sendRequest2(options);
	$.isLoading();
};

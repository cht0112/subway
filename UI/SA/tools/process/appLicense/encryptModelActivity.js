var encryptModelActivity = {};

encryptModelActivity.trigger1Click = function(event){
	if(encryptModelActivity.check()){
		var f = justep('f');
		if (f) {
			justep.Request.setFormAction(f, justep.Request.convertURL("/UI/system/service/common/bizAction.j"));
			var $f = $(f);
			var $input = $f.children("input[name='password']");
			$input.val((new justep.MD5()).hex_md5($('#password1').val()));
			$input = $f.children("input[name='isCompile']");
			$input.val($('#compile').attr("checked")?"true":"false");			
			$('#result-iframe').one('load', function(){
				justep.Portal.stopLoading();
				encryptModelActivity.checkResult(this);
			});
			
			justep.Portal.startLoading();
			f.submit();
		}
	}
};

encryptModelActivity.check = function(){
	if(''==$('#cert').val()) throw new Error ('请选择开发商数字证书文件');
	if(''==$('#password1').val()) throw new Error ('请输入开发商数字证书密码');
	if(''==$('#sourceModelPath').val()) throw new Error ('请输入原模型路径');
	if(''==$('#targetModelPath').val()) throw new Error ('请输入加密后模型存放路径');
	if(''==$('#app').val()) throw new Error ('请输入需要加密的应用');
	return true; 
};

encryptModelActivity.checkResult = function(iframe) {
		if (iframe && iframe.contentWindow && iframe.contentWindow.document) {//特殊支持i9
			var doc = (!justep.Browser.IE||justep.Browser.IE9)?iframe.contentWindow.document:iframe.contentWindow.document.XMLDocument;
			if(doc){
				var data = justep.XML.eval(doc, "/root/data","single");
				var flag = justep.Request.getFlag(doc);
			}
			if (data && flag) {
				var isok = 'false' != flag;

				if (isok) {
					alert('应用加密完成');
				} else {
					var msg = justep.Request.getMessage(doc);
					alert("应用加密失败，"+msg);
				}
			}
		}
};

var createCertActivity = {canCreate : true, clickTime : 0};

createCertActivity.trigger1Click = function(event){
	var now = (new Date()).getTime();
	if(!this.canCreate && (now-this.clickTime)<5000) throw new Error ('请稍后再创建开发商数字证书');//间隔五秒
	this.canCreate = false;
	this.clickTime = now;
	
	if(createCertActivity.check()){
		var f = justep('f');
		if (f) {
			var $f = $(f);
			var md5 = new justep.MD5();
			var $input = $f.children("input[name='certPassword']");
			$input.val(md5.hex_md5($('#certPassword1').val()));			
			$input = $f.children("input[name='developerPassword']");
			$input.val(md5.hex_md5($('#developerPassword1').val()));			
			$('#result-iframe').one('load', function(){
				createCertActivity.canCreate = false;
				createCertActivity.checkResult(this);
			});
			
			f.submit();
		}
	}
};

createCertActivity.check = function(){
	if(''==$('#developer').val()) throw new Error ('请输入开发商登陆reg.justep.com账号');
	if(''==$('#developerPassword1').val()) throw new Error ('请输入开发商登陆reg.justep.com密码');
	if(''==$('#certPassword1').val()) throw new Error ('请输入开发商数字证书密码');
	if(''==$('#certPassword2').val()) throw new Error ('请输入开发商数字证书确认密码');
	if($('#certPassword1').val()!=$('#certPassword2').val()) throw new Error ('开发商数字证书密码输入不一致');
	return true; 
};

createCertActivity.checkResult = function(iframe) {
	var msg = "生成数字证书失败！";
	if (iframe && iframe.contentWindow && iframe.contentWindow.document) {//特殊支持i9
		var doc = (!justep.Browser.IE||justep.Browser.IE9)?iframe.contentWindow.document:iframe.contentWindow.document.XMLDocument;
		if(doc){
			var data = justep.XML.eval(doc, "/root/data","single");
			var flag = justep.Request.getFlag(doc);
			var code = justep.Request.getCode(doc);
		}
		if(code == justep.Request.SESSION_TIMEOUT){
			msg += "输入的开发商登陆reg.justep.com账号和密码不正确";
		}else if (data && flag) {
			var isok = 'false' != flag;
			if (!isok) {
				msg += justep.Request.getMessage(doc);
			}
		}
	}
	alert(msg);
};

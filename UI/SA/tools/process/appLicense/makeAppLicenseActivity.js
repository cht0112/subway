var makeAppLicenseActivity = {};

makeAppLicenseActivity.trigger1Click = function(event){
	if(makeAppLicenseActivity.check()){
		var f = justep('f');
		if (f) {
			var $f = $(f);
			var md5 = new justep.MD5();
			var $input = $f.children("input[name='certPassword']");
			$input.val(md5.hex_md5($('#certPassword1').val()));			
			$input = $f.children("input[name='developerPassword']");
			$input.val(md5.hex_md5($('#developerPassword1').val()));			
			$('#result-iframe').one('load', function(){
				justep.Portal.stopLoading();
				makeAppLicenseActivity.checkResult(this);
			});
			
			justep.Portal.startLoading();
			f.submit();
		}
	}
};

makeAppLicenseActivity.IsNum = function(s){
      s = s.trim();
       if(s!=null){
           var r,re;
           re = /\d*/i; //\d表示数字,*表示匹配多个数字
           r = s.match(re);
           return (r==s)?true:false;
       }
       return false;
}
   
makeAppLicenseActivity.check = function(){
	if(''==$('#cert').val()) throw new Error ('请选择开发商数字证书文件');
	if(''==$('#certPassword1').val()) throw new Error ('请输入开发商数字证书密码');
	if(''==$('#developer').val()) throw new Error ('请输入开发商登陆reg.justep.com账号');
	if(''==$('#developerPassword1').val()) throw new Error ('请输入开发商登陆reg.justep.com密码');
	if(''==$('#acode').val()) throw new Error ('请输入申请者的授权码');
	if(''==$('#useDays').val()) throw new Error ('请输入授权使用天数');
	if(''==$('#userCount').val()) throw new Error ('请输入授权使用用户数');
	if(''==$('#app').val()) throw new Error ('请输入授权的应用');
	if(!makeAppLicenseActivity.IsNum($('#useDays').val()))  throw new Error ('请输入有效的授权使用天数');
	if(!makeAppLicenseActivity.IsNum($('#userCount').val()))  throw new Error ('请输入有效的授权使用用户数');
	return true; 
};

makeAppLicenseActivity.checkResult = function(iframe) {
		if (iframe && iframe.contentWindow && iframe.contentWindow.document) {//特殊支持i9
			var doc = (!justep.Browser.IE||justep.Browser.IE9)?iframe.contentWindow.document:iframe.contentWindow.document.XMLDocument;
			if(doc){
				var data = justep.XML.eval(doc, "/root/data/*","single");
				var flag = justep.Request.getFlag(doc);
			}
			if (flag) {
				var isok = 'false' != flag;

				if (isok && data) {
					$("#appLicense").val(justep.Request.transform(data));
					alert('应用License生成完成');
				} else {
					var msg = "生成应用License失败！";
					
					var code = justep.Request.getCode(doc);
					if(code == justep.Request.SESSION_TIMEOUT){
						msg += "输入的开发商登陆reg.justep.com账号和密码不正确";
					}else msg += justep.Request.getMessage(doc);
					alert(msg);
				}
			}
		}
};


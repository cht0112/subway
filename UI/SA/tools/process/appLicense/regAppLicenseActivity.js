var regAppLicenseActivity = {};

regAppLicenseActivity.trigger1Click = function(event) {
	var $appLicense = $("#appLicense");
	if(!$appLicense.val()) throw new Error ('请输入应用License');
	var param = new justep.Request.ActionParam();
	param.setString("appLicense", $appLicense.val());
	var callback = function(data) {
		if (data.state) {
			var ret = data.response;
			alert("注册应用License完成！\n"
				  +"开发商："+ret['developer']+"\n"
				  +"应用："+ret['app']+"\n"
				  +"有效期："+ret['valid-date']+"\n"
				  +"允许使用人数："+ret['user-count']+"\n");
		} else {
			data.ignoreError = false;
		}
	};
	justep.Request.sendBizRequest2({
		action : "regAppLicenseAction",
		parameters : param,
		dataType: "application/json",
		callback : callback
	});
};

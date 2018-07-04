var mainActivity = {};

mainActivity.model1Load = function(event){
	mainActivity.showActivationTime();
	$('#regCode').val("");
	$('#sysCode').val("");
};

mainActivity.showActivationTime = function(){
	var params = new justep.Request.ActionParam();
	justep.Request.sendBizRequest2({
			action: "getActivationTimeAction",
			parameters: params,
			dataType: 'json',
			callback: function(data){
				if(data.state){
				  var date = data.response;
				  if(date) $('#display').text("您的系统上次密钥更新时间："+date);
				  else $('#display').text("您的系统版本不需要密钥更新！");
				}
				data.ignoreError=false;
			}
	});
};

mainActivity.trigger1Click = function(event){
	var params = new justep.Request.ActionParam();
	justep.Request.sendBizRequest2({
			action: "getActivationPackageAction",
			parameters: params,
			dataType: 'json',
			callback: function(data){
				if(data.state){
				  var code = data.response;
				  if(code) $('#sysCode').val(code);
				}
				data.ignoreError=false;
			}
	});
};

mainActivity.trigger2Click = function(event){
	var code = justep.String.trim($('#regCode').val());
	if(!code) throw justep.Error.create("请填入License密钥更新码！");
	var params = new justep.Request.ActionParam();
	params.setString("pkg", code);
	justep.Request.sendBizRequest2({
			action: "regActivationPackageAction",
			parameters: params,
			dataType: 'json',
			callback: function(data){
				if(data.state){
					mainActivity.showActivationTime();
					if(data.response) alert('系统密钥更新成功！');
					else alert('系统密钥更新失败！');
				}
				data.ignoreError=false;
			}
	});
};

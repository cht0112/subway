var list = {};

list.dgridQ1RenderCell = function(event){
	if ('firstColumn' == event.name) {
			//TODO 打开portal页签的接口
			//justep.Portal.openWindow = function(name, url,hidetreeable,callback,executor,options,icon)
			event.value="<a href=\"javascript:void(0)\" onclick=\"${detail-page}\">"+event.value+"</a>"
		}
	};
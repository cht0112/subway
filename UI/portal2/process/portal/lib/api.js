(function(global){
	
	global.justep = global.justep || {};
	var Portal = global.justep.Portal = global.justep.Portal || {};
	Portal.controllers = {};
	Portal.isPortal2 = true;
	
	Portal.logout = function(){
		if(this.controllers.logouter)
			this.controllers.logouter.logout();
	};
	
	Portal.openWindow = function(options){
		if(this.controllers.funcManager)
			return this.controllers.funcManager.runFunc(options);
	};
	
	Portal.refreshWindow = function(options){
		if(this.controllers.funcManager)
			return this.controllers.funcManager.refreshFunc(options);
	};

	Portal.closeWindow = function(options){
		if(this.controllers.funcManager)
			this.controllers.funcManager.closeFunc(options);
	};
	
	Portal.getWindowId = function(){
		return this.controllers.funcFrame.activeId; 
	};
	
	Portal.openAgentPage = function(id){
		return this.controllers.funcManager.openAgentPage(id);
	};
	
	Portal.getFuncIframe = function(url){
		if(this.controllers.funcFrame){
			return this.controllers.funcFrame.getIFrame(url);
		}
	};

	Portal.startLoading = function(){
		$.isLoading();
	};
	
	Portal.stopLoading = function(){
		$.isLoading( "hide" );
	};
	
})(window);
<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.w3.org/1999/xhtml"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events" timeout-window="/UI/portal2/process/portal/login.w">  
  <xui:inhead>
  	<xhtml:title>X5协同管理系统</xhtml:title>
	<xhtml:meta id="viewport" name="viewport" content="initial-scale=1.0,user-scalable=yes,width=1024"/>
  </xui:inhead>
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;" id="rootLayout" > 
		<div id="topPanel">
			<div id="setting">
				<div id="page1" style="height:100%;">
					<div style="width: 40%; height:100%;float:right;border-left: 1px solid #999;">
						<div id="reset_pwd"></div>
					</div>
					<div style="width: 30%; height:100%;float:right;border-left: 1px solid #999;">
						<div id="advanced_set"></div>
						
					</div>
				</div>
				<div id="page2" style="height:100%;">
					<div style="height:100%;">
						<div id="portal_set"></div>
					</div>
				</div>
				<div id="page3">
					<span style="font-size: 64px;color: white;"></span>
				</div>
			</div>
		</div>
		<div class="head">
			<div class="brand">
				<div class="logo"/>
				<div class="bar">
					<div>
						<span id="reminder">
						</span>
						<span id="agents">
						</span>
						<span class="user">
						<!-- 
							<img src="index/images/man.jpg"/>
						 -->
							<span class="name"></span>
							<span class="loginTime"></span>
						</span>
						<span class="tools">
							<a id="setting-btn">设置</a>&#160;|&#160;<a id="logout">注销</a>
						</span>
					</div>
				</div>
			</div>
			<!-- ie7 x-index bug -->
			<!-- 
			<div class="fun-map clearfix" id="cv2" style="position:relative;z-index: 4;"></div>
			 -->
			<div id="b3" style="z-index: 3"></div>
		</div>
		<div class="content" style="position:relative">
			<div id="b2" style="z-index: 2"></div>
			<div class="fun-map" id="cv1" style="z-index: 1"></div>
			<div id='portal'>
			</div>
		</div>
					
		<div id="funcFrame">
			<div class="left">
			</div>
			<div class="func">
				<div class="func-title"></div>
				<iframe frameborder="0"></iframe>
			</div>
		</div>
		
	</xui:layout> 
  </xui:view>  
  <xui:resource id="resource1">
  	<xhtml:link rel="stylesheet" type="text/css" href="components/sliddingpanel/sliddingpanel.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/tab/tab.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/setpwd/setpwd.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/advancedset/advancedset.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/portalset/portalset.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/flagbar/flagbar.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/functreeview/funcTreeView.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/functreemenu/funcTreeMenu.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="/form/justep/showMessage.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/sortablebar/sortablebar.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/scrollbar/scrollbar.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/quicklist/quicklist.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/portalview/portalView.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/portalview/widgetlayout.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/accordion/accordion.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/funcframe3/funcFrame3.css"/>
  	<!-- 
  	<xhtml:link rel="stylesheet" type="text/css" href="components/funcportal/FuncPortal.css"/>
  	 -->
  	<xhtml:link rel="stylesheet" type="text/css" href="components/accordionmenutree/accordionMenuTree.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/agentlist/agentlist.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/dialog/dialog.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/reminder/reminder.css"/>
	<xhtml:link rel="stylesheet" type="text/css" href="index3.css"/> 

	<xhtml:link rel="stylesheet" type="text/css" href="lib/jscrollpane/jquery.jscrollpane.css"/>
	<xhtml:link rel="stylesheet" type="text/css" href="lib/superfish/css/superfish.css"/>
	<xhtml:link rel="stylesheet" type="text/css" href="components/functreemenu/functreemenu.css"/>
	
	<xhtml:script type="text/javascript" src="lib/md5.js"/>
	<!-- 
	<xhtml:script type="text/javascript" src="/base/base.js"/>
	 -->
	<xhtml:script type="text/javascript" src="/form/justep/showMessage.js"/>
	
	
	<xhtml:script type="text/javascript" src="lib/api.js"/>
	<xhtml:script type="text/javascript" src="lib/jquery-ui-1.8.18.custom.min.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="lib/jquery.iframe.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="lib/jscrollpane/jquery.mousewheel.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="lib/jscrollpane/jquery.jscrollpane.js"></xhtml:script>

	<xhtml:script type="text/javascript" src="lib/jquery.carouFredSel-6.2.1.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="lib/carouFredSelHelper/jquery.touchSwipe.min.js"></xhtml:script>
	<!-- 
	<xhtml:script type="text/javascript" src="lib/carouFredSelHelper/jquery.transit.js"></xhtml:script>
	   -->
	<xhtml:script type="text/javascript" src="lib/carouFredSelHelper/jquery.ba-throttle-debounce.min.js"></xhtml:script>

	 
	<xhtml:script type="text/javascript" src="lib/util.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="lib/eventable.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="components/all3.js"/>
	<xhtml:script type="text/javascript" src="lib/jquery.isloading.js"></xhtml:script>
	  
	<xhtml:script type="text/javascript" src="index3.js"/>
	<xhtml:script type="text/javascript"><![CDATA[
		var _config = ${config};
	]]></xhtml:script>
  </xui:resource>
</xui:window>

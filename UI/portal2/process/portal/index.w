<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.w3.org/1999/xhtml"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events" timeout-window="/UI/portal2/process/portal/login.w">  
  <xui:inhead>
  	<xhtml:title>X5协同管理系统</xhtml:title>
	<xhtml:meta id="viewport" name="viewport" content="initial-scale=1.0,user-scalable=yes,width=1024"/>
  </xui:inhead>
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;overflow:auto;" id="rootLayout" > 
		<div id="main">
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
				<div class="inner">
					<div class="debug-mode">警告：当前运行在调试模式下， 调试模式下系统运行速度会慢！</div>
					<div class="logo"/>
					<div class="main">
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
						<div class="menu">
							<div>
								<div id="bar1"></div>
								<ul class="bar2">
									<li id="fun-map-show-btn">
										<a>功能列表</a>
									</li>
									<li id="fun-map-close-btn">
										<a>功能列表 </a>
									</li>
							</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="content" style="position:relative">
				<div class="inner" style="position:relative">
					
					<div id="b1"></div>
					<div id="b2"></div>
					<div class="fun-map" id="cv1"></div>

					<div id='portal'>
					</div>
				
				</div>
			</div>
	
		</div>
		<div id="funcFrame">
		
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
  	<xhtml:link rel="stylesheet" type="text/css" href="/form/justep/showMessage.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/sortablebar/sortablebar.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/quicklist/quicklist.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/portalview/portalView.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/portalview/widgetlayout.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/accordion/accordion.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/funcframe/funcFrame.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/agentlist/agentlist.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/dialog/dialog.css"/>
  	<xhtml:link rel="stylesheet" type="text/css" href="components/reminder/reminder.css"/>
	<xhtml:link rel="stylesheet" type="text/css" href="index.css"/> 

	<xhtml:link rel="stylesheet" type="text/css" href="lib/jscrollpane/jquery.jscrollpane.css"/>
	
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
	<xhtml:script type="text/javascript" src="lib/jquery.isloading.js"></xhtml:script>
	
	 
	<xhtml:script type="text/javascript" src="lib/util.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="lib/eventable.js"></xhtml:script>
	<xhtml:script type="text/javascript" src="components/all.js"/>  
	<xhtml:script type="text/javascript" src="index.js"/>
	<xhtml:script type="text/javascript"><![CDATA[
		var _config = ${config};
	]]></xhtml:script>
  </xui:resource>
</xui:window>

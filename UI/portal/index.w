<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml"  cacheable="true" sys-param="false">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>X5 协同管理系统</title>
		<meta name="keywords" content=""/>
		<meta name="description" content=""/>
		<meta name="author" content="http://www.justep.com/"/>
		<link rel="stylesheet" type="text/css" href="/UI/portal/system/css/screen.css" media="screen"/>
		<link rel="stylesheet" type="text/css" href="/UI/portal/system/css/jquery/jquery.ui.css" media="screen"/>
		<link rel="stylesheet" type="text/css" href="/UI/portal/x5/css/style.default.css" media="screen" title="defaultTheme"/>
		<link rel="stylesheet" type="text/css" href="/UI/portal/x5/css/style.other.css" media="screen" title="otherTheme"/>
		<!-- compliance patch for microsoft browsers -->
		[#if request['userAgent']?contains("MSIE") ] 
		<link rel="stylesheet" type="text/css" href="/UI/portal/system/css/ie.css" media="screen"/>
		[/#if]
		[#if request['userAgent']?contains("MSIE 7.0") ] 
		<link rel="stylesheet" type="text/css" href="/UI/portal/x5/css/ie7.css" media="screen"/>
		[/#if]
		[#if request['userAgent']?contains("MSIE 6.0") ] 
		<link rel="stylesheet" type="text/css" href="/UI/portal/x5/css/ie6.css" media="screen"/>
		[/#if]
		<script type="text/javascript" src="/base/base.js"/>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.js"></script>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.plugins.js"></script>
		
		<script type="text/javascript" src="/UI/portal/system/js/portal.js"></script>
		
		<script type="text/javascript">
		  	/*被代理者ID*/
			$.principalID = "${principalID!}"!=""?"${principalID!}":null;
			var cssTitle = "defaultTheme";
			$.jpolite.Data.system.Layout.loadTheme(function(data){
				if (data &amp;&amp; data.status) {
					cssTitle = data.theme || cssTitle;
				}else if(data &amp;&amp; data.code &amp;&amp; data.code==justep.Request.SESSION_TIMEOUT){
					 if (confirm(data.message)){
						$.jpolite.Data.system.User.logout(function(data){});
					 }
				}
			});
			jQuery('link[title]','head').each(function(){
				this.disabled = true;
				this.disabled = (jQuery(this).attr("title") != cssTitle);
			});
		</script>
	</head>
	<body class="normal">
		<div id="header">
			<div id="header_bg"></div>
			<div id="header_bg_mask"></div>
			<div id="header_left">&#160;
				<div id="main_btn_tree" class="on" title="显示/隐藏功能树"></div>
			</div>
			<div id="header_nav">
				<ul id="main_nav">
					
				</ul>
				<dl id="main_nav_more_btn">
					<dd>
						<span><div></div></span>
						<iframe id="main_nav_more_bg" frameborder="0" scrolling="no" src="about:blank"></iframe>
						<ul id="main_nav_more"></ul>
					</dd>
				</dl>
			</div>
			<div id="main_nav_up_down">
				<span><div></div></span>
			</div>
			<div id="header_right">
				<span id="main_btn_map" title="功能地图">功能地图<span class="sep"> | </span></span> 
				<span id="main_btn_add" title="添加自定义标签页">添加页面 <span class="sep"> | </span></span> 
				<span id="main_btn_del" title="关闭所有功能标签页">关闭功能 <span class="sep"> | </span></span> 
				<span id="main_btn_set" title="设置">设置 <span class="sep"> | </span></span> 
				<span id="main_btn_ext" title="注销">注销</span>
				<span id="main_btn_clo" title="关闭">关闭</span>
			</div>
			<div id="header_proxy">
				<select id="selectPrincipal"></select>
				<div class="lable">代理：</div>
			</div>
		</div>
		
		<div id="client">
			<div style="height:5px"></div>
			<div>
				<div id="functree_owner">
					<div class="functree_outborder">
						<div class="functree_inborder">
							<div class="functree"></div>
						</div>
					</div>
				</div>
				<div id="content" class="container">
					<div id='content_loading'><img src="/UI/portal/system/img/loading.gif" alt="Loading..."/></div>
					<div id="settings_dialog" class="jqmWindow"></div>
					<div id="options_dialog" class="jqmWindow"></div>
					<div id="layoutTemplate" style="display:none;">
						<div id="a1" class="cc"></div>
						<div id="a2" class="cc"></div>
						<div id="a3" class="cc"></div>
						<div id="a4" class="cc"></div>
					</div>
					<div id="funcTemplate" style="display:none;width:100%;height:100%">
					</div>
					<div id="content_overlay"></div>
				</div>
			</div>
		</div>
		
		<div id="footer">
			<div id="footer_bg_left">&#160;</div>
			<div id="footer_bg_right">&#160;</div>
			<div id="footer_status">
				<span id="footer_status_info"></span>
				<span id="debug_model" style="display:none;height:25px;line-height:25px;padding: 1px 0 0 15px; float: left;color:red">（系统运行在调试模式下）</span>
				<!--
				<span id="footer_status_online">在线人数:<span id="footer_status_online_count"></span>人</span>
				-->
			</div>
		</div>
        
		<div class="widget_template">
			<div class="widgetFrame">
				<div class='widgetHeader'>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td class="widgetTitleLeft" width="5px"></td>
							<td class="widgetTitleCenter">
								<div class="widgetTitle"></div>
								<div class='widgetActions'>
									<div class='widgetActionsB'>
										<b title="更多" class="actionMore">更多</b>
									</div>
									<div class='widgetActionsA'>
										<b title="刷新" class="actionRefresh"></b>
										<b title="折叠" class="actionMin"></b>
										<b title="展开" class="actionMax"></b>
										<b title="关闭" class="actionClose"></b>
									</div>
								</div>
							</td>
							<td class="widgetTitleRight" width="5px"></td>
						</tr>
					</table>
				</div>
				<div class='widgetContent'>
					<!-- 
						<img src="system/img/loading.gif" alt="Loading..."/> Loading...
					 -->
				</div>
				<div class='widgetFooter'>
					<table width="100%" border="0" cellspacing="0" cellpadding="0">
						<tr>
							<td class="widgetStatusLeft" width="5px">&#160;</td>
							<td class="widgetStatusCenter">&#160;</td>
							<td class="widgetStatusRight" width="5px">&#160;</td>
						</tr>
					</table>
					
				</div>
			</div>
		</div>
		<div class="widget_template" id="B">
			<div class="widgetFrame" style="border:6px groove red">
				<div class='widgetContent' style="background:#ffc">
					<!-- 
					<img src="system/img/loading.gif" alt="Loading..."/> Loading...
					 -->
				</div>
				<div class='widgetHeader'>
					<div class='widgetTitle'></div>
					<div class='widgetActions'>
						<b title="折叠" class="actionMin"></b>
						<b title="展开" class="actionMax"></b>
						<b title="关闭" class="actionClose"></b>
					</div>
				</div>
			</div>
		</div>
		<div class="widget_template" id="C">
			<div class="widgetFrame" style="border:6px double green">
				<div class='widgetContent' style="background:#cff">
					<!-- 
					<img src="systme/img/loading.gif" alt="Loading..."/> Loading...
					 -->
				</div>
				<div class='widgetHeader'>
					<div class='widgetTitle'></div>
					<div class='widgetActions'>
						<b title="折叠" class="actionMin"></b>
						<b title="展开" class="actionMax"></b>
						<b title="关闭" class="actionClose"></b>
					</div>
				</div>
			</div>
		</div>
		<div class="widget_template" id="FUNC" style="margin:0 6px 0 0">
			<div class="widgetFrame">
				<div class='widgetContent' style="border:0px solid #fff;padding:0;line-height:1em;">
					<!-- 
						<img src="system/img/loading.gif" alt="Loading..."/> Loading...
					 -->
				</div>
			</div>
		</div>
        
		
		<script type="text/javascript" src="/UI/portal/x5/js/config.js"></script>
		<script type="text/javascript" src="/UI/portal/x5/js/ext.js"></script>
		
		<script type="text/javascript">
			function dataToObj(result){				
				if(result&amp;&amp;$.isArray(result)){
					var result = result[0];
					if (result.status&amp;&amp;result.status != "SUCCESS") return null;
					if(result.data){					
						result.data = window["eval"]("(" + result.data + ")");
					}else{
						result.data = {};
					}
					result.data.status = result.status?result.status == "SUCCESS":{status:false}; 
					return result.data;
				}else{
					return {status:false};
				}
			}
			
			function getWidgets(initWidgets){
				if(!portalConfig.widgetsToolbar)portalConfig.widgetsToolbar={};
				if(!portalConfig.widgets)portalConfig.widgets ={}; 
				if(initWidgets&amp;&amp;initWidgets.status){
					delete initWidgets.status;
					for(var typeID in initWidgets){
						if(!portalConfig.widgetsToolbar[typeID])portalConfig.widgetsToolbar[typeID]={};
					 	portalConfig.widgetsToolbar[typeID].category = initWidgets[typeID].category;
					 	portalConfig.widgetsToolbar[typeID].widgetIDs =[];
					 	var widgets = initWidgets[typeID].widgets;
					 	for(var i in widgets){
					 	   var widget = widgets[i];
					 	   var widgetID = widget.id;
					 	   if(typeof widget.refresh === 'string')
					 	   	 	widget.refresh = widget.refresh.toLowerCase()!='false';
					 	   portalConfig.widgetsToolbar[typeID].widgetIDs.push(widget.id);
					 	   portalConfig.widgets[widget.id]= widget;
					 	   delete portalConfig.widgets[widget.id].id;
					 	}
					}
				}
			}
			
			var _init_userInfo = dataToObj(${userInfo});
			var _isDebug = ${isDebug},
				_adURL = ${adURL};
			
			if(_isDebug){
				$("#debug_model").show();
			}
			var _init_funcTree = dataToObj(${funcTree});
			var _init_shortCuts = dataToObj(${shortCuts});
			var _init_layout = dataToObj(${layout});
			var _init_widgets= dataToObj(${widgets});
			var _init_proxys = dataToObj(${principalList!"[]"}.length>0?${principalList!"[]"}:null);
			var _init_principalInfo=dataToObj(${principalInfo!"[]"}.length>0?${principalInfo!"[]"}:null);
			getWidgets(_init_widgets);
			
		</script>
	</body>
</html>


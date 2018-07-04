<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" sys-param="false">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>X5 协同管理系统</title>
		<link rel="stylesheet" type="text/css" href="/UI/portal/x5/css/style.default.css" media="screen" title="defaultTheme"/>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.js"></script>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.plugins.js"></script>
		<script type="text/javascript" src="/UI/portal/system/js/portal.js"></script>
		<script type="text/javascript">
			function getParameter(param){ 
				var query = window.location.search; 
				var iLen = param.length; 
				var iStart = query.indexOf(param); 
				if (iStart == -1) 
				   return ""; 
				iStart += iLen + 1; 
				var iEnd = query.indexOf("&amp;", iStart); 
				if (iEnd == -1) 
				   return query.substring(iStart); 
				return query.substring(iStart, iEnd); 
			} 
			var password = getParameter('password');
			var username = getParameter('username');
			var language = "zh_CN";
			$.jpolite.Data.system.User.login(username,password, language, {},function(data){
				if(data &amp;&amp; data.status){
					window.location.href = window.location.href.replace(/messageLogin.*\.w.*/,'index.w');
				}else{
					window.location.href = window.location.href.replace(/messageLogin.*\.w.*/,'login.w');
				}
			});
			
		</script>
	</head>    
	<body>
	</body>
</html>


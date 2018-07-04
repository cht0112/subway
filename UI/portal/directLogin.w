<?xml version="1.0" encoding="UTF-8"?>
<html xmlns="http://www.w3.org/1999/xhtml" sys-param="false">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
		<title>X5 协同管理系统</title>
		<link rel="stylesheet" type="text/css" href="/UI/portal/x5/css/style.default.css" media="screen" title="defaultTheme"/>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.js"></script>
		<script type="text/javascript" src="/UI/portal/system/js/jquery/jquery.plugins.js"></script>
		<script type="text/javascript" src="/UI/portal/system/js/data.js"></script>
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
			//要求传入参数是md5形式
			var info = dataToObj(${info}),
				adURL = ${adURL},
				client = ${client},
				language = ${language};
			debugger;	

			if(info &amp;&amp; info.status){
				var index = window.location.href.replace(/directLogin.*\.w.*/,'index.w'); 
				if(adURL)
					index += "?ad=" + encodeURIComponent(adURL);
				if(client){
					if(index.indexOf('?') == -1)
						index += "?client=" + encodeURIComponent(client);
					else	
						index += "\aclient=" + encodeURIComponent(client);
				}	 
				if(language){
					if(index.indexOf('?') == -1)
						index += "?language=" + encodeURIComponent(language);
					else	
						index += "\alanguage=" + encodeURIComponent(language);
				}	 
				window.location.href = index;
			}else{
				var href = window.location.href.replace(/directLogin.*\.w.*/,'login.w');
				if(client){
					if(href.indexOf('?') == -1)
						href += "?client=" + encodeURIComponent(client);
					else	
						href += "\aclient=" + encodeURIComponent(client);
				}	 
				if(language){
					if(href.indexOf('?') == -1)
						href += "?language=" + encodeURIComponent(language);
					else	
						href += "\alanguage=" + encodeURIComponent(language);
				}	 
				window.location.href = href;
			}
		</script>
	</head>    
	<body>
	</body>
</html>
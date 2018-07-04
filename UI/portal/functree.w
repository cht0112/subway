<?xml version="1.0" encoding="utf-8"?>

<html xmlns="http://www.w3.org/1999/xhtml" sys-param="false" cacheable="true">  
  <head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>  
    <title>X5 协同管理系统 功能</title>  
    <meta name="keywords" content=""/>  
    <meta name="description" content=""/>  
    <meta name="author" content="http://www.justep.com/"/>  
    <script type="text/javascript" src="/base/base.js"/>  
    <script type="text/javascript" src="/base/base.res.js"/>  
    <link href="/UI/portal/x5/css/plainFunctree.css" type="text/css" rel="stylesheet"/> 
  </head>  
  <body> 
    <div class="portal-top-panel"></div>  
    <script type="text/javascript"><![CDATA[
    	function dataToObj(result){ if(result&&$.isArray(result)){ var result = result[0]; if (result.status&&result.status != "SUCCESS") return null; if(result.data){ result.data = window["eval"]("(" + result.data + ")"); }else{ result.data = {}; } result.data.status = result.status?result.status == "SUCCESS":{status:false}; return result.data; }else{ return {status:false}; } }
    	function doRenderGroupHead(node){
    		var h = [];
    		h.push("<td style='background: url(/x5/UI/portal/x5/img/icon/", node.icon, ") no-repeat;width:30px'></td>");
    		h.push("<td class='portal-top-panel-table-header-1 portal-top-panel-table-header'>");
    		h.push("<a style='PADDING-LEFT: 0px' onclick='' href='javascript:void(0)'>", node.label, "</a>");
    		h.push("</td>");
    		return h.join("");
    	}
    	
    	function doRenderLink(node){
    		if(node.url){
    			var url = node.url;
    			url += (url.indexOf("?") == -1)? "?" : "&";
    			url += "process=" + node.process + "&activity=" + node.activity; 
    			var f = "<a class='href' onclick=\"justep.Portal.openWindow('{0}', '{1}', '{2}');\" href='javascript:void(0)'>{3}</a>"; 
    			return justep.String.format(f,node.label,url,node.hideTree,node.label);
    		}else{
    			return node.label;
    		}
    	}
    	function doRenderGroupBodyItem(node){
    		var h = ["<li>", doRenderLink(node),"<ul>"];
    		for(var i=0; i<node.childNodes.length; i++){
    			h.push("<li><a class='href' onclick='' href='javascript:void(0)'>", doRenderLink(node.childNodes[i]), "</a></li>");
    		}
    		h.push("</ul></li>");
    		return h.join("");
    	}
    	function doRenderGroupBody(node){
    		var h = [];
    		h.push("<td class='portal-top-panel-table-content' valign='top' colspan='2'><ul class='header'>");
    		for(var i=0; i<node.childNodes.length; i++){
				h.push(doRenderGroupBodyItem(node.childNodes[i]));
			}    		
    		h.push("</ul></td>");
    		return h.join("");
    	}
    	function doRenderFunctree(data){
    		var h = ["<table><tbody>"];
    		for(var i=0; i<data.length; i+=3){//每行三列
    			//head
    			h.push("<tr><td style='width:8px'/>");
    			for(var j=i; j<i+3 && j<data.length; j++){
    				var node = data[j];
    				h.push(doRenderGroupHead(node));
    				if(j+1<i+3 && j+1<data.length)
    					h.push("<td style='width:16px'/>");	
    			}
    			h.push("<td style='width:8px'/></tr>");
    			
    			//body
    			h.push("<tr><td style='width:10px'/>");
    			for(var j=i; j<i+3 && j<data.length; j++){
    				var node = data[j];
    				h.push(doRenderGroupBody(node));	
	    			h.push("<td/>");
    			}
    			h.push("</tr>");
    		}
    		h.push("</tbody></table>");
    		return h.join("");
    	}
    	function doRenderFailure(){
    		return "<div>没有可用功能</div>";
    	}
    	function renderFunctree(){
    		var _init_funcTree = dataToObj(${funcTree});
    		var html = null;
    		if(_init_funcTree.status){
    			html = doRenderFunctree(_init_funcTree.childNodes);
    		}else{
    			html = doRenderFailure();
    		}
    		jQuery(".portal-top-panel").html(html);
    	}
    	renderFunctree();
    ]]></script> 
  </body> 
</html>

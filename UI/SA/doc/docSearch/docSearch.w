<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" id="docSearch" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="docSearchModel"> 
    <xforms:action ev:event="onload"> 
      <xforms:script>getAuthList();</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <resource> 
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/SA/doc/docSearch/docSearch.js"/>  
    <xhtml:script id="htmlScript1" src="/UI/system/service/doc/docUtil2.js"/>
  </resource>  
  <view> 
    <layout style="height:100%;">
    	<xhtml:div style="height:100%;widht:100%;">
		      <xhtml:div style="height:100px;widht:100%;position:fixed;top:0px;vertical-align:top;" onkeydown="if(event.keyCode==13){ currentPage =-1 ;search(-1);}">
	      			<xhtml:div style="height:100%;display:inline-block;vertical-align:top;">
			      		<xhtml:img src="/UI/SA/doc/docSearch/x5.gif" style="width:160px;"/>
			      	</xhtml:div>
			      	<xhtml:div style="height:100%;display:inline-block;vertical-align:top;">
			      		<xhtml:input id="searchWordInput" style="width:300px;margin-top:50px;"/>
			      	</xhtml:div>
			      	<xhtml:div style="height:100%;display:inline-block;vertical-align:top;">
			      		<xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger"
		              id="searchWord" style="text-align:center;width:80px;margin-top:50px;" class="button-blue"> 
		              <xforms:label id="default1"><![CDATA[文档检索]]></xforms:label>  
		              <xforms:action id="action1" ev:event="DOMActivate">
		                <xforms:script id="xformsScript1"><![CDATA[searchDoc(event)]]></xforms:script>
		              </xforms:action>
		            </xforms:trigger>
			      	</xhtml:div>
			      	
		      </xhtml:div>
		      <xhtml:iframe name="searchResultIframe" id="searchResultIframe" show="replace"
			        frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"
			        allowtransparency="yes" style="padding-top:100px;width:100%;height:100%;box-sizing:border-box;" onload="document.getElementById('searchResultIframe').style.height=searchResultIframe.document.body.scrollHeight;"/>
		</xhtml:div>
            
           
      
    </layout>
  </view> 
</window>

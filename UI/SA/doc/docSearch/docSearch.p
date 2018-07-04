<?xml version="1.0" encoding="UTF-8"?>

<p:config xmlns:p="http://www.orbeon.com/oxf/pipeline"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:oxf="http://www.orbeon.com/oxf/processors"
	xmlns:xforms="http://www.w3.org/2002/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xxforms="http://orbeon.org/oxf/xml/xforms"
	xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:f="http://orbeon.org/oxf/xml/formatting"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:justep="http://www.justep.com/x5#"
	xmlns:ns="http://outerx.org/daisy/1.0" xmlns:saxon="http://saxon.sf.net/">
	
	<p:param name="instance" type="input"/>
	<p:param name="data" type="output"/>
	
	<!--<p:processor name="justep:xml-debugger">
		<p:input name="config" href="#instance">
		</p:input>
	</p:processor>-->
	 
   <p:processor name="justep:excute-action"> 
    <p:input name="request" href="#instance"/>  
    <p:output name="response" id="dbSearchResult"/> 
   </p:processor> 
	 
	<!--<p:processor name="justep:xml-debugger">
		<p:input name="config" href="#dbSearchResult">
		</p:input>
	</p:processor>-->
	  
	<p:processor name="oxf:xslt">
		<p:input name="data" href="#dbSearchResult"/>
		<p:input name="instance" href="#instance"/>
		<p:input name="config">
			<xsl:stylesheet version="2.0">
				<xsl:template match="/">
					<xhtml:html>
						<head>
							<style type="text/css">
								.searchword{color:red;}
								.text{font-size:14;height:30px;}
								span{margin-right:5px;}
							</style>
							<script type="text/javascript">
								<![CDATA[
								function highLight(){
									var searchWord = document.getElementById("searchWord").innerText;
									var words = searchWord.split(" ");
									for(i=0;i<words.length;i++){
										if(words[i]){
											var orange = document.body.createTextRange();
											while(orange.findText(words[i])){
											orange.pasteHTML("<span class='searchword'>" + orange.text + "</span>");
											orange.moveStart('character',1);
											}
										}
									}
								}
								
								function initSelect(){
								    var pages = document.getElementById('AllPageNum_A').innerText;
								    var objSelect = document.getElementById('GoToPage_Select');
								     for(var i=1;i<=pages;i++){ 
								        var varItem = new Option(i,i);  
								        objSelect.options.add(varItem);  
								     }
								    objSelect.value=document.getElementById('PageNum_A').innerText;
								}
								
								function searchPages(page){
								   var searchWord = document.getElementById("searchWord").innerText;
								   var pageCount = document.getElementById("AllPageNum_A").innerText;
								   var servers = document.getElementByid("servers").value;
								   
								   var querySql='select id, name,lastModified,#sDocId,#sDocPath,#sDocDisplayPath,#sEditorName,#sCreatorName,'
		                                       +'#sKeywords,#sLastWriterName,#sDescription where  FullText(\'' + searchWord + '\') order by creationTime desc ' ;
		                                       
								   var param = '<data><operate>queryDocSearch</operate><form><keyword>'+ searchWord +'</keyword>' +
										       '             <querySql>'
										       + querySql +' </querySql>' +
										       '             <words>'
										       + wordItems.join('') + '</words>' +
										       '<pageCount>'+ pageCount +
										       '</pageCount><pageSize>50</pageSize><currentPage>'+ searchPage +'</currentPage>'+
										       '<servers>'+ servers +'</servers></form></data>';
										       
									sendParam.setXml('param',new justep.Request.XMLParam(justep.XML.toString(this.changeLog)));
									var response = justep.Request.sendBizRequest(justep.Context.getCurrentProcess(), justep.Context.getCurrentActivity(), "dispatchDocCenOptRDFAction", sendParam, null, null, true);
									if(!justep.Request.isBizSuccess(response)){
										alert("saveError: 保存失败");
									}	       
										      
								}
								
								function firstPage(){
								 	if(window.parent.currentPage==1) return; 							
								    var pageCount = document.getElementById("AllPageNum_A").innerText;
								    var servers = document.getElementById("servers").value;
								    var dataCount = document.getElementById("recordCount").value;
								    var searchText = document.getElementById("searchWord").innerText;
								    
								    window.parent.search(1,pageCount, servers , dataCount, searchText);
								    window.parent.currentPage=1;
								}
								function lastPage(){
								    
								    var pageCount = document.getElementById("AllPageNum_A").innerText;
								    if(window.parent.currentPage==pageCount) return;
								    var servers = document.getElementById("servers").value;
								    var dataCount = document.getElementById("recordCount").value;
								    var searchText = document.getElementById("searchWord").innerText;
								    	
								    window.parent.search(document.getElementById('AllPageNum_A').innerText ,pageCount, servers , dataCount, searchText);
								    window.parent.currentPage=document.getElementById('AllPageNum_A').value;
								}
								function nextPage(){	
								    var pageCount = document.getElementById("AllPageNum_A").innerText;
								    if(window.parent.currentPage==pageCount) return;
								    var servers = document.getElementById("servers").value;
								    var dataCount = document.getElementById("recordCount").value;
								    var searchText = document.getElementById("searchWord").innerText;
								    	
								    window.parent.search(++window.parent.currentPage ,pageCount, servers , dataCount, searchText);
								}
								function previousPage(){	
								    if(window.parent.currentPage==1) return;
								    var pageCount = document.getElementById("AllPageNum_A").innerText;
								    var servers = document.getElementById("servers").value;
								    var dataCount = document.getElementById("recordCount").value;
								    var searchText = document.getElementById("searchWord").innerText;
								    
								   window.parent.search(--window.parent.currentPage ,pageCount, servers , dataCount, searchText);
								}	
						
								function selectChange(){	
								    var pageCount = document.getElementById("AllPageNum_A").innerText;
								    var servers = document.getElementById("servers").value;
								    var dataCount = document.getElementById("recordCount").value;
								    var searchText = document.getElementById("searchWord").innerText;
								    
								   window.parent.search( document.getElementById("GoToPage_Select").value ,pageCount, servers , dataCount, searchText);
								}
																						
								]]>
							</script>
						</head>
						<body onload="initSelect();">
							<div style="background-color:#f0f7f9;height:24px;border-top:#6b90da 1px solid; font-size:14;margin:0 20px;">
							<p style="display:inline;margin:5px 0 5px 10px; ">搜索&#160;<b id="searchWord"><xsl:value-of select="doc('input:instance')//form/keyword"/></b>&#160;获得&#160;<b id="dataCount"><xsl:value-of select="//ns:servers/@size"/></b>&#160;条结果。</p>
							</div>
							<div id="content" style="padding-left:20px;">
							<div>
							<table width="100%" style="height:500px;">
							           <tr height="2px">
											<td colspan="5">
											  <input id="servers" type="hidden">
											     <xsl:attribute name="value">
														<xsl:value-of select="//ns:servers/@serverCounts" />
												 </xsl:attribute>
											  </input> 
											   <input id="recordCount" type="hidden">
											     <xsl:attribute name="value">
														<xsl:value-of select="//ns:servers/@size"/>
												 </xsl:attribute>
											  </input> 
											</td>
										</tr>	
								<xsl:for-each select="//ns:searchResult/ns:rows/ns:row">
								        <tr style="font-size:16px;height:30px;">
											<td name="title" colspan="5">
												<a href="#" onclick="window.parent.browse(this)">
													<xsl:attribute name="id">
														<xsl:value-of select="ns:value[1]" />
													</xsl:attribute>
													<xsl:attribute name="doc-id">
														<xsl:value-of select="ns:value[4]" />
													</xsl:attribute>
													<xsl:attribute name="path">
														<xsl:value-of select="ns:value[5]" />
													</xsl:attribute>
													<xsl:value-of select="ns:value[2]"/>
													<!-- 
													 -->
												</a>
												&#160;
												[
												<a href="#" onclick="window.parent.openResource(this)" style="font-size:12">
													<xsl:attribute name="doc-id">
														<xsl:value-of select="ns:value[4]" />
													</xsl:attribute>
													<xsl:attribute name="path">
														<xsl:value-of select="ns:value[5]" />
													</xsl:attribute>
													源位置
												</a>
												]
											</td>
											
										</tr>
										<tr class="text" >
											<td width="50px">
												作者：
											</td>
											<td name="creatorName" width="100px" align="left">
												<xsl:value-of select="ns:value[8]"/>
											</td>
											<td width="100px">
												成文日期：
											</td>
											<td name="lastWriteTime" width="150px"  align="left">
												<xsl:value-of select="ns:value[3]"/>
											</td>
											<td></td>
										</tr>
										<tr class="text">
											<td width="70px">
												关键字：
											</td>
											<td name="keywords" colspan="5" align="left">
												<xsl:value-of select="ns:sKeywords"/>
											</td>
										</tr>								
										<tr class="text">
											<td name="description" colspan="5">
												<xsl:choose>
													<xsl:when test="string-length(ns:sDescription) &gt; 124">
														<xsl:value-of select="concat(substring(ns:sDescription,1,125),'...')"/>
													</xsl:when>
													<xsl:otherwise>
														<xsl:value-of select="ns:sDescription"/>
													</xsl:otherwise>
												</xsl:choose>	
											</td>
										</tr>
								</xsl:for-each>
								<tr>
								   <td>
								   </td>
								</tr>
							</table>
							</div>
							</div>
							<div style="background-color:#f0f7f9;height:24px;border-top:#6b90da 1px solid; font-size:14;margin:0 20px;">
							     <div style="float:right;padding-right:50px;">
							     <span>总共有<a id="AllPageNum_A"><xsl:value-of select="//ns:servers/@pages"/></a>页</span>
						         <span>当前为第<a id="PageNum_A"><xsl:value-of select="//ns:servers/@currentPage"/></a>页</span>
						         <span id="FirstPage_Span"><a href="javascript:firstPage()">首页</a></span>
						         <span id="UpPage_Span"><a href="javascript:previousPage()">上一页</a></span>
						         <strong id="ShowPageNum_strong"></strong>
						         <span id="NextPage_Span"><a href="javascript:nextPage()">下一页</a></span>
						         <span id="EndPage_Span"><a href="javascript:lastPage()">未页</a></span>
						         <span>跳到第<select id="GoToPage_Select" onchange="selectChange()"></select>页</span>
						         </div>
							</div>
							
							<div style="height:30px; width:100%; font-size:14;clear:both;">
							</div>
						</body>
					</xhtml:html>
				</xsl:template>
			</xsl:stylesheet>	
		</p:input>
		<p:output name="data" id="result" ref="data"/>	
	</p:processor>
	<!--<p:processor name="justep:xml-debugger">
			<p:input name="config" href="#result">
			</p:input>
	</p:processor>-->
</p:config>	
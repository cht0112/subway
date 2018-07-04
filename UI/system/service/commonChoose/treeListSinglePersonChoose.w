<window xmlns="http://www.justep.com/xui"
	xmlns:xui="http://www.justep.com/xui"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:f="http://orbeon.org/oxf/xml/formatting"
	xmlns:justep="http://www.justep.com/x5#"
	xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
	component="/UI/system/components/window.xbl.xml#window"
	extends="templete/treeListSingleTemplete.w">
	
	<!-- 覆盖data申明部分 -->
	<data id="main" xui:update-mode="merge-and-append"
		concept="SA_OPOrg" relations="sName,sParent,sFID,sFName,sValidState,sOrgKindID,sValidState">
		<reader action="/system/logic/action/queryOrgAction" id="readerAction"/>
		<filter name="ValidStateFilter" id="mainFilter">SA_OPOrg.sValidState = 1 AND SA_OPOrg.sOrgKindID = 'psm'</filter>
	</data>
	
	<data id="treeMain"  xui:update-mode="merge-and-append" onAfterRefresh="refreshOrgAfter"
		concept="SA_OPOrg" relations="sName,sParent,sFID,sFName,sValidState,sOrgKindID,sValidState" confirm-refresh="false">
		<reader action="/system/logic/action/queryOrgAction" id="treeReaderAction"/>
		<filter name="ValidStateFilter" id="treeMainFilter">SA_OPOrg.sValidState = 1 AND NOT (SA_OPOrg.sOrgKindID = 'psm')</filter>
		<tree-option parent-relation="sParent" virtual-root="组织机构" root-filter="sParent IS NULL" id="tree-option"/>
	</data>
	
	<xhtml:input value="sName" id="displayAlias" xui:update-mode="merge"/>
	<xhtml:input value="sName,sCode,sFID,sFName" id="returnAliasList" xui:update-mode="merge"/>
	
	<xhtml:input value="UPPER(sName) LIKE '%[QUICKTEXT]%' OR UPPER(sCode) LIKE '%[QUICKTEXT]%'" id="quickSearch" xui:update-mode="replace"/>
	<resource id="quickSearchFunction" xui:update-mode="merge-and-append" >
		<xhtml:script>
		<![CDATA[
			function refreshOrgAfter(event){
		    	event.source.expandRowsToLevel(0);
		    }		
			function showNodeImg (event){
				 var data = justep.xbl(event.instance.element.id);
			     if(!data) return;
			     var orgKind = !event.grid._isVirtualRoot(event.rowId)?data.getValue('sOrgKindID', event.rowId):'root';
				 var disable = data.getValue('sValidState', event.rowId)=='0';
				 return justep.Resource.getOrgImgURL(orgKind, disable);
		    }
		    function generatePersonNameUI(data){
		    	var rt = window.location.protocol + "//" + window.location.host + justep.Request.convertURL(justep.Resource.getOrgImgURL("psm", data.value == "0"), true);
				return "<img src=\"" + rt + "\"/>";
			}	
		    function treeRowClick(event){
		    	var id = event.getData().rowId;
		    	var data = justep.xbl('main');
				if(data){
					data.filters.setFilter('orgSearch' , 'SA_OPOrg.sParent='+"'"+ id + "'");
				}
				data.refreshData();
		    }
		    function getLocateOrgOrPersonFullID(node, fID){
				var s = fID;					
				var tmNode = justep.XML.eval(node, "./orgFID/text()", "single");
				if(tmNode) s = tmNode.nodeValue;
				return s.replace(/\.[^\/]+/g, "");
			}
			function locatedOrgOrPerson(node, fID){
				var psmId = "";
				var tmNode = justep.XML.eval(node, "./psmID/text()", "single");
				if(tmNode) psmId = tmNode.nodeValue;
				setTimeout(function(){
					var ins = xforms("main");
					if(!ins) return;
					var rowIdx = ins.store.getRowIndex(psmId);
					ins.store.setIndex(rowIdx);
				},1);	
			}
		    ]]>
		</xhtml:script>
	</resource>
<!--	<xhtml:td align="left" valign="top" style="height:25" id="tree-head-area" xui:update-mode="replace-and-replace" >-->
<!--		<xhtml:div component="/UI/system/components/orgQuickLocate.xbl.xml#orgPersonMember" data="treeMain" offset-x="170" id="quick-locate" onGetLocateFullID="getLocateOrgOrPersonFullID" onLocated="locatedOrgOrPerson"/>-->
<!--	</xhtml:td>-->
	<xhtml:div id="treeGrid" xui:update-mode="merge-and-append" onShowNodeImg="showNodeImg">
		<column width="150px" ref="sName" type="tree" />
		<xforms:action ev:event="xforms-index-changed">
			<xforms:script>
				treeRowClick(event);
			</xforms:script>
		</xforms:action>
	</xhtml:div>
	<xhtml:div id="listGrid" xui:update-mode="merge-and-append">
		<column ref="sValidState" width="20px" visable="false" onRender="generatePersonNameUI" label="" type="html"/>
		<column ref="sName" width="80px" visable="false"/>
		<column ref="sCode" width="100px" visable="false"/>
	</xhtml:div>
</window>
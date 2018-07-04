<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:justep="http://www.justep.com/x5#" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema" component="/UI/system/components/window.xbl.xml#window" extends="templete/treeListSingleTemplete.w">  
  <data id="main" xui:update-mode="merge-and-append" concept="SA_OPOrg" relations="sName,sCode,sValidState,sLongName,sFCode,sFName,sFID,sOrgKindID,sLevel,sParent,sPersonID,sPhone,sFax,sAddress,sZip,sDescription" limit="10" order-by="SA_OPOrg.sSequence:ASC" auto-load="false"> 
    <filter name="ValidStateFilter" id="mainFilter">SA_OPOrg.sValidState = 1</filter>  
    <reader action="/system/logic/action/queryOrgAction" id="readerAction"/> 
  </data>  
  <data id="treeMain" xui:update-mode="merge-and-append" onAfterRefresh="refreshOrgAfter" concept="SA_OPOrg" relations="sFID,sName,sParent,sOrgKindID,sValidState" confirm-refresh="false" auto-load="false"  onRefreshCreateParam="refreshCreateParam"> 
    <reader action="/system/logic/action/queryOrgAction" id="treeReaderAction"/>  
    <filter name="ValidStateFilter" id="treeMainFilter">SA_OPOrg.sValidState = 1</filter>  
    <tree-option parent-relation="sParent" virtual-root="组织机构" root-filter="sParent IS NULL" id="tree-option"/> 
  </data>  
  <xhtml:input value="UPPER(SA_OPOrg.sName) LIKE &quot;%[QUICKTEXT]%&quot; OR UPPER(SA_OPOrg.sCode) LIKE &quot;%[QUICKTEXT]%&quot;" id="quickSearch" xui:update-mode="replace"/>  
  <xhtml:input value="sName" id="displayAlias" xui:update-mode="merge"/>  
  <xhtml:input value="rowId,sName,sCode,sFID,sFCode,sFName,sOrgKindID,sParent,sPersonID,sLevel,sLongName" id="returnAliasList" xui:update-mode="merge"/>  
  <resource id="quickSearchFunction" xui:update-mode="merge-and-append"> 
    <xhtml:script> <![CDATA[
			 justep.windowDialogReceiver.acceptParentParamsFun = function(event){
				var data = event.data;
    			if(data.selectKind){
    				document.__selectKind = "";
    				var selectKind = data.selectKind.split(",");
    				for(var i=0;i<selectKind.length;i++){
    					if(document.__selectKind == ""){
    						document.__selectKind = "(SA_OPOrg.sOrgKindID = '" + selectKind[i] + "'";
    					}else{
    						document.__selectKind += " or SA_OPOrg.sOrgKindID = '" + selectKind[i] + "'";
    					}
    				}
    				document.__selectKind += ")";
    			}else{
    				document.__selectKind = "";
    			}

    			var treeData = justep.xbl('treeMain');
    			if(data.viewKind){
    				var viewCondition = "";
    				var viewKind = data.viewKind.split(",");
    				for(var i=0;i<viewKind.length;i++){
    					if(viewCondition == ""){
    						viewCondition = "(SA_OPOrg.sOrgKindID = '" + viewKind[i] + "'";
    					}else{
    						viewCondition += " or SA_OPOrg.sOrgKindID = '" + viewKind[i] + "'";
    					}
    				}
    				viewCondition += ")";
    			}
    			treeData.filters.setFilter('viewKind' , viewCondition);
    			
				if (event.data && event.data.manageCodes)
					document.__manageCodes = event.data.manageCodes;
				else
					document.__manageCodes = "businessManagement";
				    	
    			treeData.refreshData(function(){acceptData(data);});
    		}
			function refreshCreateParam(event) {
				if (event.source.defTreeOption.loadTreeParant == justep.XData.IS_TREE_ROOT) {
					if (document.__manageCodes)
						event.param.setString("manageCodes", document.__manageCodes);
					else
						event.param.deleteParam("manageCodes");
				}
			}
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
		    
		    function treeRowClick(event){
		    	var id = event.getData().rowId;
		    	var url = event.getData().instance.getValue("sFID",id);
		    	var data = justep.xbl('main');
				if(data){
					if(id != '_is_root_'){
						data.filters.setFilter('orgSearch' , "SA_OPOrg.sFID like " +"'"+ url +"%'");
					}else{
						data.filters.setFilter('orgSearch' , "");
					}
					if(document.__selectKind != "" && document.__selectKind)
						data.filters.setFilter('selectKind' , document.__selectKind);
				}
				data.refreshData();
		    }
			function generateOrgNameUI(data){
			    var cell = data.cell;
				var rt = window.location.protocol + "//" + window.location.host + justep.Request.convertURL(justep.Resource.getOrgImgURL(cell.getValueByColId('sOrgKindID'), data.value == "0"), true);
				return "<img src=\"" + rt + "\"/>";
			}		
		    ]]> </xhtml:script> 
  </resource>  
  <!-- 
	<xhtml:td align="left" valign="top" style="height:25" id="tree-head-area" xui:update-mode="replace-and-replace" >
		<xhtml:div component="/UI/system/components/orgQuickLocate.xbl.xml#org" data="treeMain" offset-x="170" id="quick-locate"/>
	</xhtml:td>
	 -->  
  <xhtml:div id="treeGrid" xui:update-mode="merge-and-append" onShowNodeImg="showNodeImg"> 
    <column width="150px" ref="sName" type="tree"/>  
    <xforms:action ev:event="xforms-index-changed"> 
      <xforms:script>treeRowClick(event);</xforms:script> 
    </xforms:action> 
  </xhtml:div>  
  <xhtml:div id="listGrid" xui:update-mode="merge-and-append"> 
    <column ref="sValidState" label="" width="20px" type="html" onRender="generateOrgNameUI"/>  
    <column ref="sName" width="100px" align="center"/>  
    <column ref="sCode" width="150px" align="center"/>  
    <column ref="sLongName" width="50px" align="center" visable="false"/>  
    <column ref="sDescription" width="50px" visable="false"/>  
    <column ref="sFName" width="250px" visable="false"/> 
  </xhtml:div> 
</window>

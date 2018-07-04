<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns="http://www.justep.com/xui" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="/UI/appCommon/templates/pubBaseCode/pubAssetBaseCodeActivity.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:466px;left:16px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dPubBaseCodeAsset"
      concept="Test_Pub_BaseCode" order-by="fSequence:asc" onValueChanged="dPubBaseCodeValueChanged" confirm-refresh="false" direct-delete="true"> 
      <reader action="/appCommon/data/queryPubBaseCodeAction"/>  
      <writer action="/appCommon/data/savePubBaseCodeAction"/>  
      <creator action="/appCommon/data/createPubBaseCodeAction"/>  
      <rule relation="fName" required="true()" alert="'名称必填!'"/>  
      <rule relation="fUseStatus" default-value="\&quot;0\&quot;"/>  
      <rule relation="fUseStatusName" default-value="\&quot;未启用\&quot;"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereAll" auto-load="true" id="dAssetD" concept="TOOL_TYPE_CODE"
      store-type="simple" data-type="xml"> 
      <reader action="/metrodetection/system_code/logic/action/queryTOOL_TYPE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="startUse,stopUse"
      src="" auto-load="true" id="dBtnStatus" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('dBtnStatus')/startUse" readonly="instance('dPubBaseCodeAsset')/fUseStatus = '1'"/>  
    <xforms:bind nodeset="instance('dBtnStatus')/stopUse" readonly="not(instance('dPubBaseCodeAsset')/fUseStatus = '1')"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrListToolbar"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngaListBar"
        data="dPubBaseCodeAsset" mode="IMG_TXT_LR"> 
        <item id="barItem11">
        	<xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
          <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[pubAssetBaseCodeActivity.insertMasClick(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item>
          
        <item id="barItem12"> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
          <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[pubAssetBaseCodeActivity.saveMasClick(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item>
        
        <item id="barItem12"> 
          <xforms:trigger appearance="image-text" id="delMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
          <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[pubAssetBaseCodeActivity.delMasClick(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item>
         
        <!-- <item name="delete-item" readonly="instance('dPubBaseCodeAsset')/fUseStatus != '0'"/> -->  
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/>  
        <item name="custom-page-item" id="barItem1"/>  
        <item name="separator"/>  
        <item name="startUse"> 
          <xforms:trigger appearance="image" id="trgStartUse" ref="instance('dBtnStatus')/startUse"
            src="/UI/appCommon/images/start_use.gif" dis-src="/UI/appCommon/images/un_start_use.gif"> 
            <xforms:label>启用</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								startUseFun();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="allUse"> 
          <xforms:trigger appearance="image" id="trgAllUse" src="/UI/appCommon/images/all_use.gif"
            dis-src="/UI/appCommon/images/all_use.gif"> 
            <xforms:label>全部启用</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								useAllFun();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="stopUse"> 
          <xforms:trigger appearance="image" id="trgStopUse" ref="instance('dBtnStatus')/stopUse"
            src="/UI/appCommon/images/stop_use.gif" dis-src="/UI/appCommon/images/un_stop_use.gif"> 
            <xforms:label>停用</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								stopUseFun();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="listGrid" data="dPubBaseCodeAsset" edit-mode="true" onRowClick="pubAssetBaseCodeActivity.listGridRowClick" onRowDblClick="pubAssetBaseCodeActivity.listGridRowDblClick"> 
      <column ref="fUseStatusName" label="启用状态" type="ro" width="60" align="center"/>  
      <column ref="fSequence" label="排序" type="ed" width="60"/>  
      <column ref="fCode" label="编码（单击...按钮选择）" type="inputbtn" width="150" onButtonClick="pubAssetBaseCodeActivity.listGrid_fCodeButtonClick" readonly="false" enter-selected="true"/>  
      <column ref="fName" label="名称" type="ed" width="150"/>  
      <column ref="fType" label="类型" type="ed" width="80"/>  
      <column ref="fDescription" label="描述" type="ed" width="280" readonly="true"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table style="width:100%;height:100%;cellspacing:0px;table-layout:fixed;"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px;"> 
            <place control="tbrListToolbar"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td height="90%" style="width:100%;"> 
            <place control="listGrid" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    <xui:place control="asserWD" id="controlPlace1" style="position:absolute;top:236px;left:203px;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="资产编码" width="400px" height="300px" modal="true" id="asserWD" url="/UI/OA/asset/process/baseSet/assetKindSet/asset.w" closable="true" onReceive="pubAssetBaseCodeActivity.asserWDReceive"></xhtml:div></xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="pubAssetBaseCodeActivity.js"/> 
  </resource> 
</xui:window>

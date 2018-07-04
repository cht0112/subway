<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:170px;left:175px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="docDefineData" is-tree="true" concept="SA_DocLinkDefine" limit="-1" store-type="grid" onRefreshCreateParam="docPermission.docDefineDataRefreshCreateParam" confirm-refresh="false" onAfterDelete="docPermission.docDefineDataAfterDelete"> 
      <creator id="default1" action="/SA/doc/logic/action/createDocLinkDefineAction"/>  
      <reader id="default2" action="/SA/doc/logic/action/queryDocLinkDefineAction"/>  
      <writer id="default3" action="/SA/doc/logic/action/saveDocLinkDefineAction"/>  
      <tree-option id="default4" parent-relation="sProcess" root-filter="SA_DocLinkDefine.sActivity IS NUll" virtual-root="文档关联"/> 
    </data>  
    <data xmlns="" id="buttonState" auto-load="true" component="/UI/system/components/data.xbl.xml#data" columns="newdef,deldef,keyList,deleteAty,setAty" store-type="simple" confirm-refresh="false">  
      <rows> 
        <row id="buttonStateRow"> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('buttonState')/newdef" readonly="instance('buttonState')/newdef != 'true'"/>  
    <xforms:bind nodeset="instance('buttonState')/deldef" readonly="instance('buttonState')/deldef != 'true'"/>  
    <xforms:bind nodeset="instance('buttonState')/keyList" readonly="instance('buttonState')/keyList != 'true'"/>  
    <xforms:bind nodeset="instance('buttonState')/deleteAty" readonly="instance('buttonState')/deleteAty != 'true'"/>  
    <xforms:bind nodeset="instance('buttonState')/setAty" readonly="instance('buttonState')/setAty != 'true'"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="view1"> 
      <layout id="layout1"> 
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="width:100%;">
          <xui:place control="trigger2" id="controlPlace1"/>  
          <xui:place control="trigger5" id="controlPlace9"/>  
          <xui:place control="trigger6" id="controlPlace10"/>  
          <xui:place control="trigger7" id="controlPlace11" style="width:109px;"/>  
          <xui:place control="trigger8" id="controlPlace12" style="width:102px;"/>  
          <xui:place control="trigger9" id="controlPlace13" style="width:83px;"/>
        </xhtml:div>
      </layout>  
      <xforms:trigger appearance="image-text" id="trigger2" ref="instance('buttonState')/newdef" class="button-blue" icon-class="icon-system-plus"> 
        <xforms:label id="default5">新增</xforms:label>  
        <xforms:action id="action6" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript5">docPermission.newLinkClick(event)</xforms:script>
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trigger5" appearance="minimal" ref="data('buttonState')/deldef" icon-class="icon-system-trash"> 
        <xforms:label id="default6">删除</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action8"> 
          <xforms:script id="xformsScript8">docPermission.btnDeleteClick(event)</xforms:script>
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6" operation-owner="docDefineData" operation="refresh" appearance="minimal"> 
        <xforms:label id="default7"><![CDATA[刷新]]></xforms:label>
      </xforms:trigger>  
      <xforms:trigger id="trigger7" appearance="minimal" ref="data('buttonState')/setAty"> 
        <xforms:label id="default8">设置文档关联</xforms:label>  
        <xforms:action id="action9" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript9">docPermission.trigger3Click(event)</xforms:script>
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trigger8" appearance="minimal" ref="data('buttonState')/deleteAty"> 
        <xforms:label id="default9">删除文档关联</xforms:label>  
        <xforms:action id="action10" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript10">docPermission.trigger4Click(event)</xforms:script>
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trigger9" appearance="minimal" ref="data('buttonState')/keyList"> 
        <xforms:label id="default10">key设置</xforms:label>  
        <xforms:action id="action11" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript11">docPermission.keybtnClick(event)</xforms:script>
        </xforms:action> 
      </xforms:trigger>
    </xui:view>  
    <xui:view auto-load="true" id="view2"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择功能" width="591px" height="384px" modal="true" id="wdSelectFunTree" url="/SA/OPM/dialogs/selectFunTree/selectMultiFunctions.w" onReceive="docPermission.wdSelectFunTreeReceive" resizable="true" minmaxable="true" dialogUpdate="true"/>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="linkTree" data="docDefineData" onAfterIndexChanged="docPermission.gridAfterIndexChanged" onShowNodeImg="docPermission.linkTreeShowNodeImg" row-height="35" header-row-height="35" header-filter-row-height="35" class="ui-light grid-compact" space-column="false"> 
        <xui:column id="gridColumn3" ref="sDisplayName" label="关联名" type="tree" width="*" filter-editor="#text_filter" readonly="true"/>  
        <xui:column id="gridColumn2" ref="sProcess" label="过程" type="ro" width="300px" filter-editor="#text_filter"/>  
        <xui:column id="gridColumn1" ref="sActivity" label="环节" type="ro" width="230px" filter-editor="#text_filter"/> 
      </xhtml:div>  
      <layout id="layout2" style="height:100%;width:100%;"> 
        <xui:place control="wdSelectFunTree" id="controlPlace5"/>  
        <xui:place control="linkTree" id="controlPlace2" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" style="width:100%; height: 100%" border-size="8px" id="border1"> 
        <top id="top__" size="38px"> 
          <xui:place control="view1" id="controlPlace3" style="width:100%;height:100%;"/> 
        </top>  
        <center id="cent__"> 
          <xui:place control="view2" id="controlPlace4" style="width:100%;height:100%;"/> 
        </center> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="docPermission.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/> 
  </xui:resource> 
</xui:window>

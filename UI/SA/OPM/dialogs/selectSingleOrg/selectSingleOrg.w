<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:114px;left:52px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dOrgList" concept="SA_OPOrg"
      onIndexChanged="selectSingleOrg.dOrgListIndexChanged" onAfterRefresh="selectSingleOrg.dOrgListAfterRefresh"
      onAfterRefreshPage="selectSingleOrg.dOrgListAfterRefreshPage" onRefreshCreateParam="selectSingleOrg.dOrgListRefreshCreateParam"> 
      <reader id="default3" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgTree" concept="SA_OPOrg" is-tree="true" limit="-1"
      store-type="grid" onIndexChanged="selectSingleOrg.dOrgTreeIndexChanged" onAfterRefresh="selectSingleOrg.dOrgTreeAfterRefresh"
      onRefreshCreateParam="selectSingleOrg.dOrgTreeRefreshCreateParam"> 
      <reader id="default6" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="1=0" node-kind-relation="sNodeKind"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px"> 
        <top size="38px" id="borderLayout-top1"> 
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="4"><xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="selectSingleOrg.inputSearchKeydown(event)" onblur="(event)" onfocus="(event)" style="width:100px;;"></xhtml:input>
  <xui:place control="imageSearch" id="controlPlace7" style="width:25px;height:25px;"></xui:place>
  <xui:place control="trigger1" id="controlPlace9"></xui:place>
  <xui:place control="trigger2" id="controlPlace10"></xui:place></xhtml:div></top>  
        <center id="borderLayout-center1"> 
          <xhtml:div id="divTree" class="xui-container" style="height:50%;width:100%;">
            <xui:place control="gridTree" id="controlPlace1" style="width:100%;height:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/>
          </xhtml:div>  
          <xhtml:div id="divList" class="xui-container" style="width:100%;height:50%;">
            <xui:place control="gridList" id="controlPlace8" style="width:100%;height:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/>
          </xhtml:div>
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
            
           
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;margin:10px 0;"><xui:place control="btnOK" id="controlPlace6" /><xui:place control="btnCancel" id="controlPlace5" /></xhtml:div></bottom> 
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace2" style="top:137px;left:323px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectSingleOrg.receiverReceive"/>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[selectSingleOrg.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnOK" class="button-green"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[selectSingleOrg.btnOKClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridTree"
      data="dOrgTree" cascade="false" delay="false" appearance="tree" onCellHint="selectSingleOrg.gridTreeCellHint"
      onRowDblClick="selectSingleOrg.gridTreeRowDblClick" onShowNodeImg="selectSingleOrg.gridTreeShowNodeImg" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn6" ref="sName" label="名称" type="tree" readonly="true" width="*"/>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridList" data="dOrgList" onCellHint="selectSingleOrg.gridListCellHint"
      onRowDblClick="selectSingleOrg.gridListRowDblClick" class="grid-compact"> 
      <xui:column id="gridColumn5" ref="calcIndex" label="序号" type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn4" ref="sOrgKindID" type="html" width="30px" label="类型"
        readonly="true" onRender="selectSingleOrg.gridListSOrgKindIDRender" align="center"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="80px"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60px"/>  
      <xui:column id="gridColumn3" ref="sFName" label="路径" type="ro" width="300px"/>
    </xhtml:div>
  <xforms:trigger id="imageSearch" appearance="image-text" class="button-yellow" icon-class="icon-system-search">
   <xforms:label id="xuiLabel3"><![CDATA[]]></xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">selectSingleOrg.imageSearchClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" operation-owner="dOrgList" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-angle-right">
   <xforms:label id="default1"><![CDATA[下页]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" operation-owner="dOrgList" operation="loadAllPage" appearance="image-minimal" icon-class="icon-system-angle-double-right">
   <xforms:label id="default2"><![CDATA[全部]]></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript1" src="selectSingleOrg.js"/> 
  </xui:resource> 
</xui:window>

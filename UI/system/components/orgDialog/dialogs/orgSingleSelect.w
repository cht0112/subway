<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:114px;left:52px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dOrgList" concept="SA_OPOrg"
      onRefreshCreateParam="orgSingleSelect.dOrgListRefreshCreateParam" relations="sName,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPersonID"> 
      <reader id="default3" action="/system/logic/action/queryOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgTree" concept="SA_OPOrg" is-tree="true" limit="-1"
      store-type="grid" onRefreshCreateParam="orgSingleSelect.dOrgTreeRefreshCreateParam" relations="sName,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPersonID"> 
      <reader id="default6" action="/system/logic/action/queryOrgAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="1=0"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="json"
      columns="btnOk" src="" auto-load="true" id="dControl" store-type="simple">
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="default4"/>
        </row> 
      </rows>  
      <rule id="dataRule1" column="btnOk" readonly='not(call("orgSingleSelect.canSelect"))'/>
    </data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:auto;height:100%;padding-right:8px;padding-left:8px;"> 
        <top size="45px" id="borderLayout-top1" style="padding-top:5px;"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4">
   <xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="orgSingleSelect.inputSearchKeydown(event)" style="width:100px;"></xhtml:input>
   <xui:place control="btnSearch" id="controlPlace24" style="width:25px;height:25px;"></xui:place></xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="divNavigator" separator-size="8">
   <xui:place control="trigger1" id="controlPlace3"></xui:place>
   <xui:place control="trigger3" id="controlPlace9"></xui:place></xhtml:div></top>  
        <center id="borderLayout-center1"> 
          <xhtml:div id="divOrgTree" class="xui-container" style="width:100%;height:100%;"> 
            <xui:place control="gridOrgTree" id="controlPlace1" style="width:100%;height:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/> 
          </xhtml:div>  
          <xhtml:div id="divOrgList" class="xui-container" style="width:100%;height:100%;"> 
            <xui:place control="gridOrgList" id="controlPlace8" style="width:100%;height:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/> 
          </xhtml:div> 
        </center>  
        <bottom size="40px" id="borderLayout-bottom1" style="padding-top:2px;"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" style="float:right;">
   <xui:place control="btnOk" id="controlPlace7"></xui:place>
   <xui:place control="btnCancel" id="controlPlace4"></xui:place></xhtml:div></bottom> 
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace2" style="top:137px;left:323px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="receiver" onReceive="orgSingleSelect.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridOrgTree"
      data="dOrgTree" cascade="false" delay="false" appearance="tree" onCellHint="orgSingleSelect.gridOrgTreeCellHint"
      onRowDblClick="orgSingleSelect.gridOrgTreeRowDblClick" onShowNodeImg="orgSingleSelect.gridOrgTreeShowNodeImg"
      onRowHasChildren="orgSingleSelect.gridOrgTreeRowHasChildren" smart-render="20" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn6" ref="sName" label="名称" type="tree" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridOrgList" data="dOrgList" onCellHint="orgSingleSelect.gridOrgListCellHint"
      onRowDblClick="orgSingleSelect.gridOrgListRowDblClick" smart-render="20" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn5" ref="calcIndex" label="序号" type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="100px"/>
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60px"/>  
      <xui:column id="gridColumn4" ref="sOrgKindID" type="html" width="35px" label="类型"
        readonly="true" align="center" onRender="orgSingleSelect.gridOrgList_sOrgKindIDRender"/>  
      <xui:column id="gridColumn3" ref="sFName" label="路径" type="ro" width="300px"/> 
    </xhtml:div> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnSearch" appearance="image" image-text-mode="LR" class="button-yellow" icon-class="icon-system-search">
   <xforms:label id="default5">搜索</xforms:label>
   <xforms:action id="action13" ev:event="DOMActivate">
    <xforms:script id="xformsScript13">orgSingleSelect.btnSearchClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnOk" appearance="image-text" class="button-green" ref="data('dControl')/btnOk">
   <xforms:label id="xuiLabel2">确定</xforms:label>
   <xforms:action id="action4" ev:event="DOMActivate">
    <xforms:script id="xformsScript4"><![CDATA[orgSingleSelect.btnOkClick(event)]]></xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnCancel" appearance="minimal">
   <xforms:label id="xuiLabel1">取消</xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3"><![CDATA[orgSingleSelect.btnCancelClick(event)]]></xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="image-minimal" operation-owner="dOrgList" operation="loadNextPage" icon-class="icon-system-angle-right">
   <xforms:label id="default7">下页</xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" appearance="image-minimal" operation-owner="dOrgList" operation="loadAllPage" icon-class="icon-system-angle-double-right">
   <xforms:label id="default9"></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="orgSingleSelect.js"/>  
    <xhtml:script id="htmlScript3" src="/UI/system/components/orgDialog/dialogs/orgDialogUtils.js"></xhtml:script>
  <xhtml:script id="htmlScript2" src="/UI/system/service/org/orgUtils.js"></xhtml:script></xui:resource> 
</xui:window>

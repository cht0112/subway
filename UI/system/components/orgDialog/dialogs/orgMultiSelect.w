<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model" style="top:282px;height:auto;left:148px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgTree" concept="SA_OPOrg" limit="-1" is-tree="true"
      data-type="json" relations="sName,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPersonID" onRefreshCreateParam="orgMultiSelect.dOrgTreeRefreshCreateParam"> 
      <reader id="default2" action="/system/logic/action/queryOrgAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="1=0"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgList" concept="SA_OPOrg" limit="20" is-tree="false"
      data-type="json" relations="sName,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPersonID" onRefreshCreateParam="orgMultiSelect.dOrgListRefreshCreateParam"> 
      <reader id="default1" action="/system/logic/action/queryOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/>
    </data>  
    <xforms:action id="action2" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript2">orgMultiSelect.modelXBLLoaded(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="false" id="dOrgBackground" concept="SA_OPOrg" limit="-1"
      store-type="simple" relations="sName,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPersonID"> 
      <reader id="default4" action="/system/logic/action/queryOrgAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dSelected" concept="SA_OPOrg" limit="-1" is-tree="false"
      data-type="json" relations="sName,sCode,sLongName,sFName,sFCode,sFID,sOrgKindID,sSequence,sValidState,sParent,sLevel,sPersonID"> 
      <reader id="default5" action="/system/logic/action/queryOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/>
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout id="rootLayout" style="height:100%;width:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="rootBorderLayout" style="width:100%;height:100%;" border-size="8px"> 
        <top size="35px" id="borderLayout-top1"> 
          <xhtml:div id="div16" class="xui-container" style="width:100%;height:100%;"> 
              
              
              
             
          
  
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4" style="float:left;"><xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="orgMultiSelect.inputSearchKeydown(event)" style="width:100px;"></xhtml:input><xui:place control="imageSearchOrg" id="controlPlace24" style="width:25px;height:25px;"></xui:place>
  </xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float: right" separator-size="2"><xui:place control="btnMoveFirst" id="controlPlace16"/><xui:place control="btnMoveUp" id="controlPlace15" /><xui:place control="btnMoveDown" id="controlPlace14" /><xui:place control="btnMoveLast" id="controlPlace13" /></xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="divNavigator" separator-size="8">
   <xui:place control="trigger1" id="controlPlace3"></xui:place>
   <xui:place control="trigger3" id="controlPlace3"></xui:place></xhtml:div></xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <center id="borderLayout-center2"> 
              <xui:place control="gridSelected" id="controlPlace6" style="height:100%;width:100%;border:1px solid lightGrey;"/> 
            </center>  
            <left size="65px" id="borderLayout-left2"> 
              <xhtml:div id="divMiddle" class="xui-container" style="height:100%;width:100%;"> 
                <xui:place control="btnSelectAll" id="controlPlace9" style="position:relative;left:5px;width:55px;top:40px;"/>  
                <xui:place control="btnSelect" id="controlPlace10" style="position:relative;top:60px;left:5px;width:55px;"/>  
                <xui:place control="btnUnSelect" id="controlPlace11" style="position:relative;top:80px;left:5px;width:55px;"/>  
                <xui:place control="btnClear" id="controlPlace12" style="position:relative;top:100px;left:5px;width:55px;"/> 
              </xhtml:div> 
            </left> 
          </xhtml:div> 
        </center>  
        <left size="200px" id="borderLayout-left1"> 
          <xhtml:div id="divOrgTree" class="xui-container" style="overflow:hidden;width:100%;float:left;height:100%;"> 
            <xui:place control="gridOrgTree" id="controlPlace5" style="height:100%;width:100%;"/> 
          </xhtml:div>  
          <xhtml:div id="divOrgList" class="xui-container" style="overflow:hidden;width:100%;float:left;height:100%;"> 
            <xui:place control="gridOrgList" id="controlPlace2" style="height:100%;width:100%;border:1px solid lightGrey;"/> 
          </xhtml:div> 
        </left>  
        <bottom size="40px" id="borderLayout-bottom1"> 
          <xhtml:div id="divButtons" class="xui-container" style="width:100%;padding-top:8px;height:100%;"> 
              
             
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" style="float:right;">
   <xui:place control="btnOk" id="controlPlace7"></xui:place>
   <xui:place control="btnCancel" id="controlPlace4"></xui:place></xhtml:div>
  
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="barCascade" separator-size="2"><xhtml:input type="checkbox" value="" name="" id="cbCascade" style="float:left;;;"></xhtml:input>
  <xhtml:label id="labelCascade" class="xui-label" for="cbCascade" style="float:left;margin-top:5px;;">级联选择</xhtml:label></xhtml:div></xhtml:div> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="windowReceiver" id="controlPlace1" style="top:89px;left:121px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridSelected"
      data="dSelected" onRowDblClick="orgMultiSelect.gridSelectedRowDblClick" multi-selection="false"
      smart-render="20" class="grid-compact" header-row-height="30" row-height="30" space-column="false" onCellHint="orgMultiSelect.gridSelectedCellHint"> 
      <xui:column id="gridColumn2" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>
      <!--  
      <xui:column id="gridColumn7" ref="sFName" label="sFName" type="ro" width="0"
        visible="false"/>  
      -->  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="*"/>  
      <xui:column id="gridColumn6" ref="sOrgKindID" label="类型" type="html" width="35"
        align="center" onRender="orgMultiSelect.gridSelected_sOrgKindIDRender"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="orgMultiSelect.windowReceiverReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridOrgTree"
      data="dOrgTree" delay="false" appearance="tree" onShowNodeImg="orgMultiSelect.gridOrgTreeShowNodeImg"
      multi-selection="true" cascade="false" onRowChecked="orgMultiSelect.gridOrgTreeRowChecked"
      onRowDblClick="orgMultiSelect.gridOrgTreeRowDblClick" onRowHasChildren="orgMultiSelect.gridOrgTreeRowHasChildren"
      smart-render="20" class="ui-light" space-column="false" onRowValueChanged="orgMultiSelect.gridOrgTreeRowValueChanged" onCellHint="orgMultiSelect.gridOrgTreeCellHint"> 
      <xui:column id="gridColumn3" ref="sName" label="sName" type="tree" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridOrgList"
      data="dOrgList" multi-selection="false" onRowDblClick="orgMultiSelect.gridOrgListRowDblClick"
      onRowChecked="orgMultiSelect.gridOrgListRowChecked" smart-render="20" class="grid-compact" header-row-height="30" row-height="30" space-column="false" onRowValueChanged="orgMultiSelect.gridOrgListRowValueChanged" onCellHint="orgMultiSelect.gridOrgListCellHint"> 
      <xui:column id="gridColumn7" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>
      <xui:column id="gridColumn4" ref="sName" label="名称" type="checkbox" width="*"/>  
      <xui:column id="gridColumn5" ref="sOrgKindID" label="类型" type="html" width="35"
        align="center" onRender="orgMultiSelect.gridOrgList_sOrgKindIDRender"/>  
    </xhtml:div>  
    <xforms:trigger id="btnSelectAll" icon-class="icon-system-angle-double-right" appearance="image-text"> 
      <xforms:label id="xuiLabel4"><![CDATA[全选]]></xforms:label>  
      <xforms:action id="action8" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript8">orgMultiSelect.btnSelectAllClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnSelect" icon-class="icon-system-angle-right" appearance="image-text"> 
      <xforms:label id="xuiLabel5"><![CDATA[选择]]></xforms:label>  
      <xforms:action id="action7" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript7">orgMultiSelect.btnSelectClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnUnSelect" appearance="image-text" icon-class="icon-system-angle-left"> 
      <xforms:label id="xuiLabel6"><![CDATA[移除]]></xforms:label>  
      <xforms:action id="action6" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript6">orgMultiSelect.btnUnSelectClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnClear" appearance="image-text" icon-class="icon-system-angle-double-left"> 
      <xforms:label id="xuiLabel7"><![CDATA[清空]]></xforms:label>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5">orgMultiSelect.btnClearClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnMoveLast" appearance="image-minimal" icon-class="icon-system-angle-double-down"> 
      <xforms:label id="xuiLabel8"><![CDATA[置底]]></xforms:label>  
      <xforms:action id="action14" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript14">orgMultiSelect.btnMoveLastClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnMoveDown" appearance="image-minimal" icon-class="icon-system-angle-down"> 
      <xforms:label id="xuiLabel9"><![CDATA[下移]]></xforms:label>  
      <xforms:action id="action15" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript15">orgMultiSelect.btnMoveDownClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnMoveUp" appearance="image-minimal" icon-class="icon-system-angle-up"> 
      <xforms:label id="xuiLabel10"><![CDATA[上移]]></xforms:label>  
      <xforms:action id="action16" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript16">orgMultiSelect.btnMoveUpClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnMoveFirst" icon-class="icon-system-angle-double-up" appearance="image-minimal"> 
      <xforms:label id="xuiLabel11"><![CDATA[置顶]]></xforms:label>  
      <xforms:action id="action17" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript17">orgMultiSelect.btnMoveFirstClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="imageSearchOrg" appearance="image" image-text-mode="LR" class="button-yellow" icon-class="icon-system-search">
   <xforms:label id="default3">搜索</xforms:label>
   <xforms:action id="action13" ev:event="DOMActivate">
    <xforms:script id="xformsScript13">orgMultiSelect.btnSearchClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnOk" appearance="image-text" class="button-green">
   <xforms:label id="xuiLabel2">确定</xforms:label>
   <xforms:action id="action4" ev:event="DOMActivate">
    <xforms:script id="xformsScript4">orgMultiSelect.btnOkClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnCancel" appearance="minimal">
   <xforms:label id="xuiLabel1">取消</xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">orgMultiSelect.btnCancelClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="image-minimal" operation-owner="dOrgList" operation="loadNextPage" icon-class="icon-system-angle-right">
   <xforms:label id="default7">下页</xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3" appearance="image-minimal" operation-owner="dOrgList" operation="loadAllPage" icon-class="icon-system-angle-double-right">
   <xforms:label id="default9"></xforms:label></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="orgMultiSelect.js"/>  
    <xhtml:script id="htmlScript3" src="/UI/system/components/orgDialog/dialogs/orgDialogUtils.js"></xhtml:script>
  <xhtml:script id="htmlScript2" src="/UI/system/service/org/orgUtils.js"></xhtml:script></xui:resource> 
</xui:window>

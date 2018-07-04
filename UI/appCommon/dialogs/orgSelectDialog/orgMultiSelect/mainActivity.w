<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:86px;height:auto;left:424px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dOrgList" concept="SA_OPOrg"
      onIndexChanged="dOrgListIndexChanged" onAfterRefresh="dOrgListAfterRefresh"
      onAfterRefreshPage="dOrgListAfterRefreshPage"> 
      <reader id="default3" action="/appCommon/logic/action/orgSelectDialogQueryAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgTree" concept="SA_OPOrg" is-tree="true" offset="0"
      limit="-1" store-type="grid" onIndexChanged="dOrgTreeIndexChanged" onAfterRefresh="dOrgTreeAfterRefresh"
      onAfterRefreshPage="dOrgTreeAfterRefreshPage"> 
      <reader id="default6" action="/appCommon/logic/action/orgSelectDialogQueryAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="1=0" node-kind-relation="sNodeKind"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="-1" update-mode="whereVersion" auto-load="false" id="dSelected" concept="SA_OPOrg"
      onIndexChanged="dSelectedIndexChanged" onAfterRefresh="dSelectedAfterRefresh"> 
      <reader id="default8" action="/appCommon/logic/action/orgSelectDialogQueryAction"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">model1XformsModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%;" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:100%;"> 
            <center id="borderLayout-center2">
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout4" style="width:100%; height: 100%;;"> 
                <center id="borderLayout-center4">
                  <xhtml:div id="div7" style="height:100%;" class="xui-container"> 
                    <xui:place control="gridSelected" id="controlPlace2" style="width:100%;height:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;position:relative;"/>
                  </xhtml:div>
                </center>  
                <left size="60px" id="borderLayout-left2">
                  <xhtml:div id="div6" class="xui-container" style="height:100%;text-align:center;width:100%;"> 
                    <xhtml:div id="div2" class="xui-container" style="width:100%;height:50px;"/>
                    <xhtml:input type="button" value="全选&gt;&gt;" id="btnAllSelect" onclick="doAllSelect();"
                      class="xui-button" style="font-family:宋体;margin-top:10px;width:50px;display:none;"/>  
                    <xhtml:input type="button" id="btnSelect" value="选择 &gt;" onclick="doSelect(true);"
                      class="xui-button" style="font-family:宋体;margin-top:10px;width:50px;"/>  
                    <xhtml:input type="button" value="&lt; 取消" id="btnUnSelect" disabled="disabled"
                      onclick="doUnSelect();" class="xui-button" style="font-family:宋体;margin-top:10px;width:50px;"/>  
                    <xhtml:input type="button" value="&lt;&lt;清空" id="btnAllUnSelect" disabled="disabled"
                      onclick="doAllUnSelect();" class="xui-button" style="font-family:宋体;margin-top:10px;width:50px;"/>  
                  </xhtml:div>
                </left>
              </xhtml:div>
            </center>  
            <left size="240px" id="borderLayout-left1">
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout3" style="width:100%; height: 100%;"> 
                <top size="35px" id="borderLayout-top3"> 
                  <xui:place control="toolbars1" id="controlPlace3"/>
                </top>  
                <center id="borderLayout-center3"> 
                  <xhtml:div id="div1" class="xui-container" style="height:100%;width:100%;"> 
                    <xui:place control="gridTree" id="controlPlace1" style="float:left;height:100%;width:100%;"/>  
                    <xui:place control="gridList" id="controlPlace8" style="height:100%;width:100%;"/>
                  </xhtml:div> 
                </center> 
              </xhtml:div>
            </left>
          </xhtml:div>
        </center>  
        <bottom size="35px" id="borderLayout-bottom1"> 
          <xhtml:input type="button" value="取  消" id="btnCancel" onClick="cancelData();"
            class="xui-button" style="float:right;margin-right:8px;width:75px;margin-top:5px;"/>  
          <xhtml:input type="button" value="确  定" id="btnOK" onClick="returnData();"
            class="xui-button" style="float:right;margin-right:8px;width:75px;margin-top:5px;"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridSelected" data="dSelected" onRowDblClick="gridSelectedRowDblClick" onCellHint="gridSelectedCellHint"> 
      <xui:column id="gridColumn7" ref="sOrgKindID" type="html" width="20" label=" "
        onRender="gridSelectedSOrgKindIDRender"/>  
      <xui:column id="gridColumn9" ref="sName" label="名称" type="ro" width="80"/>  
      <xui:column id="gridColumn5" ref="sCode" label="编码" type="ro" width="60"/>  
      <xui:column id="gridColumn8" ref="sFName" label="全路径名" type="ro"/>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="barItem1"> 
          <xhtml:input type="text" value="" id="inputSearch" style="width:100px;" class="xui-input"/>
        </item>  
        <item id="barItem2"> 
          <xhtml:div data="dOrgList" component="/UI/system/components/pageNavigator.xbl.xml#pageNavigator"
            id="pageNavigator" style="display: none;" page-count="0"/>
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridTree"
      data="dOrgTree" cascade="false" delay="false" appearance="tree" onRowDblClick="gridTreeRowDblClick"> 
      <xui:column id="gridColumn6" ref="sName" label="名称" type="tree" readonly="true"/>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridList" data="dOrgList" onRowDblClick="gridListRowDblClick"> 
      <xui:column id="gridColumn4" ref="sOrgKindID" type="html" width="20" label=" "/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="80"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60"/>  
      <xui:column id="gridColumn3" ref="sFName" label="全路径名" type="ro"/>
    </xhtml:div>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="controller" src="../orgSelectDialogController.js"/>  
    <xhtml:script id="appCommon" src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script id="frameWindow" src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>

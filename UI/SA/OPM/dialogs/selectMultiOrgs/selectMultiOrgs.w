<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:75px;height:auto;left:122px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="20" update-mode="whereVersion" auto-load="false" id="dOrgList" concept="SA_OPOrg"
      onIndexChanged="selectMultiOrgs.dOrgListIndexChanged" onAfterRefresh="selectMultiOrgs.dOrgListAfterRefresh"
      onAfterRefreshPage="selectMultiOrgs.dOrgListAfterRefreshPage" onRefreshCreateParam="selectMultiOrgs.dOrgListRefreshCreateParam"> 
      <reader id="default3" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dOrgTree" concept="SA_OPOrg" is-tree="true" limit="-1"
      store-type="grid" onIndexChanged="selectMultiOrgs.dOrgTreeIndexChanged" onAfterRefresh="selectMultiOrgs.dOrgTreeAfterRefresh"
      onRefreshCreateParam="selectMultiOrgs.dOrgTreeRefreshCreateParam"> 
      <reader id="default6" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <tree-option id="treeOption1" parent-relation="sParent" root-filter="1=0" node-kind-relation="sNodeKind"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="-1" update-mode="whereVersion" auto-load="false" id="dSelected" concept="SA_OPOrg"
      onIndexChanged="selectMultiOrgs.dSelectedIndexChanged" onAfterRefresh="selectMultiOrgs.dSelectedAfterRefresh"> 
      <reader id="default8" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridSelected" data="dSelected" onRowDblClick="selectMultiOrgs.gridSelectedRowDblClick"
      onCellHint="selectMultiOrgs.gridSelectedCellHint"> 
      <xui:column id="gridColumn5" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>  
      <xui:column id="gridColumn4" ref="sOrgKindID" type="html" width="30px" label="类型"
        readonly="true" onRender="selectMultiOrgs.gridSelectedSOrgKindIDRender" align="center"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro" width="80px"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro" width="60px"/>  
      <xui:column id="gridColumn3" ref="sFName" label="路径" type="ro" width="300px"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="receiver" id="controlPlace4" style="top:241px;left:39px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;" border-size="8px"> 
        <center id="borderLayout-center1"> 
          <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter"
            fix-size="55%" mode="horz" id="HSplitter2" class="xui-splitter" style="height:100%;width:100%;"
            has-drag-bar="true" has-arrow-button="false"> 
            <xhtml:div region="left" id="div5"> 
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout2" style="width:100%; height: 100%;;"> 
                <top size="35px" id="borderLayout-top2"> 
                  <xhtml:div id="div10" class="xui-container" style="float:left;width:162px;height:100%;;"> 
                    <xui:place control="toolbars1" id="controlPlace3" style="float:left;width:auto;"/>
                  </xhtml:div>
                  <xhtml:div id="divNavigator" class="xui-container" style="float:left;height:100%;width:150px;">
                    <xui:place control="toolbars2" id="controlPlace5" style="float:left;width:auto;"/>
                  </xhtml:div>
                </top>  
                <center id="borderLayout-center2"> 
                  <xhtml:div id="divTree" class="xui-container" style="width:100%;"> 
                    <xui:place control="gridTree" id="controlPlace1" style="width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;height:100%;"/> 
                  </xhtml:div>  
                  <xhtml:div id="divList" class="xui-container" style="width:100%;"> 
                    <xui:place control="gridList" id="controlPlace8" style="width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;height:100%;"/> 
                  </xhtml:div> 
                </center>  
                <right size="40px" id="borderLayout-right1"> 
                  <xui:place control="btnAllSelect" id="controlPlace9" style="margin-top:20px;margin-left:5px;width:30px;"/>  
                  <xui:place control="btnSelect" id="controlPlace10" style="margin-top:20px;margin-left:5px;width:30px;"/>  
                  <xui:place control="btnUnSelect" id="controlPlace11" style="margin-top:20px;margin-left:5px;width:30px;"/>  
                  <xui:place control="btnAllUnSelect" id="controlPlace12" style="margin-top:20px;margin-left:5px;width:30px;"/> 
                </right> 
              </xhtml:div> 
            </xhtml:div>  
            <xhtml:div region="right" id="div6"> 
              <xui:place control="gridSelected" id="controlPlace2" style="width:100%;height:100%;"/> 
            </xhtml:div> 
          </xhtml:div> 
        </center>  
        <bottom size="30px" id="borderLayout-bottom1"> 
          <xui:place control="btnCancel" id="controlPlace6" style="float:right;width:75px;margin-top:5px;"/>  
          <xui:place control="btnOK" id="controlPlace7" style="float:right;margin-top:5px;margin-right:8px;width:75px;"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
      id="receiver" onReceive="selectMultiOrgs.receiverReceive"/>  
    <xforms:trigger id="btnCancel"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[selectMultiOrgs.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnOK"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1"><![CDATA[selectMultiOrgs.btnOKClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnAllSelect"> 
      <xforms:label id="xuiLabel3"><![CDATA[>>]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3"><![CDATA[selectMultiOrgs.btnAllSelectClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnSelect"> 
      <xforms:label id="xuiLabel4"><![CDATA[->]]></xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4"><![CDATA[selectMultiOrgs.btnSelectClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnUnSelect"> 
      <xforms:label id="xuiLabel5"><![CDATA[<-]]></xforms:label>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5"><![CDATA[selectMultiOrgs.btnUnSelectClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnAllUnSelect"> 
      <xforms:label id="xuiLabel6"><![CDATA[<<]]></xforms:label>  
      <xforms:action id="action6" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript6"><![CDATA[selectMultiOrgs.btnAllUnSelectClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="gridTree"
      data="dOrgTree" cascade="false" delay="false" appearance="tree" onRowDblClick="selectMultiOrgs.gridTreeRowDblClick"
      onCellHint="selectMultiOrgs.gridTreeCellHint" onShowNodeImg="selectMultiOrgs.gridTreeShowNodeImg" space-column="false"> 
      <xui:column id="gridColumn6" ref="sName" label="名称" type="tree" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridList" data="dOrgList" onRowDblClick="selectMultiOrgs.gridListRowDblClick"
      onCellHint="selectMultiOrgs.gridListCellHint"> 
      <xui:column id="gridColumn7" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>  
      <xui:column id="gridColumn8" ref="sOrgKindID" type="html" width="30px" label="类型"
        readonly="true" onRender="selectMultiOrgs.gridListSOrgKindIDRender" align="center"/>  
      <xui:column id="gridColumn9" ref="sName" label="名称" type="ro" width="80px" /><xui:column id="gridColumn7" ref="sCode" label="编码" type="ro" width="60px"/>  
        
      <xui:column id="gridColumn10" ref="sFName" label="路径" type="ro" width="300px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="dOrgList" mode="IMG_TXT_LR"> 
        <item name="next-page-item" id="barItem11"/>  
        <item name="all-page-item" id="barItem12"/>
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="customBarItem1"> 
          <xhtml:input type="text" value="" id="inputSearch" class="xui-input" style="width:80px;"
            onkeydown="selectMultiOrgs.inputSearchKeydown(event)"/>
        </item>  
        <item id="customBarItem3"> 
          <xforms:trigger id="imageSearch" appearance="image-text" image-text-mode="LR"
            src="/UI/system/images/search24.gif"> 
            <xforms:label id="xuiLabel7"><![CDATA[搜索]]></xforms:label>  
            <xforms:action id="action7" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript7">selectMultiOrgs.imageSearchClick(event)</xforms:script>
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript1" src="selectMultiOrgs.js"/> 
  </xui:resource> 
</xui:window>

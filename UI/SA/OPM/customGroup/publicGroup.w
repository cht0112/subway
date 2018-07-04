<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="height:auto;top:195px;left:133px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="true" id="dCustomGroup" concept="SA_OPCustomGroup"> 
      <creator id="default1" action="/SA/OPM/logic/action/createOPCustomGroupAction"/>  
      <reader id="default2" action="/SA/OPM/logic/action/queryOPCustomGroupAction"/>  
      <writer id="default3" action="/SA/OPM/logic/action/saveOPCustomGroupAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/>  
      <rule id="dataBizRule1" relation="sTypeID" default-value="'public'"/>  
      <rule id="dataBizRule2" relation="sTypeName" default-value="'公共'"/>  
      <rule id="dataBizRule3" relation="sName" required="true()" alert="'分组名称不能为空！'"/>
    <filter name="filter2" id="filter3"><![CDATA[sTypeID = 'public']]></filter></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="xml" auto-load="true" id="dMember" concept="SA_ResourceControl"
      limit="-1"> 
      <creator id="default4" action="/system/logic/action/createResourceControlAction"/>  
      <reader id="default5" action="/system/logic/action/queryResourceControlAction"/>  
      <writer id="default6" action="/system/logic/action/saveResourceControlAction"/>  
      <calculate-relation relation="calcCheck" id="calculate-relation2"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/>  
      <master id="master1" data="dCustomGroup" relation="sResourceID"/> 
    <filter name="filter0" id="filter1"><![CDATA[sTypeID = 'customGroup_member']]></filter></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="true" id="dRange" concept="SA_ResourceControl" limit="-1"> 
      <creator id="default7" action="/system/logic/action/createResourceControlAction"/>  
      <reader id="default8" action="/system/logic/action/queryResourceControlAction"/>  
      <writer id="default9" action="/system/logic/action/saveResourceControlAction"/>  
      <master id="master2" data="dCustomGroup" relation="sResourceID"/>  
      <calculate-relation relation="calcCheck" id="calculate-relation4"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation5"/> 
    <filter name="filter1" id="filter2"><![CDATA[sTypeID = 'customGroup_range']]></filter></data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="50%"
        mode="horz" has-arrow-button="false" id="HSplitter1" class="xui-splitter"
        style="height:100%;width:100%;" has-drag-bar="true"> 
        <xhtml:div region="left" id="div1"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;" border-size="2"> 
            <top size="35px" id="borderLayout-top1"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                id="buttonBar1"> 
                <xui:place control="trigger1" id="controlPlace3"/>  
                <xui:place control="trigger2" id="controlPlace4"/>  
                <xui:place control="trigger3" id="controlPlace5"/>  
                <xui:place control="trigger4" id="controlPlace6"/>  
                <xui:place control="trigger5" id="controlPlace7"/>  
                <xui:place control="trigger6" id="controlPlace8"/> 
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="gridCustomGroup" id="controlPlace9" style="height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div2"> 
          <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter"
            fix-size="70%" mode="vert" has-arrow-button="true" id="VSplitter1" class="xui-splitter"
            style="height:100%;width:100%;" has-drag-bar="true" status="normal"> 
            <xhtml:div region="top" id="div3"> 
              <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
                class="xui-tabPanel" style="height:100%;width:100%;"> 
                <xui:tab id="tabPage1"> 
                  <xui:label id="xuiLabel1"><![CDATA[成员]]></xui:label>  
                  <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                    id="borderLayout2" style="width:100%; height: 100%;;" border-size="2"> 
                    <top size="35px" id="borderLayout-top2"> 
                      <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                        id="buttonBar2"> 
                        <xui:place control="btnAddMember" id="controlPlace10" style="width:85px;"/>  
                        <xui:place control="btnRemoveMember" id="controlPlace11" style="width:85px;"/> 
                      </xhtml:div> 
                    </top>  
                    <center id="borderLayout-center2"> 
                      <xui:place control="gridMember" id="controlPlace12" style="height:100%;width:100%;"/> 
                    </center> 
                  </xhtml:div> 
                </xui:tab> 
              </xhtml:div> 
            </xhtml:div>  
            <xhtml:div region="bottom" id="div4"> 
              <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel2"
                class="xui-tabPanel" style="height:100%;width:100%;"> 
                <xui:tab id="tabPage3"> 
                  <xui:label id="xuiLabel3"><![CDATA[访问范围]]></xui:label>  
                  <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                    id="borderLayout3" style="width:100%; height: 100%;;" border-size="2"> 
                    <top size="35px" id="borderLayout-top3"> 
                      <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
                        id="buttonBar4"> 
                        <xui:place control="addRange" id="controlPlace15" style="width:85px;"/>  
                        <xui:place control="btnRemoveRange" id="controlPlace17" style="width:85px;"/>  
                        <xhtml:label id="label2" class="xui-label" style="color:#FF0000;"><![CDATA[（如果不设置访问范围，则所有人都可以显示这个分组）]]></xhtml:label> 
                      </xhtml:div> 
                    </top>  
                    <center id="borderLayout-center3"> 
                      <xui:place control="gridRange" id="controlPlace19" style="height:100%;width:100%;"/> 
                    </center> 
                  </xhtml:div> 
                </xui:tab> 
              </xhtml:div> 
            </xhtml:div> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div> 
    <xui:place control="dlgMember" id="controlPlace1" style="position:absolute;top:366px;left:143px;"></xui:place>
  <xui:place control="dlgRange" id="controlPlace2" style="position:absolute;top:365px;left:210px;"></xui:place></xui:layout>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1"
      operation-owner="dCustomGroup" operation="new" appearance="image-minimal"> 
      <xforms:label id="default10"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2"
      operation-owner="dCustomGroup" operation="save" appearance="image-minimal"> 
      <xforms:label id="default11"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger3"
      operation-owner="dCustomGroup" operation="delete" appearance="image-minimal"> 
      <xforms:label id="default12"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4"
      operation-owner="dCustomGroup" operation="refresh" appearance="image-minimal"> 
      <xforms:label id="default13"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5"
      operation-owner="dCustomGroup" operation="prevPage" appearance="image-minimal"> 
      <xforms:label id="default14"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger6"
      operation-owner="dCustomGroup" operation="nextPage" appearance="image-minimal"> 
      <xforms:label id="default15"><![CDATA[]]></xforms:label> 
    </xforms:trigger>  
    <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid"
      row-height="30" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="gridCustomGroup" data="dCustomGroup" space-column="false"
      edit-mode="true" header-row-height="30"> 
      <xui:column id="gridColumn5" ref="calcIndex" label="序号" type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ed" width="*"/>  
      <xui:column id="gridColumn2" ref="sSequence" label="排序" type="ed" width="30px"/>  
      <xui:column id="gridColumn3" ref="sCreatorName" label="提交者" type="ro" width="60px"/>  
      <xui:column id="gridColumn4" ref="sCreateTime" label="创建时间" type="ro" width="120px"/>  
      </xhtml:div>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAddMember"
      appearance="image-text" icon-class="icon-system-plus" class="button-green"> 
      <xforms:label id="default16"><![CDATA[添加成员]]></xforms:label> 
    <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[publicGroup.btnAddMemberClick(event)]]></xforms:script></xforms:action></xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnRemoveMember"
      appearance="image-minimal" icon-class="icon-system-minus"> 
      <xforms:label id="default17"><![CDATA[删除成员]]></xforms:label> 
    <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[publicGroup.btnRemoveMemberClick(event)]]></xforms:script></xforms:action></xforms:trigger>  
    <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid"
      header-row-height="30" row-height="30" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="gridMember" data="dMember" space-column="false"> 
      <xui:column id="gridColumn6" ref="calcCheck" label="#master_checkbox" type="ch"
        width="30px" align="center"/>  
      <xui:column id="gridColumn7" ref="calcIndex" label="序号" type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn8" ref="sOrgFName" label="成员" type="ed" width="*"/>  
    </xhtml:div>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="addRange"
      icon-class="icon-system-plus" appearance="image-text" class="button-green"> 
      <xforms:label id="default26"><![CDATA[添加范围]]></xforms:label> 
    <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[publicGroup.addRangeClick(event)]]></xforms:script></xforms:action></xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnRemoveRange"
      appearance="image-minimal" icon-class="icon-system-minus"> 
      <xforms:label id="default28"><![CDATA[删除范围]]></xforms:label> 
    <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[publicGroup.btnRemoveRangeClick(event)]]></xforms:script></xforms:action></xforms:trigger>  
    <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid"
      header-row-height="30" row-height="30" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="gridRange" data="dRange" space-column="false"> 
      <xui:column id="gridColumn10" ref="calcCheck" label="#master_checkbox" type="ch"
        width="30px" align="center"/>  
      <xui:column id="gridColumn9" ref="calcIndex" label="序号" type="ro" width="30px"
        align="center" show-index="true"/>  
      <xui:column id="gridColumn11" ref="sOrgFName" label="访问范围" type="ro" width="*"/> 
    </xhtml:div> 
  <xhtml:div component="/UI/system/components/orgDialog.xbl.xml#orgDialog" width="600px" height="500px" modal="true" root-filter="SA_OPOrg.sParent is null" id="dlgMember" multi-select="true" onReceive="publicGroup.dlgMemberReceive" title="选择成员"></xhtml:div>
  <xhtml:div component="/UI/system/components/orgDialog.xbl.xml#orgDialog" title="选择范围" width="600px" height="500px" modal="true" root-filter="SA_OPOrg.sParent is null" id="dlgRange" multi-select="true" onReceive="publicGroup.dlgRangeReceive"></xhtml:div></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="publicGroup.js"></xhtml:script>
  <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"></xhtml:script></xui:resource> 
</xui:window>

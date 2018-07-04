<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:148px;left:35px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="false" id="dRole" concept="SA_OPRole" limit="-1"
      onIndexChanged="mainActivity.dRoleIndexChanged" onAfterRefresh="mainActivity.dRoleAfterRefresh"
      onAfterRefreshPage="mainActivity.dRoleAfterRefreshPage"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPRoleAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="false" id="dAuthorize" concept="SA_OPAuthorize"
      onRefreshCreateParam="mainActivity.dAuthorizeRefreshCreateParam"> 
      <reader id="default2" action="/SA/OPM/logic/action/queryOPAuthorizeByRoleAction"/>  
      <calculate-relation relation="calcCheck" id="calculate-relation1"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/> 
    </data>  
    <xforms:action id="action4" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript4">mainActivity.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="false" id="dAuthorizeOrg" concept="SA_OPOrg" onRefreshCreateParam="mainActivity.dAuthorizeOrgRefreshCreateParam"> 
      <reader id="default3" action="/SA/OPM/logic/action/queryDistinctOPAuthorizeOrgByRoleAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation4"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="35%"
        mode="horz" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="height:100%;width:100%;"
        has-drag-bar="true"> 
        <xhtml:div region="left" id="div1"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="height:100%;margin-right:2px;width:auto;"> 
            <top size="35px" id="borderLayout-top1"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4"><xhtml:input type="text" value="" id="inputSearchRole" class="xui-input" onkeydown="mainActivity.inputSearchRoleKeydown(event)" style="width:100px;;"></xhtml:input>
  <xui:place control="imageSearchRole" id="controlPlace5" style="height:25px;width:25px;"></xui:place></xhtml:div></top>  
            <center id="borderLayout-center1"> 
              <xui:place control="gridRole" id="controlPlace1" style="height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div2"> 
          <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
            class="xui-tabPanel xui-no-border" style="height:100%;margin-left:2px;width:auto;"> 
            <xui:tab id="tabAssign" xforms-select="mainActivity.tabAssignSelect"> 
              <xui:label id="xuiLabel4"><![CDATA[组织授权]]></xui:label>  
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout2" style="width:100%;height:100%;"> 
                <top size="35px" id="borderLayout-top2" style="overflow:hidden;"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="8" style="float:left;margin-left:5px;"><xui:place control="btnInsertAuthorize" id="controlPlace9"></xui:place>
  <xui:place control="btnDeleteAuthorize" id="controlPlace10"></xui:place>
  <xui:place control="btnNextPageAuthorize" id="controlPlace11"></xui:place>
  <xui:place control="btnAllPageAuthorize" id="controlPlace12"></xui:place>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar6" separator-size="2" style="margin:0px 0px 0px 20px;"><xhtml:input type="checkbox" name="" id="cbShowRoleChildren" onclick="mainActivity.cbShowRoleChildrenClick(event)" checked="checked"></xhtml:input>
  <xhtml:label class="xui-label" for="cbShowRoleChildren" id="label2">显示子角色的授权组织</xhtml:label></xhtml:div></xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="4" style="float:right;margin-right:5px;">
   <xhtml:input type="text" value="" id="inputSearchAuthorize" class="xui-input" onkeydown="mainActivity.inputSearchAuthorizeKeydown(event)" style="width:80px;"></xhtml:input>
   <xui:place control="imageSearchAuthorize" id="controlPlace13" style="height:25px;width:25px;"></xui:place></xhtml:div></top>  
                <center id="borderLayout-center2"> 
                  <xui:place control="gridAuthorize" id="controlPlace2" style="height:100%;width:100%;margin:1px 1px 1px 1px;"/> 
                </center> 
              </xhtml:div> 
            </xui:tab>  
            <xui:tab id="tabQuery" xforms-select="mainActivity.tabQuerySelect"> 
              <xui:label id="xuiLabel5"><![CDATA[组织查询]]></xui:label>  
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout3" style="width:100%; height: 100%;;"> 
                <top size="35px" id="borderLayout-top3" style="overflow:hidden;"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar4" separator-size="8" style="float:left;margin-left:5px;"><xui:place control="btnNextPageOrg" id="controlPlace14"></xui:place>
  <xui:place control="btnAllPageOrg" id="controlPlace15"></xui:place>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar7" separator-size="2" style="margin:0px 0px 0px 20px;"><xhtml:input type="checkbox" name="" id="cbShowRoleChildren1" onclick="mainActivity.cbShowRoleChildren1Click(event)" checked="checked"></xhtml:input>
  <xhtml:label id="label1" class="xui-label" for="cbShowRoleChildren1">显示子角色的授权组织</xhtml:label></xhtml:div></xhtml:div>
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar5" separator-size="4" style="float:right;margin-right:5px;"><xhtml:input type="text" value="" id="inputSearchOrg" class="xui-input" onkeydown="mainActivity.inputSearchOrgKeydown(event)" style="width:80px;"></xhtml:input>
  <xui:place control="imageSearchOrg" id="controlPlace16" style="height:25px;width:25px;"></xui:place></xhtml:div></top>  
                <center id="borderLayout-center3"> 
                  <xui:place control="gridAuthorizeOrg" id="controlPlace7" style="height:100%;width:100%;"/> 
                </center> 
              </xhtml:div> 
            </xui:tab> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <xui:place control="wdSelectOrgs" id="controlPlace8" style="position:absolute;top:262px;left:218px;"></xui:place></xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="-1" id="gridRole" data="dRole" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn9" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>  
      <xui:column id="gridColumn8" ref="sRoleKind" label="类型" type="html" width="30px"
        onRender="mainActivity.gridRole_sRoleKindRender" align="center" sort-datatype="str"/>  
      <xui:column id="gridColumn1" ref="sName" label="角色" type="ro" width="100px"
        sort-datatype="str"/>  
      <xui:column id="gridColumn2" ref="sCatalog" label="分类" type="ro" width="100px"
        sort-datatype="str"/>  
      <xui:column id="gridColumn15" ref="sParentRolesNames" label="父角色" type="ro"
        width="100px" sort-datatype="str"/>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="gridAuthorize" data="dAuthorize" onRowValueChanged="mainActivity.gridAuthorizeRowValueChanged" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn6" ref="calcCheck" label="#master_checkbox" type="ch"
        width="30px" align="center"/>  
      <xui:column id="gridColumn7" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true"/>  
      <xui:column id="gridColumn5" ref="orgKindID" label="类型" type="html" width="30px"
        onRender="mainActivity.gridAuthorize_orgKindIDRender" align="center" sort-datatype="str"/>  
      <xui:column id="gridColumn3" ref="orgName" label="组织" type="ro" width="100px" sort-datatype="str"/>  
      <xui:column id="gridColumn4" ref="orgFName" label="路径" type="ro" width="350px" sort-datatype="str"/>  
      <xui:column id="gridColumn10" ref="roleName" label="所属角色" type="ro" width="100px" sort-datatype="str"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="gridAuthorizeOrg" data="dAuthorizeOrg" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn14" ref="calcIndex" label="序号" type="ro" width="30px"
        show-index="true" align="center"/>  
      <xui:column id="gridColumn13" ref="sOrgKindID" label="类型" type="html" width="30px"
        align="center" onRender="mainActivity.gridAuthorize_orgKindIDRender" sort-datatype="str"/>  
      <xui:column id="gridColumn11" ref="sName" label="名称" type="ro" width="100px" sort-datatype="str"/>  
      <xui:column id="gridColumn12" ref="sFName" label="路径" type="ro" width="350px" sort-datatype="str"/> 
    </xhtml:div> 
  <xhtml:div component="/UI/system/components/orgDialog.xbl.xml#orgDialog" title="选择授权组织" width="600px" height="500px" modal="true" root-filter="SA_OPOrg.sParent is null" id="wdSelectOrgs" multi-select="true" onReceive="mainActivity.wdSelectOrgsReceive" cascade="false"></xhtml:div>
  <xforms:trigger id="imageSearchRole" appearance="image" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="xuiLabel3">搜索</xforms:label>
   <xforms:action id="action2" ev:event="DOMActivate">
    <xforms:script id="xformsScript2">mainActivity.imageSearchRoleClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnInsertAuthorize" appearance="image-text" image-text-mode="LR" icon-class="icon-system-plus" class="button-blue">
   <xforms:label id="xuiLabel1">分配</xforms:label>
   <xforms:action id="action5" ev:event="DOMActivate">
    <xforms:script id="xformsScript5">mainActivity.btnInsertAuthorizeClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btnDeleteAuthorize" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus">
   <xforms:label id="xuiLabel2">删除</xforms:label>
   <xforms:action id="action6" ev:event="DOMActivate">
    <xforms:script id="xformsScript6">mainActivity.btnDeleteAuthorizeClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPageAuthorize" operation-owner="dAuthorize" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-angle-right">
   <xforms:label id="default4"><![CDATA[下页]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPageAuthorize" appearance="image-minimal" operation-owner="dAuthorize" operation="loadAllPage" icon-class="icon-system-angle-double-right">
   <xforms:label id="default5"><![CDATA[全部]]></xforms:label></xforms:trigger>
  <xforms:trigger id="imageSearchAuthorize" appearance="image" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="default6">搜索</xforms:label>
   <xforms:action id="action3" ev:event="DOMActivate">
    <xforms:script id="xformsScript3">mainActivity.imageSearchAuthorizeClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPageOrg" operation-owner="dAuthorizeOrg" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-angle-right">
   <xforms:label id="default7"><![CDATA[下页]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPageOrg" operation-owner="dAuthorizeOrg" operation="loadAllPage" icon-class="icon-system-angle-double-right" appearance="image-minimal">
   <xforms:label id="default8"><![CDATA[全部]]></xforms:label></xforms:trigger>
  <xforms:trigger id="imageSearchOrg" appearance="image" icon-class="icon-system-search" class="button-yellow">
   <xforms:label id="xuiLabel6">搜索</xforms:label>
   <xforms:action id="action1" ev:event="DOMActivate">
    <xforms:script id="xformsScript1">mainActivity.imageSearchOrgClick(event)</xforms:script></xforms:action> </xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  	<xhtml:script id="htmlScript3" src="/UI/system/service/org/orgUtils.js"></xhtml:script>
  </xui:resource> 
</xui:window>

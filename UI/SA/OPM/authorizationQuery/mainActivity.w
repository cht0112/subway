<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:283px;left:82px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="dOrgTree" concept="SA_OPOrg" limit="-1" is-tree="true" onIndexChanged="mainActivity.dOrgTreeIndexChanged" onAfterRefresh="mainActivity.dOrgTreeIndexChanged"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <tree-option id="default2" root-filter="sParent is null" parent-relation="sParent" node-kind-relation="sNodeKind"/>  
      <filter name="filterValidState" id="filter1"><![CDATA[SA_OPOrg.sValidState = 1]]></filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="dPermisionByOrg" concept="SA_OPPermission" onRefreshCreateParam="mainActivity.dPermisionByOrgRefreshCreateParam" confirm-refresh="false"> 
      <reader id="default3" action="/SA/OPM/logic/action/queryOPAuthorizePermissionByOrgAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="checkBox,label,url,process,activity,isFolder,activityFName" auto-load="false" id="dFunTree" store-type="grid" onIndexChanged="mainActivity.dFunTreeIndexChanged"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="checkBox,label,url,process,activity,isFolder,activityFName" auto-load="false" id="dFunList" store-type="grid" onIndexChanged="mainActivity.dFunListIndexChanged"/>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="dOrgByPermission" concept="SA_OPOrg" onRefreshCreateParam="mainActivity.dOrgByPermissionRefreshCreateParam"> 
      <reader id="default4" action="/SA/OPM/logic/action/queryOrgByPermissionAction"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/> 
    </data>  
    <xforms:action id="action4" ev:event="onload">
      <xforms:script id="xformsScript4"><![CDATA[mainActivity.model1Load(event)]]></xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" class="xui-tabPanel xui-no-border" style="height:100%;width:100%;"> 
        <xui:tab id="tabByOrg"> 
          <xui:label id="xuiLabel1"><![CDATA[按组织查询权限]]></xui:label>  
          <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="30%" mode="horz" has-arrow-button="true" id="HSplitter1" class="xui-splitter" style="height:100%;width:100%;" has-drag-bar="true"> 
            <xhtml:div region="left" id="div1"> 
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="height:100%;width:auto;margin-right:2px;margin-left:2px;"> 
                <top size="35px" id="borderLayout-top1"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4" style="margin-left:5px;">
                    <xhtml:input type="text" value="" id="inputSearchOrg" class="xui-input" onkeydown="mainActivity.inputSearchOrgKeydown(event)" style="width:100px;;"/>  
                    <xui:place control="imageSearchOrg" id="controlPlace9" style="height:25px;width:25px;"/>
                  </xhtml:div>
                </top>  
                <center id="borderLayout-center1"> 
                  <xui:place control="gridOrgTree" id="controlPlace1" style="height:100%;width:100%;border:none;"/> 
                </center> 
              </xhtml:div> 
            </xhtml:div>  
            <xhtml:div region="right" id="div2"> 
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="height:100%;margin-right:2px;margin-left:2px;width:auto;"> 
                <top size="35px" id="borderLayout-top2"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="8" style="float:left;margin-left:5px;">
                    <xui:place control="btnNextPagePermission" id="controlPlace10"/>  
                    <xui:place control="btnAllPagePermission" id="controlPlace11"/>
                  </xhtml:div>  
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="4" style="float:right;margin-right:5px;">
                    <xhtml:input type="text" value="" id="inputSearchPermissionByOrg" class="xui-input" onkeydown="mainActivity.inputSearchPermissionByOrgKeydown(event)" style="width:100px;"/>  
                    <xui:place control="imageSearchPermissionByOrg" id="controlPlace12" style="height:25px;width:25px;"/>
                  </xhtml:div>
                </top>  
                <center id="borderLayout-center2"> 
                  <xui:place control="gridPermisionByOrg" id="controlPlace3" style="height:100%;width:100%;"/> 
                </center> 
              </xhtml:div> 
            </xhtml:div> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabByPermission" xforms-select="mainActivity.tabByPermissionSelect"> 
          <xui:label id="xuiLabel2"><![CDATA[按权限查询组织]]></xui:label>  
          <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="30%" mode="horz" has-arrow-button="true" id="HSplitter2" class="xui-splitter" style="width:100%;height:100%;" has-drag-bar="true"> 
            <xhtml:div region="left" id="div3"> 
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout3" style="height:100%;width:auto;margin-right:2px;margin-left:2px;"> 
                <top size="35px" id="borderLayout-top3"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar4" separator-size="4" style="margin-left:5px;">
                    <xhtml:input type="text" value="" id="inputSearchFun" class="xui-input" onkeydown="mainActivity.inputSearchFunKeydown(event)" style="width:100px;;"/>  
                    <xui:place control="imageSearchFun" id="controlPlace13" style="height:25px;width:25px;"/>
                  </xhtml:div>
                </top>  
                <center id="borderLayout-center3"> 
                  <place control="gridFunTree" style="width:100%;height:100%;border:none;" id="controlPlace2"/>  
                  <place control="gridFunList" style="width:100%;height:100%;" id="controlPlace3"/> 
                </center> 
              </xhtml:div> 
            </xhtml:div>  
            <xhtml:div region="right" id="div4"> 
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout4" style="width:auto;height:100%;margin-left:2px;margin-right:2px;"> 
                <top size="35px" id="borderLayout-top4"> 
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar5" separator-size="8" style="float:left;margin-left:5px;;"> 
                    <xui:place control="btnNextPageOrg" id="controlPlace15"/>  
                    <xui:place control="btnAllPageOrg" id="controlPlace14"/>
                  </xhtml:div>  
                  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar6" separator-size="4" style="float:right;margin-right:5px;">
                    <xhtml:input type="text" value="" id="inputSearchOrgByPermission" class="xui-input" onkeydown="mainActivity.inputSearchOrgByPermissionKeydown(event)" style="width:100px;"/>  
                    <xui:place control="imageSearchOrgByPermission" id="controlPlace16" style="height:25px;width:25px;"/>
                  </xhtml:div>
                </top>  
                <center id="borderLayout-center4"> 
                  <xui:place control="gridOrgByPermission" id="controlPlace7" style="height:100%;width:100%;"/> 
                </center> 
              </xhtml:div> 
            </xhtml:div> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div>  
      <xui:place control="wdSearchOrg" id="controlPlace6" style="top:153px;left:92px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridFunTree" data="dFunTree" appearance="tree" multi-selection="false" cascade="true" onShowNodeImg="mainActivity.gridFunTreeShowNodeImg" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn6" ref="checkBox" type="ro" visible="false" width="30px" align="center"/>  
      <xui:column id="gridColumn11" ref="label" label="功能" type="tree" readonly="true" width="*"/>  
      <xui:column id="gridColumn8" ref="url" label="url" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn12" ref="process" label="process" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn10" ref="activity" label="activity" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn9" ref="isFolder" label="isFolder" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn6" ref="activityFName" label="activityFName" type="ro" width="100px" visible="false"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridFunList" data="dFunList" multi-selection="false" class="grid-compact xui-grid-hide-head" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn0" ref="checkBox" label="#master_checkbox" type="ch" width="30px" align="center" visible="false"/>  
      <xui:column id="gridColumn1" ref="label" label="功能" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn2" ref="url" label="url" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn3" ref="process" label="process" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn4" ref="activity" type="ro" width="100px" visible="false" label="activity"/>  
      <xui:column id="gridColumn5" ref="isFolder" label="isFolder" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn7" ref="activityFName" label="功能" type="ro"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridOrgTree" data="dOrgTree" appearance="tree" onShowNodeImg="mainActivity.gridOrgTreeShowNodeImg" header-row-height="30" row-height="30" class="ui-light" space-column="false"> 
      <xui:column id="gridColumn1" ref="sName" label="名称" type="tree" width="*" readonly="true"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="组织搜索" width="596px" height="214px" modal="false" id="wdSearchOrg" url="/SA/OPM/dialogs/searchOrg/searchOrg.w" neighbor="imageSearchOrg" onReceive="mainActivity.wdSearchOrgReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="gridPermisionByOrg" data="dPermisionByOrg" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn5" ref="calcIndex" label="序号" type="ro" width="30px" show-index="true"/>  
      <xui:column id="gridColumn6" ref="roleName" label="角色" type="ro" width="100px" sort-datatype="str"/>  
      <xui:column id="gridColumn3" ref="sActivityFName" label="功能" type="ro" width="300px" sort-datatype="str"/>  
      <xui:column id="gridColumn8" type="ro" width="150px" label="动作策略/数据策略" ref="actionsLabel"/>  
      <xui:column id="gridColumn2" ref="sProcess" label="过程" type="ro" width="500px" sort-datatype="str"/>  
      <xui:column id="gridColumn4" ref="sActivity" label="活动" type="ro" width="100px" sort-datatype="str"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="gridOrgByPermission" data="dOrgByPermission" header-row-height="30" row-height="30" class="grid-compact"> 
      <xui:column id="gridColumn18" ref="calcIndex" label="序号" type="ro" width="30px" show-index="true"/>  
      <xui:column id="gridColumn16" ref="orgKindID" label="类型" type="html" width="30px" sort-datatype="str" onRender="mainActivity.gridOrgByPermission_orgKindIDRender" align="center"/>  
      <xui:column id="gridColumn17" ref="roleName" label="角色" type="ro" width="100px" sort-datatype="str"/>
      <xui:column id="gridColumn13" ref="orgName" label="组织" type="ro" width="100px" sort-datatype="str"/>  
      <xui:column id="gridColumn15" ref="orgFName" label="路径" type="ro" width="500px" sort-datatype="str"/> 
    </xhtml:div>  
    <xforms:trigger id="imageSearchOrg" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel11">搜索</xforms:label>  
      <xforms:action id="action13" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript13">mainActivity.imageSearchOrgClick(event)</xforms:script>
      </xforms:action>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">mainActivity.imageSearchOrgClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPagePermission" operation-owner="dPermisionByOrg" operation="loadNextPage" appearance="image-minimal" icon-class="icon-system-angle-right"> 
      <xforms:label id="default5"><![CDATA[下页]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPagePermission" operation-owner="dPermisionByOrg" operation="loadAllPage" icon-class="icon-system-angle-double-right" appearance="image-minimal"> 
      <xforms:label id="default6"><![CDATA[全部]]></xforms:label>
    </xforms:trigger>  
    <xforms:trigger id="imageSearchPermissionByOrg" appearance="image" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel6">搜索</xforms:label>  
      <xforms:action id="action7" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript7">mainActivity.imageSearchPermissionByOrgClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="imageSearchFun" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="default7">搜索</xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3">mainActivity.imageSearchFunClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnNextPageOrg" operation-owner="dOrgByPermission" appearance="image-minimal" icon-class="icon-system-angle-right" operation="loadNextPage"> 
      <xforms:label id="default9">下页</xforms:label>
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnAllPageOrg" operation-owner="dOrgByPermission" icon-class="icon-system-angle-double-right" appearance="image-minimal" operation="loadAllPage"> 
      <xforms:label id="default8">全部</xforms:label>
    </xforms:trigger>  
    <xforms:trigger id="imageSearchOrgByPermission" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel3">搜索</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">mainActivity.imageSearchOrgByPermissionClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  	<xhtml:script id="htmlScript3" src="/UI/system/service/org/orgUtils.js"></xhtml:script>
  </xui:resource> 
</xui:window>

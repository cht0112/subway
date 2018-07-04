<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:175px;left:134px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" xui:update-mode="whereVersion" auto-load="true" id="dAssetInM" concept="OA_AS_InM" order-by="fCreateTime:desc" filter-relations="fNO,fDutyDeptName,fDutyPsnName,fDate,fMode,fAmount,fStateName,fRemark"> 
      <reader action="/OA/asset/logic/action/queryASInMAction"/>  
      <calculate-relation relation="recNo"/>  
      <rule id="dataBizRule1" concept="OA_AS_InM" readonly="true()"/>  
      <writer id="default4" action="/OA/asset/logic/action/saveASInMAction"/>  
      <creator id="default5" action="/OA/asset/logic/action/createASInMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dAssetInMode" concept="OA_AS_InMode" store-type="simple" order-by="fCode:asc"> 
      <reader id="default3" action="/OA/asset/logic/action/queryASInModeAction"/>  
      <filter name="modeFilter" id="filter1">OA_AS_InMode.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="false" id="dAssetInStatus" store-type="simple"> 
      <rows xmlns="" id="default8">  
        <row id="default9"> 
          <cell id="default10">未完成</cell>  
          <cell id="default11">0</cell> 
        </row>  
        <row id="default12"> 
          <cell id="default13">已完成</cell>  
          <cell id="default14">1</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetInList"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar" data="dAssetInM" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image" id="insert" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label>新增</xforms:label>  
            <xforms:action id="action1" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript1">insertDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="delete-item"> 
        	<xforms:trigger appearance="image" id="delete" src="/UI/appCommon/images/remove.gif" dis-src="/UI/appCommon/images/un_remove.gif"> 
            <xforms:label>删除</xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate"> 
            <xforms:script id="xformsScript3">assetIn.barItem1Click(event)</xforms:script> 
          </xforms:action>  
          </xforms:trigger> 
         
        </item>  
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/>  
        <item name="separator"/>  
        <item name="custom-page-item"/>  
        </xui:bar>  
      </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdAssetInList" data="dAssetInM" onRowDblClick="grdAssetInListRowDblclick"> 
      <column ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
      <column ref="fNO" label="单据号" type="html" width="120" onRender="grdAssetInList_fNORender"/>  
      <column id="gridColumn1" ref="fDutyDeptName" label="责任部门" type="ro" width="100"/>  
      <column id="gridColumn2" ref="fDutyPsnName" label="责任人" type="ro" width="70"/>  
      <column id="gridColumn3" ref="fDate" label="入库日期" type="ro" width="70"/>  
      <column id="gridColumn4" ref="fMode" label="入库方式" type="ro" width="70"/>  
      <column id="gridColumn7" ref="fStateName" label="入库状态" type="ro" width="70"/>  
      <column id="gridColumn6" ref="fAmount" label="总金额" type="ro" width="100" align="right" format="0,000.00"/>  
      <column id="gridColumn8" ref="fRemark" label="备注" type="ro" width="184"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <place control="tbrAssetInList"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
          <xui:place control="vFilter" id="controlPlace1" style="height:100%;width:100%;"></xui:place></xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="grdAssetInList" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  <xui:view auto-load="true" id="vFilter" class="xui-container">
   <layout type="absolute" style="position:relative;height:100%;width:100%;" id="layout1"><xhtml:label id="label2" class="xui-label" style="background-color:transparent;position:absolute;top:8px;left:0px;width:30px;">
时间</xhtml:label>
  <xui:place control="extDateFilter" id="controlPlace2" style="position:absolute;width:80px;top:3px;left:30px;"></xui:place>
  <xhtml:label id="label3" class="xui-label" style="background-color:transparent;position:absolute;width:55px;top:8px;left:130px;">
入库方式</xhtml:label>
  <xui:place control="gridFilterMode" id="controlPlace3" style="position:absolute;width:80px;top:3px;left:185px;"></xui:place>
  <xhtml:label id="label4" class="xui-label" style="background-color:transparent;position:absolute;width:55px;top:8px;left:285px;">
入库状态</xhtml:label>
  <xui:place control="gridFilterState" id="controlPlace4" style="position:absolute;width:80px;top:3px;left:340px;"></xui:place>
  </layout>
  <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" id="extDateFilter" filter-data="dAssetInM" filter-date-relation1="fDate"></xhtml:div>
  <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'" id="gridFilterMode" filter-data="dAssetInM" filter-relation="fMode" default-label="'全部'" multi-select="true">




   <xforms:label ref="fName" id="xuiLabel3"></xforms:label>
   <xforms:value ref="fName" id="default1"></xforms:value>
   <xforms:itemset id="default2" data="dAssetInMode" auto-load-data="true">


    <xforms:column ref="fName" id="default6"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'" id="gridFilterState" filter-data="dAssetInM" filter-relation="fState" default-label="'全部'" multi-select="true" onGetCondition="assetIn.gridFilterStateGetCondition">




   <xforms:label ref="label" id="xuiLabel2"></xforms:label>
   <xforms:value ref="value" id="default15"></xforms:value>
   <xforms:itemset id="default16" data="dAssetInStatus" auto-load-data="true">



    <xforms:column ref="label" id="default19"></xforms:column>
    <xforms:column ref="value" visible="false" id="default20"></xforms:column></xforms:itemset> </xhtml:div>
  </xui:view></xui:view>  
  <xui:resource> 
    <xhtml:script src="assetIn.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

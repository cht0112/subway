<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:133px;left:88px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dRepairApply" concept="OA_AS_RepairApply"
      order-by="fCreateTime:desc" filter-relations="fNO,fApplyDeptName,fApplyPsnName,fApplyDate,fCode,fKind,fName,fRepairType,fRepairDate,fRepairAmount,fBizStateName"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASRepairApplyAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrRepairApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessQueryBar.xbl.xml#standardProcessQueryBar"
        id="standardProcessQueryBar" data="dRepairApply" execute-concept="OA_AS_RepairExecute"
        smart-relations="fNO,fBizStateName,fCode,fKind,fName,fRepairType,fRepairAmount,fApplyDeptName,fApplyPsnName"/> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vRepairApply"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="grdRepairApply" data="dRepairApply" onRowDblClick="grdRepairApplyRowDblClick"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fBizStateName" label="状态" type="ro" width="50"/>  
        <column id="gridColumn3" ref="fNO" label="单据号" type="html" width="120"
          onRender="grdRepairApply_fNORender"/>  
        <column id="gridColumn12" ref="fCode" label="资产编号" type="ro" width="100"/>  
        <column id="gridColumn4" ref="fKind" label="资产类别" type="ro" width="80"/>  
        <column id="gridColumn5" ref="fName" label="资产名称" type="ro" width="80"/>  
        <column id="gridColumn6" ref="fRepairType" label="维修类型" type="ro" width="70"/>  
        <column id="gridColumn7" ref="fRepairDate" label="送修日期" type="date" width="70"
          readonly="true"/>  
        <column id="gridColumn8" ref="fRepairAmount" label="维修金额" type="ro" width="80"
          format="0,000.00" align="right"/>  
        <column id="gridColumn9" ref="fApplyDeptName" label="申请部门" type="ro" width="94"/>  
        <column id="gridColumn10" ref="fApplyPsnName" label="申请人" type="ro" width="70"/>  
        <column id="gridColumn11" ref="fApplyDate" label="申请日期" type="date" width="80"
          readonly="true"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdRepairApply" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default3"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrRepairApply" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default4"> 
          <xhtml:td id="td4"> 
            <place control="vRepairApply" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetRepairApplyQueryActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

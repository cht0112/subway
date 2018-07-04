<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:226px;left:126px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dBuyApplyM" concept="OA_AS_BuyApplyM" order-by="fCreateTime:desc" filter-relations="fNO,fApplyDeptName,fApplyPsnName,fApplyDate,fApplyReason,fBizStateName,fUpdatePsnName,fUpdateTime"> 
      <reader action="/OA/asset/logic/action/queryASBuyApplyMAction"/>  
      <calculate-relation relation="recNo"/>  
      <rule concept="OA_AS_BuyApplyM" readonly="true()"/> 
    </data>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdBuyApplyM" data="dBuyApplyM" onRowDblClick="grdBuyApplyMRowDblclick"> 
      <column ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
      <column ref="fBizStateName" label="状态" type="ro" width="50"/>  
      <column ref="fNO" label="单据号" type="html" width="120" onRender="grdBuyApplyM_fNORender"/>  
      <column ref="fApplyDeptName" label="申请部门" type="ro" width="100"/>  
      <column ref="fApplyPsnName" label="申请人" type="ro" width="70"/>  
      <column ref="fApplyDate" label="申请日期" type="date" width="70"/>  
      <column ref="fUpdatePsnName" label="修改人" type="ro" width="70"/>  
      <column ref="fUpdateTime" label="修改时间" type="dateTime" width="130"/>  
      <column ref="fApplyReason" label="采购原因" type="txt" width="184"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrBuyApplyM"> 
      <xui:bar component="/UI/appCommon/components/standardProcessQueryBar.xbl.xml#standardProcessQueryBar" id="standardProcessQueryBar" data="dBuyApplyM" execute-concept="OA_AS_BuyExecute" smart-relations="fNO,fBizStateName，fApplyDeptName,fApplyPsnName,fUpdatePsnNam"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <place control="tbrBuyApplyM"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="grdBuyApplyM" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="assetBuyApplyQuery.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

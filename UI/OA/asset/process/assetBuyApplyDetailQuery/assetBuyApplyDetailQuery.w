<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:136px;left:96px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" xui:update-mode="whereVersion" auto-load="false" id="dBuyApplyDetail" concept="OA_AS_BuyApplyD" order-by="fCreateTime:desc" filter-relations="fKind,fSpecType,fUnit,fInNum,fBuyNum,fPrice,fAmount,fName,fBizStateName,fApplyDeptName,fApplyPsnName,fApplyDate"> 
      <reader action="/OA/asset/logic/action/queryASBuyApplyDetailAction"/>  
      <calculate-relation relation="recNo"/> 
    </data>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrBuyApplyDetail"> 
      <xui:bar component="/UI/appCommon/components/standardProcessQueryBar.xbl.xml#standardProcessQueryBar" id="standardProcessQueryBar" data="dBuyApplyDetail" execute-concept="OA_AS_BuyExecute" smart-relations="m.fNO,fApplyDeptName,m.fApplyPsnName,OA_AS_BuyApplyD.fKind,OA_AS_BuyApplyD.fName,OA_AS_BuyApplyD.fSpecType,OA_AS_BuyApplyD.fUnit,OA_AS_BuyApplyD.fBuyNum,OA_AS_BuyApplyD.fPrice,OA_AS_BuyApplyD.fAmount,OA_AS_BuyApplyD.fInNum"/> 
    </xhtml:div>  
    <xui:view id="vBuyApplyDetail"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdBuyApplyDetail" data="dBuyApplyDetail" onRowDblClick="grdBuyApplyDetailRowDblclick"> 
        <column ref="recNo" type="ed" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn1" ref="fBizStateName" label="状态" type="ro" width="50"/>  
        <column ref="fApplyDeptName" label="申请部门" type="ro" width="80"/>  
        <column ref="fApplyPsnName" label="申请人" type="ro" width="70"/>  
        <column ref="fApplyDate" label="申请日期" type="date" width="70" readonly="true"/>  
        <column ref="fKind" label="类别" type="ro" width="90"/>  
        <column ref="fName" label="名称" type="ro" width="109"/>  
        <column ref="fSpecType" label="规格型号" type="ro" width="80"/>  
        <column ref="fUnit" label="单位" type="ro" width="30" align="center"/>  
        <column ref="fBuyNum" label="采购数量" type="ro" width="50" align="right"/>  
        <column label="单价" width="80" ref="fPrice" type="ro" align="right" format="0,000.00"/>  
        <column label="金额(元)" width="85" ref="fAmount" type="ro" align="right" format="0,000.00"/>  
        <column ref="fInNum" label="入库数量" type="ro" width="50" align="right"/> 
      </xhtml:div>  
      <xui:layout style="height:100%"> 
        <place control="grdBuyApplyDetail" style="width:100%;height:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <place control="tbrBuyApplyDetail"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vBuyApplyDetail"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="assetBuyApplyDetailQuery.js"/> 
  </xui:resource> 
</xui:window>

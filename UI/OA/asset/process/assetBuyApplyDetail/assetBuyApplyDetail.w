<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:369px;left:206px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dBuyApplyM" concept="OA_AS_BuyApplyM" store-type="simple"> 
      <reader action="/OA/asset/logic/action/queryASBuyApplyMAction"/>  
      <rule relation="fApplyReason" readonly="true()"/>  
      <rule relation="fRemark" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="true" id="dBuyApplyD" concept="OA_AS_BuyApplyD"> 
      <master auto-load="true" data="dBuyApplyM" relation="fMasterID"/>  
      <reader action="/OA/asset/logic/action/queryASBuyApplyDAction"/>  
      <calculate-relation relation="subRecNo"/> 
    </data>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dBuyApplyM" config-file="/OA/asset/process/assetBuyApply/processExecuteConfig.xml"/>  
    <xui:view id="vBuyApplyM"> 
      <xforms:textarea ref="data('dBuyApplyM')/fApplyReason" id="taApplyReason" auto-size="true"/>  
      <xforms:textarea ref="data('dBuyApplyM')/fRemark" id="taRemark" auto-size="true"/>   
      <xui:view id="vGrdBuyApply"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdBuyApplyD" data="dBuyApplyD"> 
          <column ref="序号" type="ro" width="30" show-index="true"/>  
          <column ref="fKind" label="类别" type="ro" width="100"/>  
          <column ref="fName" label="名称" type="ro" width="110"/>  
          <column ref="fSpecType" label="规格型号" type="ro" width="70"/>  
          <column ref="fUnit" label="单位" type="ro" width="30" align="center"/>  
          <column ref="fBuyNum" label="数量" type="ro" width="40" align="right"/>  
          <column label="单价" width="80" ref="fPrice" type="ro" align="right" format="0,000.00"/>  
          <column label="金额(元)" width="100" ref="fAmount" type="ro" align="right" format="0,000.00"/>  
          <column ref="fInNum" label="入库数量" type="ro" width="50" align="right"/>  
          <column label="备注" width="129" ref="fRemark" type="ro"/> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="grdBuyApplyD" style="width:100%;height:100%;"/> 
        </xui:layout> 
      </xui:view>  
      <xforms:output id="optNO" ref="data('dBuyApplyM')/fNO"/>  
      <xforms:output id="optAmount" ref="data('dBuyApplyM')/fAmount" format="format-number('0,000.00')"/>  
      <xforms:output id="optApplyPsn" ref="data('dBuyApplyM')/fApplyPsnName"/>  
      <xforms:output id="optApplyDept" ref="data('dBuyApplyM')/fApplyDeptName"/>  
      <xforms:output ref="data('dBuyApplyM')/fApplyDate" id="optApplyDate" format="format-dateTime('yyyy-MM-dd')" auto-size="true"/>  
      <xui:layout style="width:725px;height:48%;" type="excel" src="assetBuyApplyDetail.xls"> 
        <place control="vGrdBuyApply"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%;" type="flow"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabBuyApply" style="height:100%;width:100%;"> 
        <xui:tab id="tabDetail"> 
          <xui:label>详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <!--<xhtml:tr> 
              <xhtml:td height="35px" style="height:35px;"> 
                <xui:place control="toolbars" id="controlPlace2"/> 
              </xhtml:td> 
            </xhtml:tr>  
            --><xhtml:tr> 
              <xhtml:td> 
                <place control="vBuyApplyM" style="width:725px;height:48%;"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default1"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace1" style="width:743px;"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label>流程轨迹</xui:label>  
            <place control="processChart" style="height:100%;width:100%;"/> 
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar" style=";" data="dBuyApplyM"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem1"> 
          <xforms:trigger id="trgPrint" appearance="image" src="/UI/system/images/report/print_print.gif" dis-src="/UI/system/images/report/print_print_g.gif" style="width:26px;"> 
            <xforms:label id="xuiLabel1">打印</xforms:label>  
            <xforms:action id="action1" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript1">trgPrintClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="assetBuyApplyDetail.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:234px;left:36px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dRepairApply" concept="OA_AS_RepairApply" store-type="simple"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASRepairApplyAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="true" id="dRepairItem" concept="OA_AS_RepairItem"> 
      <reader id="default2" action="/OA/asset/logic/action/queryASRepairItemAction"/>  
      <master id="master1" data="dRepairApply" relation="fMasterID"/>  
      <calculate-relation relation="recItem" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="false" id="dFittingInfo" concept="OA_AS_FittingInfo"> 
      <reader id="default3" action="/OA/asset/logic/action/queryASFittingInfoAction"/>  
      <master id="master2" data="dRepairApply" relation="fMasterID"/>  
      <calculate-relation relation="recInfo" id="calculate-relation2"/> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" config-file="/OA/asset/process/assetRepairApply/processExecuteConfig.xml" data="dRepairApply"/>  
    <xui:view auto-load="true" id="vRepairApply"> 
      <xforms:output id="optApplyDeptName" ref="data('dRepairApply')/fApplyDeptName"/>  
      <xforms:output id="optApplyPsnName" ref="data('dRepairApply')/fApplyPsnName"/>  
      <xforms:output id="optNO" ref="data('dRepairApply')/fNO"/>  
      <xforms:output id="optApplyDate" ref="data('dRepairApply')/fApplyDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optName" ref="data('dRepairApply')/fName"/>  
      <xforms:output id="optRepairType" ref="data('dRepairApply')/fRepairType"/>  
      <xforms:output id="optRemainValue" ref="data('dRepairApply')/fRemainValue" format="format-number('0,000.00')"/>  
      <xforms:output id="optRepairAmount" ref="data('dRepairApply')/fRepairAmount" format="format-number('0,000.00')"/>  
      <xforms:output id="optUsedYear" ref="data('dRepairApply')/fUsedYear"/>  
      <xforms:output id="optReturnDate" ref="data('dRepairApply')/fReturnDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optRepairDate" ref="data('dRepairApply')/fRepairDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optServiceYear" ref="data('dRepairApply')/fServiceYear"/>  
      <xforms:output id="optSpecType" ref="data('dRepairApply')/fSpecType"/>  
      <xforms:output id="optKind" ref="data('dRepairApply')/fKind"/>  
      <xforms:output id="optCode" ref="data('dRepairApply')/fCode"/>  
      <xforms:textarea ref="data('dRepairApply')/fDescription" id="taDescription" auto-size="true"/>  
      <xforms:textarea ref="data('dRepairApply')/fRemark" id="taRemark" auto-size="true"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetRepairApplyDetail.xls"/> 
    </xui:view>  
    <xui:view auto-load="true" id="vSubRepairApply"> 
      <xui:view auto-load="true" id="vRepairItem"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdRepairItem" data="dRepairItem"> 
          <column id="gridColumn5" ref="recItem" type="ro" width="30" label="序号" show-index="true"/>  
          <column id="gridColumn1" ref="fItem" label="维修项目" type="ro" width="160"/>  
          <column id="gridColumn2" ref="fDescription" label="描述" type="ro" width="200"/>  
          <column id="gridColumn3" ref="fAmount" label="金额" type="ro" width="120" format="0,000.00" align="right"/>  
          <column id="gridColumn4" ref="fRemark" label="备注" type="ro" width="215"/> 
        </xhtml:div>  
        <layout style="height:100%" id="layout3"> 
          <place control="grdRepairItem" id="controlPlace6" style="width:100%;height:100%;"/> 
        </layout> 
      </xui:view>  
      <xui:view auto-load="true" id="vFittingInfo"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdFittingInfo" data="dFittingInfo"> 
          <column id="gridColumn12" ref="recInfo" type="ro" width="30" label="序号" show-index="true"/>  
          <column id="gridColumn6" ref="fName" label="名称" type="ro" width="200"/>  
          <column id="gridColumn7" ref="fUnit" label="单位" type="ro" width="50" align="center"/>  
          <column id="gridColumn8" ref="fNum" label="数量" type="ro" width="60" align="right"/>  
          <column id="gridColumn9" ref="fPrice" label="单价" type="ro" width="80" format="0,000.00" align="right"/>  
          <column id="gridColumn10" ref="fAmount" label="金额" type="ro" width="120" align="right" format="0,000.00"/>  
          <column id="gridColumn11" ref="fRemark" label="备注" type="ro" width="190"/> 
        </xhtml:div>  
        <layout style="height:100%" id="layout4"> 
          <place control="grdFittingInfo" id="controlPlace7" style="width:100%;height:100%;"/> 
        </layout> 
      </xui:view>  
      <layout style="height:230px;width:744px" id="layout2"> 
        <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
          <xui:tab id="tabRepairItem"> 
            <xui:label id="xuiLabel3">维修情况</xui:label>  
            <xhtml:table id="table2" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr id="default8"> 
                <xhtml:td id="td10"> 
                  <place control="vRepairItem" id="controlPlace4"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xui:tab>  
          <xui:tab id="tabFittingInfo"> 
            <xui:label id="xuiLabel4">配件信息</xui:label>  
            <xhtml:table id="table3" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr id="default11"> 
                <xhtml:td id="td15"> 
                  <place control="vFittingInfo" id="controlPlace5"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table>  
            <xforms:action id="action3" ev:event="xforms-select"> 
              <xforms:script id="xformsScript3">tabFittingInfoxforms_select(event)</xforms:script> 
            </xforms:action> 
          </xui:tab> 
        </xhtml:div> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default5"> 
              <xhtml:td id="td4"> 
                <place control="vRepairApply" id="controlPlace2"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default6"> 
              <xhtml:td id="td6"> 
                <place control="vSubRepairApply" id="controlPlace3"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default4"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace8" style="width:744px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
            <place control="processChart" id="controlPlace1" style="height:100%;width:100%;"/> 
          <xforms:action id="action1" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetRepairApplyDetail.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>

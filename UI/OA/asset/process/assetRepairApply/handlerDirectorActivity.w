<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:160px;left:147px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="true" id="dRepairApply" concept="OA_AS_RepairApply" store-type="simple" onValueChanged="dRepairApplyValueChanged"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASRepairApplyAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASRepairApplyAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASRepairApplyAction"/>  
      <rule id="dataBizRule1" relation="fDescription" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fRemark" readonly="true()"/>  
      <rule id="dataBizRule3" relation="fRepairDate" alert="'送修日期不能为空！'" required="true()" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
      <rule id="dataBizRule4" relation="fReturnDate" alert="'返回日期不能为空！'" required="true()" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
      <rule id="dataBizRule5" relation="fRepairAmount" alert="'维修金额不能为空！'" required="true()" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="true" id="dRepairItem" concept="OA_AS_RepairItem" onValueChanged="dRepairItemValueChanged" onAfterDelete="dRepairItemAfterDelete"> 
      <reader id="default4" action="/OA/asset/logic/action/queryASRepairItemAction"/>  
      <writer id="default5" action="/OA/asset/logic/action/saveASRepairItemAction"/>  
      <creator id="default6" action="/OA/asset/logic/action/createASRepairItemAction"/>  
      <master id="master1" data="dRepairApply" relation="fMasterID"/>  
      <calculate-relation relation="recItem" id="calculate-relation1"/>  
      <rule id="dataBizRule6" relation="fItem" alert="'维修项目不能为空！'" required="true()"/>  
      <rule id="dataBizRule7" relation="fAmount" alert="'金额不能为空！'" required="true()"/>  
      <rule id="dataBizRule12" concept="OA_AS_RepairItem" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="true" id="dFittingInfo" concept="OA_AS_FittingInfo" onValueChanged="dFittingInfoValueChanged" onAfterDelete="dFittingInfoAfterDelete"> 
      <reader id="default7" action="/OA/asset/logic/action/queryASFittingInfoAction"/>  
      <writer id="default8" action="/OA/asset/logic/action/saveASFittingInfoAction"/>  
      <creator id="default9" action="/OA/asset/logic/action/createASFittingInfoAction"/>  
      <master id="master2" data="dRepairApply" relation="fMasterID"/>  
      <calculate-relation relation="recInfo" id="calculate-relation2"/>  
      <rule id="dataBizRule8" relation="fName" alert="'名称不能为空！'" required="true()"/>  
      <rule id="dataBizRule9" relation="fNum" alert="'数量必须大于0！'" constraint="data('dFittingInfo')/fNum &gt;0"/>  
      <rule id="dataBizRule10" relation="fAmount" alert="'金额不能为空！'" required="true()"/>  
      <rule id="dataBizRule11" relation="fPrice" alert="'单价必须大于0！'" constraint="data('dFittingInfo')/fPrice&gt;0"/>  
      <rule id="dataBizRule13" concept="OA_AS_FittingInfo" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dUnit" concept="OA_AS_Unit" order-by="fCode:asc"> 
      <reader id="default23" action="/OA/asset/logic/action/queryASUnitAction"/>  
      <filter name="unitStatusFilter" id="filter1">OA_AS_Unit.fUseStatus='1'</filter> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrRepairApply"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar" data="dRepairApply" process-engine="assetRepairApplyProcess" executeConcept="OA_AS_RepairExecute"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="assetRepairApplyProcess" data="dRepairApply"/>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dRepairApply"/>  
    <xui:view auto-load="true" id="vRepairApply"> 
      <xforms:output id="optApplyDeptName" ref="data('dRepairApply')/fApplyDeptName"/>  
      <xforms:output id="optApplyPsnName" ref="data('dRepairApply')/fApplyPsnName"/>  
      <xforms:output id="optNO" ref="data('dRepairApply')/fNO"/>  
      <xforms:output id="optApplyDate" ref="data('dRepairApply')/fApplyDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optName" ref="data('dRepairApply')/fName"/>  
      <xforms:output id="optRepairType" ref="data('dRepairApply')/fRepairType"/>  
      <xforms:output id="optRemainValue" ref="data('dRepairApply')/fRemainValue" format="format-number('0,000.00')"/>  
      <xforms:input id="iptRepairAmount" ref="data('dRepairApply')/fRepairAmount" format="format-number('0,000.00')"/>  
      <xforms:output id="optKind" ref="data('dRepairApply')/fKind"/>  
      <xforms:output id="optUsedYear" ref="data('dRepairApply')/fUsedYear"/>  
      <xforms:input id="iptReturnDate" ref="data('dRepairApply')/fReturnDate" format="yyyy-MM-dd"/>  
      <xforms:output id="optCode" ref="data('dRepairApply')/fCode"/>  
      <xforms:output id="optSpecType" ref="data('dRepairApply')/fSpecType"/>  
      <xforms:output id="optServiceYear" ref="data('dRepairApply')/fServiceYear"/>  
      <xforms:textarea ref="data('dRepairApply')/fDescription" id="taDescription"/>  
      <xforms:textarea ref="data('dRepairApply')/fRemark" id="taRemark"/>  
      <xforms:input id="iptRepairDate" ref="data('dRepairApply')/fRepairDate" format="yyyy-MM-dd"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetRepairHandler.xls"/> 
    </xui:view>  
    <xui:view auto-load="true" id="vSubRepairApply"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrRepairItem"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarRepairItem" data="dRepairItem"> 
          <item name="insert-item" id="barItem1" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
          <item name="save-item" id="barItem2" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
          <item name="delete-item" id="barItem3" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
        </xui:bar> 
      </xhtml:div>  
      <xui:view auto-load="true" id="vRepairItem"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdRepairItem" data="dRepairItem"> 
          <column id="gridColumn1" ref="recItem" type="ro" width="30" label="序号" show-index="true"/>  
          <column id="gridColumn2" ref="fItem" label="维修项目" type="ed" width="160"/>  
          <column id="gridColumn3" ref="fDescription" label="描述" type="ed" width="200"/>  
          <column id="gridColumn4" ref="fAmount" label="金额" type="ed" width="120" align="right" format="0,000.00"/>  
          <column id="gridColumn5" ref="fRemark" label="备注" type="txt" width="220"/> 
        </xhtml:div>  
        <layout style="height:100%" id="layout2"> 
          <place control="grdRepairItem" id="controlPlace6" style="width:100%;height:100%;"/> 
        </layout> 
      </xui:view>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrFittingInfo"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarFittingInfo" data="dFittingInfo"> 
          <item name="insert-item" id="barItem12" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
          <item name="save-item" id="barItem4" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
          <item name="delete-item" id="barItem14" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
        </xui:bar> 
      </xhtml:div>  
      <xui:view auto-load="true" id="vFittingInfo"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdFittingInfo" data="dFittingInfo"> 
          <column id="gridColumn6" ref="recInfo" type="ro" width="30" label="序号" show-index="true"/>  
          <column id="gridColumn7" ref="fName" label="名称" type="ed" width="200"/>  
          <column id="gridColumn8" ref="fUnit" label="单位" type="select" width="50" editor="grdSltUnit" align="center"/>  
          <column id="gridColumn9" ref="fNum" label="数量" type="ed" width="60" align="right"/>  
          <column id="gridColumn10" ref="fPrice" label="单价" type="ed" width="80" align="right" format="format-number('0,000.00')"/>  
          <column id="gridColumn11" ref="fAmount" label="金额" type="ed" width="120" align="right" format="0,000.00"/>  
          <column id="gridColumn12" ref="fRemark" label="备注" type="txt" width="190"/> 
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltUnit" ref="data('dFittingInfo')/fUnitID" label-ref="data('dFittingInfo')/fUnit" dropdown-height="100"> 
          <xforms:label ref="fName" id="xuiLabel5"/>  
          <xforms:value ref="OA_AS_Unit" id="default17"/>  
          <xforms:itemset id="default18" data="dUnit" auto-load-data="true"> 
            <xforms:column ref="OA_AS_Unit" visible="false" id="default21"/>  
            <xforms:column ref="fName" id="default22"/> 
          </xforms:itemset> 
        </xhtml:div>  
        <layout style="height:100%" id="layout3"> 
          <place control="grdFittingInfo" id="controlPlace9" style="width:100%;height:100%;"/>  
          <place control="grdSltUnit" id="controlPlace10" style="width:140px;"/> 
        </layout> 
      </xui:view>  
      <layout style="width:750px;height:200px" id="layout4"> 
        <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanelSub" style="width:100%;height:100%;"> 
          <xui:tab id="tabRepairItem"> 
            <xui:label id="xuiLabel3">维修情况</xui:label>  
            <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr id="default13"> 
                <xhtml:td id="td3" style="height:35px"> 
                  <place control="tbrRepairItem" id="controlPlace4"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr id="default14"> 
                <xhtml:td id="td7"> 
                  <place control="vRepairItem" id="controlPlace5" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xui:tab>  
          <xui:tab id="tabFittingInfo"> 
            <xui:label id="xuiLabel4">配件信息</xui:label>  
            <xhtml:table id="table2" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr id="default15"> 
                <xhtml:td id="td9" style="height:35px"> 
                  <place control="tbrFittingInfo" id="controlPlace7"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr id="default16"> 
                <xhtml:td id="td11"> 
                  <place control="vFittingInfo" id="controlPlace8" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xui:tab> 
        </xhtml:div> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel1">详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr id="default10"> 
              <xhtml:td id="td2" style="height:35px"> 
                <place control="tbrRepairApply" id="controlPlace1"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default12"> 
              <xhtml:td id="td6"> 
                <place control="vRepairApply" id="controlPlace3"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default11"> 
              <xhtml:td id="td4" style="height:220px"> 
                <place control="vSubRepairApply" id="controlPlace12"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default19"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace13" style="width:750px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <place control="assetRepairApplyProcess" id="controlPlace2" style="width:24px;top:10px;left:167px;"/> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label id="xuiLabel2">流程轨迹</xui:label>  
            <place control="processChart" id="controlPlace11" style="height:100%;width:100%;"/> 
          <xforms:action id="action1" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="handlerDirectorActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

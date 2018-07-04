<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:486px;height:auto;left:564px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="DataMeetBugdetApply" concept="OA_MT_BudgetApply" auto-new="true"
      limit="1" store-type="simple"> 
      <creator id="default1" action="/OA/meeting/logic/action/createOA_MT_BudgetApplyAction"/>  
      <reader id="default2" action="/OA/meeting/logic/action/queryOA_MT_BudgetApplyAction"/>  
      <writer id="default3" action="/OA/meeting/logic/action/saveOA_MT_BudgetApplyAction"/>  
      <rule id="dataBizRule1" relation="fMeetName" required="true()" alert="'会议名称不能为空！'"/>  
      <rule id="dataBizRule2" relation="fMeetTime" required="true()" alert="'会议时间不能为空！'"/>  
      <rule id="dataBizRule3" relation="fMeetPalce" required="true()" alert="'会议地点不能为空！'"/>  
      <rule id="dataBizRule4" relation="fMeetDayCount" required="true()" alert="'会议天数不能为空！'"/>  
      <rule id="dataBizRule5" relation="fMeetPartnerNum" required="true()" alert="'会议人数不能为空！'"/>  
      <rule id="dataBizRule6" relation="fApplyDate" required="true()" alert="'申请时间不能为空！'"/>  
      <calculate-relation relation="ch1" id="calculate-relation1"/>  
      <calculate-relation relation="ch2" id="calculate-relation2"/>  
      <calculate-relation relation="ch12" id="calculate-relation3"/>  
      <calculate-relation relation="ch34" id="calculate-relation4"/>  
      <calculate-relation relation="chA" id="calculate-relation6"/>  
      <rule id="dataBizRule7" relation="ch1" calculate="data('DataMeetBugdetApply')/fMeetDayCount"/>  
      <rule id="dataBizRule8" relation="ch2" calculate="data('DataMeetBugdetApply')/fMeetPartnerNum"/>  
      <rule id="dataBizRule9" relation="ch12" calculate="data('DataMeetBugdetApply')/fMeetDayCount * data('DataMeetBugdetApply')/fMeetPartnerNum * data('DataMeetBugdetApply')/fRentHouseCostStand"/>  
      <rule id="dataBizRule11" relation="ch34" calculate="data('DataMeetBugdetApply')/fMeetDayCount * data('DataMeetBugdetApply')/fMeetPartnerNum * data('DataMeetBugdetApply')/fEatCostStadard"/>  
      <rule id="dataBizRule12" relation="chA" calculate="data('DataMeetBugdetApply')/ch12+data('DataMeetBugdetApply')/ch34+data('DataMeetBugdetApply')/fOtherCost+data('DataMeetBugdetApply')/fConsultCost"/>  
      <rule id="dataBizRule10" concept="OA_MT_BudgetApply" readonly="contains('bizActivity2,bizActivity3,bizActivity4',call('justep.Context.getCurrentActivity'))"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout id="layout1"> 
      <xui:place control="process1" id="controlPlace5"/>  
      <xhtml:table id="table1" align="center" class="xui-container" > 
        <xhtml:tr id="tr3"> 
          <xhtml:td id="td6" style="height:23px;"> 
            <xui:place control="toolbars4" id="controlPlace4"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr1"> 
          <xhtml:td id="td2"> 
            <xui:place control="vDetail" id="controlPlace9" style="height:100%;width:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr2"> 
          <xhtml:td id="td4"> 
            <xui:place control="standardProcessExecuteList1" id="controlPlace3" style="width:735px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars4"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar"
        id="standardProcessBar1" flowTrack-visibled="true" process-engine="process1"
        data="DataMeetBugdetApply"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="process1"
      data="DataMeetBugdetApply"/>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" type="cell.excel" style="position:relative;height:100%;width:100%;" src="mainActivity.xls"/>  
      <xforms:input id="iptfApplyDate" class="xui-autofill" ref="data('DataMeetBugdetApply')/fApplyDate"
        format="yyyy年MM月dd日"/>  
      <xforms:input id="iptfMeetName" class="xui-autofill" ref="data('DataMeetBugdetApply')/fMeetName"/>  
      <xforms:input id="iptfMeetTime" class="xui-autofill" ref="data('DataMeetBugdetApply')/fMeetTime"
        format="yyyy-MM-dd hh:mm"/>  
      <xforms:input id="iptfMeetPalce" class="xui-autofill" ref="data('DataMeetBugdetApply')/fMeetPalce"/>  
      <xforms:input id="iptfMeetReport" class="xui-autofill" ref="data('DataMeetBugdetApply')/fMeetReport"/>  
      <xforms:input id="fMeetType" class="xui-autofill" ref="data('DataMeetBugdetApply')/fMeetType"/>  
      <xforms:input id="iptfMeetDayCount" class="xui-autofill" ref="data('DataMeetBugdetApply')/fMeetDayCount"/>  
      <xforms:input id="iptfMeetPartnerNum" class="xui-autofill" ref="data('DataMeetBugdetApply')/fMeetPartnerNum"/>  
      <xforms:input id="iptfRentHouseCostStand" class="xui-autofill" ref="data('DataMeetBugdetApply')/fRentHouseCostStand"/>  
      <xforms:input id="iptfEatCostStadard" class="xui-autofill" ref="data('DataMeetBugdetApply')/fEatCostStadard"/>  
      <xforms:input id="iptfOtherCost" class="xui-autofill" ref="data('DataMeetBugdetApply')/fOtherCost"/>  
      <xforms:input id="iptfConsultCost" class="xui-autofill" ref="data('DataMeetBugdetApply')/fConsultCost"/>  
      <xforms:input id="iptfAccountName" class="xui-autofill" ref="data('DataMeetBugdetApply')/fAccountName"/>  
      <xforms:input id="iptfCostSource" class="xui-autofill" ref="data('DataMeetBugdetApply')/fCostSource"/>  
      <xforms:output id="iptch1" class="xui-autofill" ref="data('DataMeetBugdetApply')/ch1"/>  
      <xforms:output id="iptch2" class="xui-autofill" ref="data('DataMeetBugdetApply')/ch1"/>  
      <xforms:output id="iptch3" class="xui-autofill" ref="data('DataMeetBugdetApply')/ch2"/>  
      <xforms:output id="iptch4" class="xui-autofill" ref="data('DataMeetBugdetApply')/ch2"/>  
      <xforms:output id="iptch12" class="xui-autofill" ref="data('DataMeetBugdetApply')/ch12" format="0,000.00"/>  
      <xforms:output id="iptch34" class="xui-autofill" ref="data('DataMeetBugdetApply')/ch34" format="0,000.00"/>  
      <xforms:output id="iptchA" class="xui-autofill" ref="data('DataMeetBugdetApply')/chA" format="0,000.00"/> 
    </xui:view>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList"
      panel-title="处理列表" status="collapsed" min-height="165" id="standardProcessExecuteList1"
      data="DataMeetBugdetApply"/> 
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>

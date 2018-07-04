<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:145px;left:71px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dRepairRecord" concept="OA_AS_RepairApply" order-by="fCreateTime:desc"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASRepairApplyAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <rule id="dataBizRule1" relation="fRemark" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fRepairDate" readonly="true()"/>  
      <rule id="dataBizRule3" relation="fReturnDate" readonly="true()"/>  
      <filter name="statusFilter" id="filter1">OA_AS_RepairApply.fBizState='bsFinished'</filter> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrRepairRecord"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarRepairRecord" data="dRepairRecord"> 
        <item name="refresh-item" id="barItem1"/>  
        <item name="custom-page-item" id="barItem11"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vRepairRecord"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdRepairRecord" data="dRepairRecord"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fNO" label="维修单号" type="ro" width="120"/>  
        <column id="gridColumn3" ref="fRepairDate" label="送修日期" type="date" width="80"/>  
        <column id="gridColumn4" ref="fReturnDate" label="归还日期" type="dateTime" width="80"/>  
        <column id="gridColumn5" ref="fRepairAmount" label="维修金额" type="ro" width="100" align="right" format="0,000.00"/>  
        <column id="gridColumn6" ref="fRemark" label="备注" type="txt" width="128"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdRepairRecord" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default2"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrRepairRecord" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default3"> 
          <xhtml:td id="td4"> 
            <place control="vRepairRecord" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetRepairRecord.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>

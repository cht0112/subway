<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:111px;left:61px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dUseRecord" concept="OA_AS_UseRecord" order-by="fBeginDate:asc"> 
      <reader id="default2" action="/OA/asset/logic/action/queryASUseRecordAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <rule id="dataBizRule1" relation="fBeginDate" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fEndDate" readonly="true()"/>  
      <rule id="dataBizRule3" relation="fRemark" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vUseRecord"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdUseRecord" data="dUseRecord"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fDutyDeptName" label="责任部门" type="ro" width="120"/>  
        <column id="gridColumn3" ref="fDutyPsnName" label="责任人" type="ro" width="70"/>  
        <column id="gridColumn4" ref="fBeginDate" label="开始日期" type="date" width="80"/>  
        <column id="gridColumn5" ref="fEndDate" label="结束日期" type="date" width="80"/>  
        <column id="gridColumn6" ref="fRemark" label="备注" type="txt" width="158"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdUseRecord" id="controlPlace2" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrUseRecord"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarUseRecord" data="dUseRecord"> 
        <item name="refresh-item" id="barItem1"/>  
        <item name="custom-page-item" id="barItem11"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default3"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrUseRecord" id="controlPlace3"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default1"> 
          <xhtml:td id="td1"> 
            <place control="vUseRecord" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetUseRecord.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>

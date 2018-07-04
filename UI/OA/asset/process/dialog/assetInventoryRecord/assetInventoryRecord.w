<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:79px;left:8px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dInventoryRecord" concept="OA_AS_InventoryD"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASInventoryRecordAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <rule id="dataBizRule2" relation="fDescription" readonly="true()"/>  
      <rule id="dataBizRule3" relation="fRemark" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrInventoryRecord"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarInventoryRecord" data="dInventoryRecord"> 
        <item name="refresh-item" id="barItem1"/>  
        <item name="custom-page-item" id="barItem11"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vInventoryRecord"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdInventoryRecord" data="dInventoryRecord"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fInventoryNO" label="清查单号" type="ro" width="120"/>  
        <column id="gridColumn3" ref="fDeptName" label="清查部门" type="ro" width="100"/>  
        <column id="gridColumn4" ref="fPersonName" label="清查人" type="ro" width="70"/>  
        <column id="gridColumn5" ref="fDate" label="清查日期" type="date" width="80" readonly="true"/>  
        <column id="gridColumn6" ref="fDescription" label="描述" type="txt" width="100"/>  
        <column id="gridColumn7" ref="fRemark" label="备注" type="txt" width="108"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdInventoryRecord" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default2"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrInventoryRecord" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default3"> 
          <xhtml:td id="td4"> 
            <place control="vInventoryRecord" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetInventoryRecord.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:97px;left:136px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dInventory" concept="OA_AS_InventoryD" auto-new="false" order-by="fInventoryNO:desc"> 
      <reader id="default2" action="/OA/asset/logic/action/queryASInventoryRecordAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="assetID" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default10">  
        <row id="default11"> 
          <cell id="default12"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vTbr"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrInventory"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarInventory" data="dInventory"> 
          <item id="barItem12"> 
            <xforms:trigger id="trgInsert" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif" appearance="image"> 
              <xforms:label id="xuiLabel1">清查</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action2"> 
                <xforms:script id="xformsScript2">trgInsertDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="separator" id="separatorItem2"/>  
          <item name="custom-page-item" id="barItem11" page-count="5"/>  
          <item name="separator" id="separatorItem1"/>  
          <item id="barItem1"> 
            <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" style="width:160px;" id="smartFilter1" filter-data="dInventory" filter-relations="fInventoryNO,fDeptName,fPersonName,fDescription,fRemark"/> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="tbrInventory" id="controlPlace1"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vInventory"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdInventory" data="dInventory"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fInventoryNO" label="清查单号" type="html" width="120" onRender="grdInventory_fInventoryNORender"/>  
        <column id="gridColumn3" ref="fDeptName" label="清查部门" type="ro" width="90"/>  
        <column id="gridColumn4" ref="fPersonName" label="清查人" type="ro" width="70"/>  
        <column id="gridColumn5" ref="fDate" label="清查日期" type="date" width="70" readonly="true"/>  
        <column id="gridColumn6" ref="fDescription" label="情况摘要" type="ro" width="160"/>  
        <column id="gridColumn7" ref="fRemark" label="备注" type="ro" width="148"/> 
      </xhtml:div>  
      <layout style="height:100%;" id="layout2"> 
        <place control="grdInventory" id="controlPlace4" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="添加清查记录" width="400px" height="300px" modal="true" id="wDlgInsertInventory" onSend="wDlgInsertInventorySend" url="/OA/asset/process/dialog/insertInventory/insertInventory.w" onReceive="wDlgInsertInventoryReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="修改清查记录" width="400px" height="300px" modal="true" id="wDlgUpdateInventory" url="/OA/asset/process/dialog/insertInventory/insertInventory.w" onSend="wDlgUpdateInventorySend" onReceive="wDlgUpdateInventoryReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default1"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="vTbr" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td4"> 
            <place control="vInventory" id="controlPlace3"/>  
            <place control="wDlgInsertInventory" id="controlPlace5" style="top:73px;left:286px;"/>  
            <place control="wDlgUpdateInventory" id="controlPlace6" style="top:85px;left:341px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="inventoryRecord.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="mdDefault" style="height:auto;top:86px;left:635px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_Client" direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="grid" update-mode="whereVersion"> 
      <reader action="/system/logic/action/querySA_ClientAction" id="default1"/>  
      <writer action="/system/logic/action/saveSA_ClientAction" id="default2"/>  
      <creator action="/system/logic/action/createSA_ClientAction" id="default3"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_ClientApp" confirm-delete="false" id="dataDetail" limit="20" offset="0" update-mode="whereVersion"> 
      <reader action="/system/logic/action/querySA_ClientAppAction" id="default4"/>  
      <writer action="/system/logic/action/saveSA_ClientAppAction" id="default5"/>  
      <creator action="/system/logic/action/createSA_ClientAppAction" id="default6"/>  
      <master data="dataMaster" id="master1" relation="sClientID"/> 
    <rule id="dataBizRule1" relation="sRentStartTime" required="true()"></rule>
  <rule id="dataBizRule2" relation="sRentDays" required="true()"></rule>
  <rule id="dataBizRule3" relation="sRentNumber" required="true()"></rule>
  <rule id="dataBizRule4" relation="sValidState" required="true()"></rule></data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu" id="bizDataFilterMenu1" data="dataMaster"/>  
    <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster" header-row-height="30" id="grdMaster" row-height="30" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default13" label="名称" ref="sName" type="ed" width="100px"/>  
      <column id="default15" label="长名称" ref="sLongName" type="ed" width="100px"/>  
      <column id="default16" label="编码" ref="sCode" type="ed" width="100px"/>  
      <column id="default17" label="负责人" ref="sContact" type="ed" width="100px"/>  
      <column id="default18" label="电话" ref="sPhone" type="ch" width="100px"/>  
      <column id="default19" label="职员数" ref="sEmployeesSize" type="ed" width="100px"/> 
    </xhtml:div>  
    <xhtml:div class="grid-compact" component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail" header-row-height="30" id="grdDetail" row-height="30"> 
      <column id="default20" label="应用名称" ref="sAppName" type="ro" width="100px"/>  
      <column id="default27" label="应用模块" ref="sAppModel" type="ro" width="100px"/>  
      <column id="default21" label="应用版本" ref="sAppVersion" type="ro" width="100px"/>  
      <column id="default22" label="供应商名称" ref="sVendorName" type="ro" width="100px"/>  
      <column id="default23" label="租用开始时间" ref="sRentStartTime" type="dateTime" width="100px"/>  
      <column id="default24" label="租用结束时间" ref="sRentEndTime" type="ed" width="100px"/>  
      <column id="default25" label="租用人数" ref="sRentNumber" type="ed" width="100px"/>  
      <column id="default26" label="可用状态" ref="sValidState" type="ed" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" dialogUpdate="true" height="364px" id="windowDialog1" modal="true" title="" url="/SA/client/mainActivityDialog.w" width="596px"> 
      <result concept="dataDetail" id="default28" operation="new" origin="main"> 
        <mapping from="sName" id="default29" to="sAppName"/>  
        <mapping from="rowid" id="default30" to="sAppID"/>  
        <mapping from="sModel" id="default31" to="sAppModel"/>  
        <mapping from="sAppVersion" id="default32" to="sAppVersion"/>  
        <mapping from="sVendorName" id="default33" to="sVendorName"/>  
        <mapping from="sVendorID" id="default34" to="sVendorID"/> 
      </result> 
    </xhtml:div>  
    <xforms:trigger appearance="image-text" class="button-blue" component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" operation="new" operation-owner="dataMaster"> 
      <xforms:label id="default8"><![CDATA[新建租户]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-floppy" id="trigger1" operation="save" operation-owner="dataMaster"> 
      <xforms:label id="default7"/> 
    </xforms:trigger>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-refresh" id="trigger3" operation="refresh" operation-owner="dataMaster"> 
      <xforms:label id="default9"/> 
    </xforms:trigger>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-trash" id="trigger4" operation="delete" operation-owner="dataMaster"> 
      <xforms:label id="default10"/> 
    </xforms:trigger>  
    <xhtml:div align="right" component="/UI/system/components/pagination.xbl.xml#pagination" data="dataMaster" first-label="首页" id="pagination2" items="first last pre next" last-label="尾页" next-label="下页" page-count="15" pre-label="上页"/>  
    <xforms:trigger appearance="image-text" class="button-blue" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-plus" id="trigger8"> 
      <xforms:label id="default12"><![CDATA[添加应用]]></xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript1"> <![CDATA[mainActivity.insertTriggerClick(event)]]> </xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-trash" id="trigger6" operation="delete" operation-owner="dataDetail"> 
      <xforms:label id="default14"/> 
    </xforms:trigger>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowDialog1" id="controlPlace3" style="top:166px;left:328px;"/>  
      <xhtml:div class="xui-splitter" component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="60%" has-arrow-button="true" id="VSplitter1" mode="vert" style="width:100%;height:100%;"> 
        <xhtml:div id="div1" region="top"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <xhtml:div collapsed-label="隐藏过滤" component="/UI/system/components/buttonBar.xbl.xml#buttonBar" expandable="false" expanded="true" expanded-label="展开过滤" expanded-position="6" expanded-width="75" id="ngtbMaster1" separator="false" separator-size="1"> 
                <xui:place control="trigger2" id="controlPlace8" style="width:78px;"/>  
                <xui:place control="trigger1" id="controlPlace7"/>  
                <xui:place control="trigger4" id="controlPlace9"/>  
                <xui:place control="trigger3" id="controlPlace7"/>  
                <xui:place control="queryTrigger" id="controlPlace4"/>  
                <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMaster" filter-relations="sName,sLongName,sCode" id="smartFilter1" style="width:120px;"></xhtml:div>  
                <xforms:trigger appearance="image" class="button-yellow" component="/UI/system/components/trigger.xbl.xml#trigger" icon-class="icon-system-search" id="searchTrigger" operation="refresh" operation-owner="dataMaster" style="width:30px;">  
                  <xforms:label id="searchTriggerLabel"></xforms:label> 
                </xforms:trigger> 
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="bizDataFilterMenu1" id="controlPlace1" style="top:8px;left:615px;"/>  
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center>  
            <bottom id="borderLayout-bottom1" size="45px"> 
              <xui:place control="pagination2" id="controlPlace10"/> 
            </bottom> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div id="div2" region="bottom"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <xhtml:div collapsed-label="隐藏过滤" component="/UI/system/components/buttonBar.xbl.xml#buttonBar" expandable="false" expanded="false" expanded-label="展开过滤" expanded-position="5" expanded-width="75" id="ngtbDetail" separator="false" separator-size="2"> 
                <xui:place control="trigger8" id="controlPlace11" style="width:82px;"/>  
                <xui:place control="trigger6" id="controlPlace14"/> 
              </xhtml:div> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="grdDetail" id="controlPlace6" style="width:100%;height:200px;"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:trigger appearance="image-minimal" component="/UI/system/components/trigger.xbl.xml#trigger" id="queryTrigger" operation="show" operation-owner="bizDataFilterMenu1"> 
      <xforms:label id="default11"/> 
    </xforms:trigger> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </resource> 
</xui:window>

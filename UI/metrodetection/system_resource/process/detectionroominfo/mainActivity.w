<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:407px;height:auto;left:182px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_ROOM_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" store-type="grid"> 
      <reader action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction" id="default5"/> 
    <rule id="dataBizRule3" relation="rOOMTYPE" alert="'不能为空'" required="true()"></rule>
  <rule id="dataBizRule4" relation="rOOMCNAME" required="true()" alert="'不能为空'"></rule></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData1" concept="ROOM_TYPE_CODE"><creator id="default6"></creator>
  <reader id="default7" action="/metrodetection/system_code/logic/action/queryROOM_TYPE_CODEAction"></reader>
  <writer id="default8"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1"> 
        <item> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif" id="insertTrigger" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif" style="border:none" title="新建"/> 
        </item>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1" name="separator"/>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMain" id="excelExport1"/> 
        </item>  
        <item id="barItem7" name="separator"/>  
        <item id="barItem8"> 
          <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml" id="printHtml1" is-preview="true" label="打印" target-id="grdMain"/> 
        </item>  
        <item id="barItem9"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="rOOMTYPE,rOOMCNAME,rOOMENAME,mEMO" id="smartFilter1"/> 
        </item>  
        <item id="barItem10"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();" src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <xui:column id="gridColumn1" ref="rOOMTYPE" label="房间类型" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn2" ref="rOOMCNAME" label="房间中文名称" type="ed" width="113px"></xui:column>
  <xui:column id="gridColumn3" ref="rOOMENAME" label="房间英文名称" type="ed" width="109px"></xui:column>
  <xui:column id="gridColumn4" ref="iMAGE" label="房间位置图" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn5" ref="mEMO" label="备注" type="ed" width="94px"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2"> 
        <item id="barItem12" name="insert-item"/>  
        <item id="barItem13" name="save-item"/>  
        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;position:relative;" type="absolute"> 
        <!-- <place control-label="iptROOMID" id="default10" style="font-size:10pt;position: absolute;left:30px;top:38px"/>  
        <place control="iptROOMID" id="default11" style="font-size:10pt;position: absolute;left:130px;top:30px;width:150px;"/>   -->
        <place control-label="gridSelect1" id="default12" style="font-size:10pt;position: absolute;width:95px;height:25px;left:361px;top:37px;"/>  
        <place control-label="iptROOMCNAME" id="default14" style="font-size:10pt;position: absolute;width:95px;height:25px;left:30px;top:90px;"/>  
        <place control="iptROOMCNAME" id="default15" style="font-size:10pt;position: absolute;width:150px;top:87px;height:26px;left:116px;"/>  
        <place control-label="iptROOMENAME" id="default16" style="font-size:10pt;position: absolute;width:95px;height:25px;left:361px;top:90px;"/>  
        <place control="iptROOMENAME" id="default17" style="font-size:10pt;position: absolute;height:26px;width:156px;left:484px;top:87px;"/>  
        <place control-label="iptIMAGE" id="default18" style="font-size:10pt;position: absolute;width:95px;height:25px;left:30px;top:145px;"/>  
        <place control="iptIMAGE" id="default19" style="font-size:10pt;position: absolute;height:26px;width:156px;left:116px;top:141px;"/>  
        <place control-label="iptMEMO" id="default20" style="font-size:10pt;position: absolute;width:95px;height:25px;left:361px;top:145px;"/>  
        <place control="iptMEMO" id="default21" style="font-size:10pt;position: absolute;height:26px;width:156px;left:484px;top:141px;"/> 
      <xui:place control-label="input1" id="controlLabel1" style="position:absolute;top:37px;left:30px;height:25px;width:95px;" label="房间编号"></xui:place><xui:place control="input1" id="controlPlace3" style="position:absolute;top:33px;height:26px;left:116px;width:150px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace6" style="position:absolute;top:37px;left:484px;height:26px;width:150px;"></xui:place></layout>  
      <!-- xforms:input id="iptROOMID" ref="data('dataMain')/rOOMID"/ -->  
      <xforms:input id="iptROOMCNAME" ref="data('dataMain')/rOOMCNAME"/>  
      <xforms:input id="iptROOMENAME" ref="data('dataMain')/rOOMENAME"/>  
      <xforms:input id="iptIMAGE" ref="data('dataMain')/iMAGE"/>  
      <xforms:input id="iptMEMO" ref="data('dataMain')/mEMO"/> 
    <xforms:input id="input1" ref="data('dataMain')/rowid"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/rOOMTYPE" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="rOOMTYPECNAME" id="xuiLabel3"></xforms:label>
   <xforms:value ref="ROOM_TYPE_CODE" id="default1"></xforms:value>
   <xforms:itemset id="default2" data="bizData1" auto-load-data="true">
  <xforms:column ref="rOOMTYPECNAME" id="default13"></xforms:column>
  <xforms:column ref="ROOM_TYPE_CODE" visible="false" id="default22"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="32px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="32px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

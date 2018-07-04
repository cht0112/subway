<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:396px;height:auto;left:190px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_APPLY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFOAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction" id="default5"/> 
    <rule id="dataBizRule1" relation="rOOMID" alert="'该选项不能为空'" required="true()"></rule>
  <rule id="dataBizRule2" relation="rOOMAREA" alert="'该选项不能为空'" required="true()"></rule>
  <rule id="dataBizRule3" relation="aPPLYFOROBJECT" alert="'该选项不能为空'" required="true()"></rule>
  <rule id="dataBizRule4" relation="aPPLYFORDEVICETYPE" alert="'该选项不能为空'" required="true()"></rule>
  <rule id="dataBizRule5" relation="aPPLYFORRANGE" alert="'该选项不能为空'" required="true()"></rule></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="bizData1" concept="DETECTION_OBJECT_TYPE"><creator id="default23"></creator>
  <reader id="default24" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default25"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData2" concept="DEVICE_TYPE_CODE"><creator id="default35"></creator>
  <reader id="default36" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default37"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData3" concept="DETECTION_RANGE_TYPE"><creator id="default57"></creator>
  <reader id="default58" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"></reader>
  <writer id="default59"></writer></data></xforms:model>  
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
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="rOOMID,rOOMAREA,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE" id="smartFilter1"/> 
        </item>  
        <item id="barItem10"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();" src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="房间编号" ref="rOOMID" type="ro" width="100px"/>  
      <column id="default2" label="区域" ref="rOOMAREA" type="ro" width="100px"/>  
      <column id="default6" label="应用检测对象类型" ref="aPPLYFOROBJECT" type="ro" width="100px"/>  
      <column id="default7" label="应用检测对象" ref="aPPLYFORDEVICETYPE" type="ro" width="100px"/>  
      <column id="default8" label="应用检测方面类型" ref="aPPLYFORRANGE" type="ro" width="100px"/>  
      <column id="default9" label="区域位置图" ref="iMAGE" type="ro" width="100px"/> 
    </xhtml:div>  
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
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <place control-label="iptROOMID" id="default10" style="font-size:10pt;position: absolute;width:95px;top:33px;height:21px;left:31px;"/>  
        <place control="iptROOMID" id="default11" style="font-size:10pt;position: absolute;width:170px;top:63px;height:27px;left:31px;"/>  
        <place control-label="iptROOMAREA" id="default12" style="font-size:10pt;position: absolute;width:137px;top:33px;height:21px;left:340px;"/>  
        <place control="iptROOMAREA" id="default13" style="font-size:10pt;position: absolute;width:170px;height:27px;left:339px;top:63px;"/>  
        <place control-label="gridSelect1" id="default14" style="font-size:10pt;position: absolute;width:160px;height:21px;left:31px;top:123px;"/>  
        <place control-label="gridSelect3" id="default16" style="font-size:10pt;position: absolute;width:227px;height:21px;left:340px;top:123px;"/>  
        <place control-label="gridSelect4" id="default18" style="font-size:10pt;position: absolute;width:192px;height:21px;left:31px;top:203px;"/>  
        <place control-label="iptIMAGE" id="default20" style="font-size:10pt;position: absolute;width:95px;height:21px;left:340px;top:203px;"/>  
        <place control="iptIMAGE" id="default21" style="font-size:10pt;position: absolute;width:170px;height:27px;left:339px;top:241px;"/> 
      <xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;width:170px;top:160px;height:27px;left:31px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;width:170px;height:27px;left:339px;top:160px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace8" style="position:absolute;width:170px;top:241px;height:27px;left:31px;"></xui:place></layout>  
      <xforms:input id="iptROOMID" ref="data('dataMain')/rOOMID"/>  
      <xforms:input id="iptROOMAREA" ref="data('dataMain')/rOOMAREA"/>  
      <xforms:input id="iptIMAGE" ref="data('dataMain')/iMAGE"/> 
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/aPPLYFOROBJECT" input-changeable="true">
				   
				   
				   
				
   <xforms:label id="xuiLabel3" ref="dETECTIONOBJECTCNAME"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default15"></xforms:value>
   <xforms:itemset id="default22" data="bizData1" auto-load-data="true">
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default29"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default30"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/aPPLYFORDEVICETYPE" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="dEVICETYPECNAME" id="xuiLabel5"></xforms:label>
   <xforms:value ref="dETECTIONOBJECTTYPE" id="default33"></xforms:value>
   <xforms:itemset id="default34" data="bizData2" auto-load-data="true">
  
  
  
  
  
  
  <xforms:column ref="dETECTIONOBJECTTYPE" visible="false" id="default53"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default54"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/aPPLYFORRANGE" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="dETECTIONRANGECNAME" id="xuiLabel6"></xforms:label>
   <xforms:value ref="DETECTION_RANGE_TYPE" id="default55"></xforms:value>
   <xforms:itemset id="default56" auto-load-data="true" data="bizData3">
  <xforms:column ref="dETECTIONRANGECNAME" id="default63"></xforms:column>
  <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default64"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
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

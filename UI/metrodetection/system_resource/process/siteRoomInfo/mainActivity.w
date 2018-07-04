<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:563px;height:auto;left:183px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_ROOM_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" store-type="grid"> 
      <reader action="/metrodetection/system_code/logic/action/querySiteCSQ" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction" id="default5"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData1" concept="ROOM_TYPE_CODE"><creator id="default23"></creator>
  <reader id="default24" action="/metrodetection/system_code/logic/action/queryROOM_TYPE_CODEAction"></reader>
  <writer id="default25"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData2" concept="DETECTION_OBJECT_TYPE"><creator id="default33"></creator>
  <reader id="default34" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default35"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData3" concept="DEVICE_TYPE_CODE"><creator id="default43"></creator>
  <reader id="default44" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default45"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData4" concept="DETECTION_RANGE_TYPE"><creator id="default54"></creator>
  <reader id="default55" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"></reader>
  <writer id="default56"></writer></data></xforms:model>  
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
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="房间类型" ref="rOOMTYPE" type="ro" width="100px"/>  
      <column id="default2" label="房间中文名称" ref="rOOMCNAME" type="ro" width="100px"/>  
      <column id="default6" label="房间英文名称" ref="rOOMENAME" type="ro" width="100px"/>  
      <column id="default7" label="应用检测对象类型" ref="aPPLYFOROBJECT" type="ro" width="100px"/>  
      <column id="default8" label="应用检测对象" ref="aPPLYFORDEVICETYPE" type="ro" width="100px"/>  
      <column id="default9" label="应用检测方面类型" ref="aPPLYFORRANGE" type="ro" width="100px"/> 
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
        <place control-label="gridSelect1" id="default10" style="font-size:13pt;position:absolute;top:49px;left:45px;height:30px;width:120px;"/>  
        <place control-label="iptROOMCNAME" id="default12" style="font-size:13pt;position:absolute;width:138px;height:25px;left:389px;top:49px;"/>  
        <place control="iptROOMCNAME" id="default13" style="font-size:10pt;position: absolute;width:176px;height:30px;left:523px;top:38px;"/>  
        <place control-label="iptROOMENAME" id="default14" style="font-size:13pt;position:absolute;top:119px;left:42px;"/>  
        <place control="iptROOMENAME" id="default15" style="font-size:10pt;position: absolute;width:170px;height:30px;left:168px;top:108px;"/>  
        <place control-label="gridSelect2" id="default16" style="font-size:13pt;position:absolute;top:119px;left:373px;"/>  
        <place control-label="gridSelect3" id="default18" style="font-size:13pt;position:absolute;top:188px;left:43px;"/>  
        <place control-label="gridSelect4" id="default20" style="font-size:13pt;position:absolute;left:376px;top:188px;"/>  
        <xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;width:170px;top:38px;height:30px;left:168px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;width:176px;height:30px;left:523px;top:108px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;width:170px;height:30px;left:168px;top:178px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace8" style="position:absolute;width:176px;height:30px;left:523px;top:178px;"></xui:place></layout>  
      <xforms:input id="iptROOMCNAME" ref="data('dataMain')/rOOMCNAME"/>  
      <xforms:input id="iptROOMENAME" ref="data('dataMain')/rOOMENAME"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/rOOMTYPE" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="rOOMTYPECNAME" id="xuiLabel3"></xforms:label>
   <xforms:value ref="ROOM_TYPE_CODE" id="default11"></xforms:value>
   <xforms:itemset id="default22" data="bizData1" auto-load-data="true">
  <xforms:column ref="ROOM_TYPE_CODE" visible="false" id="default29"></xforms:column>
  <xforms:column ref="rOOMTYPECNAME" id="default30"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/aPPLYFOROBJECT" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel4"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default31"></xforms:value>
   <xforms:itemset id="default32" auto-load-data="true" data="bizData2">
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default39"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default40"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/aPPLYFORDEVICETYPE" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="dEVICETYPECNAME" id="xuiLabel5"></xforms:label>
   <xforms:value ref="dETECTIONOBJECTTYPE" id="default41"></xforms:value>
   <xforms:itemset id="default42" auto-load-data="true" data="bizData3">
  <xforms:column ref="dETECTIONOBJECTTYPE" visible="false" id="default50"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default51"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/aPPLYFORRANGE" input-changeable="true">
				   
				   
				   
				
   <xforms:label ref="dETECTIONRANGECNAME" id="xuiLabel6"></xforms:label>
   <xforms:value ref="DETECTION_RANGE_TYPE" id="default52"></xforms:value>
   <xforms:itemset id="default53" data="bizData4" auto-load-data="true">
  <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default61"></xforms:column>
  <xforms:column ref="dETECTIONRANGECNAME" id="default62"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
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

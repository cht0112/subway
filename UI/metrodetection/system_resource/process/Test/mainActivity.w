<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:526px;height:auto;left:349px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="HR_OCCUPY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/myQuerySiteRes" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveHR_OCCUPY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createHR_OCCUPY_INFOAction" id="default5"/> 
    </data> 
  </xforms:model>  
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
        <item id="barItem1"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="rOOMTYPE,rOOMCNAME,rOOMENAME,rOOMAREA,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,tESTTASKID,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME" id="smartFilter1"/> 
        </item>  
        <item id="barItem2"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();" src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="房间类型" ref="rOOMTYPE" type="ro" width="100px"/>  
      <column id="default2" label="房间中文名称" ref="rOOMCNAME" type="ro" width="100px"/>  
      <column id="default6" label="房间英文名称" ref="rOOMENAME" type="ro" width="100px"/>  
      <column id="default7" label="应用检测对象类型" ref="aPPLYFOROBJECT" type="ro" width="100px"/>  
      <column id="default8" label="测试任务ID" ref="tESTTASKID" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2"> 
        <item id="barItem12" name="insert-item" /><item id="barItem13" name="save-item"/>  
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
        <place control-label="iptROOMTYPE" id="default9" style="font-size:13pt;position:absolute;top:36px;left:100px;"/>  
        <place control="iptROOMTYPE" id="default10" style="font-size:10pt;position: absolute;width:170px;top:27px;height:30px;left:200px;"/>  
        <place control-label="iptROOMCNAME" id="default11" style="font-size:13pt;position:absolute;top:83px;left:458px;"/>  
        <place control="iptROOMCNAME" id="default12" style="font-size:10pt;position: absolute;width:170px;top:75px;height:30px;left:585px;"/>  
        <place control-label="iptROOMENAME" id="default13" style="font-size:13pt;position:absolute;top:79px;left:69px;"/>  
        <place control="iptROOMENAME" id="default14" style="font-size:10pt;position: absolute;width:170px;top:69px;height:30px;left:200px;"/>  
        <place control-label="iptROOMAREA" id="default15" style="font-size:13pt;position:absolute;top:40px;left:522px;"/>  
        <place control="iptROOMAREA" id="default16" style="font-size:10pt;position: absolute;width:170px;top:31px;height:30px;left:585px;"/>  
        <place control-label="iptAPPLYFOROBJECT" id="default17" style="font-size:13pt;position:absolute;top:122px;left:36px;"/>  
        <place control="iptAPPLYFOROBJECT" id="default18" style="font-size:10pt;position: absolute;width:170px;top:112px;height:30px;left:200px;"/>  
        <place control-label="iptAPPLYFORDEVICETYPE" id="default19" style="font-size:13pt;position:absolute;top:123px;left:458px;"/>  
        <place control="iptAPPLYFORDEVICETYPE" id="default20" style="font-size:10pt;position: absolute;width:170px;top:113px;height:30px;left:585px;"/>  
        <place control-label="iptAPPLYFORRANGE" id="default21" style="font-size:13pt;position:absolute;top:163px;left:35px;"/>  
        <place control="iptAPPLYFORRANGE" id="default22" style="font-size:10pt;position: absolute;width:170px;top:154px;height:30px;left:200px;"/>  
        <place control-label="iptTESTTASKID" id="default23" style="font-size:13pt;position:absolute;top:165px;left:472px;"/>  
        <place control="iptTESTTASKID" id="default24" style="font-size:10pt;position: absolute;width:170px;top:155px;height:30px;left:585px;"/>  
        <place control-label="iptOCCUPYSTARTDATETIME" id="default25" style="font-size:13pt;position:absolute;top:206px;left:1px;"/>  
        <place control="iptOCCUPYSTARTDATETIME" id="default26" style="font-size:10pt;position: absolute;width:170px;top:200px;height:30px;left:200px;"/>  
        <place control-label="iptOCCUPYENDDATETIME" id="default27" style="font-size:13pt;position:absolute;left:390px;top:206px;"/>  
        <place control="iptOCCUPYENDDATETIME" id="default28" style="font-size:10pt;position: absolute;width:170px;top:201px;height:30px;left:585px;"/> 
      </layout>  
      <xforms:input id="iptROOMTYPE" ref="data('dataMain')/rOOMTYPE"/>  
      <xforms:input id="iptROOMCNAME" ref="data('dataMain')/rOOMCNAME"/>  
      <xforms:input id="iptROOMENAME" ref="data('dataMain')/rOOMENAME"/>  
      <xforms:input id="iptROOMAREA" ref="data('dataMain')/rOOMAREA"/>  
      <xforms:input id="iptAPPLYFOROBJECT" ref="data('dataMain')/aPPLYFOROBJECT"/>  
      <xforms:input id="iptAPPLYFORDEVICETYPE" ref="data('dataMain')/aPPLYFORDEVICETYPE"/>  
      <xforms:input id="iptAPPLYFORRANGE" ref="data('dataMain')/aPPLYFORRANGE"/>  
      <xforms:input id="iptTESTTASKID" ref="data('dataMain')/tESTTASKID"/>  
      <xforms:input id="iptOCCUPYSTARTDATETIME" ref="data('dataMain')/oCCUPYSTARTDATETIME"/>  
      <xforms:input id="iptOCCUPYENDDATETIME" ref="data('dataMain')/oCCUPYENDDATETIME"/> 
    </xui:view>  
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

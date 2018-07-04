<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:534px;height:auto;left:324px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_OCCUPY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" store-type="grid"> 
      <reader action="/metrodetection/system_code/logic/action/queryROOM_OCCUPY_INFOAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveROOM_OCCUPY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createROOM_OCCUPY_INFOAction" id="default5"/> 
    <rule id="dataBizRule1" relation="rOOMID" required="true()" alert="'该选项不能为空'"></rule>
  <rule id="dataBizRule2" relation="oCCUPYSTARTDATETIME" required="true()" alert="'该选项不能为空'"></rule>
  <rule id="dataBizRule3" relation="oCCUPYENDDATETIME" alert="'该选项不能为空'" required="true()"></rule>
  <rule id="dataBizRule4" relation="rOOMAREA" required="true()" alert="'该选项不能为空'"></rule></data> 
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
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="rOOMID,rOOMAREA,tESTTASKID,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,mEMO" id="smartFilter1"/> 
        </item>  
        <item id="barItem2"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();" src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" ref="rOOMID" type="ro" width="100px" label="房间编号"/>  
      <column id="default2" ref="rOOMAREA" type="ro" width="100px" label="区域"/>  
      <column id="default6" ref="tESTTASKID" type="ro" width="100px" label="测试任务ID"/>  
      <column id="default7" ref="oCCUPYSTARTDATETIME" type="ro" width="100px" label="计划占用起始时间"/>  
      <column id="default8" ref="oCCUPYENDDATETIME" type="ro" width="100px" label="计划占用结束时间"/>  
      <column id="default9" label="备注 " ref="mEMO" type="ro" width="100px"/> 
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
        <place control-label="iptROOMID" id="default10" style="font-size:10pt;position: absolute;width:99px;top:28px;height:18px;left:42px;"/>  
        <place control="iptROOMID" id="default11" style="font-size:10pt;position: absolute;width:169px;height:23px;left:42px;top:58px;"/>  
        <place control-label="iptROOMAREA" id="default12" style="font-size:10pt;position: absolute;height:18px;width:99px;left:42px;top:88px;"/>  
        <place control="iptROOMAREA" id="default13" style="font-size:10pt;position: absolute;height:23px;width:169px;left:42px;top:118px;"/>  
        <place control-label="iptTESTTASKID" id="default14" style="font-size:10pt;position: absolute;height:18px;width:99px;left:42px;top:148px;"/>  
        <place control="iptTESTTASKID" id="default15" style="font-size:10pt;position: absolute;height:23px;width:169px;left:42px;top:178px;"/>  
        <place control-label="iptOCCUPYSTARTDATETIME" id="default16" style="font-size:10pt;position: absolute;height:18px;left:42px;top:208px;width:170px;"/>  
        <place control="iptOCCUPYSTARTDATETIME" id="default17" style="font-size:10pt;position: absolute;width:169px;top:297px;height:23px;left:42px;"/>  
        <place control-label="iptOCCUPYENDDATETIME" id="default18" style="font-size:10pt;position: absolute;top:268px;height:18px;left:42px;width:170px;"/>  
        <place control="iptOCCUPYENDDATETIME" id="default19" style="font-size:10pt;position: absolute;width:169px;top:239px;height:23px;left:42px;"/>  
        <place control-label="iptMEMO" id="default20" style="font-size:10pt;position: absolute;height:18px;width:99px;left:42px;top:328px;"/>  
        <place control="iptMEMO" id="default21" style="font-size:10pt;position: absolute;height:23px;width:169px;left:42px;top:358px;"/> 
      </layout>  
      <xforms:input id="iptROOMID" ref="data('dataMain')/rOOMID"/>  
      <xforms:input id="iptROOMAREA" ref="data('dataMain')/rOOMAREA"/>  
      <xforms:input id="iptTESTTASKID" ref="data('dataMain')/tESTTASKID"/>  
      <xforms:input id="iptOCCUPYSTARTDATETIME" ref="data('dataMain')/oCCUPYSTARTDATETIME"/>  
      <xforms:input id="iptOCCUPYENDDATETIME" ref="data('dataMain')/oCCUPYENDDATETIME"/>  
      <xforms:input id="iptMEMO" ref="data('dataMain')/mEMO"/> 
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
              <place control="grdMain" id="controlPlace2" style="width:99%;height:100%;"/> 
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

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:105px;height:auto;left:23px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="DETECTION_ROOM_INFO" direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="grid" update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/querySiteCSQ" id="default1"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction" id="default2"/>  
      <creator action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction" id="default3"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="ROOM_APPLY_INFO" confirm-delete="false" id="dataDetail" limit="20" offset="0" update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFOAction" id="default4"/>  
      <writer action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction" id="default5"/>  
      <creator action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction" id="default6"/>  
      <master data="dataMaster" id="master1" relation="rOOMID"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster" id="ngtbMaster1"> 
        <item> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif" id="insertTrigger" onclick="mainActivity2.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif" style="border:none" title="新建"/> 
        </item>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMaster" filter-relations="rOOMTYPE,rOOMCNAME,rOOMENAME,iMAGE,mEMO,aPPLYFOROBJECT,aPPLYFORDEVICETYPE,aPPLYFORRANGE,rOOMAREA,rOOMTYPECNAME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME" id="smartFilter1"/> 
        </item>  
        <item id="barItem2"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMaster').refreshData();" src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster" id="grdMaster" onRowDblClick="mainActivity2.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default7" label="房间类型" ref="rOOMTYPE" type="ro" width="100px"/>  
      <column id="default8" label="房间中文名称" ref="rOOMCNAME" type="ro" width="100px"/>  
      <column id="default9" label="房间英文名称" ref="rOOMENAME" type="ro" width="100px"/>  
      <column id="default10" label="房间位置图" ref="iMAGE" type="ro" width="100px"/>  
      <column id="default11" label="备注" ref="mEMO" type="ro" width="100px"/>  
      <column id="default12" label="中文名称" ref="rOOMTYPECNAME" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster" id="ngtbMaster2"> 
        <item id="barItem12" name="insert-item"/>  
        <item id="barItem13" name="save-item"/>  
        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="barItem16" name="filter-item"/>  
        <item id="barItem17" name="filter-pattern-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail" id="ngtbDetail"> 
        <item id="barItem23" name="insert-item"/>  
        <item id="barItem25" name="delete-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style="position:relative;height:257.0px;" type="absolute"> 
        <place control-label="iptROOMTYPE" id="default19" style="font-size:10pt;position: absolute;left:30px;top:38px"/>  
        <place control="iptROOMTYPE" id="default20" style="font-size:10pt;position: absolute;left:130px;top:30px;width:150px;"/>  
        <place control-label="iptROOMCNAME" id="default21" style="font-size:10pt;position: absolute;left:330px;top:38px"/>  
        <place control="iptROOMCNAME" id="default22" style="font-size:10pt;position: absolute;left:430px;top:30px;width:150px;"/>  
        <place control-label="iptROOMENAME" id="default23" style="font-size:10pt;position: absolute;left:30px;top:68px"/>  
        <place control="iptROOMENAME" id="default24" style="font-size:10pt;position: absolute;left:130px;top:60px;width:150px;"/>  
        <place control-label="iptIMAGE" id="default25" style="font-size:10pt;position: absolute;left:330px;top:68px"/>  
        <place control="iptIMAGE" id="default26" style="font-size:10pt;position: absolute;left:430px;top:60px;width:150px;"/>  
        <place control-label="iptMEMO" id="default27" style="font-size:10pt;position: absolute;left:30px;top:98px"/>  
        <place control="iptMEMO" id="default28" style="font-size:10pt;position: absolute;left:130px;top:90px;width:150px;"/>  
        <place control-label="iptAPPLYFOROBJECT" id="default29" style="font-size:10pt;position: absolute;left:330px;top:98px"/>  
        <place control="iptAPPLYFOROBJECT" id="default30" style="font-size:10pt;position: absolute;left:430px;top:90px;width:150px;"/>  
        <place control-label="iptAPPLYFORDEVICETYPE" id="default31" style="font-size:10pt;position: absolute;left:30px;top:128px"/>  
        <place control="iptAPPLYFORDEVICETYPE" id="default32" style="font-size:10pt;position: absolute;left:130px;top:120px;width:150px;"/>  
        <place control-label="iptAPPLYFORRANGE" id="default33" style="font-size:10pt;position: absolute;left:330px;top:128px"/>  
        <place control="iptAPPLYFORRANGE" id="default34" style="font-size:10pt;position: absolute;left:430px;top:120px;width:150px;"/>  
        <place control-label="iptROOMAREA" id="default35" style="font-size:10pt;position: absolute;left:30px;top:158px"/>  
        <place control="iptROOMAREA" id="default36" style="font-size:10pt;position: absolute;left:130px;top:150px;width:150px;"/>  
        <place control-label="iptROOMTYPECNAME" id="default37" style="font-size:10pt;position: absolute;left:330px;top:158px"/>  
        <place control="iptROOMTYPECNAME" id="default38" style="font-size:10pt;position: absolute;left:430px;top:150px;width:150px;"/>  
        <place control-label="iptDETECTIONOBJECTCNAME" id="default39" style="font-size:10pt;position: absolute;left:30px;top:188px"/>  
        <place control="iptDETECTIONOBJECTCNAME" id="default40" style="font-size:10pt;position: absolute;left:130px;top:180px;width:150px;"/>  
        <place control-label="iptDEVICETYPECNAME" id="default41" style="font-size:10pt;position: absolute;left:330px;top:188px"/>  
        <place control="iptDEVICETYPECNAME" id="default42" style="font-size:10pt;position: absolute;left:430px;top:180px;width:150px;"/>  
        <place control-label="iptDETECTIONRANGECNAME" id="default43" style="font-size:10pt;position: absolute;left:30px;top:218px"/>  
        <place control="iptDETECTIONRANGECNAME" id="default44" style="font-size:10pt;position: absolute;left:130px;top:210px;width:150px;"/> 
      </layout>  
      <xforms:input id="iptROOMTYPE" ref="data('dataMaster')/rOOMTYPE"/>  
      <xforms:input id="iptROOMCNAME" ref="data('dataMaster')/rOOMCNAME"/>  
      <xforms:input id="iptROOMENAME" ref="data('dataMaster')/rOOMENAME"/>  
      <xforms:input id="iptIMAGE" ref="data('dataMaster')/iMAGE"/>  
      <xforms:input id="iptMEMO" ref="data('dataMaster')/mEMO"/>  
      <xforms:input id="iptAPPLYFOROBJECT" ref="data('dataMaster')/aPPLYFOROBJECT"/>  
      <xforms:input id="iptAPPLYFORDEVICETYPE" ref="data('dataMaster')/aPPLYFORDEVICETYPE"/>  
      <xforms:input id="iptAPPLYFORRANGE" ref="data('dataMaster')/aPPLYFORRANGE"/>  
      <xforms:input id="iptROOMAREA" ref="data('dataMaster')/rOOMAREA"/>  
      <xforms:input id="iptROOMTYPECNAME" ref="data('dataMaster')/rOOMTYPECNAME"/>  
      <xforms:input id="iptDETECTIONOBJECTCNAME" ref="data('dataMaster')/dETECTIONOBJECTCNAME"/>  
      <xforms:input id="iptDEVICETYPECNAME" ref="data('dataMaster')/dEVICETYPECNAME"/>  
      <xforms:input id="iptDETECTIONRANGECNAME" ref="data('dataMaster')/dETECTIONRANGECNAME"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail" id="grdDetail"> 
      <column id="default13" label="房间编号" ref="rOOMID" type="ed" width="100px"/>  
      <column id="default14" label="区域" ref="rOOMAREA" type="ed" width="100px"/>  
      <column id="default15" label="应用检测对象类型" ref="aPPLYFOROBJECT" type="ed" width="100px"/>  
      <column id="default16" label="应用检测对象" ref="aPPLYFORDEVICETYPE" type="ed" width="100px"/>  
      <column id="default17" label="应用检测方面类型" ref="aPPLYFORRANGE" type="ed" width="100px"/>  
      <column id="default18" label="区域位置图" ref="iMAGE" type="ed" width="100px"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="32px"> 
              <place control="tbsMaster1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5"/>  
              <place control="tbsDetail" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="grdDetail" id="controlPlace6" style="width:100%;height:100%"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="mainActivity2.js"/> 
  </xui:resource> 
</xui:window>

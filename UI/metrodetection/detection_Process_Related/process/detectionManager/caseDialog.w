<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:93px;top:102px;height:72px;left:78px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SUB_TEST_CASE_BASE_INFO" id="dataMain" is-tree="false" limit="20" offset="0" update-mode="whereAll"> 
      <creator action="/metrodetection/system_code/logic/action/createSUB_TEST_CASE_BASE_INFOAction" id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/querySUB_TEST_CASE_BASE_INFOAction" id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/saveSUB_TEST_CASE_BASE_INFOAction" id="default3"/>  
      <tree-option id="default4" parent-relation="tESTCASEID" virtual-root="测试用例" node-kind-relation="s"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style="height:100%;;position:relative;" type="absolute"> 
        <place control-label="iptTESTCASEVER" id="default5" style="font-size:10pt;position: absolute;left:30px;top:38px"/>  
        <place control="iptTESTCASEVER" id="default6" style="font-size:10pt;position: absolute;left:130px;top:30px;width:150px;"/>  
        <place control-label="iptTESTCASEID" id="default7" style="font-size:10pt;position: absolute;left:330px;top:38px"/>  
        <place control="iptTESTCASEID" id="default8" style="font-size:10pt;position: absolute;left:430px;top:30px;width:150px;"/>  
        <place control-label="iptSUBTESTCASENAME" id="default9" style="font-size:10pt;position: absolute;left:30px;top:68px"/>  
        <place control="iptSUBTESTCASENAME" id="default10" style="font-size:10pt;position: absolute;left:130px;top:60px;width:150px;"/>  
        <place control-label="iptSUBTESTCASEPRIOR" id="default11" style="font-size:10pt;position: absolute;left:330px;top:68px"/>  
        <place control="iptSUBTESTCASEPRIOR" id="default12" style="font-size:10pt;position: absolute;left:430px;top:60px;width:150px;"/>  
        <place control-label="iptSUBTESTCASEORDER" id="default13" style="font-size:10pt;position: absolute;left:30px;top:98px"/>  
        <place control="iptSUBTESTCASEORDER" id="default14" style="font-size:10pt;position: absolute;left:130px;top:90px;width:150px;"/>  
        <place control-label="iptSUBTESTCASETIME" id="default15" style="font-size:10pt;position: absolute;left:330px;top:98px"/>  
        <place control="iptSUBTESTCASETIME" id="default16" style="font-size:10pt;position: absolute;left:430px;top:90px;width:150px;"/>  
        <place control-label="iptTIMEUNITID" id="default17" style="font-size:10pt;position: absolute;left:30px;top:128px"/>  
        <place control="iptTIMEUNITID" id="default18" style="font-size:10pt;position: absolute;left:130px;top:120px;width:150px;"/> 
      <xui:place control="windowReceiver1" id="controlPlace4" style="position:absolute;top:249px;left:229px;"></xui:place></layout>  
      <xforms:input id="iptTESTCASEVER" ref="data('dataMain')/tESTCASEVER"/>  
      <xforms:input id="iptTESTCASEID" ref="data('dataMain')/tESTCASEID"/>  
      <xforms:input id="iptSUBTESTCASENAME" ref="data('dataMain')/sUBTESTCASENAME"/>  
      <xforms:input id="iptSUBTESTCASEPRIOR" ref="data('dataMain')/sUBTESTCASEPRIOR"/>  
      <xforms:input id="iptSUBTESTCASEORDER" ref="data('dataMain')/sUBTESTCASEORDER"/>  
      <xforms:input id="iptSUBTESTCASETIME" ref="data('dataMain')/sUBTESTCASETIME"/>  
      <xforms:input id="iptTIMEUNITID" ref="data('dataMain')/tIMEUNITID"/> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1"></xhtml:div></xui:view>  
    <xhtml:div appearance="tree" component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <xui:column id="gridColumn3" ref="tESTCASEID" label="测试用例ID" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn4" ref="sUBTESTCASEID" label="测试子用例ID" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn5" ref="sUBTESTCASENAME" label="测试子用例名称" type="ed" width="100px"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain" mode="IMG_TXT_LR"> 
        <item id="barItem2" name="save-item"/>  
        <item id="barItem19" name="delete-item"/>  
        <item id="barItem20" name="refresh-item"/>  
        <item id="barItem12" name="create-new-child-item"/>  
        <item id="barItem13" name="create-new-brother-item"/>  
        <item id="barItem14" name="create-new-root-item"/>  
        <item id="barItem15" name="expand-this-item"/>  
        <item id="barItem16" name="expand-all-item"/>  
        <item id="barItem17" name="collapse-this-item"/>  
        <item id="barItem18" name="collapse-all-item"/>  
        <item id="separatorItem1" name="separator"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="30%" has-arrow-button="true" has-drag-bar="true" id="HSplitter1" mode="horz" style="width:100%;height:100%;"> 
        <xhtml:div id="div1" region="left"> 
          <xhtml:div id="div2" style="width:100%;height:100%"> 
            <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
              <top id="borderLayout-top1" size="32px"> 
                <place control="tbsMain" id="controlPlace3"/> 
              </top>  
              <center id="borderLayout-center1"> 
                <place control="grdMain" id="controlPlace1" style="width:100%;height:100%;"/> 
              </center> 
            </xhtml:div> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div id="div3" region="right"> 
          <xhtml:div id="div4" style="width:100%;height:100%"> 
            <place control="vDetail" id="controlPlace2"/> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource/> 
</xui:window>

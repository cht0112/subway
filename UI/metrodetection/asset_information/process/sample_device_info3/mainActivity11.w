<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:291px;height:auto;left:458px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SAMPLE_DEVICE_INFO" direct-delete="true" id="dataMain" limit="20" offset="0"
      update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/myQuerySampleDeviceInfo"
        id="default3"/>  
      <writer id="default4" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction"/>  
      <creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction"
        id="default5"/>  
      <master id="master3" data="bizData1"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="bizData1" concept="SAMPLE_DEVICE_INFO">
      <creator id="default2" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction"/>  
      <reader id="default6" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_INFOAction"/>  
      <writer id="default7" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction"/>  
      <master id="master1" data="bizData1"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="bizData2" concept="SAMPLE_DEVICE_HARDWARE_INFO">
      <creator id="default8" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_HARDWARE_INFOAction"/>  
      <reader id="default9" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_HARDWARE_INFOAction"/>  
      <writer id="default10" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_HARDWARE_INFOAction"/>  
      <master id="master2" data="bizData1"/>
    </data>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item></item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="cONTRACTCODE,pROJECTID,mANUFACTUREID,dEVICETYPE,dEVICESTYLE,dECTIONTYPE,dEVICEID,sOFTWAREVERSION,hARDWAREVERSION,dEADLINERECEIVEDATE,iNDEEDRECEIVEDATE,rETURNDATE,iNDEEDRETURNDATE,sHAREDFLAG,mEMO,mODELNAME,mODELSTYLE,mODELNUMBER,mEMO1,pROJECTID1,dEVICEID1,tESTTASKID,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,mEMO2"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem2"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();"
            src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity11.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="合同编号" ref="cONTRACTCODE" type="ro" width="100px"/>
      <xui:column id="gridColumn2" ref="mANUFACTUREIDCNAME" label="供应商名称" type="ed"
        width="100"/>
      <xui:column id="gridColumn3" ref="dETECTIONOBJECTCNAME" label="检测对象" type="ed"
        width="100"/>
      <xui:column id="gridColumn5" ref="typ" type="ed" width="100" label="检测类型"/>
      <column id="default25" label="测试任务ID" ref="tESTTASKID" type="ro" width="100px"/>  
      <column id="default26" label="计划占用起始日期时间" ref="oCCUPYSTARTDATETIME" type="ro"
        width="145px"/>  
      <column id="default27" label="计划占用结束日期时间" ref="oCCUPYENDDATETIME" type="ro"
        width="144px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" mode="IMG_TXT_LR"> 
        <item name="insert-item" id="barItem3"/>  
        <item name="save-item" id="barItem7"/>  
        <item name="delete-item" id="barItem8"/>  
        <item name="refresh-item" id="barItem9"/>  
        <item name="filter-item" id="barItem10"/>  
        <item name="filter-pattern-item" id="barItem12"/>  
        <item name="separator" id="customBarItem1"/>  
        <item name="first-item" id="barItem13"/>  
        <item name="pre-item" id="barItem14"/>  
        <item name="next-item" id="barItem15"/>  
        <item name="last-item" id="barItem16"/>  
        <item name="separator" id="customBarItem2"/>  
        <item name="custom-page-item" id="customPageItem1"/>
      </xui:bar>
    </xhtml:div>  
    <xui:layout id="rootLayout" style="height:100%;width:100%;position:relative;"
      type="flow"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:97%;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%;height:95%;"> 
            <top id="borderLayout-top1" size="32px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:95%;height:150%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="32px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
                id="borderLayout5" style="width:100%; height: 100%;;"> 
                <top size="30px" id="borderLayout-top5"/>  
                <center id="borderLayout-center5"/>
              </xhtml:div>
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity11.js"/> 
  </xui:resource> 
</xui:window>

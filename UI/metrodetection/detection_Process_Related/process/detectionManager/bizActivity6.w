<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/metrodetection/detection_Process_Related/process/detectionManager/mainActivity.w" >

  <div id="afcData" xui:update-mode="delete"/>
  <div id="detObjType" xui:update-mode="delete"/>
  <div id="businessData" xui:update-mode="delete"/>
  <div id="action1" xui:update-mode="delete"/>
  <div id="vDetail" xui:update-mode="delete"/>
  <div id="navigatorBar1" xui:update-mode="delete"/>
  <div id="controlPlace11" xui:update-mode="delete"/>
   <xforms:model id="mdDefault" style="height:auto;top:304px;left:573px;"  xui:update-mode="merge"/>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SAMPLE_DEVICE_INFO" direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="grid" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/select_sample" id="default1" />
<writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction" id="default2" />
<creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction" id="default3" />
</data>
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SAMPLE_DEVICE_HARDWARE_INFO" confirm-delete="false" id="dataDetail" limit="20" offset="0" relations="sAMPLEDEVICENO,mODELNAME,mODELSTYLE,mODELNUMBER,mEMO" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_HARDWARE_INFOAction" id="default4" />
<writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_HARDWARE_INFOAction" id="default5" />
<creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_HARDWARE_INFOAction" id="default6" />
<master data="dataMaster" id="master1" relation="sAMPLEDEVICENO" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_4" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_4" >
<![CDATA[bizActivity6.mdDefaultLoad(event)]]>
</xforms:script>
</xforms:action>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1" xui:parent="rootView" xui:update-mode="insert" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster" id="ngtbMaster1" mode="IMG_TXT_LR" >
<item id="customBarItem4_1" >
</item>
<item id="barItem4" name="refresh-item" />
<item id="barItem5" name="filter-item" />
<item id="barItem6" name="filter-pattern-item" />
<item id="separatorItem1" name="separator" />
<item id="barItem11" name="custom-page-item" />
</xui:bar>
</xhtml:div>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster" id="grdMaster" onInit="bizActivity6.grdMasterInit" onRowDblClick="bizActivity6.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column" xui:parent="rootView" xui:update-mode="insert" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_2" label="申请序号" ref="aPPLICATIONNO1" type="ed" width="100px" />
<column align="left" id="gridColumn7_1" label="最晚进场日期" readonly="true" ref="dEADLINERECEIVEDATE" type="date" width="100px" />
<column align="left" id="default11" label="实际进场日期" ref="iNDEEDRECEIVEDATE" type="date" width="100px" />
<column align="left" id="default12" label="预计归还日期" readonly="true" ref="rETURNDATE" type="date" width="100px" />
<column align="left" id="default13" label="实际归还日期" onRender="bizActivity6.grdMaster_iNDEEDRETURNDATERender" ref="iNDEEDRETURNDATE" type="html" width="100px" />
<column align="left" id="default14" label="项目名称" readonly="true" ref="pROJECTNAME" type="ro" width="149px" />
<column align="left" id="default15" label="厂商名称" readonly="true" ref="mANUFACTUREIDCNAME" type="ro" width="100px" />
<column align="left" id="default16" label="检测对象" readonly="true" ref="dEVICETYPECNAME" type="ro" width="100px" />
</xhtml:div>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2" xui:parent="rootView" xui:update-mode="insert" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster" id="ngtbMaster2" mode="IMG_TXT_LR" >
<item id="barItem15_1" name="save-item" />
<item id="barItem18_1" name="refresh-item" />
<item id="barItem13_1" name="filter-item" />
<item id="barItem16_1" name="filter-pattern-item" />
<item id="separatorItem3" name="separator" />
<item id="barItem18" name="first-item" />
<item id="barItem19" name="pre-item" />
<item id="barItem20" name="next-item" />
<item id="barItem21" name="last-item" />
</xui:bar>
</xhtml:div>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="vDetail" xui:parent="rootView" xui:update-mode="insert" >
<layout id="layout3_1" style="position:relative;height:257.0px;" type="absolute" >
<place control-label="iptCONTRACTCODE" id="default21" style="font-size:10pt;position: absolute;left:30px;top:38px" />
<place control="iptCONTRACTCODE" id="default22" style="font-size:10pt;position: absolute;left:130px;top:30px;width:150px;" />
<place control-label="iptDEVICESTYLE" id="default25" style="font-size:10pt;position: absolute;left:30px;top:68px" />
<place control="iptDEVICESTYLE" id="default26" style="font-size:10pt;position: absolute;left:130px;top:60px;width:150px;" />
<place control-label="iptSOFTWAREVERSION" id="default27" style="font-size:10pt;position: absolute;width:188px;top:68px;height:30px;left:330px;" />
<place control="iptSOFTWAREVERSION" id="default28" style="font-size:10pt;position: absolute;left:430px;top:60px;width:150px;" />
<place control-label="iptHARDWAREVERSION" id="default29" style="font-size:10pt;position: absolute;width:186px;top:98px;height:30px;left:30px;" />
<place control="iptHARDWAREVERSION" id="default30" style="font-size:10pt;position: absolute;left:130px;top:90px;width:150px;" />
<place control-label="iptDEADLINERECEIVEDATE" id="default31" style="font-size:10pt;position: absolute;width:200px;top:98px;height:30px;left:330px;" />
<place control="iptDEADLINERECEIVEDATE" id="default32" style="font-size:10pt;position: absolute;left:430px;top:90px;width:150px;" />
<place control-label="iptINDEEDRECEIVEDATE" id="default33" style="font-size:10pt;position: absolute;width:174px;top:128px;height:30px;left:30px;" />
<place control="iptINDEEDRECEIVEDATE" id="default34" style="font-size:10pt;position: absolute;left:130px;top:120px;width:150px;" />
<place control-label="iptRETURNDATE" id="default35" style="font-size:10pt;position: absolute;width:184px;top:128px;height:30px;left:330px;" />
<place control="iptRETURNDATE" id="default36" style="font-size:10pt;position: absolute;width:150px;left:430px;top:120px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="radio1_2" id="controlPlace1_2" style="position:absolute;left:430px;height:46px;width:155px;top:140px;" />
<place control-label="radio1_2" id="default39" label="是否共用" style="font-size:10pt;position: absolute;width:170px;top:158px;height:30px;left:330px;" />
<place control-label="iptPROJECTNAME" id="default41" style="font-size:10pt;position: absolute;left:30px;top:188px" />
<place control="iptPROJECTNAME" id="default42" style="font-size:10pt;position: absolute;left:130px;top:180px;width:150px;" />
<place control-label="iptMANUFACTUREIDCNAME" id="default43" label=" 厂商名称" style="font-size:10pt;position: absolute;width:220px;top:188px;height:30px;left:330px;" />
<place control="iptMANUFACTUREIDCNAME" id="default44" style="font-size:10pt;position: absolute;left:430px;top:180px;width:150px;" />
<place control-label="iptDEVICETYPECNAME" id="default45" label="检测对象" style="font-size:10pt;position: absolute;width:201px;height:30px;left:330px;top:38px;" />
<place control="iptDEVICETYPECNAME" id="default46" style="font-size:10pt;position: absolute;width:150px;top:30px;left:430px;" />
</layout>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptCONTRACTCODE" readonly="true" ref="data('dataMaster')/aPPLICATIONNO1" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptDEVICESTYLE" readonly="true" ref="data('dataMaster')/dEVICESTYLE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptSOFTWAREVERSION" readonly="true" ref="data('dataMaster')/sOFTWAREVERSION" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptHARDWAREVERSION" readonly="true" ref="data('dataMaster')/hARDWAREVERSION" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" disabled="true" format="yyyy-MM-dd" id="iptDEADLINERECEIVEDATE" readonly="true" ref="data('dataMaster')/dEADLINERECEIVEDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" format="yyyy-MM-dd" id="iptINDEEDRECEIVEDATE" ref="data('dataMaster')/iNDEEDRECEIVEDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" disabled="true" format="yyyy-MM-dd" id="iptRETURNDATE" readonly="true" ref="data('dataMaster')/rETURNDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPROJECTNAME" readonly="true" ref="data('dataMaster')/pROJECTNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptMANUFACTUREIDCNAME" readonly="true" ref="data('dataMaster')/mANUFACTUREIDCNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptDEVICETYPECNAME" readonly="true" ref="data('dataMaster')/dEVICETYPECNAME" />
<xforms:select1 xmlns:xforms="http://www.justep.com/xforms" class="horizontal" disabled="true" id="radio1_2" ref="data('dataMaster')/sHAREDFLAG" >
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem1_2" style="width:121px;height:51px;" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default1_2" >
<![CDATA[是]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default2_2" >
<![CDATA[1]]>
</xforms:value>
</xforms:item>
<xforms:item xmlns:xforms="http://www.justep.com/xforms" id="selectItem2_2" >
<xforms:label xmlns:xforms="http://www.justep.com/xforms" id="default3_2" >
<![CDATA[否]]>
</xforms:label>
<xforms:value xmlns:xforms="http://www.justep.com/xforms" id="default4_2" >
<![CDATA[0]]>
</xforms:value>
</xforms:item>
</xforms:select1>
</xui:view>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail" xui:parent="rootView" xui:update-mode="insert" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail" id="ngtbDetail" >
<item id="barItem23" name="insert-item" />
<item id="barItem25" name="delete-item" />
</xui:bar>
</xhtml:div>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail" id="grdDetail" xui:parent="rootView" xui:update-mode="insert" >
<column id="default17" label="模块名称" ref="mODELNAME" type="ed" width="100px" />
<column id="default18" label="模块型号" ref="mODELSTYLE" type="ed" width="100px" />
<column id="default19" label="模块数量" ref="mODELNUMBER" type="ed" width="100px" />
<column id="default20" label="备注" ref="mEMO" type="ed" width="100px" />
</xhtml:div>
   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-tabPanel" component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;;" xui:parent="borderLayout-center1" xui:update-mode="insert" >
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabList" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel1" >










列表</xui:label>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout3_1" style="width:100%; height: 100%;;" >
<top id="borderLayout-top3_1" size="32px" >
<place control="tbsMaster1" id="controlPlace1" />
</top>
<center id="borderLayout-center3_1" >
<place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;" />
</center>
</xhtml:div>
</xui:tab>
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabDetail" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel2" >





























详细</xui:label>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;" >
<top id="borderLayout-top2" >
<place control="tbsMaster2" id="controlPlace3" />
<place control="vDetail" id="controlPlace5" />
<place control="tbsDetail" id="controlPlace3_1" />
</top>
<center id="borderLayout-center2" >
<place control="grdDetail" id="controlPlace6" style="width:100%;height:100%" />
</center>
</xhtml:div>
</xui:tab>
</xhtml:div>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1" src="bizActivity6.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>
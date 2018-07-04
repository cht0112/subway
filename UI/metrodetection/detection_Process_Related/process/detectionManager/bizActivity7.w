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
   <xforms:model id="mdDefault" style="top:307px;height:auto;left:451px;"  xui:update-mode="merge"/>
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_TASK_INFO" confirm-refresh="false" data-type="xml" direct-delete="true" id="dataMain2" limit="20" offset="0" relations="pROJECTID,tASKTYPE,tASKID,tASKNAME,pLANOPERATORID,pLANSTARTDATE,pLANENDINGDATE,aCTUALOPERATORID,aCTUALSTARTDATE,aCTUALENDINGDATE,tASKEXECUTE,tASKCHECK,pROJECTNAME,pROJECTTYPE,aSSIGNEDMANUFACTUREID,mANUFACTUREIDCNAME,oPERATORNAME,zhixingname" update-mode="whereAll" xui:parent="mdDefault" xui:update-mode="insert" >
<reader action="/metrodetection/system_code/logic/action/select_task" id="default3" />
<writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_TASK_INFOAction" id="default4" />
<creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_TASK_INFOAction" id="default5" />
<calculate-relation id="calculate-relation1_1" relation="zhuangtai" />
<calculate-relation id="calculate-relation2_1" relation="jieguo" />
<calculate-relation id="calculate-relation3_1" relation="tasktype" />
<calculate-relation id="calculate-relation4_1" relation="projecttype" />
</data>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action1_1" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_1" >
<![CDATA[bizActivity7.mdDefaultLoad(event)]]>
</xforms:script>
</xforms:action>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="xforms-ready" id="action2_4" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript2_4" >
<![CDATA[bizActivity7.mdDefaultReady(event)]]>
</xforms:script>
</xforms:action>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKTYPE" readonly="true" ref="data('dataMain2')/tasktype" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKID" readonly="true" ref="data('dataMain2')/tASKID" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" disabled="true" format="yyyy-MM-dd" id="iptPLANSTARTDATE" readonly="true" ref="data('dataMain2')/pLANSTARTDATE" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" disabled="true" format="yyyy-MM-dd" id="iptPLANENDINGDATE" readonly="true" ref="data('dataMain2')/pLANENDINGDATE" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" disabled="true" format="yyyy-MM-dd" id="iptACTUALSTARTDATE" readonly="true" ref="data('dataMain2')/aCTUALSTARTDATE" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" disabled="true" format="yyyy-MM-dd" id="iptACTUALENDINGDATE" readonly="true" ref="data('dataMain2')/aCTUALENDINGDATE" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKEXECUTE" readonly="true" ref="data('dataMain2')/zhuangtai" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKCHECK" readonly="true" ref="data('dataMain2')/jieguo" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPROJECTNAME" readonly="true" ref="data('dataMain2')/pROJECTNAME" xui:parent="rootView" xui:update-mode="insert" />
    <xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPROJECTTYPE" readonly="true" ref="data('dataMain2')/projecttype" xui:parent="rootView" xui:update-mode="insert" />
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1" xui:parent="rootView" xui:update-mode="insert" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain2" id="ngtbMain1" mode="IMG_TXT_LR" >
<item id="customBarItem1_1" />
<item id="barItem4" name="refresh-item" />
<item id="barItem5" name="filter-item" />
<item id="barItem6" name="filter-pattern-item" />
<item id="separatorItem1" name="separator" />
<item id="barItem11" name="custom-page-item" />
<item id="customBarItem3_1" />
<item id="xiazai" >
<xhtml:input xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-button" id="input1_1" onclick="bizActivity7.input1_1Click(event)" style="width:88px;height:24px;" type="button" value="下载任务计划" />
</item>
<item id="shangchuang" >
<form action="" enctype="multipart/form-data" id="f1" method="post" name="f1" target="bbb" >
<input id="file" name="file" style="position:absolute;height:24px;left:650px;top:5px;" type="file" />
<input class="xui-button" id="sub" name="sub" onclick="subfile1();" style="position:absolute;left:850px;height:24px;top:5px;" type="button" value="上传" />
</form>
</item>
</xui:bar>
</xhtml:div>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/grid.xbl.xml#grid" data="dataMain2" id="grdMain" onAfterIndexChanged="bizActivity7.grdMainAfterIndexChanged" onInit="bizActivity7.grdMainInit" onRowDblClick="bizActivity7.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column" xui:parent="rootView" xui:update-mode="insert" >
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn2_1" label=" " ref="chb" type="ch" width="18px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn3_1" label="任务ID" ref="tASKID" type="ed" width="100px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn9_1" label="任务名称" ref="tASKNAME" type="ed" width="127px" />
<column id="default2" label="项目名称" readonly="true" ref="pROJECTNAME" type="ro" width="127px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn1_1" label="计划开始日期" readonly="true" ref="pLANSTARTDATE" type="date" width="120px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4_1" label="计划结束日期" readonly="true" ref="pLANENDINGDATE" type="date" width="120px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn5_1" label="任务开始日期" onRender="bizActivity7.grdMain_aCTUALSTARTDATERender" readonly="true" ref="aCTUALSTARTDATE" type="html" width="120px" />
<xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn6_1" label="任务结束日期" onRender="bizActivity7.grdMain_aCTUALENDINGDATERender" readonly="true" ref="aCTUALENDINGDATE" type="html" width="120px" />
<xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn7_1" label="执行状态" readonly="true" ref="zhuangtai" type="ed" width="80px" />
<xui:column xmlns:xui="http://www.justep.com/xui" align="center" id="gridColumn8_1" label="执行结果" readonly="true" ref="jieguo" type="ed" width="80px" />
</xhtml:div>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2" xui:parent="rootView" xui:update-mode="insert" >
<xui:bar xmlns:xui="http://www.justep.com/xui" component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain2" id="ngtbMain2" mode="TXT" >
<item id="barItem6_1" name="refresh-item" />
<item id="separatorItem3" name="separator" />
<item id="barItem18" name="first-item" />
<item id="barItem19" name="pre-item" />
<item id="barItem20" name="next-item" />
<item id="barItem21" name="last-item" />
<item id="customBarItem2_1" />
</xui:bar>
</xhtml:div>
    <xui:view xmlns:xui="http://www.justep.com/xui" auto-load="true" class="xui-container" id="vDetail" xui:parent="rootView" xui:update-mode="insert" >
<layout id="layout2" style="height:100%;;position:relative;" type="absolute" >
<place control-label="iptTASKTYPE" id="controlLabel1_1" label="任务类型" style="font-size:10pt;position: absolute;left:30px;top:38px" />
<place control="iptTASKTYPE" id="default11" style="font-size:10pt;position: absolute;width:150px;top:30px;left:130px;" />
<place control-label="iptTASKID" id="default12" style="font-size:10pt;position: absolute;width:153px;top:38px;height:30px;left:330px;" />
<place control="iptTASKID" id="default13" style="font-size:10pt;position: absolute;left:430px;top:30px;width:150px;" />
<place control-label="iptPLANOPERATORID" id="default14" label="计划执行人" style="font-size:10pt;position: absolute;left:30px;top:68px" />
<place control-label="iptPLANSTARTDATE" id="default16" style="font-size:10pt;position: absolute;width:167px;height:30px;left:330px;top:98px;" />
<place control="iptPLANSTARTDATE" id="default17" style="font-size:10pt;position: absolute;left:430px;width:150px;top:90px;" />
<place control-label="iptPLANENDINGDATE" id="default18" style="font-size:10pt;position: absolute;left:30px;top:98px" />
<place control="iptPLANENDINGDATE" id="default19" style="font-size:10pt;position: absolute;left:130px;top:90px;width:150px;" />
<place control-label="iptACTUALOPERATORID" id="default20" label="任务执行人" style="font-size:10pt;position: absolute;width:206px;height:30px;left:330px;top:68px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="input3_2" id="controlPlace3_2" style="position:absolute;top:60px;width:150px;left:430px;" />
<place control-label="iptACTUALSTARTDATE" id="default22" style="font-size:10pt;position: absolute;width:204px;top:128px;height:30px;left:30px;" />
<place control="iptACTUALSTARTDATE" id="default23" style="font-size:10pt;position: absolute;left:130px;top:120px;width:150px;" />
<place control-label="iptACTUALENDINGDATE" id="default24" style="font-size:10pt;position: absolute;width:228px;top:128px;height:30px;left:330px;" />
<place control="iptACTUALENDINGDATE" id="default25" style="font-size:10pt;position: absolute;left:430px;top:120px;width:150px;" />
<place control-label="iptTASKEXECUTE" id="default26" label="执行状态" style="font-size:10pt;position: absolute;left:30px;top:158px" />
<place control="iptTASKEXECUTE" id="default27" style="font-size:10pt;position: absolute;left:130px;top:150px;width:150px;" />
<place control-label="iptTASKCHECK" id="default28" label="执行结果" style="font-size:10pt;position: absolute;width:179px;top:158px;height:30px;left:330px;" />
<place control="iptTASKCHECK" id="default29" style="font-size:10pt;position: absolute;left:430px;top:150px;width:150px;" />
<place control-label="iptPROJECTNAME" id="default34" style="font-size:10pt;position: absolute;left:30px;top:188px;" />
<place control="iptPROJECTNAME" id="default35" style="font-size:10pt;position: absolute;left:130px;width:150px;top:180px;" />
<place control-label="iptPROJECTTYPE" id="default36" label="项目类型" style="font-size:10pt;position: absolute;width:180px;height:30px;left:330px;top:188px;" />
<place control="iptPROJECTTYPE" id="default37" style="font-size:10pt;position: absolute;left:430px;width:150px;top:180px;" />
<place control-label="iptASSIGNEDMANUFACTUREID" id="default38" label="委托单位" style="font-size:10pt;position: absolute;width:248px;height:30px;left:30px;top:218px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="input1_2" id="controlPlace1_2" style="position:absolute;left:130px;top:210px;width:150px;" />
<xui:place xmlns:xui="http://www.justep.com/xui" control="input2_2" id="controlPlace2_2" style="position:absolute;left:130px;top:60px;width:150px;" />
</layout>
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKTYPE" ref="data('dataMain2')/tasktype" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKID" ref="data('dataMain2')/tASKID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPLANOPERATORID" ref="data('dataMain2')/pLANOPERATORID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" format="yyyy-MM-dd" id="iptPLANSTARTDATE" ref="data('dataMain2')/pLANSTARTDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" format="yyyy-MM-dd" id="iptPLANENDINGDATE" ref="data('dataMain2')/pLANENDINGDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptACTUALOPERATORID" ref="data('dataMain2')/aCTUALOPERATORID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" format="yyyy-MM-dd" id="iptACTUALSTARTDATE" ref="data('dataMain2')/aCTUALSTARTDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" format="yyyy-MM-dd" id="iptACTUALENDINGDATE" ref="data('dataMain2')/aCTUALENDINGDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKEXECUTE" ref="data('dataMain2')/zhuangtai" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptTASKCHECK" ref="data('dataMain2')/jieguo" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPROJECTNAME" ref="data('dataMain2')/pROJECTNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPROJECTTYPE" ref="data('dataMain2')/projecttype" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptASSIGNEDMANUFACTUREID" ref="data('dataMain2')/aSSIGNEDMANUFACTUREID" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPROJECTDATE" ref="data('dataMain2')/pROJECTDATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptPROJECTMANAGER" ref="data('dataMain2')/pROJECTMANAGER" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" class="xui-input" id="iptEXECUTESTATE" ref="data('dataMain2')/eXECUTESTATE" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input1_2" readonly="true" ref="data('dataMain2')/mANUFACTUREIDCNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input2_2" readonly="true" ref="data('dataMain2')/oPERATORNAME" />
<xforms:input xmlns:xforms="http://www.justep.com/xforms" id="input3_2" readonly="true" ref="data('dataMain2')/zhixingname" />
</xui:view>
   <xhtml:div id="flw" auto-filter="false" onBeforeBack="bizActivity7.flwBeforeBack"  xui:update-mode="merge"/>
   <layout id="layout1" type="absolute" style="height:100%;position:relative;"  xui:update-mode="merge"/>
   <xhtml:div id="borderLayout1" style="width:100%; height: 100%;position:absolute;"  xui:update-mode="merge"/>
    <xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" class="xui-tabPanel" component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;top:100px;;;;" xui:parent="borderLayout-center1" xui:update-mode="insert" >
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabList" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel1" >
















列表</xui:label>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1_1" style="width:100%; height: 100%;;" >
<top id="borderLayout-top1_1" size="32px" >
<place control="tbsMain1" id="controlPlace1" />
</top>
<center id="borderLayout-center1_1" >
<place control="grdMain" id="controlPlace2" style="width:100%;height:100%;" />
</center>
</xhtml:div>
<xhtml:iframe xmlns:xhtml="http://www.w3.org/1999/xhtml" id="bbb" name="bbb" onload="bizActivity7.afterUploadFile(this);" src="about:blank" style="display:none;" />
</xui:tab>
<xui:tab xmlns:xui="http://www.justep.com/xui" id="tabDetail" >
<xui:label xmlns:xui="http://www.justep.com/xui" id="xuiLabel2" >
















详细</xui:label>
<xhtml:div xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;" >
<top id="borderLayout-top2" size="32px" >
<place control="tbsMain2" id="controlPlace8_1" />
</top>
<center id="borderLayout-center2" >
<place control="vDetail" id="controlPlace5" />
</center>
</xhtml:div>
</xui:tab>
</xhtml:div>
   <place id="controlPlace7" style="width:24px;top:102px;left:742px;position:absolute;"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_1" src="bizActivity7.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>
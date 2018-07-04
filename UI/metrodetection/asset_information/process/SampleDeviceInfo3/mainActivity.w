<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:154px;left:458px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SAMPLE_DEVICE_INFO" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll" confirm-delete="false" onValueChanged="mainActivity.dataMasterValueChanged" filter-relations="dEVICEID,iNDEEDRECEIVEDATE,pROJECTNAME,mANUFACTUREIDCNAME,dEVICETYPECNAME"> 
      <reader action="/metrodetection/system_code/logic/action/myQuerySampleDeviceInfozf"
        id="default1"/>  
      <writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction"
        id="default3"/>  
      <rule id="dataBizRule4" relation="dEVICETYPE" required="true()" alert="'检测对象不能为空!'"/>  
      <rule id="dataBizRule5" relation="dECTIONTYPE" required="true()" alert="'检测类型不能为空!'"/>  
      <rule id="dataBizRule6" relation="sOFTWAREVERSION" required="true()" alert="'软件版本不能为空!'"/>  
      <rule id="dataBizRule7" relation="hARDWAREVERSION" required="true()" alert="'硬件版本不能为空!'"/>  
      <rule id="dataBizRule8" relation="dEADLINERECEIVEDATE" required="true()"
        alert="'最晚进场日期不能为空!'"/>  
      <rule id="dataBizRule9" relation="iNDEEDRECEIVEDATE" required="true()"
        alert="'实际进场日期不能为空!'"/>  
      <rule id="dataBizRule10" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"/>  
      <rule id="dataBizRule11" relation="iNDEEDRETURNDATE" required="true()"
        alert="'实际归还日期不能为空!'"/>  
      <rule id="dataBizRule12" relation="sHAREDFLAG" required="true()" alert="'是否允许资源共用不能为空!'"/> 
    <rule id="dataBizRule3" relation="mANUFACTUREID" required="true()" alert="'供应商名称不能为空!'"></rule>
  <rule id="dataBizRule16" relation="dEVICEID" alert="'设备ID不能为空!'" required="true()"></rule>
  <filter name="filter0" id="filter1"></filter>
  <calculate-relation relation="recCB" id="calculate-relation2"></calculate-relation>
  <rule id="dataBizRule1" relation="aPPLICATIONNO" required="true()" alert="'检测申请不能为空!'"></rule></data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SAMPLE_DEVICE_HARDWARE_INFO" confirm-delete="false" id="dataDetail"
      limit="20" offset="0" update-mode="whereAll" direct-delete="true"> 
      <reader action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_HARDWARE_INFOAction"
        id="default4"/>  
      <writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_HARDWARE_INFOAction"
        id="default5"/>  
      <creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_HARDWARE_INFOAction"
        id="default6"/>  
      <master data="dataMaster" id="master1" relation="sAMPLEDEVICENO"/> 
    <rule id="dataBizRule13" relation="sAMPLEDEVICENO" required="true()" alert="'样品序号不能为空!'"></rule>
  <rule id="dataBizRule14" relation="mODELNAME" required="true()" alert="'模块名称不能为空!'"></rule>
  <calculate-relation relation="CC" id="calculate-relation3"></calculate-relation></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="hetong" concept="TEST_CONTRACT_INFO" data-type="json"> 
      <creator id="default11" action="/metrodetection/system_code/logic/action/createTEST_CONTRACT_INFOAction"/>  
      <reader id="default12" action="/metrodetection/system_code/logic/action/queryTEST_CONTRACT_INFOAction"/>  
      <writer id="default13" action="/metrodetection/system_code/logic/action/saveTEST_CONTRACT_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="xiangmuming" concept="TEST_PROJECT_INFO"> 
      <creator id="default64" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"/>  
      <reader id="default65" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"/>  
      <writer id="default66" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="gongyingshang" concept="AFC_MANUFACTURER_INFO"> 
      <creator id="default96" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"/>  
      <reader id="default97" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"/>  
      <writer id="default98" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="jianceduixiang" concept="DEVICE_TYPE_CODE"><creator id="default16" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default17" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default27" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2">mainActivity.mdDefaultXBLLoaded(event)</xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="jianceshenqing" concept="TEST_APPLICATION_INFO" store-type="simple"><creator id="default22" action="/metrodetection/system_code/logic/action/createTEST_APPLICATION_INFOAction"></creator>
  <reader id="default28" action="/metrodetection/system_code/logic/action/queryTEST_APPLICATION_INFOAction"></reader>
  <writer id="default29" action="/metrodetection/system_code/logic/action/saveTEST_APPLICATION_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="false" id="bizData3" concept="TEST_PROJECT_INFO" store-type="simple"><creator id="default30" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default31" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default32" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="xml" auto-load="true" id="bizData1" concept="SA_Task" store-type="simple" limit="200"><creator id="default7"></creator>
  <reader id="default10" action="/system/logic/action/queryTaskAction"></reader>
  <writer id="default18"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="SAMPLE_DEVICE_MOVING_RECORD" store-type="simple" confirm-refresh="false" direct-delete="true" confirm-delete="false"><creator id="default43" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_MOVING_RECORDAction"></creator>
  <reader id="default46" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_MOVING_RECORDAction"></reader>
  <writer id="default49" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_MOVING_RECORDAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData4" concept="SAMPLE_DEVICE_OCCUPY_INFO" confirm-refresh="false" store-type="simple" direct-delete="true" confirm-delete="false"><creator id="default51" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_OCCUPY_INFOAction"></creator>
  <reader id="default52" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_OCCUPY_INFOAction"></reader>
  <writer id="default53" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_OCCUPY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData5" concept="SAMPLE_DEVICE_HARDWARE_INFO" confirm-delete="false" direct-delete="true" confirm-refresh="false" store-type="simple"><creator id="default54" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_HARDWARE_INFOAction"></creator>
  <reader id="default55" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_HARDWARE_INFOAction"></reader>
  <writer id="default56" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_HARDWARE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData6" concept="SAMPLE_DEVICE_HARDWARE_INFO" store-type="simple">
   <creator id="default58" action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_HARDWARE_INFOAction"></creator>
   <reader id="default59" action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_HARDWARE_INFOAction"></reader>
   <writer id="default57" action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_HARDWARE_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView" class="xui-container"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR"> 
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            id="insertTrigge" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--       <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->
<!--            id="removeTrigger1" onclick="mainActivity.assetDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none;" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.assetDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="customBarItem1"><xforms:trigger id="trigger1">
   <xforms:label id="default35"><![CDATA[供应商移交]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></item>
  <item id="customBarItem2"><xforms:trigger id="trigger2">
   <xforms:label id="default37"><![CDATA[返还供应商]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></item>
  <item id="customBarItem3"><xforms:trigger id="trigger3">
   <xforms:label id="default38"><![CDATA[内部归还]]></xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[mainActivity.trigger3Click(event)]]></xforms:script></xforms:action></xforms:trigger></item>
  <item id="customBarItem4"><xforms:trigger id="trigger4" style="width:114px;">
   <xforms:label id="default60"><![CDATA[受检样品操作履历]]></xforms:label>
  <xforms:action id="action5" ev:event="DOMActivate"><xforms:script id="xformsScript5"><![CDATA[mainActivity.trigger4Click(event)]]></xforms:script></xforms:action></xforms:trigger></item></xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="mainActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column" edit-mode="true"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn7" ref="pROJECTNAME" label="项目名称" type="ro" width="100px"/>  
      <xui:column id="gridColumn4" ref="mANUFACTUREIDCNAME" label="供应商名称" type="ro"
        width="100px"/>  
      <xui:column id="gridColumn3" ref="dEVICETYPECNAME" label="检测对象" type="ed" width="100px"></xui:column><xui:column id="gridColumn1" ref="typ" type="ro" width="100px" label="检测类型"/>  
      <xui:column id="gridColumn8" ref="dEVICEID" label="设备ID" type="ro" width="100px"/>  
      <xui:column id="gridColumn9" ref="iNDEEDRECEIVEDATE" label="实际进场日期" type="ro"
        width="100px" format="yyyy-MM-dd"/>  
      </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="insert-item"/>  
<!--        <item id="barItem13"> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->
<!--            src="/UI/system/images/standardToolbar/standard/save.gif"-->
<!--            style="border:none" title="保存" id="saveMas" onclick="mainActivity.saveMore(event)"/> -->
<!--        </item>   -->
		<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
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
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail"
        id="ngtbDetail" style="width:448px;height:32px;" mode="IMG_TXT_LR"> 
<!--        <item id="barItem23"> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            onclick="mainActivity.insertMasClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建" id="insertMas"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.insertMasClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>          <item name="save-item" id="barItem9"/>  
<!--        <item> -->
<!--       <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            id="remove" onclick="mainActivity.setDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none" title="删除"/> -->
<!--        </item>    -->
		<item> 
          <xforms:trigger appearance="image-text" id="remove" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.setDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="refresh-item" id="barItem10"/>  
        <item name="first-item" id="barItem22"/>  
        <item name="pre-item" id="barItem24"/>  
        <item name="next-item" id="barItem26"/>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail"
      id="grdDetail"> 
      <column label="#master_checkbox" width="30px" ref="CC" type="checkbox"
        align="center"/> 
      <column id="default23" label="模块名称" ref="mODELNAME" type="inputbtn" width="107px" onEditDone="mainActivity.grdDetail_mODELNAMEEditDone"/>  
      <column id="default24" label="模块型号" ref="mODELSTYLE" type="ed" width="106px"/>  
      <column id="default25" label="模块数量" ref="mODELNUMBER" type="ed" width="100px"/>  
      <column id="default26" label="备注" ref="mEMO" type="ed" width="184px"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;" class="xui-tabPanel"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="38px"> 
              <place control="tbsMaster1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="375px"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5" style="width:688px;height:320px;"></place></top>  
            <center id="borderLayout-center2"> 
              <xui:place control="toolbars1" id="controlPlace7" style="width:519px;"/>  
              <place control="grdDetail" id="controlPlace6" style="width:527px;height:213px;"/> 
            </center>  
            <left size="51px" id="borderLayout-left1"/> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    <xui:place control="yijiaoDialog" id="controlPlace9" style="position:absolute;top:440px;left:251px;"></xui:place>
  <xui:place control="fanhuanDialog" id="controlPlace15" style="position:absolute;top:447px;left:368px;"></xui:place>
  <xui:place control="neibuguihuanDialog" id="controlPlace16" style="position:absolute;top:448px;left:506px;"></xui:place>
  <xui:place control="chaxunDialog" id="controlPlace17" style="position:absolute;top:460px;left:644px;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="vDetail" class="xui-container">
   <layout id="layout1" style="position:relative;height:279px;" type="absolute">
    <place control="iptDEVICESTYLEok" id="default36" style="font-size:10pt;position: absolute;left:130px;top:89px;"></place>
    <place control="iptDEVICEIDok" id="default40" style="font-size:10pt;position: absolute;left:130px;top:119px;"></place>
    <place control="iptSOFTWAREVERSIONok" id="default42" style="font-size:10pt;position: absolute;left:424px;top:118px;"></place>
    <place control="iptHARDWAREVERSIONok" id="default44" style="font-size:10pt;position: absolute;left:130px;top:149px;"></place>
    <place control="iptINDEEDRECEIVEDATEok" id="default48" style="font-size:10pt;position: absolute;left:130px;top:179px;"></place>
    <place control="iptRETURNDATEok" id="default50" style="font-size:10pt;position: absolute;left:424px;top:179px;"></place>
    <xhtml:label id="label2" style="position:absolute;left:64px;top:65px;" class="xui-label">供应商名称</xhtml:label>
    <xhtml:label id="label3" style="position:absolute;top:94px;left:76px;" class="xui-label">对象型号</xhtml:label>
    <xhtml:label id="label4" style="position:absolute;left:87px;top:124px;" class="xui-label">设备ID</xhtml:label>
    <xhtml:label id="label5" style="position:absolute;left:76px;top:154px;" class="xui-label">硬件版本</xhtml:label>
    <xhtml:label id="label6" style="position:absolute;left:51px;top:183px;" class="xui-label">实际进场日期</xhtml:label>
    <xhtml:label id="label8" style="position:absolute;left:100px;top:233px;" class="xui-label">备注</xhtml:label>
    <xhtml:label id="label10" style="position:absolute;left:370px;top:65px;" class="xui-label">检测对象</xhtml:label>
    <xhtml:label id="label11" style="position:absolute;left:370px;top:93px;" class="xui-label">检测类型</xhtml:label>
    <xhtml:label id="label12" style="position:absolute;left:371px;top:123px;" class="xui-label">软件版本</xhtml:label>
    <xhtml:label id="label13" style="position:absolute;top:152px;left:346px;" class="xui-label">最晚进场日期</xhtml:label>
    <xhtml:label id="label14" style="position:absolute;width:110px;top:182px;left:347px;" class="xui-label">预计归还日期</xhtml:label>
    <xhtml:label id="label15" style="position:absolute;width:120px;top:212px;left:28px;" class="xui-label">是否允许资源共用</xhtml:label>
    <xhtml:label id="label16" style="position:absolute;color:#FF0000;width:10px;left:68px;top:154px;" class="xui-label">*</xhtml:label>
    <xhtml:label id="label17" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;width:10px;left:68px;top:154px;">*</xhtml:label>
    <xhtml:label id="label18" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;left:68px;top:154px;">*</xhtml:label>
    <xhtml:label id="label19" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:10px;left:68px;top:154px;">*</xhtml:label>
    <xhtml:label id="label21" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:56px;top:65px;">*</xhtml:label>
    <xhtml:label id="label24" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:43px;top:182px;">*</xhtml:label>
    <xhtml:label id="label25" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:362px;top:66px;">*</xhtml:label>
    <xhtml:label id="label27" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:363px;top:93px;">*</xhtml:label>
    <xhtml:label id="label28" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:363px;top:123px;">*</xhtml:label>
    <xhtml:label id="label29" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;top:152px;left:338px;">*</xhtml:label>
    <xhtml:label id="label30" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;top:182px;left:339px;">*</xhtml:label>
    <xhtml:label id="label31" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;top:211px;left:21px;">*</xhtml:label>
    <xhtml:label id="label32" style="position:absolute;top:2px;left:0px;height:18px;width:580px;color:#000000;background-color:#F2FFFD;font-weight:bold;text-align:center;" class="xui-label">受检样品信息</xhtml:label>
    <xhtml:label id="label33" class="xui-label" style="position:absolute;color:#000000;background-color:#F2FFFD;position:absolute;font-weight:bold;width:580px;top:321px;height:18px;left:0px;text-align:center;">受检样品硬件配置信息</xhtml:label>
    <xui:place control="gridSelect1ok" id="controlPlace4" style="position:absolute;top:88px;left:424px;"></xui:place>
    <xui:place control="gridSelect4ok" id="controlPlace11" style="position:absolute;left:130px;top:59px;"></xui:place>
    <xui:place control="radio1ok" id="controlPlace8" style="position:absolute;top:206px;left:130px;"></xui:place>
    <xui:place control="gridSelect5ok" id="controlPlace12" style="position:absolute;top:59px;left:424px;"></xui:place>
    <xui:place control="textarea2ok" id="controlPlace14" style="position:absolute;width:450px;height:78px;left:130px;top:233px;"></xui:place>
    <xhtml:label id="label7" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:80px;top:124px;">*</xhtml:label>
  <xui:place control="input1" id="controlPlace13" style="position:absolute;left:424px;top:147px;"></xui:place>
  <xhtml:label id="label1" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;position:absolute;left:68px;top:36px;">*</xhtml:label>
  <xhtml:label id="label9" style="position:absolute;left:75px;top:35px;" class="xui-label"><![CDATA[检测申请]]></xhtml:label>
  <xui:place control="gridSelect1" id="controlPlace10" style="position:absolute;left:130px;width:449px;top:30px;"></xui:place></layout> 
   <xforms:input id="iptDEVICESTYLEok" ref="data('dataMaster')/dEVICESTYLE"></xforms:input>
   <xforms:input id="iptDEVICEIDok" ref="data('dataMaster')/dEVICEID"></xforms:input>
   <xforms:input id="iptSOFTWAREVERSIONok" ref="data('dataMaster')/sOFTWAREVERSION"></xforms:input>
   <xforms:input id="iptHARDWAREVERSIONok" ref="data('dataMaster')/hARDWAREVERSION"></xforms:input>
   <xforms:input id="iptINDEEDRECEIVEDATEok" ref="data('dataMaster')/iNDEEDRECEIVEDATE" format="yyyy-MM-dd"></xforms:input>
   <xforms:input id="iptRETURNDATEok" ref="data('dataMaster')/rETURNDATE" format="yyyy-MM-dd"></xforms:input>
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1ok" ref="data('dataMaster')/dECTIONTYPE">
    <xforms:label id="xuiLabel3" ref="cONTRACT_CODE"></xforms:label>
    <xforms:value id="default8" ref="TEST_CONTRACT_INFO"></xforms:value>
    <xforms:itemset id="default9">
     <itemset-data xmlns="" id="default77">
      <rows id="default78">
       <row id="default79">
        <cell id="default80">1</cell>
        <cell id="default81">软件</cell></row> 
       <row id="default82">
        <cell id="default83">2</cell>
        <cell id="default84">硬件</cell></row> 
       <row id="default85">
        <cell id="default86">3</cell>
        <cell id="default87">全部</cell></row> </rows> </itemset-data> 
     <xforms:column ref="TEST_CONTRACT_INFO" visible="false" id="default105"></xforms:column>
     <xforms:column ref="cONTRACT_CODE" id="default106"></xforms:column></xforms:itemset> </xhtml:div> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4ok" ref="data('dataMaster')/mANUFACTUREID" label-ref="data('dataMaster')/mANUFACTUREIDCNAME">
    <xforms:label ref="mANUFACTUREIDCNAME" id="xuiLabel6"></xforms:label>
    <xforms:value ref="AFC_MANUFACTURER_INFO" id="default94"></xforms:value>
    <xforms:itemset id="default95" data="gongyingshang" auto-load-data="true">
     <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default103"></xforms:column>
     <xforms:column ref="mANUFACTUREIDCNAME" id="default104"></xforms:column></xforms:itemset> </xhtml:div> 
   <xforms:select1 ref="data('dataMaster')/sHAREDFLAG" id="radio1ok" class="horizontal">
    <xforms:item id="selectItem1">
     <xforms:label id="xuiLabel7">是</xforms:label>
     <xforms:value id="default20">0</xforms:value></xforms:item> 
    <xforms:item id="selectItem2">
     <xforms:label id="xuiLabel8">否</xforms:label>
     <xforms:value id="default21">1</xforms:value></xforms:item> </xforms:select1> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5ok" ref="data('dataMaster')/dEVICETYPE">
    <xforms:label ref="dEVICETYPECNAME" id="xuiLabel9"></xforms:label>
    <xforms:value ref="dEVICETYPE" id="default14"></xforms:value>
    <xforms:itemset id="default15" data="jianceduixiang" auto-load-data="true">
     <xforms:column ref="dEVICETYPE" visible="false" id="default45"></xforms:column>
     <xforms:column ref="dEVICETYPECNAME" id="default47"></xforms:column></xforms:itemset> </xhtml:div> 
   <xforms:textarea ref="data('dataMaster')/mEMO1" id="textarea2ok"></xforms:textarea>
  <xforms:input id="input1" ref="data('dataMaster')/dEADLINERECEIVEDATE" format="yyyy-MM-dd"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/aPPLICATIONNO">
   <xforms:label ref="sName" id="default19"></xforms:label>
   <xforms:value ref="sData1" id="default33"></xforms:value>
   <xforms:itemset id="default34" data="bizData1" auto-load-data="true">
  
  <xforms:column ref="sData1" visible="false" id="default39"></xforms:column>
  <xforms:column ref="sName" id="default41"></xforms:column></xforms:itemset></xhtml:div></xui:view>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="供应商移交" width="600px" height="400px" modal="true" id="yijiaoDialog" url="/UI/metrodetection/asset_information/process/SampleDeviceInfo3/yijiao.w" onClose="mainActivity.yijiaoDialogClose"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="返还供应商" width="550px" height="350px" modal="true" id="fanhuanDialog" url="/UI/metrodetection/asset_information/process/SampleDeviceInfo3/fanhuan.w"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="内部归还" width="550px" height="350px" modal="true" id="neibuguihuanDialog" url="/UI/metrodetection/asset_information/process/SampleDeviceInfo3/neibuguihuan.w"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="受检样品操作履历" width="800px" height="700px" modal="true" id="chaxunDialog" url="/UI/metrodetection/asset_information/process/SampleDeviceInfo3/chaxun.w"></xhtml:div></xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

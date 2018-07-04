<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:453px;left:454px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TEST_TASK_EXECUTE_PROBLEM" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" store-type="simple" onValueChanged="mainActivity.dataMainValueChanged" onIndexChanged="mainActivity.dataMainIndexChanged" filter-relations="tESTCASEID,sUBTESTCASEID,eXECUTEDATETIME,pROBLEMID,pROBLEMPRIORCNAME,pROBLEMTYPECNAME,tASKNAME"> 
      <reader action="/metrodetection/defect_information/logic/action/NewProjectAction"
        id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTEST_TASK_EXECUTE_PROBLEMAction"
        id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createTEST_TASK_EXECUTE_PROBLEMAction"
        id="default5"/>  
      <rule id="default11" relation="dECTIONPROBLEMNO" required="true()"/>  
      <rule id="default14" relation="pROJECTID" required="true()"/>  
      <rule id="default17" relation="tASKID" required="true()"/>  
      <rule id="default20" relation="dEVICEID" required="true()"/>  
      <rule id="default23" relation="tESTCASEID" required="true()"/>  
      <rule id="default26" relation="sUBTESTCASEID" required="true()"/>  
      <rule id="default29" relation="sUBTESTCASESTEPID" required="true()"/>  
      <rule id="default32" relation="eXECUTEDATETIME" required="true()"/>  
      <rule id="default35" relation="pROBLEMPRIOR" required="true()"/>  
      <rule id="default38" relation="pROBLEMTYPE" required="true()"/>  
      <rule id="default41" relation="pROBLEMDESC" required="true()"/>  
      <rule id="default44" relation="oPERATORID" required="true()"/>  
      <rule id="default47" relation="rEPORTDATE" required="true()"/>  
      <rule id="default52" relation="pROBLEMID" required="true()"/>  
      <master id="master2"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData7" concept="AFC_MANUFACTURER_INFO"><creator id="default24" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"></creator>
  <reader id="default27" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default30" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"></writer></data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="bizData1" concept="PROBLEM_RESOURCE_INFO"
      store-type="simple" confirm-refresh="false" onValueChanged="mainActivity.bizData1ValueChanged">
      <creator id="default55" action="/metrodetection/defect_information/logic/action/createPROBLEM_RESOURCE_INFOAction"/>  
      <reader id="default56" action="/metrodetection/defect_information/logic/action/ProblemAction"/>  
      <writer id="default57" action="/metrodetection/defect_information/logic/action/savePROBLEM_RESOURCE_INFOAction"/>  
      <master id="master1"/>
    </data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="DETECTION_OBJECT_TYPE"><creator id="default43" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default50" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default51" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData3" concept="DEVICE_TYPE_CODE"><creator id="default66" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default67" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default68" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData4" concept="DETECTION_RANGE_TYPE"><creator id="default89" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"></creator>
  <reader id="default92" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"></reader>
  <writer id="default93" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData5" concept="DETECTION_RANGE_CODE"><creator id="default103" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_CODEAction"></creator>
  <reader id="default104" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_CODEAction"></reader>
  <writer id="default105" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData6" concept="PROBLEM_PRIOR_CODE"><creator id="default115" action="/metrodetection/system_code/logic/action/createPROBLEM_PRIOR_CODEAction"></creator>
  <reader id="default116" action="/metrodetection/system_code/logic/action/queryPROBLEM_PRIOR_CODEAction"></reader>
  <writer id="default117" action="/metrodetection/system_code/logic/action/savePROBLEM_PRIOR_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData8" concept="PROBLEM_TYPE_CODE"><creator id="default127" action="/metrodetection/system_code/logic/action/createPROBLEM_TYPE_CODEAction"></creator>
  <reader id="default128" action="/metrodetection/system_code/logic/action/queryPROBLEM_TYPE_CODEAction"></reader>
  <writer id="default129" action="/metrodetection/system_code/logic/action/savePROBLEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData9" concept="AFC_MANUFACTURER_INFO" store-type="simple"><creator id="default136"></creator>
  <reader id="default137" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default138"></writer></data>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item></item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      	<xui:column id="gridColumn1" ref="tASKNAME" label="任务名称" type="ro" width="100px"></xui:column><column id="default2" label="测试用例ID" ref="tESTCASEID" type="ro" width="158px"
        align="center"/>  
      <column id="default8" label="执行出错日期" ref="eXECUTEDATETIME" type="ro" width="120px" align="center" /><column id="default6" label="测试子用例ID" ref="sUBTESTCASEID" type="ro" width="121px"
        align="center"/>  
        
      <column id="default9" label="问题级别" ref="pROBLEMPRIORCNAME" type="ro" width="141px"
        align="center"/>  
      <xui:column id="gridColumn2" ref="pROBLEMTYPECNAME" label="问题类型" type="ro" width="100px"></xui:column>
  <xui:column id="gridColumn3" ref="pROBLEMID" label="问题编号" type="ed" width="100px"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR" style="height:36px;"> 
        <item> 
          </item>  
        <item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="refresh-item" id="barItem17"/>
        <item name="pre-item" id="barItem21"/>  
        <item name="next-item" id="barItem22"/>  
        <item id="customBarItem5"><xhtml:input type="text" value="" id="input1" class="xui-input" style="width:150px;height:20px;"></xhtml:input></item><item id="customBarItem2"></item>
  <item id="customBarItem6"><xforms:trigger id="trigger2" style="width:108px;">
   <xforms:label id="default13"><![CDATA[查询可用解决方案]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></item><item id="customBarItem4"></item></xui:bar>
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xui:place control-label="iptTASKID" id="controlLabel18" style="position:absolute;top:38px;left:85px;"
          label="任务名称"/>
        <place control="iptTASKID" id="default19" style="font-size:10pt;position: absolute;left:141px;top:30px;"/>  
        <xui:place control-label="iptDEVICEID" id="controlLabel19" style="position:absolute;left:397px;top:38px;"
          label="设备ID"/>
        <place control="iptDEVICEID" id="default22" style="font-size:10pt;position: absolute;left:442px;top:30px;"/>  
        <xui:place control-label="iptTESTCASEID" id="controlLabel20" style="position:absolute;top:68px;left:72px;"
          label="测试用例ID"/>
        <place control="iptTESTCASEID" id="default25" style="font-size:10pt;position: absolute;left:141px;top:60px;"/>  
        <xui:place control-label="iptSUBTESTCASEID" id="controlLabel21" style="position:absolute;top:66px;left:361px;"
          label="测试子用例ID"/>
        <place control="iptSUBTESTCASEID" id="default28" style="font-size:10pt;position: absolute;left:442px;top:60px;"/>  
        <xui:place control-label="iptSUBTESTCASESTEPID" id="controlLabel22" style="position:absolute;top:98px;left:36px;"
          label="测试子用例步骤ID"/>
        <place control="iptSUBTESTCASESTEPID" id="default31" style="font-size:10pt;position: absolute;left:141px;top:90px;"/>  
        <xui:place control-label="iptEXECUTEDATETIME" id="controlLabel23" style="position:absolute;left:362px;top:98px;"
          label="执行出错时间"/>
        <place control="iptEXECUTEDATETIME" id="default34" style="font-size:10pt;position: absolute;left:442px;top:90px;"/>  
        <xui:place control-label="iptPROBLEMPRIOR" id="controlLabel24" style="position:absolute;top:128px;left:85px;"
          label="问题级别"/>
        <place control="iptPROBLEMPRIOR" id="default37" style="font-size:10pt;position: absolute;left:141px;top:120px;"/>  
        <xui:place control-label="iptPROBLEMTYPE" id="controlLabel25" style="position:absolute;left:386px;top:128px;"
          label="问题类型"/>
        <place control="iptPROBLEMTYPE" id="default40" style="font-size:10pt;position: absolute;left:442px;top:120px;"/>  
        <xui:place control-label="iptOPERATORID" id="controlLabel27" style="position:absolute;left:386px;top:158px;"
          label="检测人员"/>
        <place control="iptOPERATORID" id="default46" style="font-size:10pt;position: absolute;left:442px;top:150px;"/>  
        <xui:place control-label="iptREPORTDATE" id="controlLabel26" style="position:absolute;top:158px;left:85px;"
          label="上报日期"/>
        <place control="iptREPORTDATE" id="default49" style="font-size:10pt;position: absolute;left:141px;top:150px;"/>  
        <xui:place control-label="textarea1" id="controlLabel13" style="position:absolute;top:189px;left:85px;"
          label="问题描述"/>
        <xui:place control="textarea1" id="controlPlace20" style="position:absolute;left:141px;width:456px;top:181px;height:35px;"/>  
        <xui:place control-label="textarea2" id="controlLabel14" style="position:absolute;top:240px;left:109px;"
          label="备注"/>
        <xui:place control="textarea2" id="controlPlace21" style="position:absolute;left:141px;width:456px;top:227px;height:38px;"/>
      <xhtml:label id="label1" style="position:absolute;width:600px;background-color:#ECFFFE;height:18px;left:1px;top:2px;font-weight:bold;color:#000000;text-align:center;" class="xui-label"><![CDATA[检测系统问题]]></xhtml:label>
  <xui:place control="windowDialog2" id="controlPlace18" style="position:absolute;top:310px;left:80px;"></xui:place>
  <xui:place control="windowDialog4" id="controlPlace11" style="position:absolute;top:312px;left:193px;"></xui:place>
  </layout>  
      <xforms:input id="iptTASKID" ref="data('dataMain')/tASKNAME" readonly="true"><xforms:action id="action1" ev:event="xforms-value-changed"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="iptDEVICEID" ref="data('dataMain')/dEVICEID" readonly="true"/>  
      <xforms:input id="iptTESTCASEID" ref="data('dataMain')/tESTCASEID" readonly="true"/>  
      <xforms:input id="iptSUBTESTCASEID" ref="data('dataMain')/sUBTESTCASEID" readonly="true"/>  
      <xforms:input id="iptSUBTESTCASESTEPID" ref="data('dataMain')/sUBTESTCASESTEPID"
        readonly="true"/>  
      <xforms:input id="iptEXECUTEDATETIME" ref="data('dataMain')/eXECUTEDATETIME" format="yyyy-MM-dd"
        disabled="true"/>  
      <xforms:input id="iptPROBLEMPRIOR" ref="data('dataMain')/pROBLEMPRIORCNAME" readonly="true"/>  
      <xforms:input id="iptPROBLEMTYPE" ref="data('dataMain')/pROBLEMTYPECNAME" readonly="true"/>  
      <xforms:input id="iptOPERATORID" ref="data('dataMain')/oPERATORNAME" readonly="true"/>  
      <xforms:input id="iptREPORTDATE" ref="data('dataMain')/rEPORTDATE" format="yyyy-MM-dd"
        disabled="true"/>  
      <xforms:textarea ref="data('dataMain')/pROBLEMDESC" id="textarea1" readonly="true"/>  
      <xforms:textarea ref="data('dataMain')/mEMO" id="textarea2" readonly="true"/>
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="450px" height="450px" modal="true" id="windowDialog2" url="/UI/metrodetection/defect_information/process/test_task_execute_problem/DialogActivity.w" onReceive="mainActivity.windowDialog2Receive" onClose="mainActivity.windowDialog2Close" status="maximize"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="400px" height="300px" modal="true" id="windowDialog4" url="/UI/metrodetection/defect_information/process/test_task_execute_problem/zhishiyuan.w" onReceive="mainActivity.windowDialog4Receive" status="maximize" onClose="mainActivity.windowDialog4Close"></xhtml:div>
  </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <!--          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:100%;"> -->  
          <!--            <top id="borderLayout-top2" size="40px"> -->  
          <place control="tbsMain2" id="controlPlace4" style="height:54px;width:544px;"/>  
          <!--            </top>  -->  
          <!--            <center id="borderLayout-center2"> -->  
          <place control="vDetail" id="controlPlace5" style="width:100%;height:49%;"/>  
          <!--            </center> -->  
          <!--          <bottom size="312px" id="borderLayout-bottom1">-->  
          <xui:place control="view1" id="controlPlace3" style="width:100%;height:47%;"/>  
          <!--          </bottom></xhtml:div> --> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:input ref="data('bizData1')/DEVICE_STYLE" id="DEVICE_STYLE" readonly="true"/>  
    <xforms:input ref="data('bizData1')/HARDWARE_VERSION" id="HARDWARE_VERSION" readonly="true"/>  
    <xforms:input ref="data('bizData1')/PROBLEM_DESC" id="PROBLEM_DESC" readonly="true"/>  
    <xforms:input ref="data('bizData1')/SOLUTION" id="SOLUTION" readonly="true"/>  
    <xforms:input ref="data('bizData1')/MEMO" id="MEMO" readonly="true"/>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xui:place control-label="DEVICE_STYLE" style="font-size:10pt;position: absolute;left:407px;top:137px;"
          id="controlLabel4" label="对象型号">对象型号</xui:place>  
        <xui:place control="DEVICE_STYLE" style="position: absolute;left:465px;top:129px;"
          id="controlPlace9"/>  
        <xui:place control-label="HARDWARE_VERSION" style="font-size:10pt;position: absolute;left:78px;top:133px;"
          id="controlLabel7" label="版本信息">版本信息</xui:place>  
        <xui:place control="HARDWARE_VERSION" style="position: absolute;left:138px;top:128px;"
          id="controlPlace12"/>  
        <xui:place control-label="PROBLEM_DESC" style="font-size:10pt;position: absolute;left:78px;top:225px;"
          id="controlLabel10" label="问题描述">问题描述</xui:place>  
        <xui:place control="PROBLEM_DESC" style="position: absolute;width:482px;left:138px;top:221px;"
          id="controlPlace15"/>  
        <xui:place control-label="SOLUTION" style="font-size:10pt;position: absolute;left:78px;top:194px;"
          id="controlLabel11" label="解决方案">解决方案</xui:place>  
        <xui:place control="SOLUTION" style="position: absolute;width:482px;left:138px;top:190px;"
          id="controlPlace16"/>  
        <xui:place control-label="MEMO" style="font-size:10pt;position: absolute;left:104px;top:256px;"
          id="controlLabel12" label="备注">备注</xui:place>  
        <xui:place control="MEMO" style="position: absolute;width:482px;left:138px;top:252px;"
          id="controlPlace17"/>  
        <xhtml:label id="label2" style="position:absolute;width:600px;background-color:#ECFFFE;height:18px;top:3px;left:2px;font-weight:bold;color:#000000;text-align:center;" class="xui-label"><![CDATA[检测系统知识库]]></xhtml:label>
  <xui:place control-label="input2" id="controlLabel1" style="position:absolute;top:43px;left:82px;" label="受测厂商"></xui:place><xui:place control="input2" id="controlPlace6" style="position:absolute;top:35px;left:138px;"></xui:place>
  <xui:place control-label="input5" id="controlLabel3" style="position:absolute;left:34px;top:73px;" label="应用检测对象类型"></xui:place><xui:place control="input5" id="controlPlace10" style="position:absolute;left:138px;top:66px;"></xui:place>
  <xui:place control-label="input6" id="controlLabel5" style="position:absolute;left:387px;top:75px;" label="应用检测对象"></xui:place><xui:place control="input6" id="controlPlace13" style="position:absolute;left:465px;top:67px;"></xui:place>
  <xui:place control-label="input7" id="controlLabel6" style="position:absolute;left:34px;top:103px;" label="应用检测方面类型"></xui:place><xui:place control="input7" id="controlPlace14" style="position:absolute;left:138px;top:97px;"></xui:place>
  <xui:place control-label="input8" id="controlLabel8" style="position:absolute;left:387px;top:106px;" label="应用检测方面"></xui:place><xui:place control="input8" id="controlPlace19" style="position:absolute;left:465px;top:98px;"></xui:place>
  <xui:place control-label="input9" id="controlLabel9" style="position:absolute;left:82px;top:164px;" label="问题级别"></xui:place><xui:place control="input9" id="controlPlace22" style="position:absolute;left:138px;top:159px;"></xui:place>
  <xui:place control-label="input10" id="controlLabel15" style="position:absolute;left:411px;top:169px;" label="问题类型"></xui:place><xui:place control="input10" id="controlPlace23" style="position:absolute;left:465px;top:160px;"></xui:place>
  <xui:place control-label="gridSelect2" id="controlLabel16" style="position:absolute;top:47px;left:411px;" label="厂商类型"></xui:place><xui:place control="gridSelect2" id="controlPlace24" style="position:absolute;top:39px;left:465px;"></xui:place></layout>  
      <xforms:input ref="data('bizData1')/mANUFACTUREIDCNAME" id="MANUFACTURE_ID"/>  
      <xforms:input ref="data('bizData1')/dETECTIONOBJECTCNAME" id="APPLY_FOR_OBJECT"/>  
      <xforms:input ref="data('bizData1')/dEVICETYPECNAME" id="APPLY_FOR_DEVICE_TYPE"/>  
      <xforms:input ref="data('bizData1')/DEVICE_STYLE" id="DEVICE_STYLE"/>  
      <xforms:input ref="data('bizData1')/dETECTIONRANGECNAME" id="APPLY_FOR_RANGE"/>  
      <xforms:input ref="data('bizData1')/rANGEIDCNAME" id="APPLY_FOR_SUB_RANGE"/>  
      <xforms:input ref="data('bizData1')/HARDWARE_VERSION" id="HARDWARE_VERSION"/>  
      <xforms:input ref="data('bizData1')/pROBLEMPRIORCNAME" id="PROBLEM_PRIOR"/>  
      <xforms:input ref="data('bizData1')/pROBLEMTYPECNAME" id="PROBLEM_TYPE"/>  
      <xforms:input ref="data('bizData1')/PROBLEM_DESC" id="PROBLEM_DESC"/>  
      <xforms:input ref="data('bizData1')/SOLUTION" id="SOLUTION"/>  
      <xforms:input ref="data('bizData1')/MEMO" id="MEMO"/>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="bizData1" style="height:36px;"> 
          <item id="customBarItem3"> 
            <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label id="default12">新建</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action2"> 
                <xforms:script id="xformsScript2">mainActivity.insertMasClick(event)</xforms:script>
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="save-item" id="barItem5"/>  
          <item name="delete-item" id="barItem6"/>  
          <item name="refresh-item" id="barItem7"/>  
          <item name="filter-pro-item" id="customBarItem1"/>  
          <item name="first-item" id="barItem2"/>  
          <item name="pre-item" id="barItem8"/>  
          <item name="next-item" id="barItem9"/>  
          <item name="last-item" id="barItem10"/>
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="" width="400px" height="300px" modal="true" id="windowDialog1" url="/UI/metrodetection/defect_information/process/test_task_execute_problem/DialogActivity.w"
        onClose="mainActivity.windowDialog1Close"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('bizData1')/mANUFACTURETYPE"
        readonly="true"> 
        <xforms:label ref="col_1" id="default1"/>  
        <xforms:value ref="col_0" id="default7"/>  
        <xforms:itemset id="default42" auto-load-data="true"> 
          <itemset-data xmlns="" id="default77">  
            <rows id="default78">  
              <row id="default79"> 
                <cell id="default80">1</cell>  
                <cell id="default81">设备厂商</cell>
              </row>  
              <row id="default82"> 
                <cell id="default83">2</cell>  
                <cell id="default84">工具厂商</cell>
              </row>  
              <row id="default85"> 
                <cell id="default86">3</cell>  
                <cell id="default87">第三方检测机构</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default90"/>  
          <xforms:column ref="col_1" id="default91"/>
        </xforms:itemset> 
      </xhtml:div> 
    <xforms:input id="input2" ref="data('bizData1')/mANUFACTUREIDCNAME" readonly="true"></xforms:input>
  <xforms:input id="input5" ref="data('bizData1')/dETECTIONOBJECTCNAME" readonly="true"></xforms:input>
  <xforms:input id="input6" ref="data('bizData1')/dEVICETYPECNAME" readonly="true"></xforms:input>
  <xforms:input id="input7" ref="data('bizData1')/dETECTIONRANGECNAME" readonly="true"></xforms:input>
  <xforms:input id="input8" ref="data('bizData1')/rANGEIDCNAME" readonly="true"></xforms:input>
  <xforms:input id="input9" ref="data('bizData1')/pROBLEMPRIORCNAME" readonly="true"></xforms:input>
  <xforms:input id="input10" ref="data('bizData1')/pROBLEMTYPECNAME" readonly="true"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('bizData1')/mANUFACTURETYPE" readonly="true">
   <xforms:label ref="col_1" id="default15"></xforms:label>
   <xforms:value ref="col_0" id="default16"></xforms:value>
   <xforms:itemset id="default18" auto-load-data="true"><itemset-data xmlns="" id="default102">
   <rows xmlns="" id="default106">
    <row id="default107">
     <cell id="default108">1</cell>
     <cell id="default109">设备厂商</cell></row> 
    <row id="default110">
     <cell id="default111">2</cell>
     <cell id="default112">工具厂商</cell></row> 
    <row id="default113">
     <cell id="default114">3</cell>
     <cell id="default118">第三方检测机构</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default121"></xforms:column>
  <xforms:column ref="col_1" id="default122"></xforms:column></xforms:itemset></xhtml:div></xui:view> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

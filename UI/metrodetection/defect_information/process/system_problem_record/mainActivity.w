<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:307px;left:502px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SYSTEM_PROBLEM_RECORD" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" onValueChanged="mainActivity.dataMainValueChanged" onIndexChanged="mainActivity.dataMainIndexChanged" filter-relations="error_date_time,model_name,dection_business,error_id,sYSTEMTYPECNAME,eRRORTYPECNAME,dETECTIONOBJECTCNAME"> 
      <reader action="/metrodetection/defect_information/logic/action/NewSystemAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveSYSTEM_PROBLEM_RECORDAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createSYSTEM_PROBLEM_RECORDAction" id="default5"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="bizData1" concept="SYSTEM_RESOURCE_INFO" store-type="simple" onValueChanged="mainActivity.bizData1ValueChanged"><creator id="default30" action="/metrodetection/system_code/logic/action/createSYSTEM_RESOURCE_INFOAction"></creator>
  <reader id="default31" action="/metrodetection/system_code/logic/action/systemAction"></reader>
  <writer id="default32" action="/metrodetection/system_code/logic/action/saveSYSTEM_RESOURCE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="SYSTEM_TYPE_CODE"><creator id="default36" action="/metrodetection/system_code/logic/action/createSYSTEM_TYPE_CODEAction"></creator>
  <reader id="default37" action="/metrodetection/system_code/logic/action/querySYSTEM_TYPE_CODEAction"></reader>
  <writer id="default38" action="/metrodetection/system_code/logic/action/saveSYSTEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData3" concept="ERROR_TYPE_CODE"><creator id="default48" action="/metrodetection/system_code/logic/action/createERROR_TYPE_CODEAction"></creator>
  <reader id="default49" action="/metrodetection/system_code/logic/action/queryERROR_TYPE_CODEAction"></reader>
  <writer id="default50" action="/metrodetection/system_code/logic/action/saveERROR_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData4" concept="DEVICE_TYPE_CODE"><creator id="default60" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default61" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default62" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          </item>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="出错日期时间" ref="error_date_time" type="ro" width="129px" align="center"/>  
      <column id="default2" label="系统类型" ref="sYSTEMTYPECNAME" type="ro" width="100px" align="center"/>  
      <column id="default6" label="模块名称" ref="model_name" type="ro" width="100px" align="center"/>  
      <column id="default7" label="问题类型" ref="eRRORTYPECNAME" type="ro" width="100px" align="center"/>  
      <column id="default8" label="检测对象" ref="dETECTIONOBJECTCNAME" type="ro" width="100px" align="center"/>  
      <column id="default9" label="检测业务" ref="dection_business" type="ro" width="100px" align="center"/> 
    <xui:column id="gridColumn1" ref="error_id" label="解决问题编号" type="ed" width="100px" align="center"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR" style="width:764px;"> 
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
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="customBarItem5"><xhtml:input type="text" value="" id="input2" class="xui-input" style="height:21px;"></xhtml:input></item><item id="customBarItem2"></item>
  <item id="customBarItem4"><xforms:trigger id="trigger2" style="width:112px;">
   <xforms:label id="default23"><![CDATA[查询可用解决方案]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></item><item id="customBarItem1"></item></xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xui:place control-label="iptError_date_time" id="controlLabel16" style="position:absolute;top:38px;left:325px;" label="出错日期时间"></xui:place><place control="iptError_date_time" id="default13" style="font-size:10pt;position: absolute;top:30px;left:405px;"/>  
        <xui:place control-label="iptSystem_type" id="controlLabel8" style="position:absolute;top:39px;left:68px;" label="系统类型"></xui:place><place control="iptSystem_type" id="default15" style="font-size:10pt;position: absolute;top:31px;left:126px;"/>  
        <xui:place control-label="iptModel_name" id="controlLabel6" style="position:absolute;left:68px;top:99px;" label="模块名称"></xui:place><place control="iptModel_name" id="default17" style="font-size:10pt;position: absolute;top:91px;width:434px;left:126px;"/>  
        <xui:place control-label="iptError_type" id="controlLabel7" style="position:absolute;top:69px;left:68px;" label="问题类型"></xui:place><place control="iptError_type" id="default19" style="font-size:10pt;position: absolute;top:61px;left:126px;"/>  
        <xui:place control-label="iptDection_object" id="controlLabel17" style="position:absolute;top:69px;left:349px;" label="检测对象"></xui:place><place control="iptDection_object" id="default21" style="font-size:10pt;position: absolute;top:61px;left:405px;"/>  
        <xui:place control-label="textarea1" id="controlLabel9" style="position:absolute;top:181px;height:13px;left:68px;" label="问题描述"></xui:place><xui:place control="textarea1" id="controlPlace14" style="position:absolute;height:32px;width:434px;top:168px;left:126px;"></xui:place>
  <xui:place control-label="textarea2" id="controlLabel10" style="position:absolute;top:231px;height:13px;left:92px;" label="备注"></xui:place><xui:place control="textarea2" id="controlPlace15" style="position:absolute;height:34px;width:434px;top:214px;left:126px;"></xui:place>
  <xui:place control-label="textarea3" id="controlLabel11" style="position:absolute;top:137px;height:13px;left:68px;" label="检测业务"></xui:place><xui:place control="textarea3" id="controlPlace16" style="position:absolute;height:31px;width:434px;top:123px;left:126px;"></xui:place>
  <xui:place control="windowDialog1" id="controlPlace6" style="position:absolute;top:312px;left:80px;"></xui:place>
  <xhtml:label id="label2" style="position:absolute;top:5px;left:2px;height:18px;width:600px;background-color:#ECFFFE;font-weight:bold;color:#000000;text-align:center;" class="xui-label"><![CDATA[受测系统问题]]></xhtml:label>
  <xui:place control="windowDialog2" id="controlPlace9" style="position:absolute;top:253px;left:68px;"></xui:place></layout>  
      <xforms:input id="iptError_date_time" ref="data('dataMain')/error_date_time" disabled="true"></xforms:input>  
      <xforms:input id="iptSystem_type" ref="data('dataMain')/sYSTEMTYPECNAME" readonly="true"><xforms:action id="action1" ev:event="xforms-value-changed"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="iptModel_name" ref="data('dataMain')/model_name" readonly="true"></xforms:input>  
      <xforms:input id="iptError_type" ref="data('dataMain')/eRRORTYPECNAME" readonly="true"></xforms:input>  
      <xforms:input id="iptDection_object" ref="data('dataMain')/dETECTIONOBJECTCNAME" readonly="true"></xforms:input>  
      <xforms:textarea ref="data('dataMain')/error_desc" id="textarea1" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/memo" id="textarea2" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/dection_business" id="textarea3" readonly="true"></xforms:textarea>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="400px" height="300px" modal="true" id="windowDialog1" url="/UI/metrodetection/defect_information/process/system_problem_record/DialogActivity.w" onReceive="mainActivity.windowDialog1Receive" onClose="mainActivity.windowDialog1Close" status="maximize"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="400px" height="300px" modal="true" id="windowDialog2" url="/UI/metrodetection/defect_information/process/system_problem_record/ziyuanActivity.w" status="maximize" onReceive="mainActivity.windowDialog2Receive" onClose="mainActivity.windowDialog2Close"></xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
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
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:100%;width:100%;"/> 
            </center> 
          <bottom size="286px" id="borderLayout-bottom1"><xui:place control="view1" id="controlPlace3" style="height:100%;width:100%;"></xui:place></bottom></xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control-label="MODULE_NAME" id="controlLabel5" style="position:absolute;left:64px;top:69px;" label="模块名称"></xui:place><xui:place control="MODULE_NAME" style="position: absolute;top:65px;left:126px;" id="controlPlace8"></xui:place>
  <xui:place control-label="textarea4" id="controlLabel12" style="position:absolute;left:64px;top:112px;" label="检测业务"></xui:place><xui:place control="textarea4" id="controlPlace17" style="position:absolute;height:27px;width:434px;top:98px;left:126px;"></xui:place>
  <xui:place control-label="textarea5" id="controlLabel13" style="position:absolute;left:64px;top:150px;" label="问题描述"></xui:place><xui:place control="textarea5" id="controlPlace18" style="position:absolute;height:27px;width:434px;top:140px;left:126px;"></xui:place>
  <xui:place control-label="textarea6" id="controlLabel14" style="position:absolute;top:193px;left:40px;" label="问题解决方法"></xui:place><xui:place control="textarea6" id="controlPlace19" style="position:absolute;height:31px;width:434px;top:182px;left:126px;"></xui:place>
  <xui:place control-label="textarea7" id="controlLabel15" style="position:absolute;top:243px;left:88px;" label="备注"></xui:place><xui:place control="textarea7" id="controlPlace20" style="position:absolute;height:44px;width:434px;top:228px;left:126px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;height:18px;width:600px;background-color:#ECFFFE;top:5px;left:2px;font-weight:bold;color:#000000;text-align:center;" class="xui-label"><![CDATA[受测系统知识库]]></xhtml:label>
  <xui:place control-label="input1" id="controlLabel1" style="position:absolute;top:36px;left:64px;" label="系统类型"></xui:place><xui:place control="input1" id="controlPlace7" style="position:absolute;top:32px;left:126px;"></xui:place>
  <xui:place control-label="input3" id="controlLabel18" style="position:absolute;left:336px;top:36px;" label="问题类型"></xui:place><xui:place control="input3" id="controlPlace10" style="position:absolute;top:32px;left:405px;"></xui:place>
  <xui:place control-label="input4" id="controlLabel4" style="position:absolute;left:336px;top:69px;" label="检测对象"></xui:place><xui:place control="input4" id="controlPlace11" style="position:absolute;top:65px;left:405px;"></xui:place></layout>
  <xforms:input ref="data('bizData1')/MODULE_NAME" id="MODULE_NAME" readonly="true"></xforms:input>
  <xforms:textarea ref="data('bizData1')/dECTIONBUSINESS" id="textarea4" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/eRRORDESC" id="textarea5" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/eRRORSOLUTION" id="textarea6" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/mEMO" id="textarea7" readonly="true"></xforms:textarea>
  <xforms:input id="input1" ref="data('bizData1')/sYSTEMTYPECNAME" readonly="true"></xforms:input>
  <xforms:input id="input3" ref="data('bizData1')/eRRORTYPECNAME" readonly="true"></xforms:input>
  <xforms:input id="input4" ref="data('bizData1')/dETECTIONOBJECTCNAME" readonly="true"></xforms:input></xui:view></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

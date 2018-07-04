<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:176px;left:394px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SYSTEM_RESOURCE_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" store-type="grid"> 
      <reader action="/metrodetection/system_code/logic/action/systemAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveSYSTEM_RESOURCE_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createSYSTEM_RESOURCE_INFOAction" id="default5"/>  
      <rule id="default10" relation="sYSTEMTYPE" required="true()"/>  
      <rule id="default13" relation="eRRORTYPE" required="true()"/>  
      <rule id="default22" relation="eRRORDESC" required="true()"/>  
      <rule id="default25" relation="eRRORSOLUTION" required="true()"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="systemtype" concept="SYSTEM_TYPE_CODE"><creator id="default24" action="/metrodetection/system_code/logic/action/createSYSTEM_TYPE_CODEAction"></creator>
  <reader id="default26" action="/metrodetection/system_code/logic/action/querySYSTEM_TYPE_CODEAction"></reader>
  <writer id="default27" action="/metrodetection/system_code/logic/action/saveSYSTEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="errortype" concept="ERROR_TYPE_CODE"><creator id="default37" action="/metrodetection/system_code/logic/action/createERROR_TYPE_CODEAction"></creator>
  <reader id="default38" action="/metrodetection/system_code/logic/action/queryERROR_TYPE_CODEAction"></reader>
  <writer id="default39" action="/metrodetection/system_code/logic/action/saveERROR_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="detectionobject" concept="DETECTION_OBJECT_TYPE"><creator id="default49" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default50" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default51" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <xforms:action id="action6" ev:event="xbl-loaded"><xforms:script id="xformsScript6"><![CDATA[ziyuanActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="bizData1" concept="SYSTEM_PROBLEM_RECORD" store-type="simple"><creator id="default12" action="/metrodetection/system_code/logic/action/createSYSTEM_PROBLEM_RECORDAction"></creator>
  <reader id="default14" action="/metrodetection/system_code/logic/action/querySYSTEM_PROBLEM_RECORDAction"></reader>
  <writer id="default15" action="/metrodetection/system_code/logic/action/saveSYSTEM_PROBLEM_RECORDAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[ziyuanActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem3" name="delete-item"/>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[ziyuanActivity.assetDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      <item id="customBarItem2"><xhtml:div component="/UI/system/components/smartFilter.xbl.xml#smartFilter" id="smartFilter1" filter-data="dataMain" filter-relations="eRRORSOLUTION" auto-refresh="true" onGetCondition="ziyuanActivity.smartFilter1GetCondition"></xhtml:div></item>
  <item id="customBarItem3"></item>
  <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
<!--            <xforms:label id="default22"><![CDATA[要搜索的内容]]></xforms:label>  -->
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[xforms.blur(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item> 
  <item id="customBarItem1"></item>
  <item id="customBarItem4"><xforms:trigger id="trigger3" style="width:103px;">
   <xforms:label id="default11"><![CDATA[确认选择该方案]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[ziyuanActivity.trigger3Click(event)]]></xforms:script></xforms:action></xforms:trigger></item></xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="ziyuanActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="选择" width="30px" ref="checkbox" type="html"
        align="center" onRender="ziyuanActivity.grdMain_recCBRender"/> 
      <column id="default1" label="系统类型" ref="sYSTEMTYPECNAME" type="ro" width="124px" align="center"/>  
      <column id="default2" label="问题类型" ref="eRRORTYPECNAME" type="ro" width="124px" align="center"/>  
      <column id="default6" label="模块名称" ref="MODULE_NAME" type="ro" width="121px" align="center"/>  
      <column id="default7" label="检测对象" ref="dETECTIONOBJECTCNAME" type="ro" width="113px" align="center"/>  
      <column id="default8" label="检测业务" ref="dECTIONBUSINESS" type="ro" width="100px" align="center"/>  
      <column id="default9" label="问题描述" ref="eRRORDESC" type="ro" width="100px" align="center"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
        <!--        <item id="barItem13" name="save-item"/>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[ziyuanActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
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
        <place control-label="iptMODULE_NAME" id="default16" style="font-size:10pt;position: absolute;top:73px;left:62px;" label="模块名称"/>  
        <place control="iptMODULE_NAME" id="default17" style="font-size:10pt;position: absolute;top:71px;left:122px;"/>  
        <xui:place control-label="textarea1" id="controlLabel1" style="position:absolute;top:127px;left:66px;" label="检测业务"></xui:place><xui:place control="textarea1" id="controlPlace3" style="position:absolute;left:122px;top:108px;height:49px;"></xui:place>
  <xui:place control-label="textarea2" id="controlLabel2" style="position:absolute;top:198px;left:66px;" label="问题描述"></xui:place><xui:place control="textarea2" id="controlPlace6" style="position:absolute;left:122px;height:49px;top:178px;"></xui:place>
  <xui:place control-label="textarea3" id="controlLabel3" style="position:absolute;left:42px;top:269px;" label="问题解决办法"></xui:place><xui:place control="textarea3" id="controlPlace7" style="position:absolute;height:49px;left:122px;top:248px;"></xui:place>
  <xui:place control-label="textarea4" id="controlLabel4" style="position:absolute;left:90px;top:340px;" label="备注"></xui:place><xui:place control="textarea4" id="controlPlace8" style="position:absolute;width:479px;left:123px;height:50px;top:318px;"></xui:place>
  <xui:place control-label="gridSelect1" id="controlLabel5" style="position:absolute;top:40px;left:66px;" label="系统类型"></xui:place><xui:place control="gridSelect1" id="controlPlace9" style="position:absolute;top:33px;left:122px;"></xui:place>
  <xui:place control-label="gridSelect2" id="controlLabel6" style="position:absolute;top:40px;left:377px;" label="问题类型"></xui:place><xui:place control="gridSelect2" id="controlPlace10" style="position:absolute;top:32px;left:447px;"></xui:place>
  <xui:place control-label="gridSelect3" id="controlLabel7" style="position:absolute;top:72px;left:377px;" label="检测对象"></xui:place><xui:place control="gridSelect3" id="controlPlace11" style="position:absolute;top:64px;left:447px;"></xui:place></layout>  
      <xforms:input id="iptMODULE_NAME" ref="data('dataMain')/MODULE_NAME"></xforms:input>  
      <xforms:textarea ref="data('dataMain')/dECTIONBUSINESS" id="textarea1"><xforms:action id="action4" ev:event="DOMFocusOut"><xforms:script id="xformsScript4"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action5" ev:event="xforms-value-changed"><xforms:script id="xformsScript5"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action10" ev:event="DOMFocusIn"><xforms:script id="xformsScript10"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/eRRORDESC" id="textarea2"><xforms:action id="action7" ev:event="DOMFocusOut"><xforms:script id="xformsScript7"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/eRRORSOLUTION" id="textarea3"><xforms:action id="action8" ev:event="DOMFocusOut"><xforms:script id="xformsScript8"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea4"><xforms:action id="action9" ev:event="DOMFocusOut"><xforms:script id="xformsScript9"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/sYSTEMTYPE">
   <xforms:label ref="sYSTEMTYPECNAME" id="default20"></xforms:label>
   <xforms:value ref="SYSTEM_TYPE_CODE" id="default21"></xforms:value>
   <xforms:itemset id="default23" data="systemtype" auto-load-data="true">
  <xforms:column ref="SYSTEM_TYPE_CODE" visible="false" id="default32"></xforms:column>
  <xforms:column ref="sYSTEMTYPECNAME" id="default33"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/eRRORTYPE">
   <xforms:label ref="eRRORTYPECNAME" id="default34"></xforms:label>
   <xforms:value ref="ERROR_TYPE_CODE" id="default35"></xforms:value>
   <xforms:itemset id="default36" data="errortype" auto-load-data="true">
  <xforms:column ref="ERROR_TYPE_CODE" visible="false" id="default44"></xforms:column>
  <xforms:column ref="eRRORTYPECNAME" id="default45"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/dECTIONOBJECT">
   <xforms:label ref="dETECTIONOBJECTCNAME" id="default46"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default47"></xforms:value>
   <xforms:itemset id="default48" data="detectionobject" auto-load-data="true">
  
  
  
  
  
  
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default40"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default41"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="ziyuanActivity.tabListSelect"> 
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
        <xui:tab id="tabDetail" xforms-select="ziyuanActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:100%;"> 
            <top id="borderLayout-top2" size="41px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2" > 
              <place control="vDetail" id="controlPlace5" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    <xui:place control="windowReceiver1" id="controlPlace12" style="position:absolute;top:264px;left:214px;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1" onReceive="ziyuanActivity.windowReceiver1Receive"></xhtml:div>
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="ziyuanActivity.js"/> 
  </xui:resource> 
</xui:window>

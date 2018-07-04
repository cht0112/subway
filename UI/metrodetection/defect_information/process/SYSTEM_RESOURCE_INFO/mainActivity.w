<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:483px;height:auto;left:429px;"> 
     
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="SYSTEM_TYPE_CODE"><creator id="default31" action="/metrodetection/system_code/logic/action/createSYSTEM_TYPE_CODEAction"></creator>
  <reader id="default32" action="/metrodetection/system_code/logic/action/querySYSTEM_TYPE_CODEAction"></reader>
  <writer id="default33" action="/metrodetection/system_code/logic/action/saveSYSTEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData2" concept="ERROR_TYPE_CODE"><creator id="default43" action="/metrodetection/system_code/logic/action/createERROR_TYPE_CODEAction"></creator>
  <reader id="default44" action="/metrodetection/system_code/logic/action/queryERROR_TYPE_CODEAction"></reader>
  <writer id="default45" action="/metrodetection/system_code/logic/action/saveERROR_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData3" concept="DETECTION_OBJECT_TYPE" store-type="grid"><creator id="default52" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default53" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default54" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="problem" concept="SYSTEM_PROBLEM_RECORD"><creator id="default10" action="/metrodetection/system_code/logic/action/createSYSTEM_PROBLEM_RECORDAction"></creator>
  <reader id="default12" action="/metrodetection/defect_information/logic/action/NewSystemAction"></reader>
  <writer id="default15" action="/metrodetection/system_code/logic/action/saveSYSTEM_PROBLEM_RECORDAction"></writer></data><data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SYSTEM_RESOURCE_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false" onIndexChanged="mainActivity.dataMainIndexChanged" filter-relations="MODULE_NAME,dECTIONBUSINESS,eRRORDESC,eRRORSOLUTION,sYSTEMTYPECNAME,eRRORTYPECNAME,dETECTIONOBJECTCNAME"> 
      <reader action="/metrodetection/system_code/logic/action/systemAction" id="default3" />  
      <writer action="/metrodetection/system_code/logic/action/saveSYSTEM_RESOURCE_INFOAction" id="default4" />  
      <creator action="/metrodetection/system_code/logic/action/createSYSTEM_RESOURCE_INFOAction" id="default5" />  
      <rule id="default11" relation="sYSTEMTYPE" required="true()" alert="'系统类型不能为空'"/>  
      <rule id="default14" relation="eRRORTYPE" required="true()" alert="'问题类型不能为空'"/>  
      <rule id="default21" relation="eRRORDESC" required="true()" alert="'问题描述不能为空'"/>  
      <rule id="default24" relation="eRRORSOLUTION" required="true()" alert="'解决方案不能为空'"/> 
    </data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem3" name="delete-item"/>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.assetDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2"> 
          </item>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
     <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default1" label="系统类型" ref="sYSTEMTYPECNAME" type="ro" width="100px" align="center"/>  
      <column id="default2" label="错误类型" ref="eRRORTYPECNAME" type="ro" width="100px" align="center"/>  
      <xui:column id="gridColumn1" ref="MODULE_NAME" label="模块名称" type="ro" width="100px" align="center"></xui:column><column id="default6" label="检测对象类别" ref="dETECTIONOBJECTCNAME" type="ro" width="100px" align="center"/>  
      <column id="default7" label="检测业务" ref="dECTIONBUSINESS" type="ro" width="100px" align="center"/>  
      <column id="default8" label="问题描述" ref="eRRORDESC" type="ro" width="100px" align="center"/>  
      <column id="default9" label="问题解决方法" ref="eRRORSOLUTION" type="ro" width="100px" align="center"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
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
        <xui:place control-label="input1" id="controlLabel12" style="position:absolute;left:331px;top:16px;" label="模块名称"></xui:place><xui:place control="input1" id="controlPlace3" style="position:absolute;left:411px;top:8px;"></xui:place>
  <xui:place control-label="gridSelect1" id="controlLabel5" style="position:absolute;left:45px;top:16px;" label="系统类型"></xui:place><xui:place control="gridSelect1" id="controlPlace6" style="position:absolute;left:125px;top:8px;"></xui:place>
  <xui:place control-label="gridSelect2" id="controlLabel9" style="position:absolute;left:331px;top:49px;" label="问题类型"></xui:place><xui:place control="gridSelect2" id="controlPlace7" style="position:absolute;left:411px;top:41px;"></xui:place>
  <xui:place control-label="gridSelect3" id="controlLabel6" style="position:absolute;left:45px;top:49px;" label="检测对象"></xui:place><xui:place control="gridSelect3" id="controlPlace8" style="position:absolute;left:125px;top:42px;"></xui:place>
  <xui:place control-label="textarea1" id="controlLabel1" style="position:absolute;left:45px;top:90px;" label="问题描述"></xui:place><xui:place control="textarea1" id="controlPlace9" style="position:absolute;left:125px;width:441px;height:43px;top:74px;"></xui:place>
  <xui:place control-label="textarea2" id="controlLabel2" style="position:absolute;left:45px;top:144px;" label="检测业务"></xui:place><xui:place control="textarea2" id="controlPlace10" style="position:absolute;left:125px;width:440px;height:40px;top:129px;"></xui:place>
  <xui:place control-label="textarea3" id="controlLabel3" style="position:absolute;left:45px;top:207px;" label="解决方案"></xui:place><xui:place control="textarea3" id="controlPlace11" style="position:absolute;width:440px;height:44px;left:126px;top:190px;"></xui:place>
  <xui:place control-label="textarea4" id="controlLabel4" style="position:absolute;left:69px;top:266px;" label="备注"></xui:place><xui:place control="textarea4" id="controlPlace12" style="position:absolute;left:125px;width:441px;height:36px;top:253px;"></xui:place></layout>  
      <xforms:input id="input1" ref="data('dataMain')/MODULE_NAME"><xforms:action id="action2" ev:event="xforms-value-changed"><xforms:script id="xformsScript2"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/sYSTEMTYPE">
   <xforms:label ref="sYSTEMTYPECNAME" id="default13"></xforms:label>
   <xforms:value ref="SYSTEM_TYPE_CODE" id="default29"></xforms:value>
   <xforms:itemset id="default30" data="bizData1" auto-load-data="true">
  <xforms:column ref="SYSTEM_TYPE_CODE" visible="false" id="default38"></xforms:column>
  <xforms:column ref="sYSTEMTYPECNAME" id="default39"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/eRRORTYPE">
   <xforms:label ref="eRRORTYPECNAME" id="default40"></xforms:label>
   <xforms:value ref="ERROR_TYPE_CODE" id="default41"></xforms:value>
   <xforms:itemset id="default42" data="bizData2" auto-load-data="true">
  <xforms:column ref="ERROR_TYPE_CODE" visible="false" id="default50"></xforms:column>
  <xforms:column ref="eRRORTYPECNAME" id="default51"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/dECTIONOBJECT">
   <xforms:label ref="dETECTIONOBJECTCNAME" id="default55"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default56"></xforms:value>
   <xforms:itemset id="default57" data="bizData3" auto-load-data="true">
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default23"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default25"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/eRRORDESC" id="textarea1"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/dECTIONBUSINESS" id="textarea2"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/eRRORSOLUTION" id="textarea3"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea4"></xforms:textarea></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:120%;"> 
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
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:120%;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="width:100%;height:100%;"/> 
            </center> 
          <bottom size="254px" id="borderLayout-bottom1"><xui:place control="view1" id="controlPlace13" style="height:100%;width:100%;"></xui:place></bottom></xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="grid1" style="width:100%;position:absolute;height:100%;left:0;top:0;" id="controlPlace14"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid1" data="problem">
   <column ref="sYSTEMTYPECNAME" label="系统类型" width="100px" type="ro" id="gridColumn3"></column>
   <column ref="model_name" label="模块名称" width="100px" type="ro" id="gridColumn4"></column>
   <column ref="eRRORTYPECNAME" label="问题类型" width="100px" type="ro" id="gridColumn5"></column>
   <column ref="dETECTIONOBJECTCNAME" label="检测对象" width="100px" type="ro" id="gridColumn6"></column>
   <column ref="dection_business" label="检测业务" width="100px" type="ro" id="gridColumn7"></column>
   <column ref="error_date_time" label="出错日期时间" width="100px" type="ro" id="gridColumn2"></column></xhtml:div></xui:view></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:244px;left:660px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="CHANGE_APPLY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll"> 
      <reader action="/metrodetection/system_resource/logic/action/MyQuerryNameAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction" id="default5"/>  
      <rule id="default14" relation="CHANGE_APPLY_NOAPPLYNO" required="true()"/>  
      <rule id="default17" relation="CHANGE_TITLETITLE" required="true()"/>  
      <rule id="default26" relation="CHANGE_CONTENTCONTENT" required="true()"/>  
      <rule id="default43" relation="APPLY_PERSONPERSON" required="true()"/>  
      <rule id="default46" relation="APPLY_DATEDATE" required="true()"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default19" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default20" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default21" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default22" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action2" ev:event="onload"><xforms:script id="xformsScript2"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          </item>  
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
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCC" type="checkbox"
        align="center"/> 
      <xui:column id="gridColumn5" ref="CHANGE_APPLY_NOAPPLYNO" label="变更申请单据号" type="ro" width="180px" align="center"></xui:column><xui:column id="gridColumn1" ref="CHANGE_OBJECTOBJECT" label="变更对象" type="ro" width="156px" align="center"></xui:column><xui:column id="gridColumn6" ref="PROJECT_NAMENAME" label="项目名称" type="ro" width="157px" align="center"></xui:column><xui:column id="gridColumn7" ref="CHANGE_TIMETIME" label="变更完成时间" type="dateTime" width="171px" align="center"></xui:column><xui:column id="gridColumn3" ref="QQ" label="变更批准状态" type="ro" width="168px" align="center"></xui:column>
  <xui:column id="gridColumn4" ref="PLAN_AUDIT_DATEAUDITDATE" label="审批日期" type="dateTime" width="137px" align="center"></xui:column>
  </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xui:place control-label="CHANGE_APPLY_NOAPPLYNO" style="font-size:10pt;position: absolute;top:14px;left:18px;" id="controlLabel1" label="变更申请单据号">CHANGE_APPLY_NOAPPLYNO</xui:place>
  <xui:place control="CHANGE_APPLY_NOAPPLYNO" style="position: absolute;width:253px;top:10px;left:113px;" id="controlPlace8"></xui:place><xui:place control-label="textarea1" style="font-size:10pt;position: absolute;top:99px;left:31px;" id="controlLabel2" label="变更提案标题">CHANGE_TITLETITLE</xui:place>
  <xui:place control="textarea1" id="controlPlace23" style="position:absolute;top:75px;width:487px;height:48px;left:113px;"></xui:place><xui:place control-label="PROJECT_IDID" style="font-size:10pt;position: absolute;top:14px;left:390px;" id="controlLabel3" label="项目ID">PROJECT_IDID</xui:place><xui:place control-label="textarea3" id="controlLabel16" style="position:absolute;top:138px;left:61px;" label="变更内容"></xui:place>
  <xui:place control="PROJECT_IDID" style="position: absolute;width: 153px;top:10px;left:446px;" id="controlPlace10"></xui:place><xui:place control-label="PROJECT_NAMENAME" style="font-size:10pt;position: absolute;left:383px;top:50px;" id="controlLabel4" label="项目名称">PROJECT_NAMENAME</xui:place>
  <xui:place control="PROJECT_NAMENAME" style="position: absolute;width: 153px;top:46px;left:446px;" id="controlPlace11"></xui:place><xui:place control-label="CHANGE_OBJECTOBJECT" style="font-size:10pt;position: absolute;top:50px;left:57px;" id="controlLabel5" label="变更对象">CHANGE_OBJECTOBJECT</xui:place>
  <xui:place control="CHANGE_OBJECTOBJECT" style="position: absolute;top:43px;width:252px;left:113px;" id="controlPlace12"></xui:place><xui:place control-label="CHANGE_TIMETIME" style="font-size:10pt;position: absolute;top:719px;left:31px;" id="controlLabel13" label="变更完成时间">CHANGE_TIMETIME</xui:place>
  <xui:place control="CHANGE_TIMETIME" style="position: absolute;width: 153px;top:716px;left:113px;" id="controlPlace20"></xui:place><xui:place control-label="APPLY_PERSONPERSON" style="font-size:10pt;position: absolute;top:756px;left:44px;" id="controlLabel14" label="变更申请人">APPLY_PERSONPERSON</xui:place>
  <xui:place control="APPLY_PERSONPERSON" style="position: absolute;width: 153px;top:756px;left:113px;" id="controlPlace21"></xui:place><xui:place control-label="APPLY_DATEDATE" style="font-size:10pt;position: absolute;top:719px;left:320px;" id="controlLabel15" label="变更申请日期">APPLY_DATEDATE</xui:place>
  <xui:place control="APPLY_DATEDATE" style="position: absolute;width: 153px;top:715px;left:419px;" id="controlPlace22"></xui:place>
  <xui:place control="textarea3" id="controlPlace25" style="position:absolute;width:486px;left:113px;height:109px;top:138px;"></xui:place>
  <xui:place control-label="textarea4" id="controlLabel41" style="position:absolute;top:272px;left:61px;" label="变更原因"></xui:place><xui:place control="textarea4" id="controlPlace50" style="position:absolute;height:39px;top:264px;width:483px;left:113px;"></xui:place>
  <xui:place control-label="textarea5" id="controlLabel42" style="position:absolute;top:325px;left:37px;" label="变更影响范围"></xui:place><xui:place control="textarea5" id="controlPlace51" style="position:absolute;top:317px;height:41px;width:483px;left:113px;"></xui:place>
  <xui:place control-label="textarea6" id="controlLabel43" style="position:absolute;top:394px;left:25px;" label="变更引入的风险"></xui:place><xui:place control="textarea6" id="controlPlace52" style="position:absolute;top:375px;left:113px;width:483px;height:43px;"></xui:place>
  <xui:place control-label="textarea7" id="controlLabel44" style="position:absolute;top:455px;left:25px;" label="变更解决的风险"></xui:place><xui:place control="textarea7" id="controlPlace53" style="position:absolute;width:481px;top:433px;height:45px;left:113px;"></xui:place>
  <xui:place control-label="textarea8" id="controlLabel45" style="position:absolute;top:507px;left:37px;" label="变更实施过程"></xui:place><xui:place control="textarea8" id="controlPlace54" style="position:absolute;width:481px;height:116px;top:497px;left:113px;"></xui:place>
  <xui:place control-label="textarea16" id="controlLabel46" style=";position:absolute;top:648px;left:37px" label="变更所需资源"></xui:place><xui:place control="textarea16" id="controlPlace55" style="position:absolute;height:46px;top:640px;left:113px;"></xui:place></layout>  
      <xforms:input ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" id="CHANGE_APPLY_NOAPPLYNO" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_IDID" id="PROJECT_IDID" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_NAMENAME" id="PROJECT_NAMENAME" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TIMETIME" id="CHANGE_TIMETIME" readonly="true" disabled="true"></xforms:input>
  <xforms:input ref="data('dataMain')/oPERATORNAME" id="APPLY_PERSONPERSON" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/APPLY_DATEDATE" id="APPLY_DATEDATE" readonly="true" disabled="true"></xforms:input>
  <xforms:textarea ref="data('dataMain')/CHANGE_TITLETITLE" id="textarea1" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="textarea3" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_REASONREASON" id="textarea4" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPACT_RANGERANGE" id="textarea5" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea6" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOLVE_RISKRISK" id="textarea7" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="textarea8" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="textarea16" readonly="true"></xforms:textarea></xui:view>  
    <xui:layout id="rootLayout" style="height:200%;width:200%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="height:100%;width:111%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2"><![CDATA[变更申请]]></xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="width:827px;height:98%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      <xui:tab id="tabPage1">
   <xui:label id="xuiLabel3"><![CDATA[变更审核]]></xui:label>
  <xui:place control="view1" id="controlPlace3" style="width:742px;height:47px;"></xui:place>
  <xui:place control="view2" id="controlPlace7" style="width:100%;height:117%;"></xui:place></xui:tab>
  </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control="toolbars1" id="controlPlace6" style="position:absolute;top:6px;left:5px;width:722px;height:40px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" style="width:239px;" data="dataMain">
   <item name="save-item" id="barItem5"></item>
   <item name="refresh-item" id="barItem7"></item>
   <item name="separator" id="customBarItem2"></item>
   <item name="first-item" id="barItem8"></item>
   <item name="pre-item" id="barItem9"></item>
   <item name="next-item" id="barItem10"></item>
   <item name="last-item" id="barItem16"></item>
   </xui:bar></xhtml:div></xui:view>
  <xui:view auto-load="true" id="view2" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout3">
  <xui:place control-label="textarea9" id="controlLabel19" style="position:absolute;left:34px;top:26px;" label="变更原因合理性评估"></xui:place><xui:place control="textarea9" id="controlPlace26" style="position:absolute;top:13px;left:156px;width:457px;height:37px;"></xui:place>
  <xui:place control-label="textarea10" id="controlLabel20" style="position:absolute;left:46px;top:90px;" label="变更影响范围评估"></xui:place><xui:place control="textarea10" id="controlPlace27" style="position:absolute;left:156px;width:459px;height:44px;top:73px;"></xui:place>
  <xui:place control-label="textarea11" id="controlLabel21" style="position:absolute;left:70px;top:158px;" label="变更风险评估"></xui:place><xui:place control="textarea11" id="controlPlace28" style="position:absolute;width:460px;top:142px;left:154px;height:40px;"></xui:place>
  <xui:place control-label="textarea12" id="controlLabel22" style="position:absolute;left:46px;top:230px;" label="变更实施过程评估"></xui:place><xui:place control="textarea12" id="controlPlace29" style="position:absolute;width:461px;left:154px;top:214px;height:42px;"></xui:place>
  <xui:place control-label="textarea13" id="controlLabel23" style="position:absolute;left:46px;top:305px;" label="变更所需资源评估"></xui:place><xui:place control="textarea13" id="controlPlace30" style="position:absolute;width:463px;top:285px;left:156px;height:51px;"></xui:place>
  <xui:place control-label="textarea14" id="controlLabel24" style="position:absolute;left:46px;top:383px;" label="变更完成时间评估"></xui:place><xui:place control="textarea14" id="controlPlace31" style="position:absolute;width:465px;top:362px;height:52px;left:153px;"></xui:place>
  <xui:place control-label="textarea15" id="controlLabel25" style="position:absolute;left:70px;top:471px;" label="变更受理意见"></xui:place><xui:place control="textarea15" id="controlPlace33" style="position:absolute;width:467px;left:157px;height:69px;top:442px;"></xui:place>
  <xui:place control-label="gridSelect1" id="controlLabel26" style="position:absolute;left:70px;top:554px;" label="变更批准状态"></xui:place><xui:place control-label="input3" id="controlLabel27" style="position:absolute;left:402px;top:550px;" label="审批日期"></xui:place><xui:place control="input3" id="controlPlace35" style="position:absolute;left:469px;top:546px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace56" style="position:absolute;left:156px;top:545px;"></xui:place>
  </layout>
  <xforms:textarea ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="textarea9"><xforms:action id="action3" ev:event="DOMFocusOut"><xforms:script id="xformsScript3"><![CDATA[mainActivity.textarea9Blur(event)]]></xforms:script></xforms:action>
  <xforms:action id="action4" ev:event="xforms-value-changed"><xforms:script id="xformsScript4"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="textarea10"><xforms:action id="action5" ev:event="xforms-value-changed"><xforms:script id="xformsScript5"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action12" ev:event="DOMFocusOut"><xforms:script id="xformsScript12"><![CDATA[mainActivity.textarea10Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="textarea11"><xforms:action id="action6" ev:event="xforms-value-changed"><xforms:script id="xformsScript6"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action13" ev:event="DOMFocusOut"><xforms:script id="xformsScript13"><![CDATA[mainActivity.textarea11Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="textarea12"><xforms:action id="action7" ev:event="xforms-value-changed"><xforms:script id="xformsScript7"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action14" ev:event="DOMFocusOut"><xforms:script id="xformsScript14"><![CDATA[mainActivity.textarea12Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="textarea13"><xforms:action id="action8" ev:event="xforms-value-changed"><xforms:script id="xformsScript8"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action15" ev:event="DOMFocusOut"><xforms:script id="xformsScript15"><![CDATA[mainActivity.textarea13Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="textarea14"><xforms:action id="action9" ev:event="DOMFocusIn"><xforms:script id="xformsScript9"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action10" ev:event="xforms-value-changed"><xforms:script id="xformsScript10"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action16" ev:event="DOMFocusOut"><xforms:script id="xformsScript16"><![CDATA[mainActivity.textarea14Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="textarea15"><xforms:action id="action11" ev:event="xforms-value-changed"><xforms:script id="xformsScript11"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action17" ev:event="DOMFocusOut"><xforms:script id="xformsScript17"><![CDATA[mainActivity.textarea15Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:input id="input3" ref="data('dataMain')/PLAN_AUDIT_DATEAUDITDATE"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/APPROVAL_STATUSSTATUS">
   <xforms:label id="default15" ref="col_1"></xforms:label>
   <xforms:value id="default16" ref="col_0"></xforms:value>
   <xforms:itemset id="default18" auto-load-data="true"><itemset-data xmlns="" id="default31">
   <rows xmlns="" id="default32">
    <row id="default33">
     <cell id="default34">1</cell>
     <cell id="default35">已审核</cell></row> 
    <row id="default36">
     <cell id="default37">2</cell>
     <cell id="default38">审核中</cell></row> 
    <row id="default39">
     <cell id="default40">3</cell>
     <cell id="default41">未审核</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default42"></xforms:column>
  <xforms:column ref="col_1" id="default44"></xforms:column></xforms:itemset></xhtml:div>
  </xui:view></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

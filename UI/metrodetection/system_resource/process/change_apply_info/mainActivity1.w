<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:121px;left:595px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="CHANGE_APPLY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false"> 
      <reader action="/metrodetection/system_resource/logic/action/MyQuerryNameAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction" id="default5"/>  
      <rule id="default13" relation="CHANGE_APPLY_NOAPPLYNO" required="true()" alert="'该选项不能为空'"/>  
      <rule id="default16" relation="CHANGE_TITLETITLE" required="true()" alert="'该选项不能为空'"/>  
      <rule id="default25" relation="CHANGE_CONTENTCONTENT" required="true()" alert="'该选项不能为空'"/>  
      <rule id="default42" relation="APPLY_PERSONPERSON" required="true()" alert="'该选项不能为空'"/>  
      <rule id="default45" relation="APPLY_DATEDATE" required="true()" alert="'该选项不能为空'"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="TEST_PROJECT_INFO"><creator id="default43" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default44" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default48" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default2" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default18" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default19" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default20" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity1.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item> 
        <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity1.removeTrigger1Click(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->
<!--            id="removeTrigger1" onclick="mainActivity1.removeTrigger1Click(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none;" title="删除"/> -->
        </item>   
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="CHANGE_APPLY_NOAPPLYNO,CHANGE_TITLETITLE,PROJECT_IDID,PROJECT_NAMENAME,CHANGE_OBJECTOBJECT,CHANGE_CONTENTCONTENT,CHANGE_REASONREASON,IMPACT_RANGERANGE,POTENTIAL_RISKRISK,RESOLVE_RISKRISK,IMPLEMENTATION_PROCESSPROCESS,RESOURCES_NEEDEDNEEDED,CHANGE_TIMETIME,APPLY_PERSONPERSON,APPLY_DATEDATE,REASON_ASSESSMENTASSESSMENT,RANGE_ASSESSMENTASSESSMENT,RISK_ASSESSMENTASSESSMENT,PROCESS_ASSESSMENTASSESSMENT,RESOURCE_ASSESSMENTASSESSMENT,TIME_ASSESSMENTASSESSMENT,APPROVAL_STATUSSTATUS,ACCEPT_OPINIONOPINION,PLAN_AUDIT_DATEAUDITDATE,PLAN_AUDITORAUDITOR" id="smartFilter1"></xhtml:div> 
        </item>  
        <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif">  
            <xforms:label id="default12">  <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1">  
              <xforms:script id="xformsScript1">  <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity1.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCC" type="checkbox"
        align="center"/> 
      <column id="default1" label="变更提案标题" ref="CHANGE_TITLETITLE" type="ro" width="150px"/>  
      <column id="default6" label="项目名称" ref="PROJECT_NAMENAME" type="ro" width="118px"/>  
      <column id="default7" label="变更对象" ref="CHANGE_OBJECTOBJECT" type="ro" width="100px"/>  
      <column id="default8" label="变更内容" ref="CHANGE_CONTENTCONTENT" type="ro" width="100px"/>  
      <column id="default9" label="变更原因" ref="CHANGE_REASONREASON" type="ro" width="100px"/>  
      <column id="default10" label="变更影响范围" ref="IMPACT_RANGERANGE" type="ro" width="100px"/>  
      <column id="default11" label="变更引入的风险" ref="POTENTIAL_RISKRISK" type="ro" width="100px"/> 
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
        <xhtml:span id="span1" style="font-size:10pt;position:absolute;color:#FF0000;top:37px;left:19px;">  <![CDATA[*]]> </xhtml:span>  
        <xui:place control-label="iptCHANGE_APPLY_NOAPPLYNO" id="controlLabel7" style="position:absolute;top:37px;left:33px;width:101px;height:15px;" label="变更申请单据号"></xui:place><place control="iptCHANGE_APPLY_NOAPPLYNO" id="default15" style="font-size:10pt;position: absolute;left:125px;top:30px;width:471px;"/>  
        <xhtml:span id="span2" style="font-size:10pt;position:absolute;color:#FF0000;top:144px;left:31px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="gridSelect3" id="default21" style="font-size:10pt;position: absolute;top:100px;left:54px;" label="项目名称"/>  
        <place control-label="iptCHANGE_OBJECTOBJECT" id="default23" style="font-size:10pt;position: absolute;top:65px;left:54px;" label="变更对象"/>  
        <place control="iptCHANGE_OBJECTOBJECT" id="default24" style="font-size:10pt;position: absolute;top:65px;left:125px;width:471px;"/>  
        <xhtml:span id="span3" style="font-size:10pt;position:absolute;color:#FF0000;top:209px;left:42px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptCHANGE_TIMETIME" id="default40" style="font-size:10pt;position: absolute;top:661px;left:356px;" label="变更完成时间"/>  
        <place control="iptCHANGE_TIMETIME" id="default41" style="font-size:10pt;position: absolute;top:658px;left:440px;"/>  
        <xhtml:span id="span5" style="font-size:10pt;position:absolute;color:#FF0000;top:663px;left:33px;">  <![CDATA[*]]> </xhtml:span>  
        <xui:place control-label="iptAPPLY_DATEDATE" id="controlLabel10" style="position:absolute;top:666px;left:48px;" label="变更申请日期"></xui:place><place control="iptAPPLY_DATEDATE" id="default47" style="font-size:10pt;position: absolute;top:658px;left:128px;"/> 
      <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;top:100px;width:152px;left:124px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;top:5px;left:2px;height:18px;width:600px;background-color:#F2FFFD;" class="xui-label"><![CDATA[变更申请信息]]></xhtml:label>
  <xui:place control-label="textarea1" id="controlLabel8" style=";position:absolute;top:146px;left:44px" label="变更提案标题"></xui:place><xui:place control="textarea1" id="controlPlace3" style="position:absolute;top:138px;left:124px;width:471px;height:39px;"></xui:place>
  <xui:place control-label="textarea2" id="controlLabel9" style="position:absolute;top:211px;left:54px;" label="变更内容"></xui:place><xui:place control="textarea2" id="controlPlace6" style="position:absolute;top:198px;left:124px;width:470px;height:40px;"></xui:place>
  <xui:place control-label="textarea3" id="controlLabel1" style="position:absolute;top:273px;left:47px;" label="变更原因"></xui:place><xui:place control="textarea3" id="controlPlace8" style="position:absolute;width:469px;height:38px;top:259px;left:125px;"></xui:place>
  <xui:place control-label="textarea4" id="controlLabel2" style="position:absolute;top:343px;left:47px;" label="变更影响范围"></xui:place><xui:place control="textarea4" id="controlPlace9" style="position:absolute;width:469px;left:126px;height:35px;top:331px;"></xui:place>
  <xui:place control-label="textarea5" id="controlLabel3" style="position:absolute;left:32px;top:411px;" label="变更引入的风险"></xui:place><xui:place control="textarea5" id="controlPlace10" style="position:absolute;left:124px;width:469px;height:42px;top:395px;"></xui:place>
  <xui:place control-label="textarea6" id="controlLabel4" style="position:absolute;top:472px;left:33px;" label="变更解决的风险"></xui:place><xui:place control="textarea6" id="controlPlace11" style="position:absolute;left:125px;width:468px;height:39px;top:458px;"></xui:place>
  <xui:place control-label="textarea7" id="controlLabel5" style="position:absolute;left:45px;top:542px;" label="变更实施过程"></xui:place><xui:place control="textarea7" id="controlPlace12" style="position:absolute;width:468px;height:47px;top:524px;left:125px;"></xui:place>
  <xui:place control-label="textarea8" id="controlLabel6" style="position:absolute;top:607px;left:42px;" label="变更所需资源"></xui:place><xui:place control="textarea8" id="controlPlace13" style="position:absolute;height:45px;width:468px;left:126px;top:590px;"></xui:place>
  </layout>  
      <xforms:input id="iptCHANGE_APPLY_NOAPPLYNO" ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO"><xforms:action id="action3" ev:event="DOMFocusOut"><xforms:script id="xformsScript3"><![CDATA[mainActivity1.iptCHANGE_APPLY_NOAPPLYNOBlur(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="iptCHANGE_OBJECTOBJECT" ref="data('dataMain')/CHANGE_OBJECTOBJECT"><xforms:action id="action4" ev:event="DOMFocusOut"><xforms:script id="xformsScript4"><![CDATA[mainActivity1.iptCHANGE_OBJECTOBJECTBlur(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="iptCHANGE_TIMETIME" ref="data('dataMain')/CHANGE_TIMETIME"></xforms:input>  
      <xforms:input id="iptAPPLY_DATEDATE" ref="data('dataMain')/APPLY_DATEDATE"></xforms:input> 
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/PROJECT_IDID" label-ref="data('dataMain')/PROJECT_NAMENAME">
   <xforms:label ref="pROJECTNAME" id="default67"></xforms:label>
   <xforms:value ref="TEST_PROJECT_INFO" id="default68"></xforms:value>
   <xforms:itemset id="default69" data="bizData1" auto-load-data="true">
  <xforms:column ref="TEST_PROJECT_INFO" visible="false" id="default74"></xforms:column>
  <xforms:column ref="pROJECTNAME" id="default75"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/CHANGE_TITLETITLE" id="textarea1"><xforms:action id="action5" ev:event="DOMFocusOut"><xforms:script id="xformsScript5"><![CDATA[mainActivity1.textarea1Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="textarea2"><xforms:action id="action6" ev:event="DOMFocusOut"><xforms:script id="xformsScript6"><![CDATA[mainActivity1.textarea2Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_REASONREASON" id="textarea3"><xforms:action id="action7" ev:event="DOMFocusOut"><xforms:script id="xformsScript7"><![CDATA[mainActivity1.textarea3Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPACT_RANGERANGE" id="textarea4"><xforms:action id="action8" ev:event="DOMFocusOut"><xforms:script id="xformsScript8"><![CDATA[mainActivity1.textarea4Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea5"><xforms:action id="action9" ev:event="DOMFocusOut"><xforms:script id="xformsScript9"><![CDATA[mainActivity1.textarea5Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOLVE_RISKRISK" id="textarea6"><xforms:action id="action10" ev:event="DOMFocusOut"><xforms:script id="xformsScript10"><![CDATA[mainActivity1.textarea6Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="textarea7"><xforms:action id="action11" ev:event="DOMFocusOut"><xforms:script id="xformsScript11"><![CDATA[mainActivity1.textarea7Blur(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="textarea8"><xforms:action id="action12" ev:event="DOMFocusOut"><xforms:script id="xformsScript12"><![CDATA[mainActivity1.textarea8Blur(event)]]></xforms:script></xforms:action></xforms:textarea></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="width:100%;height:150%;"> 
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
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:103%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity1.js"/> 
  </xui:resource> 
</xui:window>

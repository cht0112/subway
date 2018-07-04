<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:513px;left:503px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="CHANGE_APPLY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false" onValueChanging="mainActivity1.dataMainValueChanging"> 
      <reader action="/metrodetection/system_resource/logic/action/MyQuerryNameAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction" id="default5"/>  
      <rule id="default10" relation="CHANGE_APPLY_NOAPPLYNO" required="true()"/>  
      <rule id="default13" relation="CHANGE_TITLETITLE" required="true()"/>  
      <rule id="default22" relation="CHANGE_CONTENTCONTENT" required="true()"/>  
      <rule id="default39" relation="APPLY_PERSONPERSON" required="true()"/>  
      <rule id="default42" relation="APPLY_DATEDATE" required="true()"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default11" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default12" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default14" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default15" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[mainActivity1.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          </item>  
        <item> 
          <xforms:trigger appearance="image-text" id="removeTrigr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity1.removeMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>     
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity1.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>
      <column id="default1" label="变更申请单据号" ref="CHANGE_APPLY_NOAPPLYNO" type="ro" width="199px" align="center"/>  
      <column id="default2" label="项目名称" ref="PROJECT_NAMENAME" type="ro" width="149px" align="center"/>  
      <column id="default6" label="变更对象" ref="CHANGE_OBJECTOBJECT" type="ro" width="152px" align="center"/>  
      <column id="default7" label="变更完成时间" ref="CHANGE_TIMETIME" type="dateTime" width="100px" align="center" format="yyyy-MM-dd"/>  
      <column id="default8" label="变更批准状态" ref="QQ" type="ro" width="151px" align="center"/>  
      <xui:column id="gridColumn1" ref="oPERATORNAME1" label="审批人" type="ro" width="100px" align="center"></xui:column>
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
      <layout id="layout2" style="height:100%;position:relative;" type="flow"> 
     <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain3"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain3" mode="IMG_TXT_LR"> 
        <item id="barItem15" name="refresh-item"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style=" height: 100%;width:415%;" id="excelLayout1" src="excelLayout1.xls"></xhtml:div></layout>  
      <xforms:input ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" id="CHANGE_APPLY_NOAPPLYNO1" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TITLETITLE" id="CHANGE_TITLETITLE1" readonly="true" style="width:458px;"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_IDID" id="PROJECT_IDID1" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_NAMENAME" id="PROJECT_NAMENAME1" readonly="true" style="width:458px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT1" readonly="true" style="width:459px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="CHANGE_CONTENTCONTENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_REASONREASON" id="CHANGE_REASONREASON1"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPACT_RANGERANGE" id="IMPACT_RANGERANGE1"></xforms:input>
  <xforms:input ref="data('dataMain')/POTENTIAL_RISKRISK" id="POTENTIAL_RISKRISK1"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOLVE_RISKRISK" id="RESOLVE_RISKRISK1"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="IMPLEMENTATION_PROCESSPROCESS1"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="RESOURCES_NEEDEDNEEDED1"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TIMETIME" id="CHANGE_TIMETIME1" readonly="true" disabled="true"></xforms:input>
  <xforms:input ref="data('dataMain')/oPERATORNAME" id="APPLY_PERSONPERSON1" readonly="true"></xforms:input>
  <xforms:input ref="data('dataMain')/APPLY_DATEDATE" id="APPLY_DATEDATE1" readonly="true" disabled="true"></xforms:input>
  <xforms:textarea ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="textarea1" style="height:52px;" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_REASONREASON" id="textarea2" style="height:55px;" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPACT_RANGERANGE" id="textarea3" style="height:54px;" readonly="true"></xforms:textarea>
  <xforms:textarea ref="" id="textarea4"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="textarea5" style="height:58px;" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="textarea6" style="height:58px;" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea7" style="height:63px;" readonly="true"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOLVE_RISKRISK" id="textarea8" style="height:60px;" readonly="true"></xforms:textarea>
  <xforms:input id="input1" ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" readonly="true"></xforms:input>
  <xforms:input id="input2" ref="data('dataMain')/CHANGE_APPLY_DOC_NO" readonly="true"></xforms:input></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity1.tabListSelect"> 
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
          <xui:label id="xuiLabel2"><![CDATA[变更申请]]></xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="position:relative;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      <xui:tab id="tabPage1" xforms-select="mainActivity1.tabPage1Select">
   <xui:label id="xuiLabel3"><![CDATA[变更审核]]></xui:label>
  <xui:place control="view1" id="controlPlace3" style="position:relative;width:753px;height:688px;"></xui:place></xui:tab>
  </xhtml:div> 
    </xui:layout> 
    
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="flow" style="position:relative;" id="layout1"><xui:place control="view4" id="controlPlace10" style="width:675px;height:44px;"></xui:place>
  <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:121%;" id="excelLayout2" src="excelLayout4.xls"></xhtml:div></layout>
  <xforms:input ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="REASON_ASSESSMENTASSESSMENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="RANGE_ASSESSMENTASSESSMENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="RISK_ASSESSMENTASSESSMENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="PROCESS_ASSESSMENTASSESSMENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="RESOURCE_ASSESSMENTASSESSMENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="TIME_ASSESSMENTASSESSMENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/APPROVAL_STATUSSTATUS" id="APPROVAL_STATUSSTATUS2"></xforms:input>
  <xforms:input ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="ACCEPT_OPINIONOPINION2"></xforms:input>
  <xforms:input ref="data('dataMain')/PLAN_AUDIT_DATEAUDITDATE" id="PLAN_AUDIT_DATEAUDITDATE2"></xforms:input>
  <xforms:input ref="data('dataMain')/PLAN_AUDITORAUDITOR" id="PLAN_AUDITORAUDITOR2"></xforms:input>
  <xforms:textarea ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="textarea9" style="height:68px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="textarea10" style="height:65px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="textarea11" style="height:69px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/APPROVAL_STATUSSTATUS" id="textarea12" style="height:63px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="textarea13" style="height:70px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="textarea14" style="height:69px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="textarea15" style="height:72px;"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="textarea16" style="height:101px;"></xforms:textarea>
  <xui:view auto-load="true" id="view4" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout5"><xui:place control="toolbars3" id="controlPlace11" style="position:absolute;top:5px;left:5px;width:688px;height:35px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR" id="navigatorBar1" data="dataMain">
<!--   <item name="save-item" id="barItem5"></item>-->
	<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity1.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
   <item name="refresh-item" id="barItem7"></item>
   <item name="filter-pro-item" id="customBarItem1"></item>
   <item name="first-item" id="barItem8"></item>
   <item name="pre-item" id="barItem9"></item>
   <item name="next-item" id="barItem10"></item>
   <item name="last-item" id="barItem12"></item>
   </xui:bar></xhtml:div></xui:view>
  <xforms:input ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="REASON_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="RANGE_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="RISK_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="PROCESS_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="RESOURCE_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="TIME_ASSESSMENTASSESSMENT4"></xforms:input>
  <xforms:input ref="data('dataMain')/APPROVAL_STATUSSTATUS" id="APPROVAL_STATUSSTATUS4"></xforms:input>
  <xforms:input ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="ACCEPT_OPINIONOPINION4"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_AUDIT_DATE" id="PLAN_AUDIT_DATEAUDITDATE4" format="yyyy-MM-dd"></xforms:input>
  <xforms:input ref="data('dataMain')/PLAN_AUDITORAUDITOR" id="PLAN_AUDITORAUDITOR4"></xforms:input>
  <xforms:textarea ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="textarea17" style="height:66px;"><xforms:action id="action2" ev:event="DOMFocusOut"><xforms:script id="xformsScript2"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="textarea18" style="height:65px;"><xforms:action id="action3" ev:event="DOMFocusOut"><xforms:script id="xformsScript3"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="textarea19" style="height:64px;"><xforms:action id="action4" ev:event="DOMFocusOut"><xforms:script id="xformsScript4"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="textarea20" style="height:59px;"><xforms:action id="action5" ev:event="DOMFocusOut"><xforms:script id="xformsScript5"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="textarea21" style="height:61px;"><xforms:action id="action6" ev:event="DOMFocusOut"><xforms:script id="xformsScript6"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="textarea22" style="height:71px;"><xforms:action id="action7" ev:event="DOMFocusOut"><xforms:script id="xformsScript7"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="textarea23" style="height:68px;"><xforms:action id="action8" ev:event="DOMFocusOut"><xforms:script id="xformsScript8"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/APPROVAL_STATUSSTATUS">
   <xforms:label ref="col_1" id="default16"></xforms:label>
   <xforms:value ref="col_0" id="default17"></xforms:value>
   <xforms:itemset id="default18" auto-load-data="true"><itemset-data xmlns="" id="default31">
   <rows xmlns="" id="default32">
    <row id="default33">
     <cell id="default34">1</cell>
     <cell id="default35">已审核</cell></row> 
    <row id="default36">
     <cell id="default37">2</cell>
     <cell id="default38">审核中</cell></row> 
    <row id="default40">
     <cell id="default41">3</cell>
     <cell id="default43">未审核</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default46"></xforms:column>
  <xforms:column ref="col_1" id="default47"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea24" style="height:76px;"></xforms:textarea></xui:view>
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity1.js"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:336px;height:auto;left:451px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="CHANGE_APPLY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false"> 
      <reader action="/metrodetection/system_code/logic/action/queryCHANGE_APPLY_INFOAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction" id="default5"/>  
      <rule id="default16" relation="CHANGE_APPLY_NOAPPLYNO" required="true()"/>  
      <rule id="default19" relation="CHANGE_TITLETITLE" required="true()"/>  
      <rule id="default28" relation="CHANGE_CONTENTCONTENT" required="true()"/>  
      <rule id="default45" relation="APPLY_PERSONPERSON" required="true()"/>  
      <rule id="default48" relation="APPLY_DATEDATE" required="true()"/> 
    </data> 
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" style="height:29px;"> 
        <item> 
          </item>  
        <item> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"
            id="removeTrigger1" onclick="mainActivity.removeTrigger1Click(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"
            style="border:none;" title="删除"/> 
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
            <xforms:label id="default15">  <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1">  
              <xforms:script id="xformsScript1">  <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default1" label="项目名称" ref="PROJECT_NAMENAME" type="ro" width="143px"/>  
      <column id="default2" label="变更对象" ref="CHANGE_OBJECTOBJECT" type="ro" width="100px"/>  
      <column id="default6" label="变更内容" ref="CHANGE_CONTENTCONTENT" type="ro" width="100px"/>  
      <column id="default7" label="变更原因" ref="CHANGE_REASONREASON" type="ro" width="100px"/>  
      <column id="default8" label="变更影响范围" ref="IMPACT_RANGERANGE" type="ro" width="100px"/>  
      <column id="default9" label="变更引入的风险" ref="POTENTIAL_RISKRISK" type="ro" width="100px"/>  
      <column id="default10" label="变更解决的风险" ref="RESOLVE_RISKRISK" type="ro" width="100px"/>  
      <column id="default11" label="变更实施过程" ref="IMPLEMENTATION_PROCESSPROCESS" type="ro" width="100px"/>  
      <column id="default12" label="变更所需资源" ref="RESOURCES_NEEDEDNEEDED" type="ro" width="100px"/>  
      <column id="default13" label="变更完成时间" ref="CHANGE_TIMETIME" type="dateTime" width="100px"/>  
      </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
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
        <xhtml:span id="span1" style="font-size:10pt;position: absolute;top:36px;color:#3366FF;left:34px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptCHANGE_APPLY_NOAPPLYNO" id="default17" style="font-size:10pt;position: absolute;top:38px;color:#3366FF;left:48px;" label="变更申请单据号"/>  
        <place control="iptCHANGE_APPLY_NOAPPLYNO" id="default18" style="font-size:10pt;position: absolute;width:142px;top:31px;left:153px;"/>  
        <xhtml:span id="span2" style="font-size:10pt;position: absolute;top:36px;color:#3366FF;left:330px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptCHANGE_TITLETITLE" id="default20" style="font-size:10pt;position: absolute;top:38px;color:#3366FF;left:345px;" label="变更提案标题"/>  
        <place control="iptCHANGE_TITLETITLE" id="default21" style="font-size:10pt;position: absolute;width:142px;top:31px;left:439px;"/>  
        <place control-label="iptPROJECT_IDID" id="default22" style="font-size:10pt;position: absolute;top:68px;left:100px;" label="项目ID"/>  
        <place control="iptPROJECT_IDID" id="default23" style="font-size:10pt;position: absolute;width:142px;top:61px;left:153px;"/>  
        <place control-label="iptPROJECT_NAMENAME" id="default24" style="font-size:10pt;position: absolute;top:68px;left:371px;" label="项目名称"/>  
        <place control="iptPROJECT_NAMENAME" id="default25" style="font-size:10pt;position: absolute;width:142px;top:61px;left:439px;"/>  
        <place control-label="iptCHANGE_OBJECTOBJECT" id="default26" style="font-size:10pt;position: absolute;top:98px;left:87px;" label="变更对象"/>  
        <place control="iptCHANGE_OBJECTOBJECT" id="default27" style="font-size:10pt;position: absolute;width:142px;top:91px;left:153px;"/>  
        <xhtml:span id="span3" style="font-size:10pt;position: absolute;top:96px;color:#3366FF;left:356px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptCHANGE_CONTENTCONTENT" id="default29" style="font-size:10pt;position: absolute;top:98px;color:#3366FF;left:371px;" label="变更内容"/>  
        <place control="iptCHANGE_CONTENTCONTENT" id="default30" style="font-size:10pt;position: absolute;width:142px;top:91px;left:439px;"/>  
        <place control-label="iptCHANGE_REASONREASON" id="default31" style="font-size:10pt;position: absolute;top:128px;left:87px;" label="变更原因"/>  
        <place control="iptCHANGE_REASONREASON" id="default32" style="font-size:10pt;position: absolute;width:142px;top:121px;left:153px;"/>  
        <place control-label="iptIMPACT_RANGERANGE" id="default33" style="font-size:10pt;position: absolute;top:128px;left:345px;" label="变更影响范围"/>  
        <place control="iptIMPACT_RANGERANGE" id="default34" style="font-size:10pt;position: absolute;width:142px;top:121px;left:439px;"/>  
        <place control-label="iptPOTENTIAL_RISKRISK" id="default35" style="font-size:10pt;position: absolute;top:158px;left:48px;" label="变更引入的风险"/>  
        <place control="iptPOTENTIAL_RISKRISK" id="default36" style="font-size:10pt;position: absolute;width:142px;top:151px;left:153px;"/>  
        <place control-label="iptRESOLVE_RISKRISK" id="default37" style="font-size:10pt;position: absolute;top:158px;left:332px;" label="变更解决的风险"/>  
        <place control="iptRESOLVE_RISKRISK" id="default38" style="font-size:10pt;position: absolute;width:142px;top:151px;left:439px;"/>  
        <place control-label="iptIMPLEMENTATION_PROCESSPROCESS" id="default39" style="font-size:10pt;position: absolute;top:188px;left:61px;" label="变更实施过程"/>  
        <place control="iptIMPLEMENTATION_PROCESSPROCESS" id="default40" style="font-size:10pt;position: absolute;width:142px;top:181px;left:153px;"/>  
        <place control-label="iptRESOURCES_NEEDEDNEEDED" id="default41" style="font-size:10pt;position: absolute;top:188px;left:345px;" label="变更所需资源"/>  
        <place control="iptRESOURCES_NEEDEDNEEDED" id="default42" style="font-size:10pt;position: absolute;width:142px;top:181px;left:439px;"/>  
        <place control-label="iptCHANGE_TIMETIME" id="default43" style="font-size:10pt;position: absolute;left:61px;top:249px;" label="变更完成时间"/>  
        <place control="iptCHANGE_TIMETIME" id="default44" style="font-size:10pt;position: absolute;width:142px;left:153px;top:242px;"/>  
        <xhtml:span id="span4" style="font-size:10pt;position: absolute;top:216px;color:#3366FF;left:346px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptAPPLY_PERSONPERSON" id="default46" style="font-size:10pt;position: absolute;top:218px;color:#3366FF;left:358px;" label="变更申请人"/>  
        <place control="iptAPPLY_PERSONPERSON" id="default47" style="font-size:10pt;position: absolute;width:142px;top:211px;left:439px;"/>  
        <xhtml:span id="span5" style="font-size:10pt;position: absolute;color:#3366FF;left:46px;top:216px;">  <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptAPPLY_DATEDATE" id="default49" style="font-size:10pt;position: absolute;color:#3366FF;left:61px;top:218px;" label="变更申请日期"/>  
        <place control="iptAPPLY_DATEDATE" id="default50" style="font-size:10pt;position: absolute;width:142px;left:153px;top:211px;"/> 
      <xhtml:label id="label1" style="position:absolute;top:5px;left:2px;height:18px;width:600px;background-color:#E6FBFF;" class="xui-label"><![CDATA[变更申请信息]]></xhtml:label></layout>  
      <xforms:input id="iptCHANGE_APPLY_NOAPPLYNO" ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" readonly="true"></xforms:input>  
      <xforms:input id="iptCHANGE_TITLETITLE" ref="data('dataMain')/CHANGE_TITLETITLE" readonly="true"></xforms:input>  
      <xforms:input id="iptPROJECT_IDID" ref="data('dataMain')/PROJECT_IDID" readonly="true"></xforms:input>  
      <xforms:input id="iptPROJECT_NAMENAME" ref="data('dataMain')/PROJECT_NAMENAME" readonly="true"></xforms:input>  
      <xforms:input id="iptCHANGE_OBJECTOBJECT" ref="data('dataMain')/CHANGE_OBJECTOBJECT" readonly="true"></xforms:input>  
      <xforms:input id="iptCHANGE_CONTENTCONTENT" ref="data('dataMain')/CHANGE_CONTENTCONTENT" readonly="true"></xforms:input>  
      <xforms:input id="iptCHANGE_REASONREASON" ref="data('dataMain')/CHANGE_REASONREASON" readonly="true"></xforms:input>  
      <xforms:input id="iptIMPACT_RANGERANGE" ref="data('dataMain')/IMPACT_RANGERANGE" readonly="true"></xforms:input>  
      <xforms:input id="iptPOTENTIAL_RISKRISK" ref="data('dataMain')/POTENTIAL_RISKRISK" readonly="true"></xforms:input>  
      <xforms:input id="iptRESOLVE_RISKRISK" ref="data('dataMain')/RESOLVE_RISKRISK" readonly="true"></xforms:input>  
      <xforms:input id="iptIMPLEMENTATION_PROCESSPROCESS" ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" readonly="true"></xforms:input>  
      <xforms:input id="iptRESOURCES_NEEDEDNEEDED" ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" readonly="true"></xforms:input>  
      <xforms:input id="iptCHANGE_TIMETIME" ref="data('dataMain')/CHANGE_TIMETIME" readonly="true" disabled="true"></xforms:input>  
      <xforms:input id="iptAPPLY_PERSONPERSON" ref="data('dataMain')/APPLY_PERSONPERSON" readonly="true"></xforms:input>  
      <xforms:input id="iptAPPLY_DATEDATE" ref="data('dataMain')/APPLY_DATEDATE" readonly="true" disabled="true"></xforms:input> 
    </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1" style="height:29px;"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:100%;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:48%;"/> 
            <xui:place control="view1" id="controlPlace3" style="display:block;width:789px;height:386px;"></xui:place></center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"><xui:place control-label="REASON_ASSESSMENTASSESSMENT" style="font-size:10pt;position: absolute;top:53px;left:9px;" id="controlLabel1" label="变更原因合理性评估">REASON_ASSESSMENTASSESSMENT</xui:place>
  <xui:place control="REASON_ASSESSMENTASSESSMENT" style="position: absolute;width: 153px;top:50px;left:142px;" id="controlPlace6"></xui:place>
  <xui:place control-label="RANGE_ASSESSMENTASSESSMENT" style="font-size:10pt;position: absolute;top:57px;left:317px;" id="controlLabel2" label="变更影响范围评估">RANGE_ASSESSMENTASSESSMENT</xui:place>
  <xui:place control="RANGE_ASSESSMENTASSESSMENT" style="position: absolute;width: 153px;top:50px;left:434px;" id="controlPlace7"></xui:place>
  <xui:place control-label="RISK_ASSESSMENTASSESSMENT" style="font-size:10pt;position: absolute;top:83px;left:48px;" id="controlLabel3" label="变更风险评估">RISK_ASSESSMENTASSESSMENT</xui:place>
  <xui:place control="RISK_ASSESSMENTASSESSMENT" style="position: absolute;width: 153px;top:80px;left:142px;" id="controlPlace8"></xui:place>
  <xui:place control-label="PROCESS_ASSESSMENTASSESSMENT" style="font-size:10pt;position: absolute;top:87px;left:317px;" id="controlLabel4" label="变更实施过程评估">PROCESS_ASSESSMENTASSESSMENT</xui:place>
  <xui:place control="PROCESS_ASSESSMENTASSESSMENT" style="position: absolute;width: 153px;top:80px;left:434px;" id="controlPlace9"></xui:place>
  <xui:place control-label="RESOURCE_ASSESSMENTASSESSMENT" style="font-size:10pt;position: absolute;top:113px;left:22px;" id="controlLabel5" label="变更所需资源评估">RESOURCE_ASSESSMENTASSESSMENT</xui:place>
  <xui:place control="RESOURCE_ASSESSMENTASSESSMENT" style="position: absolute;width: 153px;top:110px;left:142px;" id="controlPlace10"></xui:place>
  <xui:place control-label="TIME_ASSESSMENTASSESSMENT" style="font-size:10pt;position: absolute;top:117px;left:317px;" id="controlLabel6" label="变更完成时间评估">TIME_ASSESSMENTASSESSMENT</xui:place>
  <xui:place control="TIME_ASSESSMENTASSESSMENT" style="position: absolute;width: 153px;top:110px;left:434px;" id="controlPlace11"></xui:place>
  <xui:place control-label="APPROVAL_STATUSSTATUS" style="font-size:10pt;position: absolute;top:143px;left:48px;" id="controlLabel7" label="变更批准状态">APPROVAL_STATUSSTATUS</xui:place>
  <xui:place control="APPROVAL_STATUSSTATUS" style="position: absolute;width: 153px;top:140px;left:142px;" id="controlPlace12"></xui:place>
  <xui:place control-label="ACCEPT_OPINIONOPINION" style="font-size:10pt;position: absolute;top:147px;left:343px;" id="controlLabel8" label="变更受理意见">ACCEPT_OPINIONOPINION</xui:place>
  <xui:place control="ACCEPT_OPINIONOPINION" style="position: absolute;width: 153px;top:140px;left:434px;" id="controlPlace13"></xui:place>
  <xui:place control-label="PLAN_AUDIT_DATEAUDITDATE" style="font-size:10pt;position: absolute;top:173px;left:74px;" id="controlLabel9" label="审批日期">PLAN_AUDIT_DATEAUDITDATE</xui:place>
  <xui:place control="PLAN_AUDIT_DATEAUDITDATE" style="position: absolute;width: 153px;top:170px;left:142px;" id="controlPlace14"></xui:place>
  <xhtml:label id="label2" style="position:absolute;top:26px;left:2px;height:18px;width:600px;background-color:#E1FFFB;" class="xui-label"><![CDATA[变更审核信息]]></xhtml:label></layout>
  <xforms:input ref="data('dataMain')/REASON_ASSESSMENTASSESSMENT" id="REASON_ASSESSMENTASSESSMENT"></xforms:input>
  <xforms:input ref="data('dataMain')/RANGE_ASSESSMENTASSESSMENT" id="RANGE_ASSESSMENTASSESSMENT"></xforms:input>
  <xforms:input ref="data('dataMain')/RISK_ASSESSMENTASSESSMENT" id="RISK_ASSESSMENTASSESSMENT"></xforms:input>
  <xforms:input ref="data('dataMain')/PROCESS_ASSESSMENTASSESSMENT" id="PROCESS_ASSESSMENTASSESSMENT"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCE_ASSESSMENTASSESSMENT" id="RESOURCE_ASSESSMENTASSESSMENT"></xforms:input>
  <xforms:input ref="data('dataMain')/TIME_ASSESSMENTASSESSMENT" id="TIME_ASSESSMENTASSESSMENT"></xforms:input>
  <xforms:input ref="data('dataMain')/APPROVAL_STATUSSTATUS" id="APPROVAL_STATUSSTATUS"></xforms:input>
  <xforms:input ref="data('dataMain')/ACCEPT_OPINIONOPINION" id="ACCEPT_OPINIONOPINION"></xforms:input>
  <xforms:input ref="data('dataMain')/PLAN_AUDIT_DATEAUDITDATE" id="PLAN_AUDIT_DATEAUDITDATE"></xforms:input>
  </xui:view></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

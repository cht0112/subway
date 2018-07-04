<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;left:482px;top:608px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="CHANGE_APPLY_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false"> 
      <reader action="/metrodetection/system_resource/logic/action/MyQuerryNameAction" id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveCHANGE_APPLY_INFOAction" id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createCHANGE_APPLY_INFOAction" id="default5"/>  
      <rule id="default14" relation="CHANGE_APPLY_NOAPPLYNO" required="true()"/>  
      <rule id="default17" relation="CHANGE_TITLETITLE" required="true()"/>  
      <rule id="default26" relation="CHANGE_CONTENTCONTENT" required="true()"/>  
      <rule id="default43" relation="APPLY_PERSONPERSON" required="true()"/>  
      <rule id="default46" relation="APPLY_DATEDATE" required="true()"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="bizData1" concept="TEST_PROJECT_INFO"><creator id="default1" action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryTEST_PROJECT_INFOAction"></reader>
  <writer id="default6" action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="sysOperData" concept="SA_OPOrg" store-type="simple"><reader id="default7" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="hrPerData" concept="HR_BASE_INFO" store-type="simple"><creator id="default8" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
  <reader id="default9" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default10" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <xforms:action id="action11" ev:event="xbl-loaded"><xforms:script id="xformsScript11"><![CDATA[mainActivity2.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity2.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item> 
          <xforms:trigger appearance="image-text" id="removeTrigr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity2.removeMore(event)]]> </xforms:script> 
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
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity2.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      	<column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn1" ref="CHANGE_APPLY_NOAPPLYNO" label="变更申请单据号" type="ro" width="171px" align="center"></xui:column>
  <xui:column id="gridColumn2" ref="PROJECT_NAMENAME" label="项目名称" type="ro" width="147px" align="center"></xui:column>
  <xui:column id="gridColumn3" ref="CHANGE_OBJECTOBJECT" label="变更对象" type="ro" width="152px" align="center"></xui:column>
  <xui:column id="gridColumn6" ref="APPLY_DATEDATE" label="变更申请日期" type="dateTime" width="100px" align="center" format="yyyy-MM-dd"></xui:column><xui:column id="gridColumn5" ref="oPERATORNAME" label="变更申请人" type="ro" width="100px" align="center"></xui:column><xui:column id="gridColumn4" ref="CHANGE_TIMETIME" label="变更完成时间" type="dateTime" width="132px" align="center" format="yyyy-MM-dd"></xui:column>
  
  </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem13" name="save-item"/>  
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
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" style="width:100%;height:100%;" id="excelLayout1" src="excelLayout5.xls"><xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea7" style="height:62px;"></xforms:textarea><xforms:textarea ref="data('dataMain')/RESOLVE_RISKRISK" id="textarea8" style="height:62px;"></xforms:textarea><xforms:textarea ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="textarea1" style="height:83px;"></xforms:textarea><xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea10"></xforms:textarea></xhtml:div></layout>  
      <xforms:input ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" id="CHANGE_APPLY_NOAPPLYNO1" style="height:19px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TITLETITLE" id="CHANGE_TITLETITLE1"></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_NAMENAME" id="PROJECT_NAMENAME1"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT1"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="CHANGE_CONTENTCONTENT1"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_REASONREASON" id="CHANGE_REASONREASON1"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPACT_RANGERANGE" id="IMPACT_RANGERANGE1"></xforms:input>
  <xforms:input ref="data('dataMain')/POTENTIAL_RISKRISK" id="POTENTIAL_RISKRISK1"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOLVE_RISKRISK" id="RESOLVE_RISKRISK1"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="IMPLEMENTATION_PROCESSPROCESS1"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="RESOURCES_NEEDEDNEEDED1"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TIMETIME" id="CHANGE_TIMETIME1"></xforms:input>
  <xforms:input ref="data('dataMain')/APPLY_DATEDATE" id="APPLY_DATEDATE1" style="width:150px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_APPLY_DOC_NO" id="CHANGE_APPLY_NOAPPLYNO2" readonly="true"><xforms:action id="action1" ev:event="DOMFocusOut"><xforms:script id="xformsScript1"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TITLETITLE" id="CHANGE_TITLETITLE2" style="width:467px;"><xforms:action id="action2" ev:event="DOMFocusOut"><xforms:script id="xformsScript2"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>
  <xforms:input ref="data('dataMain')/PROJECT_NAMENAME" id="PROJECT_NAMENAME2" style="width:465px;"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_OBJECTOBJECT" id="CHANGE_OBJECTOBJECT2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="CHANGE_CONTENTCONTENT2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_REASONREASON" id="CHANGE_REASONREASON2"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPACT_RANGERANGE" id="IMPACT_RANGERANGE2"></xforms:input>
  <xforms:input ref="data('dataMain')/POTENTIAL_RISKRISK" id="POTENTIAL_RISKRISK2"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOLVE_RISKRISK" id="RESOLVE_RISKRISK2"></xforms:input>
  <xforms:input ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="IMPLEMENTATION_PROCESSPROCESS2"></xforms:input>
  <xforms:input ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="RESOURCES_NEEDEDNEEDED2"></xforms:input>
  <xforms:input ref="data('dataMain')/CHANGE_TIMETIME" id="CHANGE_TIMETIME2"></xforms:input>
  <xforms:input ref="data('dataMain')/APPLY_DATEDATE" id="APPLY_DATEDATE2" style="width:149px;" format="yyyy-MM-dd"></xforms:input>
  
  <xforms:textarea ref="data('dataMain')/CHANGE_REASONREASON" id="textarea2" style="height:53px;"><xforms:action id="action5" ev:event="DOMFocusOut"><xforms:script id="xformsScript5"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPACT_RANGERANGE" id="textarea3" style="height:52px;"><xforms:action id="action6" ev:event="DOMFocusOut"><xforms:script id="xformsScript6"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/IMPLEMENTATION_PROCESSPROCESS" id="textarea4" style="height:54px;"><xforms:action id="action7" ev:event="DOMFocusOut"><xforms:script id="xformsScript7"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/CHANGE_TIMETIME" id="textarea5"></xforms:textarea>
  <xforms:input id="input1" ref="data('dataMain')/CHANGE_TIMETIME" format="yyyy-MM-dd"></xforms:input>
  <xforms:textarea ref="data('dataMain')/RESOURCES_NEEDEDNEEDED" id="textarea6" style="height:55px;"><xforms:action id="action8" ev:event="DOMFocusOut"><xforms:script id="xformsScript8"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  
  
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/PROJECT_IDID" label-ref="data('dataMain')/PROJECT_NAMENAME">
   <xforms:label ref="pROJECTNAME" id="default11"></xforms:label>
   <xforms:value ref="TEST_PROJECT_INFO" id="default12"></xforms:value>
   <xforms:itemset id="default15" data="bizData1" auto-load-data="true">
  <xforms:column ref="TEST_PROJECT_INFO" visible="false" id="default21"></xforms:column>
  <xforms:column ref="pROJECTNAME" id="default22"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input2" ref="data('dataMain')/CHANGE_OBJECTOBJECT" style="width:468px;"><xforms:action id="action3" ev:event="DOMFocusOut"><xforms:script id="xformsScript3"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/PROJECT_IDID" label-ref="data('dataMain')/PROJECT_NAMENAME" style="width:464px;">
   <xforms:label ref="pROJECTNAME" id="default16"></xforms:label>
   <xforms:value ref="TEST_PROJECT_INFO" id="default18"></xforms:value>
   <xforms:itemset id="default19" data="bizData1" auto-load-data="true">
  <xforms:column ref="pROJECTNAME" id="default27"></xforms:column>
  <xforms:column ref="TEST_PROJECT_INFO" visible="false" id="default28"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/CHANGE_CONTENTCONTENT" id="textarea9" style="height:56px;"><xforms:action id="action4" ev:event="DOMFocusOut"><xforms:script id="xformsScript4"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  
  <xforms:textarea ref="data('dataMain')/RESOLVE_RISKRISK" id="textarea11" style="height:55px;"><xforms:action id="action10" ev:event="DOMFocusOut"><xforms:script id="xformsScript10"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/POTENTIAL_RISKRISK" id="textarea12" style="height:51px;"><xforms:action id="action9" ev:event="DOMFocusOut"><xforms:script id="xformsScript9"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
  <xforms:input id="input3" ref="data('dataMain')/CHANGE_APPLY_NOAPPLYNO" readonly="true"></xforms:input>
  <xforms:input id="input4" ref="data('dataMain')/CHANGE_APPLY_DOC_NO"></xforms:input>
  <xforms:input id="input5" ref="data('dataMain')/CHANGE_APPLY_DOC_NO" readonly="true"></xforms:input></xui:view>  
    <xui:layout id="rootLayout" style="width:100%;height:100%;"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="width:100%;height:99%;"> 
        <xui:tab id="tabList" xforms-select="mainActivity2.tabListSelect"> 
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
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:100%;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="position:relative;height:100%;width:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity2.js"/> 
  </xui:resource> 
</xui:window>

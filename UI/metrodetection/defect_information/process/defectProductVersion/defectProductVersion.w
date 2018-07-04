<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;left:241px;top:395px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DEFECT_TRACK_VERSION_INFO" direct-delete="false" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" confirm-delete="false" filter-relations="MAJOR_VERSION_NUMBER,MINOR_VERSION_NUMBER,REVISION_NUMBER,BUILD_DATE,MEMO,PRODUCT_NAME,PROJECT_NAME"> 
      <reader action="/metrodetection/defect_information/logic/action/queryProductVersionAction"
        id="default3"/>  
      <writer action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_VERSION_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_VERSION_INFOAction"
        id="default5"/>  
      <rule id="default14" relation="MAJOR_VERSION_NUMBER" required="true()" alert="'数据不能为空'"/>  
      <rule id="default17" relation="MINOR_VERSION_NUMBER" required="true()" alert="'数据不能为空'"/>  
      <rule id="default20" relation="REVISION_NUMBER" required="true()" alert="'数据不能为空'"/>  
      <rule id="default23" relation="BUILD_DATE" required="true()" alert="'数据不能为空'"/>  
      <rule id="default26" relation="BUILD_PERSON" required="true()" alert="'数据不能为空'"/> 
    <calculate-relation relation="calculate0" id="calculate-relation1"></calculate-relation>
  <calculate-relation relation="refCheck" id="calculate-relation2"></calculate-relation>
  <rule id="dataBizRule1" relation="PRODUCT_ID" required="true()" alert="'数据不能为空'"></rule></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="productD" concept="DEFECT_TRACK_PRODUCT_INFO"><creator id="default12" action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_PRODUCT_INFOAction"></creator>
  <reader id="default15" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PRODUCT_INFOAction"></reader>
  <writer id="default18" action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_PRODUCT_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="oppersonD" concept="SA_OPOrg" store-type="simple"><reader id="default1" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="hrBaseinforD" concept="HR_BASE_INFO" store-type="simple"><reader id="default2" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="projectD" concept="DEFECT_TRACK_PROJECT_INFO" store-type="simple"><creator id="default9" action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_PROJECT_INFOAction"></creator>
  <reader id="default10" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PROJECT_INFOAction"></reader>
  <writer id="default13" action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_PROJECT_INFOAction"></writer></data>
  <xforms:action id="action2" ev:event="onload"><xforms:script id="xformsScript2"><![CDATA[defectProductVersion.mdDefaultLoad(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[defectProductVersion.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem3">
        	<xforms:trigger appearance="image-text" id="removeDM" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/remove.gif"> 
              <xforms:label> <![CDATA[删除]]> </xforms:label>  
              <xforms:action id="action3" ev:event="DOMActivate">
                <xforms:script id="xformsScript3"><![CDATA[defectProductVersion.removeDMClick(event)]]></xforms:script>
              </xforms:action>
            </xforms:trigger>
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="PRODUCT_ID,MAJOR_VERSION_NUMBER,MINOR_VERSION_NUMBER,REVISION_NUMBER,BUILD_DATE,BUILD_PERSON,MEMO"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default11"> <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="defectProductVersion.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <xui:column id="gridColumn1" ref="refCheck" label="#master_checkbox" type="checkbox" width="44px" align="center"></xui:column><xui:column id="gridColumn9" ref="calculate0" label="序号" type="ed" width="72px" align="center" show-index="true"></xui:column><xui:column id="gridColumn7" ref="PROJECT_NAME" label="项目名称" type="ed" width="100px"></xui:column><xui:column id="gridColumn8" ref="PRODUCT_NAME" label="产品名称" type="ro" width="200px"></xui:column><xui:column id="gridColumn2" ref="MAJOR_VERSION_NUMBER" label="主版本号" type="ro" width="121px"></xui:column>
  <xui:column id="gridColumn3" ref="MINOR_VERSION_NUMBER" label="次版本号" type="ro" width="138px"></xui:column>
  <xui:column id="gridColumn4" ref="REVISION_NUMBER" label="修订版本号" type="ro" width="129px"></xui:column>
  <xui:column id="gridColumn5" ref="BUILD_DATE" label="构建日期" type="ro" width="122px"></xui:column>
  <xui:column id="gridColumn10" ref="oPERATORNAME" label="构建人" type="ro" width="100px"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem12">
        	<xforms:trigger appearance="image-text" id="insert" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[defectProductVersion.newClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger>
        </item>  
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
        <place control="iptMAJOR_VERSION_NUMBER" id="default16" style="font-size:10pt;position: absolute;left:125px;width:154px;top:55px;"/>  
        <place control="iptMINOR_VERSION_NUMBER" id="default19" style="font-size:10pt;position: absolute;width:155px;left:407px;top:54px;"/>  
        <place control="iptREVISION_NUMBER" id="default22" style="font-size:10pt;position: absolute;left:125px;width:155px;top:98px;"/>  
        <place control="iptBUILD_DATE" id="default25" style="font-size:10pt;position: absolute;width:155px;left:407px;top:96px;"/>  
        <xhtml:label id="label1" style="position:absolute;left:73px;top:58px;" class="xui-label"><![CDATA[ 主版本号]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;left:356px;top:57px;" class="xui-label"><![CDATA[次版本号]]></xhtml:label>
  <xhtml:label id="label3" style="position:absolute;left:61px;top:102px;" class="xui-label"><![CDATA[修订版本号]]></xhtml:label>
  <xhtml:label id="label4" style="position:absolute;left:356px;top:99px;" class="xui-label"><![CDATA[构建日期]]></xhtml:label>
  <xhtml:label id="label6" style="position:absolute;width:25px;left:98px;top:138px;" class="xui-label"><![CDATA[备注]]></xhtml:label>
  <xhtml:label id="label7" style="position:absolute;top:13px;left:357px;" class="xui-label"><![CDATA[产品名称]]></xhtml:label>
  <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;width:5px;position:absolute;top:13px;left:346px;">*</xhtml:label>
  <xhtml:label id="label14" class="xui-label" style="position:absolute;color:#FF0000;width:5px;position:absolute;left:345px;top:99px;">*</xhtml:label>
  <xhtml:label id="label15" class="xui-label" style="position:absolute;color:#FF0000;width:5px;position:absolute;left:50px;top:102px;">*</xhtml:label>
  <xhtml:label id="label16" class="xui-label" style="position:absolute;color:#FF0000;width:5px;position:absolute;left:345px;top:58px;">*</xhtml:label>
  <xhtml:label id="label17" class="xui-label" style="position:absolute;color:#FF0000;width:5px;position:absolute;left:61px;top:58px;">*</xhtml:label>
  <xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;top:10px;left:408px;"></xui:place>
  <xui:place control="textarea1" id="controlPlace6" style="position:absolute;left:125px;height:45px;top:138px;width:438px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace7" style="position:absolute;left:125px;top:13px;"></xui:place>
  <xhtml:label id="label8" style="position:absolute;left:74px;top:15px;" class="xui-label"><![CDATA[项目名称]]></xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;width:5px;position:absolute;left:63px;position:absolute;top:15px;">*</xhtml:label></layout>  
      <xforms:input id="iptMAJOR_VERSION_NUMBER" ref="data('dataMain')/MAJOR_VERSION_NUMBER"/>  
      <xforms:input id="iptMINOR_VERSION_NUMBER" ref="data('dataMain')/MINOR_VERSION_NUMBER"/>  
      <xforms:input id="iptREVISION_NUMBER" ref="data('dataMain')/REVISION_NUMBER"/>  
      <xforms:input id="iptBUILD_DATE" ref="data('dataMain')/BUILD_DATE" readonly="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/PRODUCT_ID" label-ref="data('dataMain')/PRODUCT_NAME">
   <xforms:label ref="PRODUCT_NAME" id="default21"></xforms:label>
   <xforms:value ref="DEFECT_TRACK_PRODUCT_INFO" id="default24"></xforms:value>
   <xforms:itemset id="default27" data="productD" auto-load-data="true">
  <xforms:column ref="DEFECT_TRACK_PRODUCT_INFO" visible="false" id="default32"></xforms:column>
  <xforms:column ref="PRODUCT_NAME" id="default33"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea1"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/PROJECT_ID" label-ref="data('dataMain')/PROJECT_NAME" onCloseup="defectProductVersion.gridSelect2Closeup">
   <xforms:label ref="PROJECT_NAME" id="default6"></xforms:label>
   <xforms:value ref="DEFECT_TRACK_PROJECT_INFO" id="default7"></xforms:value>
   <xforms:itemset id="default8" data="projectD" auto-load-data="true">
  
  
  
  <xforms:column ref="DEFECT_TRACK_PROJECT_INFO" visible="false" id="default39"></xforms:column>
  <xforms:column ref="PROJECT_NAME" id="default40"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="defectProductVersion.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="height:492px;width:84%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="defectProductVersion.js"/> 
  </xui:resource> 
</xui:window>

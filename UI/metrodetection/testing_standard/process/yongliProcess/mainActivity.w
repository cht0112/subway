<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:202px;left:535px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="gridData" is-tree="true" onCreate="mainActivity.gridDataCreate"
      concept="PLAN_VIEW"> 
      <creator id="default1"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryPLANVIEWTestAction"/>  
      <writer id="default3"/>  
      <tree-option id="default4" parent-relation="fPARENTID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="zbhylysgxData" concept="RELATIONSHIP_INDEX_AND_CASE" direct-delete="true"
      confirm-delete="true" confirm-refresh="false"> 
      <creator id="default5" action="/metrodetection/testing_standard/logic/action/createRELATIONSHIP_INDEX_AND_CASEAction"/>  
      <reader id="default6" action="/metrodetection/testing_standard/logic/action/myQueryRelationIndexCaseAction"/>  
      <writer id="default7" action="/metrodetection/testing_standard/logic/action/saveRELATIONSHIP_INDEX_AND_CASEAction"/>
      <rule id="dataBizRule1" relation="tESTCASEVER" required="true()" alert="'测试用例版本不能为空!'"/>  
      <rule id="dataBizRule2" relation="tESTCASEID" required="true()" alert="'测试用例ID不能为空!'"/>  
      <rule id="dataBizRule3" relation="sUBTESTCASEID" required="true()" alert="'测试子用例ID不能为空!'"/>  
      <rule id="dataBizRule4" relation="bUSINESSID"/>  
      <rule id="dataBizRule5" relation="iNDEXNO"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="ceszyljbxxData" concept="SUB_TEST_CASE_BASE_INFO" store-type="simple"> 
      <creator id="default20" action="/metrodetection/testing_standard/logic/action/createSUB_TEST_CASE_BASE_INFOAction"/>  
      <reader id="default21" action="/metrodetection/testing_standard/logic/action/querySUB_TEST_CASE_BASE_INFOAction"/>  
      <writer id="default22" action="/metrodetection/testing_standard/logic/action/saveSUB_TEST_CASE_BASE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="zbusjData" concept="INDEX_SYSTEM_VALUE" store-type="grid" confirm-refresh="false"> 
      <creator id="default23" action="/metrodetection/testing_standard/logic/action/createINDEX_SYSTEM_VALUEAction"/>  
      <reader id="default24" action="/metrodetection/system_code/logic/action/myQueryIndexSystemValueParamAction"/>  
      <writer id="default25" action="/metrodetection/testing_standard/logic/action/saveINDEX_SYSTEM_VALUEAction"/>
      <calculate-relation relation="calCheckBox" id="calculate-relation2"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/>   
      <master id="master1"/>  
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="businesstypeData" concept="BUSINESS_TYPE_CODE">
      <creator id="default11" action="/metrodetection/system_code/logic/action/createBUSINESS_TYPE_CODEAction"/>  
      <reader id="default12" action="/metrodetection/system_code/logic/action/queryBUSINESS_TYPE_CODEAction"/>  
      <writer id="default13" action="/metrodetection/system_code/logic/action/saveBUSINESS_TYPE_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="csyljbxxData" concept="TEST_CASE_BASE_INFO"
      store-type="simple" confirm-refresh="false">
      <creator id="default16" action="/metrodetection/system_code/logic/action/createTEST_CASE_BASE_INFOAction"/>  
      <reader id="default17" action="/metrodetection/system_code/logic/action/queryTEST_CASE_BASE_INFOAction"/>  
      <writer id="default18" action="/metrodetection/system_code/logic/action/saveTEST_CASE_BASE_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="zbyyxxData" concept="INDEX_ID_APPLY_INFO"
      store-type="simple">
      <creator id="default30" action="/metrodetection/system_code/logic/action/createINDEX_ID_APPLY_INFOAction"/>  
      <reader id="default31" action="/metrodetection/system_code/logic/action/myQueryIndexApplyDeviceAction"/>  
      <writer id="default32" action="/metrodetection/system_code/logic/action/saveINDEX_ID_APPLY_INFOAction"/>
    </data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="zbyyxx2Data" concept="INDEX_ID_APPLY_INFO" store-type="simple"><creator id="default58" action="/metrodetection/system_code/logic/action/createINDEX_ID_APPLY_INFOAction"></creator>
  <reader id="default59" action="/metrodetection/system_code/logic/action/myQueryIndexIdApplyInfoAction"></reader>
  <writer id="default60" action="/metrodetection/system_code/logic/action/saveINDEX_ID_APPLY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="jcdxData" concept="DEVICE_TYPE_CODE" store-type="simple" confirm-refresh="false"><creator id="default61" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default62" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default63" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="indexCaseData2" concept="RELATIONSHIP_INDEX_AND_CASE" store-type="simple" confirm-refresh="false"><creator id="default64" action="/metrodetection/system_code/logic/action/createRELATIONSHIP_INDEX_AND_CASEAction"></creator>
  <reader id="default65" action="/metrodetection/system_code/logic/action/myQueryRelationIndexCaseAction"></reader>
  <writer id="default66" action="/metrodetection/system_code/logic/action/saveRELATIONSHIP_INDEX_AND_CASEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="jcdxlbData" concept="DETECTION_OBJECT_TYPE" store-type="simple"><creator id="default8" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default9" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default10" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="csyljcxxData" concept="TEST_CASE_DECTION_INFO" store-type="simple" confirm-refresh="false"><creator id="default14" action="/metrodetection/system_code/logic/action/createTEST_CASE_DECTION_INFOAction"></creator>
  <reader id="default15" action="/metrodetection/system_code/logic/action/myQueryTestCaseDetectionObjectAction"></reader>
  <writer id="default33" action="/metrodetection/system_code/logic/action/saveTEST_CASE_DECTION_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="csyljcxx2Data" concept="TEST_CASE_DECTION_INFO" store-type="simple"><creator id="default55" action="/metrodetection/system_code/logic/action/createTEST_CASE_DECTION_INFOAction"></creator>
  <reader id="default56" action="/metrodetection/system_code/logic/action/myQueryTestCaseDetectionDeviceAction"></reader>
  <writer id="default57" action="/metrodetection/system_code/logic/action/saveTEST_CASE_DECTION_INFOAction"></writer></data></xforms:model><xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="20%"
        mode="horz" id="HSplitter1" style="height:100%;width:100%;" has-drag-bar="true" has-arrow-button="true" class="xui-splitter"> 
        <xhtml:div region="left" id="div1"> 
          <xui:place control="view1" id="controlPlace1" style="width:100%;height:100%;"/> 
        </xhtml:div>  
        <xhtml:div region="right" id="div2"> 
          <xui:place control="view2" id="controlPlace3" style="height:100%;width:99%;"/> 
        </xhtml:div> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;width:100%;height:100%;"
        id="layout1"> 
        <xui:place control="gridTree" id="controlPlace2" style="height:100%;width:100%;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="gridTree" data="gridData" appearance="tree" onRowClick="mainActivity.gridTreeRowClick"> 
        <xui:column id="gridColumn1" ref="tESTCASENAME" label="测试用例名称" type="tree"
          width="178px"/> 
      </xhtml:div> 
    </xui:view>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;overflow:visible;width:100%;height:100%;"
        id="layout2"> 
        <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
          style="position:absolute;top:4px;left:3px;width:100%;height:98%;" class="xui-tabPanel"> 
          <xui:tab id="tabPage1" xforms-select="mainActivity.tabPage1Select"> 
            <xui:label id="xuiLabel1">列表</xui:label>  
            <xui:place control="toolbars3" id="controlPlace7"/>  
            <xui:place control="grid3" id="controlPlace8" style="overflow:inherit;height:92%;width:99%;"/> 
          </xui:tab>  
          <xui:tab id="tabPage2" xforms-select="mainActivity.tabPage2Select"> 
            <xui:label id="xuiLabel2">详细</xui:label>  
            <xui:place control="toolbars4" id="controlPlace9"/>  
            <xui:place control="view3" id="controlPlace12" style="width:100%;height:94%;"/> 
          </xui:tab>
        </xhtml:div> 
      <xui:place control="relationIndexWD" id="controlPlace4" style="position:absolute;top:283px;left:182px;"></xui:place></layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"
          data="zbhylysgxData" mode="IMG_TXT_LR"> 
<!--          <item id="barItem11"> -->
<!--            <xhtml:img align="absmiddle" disabled='true' dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--              id="insertTrigger" onclick="mainActivity.insertClick(event)" src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--              style="border:none" title="新建" ondblclick="mainActivity.insertTriggerDblclick(event)"/> -->
<!--          </item>  -->
			<item id="customBarItem1"><xforms:trigger id="trigger1" style="height:30px;">
   <xforms:label id="default28"><![CDATA[batch]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></item><item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.insertClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
          <item name="save-item" id="barItem12"/>  
          <item id="barItem3" name="delete-item"> 
            <xforms:trigger appearance="image" id="trgdeleteBtn" src="/UI/system/images/standardToolbar/standard/remove.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> 
              <xforms:label>删除</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>assetDelete(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem14"/>  
          <item name="filter-item" id="barItem15"/>  
          <item name="filter-pattern-item" id="barItem16"/>  
          <item name="separator" id="customBarItem4"/>  
          <item name="custom-page-item" id="customPageItem2"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid3" data="zbhylysgxData" delay="false" onRowDblClick="mainActivity.grid3RowDblClick"> 
        <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
          align="center"/>  
        <xui:column id="gridColumn2" ref="tESTCASEVER" label="测试用例版本 " type="ro" width="91px"/>  
        <xui:column id="gridColumn6" ref="iNDEXNO" label="指标序号 " type="ro" width="69px"/>  
        <xui:column id="gridColumn3" ref="sUBTESTCASENAME" label="测试子用例名称" type="ro"
          width="123px"/>  
        <xui:column id="gridColumn4" ref="tESTCASENAME" label="测试用例名称" type="ro" width="122px"/>  
        <xui:column id="gridColumn5" ref="bUSINESSIDCNAME" label="业务类型" type="ro"
          width="119px"/>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars4"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar3"
          data="zbhylysgxData" mode="IMG_TXT_LR"> 
          <item id="barItem21">
          	</item>  
<!--          <item id="barItem22">-->
<!--           	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->
<!--              id="save" onclick="mainActivity.saveClick(event)" src="/UI/system/images/standardToolbar/standard/save.gif"-->
<!--              style="border:none" title="保存"/> -->
<!--          </item>  -->
			<item> 
          <xforms:trigger appearance="image-text" id="save" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
          <item name="delete-item" id="barItem23"/>  
          <item name="refresh-item" id="barItem24"/>  
          <item name="separator" id="customBarItem5"/>  
          <item name="first-item" id="barItem27"/>  
          <item name="pre-item" id="barItem28"/>  
          <item name="next-item" id="barItem29"/>  
          <item name="last-item" id="barItem30"/>  
          <item name="separator" id="customBarItem6"/>  
          </xui:bar> 
      </xhtml:div>
      <xui:view auto-load="true" id="view3" class="xui-container"> 
        <layout type="absolute" style="position:relative;height:100%;width:100%;"
          id="layout3"> 
          <xhtml:label id="label1" style="position:absolute;top:36px;left:25px;" class="xui-label">测试用例版本</xhtml:label>  
          <xhtml:label id="label2" style="position:absolute;top:34px;left:321px;" class="xui-label">测试用例ID</xhtml:label>  
          <xhtml:label id="label3" style="position:absolute;left:38px;top:86px;" class="xui-label">测试子用例</xhtml:label>  
          <xui:place control="input2" id="controlPlace5" style="position:absolute;left:107px;top:29px;color:#000000;"/>  
          <xui:place control="input3" id="controlPlace6" style="position:absolute;left:391px;top:29px;"/>  
          <xui:place control="input4" id="controlPlace10" style="position:absolute;left:107px;top:81px;"/>  
          <xhtml:label id="label6" style="position:absolute;color:#FF0000;width:10px;top:36px;left:16px;"
            class="xui-label">*</xhtml:label>  
          <xhtml:label id="label7" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;width:10px;left:16px;top:136px;">*</xhtml:label>  
          <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;top:35px;left:313px;">*</xhtml:label>  
          <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:10px;left:321px;top:136px;">*</xhtml:label>  
          <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;left:29px;top:87px;">*</xhtml:label>  
          <xui:place control="input1" id="controlPlace11" style="position:absolute;left:390px;top:81px;"/>  
          <xhtml:label id="label11" style="position:absolute;width:51px;left:332px;top:85px;"
            class="xui-label"><![CDATA[用例名称]]></xhtml:label>  
          <xhtml:label id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;width:10px;position:absolute;left:322px;top:83px;">*</xhtml:label>  
          <xui:place control="gridSelect3" id="controlPlace14" style="position:absolute;left:390px;top:136px;"/>  
          <xhtml:label id="label14" style="position:absolute;width:78px;left:24px;top:136px;"
            class="xui-label"><![CDATA[检测对象类别]]></xhtml:label>  
          <xhtml:label id="label15" style="position:absolute;width:52px;left:331px;top:136px;"
            class="xui-label"><![CDATA[检测对象]]></xhtml:label>  
          <xui:place control="zbksjgrid" id="controlPlace16" style="position:absolute;top:194px;height:310px;left:5px;width:119%;"/>
        <xui:place control="gridSelect2" id="controlPlace13" style="position:absolute;left:107px;top:134px;"></xui:place></layout>  
        <xforms:input id="input2" ref="data('zbhylysgxData')/tESTCASEVER" readonly="true" disabled="true"/>  
        <xforms:input id="input3" ref="data('zbhylysgxData')/tESTCASEID" readonly="true" disabled="true"/>  
        <xforms:input id="input4" ref="data('zbhylysgxData')/sUBTESTCASEID" readonly="true" disabled="true"/>  
        <xforms:input id="input1" ref="data('csyljbxxData')/tESTCASENAME" readonly="true" disabled="true"/>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect3" ref="data('csyljcxx2Data')/aPPLYFORDEVICETYPE"
          label-ref="data('csyljcxx2Data')/dEVICETYPECNAME" onCloseup="mainActivity.gridSelect3Closeup"> 
          <xforms:label id="default39" ref="dEVICETYPECNAME"/>  
          <xforms:value id="default40" ref="aPPLYFORDEVICETYPE"/>  
          <xforms:itemset id="default41" data="csyljcxx2Data" auto-load-data="true" independence="false"> 
              
            
          
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="aPPLYFORDEVICETYPE" visible="false" id="default69"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default70"></xforms:column></xforms:itemset>
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="zbksjgrid" data="zbusjData">
          <xui:column id="gridColumn0" label="#master_checkbox" type="ch" width="30px"
            ref="calcCheckBox" align="center"/>  
          <xui:column id="gridColumn5" ref="calcIndex" label=" " type="ro" width="23px"
          show-index="true"/>
          <xui:column id="gridColumn8" ref="iNDEXSYSTEMNAME" label="指标库名称" type="ed" width="151px" /><xui:column id="gridColumn11" ref="bUSINESSIDCNAME" label="指标应用业务类型" type="ed" width="120px"></xui:column><xui:column id="gridColumn9" ref="dETECTIONOBJECTCNAME" label="检测对象类别" type="ed" width="101px" />
          
          <xui:column id="gridColumn10" ref="dEVICETYPECNAME" label="检测对象" type="ed"
            width="108px"/>
          <xui:column id="gridColumn7" ref="iNDEXVALUE" label="指标值公式" type="ed" width="180px"></xui:column>
  </xhtml:div>
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('csyljcxxData')/aPPLYFOROBJECT" label-ref="data('csyljcxxData')/dETECTIONOBJECTCNAME" onCloseup="mainActivity.gridSelect2Closeup">
   <xforms:label ref="dETECTIONOBJECTCNAME" id="default19"></xforms:label>
   <xforms:value ref="aPPLYFOROBJECT" id="default26"></xforms:value>
   <xforms:itemset id="default27" data="csyljcxxData" auto-load-data="true" independence="false">
  
  
  
  
  
  
  
  
  <xforms:column ref="aPPLYFOROBJECT" visible="false" id="default53"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default54"></xforms:column></xforms:itemset></xhtml:div></xui:view> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="指标映射" width="600px" height="500px" modal="true" id="relationIndexWD" url="/UI/metrodetection/testing_standard/process/yongliProcess/relationIndex.w"></xhtml:div></xui:view> 
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>
  </xui:resource> 
</xui:window>

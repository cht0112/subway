<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:184px;height:auto;left:134px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="csjbxxbizData" concept="TEST_CASE_BASE_INFO" store-type="grid"
      limit="20" confirm-refresh="true"> 
      <creator id="default3" action="/metrodetection/system_code/logic/action/createTEST_CASE_BASE_INFOAction"/>  
      <reader id="default4" action="/metrodetection/system_code/logic/action/myTestCaseBaseDectionInfoAction"/>  
      <writer id="default5" action="/metrodetection/system_code/logic/action/saveTEST_CASE_BASE_INFOAction"/>  
      <calculate-relation relation="calCheckBox" id="calculate-relation2"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="busiTypeData" concept="BUSINESS_STAGE_CODE" store-type="simple"> 
      <creator id="default6" action="/metrodetection/system_code/logic/action/createBUSINESS_STAGE_CODEAction"/>  
      <reader id="default7" action="/metrodetection/system_code/logic/action/queryBUSINESS_STAGE_CODEAction"/>  
      <writer id="default8" action="/metrodetection/system_code/logic/action/saveBUSINESS_STAGE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="jcfaylData" concept="TEST_SCHEME_CASE_INFO" store-type="simple" confirm-refresh="false"> 
      <creator id="default9" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_CASE_INFOAction"/>  
      <reader id="default10" action="/metrodetection/system_code/logic/action/myQueryTestBaseCaseInfoAction"/>  
      <writer id="default11" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_CASE_INFOAction"/> 
    <rule id="dataBizRule2" relation="bUSINESSSTAGE" required="true()" alert="'业务阶段不能为空'"></rule></data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="bUSINESSID,bUSINESSTAGE,bUSINESSTAGECNAME"
      src="" auto-load="true" id="cacheData" store-type="simple" confirm-refresh="false">
      
    <rows xmlns="" id="default142">
   <row id="default143">
    <cell id="default144">1</cell>
    <cell id="default145">1</cell>
    <cell id="default146">入围检测阶段</cell></row> 
   <row id="default147">
    <cell id="default148">2</cell>
    <cell id="default149">2</cell>
    <cell id="default150">样机检测阶段</cell></row> 
   <row id="default151">
    <cell id="default152">3</cell>
    <cell id="default153">3</cell>
    <cell id="default154">常规连接检测阶段</cell></row> 
   <row id="default155">
    <cell id="default156">3</cell>
    <cell id="default157">4</cell>
    <cell id="default158">单功能检测阶段</cell></row> 
   <row id="default159">
    <cell id="default160">3</cell>
    <cell id="default161">5</cell>
    <cell id="default162">导则符合性检测阶段</cell></row> 
   <row id="default163">
    <cell id="default164">3</cell>
    <cell id="default165">6</cell>
    <cell id="default166">专项检测阶段</cell></row> 
   <row id="default167">
    <cell id="default168">3</cell>
    <cell id="default169">7</cell>
    <cell id="default170">集成检测阶段</cell></row> 
   <row id="default171">
    <cell id="default172">3</cell>
    <cell id="default173">8</cell>
    <cell id="default174">现场检测阶段</cell></row> 
   <row id="default175">
    <cell id="default176">3</cell>
    <cell id="default177">9</cell>
    <cell id="default178">连接检测阶段</cell></row> </rows></data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="width:100%;height:100%;" id="rootLayout"> 
      <xui:place control="windowReceiver1" id="controlPlace1" style="top:5px;left:489px;"/>  
      <xui:place control="view2" id="controlPlace5" style="width:100%;height:100%;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver1" onReceive="testSckemaActivity.windowReceiver1Receive"/>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;width:100%;height:100%;"
        id="layout2"> 
        <xui:place control="toolbars3" id="controlPlace6" style="position:absolute;width:201px;top:11px;height:25px;left:-2px;"/>  
        <xui:place control="view3" id="controlPlace7" style="position:absolute;top:-2px;left:-1px;width:100%;height:100%;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"
          data="jcfaylData"> 
          <item id="barItem12"> 
            <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"
              onclick="testSckemaActivity.image1Click(event)" src="/UI/system/images/standardToolbar/standard/save.gif"
              style="border:none" title="保存" id="saveMas"/> 
          </item>  
          <item name="refresh-item" id="barItem14"/>  
          <item name="separator" id="customBarItem3"/>  
          <item name="first-item" id="barItem17"/>  
          <item name="pre-item" id="barItem18"/>  
          <item name="next-item" id="barItem19"/>  
          <item name="last-item" id="barItem20"/>  
          <item name="separator" id="customBarItem4"/> 
        </xui:bar> 
      </xhtml:div>  
      <xui:view auto-load="true" id="view3" class="xui-container"> 
        <layout type="absolute" style="position:relative;width:100%;height:100%;"
          id="layout3"> 
          <xui:place control="gridSelect1" id="controlPlace8" style="position:absolute;top:15px;left:257px;"/>  
          <xui:place control="gridCsjb" id="controlPlace9" style="position:absolute;width:100%;top:43px;left:1px;height:94%;"/>  
          <xhtml:label id="label1" style="position:absolute;width:52px;top:22px;left:202px;"
            class="xui-label">业务阶段</xhtml:label> 
        </layout>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect1" ref="data('cacheData')/bUSINESSTAGE"
          label-ref="data('cacheData')/bUSINESSTAGECNAME" onCloseup="testSckemaActivity.gridSelect1Closeup"> 
          <xforms:label ref="bUSINESSSTAGECNAME" id="xuiLabel1"/>  
          <xforms:value ref="bUSINESSSTAGE" id="default1"/>  
          <xforms:itemset id="default2" data="busiTypeData" auto-load-data="true"> 
              
             
          <xforms:column ref="bUSINESSSTAGE" visible="false" id="default20"></xforms:column>
  <xforms:column ref="bUSINESSSTAGECNAME" id="default21"></xforms:column></xforms:itemset> 
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="gridCsjb" data="csjbxxbizData" onRowCheck="testSckemaActivity.gridCsjbRowCheck"> 
          <xui:column id="gridColumn0" label="#master_checkbox" type="ch" width="30px"
            ref="calcCheckBox" align="center"/>  
          <xui:column id="gridColumn5" ref="calcIndex" label=" " type="ro" width="23px"
            show-index="true"/>  
          <xui:column id="gridColumn5" ref="tESTCASEVER" label="测试用例版本" type="ed"
            width="96px"/>  
          <xui:column id="gridColumn1" ref="tESTCASEID" label="测试用例ID" type="ro" width="128px"/>  
          <xui:column id="gridColumn2" ref="tESTCASENAME" label="测试用例名称" type="ro"
            width="110px"/>  
          <xui:column id="gridColumn4" ref="dEVICETYPECNAME" label="应用对象" width="149px"
            type="ro"/> 
        </xhtml:div> 
      </xui:view> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="testSckemaActivity.js"/> 
  </xui:resource> 
</xui:window>

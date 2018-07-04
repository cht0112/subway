<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:451px;height:auto;left:279px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TEST_SCHEME_BASE_INFO" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" store-type="grid" confirm-delete="false"> 
      <reader action="/metrodetection/system_code/logic/action/myQuerylist"
        id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_BASE_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createTEST_SCHEME_BASE_INFOAction"
        id="default5"/> 
    <rule id="dataBizRule1" relation="tESTSCHEMENAME" required="true()" alert="'检测方案名称不能为空!'"></rule>
  <rule id="dataBizRule2" relation="bUSINESSID" required="true()" alert="'业务类型不能为空!'"></rule>
  <rule id="dataBizRule3" relation="dECTIONBASEDONID" required="true()" alert="'检测依据ID不能为空!'"></rule>
  <rule id="dataBizRule4" relation="mAKEDATETIME" required="true()" alert="'制作日期时间不能为空!'"></rule>
  <rule id="dataBizRule5" relation="vALIDSTATE" required="true()" alert="'有效状态不能为空!'"></rule></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="bizData2" concept="BUSINESS_TYPE_CODE">
      <reader id="default26" action="/metrodetection/system_code/logic/action/queryBUSINESS_TYPE_CODEAction"/>  
      <creator id="default32" action="/metrodetection/system_code/logic/action/createBUSINESS_TYPE_CODEAction"/>  
      <writer id="default33" action="/metrodetection/system_code/logic/action/saveBUSINESS_TYPE_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="bizData3" concept="VALID_STATE_CODE">
      <creator id="default38" action="/metrodetection/system_code/logic/action/createVALID_STATE_CODEAction"/>  
      <reader id="default39" action="/metrodetection/system_code/logic/action/queryVALID_STATE_CODEAction"/>  
      <writer id="default40" action="/metrodetection/system_code/logic/action/saveVALID_STATE_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="bizData4" concept="DECTION_BASED_ON_INFO">
      <creator id="default79" action="/metrodetection/system_code/logic/action/createDECTION_BASED_ON_INFOAction"/>  
      <reader id="default80" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_ON_INFOAction"/>  
      <writer id="default81" action="/metrodetection/system_code/logic/action/saveDECTION_BASED_ON_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="jcfaylxxData" concept="TEST_SCHEME_CASE_INFO" direct-delete="true" confirm-delete="false">
      <creator id="default6" action="/metrodetection/system_code/logic/action/createTEST_SCHEME_CASE_INFOAction"/>  
      <reader id="default7" action="/metrodetection/system_code/logic/action/myQueryTestBaseCaseInfoAction"/>  
      <writer id="default9" action="/metrodetection/system_code/logic/action/saveTEST_SCHEME_CASE_INFOAction"/>  
      <master id="master1" data="dataMain" relation="tESTSCHEMEID"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="businessStageData" concept="BUSINESS_STAGE_CODE">
      <creator id="default30" action="/metrodetection/system_code/logic/action/createBUSINESS_STAGE_CODEAction"/>  
      <reader id="default31" action="/metrodetection/system_code/logic/action/queryBUSINESS_STAGE_CODEAction"/>  
      <writer id="default34" action="/metrodetection/system_code/logic/action/saveBUSINESS_STAGE_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="detecObjData" concept="DETECTION_OBJECT_TYPE">
      <creator id="default56" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"/>  
      <reader id="default57" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"/>  
      <writer id="default58" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="deviceTypeCodeData" concept="DEVICE_TYPE_CODE">
      <creator id="default67" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"/>  
      <reader id="default68" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"/>  
      <writer id="default69" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"/>
    </data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="testCaseBaseInfoData" concept="TEST_CASE_BASE_INFO" store-type="grid"><creator id="default10" action="/metrodetection/system_code/logic/action/createTEST_CASE_BASE_INFOAction"></creator>
  <reader id="default12" action="/metrodetection/system_code/logic/action/myTestCaseBaseDectionInfoAction"></reader>
  <writer id="default14" action="/metrodetection/system_code/logic/action/saveTEST_CASE_BASE_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
<!--        <item>  -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            id="insertTrigger" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->
<!--            id="removeTrigger1" onclick="mainActivity.removeTrigger1Click(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none;" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.removeTrigger1Click(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1" name="separator"/>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column" onRowValueChanged="mainActivity.grdMainRowValueChanged"> 
      <column label="#master_checkbox" width="30px" ref="recCC" type="checkbox"
        align="center"/> 
      <column id="default1" label="检测方案名称" ref="tESTSCHEMENAME" type="ro" width="111px" /><xui:column id="gridColumn1" ref="bUSINESSIDCNAME" label="业务类型" type="ro" width="120px" /><xui:column id="gridColumn3" ref="vALIDSTATECNAME" label="有效状态" type="ro" width="120px" /><column id="default8" label="制作日期时间" ref="mAKEDATETIME" type="ro" width="116px" format="yyyy-MM-dd" />
  <xui:column id="gridColumn9" ref="dECTIONBASEDONNAME" label="检测依据文件名称" type="ed" width="160px"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="insert-item"/>  
<!--        <item id="barItem13">-->
<!--        	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->
<!--            onclick="mainActivity.saveMore(event)" src="/UI/system/images/standardToolbar/standard/save.gif"-->
<!--            style="border:none" title="保存" id="saveMore"/>-->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="saveMore" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem14">-->
<!--        	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->
<!--            id="removeDetailTrigger" onclick="mainActivity.removeDetailClick(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.removeDetailClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="position:relative;height:119%;" type="absolute"> 
        <place control="iptTESTSCHEMENAME" id="default11" style="font-size:10pt;position: absolute;top:28px;left:122px;width:156px;"/>
        <place control="iptMAKEDATETIME" id="default19" style="font-size:10pt;position: absolute;top:88px;left:123px;width:156px;"/>  
        <xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;top:58px;left:123px;"/>  
        <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;top:58px;left:426px;"/>  
        <xui:place control="gridSelect4" id="controlPlace8" style="position:absolute;top:27px;left:426px;"/>  
        <xhtml:label id="label1" style="position:absolute;top:32px;left:43px;" class="xui-label">检测方案名称</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;top:125px;left:41px;" class="xui-label">检测方案描述</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:55px;top:62px;left:70px;"
          class="xui-label">业务类型</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:65px;top:30px;left:361px;"
          class="xui-label">检测依据ID</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;top:93px;left:43px;" class="xui-label">制作日期时间</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;width:55px;top:62px;left:372px;"
          class="xui-label">有效状态</xhtml:label>  
        <xui:place control="toolbars1" id="controlPlace3" style="position:absolute;width:526px;top:200px;height:25px;left:0px;"/>  
        <xui:place control="view1" id="controlPlace9" style="position:absolute;top:202px;left:-1px;width:649px;height:184px;" /><xhtml:label id="label21" class="xui-label" style="position:absolute;color:#000000;font-weight:bold;position:absolute;position:absolute;top:3px;height:18px;left:0px;text-align:center;background-color:#F2FFFD;width:589px;">检测方案基本信息</xhtml:label>
  <xhtml:label id="label8" style="position:absolute;color:#FF0000;width:10px;top:32px;left:35px;" class="xui-label">*</xhtml:label>
  <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;width:10px;top:32px;left:35px;;position:absolute;top:nullpx;left:nullpx;">
*</xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;top:63px;left:364px;">

*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:10px;top:31px;left:354px;">


*</xhtml:label>
  <xhtml:label id="label12" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;top:93px;left:37px;">



*</xhtml:label>
  <xhtml:label id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;top:62px;left:63px;">




*</xhtml:label>
  <xui:place control="textarea1" id="controlPlace12" style="position:absolute;top:123px;height:34px;left:123px;width:462px;"></xui:place>
  <xhtml:label id="label14" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;top:125px;left:29px;">





*</xhtml:label></layout>  
      <xforms:input id="iptTESTSCHEMENAME" ref="data('dataMain')/tESTSCHEMENAME"><xforms:action id="action1" ev:event="xforms-value-changed"><xforms:script id="xformsScript1">(event)</xforms:script></xforms:action></xforms:input>
      <xforms:input id="iptMAKEDATETIME" ref="data('dataMain')/mAKEDATETIME" format="yyyy-MM-dd"><xforms:action id="action2" ev:event="xforms-value-changed"><xforms:script id="xformsScript2">(event)</xforms:script></xforms:action></xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/bUSINESSID"
        input-changeable="true" label-ref="data('dataMain')/bUSINESSIDCNAME"> 
        <xforms:label ref="bUSINESSIDCNAME" id="xuiLabel4"/>  
        <xforms:value ref="BUSINESS_TYPE_CODE" id="default24"/>  
        <xforms:itemset id="default25" auto-load-data="true" data="bizData2"> 
            
          
        <xforms:column ref="bUSINESSIDCNAME" id="default76"></xforms:column>
  <xforms:column ref="BUSINESS_TYPE_CODE" visible="false" id="default82"></xforms:column></xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/vALIDSTATE"
        input-changeable="true"> 
        <xforms:label ref="vALIDSTATECNAME" id="xuiLabel5"/>  
        <xforms:value ref="VALID_STATE_CODE" id="default36"/>  
        <xforms:itemset id="default37" auto-load-data="true" data="bizData3"> 
          <xforms:column ref="VALID_STATE_CODE" visible="false" id="default77"/>  
          <xforms:column ref="vALIDSTATECNAME" id="default78"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/dECTIONBASEDONID"> 
        <xforms:label ref="dECTIONBASEDONNAME" id="xuiLabel6"/>  
        <xforms:value ref="DECTION_BASED_ON_INFO" id="default62"/>  
        <xforms:itemset id="default63" auto-load-data="true" data="bizData4"> 
            
          
        
  
  <xforms:column ref="dECTIONBASEDONNAME" id="default17"></xforms:column>
  <xforms:column ref="DECTION_BASED_ON_INFO" visible="false" id="default18"></xforms:column></xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
          data="jcfaylxxData" mode="IMG_TXT_LR"> 
<!--          <item id="barItem16">-->
<!--          	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            id="insertNew" onclick="mainActivity.insertNewClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建"/> -->
<!--          </item> -->
			<item> 
          <xforms:trigger appearance="image-text" id="insertNew" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.insertNewClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--          <item id="barItem17">-->
<!--          	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->
<!--            onclick="mainActivity.saveMore1(event)" src="/UI/system/images/standardToolbar/standard/save.gif"-->
<!--            style="border:none" title="保存" id="saveMore1"/>-->
<!--          </item>  -->
			<item> 
          <xforms:trigger appearance="image-text" id="saveMore1" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore1(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--          <item> -->
<!--       <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            id="insertTrigger" onclick="mainActivity.setDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none" title="删除"/> -->
<!--        </item>     -->
			<item> 
          <xforms:trigger appearance="image-text" id="remove2" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.setDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
          <item name="refresh-item" id="barItem23"/>  
          <item name="filter-item" id="barItem24"/>  
          <item name="separator" id="customBarItem1"/>  
          <item name="first-item" id="barItem26"/>  
          <item name="pre-item" id="barItem27"/>  
          <item name="next-item" id="barItem28"/>  
          <item name="last-item" id="barItem29"/>  
          <item id="customBarItem3"></item></xui:bar>
      </xhtml:div>  
      <xui:view auto-load="true" id="view1" class="xui-container"> 
        <layout type="absolute" style="position:relative;width:649px;height:184px;" id="layout1">
          <xui:place control="grid1" id="controlPlace10" style="position:absolute;width:589px;top:30px;height:315px;left:1px;" /><xhtml:label id="label7" class="xui-label" style="position:absolute;color:#000000;font-weight:bold;position:absolute;position:absolute;top:-24px;height:18px;left:0px;text-align:center;background-color:#F2FFFD;width:589px;">检测方案用例信息</xhtml:label>
  <xui:place control="wdTestSckema" id="controlPlace11" style="position:absolute;top:137px;left:168px;"></xui:place>
  </layout>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="jcfaylxxData" onRowValueChanged="mainActivity.grid1RowValueChanged">
           <column label="#master_checkbox" width="30px" ref="recC" type="checkbox"
        align="center"/> 
          <xui:column id="gridColumn4" ref="tESTCASEID" label="测试用例ID" type="ed" width="100"></xui:column><xui:column id="gridColumn8" ref="tESTCASEVER" label="测试用例版本" type="ro" width="97px" onEditDone="mainActivity.grid1_tESTCASEVEREditDone"></xui:column><xui:column id="gridColumn5" ref="bUSINESSSTAGECNAME" label="业务阶段" type="ro" width="119px"></xui:column>
  <xui:column id="gridColumn6" ref="dETECTIONOBJECTCNAME" label="检测对象类别" type="ro" width="112px"></xui:column>
  <xui:column id="gridColumn7" ref="dEVICETYPECNAME" label="检测对象" type="ro" width="123px"></xui:column>
  </xhtml:div><xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="检测方案用例信息" width="550px" height="550px" modal="true" id="wdTestSckema" url="/UI/metrodetection/testing_standard/process/testscheme_baseinfo/testSckemaActivity.w" reload-on-open="true" onClose="mainActivity.wdTestSckemaClose"></xhtml:div>
  </xui:view>
  <xforms:textarea ref="data('dataMain')/tESTSCHEMEDESC" id="textarea1"></xforms:textarea></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:100%;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="32px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="32px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:119%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

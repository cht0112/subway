<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:431px;left:711px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TRAINING_PLAN_INFO" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll" onValueChanging="mainActivity.dataMasterValueChanging"
      confirm-delete="false" confirm-refresh="false" filter-relations="PLAN_NO,DEPT_ID,PLAN_MAKER,PLAN_MAKE_DATE"> 
      <reader action="/metrodetection/training_management/logic/action/MyQueryTrainingPlanAction"
        id="default1"/>  
      <writer action="/metrodetection/training_management/logic/action/saveTRAINING_PLAN_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/training_management/logic/action/createTRAINING_PLAN_INFOAction"
        id="default3"/>  
      <rule id="default29" relation="TRAINING_DATE" required="true()" alert="'培训时间不能为空'"/>  
      <rule id="default32" relation="DEPT_ID" required="true()" alert="'培训部门不能为空'"/>  
      <rule id="default47" relation="PLAN_MAKER" required="true()" alert="'指定人不能为空'"/>  
      <rule id="default50" relation="PLAN_MAKE_DATE" required="true()" constraint="'指定时间不能为空'"/>  
      <calculate-relation relation="recCB" id="calculate-relation2" type="xsd:integer"/>
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="RELATION_PLAN_SUBJECT" confirm-delete="false" id="dataDetail" limit="10"
      offset="0" update-mode="whereAll" direct-delete="true" confirm-refresh="false" filter-relations="COURSE_NAME,COURSE_LENGTH"> 
      <reader action="/metrodetection/training_management/logic/action/myQueryPlanSubjectAction"
        id="default4"/>  
      <writer action="/metrodetection/training_management/logic/action/saveRELATION_PLAN_SUBJECTAction"
        id="default5"/>  
      <creator action="/metrodetection/training_management/logic/action/createRELATION_PLAN_SUBJECTAction"
        id="default6"/>  
      <master data="dataMaster" id="master1" relation="TRAINING_PLAN_ID"/>  
      <calculate-relation relation="recCB" id="calculate-relation1" type="xsd:integer"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="deptData" concept="OPERATOR_PASSWORD"> 
      <creator id="default83"/>  
      <reader id="default84" action="/metrodetection/training_management/logic/action/myQueryDeptAction"/>  
      <writer id="default85"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereVersion"> 
      <reader action="/system/logic/action/queryOrgAction" id="default4_7"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll"> 
      <creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"
        id="default5_7"/>  
      <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"
        id="default6_7"/>  
      <writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"
        id="default7_7"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="makeData" concept="HR_BASE_INFO">
      <reader id="default92" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="auditorData" concept="HR_BASE_INFO">
      <reader id="default93" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/>
    </data>
  <xforms:action id="action7" ev:event="xbl-loaded"><xforms:script id="xformsScript7"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR"> 
        <!--        <item name="insert-item" id="barItem7"/>  -->  
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label id="default76">新建</xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript2">mainActivity.newItemClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--        <item id="barItem3" name="delete-item"/>  -->  
        <item> 
          <xforms:trigger appearance="image-text" id="deleteTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label id="default76"> <![CDATA[删除]]> </xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate">
              <xforms:script id="xformsScript3"><![CDATA[mainActivity.deleteTriggerClick(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem5"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMaster" filter-relations="PLAN_DOC_NO,PLAN_NO,TRAINING_DATE,DEPT_ID,TRAINING_TYPE_CODE,TEACHER_SOURCE_CODE,TRAINING_TIME,TRAINEE_NUMBER,TRAINING_PERIOD,TRAINING_BUDGET,PLAN_MAKER,PLAN_MAKE_DATE,PLAN_AUDITOR,PLAN_AUDIT_DATE,MEMO"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem6"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default24"> <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMaster').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="mainActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      cascade="true"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default8" label="培训计划编号" ref="PLAN_NO" type="ro" width="100px"
        align="left"/>  
      <column id="default18" label="制定日期" ref="PLAN_MAKE_DATE" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn5" ref="trainingType" type="ro" width="100px" label="培训方式"
        align="left"/>  
      <xui:column id="gridColumn2" ref="uSERNAME" label="培训部门" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn6" ref="teacherSource" type="ro" width="100px" label="师资来源"
        align="left"/>  
      <xui:column id="gridColumn1" ref="oPERATORNAME" label="指定人" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn7" ref="oPERATORNAME1" label="审批人" type="ro" width="100px"
        align="left"/>  
      <column id="default9" label="培训时间" ref="TRAINING_DATE" type="date" width="100px"
        align="left"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
<!--        <item id="barItem12" name="insert-item"/>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertMas1" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.insertMas1Click(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>
        <item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem14" name="delete-item"/>  -->

        <item> 
          <xforms:trigger appearance="image-text" id="removeMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.removeMasClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
        <item id="barItem15" name="refresh-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail"
      id="grdDetail"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn3" ref="COURSE_NAME" label="培训课程名称" type="ed" width="260px"
        align="center"/>  
      <xui:column id="gridColumn4" ref="COURSE_LENGTH" label="课时长度" type="ed" width="134px"
        align="center"/> 
    </xhtml:div>
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:111%;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMaster1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:100%;"> 
            <top id="borderLayout-top2" size="310px"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5" style="width:746px;height:235px;"/>
              </top>  
            <center id="borderLayout-center2"> 
              <place control="grdDetail" id="controlPlace6" style="width:67%;height:99%;"/>
            </center>  
            </xhtml:div> 
        </xui:tab> 
      </xhtml:div>  
      <xui:place control="CourseDialog" id="controlPlace14" style="position:absolute;top:344px;left:743px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="" width="400px" height="450px" modal="true" id="CourseDialog" url="/UI/metrodetection/training_management/process/trainingPlanManagement/CourseDialog.w"
      onClose="mainActivity.CourseDialogClose"> 
      <result concept="dataDetail" operation="clear" origin="main" id="default49"> 
        <mapping from="rowid" to="COURSE_ID" id="default51"/>  
        <mapping from="COURSE_NAME" to="COURSE_NAME" id="default54"/>  
        <mapping from="COURSE_LENGTH" to="COURSE_LENGTH" id="default75"/> 
      </result> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail"
        id="ngtbDetail" mode="IMG_TXT_LR"> 
        <item id="customBarItem1"> 
          <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label id="default34">新建</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action5"> 
              <xforms:script id="xformsScript5">mainActivity.insertMasClick(event)</xforms:script>
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="customBarItem2"/>  
        <item id="customBarItem3"> 
          <xforms:trigger appearance="image-text" id="deleteTrigger1" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label id="default76">删除</xforms:label>  
            <xforms:action id="action4" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript4">mainActivity.deleteTrigger1Click(event)</xforms:script>
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="refresh-item" id="barItem9"/>  
        <item name="filter-item" id="barItem10"/>  
        <item name="custom-page-item" id="barItem16"/>
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail"
          id="ngtbDetail" mode="IMG_TXT_LR"> 
          <item id="customBarItem4"> 
            <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label id="default35">新建</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action6"> 
                <xforms:script id="xformsScript6">mainActivity.insertMasClick(event)</xforms:script>
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="customBarItem5"/>  
          <item id="customBarItem6"> 
            <xforms:trigger appearance="image-text" id="deleteTrigger1" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/remove.gif"> 
              <xforms:label id="default76">删除</xforms:label>  
              <xforms:action id="action4" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript4">mainActivity.deleteTrigger1Click(event)</xforms:script>
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem9"/>  
          <item name="filter-item" id="barItem10"/>  
          <item name="custom-page-item" id="barItem16"/>
        </xui:bar> 
      </xhtml:div>  
      <layout id="layout1" style=";position:relative;" type="absolute"> 
        <place control="tbsDetail" id="controlPlace4" style="position:absolute;width:660px;height:39px;top:231px;left:-1px;"/>  
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" id="excelLayout2" src="excelLayout3.xls" style="width:89%;position:absolute;top:5px;height:78%;left:-1px;"></xhtml:div></layout>  
      <xforms:input id="input1" ref="data('dataMaster')/TRAINING_DATE" style="width:149px;" tabindex="1" format="yyyy-MM-dd"></xforms:input>
  <xforms:input id="input2" ref="data('dataMaster')/PLAN_DOC_NO" style="width:149px;" readonly="true"></xforms:input>
  <xforms:input id="input3" ref="data('dataMaster')/PLAN_NO" style="width:109px;" readonly="true"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/DEPT_ID" style="width:154px;" tabindex="2">
   <xforms:label ref="uSERNAME" id="default7"></xforms:label>
   <xforms:value ref="OPERATOR_PASSWORD" id="default10"></xforms:value>
   <xforms:itemset id="default11" data="deptData" auto-load-data="true">
  
  
  <xforms:column ref="OPERATOR_PASSWORD" visible="false" id="default72"></xforms:column>
  <xforms:column ref="uSERNAME" id="default73"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input6" style="width:148px;" ref="data('dataMaster')/TRAINING_TIME" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="5"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMaster')/TRAINING_TYPE_CODE" style="width:149px;" tabindex="3">
   <xforms:label ref="col_1" id="default12"></xforms:label>
   <xforms:value ref="col_0" id="default13"></xforms:value>
   <xforms:itemset id="default14" auto-load-data="true"><itemset-data xmlns="" id="default36">
   <rows xmlns="" id="default37">
    <row id="default38">
     <cell id="default39">1</cell>
     <cell id="default40">公司</cell></row> 
    <row id="default41">
     <cell id="default42">2</cell>
     <cell id="default43">外聘</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default70"></xforms:column>
  <xforms:column ref="col_1" id="default71"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMaster')/TEACHER_SOURCE_CODE" style="width:154px;" tabindex="4">
   <xforms:label ref="col_1" id="default15"></xforms:label>
   <xforms:value ref="col_0" id="default16"></xforms:value>
   <xforms:itemset id="default17" auto-load-data="true"><itemset-data xmlns="" id="default46">
   <rows xmlns="" id="default48">
    <row id="default52">
     <cell id="default53">1</cell>
     <cell id="default55">内部办班</cell></row> 
    <row id="default56">
     <cell id="default57">2</cell>
     <cell id="default58">外派培训</cell></row> 
    <row id="default59">
     <cell id="default60">3</cell>
     <cell id="default61">学历进修</cell></row> 
    <row id="default62">
     <cell id="default63">4</cell>
     <cell id="default64">网络培训</cell></row> 
    <row id="default65">
     <cell id="default66">5</cell>
     <cell id="default67">自学</cell></row> </rows> </itemset-data>
  
  <xforms:column ref="col_0" visible="false" id="default68"></xforms:column>
  <xforms:column ref="col_1" id="default69"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input7" ref="data('dataMaster')/TRAINEE_NUMBER" style="width:154px;" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="6"></xforms:input>
  <xforms:input id="input9" ref="data('dataMaster')/TRAINING_PERIOD" style="width:149px;" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="7"></xforms:input>
  <xforms:input id="input10" ref="data('dataMaster')/TRAINING_BUDGET" style="width:154px;" format="0,000.00" tabindex="8"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMaster')/PLAN_MAKER" style="width:149px;" readonly="true" disabled="true" tabindex="9">
   <xforms:label ref="oPERATORNAME" id="default19"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default20"></xforms:value>
   <xforms:itemset id="default21" data="makeData" auto-load-data="true">
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default26"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default27"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMaster')/PLAN_AUDITOR" style="width:150px;" tabindex="11">
   <xforms:label ref="oPERATORNAME" id="default22"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default23"></xforms:value>
   <xforms:itemset id="default25" data="auditorData" auto-load-data="true">
  <xforms:column ref="HR_BASE_INFO" visible="false" id="default28"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default30"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input11" ref="data('dataMaster')/PLAN_MAKE_DATE" style="width:153px;" tabindex="10"></xforms:input>
  <xforms:input id="input12" ref="data('dataMaster')/PLAN_AUDIT_DATE" style="width:153px;" tabindex="12"></xforms:input>
  <xforms:textarea ref="data('dataMaster')/MEMO" id="textarea1" style="height:71px;width:458px;"></xforms:textarea></xui:view>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

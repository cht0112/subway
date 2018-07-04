<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:345px;left:619px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TRAINING_EVALUATION_INFO" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" confirm-delete="false" onValueChanged="mainActivity.dataMainValueChanged" filter-relations="EVALUATION_NO,EVALUATED_ID,EVALUATED_DEPT,MEMO"> 
      <reader action="/metrodetection/training_management/logic/action/myQueryTrainingEvaluationInfoAction"
        id="default3"/>  
      <writer action="/metrodetection/training_management/logic/action/saveTRAINING_EVALUATION_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/training_management/logic/action/createTRAINING_EVALUATION_INFOAction"
        id="default5"/>  
      <rule id="default25" relation="EVALUATION_CODE" required="true()"/>  
      <rule id="default26" relation="EVALUATION_NO" required="true()"/>  
      <rule id="default27" relation="EVALUATED_ID" required="true()" alert="'被评价人姓名不能为空'"/>  
      <rule id="default28" relation="WORK_EXP_YEAR" required="true()" alert="'与测试相关工作年限不能为空'"/>  
      <rule id="default29" relation="WORK_TEST_YEAR" required="true()" alert="'工作年限不能为空'"/>  
      <calculate-relation relation="tuijian" id="calculate-relation1"/>  
      <calculate-relation relation="recCB" id="calculate-relation2" type="xsd:integer"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="deptData" concept="TRAINING_PLAN_INFO"> 
      <creator id="default13"/>  
      <reader id="default16" action="/metrodetection/training_management/logic/action/myQueryMemberInDeptAction"/>  
      <writer id="default19"/> 
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
      data-type="json" auto-load="true" id="evaluatedIdData" concept="MEMBER_IN_USERGROUP"> 
      <creator id="default65"/>  
      <reader id="default66" action="/metrodetection/training_management/logic/action/myQueryTrainingEvaluationIdAction"/>  
      <writer id="default67"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="false" id="approvalIdData" concept="HR_BASE_INFO"
      limit="100"> 
      <creator id="default75" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"/>  
      <reader id="default76" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/>  
      <writer id="default77" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="evaluateeData" concept="HR_BASE_INFO"> 
      <creator id="default137"/>  
      <reader id="default138" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/>  
      <writer id="default139"/> 
    </data> 
  <xforms:action id="action32" ev:event="xbl-loaded"><xforms:script id="xformsScript32"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--        <item id="barItem3" name="delete-item"/>  -->  
        <item> 
          <xforms:trigger appearance="image-text" id="deleteTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label id="default76"> <![CDATA[删除]]> </xforms:label>  
            <xforms:action id="action31" ev:event="DOMActivate">
              <xforms:script id="xformsScript31"><![CDATA[mainActivity.deleteTriggerClick(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="TRAINING_PLAN_ID,EVALUATION_CODE,EVALUATION_NO,EVALUATED_ID,EVALUATED_DEPT,POSITION_ID,IDENTIFED,WORK_EXP_YEAR,WORK_TEST_YEAR,ETHICS_EVALUATION,SKILL_EVALUATION,EFFECT_EVALUATION,DEFICIENCY,RECOMMENDATION,EVALUATEE,EVALUATEE_DATE,APPROVAL_OPINION,APPROVAL_ID,APPROVAL_DATE,MEMO"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default24"> <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn13" ref="EVALUATION_NO" label="评价表编号" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn7" ref="EVALUATED_NAME" label="被评价人" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn10" ref="uSERNAME" label="所在部门" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn3" ref="POSITION_NAME" type="ro" width="95px" label="岗位"
        align="left"/>  
      <xui:column id="gridColumn4" ref="IDENTIFED_NAME" type="ro" width="100px" label="身份"
        align="left"/>  
      <xui:column id="gridColumn8" ref="EVALUATEE_NAME" label="评价人" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn12" ref="DEFICIENCY_NAME" type="ro" width="100px"
        label="推荐意见" align="left"/>  
      <xui:column id="gridColumn9" ref="APPROVAL_NAME" label="批准人" type="ro" width="100px"
        align="left"/>  
      <xui:column id="gridColumn6" ref="APPROVAL_OPINION_NAME" type="ro" width="118px"
        label="批准意见" align="left"/>  
      <xui:column id="gridColumn11" ref="MEMO" label="备注" type="ro" width="183px"
        align="left"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
<!--        <item id="barItem12" name="insert-item"/>  -->
<!--        <item id="barItem13" name="save-item"/>  -->

		<item> 
          <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.insertMasClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  

		<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif">  
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.saveMasClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>

        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;" type="flow"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" src="mainActivity.xls" style="width:100%;height:100%;"/> 
      </layout>  
      <xforms:input id="iptEVALUATION_CODE" ref="data('dataMain')/EVALUATION_CODE" style="font-weight:bold;width:153px;" readonly="true"/>  
      <xforms:input id="iptEVALUATION_NO" ref="data('dataMain')/EVALUATION_NO" style="font-weight:bold;width:121px;" readonly="true"/>  
      <xforms:input id="iptWORK_EXP_YEAR" ref="data('dataMain')/WORK_EXP_YEAR" style="width:143px;" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="6"/>  
      <xforms:input id="iptWORK_TEST_YEAR" ref="data('dataMain')/WORK_TEST_YEAR" style="width:139px;" input-regex="^[0-9]*[1-9][0-9]*$" tabindex="5"/>  
      <xforms:input id="iptMEMO" ref="data('dataMain')/MEMO"/>  
      <xforms:textarea ref="data('dataMain')/EFFECT_EVALUATION" id="textarea1" style="height:58px;width:500px;" tabindex="7"/>  
      <xforms:textarea ref="data('dataMain')/SKILL_EVALUATION" id="textarea4" style="height:56px;width:458px;"/>  
      <xforms:textarea ref="data('dataMain')/RECOMMENDATION" id="textarea3" style="height:57px;width:458px;"/>  
      <xforms:textarea ref="data('dataMain')/ETHICS_EVALUATION" id="textarea5" style="height:59px;width:457px;"/>  
      <xforms:textarea ref="data('dataMain')/MEMO" id="textarea8" style="height:71px;width:499px;"/>  
      <!--      <xforms:textarea ref="data('dataMain')/DEFICIENCY" id="textarea2"/>  -->  
      <xforms:textarea ref="data('dataMain')/DEFICIENCY" id="textarea2" style="height:57px;width:500px;" tabindex="8"/>  
      <!--      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","-->  
      <!--        value-separator="," ext-separator="," id="gridSelect1"> -->  
      <!--        <xforms:label ref="" id="default1"/>  -->  
      <!--        <xforms:value ref="" id="default6"/>  -->  
      <!--        <xforms:itemset id="default9"/> -->  
      <!--      </xhtml:div>  -->  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/EVALUATED_DEPT"
        style="width:494px;" onCloseup="mainActivity.gridSelect2Closeup" tabindex="1"> 
        <xforms:label ref="uSERNAME" id="default10"/>  
        <xforms:value ref="DEPT_ID" id="default11"/>  
        <xforms:itemset id="default12" data="deptData" auto-load-data="true"> 
            
            
          
        
  
  
  
  <xforms:column ref="DEPT_ID" visible="false" id="default7"></xforms:column>
  <xforms:column ref="PLAN_NO" id="default8"></xforms:column>
  <xforms:column ref="uSERNAME" id="default9"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xui:view auto-load="true" id="view3" class="xui-container" style="width:496px;"> 
        <layout type="absolute" style="position:relative;" id="layout4"> 
          <xhtml:label id="label11" style="position:absolute;left:181px;top:23px;"
            class="xui-label"><![CDATA[上述推荐意见。]]></xhtml:label>  
          <xui:place control="radio5" id="controlPlace13" style="position:absolute;top:19px;left:44px;"/>  
          <xui:place control="input6" id="controlPlace15" style="position:absolute;width:155px;left:314px;top:82px;"/>  
          <xhtml:label id="label12" style="position:absolute;left:147px;top:84px;"
            class="xui-label"><![CDATA[批准人：]]></xhtml:label>  
          <xui:place control="gridSelect4" id="controlPlace3" style="position:absolute;top:82px;width:87px;left:202px;"/> 
        </layout>  
        <xforms:select1 ref="data('dataMain')/APPROVAL_OPINION" id="radio5" tabindex="10"> 
          <xforms:item id="selectItem27"> 
            <xforms:label id="default80"><![CDATA[同意]]></xforms:label>  
            <xforms:value id="default81"><![CDATA[1]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem28"> 
            <xforms:label id="default82"><![CDATA[不同意]]></xforms:label>  
            <xforms:value id="default83"><![CDATA[2]]></xforms:value> 
          </xforms:item> 
        </xforms:select1>  
        <xforms:input id="input6" ref="data('dataMain')/APPROVAL_DATE" format="yyyy-MM-dd" tabindex="12"/>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/APPROVAL_ID" tabindex="11"> 
          <xforms:label ref="oPERATORNAME" id="default72"/>  
          <xforms:value ref="HR_BASE_INFO" id="default73"/>  
          <xforms:itemset id="default74" data="approvalIdData" auto-load-data="true"> 
            <xforms:column ref="HR_BASE_INFO" visible="false" id="default88"/>  
            <xforms:column ref="oPERATORNAME" id="default89"/> 
          </xforms:itemset> 
        </xhtml:div> 
      </xui:view>  
      <xui:view auto-load="true" id="view5" class="xui-container" style="width:494px;"> 
        <layout type="absolute" style="position:relative;" id="layout6"> 
          <xhtml:label id="label6" style="position:absolute;top:14px;left:52px;" class="xui-label"><![CDATA[经综合评价，认为该员工]]></xhtml:label>  
          <xui:place control="input2" id="controlPlace12" style="position:absolute;top:83px;left:313px;"/>  
          <xhtml:label id="label10" style="position:absolute;top:84px;left:149px;"
            class="xui-label"><![CDATA[评价人：]]></xhtml:label>  
          <xui:place control="checkbox7" id="controlPlace9" style="position:absolute;top:39px;left:14px;"/>  
          <xui:place control="gridSelect5" id="controlPlace8" style="position:absolute;top:84px;width:85px;left:204px;"/> 
        </layout>  
        <xforms:input id="input2" ref="data('dataMain')/EVALUATEE_DATE" format="yyyy-MM-dd"/>  
        <xforms:select id="checkbox7" ref="data('dataMain')/RECOMMENDATION" tabindex="9"> 
          <xforms:item id="selectItem24"> 
            <xforms:label id="default151"><![CDATA[能夠/]]></xforms:label>  
            <xforms:value id="default152"><![CDATA[1]]></xforms:value>  
            <xforms:action id="action2" ev:event="xforms-select"> 
              <xforms:script id="xformsScript2"><![CDATA[mainActivity.selectItem24Select(event)]]></xforms:script> 
            </xforms:action>  
            <xforms:action id="action3" ev:event="xforms-deselect"> 
              <xforms:script id="xformsScript3"><![CDATA[mainActivity.selectItem24DeSelect(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:item>  
          <xforms:item id="selectItem29"> 
            <xforms:label id="default153"><![CDATA[不能夠     胜任本岗位工作，建议]]></xforms:label>  
            <xforms:value id="default154"><![CDATA[2]]></xforms:value>  
            <xforms:action id="action9" ev:event="xforms-select"> 
              <xforms:script id="xformsScript9"><![CDATA[mainActivity.selectItem29Select(event)]]></xforms:script> 
            </xforms:action>  
            <xforms:action id="action10" ev:event="xforms-deselect"> 
              <xforms:script id="xformsScript10"><![CDATA[mainActivity.selectItem29DeSelect(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:item>  
          <xforms:item id="selectItem30"> 
            <xforms:label id="default155"><![CDATA[核发/]]></xforms:label>  
            <xforms:value id="default156"><![CDATA[3]]></xforms:value>  
            <xforms:action id="action5" ev:event="xforms-select"> 
              <xforms:script id="xformsScript5"><![CDATA[mainActivity.selectItem30Select(event)]]></xforms:script> 
            </xforms:action>  
            <xforms:action id="action6" ev:event="xforms-deselect"> 
              <xforms:script id="xformsScript6"><![CDATA[mainActivity.selectItem30DeSelect(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:item>  
          <xforms:item id="selectItem31" style="height:47px;width:440px;"> 
            <xforms:label id="default157"><![CDATA[不予核发       上岗证。]]></xforms:label>  
            <xforms:value id="default158"><![CDATA[4]]></xforms:value>  
            <xforms:action id="action7" ev:event="xforms-select"> 
              <xforms:script id="xformsScript7"><![CDATA[mainActivity.selectItem31Select(event)]]></xforms:script> 
            </xforms:action>  
            <xforms:action id="action8" ev:event="xforms-deselect"> 
              <xforms:script id="xformsScript8"><![CDATA[mainActivity.selectItem31DeSelect(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:item> 
        </xforms:select>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/EVALUATEE"
          label-ref="data('dataMain')/EVALUATEE_NAME" readonly="true" disabled="true"> 
          <xforms:label ref="oPERATORNAME" id="default92"/>  
          <xforms:value ref="HR_BASE_INFO" id="default93"/>  
          <xforms:itemset id="default136" data="evaluateeData" auto-load-data="true"> 
            <xforms:column ref="HR_BASE_INFO" visible="false" id="default142"/>  
            <xforms:column ref="oPERATORNAME" id="default143"/> 
          </xforms:itemset> 
        </xhtml:div> 
      </xui:view>  
      <xui:view auto-load="true" id="view7" class="xui-container" style="width:493px;height:195px;"> 
        <layout type="absolute" style="position:relative;" id="layout8"> 
          <xui:place control="view8" id="controlPlace17" style="position:absolute;height:178px;top:9px;left:200px;width:235px;"/>  
          <xhtml:label id="label14" style="position:absolute;top:39px;left:17px;" class="xui-label"><![CDATA[对测试活动的理解程度]]></xhtml:label>  
          <xhtml:label id="label15" style="position:absolute;top:57px;left:17px;" class="xui-label"><![CDATA[独立操作测试的水平]]></xhtml:label>  
          <xhtml:label id="label16" style="position:absolute;top:76px;left:17px;" class="xui-label"><![CDATA[对测试标准的熟知程度 ]]></xhtml:label>  
          <xhtml:label id="label17" style="position:absolute;top:94px;left:17px;" class="xui-label"><![CDATA[测试操作的规范及熟练程度]]></xhtml:label>  
          <xhtml:label id="label19" style="position:absolute;top:131px;left:17px;"
            class="xui-label"><![CDATA[分析及处理问题的能力 ]]></xhtml:label>  
          <xhtml:label id="label18" style="position:absolute;top:112px;left:17px;"
            class="xui-label"><![CDATA[现场测试考核结果如何]]></xhtml:label>  
          <xhtml:label id="label20" style="position:absolute;top:150px;left:17px;"
            class="xui-label"><![CDATA[对突发事件的临场应变能力]]></xhtml:label> 
        </layout>  
        <xui:view auto-load="true" id="view8" class="xui-container"> 
          <layout type="absolute" style="position:relative;" id="layout9"> 
            <xui:place control="checkbox5" id="controlPlace18" style="position:absolute;height:169px;top:9px;left:21px;font-size:14px;width:181px;"/> 
          </layout>  
          <xforms:select id="checkbox5" ref="data('dataMain')/SKILL_EVALUATION" tabindex="13"> 
            <xforms:item name="selectItem34" id="selectItem34"> 
              <xforms:label id="default94"><![CDATA[很深]]></xforms:label>  
              <xforms:value id="default95"><![CDATA[1]]></xforms:value>  
              <xforms:action id="action4" ev:event="xforms-select"> 
                <xforms:script id="xformsScript4"><![CDATA[mainActivity.selectItem34Select(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:item>  
            <xforms:item name="selectItem35" id="selectItem35"> 
              <xforms:label id="default96"><![CDATA[较深]]></xforms:label>  
              <xforms:value id="default97"><![CDATA[2]]></xforms:value>  
              <xforms:action id="action11" ev:event="xforms-select"> 
                <xforms:script id="xformsScript11"><![CDATA[mainActivity.selectItem35Select(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:item>  
            <xforms:item name="selectItem36" id="selectItem36" style="width:185px;"> 
              <xforms:label id="default98"><![CDATA[很肤浅]]></xforms:label>  
              <xforms:value id="default99"><![CDATA[3]]></xforms:value>  
              <xforms:action id="action12" ev:event="xforms-select"> 
                <xforms:script id="xformsScript12"><![CDATA[mainActivity.selectItem36Select(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:item>  
            <xforms:item id="selectItem37"> 
              <xforms:label id="default100"><![CDATA[很高 ]]></xforms:label>  
              <xforms:value id="default101"><![CDATA[4]]></xforms:value>  
              <xforms:action id="action13" ev:event="xforms-select">
                <xforms:script id="xformsScript13"><![CDATA[mainActivity.selectItem37Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem38"> 
              <xforms:label id="default102"><![CDATA[较高]]></xforms:label>  
              <xforms:value id="default103"><![CDATA[5]]></xforms:value>  
              <xforms:action id="action14" ev:event="xforms-select">
                <xforms:script id="xformsScript14"><![CDATA[mainActivity.selectItem38Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem39"> 
              <xforms:label id="default104"><![CDATA[很差]]></xforms:label>  
              <xforms:value id="default105"><![CDATA[6]]></xforms:value>  
              <xforms:action id="action15" ev:event="xforms-select">
                <xforms:script id="xformsScript15"><![CDATA[mainActivity.selectItem39Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem40"> 
              <xforms:label id="default106"><![CDATA[很好]]></xforms:label>  
              <xforms:value id="default107"><![CDATA[7]]></xforms:value>  
              <xforms:action id="action16" ev:event="xforms-select">
                <xforms:script id="xformsScript16"><![CDATA[mainActivity.selectItem40Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem41"> 
              <xforms:label id="default108"><![CDATA[较好 ]]></xforms:label>  
              <xforms:value id="default109"><![CDATA[8]]></xforms:value>  
              <xforms:action id="action17" ev:event="xforms-select">
                <xforms:script id="xformsScript17"><![CDATA[mainActivity.selectItem41Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem42"> 
              <xforms:label id="default110"><![CDATA[很差]]></xforms:label>  
              <xforms:value id="default111"><![CDATA[9]]></xforms:value>  
              <xforms:action id="action18" ev:event="xforms-select">
                <xforms:script id="xformsScript18"><![CDATA[mainActivity.selectItem42Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem43"> 
              <xforms:label id="default112"><![CDATA[很好]]></xforms:label>  
              <xforms:value id="default113"><![CDATA[10]]></xforms:value>  
              <xforms:action id="action19" ev:event="xforms-select">
                <xforms:script id="xformsScript19"><![CDATA[mainActivity.selectItem43Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem44"> 
              <xforms:label id="default114"><![CDATA[较好]]></xforms:label>  
              <xforms:value id="default115"><![CDATA[11]]></xforms:value>  
              <xforms:action id="action20" ev:event="xforms-select">
                <xforms:script id="xformsScript20"><![CDATA[mainActivity.selectItem44Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem45"> 
              <xforms:label id="default116"><![CDATA[很差]]></xforms:label>  
              <xforms:value id="default117"><![CDATA[12]]></xforms:value>  
              <xforms:action id="action21" ev:event="xforms-select">
                <xforms:script id="xformsScript21"><![CDATA[mainActivity.selectItem45Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem46"> 
              <xforms:label id="default118"><![CDATA[优秀]]></xforms:label>  
              <xforms:value id="default119"><![CDATA[13]]></xforms:value>  
              <xforms:action id="action22" ev:event="xforms-select">
                <xforms:script id="xformsScript22"><![CDATA[mainActivity.selectItem46Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem47"> 
              <xforms:label id="default120"><![CDATA[一般]]></xforms:label>  
              <xforms:value id="default121"><![CDATA[14]]></xforms:value>  
              <xforms:action id="action23" ev:event="xforms-select">
                <xforms:script id="xformsScript23"><![CDATA[mainActivity.selectItem47Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem48"> 
              <xforms:label id="default122"><![CDATA[很差]]></xforms:label>  
              <xforms:value id="default123"><![CDATA[15]]></xforms:value>  
              <xforms:action id="action24" ev:event="xforms-select">
                <xforms:script id="xformsScript24"><![CDATA[mainActivity.selectItem48Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem49"> 
              <xforms:label id="default124"><![CDATA[很强]]></xforms:label>  
              <xforms:value id="default125"><![CDATA[16]]></xforms:value>  
              <xforms:action id="action25" ev:event="xforms-select">
                <xforms:script id="xformsScript25"><![CDATA[mainActivity.selectItem49Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem50"> 
              <xforms:label id="default126"><![CDATA[一般]]></xforms:label>  
              <xforms:value id="default127"><![CDATA[17]]></xforms:value>  
              <xforms:action id="action26" ev:event="xforms-select">
                <xforms:script id="xformsScript26"><![CDATA[mainActivity.selectItem50Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem51"> 
              <xforms:label id="default128"><![CDATA[较差]]></xforms:label>  
              <xforms:value id="default129"><![CDATA[18]]></xforms:value>  
              <xforms:action id="action27" ev:event="xforms-select">
                <xforms:script id="xformsScript27"><![CDATA[mainActivity.selectItem51Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem52"> 
              <xforms:label id="default130"><![CDATA[很强]]></xforms:label>  
              <xforms:value id="default131"><![CDATA[19]]></xforms:value>  
              <xforms:action id="action28" ev:event="xforms-select">
                <xforms:script id="xformsScript28"><![CDATA[mainActivity.selectItem52Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem53"> 
              <xforms:label id="default132"><![CDATA[一般]]></xforms:label>  
              <xforms:value id="default133"><![CDATA[20]]></xforms:value>  
              <xforms:action id="action29" ev:event="xforms-select">
                <xforms:script id="xformsScript29"><![CDATA[mainActivity.selectItem53Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item>  
            <xforms:item id="selectItem54"> 
              <xforms:label id="default134"><![CDATA[较差]]></xforms:label>  
              <xforms:value id="default135"><![CDATA[21]]></xforms:value>  
              <xforms:action id="action30" ev:event="xforms-select">
                <xforms:script id="xformsScript30"><![CDATA[mainActivity.selectItem54Select(event)]]></xforms:script>
              </xforms:action>
            </xforms:item> 
          </xforms:select> 
        </xui:view> 
      </xui:view>  
      <xui:view auto-load="true" id="view1" class="xui-container" style="width:495px;height:148px;"> 
        <layout type="absolute" style="position:relative;" id="layout1"> 
          <xui:place control="checkbox3" id="controlPlace6" style="position:absolute;top:24px;width:475px;left:13px;"/> 
        </layout>  
        <xforms:select id="checkbox3" ref="data('dataMain')/ETHICS_EVALUATION" tabindex="14"> 
          <xforms:item id="selectItem8" style="width:227px;"> 
            <xforms:label id="default42"><![CDATA[遵守国家的有关法律、法规]]></xforms:label>  
            <xforms:value id="default43"><![CDATA[1]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem9" style="width:213px;height:23px;"> 
            <xforms:label id="default44"><![CDATA[在检测活动中严格履行职责]]></xforms:label>  
            <xforms:value id="default45"><![CDATA[2]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem10" style="height:17px;"> 
            <xforms:label id="default46"><![CDATA[严格执行体系文件规定]]></xforms:label>  
            <xforms:value id="default47"><![CDATA[3]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem11"> 
            <xforms:label id="default48"><![CDATA[未擅自改动检测方法及方案]]></xforms:label>  
            <xforms:value id="default49"><![CDATA[4]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem12"> 
            <xforms:label id="default50"><![CDATA[未擅自改动检测方法及方案]]></xforms:label>  
            <xforms:value id="default51"><![CDATA[5]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem13"> 
            <xforms:label id="default52"><![CDATA[对检测活动持严谨态度]]></xforms:label>  
            <xforms:value id="default53"><![CDATA[6 ]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem14" style="width:205px;"> 
            <xforms:label id="default54"><![CDATA[对检测活动持严谨态度]]></xforms:label>  
            <xforms:value id="default55"><![CDATA[7]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem15" style="width:203px;"> 
            <xforms:label id="default56"><![CDATA[能抵制来自各方对测试不利的影响]]></xforms:label>  
            <xforms:value id="default57"><![CDATA[8]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem16" style="width:110px;"> 
            <xforms:label id="default58"><![CDATA[能秉公办事  ]]></xforms:label>  
            <xforms:value id="default59"><![CDATA[9]]></xforms:value> 
          </xforms:item>  
          <xforms:item id="selectItem17" style="height:9px;width:230px;"> 
            <xforms:label id="default60"><![CDATA[保证检测数据的客观公正 ]]></xforms:label>  
            <xforms:value id="default61"><![CDATA[10]]></xforms:value> 
          </xforms:item> 
        </xforms:select> 
      </xui:view>  
      <xforms:select1 ref="data('dataMain')/POSITION_ID" id="radio1" tabindex="3"> 
        <xforms:item id="selectItem1"> 
          <xforms:label id="default20"><![CDATA[项目经理    ]]></xforms:label>  
          <xforms:value id="default21"><![CDATA[1]]></xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem2"> 
          <xforms:label id="default22"><![CDATA[测试工程师     ]]></xforms:label>  
          <xforms:value id="default23"><![CDATA[2]]></xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem5"> 
          <xforms:label id="default36"><![CDATA[其他]]></xforms:label>  
          <xforms:value id="default37"><![CDATA[3]]></xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xforms:select1 ref="data('dataMain')/IDENTIFED" id="radio2" tabindex="4"> 
        <xforms:item id="selectItem3"> 
          <xforms:label id="default32"><![CDATA[正式员工    ]]></xforms:label>  
          <xforms:value id="default33"><![CDATA[1]]></xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem4"> 
          <xforms:label id="default34"><![CDATA[试用期     ]]></xforms:label>  
          <xforms:value id="default35"><![CDATA[2]]></xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem6"> 
          <xforms:label id="default38"><![CDATA[实习学生     ]]></xforms:label>  
          <xforms:value id="default39"><![CDATA[3]]></xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem7"> 
          <xforms:label id="default40"><![CDATA[其他]]></xforms:label>  
          <xforms:value id="default41"><![CDATA[4]]></xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/EVALUATED_ID"
        style="width:495px;" tabindex="2"> 
        <xforms:label ref="oPERATORNAME" id="default62"/>  
        <xforms:value ref="gROUPMEMBERID" id="default63"/>  
        <xforms:itemset id="default64" data="evaluatedIdData" auto-load-data="true"> 
          <xforms:column ref="gROUPMEMBERID" visible="false" id="default90"/>  
          <xforms:column ref="oPERATORNAME" id="default91"/> 
        </xforms:itemset> 
      </xhtml:div> 
    </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:100%;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
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
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:197%;"> 
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
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

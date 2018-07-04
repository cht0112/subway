<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:174px;height:auto;top:84px;left:579px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="dPerson" concept="SA_OPPerson" store-type="simple" confirm-refresh="true" onValueChanging="personDetail.dPersonValueChanging"> 
      <creator id="default1" action="/SA/OPM/logic/action/createOPPersonAction"/>  
      <reader id="default2" action="/SA/OPM/logic/action/queryOPPersonAction"/>  
      <writer id="default3" action="/SA/OPM/logic/action/saveOPPersonAction"/>  
      <rule id="dataBizRule2" relation="sName" required="true()" alert="'名称不能为空！'"/>  
      <rule id="dataBizRule4" relation="sPasswordModifyTime" readonly="true()"/>  
      <rule id="dataBizRule12" relation="sLoginName" required="true()" alert="'登录名不能为空！'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="dMainOrg" concept="SA_OPOrg" store-type="simple" confirm-refresh="false"> 
      <reader id="default4" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <rule id="dataBizRule1" relation="sFName" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="myData" concept="HR_BASE_INFO" store-type="simple" auto-new="false"
      confirm-refresh="false" onValueChanging="personDetail.myDataValueChanging"> 
      <creator id="default5" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"/>  
      <reader id="default6" action="/metrodetection/system_code/logic/action/myQueryHrBaseInfoAction"/>  
      <writer id="default7" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"/>  
      <rule id="dataBizRule5" relation="oPERATORSEX" required="true()" alert="'性别不能为空'"/>  
      <rule id="dataBizRule7" relation="oFFICEID" required="true()" alert="'职位不能为空'"/>  
      <rule id="dataBizRule8" relation="dEGREEID" required="true()" alert="'学位不能为空'"/>  
      <rule id="dataBizRule9" relation="eDUCATIONID" required="true()" alert="'学历不能为空'"/>  
      <rule id="dataBizRule10" relation="pOLITICALID" required="true()" alert="'政治面貌不能为空'"/>  
      <rule id="dataBizRule11" relation="oPERATORSTATE" required="true()" alert="'操作员状态不能为空'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="officeIdData" concept="OFFICE_TYPE_CODE"> 
      <reader id="default18" action="/metrodetection/system_code/logic/action/queryOFFICE_TYPE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="positionIdData" concept="POSITION_TYPE_CODE"> 
      <reader id="default23" action="/metrodetection/system_code/logic/action/queryPOSITION_TYPE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="dgreeData" concept="ACADEMIC_DEGREE_CODE"> 
      <creator id="default26"/>  
      <reader id="default27" action="/metrodetection/system_code/logic/action/queryACADEMIC_DEGREE_CODEAction"/>  
      <writer id="default30"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="educationData" concept="EDUCATION_CODE"> 
      <reader id="default47" action="/metrodetection/system_code/logic/action/queryEDUCATION_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="poliData" concept="POLITICAL_AFFILIATION_CODE"> 
      <reader id="default62" action="/metrodetection/system_code/logic/action/queryPOLITICAL_AFFILIATION_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="posiTiData" concept="POSITIONAL_TITLE_CODE"> 
      <reader id="default71" action="/metrodetection/system_code/logic/action/queryPOSITIONAL_TITLE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="yyjcdx" concept="DEVICE_TYPE_CODE"> 
      <creator id="default86" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"/>  
      <reader id="default87" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"/>  
      <writer id="default88" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="yyjcdxlx" concept="DETECTION_OBJECT_TYPE"> 
      <creator id="default104" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"/>  
      <reader id="default105" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"/>  
      <writer id="default106" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="yyjcfmlx" concept="DETECTION_RANGE_TYPE"> 
      <creator id="default125" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"/>  
      <reader id="default126" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"/>  
      <writer id="default127" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="bizData2" concept="HR_SKILL_INFO" store-type="grid"> 
      <creator id="default80" action="/metrodetection/system_code/logic/action/createHR_SKILL_INFOAction"/>  
      <reader id="default81" action="/metrodetection/system_code/logic/action/myQuerySkillAction"/>  
      <writer id="default82" action="/metrodetection/system_code/logic/action/saveHR_SKILL_INFOAction"/>  
      <master id="master2" data="myData" relation="oPERATORID"/> 
    </data>  
    <xforms:action id="action5" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript5">personDetail.model1XBLLoaded(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="educationJobD" concept="EDUCATION_AND_JOB_INFO"> 
      <creator id="default75" action="/metrodetection/system_code/logic/action/createEDUCATION_AND_JOB_INFOAction"/>  
      <reader id="default76" action="/metrodetection/system_code/logic/action/queryEducationAndJobAction"/>  
      <writer id="default77" action="/metrodetection/system_code/logic/action/saveEDUCATION_AND_JOB_INFOAction"/>  
      <master id="master3" data="myData" relation="oPERATORID"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="grdMaster"> 
      <xforms:input id="inputName" ref="data('dPerson')/sName"/>  
      <xforms:input id="inputLoginName" ref="data('dPerson')/sLoginName"/>  
      <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver"
        id="receiver" onReceive="personDetail.receiverReceive"/>  
      <xforms:input id="inputPasswordTimeLimit" ref="data('dPerson')/sPasswordTimeLimit"
        readonly="true"/>  
      <xforms:input id="input2" ref="data('dPerson')/sPasswordModifyTime" format="yyyy-MM-dd hh:mm"/>  
      <xui:layout style="position:relative;width:100%;height:100%;" id="layout2" type="absolute"> 
        <xui:place control="inputMainOrgFName" id="controlPlace47" style="position:absolute;border-style:none none none none;width:383px;top:33px;left:101px;"/>  
        <xui:place control="inputName" id="controlPlace3" style="position:absolute;width:149px;top:60px;left:101px;"/>  
        <xui:place control="inputLoginName" id="controlPlace5" style="position:absolute;top:60px;left:351px;width:132px;"/>  
        <xui:place control="gridSelect1" id="controlPlace1" style="position:absolute;width:132px;top:89px;left:350px;"/>  
        <xui:place control="inputBirthday" id="controlPlace10" style="position:absolute;width:149px;top:119px;left:101px;"/>  
        <xui:place control="inputNation" id="controlPlace11" style="position:absolute;width:132px;top:119px;left:350px;"/>  
        <xui:place control="gridSelect2" id="controlPlace9" style="position:absolute;width:148px;left:101px;top:151px;"/>  
        <xui:place control="gridSelectPosition" id="controlPlace12" style="position:absolute;width:133px;top:150px;left:350px;"/>  
        <xui:place control="gridSelectDegree" id="controlPlace13" style="position:absolute;width:149px;top:179px;left:101px;"/>  
        <xui:place control="gridSelectEd" id="controlPlace14" style="position:absolute;width:131px;top:179px;left:351px;"/>  
        <xui:place control="gridSelectPoli" id="controlPlace16" style="position:absolute;width:148px;top:209px;left:101px;"/>  
        <xui:place control="inputProfessional" id="controlPlace36" style="position:absolute;width:132px;top:209px;left:350px;"/>  
        <xui:place control="gridSelectPoTi" id="controlPlace17" style="position:absolute;width:148px;top:239px;left:101px;"/>  
        <xui:place control="inputEmailAddress" id="controlPlace32" style="position:absolute;width:132px;top:239px;left:350px;"/>  
        <xui:place control="inputMObile" id="controlPlace18" style="position:absolute;width:148px;top:269px;left:101px;"/>  
        <xui:place control="gridSelectOperatorState" id="controlPlace19" style="position:absolute;width:133px;top:269px;left:350px;"/>  
        <xui:place control="textarea2" id="controlPlace8" style="position:absolute;width:386px;height:44px;top:298px;left:101px;"/>  
        <xui:place control="inputPasswordTimeLimit" id="controlPlace15" style="position:absolute;width:26px;top:359px;left:117px;"/>  
        <xui:place control="input2" id="controlPlace27" style="position:absolute;width:106px;top:361px;left:380px;"/>  
        <xui:place control="receiver" id="controlPlace2" style="position:absolute;top:190px;left:270px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:55px;top:366px;height:14px;left:49px;"
          class="xui-label">密码时限</xhtml:label>  
        <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;width:25px;top:368px;height:13px;left:157px;">（天）</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:105px;top:364px;height:18px;left:263px;"
          class="xui-label">密码最后修改时间</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:55px;top:40px;left:43px;"
          class="xui-label">所属组织</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;width:30px;top:66px;left:68px;"
          class="xui-label">姓名</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;width:42px;top:95px;left:56px;"
          class="xui-label"><![CDATA[证件号]]></xhtml:label>  
        <xhtml:label id="label7" style="position:absolute;width:66px;top:126px;left:32px;"
          class="xui-label">出生年月日</xhtml:label>  
        <xhtml:label id="label9" style="position:absolute;width:30px;top:155px;left:68px;"
          class="xui-label">职位</xhtml:label>  
        <xhtml:label id="label10" style="position:absolute;width:30px;top:186px;left:68px;"
          class="xui-label">学位</xhtml:label>  
        <xhtml:label id="label11" style="position:absolute;width:55px;top:216px;left:43px;"
          class="xui-label">政治面貌</xhtml:label>  
        <xhtml:label id="label12" style="position:absolute;width:30px;top:246px;left:68px;"
          class="xui-label">职称</xhtml:label>  
        <xhtml:label id="label13" style="position:absolute;width:55px;top:276px;left:43px;"
          class="xui-label">移动电话</xhtml:label>  
        <xhtml:label id="label14" style="position:absolute;width:30px;top:312px;left:68px;"
          class="xui-label">备注</xhtml:label>  
        <xhtml:label id="label15" style="position:absolute;width:52px;top:65px;left:295px;"
          class="xui-label">员工编号</xhtml:label>  
        <xhtml:label id="label16" style="position:absolute;width:30px;top:97px;left:317px;"
          class="xui-label">性别</xhtml:label>  
        <xhtml:label id="label17" style="position:absolute;width:30px;top:126px;left:317px;"
          class="xui-label">民族</xhtml:label>  
        <xhtml:label id="label18" style="position:absolute;width:30px;top:156px;left:317px;"
          class="xui-label">岗位</xhtml:label>  
        <xhtml:label id="label19" style="position:absolute;width:30px;top:185px;left:317px;"
          class="xui-label">学历</xhtml:label>  
        <xhtml:label id="label20" style="position:absolute;width:30px;top:215px;left:317px;"
          class="xui-label">专业</xhtml:label>  
        <xhtml:label id="label21" style="position:absolute;width:54px;top:244px;left:293px;"
          class="xui-label">email地址</xhtml:label>  
        <xhtml:label id="label22" style="position:absolute;width:66px;top:275px;left:281px;"
          class="xui-label">操作员状态</xhtml:label> 
      <xui:place control="input4" id="controlPlace4" style="position:absolute;top:89px;left:101px;width:149px;"></xui:place></xui:layout>  
      <xforms:input id="inputBirthday" ref="data('myData')/oPERATORBIRTHDAY" format="yyyy-MM-dd"/>  
      <xforms:input id="inputNation" ref="data('myData')/nATION"/>  
      <xforms:input id="inputMObile" ref="data('myData')/mOBILE"/>  
      <xforms:input id="inputEmailAddress" ref="data('myData')/eMAILADDRESS"/>  
      <xforms:input id="inputProfessional" ref="data('myData')/pROFESSIONAL"/>  
      <xforms:input id="inputMainOrgFName" ref="data('dMainOrg')/sName" readonly="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('myData')/oPERATORSEX"> 
        <xforms:label ref="col_1" id="xuiLabel3"/>  
        <xforms:value ref="col_0" id="default8"/>  
        <xforms:itemset id="default9" auto-load-data="true"> 
          <itemset-data xmlns="" id="default10">  
            <rows id="default11"> 
              <row id="default12"> 
                <cell id="default13">0</cell>  
                <cell id="default14">女</cell> 
              </row>  
              <row id="default15"> 
                <cell id="default16">1</cell>  
                <cell id="default17">男</cell> 
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default20"/>  
          <xforms:column ref="col_1" id="default21"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('myData')/oFFICEID"
        label-ref="data('myData')/oFFICEIDCNAME"> 
        <xforms:label ref="oFFICEIDCNAME" id="xuiLabel4"/>  
        <xforms:value ref="OFFICE_TYPE_CODE" id="default19"/>  
        <xforms:itemset id="default22" data="officeIdData" auto-load-data="true"> 
          <xforms:column ref="OFFICE_TYPE_CODE" visible="false" id="default28"/>  
          <xforms:column ref="oFFICEIDCNAME" id="default29"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelectPosition" ref="data('myData')/pOSITIONID"
        label-ref="data('myData')/pOSITIONIDCNAME"> 
        <xforms:label ref="pOSITIONIDCNAME" id="xuiLabel5"/>  
        <xforms:value ref="POSITION_TYPE_CODE" id="default24"/>  
        <xforms:itemset id="default25" data="positionIdData" auto-load-data="true"> 
          <xforms:column ref="POSITION_TYPE_CODE" visible="false" id="default34"/>  
          <xforms:column ref="pOSITIONIDCNAME" id="default35"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelectDegree" ref="data('myData')/dEGREEID"
        label-ref="data('myData')/dEGREEIDCNAME"> 
        <xforms:label ref="dEGREEIDCNAME" id="xuiLabel6"/>  
        <xforms:value ref="ACADEMIC_DEGREE_CODE" id="default31"/>  
        <xforms:itemset id="default32" data="dgreeData" auto-load-data="true"> 
          <xforms:column ref="ACADEMIC_DEGREE_CODE" visible="false" id="default45"/>  
          <xforms:column ref="dEGREEIDCNAME" id="default46"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelectEd" ref="data('myData')/eDUCATIONID"
        label-ref="data('myData')/eDUCATIONIDCNAME"> 
        <xforms:label ref="eDUCATIONIDCNAME" id="xuiLabel7"/>  
        <xforms:value ref="EDUCATION_CODE" id="default48"/>  
        <xforms:itemset id="default49" data="educationData" auto-load-data="true"> 
          <xforms:column ref="EDUCATION_CODE" visible="false" id="default60"/>  
          <xforms:column ref="eDUCATIONIDCNAME" id="default61"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelectPoli" ref="data('myData')/pOLITICALID"
        label-ref="data('myData')/pOLITICALIDCNAME"> 
        <xforms:label ref="pOLITICALIDCNAME" id="xuiLabel8"/>  
        <xforms:value ref="POLITICAL_AFFILIATION_CODE" id="default63"/>  
        <xforms:itemset id="default64" data="poliData" auto-load-data="true"> 
          <xforms:column ref="POLITICAL_AFFILIATION_CODE" visible="false" id="default69"/>  
          <xforms:column ref="pOLITICALIDCNAME" id="default70"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelectPoTi" ref="data('myData')/pOSITIONALTITLE"
        label-ref="data('myData')/pOSITIONALTITLEIDCNAME"> 
        <xforms:label ref="pOSITIONALTITLEIDCNAME" id="xuiLabel9"/>  
        <xforms:value ref="POSITIONAL_TITLE_CODE" id="default72"/>  
        <xforms:itemset id="default73" data="posiTiData" auto-load-data="true"> 
          <xforms:column ref="POSITIONAL_TITLE_CODE" visible="false" id="default78"/>  
          <xforms:column ref="pOSITIONALTITLEIDCNAME" id="default79"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelectOperatorState" ref="data('myData')/oPERATORSTATE"> 
        <xforms:label ref="col_1" id="xuiLabel10"/>  
        <xforms:value ref="col_0" id="default33"/>  
        <xforms:itemset id="default36" auto-load-data="true" independence="false"> 
          <itemset-data xmlns="" id="default37">  
            <rows id="default38"> 
              <row id="default39"> 
                <cell id="default40">1</cell>  
                <cell id="default41">正常</cell> 
              </row>  
              <row id="default42"> 
                <cell id="default43">2</cell>  
                <cell id="default44">工作</cell> 
              </row>  
              <row id="default50"> 
                <cell id="default51">3</cell>  
                <cell id="default52">病假</cell> 
              </row>  
              <row id="default53"> 
                <cell id="default54">4</cell>  
                <cell id="default55">年假</cell> 
              </row>  
              <row id="default56"> 
                <cell id="default57">5</cell>  
                <cell id="default58">事假</cell> 
              </row>  
              <row id="default59"> 
                <cell id="default65">6</cell>  
                <cell id="default66">公出</cell> 
              </row>  
              <row id="default67"> 
                <cell id="default68">7</cell>  
                <cell id="default74">离职</cell> 
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default83"/>  
          <xforms:column ref="col_1" id="default84"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('myData')/mEMO" id="textarea2"/> 
    <xforms:input id="input4" ref="data('myData')/cARDID"></xforms:input></xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="bizData2" mode="IMG_TXT_LR"> 
        <item id="barItem12"> 
          <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript2"><![CDATA[personDetail.inserMore(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item" id="barItem2"/>  
        <!--<item name="refresh-item" id="barItem4"/>  
        --><item name="delete-item" id="barItem3"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="customBarItem1"/>  
        <item name="pre-item" id="barItem8"/>  
        <item name="next-item" id="barItem9"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grdDetail" data="bizData2"> 
      <xui:column id="gridColumn6" ref="dETECTIONOBJECTCNAME" label="应用检测对象类型" type="select"
        width="147px" editor="gridSelect6" enter-selected="false"> 
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect6" ref="data('bizData2')/aPPLYFOROBJECT"
          input-changeable="false" label-ref="data('bizData2')/dETECTIONOBJECTCNAME"
          onCloseup="personDetail.gridSelect6Closeup"> 
          <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel14"/>  
          <xforms:value ref="DETECTION_OBJECT_TYPE" id="default115"/>  
          <xforms:itemset id="default116" data="yyjcdxlx" independence="false" auto-load-data="false"> 
            <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default123"/>  
            <xforms:column ref="dETECTIONOBJECTCNAME" id="default124"/> 
          </xforms:itemset> 
        </xhtml:div> 
      </xui:column>  
      <xui:column id="gridColumn7" ref="dEVICETYPECNAME" label="应用检测对象" type="select"
        width="140px" editor="gridSelect7"> 
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect7" ref="data('bizData2')/aPPLYFORDEVICETYPE"
          label-ref="data('bizData2')/dEVICETYPECNAME"> 
          <xforms:label ref="dEVICETYPECNAME" id="xuiLabel15"/>  
          <xforms:value ref="dEVICETYPE" id="default128"/>  
          <xforms:itemset id="default129" data="yyjcdx"> 
              
             
          
  <xforms:column ref="dEVICETYPE" visible="false" id="default93"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default94"></xforms:column></xforms:itemset> 
        </xhtml:div> 
      </xui:column>  
      <xui:column id="gridColumn8" ref="dETECTIONRANGECNAME" label="应用检测方面定义" type="select"
        width="135px" editor="gridSelect8"> 
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect8" ref="data('bizData2')/aPPLYFORRANGE"
          label-ref="data('bizData2')/dETECTIONRANGECNAME"> 
          <xforms:label ref="dETECTIONRANGECNAME" id="xuiLabel16"/>  
          <xforms:value ref="DETECTION_RANGE_TYPE" id="default136"/>  
          <xforms:itemset id="default137" data="yyjcfmlx"> 
            <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default142"/>  
            <xforms:column ref="dETECTIONRANGECNAME" id="default143"/> 
          </xforms:itemset> 
        </xhtml:div> 
      </xui:column> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"
        data="myData" mode="IMG_TXT_LR" style="width:485px;"> 
        <!-- item name="save-item" id="barItem12"></item -->  
        <item id="barItem12"> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript3"><![CDATA[personDetail.image1Click(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="delete-item" id="barItem13"/>  
        <item name="filter-item" id="barItem15"/>  
        <item name="filter-pattern-item" id="barItem16"/>  
        <item name="separator" id="customBarItem3"/>  
        <item name="pre-item" id="barItem18"/>  
        <item name="next-item" id="barItem19"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">人员基本信息</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMaster1" id="controlPlace80"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace81" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">人员技能信息</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2"> 
              <place control="tbsMaster2" id="controlPlace82" style="height:43px;"/>  
              <!-- <place control="vDetail" id="controlPlace83" style="height:153px;"/>  
              <place control="tbsDetail" id="controlPlace84"/> --> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="grdDetail" id="controlPlace85" style="width:100%;height:98%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="educationTP"> 
          <xui:label id="xuiLabel11"><![CDATA[人员教育和工作信息]]></xui:label>  
          <xui:place control="view2" id="controlPlace21" style="width:543px;height:441px;"/> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout3"> 
        <xui:place control="toolbars3" id="controlPlace22" style="position:absolute;left:2px;width:436px;height:37px;top:3px;"/>  
        <xui:place control="grid1" id="controlPlace23" style="position:absolute;left:2px;width:532px;top:219px;height:212px;"/>  
        <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;top:49px;left:67px;"/>  
        <xui:place control="input1" id="controlPlace20" style="position:absolute;top:83px;left:370px;"/>  
        <xui:place control="input3" id="controlPlace24" style="position:absolute;top:83px;left:67px;"/>  
        <xui:place control="textarea1" id="controlPlace26" style="position:absolute;height:22px;left:67px;top:113px;width:462px;"/>  
        <xui:place control="textarea3" id="controlPlace28" style="height:22px;left:67px;position:absolute;top:149px;width:461px;"/>  
        <xui:place control="textarea4" id="controlPlace29" style="height:22px;left:67px;position:absolute;top:186px;width:464px;"/>  
        <xhtml:label id="label8" class="xui-label" style="position:absolute;position:absolute;top:53px;left:17px;">信息类型</xhtml:label>  
        <xhtml:label id="label23" class="xui-label" style="position:absolute;position:absolute;top:86px;left:18px;">起始日期</xhtml:label>  
        <xhtml:label id="label24" class="xui-label" style="position:absolute;position:absolute;top:86px;left:319px;">结束日期</xhtml:label>  
        <xhtml:label id="label25" class="xui-label" style="position:absolute;position:absolute;top:119px;left:42px;">地点</xhtml:label>  
        <xhtml:label id="label26" class="xui-label" style="position:absolute;position:absolute;top:155px;left:18px;">内容说明</xhtml:label>  
        <xhtml:label id="label27" class="xui-label" style="position:absolute;position:absolute;top:189px;left:41px;">备注</xhtml:label>  
        <xhtml:label id="label28" class="xui-label" style="color:#FF0000;position:absolute;position:absolute;top:53px;left:8px;">*</xhtml:label>  
        <xhtml:label id="label29" class="xui-label" style="color:#FF0000;position:absolute;position:absolute;top:86px;left:8px;">*</xhtml:label>  
        <xhtml:label id="label30" class="xui-label" style="color:#FF0000;position:absolute;position:absolute;top:155px;left:8px;">*</xhtml:label>  
        <xhtml:label id="label31" class="xui-label" style="color:#FF0000;position:absolute;position:absolute;left:33px;top:189px;">*</xhtml:label>  
        <xhtml:label id="label33" class="xui-label" style="color:#FF0000;position:absolute;position:absolute;top:119px;left:33px;">*</xhtml:label>  
        <xhtml:label id="label34" class="xui-label" style="color:#FF0000;position:absolute;position:absolute;top:86px;left:309px;">*</xhtml:label> 
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar3" data="educationJobD"> 
          <item id="barItem1"> 
            <xforms:trigger appearance="image-text" id="insertTr" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript1"><![CDATA[personDetail.insert1(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="save-item" id="barItem11"/>  
          <item name="delete-item" id="barItem21"/>  
          <!--<item name="refresh-item" id="barItem22"/>  
          --><item name="separator" id="customBarItem6"/>  
          <item name="pre-item" id="barItem24"/>  
          <item name="next-item" id="barItem25"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid1" data="educationJobD" onRowDblClick="personDetail.grid1RowDblClick"> 
        <xui:column id="gridColumn1" ref="eXPERIENCETYPECNAME" label="信息类型" type="ed"
          width="100px"/>  
        <xui:column id="gridColumn2" ref="eXPERIENCEPLACE" label="地点" type="ed" width="108px"/>  
        <xui:column id="gridColumn3" ref="eXPERIENCEDESCRIPTION" label="内容说明" type="ed"
          width="86px"/>  
        <xui:column id="gridColumn4" ref="eXPERIENCESTARTDATE" label="起始日期" type="ed"
          width="114px"/>  
        <xui:column id="gridColumn5" ref="eXPERIENCEENDDATE" label="结束日期" type="ed"
          width="119px"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('educationJobD')/eXPERIENCETYPE"
        label-ref="data('educationJobD')/eXPERIENCETYPECNAME"> 
        <xforms:label ref="col_1" id="default85"/>  
        <xforms:value ref="col_0" id="default89"/>  
        <xforms:itemset id="default90" auto-load-data="true"> 
          <itemset-data xmlns="" id="default172">  
            <rows id="default173"> 
              <row id="default174"> 
                <cell id="default175">1</cell>  
                <cell id="default176">教育信息</cell> 
              </row>  
              <row id="default177"> 
                <cell id="default178">2</cell>  
                <cell id="default179">培训信息</cell> 
              </row>  
              <row id="default180"> 
                <cell id="default181">3</cell>  
                <cell id="default182">工作信息</cell> 
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default185"/>  
          <xforms:column ref="col_1" id="default186"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input id="input1" ref="data('educationJobD')/eXPERIENCEENDDATE"/>  
      <xforms:input id="input3" ref="data('educationJobD')/eXPERIENCESTARTDATE"/>  
      <xforms:textarea ref="data('educationJobD')/eXPERIENCEPLACE" id="textarea1"/>  
      <xforms:textarea ref="data('educationJobD')/eXPERIENCEDESCRIPTION" id="textarea3"/>  
      <xforms:textarea ref="data('educationJobD')/mEMO" id="textarea4"/> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/>  
    <xhtml:script id="htmlScript1" src="personDetail.js"/> 
  </xui:resource> 
</xui:window>

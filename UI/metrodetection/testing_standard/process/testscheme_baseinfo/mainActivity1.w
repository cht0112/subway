<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:349px;height:auto;left:276px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TEST_SCHEME_BASE_INFO" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" store-type="grid"> 
      <reader action="/metrodetection/testing_standard/logic/action/myQuerylist"
        id="default3"/>  
      <writer action="/metrodetection/testing_standard/logic/action/saveTEST_SCHEME_BASE_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/testing_standard/logic/action/createTEST_SCHEME_BASE_INFOAction"
        id="default5"/> 
    </data>  
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
      auto-load="true" id="bizData4" concept="DECTION_BASED_ON_ID_CODE">
      <creator id="default79"/>  
      <reader id="default80" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_ON_ID_CODEAction"/>  
      <writer id="default81"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="jcfaylxxData" concept="TEST_SCHEME_CASE_INFO">
      <creator id="default6" action="/metrodetection/testing_standard/logic/action/createTEST_SCHEME_CASE_INFOAction"/>  
      <reader id="default7" action="/metrodetection/testing_standard/logic/action/myQueryTestBaseCaseInfoAction"/>  
      <writer id="default9" action="/metrodetection/testing_standard/logic/action/saveTEST_SCHEME_CASE_INFOAction"/>  
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
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1"> 
        <item> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            id="insertTrigger" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none" title="新建"/> 
        </item>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1" name="separator"/>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMain"
            id="excelExport1"/> 
        </item>  
        <item id="barItem7" name="separator"/>  
        <item id="barItem8"> 
          <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
            id="printHtml1" is-preview="true" label="打印" target-id="grdMain"/> 
        </item>  
        <item id="barItem9"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="tESTSCHEMENAME,tESTSCHEMEDESC,bUSINESSID,dECTIONBASEDONID,mAKEDATETIME,vALIDSTATE"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem10"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();"
            src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="检测方案名称" ref="tESTSCHEMENAME" type="ro" width="100px"/>  
      <column id="default2" label="检测方案描述" ref="tESTSCHEMEDESC" type="ro" width="100px"/>  
      <xui:column id="gridColumn1" ref="bUSINESSIDCNAME" label="业务类型" type="ed" width="100"/>
      <xui:column id="gridColumn2" ref="dECTIONBASEDONIDCNAME" label="检测依据ID" type="ed"
        width="100"/>
      <column id="default8" label="制作日期时间" ref="mAKEDATETIME" type="ro" width="100px"/>  
      <xui:column id="gridColumn3" ref="vALIDSTATECNAME" label="有效状态" type="ed" width="100"/>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2"> 
        <item id="barItem12" name="insert-item"/>  
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
      <layout id="layout2" style="position:relative;height:114%;" type="absolute"> 
        <place control="iptTESTSCHEMENAME" id="default11" style="font-size:10pt;position: absolute;top:31px;left:183px;"/>
        <place control="iptTESTSCHEMEDESC" id="default13" style="font-size:10pt;position: absolute;top:33px;left:515px;"/>  
        <place control="iptMAKEDATETIME" id="default19" style="font-size:10pt;position: absolute;top:134px;left:183px;"/>  
        <xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;top:87px;left:183px;"/>  
        <xui:place control="gridSelect3" id="controlPlace7" style="position:absolute;top:140px;left:515px;"/>  
        <xui:place control="gridSelect4" id="controlPlace8" style="position:absolute;top:85px;left:515px;"/>  
        <xhtml:label id="label1" style="position:absolute;top:37px;left:98px;" class="xui-label">检测方案名称</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;top:36px;left:435px;" class="xui-label">检测方案描述</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:55px;top:90px;left:123px;"
          class="xui-label">业务类型</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:65px;left:450px;top:91px;"
          class="xui-label">检测依据ID</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;top:143px;left:98px;" class="xui-label">制作日期时间</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;width:55px;left:460px;top:147px;"
          class="xui-label">有效状态</xhtml:label>  
        <xui:place control="toolbars1" id="controlPlace3" style="position:absolute;width:400px;top:173px;height:25px;left:6px;"/>  
        <xui:place control="view1" id="controlPlace9" style="position:absolute;top:202px;left:-1px;width:101%;height:213px;"/>
      </layout>  
      <xforms:input id="iptTESTSCHEMENAME" ref="data('dataMain')/tESTSCHEMENAME"/>
      <xforms:input id="iptTESTSCHEMEDESC" ref="data('dataMain')/tESTSCHEMEDESC"/>  
      <xforms:input id="iptMAKEDATETIME" ref="data('dataMain')/mAKEDATETIME"/>  
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
        <xforms:label ref="dECTIONBASEDONIDCNAME" id="xuiLabel6"/>  
        <xforms:value ref="DECTION_BASED_ON_ID_CODE" id="default62"/>  
        <xforms:itemset id="default63" auto-load-data="true" data="bizData4"> 
          <xforms:column ref="dECTIONBASEDONIDCNAME" id="default93"/>  
          <xforms:column ref="DECTION_BASED_ON_ID_CODE" visible="false" id="default94"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1">
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
          data="jcfaylxxData"> 
          <item id="barItem16">
          	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            id="insertNew" onclick="mainActivity.insertNewClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none" title="新建"/> 
          </item> 
          <item name="save-item" id="barItem17"/>  
          <item name="delete-item" id="barItem22"/>  
          <item name="refresh-item" id="barItem23"/>  
          <item name="filter-item" id="barItem24"/>  
          <item name="filter-pattern-item" id="barItem25"/>  
          <item name="separator" id="customBarItem1"/>  
          <item name="first-item" id="barItem26"/>  
          <item name="pre-item" id="barItem27"/>  
          <item name="next-item" id="barItem28"/>  
          <item name="last-item" id="barItem29"/>  
          <item name="separator" id="customBarItem2"/>  
          <item name="custom-page-item" id="customPageItem1"/>
        </xui:bar>
      </xhtml:div>  
      <xui:view auto-load="true" id="view1" class="xui-container"> 
        <layout type="absolute" style="position:relative;width:101%;height:213px;"
          id="layout1">
          <xui:place control="grid1" id="controlPlace10" style="position:absolute;width:100%;top:8px;height:222px;left:2px;"/>
        </layout>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid1" data="jcfaylxxData">
          <xui:column id="gridColumn4" ref="bUSINESSIDCNAME" label="业务类型" type="select"
            width="100" editor="gridSelect1">
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
              label-separator="," value-separator="," ext-separator="," id="gridSelect1"
              ref="data('jcfaylxxData')/bUSINESSID" label-ref="data('dataMain')/bUSINESSIDCNAME"> 
              <xforms:label ref="bUSINESSIDCNAME" id="xuiLabel3"/>  
              <xforms:value ref="BUSINESS_TYPE_CODE" id="default10"/>  
              <xforms:itemset id="default12" data="bizData2" auto-load-data="true"> 
                <xforms:column ref="BUSINESS_TYPE_CODE" visible="false" id="default23"/>  
                <xforms:column ref="bUSINESSIDCNAME" id="default27"/>
              </xforms:itemset>
            </xhtml:div>
          </xui:column>  
          <xui:column id="gridColumn5" ref="bUSINESSSTAGECNAME" label="业务阶段" type="select"
            width="100" editor="gridSelect5">
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
              label-separator="," value-separator="," ext-separator="," id="gridSelect5"
              ref="data('jcfaylxxData')/bUSINESSSTAGE" label-ref="data('jcfaylxxData')/bUSINESSSTAGECNAME"> 
              <xforms:label ref="bUSINESSSTAGECNAME" id="xuiLabel7"/>  
              <xforms:value ref="BUSINESS_STAGE_CODE" id="default28"/>  
              <xforms:itemset id="default29" data="businessStageData" auto-load-data="true"> 
                <xforms:column ref="BUSINESS_STAGE_CODE" visible="false" id="default52"/>  
                <xforms:column ref="bUSINESSSTAGECNAME" id="default53"/>
              </xforms:itemset>
            </xhtml:div>
          </xui:column>  
          <xui:column id="gridColumn6" ref="dETECTIONOBJECTCNAME" label="检测对象类别" type="select"
            width="100" editor="gridSelect6">
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
              label-separator="," value-separator="," ext-separator="," id="gridSelect6"
              ref="data('jcfaylxxData')/aPPLYFOROBJECT" label-ref="data('jcfaylxxData')/dETECTIONOBJECTCNAME"> 
              <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel8"/>  
              <xforms:value ref="DETECTION_OBJECT_TYPE" id="default54"/>  
              <xforms:itemset id="default55" data="detecObjData" auto-load-data="true"> 
                <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default61"/>  
                <xforms:column ref="dETECTIONOBJECTCNAME" id="default64"/>
              </xforms:itemset>
            </xhtml:div>
          </xui:column>  
          <xui:column id="gridColumn7" ref="dEVICETYPECNAME" label="检测对象" type="select"
            width="100" editor="gridSelect7">
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
              label-separator="," value-separator="," ext-separator="," id="gridSelect7"
              ref="data('jcfaylxxData')/aPPLYFORDEVICETYPE" label-ref="data('jcfaylxxData')/dEVICETYPECNAME"> 
              <xforms:label ref="dEVICETYPECNAME" id="xuiLabel9"/>  
              <xforms:value ref="DEVICE_TYPE_CODE" id="default65"/>  
              <xforms:itemset id="default66" data="deviceTypeCodeData" auto-load-data="true"> 
                <xforms:column ref="DEVICE_TYPE_CODE" visible="false" id="default74"/>  
                <xforms:column ref="dEVICETYPECNAME" id="default75"/>
              </xforms:itemset>
            </xhtml:div>
          </xui:column>
        </xhtml:div>
      </xui:view>
    </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:110%;"> 
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
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="32px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:114%;"/> 
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

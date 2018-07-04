<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:94px;left:655px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DEFECT_TRACK_BUG_INFO" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" onIndexChanged="solutionDefectBug.dataMainIndexChanged" onValueChanging="solutionDefectBug.dataMainValueChanging" filter-relations="FUNC_NAME,MODULE_NAME,PRODUCT_NAME,PROJECT_NAME,DEFECT_STATUS_CNAME"> 
      <reader action="/metrodetection/defect_information/logic/action/queryNewDefectBugAction"
        id="default3"/>  
      <writer action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_BUG_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_BUG_INFOAction"
        id="default5"/>  
      <rule id="default29" relation="PRIORITY" required="true()"/>  
      <rule id="default32" relation="SEVERITY" required="true()"/>  
      <rule id="default35" relation="ASSIGN_PERSON" required="true()"/>  
      <rule id="default40" relation="DEFECT_DESC" required="true()"/>  
      <rule id="default49" relation="DEFECT_STATUS" required="true()"/>  
      <rule id="default52" relation="CREATOR" required="true()"/>  
      <rule id="default55" relation="CREATE_DATE" required="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="versionData" concept="DEFECT_TRACK_VERSION_INFO"> 
      <reader id="default68" action="/metrodetection/defect_information/logic/action/queryProductVersionAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="true" id="ccPersonData" concept="SA_OPOrg" limit="200" is-tree="true"> 
      <reader id="default111" action="/SA/OPM/logic/action/queryOPOrgAction"/> 
    <tree-option id="default10" parent-relation="sParent"></tree-option></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="projectSelectData" concept="DEFECT_TRACK_PROJECT_INFO"> 
      <reader id="default114" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PROJECT_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="productSelectData" concept="DEFECT_TRACK_PRODUCT_INFO"> 
      <reader id="default119" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PRODUCT_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="moduleSelectData" concept="DEFECT_TRACK_MODULE_INFO"> 
      <reader id="default128" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_MODULE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="funcSelectData" concept="DEFECT_TRACK_FUNC_INFO"> 
      <reader id="default153" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_FUNC_INFOAction"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereVersion"> 
      <reader action="/system/logic/action/queryOrgAction" id="default3_7"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll"> 
      <creator action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"
        id="default4_7"/>  
      <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"
        id="default15_7"/>  
      <writer action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"
        id="default16_7"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="false" id="assignPersonData" concept="SA_OPOrg" is-tree="true"> 
      <reader id="default182" action="/SA/OPM/logic/action/queryOPOrgAction"/> 
    <tree-option id="default2" parent-relation="sParent"></tree-option></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="reviewerData" concept="SA_OPOrg" limit="200" is-tree="true">
   <reader id="default65" action="/SA/OPM/logic/action/queryOPOrgAction"></reader>
  <tree-option id="default9" parent-relation="sParent"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="defectStatusData" concept="DEFECT_STATUS_CODE">
   <reader id="default73" action="/metrodetection/system_code/logic/action/queryDEFECT_STATUS_CODEAction"></reader></data>
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2"><![CDATA[solutionDefectBug.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="xml" columns="value,name" src="" auto-load="false" id="cData" store-type="simple" auto-new="true"></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="VERSION_ID,FUNC_ID,PLATFORM_INFO,PRIORITY,SEVERITY,ASSIGN_PERSON,CC_PERSON,DEFECT_DESC,DEFECT_DETAIL,DEFECT_REASON,DEFECT_SOLUTION,DEFECT_STATUS,CREATOR,CREATE_DATE,REVIEW_COMMENT,REVIEWER,REVIEW_DATE,MEMO"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default22"> <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1"> <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
        
                <item id="customBarItem4">
          <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect"
            label-separator="," value-separator="," ext-separator="," id="gridSelect5"
            ref="data('cData')/value" label-ref="data('cData')/name" style="width:83px;" default-label-ref="'全部'"> 
            <xforms:label ref="col_1" id="default82"/>  
            <xforms:value ref="col_0" id="default83"/>  
            <xforms:itemset id="default108">
              <itemset-data xmlns="" id="default109">  
                <rows id="default110">  
                  <row id="default112"> 
                    <cell id="default113">0</cell>  
                    <cell id="default116">全部</cell>
                  </row>  
                  <row id="default117"> 
                    <cell id="default143">1</cell>  
                    <cell id="default154">本人</cell>
                  </row> 
                </rows> 
              </itemset-data>  
              <xforms:column ref="col_0" visible="false" id="default171"/>  
              <xforms:column ref="col_1" id="default172"/>
            </xforms:itemset>
          </xhtml:div>
        </item>  
        <item id="customBarItem5">
          <xforms:trigger id="trigger3"> 
            <xforms:label id="default170"><![CDATA[查询]]></xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[solutionDefectBug.trigger3Click(event)]]></xforms:script></xforms:action></xforms:trigger>
        </item>
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="solutionDefectBug.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <xui:column id="gridColumn8" ref="PROJECT_NAME" label="项目名称" type="ro" width="164px" align="left"/>
      <xui:column id="gridColumn2" ref="PRODUCT_NAME" label="产品名称" type="ro" width="164px" align="left"/>
      <xui:column id="gridColumn1" ref="MODULE_NAME" label="模块名称" type="ro" width="168px" align="left"/>
      <xui:column id="gridColumn6" ref="FUNC_NAME" label="功能名称" type="ro" width="185px"
        align="left"/>
      <xui:column id="gridColumn12" ref="myVersionId" type="ro" width="112px" label="缺陷版本号" align="left"/>
      <xui:column id="gridColumn3" ref="PRIORITY_NAME" type="ro" width="87px" label="缺陷类型"
        align="left"/>  
      <xui:column id="gridColumn4" ref="SEVERITY_NAME" type="ro" width="100px" label="缺陷等级"
        align="left"/>  
      <xui:column id="gridColumn5" ref="DEFECT_STATUS_CNAME" type="ro" width="80px"
        label="缺陷状态" align="left"/>  
      <xui:column id="gridColumn7" ref="ASSIGN_PERSON_NAME" label="分配给谁" type="ro"
        width="88px" align="left"/>  
      <xui:column id="gridColumn9" ref="CREATOR_NAME" label="缺陷提出人" type="ro" width="85px"
        align="left"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
<!--        <item id="barItem13" name="save-item"/>  -->
      <item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[solutionDefectBug.newItemClick(event)]]> </xforms:script> 
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
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <place control-label="iptVERSION_ID" id="default23" style="font-size:10pt;position: absolute;height:14px;width:28px;top:46px;left:78px;"
          label="版本"/>  
        <place control-label="iptFUNC_ID" id="default25" style="font-size:10pt;position: absolute;top:77px;left:78px;"
          label="功能"/>  
        <place control-label="iptPLATFORM_INFO" id="default27" style="font-size:10pt;position: absolute;width:99px;top:107px;left:15px;"
          label="平台及操作系统"/>  
        <xhtml:span id="span1" style="font-size:10pt;position:absolute;color:#FF0000;width:9px;top:137px;left:354px;"> <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptPRIORITY" id="default30" style="font-size:10pt;position:absolute;color:#000000;height:15px;width:59px;top:139px;left:365px;"
          label="缺陷类型"/>  
        <xhtml:span id="span2" style="font-size:10pt;position:absolute;color:#FF0000;width:9px;top:133px;left:37px;"> <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptSEVERITY" id="default33" style="font-size:10pt;position:absolute;color:#000000;width:54px;height:15px;top:136px;left:51px;"
          label="缺陷等级"/>  
        <xhtml:span id="span3" style="font-size:10pt;position:absolute;color:#FF0000;top:167px;left:45px;"> <![CDATA[*]]> </xhtml:span>  
        <place id="default36" style="font-size:10pt;position:absolute;color:#000000;top:169px;left:54px;"
          label="分配给谁" control-label="iptASSIGN_PERSON"/>  
        <!--        <place id="default37" style="font-size:10pt;position: absolute;width:165px;left:110px;top:194px;"/>  -->  
        <place control-label="iptCC_PERSON" id="default38" style="font-size:10pt;position: absolute;top:169px;left:370px;"
          label="抄送给谁"/>  
        <xhtml:span id="span4" style="font-size:10pt;position:absolute;color:#FF0000;top:205px;left:40px;"> <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptDEFECT_DESC" id="default41" style="font-size:10pt;position:absolute;color:#000000;top:205px;left:53px;"
          label="缺陷描述"/>  
        <place control-label="iptDEFECT_DETAIL" id="default43" style="font-size:10pt;position: absolute;top:296px;left:54px;"
          label="缺陷详细"/>  
        <place control-label="iptDEFECT_REASON" id="default45" style="font-size:10pt;position: absolute;left:53px;top:408px;"
          label="缺陷原因"/>  
        <xhtml:span id="span5" style="font-size:10pt;position:absolute;color:#FF0000;top:75px;left:357px;"> <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptDEFECT_STATUS" id="default50" style="font-size:10pt;position:absolute;color:#000000;top:77px;left:368px;"
          label="缺陷状态"/>  
        <xhtml:span id="span6" style="font-size:10pt;position:absolute;color:#FF0000;top:726px;left:15px;"> <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptCREATOR" id="default53" style="font-size:10pt;position:absolute;color:#000000;top:725px;left:28px;"
          label="缺陷提出人"/>  
        <place control="iptCREATOR" id="default54" style="font-size:10pt;position: absolute;width:165px;top:722px;left:109px;"/>  
        <xhtml:span id="span7" style="font-size:10pt;position:absolute;color:#FF0000;top:725px;left:322px;"> <![CDATA[*]]> </xhtml:span>  
        <place control-label="iptCREATE_DATE" id="default56" style="font-size:10pt;position:absolute;color:#000000;top:728px;left:333px;"
          label="缺陷提出日期"/>  
        <place control="iptCREATE_DATE" id="default57" style="font-size:10pt;position: absolute;width:165px;top:722px;left:425px;"/>  
        <place control-label="iptMEMO" id="default64" style="font-size:10pt;position: absolute;top:597px;left:78px;"
          label="备注"/>  
        <xui:place control="iptVERSION_ID" id="controlPlace3" style="position:absolute;width:165px;top:43px;left:121px;"/>  
        <xui:place control="iptPRIORITY" id="controlPlace6" style="position:absolute;width:164px;top:131px;left:435px;"/>  
        <xui:place control="iptSEVERITY" id="controlPlace7" style="position:absolute;width:165px;top:132px;left:120px;"/>  
        <xui:place control="iptCC_PERSON" id="controlPlace8" style="position:absolute;width:165px;top:163px;left:434px;"/>  
        <xui:place control="projectSelect" id="controlPlace9" style="position:absolute;width:165px;top:13px;left:121px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:20px;top:17px;left:80px;"
          class="xui-label"><![CDATA[项目]]></xhtml:label>  
        <xui:place control="gridSelect2" id="controlPlace10" style="position:absolute;width:165px;top:11px;left:435px;"/>  
        <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;top:17px;left:395px;"><![CDATA[产品]]></xhtml:label>  
        <xui:place control="iptMEMO" id="controlPlace11" style="position:absolute;width:482px;height:87px;left:118px;top:597px;"/>  
        <xui:place control="iptDEFECT_REASON" id="controlPlace14" style="position:absolute;height:92px;left:120px;top:387px;"/>  
        <xui:place control="iptDEFECT_DETAIL" id="controlPlace15" style="position:absolute;height:89px;top:287px;left:121px;"/>  
        <xui:place control="iptDEFECT_DESC" id="controlPlace16" style="position:absolute;height:82px;top:194px;left:120px;"/>  
        <xui:place control="gridSelect3" id="controlPlace17" style="position:absolute;width:165px;top:41px;left:435px;"/>  
        <xhtml:label id="label3" class="xui-label" style="position:absolute;position:absolute;position:absolute;top:47px;left:395px;"><![CDATA[模块]]></xhtml:label>  
        <xui:place control="iptPLATFORM_INFO" id="controlPlace18" style="position:absolute;width:165px;top:102px;left:121px;"/>  
        <xui:place control="iptFUNC_ID" id="controlPlace19" style="position:absolute;width:164px;top:72px;left:121px;"/>  
        <xui:place control="iptDEFECT_STATUS" id="controlPlace20" style="position:absolute;width:164px;top:71px;left:435px;"/>  
        <xui:place control="iptASSIGN_PERSON" id="controlPlace21" style="position:absolute;width:165px;top:163px;left:120px;"/> 
      <xui:place control="textarea1" id="controlPlace12" style="position:absolute;height:95px;left:120px;top:490px;"></xui:place>
  <xhtml:label id="label4" style="position:absolute;left:32px;top:500px;" class="xui-label"><![CDATA[缺陷解决过程]]></xhtml:label>
  <xui:place control="gridSelect1" id="controlPlace13" style="position:absolute;width:164px;top:101px;left:435px;"></xui:place>
  <xhtml:label id="label5" class="xui-label" style="position:absolute;position:absolute;top:110px;left:361px;">缺陷评审人</xhtml:label></layout>  
      <xforms:input id="iptCREATOR" ref="data('dataMain')/CREATOR_NAME" disabled="true" tabindex="18"/>  
      <xforms:input id="iptCREATE_DATE" ref="data('dataMain')/CREATE_DATE" disabled="true" tabindex="19"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptVERSION_ID" ref="data('dataMain')/VERSION_ID" disabled="true" label-ref="data('dataMain')/myVersionId" tabindex="3"> 
        <xforms:label ref="DEFECT_TRACK_VERSION_INFO" id="default24"/>  
        <xforms:value ref="DEFECT_TRACK_VERSION_INFO" id="default66"/>  
        <xforms:itemset id="default67" data="versionData" auto-load-data="true"> 
          <xforms:column ref="DEFECT_TRACK_VERSION_INFO" id="default69"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptPRIORITY" ref="data('dataMain')/PRIORITY" disabled="true" tabindex="10"> 
        <xforms:label ref="col_1" id="default70"/>  
        <xforms:value ref="col_0" id="default71"/>  
        <xforms:itemset id="default72" auto-load-data="true"> 
            
          <xforms:column ref="col_0" visible="false" id="default84"/>  
          <xforms:column ref="col_1" id="default85"/> 
        <itemset-data xmlns="" id="default115">
   <rows xmlns="" id="default118">
    <row id="default123">
     <cell id="default124">1</cell>
     <cell id="default129">功能错误</cell></row> 
    <row id="default130">
     <cell id="default131">2</cell>
     <cell id="default132">功能缺失</cell></row> 
    <row id="default136">
     <cell id="default137">3</cell>
     <cell id="default138">界面缺陷</cell></row> 
    <row id="default139">
     <cell id="default140">4</cell>
     <cell id="default141">其他</cell></row> </rows> </itemset-data></xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptSEVERITY" ref="data('dataMain')/SEVERITY" disabled="true" tabindex="9"> 
        <xforms:label ref="col_1" id="default86"/>  
        <xforms:value ref="col_0" id="default87"/>  
        <xforms:itemset id="default88" auto-load-data="true"> 
            
          <xforms:column ref="col_0" visible="false" id="default106"/>  
          <xforms:column ref="col_1" id="default107"/> 
        <itemset-data xmlns="" id="default89">
   <rows xmlns="" id="default90">
    <row id="default91">
     <cell id="default92">1</cell>
     <cell id="default93">致命缺陷</cell></row> 
    <row id="default94">
     <cell id="default95">2</cell>
     <cell id="default96">严重缺陷</cell></row> 
    <row id="default97">
     <cell id="default98">3</cell>
     <cell id="default99">一般性缺陷</cell></row> 
    <row id="default100">
     <cell id="default101">4</cell>
     <cell id="default102">建议性缺陷</cell></row> 
    <row id="default103">
     <cell id="default104">5</cell>
     <cell id="default105">其它缺陷</cell></row> </rows> </itemset-data></xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptCC_PERSON" ref="data('dataMain')/CC_PERSON"
        label-ref="data('dataMain')/CC_PERSON_NAME" disabled="true" tabindex="12"> 
        <xforms:label ref="sName" id="default108"/>  
        <xforms:value ref="personLoginName" id="default109"/>  
        <xforms:itemset id="default110" data="ccPersonData" auto-load-data="true"> 
            
           
        <xforms:column ref="personLoginName" visible="false" id="default11"></xforms:column>
  <xforms:column ref="sName" id="default12"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="projectSelect" ref="data('dataMain')/PROJECT_ID"
        disabled="true" tabindex="1"> 
        <xforms:label ref="PROJECT_NAME" id="default31"/>  
        <xforms:value ref="DEFECT_TRACK_PROJECT_INFO" id="default34"/>  
        <xforms:itemset id="default39" data="projectSelectData" auto-load-data="true"> 
          <xforms:column ref="DEFECT_TRACK_PROJECT_INFO" visible="false" id="default144"/>  
          <xforms:column ref="PROJECT_NAME" id="default145"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/PRODUCT_IDID"
        input-changeable="true" disabled="true" tabindex="2"> 
        <xforms:label ref="PRODUCT_NAME" id="default120"/>  
        <xforms:value ref="DEFECT_TRACK_PRODUCT_INFO" id="default121"/>  
        <xforms:itemset id="default122" data="productSelectData" auto-load-data="true"> 
          <xforms:column ref="DEFECT_TRACK_PRODUCT_INFO" visible="false" id="default146"/>  
          <xforms:column ref="PRODUCT_NAME" id="default147"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dataMain')/MEMO" id="iptMEMO" tabindex="17"/>  
      <xforms:textarea ref="data('dataMain')/DEFECT_REASON" id="iptDEFECT_REASON" tabindex="15"/>  
      <xforms:textarea ref="data('dataMain')/DEFECT_DETAIL" id="iptDEFECT_DETAIL" disabled="true" tabindex="14"/>  
      <xforms:textarea ref="data('dataMain')/DEFECT_DESC" id="iptDEFECT_DESC" disabled="true" tabindex="13"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/MODULE_ID" disabled="true" tabindex="4"> 
        <xforms:label ref="MODULE_NAME" id="default125"/>  
        <xforms:value ref="DEFECT_TRACK_MODULE_INFO" id="default126"/>  
        <xforms:itemset id="default127" data="moduleSelectData" auto-load-data="true"> 
          <xforms:column ref="DEFECT_TRACK_MODULE_INFO" visible="false" id="default148"/>  
          <xforms:column ref="MODULE_NAME" id="default149"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptPLATFORM_INFO" ref="data('dataMain')/PLATFORM_INFO" disabled="true" tabindex="7"> 
        <xforms:label ref="col_1" id="default133"/>  
        <xforms:value ref="col_0" id="default134"/>  
        <xforms:itemset id="default135"><itemset-data xmlns="" id="default1">
   <rows xmlns="" id="default6">
    <row id="default28">
     <cell id="default37">1</cell>
     <cell id="default42">Linux</cell></row> 
    <row id="default44">
     <cell id="default46">2</cell>
     <cell id="default47">Windows</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default48"></xforms:column>
  <xforms:column ref="col_1" id="default51"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptFUNC_ID" ref="data('dataMain')/FUNC_ID" disabled="true" tabindex="5"> 
        <xforms:label ref="FUNC_NAME" id="default150"/>  
        <xforms:value ref="DEFECT_TRACK_FUNC_INFO" id="default151"/>  
        <xforms:itemset id="default152" data="funcSelectData" auto-load-data="true"> 
          <xforms:column ref="DEFECT_TRACK_FUNC_INFO" visible="false" id="default177"/>  
          <xforms:column ref="FUNC_NAME" id="default178"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptDEFECT_STATUS" ref="data('dataMain')/DEFECT_STATUS" onDropdown="solutionDefectBug.iptDEFECT_STATUSDropdown" default-label-ref="'已分配'" input-changeable="true" tabindex="6"> 
        <xforms:label ref="DEFECT_STATUS_CNAME" id="default156"/>  
        <xforms:value ref="DEFECT_STATUS_CODE" id="default157"/>  
        <xforms:itemset id="default158" auto-load-data="true" data="defectStatusData"> 
            
            
           
        <itemset-data xmlns="" id="default74">
   <rows xmlns="" id="default75"></rows></itemset-data>
  <xforms:column ref="DEFECT_STATUS_CODE" visible="false" id="default76"></xforms:column>
  <xforms:column ref="DEFECT_STATUS_CNAME" id="default77"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="iptASSIGN_PERSON" ref="data('dataMain')/ASSIGN_PERSON"
        label-ref="data('dataMain')/ASSIGN_PERSON_NAME" disabled="true" tabindex="11"> 
        <xforms:label ref="sName" id="default179"/>  
        <xforms:value ref="personLoginName" id="default180"/>  
        <xforms:itemset id="default181" data="assignPersonData" auto-load-data="true"> 
            
           
        <xforms:column ref="personLoginName" visible="false" id="default7"></xforms:column>
  <xforms:column ref="sName" id="default8"></xforms:column></xforms:itemset> 
      </xhtml:div> 
    <xforms:textarea ref="data('dataMain')/DEFECT_SOLUTION" id="textarea1" tabindex="16"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/REVIEWER" disabled="true" label-ref="data('dataMain')/REVIEWER_NAME" tabindex="8">
   <xforms:label ref="sName" id="default61"></xforms:label>
   <xforms:value ref="personLoginName" id="default62"></xforms:value>
   <xforms:itemset id="default63" data="reviewerData" auto-load-data="true">
    
    <xforms:column ref="personLoginName" visible="false" id="default13"></xforms:column>
  <xforms:column ref="sName" id="default14"></xforms:column></xforms:itemset> </xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:100%;"> 
        <xui:tab id="tabList" xforms-select="solutionDefectBug.tabListSelect"> 
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
        <xui:tab id="tabDetail" xforms-select="solutionDefectBug.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:156%;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="height:102%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="solutionDefectBug.js"/> 
  </xui:resource> 
</xui:window>

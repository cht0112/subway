<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:109px;left:602px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="P_DOCUMENTS_ARCHIVE" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" store-type="grid" filter-relations="pFILENAME,aRCHIVEDATE,dOCUMENTCATEGORYCNAME,dOCUMENTTYPECNAME,sECRETLEVELCNAME,rOOMCNAME"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryP_documents_archive"
        id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveP_DOCUMENTS_ARCHIVEAction"
        id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createP_DOCUMENTS_ARCHIVEAction"
        id="default5"/>  
      <rule id="default19" relation="dOCUMENTCATEGORY" required="true()" alert="'文件科目不能为空!'"/>  
      <rule id="default22" relation="dOCUMENTTYPE" required="true()" alert="'文件类型不能为空!'"/>  
      <rule id="default25" relation="pFILENAME" required="true()" alert="'文件名称不能为空!'"/>  
      <rule id="default28" relation="fILEVER" required="true()" alert="'文件版本不能为空!'"/>  
      <rule id="default37" relation="lOCATIONROOMID" required="true()" alert="'存档房间不能为空!'"/>  
      <rule id="default42" relation="aRCHIVEDATE" required="true()" alert="'存档日期不能为空!'"/>  
      <rule id="default45" relation="aRCHIVEOPERATOR" required="true()" alert="'存档人不能为空!'"/>  
      <rule id="default48" relation="iNPUTOPERATOR" alert="'记录人不能为空!'"/>  
      <rule id="default51" relation="aLLOWBORROW" required="true()" alert="'可借状态不能为空!'"/>  
      <rule id="default54" relation="dESTROYSTATE" required="true()" alert="'销毁状态不能为空!'"/> 
    <rule id="dataBizRule1" relation="rOOMTYPE" required="true()" alert="'房间类型不能为空!'"></rule>
  <rule id="dataBizRule2" relation="sECRETLEVEL" required="true()" alert="'涉密级别不能为空!'"></rule></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="kemu" concept="DOCUMENT_CATEGORY_CODE"><creator id="default10" action="/metrodetection/system_code/logic/action/createDOCUMENT_CATEGORY_CODEAction"></creator>
  <reader id="default16" action="/metrodetection/system_code/logic/action/queryDOCUMENT_CATEGORY_CODEAction"></reader>
  <writer id="default17" action="/metrodetection/system_code/logic/action/saveDOCUMENT_CATEGORY_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="leixing" concept="DOCUMENT_TYPE_CODE"><creator id="default72" action="/metrodetection/system_code/logic/action/createDOCUMENT_TYPE_CODEAction"></creator>
  <reader id="default73" action="/metrodetection/system_code/logic/action/queryDOCUMENT_TYPE_CODEAction"></reader>
  <writer id="default74" action="/metrodetection/system_code/logic/action/saveDOCUMENT_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="archiveOperatorData" concept="HR_BASE_INFO"><creator id="default92"></creator>
  <reader id="default93" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
  <writer id="default94"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="true" id="sysOperData" concept="SA_OPOrg" store-type="simple">
   <reader id="default98" action="/system/logic/action/queryOrgAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="hrPerData" concept="HR_BASE_INFO" store-type="simple">
   <creator id="default99" action="/metrodetection/system_code/logic/action/createHR_BASE_INFOAction"></creator>
   <reader id="default97" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"></reader>
   <writer id="default100" action="/metrodetection/system_code/logic/action/saveHR_BASE_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="roomData" concept="DETECTION_ROOM_INFO"><reader id="default104" action="/metrodetection/system_code/logic/action/queryDETECTION_ROOM_INFOAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="roomtypeData" concept="ROOM_TYPE_CODE"><creator id="default11" action="/metrodetection/system_code/logic/action/createROOM_TYPE_CODEAction"></creator>
  <reader id="default12" action="/metrodetection/system_code/logic/action/queryROOM_TYPE_CODEAction"></reader>
  <writer id="default13" action="/metrodetection/system_code/logic/action/saveROOM_TYPE_CODEAction"></writer></data>
  <xforms:action id="action1" ev:event="xbl-loaded"><xforms:script id="xformsScript1"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action></xforms:model>  
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
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <xui:column id="gridColumn3" ref="pFILENAME" label="文件名称" type="ro" width="100px"></xui:column>
  <xui:column id="gridColumn6" ref="dOCUMENTCATEGORYCNAME" label="文档科目" type="ro" width="100px"></xui:column><xui:column id="gridColumn7" ref="dOCUMENTTYPECNAME" label="文档类型" type="ro" width="100px"></xui:column><xui:column id="gridColumn4" ref="aLLOWBORROWNAME" type="ro" width="100px" label="可借状态"></xui:column><xui:column id="gridColumn9" ref="sECRETLEVELCNAME" label="涉密级别" type="ro" width="100px"></xui:column><xui:column id="gridColumn15" ref="oPERATORNAME" label="存档人" type="ro" width="100px"></xui:column><xui:column id="gridColumn16" ref="oPERATORNAME1" label="记录人" type="ro" width="100px"></xui:column><xui:column id="gridColumn14" ref="rOOMCNAME" label="存档房间" type="ro" width="100px"></xui:column><xui:column id="gridColumn10" ref="aRCHIVEDATE" label="存档日期" type="ro" width="100px" format="yyyy-MM-dd"></xui:column>
  
  <xui:column id="gridColumn5" ref="dESTROYSTATENAME" type="ro" width="100px" label="销毁状态"></xui:column>
  
  
  
  
  
  </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger1" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.newItemClick1(event)]]></xforms:script> 
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
        <xhtml:span id="span1" style="font-size:10pt;position: absolute;color:#FF0000;top:32px;left:69px;"> <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span2" style="font-size:10pt;position: absolute;color:#FF0000;top:32px;left:325px;"> <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span3" style="font-size:10pt;position: absolute;color:#FF0000;left:67px;top:65px;"> <![CDATA[*]]> </xhtml:span>  
        <place control="iptP_FILE_NAME" id="default27" style="font-size:10pt;position: absolute;width:412px;left:125px;top:61px;"/>  
        <xhtml:span id="span4" style="font-size:10pt;position: absolute;color:#FF0000;top:129px;left:67px;"> <![CDATA[*]]> </xhtml:span>  
        <place control="iptFILE_VER" id="default30" style="font-size:10pt;position: absolute;left:125px;top:126px;"/>  
        <xhtml:span id="span5" style="font-size:10pt;position: absolute;color:#FF0000;top:161px;left:324px;"> <![CDATA[*]]> </xhtml:span>  
        <place control="iptLOCATION_CABINET_ID" id="default41" style="font-size:10pt;position: absolute;top:93px;left:386px;width:151px;"/>  
        <xhtml:span id="span6" style="font-size:10pt;position: absolute;color:#FF0000;top:229px;left:325px;"> <![CDATA[*]]> </xhtml:span>  
        <place control="iptARCHIVE_DATE" id="default44" style="font-size:10pt;position: absolute;left:385px;top:226px;width:152px;"/>  
        <xhtml:span id="span7" style="font-size:10pt;position: absolute;color:#FF0000;top:98px;left:79px;"> <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span8" style="font-size:10pt;position: absolute;color:#FF0000;left:78px;top:229px;"> <![CDATA[*]]> </xhtml:span>  
        <place control="iptINPUT_OPERATOR" id="default50" style="font-size:10pt;position: absolute;top:226px;left:125px;"/>  
        <xhtml:span id="span9" style="font-size:10pt;position: absolute;color:#FF0000;left:65px;top:195px;"> <![CDATA[*]]> </xhtml:span>  
        <xhtml:span id="span10" style="font-size:10pt;position: absolute;color:#FF0000;top:195px;left:324px;"> <![CDATA[*]]> </xhtml:span>  
        <xhtml:label id="label1" style="position:absolute;top:33px;left:77px;" class="xui-label"><![CDATA[文档科目]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;left:76px;top:67px;" class="xui-label"><![CDATA[文档名称]]></xhtml:label>
  <xhtml:label id="label3" style="position:absolute;top:129px;left:334px;" class="xui-label"><![CDATA[涉密级别]]></xhtml:label>
  <xhtml:label id="label4" style="position:absolute;left:74px;top:324px;" class="xui-label"><![CDATA[文档简介]]></xhtml:label>
  <xhtml:label id="label5" style="position:absolute;top:97px;left:319px;" class="xui-label"><![CDATA[存档文件柜]]></xhtml:label>
  <xhtml:label id="label6" style="position:absolute;top:99px;left:88px;" class="xui-label"><![CDATA[存档人]]></xhtml:label>
  <xhtml:label id="label7" style="position:absolute;left:74px;top:197px;" class="xui-label"><![CDATA[可借状态]]></xhtml:label>
  <xhtml:label id="label8" style="position:absolute;left:97px;top:387px;" class="xui-label"><![CDATA[备注]]></xhtml:label>
  <xhtml:label id="label9" style="position:absolute;top:33px;left:334px;" class="xui-label"><![CDATA[文档类型]]></xhtml:label>
  <xhtml:label id="label10" style="position:absolute;left:76px;top:130px;" class="xui-label"><![CDATA[文档版本]]></xhtml:label>
  <xhtml:label id="label11" style="position:absolute;left:74px;top:258px;" class="xui-label"><![CDATA[文档属性]]></xhtml:label>
  <xhtml:label id="label12" style="position:absolute;top:162px;left:334px;" class="xui-label"><![CDATA[存档房间]]></xhtml:label>
  <xhtml:label id="label13" style="position:absolute;top:231px;left:335px;" class="xui-label"><![CDATA[存档日期]]></xhtml:label>
  <xhtml:label id="label14" style="position:absolute;top:230px;left:87px;" class="xui-label"><![CDATA[记录人]]></xhtml:label>
  <xhtml:label id="label15" style="position:absolute;top:197px;left:334px;" class="xui-label"><![CDATA[销毁状态]]></xhtml:label>
  <xui:place control="textarea1" id="controlPlace3" style="position:absolute;height:48px;left:125px;top:259px;width:412px;"></xui:place>
  <xui:place control="textarea2" id="controlPlace6" style="position:absolute;height:50px;left:125px;top:322px;width:412px;"></xui:place>
  <xui:place control="textarea3" id="controlPlace7" style="position:absolute;height:50px;top:386px;left:125px;width:412px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace8" style="position:absolute;left:125px;top:190px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace9" style="position:absolute;left:385px;top:191px;width:152px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace10" style="position:absolute;top:124px;left:386px;width:151px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace11" style="position:absolute;left:125px;top:29px;"></xui:place>
  <xui:place control="gridSelect5" id="controlPlace12" style="position:absolute;top:29px;left:386px;width:151px;"></xui:place>
  <xui:place control="gridSelect6" id="controlPlace13" style="position:absolute;top:93px;left:125px;width:155px;"></xui:place>
  <xui:place control="gridSelect7" id="controlPlace14" style="position:absolute;width:151px;top:159px;left:386px;"></xui:place>
  <xui:place control="gridSelect8" id="controlPlace15" style="position:absolute;left:125px;top:156px;"></xui:place>
  <xhtml:label id="label16" style="position:absolute;top:163px;left:75px;" class="xui-label"><![CDATA[房间类型]]></xhtml:label>
  <xhtml:span id="span11" style="font-size:10pt;position: absolute;color:#FF0000;position:absolute;top:162px;width:34px;height:15px;left:67px;" class="xui-container">*</xhtml:span>
  <xhtml:span id="span12" style="font-size:10pt;position: absolute;color:#FF0000;position:absolute;top:127px;left:324px;width:16px;height:23px;" class="xui-container">*</xhtml:span></layout>  
      <xforms:input id="iptP_FILE_NAME" ref="data('dataMain')/pFILENAME" tabindex="3"/>  
      <xforms:input id="iptFILE_VER" ref="data('dataMain')/fILEVER" tabindex="6"/>  
      <xforms:input id="iptLOCATION_CABINET_ID" ref="data('dataMain')/lOCATIONCABINETID" tabindex="5"/>  
      <xforms:input id="iptARCHIVE_DATE" ref="data('dataMain')/aRCHIVEDATE" format="yyyy-MM-dd" disabled="true" tabindex="13"/>  
      <xforms:input id="iptINPUT_OPERATOR" ref="data('dataMain')/oPERATORNAME1" disabled="true" tabindex="12"/>  
      <xforms:textarea ref="data('dataMain')/pFILEPROPERTY" id="textarea1" tabindex="14"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/pFILEDESC" id="textarea2" tabindex="15"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/mEMO" id="textarea3" tabindex="16"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/aLLOWBORROW" disabled="true" tabindex="10">
   <xforms:label ref="col_1" id="default20"></xforms:label>
   <xforms:value ref="col_0" id="default23"></xforms:value>
   <xforms:itemset id="default26" auto-load-data="true"><itemset-data xmlns="" id="default29">
   <rows xmlns="" id="default31">
    <row id="default33">
     <cell id="default34">1</cell>
     <cell id="default35">正常</cell></row> 
    <row id="default36">
     <cell id="default38">2</cell>
     <cell id="default40">已外借</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default43"></xforms:column>
  <xforms:column ref="col_1" id="default46"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/dESTROYSTATE" disabled="true" tabindex="11">
   <xforms:label ref="col_1" id="default49"></xforms:label>
   <xforms:value ref="col_0" id="default52"></xforms:value>
   <xforms:itemset id="default53" auto-load-data="true"><itemset-data xmlns="" id="default55">
   <rows xmlns="" id="default56">
    <row id="default57">
     <cell id="default58">1</cell>
     <cell id="default59">正常</cell></row> 
    <row id="default60">
     <cell id="default61">2</cell>
     <cell id="default62">销毁</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default63"></xforms:column>
  <xforms:column ref="col_1" id="default64"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/sECRETLEVEL" tabindex="7">
   <xforms:label ref="col_1" id="default65"></xforms:label>
   <xforms:value ref="col_0" id="default66"></xforms:value>
   <xforms:itemset id="default67" auto-load-data="true">
  
  <xforms:column ref="col_0" visible="false" id="default81"></xforms:column>
  <xforms:column ref="col_1" id="default82"></xforms:column>
  <itemset-data xmlns="" id="default18">
   <rows xmlns="" id="default21">
    <row id="default24">
     <cell id="default75">1</cell>
     <cell id="default76">普通</cell></row> 
    <row id="default79">
     <cell id="default80">2</cell>
     <cell id="default83">秘密</cell></row> 
    <row id="default84">
     <cell id="default85">3</cell>
     <cell id="default86">机密</cell></row> 
    <row id="default87">
     <cell id="default88">4</cell>
     <cell id="default89">绝密</cell></row> </rows> </itemset-data></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMain')/dOCUMENTCATEGORY" tabindex="1">
   <xforms:label ref="dOCUMENTCATEGORYCNAME" id="default7"></xforms:label>
   <xforms:value ref="DOCUMENT_CATEGORY_CODE" id="default8"></xforms:value>
   <xforms:itemset id="default9" data="kemu" auto-load-data="true">
  <xforms:column ref="DOCUMENT_CATEGORY_CODE" visible="false" id="default32"></xforms:column>
  <xforms:column ref="dOCUMENTCATEGORYCNAME" id="default68"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/dOCUMENTTYPE" onDropdown="mainActivity.gridSelect5Dropdown" tabindex="2">
   <xforms:label ref="dOCUMENTTYPECNAME" id="default69"></xforms:label>
   <xforms:value ref="DOCUMENT_TYPE_CODE" id="default70"></xforms:value>
   <xforms:itemset id="default71" data="leixing" auto-load-data="true">
  <xforms:column ref="DOCUMENT_TYPE_CODE" visible="false" id="default77"></xforms:column>
  <xforms:column ref="dOCUMENTTYPECNAME" id="default78"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('dataMain')/aRCHIVEOPERATOR" tabindex="4">
   <xforms:label ref="oPERATORNAME" id="default47"></xforms:label>
   <xforms:value ref="HR_BASE_INFO" id="default90"></xforms:value>
   <xforms:itemset id="default91" data="archiveOperatorData" auto-load-data="true"><xforms:column ref="HR_BASE_INFO" visible="false" id="default95"></xforms:column>
  <xforms:column ref="oPERATORNAME" id="default96"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect7" ref="data('dataMain')/lOCATIONROOMID" onDropdown="mainActivity.gridSelect7Dropdown" tabindex="9">
   <xforms:label ref="rOOMCNAME" id="default101"></xforms:label>
   <xforms:value ref="DETECTION_ROOM_INFO" id="default102"></xforms:value>
   <xforms:itemset id="default103" data="roomData" auto-load-data="true"><xforms:column ref="DETECTION_ROOM_INFO" visible="false" id="default105"></xforms:column>
  <xforms:column ref="rOOMCNAME" id="default106"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect8" ref="data('dataMain')/rOOMTYPE" tabindex="8">
   <xforms:label ref="rOOMTYPECNAME" id="default1"></xforms:label>
   <xforms:value ref="ROOM_TYPE_CODE" id="default2"></xforms:value>
   <xforms:itemset id="default6" auto-load-data="true" data="roomtypeData"><itemset-data xmlns="" id="default14">
   <rows xmlns="" id="default15">
    <row id="default39">
     <cell id="default107">1</cell>
     <cell id="default108">会议室</cell></row> 
    <row id="default109">
     <cell id="default110">2</cell>
     <cell id="default111">检测室</cell></row> 
    <row id="default112">
     <cell id="default113">3</cell>
     <cell id="default114">办公室</cell></row> </rows> </itemset-data>
  
  
  
  <xforms:column ref="ROOM_TYPE_CODE" visible="false" id="default121"></xforms:column>
  <xforms:column ref="rOOMTYPECNAME" id="default122"></xforms:column></xforms:itemset></xhtml:div>
  </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
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
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

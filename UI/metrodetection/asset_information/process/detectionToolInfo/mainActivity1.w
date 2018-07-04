<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:192px;left:624px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DETECTION_TOOL_INFO" direct-delete="false" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll" confirm-delete="false" onValueChanging="mainActivity1.dataMasterValueChanging" confirm-refresh="false" filter-relations="tOOLCNAME,tOOLMODEL,tOOLSTANDARDS,iNDATE,iNPRICE,aSSETSORTCODE,uSESTATECODECNAME,tOOLSORTCNAME"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryToolSortCodeNew"
        id="default1"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_INFOAction"
        id="default3"/>  
      <rule id="dataBizRule1" relation="tOOLTYPEID" required="true()" alert="'工具类型不能为空!'"/>  
      <rule id="dataBizRule2" relation="tOOLMODEL" required="true()" alert="'工具型号不能为空!'"/>  
      <rule id="dataBizRule3" relation="tOOLSTANDARDS" required="true()" alert="'工具规格不能为空!'"/>  
      <rule id="dataBizRule4" relation="tOOLID" required="true()" alert="'工具ID不能为空!'"/>  
      <rule id="dataBizRule6" relation="mANUFACTUREID" required="true()" alert="'供应商名称不能为空!'"/>  
      <rule id="dataBizRule5" relation="uSESTATECODE" required="true()" alert="'状态不能为空!'"/>  
      <master id="master2"/>  
      <rule id="dataBizRule11" relation="tOOLCNAME" alert="'工具中文名称不能为空!'" required="true()"/>
    <rule id="dataBizRule12" relation="iNDATE" required="true()" alert="'入账时间不能为空!'"></rule></data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TOOL_APPLY_INFO" confirm-delete="false" id="dataDetail" limit="20"
      offset="0" update-mode="whereAll" store-type="grid" direct-delete="true" filter-relations="dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryToolApplyInfo"
        id="default4"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTOOL_APPLY_INFOAction"
        id="default5"/>  
      <creator action="/metrodetection/system_code/logic/action/createTOOL_APPLY_INFOAction"
        id="default6"/>  
      <master data="dataMaster" id="master1" relation="tOOLTYPEID"/>  
      <rule id="dataBizRule8" relation="aPPLYFOROBJECT" required="true()" alert="'应用检测对象类型不能为空!'"/>  
      <rule id="dataBizRule9" relation="aPPLYFORDEVICETYPE" required="true()"
        alert="'应用检测对象不能为空!'"/>  
      <rule id="dataBizRule10" relation="aPPLYFORRANGE" required="true()" alert="'应用检测方面类型不能为空!'"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="bizData1" concept="TOOL_SORT_CODE" store-type="grid" confirm-refresh="false" confirm-delete="false"> 
      <creator id="default11" action="/metrodetection/system_code/logic/action/createTOOL_SORT_CODEAction"/>  
      <reader id="default12" action="/metrodetection/system_code/logic/action/queryTOOL_SORT_CODEAction"/>  
      <writer id="default50" action="/metrodetection/system_code/logic/action/saveTOOL_SORT_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="bizData2" concept="USE_STATE_CODE" store-type="grid" confirm-refresh="false"> 
      <creator id="default57" action="/metrodetection/system_code/logic/action/createUSE_STATE_CODEAction"/>  
      <reader id="default58" action="/metrodetection/system_code/logic/action/queryUSE_STATE_CODEAction"/>  
      <writer id="default59" action="/metrodetection/system_code/logic/action/saveUSE_STATE_CODEAction"/> 
    </data>  
      
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="detectionobjecttypeData" concept="DETECTION_OBJECT_TYPE"> 
      <creator id="default29" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction" />  
      <reader id="default30" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction" />  
      <writer id="default31" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction" /> 
    </data><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="devicetypecodeData" concept="DEVICE_TYPE_CODE"> 
      <creator id="default84" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"/>  
      <reader id="default85" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"/>  
      <writer id="default86" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="detectionrangetypeData" concept="DETECTION_RANGE_TYPE"> 
      <creator id="default105" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"/>  
      <reader id="default106" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"/>  
      <writer id="default107" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="gongyingshang" concept="AFC_MANUFACTURER_INFO"> 
      <creator id="default15" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"/>  
      <reader id="default16" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"/>  
      <writer id="default20" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"/>  
      <rule id="dataBizRule7" relation="mANUFACTUREIDCNAME" required="true()"
        alert="'供应商名称不能为空!'"/>
    </data>  
    <xforms:action id="action1" ev:event="xbl-loaded">
      <xforms:script id="xformsScript1"><![CDATA[mainActivity1.mdDefaultXBLLoaded(event)]]></xforms:script>
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="tool_relationship" concept="TOOL_RELATIONSHIP"
      store-type="simple" confirm-refresh="false">
      <creator id="default52" action="/metrodetection/system_code/logic/action/createTOOL_RELATIONSHIPAction"/>  
      <reader id="default62" action="/metrodetection/system_code/logic/action/queryTOOL_RELATIONSHIPAction"/>  
      <writer id="default65" action="/metrodetection/system_code/logic/action/saveTOOL_RELATIONSHIPAction"/>
    </data>
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="tool_category_code" concept="TOOL_CATEGORY_CODE"
      auto-new="false" store-type="grid" confirm-refresh="false">
      <creator id="default42" action="/metrodetection/system_code/logic/action/createTOOL_CATEGORY_CODEAction"/>  
      <reader id="default43" action="/metrodetection/system_code/logic/action/queryTOOL_CATEGORY_CODEAction"/>  
      <writer id="default44" action="/metrodetection/system_code/logic/action/saveTOOL_CATEGORY_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="tool_type_code" concept="TOOL_TYPE_CODE"
      store-type="grid" confirm-refresh="false">
      <creator id="default68" action="/metrodetection/system_code/logic/action/createTOOL_TYPE_CODEAction"/>  
      <reader id="default71" action="/metrodetection/system_code/logic/action/queryTOOL_TYPE_CODEAction"/>  
      <writer id="default72" action="/metrodetection/system_code/logic/action/saveTOOL_TYPE_CODEAction"/>
    </data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="false" id="caozuoleixing" concept="DETECTION_TOOL_MOVING_RECORD" store-type="simple"><creator id="default39" action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_MOVING_RECORDAction"></creator>
  <reader id="default92" action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_MOVING_RECORDAction"></reader>
  <writer id="default94" action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_MOVING_RECORDAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR" style="width:602px;"> 
        <item>  
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            id="insertTrigge" onclick="mainActivity1.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none" title="新建" ondblclick="(event)"/> 
        </item>  
        <!--        <item id="barItem3" name="delete-item"> -->  
        <!--          <xforms:trigger appearance="image" id="trgdeleteBtn" src="/UI/system/images/standardToolbar/standard/remove.gif"-->  
        <!--            dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> -->  
        <!--            <xforms:label>删除</xforms:label>  -->  
        <!--            <xforms:action ev:event="DOMActivate"> -->  
        <!--              <xforms:script>assetDelete(event)</xforms:script> -->  
        <!--            </xforms:action> -->  
        <!--          </xforms:trigger> -->  
        <!--        </item>  -->  
        <item> 
<!--        <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR"-->
<!--            src="/UI/system/images/standardToolbar/standard/remove.gif"> -->
<!--            <xforms:label> <![CDATA[删除]]> </xforms:label>  -->
<!--            <xforms:action ev:event="DOMActivate"> -->
<!--              <xforms:script> <![CDATA[mainActivity1.removeTrigger1Click(event)]]> </xforms:script> -->
<!--            </xforms:action> -->
<!--          </xforms:trigger>-->
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"
            id="removeTrigger1" onclick="mainActivity1.removeTrigger1Click(event)"
            src="/UI/system/images/standardToolbar/standard/remove.gif" style="border:none;"
            title="删除"/> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        </xui:bar>  
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1" style="width:203px;">
        <item id="customBarItem1">
          <xforms:trigger id="trigger1" style="width:135px;"> 
            <xforms:label id="xuiLabel12">工具占用信息查询</xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate">
              <xforms:script id="xformsScript2">mainActivity1.trigger1Click(event)</xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
      <item id="customBarItem2"><xforms:trigger id="trigger3">
   <xforms:label id="default83"><![CDATA[领用]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[mainActivity1.trigger3Click(event)]]></xforms:script></xforms:action></xforms:trigger></item>
  <item id="customBarItem3"><xforms:trigger id="trigger4">
   <xforms:label id="default89"><![CDATA[归还]]></xforms:label>
  <xforms:action id="action5" ev:event="DOMActivate"><xforms:script id="xformsScript5"><![CDATA[mainActivity1.trigger4Click(event)]]></xforms:script></xforms:action></xforms:trigger></item>
  <item id="customBarItem6"><xforms:trigger id="trigger6">
   <xforms:label id="default93"><![CDATA[外部出库]]></xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[mainActivity1.trigger6Click(event)]]></xforms:script></xforms:action></xforms:trigger></item>
  <item id="customBarItem8"><xforms:trigger id="trigger2">
   <xforms:label id="default95"><![CDATA[外部入库]]></xforms:label>
  <xforms:action id="action6" ev:event="DOMActivate"><xforms:script id="xformsScript6"><![CDATA[mainActivity1.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></item>
  <item id="customBarItem9"><xforms:trigger id="trigger5" style="width:111px;">
   <xforms:label id="default99"><![CDATA[检测工具操作履历]]></xforms:label>
  <xforms:action id="action7" ev:event="DOMActivate"><xforms:script id="xformsScript7"><![CDATA[mainActivity1.trigger5Click(event)]]></xforms:script></xforms:action></xforms:trigger></item><item id="customBarItem7"></item></xui:bar>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="insert-item"/>  
 <!--        <item id="barItem13" name="save-item"/> -->
 
        <item id="barItem13"> 
        
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"
            onclick="mainActivity1.saveMore(event)" src="/UI/system/images/standardToolbar/standard/save.gif"
            style="border:none" title="保存" id="saveMas"/> 
        </item> 
        <item id="barItem14"> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"
            src="/UI/system/images/standardToolbar/standard/remove.gif" style="border:none"
            title="删除" id="removeMas" onclick="mainActivity1.removeMasClick(event)"/> 
        </item>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="barItem16" name="filter-item"/>  
        <item id="barItem17" name="filter-pattern-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:100%;"> 
        <xui:tab id="tabList" xforms-select="mainActivity1.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="42px"> 
              <place control="tbsMaster1" id="controlPlace1" style="width:838px;"/>
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="windowDialog2" id="controlPlace15" style="top:302px;left:231px;"/>
              <xui:place control="grid3" id="controlPlace11" style="width:100%;height:554px;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:816px;height:113%;"> 
            <top id="borderLayout-top2" size="428px"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5" style="width:713px;height:367px;"></place></top>  
            <center id="borderLayout-center2" style="text-align:left"> 
              <xui:place control="toolbars3" id="controlPlace12"/>
              <xui:place control="grid1" id="controlPlace6" style="text-align:left;width:636px;height:75px;"/> 
            </center>  
            <left size="35px" id="borderLayout-left1"/> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    <xui:place control="waibuchukuDialog" id="controlPlace14" style="position:absolute;top:379px;left:407px;"></xui:place>
  <xui:place control="guihuanDialog" id="controlPlace16" style="position:absolute;left:495px;top:378px;"></xui:place>
  <xui:place control="waiburukuDialog" id="controlPlace19" style="position:absolute;top:379px;left:546px;"></xui:place>
  <xui:place control="lingyongDialog" id="controlPlace20" style="position:absolute;top:346px;left:301px;"></xui:place>
  <xui:place control="chaxunDialog" id="controlPlace9" style="position:absolute;top:493px;left:699px;"></xui:place></xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="" width="400px" height="300px" modal="true" id="windowDialog2" url="/UI/metrodetection/asset_information/process/detectionToolInfo/ToolsSchedule.w"
      reload-on-open="true" status="maximize"/>
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid3" data="dataMaster" onRowDblClick="mainActivity1.grdMasterRowDblClick"
      multi-selection="false" edit-mode="false" onRowClick="mainActivity1.grid3RowClick"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn19" ref="tOOLCNAME" label="工具名称" type="ro" width="100px"/>  
      <xui:column id="gridColumn2" ref="tOOLSORTCNAME" label="工具类型" type="ro" width="100px"/>  
      <xui:column id="gridColumn23" ref="tOOLMODEL" label="工具型号" type="ro" width="99px"/>  
      <xui:column id="gridColumn24" ref="tOOLSTANDARDS" label="工具规格" type="ro" width="88px"/>  
      <xui:column id="gridColumn29" ref="iNDATE" label="入账时间" type="date" width="121px"
        format="yyyy-MM-dd"/>  
      <xui:column id="gridColumn30" ref="iNPRICE" label="入账价值" type="ro" width="99px"/>  
      <xui:column id="gridColumn4" ref="uSESTATECODECNAME" label="状态" type="ro" width="100px"/> 
    <xui:column id="gridColumn1" ref="aSSETSORTCODE" label="固定资产分类" type="ed" width="100px"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"
        data="dataDetail" mode="IMG_TXT_LR" style="width:334px;"> 
        <!-- <item name="insert-item" id="barItem30" disabled="true"/>  -->  
        <item id="barItem30"> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            onclick="mainActivity1.inserMore(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none" title="新建" id="insertMas"/> 
        </item>  
        <item name="save-item" id="barItem32"/>  
        <item> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"
            id="insertTrigger" onclick="mainActivity1.setDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"
            style="border:none" title="删除"/> 
        </item>  
        <item name="refresh-item" id="barItem34"/>  
        <item name="filter-item" id="barItem35"/>  
        <item name="filter-pattern-item" id="barItem36"/>  
        <item name="separator" id="customBarItem4"/>  
        <item name="pre-item" id="barItem38"/>  
        <item name="next-item" id="barItem39"/>  
        <item name="separator" id="customBarItem5"/>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid1" data="dataDetail" onRowValueChanged="mainActivity1.grid1RowValueChanged"> 
      <column label="#master_checkbox" width="25px" ref="recCC" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn6" ref="dETECTIONOBJECTCNAME" label="应用检测对象类型" type="select"
        width="182px" editor="objTypeSelect" enter-selected="false"> 
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="objTypeSelect" ref="data('dataDetail')/aPPLYFOROBJECT"
          input-changeable="false" delay-create-grid="false" class="xui-select" label-ref="data('dataDetail')/dETECTIONOBJECTCNAME"
          onCloseup="mainActivity1.objTypeSelectCloseup"> 
          <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel10"/>  
          <xforms:value ref="DETECTION_OBJECT_TYPE" id="default24"/>  
          <xforms:itemset id="default25" data="detectionobjecttypeData" auto-load-data="true"> 
            <xforms:column ref="dETECTIONOBJECTCNAME" id="default63"/>  
            <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default64"/> 
          </xforms:itemset> 
        </xhtml:div> 
      </xui:column>  
      <xui:column id="gridColumn7" ref="dEVICETYPECNAME" label="应用检测对象" type="select"
        width="177px" editor="objSelect"> 
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="objSelect" ref="data('dataDetail')/aPPLYFORDEVICETYPE"
          label-ref="data('dataDetail')/dEVICETYPECNAME"> 
          <xforms:label ref="dEVICETYPECNAME" id="xuiLabel11"/>  
          <xforms:value ref="dEVICETYPE" id="default27"/>  
          <xforms:itemset id="default33" data="devicetypecodeData" auto-load-data="true"> 
            <xforms:column ref="dEVICETYPECNAME" id="default37"/>  
            <xforms:column ref="dEVICETYPE" visible="false" id="default38"/>
          </xforms:itemset> 
        </xhtml:div> 
      </xui:column>  
      <xui:column id="gridColumn8" ref="dETECTIONRANGECNAME" label="应用检测方面类型" type="select"
        width="178px" editor="rangeSelect"> 
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="rangeSelect" ref="data('dataDetail')/aPPLYFORRANGE"
          label-ref="data('dataDetail')/dETECTIONRANGECNAME"> 
          <xforms:label ref="dETECTIONRANGECNAME" id="xuiLabel9"/>  
          <xforms:value ref="DETECTION_RANGE_TYPE" id="default22"/>  
          <xforms:itemset id="default23" data="detectionrangetypeData"> 
            <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default55"/>  
            <xforms:column ref="dETECTIONRANGECNAME" id="default56"/> 
          </xforms:itemset> 
        </xhtml:div> 
      </xui:column> 
    </xhtml:div> 
  <xforms:select1 ref="data('dataMaster')/sHAREDFLAG" id="radio1" tabindex="15">
   <xforms:item id="selectItem1" style="width:35px;height:22px;">
    <xforms:label id="xuiLabel3">是</xforms:label>
    <xforms:value id="default17">0</xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="xuiLabel4">否</xforms:label>
    <xforms:value id="default49">1</xforms:value></xforms:item> </xforms:select1>
  <xforms:textarea ref="data('dataMaster')/mEMO" id="textarea1" tabindex="16"></xforms:textarea>
  <xui:view auto-load="true" id="vDetail" class="xui-container">
   <layout id="layout1" style="position:relative;font-size:15px;width:713px;height:326px;" type="absolute">
    <place control="iptTOOLCNAME" id="default26" style="font-size:10pt;position: absolute;text-align:right;top:30px;left:137px;"></place><place control="iptTOOLENAME" id="default28" style="font-size:10pt;position: absolute;top:69px;left:137px;"></place><place control="iptTOOLMODEL" id="default32" style="font-size:10pt;position: absolute;top:207px;left:137px;"></place>
  <place control="iptTOOLSTANDARDS" id="default34" style="font-size:10pt;position: absolute;text-align:right;top:100px;left:137px;"></place><place control="iptTOOLID" id="default36" style="font-size:10pt;position: absolute;top:236px;left:137px;"></place><place control="iptTOOLUNIT" id="default40" style="font-size:10pt;position: absolute;top:236px;left:459px;"></place><place control="iptINDATE" id="default46" style="font-size:10pt;position: absolute;top:207px;left:459px;"></place>
  <place control="iptINPRICE" id="default48" style="font-size:10pt;position: absolute;top:133px;left:459px;"></place><xhtml:label id="label1" style="position:absolute;color:#FF0000;top:172px;left:53px;" class="xui-label">*</xhtml:label>
    <xhtml:label id="label2" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;left:55px;top:208px;">*</xhtml:label>
    <xhtml:label id="label5" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;left:66px;top:238px;">*</xhtml:label>
    <xhtml:label id="label6" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;left:55px;top:103px;">*</xhtml:label>
    <xhtml:label id="label7" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;left:403px;top:37px;">*</xhtml:label>
    <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;left:367px;top:69px;">*</xhtml:label>
    <xui:place control="radio1" id="controlPlace7" style="position:absolute;top:265px;left:137px;"></xui:place>
    <xui:place control="gridSelect1" id="controlPlace8" style="position:absolute;top:30px;left:459px;"></xui:place><xhtml:label id="label3" style="position:absolute;width:100px;left:39px;top:34px;" class="xui-label">工具中文名称</xhtml:label>
    <xhtml:label id="label4" style="position:absolute;width:100px;left:39px;top:70px;" class="xui-label">工具英文名称</xhtml:label>
    <xhtml:label id="label9" style="position:absolute;width:68px;left:63px;top:104px;" class="xui-label">工具规格</xhtml:label>
    <xhtml:label id="label10" style="position:absolute;width:68px;top:173px;left:62px;" class="xui-label">工具类型</xhtml:label>
    <xhtml:label id="label11" style="position:absolute;width:68px;top:208px;left:62px;" class="xui-label">工具型号</xhtml:label>
    <xhtml:label id="label12" style="position:absolute;width:50px;left:72px;top:238px;" class="xui-label">工具id</xhtml:label>
    <xhtml:label id="label13" style="position:absolute;width:68px;top:238px;left:389px;" class="xui-label">计量单位</xhtml:label>
    <xhtml:label id="label14" style="position:absolute;width:33px;left:411px;top:36px;" class="xui-label">状态</xhtml:label>
    <xhtml:label id="label15" style="position:absolute;width:70px;left:376px;top:69px;" class="xui-label">供应商名称</xhtml:label>
    <xhtml:label id="label16" style="position:absolute;width:70px;left:389px;top:105px;" class="xui-label">资产来源</xhtml:label>
    <xhtml:label id="label17" style="position:absolute;width:67px;top:140px;left:387px;" class="xui-label">入账价值</xhtml:label>
    <xhtml:label id="label18" style="position:absolute;width:68px;top:208px;left:387px;" class="xui-label">入账时间</xhtml:label>
    <xhtml:label id="label19" style="position:absolute;width:110px;left:16px;top:269px;" class="xui-label">是否允许资源共用</xhtml:label>
    <xhtml:label id="label20" style="position:absolute;width:33px;left:86px;top:297px;" class="xui-label">备注</xhtml:label>
    <xhtml:label id="label21" style="position:absolute;color:#000000;background-color:#F2FFFD;font-weight:bold;top:3px;height:18px;left:0px;width:598px;text-align:center;" class="xui-label">工具信息</xhtml:label>
    <xhtml:label id="label22" style="position:absolute;background-color:#F2FFFD;font-weight:bold;height:18px;width:600px;top:370px;left:1px;text-align:center;" class="xui-label">应用检测信息</xhtml:label>
    <xui:place control="gridSelect3" id="controlPlace4" style="position:absolute;top:69px;left:459px;"></xui:place>
  <xui:place control="gridSelect4" id="controlPlace10" style="position:absolute;top:100px;left:459px;"></xui:place><xui:place control="textarea1" id="controlPlace13" style="position:absolute;height:65px;top:297px;left:116px;width:478px;"></xui:place>
    <xhtml:label id="label23" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;left:30px;top:33px;">*</xhtml:label>
    <xui:place control="gridSelect5" id="controlPlace18" style="position:absolute;top:133px;left:137px;"></xui:place><xhtml:label id="label24" style="position:absolute;left:62px;top:138px;" class="xui-label">工具分类</xhtml:label>
    <xui:place control="gridSelect6" id="controlPlace17" style="position:absolute;top:168px;left:459px;"></xui:place><xhtml:label id="label25" style="position:absolute;top:173px;left:364px;" class="xui-label">工具类型名称</xhtml:label>
  <xhtml:label id="label27" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;top:207px;left:379px;">*</xhtml:label>
  <xui:place control="gridSelect7" id="controlPlace2" style="position:absolute;top:168px;left:137px;"></xui:place>
  <xui:place control="input1" id="controlPlace21" style="position:absolute;top:265px;left:459px;"></xui:place>
  <xhtml:label id="label26" class="xui-label" style="position:absolute;position:absolute;top:269px;width:87px;left:359px;"><![CDATA[固定资产分类]]></xhtml:label>
  <xui:place control="assetSortCodeWD" id="controlPlace22" style="position:absolute;top:327px;left:311px;"></xui:place></layout> 
   <xforms:input id="iptTOOLCNAME" ref="data('dataMaster')/tOOLCNAME" tabindex="1"></xforms:input>
   <xforms:input id="iptTOOLENAME" ref="data('dataMaster')/tOOLENAME" tabindex="3"></xforms:input>
   <xforms:input id="iptTOOLMODEL" ref="data('dataMaster')/tOOLMODEL" tabindex="11"></xforms:input>
   <xforms:input id="iptTOOLSTANDARDS" ref="data('dataMaster')/tOOLSTANDARDS" tabindex="5"></xforms:input>
   <xforms:input id="iptTOOLID" ref="data('dataMaster')/tOOLID" tabindex="13"></xforms:input>
   <xforms:input id="iptTOOLUNIT" ref="data('dataMaster')/tOOLUNIT" tabindex="14"></xforms:input>
   <xforms:input id="iptINDATE" ref="data('dataMaster')/iNDATE" format="yyyy-MM-dd" tabindex="12"></xforms:input>
   <xforms:input id="iptINPRICE" ref="data('dataMaster')/iNPRICE" tabindex="8"></xforms:input>
   <xforms:select1 ref="data('dataMaster')/sHAREDFLAG" id="radio1">
    <xforms:item id="selectItem1" style="width:35px;height:22px;">
     <xforms:label id="xuiLabel3">是</xforms:label>
     <xforms:value id="default17">0</xforms:value></xforms:item> 
    <xforms:item id="selectItem2">
     <xforms:label id="xuiLabel4">否</xforms:label>
     <xforms:value id="default49">1</xforms:value></xforms:item> </xforms:select1> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/uSESTATECODE" default-label-ref="data('bizData2')/uSESTATECODECNAME" tabindex="2">
    <xforms:label id="xuiLabel5" ref="uSESTATECODECNAME"></xforms:label>
    <xforms:value id="default60" ref="USE_STATE_CODE"></xforms:value>
    <xforms:itemset id="default61" data="bizData2" auto-load-data="true">
     <xforms:column ref="uSESTATECODECNAME" id="default7"></xforms:column>
     <xforms:column ref="USE_STATE_CODE" visible="false" id="default8"></xforms:column>
     <itemset-data xmlns="" id="default9">
      <rows id="default10"></rows></itemset-data> </xforms:itemset> </xhtml:div> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMaster')/mANUFACTUREID" label-ref="data('gongyingshang')/mANUFACTUREIDCNAME" onDropdown="mainActivity1.gridSelect3Dropdown" tabindex="4">
    <xforms:label ref="mANUFACTUREIDCNAME" id="xuiLabel7"></xforms:label>
    <xforms:value ref="AFC_MANUFACTURER_INFO" id="default21"></xforms:value>
    <xforms:itemset id="default35" auto-load-data="true" data="gongyingshang">
     
  <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default87"></xforms:column>
  <xforms:column ref="mANUFACTUREIDCNAME" id="default88"></xforms:column></xforms:itemset> </xhtml:div> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMaster')/tOOLRESOURCE" tabindex="6">
    <xforms:label ref="col_1" id="xuiLabel8"></xforms:label>
    <xforms:value ref="col_0" id="default18"></xforms:value>
    <xforms:itemset id="default19" auto-load-data="true">
     <itemset-data xmlns="" id="default75">
      <rows id="default76">
       <row id="default77">
        <cell id="default78">1</cell>
        <cell id="default79">采购</cell></row> </rows> </itemset-data> 
     <xforms:column ref="col_0" visible="false" id="default80"></xforms:column>
     <xforms:column ref="col_1" id="default81"></xforms:column></xforms:itemset> </xhtml:div> 
   <xforms:textarea ref="data('dataMaster')/mEMO" id="textarea1"></xforms:textarea>
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('tool_relationship')/tOOLCATEGORY" tabindex="7">
    <xforms:label ref="tOOLCATEGORYCNAME" id="default45"></xforms:label>
    <xforms:value ref="TOOL_CATEGORY_CODE" id="default47"></xforms:value>
    <xforms:itemset id="default51" auto-load-data="true" data="tool_category_code" independence="false">
     <itemset-data xmlns="" id="default108">
      <rows id="default109"></rows></itemset-data> 
     <xforms:column ref="TOOL_CATEGORY_CODE" visible="false" id="default66"></xforms:column>
     <xforms:column ref="tOOLCATEGORYCNAME" id="default67"></xforms:column></xforms:itemset> </xhtml:div> 
   <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('tool_relationship')/tOOLTYPE" tabindex="10" onDropdown="mainActivity1.gridSelect6Dropdown">
    <xforms:label ref="tOOLTYPECNAME" id="default73"></xforms:label>
    <xforms:value ref="TOOL_TYPE_CODE" id="default74"></xforms:value>
    <xforms:itemset id="default82" data="tool_type_code" auto-load-data="true">
     <xforms:column ref="TOOL_TYPE_CODE" visible="false" id="default90"></xforms:column>
     <xforms:column ref="tOOLTYPECNAME" id="default91"></xforms:column></xforms:itemset> </xhtml:div> 
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect7" ref="data('tool_relationship')/tOOLSORT" input-changeable="false" onDropdown="mainActivity1.gridSelect7Dropdown">
   <xforms:label ref="tOOLSORTCNAME" id="default96"></xforms:label>
   <xforms:value ref="TOOL_SORT_CODE" id="default97"></xforms:value>
   <xforms:itemset id="default98" data="bizData1" auto-load-data="true" independence="false">
  <xforms:column ref="TOOL_SORT_CODE" visible="false" id="default101"></xforms:column>
  <xforms:column ref="tOOLSORTCNAME" id="default102"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input1" ref="data('dataMaster')/aSSETSORTCODE"><xforms:action id="action8" ev:event="DOMFocusIn"><xforms:script id="xformsScript8"><![CDATA[mainActivity1.input1Focus(event)]]></xforms:script></xforms:action></xforms:input>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="固定资产分类" width="400px" height="300px" modal="true" id="assetSortCodeWD" url="/UI/metrodetection/asset_information/process/detectionToolInfo/assetSortCode.w" onReceive="mainActivity1.assetSortCodeWDReceive"></xhtml:div></xui:view>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/uSESTATECODE" default-label-ref="正常">
   <xforms:label ref="uSESTATECODECNAME" id="xuiLabel5"></xforms:label>
   <xforms:value ref="USE_STATE_CODE" id="default60"></xforms:value>
   <xforms:itemset id="default61" data="bizData2" auto-load-data="true">
    <xforms:column ref="uSESTATECODECNAME" id="default7"></xforms:column>
    <xforms:column ref="USE_STATE_CODE" visible="false" id="default8"></xforms:column>
    <itemset-data id="default9">
     <rows id="default10"></rows></itemset-data> </xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMaster')/mANUFACTUREID" label-ref="data('gongyingshang')/mANUFACTUREIDCNAME" onDropdown="mainActivity1.gridSelect3Dropdown">
   <xforms:label ref="mANUFACTUREIDCNAME" id="xuiLabel7"></xforms:label>
   <xforms:value ref="rowID" id="default21"></xforms:value>
   <xforms:itemset id="default35" auto-load-data="true" data="gongyingshang">
    <xforms:column ref="mANUFACTUREIDCNAME" id="default41"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMaster')/tOOLRESOURCE">
   <xforms:label ref="col_1" id="xuiLabel8"></xforms:label>
   <xforms:value ref="col_0" id="default18"></xforms:value>
   <xforms:itemset id="default19" auto-load-data="true">
    <itemset-data id="default75">
     <rows id="default76">
      <row id="default77">
       <cell id="default78">1</cell>
       <cell id="default79">采购</cell></row> </rows> </itemset-data> 
    <xforms:column ref="col_0" visible="false" id="default80"></xforms:column>
    <xforms:column ref="col_1" id="default81"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect6" ref="data('tool_relationship')/tOOLTYPE" label-ref="data('tool_type_code')/tOOLTYPECNAME">
   <xforms:label ref="tOOLTYPECNAME" id="default73"></xforms:label>
   <xforms:value ref="TOOL_TYPE_CODE" id="default74"></xforms:value>
   <xforms:itemset id="default82" data="tool_type_code" auto-load-data="true">
    <xforms:column ref="TOOL_TYPE_CODE" visible="false" id="default90"></xforms:column>
    <xforms:column ref="tOOLTYPECNAME" id="default91"></xforms:column></xforms:itemset> </xhtml:div>
  <xforms:input id="iptINDATE" ref="data('dataMaster')/iNDATE" format="yyyy-MM-dd"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('tool_relationship')/tOOLCATEGORY" label-ref="data('tool_category_code')/tOOLCATEGORYCNAME">
   <xforms:label ref="tOOLCATEGORYCNAME" id="default45"></xforms:label>
   <xforms:value ref="TOOL_CATEGORY_CODE" id="default47"></xforms:value>
   <xforms:itemset id="default51" auto-load-data="true" data="tool_category_code">
    <itemset-data id="default108">
     <rows id="default109"></rows></itemset-data> 
    <xforms:column ref="TOOL_CATEGORY_CODE" visible="false" id="default66"></xforms:column>
    <xforms:column ref="tOOLCATEGORYCNAME" id="default67"></xforms:column></xforms:itemset> </xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMaster')/tOOLTYPEID" input-changeable="true">
   <xforms:label ref="tOOLSORTCNAME" id="xuiLabel6"></xforms:label>
   <xforms:value ref="TOOL_SORT_CODE" id="default53"></xforms:value>
   <xforms:itemset id="default54" data="bizData1" auto-load-data="true">
    <itemset-data id="default69">
     <rows id="default70"></rows></itemset-data> 
    <xforms:column ref="tOOLSORTCNAME" id="default13"></xforms:column>
    <xforms:column ref="TOOL_SORT_CODE" visible="false" id="default14"></xforms:column></xforms:itemset> </xhtml:div>
  <xforms:input id="iptTOOLUNIT" ref="data('dataMaster')/tOOLUNIT"></xforms:input>
  <xforms:input id="iptTOOLID" ref="data('dataMaster')/tOOLID"></xforms:input>
  <xforms:input id="iptTOOLMODEL" ref="data('dataMaster')/tOOLMODEL"></xforms:input>
  <xforms:input id="iptINPRICE" ref="data('dataMaster')/iNPRICE"></xforms:input>
  <xforms:input id="iptTOOLSTANDARDS" ref="data('dataMaster')/tOOLSTANDARDS"></xforms:input>
  <xforms:input id="iptTOOLENAME" ref="data('dataMaster')/tOOLENAME"></xforms:input>
  <xforms:input id="iptTOOLCNAME" ref="data('dataMaster')/tOOLCNAME"></xforms:input>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="检测工具外部出库" width="550px" height="350px" modal="true" id="waibuchukuDialog" url="/UI/metrodetection/asset_information/process/detectionToolInfo/waiburuku.w"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="检测工具归还" width="550px" height="350px" modal="true" id="guihuanDialog" url="/UI/metrodetection/asset_information/process/detectionToolInfo/guihuan.w"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="检测工具外部入库" width="550px" height="350px" modal="true" id="waiburukuDialog" reload-on-open="true" url="/UI/metrodetection/asset_information/process/detectionToolInfo/waiburukuNew.w"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="工具领用" width="550px" height="350px" modal="true" id="lingyongDialog" url="/UI/metrodetection/asset_information/process/detectionToolInfo/lingyong.w" onClose="mainActivity1.lingyongDialogClose"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="检测工具操作履历" width="1200px" height="700px" modal="true" id="chaxunDialog" url="/UI/metrodetection/asset_information/process/detectionToolInfo/chaxun.w"></xhtml:div></xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="mainActivity1.js"/> 
  </xui:resource> 
</xui:window>

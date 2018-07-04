<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:327px;height:auto;left:490px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="INDEX_SYSTEM_VALUE" direct-delete="true" id="dataMain" limit="20" offset="0"
      update-mode="whereAll" onValueChanging="mainActivity.dataMainValueChanging"> 
      <reader action="/metrodetection/testing_standard/logic/action/myIndexValueAction"
        id="default3"/>  
      <writer action="/metrodetection/testing_standard/logic/action/saveINDEX_SYSTEM_VALUEAction"
        id="default4"/>  
      <creator action="/metrodetection/testing_standard/logic/action/createINDEX_SYSTEM_VALUEAction"
        id="default5"/>  
      <rule id="dataBizRule8" relation="iNDEXSYSTEMNO" required="true()" alert="'指标库名称不能为空!'"/>  
      <rule id="dataBizRule9" relation="bUSINESSID" required="true()" alert="'指标应用业务类型不能为空!'"/>  
      <rule id="dataBizRule10" relation="iNDEXID" required="true()" alert="'指标ID不能为空!'"/>  
      <rule id="dataBizRule11" relation="aPPLYFOROBJECT" required="true()" alert="'应用检测对象类型不能为空!'"/>  
      <rule id="dataBizRule12" relation="aPPLYFORDEVICETYPE" required="true()"
        alert="'应用检测对象不能为空!'"/>  
      <rule id="dataBizRule13" relation="iNDEXVALUE" required="true()" alert="'指标值公式不能为空!'"/>  
      <rule id="dataBizRule14" relation="iNDEXVALUEDESC" required="true()" alert="'指标值文字描述不能为空!'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="zbkdyData" concept="INDEX_SYSTEM_PARAMETER"> 
      <creator id="default11" action="/metrodetection/testing_standard/logic/action/createINDEX_SYSTEM_PARAMETERAction"/>  
      <reader id="default12" action="/metrodetection/testing_standard/logic/action/queryINDEX_SYSTEM_PARAMETERAction"/>  
      <writer id="default25" action="/metrodetection/testing_standard/logic/action/saveINDEX_SYSTEM_PARAMETERAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="zbdyjcxxData" concept="INDEX_ID_BASE_INFO"> 
      <creator id="default30" action="/metrodetection/testing_standard/logic/action/createINDEX_ID_BASE_INFOAction"/>  
      <reader id="default31" action="/metrodetection/testing_standard/logic/action/queryINDEX_ID_BASE_INFOAction"/>  
      <writer id="default32" action="/metrodetection/testing_standard/logic/action/saveINDEX_ID_BASE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="zbyyxxData" concept="INDEX_ID_APPLY_INFO" store-type="grid"> 
      <creator id="default15" action="/metrodetection/testing_standard/logic/action/createINDEX_ID_APPLY_INFOAction"/>  
      <reader id="default16" action="/metrodetection/system_code/logic/action/myQueryIndexIdApplyInfoAction"/>  
      <writer id="default17" action="/metrodetection/testing_standard/logic/action/saveINDEX_ID_APPLY_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="true" id="ywlxData" concept="BUSINESS_TYPE_CODE" store-type="simple"> 
      <creator id="default7" action="/metrodetection/system_code/logic/action/createBUSINESS_TYPE_CODEAction"/>  
      <reader id="default8" action="/metrodetection/system_code/logic/action/queryBUSINESS_TYPE_CODEAction"/>  
      <writer id="default10" action="/metrodetection/system_code/logic/action/saveBUSINESS_TYPE_CODEAction"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="detectionOjbectTypeData" concept="DETECTION_OBJECT_TYPE" store-type="simple"><creator id="default100" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default101" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default102" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
<!--        <item> -->
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
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.assetDelete(event)]]> </xforms:script> 
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
    <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"><item id="customBarItem1"><xforms:trigger id="trigger1">
   <xforms:label id="default22"><![CDATA[批量添加]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></item></xui:bar></xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCC" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn3" ref="iNDEXSYSTEMNAME" label="指标库名称" type="ro" width="136px"/>  
      <xui:column id="gridColumn4" ref="bUSINESSIDCNAME" label="指标应用业务类型" type="ro" width="118px"></xui:column><xui:column id="gridColumn1" ref="dETECTIONOBJECTCNAME" label="检测对象类别" type="ro"
        width="99px"/>  
      <xui:column id="gridColumn2" ref="dEVICETYPECNAME" label="检测对象" type="ro" width="97px"/>  
      <column id="default9" label="指标值公式 " ref="iNDEXVALUE" type="ro" width="257px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
<!--        <item id="barItem12">-->
<!--        	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            id="insertMore" onclick="mainActivity.insertItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertMore" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.insertItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem13"> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->
<!--            id="saveTrigger" onclick="mainActivity.saveItemClick(event)" src="/UI/system/images/standardToolbar/standard/save.gif"-->
<!--            style="border:none" title="保存"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
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
        <xui:place control="gridSelect1" id="controlPlace3" style="position:absolute;top:25px;left:114px;"/>  
        <xui:place control="gridSelect2" id="controlPlace6" style="position:absolute;top:67px;left:114px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:65px;top:29px;left:46px;"
          class="xui-label">指标库名称</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;width:39px;top:70px;left:72px;"
          class="xui-label">指标ID</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:94px;left:17px;top:204px;"
          class="xui-label">指标值文字描述</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:105px;top:27px;left:321px;"
          class="xui-label">指标应用业务类型</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;width:65px;left:46px;top:113px;"
          class="xui-label">指标值公式</xhtml:label>  
        <xui:place control="textarea1" id="controlPlace7" style="position:absolute;width:468px;height:69px;left:114px;top:201px;"/>  
        <xui:place control="gridSelect3" id="controlPlace8" style="position:absolute;left:426px;top:25px;"/>  
        <xui:place control="textarea2" id="controlPlace9" style="position:absolute;height:69px;width:468px;left:114px;top:107px;"/>  
        <xhtml:label id="label7" style="position:absolute;width:52px;top:66px;left:369px;"
          class="xui-label">检测对象</xhtml:label> 
      <xhtml:label id="label8" style="position:absolute;color:#FF0000;width:9px;top:73px;left:61px;" class="xui-label">*</xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;width:9px;top:30px;left:35px;">
*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:9px;left:36px;top:113px;">

*</xhtml:label>
  <xhtml:label id="label12" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:9px;left:7px;top:205px;">


*</xhtml:label>
  <xhtml:label id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:9px;left:310px;top:27px;">


*</xhtml:label>
  <xhtml:label id="label14" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:9px;top:66px;left:358px;">


*</xhtml:label>
  <xui:place control="gridSelect5" id="controlPlace11" style="position:absolute;top:62px;left:427px;"></xui:place></layout>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/iNDEXSYSTEMNO"
        label-ref="data('dataMain')/iNDEXSYSTEMNAME"> 
        <xforms:label ref="iNDEXSYSTEMNAME" id="xuiLabel3"/>  
        <xforms:value ref="INDEX_SYSTEM_PARAMETER" id="default26"/>  
        <xforms:itemset id="default27" data="zbkdyData" auto-load-data="true"> 
          <xforms:column ref="INDEX_SYSTEM_PARAMETER" visible="false" id="default21"/>  
          <xforms:column ref="iNDEXSYSTEMNAME" id="default23"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/iNDEXID"
        label-ref="data('dataMain')/iNDEXIDCNAME" onCloseup="mainActivity.gridSelect2Closeup"> 
        <xforms:label ref="iNDEXIDCNAME" id="xuiLabel4"/>  
        <xforms:value ref="INDEX_ID_BASE_INFO" id="default33"/>  
        <xforms:itemset id="default34" data="zbdyjcxxData" auto-load-data="true"> 
            
           
        <xforms:column ref="INDEX_ID_BASE_INFO" visible="false" id="default2"></xforms:column>
  <xforms:column ref="iNDEXIDCNAME" id="default13"></xforms:column></xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dataMain')/iNDEXVALUEDESC" id="textarea1"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/bUSINESSID"
        label-ref="data('dataMain')/bUSINESSIDCNAME"> 
        <xforms:label ref="bUSINESSIDCNAME" id="xuiLabel5"/>  
        <xforms:value ref="BUSINESS_TYPE_CODE" id="default1"/>  
        <xforms:itemset id="default6" data="ywlxData" auto-load-data="true"> 
          <xforms:column ref="BUSINESS_TYPE_CODE" visible="false" id="default19"/>  
          <xforms:column ref="bUSINESSIDCNAME" id="default20"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dataMain')/iNDEXVALUE" id="textarea2"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect5" ref="data('dataMain')/aPPLYFORDEVICETYPE" label-ref="data('dataMain')/dEVICETYPECNAME" onCloseup="mainActivity.gridSelect5Closeup">
   <xforms:label ref="dEVICETYPECNAME" id="default71"></xforms:label>
   <xforms:value ref="aPPLYFORDEVICETYPE" id="default72"></xforms:value>
   <xforms:itemset id="default73" data="zbyyxxData" auto-load-data="true" independence="false">
  
  
  
  
  
  
  
  
  
  
  <xforms:column ref="aPPLYFORDEVICETYPE" visible="false" id="default14"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default18"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="41px"> 
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
            <top id="borderLayout-top2" size="41px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    <xui:place control="zhibiaoDialog" id="controlPlace10" style="position:absolute;top:37px;left:811px;"></xui:place></xui:layout> 
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="400px" height="300px" modal="true" id="zhibiaoDialog" url="/UI/metrodetection/testing_standard/process/zhibiaokuvalueProcess/zhibiaoDialog.w"></xhtml:div></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

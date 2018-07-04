<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:371px;height:auto;left:196px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DETECTION_TOOL_MOVING_RECORD" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" store-type="grid"> 
      <reader action="/metrodetection/system_code/logic/action/queryDETECTION_TOOL_MOVING_RECORDAction"
        id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDETECTION_TOOL_MOVING_RECORDAction"
        id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createDETECTION_TOOL_MOVING_RECORDAction"
        id="default5"/> 
    <rule id="dataBizRule1" relation="oPERATEDATETIME" required="true()" alert="'操作日期时间不能为空!'"></rule>
  <rule id="dataBizRule2" relation="oPERATETYPE" required="true()" alert="'操作类型不能为空!'"></rule>
  <rule id="dataBizRule3" relation="oPERATORID" required="true()" alert="'操作员不能为空!'"></rule>
  <rule id="dataBizRule4" relation="pROJECTID" required="true()" alert="'项目ID不能为空!'"></rule>
  <rule id="dataBizRule5" relation="tESTTASKID" required="true()" alert="'测试任务ID不能为空!'"></rule>
  <rule id="dataBizRule6" relation="tOOLTYPEID" required="true()" alert="'工具类型不能为空!'"></rule>
  <rule id="dataBizRule7" relation="tOOLID" required="true()" alert="'工具ID不能为空!'"></rule>
  <rule id="dataBizRule8" relation="tOOLIDSTATE" required="true()" alert="'工具状态不能为空!'"></rule>
  <rule id="dataBizRule9" relation="tOOLNUMBER" required="true()" alert="'工具数量不能为空!'"></rule>
  <rule id="dataBizRule10" relation="mOVINGREASON" required="true()" alert="'出入库原因不能为空!'"></rule></data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
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
        <item id="barItem8"> 
          <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
            id="printHtml1" is-preview="true" label="打印" target-id="grdMain"/> 
        </item>
        <item id="barItem7" name="separator"/>  
        <item id="barItem9"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="oPERATEDATETIME,oPERATETYPE,oPERATORID,pROJECTID,tESTTASKID,tOOLTYPEID,tOOLID,tOOLIDSTATE,tOOLNUMBER,mOVINGREASON,mEMO"
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
      <column id="default7" label="项目ID " ref="pROJECTID" type="ro" width="100px"/>
      <column id="default8" label="测试任务ID " ref="tESTTASKID" type="ro" width="100px"/>
      <column id="default6" label="操作员 " ref="oPERATORID" type="ro" width="100px"/>
      <column id="default2" label="操作类型" ref="oPERATETYPE" type="ro" width="100px"/>
      <column id="default10" label="工具ID " ref="tOOLID" type="ro" width="100px"/>
      <column id="default9" label="工具类型 " ref="tOOLTYPEID" type="ro" width="100px"/>
      <column id="default12" label="工具数量 " ref="tOOLNUMBER" type="ro" width="100px"/>
      <column id="default11" label="工具状态" ref="tOOLIDSTATE" type="ro" width="100px"/>
      <column id="default13" label="出入库原因" ref="mOVINGREASON" type="ro" width="100px"/>
      <column id="default1" label="操作日期时间 " ref="oPERATEDATETIME" type="ro" width="100px"/>  
      <column id="default14" label="备注 " ref="mEMO" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
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
    <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1" style="width:270px;"><item id="customBarItem1"></item>
  <item id="customBarItem2"></item></xui:bar></xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <place control-label="iptOPERATEDATETIME" id="default15" style="font-size:10pt;position: absolute;top:184px;left:49px;"/>  
        <place control="iptOPERATEDATETIME" id="default16" style="font-size:10pt;position: absolute;left:136px;height:24px;width:152px;top:177px;"/>  
        <place control-label="iptOPERATETYPE" id="default17" style="font-size:10pt;position: absolute;top:144px;left:49px;"/>  
        <place control="iptOPERATETYPE" id="default18" style="font-size:10pt;position: absolute;left:136px;height:24px;width:152px;top:137px;"/>  
        <place control-label="iptOPERATORID" id="default19" style="font-size:10pt;position: absolute;top:104px;left:49px;"/>  
        <place control="iptOPERATORID" id="default20" style="font-size:10pt;position: absolute;left:136px;height:24px;width:152px;top:97px;"/>  
        <place control-label="iptPROJECTID" id="default21" style="font-size:10pt;position: absolute;left:49px;top:24px;"/>  
        <place control="iptPROJECTID" id="default22" style="font-size:10pt;position: absolute;width:148px;left:136px;top:17px;"/>  
        <place control-label="iptTOOLTYPEID" id="default25" style="font-size:10pt;position: absolute;top:105px;left:316px;"/>  
        <place control="iptTOOLTYPEID" id="default26" style="font-size:10pt;position: absolute;width:152px;height:24px;left:408px;top:98px;"/>  
        <place control-label="iptTOOLID" id="default27" style="font-size:10pt;position: absolute;left:316px;top:23px;"/>  
        <place control="iptTOOLID" id="default28" style="font-size:10pt;position: absolute;width:152px;height:24px;left:408px;top:16px;"/>  
        <place control-label="iptTOOLIDSTATE" id="default29" style="font-size:10pt;position: absolute;top:142px;left:316px;"/>  
        <place control="iptTOOLIDSTATE" id="default30" style="font-size:10pt;position: absolute;width:152px;height:24px;left:408px;top:135px;"/>  
        <place control-label="iptTOOLNUMBER" id="default31" style="font-size:10pt;position: absolute;top:64px;left:316px;"/>  
        <place control="iptTOOLNUMBER" id="default32" style="font-size:10pt;position: absolute;width:152px;height:24px;left:408px;top:57px;"/>  
        <place control-label="iptMOVINGREASON" id="default33" style="font-size:10pt;position: absolute;top:185px;left:316px;"/>  
        <place control="iptMOVINGREASON" id="default34" style="font-size:10pt;position: absolute;width:152px;height:24px;left:408px;top:178px;"/>  
        <place control-label="iptMEMO" id="default35" style="font-size:10pt;position: absolute;top:241px;left:49px;"/>  
        <place control="iptMEMO" id="default36" style="font-size:10pt;position: absolute;width:428px;top:232px;height:91px;left:135px;"/> 
      <xui:place control-label="input1" id="controlLabel1" style="position:absolute;top:64px;left:49px;"></xui:place><xui:place control="input1" id="controlPlace3" style="position:absolute;left:136px;height:24px;width:152px;top:57px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;background-color:#FFFFFF;color:#FF0000;top:143px;left:41px;" class="xui-label">*</xhtml:label>
  <xhtml:label id="label2" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;top:184px;left:41px;">
*</xhtml:label>
  <xhtml:label id="label3" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;top:108px;left:41px;">
*</xhtml:label>
  <xhtml:label id="label4" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;position:absolute;top:66px;left:41px;">

*</xhtml:label>
  <xhtml:label id="label5" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;position:absolute;position:absolute;top:22px;left:41px;">


*</xhtml:label>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;top:23px;left:309px;">



*</xhtml:label>
  <xhtml:label id="label8" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;top:104px;left:309px;">



*</xhtml:label>
  <xhtml:label id="label9" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:186px;left:309px;">




*</xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:63px;left:307px;">




*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;background-color:#FFFFFF;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:140px;left:309px;">





*</xhtml:label></layout>  
      <xforms:input id="iptOPERATEDATETIME" ref="data('dataMain')/oPERATEDATETIME"/>  
      <xforms:input id="iptOPERATETYPE" ref="data('dataMain')/oPERATETYPE"/>  
      <xforms:input id="iptOPERATORID" ref="data('dataMain')/oPERATORID"/>  
      <xforms:input id="iptPROJECTID" ref="data('dataMain')/pROJECTID"/>  
      <xforms:input id="iptTOOLTYPEID" ref="data('dataMain')/tOOLTYPEID"/>  
      <xforms:input id="iptTOOLID" ref="data('dataMain')/tOOLID"/>  
      <xforms:input id="iptTOOLIDSTATE" ref="data('dataMain')/tOOLIDSTATE"/>  
      <xforms:input id="iptTOOLNUMBER" ref="data('dataMain')/tOOLNUMBER"/>  
      <xforms:input id="iptMOVINGREASON" ref="data('dataMain')/mOVINGREASON"/>  
      <xforms:input id="iptMEMO" ref="data('dataMain')/mEMO"/> 
    <xforms:input id="input1" ref="data('dataMain')/tESTTASKID"></xforms:input>
  </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
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
            <top id="borderLayout-top2" size="31px"> 
               
            <place control="tbsMain2" id="controlPlace4" style="width:642px;" /><xhtml:label id="label13">label</xhtml:label></top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5"/> 
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

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:295px;left:563px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="RECEPTION_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false" filter-relations="VISITOR,VISIT_DATE,VISITOR_PERSON,RECEPT_UNIT,RECEPT_LEADER,CONTENT_DESC"> 
      <reader action="/metrodetection/receptionA_info/logic/action/queryRECEPTION_INFOAction" id="default3"/>  
      <writer action="/metrodetection/receptionA_info/logic/action/saveRECEPTION_INFOAction" id="default4"/>  
      <creator action="/metrodetection/receptionA_info/logic/action/createRECEPTION_INFOAction" id="default5"/>  
      <rule id="dataBizRule1" relation="VISITOR" required="true()" alert="'来访单位不能为空'"></rule>
  <rule id="dataBizRule2" relation="VISIT_DATE" required="true()" alert="'参观时间不能为空'"></rule></data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
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
<!--        </item> -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.removeTrigger1Click(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2" name="separator"/>  
        <item id="barItem5"> 
          <xhtml:div action="/SA/excel/logic/action/exportExcel" component="/UI/system/components/excel.xbl.xml#export" data="dataMain" id="excelExport1"></xhtml:div> 
        </item>  
        <item id="barItem6" name="separator"/>  
        <item id="barItem7"> 
          </item>  
        <item id="barItem8"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="VISITOR,VISIT_DATE,VISITOR_PERSON,RECEPT_UNIT,RECEPT_LEADER,CONTENT_DESC,MEMO" id="smartFilter1"></xhtml:div> 
        </item>  
        <item id="barItem9"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif">  
            <xforms:label id="default11">  <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1">  
              <xforms:script id="xformsScript1">  <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>
      <column id="default1" label="来访单位名称" ref="VISITOR" type="ro" width="144px" show-index="false"/>  
      <column id="default6" label="访客人数" ref="VISITOR_PERSON" type="ro" width="52px" /><column id="default2" label="参观时间" ref="VISIT_DATE" type="dateTime" width="118px"/>  
        
      <column id="default7" label="接待单位" ref="RECEPT_UNIT" type="ro" width="143px"/>  
      <column id="default8" label="接待单位负责人" ref="RECEPT_LEADER" type="ro" width="88px"/>  
      <column id="default9" label="行程描述" ref="CONTENT_DESC" type="ro" width="172px"/>  
      </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" style="width:610px;" mode="IMG_TXT_LR"> 
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
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <place control="iptVISITOR" id="default14" style="font-size:10pt;position: absolute;left:125px;top:30px;width:192px;"/>  
        <place control="iptVISIT_DATE" id="default17" style="font-size:10pt;position: absolute;left:125px;width:191px;top:102px;"/>  
        <place control="iptVISITOR_PERSON" id="default19" style="font-size:10pt;position: absolute;top:30px;left:458px;width:93px;"/>  
        <place control="iptRECEPT_UNIT" id="default21" style="font-size:10pt;position: absolute;top:66px;left:125px;width:191px;"/>  
        <place control="iptRECEPT_LEADER" id="default23" style="font-size:10pt;position: absolute;top:66px;left:458px;width:92px;"/>  
        <xhtml:label id="label1" style="position:absolute;top:30px;left:36px;" class="xui-label"><![CDATA[来访单位名称]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;top:34px;left:394px;" class="xui-label"><![CDATA[访客人数]]></xhtml:label>
  <xhtml:label id="label3" style="position:absolute;left:358px;top:67px;" class="xui-label"><![CDATA[接待单位负责人]]></xhtml:label>
  <xhtml:label id="label4" style="position:absolute;left:71px;top:253px;" class="xui-label"><![CDATA[备  注]]></xhtml:label>
  <xhtml:label id="label5" style="position:absolute;left:59px;top:105px;" class="xui-label"><![CDATA[参观时间 ]]></xhtml:label>
  <xhtml:label id="label6" style="position:absolute;left:36px;top:66px;" class="xui-label"><![CDATA[接待单位名称]]></xhtml:label>
  <xhtml:label id="label7" style="position:absolute;left:59px;top:140px;" class="xui-label"><![CDATA[行程描述]]></xhtml:label>
  <xui:place control="textarea1" id="controlPlace3" style="position:absolute;left:125px;width:426px;height:88px;top:140px;"></xui:place>
  <xui:place control="textarea2" id="controlPlace6" style="position:absolute;width:425px;left:125px;top:253px;height:86px;"></xui:place>
  <xhtml:label id="label8" style="position:absolute;color:#FF0000;top:30px;left:25px;" class="xui-label"><![CDATA[*]]></xhtml:label>
  <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:105px;left:46px;">*</xhtml:label></layout>  
      <xforms:input id="iptVISITOR" ref="data('dataMain')/VISITOR"></xforms:input>  
      <xforms:input id="iptVISIT_DATE" ref="data('dataMain')/VISIT_DATE"></xforms:input>  
      <xforms:input id="iptVISITOR_PERSON" ref="data('dataMain')/VISITOR_PERSON"></xforms:input>  
      <xforms:input id="iptRECEPT_UNIT" ref="data('dataMain')/RECEPT_UNIT"></xforms:input>  
      <xforms:input id="iptRECEPT_LEADER" ref="data('dataMain')/RECEPT_LEADER"></xforms:input>  
      <xforms:textarea ref="data('dataMain')/CONTENT_DESC" id="textarea1"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea2"></xforms:textarea></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
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
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
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

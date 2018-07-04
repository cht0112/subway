<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:332px;left:32px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DEFECT_TRACK_MODULE_INFO" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll" confirm-refresh="false"
      confirm-delete="false" onValueChanged="mainActivity.dataMasterValueChanged" filter-relations="MODULE_NAME,MEMO,PRODUCT_NAME,PROJECT_NAME"> 
      <reader action="/metrodetection/defect_information/logic/action/myQueryMandProjAndProd"
        id="default1"/>  
      <writer action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_MODULE_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_MODULE_INFOAction"
        id="default3"/>  
      <rule id="default15" relation="MODULE_NAME" required="true()" alert="'模块名称不能为空'"/>  
      <rule id="dataBizRule3" relation="PRODUCT_IDID" required="true()" alert="'产品名称不能为空'"/>  
      <rule id="dataBizRule5" relation="PROJECT_ID" required="true()"/>
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DEFECT_TRACK_FUNC_INFO" confirm-delete="false" id="dataDetail" limit="20"
      offset="0" update-mode="whereAll" confirm-refresh="false" direct-delete="true" onValueChanged="mainActivity.dataDetailValueChanged" filter-relations="MODULE_NAME,FUNC_NAME,MEMO"> 
      <reader action="/metrodetection/defect_information/logic/action/myQueryDefectModuleAndFunc"
        id="default4"/>  
      <writer action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_FUNC_INFOAction"
        id="default5"/>  
      <creator action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_FUNC_INFOAction"
        id="default6"/>  
      <master data="dataMaster" id="master1" relation="MODULE_ID"/>  
      <rule id="dataBizRule1" relation="FUNC_NAME" required="true()" constraint="string-length(data('dataDetail')/FUNC_NAME)&lt;200"
        alert="'长度不能大于200'"/>  
      <rule id="dataBizRule2" relation="MEMO" alert="'长度不能大于1000'" constraint="string-length(data('dataDetail')/MEMO)&lt;1000"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="xml"
      columns="value,col" src="" auto-load="true" id="tempData" store-type="simple"
      confirm-refresh="false" confirm-delete="true"/>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="bizData2" concept="DEFECT_TRACK_MODULE_INFO"
      confirm-refresh="false">
      <creator id="default13" action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_MODULE_INFOAction"/>  
      <reader id="default20" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PRODUCT_INFOAction"/>  
      <writer id="default24" action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_MODULE_INFOAction"/>
    </data>
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="bizData1" concept="DEFECT_TRACK_PROJECT_INFO"
      confirm-refresh="false">
      <creator id="default32" action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_PROJECT_INFOAction"/>  
      <reader id="default33" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PROJECT_INFOAction"/>  
      <writer id="default34" action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_PROJECT_INFOAction"/>
    </data>  
    <xforms:action id="action1" ev:event="xbl-loaded">
      <xforms:script id="xformsScript1"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label><![CDATA[新建]]></xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event);]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
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
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="mainActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn2" ref="PROJECT_NAME" label="项目名称" type="ro" width="135px"/>
      <xui:column id="gridColumn1" ref="PRODUCT_NAME" label="产品名称" type="ro" width="135px"/>
      <column id="default8" label="模块名称" ref="MODULE_NAME" type="ro" width="135px"/>  
      <column id="default9" label="备注" ref="MEMO" type="ro" width="150px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger1" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label><![CDATA[新建]]></xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event);]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item> 
          <xforms:trigger appearance="image-text" id="saveTrigger2" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/save.gif" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[mainActivity.saveTrigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item>  
        <item> 
          <xforms:trigger appearance="image-text" id="removeTrigger4" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.removeTrigger1Click3(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem2" name="filter-pro-item"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail"
        id="ngtbDetail" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger11" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label><![CDATA[新建]]></xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick1(event);]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item> 
          <xforms:trigger appearance="image-text" id="removeTrigger2" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.removeTrigger1Click1(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--<item id="barItem23" name="insert-item"/>  -->  
        <!-- <item id="barItem25" name="delete-item"/>  --> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail"
      id="grdDetail"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn5" ref="MODULE_NAME" label="模块名称" type="ed" width="240px"/>
      <xui:column id="default11" label="功能名称" ref="FUNC_NAME" type="ed" width="240px"/>
      <column id="default12" label="备注" ref="MEMO" type="ed" width="240px"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
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
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="224px"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5" style="width:689px;height:155px;"/>
              <place control="tbsDetail" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="grdDetail" id="controlPlace6" style="width:100%;height:102%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:input id="iptMODULE_NAME" ref="data('dataMaster')/MODULE_NAME"/>  
    <xforms:textarea ref="data('dataMaster')/MEMO" id="textarea2"/>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout1" style=";position:relative;" type="absolute"> 
        <xhtml:span id="span1" style="font-size:10pt;position:absolute;color:#FF0000;width:12px;height:11px;left:350px;top:49px;"
          class="xui-container">*</xhtml:span>  
        <place control="iptMODULE_NAME" id="default17" style="font-size:10pt;position: absolute;width:147px;left:433px;top:48px;"/>  
        <xhtml:label id="label1" style="position:absolute;left:59px;top:49px;" class="xui-label"><![CDATA[产品名称]]></xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;top:50px;left:365px;" class="xui-label">模块名称</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;top:83px;left:84px;" class="xui-label">备注</xhtml:label>  
        <xui:place control="textarea2" id="controlPlace9" style="position:absolute;height:57px;left:127px;top:80px;width:453px;"/>  
        <xui:place control="gridSelect1" id="controlPlace7" style="position:absolute;left:127px;width:161px;top:12px;"/>  
        <xui:place control="gridSelect2" id="controlPlace8" style="position:absolute;top:46px;left:127px;width:162px;"/>  
        <xhtml:label id="label5" style="position:absolute;left:59px;top:16px;" class="xui-label"><![CDATA[项目名称]]></xhtml:label>  
        <xhtml:span id="span3" style="size:10pt;position:absolute;color:#FF0000;width:12px;height:11px;left:44px;top:49px;"
          class="xui-container"><![CDATA[*]]></xhtml:span>  
        <xhtml:span id="span4" style="size:10pt;position:absolute;color:#FF0000;width:12px;height:11px;left:44px;top:16px;"
          class="xui-container"><![CDATA[*]]></xhtml:span>
      </layout>  
      <xforms:input id="iptMODULE_NAME" ref="data('dataMaster')/MODULE_NAME"/>  
      <xforms:textarea ref="data('dataMaster')/MEMO" id="textarea2"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator=","
        value-separator="," ext-separator="," id="treeSelect5" ref="data('tempData')/projectid"
        label-ref="data('tempData')/productid" multi-select="false" cascade="false"
        delay="true"> 
        <xforms:label id="default53" ref="PRODUCT_ID"/>  
        <xforms:value id="default54" ref="PRODUCT_ID"/>  
        <xforms:itemset id="default55" data="bizData4" auto-load-data="false"> 
          <xforms:column ref="PRODUCT_ID" id="default14"/>
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/PROJECT_ID"
        onCloseup="mainActivity.gridSelect1Closeup" label-ref="data('dataMaster')/PROJECT_NAME"
        default-label-ref="'请选择项目'"> 
        <xforms:label ref="PROJECT_NAME" id="default16"/>  
        <xforms:value ref="DEFECT_TRACK_PROJECT_INFO" id="default18"/>  
        <xforms:itemset id="default19" data="bizData1" auto-load-data="true"> 
          <xforms:column ref="DEFECT_TRACK_PROJECT_INFO" visible="false" id="default47"/>  
          <xforms:column ref="PROJECT_NAME" id="default48"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMaster')/PRODUCT_IDID"
        label-ref="data('dataMaster')/PRODUCT_NAME"> 
        <xforms:label ref="PRODUCT_NAME" id="default21"/>  
        <xforms:value ref="DEFECT_TRACK_PRODUCT_INFO" id="default22"/>  
        <xforms:itemset id="default23" data="bizData2" auto-load-data="true"> 
          <xforms:column ref="DEFECT_TRACK_PRODUCT_INFO" visible="false" id="default51"/>  
          <xforms:column ref="PRODUCT_NAME" id="default52"/>
        </xforms:itemset>
      </xhtml:div>
    </xui:view>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

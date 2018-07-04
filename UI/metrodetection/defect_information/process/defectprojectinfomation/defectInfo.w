<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:326px;left:380px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="defectTracProductInfoD" concept="DEFECT_TRACK_PRODUCT_INFO"
      direct-delete="true" confirm-delete="false" confirm-refresh="false" filter-relations="PRODUCT_NAME,PRODUCT_DESC,MEMO"> 
      <creator id="default4" action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_PRODUCT_INFOAction"/>  
      <reader id="default5" action="/metrodetection/defect_information/logic/action/queryDEFECT_TRACK_PRODUCT_INFOAction"/>  
      <writer id="default6" action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_PRODUCT_INFOAction"/>  
      <master id="master1" data="defectTracProjectInfoD" relation="PROJECT_ID"/>  
      <calculate-relation relation="mark" id="calculate-relation2"/>  
      <calculate-relation relation="checkB" id="calculate-relation3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="defectTracProjectInfoD" concept="DEFECT_TRACK_PROJECT_INFO"
      direct-delete="true" confirm-delete="false" onValueChanged="defectInfo.defectTracProjectInfoDValueChanged"
      confirm-refresh="false" filter-relations="PROJECT_NAME,PROJECT_DESC,MEMO,oPERATORNAME"> 
      <creator id="default1" action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_PROJECT_INFOAction"/>  
      <reader id="default2" action="/metrodetection/defect_information/logic/action/queryProjectInfoAction"/>  
      <writer id="default3" action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_PROJECT_INFOAction"/>  
      <calculate-relation relation="mark" id="calculate-relation1"/>  
      <calculate-relation relation="checkB" id="calculate-relation4"/> 
    </data>  
    <xforms:action id="action4" ev:event="onload"> 
      <xforms:script id="xformsScript4"><![CDATA[defectInfo.model1Load(event)]]></xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="hrBaseInfoD" concept="HR_BASE_INFO" store-type="simple"> 
      <reader id="default7" action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="operPasswordGroupD" concept="HR_OPERATOR_PASSWORD_INFO"
      is-tree="true" store-type="grid">
      <reader id="default8" action="/metrodetection/system_code/logic/action/queryHR_OPERATOR_PASSWORD_INFOAction"/>  
      <tree-option id="default9" parent-relation="PARENT" node-level-relation="FLEVEL"
        virtual-root="人员信息" node-kind-relation="CODE"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="json" auto-load="true" id="orgPerD" concept="SA_OPOrg" is-tree="true">
      <reader id="default13" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <tree-option id="default14" parent-relation="sParent"/>
    </data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
        class="xui-tabPanel" style="width:100%;height:100%;"> 
        <xui:tab id="tabList" xforms-select="defectInfo.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xui:place control="listView" id="controlPlace2" style="width:100%;height:100%;"/> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="defectInfo.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xui:place control="detailV" id="controlPlace5" style="height:100%;width:100%;"/> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="listView" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xui:place control="toolbars2" id="controlPlace3" style="position:absolute;left:4px;top:2px;height:39px;width:867px;"/>  
        <xui:place control="gridMain" id="controlPlace4" style="position:absolute;left:4px;top:40px;height:455px;width:747px;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="defectTracProjectInfoD" style="width:767px;"> 
          <item id="barItem1"> 
            <xforms:trigger appearance="image-text" id="insertNew" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" onclick="defectInfo.insertNew(event)"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript1"><![CDATA[defectInfo.insertNewClick(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="barItem3"> 
            <xforms:trigger appearance="image-text" id="removeTriggerDM" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/remove.gif"> 
              <xforms:label> <![CDATA[删除]]> </xforms:label>  
              <xforms:action id="action3" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript3"><![CDATA[defectInfo.removeTriggerDMClick(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-pro-item" id="customBarItem1"/>  
          <item name="separator" id="customBarItem3"/>  
          <item name="custom-page-item" id="customPageItem1"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="gridMain" data="defectTracProjectInfoD" onRowClick="defectInfo.gridMainRowClick"
        cascade="false" onRowDblClick="defectInfo.gridMainRowDblClick"> 
        <xui:column id="gridColumn12" ref="checkB" label="#master_checkbox" type="checkbox"
          width="38px" align="center"/>  
        <xui:column id="gridColumn9" ref="mark" label="序号" type="ro" width="100px"
          show-index="true"/>  
        <xui:column id="gridColumn1" ref="PROJECT_NAME" label="项目名称" type="ro" width="191px"/>
        <xui:column id="gridColumn8" ref="oPERATORNAME" label="项目负责人" type="ed" width="100px"/>  
        <xui:column id="gridColumn3" ref="PROJECT_DESC" label="项目描述" type="ro" width="178px"/>  
        <xui:column id="gridColumn4" ref="MEMO" label="备注" type="ro" width="154px"/> 
      </xhtml:div> 
    </xui:view>  
    <xui:view auto-load="true" id="detailV" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout2"> 
        <xui:place control="input1" id="controlPlace1" style="position:absolute;left:132px;top:70px;width:155px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:52px;left:65px;top:74px;"
          class="xui-label"><![CDATA[项目名称]]></xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;color:#FF0000;width:5px;left:55px;top:74px;"
          class="xui-label"><![CDATA[*]]></xhtml:label>  
        <xui:place control="textarea1" id="controlPlace7" style="position:absolute;left:132px;height:53px;top:96px;width:526px;"/>  
        <xhtml:label id="label5" style="position:absolute;width:52px;left:65px;top:102px;"
          class="xui-label"><![CDATA[项目描述]]></xhtml:label>  
        <xui:place control="textarea2" id="controlPlace8" style="position:absolute;left:132px;height:53px;top:158px;width:525px;"/>  
        <xhtml:label id="label7" style="position:absolute;width:23px;top:162px;left:65px;"
          class="xui-label"><![CDATA[备注]]></xhtml:label>  
        <xui:place control="toolbars1" id="controlPlace9" style="position:absolute;height:37px;left:2px;top:247px;width:681px;"/>  
        <xui:place control="grid1" id="controlPlace10" style="position:absolute;height:222px;left:1px;top:285px;width:659px;"/>  
        <xui:place control="toolbars3" id="controlPlace11" style="position:absolute;left:1px;height:38px;top:-1px;width:670px;"/>  
        <xhtml:label id="label21" class="xui-label" style="position:absolute;color:#000000;font-weight:bold;position:absolute;position:absolute;height:18px;text-align:center;background-color:#F2FFFD;position:absolute;top:42px;left:2px;width:659px;"><![CDATA[缺陷跟踪项目信息]]></xhtml:label>  
        <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#000000;font-weight:bold;position:absolute;position:absolute;height:18px;text-align:center;background-color:#F2FFFD;position:absolute;position:absolute;position:absolute;width:659px;top:224px;left:0px;">缺陷跟踪产品信息</xhtml:label>  
        <xui:place control="productWD" id="controlPlace12" style="position:absolute;top:394px;left:536px;"/>  
        <xui:place control="treeSelect1" id="controlPlace6" style="position:absolute;left:500px;top:66px;"/>  
        <xhtml:label id="label3" style="position:absolute;top:68px;left:437px;" class="xui-label"><![CDATA[项目负责人]]></xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;color:#FF0000;top:68px;left:427px;"
          class="xui-label"><![CDATA[*]]></xhtml:label>
      </layout>  
      <xforms:input id="input1" ref="data('defectTracProjectInfoD')/PROJECT_NAME"/>  
      <xforms:textarea ref="data('defectTracProjectInfoD')/PROJECT_DESC" id="textarea1"/>  
      <xforms:textarea ref="data('defectTracProjectInfoD')/MEMO" id="textarea2"/>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar2" data="defectTracProductInfoD" style="height:35px;"> 
          <item id="barItem9"> 
            <xforms:trigger appearance="image-text" id="insertNewDetail" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" onclick="defectInfo.insertNewDetail(event)"
              dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action id="action2" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript2"><![CDATA[defectInfo.insertNewDetail(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="save-item" id="barItem10"/>  
          <item id="barItem11"> 
            <xforms:trigger appearance="image-text" id="removeTriggerDe" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/remove.gif"> 
              <xforms:label> <![CDATA[删除]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[defectInfo.removeTriggerDClick(event)]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="refresh-item" id="barItem12"/>  
          <item name="filter-pro-item" id="customBarItem4"/>  
          <item name="separator" id="customBarItem5"/>  
          <item name="custom-page-item" id="customPageItem2"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        smart-render="20" id="grid1" data="defectTracProductInfoD" cascade="false"
        onRowDblClick="defectInfo.grid1RowDblClick"> 
        <xui:column id="gridColumn11" ref="checkB" label="#master_checkbox" type="checkbox"
          width="40px" align="center"/>  
        <xui:column id="gridColumn10" ref="mark" label="序号" type="ro" width="91px"
          show-index="true"/>  
        <xui:column id="gridColumn5" ref="PRODUCT_NAME" label="产品名称" type="ed" width="106px"/>  
        <xui:column id="gridColumn6" ref="PRODUCT_DESC" label="产品描述" type="ro" width="253px"/>  
        <xui:column id="gridColumn7" ref="MEMO" label="备注" type="ro" width="227px"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars3"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar3" data="defectTracProjectInfoD"> 
          <item id="barItem17"> 
            <xforms:trigger appearance="image-text" id="insertTr" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action id="action3" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript3"><![CDATA[defectInfo.insert1(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="barItem18"> 
            <xforms:trigger appearance="image-text" id="saveTr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
              dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
              <xforms:label> <![CDATA[保存]]> </xforms:label>  
              <xforms:action id="action4" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript4"><![CDATA[defectInfo.save(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="delete-item" id="barItem19"/>  
          <item name="refresh-item" id="barItem20"/>  
          <item name="filter-pro-item" id="customBarItem7"/>  
          <item name="separator" id="customBarItem8"/>  
          <item name="first-item" id="barItem21"/>  
          <item name="pre-item" id="barItem22"/>  
          <item name="next-item" id="barItem23"/>  
          <item name="last-item" id="barItem24"/> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="产品详细信息" width="500px" height="350px" modal="true" id="productWD" url="/UI/metrodetection/defect_information/process/defectprojectinfomation/productDetailInfo.w"
        onClose="defectInfo.productWDClose"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator=","
        value-separator="," ext-separator="," id="treeSelect1" ref="data('defectTracProjectInfoD')/PROJECT_MANAGER"
        label-ref="data('defectTracProjectInfoD')/oPERATORNAME"> 
        <xforms:label id="default10" ref="sName"/>  
        <xforms:value id="default11" ref="personLoginName"/>  
        <xforms:itemset id="default12" data="orgPerD" auto-load-data="true"> 
          <xforms:column ref="personLoginName" visible="false" id="default17"/>  
          <xforms:column ref="sName" id="default18"/>
        </xforms:itemset>
      </xhtml:div>
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="defectInfo.js"/> 
  </xui:resource> 
</xui:window>

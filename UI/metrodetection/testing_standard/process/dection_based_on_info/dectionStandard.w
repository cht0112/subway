<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:350px;left:503px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="dectionStandardTableD" concept="DECTION_STANDARD_ON_INFO" filter-relations="DECTION_STANDARD_ID,PUBLISH_DATE,STANDARD_FILE_DESC,cITYCODECNAME,sDocName"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createDECTION_STANDARD_ON_INFOAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryDectionStandardInfoAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveDECTION_STANDARD_ON_INFOAction"/>  
      <rule id="dataBizRule1" relation="CITYCODE" required="true()" alert="&quot;数据不能为空&quot;"/>  
      <rule id="dataBizRule2" relation="PUBLISH_DATE" required="true()" alert="&quot;数据不能为空&quot;"/>  
      <rule id="dataBizRule3" relation="STANDARD_E_FILE_ID" alert="&quot;数据不能为空&quot;"
        required="true()"/>  
      <rule id="dataBizRule4" relation="STANDARD_FILE_VER" alert="&quot;数据不能为空&quot;"
        required="true()"/>  
      <rule id="dataBizRule5" relation="STANDARD_FILE_DESC" alert="&quot;数据不能为空&quot;"
        required="true()"/>  
      <calculate-relation relation="calSeq" id="calculate-relation1"/>  
      <calculate-relation relation="calCheckbox" id="calculate-relation2"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="cityCodeD" concept="CITY_CODE" store-type="simple">
      <creator id="default89" action="/metrodetection/system_code/logic/action/createCITY_CODEAction"/>  
      <reader id="default90" action="/metrodetection/system_code/logic/action/queryCITY_CODEAction"/>  
      <writer id="default91" action="/metrodetection/system_code/logic/action/saveCITY_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      data-type="xml" auto-load="false" id="docNodeD" concept="SA_DocNode" limit="-1"
      store-type="simple" is-tree="true">
      <reader id="default100" action="/SA/doc/logic/action/queryDocNodeAction"/>  
      <tree-option id="default113" parent-relation="sParentID"/>
    </data>
  <xforms:action id="action1" ev:event="xforms-ready"><xforms:script id="xformsScript2"><![CDATA[dectionStandard.model1Ready(event)]]></xforms:script></xforms:action></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:99%;width:99%;" id="rootLayout"> 
      <xui:place control="view1" id="controlPlace1" style="width:100%;height:100%;"/> 
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1"
          style="position:absolute;left:5px;top:1px;width:100%;height:100%;" class="xui-tabPanel"> 
          <xui:tab id="tabPage1" xforms-select="dectionStandard.tabPage1Select"> 
            <xui:label id="xuiLabel1">列表</xui:label>  
            <xui:place control="view3" id="controlPlace5" style="width:99%;height:100%;"/> 
          </xui:tab>  
          <xui:tab id="tabPage2"> 
            <xui:label id="xuiLabel2">详细</xui:label>  
            <xui:place control="view2" id="controlPlace4" style="height:100%;width:100%;"/> 
          </xui:tab> 
        </xhtml:div> 
      </layout>  
      <xui:view auto-load="true" id="view2" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout2">
          <xui:place control="toolbars2" id="controlPlace8" style="position:absolute;width:400px;top:3px;height:38px;left:3px;"/>  
          <xui:place control="input2" id="controlPlace9" style="position:absolute;top:70px;left:376px;"/>  
          <xui:place control="gridSelect1" id="controlPlace10" style="position:absolute;top:70px;left:97px;"/>  
          <xui:place control="input3" id="controlPlace11" style="position:absolute;left:376px;top:118px;"/>  
          <xui:place control="gridSelect2" id="controlPlace12" style="position:absolute;left:97px;top:118px;"/>  
          <xui:place control="treeSelect1" id="controlPlace13" style="position:absolute;left:97px;top:165px;"/>  
          <xui:place control="input4" id="controlPlace14" style="position:absolute;left:376px;top:165px;"/>  
          <xui:place control="textarea1" id="controlPlace15" style="position:absolute;height:67px;left:97px;top:214px;width:435px;"/>  
          <xhtml:label id="label1" style="position:absolute;left:23px;top:76px;" class="xui-label"><![CDATA[依赖标准类型]]></xhtml:label>  
          <xhtml:label id="label2" style="position:absolute;left:302px;top:76px;" class="xui-label"><![CDATA[依赖标准编号]]></xhtml:label>  
          <xhtml:label id="label3" style="position:absolute;top:124px;left:24px;" class="xui-label"><![CDATA[标准所属城市]]></xhtml:label>  
          <xhtml:label id="label4" style="position:absolute;top:124px;left:302px;"
            class="xui-label"><![CDATA[标准发布时间]]></xhtml:label>  
          <xhtml:label id="label5" style="position:absolute;top:169px;left:11px;" class="xui-label"><![CDATA[标准内部文件ID]]></xhtml:label>  
          <xhtml:label id="label6" style="position:absolute;left:278px;top:171px;"
            class="xui-label"><![CDATA[标准内部文件版本]]></xhtml:label>  
          <xhtml:label id="label7" style="position:absolute;left:23px;top:217px;" class="xui-label"><![CDATA[标准内容描述]]></xhtml:label>  
          <xhtml:label id="label8" style="position:absolute;color:#FF0000;top:217px;left:14px;"
            class="xui-label"><![CDATA[*]]></xhtml:label>  
          <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:171px;left:270px;">*</xhtml:label>  
          <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:171px;left:2px;">*</xhtml:label>  
          <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:124px;left:292px;">*</xhtml:label>  
          <xhtml:label id="label12" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;top:124px;left:15px;">*</xhtml:label>
        </layout>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2">
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
            id="navigatorBar2" data="dectionStandardTableD"> 
            <item name="insert-item" id="barItem9"/>  
            <item name="save-item" id="barItem10"/>  
            <item name="delete-item" id="barItem11"/>  
            <item name="refresh-item" id="barItem12"/>  
            <item name="separator" id="customBarItem5"/>  
            <item name="first-item" id="barItem13"/>  
            <item name="pre-item" id="barItem14"/>  
            <item name="next-item" id="barItem15"/>  
            <item name="last-item" id="barItem16"/> 
          </xui:bar>
        </xhtml:div>  
        <xforms:input id="input2" ref="data('dectionStandardTableD')/DECTION_STANDARD_ID"/>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect1" ref="data('dectionStandardTableD')/DECTION_STANDARD_TYPE"
          label-ref="data('dectionStandardTableD')/dECTIONTYPENAME"> 
          <xforms:label ref="col_1" id="default4"/>  
          <xforms:value ref="col_0" id="default5"/>  
          <xforms:itemset id="default6">
            <itemset-data xmlns="" id="default68">  
              <rows id="default69">  
                <row id="default70"> 
                  <cell id="default71">1</cell>  
                  <cell id="default72">国际</cell>
                </row>  
                <row id="default73"> 
                  <cell id="default74">2</cell>  
                  <cell id="default75">国标</cell>
                </row>  
                <row id="default76"> 
                  <cell id="default77">3</cell>  
                  <cell id="default78">行标</cell>
                </row>  
                <row id="default79"> 
                  <cell id="default80">4</cell>  
                  <cell id="default81">地标</cell>
                </row>  
                <row id="default82"> 
                  <cell id="default83">5</cell>  
                  <cell id="default84">企业标准</cell>
                </row> 
              </rows> 
            </itemset-data>  
            <xforms:column ref="col_0" visible="false" id="default87"/>  
            <xforms:column ref="col_1" id="default88"/>
          </xforms:itemset>
        </xhtml:div>  
        <xforms:input id="input3" ref="data('dectionStandardTableD')/PUBLISH_DATE"/>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
          value-separator="," ext-separator="," id="gridSelect2" ref="data('dectionStandardTableD')/CITYCODE"
          label-ref="data('dectionStandardTableD')/cITYCODECNAME"> 
          <xforms:label ref="cITYCODECNAME" id="default7"/>  
          <xforms:value ref="CITY_CODE" id="default8"/>  
          <xforms:itemset id="default9" data="cityCodeD" auto-load-data="true"> 
            <xforms:column ref="CITY_CODE" visible="false" id="default116"/>  
            <xforms:column ref="cITYCODECNAME" id="default117"/>
          </xforms:itemset>
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator=","
          value-separator="," ext-separator="," id="treeSelect1" ref="data('dectionStandardTableD')/STANDARD_E_FILE_ID"
          appearance="tree" onCloseup="dectionStandard.treeSelect1Closeup" label-ref="data('dectionStandardTableD')/sDocName"> 
          <xforms:label id="default10" ref="sDocName"/>  
          <xforms:value id="default11" ref="SA_DocNode"/>  
          <xforms:itemset id="default12" data="docNodeD" auto-load-data="true"> 
              
            
          
  <xforms:column ref="SA_DocNode" id="default15"></xforms:column>
  <xforms:column ref="sDocName" id="default16"></xforms:column></xforms:itemset>
        </xhtml:div>  
        <xforms:input id="input4" ref="data('dectionStandardTableD')/STANDARD_FILE_VER"/>  
        <xforms:textarea ref="data('dectionStandardTableD')/STANDARD_FILE_DESC" id="textarea1"/>
      </xui:view>  
      <xui:view auto-load="true" id="view3" class="xui-container"> 
        <layout type="absolute" style="position:relative;" id="layout3"> 
          <xui:place control="grid2" id="controlPlace6" style="position:absolute;left:3px;width:100%;top:45px;height:90%;"/>  
          <xui:place control="toolbars1" id="controlPlace7" style="position:absolute;width:400px;left:3px;top:3px;height:43px;"/> 
        </layout>  
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
          smart-render="20" id="grid2" data="dectionStandardTableD" onRowDblClick="dectionStandard.grid2RowDblClick"> 
          <xui:column id="gridColumn15" ref="calCheckbox" label="#master_checkbox"
            type="checkbox" width="37px" align="center"/>
          <xui:column id="gridColumn14" ref="calSeq" label="序号" type="ro" width="41px"
            align="center" show-index="true"/>
          <xui:column id="gridColumn9" ref="DECTION_STANDARD_ID" label="标准编码" type="ro"
            width="130px"/>
          <xui:column id="gridColumn13" ref="sDocName" label="文件名称" type="ro" width="100px"/>
          <xui:column id="gridColumn8" ref="dECTIONTYPENAME" type="ro" width="121px"
            label="标准类型"/>  
          <xui:column id="gridColumn12" ref="cITYCODECNAME" label="标准所属城市" type="ro"
            width="100px"/>
          <xui:column id="gridColumn10" ref="PUBLISH_DATE" label="标准发布时间" type="ro"
            width="112px"/>  
          <xui:column id="gridColumn11" ref="STANDARD_FILE_DESC" label="标准内容描述" type="ro"
            width="137px"/> 
        </xhtml:div>  
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
            id="navigatorBar1" data="dectionStandardTableD"> 
            <item id="barItem1"> 
              <xforms:trigger appearance="image-text" id="insertTr" image-text-mode="LR"
                src="/UI/system/images/standardToolbar/standard/insert.gif"> 
                <xforms:label> <![CDATA[新建]]> </xforms:label>  
                <xforms:action id="action2" ev:event="DOMActivate"> 
                  <xforms:script id="xformsScript1"><![CDATA[dectionStandard.insertTrClick(event)]]></xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </item>  
            <item name="save-item" id="barItem2"/>  
            <item id="barItem3"> 
              <xforms:trigger appearance="image-text" id="removeStandard" image-text-mode="LR"
                src="/UI/system/images/standardToolbar/standard/remove.gif"> 
                <xforms:label> <![CDATA[删除]]> </xforms:label>  
                <xforms:action id="action3" ev:event="DOMActivate"> 
                  <xforms:script id="script3"> <![CDATA[dectionStandard.removeStandardClick(event)]]> </xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </item>  
            <item name="refresh-item" id="barItem4"/>  
            <item name="filter-pro-item" id="customBarItem1"/>  
            <item name="separator" id="customBarItem2"/>  
            <item name="custom-page-item" id="customPageItem1"/> 
          </xui:bar> 
        </xhtml:div> 
      </xui:view> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="dectionStandard.js"/> 
  </xui:resource> 
</xui:window>

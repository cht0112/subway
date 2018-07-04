<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:231px;left:111px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="CUSTOMER_COMPLAINT_FEEDBACK" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll" confirm-refresh="false"> 
      <reader action="/metrodetection/customer_service/logic/action/myQueryComplantFeedbackAction"
        id="default1"/>  
      <writer action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_FEEDBACKAction"
        id="default2"/>  
      <creator action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_FEEDBACKAction"
        id="default3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="json" auto-load="true" id="bizData1" concept="CUSTOMER_COMPLAINT_FEEDBACK"
      direct-delete="true" store-type="simple" confirm-refresh="false" onValueChanging="mainActivity.bizData1ValueChanging"> 
      <creator id="default18" action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_FEEDBACKAction"/>  
      <reader id="default19" action="/metrodetection/customer_service/logic/action/myQueryComplaintFeedAndHR"/>  
      <writer id="default20" action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_FEEDBACKAction"/>  
      <master id="master1"/>  
      <rule id="dataBizRule1" relation="COMPLAINT_ID" relevant="false()"/> 
    <rule id="dataBizRule2" concept="CUSTOMER_COMPLAINT_FEEDBACK" relevant="false()"></rule>
  <rule id="dataBizRule3" relation="ADVICE" required="true()"></rule>
  <rule id="dataBizRule4" relation="MEASURE" required="true()"></rule></data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereAll"> 
      <reader action="/system/logic/action/queryOrgAction" id="default4_7"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll"> 
      <creator id="default5_7"/>  
      <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"
        id="default6_7"/>  
      <writer id="default7_7"/> 
    </data>  
    <data auto-load="true" columns="val,name" component="/UI/system/components/data.xbl.xml#data"
      id="tempData" src="" store-type="simple" confirm-refresh="false"> 
      <rows xmlns="" id="default15_3">  
        <row id="default16_3"> 
          <cell id="default17_3"/>  
          <cell id="default18_3"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="mainActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default14" label="投诉单据编码" ref="COMPLAINT_DOC_CODE" type="ro"
        width="100px"/>  
      <column id="default15" label="投诉主题" ref="TITLE" type="ro" width="100px"/>  
      <xui:column id="gridColumn1" ref="STATUS1" label="受理状态" type="ro" width="100px"/>  
      <xui:column id="gridColumn4" ref="oPERATORNAME1" label="处理人" type="ro" width="100px"></xui:column><column id="default8" label="处理人职务" ref="RESPONSOR_TITLE" type="ro" width="100px"/>  
      <column id="default9" label="处理日期" ref="DEAL_DATE" type="date" width="100px" /><xui:column id="gridColumn2" ref="RELEASE1" type="ro" width="100px" label="是否发布"></xui:column>  
      <column id="default11" label="处理意见" ref="ADVICE" type="ro" width="100px"/>  
      <column id="default12" label="补救措施" ref="MEASURE" type="ro" width="100px"/>  
      <column id="default13" label="备注" ref="MEMO1" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
        <item id="separatorItem3" name="separator"/>  
 <!--        <item>
 <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger>
          </item> -->
          <item> 
          <xforms:trigger appearance="image-text" id="saveTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>

        <item name="separator" id="separatorItem2"></item><item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/>  
        <item id="barItem18" name="first-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <xui:place control="view1" id="controlPlace1" style="height:38px;width:423px;"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:197%;"> 
            <top id="borderLayout-top2" size="40px" style="border-color:#969696;"> 
              <place control="tbsMaster2" id="controlPlace3"/> 
            </top>  
            <center id="borderLayout-center2">
              <xui:place control="view2" id="controlPlace4" style="width:814px;height:740px;"/>
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:input id="input1"/>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <place control="tbsMaster1" id="controlPlace21" style="position:absolute;width:359px;top:0px;height:38px;left:0px;"/>  
        </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
          id="ngtbMaster1" style="height:38px;" mode="IMG_TXT_LR"> 
          <item> 
            <xforms:trigger appearance="image-text" id="editTrigger" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/edit.gif"> 
              <xforms:label> <![CDATA[编辑]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[mainActivity.clickSaveMore(event)]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>
          
          

          <item id="barItem4" name="refresh-item"/>  
          <item id="separatorItem1" name="separator"/>  
          <item name="filter-pro-item" id="barItem1"></item><item id="barItem11" items="pre,next,ext" name="custom-page-item"
            page-count="0"/>  
          <item id="barItem5" name="separator"/>  
          </xui:bar> 
      </xhtml:div>  
      </xui:view>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout2"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" style="position:absolute;width:105%;height:116%;top:5px;left:5px;"
          src="complaintSetting_xls.xls"/>
      </layout>
      
      <xforms:input id="iptCOMPLAINT_DOC_CODE" ref="data('dataMaster')/COMPLAINT_DOC_CODE" readonly="true"/>  
      <xforms:input id="iptCONTACTOR" ref="data('dataMaster')/CONTACTOR" readonly="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/TYPE" readonly="true"> 
        <xforms:label ref="col_1" id="default19"/>  
        <xforms:value ref="col_0" id="default20"/>  
        <xforms:itemset id="default22" auto-load-data="true">
          <itemset-data xmlns="" id="default31">  
            <rows id="default32">  
              <row id="default33"> 
                <cell id="default34">1</cell>  
                <cell id="default35">对设备的投诉</cell>
              </row>  
              <row id="default36"> 
                <cell id="default37">2</cell>  
                <cell id="default38">对服务态度</cell>
              </row>  
              <row id="default39"> 
                <cell id="default40">3</cell>  
                <cell id="default41">对服务人员技能</cell>
              </row>  
              <row id="default42"> 
                <cell id="default45">4</cell>  
                <cell id="default46">对异常事件</cell>
              </row>  
              <row id="default47"> 
                <cell id="default48">5</cell>  
                <cell id="default49">其他</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default75"/>  
          <xforms:column ref="col_1" id="default76"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMaster')/SEVERITY"
        style="width:164px;" readonly="true"> 
        <xforms:label ref="col_1" id="default24"/>  
        <xforms:value ref="col_0" id="default26"/>  
        <xforms:itemset id="default27" auto-load-data="true">
          <itemset-data xmlns="" id="default50">  
            <rows id="default51">  
              <row id="default52"> 
                <cell id="default53">1</cell>  
                <cell id="default54">一般投诉</cell>
              </row>  
              <row id="default55"> 
                <cell id="default56">2</cell>  
                <cell id="default57">严重投诉</cell>
              </row>  
              <row id="default58"> 
                <cell id="default59">3</cell>  
                <cell id="default60">其他</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default61"/>  
          <xforms:column ref="col_1" id="default62"/>
        </xforms:itemset>
      </xhtml:div>  
      <xforms:input id="input14" ref="data('dataMaster')/CONTACTOR_TELEPHONE" readonly="true"/>  
      <xforms:input id="input15" ref="data('dataMaster')/CONTACT_EMAIL" style="width:164px;" readonly="true"/>  
      <xforms:input id="input16" ref="data('dataMaster')/REGION" readonly="true"/>  
      <xforms:input id="input17" ref="data('dataMaster')/oPERATORNAME" style="width:163px;" readonly="true"/>  
      <xforms:input id="input19" ref="data('dataMaster')/RECEIPT_DATE" style="width:168px;" readonly="true"/>  
      <xforms:input id="input20" ref="data('dataMaster')/COMPLAINT_UNIT" style="width:504px;" readonly="true"/>  
      <xforms:input id="input21" ref="data('dataMaster')/TITLE" style="height:20px;width:484px;" readonly="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMaster')/STATUS" readonly="true"> 
        <xforms:label ref="col_1" id="default28"/>  
        <xforms:value ref="col_0" id="default29"/>  
        <xforms:itemset id="default30" auto-load-data="true"> 
          <itemset-data xmlns="" id="default65">  
            <rows id="default66">  
              <row id="default67"> 
                <cell id="default68">1</cell>  
                <cell id="default69">未受理</cell>
              </row>  
              <row id="default70"> 
                <cell id="default71">2</cell>  
                <cell id="default72">已受理</cell>
              </row> 
            </rows> 
          </itemset-data>  
          <xforms:column ref="col_0" visible="false" id="default73"/>  
          <xforms:column ref="col_1" id="default74"/>
        </xforms:itemset>
      </xhtml:div>  
      <xforms:input id="input22" ref="data('dataMaster')/COMPLAINT_CONTENT" style="height:47px;width:478px;" readonly="true"/>  
      <xforms:input id="input23" ref="data('dataMaster')/MEMO" style="height:50px;width:478px;" readonly="true"/>  
      <xforms:input id="input24" ref="data('dataMaster')/COMPLAINT_DATE" style="width:168px;" readonly="true"/>  
      <xforms:input id="input26" ref="data('dataMain')/COMPLAINT_DOC_NO"/>  
      <xforms:input id="input27" ref="data('dataMaster')/COMPLAINT_DOC_NO" style="width:120px;" readonly="true"/>
      
      
    <xforms:select1 ref="data('bizData1')/RELEASE" id="radio1">
   <xforms:item id="selectItem1">
    <xforms:label id="default4"><![CDATA[是]]></xforms:label>
    <xforms:value id="default5"><![CDATA[1]]></xforms:value></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default6"><![CDATA[否]]></xforms:label>
    <xforms:value id="default16"><![CDATA[2]]></xforms:value></xforms:item> </xforms:select1>
  <xforms:input id="input2" ref="data('bizData1')/oPERATORNAME"></xforms:input>
  <xforms:input id="input3" ref="data('bizData1')/RESPONSOR_TITLE"></xforms:input>
  <xforms:input id="input4" ref="data('bizData1')/DEAL_DATE"></xforms:input>
  <xforms:input id="input5" ref="data('bizData1')/ADVICE" style="width:478px;height:39px;"></xforms:input>
  <xforms:input id="input6" ref="data('bizData1')/MEASURE" style="width:478px;height:39px;"></xforms:input>
  <xforms:input id="input7" ref="data('bizData1')/MEMO" style="width:478px;height:38px;"></xforms:input>
  <xforms:input id="input8" ref="data('bizData1')/COMPLAINT_ID"></xforms:input>
  <xforms:textarea ref="data('bizData1')/ADVICE" id="textarea1"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/MEASURE" id="textarea2"></xforms:textarea>
  <xforms:textarea ref="data('bizData1')/MEMO" id="textarea3"></xforms:textarea>
  <xforms:textarea ref="data('dataMaster')/COMPLAINT_CONTENT" id="textarea4"></xforms:textarea>
  <xforms:textarea ref="data('dataMaster')/MEMO1" id="textarea5"></xforms:textarea></xui:view>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

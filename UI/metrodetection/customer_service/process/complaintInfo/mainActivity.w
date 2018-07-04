<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:396px;left:1px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="CUSTOMER_COMPLAINT_INFO" direct-delete="true" id="dataMain" limit="20"
      offset="0" update-mode="whereAll" confirm-delete="false" confirm-refresh="false" store-type="grid"> 
      <reader action="/metrodetection/customer_service/logic/action/myComplaintInfoSelete"
        id="default3"/>  
      <writer action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/customer_service/logic/action/createCUSTOMER_COMPLAINT_INFOAction"
        id="default5"/>  
      <rule id="dataBizRule2" relation="TITLE" required="true()" alert="'投诉主题不能为空!'"></rule>
  <rule id="dataBizRule3" relation="COMPLAINT_CONTENT" alert="'投诉内容不能为空!'" required="true()"></rule>
  <rule id="dataBizRule1" relation="CONTACTOR" required="true()"></rule>
  <rule id="dataBizRule4" relation="COMPLAINT_DATE" required="true()"></rule></data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="CUSTOMER_COMPLAINT_FEEDBACK" confirm-delete="false" direct-delete="true" confirm-refresh="false"> 
      <creator id="default21" />  
      <reader id="default23" action="/metrodetection/customer_service/logic/action/queryCUSTOMER_COMPLAINT_FEEDBACKAction" />  
      <writer id="default25" action="/metrodetection/customer_service/logic/action/saveCUSTOMER_COMPLAINT_FEEDBACKAction" /> 
    </data><data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_OPOrg" data-type="json" id="sysOperData" store-type="simple" update-mode="whereAll"> 
      <reader action="/system/logic/action/queryOrgAction" id="default4_7"/> 
    </data>  
      
    <data auto-load="true" columns="val,name" component="/UI/system/components/data.xbl.xml#data"
      id="tempData" src="" store-type="simple" xui:parent="mdDefault" xui:update-mode="insert" confirm-refresh="false"> 
      <rows xmlns="" id="default15_3">  
        <row id="default16_3"> 
          <cell id="default17_3"/>  
          <cell id="default18_3"/> 
        </row> 
      </rows> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="HR_BASE_INFO" data-type="json" id="hrPerData" store-type="simple" update-mode="whereAll"> 
      <creator id="default5_7"/>  
      <reader action="/metrodetection/system_code/logic/action/queryHR_BASE_INFOAction"
        id="default6_7"/>  
      <writer id="default7_7"/> 
    </data>
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default1" label="投诉单据编码" ref="COMPLAINT_DOC_CODE" type="ro"
        width="100px" visible="false"/>  
      <column id="default2" label="投诉单据编号" ref="COMPLAINT_DOC_NO" type="ro" width="100px"/>  
      <column id="default6" label="投诉人" ref="CONTACTOR" type="ro" width="100px"/>  
      <column id="default7" label="投诉单位" ref="COMPLAINT_UNIT" type="ro" width="100px"/>  
      <column id="default8" label="投诉日期" ref="COMPLAINT_DATE" type="date" width="100px"/>  
      <column id="default9" label="投诉主题" ref="TITLE" type="ro" width="100px"/>  
      <column id="default10" label="投诉类型" ref="TYPE1" type="ro" width="100px"/>  
      <column id="default11" label="严重程度" ref="SEVERITY1" type="ro" width="100px"/>  
      <column id="default12" label="联系电话" ref="CONTACTOR_TELEPHONE" type="ro"
        width="100px"/>  
      <column id="default13" label="联系邮件" ref="CONTACT_EMAIL" type="ro" width="100px"
        visible="true"/>  
      <xui:column id="gridColumn2" ref="STATUS1" type="ro" width="100px" label="受理状态"/>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item> 
          </item>  
        <item> 
            <xforms:trigger appearance="image-text" id="insertTrigger1" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>
        <item name="save-item" id="barItem1"/>
        <item name="delete-item" id="barItem4"></item><item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:155%;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="41px"> 
              <xui:place control="view2" id="controlPlace12" style="width:834px;height:84px;"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:105%;"> 
            <top id="borderLayout-top2" size="38px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5" style="width:826px;height:154%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout"
          id="excelLayout1" style="position:absolute;width:115%;top:1px;height:79%;left:2px;"
          src="complaintInfo_xls.xls"/>
      </layout>  
      <xforms:input id="iptCOMPLAINT_DOC_CODE" ref="data('dataMain')/COMPLAINT_DOC_CODE"/>  
      <xforms:input id="iptCONTACTOR" ref="data('dataMain')/CONTACTOR" style="width:160px;"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/TYPE"
        style="width:163px;"> 
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
        value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/SEVERITY"
        style="width:169px;"> 
        <xforms:label ref="col_1" id="default24"/>  
        <xforms:value ref="col_0" id="default26"/>  
        <xforms:itemset id="default27" auto-load-data="true">
            
          <xforms:column ref="col_0" visible="false" id="default61"/>  
          <xforms:column ref="col_1" id="default62"/>
        <itemset-data xmlns="" id="default14">
   <rows xmlns="" id="default50">
    <row id="default51">
     <cell id="default52">1</cell>
     <cell id="default53">一般投诉</cell></row> 
    <row id="default54">
     <cell id="default55">2</cell>
     <cell id="default56">严重投诉</cell></row> 
    <row id="default57">
     <cell id="default58">3</cell>
     <cell id="default59">其它</cell></row> </rows> </itemset-data></xforms:itemset>
      </xhtml:div>  
      <xforms:input id="input14" ref="data('dataMain')/CONTACTOR_TELEPHONE" style="width:163px;"/>  
      <xforms:input id="input15" ref="data('dataMain')/CONTACT_EMAIL" style="width:171px;"><xforms:action id="action5" ev:event="DOMFocusOut"><xforms:script id="xformsScript5"><![CDATA[mainActivity.input15Blur(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="input16" ref="data('dataMain')/REGION" style="width:164px;"/>  
      <xforms:input id="input17" ref="data('dataMain')/oPERATORNAME" style="width:172px;" readonly="true"/>  
      <xforms:input id="input19" ref="data('dataMain')/RECEIPT_DATE" style="width:168px;"/>  
      <xforms:input id="input20" ref="data('dataMain')/COMPLAINT_UNIT" style="width:504px;"/>  
      <xforms:input id="input21" ref="data('dataMain')/TITLE" style="width:481px;"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/STATUS"
        style="width:165px;"> 
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
      <xforms:input id="input22" ref="data('dataMain')/COMPLAINT_CONTENT" style="height:47px;width:504px;"/>  
      <xforms:input id="input23" ref="data('dataMain')/MEMO" style="height:50px;width:503px;"/>  
      <xforms:input id="input24" ref="data('dataMain')/COMPLAINT_DATE" style="width:168px;"/>  
      <xforms:input id="input26" ref="data('dataMain')/COMPLAINT_DOC_NO"/>  
      <xforms:input id="input27" ref="data('dataMain')/COMPLAINT_DOC_NO"/>
    <xforms:textarea ref="data('dataMain')/COMPLAINT_CONTENT" id="textarea1"></xforms:textarea>
  <xforms:textarea ref="data('dataMain')/MEMO" id="textarea2"></xforms:textarea></xui:view>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout3"> 
        <place control="tbsMain1" id="controlPlace1" style="position:absolute;height:41px;top:0px;left:0px;width:677px;"/>  
        <xui:place control="gridSelect4" id="controlPlace13" style="position:absolute;top:8px;left:576px;"/>  
        <xui:place control="trigger1" id="controlPlace14" style="position:absolute;top:8px;left:745px;"/> 
      </layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
          id="ngtbMain1" style="height:27px;width:369px;" mode="IMG_TXT_LR"> 
          <item> 
            <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
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
          <item name="refresh-item" id="barItem9"></item><item name="separator" id="separatorItem2"/>
          <item id="barItem11" items="pre,next,ext" name="custom-page-item"
            page-count="0"/>  
          <item id="barItem5" name="separator"/>  
          <item id="barItem2"> 
            <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMain"
              id="excelExport1" appearance="image-text"/> 
          </item>  
          <item id="barItem7" name="separator"/>  
          <item id="barItem8"> 
            <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
              id="printHtml1" is-preview="true" label="打印" target-id="grdMain"/> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect4" ref="data('tempData')/val"
        multi-select="false" default-label-ref="'请选择受理状态'"> 
        <xforms:label ref="col_1" id="default15"/>  
        <xforms:value ref="col_0" id="default16"/>  
        <xforms:itemset id="default17" auto-load-data="true"> 
          <xforms:column ref="col_0" visible="false" id="default43"/>  
          <xforms:column ref="col_1" id="default44"/>  
          
        <itemset-data xmlns="" id="default60">
   <rows xmlns="" id="default63">
    <row id="default64">
     <cell id="default77">0</cell>
     <cell id="default78">全部状态</cell></row> 
    <row id="default79">
     <cell id="default80">1</cell>
     <cell id="default81">未受理</cell></row> 
    <row id="default82">
     <cell id="default83">2</cell>
     <cell id="default84">已受理</cell></row> </rows> </itemset-data></xforms:itemset> 
      </xhtml:div>  
      <xforms:trigger id="trigger1"> 
        <xforms:label id="default18"><![CDATA[搜索]]></xforms:label>  
        <xforms:action id="action2" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript2"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script> 
        </xforms:action> 
      </xforms:trigger> 
    </xui:view>  
    </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:144px;top:107px;height:126px;left:547px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="true" id="especialData" concept="OA_SD_ScheduleEsp" onBeforeSave="mainActivity.especialDataBeforeSave"> 
      <creator id="default1" action="/OA/schedule/logic/action/createOA_SD_ScheduleEspAction"/>  
      <reader id="default2" action="/OA/schedule/logic/action/queryOA_SD_ScheduleEspAction"/>  
      <writer id="default3" action="/OA/schedule/logic/action/saveOA_SD_ScheduleEspAction"/>  
      <rule id="dataBizRule1" relation="fTitle" required="true()" alert="'主题必须填写!'"/>  
      <rule id="dataBizRule2" relation="fBeginDatePart" required="true()" alert="'开始日期必须填写!'"/>  
      <rule id="dataBizRule3" relation="fBeginTimePart" required="true()" alert="'开始时间必须填写!'"/>  
      <rule id="dataBizRule5" relation="fEndDatePart" required="true()" alert="'结束日期必须填写!'"/>  
      <rule id="dataBizRule6" relation="fEndTimePart" required="true()" alert="'结束时间必须填写!'"/>  
      <rule id="dataBizRule8" relation="fExecutors" required="true()" alert="'执行人必须填写!'"
        readonly="true()"/>  
      <rule id="dataBizRule9" relation="fIsShared" required="true()" alert="'必须选择是否公开!'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="executorData" concept="OA_SD_Executor" store-type="simple"
      auto-new="false"> 
      <creator id="default6" action="/OA/schedule/logic/action/createSDEXECUTORAction"/>  
      <reader id="default7" action="/OA/schedule/logic/action/querySDEXECUTORAction"/>  
      <writer id="default8" action="/OA/schedule/logic/action/saveSDEXECUTORAction"/>  
      <master id="master1" data="especialData" relation="fSDMasterID"/> 
    </data>  
    <data id="beginTimePartData" store-type="simple" component="/UI/system/components/data.xbl.xml#data"
      columns="label,value" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell>00:00</cell>  
          <cell>00:00</cell> 
        </row>  
        <row> 
          <cell>00:30</cell>  
          <cell>00:30</cell> 
        </row>  
        <row> 
          <cell>01:00</cell>  
          <cell>01:00</cell> 
        </row>  
        <row> 
          <cell>01:30</cell>  
          <cell>01:30</cell> 
        </row>  
        <row> 
          <cell>02:00</cell>  
          <cell>02:00</cell> 
        </row>  
        <row> 
          <cell>02:30</cell>  
          <cell>02:30</cell> 
        </row>  
        <row> 
          <cell>03:00</cell>  
          <cell>03:00</cell> 
        </row>  
        <row> 
          <cell>03:30</cell>  
          <cell>03:30</cell> 
        </row>  
        <row> 
          <cell>04:00</cell>  
          <cell>04:00</cell> 
        </row>  
        <row> 
          <cell>04:30</cell>  
          <cell>04:30</cell> 
        </row>  
        <row> 
          <cell>05:00</cell>  
          <cell>05:00</cell> 
        </row>  
        <row> 
          <cell>05:30</cell>  
          <cell>05:30</cell> 
        </row>  
        <row> 
          <cell>06:00</cell>  
          <cell>06:00</cell> 
        </row>  
        <row> 
          <cell>06:30</cell>  
          <cell>06:30</cell> 
        </row>  
        <row> 
          <cell>07:00</cell>  
          <cell>07:00</cell> 
        </row>  
        <row> 
          <cell>07:30</cell>  
          <cell>07:30</cell> 
        </row>  
        <row> 
          <cell>08:00</cell>  
          <cell>08:00</cell> 
        </row>  
        <row> 
          <cell>08:30</cell>  
          <cell>08:30</cell> 
        </row>  
        <row> 
          <cell>09:00</cell>  
          <cell>09:00</cell> 
        </row>  
        <row> 
          <cell>09:30</cell>  
          <cell>09:30</cell> 
        </row>  
        <row> 
          <cell>10:00</cell>  
          <cell>10:00</cell> 
        </row>  
        <row> 
          <cell>10:30</cell>  
          <cell>10:30</cell> 
        </row>  
        <row> 
          <cell>11:00</cell>  
          <cell>11:00</cell> 
        </row>  
        <row> 
          <cell>11:30</cell>  
          <cell>11:30</cell> 
        </row>  
        <row> 
          <cell>12:00</cell>  
          <cell>12:00</cell> 
        </row>  
        <row> 
          <cell>12:30</cell>  
          <cell>12:30</cell> 
        </row>  
        <row> 
          <cell>13:00</cell>  
          <cell>13:00</cell> 
        </row>  
        <row> 
          <cell>13:30</cell>  
          <cell>13:30</cell> 
        </row>  
        <row> 
          <cell>14:00</cell>  
          <cell>14:00</cell> 
        </row>  
        <row> 
          <cell>14:30</cell>  
          <cell>14:30</cell> 
        </row>  
        <row> 
          <cell>15:00</cell>  
          <cell>15:00</cell> 
        </row>  
        <row> 
          <cell>15:30</cell>  
          <cell>15:30</cell> 
        </row>  
        <row> 
          <cell>16:00</cell>  
          <cell>16:00</cell> 
        </row>  
        <row> 
          <cell>16:30</cell>  
          <cell>16:30</cell> 
        </row>  
        <row> 
          <cell>17:00</cell>  
          <cell>17:00</cell> 
        </row>  
        <row> 
          <cell>17:30</cell>  
          <cell>17:30</cell> 
        </row>  
        <row> 
          <cell>18:00</cell>  
          <cell>18:00</cell> 
        </row>  
        <row> 
          <cell>18:30</cell>  
          <cell>18:30</cell> 
        </row>  
        <row> 
          <cell>19:00</cell>  
          <cell>19:00</cell> 
        </row>  
        <row> 
          <cell>19:30</cell>  
          <cell>19:30</cell> 
        </row>  
        <row> 
          <cell>20:00</cell>  
          <cell>20:00</cell> 
        </row>  
        <row> 
          <cell>20:30</cell>  
          <cell>20:30</cell> 
        </row>  
        <row> 
          <cell>21:00</cell>  
          <cell>21:00</cell> 
        </row>  
        <row> 
          <cell>21:30</cell>  
          <cell>21:30</cell> 
        </row>  
        <row> 
          <cell>22:00</cell>  
          <cell>22:00</cell> 
        </row>  
        <row> 
          <cell>22:30</cell>  
          <cell>22:30</cell> 
        </row>  
        <row> 
          <cell>23:00</cell>  
          <cell>23:00</cell> 
        </row>  
        <row> 
          <cell>23:30</cell>  
          <cell>23:30</cell> 
        </row> 
      </rows> 
    </data>  
    <data id="endTimePartData" store-type="simple" component="/UI/system/components/data.xbl.xml#data"
      columns="label,value"> 
      <rows xmlns="">  
        <row> 
          <cell>00:00</cell>  
          <cell>00:00</cell> 
        </row>  
        <row> 
          <cell>00:30</cell>  
          <cell>00:30</cell> 
        </row>  
        <row> 
          <cell>01:00</cell>  
          <cell>01:00</cell> 
        </row>  
        <row> 
          <cell>01:30</cell>  
          <cell>01:30</cell> 
        </row>  
        <row> 
          <cell>02:00</cell>  
          <cell>02:00</cell> 
        </row>  
        <row> 
          <cell>02:30</cell>  
          <cell>02:30</cell> 
        </row>  
        <row> 
          <cell>03:00</cell>  
          <cell>03:00</cell> 
        </row>  
        <row> 
          <cell>03:30</cell>  
          <cell>03:30</cell> 
        </row>  
        <row> 
          <cell>04:00</cell>  
          <cell>04:00</cell> 
        </row>  
        <row> 
          <cell>04:30</cell>  
          <cell>04:30</cell> 
        </row>  
        <row> 
          <cell>05:00</cell>  
          <cell>05:00</cell> 
        </row>  
        <row> 
          <cell>05:30</cell>  
          <cell>05:30</cell> 
        </row>  
        <row> 
          <cell>06:00</cell>  
          <cell>06:00</cell> 
        </row>  
        <row> 
          <cell>06:30</cell>  
          <cell>06:30</cell> 
        </row>  
        <row> 
          <cell>07:00</cell>  
          <cell>07:00</cell> 
        </row>  
        <row> 
          <cell>07:30</cell>  
          <cell>07:30</cell> 
        </row>  
        <row> 
          <cell>08:00</cell>  
          <cell>08:00</cell> 
        </row>  
        <row> 
          <cell>08:30</cell>  
          <cell>08:30</cell> 
        </row>  
        <row> 
          <cell>09:00</cell>  
          <cell>09:00</cell> 
        </row>  
        <row> 
          <cell>09:30</cell>  
          <cell>09:30</cell> 
        </row>  
        <row> 
          <cell>10:00</cell>  
          <cell>10:00</cell> 
        </row>  
        <row> 
          <cell>10:30</cell>  
          <cell>10:30</cell> 
        </row>  
        <row> 
          <cell>11:00</cell>  
          <cell>11:00</cell> 
        </row>  
        <row> 
          <cell>11:30</cell>  
          <cell>11:30</cell> 
        </row>  
        <row> 
          <cell>12:00</cell>  
          <cell>12:00</cell> 
        </row>  
        <row> 
          <cell>12:30</cell>  
          <cell>12:30</cell> 
        </row>  
        <row> 
          <cell>13:00</cell>  
          <cell>13:00</cell> 
        </row>  
        <row> 
          <cell>13:30</cell>  
          <cell>13:30</cell> 
        </row>  
        <row> 
          <cell>14:00</cell>  
          <cell>14:00</cell> 
        </row>  
        <row> 
          <cell>14:30</cell>  
          <cell>14:30</cell> 
        </row>  
        <row> 
          <cell>15:00</cell>  
          <cell>15:00</cell> 
        </row>  
        <row> 
          <cell>15:30</cell>  
          <cell>15:30</cell> 
        </row>  
        <row> 
          <cell>16:00</cell>  
          <cell>16:00</cell> 
        </row>  
        <row> 
          <cell>16:30</cell>  
          <cell>16:30</cell> 
        </row>  
        <row> 
          <cell>17:00</cell>  
          <cell>17:00</cell> 
        </row>  
        <row> 
          <cell>17:30</cell>  
          <cell>17:30</cell> 
        </row>  
        <row> 
          <cell>18:00</cell>  
          <cell>18:00</cell> 
        </row>  
        <row> 
          <cell>18:30</cell>  
          <cell>18:30</cell> 
        </row>  
        <row> 
          <cell>19:00</cell>  
          <cell>19:00</cell> 
        </row>  
        <row> 
          <cell>19:30</cell>  
          <cell>19:30</cell> 
        </row>  
        <row> 
          <cell>20:00</cell>  
          <cell>20:00</cell> 
        </row>  
        <row> 
          <cell>20:30</cell>  
          <cell>20:30</cell> 
        </row>  
        <row> 
          <cell>21:00</cell>  
          <cell>21:00</cell> 
        </row>  
        <row> 
          <cell>21:30</cell>  
          <cell>21:30</cell> 
        </row>  
        <row> 
          <cell>22:00</cell>  
          <cell>22:00</cell> 
        </row>  
        <row> 
          <cell>22:30</cell>  
          <cell>22:30</cell> 
        </row>  
        <row> 
          <cell>23:00</cell>  
          <cell>23:00</cell> 
        </row>  
        <row> 
          <cell>23:30</cell>  
          <cell>23:30</cell> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="领导日程：选择人员" width="500px" height="460px" modal="true" id="selectPersonDialog"
      url="/OA/schedule/process/especialPersonList/especialPersonListDialog.w" onReceive="mainActivity.selectPersonDialogReceive"/>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        class="xui-tabPanel" style="height:100%;width:100%;"> 
        <xui:tab id="tabPage1"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:table border="0" id="table2" style="height:100%;width:100%;overflow:hidden;"> 
            <xhtml:tr id="tr3"> 
              <xhtml:td id="td6" style="height:35px" > 
                <xui:place control="toolbars1" id="controlPlace3"/>
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="tr4"> 
              <xhtml:td id="td8" valign="top" style="height:90%">
                <xui:place control="view1" id="controlPlace10" style="height:100%;width:100%;"></xui:place></xhtml:td>
            </xhtml:tr> 
          </xhtml:table>
        </xui:tab>  
        <xui:tab id="tabPage2"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:table border="0" id="table1" style="height:100%;width:100%;"> 
            <xhtml:tr id="tr1"> 
              <xhtml:td id="td2" height="35px">
                <xui:place control="toolbars2" id="controlPlace5"/>
              </xhtml:td>
            </xhtml:tr>  
            <xhtml:tr id="tr2"> 
              <xhtml:td id="td4" valign="top">
                <xui:place control="viewDetail" id="controlPlace2" style="height:100%;"/>
              </xhtml:td>
            </xhtml:tr> 
          </xhtml:table>
        </xui:tab> 
      </xhtml:div>  
      <xui:place control="selectPersonDialog" id="controlPlace9"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"
        data="especialData"> 
        <item name="insert-item" id="barItem11"/>  
        <item name="save-item" id="barItem12"/>  
        <item name="delete-item" id="barItem13"/>  
        <item name="refresh-item" id="barItem14"/>  
        <item name="filter-item" id="barItem15"/>  
        <item name="filter-pattern-item" id="barItem16"/>  
        <item name="separator" id="separatorItem3"/>  
        <item name="first-item" id="barItem17"/>  
        <item name="pre-item" id="barItem18"/>  
        <item name="next-item" id="barItem19"/>  
        <item name="last-item" id="barItem20"/>  
        <item name="separator" id="separatorItem4"/>
      </xui:bar> 
    </xhtml:div>  
    <xforms:trigger id="trigger1" appearance="image" src="/UI/appCommon/images/insert.gif"
      dis-src="/UI/appCommon/images/un_insert.gif"> 
      <xforms:label id="xuiLabel6">trigger</xforms:label>  
      <xforms:action id="action5" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5">mainActivity.trigger1Click(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:select1 ref="data('especialData')/fIsShared" id="fIsShared"> 
      <xforms:item id="selectItem1" checked="true"> 
        <xforms:label id="xuiLabel4">是</xforms:label>  
        <xforms:value id="default4">1</xforms:value>
      </xforms:item>  
      <xforms:item id="selectItem2"> 
        <xforms:label id="xuiLabel5">否</xforms:label>  
        <xforms:value id="default5">0</xforms:value>
      </xforms:item> 
    </xforms:select1>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" ref="data('especialData')/fBeginTimePart"
      label-ref="data('especialData')/fBeginTimePart" id="fBeginTimePart" auto-size="true"> 
      <xforms:label ref="lable" id="htmlLabel_10"/>  
      <xforms:value ref="value" id="default9"/>  
      <xforms:itemset data="beginTimePartData" auto-load-data="true" id="default10"> 
        <xforms:column ref="lable" visible="false" width="28" id="default24"/>  
        <xforms:column ref="value" id="default25"/>
      </xforms:itemset> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" ref="data('especialData')/fEndTimePart"
      label-ref="data('especialData')/fEndTimePart" id="fEndTimePart" auto-size="true"
      onCloseup="mainActivity.fEndTimePartCloseup"> 
      <xforms:label ref="lable" id="htmlLabel_10"/>  
      <xforms:value ref="value" id="default11"/>  
      <xforms:itemset data="endTimePartData" auto-load-data="true" id="default12"> 
        <xforms:column ref="lable" visible="false" width="28" id="default24"/>  
        <xforms:column ref="value" id="default25"/>
      </xforms:itemset> 
    </xhtml:div>  
    <xui:view auto-load="true" id="viewDetail" class="xui-container"> 
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" ref="data('especialData')/fBeginTimePart"
        label-ref="data('especialData')/fBeginTimePart" id="fBeginTimePart" auto-size="true"
        class="xui-autofill"> 
        <xforms:label ref="lable" id="htmlLabel_10"/>  
        <xforms:value ref="value" id="default13"/>  
        <xforms:itemset data="beginTimePartData" auto-load-data="true" id="default14"> 
          <xforms:column ref="lable" visible="false" width="28" id="default24"/>  
          <xforms:column ref="value" id="default25"/>
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" ref="data('especialData')/fEndTimePart"
        label-ref="data('especialData')/fEndTimePart" id="fEndTimePart" auto-size="true"
        onCloseup="mainActivity.fEndTimePartCloseup" class="xui-autofill"> 
        <xforms:label ref="lable" id="htmlLabel_10"/>  
        <xforms:value ref="value" id="default15"/>  
        <xforms:itemset data="endTimePartData" auto-load-data="true" id="default16"> 
          <xforms:column ref="lable" visible="false" width="28" id="default24"/>  
          <xforms:column ref="value" id="default25"/>
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input ref="data('especialData')/fTitle" id="fTitle" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fBeginDatePart" id="fBeginDatePart" class="xui-autofill"> 
        <xforms:action id="action2" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript2">mainActivity.fBeginDatePartChange(event)</xforms:script>
        </xforms:action> 
      </xforms:input>  
      <xforms:input ref="data('especialData')/fBeginTime" id="fBeginTime" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fEndDatePart" id="fEndDatePart" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fEndTime" id="fEndTime" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fExecutors" id="fExecutors" class="xui-autofill"
        readonly="true"> 
        <xforms:action id="action4" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript4">mainActivity.fExecutorsChange(event)</xforms:script>
        </xforms:action> 
      </xforms:input>  
      <xforms:input ref="data('especialData')/fIsRemind" id="fIsRemind" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fRemindDatePart" id="fRemindDatePart"
        class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fRemindTimePart" id="fRemindTimePart"
        class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fRemindTime" id="fRemindTime" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fCreatePsnID" id="fCreatePsnID" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fCreatePsnName" id="fCreatePsnName" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fCreateTime" id="fCreateTime" class="xui-autofill"/>  
      <xforms:input ref="data('especialData')/fCreateURL" id="fCreateURL" class="xui-autofill"/>  
      <xforms:textarea ref="data('especialData')/fContent" id="fContent" auto-size="true"
        style="height:100%;width:100%;" mediatype="text/html" class="xui-autofill"/>  
      <xforms:trigger id="searchButton" appearance="image" src="/UI/OA/common/images/search.png"
        class="xui-autofill"> 
        <xforms:label id="xuiLabel3">trigger</xforms:label>  
        <xforms:action id="action1" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript1">mainActivity.searchButtonClick(event)</xforms:script>
        </xforms:action> 
      </xforms:trigger>  
      <xforms:select1 ref="data('especialData')/fIsShared" id="fIsShared"> 
        <xforms:item id="selectItem1" checked="true"> 
          <xforms:label id="xuiLabel4">是</xforms:label>  
          <xforms:value id="default4">1</xforms:value>
        </xforms:item>  
        <xforms:item id="selectItem2"> 
          <xforms:label id="xuiLabel5">否</xforms:label>  
          <xforms:value id="default5">0</xforms:value>
        </xforms:item> 
      </xforms:select1>  
      <layout id="layout2" style="width:100%;position:relative;height:100%;" type="cell.excel"
        src="schedule.layout.xls"> 
        <xui:place control="textareaContent" id="controlPlace6"/>  
        <xui:place control="trigger1" id="controlPlace7"/>  
        <xui:place control="fIsShared" id="controlPlace8"/>  
        <xui:place control="fBeginTimePart" id="controlPlaceBegin"/>  
        <xui:place control="fEndTimePart" id="controlPlaceEnd"/>
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="especialData"> 
         <item id="customBarItem1"> 
            <xforms:trigger id="trigger1" appearance="image" src="/UI/appCommon/images/insert.gif"
              dis-src="/UI/appCommon/images/un_insert.gif"> 
              <xforms:label id="xuiLabel6">trigger</xforms:label>  
              <xforms:action id="action5" ev:event="DOMActivate">
                <xforms:script id="xformsScript5">mainActivity.trigger1Click(event)</xforms:script>
              </xforms:action>
            </xforms:trigger> 
          </item>  
        <item name="save-item" id="barItem2"/>  
        <item name="delete-item" id="barItem3"/>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="first-item" id="barItem7"/>  
        <item name="pre-item" id="barItem8"/>  
        <item name="next-item" id="barItem9"/>  
        <item name="last-item" id="barItem10"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="customPageItem1"/>
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;height:100%;width:100%;" id="layout3"><xui:place control="grid1" id="controlPlace4" style="position:absolute;width:100%;top:0;height:100%;left:0;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="especialData" onRowDblClick="mainActivity.grid1RowDblClick">








   <xui:column id="gridColumn1" ref="fTitle" label="主题" type="ro" width="100"></xui:column>
   <xui:column id="gridColumn2" ref="fBeginTime" label="开始时间" type="ro" width="100" format="yyyy-MM-dd hh:mm"></xui:column>
   <xui:column id="gridColumn3" ref="fEndTime" label="结束时间" type="ro" width="100" format="yyyy-MM-dd hh:mm"></xui:column>
   <xui:column id="gridColumn4" ref="fContent" label="内容" type="ro" width="150"></xui:column>
   <xui:column id="gridColumn5" ref="fExecutors" label="人员" type="ro" width="100"></xui:column>
   <xui:column id="gridColumn6" ref="fCreatePsnName" label="记录人" type="ro" width="100"></xui:column>
   <xui:column id="gridColumn7" ref="fCreateTime" label="安排时间" type="ro" width="120"></xui:column></xhtml:div></xui:view></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

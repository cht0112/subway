<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="schedule.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="schedule.js"/> 
  </resource>  
  <xforms:model id="mdMain" style="top:257px;left:161px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="2" update-mode="whereVersion" auto-load="true" id="dSchedule" concept="OA_SD_SCHEDULE" store-type="simple"> 
      <reader action="/OA/schedule/logic/action/querySDSCHEDULEAction"/>  
      <writer action="/OA/schedule/logic/action/saveSDSCHEDULEAction"/>  
      <creator action="/OA/schedule/logic/action/createSDSCHEDULEAction"/>  
      <rule relation="fTitle" required="true()" alert="'日程主题不能为空!'"/>  
      <rule relation="fBeginDatePart" required="true()" alert="'开始日期不能为空!'"/>  
      <rule relation="fBeginTimePart" required="true()" alert="'开始时间不能为空!'"/>  
      <rule relation="fEndDatePart" required="true()" alert="'结束日期不能为空!'"/>  
      <rule relation="fEndTimePart" required="true()" alert="'结束时间不能为空!'"/>  
      <rule relation="fExecutors" required="true()" alert="'执行者不能为空!'" readonly="true()"/>  
      <!--<rule id="dataBizRule1" concept="OA_SD_SCHEDULE" readonly="call('justep.Context.getCurrentPersonID') != data('dSchedule')/fCreatePsnID and data('dSchedule')/fCreatePsnID != ''"/>
			--> 
    </data>  
    <data id="beginTimePartData" auto-load="true" store-type="simple" columns="label,value" component="/UI/system/components/data.xbl.xml#data"> 
      <rows xmlns="">  
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
      </rows> 
    </data>  
    <data id="endTimePartData" auto-load="true" store-type="simple" columns="label,value" component="/UI/system/components/data.xbl.xml#data"> 
      <rows xmlns="">  
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
      </rows> 
    </data>  
    <data id="dTemp" component="/UI/system/components/data.xbl.xml#data" columns="fid,callerName,fTitle" store-type="simple"> 
      <rows xmlns="">  
        <row id="dTemp"> 
          <cell/>  
          <cell/>  
          <cell/> 
        </row>  
        <row/> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="20" update-mode="whereVersion" auto-load="true" id="dExecutor" concept="OA_SD_EXECUTOR" store-type="simple" direct-delete="false" confirm-delete="false" confirm-refresh="false"> 
      <master auto-load="false" data="dSchedule" relation="fSDMasterID"/>  
      <reader action="/OA/schedule/logic/action/querySDEXECUTORAction"/>  
      <writer action="/OA/schedule/logic/action/saveSDEXECUTORAction"/>  
      <creator action="/OA/schedule/logic/action/createSDEXECUTORAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="canSelect" src="" auto-load="true" id="selectFilter" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('selectFilter')/canSelect" readonly="call('justep.Context.getCurrentPersonID') != data('dSchedule')/fCreatePsnID and data('dSchedule')/fCreatePsnID !=''"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view id="vScheudleInfo"> 
      <xforms:input ref="data('dSchedule')/fTitle" id="fTitle" auto-size="true"/>  
      <xforms:input ref="data('dSchedule')/fBeginDatePart" id="fBeginDatePart" xforms:format="yyyy-MM-dd" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="fBeginTimePart" ref="data('dSchedule')/fBeginTimePart" auto-size="true" dropdown-height="200" input-inputable="true" input-changeable="true" label-ref="data('dSchedule')/fBeginTimePart"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="beginTimePartData" auto-load-data="true"> 
          <xforms:column ref="label" width="100"/>  
          <xforms:column ref="value" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input ref="data('dSchedule')/fEndDatePart" id="fEndDatePart" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="fEndTimePart" ref="data('dSchedule')/fEndTimePart" auto-size="true" dropdown-height="200" onCloseup="fEndTimePartCloseup" label-ref="data('dSchedule')/fEndTimePart" input-changeable="true" input-inputable="true"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="endTimePartData" auto-load-data="true"> 
          <xforms:column ref="value" visable="false"/>  
          <xforms:column ref="label" visable="true"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input ref="data('dSchedule')/fExecutors" id="fExecutors" auto-size="true"/>  
      <xforms:trigger id="btnSearch" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" ref="data('selectFilter')/canSelect"> 
        <xforms:label>设置执行人</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>addExecutors(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triEnsure" ref="data('selectFilter')/canSelect" style="height:25px;width:60px;"> 
        <xforms:label>确 定</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>triEnsureDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triRefresh" style="height:25px;width:60px;"> 
        <xforms:label>刷 新</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>triRefreshDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triCancel" style="height:25px;width:60px;"> 
        <xforms:label>取 消</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>triCancelDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:select1 ref="data('dSchedule')/fIsShared" id="fIsShared"> 
        <xforms:item> 
          <xforms:label>是</xforms:label>  
          <xforms:value>1</xforms:value> 
        </xforms:item>  
        <xforms:item> 
          <xforms:label>否</xforms:label>  
          <xforms:value>0</xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xforms:textarea ref="data('dSchedule')/fContent" id="taContent" auto-size="true"/>  
      <xui:layout type="excel" src="schedule.xls" style="width:100%;height:100%;"> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="执行人选择" width="670px" height="350px" modal="true" id="orgDlgSingleDept" url="/appCommon/dialogs/orgSelectDialog/orgMultiSelect/mainActivity.w" reload-on-open="true" onSend="orgDlgSendDept" onReceive="dlgExecutorReceive"/>  
    <xui:layout style="height:100%;width:100%;" type="flow"> 
      <xhtml:table id="table1" style="height:100%;table-layout:fixed;width:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="width:100%;height:100%;"> 
            <place control="vScheudleInfo" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="orgDlgSingleDept" style="top:466px;left:426px;"/> 
    </xui:layout> 
  </xui:view> 
</xui:window>

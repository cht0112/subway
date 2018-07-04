<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="schedule.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:script id="htmlScript1" src="scheduleView.js"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="top:257px;left:161px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="2" update-mode="whereVersion" auto-load="true" id="dSchedule" concept="OA_SD_SCHEDULE" store-type="simple"> 
      <reader action="/OA/schedule/logic/action/querySDSCHEDULEAction"/>  
      <rule id="dataBizRule1" concept="OA_SD_SCHEDULE" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view id="vScheudleInfo" class="xui-container"> 
      <xforms:input ref="data('dSchedule')/fTitle" id="fTitle" auto-size="true" class="xui-autofill"/>  
      <xforms:input ref="data('dSchedule')/fBeginDatePart" id="fBeginDatePart" xforms:format="yyyy-MM-dd" auto-size="true" class="xui-autofill"/>  
      <xforms:input ref="data('dSchedule')/fBeginTimePart" id="fBeginTimePart" auto-size="true" class="xui-autofill"/>  
      <xforms:input ref="data('dSchedule')/fEndDatePart" id="fEndDatePart" auto-size="true" class="xui-autofill"/>  
      <xforms:input ref="data('dSchedule')/fEndTimePart" id="fEndTimePart" auto-size="true" class="xui-autofill"/>  
      <xforms:input ref="data('dSchedule')/fExecutors" id="fExecutors" auto-size="true" class="xui-autofill"/>  
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
      <xforms:textarea ref="data('dSchedule')/fContent" id="taContent" auto-size="true" class="xui-autofill"/>  
      <xui:layout type="excel" src="scheduleView.xls" style="width:100%;height:100%;"> 
        <place control="taContent" id="controlPlace1" style="width:320px;height:150px"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%;" type="flow"> 
      <xhtml:table id="table1" style="height:100%;table-layout:fixed;width:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr/>  
        <xhtml:tr> 
          <xhtml:td style=";width:100%;"> 
            <place control="vScheudleInfo" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

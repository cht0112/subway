<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:267px;left:169px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="12" update-mode="whereVersion" auto-load="true" id="dArrange" concept="OA_MT_RoomArrange" order-by="fArrTime:desc"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTRoomArrangeAction"/>  
      <filter name="arrangeEffectFilter" id="filter1">OA_MT_RoomArrange.fEffect = 1</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="keyword" src="" auto-load="true" id="dCondition" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrArrange"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="dArrange"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="custom-page-item" id="barItem1"/> 
        <item>
		    <xforms:input id="iptKeyword" ref="data('dCondition')/keyword" auto-size="false"> 
		      <xforms:action id="action1" ev:event="xforms-value-changed"> 
		        <xforms:script id="xformsScript1">iptKeywordxforms_value_changed(event)</xforms:script> 
		      </xforms:action> 
		    </xforms:input>  
        </item>
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdArrange" data="dArrange" onRowDblClick="grdArrangeRowDblClick"> 
      <column ref="recNo" type="ro" width="40" label="序号" show-index="true"/>  
      <column id="gridColumn1" ref="fBoardroom" label="会议室" type="ro" width="100"/>  
      <column id="gridColumn2" ref="fMeetName" label="会议主题" type="ro" width="100"/>  
      <column id="gridColumn3" ref="fBeginTime" label="开始时间" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/>  
      <column id="gridColumn4" ref="fEndTime" label="结束时间" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/>  
      <column id="gridColumn5" ref="fArrTime" label="安排时间" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/>  
      <column id="gridColumn7" ref="fArrPsnName" label="安排人" type="ro"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default2"> 
          <xhtml:td id="td1" style="height:35px;width:160px"> 
            <place control="tbrArrange" id="controlPlace2"/> 
          </xhtml:td>  
        </xhtml:tr>  
        <xhtml:tr id="default3"> 
          <xhtml:td id="td3" > 
            <place control="grdArrange" id="controlPlace3" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
        <xhtml:tr> 
          <xhtml:td height="36px"> 
          <xui:place control="vBar" id="controlPlace1" style="height:100%;width:100%;"></xui:place></xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  <xui:view auto-load="true" id="vBar" class="xui-container">
   <layout type="absolute" style="position:relative;height:100%;width:100%;" id="layout1"><xui:place control="trgOK" id="controlPlace4" style="position:absolute;top:5px;left:348px;"></xui:place>
  <xui:place control="trgCancel" id="controlPlace5" style="position:absolute;top:5px;left:496px;"></xui:place></layout>
  <xforms:trigger id="trgOK">
				
			
   <xforms:label id="xuiLabel1">确定</xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2">boardroomUseArrange.trgOKClick(event)</xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="trgCancel">
				
			
   <xforms:label id="xuiLabel2">取消</xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3">boardroomUseArrange.trgCancelClick(event)</xforms:script></xforms:action></xforms:trigger></xui:view></xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="boardroomUseArrange.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/> 
  </xui:resource> 
</xui:window>

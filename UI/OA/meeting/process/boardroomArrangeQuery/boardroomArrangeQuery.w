<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="width:150px;top:275px;height:auto;left:86px;"> 
    <data xmlns="" id="dReport" component="/UI/system/components/reportData.xbl.xml#data">  
      <source> 
        <SQL id="default1"> 
          <DEFAULT id="default6"/>  
          <ORACLE id="default7"/>  
          <MSSQL id="default8"/> 
        </SQL> 
      <action id="default16" name="weekMeetingArrageReport" type="action" columns="WEEKDATE,FBOARDROOM,FMEETNAME,FAPPLYPSNNAME,FMEETPSNS,FARRBEGINTIME,FARRENDTIME"></action></source> 
    </data>  
    <xforms:action id="action4" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript4">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action>  
    <xforms:action id="action10" ev:event="onload"> 
      <xforms:script id="xformsScript9"/> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="true" id="dArrange" concept="OA_MT_RoomArrange"
      store-type="simple" confirm-refresh="false"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTRoomArrangeAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="dateBegin,dateEnd,dateRoomID,dateRoomName,roomDate,roomIDs,roomNames,listBegin,listEnd,listRoomID,weekDate,tempDateTimeOrcl,tempDateTimeSQL"
      src="" auto-load="true" id="dCondition" store-type="simple" confirm-refresh="false"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('dCondition')/dateBegin" type="xs:date"/>  
    <xforms:bind nodeset="instance('dCondition')/dateEnd" type="xs:date"/>  
    <xforms:bind nodeset="instance('dCondition')/roomDate" type="xs:date"/>  
    <xforms:bind nodeset="instance('dCondition')/listBegin" type="xs:date"/>  
    <xforms:bind nodeset="instance('dCondition')/listEnd" type="xs:date"/>  
    <xforms:bind nodeset="instance('dCondition')/weekDate" type="xs:date"/>  
    <data component="/UI/system/components/data.xbl.xml#bizData" sytle="width:100%;"
      offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dBoardroom"
      concept="OA_MT_Boardroom" store-type="simple" order-by="fCode:asc" confirm-refresh="false"> 
      <reader id="default2" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="true" id="dList" concept="OA_MT_RoomArrange"
      confirm-refresh="false"> 
      <reader id="default3" action="/OA/meeting/logic/action/queryMTRoomArrangeAction"/>  
      <rule relation="fBeginTime" readonly="true()"/>  
      <rule relation="fEndTime" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="true" id="dRoomBoardroom" concept="OA_MT_Boardroom"
      store-type="simple" order-by="fCode:asc" confirm-refresh="false"> 
      <reader id="default8" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="true" id="dDateBoardroom" concept="OA_MT_Boardroom"
      store-type="simple" order-by="fCode:asc" confirm-refresh="false"> 
      <reader id="default9" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="vArrangeList"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrListBar"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar3"
          data="dList"> 
          <item name="refresh-item" id="barItem26"/>  
          <item name="custom-page-item" id="pageItem" page-count="5"/>  
          <item> 
            <xforms:input id="iptListBegin" ref="data('dCondition')/listBegin" format="yyyy-MM-dd"
              auto-size="true"> 
              <xforms:action id="action6" ev:event="xforms-value-changed"> 
                <xforms:script id="xformsScript5">iptListBeginxforms_value_changed(event)</xforms:script> 
              </xforms:action> 
            </xforms:input> 
          </item>  
          <item> 
            <xforms:input id="iptListEnd" format="yyyy-MM-dd" ref="data('dCondition')/listEnd"
              auto-size="true"> 
              <xforms:action id="action7" ev:event="xforms-value-changed"> 
                <xforms:script id="xformsScript6">iptListEndxforms_value_changed(event)</xforms:script> 
              </xforms:action> 
            </xforms:input> 
          </item>  
          <item> 
            <xhtml:div style="width:120px;" component="/UI/system/components/select.xbl.xml#gridSelect"
              id="slcListRoom" ref="data('dCondition')/listRoomID" onCloseup="slcListRoomCloseup"
              auto-size="true"> 
              <xforms:label ref="fName" id="xuiLabel6"/>  
              <xforms:value ref="rowid" id="default19"/>  
              <xforms:itemset id="default20" data="dBoardroom"> 
                <xforms:column ref="rowid" visible="false" id="default22"/>  
                <xforms:column ref="fName" id="default23"/> 
              </xforms:itemset> 
            </xhtml:div> 
          </item> 
        </xui:bar> 
      </xhtml:div> 
    </xui:view>  
    <xui:view auto-load="true" id="vRoomBar"> 
      <xforms:input id="iptRoomBegin" ref="data('dCondition')/dateBegin" auto-size="true"
        format="yyyy-MM-dd"> 
        <xforms:action id="action8" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript7">iptRoomBeginxforms_value_changed(event)</xforms:script> 
        </xforms:action> 
      </xforms:input>  
      <xforms:input id="iptRoomEnd" auto-size="true" format="yyyy-MM-dd" ref="data('dCondition')/dateEnd"> 
        <xforms:action id="action9" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript8">iptRoomEndxforms_value_changed(event)</xforms:script> 
        </xforms:action> 
      </xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" sytle="width:120px;"
        id="slcRoomBoardroom" ref="data('dCondition')/dateRoomID" multi-select="false"
        auto-size="true" onCloseup="slcRoomBoardroomCloseup"> 
        <xforms:label ref="fName" id="xuiLabel4"/>  
        <xforms:value ref="rowid" id="default4"/>  
        <xforms:itemset id="default5" data="dRoomBoardroom" auto-load-data="false"> 
          <xforms:column ref="rowid" visible="false" id="default12"/>  
          <xforms:column ref="fName" id="default13"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:trigger id="trgApply"> 
        <xforms:label id="xuiLabel5">会议室申请</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action1"> 
          <xforms:script id="xformsScript10">trgApplyDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;" id="layout1" type="excel" src="roomQuery.xls"> 
        <place control="trgApply" id="controlPlace3"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vDateBar"> 
      <xforms:input id="iptRoomDate" ref="data('dCondition')/roomDate" auto-size="true"
        format="yyyy-MM-dd"> 
        <xforms:action id="action3" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript2">iptRoomDatexforms_value_changed(event)</xforms:script> 
        </xforms:action> 
      </xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="slcDateBoardroom"
        ref="data('dCondition')/roomIDs" onCloseup="slcDateBoardroomCloseup" auto-size="true"
        multi-select="true" appearance="full"> 
        <xforms:label ref="fName" id="xuiLabel7"/>  
        <xforms:value ref="rowid" id="default10"/>  
        <xforms:itemset id="default11" data="dDateBoardroom" auto-load-data="true"> 
          <xforms:column ref="fName" id="default14"/>  
          <xforms:column ref="rowid" visible="false" id="default15"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <layout style="height:100%;" id="layout3" type="excel" src="dateQuery.xls"> 
        <place control="iptRoomDate" id="controlPlace5" style="width:140px;"/>  
        <place control="slcDateBoardroom" id="controlPlace6" style="width:140px;"/>  
        <place control="treeSelect1" id="controlPlace2" style="width:140px;"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdList" data="dList"> 
      <column ref="recNo" label="序号" show-index="true"/>  
      <column id="gridColumn10" ref="fBoardroom" label="会议室" type="ro" width="90"/>  
      <column id="gridColumn15" ref="fMeetName" label="会议主题" type="ro" width="130"/>  
      <column id="gridColumn11" ref="fBeginTime" label="开始时间" type="dateTime"
        width="100" format="yyyy-MM-dd hh:mm"/>  
      <column id="gridColumn12" ref="fEndTime" label="结束时间" type="dateTime" width="100"
        format="yyyy-MM-dd hh:mm"/>  
      <column id="gridColumn8" ref="fUseOrgName" label="使用部门" type="ro" width="100"/>  
      <column id="gridColumn9" ref="fUsePsnName" label="使用人" type="ro" width="90"/>  
      <column id="gridColumn13" ref="fPhone" label="电话" type="ro" width="100"/>  
      <column id="gridColumn14" ref="fRemark" label="备注" type="ro"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrReport"> 
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#printBar" id="printBar1"
        report="mixedChart"> 
        <item name="report-page-setup-item" id="barItem1"/>  
        <item name="report-preview-item" id="barItem2"/>  
        <item name="report-print-item" id="barItem3"/>
      </xui:bar>  
      <xui:bar component="/UI/system/components/reportBar.xbl.xml#exportBar" id="exportBar1"
        report="mixedChart"> 
        <item name="report-export-pdf-item" id="barItem4"/>  
        <item name="report-export-word-item" id="barItem5"/>  
        <item name="report-export-excel-item" id="barItem6"/>
      </xui:bar>
    </xhtml:div>  
    <xui:view auto-load="true" id="vWeekArrage"> 
      <xhtml:div component="/UI/system/components/report.xbl.xml#report" src="weekBoardroomArrage.xls"
        report-name="周会议安排" auto-load="true" id="mixedChart" style="width:100%;height:100%;"
        data-list="dReport"> 
        <mapping id="default6"> 
          <data id="dReport" path="record"> 
            <WEEKDATE path="WEEKDATE" id="default72"/>  
            <FBOARDROOM path="FBOARDROOM" id="default73"/>  
            <FMEETNAME path="FMEETNAME" id="default74"/>  
            <FMEETPSNS path="FMEETPSNS" id="default75"/>  
            <FARRBEGINTIME path="FARRBEGINTIME" id="default76"/>  
            <FARRENDTIME path="FARRENDTIME" id="default77"/>  
            <FAPPLYPSNNAME path="FAPPLYPSNNAME" id="fapplypsnname"/> 
          </data> 
        </mapping> 
      </xhtml:div>  
      <xui:layout id="layout21" style="width:100%;height:100%;"> 
        <place control="mixedChart" id="mixedControlPlace" style="width:100%;height:100%"/> 
      </xui:layout> 
    </xui:view>  
    <xui:view id="vDateFilter"> 
      <xforms:input id="weekRoomDate" ref="data('dCondition')/weekDate" auto-size="false"
        style="width:120px;" format="yyyy-MM-dd"> 
        <xforms:action id="weekAction" ev:event="xforms-value-changed"> 
          <xforms:script id="xformsScript2">weekRoomDateXformsValueChanged(event)</xforms:script> 
        </xforms:action> 
      </xforms:input>  
      <layout style="height:100%;position:relative;width:100%;" id="layout1" type="absolute"> 
        <xhtml:label id="htmlLabel1" style="position:absolute;font-size:9pt;width:63px;top:8px;left:2px;"
          class="xui-label">会议日期:</xhtml:label>
        <place control="weekRoomDate" id="controlPlace3" style="position:absolute;width:113px;top:4px;left:62px;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabDateQuery" selected="false"> 
          <xui:label id="xuiLabel1">日程安排</xui:label>  
          <xhtml:table id="table3" style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr id="default25" style="height:35px"> 
              <xhtml:td id="td9" colspan="2"> 
                <place control="vRoomBar" id="controlPlace1"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default26"> 
              <xhtml:td id="td11" colspan="2"> 
                <xhtml:iframe name="dateIframe" style="width:100%;height:100%;" frameborder="no"
                  scrolling="yes"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabArrange"> 
          <xui:label id="xuiLabel2">会议室安排</xui:label>  
          <xhtml:table id="table3" border="0" style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr id="default25" style="height:35px"> 
              <xhtml:td id="td9" colspan="2"> 
                <place control="vDateBar" id="ctrlDateBar"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default26"> 
              <xhtml:td id="td11" style="height:430px" colspan="2"> 
                <xhtml:iframe name="roomIframe" style="width:100%;height:100%;" frameborder="no"
                  scrolling="yes"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <xforms:action id="action5" ev:event="xforms-select"> 
            <xforms:script id="xformsScript3">tabArrangexforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab>  
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel3">列表</xui:label>  
          <xhtml:table id="table2" style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr id="default17"> 
              <xhtml:td id="td5" style="height:35px" colspan="2"> 
                <place control="vArrangeList" id="controlPlace20"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default18"> 
              <xhtml:td id="td7" colspan="2"> 
                <place control="grdList" id="controlPlace25" style="width:100%;height:100%;"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table>  
          <xforms:action id="action2" ev:event="xforms-select"> 
            <xforms:script id="xformsScript1">tabListxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab>  
        <xui:tab id="tabPage1" xforms-select="boardroomArrangeQuery.tabPage1Select"> 
          <xui:label id="xuiLabel8">周会议安排</xui:label>  
          <xhtml:table id="weekArrage" border="0" style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td id="weektd" style="height:35px"> 
                <place control="tbrReport" id="weekTar"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td id="weekTdDate" style="height:35px"> 
                <place control="vDateFilter" id="weekDateFilter"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td align="center" style="height:390px"> 
                <place control="vWeekArrage" id="controlPlace7"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="boardroomArrangeQuery.js"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="boardroomArrangeQuery.js"/> 
  </resource> 
</xui:window>

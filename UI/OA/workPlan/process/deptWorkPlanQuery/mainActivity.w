<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:244px;left:316px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="bizData1" concept="OA_GZJH" relations="" order-by="fBizState:asc;fJHZT:desc"> 
      <reader id="default4" action="/OA/workPlan/logic/action/queryOA_GZJHAction"/>  
      <writer id="default5" action="/OA/workPlan/logic/action/saveOA_GZJHAction"/>  
      <creator id="default6" action="/OA/workPlan/logic/action/createOA_GZJHAction"/>  
      <filter name="filter0" id="filter1">fGZJHLX = '部工作计划'</filter>  
      <rule id="dataBizRule1" concept="OA_GZJH" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="人员选择" width="450px" height="350px" modal="true" id="dlgSelectPsn" url="/appCommon/dialogs/orgSelectDialog/orgSingleSelect/mainActivity.w" onSend="dlgSelectPsnSend" onReceive="dlgSelectPsnReceive"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/appCommon/components/standardProcessQueryBar.xbl.xml#standardProcessQueryBar" id="standardProcessQueryBar1" data="bizData1" execute-concept="OA_GZJH_Execute" smart-relations="fJHZT" date-relation1="fCreateTime" date-filter-mode="single"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="bizData1"> 
      <column ref="recNo" label="序号" show-index="true"/>  
      <xui:column id="gridColumn11" ref="fBizStateName" label="状态" type="ed" width="40"/>  
      <xui:column id="gridColumn6" ref="fJHZT" label="计划主题" type="ed" width="300"/>  
      <!--      <xui:column id="gridColumn4" ref="fDD" label="地点" type="ed" width="50" style="top:0;left:0;"/>  -->  
      <xui:column id="gridColumn1" ref="fJHKSRQ" label="计划开始日期" type="date" sort-datatype="str" width="80"/>  
      <xui:column id="gridColumn2" ref="fJHJSRQ" label="计划结束日期" type="date" width="80"/>  
      <xui:column id="gridColumn12" ref="fCreatePsnName" label="编制人员" type="ed" width="60"/>  
      <xui:column id="gridColumn13" ref="fCreateTime" label="编制时间" type="dateTime" width="100" format="yyyy-MM-dd hh:mm"/> 
    </xhtml:div>  
    <xforms:textarea ref="data('bizData1')/fGZNR" id="xformsTextarea1" auto-size="true"/>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table id="table1" style="width:100%;;"> 
        <xhtml:tr id="default1"/>  
        <xhtml:tr id="default2"/>  
        <xhtml:tr id="default3"/> 
      </xhtml:table>  
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="70%" mode="vert" has-drag-bar="true" has-arrow-button="true" id="VSplitter1" style="width:100%;height:100%;"> 
        <xhtml:div region="top" id="div5"> 
          <xhtml:div style="width:100%;height:100%" id="div6"> 
            <xui:place control="toolbars1" id="controlPlace1"/>  
            <xui:place control="grid1" id="controlPlace4" style="width:100%;height:92%;"/> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="bottom" id="div7"> 
          <xhtml:div style="width:100%;height:100%" id="div8"> 
            <xhtml:table id="table2" style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr id="default9"> 
                <xhtml:td id="td1"> 
                  <xui:place control-label="xformsTextarea1" style="font-size:10pt;" id="controlLabel2" label="计划详细内容："/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr id="default10"> 
                <xhtml:td id="td3" style=";"> 
                  <xui:place control="xformsTextarea1" id="controlPlacex" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <place control="dlgSelectPsn" id="controlPlace4" style="top:278px;left:253px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>

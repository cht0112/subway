<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:429px;left:6px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="to_right,to_left" auto-load="true" id="data2" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataBizRule1" column="to_right" readonly="not(call('allowToRight'))"/>  
      <rule id="dataBizRule2" column="to_left" readonly="not(call('allowToLeft'))"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="sFID,sFName,sID,sName" src="" auto-load="false" id="main"/>  
    <xforms:action id="action1" ev:event="xforms-model-construct"> 
      <xforms:script id="xformsScript5">orgSelect.model1ModelConstruct(event)</xforms:script> 
    </xforms:action>  
    <xforms:action id="action2" ev:event="onload"> 
      <xforms:script id="xformsScript6">orgSelect.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" style="width:100%;height:100%;"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="组织搜索" width="596px" height="214px" modal="false" id="wdSearchOrg" url="/SA/OPM/dialogs/searchOrg/searchOrg.w" onReceive="orgSelect.wdSearchOrgReceive" dialogUpdate="true"/>  
    <xhtml:div id="orgMemberTree" component="/UI/system/components/orgTree.xbl.xml#orgTree" include-disable="false" style="height:100%"> 
      <data id="orgTreeData" component="/UI/system/components/data.xbl.xml#bizData" auto-load="true"/>  
      <xhtml:div style="background-color: white; overflow: auto;width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" appearance="tree" data="orgTreeData" onRowDblClick="addCurrentExecutor" onAfterIndexChanged="orgSelect.grid1AfterIndexChanged" id="allOrgGrid"> 
        <column ref="sName" type="tree" readonly="true"/> 
      </xhtml:div> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid1" data="main" onRowDblClick="removeCurrentExecutor"> 
      <xui:column id="gridColumn1" ref="sFID" label="fid" type="ed" width="100px" visible="false" readonly="true"/>  
      <xui:column id="gridColumn2" ref="sFName" label="组织全路径" type="ed" width="300px" readonly="true"/> 
    </xhtml:div>  
    <xforms:trigger id="addExecutorTrigger" ref="data('data2')/to_right" style="height: 25px; margin: 0; padding: 2px 0 0 0;"> 
      <xforms:label id="xuiLabel3"> 
        <xhtml:b>&gt;</xhtml:b> 
      </xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action3"> 
        <xforms:script id="xformsScript1">addExecutorTriggerClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="deleteExecutorTrigger" ref="data('data2')/to_left" style="height: 25px; margin: 0; padding: 2px 0 0 0;"> 
      <xforms:label id="xuiLabel4"> 
        <xhtml:b>&lt;</xhtml:b> 
      </xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action4"> 
        <xforms:script id="xformsScript2">deleteExecutorTriggerClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger5"> 
      <xforms:label id="xuiLabel5">确定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action5"> 
        <xforms:script id="xformsScript3">trigger5Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger6"> 
      <xforms:label id="xuiLabel6">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action6"> 
        <xforms:script id="xformsScript4">trigger6Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xui:layout style="width:100%;height:100%;" id="rootLayout"> 
      <xhtml:table id="table1" style="width:100%;height:100%; table-layout: fixed" border="0" cellpadding="0" cellspacing="8" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default1"> 
          <xhtml:td id="td1" width="260px"> 
            <xhtml:table id="table33" style="width:100%;height:100%;table-layout:fixed" border="0" cellspacing="0" cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td height="24px"> 
                  <xhtml:label>快速定位：</xhtml:label>  
                  <xhtml:input id="searchText" style="width:140px; border: 0; border-bottom: 1px solid #c0c0c0" onkeydown="orgSelect.searchTextKeydown(event)"/>  
                  <xhtml:button id="searchButton" class="hand_cursor" style="border: 0; background: transparent" onclick="orgSelect.searchButtonOnclick(event)"> 
                    <xhtml:img src="/UI/system/images/process/select0.gif"/> 
                  </xhtml:button> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td style="border: 1px solid #c8c8c8"> 
                  <xui:place control="orgMemberTree" style="width:100%;height:100%"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td>  
          <xhtml:td id="td2" align="center" width="35px" valign="middle"> 
            <xui:place control="addExecutorTrigger" id="controlPlace3" style="width:30px;"/>  
            <br/>  
            <xui:place control="deleteExecutorTrigger" id="controlPlace4" style="width:30px;"/> 
          </xhtml:td>  
          <xhtml:td id="td3"> 
            <xui:place control="grid1" id="controlPlace5" style="width:100%;height:100%"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr height="22px"> 
          <xhtml:td colspan="3" align="right"> 
            <xhtml:table cellpadding="0" cellspacing="0" border="0" style="width:100%;height:100%;table-layout:fixed"> 
              <xhtml:tr> 
                <xhtml:td align="right"> 
                  <xui:place control="trigger5" id="controlPlace5" style="width: 75px;margin-right:8px;"/> 
                </xhtml:td>  
                <xhtml:td align="right" width="75px"> 
                  <xui:place control="trigger6" id="controlPlace6" style="width: 75px;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <xui:place control="wdSearchOrg"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="orgSelect.js"/>  
    <xhtml:script id="htmlScript2" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>

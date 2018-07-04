<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:448px;left:497px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="inputValue" src="" auto-load="false" id="searchData" store-type="simple" auto-new="true"/>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="personListData" concept="OA_SD_especialSchedulePerson"> 
      <creator id="default1" action="/OA/schedule/logic/action/createEspecialSchedulePersonAction"/>  
      <reader id="default2" action="/OA/schedule/logic/action/queryEspecialSchedulePersonAction"/>  
      <writer id="default3" action="/OA/schedule/logic/action/saveEspecialSchedulePersonAction"/>  
      <calculate-relation relation="checkbox" type="xs:string"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="personListData"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>
  <item name="next-page-item" id="barItem1"></item>
  <item name="all-page-item" id="barItem2"></item>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem1">
          <xforms:input id="input1" ref="data('searchData')/inputValue"/>
        </item>  
        <item id="customBarItem2">
          <xforms:trigger id="trigger4" appearance="image" src="/UI/OA/common/images/search.png"> 
            <xforms:label id="xuiLabel4">trigger</xforms:label>  
            <xforms:action id="action6" ev:event="DOMActivate">
              <xforms:script id="xformsScript6">especialPersonListDialog.trigger4Click(event)</xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="personListData" onRowDblClick="especialPersonListDialog.grid1RowDblClick"> 
      <xui:column ref="checkbox" type="checkbox" width="30" label="#master_checkbox"/>  
      <xui:column id="gridColumn2" ref="fExecutorName" label="人员名称" type="ro" width="407"/> 
    </xhtml:div>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <xforms:trigger id="trigger1"> 
        <xforms:label id="xuiLabel1">刷新</xforms:label>  
        <xforms:action id="action2" ev:event="DOMActivate">
          <xforms:script id="xformsScript2">especialPersonListDialog.trigger1Click(event)</xforms:script>
        </xforms:action>
      </xforms:trigger>  
      <xforms:trigger id="trigger2"> 
        <xforms:label id="xuiLabel2">确定</xforms:label>  
        <xforms:action id="action3" ev:event="DOMActivate">
          <xforms:script id="xformsScript3">especialPersonListDialog.trigger2Click(event)</xforms:script>
        </xforms:action>
      </xforms:trigger>  
      <xforms:trigger id="trigger3"> 
        <xforms:label id="xuiLabel3">取消</xforms:label>  
        <xforms:action id="action4" ev:event="DOMActivate">
          <xforms:script id="xformsScript4">especialPersonListDialog.trigger3Click(event)</xforms:script>
        </xforms:action>
      </xforms:trigger>  
      <layout id="layout1" style="position:relative;width:100%;height:100%;" type="absolute"> 
        <xui:place control="trigger1" id="controlPlace4" style="position:absolute;top:19px;left:20px;width:60px;"/>  
        <xui:place control="trigger2" id="controlPlace5" style="position:absolute;top:19px;width:60px;left:291px;"/>  
        <xui:place control="trigger3" id="controlPlace6" style="position:absolute;top:19px;width:60px;left:384px;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="position:relative;height:100%;width:100%;" id="rootLayout" type="flow"> 
      <xhtml:table style="width:100%;height:100%;table-layout:fixed; border:0;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr style="width:100%;height:35px;"> 
          <xhtml:td style="height:35px;">
            <xui:place control="toolbars1" id="controlPlace1" style="width:398px;"/>
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td height="350px">
            <xui:place control="grid1" id="controlPlace2" style="width:100%;height:100%;"/>
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr > 
          <xhtml:td style="height:30px;"> 
            <xui:place control="view1" id="controlPlace3" style="width:100%;height:100%;"/>
          </xhtml:td> 
        </xhtml:tr> 
        <xhtml:tr>
        <xhtml:td></xhtml:td>
        </xhtml:tr>
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="especialPersonListDialog.w.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:script id="htmlScript2" src="especialPersonListDialog.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

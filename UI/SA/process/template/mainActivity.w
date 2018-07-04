<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:525px;height:auto;left:38px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="main" style=";" concept="SA_ProcessTemplate" order-by="sCreateTime:desc" direct-delete="true" confirm-delete-text="确认要删除吗？"> 
      <reader id="default1" action="/system/logic/action/queryProcessTemplateAction"/>  
      <writer id="default2" action="/system/logic/action/saveProcessTemplateAction"/>  
      <creator id="default3" action="/system/logic/action/createProcessTemplateAction"/>  
      <filter name="filter1" id="filter1"><![CDATA[SA_ProcessTemplate.sTypeID IS NULL OR SA_ProcessTemplate.sTypeID = 'grid' OR SA_ProcessTemplate.sTypeID = 'graph']]></filter>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="modify,org" auto-load="true" id="button_status" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataBizRule1" column="modify" readonly="not(call('allowModify'))"/>  
      <rule id="dataBizRule1" column="org" readonly="not(call('allowOrg'))"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mainActivity.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" style=";" data="main" mode="IMG_TXT_LR"> 
        <item id="barItem1"> 
          <xforms:trigger id="insertItem1" appearance="image-text" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label>新建表格</xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate">
              <xforms:script id="xformsScript2"><![CDATA[mainActivity.insertItem1Click(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger> 
        </item>  
        <item> 
          <xforms:trigger id="insertItem2" appearance="image-text" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label><![CDATA[新建图形]]></xforms:label>  
            <xforms:action id="action4" ev:event="DOMActivate">
              <xforms:script id="xformsScript5"><![CDATA[mainActivity.insertItem2Click(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger> 
        </item>  
        <item> 
          <xforms:trigger id="modifyTemplate" ref="data('button_status')/modify" appearance="image-text" src="/UI/system/images/doc/modify_record.gif" dis-src="/UI/system/images/doc/modify_record_g.gif"> 
            <xforms:label id="xuiLabel7">修改</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action5"> 
              <xforms:script id="xformsScript3">mainActivity.modifyTemplateClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="delete-item" id="barItem3"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="refresh-item"/>  
        <item name="separator" id="separatorItem11"/>  
        <item id="toOrgItem"> 
          <xforms:trigger id="toOrgTrigger" style="height:23px;" ref="data('button_status')/org"> 
            <xforms:label>分配</xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript4">mainActivity.toOrgTriggerClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="customPageItem1" items="pre,page,next,ext"/>  
        <item name="separator" id="separatorItem3"/>  
        <item id="customBarItem2"> 
          <xhtml:input type="text" value="" id="inputSearch" class="xui-input" style="width:80px;" onkeydown="mainActivity.inputSearchKeydown(event)"/> 
        </item>  
        <item id="customBarItem1">
          <xforms:trigger id="trigger1" appearance="image-text" src="/UI/SA/OPM/images/search.gif"> 
            <xforms:label id="default4"><![CDATA[搜索]]></xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate">
              <xforms:script id="xformsScript2"><![CDATA[mainActivity.trigger1Click(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
        <item id="customBarItem4"></item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="main" onRowDblClick="mainActivity.grid1RowDblClick" edit-mode="true"> 
      <xui:column id="gridColumn1" ref="sName" label="模板名称" type="ed" width="208px" readonly="true"/>  
      <xui:column id="gridColumn6" ref="sTypeName" type="ro" width="100px" label="表现方式"/>
      <xui:column id="gridColumn4" ref="sProcessName" label="流程名称" type="ed" width="197px" readonly="true"/>  
      <xui:column id="gridColumn3" ref="sActivityName" label="环节名称" type="ed" width="205px" readonly="true"/>  
      <xui:column id="gridColumn2" ref="sScopeName" label="类型" type="ed" width="100px" readonly="true"/>  
      <xui:column id="gridColumn5" ref="sCreatorName" label="创建者" type="ed" width="100px" readonly="true"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="定制流程模板" width="496px" height="414px" modal="true" id="detailDlg" url="/SA/process/template/detailData.w" left="0" top="0" onReceive="mainActivity.detailDlgReceive" minmaxable="false" closable="true" resizable="false" status="maximize" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="模板分配给组织" width="646px" height="419px" modal="true" id="windowDialog1" dialogUpdate="true"/>  
    <xui:layout style="width:100%;height:100%;" id="rootLayout"> 
      <xhtml:table id="table2" class="xui-container" style="height:100%;width:100%;table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="tr3"> 
          <xhtml:td id="td5" height="30px"> 
            <xui:place control="toolbars1" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr4"> 
          <xhtml:td id="td7"> 
            <xui:place control="grid1" id="controlPlace1" style="width:100%;height:100%;"/>  
            <xui:place control="windowDialog1" id="controlPlace3" style="top:219px;left:307px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <xui:place control="detailDlg" id="controlPlace4" style="top:191px;left:124px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:71px;left:206px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="checkBox,label,url,process,activity,isFolder,activityFName"
      auto-load="false" id="dFunTree" store-type="grid"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="checkBox,label,url,process,activity,isFolder,activityFName"
      auto-load="false" id="dFunList" store-type="grid"/>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">selectSingleProcess.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;" border-size="8px"> 
        <top size="35px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar2" separator-size="16">
            <xui:place control="inputSearch"/>
            <xui:place control="imageSearch"/>
          </xhtml:div>  
        </top>  
        <center id="borderLayout-center1"> 
          <place control="gridTree" style="width:100%;height:100%;" id="controlPlace2"/>  
          <place control="gridList" style="width:100%;height:100%;display:none;"
            id="controlPlace3"/> 
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar1" style="float:right;margin:10px 0;"> 
            <xui:place control="btnOK" id="controlPlace5"/>  
            <xui:place control="btnCancel" id="controlPlace4"/> 
          </xhtml:div> 
        </bottom> 
      </xhtml:div>  
      <xui:place control="windowReceiver" id="controlPlace6" style="top:158px;left:145px;"/> 
    </xui:layout>  
    <xhtml:input type="text" id="inputSearch" class="xui-input" style="width:150px;"
      onkeydown="selectSingleProcess.inputSearchKeydown(event)" onclick="(event)"
      onchange="(event)"/>  
          <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow" style="width:24px;"> 
            <xforms:label id="xuiLabel3"><![CDATA[搜索]]></xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate">
              <xforms:script id="xformsScript2"><![CDATA[selectSingleProcess.imageSearchClick(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger>
    <!-- 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="customBarItem1"> 
          <xhtml:input type="text" value="" id="inputSearch" class="xui-input" style="width:150px;"
            onkeydown="selectSingleProcess.inputSearchKeydown(event)" onclick="(event)"
            onchange="(event)"/>
        </item>  
        <item id="customBarItem3">
          <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow" style="width:24px;"> 
            <xforms:label id="xuiLabel3"><![CDATA[搜索]]></xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate">
              <xforms:script id="xformsScript2"><![CDATA[selectSingleProcess.imageSearchClick(event)]]></xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
      </xui:bar> 
    </xhtml:div>
    -->  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridTree" data="dFunTree" appearance="tree" multi-selection="false" cascade="true"
      onShowNodeImg="selectSingleProcess.gridTreeShowNodeImg" onRowDblClick="selectSingleProcess.gridTreeRowDblClick"
      class="ui-light"> 
      <xui:column id="gridColumn6" ref="checkBox" type="ro" visible="false" width="30px"
        align="center"/>  
      <xui:column id="gridColumn11" ref="label" label="功能" type="tree" readonly="true"/>  
      <xui:column id="gridColumn8" ref="url" label="url" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn12" ref="process" label="process" type="ro" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn10" ref="activity" label="activity" type="ro" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn9" ref="isFolder" label="isFolder" type="ro" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn6" ref="activityFName" label="activityFName" type="ro"
        width="100px" visible="false"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridList" data="dFunList" multi-selection="false" onRowDblClick="selectSingleProcess.gridListRowDblClick" space-column="false" class="grid-compact"> 
      <xui:column id="gridColumn0" ref="checkBox" label="#master_checkbox" type="ch"
        width="30px" align="center" visible="false"/>  
      <xui:column id="gridColumn1" ref="label" label="功能" type="ro" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn2" ref="url" label="url" type="ro" width="100px" visible="false"/>  
      <xui:column id="gridColumn3" ref="process" label="process" type="ro" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn4" ref="activity" type="ro" width="100px" visible="false"
        label="activity"/>  
      <xui:column id="gridColumn5" ref="isFolder" label="isFolder" type="ro" width="100px"
        visible="false"/>  
      <xui:column id="gridColumn7" ref="activityFName" label="功能" type="ro"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver" onReceive="selectSingleProcess.receiverReceive"/>  
    <xforms:trigger id="btnCancel" appearance="minimal"> 
      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4"><![CDATA[selectSingleProcess.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnOK" class="button-green"> 
      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3"><![CDATA[selectSingleProcess.btnOKClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="selectSingleProcess.js"/> 
  </xui:resource> 
</xui:window>

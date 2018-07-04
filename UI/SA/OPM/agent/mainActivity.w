<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:179px;left:202px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAgent" concept="SA_OPAgent" limit="20" confirm-refresh="false"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPAgentAction"/>  
      <writer id="default2" action="/SA/OPM/logic/action/saveOPAgentAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation1"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation2"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mainActivity.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="40px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="8" style="float:left;"> 
            <xui:place control="btnAppendAgents" id="controlPlace5"/>  
            <xui:place control="btnSaveAgents" id="controlPlace2"/>  
            <xui:place control="btnCancelAgent" id="controlPlace6"/>  
            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" separator-size="4" style="margin:0px 0px 0px 0px;"> 
              <xhtml:input type="text" value="" id="inputSearch" class="xui-input" onkeydown="mainActivity.inputSearchKeydown(event)" style="width:120px;;"/>  
              <xui:place control="imageSearch" id="controlPlace9" style="height:25px;width:25px;"/>  
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="2" style="margin:0px 0px 0px 20px;">
                <xhtml:input type="checkbox" value="" name="" id="cbShowHistory" onclick="mainActivity.cbShowHistoryClick(event)"/>  
                <xhtml:label id="label1" class="xui-label" for="cbShowHistory">显示代理历史</xhtml:label>
              </xhtml:div>
            </xhtml:div> 
          </xhtml:div>  
          <xui:place control="pagination1" id="controlPlace10" style="width:200px;height:30px;float:right;"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="gridAgent" id="controlPlace1" style="height:100%;width:100%;"/> 
        </center> 
      </xhtml:div>  
      <xui:place control="wdAppendAgents" id="controlPlace3" style="top:270px;left:221px;"/>  
      <xui:place control="wdAgentProcess" id="controlPlace4" style="top:271px;left:276px;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridAgent" data="dAgent" edit-mode="true" class="grid-compact" header-row-height="30" row-height="30"> 
      <xui:column id="gridColumn0" label="#master_checkbox" type="ch" width="30px" ref="calcCheckBox" align="center"/>  
      <xui:column id="gridColumn5" ref="calcIndex" label="序号" type="ro" width="30px" show-index="true"/>  
      <xui:column id="gridColumn4" ref="sValidState" label="状态" type="html" width="40px" onRender="mainActivity.gridAgentSValidStateRender" align="center" /><xui:column id="gridColumn1" ref="sOrgFName" label="委托岗位" type="ro" width="200px" /><xui:column id="gridColumn9" ref="processLabel" label="委托细项" type="outputbtn" width="300px" onButtonClick="mainActivity.gridAgent_processLabelButtonClick" /><xui:column id="gridColumn6" ref="agentPersonName" label="代理人" type="ro" width="60px" />  
        
        
        
      <xui:column id="gridColumn2" ref="sStartTime" label="开始时间" type="dateTime" width="110px" format="yyyy-MM-dd hh:mm" readonly="false"/>  
      <xui:column id="gridColumn3" ref="sFinishTime" label="结束时间" type="dateTime" width="110px" format="yyyy-MM-dd hh:mm" readonly="false"/>  
      <xui:column id="gridColumn10" ref="sCanTranAgent" label="允许转交" type="ch" width="55px" align="center" readonly="false"/>  
      <xui:column id="gridColumn7" ref="sCreatorName" label="创建人" type="ro" width="60px"/>  
      <xui:column id="gridColumn8" ref="sCreateTime" label="创建时间" type="date" width="110px" format="yyyy-MM-dd hh:mm" readonly="true"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="新建代理" width="746px" height="414px" modal="true" id="wdAppendAgents" url="/SA/OPM/agent/appendAgents.w" onReceive="mainActivity.wdAppendAgentsReceive" resizable="false" minmaxable="false" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="设置委托细项" width="696px" height="364px" modal="true" id="wdAgentProcess" url="/SA/OPM/agent/agentProcess.w" onReceive="mainActivity.wdAgentProcessReceive" dialogUpdate="true"/>  
    <xforms:trigger id="btnAppendAgents" appearance="image-text" icon-class="icon-system-plus" class="button-blue"> 
      <xforms:label id="xuiLabel2">新建</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript1">mainActivity.btnAppendAgentsClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnCancelAgent" appearance="image-minimal" image-text-mode="LR" icon-class="icon-system-minus"> 
      <xforms:label id="xuiLabel4">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action4"> 
        <xforms:script id="xformsScript3">mainActivity.btnCancelAgentClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="imageSearch" appearance="image" image-text-mode="LR" icon-class="icon-system-search" class="button-yellow"> 
      <xforms:label id="xuiLabel1">搜索</xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript5">mainActivity.imageSearchClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination1" align="right" data="dAgent" class="small" pre-label="上页" next-label="下页"/>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btnSaveAgents" appearance="image-text" image-text-mode="LR" operation-owner="dAgent" operation="save" class="button-green"> 
      <xforms:label id="default3"><![CDATA[保存]]></xforms:label> 
    </xforms:trigger> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>

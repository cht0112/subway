<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:92px;left:160px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dPersonMembers" concept="SA_OPOrg" confirm-refresh="false" limit="-1"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <calculate-relation relation="calcProcess" id="calculate-relation1"/>  
      <calculate-relation relation="calcProcessLabel" id="calculate-relation2"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation3"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation4"/>  
      <filter name="filterValidState" id="filter5">SA_OPOrg.sValidState = 1</filter>  
      <filter name="filterOperator" id="filter6">SA_OPOrg.sOrgKindID = 'psm' and SA_OPOrg.sPersonID = :operatorID()</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dCurrentAgents" concept="SA_OPAgent" limit="-1" confirm-refresh="false"> 
      <reader id="default2" action="/SA/OPM/logic/action/queryOPAgentAction"/>  
      <calculate-relation relation="calcCheckBox" id="calculate-relation5"/>  
      <calculate-relation relation="calcIndex" id="calculate-relation6"/>  
      <filter name="filterValidState" id="filter7">SA_OPAgent.sValidState = 1</filter>  
      <filter name="filterOperator" id="filter8">SA_OPAgent.sAgentID = :operatorID()</filter>  
      <filter name="filterTime" id="filter9">SA_OPAgent.sFinishTime is null or SA_OPAgent.sFinishTime &gt; :currentDateTime()</filter>  
      <filter name="filterCanTranAgent" id="filter10">SA_OPAgent.sCanTranAgent = 1</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="agentPersonID,agentPersonName,startTime,finishTime,canTranAgent" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rule id="dataRule1" column="startTime" type="xsd:dateTime"/>  
      <rule id="dataRule2" column="finishTime" type="xsd:dateTime"/>  
      <rule id="dataRule3" column="agentPersonName" readonly="true()" required="true()" alert="'请选择代理人！'"/>  
      <rows xmlns="" id="default3">  
        <row id="default4"> 
          <cell id="default5"/>  
          <cell id="default6"/>  
          <cell id="default7"/>  
          <cell id="default8"/>  
          <cell id="default9"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;" border-size="8"> 
        <top size="35px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" separator-size="4">
            <xui:place control="input1" id="controlPlace3" style="width:80px;"/>  
            <xui:place control="btnSelectAgentPerson" id="controlPlace10" style="width:85px;"/>  
            <xhtml:label id="label2" class="xui-label" style="font-size:12px;margin-left:10px;">开始时间</xhtml:label>  
            <xui:place control="input2" id="controlPlace11" style="width:140px;"/>  
            <xhtml:label id="label3" class="xui-label" style="font-size:12px;margin-left:10px;">结束时间</xhtml:label>  
            <xui:place control="input3" id="controlPlace12" style="width:140px;"/>  
            <xui:place control="checkbox1" id="controlPlace13" style="width:100px;font-size:12px;"/>
          </xhtml:div>
        </top>  
        <center id="borderLayout-center1"> 
          <xhtml:div id="divPersonMembers" class="xui-container" style="width:100%;height:60%;"> 
            <xui:place control="gridPersonMembers" id="controlPlace2" style="height:100%;width:100%;"/> 
          </xhtml:div>  
          <xhtml:div id="divCurrentAgents" class="xui-container" style="width:100%;height:40%;"> 
            <xui:place control="gridCurrentAgents" id="controlPlace8" style="height:100%;width:100%;"/> 
          </xhtml:div> 
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float:right;margin:10px 0;">
            <xui:place control="btnOK" id="controlPlace6"/>
            <xui:place control="btnCancel" id="controlPlace5"/>
          </xhtml:div>
        </bottom> 
      </xhtml:div>  
      <xui:place control="receiver" id="controlPlace1" style="position:absolute;top:229px;left:106px;"/>  
      <xui:place control="wdAgentProcess" id="controlPlace9" style="top:227px;left:244px;"/>  
      <xui:place control="wdSelectAgentPerson" id="controlPlace7" style="position:absolute;top:231px;left:172px;"/>
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="appendAgents.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="设置委托细项" width="696px" height="364px" modal="true" id="wdAgentProcess" url="/SA/OPM/agent/agentProcess.w" onReceive="appendAgents.wdAgentProcessReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridPersonMembers" data="dPersonMembers" edit-mode="true" header-row-height="25" row-height="25" class="grid-compact"> 
      <xui:column id="gridColumn3" ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn4" ref="calcIndex" label="序号" type="ro" width="30px" align="center" show-index="true"/>  
      <xui:column id="gridColumn1" ref="sFName" label="岗位" type="ro" width="300px"/>  
      <xui:column id="gridColumn2" ref="calcProcessLabel" label="委托细项" type="outputbtn" width="330px" onButtonClick="appendAgents.gridPersonMembers_calcProcessLabelButtonClick"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridCurrentAgents" data="dCurrentAgents" class="grid-compact" header-row-height="25" row-height="25"> 
      <xui:column id="gridColumn7" ref="calcCheckBox" label="#master_checkbox" type="ch" width="30px" align="center"/>  
      <xui:column id="gridColumn8" ref="calcIndex" label="序号" type="ro" width="30px" align="center" show-index="true"/>  
      <xui:column id="gridColumn5" ref="sOrgFName" label="代理的岗位" type="ro" width="300px"/>  
      <xui:column id="gridColumn6" ref="processLabel" label="委托细项" type="ro" width="330px"/> 
    </xhtml:div>  
    <xforms:trigger id="btnCancel" appearance="image-minimal"> 
      <xforms:label id="xuiLabel2"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2"><![CDATA[appendAgents.btnCancelClick(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnOK" class="button-green" appearance="image-text"> 
      <xforms:label id="xuiLabel3"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate">
        <xforms:script id="xformsScript3"><![CDATA[appendAgents.btnOKClick(event)]]></xforms:script>
      </xforms:action>
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/orgDialog.xbl.xml#orgDialog" title="选择代理人" width="500px" height="350px" modal="true" root-filter="SA_OPOrg.sParent is null" id="wdSelectAgentPerson" onReceive="appendAgents.wdSelectAgentPersonReceive"/>  
    <xforms:input id="input1" ref="data('dTemp')/agentPersonName"/>  
    <xforms:trigger id="btnSelectAgentPerson" appearance="image-text" class="button-blue"> 
      <xforms:label id="xuiLabel4">选择代理人</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action4"> 
        <xforms:script id="xformsScript1">appendAgents.btnSelectAgentPersonClick(event)</xforms:script>
      </xforms:action> 
    </xforms:trigger>  
    <xforms:input id="input2" ref="data('dTemp')/startTime" format="yyyy-MM-dd hh:mm"/>  
    <xforms:input id="input3" ref="data('dTemp')/finishTime" format="yyyy-MM-dd hh:mm"/>  
    <xforms:select id="checkbox1" ref="data('dTemp')/canTranAgent"> 
      <xforms:item id="selectItem1" style="width:80px;;"> 
        <xforms:label id="xuiLabel1">允许转交</xforms:label>  
        <xforms:value id="default10">1</xforms:value>
      </xforms:item> 
    </xforms:select>
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="appendAgents.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>

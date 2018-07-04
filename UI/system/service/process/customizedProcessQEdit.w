<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:model id="model1" component="/UI/system/components/quick/model.xbl.xml#model"
    style="width:104px;top:256px;height:139px;left:836px;"> 
    <xhtml:data component="/UI/system/components/quick/data.xbl.xml#dataQ" columns="unit,unit_label,execute_mode,execute_mode_label,is_customized"
      id="main"/>  
    <xhtml:data component="/UI/system/components/quick/data.xbl.xml#dataQ" columns="name,label"
      id="activities"/>  
    <xhtml:data component="/UI/system/components/quick/data.xbl.xml#dataQ" columns="label, value"
      id="executeMode" onLoad="customizedProcessQEdit.executeModeLoad"/> 
  </xui:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:select component="/UI/system/components/quick/select.xbl.xml#dselectQ" id="dselectQ2"
      class="xui-select" data="main" ref="unit" label-ref="unit_label" itemset="activities"
      itemset-value="name" itemset-label="label" onchange="customizedProcessQEdit.dselectQ2Change(event)"/>  
    <xhtml:select component="/UI/system/components/quick/select.xbl.xml#dselectQ" id="dselectQ3"
      class="xui-select" itemset="executeMode" itemset-label="label" itemset-value="value"
      data="main" label-ref="execute_mode_label" ref="execute_mode"/>
    <xhtml:button id="buttonQ1" class="xui-button select-button" onclick="customizedProcessQEdit.buttonQ1Click(event)">...</xhtml:button>
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver1" onReceive="customizedProcessQEdit.windowReceiver1Receive"/>
    <xhtml:button id="buttonQ2" class="xui-button" onclick="customizedProcessQEdit.buttonQ2Click(event)">确定</xhtml:button>
    <xhtml:button id="buttonQ3" class="xui-button" onclick="customizedProcessQEdit.buttonQ3Click(event)">取消</xhtml:button>
    <xui:layout style="height:100%;width:100%;padding: 0; margin: 0;" id="rootLayout"> 
      <xhtml:table id="table1" border="0" cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout:fixed;">
      	<xhtml:tr height="8px">
      		<xhtml:td style="width:8px;"></xhtml:td>
      		<xhtml:td style="width:70px;"></xhtml:td>
      		<xhtml:td></xhtml:td>
      		<xhtml:td style="width: 8px"></xhtml:td>
      	</xhtml:tr> 
        <xhtml:tr id="tr1" height="20px">
          <xhtml:td></xhtml:td>
          <xhtml:td id="td1">环节：</xhtml:td>  
          <xhtml:td id="td2" style="padding-left: 3px;"> 
            <xui:place control="dselectQ2" id="controlPlace2" style="width:100%;"/> 
          </xhtml:td>
          <xhtml:td style="width: 8px"></xhtml:td> 
        </xhtml:tr>  
      	<xhtml:tr height="8px">
      		<xhtml:td></xhtml:td>
      		<xhtml:td></xhtml:td>
      		<xhtml:td></xhtml:td>
      		<xhtml:td></xhtml:td>
      	</xhtml:tr> 
        <xhtml:tr id="tr4" height="40px">
          <xhtml:td></xhtml:td> 
          <xhtml:td id="td7">执行模式：</xhtml:td>  
          <xhtml:td id="td8" style="padding-left: 3px;">
            <xui:place control="dselectQ3" id="controlPlace3" style="width:100%;"/> 
          </xhtml:td> 
          <xhtml:td style="width: 8px"></xhtml:td>
        </xhtml:tr>  
        <xhtml:tr id="tr3" height="40px" valign="middle">
          <xhtml:td></xhtml:td> 
          <xhtml:td id="td5">执行者：</xhtml:td>  
          <xhtml:td id="td6" style="padding-left: 3px;">
            <xhtml:label id="label1" style="width: 160px; _width: 166px; display: inline-block;"/>
            <xui:place control="buttonQ1" id="controlPlace4" style="width:20px; display: inline;"/> 
          </xhtml:td> 
          <xhtml:td style="width: 8px"></xhtml:td>
        </xhtml:tr>  
        <xhtml:tr id="tr5" height="40px">
          <xhtml:td></xhtml:td> 
          <xhtml:td id="td9">允许修改：</xhtml:td>  
          <xhtml:td id="td10">
            <xhtml:input type="checkbox" value="" name="" id="chk1" onclick="customizedProcessQEdit.input1Click(event)"/> 
          </xhtml:td> 
          <xhtml:td style="width: 8px"></xhtml:td>
        </xhtml:tr>  
        <xhtml:tr id="tr6" valign="bottom">
          <xhtml:td></xhtml:td> 
          <xhtml:td id="td11" colspan="2" align="right" style="border-top: 2px solid #c8c8c8;_padding-bottom: 1px;">
            <xui:place control="buttonQ2" id="controlPlace6" style="display: inline; margin-right: 8px; width: 75px;"/>  
            <xui:place control="buttonQ3" id="controlPlace7" style="display: inline; width: 75px;"/> 
          </xhtml:td>
          <xhtml:td></xhtml:td> 
        </xhtml:tr> 
      	<xhtml:tr height="8px">
      		<xhtml:td></xhtml:td>
      		<xhtml:td></xhtml:td>
      		<xhtml:td></xhtml:td>
      		<xhtml:td></xhtml:td>
      	</xhtml:tr> 
      </xhtml:table>  
      <xui:place control="windowReceiver1" id="controlPlace5" style="top:330px;left:754px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="customizedProcessQEdit.js"/>
    <xhtml:style type="text/css"> <![CDATA[
    	.select-button {
    		font-family: Arial Black;
    		font-size: 8pt;
    	}
    	#buttonQ1 .xui-button-m-label {
    		font-family:Arial Black;
    		font-size:8pt;
    	}
    ]]> </xhtml:style> 
  </xui:resource> 
</xui:window>

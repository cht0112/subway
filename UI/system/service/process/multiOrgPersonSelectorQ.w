<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:model id="model1" component="/UI/system/components/quick/model.xbl.xml#model"
    style="width:104px;top:208px;height:139px;left:800px;"/>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/quick/orgTreeGrid.xbl.xml#orgTreeGridQ"
      id="orgTreeGridQ1"> 
      <xui:data component="/UI/system/components/quick/data.xbl.xml#bizDataQ" auto-load="false"
        id="bizDataQ1"> 
        <tree-option id="default1" root-filter="1=1"/> 
      </xui:data>  
      <xhtml:div component="/UI/system/components/quick/grid.xbl.xml#dtreeGridQ" style="width:100%;height:100%"
        id="dtreeGridQ1" data="bizDataQ1" multi-selection="true" onCheckRow="multiOrgPersonSelectorQ.orgTreeCheckRow"
        auto-load="false"> 
        <xui:column ref="sName" name="sName" label="名称" width="*" id="gridColumnQ1"/> 
      </xhtml:div> 
    </xhtml:div>  
    <xhtml:button id="buttonQ2" class="xui-button" onclick="multiOrgPersonSelectorQ.buttonQ2Click(event);">确定</xhtml:button>  
    <xhtml:button id="buttonQ3" class="xui-button" onclick="multiOrgPersonSelectorQ.buttonQ3Click(event);">取消</xhtml:button>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver2" onReceive="multiOrgPersonSelectorQ.windowReceiver2Receive"/>  
    <xui:layout style="height:100%;width:100%;overflow:hidden;" id="rootLayout"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" 
      	style="width:100%; height: 100%"
        id="border1">
        <center>
        	<xui:place control="orgTreeGridQ1" id="controlPlace1" style="width: 100%; height: 100%;"/> 
        </center>
        <bottom size="40px">
        	<xhtml:div align="right" >
        		<xui:place control="buttonQ2" id="controlPlace6" style="display: inline; margin-right: 8px; width: 75px;"/>  
            	<xui:place control="buttonQ3" id="controlPlace7" style="display: inline; width: 75px;"/>
        	</xhtml:div>
             
        </bottom>
      </xhtml:div>
    	
    	<!--  
      <xhtml:table id="table1" style="height:100%;width:100%;" cellspacing="0" cellpadding="0"
        border="0"
        component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="8px"> 
          <xhtml:td width="8px"/>  
          <xhtml:td/>  
          <xhtml:td width="8px"/> 
        </xhtml:tr>  
        <xhtml:tr id="tr1"> 
          <xhtml:td/>  
          <xhtml:td id="td2" align="center"> 
            <xui:place control="orgTreeGridQ1" id="controlPlace1" style="width: 100%; height: 100%;"/> 
          </xhtml:td>  
          <xhtml:td/> 
        </xhtml:tr>  
        <xhtml:tr id="tr2" height="40px" valign="bottom"> 
          <xhtml:td/>  
          <xhtml:td id="td4" align="right" style="_padding-bottom: 1px;"> 
            <xui:place control="buttonQ2" id="controlPlace6" style="display: inline; margin-right: 8px; width: 75px;"/>  
            <xui:place control="buttonQ3" id="controlPlace7" style="display: inline; width: 75px;"/> 
          </xhtml:td>  
          <xhtml:td/> 
        </xhtml:tr>  
        <xhtml:tr height="8px"> 
          <xhtml:td/>  
          <xhtml:td/>  
          <xhtml:td/> 
        </xhtml:tr> 
      </xhtml:table> 
      --> 
      <xui:place control="windowReceiver2" id="controlPlace2" style="top:214px;left:660px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="multiOrgPersonSelectorQ.js"/>  
    <xhtml:style type="text/css"> <![CDATA[
    	.xui-grid-bar {
    		text-align: left;
    		padding-left: 3px;    		
    	}
    ]]> </xhtml:style> 
  </xui:resource> 
</xui:window>
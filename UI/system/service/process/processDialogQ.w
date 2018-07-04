<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:model id="model1" component="/UI/system/components/quick/model.xbl.xml#model" style="top:293px;height:71px;left:187px;"/>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:button class="xui-button" id="cancel-button" onClick="processDialogQ.cancelButtonClick(event);">取消</xhtml:button>  
    <xhtml:button class="xui-button" id="ok-button" onclick="processDialogQ.okButtonClick(event);">确定</xhtml:button>  
    <xhtml:div component="/UI/system/components/quick/windowDialog.xbl.xml#windowDialogQ" modal="true" id="executorDlg" title="选择执行者" url="/UI/system/service/process/selectExecutorsQ.w" minmaxable="false" resizable="false" height="400" width="410" left="7" top="10" onReceive="processDialogQ.executorDlgReceive" show-title="false" status="maximize" reload-on-open="true"/>  
    <xui:layout style="height:410px; width:100%; padding: 8px; _height: 420px; overflow: hidden;" id="rootLayout"> 
      <xhtml:table cellpadding="0" cellspacing="0" border="0" style="width: 410px; height: 412px; table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr valign="top"> 
          <xhtml:td> 
            <xhtml:div style="width: 100%; height: 100%; overflow: auto;">${cardElements}</xhtml:div> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr height="35px" valign="bottom"> 
          <xhtml:td align="right" style="padding-bottom: 2px; border-top: 2px solid #6D85A3;"> 
            <xui:place control="ok-button" id="controlPlace3" style="margin-right: 8px; cursor: default; width: 80px;"/>  
            <xui:place control="cancel-button" id="controlPlace1" style="cursor: default; width: 80px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <xui:place control="executorDlg" id="controlPlace4" style="top:142px;left:524px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script type="text/javascript"> <![CDATA[
    	$(window).bind("load", function(event) {
    		updateActivityCheckState(null, true);
    	});
		var jsonData = eval('${jsonData}');
    	function buildParentChildren(activities, parent) {
	    	for (var i=0; i<activities.length; i++) {
	    		var currActivity = activities[i];
	    		currActivity.parentRow = parent;
	    		buildParentChildren(currActivity.rows, currActivity);
	    	}
    	}
    	buildParentChildren(jsonData.childActivities, null);
  	]]> </xhtml:script>  
    <xhtml:script id="htmlScript1" src="processDialogQ.js"/>  
    <xhtml:style type="text/css"> <![CDATA[
		.card {
			width: 100%;
			border: 1px solid #6D85A3;
			background-color: white;
		}
		.card .title {
			background-color: #6D85A3;
			height: 30px;
		}
		.card .executor {
			height: 32px;
		}
		.card .checkbox {
			width: 28px;
		}
		.card .caption {
			padding: 3px 0 0 0;
		}
		.card .caption .label {
			width: 100%;
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			font-weight: bold;
			color: #f1f1f1;
		}
		.card .notice-label {
			text-indent: 28px;
		}
		.card .button {
			width: 100px;
			padding-right: 8px;
		}
	]]> </xhtml:style> 
  </xui:resource> 
</xui:window>

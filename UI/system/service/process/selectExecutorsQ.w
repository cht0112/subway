<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:model id="model1" component="/UI/system/components/quick/model.xbl.xml#model"
    style="top:224px;height:71px;left:643px;"> 
    <xhtml:div component="/UI/system/components/quick/data.xbl.xml#dataQ" columns="name,fid,fname,id,kind,loaded,selectable,data_id"
      onLoad="loadOrgPersonChild" id="orgPerson"/> 
  </xui:model>  
  <xui:view id="rootView" auto-load="true">
  	<xhtml:button class="xui-button" id="cancel-button" onclick="selectExecutorsQ.cancelButtonClick(event);">取消</xhtml:button>
  	<xhtml:button class="xui-button" id="ok-button" onclick="selectExecutorsQ.okButtonClick(event);">确定</xhtml:button>
    <xhtml:div component="/UI/system/components/quick/grid.xbl.xml#dtreeGridQ" id="orgTree"
      root-label="组织机构" data="orgPerson" onRenderRow="selectExecutorsQ.orgTreeRenderRow" multi-selection="true" onCheckRow="selectExecutorsQ.orgTreeCheckRow">
	  <xui:column ref="name" label="名称" width="362px"/>      
    </xhtml:div>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver1" onReceive="selectExecutorsQ.windowReceiverReceive"></xhtml:div>  
    <xui:layout style="width: 410px; _width: 100%; height: 410px; _height: 420px; padding: 8px; overflow: hidden;" id="rootLayout">
      <xhtml:table cellpadding="0" cellspacing="0" border="0" style="width: 410px; height: 412px; table-layout: fixed;"
      component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td> 
            <xui:place control="orgTree" id="controlPlace2" style="height:100%; width:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr height="35px" valign="bottom"> 
          <xhtml:td align="right" style="border-top: 2px solid #6D85A3;">
	          <xhtml:div style="padding-top:8px;">
	          	<xui:place control="ok-button" id="controlPlace3" style="margin-right: 8px; cursor: default; width: 80px;"/> 
	            <xui:place control="cancel-button" id="controlPlace1" style="cursor: default; width: 80px;"/>  
	          </xhtml:div>
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>

    <xui:place control="windowReceiver1" id="controlPlace4" style="top:331px;left:536px;"></xui:place></xui:layout> 
  </xui:view>  
  <xui:resource id="resource1">
  	<xhtml:script type="text/javascript">
  	<![CDATA[
  		function loadOrgPersonChild(id) {
  			if (typeof(id)=="undefined" || id==null) {
  				if (typeof(selectExecutorsQ.orgData)!="undefined") {
  					return {flag: 1, rows: selectExecutorsQ.orgData};
  				} else {
  					return {flag: 0};
  				}
  			} else {
  				var data = justep.xbl("orgPerson");
  				var orgId = data.getValue("id", id);
  				var dataId = data.getValue("data_id", id);
				var param = "<form><data><org-id>" + orgId + "</org-id><data-id>" + dataId + "</data-id></data></form>";
  				var result = justep.Request.sendHttpRequest("/UI/system/service/process/processDialogOrgChildrenQ.j", param);
	   			if (!justep.Request.isSuccess(result)){
	   				return {flag: 0};
	   			}
	   			
	   			var v = result.responseXML.documentElement.textContent;
	   			if (v == undefined){
	   				v = result.responseXML.documentElement.text;
	   			}
	   			
	   			var childDatas = eval("[" + v + "]");
	   			return {flag: 1, rows: childDatas};
  			}
  		}
  	]]>
  	</xhtml:script>
  <xhtml:script id="htmlScript1" src="selectExecutorsQ.js"></xhtml:script>
  </xui:resource> 
</xui:window>

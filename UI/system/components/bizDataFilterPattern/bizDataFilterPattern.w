<window xmlns="http://www.justep.com/xui"
	xmlns:xhtml="http://www.w3.org/1999/xhtml" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" 
	xmlns:xforms="http://www.justep.com/xforms" 
	xmlns:ev="http://www.w3.org/2001/xml-events" 
	xmlns:f="http://orbeon.org/oxf/xml/formatting" 
	xmlns:justep="http://www.justep.com/x5#" 
	xmlns:data="http://www.justep.com/x5/xui/data#"
	xmlns:xs="http://www.w3.org/2001/XMLSchema"
	component="/UI/system/components/window.xbl.xml#window"
	id="common_filter_pattern_dialog" xmlns:xui="http://www.justep.com/xui">

	<xforms:model id="mainmodel" style="top:17px;height:auto;left:440px;">
		<data id="main" component="/UI/system/components/data.xbl.xml#bizData"
			concept="SA_FilterPattern"
			offset="0"
			limit="9999"
			order-by="sOrderNum:asc"
			auto-load="false">
			<reader action="/system/logic/action/queryFilterPatternAction"/>
			<writer action="/system/logic/action/saveFilterPatternAction"/>
			<creator action="/system/logic/action/createFilterPatternAction"/>
		</data>
		
		<xforms:action ev:event="xforms-model-construct-done">
			<xforms:script>
			<![CDATA[
			var currData = window.frameElement.currData;
			var process = currData.getProcess();
			var activity = currData.getActivity();
			var dataId = currData.id;
			var filterText = "((SA_FilterPattern.sProcess='" + process + "') AND (SA_FilterPattern.sActivity='" + activity + "') AND (SA_FilterPattern.sInstance='" + dataId + "') AND (SA_FilterPattern.sPerson=:currentPersonID()))";
			var data = justep.xbl("main");
			data.filters.setFilter("_default_filter_", filterText);
			data.refreshData();
			
			resetButtonState();
			]]>
			</xforms:script>
		</xforms:action>
	</xforms:model>
	
	<view>
		<layout style="height: 100%; width: 100%">
			<xhtml:div component="/UI/system/components/bizDataFilterDialog.xbl.xml#bizDataFilterDialog" id="filter_edit_dialog"/>
			
			<xforms:dialog level="modal" title="过滤模式名称" close="true" draggable="true" appearance="full" width="405" height="90" id="filter_name_edit_dialog">
				 <xhtml:div style="margin: 8px;">
							<xhtml:div>请输入名称：</xhtml:div>
							<xhtml:div style="height:4px;"/>
							<xhtml:input class="xui-input" type="text" id="filter-pattern-name" style="width:380px;"/>
<xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" style="float:right;"><xui:place control="btn_ok" id="controlPlace6"></xui:place>
  <xui:place control="btn_cancel" id="controlPlace8"></xui:place></xhtml:div>
				 </xhtml:div>
			</xforms:dialog>
			
              <xhtml:div border-size="8px" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout">
				<center style="border-top: 1px solid #DDD">
				    <xhtml:div data="main" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%;height:100%;border:0px solid #9FB7D3;" class="xui-grid-hide-head grid-compact ">
						<column ref="sName" label="过滤模式名称" width="*"/>
				    </xhtml:div>						
				</center>
				<top size="30px" id="borderLayout-top1">
					<xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1">
						<xui:place control="btn_insert" id="controlPlace1"></xui:place>
						<xui:place control="btn_update" id="controlPlace2"></xui:place>
						<xui:place control="btn_delete" id="controlPlace4"></xui:place>
					</xhtml:div>
				</top>
  <bottom size="28px" id="borderLayout-bottom1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="float:right;"><xui:place control="btn_close" id="controlPlace5"></xui:place></xhtml:div>
  </bottom>
  </xhtml:div>
			
		</layout>
	<xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn_insert" class="button-blue" icon-class="icon-system-plus" appearance="image-text">
   <xforms:label id="default1"><![CDATA[新建]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[addFilterPattern(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn_update" appearance="image-minimal" icon-class="icon-system-edit-alt">
   <xforms:label id="default2"><![CDATA[修改]]></xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[modifyFilterPattern(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn_delete" appearance="image-minimal" icon-class="icon-system-trash">
   <xforms:label id="default4"><![CDATA[删除]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[deleteFilterPattern(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn_close" appearance="image-text" class="button-green">
   <xforms:label id="default5"><![CDATA[关闭]]></xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[closeThisDialog(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn_ok" class="button-green" appearance="image-text">
   <xforms:label id="default6"><![CDATA[确定]]></xforms:label>
   <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[okAction(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="btn_cancel" appearance="minimal">
   <xforms:label id="default8"><![CDATA[取消]]></xforms:label>
   <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[cancelAction(event)]]></xforms:script></xforms:action></xforms:trigger></view>
	
	<resource>
							<xhtml:style>
								.custom_button {
									background: url(../../../ops/images/xforms/button.gif) repeat-x;
									border: 1px solid #9FB7D3;
									width: 65px;
									line-height:18px;
								}
							</xhtml:style>
		
		<xhtml:script type="text/javascript">
		<![CDATA[
			newRecord = false;
			filterData = [];

			function cancelAction() {
				var dialog = xforms("filter_name_edit_dialog");
				if (dialog) {
					dialog.close();
				}
			}

			function generateFilterData() {
				var content = "";
				var len = filterData.length;
				if (len > 0) {
					content = "<root>";
				}
				for (var i = 0; i < len; i++) {
					var filter = filterData[i];

					content += "<pattern>";

					content += "<operator>";
					content += justep.String.HTMLEncode(filter.operator);
					content += "</operator>";

					content += "<variable>";
					content += justep.String.HTMLEncode(filter.relation);
					content += "</variable>";

					content += "<constant";
					content += " type=\"" + justep.String.HTMLEncode(filter.relationType) + "\"";
					content += " data1=\"" + justep.String.HTMLEncode(filter.code1) + "\"";
					content += " data2=\"" + justep.String.HTMLEncode(filter.code2) + "\"";
					content += " value=\"" + justep.String.HTMLEncode(filter.value2) + "\"";
					content += ">";
					content += justep.String.HTMLEncode(filter.value1);
					content += "</constant>";

					content += "<link>";
					content += justep.String.HTMLEncode(filter.link);
					content += "</link>";

					content += "</pattern>";
				}
				if (len > 0) {
					content += "</root>";
				}
				return content;
			}
			
			function okAction() {
				var data = justep.xbl("main");
				if (newRecord) {
					var rowCount = data.getCount();
					data.newData(rowCount);
				}

				var rowId = newRecord ? data.getRowId(rowCount) : data.getRowId();

				if (newRecord) {
					var currData = window.frameElement.currData;
					var process = currData.getProcess();
					var activity = currData.getActivity();
					var id = currData.id;

					data.setValue("sProcess", process, rowId);
					data.setValue("sActivity", activity, rowId);
					data.setValue("sInstance", id, rowId);
				}

				var nameInput = document.getElementById("filter-pattern-name");
				var name = nameInput.value;
				var content = generateFilterData();

				data.setValue("sName", name, rowId);
				data.setValue("sContent", content, rowId);
				data.saveData();

				var dialog = xforms("filter_name_edit_dialog");
				if (dialog) {
					dialog.close();
				}
				resetButtonState();
			}

			function resetButtonState() {
				var data = justep.xbl("main");
				var rowCount = data.getCount();
				justep.xbl("btn_update").setDisabled(rowCount <= 0);
				justep.xbl("btn_delete").setDisabled(rowCount <= 0);
			}

			function addFilterPattern() {
				var data = window.frameElement.currData;
				data.advanceFilter.clear();
				var filterEditDlg = justep.xbl("filter_edit_dialog");
				filterEditDlg.show(data, processNewFilter);
			}

			function processNewFilter(filters) {
				newRecord = true;
				filterData = filters;
				var nameInput = document.getElementById("filter-pattern-name");
				nameInput.value = "新建过滤模式";
				var dialog = xforms("filter_name_edit_dialog");
				if (dialog) {
					dialog.open();
				}
			}
			
			function modifyFilterPattern() {
				var conditionData = justep.xbl("main");
				var rowId = conditionData.getRowId();
				var sContent = conditionData.getValue("sContent", rowId);
				var advanceFilter = generateFilterText(sContent);
				var data = window.frameElement.currData;
				data.advanceFilter.setFilter(advanceFilter);
				var filterEditDlg = justep.xbl("filter_edit_dialog");
				filterEditDlg.show(data, processModifyFilter);
			}
			
			function processModifyFilter(filters) {
				newRecord = false;
				filterData = filters;
				var conditionData = justep.xbl("main");
				var rowId = conditionData.getRowId();
				var sName = conditionData.getValue("sName", rowId);
				var nameInput = document.getElementById("filter-pattern-name");
				nameInput.value = sName;
				var dialog = xforms("filter_name_edit_dialog");
				if (dialog) {
					dialog.open();
				}
			}
			
			function deleteFilterPattern() {
				var data = justep.xbl("main");
				if (data.deleteData()) {
					data.saveData();
					resetButtonState();
				}
			}
			
			function closeThisDialog() {
				var dialogId = window.frameElement.dialogId;
				var dialog = parent.xforms(dialogId);
				if (dialog) {
					dialog.close();
				}
			}
		]]>
		</xhtml:script>
	</resource>
<resource id="resource1"><xhtml:script id="htmlScript1" src="bizDataFilterPattern.js"></xhtml:script></resource></window>
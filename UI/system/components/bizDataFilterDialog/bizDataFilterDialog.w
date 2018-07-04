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
	id="common_filter_dialog" xmlns:xui="http://www.justep.com/xui">

	<xforms:model id="mainmodel" style="height:auto;top:13px;left:579px;">	
		<data component="/UI/system/components/data.xbl.xml#data" id="query_conditions" store-type="simple" columns="relation,operator,code1,value1,code2,value2,link"/>

		<xforms:action ev:event="xforms-model-construct-done">
			<xforms:script>
			<![CDATA[
				conditionList = document.getElementById("conditionList_tab");
				btn_insert = document.getElementById("btn_insert_id");
				btn_delete = document.getElementById("btn_delete_id"); 
				btn_ok = document.getElementById("btn_ok_id");
				btn_clear = document.getElementById("btn_clear_id");
				btn_cancel = document.getElementById("btn_cancel_id");
				btn_reset = document.getElementById("btn_reset_id");
				
				filterData = window.frameElement.filterData;
				if (typeof(filterData) == "string") {
					filterData = parent.window.justep.xbl(filterData);
				}
				if (filterData) {
					initConditionTemplate();
					initDefaultConditions("query_conditions");
					loadConditions("query_conditions");
					if (conditionList.rows.length > 1) {
						selectRowByIndex(0);
					}
				}
				
				$("body").bind("keydown", keydownProcessor);
			]]>
			</xforms:script>
		</xforms:action>
	</xforms:model>

	<view>
		<layout style="height: 100%; width: 100%">
			<xforms:dialog level="modal" title="选择数据" close="true" draggable="true" appearance="full" width="380" height="240" id="select-relation-value1">
				<xforms:action ev:event="xforms-dialog-open">
					<xforms:script>
					<![CDATA[
						var param = "<root></root>";
						
						var iframe = document.getElementById("_select-relation-value1-iframe_");
						if (iframe) {
							if(iframe.contentWindow.document.body) iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center'>正在载入页面，请稍候......</td></tr></table>";
							iframe.filterData = filterData;
							iframe.dialogId = "select-relation-value1";
							
							var relationObj = getRelationObj(conditionList.rows[selectedRowIndex]);
							iframe.relationAlias = relations1[relationObj.selectedIndex];
							if(iframe.relationAlias && iframe.relationAlias != ""){
								var r = filterData.defRelations[iframe.relationAlias];
								if (r.label == "null") {
									param = "<root>" +
										"<label>" + iframe.relationAlias + "</label>" +
										"<type>" + r.type + "</type>" +
										"</root>";
								} else {
									param = "<root>" +
										"<label>" + r.label + "</label>" +
										"<type>" + r.type + "</type>" +
										"</root>";
								}
							}
							justep.Request.callURL("/system/components/bizDataFilterDialog/getRelationValueDialog.w", "_select-relation-value1-iframe_", param);
						}
						changeButtonState();
					]]>
					</xforms:script>
				</xforms:action>
			
				<xhtml:iframe id="_select-relation-value1-iframe_" name="_select-relation-value1-iframe_" src="about:blank" frameborder="no" style="width: 100%;height:100%" dialog-id="select-relation-value1" first-value="true"/>
			</xforms:dialog>
			
			<xforms:dialog level="modal" title="选择数据" close="true" draggable="true" appearance="full" width="390" height="275" id="select-relation-value2">
				<xforms:action ev:event="xforms-dialog-open">
					<xforms:script>
					<![CDATA[
						var param = "<root></root>";
						var iframe = document.getElementById("_select-relation-value2-iframe_");
						if (iframe) {
							if(iframe.contentWindow.document.body) iframe.contentWindow.document.body.innerHTML = "<table width='100%' height='100%'><tr><td align='center'>正在载入页面，请稍候......</td></tr></table>";
							iframe.filterData = filterData;
							iframe.dialogId = "select-relation-value2";
							var relationObj = getRelationObj(conditionList.rows[selectedRowIndex]);
							iframe.relationAlias = relations1[relationObj.selectedIndex];
							
							var r = filterData.defRelations[iframe.relationAlias];
							if (r.label == "null") {
								param = "<root>" +
									"<label>" + iframe.relationAlias + "</label>" +
									"<type>" + r.type + "</type>" +
									"</root>";
							} else {
								param = "<root>" +
									"<label>" + r.label + "</label>" +
									"<type>" + r.type + "</type>" +
									"</root>";
							}
						}
						justep.Request.callURL("/system/components/bizDataFilterDialog/getRelationValueDialog.j", "_select-relation-value2-iframe_", param);
					]]>
					</xforms:script>
				</xforms:action>
				
				<xhtml:iframe id="_select-relation-value2-iframe_" name="_select-relation-value2-iframe_" src="about:blank" frameborder="no" dialog-id="select-relation-value2" first-value="false"/>
			</xforms:dialog>
		
              <xhtml:div border-size="8px" style="width:100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout">
				<center style="border-bottom:1px solid #DDD;border-top:1px solid #DDD;">
						<xhtml:div id="bl1" component="/UI/system/components/borderLayout.xbl.xml#borderLayout" class="xui-container" style="height:100%;width:100%;table-layout:fixed;border: 0px solid #9FB7D3;" cellspacing="0" cellpadding="0">
							<top size="28px">
								<xhtml:table border="0" style="height:28px;width:100%;table-layout:fixed;border-collapse: collapse" cellspacing="0" cellpadding="0">
									<xhtml:tr style="height:28px;color: #444">
										<xhtml:td align="center" width="30%">字段</xhtml:td>
										<xhtml:td align="center" width="20%">操作符</xhtml:td>
										<xhtml:td align="center" width="30%">数据</xhtml:td>
										<xhtml:td align="center" width="20%">关联</xhtml:td>
									</xhtml:tr>
								</xhtml:table>
							</top>
							<center>
									<xhtml:div id="condition_container" style="height:100%; overflow: auto;">
										<xhtml:table border="0" id="conditionList_tab" style="width:100%;border-collapse: collapse" cellspacing="0" cellpadding="0">
											<xhtml:tr style="display:none" valign="middle">
												<xhtml:td>
													<xhtml:select id="relationSelect" style="width:100%;height:20px;line-height:20px;" onfocus="selectRowByObj(this)" onchange="relationValueChanged(this)">
													</xhtml:select>
												</xhtml:td>
												<xhtml:td>
													<xhtml:select style="width:100%;height:20px;line-height:20px;" onfocus="selectRowByObj(this)" name="D2" onchange="operatorValueChanged(this)">
													</xhtml:select>
												</xhtml:td>
												<xhtml:td>
													<xhtml:div style="margin:0;padding:0;width:100%" >
														<xhtml:div>
															<xhtml:table border="0" cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout:fixed">
																<xhtml:tr class="no-tr">
																	<xhtml:td>
																		<xhtml:input type="text" style="width:100%;height:18px;padding:0;line-height:18px;border:1px solid #ABADB3;" onclick="selectRowByObj1(this)" onfocus="selectRowByObj(this)" name="T1" size="20" onchange="value1ValueChanged(this)"/>
																	</xhtml:td>
																	<xhtml:td width="24px" >
																		<xhtml:button id="selectButton1" onfocus="selectRowByObj(this)" style="font-family: Arial; width: 20px;height:20px;margin-left:4px;" disabled="true" class="xui-button" onclick="selectButton1Click(this)">...</xhtml:button>
																	</xhtml:td>
																</xhtml:tr>
															</xhtml:table>
														</xhtml:div>
														<xhtml:div style="margin:0;padding:0;display:none;padding-top:1px">
															<xhtml:table border="0" cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout:fixed">
																<xhtml:tr class="no-tr">
																	<xhtml:td width="100%">
																		<xhtml:input type="text" style="width:100%;height:20px;" onfocus="selectRowByObj(this)" name="T2" size="20" onchange="value2ValueChanged(this)"/>
																	</xhtml:td>
																	<xhtml:td width="20px">
																		<xhtml:button id="selectButton2" onfocus="selectRowByObj(this)" style="font-family: Arial; width: 100%;height:20px;" disabled="true" class="xui-button" onclick="selectButton2Click(this)">...</xhtml:button>
																	</xhtml:td>
																</xhtml:tr>
															</xhtml:table>
														</xhtml:div>
													</xhtml:div>
												</xhtml:td>
												<xhtml:td>
													<xhtml:select style="width:100%;height:20px" onfocus="selectRowByObj(this)" name="D3" onchange="linkValueChanged(this)">
													</xhtml:select>
												</xhtml:td>
											</xhtml:tr>
										</xhtml:table>
									</xhtml:div>
							</center>
						</xhtml:div>
   </center>
				<top size="30px" id="borderLayout-top1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="margin: 0 auto;width:320px;"><xui:place control="btn_insert_id" id="controlPlace1"></xui:place>
  <xui:place control="btn-delete-id" id="controlPlace2"></xui:place><xui:place control="btn-reset-id" id="controlPlace4"></xui:place><xui:place control="btn_clear_id" id="controlPlace3"></xui:place>
  </xhtml:div></top>
  <bottom size="28px" id="borderLayout-bottom1"><xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="width:150px;display:block;float:right;"><xui:place control="btn-ok-id" id="controlPlace5"></xui:place>
  <xui:place control="btn-cancel-id" id="controlPlace7"></xui:place></xhtml:div></bottom></xhtml:div>					
			<!-- 
			<xhtml:table border="0" cellpadding="0" cellspacing="8" style="height:100%;width:100%;table-layout: fixed;">
				<xhtml:tr valign="top" style="height:300px;">
					<xhtml:td width="100%" style="height:100%;">
						<xhtml:table border="0" style="height:100%;width:100%;table-layout:fixed;border: 1px solid #9FB7D3;" cellspacing="0" cellpadding="0">
							<xhtml:tr height="28px">
								<xhtml:td>
									<xhtml:table height="100%" border="0" style="width:100%;table-layout:fixed;border-collapse: collapse" cellspacing="0" cellpadding="0">
										<xhtml:tr style="background: #E7EDF4;">
											<xhtml:td align="center" width="30%">字段</xhtml:td>
											<xhtml:td align="center" width="20%">操作符</xhtml:td>
											<xhtml:td align="center" width="30%">数据</xhtml:td>
											<xhtml:td align="center" width="20%">关联</xhtml:td>
										</xhtml:tr>
									</xhtml:table>
								</xhtml:td>
							</xhtml:tr>
							<xhtml:tr height="100%">
								<xhtml:td>
									<xhtml:div id="condition_container" style="height:100%; overflow-y: scroll;">
										<xhtml:table border="0" id="conditionList" style="width:100%;border-collapse: collapse" cellspacing="0" cellpadding="0">
											<xhtml:tr style="display:none" valign="middle">
												<xhtml:td>
													<xhtml:select style="width:100%;height:20px" onfocus="selectRowByObj(this)" onchange="relationValueChanged(this)">
													</xhtml:select>
												</xhtml:td>
												<xhtml:td>
													<xhtml:select style="width:100%;height:20px" onfocus="selectRowByObj(this)" name="D2" onchange="operatorValueChanged(this)">
													</xhtml:select>
												</xhtml:td>
												<xhtml:td>
													<xhtml:div style="margin:0;padding:0;width:100%" >
														<xhtml:div>
															<xhtml:table border="0" cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout:fixed">
																<xhtml:tr class="no-tr">
																	<xhtml:td width="100%">
																		<xhtml:input type="text" style="width:100%;height:18px;padding:0;" onfocus="selectRowByObj(this)" name="T1" size="20" onchange="value1ValueChanged(this)"/>
																	</xhtml:td>
																	<xhtml:td width="20px">
																		<xhtml:button id="selectButton1" onfocus="selectRowByObj(this)" style="font-family: Arial; width: 100%;height:20px;float:left" disabled="true" class=" xui-button" onclick="selectButton1Click(this)">...</xhtml:button>
																	</xhtml:td>
																</xhtml:tr>
															</xhtml:table>
														</xhtml:div>
														<xhtml:div style="margin:0;padding:0;display:none;padding-top:1px">
															<xhtml:table border="0" cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout:fixed">
																<xhtml:tr class="no-tr">
																	<xhtml:td width="100%">
																		<xhtml:input type="text" style="width:100%;height:20px;" onfocus="selectRowByObj(this)" name="T2" size="20" onchange="value2ValueChanged(this)"/>
																	</xhtml:td>
																	<xhtml:td width="20px">
																		<xhtml:button id="selectButton2" onfocus="selectRowByObj(this)" style="font-family: Arial; width: 100%;height:20px;" disabled="true" class=" xui-button" onclick="selectButton2Click(this)">...</xhtml:button>
																	</xhtml:td>
																</xhtml:tr>
															</xhtml:table>
														</xhtml:div>
													</xhtml:div>
												</xhtml:td>
												<xhtml:td>
													<xhtml:select style="width:100%;height:20px" onfocus="selectRowByObj(this)" name="D3" onchange="linkValueChanged(this)">
													</xhtml:select>
												</xhtml:td>
											</xhtml:tr>
										</xhtml:table>
									</xhtml:div>
								</xhtml:td>
							</xhtml:tr>
						</xhtml:table>
					</xhtml:td>
					<xhtml:td width="75px">
						<xhtml:div style="height:100%;position:relative;">
									<xhtml:button id="btn_insert" class=" xui-button" style="width:75px;margin-bottom: 8px" onclick="insertRow();">增 加</xhtml:button>
									<xhtml:button id="btn_delete" class=" xui-button" style="width:75px;margin-bottom: 8px" onclick="deleteRow();">删 除</xhtml:button>
									<xhtml:button id="btn_clear" class=" xui-button" style="width:75px;margin-bottom: 8px" onclick="clearRow()">清 空</xhtml:button>
									<xhtml:button id="btn_reset" class=" xui-button" style="width:75px;margin-bottom: 8px" onclick="resetRow()">重 置</xhtml:button>
							<xhtml:div style="position: absolute;bottom:0;left:0;">
									<xhtml:button id="btn_reset" class=" xui-button" style="width:75px;margin-bottom: 8px" onclick="filterDialogClose()">确 定</xhtml:button>
									<xhtml:button id="btn_cancel" class=" xui-button" style="width:75px;" onclick="filterDialogCancel()">取 消</xhtml:button>
							</xhtml:div>
						</xhtml:div>
					</xhtml:td>
				</xhtml:tr>
			</xhtml:table>				
			 -->
		</layout>
	<xforms:trigger id="btn_insert_id" appearance="image-text" icon-class="icon-system-plus" class="button-blue">
   <xforms:label id="default1"><![CDATA[添加]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[insertRow(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btn_clear_id" appearance="image-minimal" icon-class="icon-system-reply-all">
   <xforms:label id="default3"><![CDATA[清空]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[clearRow(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger appearance="image-minimal" icon-class="icon-system-reply" id="btn_reset_id">
   <xforms:label id="default4"><![CDATA[重置]]></xforms:label>
  <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[resetRow(event)]]></xforms:script></xforms:action></xforms:trigger>
  <xforms:trigger id="btn-ok-id" appearance="image-text" class="button-green">
   <xforms:label id="default5"><![CDATA[确 定]]></xforms:label>
   <xforms:action id="action5" ev:event="DOMActivate">
    <xforms:script id="xformsScript5">filterDialogClose(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btn-cancel-id" appearance="image-minimal">
   <xforms:label id="default7"><![CDATA[取 消]]></xforms:label>
   <xforms:action id="action7" ev:event="DOMActivate">
    <xforms:script id="xformsScript7">filterDialogCancel(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btn-delete-id" appearance="image-minimal" icon-class="icon-system-trash">
   <xforms:label id="default2">删除</xforms:label>
   <xforms:action id="action2" ev:event="DOMActivate">
    <xforms:script id="xformsScript2">deleteRow(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="btn-reset-id" appearance="image-minimal" icon-class="icon-system-reply-all">
   <xforms:label id="default6"><![CDATA[重置]]></xforms:label>
   <xforms:action id="action6" ev:event="DOMActivate">
    <xforms:script id="xformsScript6">resetRow(event)</xforms:script></xforms:action> </xforms:trigger></view>
	
	<resource>
		<xhtml:script type="text/javascript">
		<![CDATA[
		
		selectedRowIndex = -1;
		waitingCount = 0;
		
		relations = [];
		relations1 = [];

		types = [];
		types["String"] = true;
		types["Text"] = true;
		types["Decimal"] = true;
		types["Float"] = true;
		types["DOUBLE"] = true;
		types["Integer"] = true;
		types["Boolean"] = true;
		types["DateTime"] = true;
		types["Date"] = true;
		types["Time"] = true;
		
		relationTypes = [];
		
		operators = [];
		operators["等于"] = 0;
		operators["大于"] = 1;
		operators["小于"] = 2;
		operators["小于等于"] = 3;
		operators["大于等于"] = 4;
		operators["不等于"] = 5;
		operators["空"] = 6;
		operators["非空"] = 7;
		operators["包含"] = 8;
		operators["不包含"] = 9;
		/**
		operators["BETWEEN"] = 10;
		operators["NOT BETWEEN"] = 11;
		**/
		
		operators1 = [];
		operators1[0] = "=";
		operators1[1] = ">";
		operators1[2] = "<";
		operators1[3] = "<=";
		operators1[4] = ">=";
		operators1[5] = "<>";
		operators1[6] = "IS NULL";
		operators1[7] = "IS NOT NULL";
		operators1[8] = "LIKE";
		operators1[9] = "NOT LIKE";
		/**
		operators1[10] = "BETWEEN";
		operators1[11] = "NOT BETWEEN";
		**/
		
		operators2 = [];
		operators2["="] = 0;
		operators2[">"] = 1;
		operators2["<"] = 2;
		operators2["<="] = 3;
		operators2[">="] = 4;
		operators2["<>"] = 5;
		operators2["IS NULL"] = 6;
		operators2["IS NOT NULL"] = 7;
		operators2["LIKE"] = 8;
		operators2["NOT LIKE"] = 9;
		/**
		operators2["BETWEEN"] = 10;
		operators2["NOT BETWEEN"] = 11;
		**/
		
		links = [];
		links["并且"] = 0;
		links["或者"] = 1;

		links1 = [];
		links1[0] = "AND";
		links1[1] = "OR";

		links2 = [];
		links2["AND"] = 0;
		links2["OR"] = 1;
		
		colPLs = ["", "1px", "1px", "1px"];
		colPRs = ["1px", "1px", "1px", ""];
		colWidths = ["120px", "80px", "120px", "60px"];
		
		function getOwnerRow(obj) {
			var r = obj;
			while (r != null) {
				if (r.tagName == "TR" && r.parentNode.parentNode.id == "conditionList_tab") {
					break;
				}
				r = r.parentNode;
			}
			return r;
		}
		
		function getRelationObj(container) {
			return container.cells[0].getElementsByTagName("SELECT")[0];
		}
		
		function getOperatorObj(container) {
			return container.cells[1].getElementsByTagName("SELECT")[0];
		}
		
		function getValue1Obj(container) {
			return container.cells[2].getElementsByTagName("INPUT")[0];
		}

		function getValue2Obj(container) {
			return container.cells[2].getElementsByTagName("INPUT")[1];
		}
		
		function getButton1Obj(container) {
			return container.cells[2].getElementsByTagName("BUTTON")[0];
		}

		function getButton2Obj(container) {
			return container.cells[2].getElementsByTagName("BUTTON")[1];
		}
		
		function getLinkObj(container) {
			return container.cells[3].getElementsByTagName("SELECT")[0];
		}
		
		function getValueContainer(container) {
			return container.cells[2].getElementsByTagName("DIV")[0];
		}
		
		function getValue2Container(container) {
			return container.cells[2].getElementsByTagName("DIV")[2];
		}
		
		
		
		function generateGuid() {
			var guid = [];
			for (var i = 1; i <= 32; i++) {
				guid.push(Math.floor(Math.random() * 16.0).toString(16));
			}
			return guid.join("");
		}
		
		function initConditionTemplate() {
			var templateRow = conditionList.rows[conditionList.rows.length-1];
			var templateRelationObj = getRelationObj(templateRow);
			templateRelationObj.options.add(new Option("", 0));
			relations[""] = 0;
			relations1[0] = "";
			relationTypes[0] = "";
			if (filterData) {
				var defRelations = filterData.defRelations;
				if (defRelations) {
					var i = 1;
					var filterRelations = filterData.defFilterRelations;
					var arrFilterRelation = filterRelations.toString().split(",");
					if ((arrFilterRelation.length > 0) && (justep.String.trim(filterRelations)!="")) {
						for (var j = 0; j < arrFilterRelation.length; j++) {
							var r = arrFilterRelation[j];
							var label = defRelations[r].label == "null" ? r : defRelations[r].label;
							templateRelationObj.options.add(new Option(label, i));
							relations[defRelations[r].relation] = i;
							relations1[i] = r;
							relationTypes[i] = defRelations[r].type;
							i++;
						}
					} else {
						for (var r in defRelations) {
							if (r != "version") {
								var label = defRelations[r].label == "null" ? r : defRelations[r].label;
								templateRelationObj.options.add(new Option(label, i));
								relations[defRelations[r].relation] = i;
								relations1[i] = r;
								relationTypes[i] = defRelations[r].type;
								i++;
							}
						}
					}
				}
			}

			var operatorObj = getOperatorObj(templateRow);
			var idx = 0;
			for (var op in operators) {
				operatorObj.options.add(new Option(op, idx));
				idx++;
			}
			operatorObj.selectedIndex = 0;
			
			var linkObj = getLinkObj(templateRow);
			idx = 0;
			for (var lk in links) {
				linkObj.options.add(new Option(lk, idx));
				idx++; 
			}
			linkObj.selectedIndex = 0;
		}
		
		function initDefaultConditions(data) {
			var conditionData = data;
			if (typeof(conditionData) == "string") {
				conditionData = justep.xbl(data);
			}
			for (var i = conditionData.getCount() - 1; i >= 0; i--) {
				conditionData.removeByIndex(i);
			}

			var conditionCount = filterData.advanceFilter.getCount();
			if (conditionCount > 0) {
				for (var i = 0; i < conditionCount; i++) {
					var rowId = generateGuid();
					var condition = filterData.advanceFilter.getCondition(i);
					conditionData.insert(rowId, i);
					conditionData.setValue("relation", condition.relation, rowId);
					conditionData.setValue("operator", condition.operator, rowId);
					conditionData.setValue("value1", condition.value1, rowId);
					conditionData.setValue("code1", condition.code1, rowId);
					conditionData.setValue("value2", condition.value2, rowId);
					conditionData.setValue("code2", condition.code2, rowId);
					conditionData.setValue("link", condition.link, rowId);
				}
			} else {
				var rowId = generateGuid();
				conditionData.insert(rowId, 0);
				conditionData.setValue("operator", "=", rowId);
				conditionData.setValue("link", "AND", rowId);
			}
		}
		
		function loadConditions(data) {
			var templateRow = conditionList.rows[conditionList.rows.length - 1];

			var conditionData = data;
			if (typeof(conditionData) == "string") {
				conditionData = justep.xbl(data);
			}

			var rowCount = conditionData.getCount();
			for (var i = 0; i < rowCount; i++) {
				var rowId = conditionData.getRowId(i);
				var relation = conditionData.getValue("relation", rowId);
				var operator = conditionData.getValue("operator", rowId);
				var value1 = conditionData.getValue("value1", rowId);
				var value2 = conditionData.getValue("value2", rowId);
				var link = conditionData.getValue("link", rowId);

				var newRow = conditionList.insertRow(conditionList.rows.length - 1);
				newRow.style.height = "30px";
				for (var j = 0; j < 4; j++) {
					var newCell = newRow.insertCell(newRow.cells.length);
					newCell.style.paddingLeft = colPLs[j];
					newCell.style.paddingRight = colPRs[j];
					newCell.width = colWidths[j];
					newCell.innerHTML = templateRow.cells[j].innerHTML;
				}

				var relationObj = getRelationObj(newRow);
				relationObj.selectedIndex = relations[relation];
				
				var operatorObj = getOperatorObj(newRow);
				operatorObj.selectedIndex = operators2[operator];
				
				var value1Obj = getValue1Obj(newRow);
				value1Obj.value = value1;

				var value2Obj = getValue2Obj(newRow);
				value2Obj.value = value2;
				
				var linkObj = getLinkObj(newRow);
				linkObj.selectedIndex = links2[link];
				
				changeRowState(newRow);
			}
		}
		
		function changeRowState(newRow) {
			var operatorObj = getOperatorObj(newRow);
			var operator = operators1[operatorObj.selectedIndex];
			if ((operator == "IS NULL") || (operator == "IS NOT NULL")) {
				var valueContainer = getValueContainer(newRow);
				valueContainer.style.display = "none";
			} else {
				var valueContainer = getValueContainer(newRow);
				valueContainer.style.display = "";
			}
			if ((operator == "BETWEEN") || (operator == "NOT BETWEEN")) {
				var value2Container = getValue2Container(newRow);
				value2Container.style.display = "";
			} else {
				var value2Container = getValue2Container(newRow);
				value2Container.style.display = "none";
			}
			
			var relationObj = getRelationObj(newRow);
			var button1Obj = getButton1Obj(newRow);
			button1Obj.disabled = relationObj.selectedIndex == 0;
			var button2Obj = getButton2Obj(newRow);
			button2Obj.disabled = relationObj.selectedIndex == 0;
		}
		
		function changeButtonState() {
		/*
			justep.xbl("btn_delete_id").setDisabled(conditionList.rows.length == 1);
			justep.xbl("btn_clear_id").setDisabled(conditionList.rows.length == 1);
		*/	
		}
		
		function insertRow() {
			var newRow = conditionList.insertRow(conditionList.rows.length - 1);
			newRow.style.height = "30px";

			var templateRow = conditionList.rows[conditionList.rows.length - 1];
			for (var i = 0; i < 4; i++) {
				var newCell = newRow.insertCell(newRow.cells.length);
				newCell.style.paddingLeft = colPLs[i];
				newCell.style.paddingRight = colPRs[i];
				newCell.style.width = colWidths[i];
				newCell.innerHTML = templateRow.cells[i].innerHTML;
			}
			
			selectRowByIndex(newRow.rowIndex);
			
			var container = document.getElementById("condition_container");
			if (container && justep.Browser.IE) {
				container.doScroll("scrollBarPageDown");
			}

			/*操作instance*/
			var conditionData = justep.xbl("query_conditions");
			var rowCount = conditionData.getCount();
			var rowId = generateGuid();
			conditionData.insert(rowId, rowCount);
			conditionData.setValue("operator", "=", rowId);
			conditionData.setValue("link", "AND", rowId);
			
			changeButtonState();
		}
		
		
		function deleteRow() {
			if (selectedRowIndex >= 0 && selectedRowIndex < conditionList.rows.length - 1) {
				conditionList.deleteRow(selectedRowIndex);
				
				/*操作instance*/
				var conditionData = justep.xbl("query_conditions");
				conditionData.removeByIndex(selectedRowIndex);
				
				if (conditionList.rows.length == 1) {
					selectedRowIndex = -1;
				} else {
					if (selectedRowIndex == conditionList.rows.length - 1) {
						selectedRowIndex = selectedRowIndex - 1;
					}
				}
				
				if (selectedRowIndex >= 0 && selectedRowIndex < conditionList.rows.length - 1) {
					var r = conditionList.rows[selectedRowIndex];
					r.style.background = "#FFFFCC";
				}
			}
			
			changeButtonState();
		}
		
		
		function clearRow() {
			while (conditionList.rows.length > 1) {
				conditionList.deleteRow(conditionList.rows.length - 2);
			}
			
			/*操作instance*/
			var conditionData = justep.xbl("query_conditions");
			for (var i = conditionData.getCount() - 1; i >= 0; i--) {
				conditionData.removeByIndex(i);
			}
			
			changeButtonState();
		}
		
		
		function resetRow() {
			while (conditionList.rows.length > 1) {
				conditionList.deleteRow(conditionList.rows.length - 2);
			}
			
			/*重新装载 默认conditions*/
			initDefaultConditions("query_conditions");
			loadConditions("query_conditions");

			if (conditionList.rows.length > 1) {
				selectRowByIndex(0);
			}
			
			changeButtonState();
		}
		
		function relationValueChanged(obj) {
			var ownerRow = getOwnerRow(obj);
			var button1Obj = getButton1Obj(ownerRow);
			button1Obj.disabled = (obj.selectedIndex == 0);
			var button2Obj = getButton2Obj(ownerRow);
			button2Obj.disabled = (obj.selectedIndex == 0);
			
			/*操作instance*/
			var conditionData = justep.xbl("query_conditions");
			var rowId = conditionData.getRowId(selectedRowIndex);
			conditionData.setValue("relation", relations1[obj.selectedIndex], rowId);
			
			var ownerRow = getOwnerRow(obj);
			var value1Obj = getValue1Obj(ownerRow);
			var value2Obj = getValue2Obj(ownerRow);
			if (types[relationTypes[obj.selectedIndex]]) {
				conditionData.setValue("code1", value1Obj.value, rowId);
				conditionData.setValue("code2", value2Obj.value, rowId);
			} else {
				queryConceptCode(value1Obj, conditionData, rowId, "code1");
				queryConceptCode(value2Obj, conditionData, rowId, "code2");
			}
		}
		
		function operatorValueChanged(obj) {
			var ownerRow = getOwnerRow(obj);
			var operator = operators1[obj.selectedIndex];
			if ((operator == "IS NULL") || (operator == "IS NOT NULL")) {
				var valueContainer = getValueContainer(ownerRow);
				valueContainer.style.display = "none";
			} else {
				var valueContainer = getValueContainer(ownerRow);
				valueContainer.style.display = "";
			}
			if ((operator == "BETWEEN") || (operator == "NOT BETWEEN")) {
				var value2Container = getValue2Container(ownerRow);
				value2Container.style.display = "";
			} else {
				var value2Container = getValue2Container(ownerRow);
				value2Container.style.display = "none";
			}
			
			/*操作instance*/
			var conditionData = justep.xbl("query_conditions");
			var rowId = conditionData.getRowId(selectedRowIndex);
			conditionData.setValue("operator", operator, rowId);
		}
		
		/*异步查询概念id*/
		function queryConceptCode(obj, data, rowId, colId) {
			var ownerRow = getOwnerRow(obj);
			var relationObj = getRelationObj(ownerRow);
			var relationIndex = relationObj.selectedIndex;
			var objValue = obj.value;
			var conditionData = data;
			if (typeof(conditionData) == "string") {
				conditionData = justep.xbl(data);
			}
			
			if (objValue != "") {
				conditionData.setValue(colId, objValue, rowId);
			} else {
				conditionData.setValue(colId, "", rowId);
			}
		}
		
		function value1ValueChanged(obj) {
			var objValue = obj.value;
			var ownerRow = getOwnerRow(obj);
			var relationObj = getRelationObj(ownerRow);
			var selectedRelationIndex = relationObj.selectedIndex;
		
			/*操作instance*/
			var conditionData = justep.xbl("query_conditions");
			var rowId = conditionData.getRowId(selectedRowIndex);
			if (types[relationTypes[selectedRelationIndex]]) {
				conditionData.setValue("code1", objValue, rowId);
			} else {
				queryConceptCode(obj, conditionData, rowId, "code1");
			}
		}
		
		function value2ValueChanged(obj) {
			var objValue = obj.value;
			var ownerRow = getOwnerRow(obj);
			var relationObj = getRelationObj(ownerRow);
			var selectedRelationIndex = relationObj.selectedIndex;
		
			/*操作instance*/
			var conditionData = justep.xbl("query_conditions");
			var rowId = conditionData.getRowId(selectedRowIndex);
			if (types[relationTypes[selectedRelationIndex]]) {
				conditionData.setValue("code2", objValue, rowId);
			} else {
				queryConceptCode(obj, conditionData, rowId, "code2");
			}
		}
		
		function selectButton1Click(obj){
			var dialog = xforms("select-relation-value1");
			if(dialog) dialog.open();
		}
		
		function selectButton2Click(obj) {
			var dialog = xforms("select-relation-value2");
			if(dialog) dialog.open();
		}
		
		function selectRowByObj(obj) {
			var i = -1;
			var r = obj;
			while (r != null) {
				if (r.tagName == "TR" && r.className!="no-tr") {
					i = r.rowIndex;
					break;
				}
				r = r.parentNode;
			}
			selectRowByIndex(i);
		}
		
		function selectRowByIndex(index) {
			if (selectedRowIndex >= 0 && selectedRowIndex < conditionList.rows.length - 1) {
				var r = conditionList.rows[selectedRowIndex];
				r.style.background = "white";
			}
		
			selectedRowIndex = index;
			if (selectedRowIndex >= 0 && selectedRowIndex < conditionList.rows.length - 1) {
				var newRow = conditionList.rows[selectedRowIndex];
				newRow.style.background="#FFFFCC";
			}
		}
		
		function selectRowByObj1(obj) {
			var t = null;
			var idx = $("#relationSelect").get(0).selectedIndex;
			if(idx != 0){
				t = relationTypes[idx];
			}
			
			if(t && (t==="Date" || t==="DateTime")){
				creatCalendar(obj,t.toLowerCase());
			}
		}
		
		function creatCalendar(input,t){
			if(input && !input.setValue){
			 	if(t==="date") input.setValue = inputSetDateValue;
			 	else input.setValue = inputSetDatetimeValue;
			} 
			justep.Calendar.show(input,t=="date"?justep.Calendar.ONLY_DATE:justep.Calendar.SECONDS); 			
		}
		
		function inputSetDatetimeValue(val){
			this.value = justep.Date.toString(justep.Date.fromString(val,justep.Date.STANDART_FORMAT),"yyyy-MM-dd hh:mm:ss");
		}
		
		function inputSetDateValue(val){
			this.value = val;
		}

		function linkValueChanged(obj) {
			/*操作instance*/
			var conditionData = justep.xbl("query_conditions");
			var rowId = conditionData.getRowId(selectedRowIndex);
			conditionData.setValue("link", links1[obj.selectedIndex], rowId);
			
			var rowCount = conditionData.getCount();
			var relation = conditionData.getValue("relation", rowId);
			if ((selectedRowIndex == (rowCount-1)) && (relation != "")) {
				insertRow();
			}
		}
		
		function filterDialogCancel() {
			var dialogId = window.frameElement.dialogId;
			var dialog = parent.xforms(dialogId);
			if(dialog) dialog.close();
		}
		
		function filterDialogClose() {
			if (waitingCount != 0) {
				setTimeout(arguments.callee, 0);
				return;
			}
			var advanceFilter = generateFilterData();
			if (advanceFilter != null) {
				var dialogId = window.frameElement.dialogId;
				var dialog = parent.xforms(dialogId);
				if (dialog) {
					dialog.close();
				}
				if (!window.frameElement.callBack) {
					filterData.advanceFilter.setFilter(advanceFilter, true, true);
				} else {
					if (typeof(window.frameElement.callBack) == "function") {
						window.frameElement.callBack(advanceFilter);
					}
				}
			}
		}

		function generateFilterData() {
			var checked = true;
			var advanceFilter = [];
			var conditionData = justep.xbl("query_conditions");
			var rowCount = conditionData.getCount();
			for (var i = 0; i < rowCount; i++) {
				var rowId = conditionData.getRowId(i);
				var code1 = conditionData.getValue("code1", rowId);
				var code2 = conditionData.getValue("code2", rowId);
				
				var relationObj = getRelationObj(conditionList.rows[i]);
				var relationIndex = relationObj.selectedIndex;
				var operatorObj = getOperatorObj(conditionList.rows[i]);
				var operatorIndex = operatorObj.selectedIndex;
				var value1Obj = getValue1Obj(conditionList.rows[i]);
				var value1 = value1Obj.value;
				var value2Obj = getValue2Obj(conditionList.rows[i]);
				var value2 = value2Obj.value;
				var linkObj = getLinkObj(conditionList.rows[i]);
				var linkIndex = linkObj.selectedIndex;

				if (relationIndex == 0) {
					checked = false;
					break;
				} else {
					var t = relationTypes[relationIndex];
					if(t && (t==="Date" || t==="DateTime")){
						code1 = value1 = checkDate(value1,t);
						code2 = value2 = checkDate(value2,t); 
					}else if(t && (t==="Integer" || t==="Float" || t==="Decimal")){
					   if(isNaN(value1-0)) throw new Error("条件 "+value1+" 不是 number！");
					   if(isNaN(value2-0)) throw new Error("条件 "+value2+" 不是 number！");
					}
				
					var s = relations1[relationIndex];
					var r = filterData.defRelations[s];
					var filterExpr = {
						relation: r.relation,
						relationType: r.type,
						operator: operators1[operatorIndex],
						value1: value1,
						code1: code1,
						value2: value2,
						code2: code2,
						link: links1[linkIndex]
					};
					advanceFilter.push(filterExpr);
				}
			}
			
			if (checked) {
				return advanceFilter;
			} else {
				alert("字段不能为空！");
				return null;
			}
		}
		
		function checkDate(value,t){
			if(!value || value==="") return value;
			var format,date,value;
			if(t==="Date"){
				format = "yyyy-MM-dd";
				try{
					date = xforms.I8N.parse(value, xforms.I8N.get("format.date"));
				}catch(e){
					throw new Error("条件 "+value+" 不符合 "+format+" 的格式");
				}
			}
			
			if(t==="DateTime"){
				format = "yyyy-MM-dd hh:mm:ss";
				try{
					date = xforms.I8N.parse(value, xforms.I8N.get("format.datetime"));
				}catch(e){
					try{
						date = xforms.I8N.parse(value, xforms.I8N.get("format.date"));
						date.setHours(0,0,0);
					}catch(e){
						throw new Error("条件 "+value+" 不符合 "+format+" 或  yyyy-MM-dd 的格式");
					}
				}
			}
			
			return xforms.I8N.format(date, format);
		
		}
		
		function selectDialogCloseProcess(frameName, flag, data){
			var frame = document.getElementById(frameName);
			if (frame) {
				if (flag == "ok") {
					var codeName = "code1";
					var valueName = "value1";
					if ("true" != frame.getAttribute("first-value")) {
						codeName = "code2";
						valueName = "value2";
					}

					var conditionData = justep.xbl("query_conditions");
					var rowId = conditionData.getRowId(selectedRowIndex);
					conditionData.setValue(codeName, data, rowId);
					conditionData.setValue(valueName, data, rowId);

					var selectedRow = conditionList.rows[selectedRowIndex];
					if ("true" != frame.getAttribute("first-value")) {
						var value2Obj = getValue2Obj(selectedRow);
						value2Obj.value = data;
					} else {
						var value1Obj = getValue1Obj(selectedRow);
						value1Obj.value = data;
					}
				}

				var dialogId = frame.getAttribute("dialog-id");
				if (dialogId) {
					var dialog = xforms(dialogId);
					if(dialog) dialog.close();
				}
			}
		}
		
		function keydownProcessor(e) {
      		var keycode = e.keyCode || e.which || e.charCode; 
       		if (keycode == 13) {
       			var target = e.target || e.srcElement;
          		if (target) {
          			if (target.tagName != "BUTTON") {
          				if (target.onchange) {
          					target.onchange();
          				}
          				filterDialogClose();
          			}
       			}
       		}
      	}
		]]>
		</xhtml:script>
	</resource>
<resource id="resource1"></resource></window>
<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" cacheable="true" id="modify_executor_dlg">  
  <xforms:model id="mainmodel" style="top:48px;left:410px;"> 
    <data id="modifyFlowData" component="/UI/system/components/data.xbl.xml#data" store-type="grid" columns="dept_id,dept_name,pos_id,pos_name,psn_id,psn_name,fid,fname,names" auto-load="true"> 
      <rows xmlns=""></rows> 
    </data>  
    <data id="customData" component="/UI/system/components/data.xbl.xml#data" store-type="simple" columns="select_executor,cancel_select_executor" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('customData')/select_executor" readonly="instance('customData')/select_executor = 'true'"/>  
    <xforms:bind nodeset="instance('customData')/cancel_select_executor" readonly="call('getModifyFlowDataRowCount') &lt;= 0"/>  
    <xforms:action ev:event="onload"> 
      <xforms:script> <![CDATA[
				var taskData = window.frameElement.taskData;
				var taskDataRowId = taskData.getCurrentRowId();
				var sExecutorDeptID = taskData.getValue("sExecutorDeptID", taskDataRowId);
				var sExecutorDeptName = taskData.getValue("sExecutorDeptName", taskDataRowId);
				var sExecutorPosID = taskData.getValue("sExecutorPosID", taskDataRowId);
				var sExecutorPosName = taskData.getValue("sExecutorPosName", taskDataRowId);
				var sExecutorPersonID = taskData.getValue("sExecutorPersonID", taskDataRowId);
				var sExecutorPersonName = taskData.getValue("sExecutorPersonName", taskDataRowId);
				var sExecutorFID = taskData.getValue("sExecutorFID", taskDataRowId);
				var sExecutorFName = taskData.getValue("sExecutorFName", taskDataRowId);
				var sExecutorNames = taskData.getValue("sExecutorNames", taskDataRowId);

				if (sExecutorPersonID != "") {
					var modifyFlowData = justep.xbl("modifyFlowData");
					removeAllDataRows(modifyFlowData);
					var newRowId = modifyFlowData.createUUID();
					modifyFlowData.insert(newRowId, 0, [sExecutorDeptID, sExecutorDeptName, sExecutorPosID, sExecutorPosName, sExecutorPersonID, sExecutorPersonName, sExecutorFID, sExecutorFName, sExecutorNames]);
				}
			
				justep.xbl("orgTreeData").expandRowsToLevel(0);
			]]> </xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <view id="rootView"> 
    <layout style="width: 100%; height: 100%; overflow: hidden"> 
      <xhtml:table border="0" cellpadding="0" cellspacing="8" width="100%" height="100%" style="table-layout: fixed"> 
        <xhtml:tr> 
          <xhtml:td style="border: 1px solid #c6c6c6"> 
            <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr valign="top" height="30px"> 
                <xhtml:td> 
                  <xhtml:div style="height: 100%; border-bottom: 1px solid gray;"> 
                    <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" class="no-editor-border"> 
                      <xhtml:tr height="22px" valign="bottom"> 
                        <xhtml:td width="66px" style="padding-bottom: 2px;padding-left:4px;">快速查询：</xhtml:td>  
                        <xhtml:td style="border-bottom: 1px solid #c0c0c0;"> 
                          <xhtml:input type="text" id="flow_to_query_input" style="width: 150px; border: 0px" onkeydown="flowToFilterInputKeydown(event);"/> 
                        </xhtml:td>  
                        <xhtml:td width="20px" style="padding-bottom: 2px"> 
                          <xforms:trigger appearance="image" src="/UI/system/images/flow/select0.gif"> 
                            <xforms:label>查询</xforms:label>  
                            <xforms:action ev:event="DOMActivate"> 
                              <xforms:script> <![CDATA[
	          													filterOrgTreeData();
	          												]]> </xforms:script> 
                            </xforms:action> 
                          </xforms:trigger> 
                        </xhtml:td> 
                      </xhtml:tr> 
                    </xhtml:table> 
                  </xhtml:div> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr valign="top"> 
                <xhtml:td> 
                  <xhtml:div style="width: 100%; height: 100%"> 
                    <xhtml:div id="orgPersonMemberTree1" component="/UI/system/components/orgTree.xbl.xml#orgTree" style="width: 100%; height: 100%"> 
                      <data id="orgTreeData" component="/UI/system/components/data.xbl.xml#bizData" auto-load="true"/>  
                      <xhtml:div id="orgTree" data="orgTreeData" component="/UI/system/components/grid.xbl.xml#grid" appearance="tree" style="border:0;width:100%;height:100%;" onRowDblClick="selectExecutor"> 
                        <column ref="sName" type="tree" readonly="true" />  
                        <xforms:action ev:event="xforms-index-changed"> 
                          <xforms:script> <![CDATA[
									      				var orgTreeData = justep.xbl("orgTreeData");
														var currentOrgKindID = orgTreeData.getValue("sOrgKindID");
														
														var customData = justep.xbl("customData");
														if (currentOrgKindID == "psm") {
															customData.setValue("select_executor", "");
														} else {
															customData.setValue("select_executor", "true");
														}
									      			]]> </xforms:script> 
                        </xforms:action> 
                      </xhtml:div> 
                    </xhtml:div> 
                  </xhtml:div> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td>  
          <xhtml:td style="width:30px;" valign="middle"> 
            <xforms:trigger class="select_button" ref="instance('customData')/select_executor"> 
              <xforms:label>
                <xhtml:b>&gt;</xhtml:b>
              </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[
									selectExecutor();
								]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xhtml:div style="height: 10px"/>  
            <xforms:trigger class="select_button" ref="instance('customData')/cancel_select_executor"> 
              <xforms:label>
                <xhtml:b>&lt;</xhtml:b>
              </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[
									removeSelectedExecutor();
								]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </xhtml:td>  
          <xhtml:td style="width:210px;"> 
            <xhtml:div id="modifyFlowData_Grid" data="modifyFlowData" component="/UI/system/components/grid.xbl.xml#grid" style="width:100%; height: 100%;" onRowDblClick="removeSelectedExecutor"> 
              <column ref="dept_id" visible="false"/>  
              <column ref="dept_name" visible="false"/>  
              <column ref="pos_id" visible="false"/>  
              <column ref="pos_name" visible="false"/>  
              <column ref="psn_id" visible="false"/>  
              <column ref="psn_name" label="执行者"/>  
              <column ref="fid" visible="false"/>  
              <column ref="fname" visible="false"/>  
              <column ref="names" visible="false"/> 
            </xhtml:div> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr height="22px"> 
          <xhtml:td colspan="3" align="right"> 
            <xhtml:table cellpadding="0" cellspacing="0" border="0" style="width:100%;height:100%;table-layout:fixed"> 
              <xhtml:tr> 
                <xhtml:td align="right"> 
                  <xforms:trigger style="width:75px;margin-right:8px;"> 
                    <xforms:label>确定</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script> <![CDATA[
												var modifyFlowData = justep.xbl("modifyFlowData");
												if (modifyFlowData.getCount() > 0) {
													/*
													var modifyFlowDataRowId = modifyFlowData.getCurrentRowId();
													var sExecutorDeptID = modifyFlowData.getValue("dept_id", modifyFlowDataRowId);
													var sExecutorDeptName = modifyFlowData.getValue("dept_name", modifyFlowDataRowId);
													var sExecutorPosID = modifyFlowData.getValue("pos_id", modifyFlowDataRowId);
													var sExecutorPosName = modifyFlowData.getValue("pos_name", modifyFlowDataRowId);
													var sExecutorPersonID = modifyFlowData.getValue("psn_id", modifyFlowDataRowId);
													var sExecutorPersonName = modifyFlowData.getValue("psn_name", modifyFlowDataRowId);
													var sExecutorFID = modifyFlowData.getValue("fid", modifyFlowDataRowId);
													var sExecutorFName = modifyFlowData.getValue("fname", modifyFlowDataRowId);
													var sExecutorNames = modifyFlowData.getValue("names", modifyFlowDataRowId);
			
													var taskData = window.frameElement.taskData;
													var taskDataRowId = taskData.getCurrentRowId();
													taskData.setValue("sExecutorDeptID", sExecutorDeptID, taskDataRowId);
													taskData.setValue("sExecutorDeptName", sExecutorDeptName, taskDataRowId);
													taskData.setValue("sExecutorPosID", sExecutorPosID, taskDataRowId);
													taskData.setValue("sExecutorPosName", sExecutorPosName, taskDataRowId);
													taskData.setValue("sExecutorPersonID", sExecutorPersonID, taskDataRowId);
													taskData.setValue("sExecutorPersonName", sExecutorPersonName, taskDataRowId);
													taskData.setValue("sExecutorFID", sExecutorFID, taskDataRowId);
													taskData.setValue("sExecutorFName", sExecutorFName, taskDataRowId);
													taskData.setValue("sExecutorNames", sExecutorNames, taskDataRowId);
													taskData.saveData();
													*/	
													var taskData = window.frameElement.taskData;
													var taskDataRowId = taskData.getCurrentRowId();
													
													var modifyFlowDataRowId = modifyFlowData.getCurrentRowId();
													var sExecutorFID = modifyFlowData.getValue("fid", modifyFlowDataRowId);
													var sExecutorFName = modifyFlowData.getValue("fname", modifyFlowDataRowId);
													
													var parameter = new justep.Request.ActionParam();
													parameter.setString("task", taskDataRowId);
													parameter.setString("fid", sExecutorFID);
													parameter.setString("fname", sExecutorFName);
													var result = justep.Request.sendBizRequest(null, null, "modifyTaskExecutorAction", parameter);
													if (!justep.Request.isBizSuccess(result)){
														alert("修改执行者失败！");
													}else{
														taskData.refreshData();
														
														var dialogId = window.frameElement.dialogId;
														var dialog = parent.xforms(dialogId);
														if (dialog) {
															dialog.close();
														}
													
													}
												} else {
													throw new Error("必须选择执行者！");
												}
											]]> </xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:td>  
                <xhtml:td align="right" width="75px"> 
                  <xforms:trigger style="width:75px"> 
                    <xforms:label>取消</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script> <![CDATA[
												var dialogId = window.frameElement.dialogId;
												var dialog = parent.xforms(dialogId);
												if (dialog) {
													dialog.close();
												}
											]]> </xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </layout> 
  </view>  
  <resource> 
    <xhtml:script type="text/javascript" src="/UI/SA/process/monitor/dialog/modifyExecutor.js"/>  
    <xhtml:style>.select_button {margin: 0; padding: 2px 0 0 0; width: 30px; height: 25px;}</xhtml:style> 
  </resource> 
</window>

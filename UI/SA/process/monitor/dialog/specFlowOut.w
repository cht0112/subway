<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" cacheable="true"
  id="spec_flowout_dlg">  
  <xforms:model id="mainmodel" style="height:auto;top:238px;left:21px;"> 
    <data id="flow_to_data" component="/UI/system/components/data.xbl.xml#data"
      store-type="grid" columns="activity,process,template,passedActivities,taskAssignMode,executorKinds,eurl,lock,warningTime,executeMode,executeMode2,emergencyName,catalogId,content,preemptMode,activity2,createTime,limitTime,emergencyId,curl,process2,name,lastModifyTime,readonly,isEnd,selected,dataId"
      auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>psm</cell>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>temPreempt</cell>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>tpmOpen</cell>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell>false</cell>  
          <cell/>  
          <cell>true</cell>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('flow_to_data')/limitTime" type="xsd:dateTime"/>  
    <xforms:bind nodeset="instance('flow_to_data')/createTime" type="xsd:dateTime"/>  
    <xforms:bind nodeset="instance('flow_to_data')/warningTime" type="xsd:dateTime"/>  
    <xforms:bind nodeset="instance('flow_to_data')/preemptMode" readonly="instance('flow_to_data')/executeMode != 'temPreempt'"/>  
    <data id="flow_to_data_executors" component="/UI/system/components/data.xbl.xml#data"
      store-type="grid" columns="fid,fName,name,kind,isManager,dataId" auto-load="true"> 
      <rows xmlns=""></rows> 
    </data>  
    <data id="flow_to_emergency_kind" component="/UI/system/components/data.xbl.xml#data"
      columns="id,name" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell>teLower</cell>  
          <cell>较低</cell> 
        </row>  
        <row> 
          <cell>teMiddle</cell>  
          <cell>一般</cell> 
        </row>  
        <row> 
          <cell>teHight</cell>  
          <cell>急迫</cell> 
        </row>  
        <row> 
          <cell>teHighest</cell>  
          <cell>紧急</cell> 
        </row> 
      </rows> 
    </data>  
    <data id="flow_to_execute_mode" component="/UI/system/components/data.xbl.xml#data"
      columns="id,name" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell>temSequential</cell>  
          <cell>顺序</cell> 
        </row>  
        <row> 
          <cell>temPreempt</cell>  
          <cell>抢占</cell> 
        </row>  
        <row> 
          <cell>temSimulaneous</cell>  
          <cell>同时</cell> 
        </row> 
      </rows> 
    </data>  
    <data id="flow_to_preempt_mode" component="/UI/system/components/data.xbl.xml#data"
      columns="id,name" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell>tpmOpen</cell>  
          <cell>打开时抢占</cell> 
        </row>  
        <row> 
          <cell>tpmExecute</cell>  
          <cell>执行时抢占</cell> 
        </row> 
      </rows> 
    </data>  
    <data id="customData" component="/UI/system/components/data.xbl.xml#data"
      store-type="simple" columns="unselect,first_prev,next_last" auto-load="true"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion"
      auto-load="false" id="flowTaskData" concept="SA_Task" store-type="simple"> 
      <reader id="default1" action="/system/logic/action/queryTaskCenterAction1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="activity,label"
      src="" auto-load="false" id="activities"/>  
    <xforms:bind nodeset="instance('customData')/unselect" readonly="call('getFlowToExecutorsDataRowCount') &lt;= 0"/>  
    <xforms:bind nodeset="instance('customData')/first_prev" readonly="index('flow_to_data_executors') &lt;= 0"/>  
    <xforms:bind nodeset="instance('customData')/next_last" readonly="index('flow_to_data_executors') &gt;= call('getFlowToExecutorsDataRowCount') - 1"/>  
    <xforms:action ev:event="onload"> 
      <xforms:script> <![CDATA[
			]]> </xforms:script> 
    </xforms:action>  
    <xforms:action id="action1" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript1">specFlowOut.mainmodelXBLLoaded(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <view id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grid1" data="activities" class="grid-compact"> 
      <xui:column id="gridColumn1" ref="activity" label="activity" type="ed" visible="false"/>  
      <xui:column id="gridColumn2" label="所有环节" type="ro" width="*" ref="label"/>  
      <xforms:action ev:event="xforms-index-changed"> 
        <xforms:script> <![CDATA[
			activitySelectChanged(event.getData());
		]]> </xforms:script> 
      </xforms:action> 
    </xhtml:div>  
    <layout style="width: 100%; height: 100%; overflow: hidden"> 
      <xhtml:div style="display: none"> 
        <xhtml:div id="flow_to_data_grid" data="flow_to_data" component="/UI/system/components/grid.xbl.xml#grid"> 
          <column ref="activity"/>  
          <column ref="process" visible="false"/>  
          <column ref="template" visible="false"/>  
          <column ref="passedActivities" visible="false"/>  
          <column ref="taskAssignMode" visible="false"/>  
          <column ref="executorKinds"/>  
          <column ref="eurl" visible="false"/>  
          <column ref="lock" visible="false"/>  
          <column ref="warningTime" visible="false"/>  
          <column ref="executeMode" visible="false"/>  
          <column ref="executeMode2" visible="false"/>  
          <column ref="emergencyName" visible="false"/>  
          <column ref="catalogId" visible="false"/>  
          <column ref="content" visible="false"/>  
          <column ref="preemptMode" visible="false"/>  
          <column ref="activity2" visible="false"/>  
          <column ref="createTime" visible="false"/>  
          <column ref="limitTime" visible="false"/>  
          <column ref="emergencyId" visible="false"/>  
          <column ref="curl" visible="false"/>  
          <column ref="process2" visible="false"/>  
          <column ref="name" visible="false"/>  
          <column ref="lastModifyTime" visible="false"/>  
          <column ref="readonly" visible="false"/>  
          <column ref="isEnd" visible="false"/>  
          <column ref="selected" visible="false"/>  
          <column ref="dataId" visible="false"/> 
        </xhtml:div> 
      </xhtml:div>  
    
    <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;">
   <center id="borderLayout-center1">
			<xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="30%"
				mode="horz" has-drag-bar="true" has-arrow-button="false" id="_HSplitter2" style="100%;height:100%;"> 
        		<xhtml:div region="left" id="_div9"> 	
            		<xui:place control="grid1" id="controlPlace1" style="height:100%;width:100%;"/>
				</xhtml:div>
				<xhtml:div region="right" id="_div11">	
            <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" style="width:100%; height: 100%;"
              id="tabs1" class="noneborder"> 
              <tab id="flowto_base_tab" selected="true"> 
                <label>基本</label>  
                <xhtml:div style="width: 100%; height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
                  <top size="30px"> 
                    <xhtml:table style="width: 99%; height: 100%; table-layout: fixed"
                      border="0" cellspacing="0" cellpadding="0"> 
                      <xhtml:tr> 
                        <xhtml:td style="padding-left: 5px; padding-bottom: 3px;width:65px;">任务主题：</xhtml:td>  
                        <xhtml:td> 
                          <xforms:input ref="instance('flow_to_data')/name" style="width:100%;"/> 
                        </xhtml:td> 
                      </xhtml:tr> 
                    </xhtml:table> 
                  </top>  
                  <center> 
                    <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter"
                      fix-size="190px" mode="horz" has-drag-bar="true" has-arrow-button="false"
                      style="width:100%;height:100%;"> 
                      <xhtml:div region="left"> 
                        <xhtml:div style="width: 100%;height:100%;" component="/UI/system/components/borderLayout.xbl.xml#borderLayout"> 
                          <top size="28px"> 
                            <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="margin: 2px;" separator-size="4">
   <xhtml:div id="div1" class="xui-container" style="width:100px;height:auto;">
    <xhtml:input type="text" id="flow_to_query_input" onkeydown="flowToFilterInputKeydown(event);" style="width: 100%;" class="xui-input"></xhtml:input></xhtml:div> 
   <xforms:trigger appearance="image" icon-class="icon-system-search" style="width:32px;" class="button-yellow" id="trigger1">
    <xforms:label id="default2">查询</xforms:label>
    <xforms:action ev:event="DOMActivate" id="action2">
     <xforms:script id="xformsScript2">filterOrgTreeData();</xforms:script></xforms:action> </xforms:trigger> </xhtml:div></top>  
                          <center>
                          	 <xhtml:div id="org-tree" style="height:100%;width:100%;" component="/UI/system/components/orgTree.xbl.xml#orgTree"> 
                               <data id="orgTreeData" component="/UI/system/components/data.xbl.xml#bizData" auto-load="true"/>  
                               <xhtml:div data="orgTreeData" id="org-tree-grid" style="background-color: white; overflow: auto;height:100%;width:100%" 
                               component="/UI/system/components/grid.xbl.xml#grid" onRowDblClick="flowToSelectToRightAction" appearance="tree"
                               
                               multi-selection="false" class="ui-light grid-compact"> 
                                 <column ref="sName" type="tree" readonly="true"/> 
                               </xhtml:div> 
                             </xhtml:div>
                              
							  <!--  
                            <xhtml:div style="width: 100%; height: 100%; overflow: auto;"> 
                              <xforms:grid data="orgTreeData" id="org-tree-grid"
                                width="100%" height="100%" appearance="tree" delay="true"
                                
                                onShowNodeImg="org_person_tree_getNodeImage" onRowExpand="toDataOrgPersonTreeRowExpand"
                                onRowDblClick="toDataOrgPersonTreeRowDBClick" onRowChecked="toDataOrgPersonTreeRowChecked"
                                multi-selection="true" cascade="true"> 
                                <xforms:column ref="name" type="tree" readonly="true"/>  
                                <xforms:column ref="fid" readonly="true"/>  
                                <xforms:column ref="fname" readonly="true"/>  
                                <xforms:column ref="id" readonly="true"/>  
                                <xforms:column ref="kind" readonly="true"/>  
                                <xforms:column ref="loaded" readonly="true"/>  
                                <xforms:column ref="selectable" readonly="true"/>  
                                <xforms:column ref="data_id" readonly="true"/>
                                 
                              </xforms:grid> 
                            </xhtml:div>
                             -->
                          </center> 
                        </xhtml:div> 
                      </xhtml:div>  
                      <xhtml:div region="right">
                      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%;height:100%;">
   <top size="28px" id="borderLayout-top3">
   <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar3" separator-size="2" style="margin:2px;">
   		<xui:place control="trigger2" id="controlPlace2" style="width:48px;"></xui:place>
   		<xui:place control="trigger12" id="controlPlace12" style="width:54px;"></xui:place>
   		<xui:place control="trigger112" id="controlPlace12" style="width:54px;"></xui:place>
   		<xui:place control="trigger1112" id="controlPlace1112" style="width:48px;"></xui:place>
   </xhtml:div></top>
   <center id="borderLayout-center2">
                      <xhtml:div id="flow_to_data_executors_grid" data="flow_to_data_executors" component="/UI/system/components/grid.xbl.xml#grid" style="width: 100%;height:100%;" onRowDblClick="flowToSelectToLeftAction" class="grid-compact"> 
                        <column ref="fid" visible="false"/>  
                        <column ref="fName" visible="false"/>  
                        <column ref="name" label="名称" width="*"/>  
                        <column ref="kind" align="center" type="html" onRender="executorKindCallback" label="类型" width="60px"/>  
                        <column ref="isManager" align="center" type="ch" label="管理者" width="60px"/>  
                        <column ref="dataId" visible="false"/> 
                      </xhtml:div> 
   </center>
  </xhtml:div></xhtml:div> 
                    </xhtml:div> 
                  </center> 
                </xhtml:div>  
                <!-- 
                <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed;" class="no-editor-border"> 
                  <xhtml:tr height="25px" valign="bottom"> 
                    <xhtml:td width="75px" style="padding-left: 5px;">任务主题：</xhtml:td>  
                    <xhtml:td style="border-bottom: 1px solid #c0c0c0"> 
                      <xforms:input ref="instance('flow_to_data')/name"  class="xui-autofill tdinput"/> 
                    </xhtml:td> 
                  </xhtml:tr>  
                  <xhtml:tr height="5px"> 
                    <xhtml:td/>  
                    <xhtml:td/> 
                  </xhtml:tr>  
                  <xhtml:tr> 
                    <xhtml:td colspan="2"> 
                      <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed;"> 
                        <xhtml:tr> 
                          <xhtml:td width="200px" height="100%" valign="top"> 
                            <xhtml:div style="width: 100%; height:100%;border: 1px solid #c6c6c6;"> 
                              <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                                <xhtml:tr valign="top" height="30px"> 
                                  <xhtml:td> 
                                    <xhtml:div style="height: 100%; border-bottom: 1px solid gray; padding-top: 5px"> 
                                      <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" class="no-editor-border"> 
                                        <xhtml:tr height="22px" valign="bottom"> 
                                          <xhtml:td width="66px" style="padding-bottom: 2px;">快速查询：</xhtml:td>  
                                          <xhtml:td style="border-bottom: 1px solid #c0c0c0;"> 
                                            <xhtml:input type="text" id="flow_to_query_input" style="width:100%;border-width:0px 0px 0px 0px;" onkeydown="flowToFilterInputKeydown(event);"/> 
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
                                    <xhtml:div id="org-tree" style="height:100%;width:100%;" component="/UI/system/components/orgTree.xbl.xml#orgTree"> 
                                      <data id="orgTreeData" component="/UI/system/components/data.xbl.xml#bizData" auto-load="true"/>  
                                      <xhtml:div data="orgTreeData" id="org-tree-grid" style="background-color: white; overflow: auto;height:100%;width:100%" component="/UI/system/components/grid.xbl.xml#grid" onRowDblClick="flowToSelectToRightAction" appearance="tree"> 
                                        <column ref="sName" type="tree" readonly="true"/> 
                                      </xhtml:div> 
                                    </xhtml:div> 
                                  </xhtml:td> 
                                </xhtml:tr> 
                              </xhtml:table> 
                            </xhtml:div> 
                          </xhtml:td>  
                          <xhtml:td width="35px" style="padding-left: 2px"> 
                            <xforms:trigger class="select_button"> 
                              <xforms:label> 
                                <b>&gt;</b> 
                              </xforms:label>  
                              <xforms:action ev:event="DOMActivate"> 
                                <xforms:script> <![CDATA[
			          	  										flowToSelectToRightAction();
			          	  									]]> </xforms:script> 
                              </xforms:action> 
                            </xforms:trigger>  
                            <xhtml:br/>  
                            <xhtml:br/>  
                            <xforms:trigger class="select_button" ref="instance('customData')/unselect"> 
                              <xforms:label> 
                                <xhtml:b>&lt;</xhtml:b> 
                              </xforms:label>  
                              <xforms:action ev:event="DOMActivate"> 
                                <xforms:script> <![CDATA[
			          	  										flowToSelectToLeftAction();
			          	  									]]> </xforms:script> 
                              </xforms:action> 
                            </xforms:trigger>  
                            <xhtml:br/>  
                            <xhtml:br/>  
                            <xforms:trigger class="select_button"> 
                              <xforms:label> 
                                <xhtml:b>&gt;&gt;</xhtml:b> 
                              </xforms:label>  
                              <xforms:action ev:event="DOMActivate"> 
                                <xforms:script> <![CDATA[
			          	  										allFlowToSelectToRightAction();
			          	  									]]> </xforms:script> 
                              </xforms:action> 
                            </xforms:trigger>  
                            <xhtml:br/>  
                            <xhtml:br/>  
                            <xforms:trigger class="select_button" ref="instance('customData')/unselect"> 
                              <xforms:label> 
                                <xhtml:b>&lt;&lt;</xhtml:b> 
                              </xforms:label>  
                              <xforms:action ev:event="DOMActivate"> 
                                <xforms:script> <![CDATA[
			          	  										allFlowToSelectToLeftAction();
			          	  									]]> </xforms:script> 
                              </xforms:action> 
                            </xforms:trigger> 
                          </xhtml:td>  
                          <xhtml:td valign="top"> 
                            <xhtml:table border="0" cellpadding="0" cellspacing="0" width="100%" height="100%" style="table-layout: fixed" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                              <xhtml:tr height="30px"> 
                                <xhtml:td> 
                                  <xforms:trigger class="move_button" ref="instance('customData')/first_prev"> 
                                    <xforms:label>移到首位</xforms:label>  
                                    <xforms:action ev:event="DOMActivate"> 
                                      <xforms:script> <![CDATA[
				                                    						flowToMoveToFirstAction();
				                                    					]]> </xforms:script> 
                                    </xforms:action> 
                                  </xforms:trigger>  
                                  <xforms:trigger class="move_button" ref="instance('customData')/first_prev"> 
                                    <xforms:label>上移一位</xforms:label>  
                                    <xforms:action ev:event="DOMActivate"> 
                                      <xforms:script> <![CDATA[
				                                    						flowToMoveToPrevAction();
				                                    					]]> </xforms:script> 
                                    </xforms:action> 
                                  </xforms:trigger>  
                                  <xforms:trigger class="move_button" ref="instance('customData')/next_last"> 
                                    <xforms:label>下移一位</xforms:label>  
                                    <xforms:action ev:event="DOMActivate"> 
                                      <xforms:script> <![CDATA[
				                                    						flowToMoveToNextAction();
				                                    					]]> </xforms:script> 
                                    </xforms:action> 
                                  </xforms:trigger>  
                                  <xforms:trigger class="move_button" ref="instance('customData')/next_last"> 
                                    <xforms:label>移到末位</xforms:label>  
                                    <xforms:action ev:event="DOMActivate"> 
                                      <xforms:script> <![CDATA[
				                                    						flowToMoveToLastAction();
				                                    					]]> </xforms:script> 
                                    </xforms:action> 
                                  </xforms:trigger> 
                                </xhtml:td> 
                              </xhtml:tr>  
                              <xhtml:tr> 
                                <xhtml:td> 
                                  <xhtml:div id="flow_to_data_executors_grid" data="flow_to_data_executors" component="/UI/system/components/grid.xbl.xml#grid" style="width: 100%; height: 100%" onRowDblClick="flowToSelectToLeftAction"> 
                                    <column ref="fid" visible="false"/>  
                                    <column ref="fName" visible="false"/>  
                                    <column ref="name" label="名称" width="110"/>  
                                    <column ref="kind" align="center" type="html" onRender="executorKindCallback" label="类型" width="60"/>  
                                    <column ref="isManager" align="center" type="ch" label="管理者" width="60"/>  
                                    <column ref="dataId" visible="false"/> 
                                  </xhtml:div> 
                                </xhtml:td> 
                              </xhtml:tr> 
                            </xhtml:table> 
                          </xhtml:td> 
                        </xhtml:tr> 
                      </xhtml:table> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
                --> 
              </tab>  
              <tab id="flowto_advance_tab"> 
                <label>高级</label>  
                <xhtml:div style="height: 240px;"> 
                  <xhtml:table style="width: 100%; table-layout: fixed;" border="0"
                    cellpadding="0" cellspacing="0" class="no-editor-border"> 
                    <xhtml:tr heigth="0"> 
                      <xhtml:td width="75px"/>  
                      <xhtml:td width="180px"/>  
                      <xhtml:td width="75px"/>  
                      <xhtml:td/> 
                    </xhtml:tr>  
                    <xhtml:tr height="25px" border="0" valign="bottom"> 
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">任务主题：</xhtml:td>  
                      <xhtml:td colspan="3" style="border-bottom: 1px solid #c0c0c0"> 
                        <xforms:input ref="instance('flow_to_data')/name" auto-size="true"
                          class="xui-autofill"/> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr height="25px" valign="bottom"> 
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">紧迫程度：</xhtml:td>  
                      <xhtml:td style="padding-top: 3px; border-bottom: 1px solid #c0c0c0"> 
                        <xforms:gridselect1 id="flow_to_emergency_kind_select" ref="instance('flow_to_data')/emergencyId"
                          auto-size="true" class="xui-autofill"> 
                          <xforms:label ref="name"/>  
                          <xforms:value ref="id"/>  
                          <xforms:itemset data="flow_to_emergency_kind"> 
                            <xforms:column ref="id" visable="false" width="30"/>  
                            <xforms:column ref="name" visable="true" width="100"/> 
                          </xforms:itemset>  
                          <xforms:action ev:event="xforms-value-changed"> 
                            <xforms:setvalue ref="instance('flow_to_data')/emergencyName"
                              value="instance('flow_to_emergency_kind')/name"/> 
                          </xforms:action> 
                        </xforms:gridselect1> 
                      </xhtml:td>  
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">提交时间：</xhtml:td>  
                      <xhtml:td style="border-bottom: 1px solid #c0c0c0"> 
                        <xforms:input ref="instance('flow_to_data')/createTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm:ss')"
                          auto-size="true" class="xui-autofill"/> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr height="25px" valign="bottom"> 
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">完成期限：</xhtml:td>  
                      <xhtml:td style="border-bottom: 1px solid #c0c0c0"> 
                        <xforms:input ref="instance('flow_to_data')/limitTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm:ss')"
                          auto-size="true" class="xui-autofill"/> 
                      </xhtml:td>  
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">提醒时间：</xhtml:td>  
                      <xhtml:td style="border-bottom: 1px solid #c0c0c0"> 
                        <xforms:input ref="instance('flow_to_data')/warningTime" xforms:format="format-dateTime('yyyy-MM-dd hh:mm:ss')"
                          auto-size="true" class="xui-autofill"/> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr height="25px" valign="bottom"> 
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">执行模式：</xhtml:td>  
                      <xhtml:td style="padding-top: 3px; border-bottom: 1px solid #c0c0c0"> 
                        <xforms:gridselect1 id="flow_to_execute_mode_select" ref="instance('flow_to_data')/executeMode"
                          auto-size="true" class="xui-autofill"> 
                          <xforms:label ref="name"/>  
                          <xforms:value ref="id"/>  
                          <xforms:itemset data="flow_to_execute_mode"> 
                            <xforms:column ref="id" visable="false" width="30"/>  
                            <xforms:column ref="name" visable="true" width="100"/> 
                          </xforms:itemset>  
                          <xforms:action ev:event="xforms-value-changed"> 
                            <xforms:setvalue ref="instance('flow_to_data')/sPreemptMode"
                              value="''" if="instance('flow_to_data')/sExecuteMode != 'temPreempt'"/>  
                            <xforms:setvalue ref="instance('flow_to_data')/sPreemptMode"
                              value="'tpmOpen'" if="instance('flow_to_data')/sExecuteMode = 'temPreempt'"/> 
                          </xforms:action> 
                        </xforms:gridselect1> 
                      </xhtml:td>  
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">抢占模式：</xhtml:td>  
                      <xhtml:td style="border-bottom: 1px solid #c0c0c0"> 
                        <xforms:gridselect1 id="flow_to_preempt_mode_select" ref="instance('flow_to_data')/preemptMode"
                          auto-size="true" class="xui-autofill"> 
                          <xforms:label ref="name"/>  
                          <xforms:value ref="id"/>  
                          <xforms:itemset data="flow_to_preempt_mode"> 
                            <xforms:column ref="id" visable="false" width="30"/>  
                            <xforms:column ref="name" visable="true" width="100"/> 
                          </xforms:itemset> 
                        </xforms:gridselect1> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr height="25px" valign="bottom"> 
                      <xhtml:td style="padding-left: 5px; padding-bottom: 2px; font-size: 10pt">简短附言：</xhtml:td>  
                      <xhtml:td colspan="3" style="border-bottom: 1px solid #c0c0c0"> 
                        <xforms:input ref="instance('flow_to_data')/content" auto-size="true"
                          class="xui-autofill"/> 
                      </xhtml:td> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:div> 
              </tab> 
            </xhtml:div> 
          		</xhtml:div>	
          	</xhtml:div>   </center>
  <bottom size="38px" id="borderLayout-bottom1">
                   
                   
  <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="float:right;"><xforms:trigger style="margin-right:8px;width:75px;" class="button-green"> 
                    <xforms:label>确定</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script> <![CDATA[
												windowEnsure(generateJSReturnData());
											]]> </xforms:script> 
                    </xforms:action> 
                  </xforms:trigger><xforms:trigger style="width:75px;" appearance="minimal"> 
                    <xforms:label>取消</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script> <![CDATA[
												windowCancel();
											]]> </xforms:script> 
                    </xforms:action> 
                  </xforms:trigger></xhtml:div>
  </bottom>
  <top size="5px" id="borderLayout-top2"></top>
  <left size="5px" id="borderLayout-left1"></left>
  <right size="5px" id="borderLayout-right1"></right></xhtml:div></layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger2" appearance="minimal">
   <xforms:label id="default3"><![CDATA[置顶]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger12" appearance="minimal">
   <xforms:label id="default3"><![CDATA[上一条]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger112" appearance="minimal">
   <xforms:label id="default3"><![CDATA[下一条]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1112" appearance="minimal">
   <xforms:label id="default3"><![CDATA[最后]]></xforms:label></xforms:trigger>
   <!-- 
       <button class="move_button" id="to_move_to_first" onclick="flowToMoveToFirstAction();">移到首位</button> 
       <button class="move_button" id="to_move_to_prev" onclick="flowToMoveToPrevAction();">上移一位</button> 
       <button class="move_button" id="to_move_to_next" onclick="flowToMoveToNextAction();">下移一位</button> 
       <button class="move_button" id="to_move_to_last" onclick="flowToMoveToLastAction();">移到末位</button> 
    -->
   </view>  
  <resource id="resource1"> 
    <xhtml:script type="text/javascript" src="/UI/SA/process/monitor/dialog/specFlowOut.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/process/process.js"/>  
    <xhtml:style>.select_button { width: 30px; height: 25px; margin: 0; padding: 2px 0 0 0; } .move_button {width: 56px;height: 22px;border: 1px solid #baceeb;background: white; margin: 0;padding: 0;} .dialog_button { width: 80px; height: 25px; margin: 0; padding: 2px 0 0 0; } .tdinput input { height: 25px; line-height: 27px; }</xhtml:style>  
    <xhtml:script id="htmlScript1" src="specFlowOut.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </resource> 
</window>

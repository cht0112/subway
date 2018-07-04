<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:121px;top:446px;height:149px;left:18px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="main" concept="SA_ProcessTemplate" store-type="simple" relations="sName,sKindID,sProcess,sProcessName,sCreatorFID,sCreatorFName,sCreatorName,sCreatorID,sCreateTime,sContent,version,sTemplateID" direct-delete="false"> 
      <reader id="default24" action="/system/logic/action/queryProcessTemplateAction"/>  
      <writer id="default25" action="/system/logic/action/saveProcessTemplateAction"/>  
      <creator id="default26" action="/system/logic/action/createProcessTemplateAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="unit,unit_label,sn,type,execute_mode,execute_mode_label,org_name,org_fid,org_expr,is_customized" auto-load="true" id="detail" store-type="grid"> 
      <rule id="dataBizRule4" column="unit_label" readonly="not(call('allowDetailUnitCellEdit'))"/>  
      <rule id="dataBizRule1" column="execute_mode_label" readonly="not(call('allowDetailCellEdit'))"/>  
      <rule id="dataBizRule2" column="org_name" readonly="not(call('allowDetailCellEdit'))"/>  
      <rule id="dataBizRule3" column="is_customized" readonly="not(call('allowDetailCellEdit'))"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="name,label" auto-load="true" id="activities"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="insert,insert_child,delete,clear,move_up,move_down,select_template" auto-load="true" id="button_status" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataBizRule6" column="insert" readonly="not(call('allowAdd'))"/>  
      <rule id="dataBizRule7" column="insert_child" readonly="not(call('allowAddChild'))"/>  
      <rule id="dataBizRule8" column="delete" readonly="not(call('allowDelete'))"/>  
      <rule id="dataBizRule9" column="clear" readonly="not(call('allowClear'))"/>  
      <rule id="dataBizRule10" column="move_up" readonly="not(call('allowMoveUp'))"/>  
      <rule id="dataBizRule11" column="move_down" readonly="not(call('allowMoveDown'))"/>  
      <rule id="dataBizRule12" column="select_template" readonly="not(call('allowSelectTemplate'))"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="template" style=";" concept="SA_ProcessTemplate" store-type="simple" onRefreshCreateParam="customizedProcess.templateRefreshCreateParam"> 
      <reader id="default24" action="/system/logic/action/queryProcessTemplateAction"/>  
      <writer id="default25" action="/system/logic/action/saveProcessTemplateAction"/>  
      <creator id="default26" action="/system/logic/action/createProcessTemplateAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="bizData1" style=";" store-type="simple" concept="SA_Task">
      <reader id="default5" action="/system/logic/action/queryTaskCenterAction1"/>
    </data>  
    <xforms:action id="action6" ev:event="onload"> 
      <xforms:script id="xformsScript3">model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="selectExecuteMode" ref="data('detail')/execute_mode" label-ref="data('detail')/execute_mode_label"> 
      <xforms:label ref="label" id="xuiLabel4"/>  
      <xforms:value ref="value" id="default1"/>  
      <xforms:itemset id="default2"> 
        <xforms:column ref="label"/>  
        <xforms:column ref="value" visible="false"/>  
        <itemset-data> 
          <rows xmlns="">  
            <row> 
              <cell>抢占</cell>  
              <cell>temPreempt</cell> 
            </row>  
            <row> 
              <cell>顺序</cell>  
              <cell>temSequential</cell> 
            </row>  
            <row> 
              <cell>同时</cell>  
              <cell>temSimultaneous</cell> 
            </row> 
          </rows> 
        </itemset-data> 
      </xforms:itemset> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="selectUnit" ref="data('detail')/unit" label-ref="data('detail')/unit_label" onCloseup="selectUnitCloseup"> 
      <xforms:label ref="label" id="xuiLabel9"/>  
      <xforms:value ref="name" id="default3"/>  
      <xforms:itemset id="default4" data="activities"> 
        <xforms:column ref="name" visible="false" width="0"/>  
        <xforms:column ref="label" visable="true" width="100"/> 
      </xforms:itemset> 
    </xhtml:div>  
    <xui:view auto-load="true" id="view1"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
          <item id="barItem1"> 
            <xforms:trigger style="width:28px; text-align: center" id="insertButton" appearance="image" src="/UI/system/images/standardToolbar/standard/addbrother.gif" dis-src="/UI/system/images/standardToolbar/standard/un_addbrother.gif" ref="data('button_status')/insert"> 
              <xforms:label id="xuiLabel3">插入</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action1"> 
                <xforms:script id="xformsScript1">insertButtonClick(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="barItem3"> 
            <xforms:trigger style="width:28px; text-align: center" id="insertChildButton" appearance="image" src="/UI/system/images/standardToolbar/standard/addchild.gif" dis-src="/UI/system/images/standardToolbar/standard/un_addchild.gif" ref="data('button_status')/insert_child"> 
              <xforms:label id="xuiLabel5">插入子</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action3"> 
                <xforms:script id="xformsScript4">insertChildButtonClick(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="separator" id="separatorItem1"/>  
          <item id="barItem2"> 
            <xforms:trigger style="width:28px; text-align: center" id="deleteButton" appearance="image" src="/UI/system/images/standardToolbar/standard/remove.gif" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif" ref="data('button_status')/delete"> 
              <xforms:label id="xuiLabel1">删除</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action2"> 
                <xforms:script id="xformsScript2">deleteButtonClick(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="barItem6"> 
            <xforms:trigger style="width:28px; text-align: center" id="clearButton" appearance="image" src="/UI/system/images/process/reset_all.gif" dis-src="/UI/system/images/process/un_reset_all.gif" ref="data('button_status')/clear"> 
              <xforms:label id="xuiLabel2">清空</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action7"> 
                <xforms:script id="xformsScript7">clearButtonClick(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="separator" id="separatorItem2"/>  
          <item id="barItem4"> 
            <xforms:trigger style="width:28px; text-align: center" id="moveupButton" appearance="image" src="/UI/system/images/process/move_up.gif" dis-src="/UI/system/images/process/un_move_up.gif" ref="data('button_status')/move_up"> 
              <xforms:label>上移</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action4"> 
                <xforms:script id="xformsScript5">moveupButtonClick(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="barItem5"> 
            <xforms:trigger style="width:28px; text-align: center" id="movedownButton" appearance="image" src="/UI/system/images/process/move_down.gif" dis-src="/UI/system/images/process/un_move_down.gif" ref="data('button_status')/move_down"> 
              <xforms:label id="xuiLabel7">下移</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action5"> 
                <xforms:script id="xformsScript6">movedownButtonClick(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </xui:bar>  
        <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar2"> 
          <item id="barItem6"> 
            <xforms:trigger class="toolbutton" appearance="minimal"> 
              <xforms:label>保存模板</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>saveTemplate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item id="barItem7"> 
            <xforms:trigger class="toolbutton" ref="instance('button_status')/select_template" appearance="minimal"> 
              <xforms:label id="label13">选择模板</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script>selectTemplate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/dialog.xbl.xml#dialog" modal="true" width="450" height="360" id="dialog1" onOpen="dialog1Open" title="选择执行者"> 
        <xhtml:iframe src="about:blank" frameborder="no" style="width: 100%; height: 100%;" id="customized_frame1" name="customized_frame1"/> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/dialog.xbl.xml#dialog" width="350" height="110" modal="true" title="请输入名称" id="dialog2" onOpen="dialog2Open"> 
        <xhtml:div style="width: 100%; height: 100%;"> 
          <xhtml:table border="0" cellspacing="0" cellpadding="0" style="width: 100%; height: 100%; table-layout: fixed;"> 
            <xhtml:tr height="8px"> 
              <xhtml:td width="8px"/>  
              <xhtml:td/>  
              <xhtml:td width="8px"/> 
            </xhtml:tr>  
            <xhtml:tr valign="top"> 
              <xhtml:td/>  
              <xhtml:td>请输入模板名称：</xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td/>  
              <xhtml:td> 
                <xhtml:input type="text" id="template-name" style="width: 323px;"/> 
              </xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr height="30px" valign="bottom"> 
              <xhtml:td/>  
              <xhtml:td> 
                <xhtml:div style="width: 100%; text-align: right;"> 
                  <xforms:trigger id="btn_cancel" class="custom_button" style="float:right"> 
                    <xforms:label>取消</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>cancelEditName(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger>  
                  <xforms:trigger id="btn_reset" class="custom_button" style="margin-right: 8px;float:right"> 
                    <xforms:label>确定</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>closeEditName(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:div> 
              </xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr height="8px"> 
              <xhtml:td/>  
              <xhtml:td/>  
              <xhtml:td/> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/dialog.xbl.xml#dialog" modal="true" width="316px" height="300px" id="dialog3" title="请选择要使用的模板">
	      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
	        id="borderLayout1" style="width:100%; height: 100%;;"> 
	        <top size="25px"> 
		        <xhtml:table  border="0" cellspacing="0" cellpadding="0" style="width: 100%; height:20px; table-layout: fixed;"> 
		          <xhtml:tr> 
		            <xhtml:td> 
		              <xhtml:input type="text" style="width: 280px" id="condition_input" onkeydown="startQuery1(event);"/> 
		            </xhtml:td>  
		            <xhtml:td width="22px" align="right"> 
		              <xforms:trigger appearance="image" src="/UI/system/images/process/select0.gif" style="text-align: right;"> 
		                <xforms:label>查询</xforms:label>  
		                <xforms:action ev:event="DOMActivate"> 
		                  <xforms:script>startQuery(event);</xforms:script> 
		                </xforms:action> 
		              </xforms:trigger> 
		            </xhtml:td> 
		          </xhtml:tr> 
		        </xhtml:table> 
	        </top>  
	        <center > 
                <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid2" data="template" width="100%" height="100%" onRowDblClick="selectTemplateDblClick"> 
                  <xui:column id="gridColumn11" ref="sName" label="模板名称" width="210" readonly="true"/>  
                  <xui:column id="gridColumn12" ref="sScopeID" type="html" label="类型" width="63" readonly="true" onRender="onTemplateTypeHtml"/> 
                </xhtml:div> 
	        </center> 
	        <bottom size="31px">
                <xhtml:div style="width: 100%; text-align: right;"> 
                  <xforms:trigger class="custom_button" style="float:right"> 
                    <xforms:label>取消</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>cancelSelectTemplate(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger>  
                  <xforms:trigger class="custom_button" id="trigger4" style="float:right;margin-right: 8px;"> 
                    <xforms:label>确定</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>closeSelectTemplate(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:div> 
	        </bottom>
	      </xhtml:div>  
      
      
       


		<!--  
        <xhtml:div style="width: 100%; height: 100%;"> 
          <xhtml:table component="/UI/system/components/tableLayout.xbl.xml#tableLayout" border="0" cellspacing="0" cellpadding="0" style="width: 100%; height: 100%; table-layout: fixed;"> 
            <xhtml:tr height="8px"> 
              <xhtml:td width="8px"/>  
              <xhtml:td/>  
              <xhtml:td width="8px"/> 
            </xhtml:tr>  
            <xhtml:tr height="20px"> 
              <xhtml:td/>  
              <xhtml:td> 
                <xhtml:table  border="0" cellspacing="0" cellpadding="0" style="width: 100%; height:100%; table-layout: fixed;"> 
                  <xhtml:tr> 
                    <xhtml:td> 
                      <xhtml:input type="text" style="width: 100%" id="condition_input" onkeydown="startQuery1(event);"/> 
                    </xhtml:td>  
                    <xhtml:td width="22px" align="right"> 
                      <xforms:trigger appearance="image" src="/UI/system/images/process/select0.gif" style="text-align: right;"> 
                        <xforms:label>查询</xforms:label>  
                        <xforms:action ev:event="DOMActivate"> 
                          <xforms:script>startQuery(event);</xforms:script> 
                        </xforms:action> 
                      </xforms:trigger> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td/>  
              <xhtml:td> 
                <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid2" data="template" width="100%" height="100%" onRowDblClick="selectTemplateDblClick"> 
                  <xui:column id="gridColumn11" ref="sName" label="模板名称" width="210" readonly="true"/>  
                  <xui:column id="gridColumn12" ref="sScopeID" type="html" label="类型" width="63" readonly="true" onRender="onTemplateTypeHtml"/> 
                </xhtml:div> 
              </xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr height="31px" valign="bottom"> 
              <xhtml:td/>  
              <xhtml:td> 
                <xhtml:div style="width: 100%; text-align: right;"> 
                  <xforms:trigger class="custom_button" style="float:right"> 
                    <xforms:label>取消</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>cancelSelectTemplate(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger>  
                  <xforms:trigger class="custom_button" id="trigger4" style="float:right;margin-right: 8px;"> 
                    <xforms:label>确定</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>closeSelectTemplate(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:div> 
              </xhtml:td>  
              <xhtml:td/> 
            </xhtml:tr>  
            <xhtml:tr height="8px"> 
              <xhtml:td/>  
              <xhtml:td/>  
              <xhtml:td/> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div> 
        -->
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid1" data="detail"> 
        <xui:column id="gridColumn2" ref="sn" label="序号" type="ed" width="50" readonly="true"/>  
        <xui:column id="gridColumn1" ref="unit_label" label="环节" type="select" width="150" editor="selectUnit"/>  
        <xui:column id="gridColumn3" ref="execute_mode_label" label="执行模式" type="select" width="70" editor="selectExecuteMode"/>  
        <xui:column id="gridColumn5" ref="org_name" label="执行者" type="inputbtn" width="120" onButtonClick="grid1OrgNameButtonClick"/>  
        <xui:column id="gridColumn7" ref="is_customized" label="允许修改" type="checkbox" width="60" align="center" select-ref="is_customized" checked-value="1" unchecked-value="0"/>  
        <xui:column id="gridColumn4" ref="unit" label="unit" type="ed" width="100" visible="false"/>  
        <xui:column id="gridColumn6" ref="type" label="type" type="ed" width="100" visible="false"/>  
        <xui:column id="gridColumn8" ref="execute_mode" label="execute_mode" type="ed" width="100" visible="false"/>  
        <xui:column id="gridColumn9" ref="org_expr" label="org_expr" type="ed" width="100" visible="false"/>  
        <xui:column id="gridColumn10" ref="org_fid" label="org_fid" type="ed" width="100" visible="false"/> 
      </xhtml:div>  
      <xforms:trigger id="trigger2" class="custom_button"> 
        <xforms:label id="xuiLabel10">确定</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action10"> 
          <xforms:script id="xformsScript10">trigger2Click(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trigger3" class="custom_button"> 
        <xforms:label id="xuiLabel11">取消</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action11"> 
          <xforms:script id="xformsScript11">trigger3Click(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout id="layout1" style="overflow: hidden; width: 100%; height: 100%; margin: 0; padding: 0;"> 
        <xui:place control="toolbars1" id="controlPlace5"/>  
        <xui:place control="grid1" id="controlPlace6" style="width:100%;height:304px"/>  
        <xhtml:table border="0" cellspacing="0" cellpadding="0" style="width: 100%; height: 32px; table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
          <xhtml:tr valign="bottom"> 
            <xhtml:td> 
              <xhtml:div style="width: 100%; text-align: right;"> 
                <xui:place control="trigger3" id="controlPlace9" style="float:right"/>  
                <xui:place control="trigger2" id="controlPlace8" style="float:right;margin-right:8px;"/> 
              </xhtml:div> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table>  
        <xui:place control="dialog1" id="controlPlace2" style="top:211px;left:95px;"/>  
        <xui:place control="dialog2" id="controlPlace3" style="top:213px;left:172px;"/>  
        <xui:place control="dialog3" id="controlPlace3" style="top:214px;left:264px;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="width: 480px; _width:100%; height: 100%; padding: 8px; margin: 0; overflow: hidden;" id="rootLayout"> 
      <xhtml:div style="display: none"> 
        <xui:place control="selectExecuteMode" id="controlPlace1" style="width:140px;"/>  
        <xui:place control="selectUnit" id="controlPlace7" style="width:140px;"/> 
      </xhtml:div>  
      <xui:place control="view1" id="controlPlace4"/> 
    </xui:layout> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="customizedProcess.js"/>  
    <xhtml:style type="text/css">div.gridbox_justep .odd_justep { background-color: white; } .toolbutton { background: none; width: 55px; text-align: center; } .toolbutton button { height: 26px; background: none; border: none; } .toolbutton * { color: black; } .custom_button { margin: 0; width: 75px; } .custom_button button { display: inline; height: 23px; _height: 24px; }</xhtml:style> 
  </resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:118px;top:400px;height:153px;left:39px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="process,processName" src="" auto-load="true" id="allProcess" style=";"> 
      <rows xmlns=""> </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="process,activity,activityName" src="" auto-load="true" id="allActivity" style=";"> 
      <rows xmlns=""> </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="name,label" auto-load="true" id="activities"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="unit,unit_label,sn,type,execute_mode,execute_mode_label,org_name,org_fid,org_expr,is_customized" auto-load="true" id="template" store-type="grid"> 
      <rule id="dataBizRule1" column="execute_mode_label" readonly="not(call('allowDetailCellEdit'))"/>  
      <rule id="dataBizRule2" column="org_name" readonly="not(call('allowDetailCellEdit'))"/>  
      <rule id="dataBizRule3" column="is_customized" readonly="not(call('allowDetailCellEdit'))"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="insert,insert_child,delete,clear,move_up,move_down" auto-load="true" id="button_status" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/>  
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataBizRule7" column="insert_child" readonly="not(call('allowAddChild'))"/>  
      <rule id="dataBizRule8" column="delete" readonly="not(call('allowDelete'))"/>  
      <rule id="dataBizRule9" column="clear" readonly="not(call('allowClear'))"/>  
      <rule id="dataBizRule10" column="move_up" readonly="not(call('allowMoveUp'))"/>  
      <rule id="dataBizRule11" column="move_down" readonly="not(call('allowMoveDown'))"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="bizData1" style=";" store-type="simple" concept="SA_ProcessTemplate"> 
      <reader id="default1" action="/system/logic/action/queryProcessTemplateAction"/>  
      <filter name="filter1" id="filter1"><![CDATA[SA_ProcessTemplate.sKindID='template']]></filter> 
    </data>  
    <xforms:action id="action6" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript3">detailData.model1ModelConstructDone(event)</xforms:script> 
    </xforms:action>  
    <xforms:action id="action9" ev:event="xforms-model-construct"> 
      <xforms:script id="xformsScript9">detailData.model1ModelConstruct(event)</xforms:script> 
    </xforms:action>  
    <xforms:action id="action10" ev:event="onload"> 
      <xforms:script id="xformsScript10">detailData.model1Load(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" style="width:100%;height:100%" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="allProcess" onAfterIndexChanged="detailData.grid1AfterIndexChanged"> 
      <xui:column id="gridColumn3" ref="process" label="process" type="ed" width="100px" visible="false"/>  
      <xui:column id="gridColumn1" ref="processName" label="流程名称" type="ed" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" style="width:100%;height:100%" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid2" data="allActivity"> 
      <xui:column id="gridColumn4" ref="process" label="process" type="ed" width="100px" visible="false"/>  
      <xui:column id="gridColumn5" ref="activity" label="activity" type="ed" width="100px" visible="false"/>  
      <xui:column id="gridColumn2" ref="activityName" label="环节名称" type="ed" readonly="true" width="*"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="windowReceiver1" onReceive="detailData.windowReceiver1Receive"/>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1" style=";"> 
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
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid3" data="template"> 
      <xui:column id="gridColumn11" ref="sn" label="序号" type="ed" width="50px" readonly="true"/>  
      <xui:column id="gridColumn10" ref="unit_label" label="环节" type="select" width="150px" editor="selectUnit"/>  
      <xui:column id="gridColumn14" ref="execute_mode_label" label="执行模式" type="select" width="70px" editor="selectExecuteMode"/>  
      <xui:column id="gridColumn15" ref="org_name" label="执行者" type="inputbtn" width="120px" onButtonClick="grid3OrgNameButtonClick"/>  
      <xui:column id="gridColumn18" ref="is_customized" label="允许修改" type="checkbox" width="60px" align="center" select-ref="is_customized" checked-value="1" unchecked-value="0"/>  
      <xui:column id="gridColumn9" ref="unit" label="unit" type="ed" width="100px" visible="false"/>  
      <xui:column id="gridColumn12" ref="type" label="type" type="ed" width="100px" visible="false"/>  
      <xui:column id="gridColumn13" ref="execute_mode" label="execute_mode" type="ed" width="100px" visible="false"/>  
      <xui:column id="gridColumn17" ref="org_expr" label="org_expr" type="ed" width="100px" visible="false"/>  
      <xui:column id="gridColumn16" ref="org_fid" label="org_fid" type="ed" width="100px" visible="false"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="selectExecuteMode" ref="data('template')/execute_mode" label-ref="data('template')/execute_mode_label"> 
      <xforms:label ref="label"/>  
      <xforms:value ref="value"/>  
      <xforms:itemset> 
        <xforms:column ref="label"/>  
        <xforms:column ref="value" visible="false"/>  
        <itemset-data> 
          <rows xmlns="">  
            <row id="default7"> 
              <cell id="default8">抢占</cell>  
              <cell id="default9">temPreempt</cell> 
            </row>  
            <row id="default10"> 
              <cell id="default11">顺序</cell>  
              <cell id="default12">temSequential</cell> 
            </row>  
            <row id="default13"> 
              <cell id="default14">同时</cell>  
              <cell id="default15">temSimultaneous</cell> 
            </row> 
          </rows> 
        </itemset-data> 
      </xforms:itemset> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="selectUnit" ref="data('template')/unit" label-ref="data('template')/unit_label" onCloseup="selectUnitCloseup"> 
      <xforms:label ref="label" id="xuiLabel9"/>  
      <xforms:value ref="name" id="default3"/>  
      <xforms:itemset id="default4" data="activities"> 
        <xforms:column ref="name" visible="false" width="0" id="default16"/>  
        <xforms:column ref="label" visable="true" width="100" id="default17"/> 
      </xforms:itemset> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/dialog.xbl.xml#dialog" modal="true" width="400px" height="360px" id="dialog1" onOpen="dialog1Open" title="选择执行者"> 
      <xhtml:iframe src="about:blank" frameborder="no" style="width: 100%; height: 100%;" id="customized_frame1" name="customized_frame1"/> 
    </xhtml:div>  
    <xforms:trigger id="trigger1"> 
      <xforms:label id="xuiLabel3">确定</xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">detailData.trigger1Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger2"> 
      <xforms:label id="xuiLabel4">取消</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">detailData.trigger2Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger3" disabled="true"> 
      <xforms:label id="xuiLabel6">另存为新模板</xforms:label>  
      <xforms:action id="action8" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript8">detailData.trigger3Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/dialog.xbl.xml#dialog" width="350px" height="120px" modal="true" title="另存为新模板" id="dialog2" onOpen="dialog2Open"> 
      <xhtml:table border="0" style="width: 100%;height:100%;table-layout:fixed;" cellpadding="0" cellspacing="8" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="16px;"> 
          <xhtml:td>请输入模板名称：</xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:input class="xui-input" type="text" id="template-name" style="width: 325px;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr height="22px"> 
          <xhtml:td align="right"> 
            <xhtml:table cellpadding="0" cellspacing="0" border="0" style="width:100%;height:100%;table-layout:fixed"> 
              <xhtml:tr> 
                <xhtml:td align="right"> 
                  <xforms:trigger id="btn_reset" style="width: 75px;margin-right:8px;"> 
                    <xforms:label>确定</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>detailData.closeEditName(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:td>  
                <xhtml:td align="right" width="75px"> 
                  <xforms:trigger id="btn_cancel" style="width: 75px;"> 
                    <xforms:label>取消</xforms:label>  
                    <xforms:action ev:event="DOMActivate"> 
                      <xforms:script>cancelEditName(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%; overflow: hidden;" id="rootLayout"> 
      <xui:place control="dialog2" id="controlPlace3" style="top:213px;left:172px;"/>  
      <xhtml:table id="table1" cellpadding="0" cellspacing="8" border="0" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="tr1"> 
          <xhtml:td id="td1" colspan="2"> 
            <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabPanel1" class="xui-tabPanel" style="width:100%;height:100%;;"> 
              <xui:tab id="tabPage1" selected="true"> 
                <xui:label id="xuiLabel1">基本信息</xui:label>  
                <xhtml:table id="table2" class="xui-container" style="width:100%;height:100%;table-layout:fixed" border="0" cellpadding="0" cellspacing="2" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                  <xhtml:tr id="tr3"> 
                    <xhtml:td id="td5" style="height:30px;"> 
                      <xhtml:table id="table21" style="width:100%;height:100%;table-layout:fixed" border="0" cellpadding="0" cellspacing="0"> 
                        <xhtml:tr> 
                          <xhtml:td style="width:60px"> 
                            <xhtml:label id="label1" class="xui-label" style="background:none;">模板名称：</xhtml:label> 
                          </xhtml:td>  
                          <xhtml:td> 
                            <xhtml:input type="text" value="" id="name-input" class="xui-input" style="border-style:none none solid none;line-height:18px;width:100%;" align="bottom"/> 
                          </xhtml:td>  
                          <xhtml:td style="width:50px;" align="center"> 
                            <xhtml:label id="label2" class="xui-label" style="background:none;width:100%;height:13px;">类型：</xhtml:label> 
                          </xhtml:td>  
                          <xhtml:td style="width:60px;"> 
                            <xhtml:select id="select1" class="xui-select" style="width:100%;"> 
                              <xhtml:option value="public">系统</xhtml:option>  
                              <xhtml:option value="private">用户</xhtml:option> 
                            </xhtml:select> 
                          </xhtml:td> 
                        </xhtml:tr> 
                      </xhtml:table> 
                    </xhtml:td> 
                  </xhtml:tr>  
                  <xhtml:tr id="tr4"> 
                    <xhtml:td> 
                      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="50%" mode="horz" has-drag-bar="true" has-arrow-button="false" id="HSplitter2" style="width:100%;height:100%;"> 
                        <xhtml:div region="left" id="div9"> 
                          <xui:place control="grid1" id="controlPlace1" style="width:100%;height:100%;"/> 
                        </xhtml:div>  
                        <xhtml:div region="right" id="div11"> 
                          <xui:place control="grid2" id="controlPlace2" style="width:100%;height:100%;"/> 
                        </xhtml:div> 
                      </xhtml:div> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xui:tab>  
              <xui:tab id="tabPage2" xforms-select="detailData.tabPage2Select"> 
                <xui:label id="xuiLabel2"><![CDATA[详细信息]]></xui:label>  
                <xhtml:table id="table3" class="xui-container" style="height:100%;width:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                  <xhtml:tr id="tr5"> 
                    <xhtml:td id="td2" style="height:30px;"> 
                      <xui:place control="toolbars1" id="controlPlace6"/> 
                    </xhtml:td> 
                  </xhtml:tr>  
                  <xhtml:tr id="tr6"> 
                    <xhtml:td id="td6"> 
                      <xui:place control="grid3" id="controlPlace7" style="height:100%;width:100%;"/> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xui:tab> 
            <xui:tab id="tabPage3" xforms-select="detailData.tabPage3Select" xforms-deselect="detailData.tabPage3DeSelect">
   <xui:label id="xuiLabel8"><![CDATA[详细信息]]></xui:label>
  <xhtml:div id="designer" class="xui-container" style="height:100%;width:100%;" component="/UI/system/components/processDesigner.xbl.xml#processDesigner"></xhtml:div></xui:tab></xhtml:div> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr2" height="22px"> 
          <xhtml:td id="td3" align="left"> 
            <xui:place control="trigger3" id="controlPlace9" style="width:100px;"/> 
          </xhtml:td>  
          <xhtml:td id="td9" align="right"> 
            <xhtml:table cellspacing="0" border="0" cellpadding="0" style="width:100%;height:100%"> 
              <xhtml:tr valign="top"> 
                <xhtml:td align="right"> 
                  <xui:place control="trigger1" id="controlPlace3" style="width:75px;margin-right:8px;"/> 
                </xhtml:td>  
                <xhtml:td align="right" width="75px"> 
                  <xui:place control="trigger2" id="controlPlace4" style="width:75px;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <xui:place control="windowReceiver1" id="controlPlace5" style="top:348px;left:201px;"/>  
      <xui:place control="dialog1" id="controlPlace12" style="top:351px;left:296px;"/>  
      <xhtml:div style="display: none"> 
        <xui:place control="selectExecuteMode" id="controlPlace8" style="width:140px;"/>  
        <xui:place control="selectUnit" id="controlPlace11" style="width:140px;"/> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="detailData.js"/> 
  </xui:resource> 
</xui:window>

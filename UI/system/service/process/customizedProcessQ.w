<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:model id="model1" component="/UI/system/components/quick/model.xbl.xml#model"
    style="width:104px;top:140px;height:188px;left:135px;" onload="customizedProcessQ.model1Load"> 
    <data auto-load="false" offset="0" limit="20" component="/UI/system/components/quick/data.xbl.xml#bizDataQ"
      id="main" concept="SA_ProcessTemplate" relations="sName,sKindID,sProcess,sProcessName,sCreatorFID,sCreatorFName,sCreatorName,sCreatorID,sCreateTime,sContent,version"
      onBeforeSave="customizedProcessQ.mainBeforeSave"> 
      <reader id="default1" action="/system/logic/action/queryProcessTemplateAction"/>  
      <writer id="default2" action="/system/logic/action/saveProcessTemplateAction"/>  
      <creator id="default3" action="/system/logic/action/createProcessTemplateAction"/> 
    </data>  
    <data component="/UI/system/components/quick/data.xbl.xml#dataQ" id="detail"
      id-property="id" columns="id,unit,unit_label,sn,type,execute_mode,execute_mode_label,org_name,org_fid,org_expr,is_customized"/>  
    <data auto-load="false" offset="0" limit="20" component="/UI/system/components/quick/data.xbl.xml#bizDataQ"
      id="template" concept="SA_ProcessTemplate"> 
      <reader id="default4" action="/system/logic/action/queryProcessTemplate2Action"/>  
      <writer id="default5" action="/system/logic/action/saveProcessTemplateAction"/>  
      <creator id="default6" action="/system/logic/action/createProcessTemplateAction"/> 
    </data>  
    <data auto-load="false" offset="0" limit="20" component="/UI/system/components/quick/data.xbl.xml#bizDataQ"
      id="bizData1" concept="SA_Task"> 
      <reader id="default5" action="/system/logic/action/queryTaskCenterAction1"/> 
    </data> 
  </xui:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/quick/toolbars.xbl.xml#toolbarsQ"
      id="toolbarsQ1" style="width: 100%;"> 
      <xhtml:div component="/UI/system/components/quick/toolbars.xbl.xml#customBarQ"
        id="customBarQ1" > 
        <item id="customBarItem1"> 
          <xhtml:div component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="insertBtn" class="xui-button" img-src="/UI/system/images/standardToolbar/standard/addbrother.gif"
            type="image" style="width:28px; text-align: center; background: none; border: none;"
            title="插入" onclick="customizedProcessQ.insertBtnClick(event)" dis-img-src="/UI/system/images/standardToolbar/standard/un_addbrother.gif"/> 
        </item>  
        <item id="customBarItem2"> 
          <xhtml:div component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="insertChildBtn" class="xui-button" type="image" img-src="/UI/system/images/standardToolbar/standard/addchild.gif"
            style="width:28px; text-align: center; background: none; border: none;"
            title="插入子" onclick="customizedProcessQ.insertChildBtnClick(event)" dis-img-src="/UI/system/images/standardToolbar/standard/un_addchild.gif"/> 
        </item>
        <item id="customBarItem8"> 
          <xhtml:div component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="modifyBtn" class="xui-button" type="image" img-src="/UI/system/images/process/modify.gif"
            style="width:28px; text-align: center; background: none; border: none;" 
            title="修改" onclick="customizedProcessQ.modifyBtnClick(event)" dis-img-src="/UI/system/images/process/un_modify.gif"/> 
        </item>
        <item id="customBarItem3"> 
          <xhtml:div component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="deleteBtn" class="xui-button" type="image" img-src="/UI/system/images/standardToolbar/standard/remove.gif"
            style="width:28px; text-align: center; background: none; border: none;"
            title="删除" onclick="customizedProcessQ.deleteBtnClick(event)" dis-img-src="/UI/system/images/standardToolbar/standard/un_remove.gif"/> 
        </item>  
        <item id="customBarItem4"> 
          <xhtml:div component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="clearBtn" class="xui-button" type="image" img-src="/UI/system/images/process/reset_all.gif"
            style="width:28px; text-align: center; background: none; border: none;"
            title="清空" onclick="customizedProcessQ.clearBtnClick(event)" dis-img-src="/UI/system/images/process/un_reset_all.gif"/> 
        </item>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem5"> 
          <xhtml:div component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="moveupBtn" class="xui-button" type="image" img-src="/UI/system/images/process/move_up.gif"
            style="width:28px; text-align: center; background: none; border: none;"
            title="上移" onclick="customizedProcessQ.moveupBtnClick(event)" dis-img-src="/UI/system/images/process/un_move_up.gif"/> 
        </item>  
        <item id="customBarItem6"> 
          <xhtml:div component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="movedownBtn" class="xui-button" type="image" img-src="/UI/system/images/process/move_down.gif"
            style="width:28px; text-align: center; background: none; border: none;"
            title="下移" onclick="customizedProcessQ.movedownBtnClick(event)" dis-img-src="/UI/system/images/process/un_move_down.gif"/> 
        </item> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/quick/toolbars.xbl.xml#customBarQ"
        id="customBarQ2"> 
        <item id="customBarItem7"> 
          <xhtml:div label="保存模板" component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            onclick="customizedProcessQ.saveTemplateBtnClick(event)" id="saveTemplateBtn"
            class="xui-button" type="text" style="width: 55px; text-align: center; background: none; border: none;"/> 
        </item>  
        <item id="customBarItem8"> 
          <xhtml:div label="选择模板" component="/UI/system/components/quick/commandControl.xbl.xml#buttonQ"
            id="selectTemplateBtn" class="xui-button" type="text" style="width: 55px; text-align: center; background: none; border: none;"
            onclick="customizedProcessQ.selectTemplateBtnClick(event)"/> 
        </item> 
      </xhtml:div> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/quick/grid.xbl.xml#dgridQ" id="dgridQ1"
      data="detail" show-head="true" show-icon="false" style="border: solid 1px #c8c8c8"
      onRenderCell="customizedProcessQ.dgridQ1RenderCell" onIndexChange="customizedProcessQ.dgridQ1IndexChange"> 
      <xui:column id="gridColumn2" ref="sn" label="序号" type="ed" width="50" readonly="true"/>  
      <xui:column id="gridColumn1" ref="unit_label" label="环节" type="select" width="150"/>  
      <xui:column id="gridColumn3" ref="execute_mode_label" label="执行模式" type="select"
        width="70" align="center"/>  
      <xui:column id="gridColumn5" ref="org_name" label="执行者" type="inputbtn" width="120"/>  
      <xui:column id="gridColumn7" ref="is_customized" label="允许修改" type="checkbox"
        width="60" align="center"/> 
    </xhtml:div>  
    <xhtml:button class="xui-button" id="buttonQ9" onclick="customizedProcessQ.buttonQ9Click(event)">确定</xhtml:button>
    <xhtml:button class="xui-button" id="buttonQ10" onclick="customizedProcessQ.buttonQ10Click(event)">取消</xhtml:button>
    <xhtml:div component="/UI/system/components/quick/windowDialog.xbl.xml#windowDialogQ"
      modal="true" id="editDlg" url="/UI/system/service/process/customizedProcessQEdit.w"
      onReceive="customizedProcessQ.editDlgReceive" title="编辑环节信息" height="218" width="280"/>  
    <xhtml:div component="/UI/system/components/quick/windowDialog.xbl.xml#windowDialogQ"
      modal="true" id="selectDlg" url="/UI/system/service/process/multiOrgPersonSelectorQ.w"
      title="选择执行者" closable="true" onClose="customizedProcessQ.selectDlgClose" width="270"/>  
    <xhtml:div component="/UI/system/components/quick/dialog.xbl.xml#dialogQ" modal="true"
      id="dialogQ1" title="请输入名称" width="350" height="115"> 
      <xhtml:div style="width: 100%; height: 100%; overflow: hidden;"> 
        <xhtml:table border="0" style="width: 100%; height: 100%; table-layout: fixed;" cellspacing="0" cellpadding="0">
          <xhtml:tr height="8px">
          	<xhtml:td width="8px"></xhtml:td>
          	<xhtml:td></xhtml:td>
          	<xhtml:td width="8px"></xhtml:td>
          </xhtml:tr> 
          <xhtml:tr height="25px" valign="top"> 
            <xhtml:td></xhtml:td>
            <xhtml:td style="font-size: 13px;">请输入模板名称：</xhtml:td>
            <xhtml:td></xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr valign="top"> 
            <xhtml:td></xhtml:td>
            <xhtml:td> 
              <xhtml:input type="text" id="template-name" style="width: 325px; margin: 0; padding: 0;"/> 
            </xhtml:td> 
            <xhtml:td></xhtml:td>
          </xhtml:tr>  
          <xhtml:tr height="30px" valign="bottom">
            <xhtml:td></xhtml:td> 
            <xhtml:td style="_padding-bottom: 1px;" align="right"> 
              	<xhtml:button id="buttonQ11" class="xui-button" style="margin-right: 8px; width: 75px;" onclick="customizedProcessQ.buttonQ11Click(event);">确定</xhtml:button>
              	<xhtml:button id="buttonQ12" class="xui-button" style="width: 75px;" onclick="customizedProcessQ.buttonQ12Click(event);">取消</xhtml:button>
            </xhtml:td>
            <xhtml:td></xhtml:td> 
          </xhtml:tr>
          <xhtml:tr height="8px">
          	<xhtml:td></xhtml:td>
          	<xhtml:td></xhtml:td>
          	<xhtml:td></xhtml:td>
          </xhtml:tr> 
        </xhtml:table> 
      </xhtml:div> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/quick/dialog.xbl.xml#dialogQ" modal="true"
      width="316" height="300" id="dialogQ2" title="请选择要使用的模板" onOpen="customizedProcessQ.dialogQ2Open" onClose="customizedProcessQ.dialogQ2Close"> 
      
	      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
	        id="borderLayout1" style="width:100%; height: 100%;;"> 
	        <top size="25px"> 
		        <xhtml:table  border="0" cellspacing="0" cellpadding="0" style="width: 100%; height:20px; table-layout: fixed;"> 
		          <xhtml:tr> 
		            <xhtml:td> 
		              <xhtml:input type="text" style="width: 280px" id="condition_input" onkeydown="customizedProcessQ.inputKeyDown(event);"/>
		            </xhtml:td>  
		            <xhtml:td width="22px" align="right"> 
						<xhtml:img src="/UI/system/images/process/select0.gif" style="border: none; float: right;" 
							onclick="customizedProcessQ.buttonQ15Click(event);"/>
		            </xhtml:td> 
		          </xhtml:tr> 
		        </xhtml:table> 
	        </top>  
	        <center> 
				<xhtml:div component="/UI/system/components/quick/grid.xbl.xml#dgridQ" id="dgridQ2"
		          data="template" show-icon="false" style="border: solid 0px #c8c8c8; height: 100%; width: 100%;"> 
		          <xui:column id="gridColumn11" ref="sName" label="模板名称" width="210"/>  
		          <xui:column id="gridColumn12" ref="sScopeName" label="类型" width="63"/> 
		        </xhtml:div>	
		        
		        <!-- 
                <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grid2" data="template" width="100%" height="100%" onRowDblClick="selectTemplateDblClick"> 
                  <xui:column id="gridColumn11" ref="sName" label="模板名称" width="210" readonly="true"/>  
                  <xui:column id="gridColumn12" ref="sScopeID" type="html" label="类型" width="63" readonly="true" onRender="onTemplateTypeHtml"/> 
                </xhtml:div> 
		        
		        
		         -->        
	        </center> 
	        <bottom size="31px">
	            <xhtml:div style="width: 100%; text-align: right;">
					<xhtml:button id="buttonQ13" class="xui-button" style="margin-right: 8px; width: 75px;" 
						onclick="customizedProcessQ.buttonQ13Click(event);">确定</xhtml:button>
					<xhtml:button id="buttonQ14" class="xui-button" style="width: 75px;" 
						onclick="customizedProcessQ.buttonQ14Click(event);">取消</xhtml:button>
                </xhtml:div> 
	        </bottom>
	      </xhtml:div>  
      
      	<!--  
      	<xhtml:table border="0" cellspacing="0" cellpadding="0" style="width:100%;height:100%;table-layout:fixed;">
      		<xhtml:tr height="8px">
      			<xhtml:td width="8px"></xhtml:td>
      			<xhtml:td></xhtml:td>
      			<xhtml:td width="8px"></xhtml:td>
      		</xhtml:tr>
      		<xhtml:tr height="25px" valign="top">
      			<xhtml:td></xhtml:td>
      			<xhtml:td>
        			<xhtml:table border="0" cellpadding="0" cellspacing="0" style="width:100%;height:100%;table-layout: fixed"> 
          				<xhtml:tr> 
            				<xhtml:td> 
              					<xhtml:input type="text" style="width: 100%" id="condition_input" onkeydown="customizedProcessQ.inputKeyDown(event);"/> 
            				</xhtml:td>  
            				<xhtml:td width="25px"> 
            					<xhtml:img src="/UI/system/images/process/select0.gif" style="border: none; float: right;" onclick="customizedProcessQ.buttonQ15Click(event);"/>
            				</xhtml:td> 
          				</xhtml:tr> 
        			</xhtml:table>  
      			</xhtml:td>
      			<xhtml:td></xhtml:td>
      		</xhtml:tr>
      		<xhtml:tr>
      			<xhtml:td></xhtml:td>
      			<xhtml:td>
			        <xhtml:div component="/UI/system/components/quick/grid.xbl.xml#dgridQ" id="dgridQ2"
			          data="template" show-icon="false" style="border: solid 1px #c8c8c8; height: 100%; width: 100%;"> 
			          <xui:column id="gridColumn11" ref="sName" label="模板名称" width="210"/>  
			          <xui:column id="gridColumn12" ref="sScopeName" label="类型" width="60"/> 
			        </xhtml:div>  
      			</xhtml:td>
      			<xhtml:td></xhtml:td>
      		</xhtml:tr>
      		<xhtml:tr valign="bottom" style="_padding-bottom: 1px;" height="30px">
      			<xhtml:td></xhtml:td>
      			<xhtml:td align="right">
					<xhtml:button id="buttonQ13" class="xui-button" style="margin-right: 8px; width: 75px;" onclick="customizedProcessQ.buttonQ13Click(event);">确定</xhtml:button>
					<xhtml:button id="buttonQ14" class="xui-button" style="width: 75px;" onclick="customizedProcessQ.buttonQ14Click(event);">取消</xhtml:button>
      			</xhtml:td>
      			<xhtml:td></xhtml:td>
      		</xhtml:tr>
      		<xhtml:tr height="8px">
      			<xhtml:td></xhtml:td>
      			<xhtml:td></xhtml:td>
      			<xhtml:td></xhtml:td>
      		</xhtml:tr>
      	</xhtml:table>
      	-->
      
    </xhtml:div>  
    <xui:layout style="width: 478px; _width:100%; height:100%; padding: 8px; margin: 0;" id="rootLayout">
      <xui:place control="toolbarsQ1" id="controlPlace1" style="height:28px;width:100%;"/>  
      <xui:place control="dgridQ1" id="controlPlace3" style="width: 100%; height: 300px;"/>  
      <xhtml:div id="div1" class="xui-container" style="width:100%; text-align: right; height: 33px; padding-top: 7px; _padding-top: 8px;"> 
        <xui:place control="buttonQ9" id="controlPlace4" style="display: inline; width: 75px; margin-right: 8px;"/>  
        <xui:place control="buttonQ10" id="controlPlace5" style="display: inline; width: 75px;"/> 
      </xhtml:div> 
      <xui:place control="editDlg" id="controlPlace2" style="top:144px;left:320px;"/>  
      <xui:place control="selectDlg" id="controlPlace6" style="top:143px;left:414px;"/>  
      <xui:place control="dialogQ1" id="controlPlace8" style="top:142px;left:511px;"/>  
      <xui:place control="dialogQ2" id="controlPlace9" style="top:142px;left:621px;"/>  
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="customizedProcessQ.js"/>  
    <xhtml:style type="text/css"> <![CDATA[
    	#dgridQ1 tbody td {
    		text-indent: 5px;
    	}
    	#dgridQ2 tbody td {
    		text-indent: 5px;
    	}
    ]]> </xhtml:style> 
  </xui:resource> 
</xui:window>

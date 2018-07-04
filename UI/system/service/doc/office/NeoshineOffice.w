<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml">
	<xforms:model id="NeoshineOffice" style="top:10px;height:auto;left:10px;">
		<xforms:action ev:event="onload">
			<xforms:script><![CDATA[NeoshineOffice.officeViewerDialogLoad(event)]]></xforms:script>
		</xforms:action>
	</xforms:model>
	<xui:resource>
		<xhtml:link rel="STYLESHEET"  type="text/css" href="/form/dhtmlx/dhtmlxWindows/dhtmlxwindows.css"/>
		<xhtml:link rel="STYLESHEET"  type="text/css" href="/form/dhtmlx/dhtmlxWindows/skins/dhtmlxwindows_dhx_blue.css"/>
		<xhtml:style type="text/css">
        	<![CDATA[
            body {
                margin-left: 0px;
                margin-top: 0px;
                margin-right: 0px;
                margin-bottom: 0px;
            }
            span {
                font-size: 0.75em;
                font-weight: 700;
                color: #313334;
            }
            .tools {
                margin-left: 7px;
                margin-top: 7px;
                margin-right: 7px;
                margin-bottom: 7px;
            }
            .fieldLeft {
                float: left;
            }
            .fieldRight {
                float: right;
            }
            ul {
                list-style-type: none;
                margin: 1px 0px 5px 10px;
                color: #ccc;
            }
            a {
                color: #6b7b95;
            }
            a:focus, a:hover {
                color: #666;
            }
            li {
                font-size: 0.75em;
                line-height:25px;
            }
         	]]>
        </xhtml:style>
        <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil2.js"></xhtml:script>
	</xui:resource>
	
	<xui:view id="view_1" auto-load="true">
		<xui:layout style="height:100%;width:100%;">
		<xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      			id="zbEditorReceiver" style="top:0;left:0;" onReceive="NeoshineOffice.zbEditorReceive"/>
		<xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" style="width:100%;height:100%;">
            <center>
              <xhtml:div id='ov' style="width:100%;height:100%;">
					<embed id="office" type="application/vnd.cs2c.new" src="" height="100%" width="100%"></embed>
			</xhtml:div>
            </center>
            
          </xhtml:div>
          <xhtml:div id="docActionDiv" style ="float:right;margin-right:8px;margin-top:4px;margin-bottom:4px;">
					<xhtml:span id="docSave" style ="margin-right:8px">
						<xhtml:button id="btn_refresh" class="xforms-trigger xui-button" style="width:75px;margin-bottom:3px" onclick="NeoshineOffice.btn_refreshClick(event)"><![CDATA[刷新]]></xhtml:button>
					</xhtml:span>
					<xhtml:span id="docCreateVersion" style ="margin-right:8px">
						<xhtml:button id="btn_save" class="xforms-trigger xui-button" style="width:75px;margin-bottom:3px" onclick="NeoshineOffice.btn_saveClick(event)"><![CDATA[保存]]></xhtml:button>
					</xhtml:span>
				</xhtml:div>
          </xui:layout>
	</xui:view>		
	<resource id="resource1">
	<xhtml:script id="htmlScript1" src="NeoshineOffice.js"></xhtml:script>
	<xhtml:script id="htmlScript2" src="/UI/system/service/doc/office/newoffice.js"></xhtml:script>
  <xhtml:script id="htmlScript3" src="/UI/system/service/doc/office/neoOffice.js"></xhtml:script></resource>
</xui:window>
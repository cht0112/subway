<xui:window xmlns:justep="http://www.justep.com/x5#" xmlns:xui="http://www.justep.com/xui"
	xmlns:xbl="http://www.w3.org/ns/xbl" xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xsl:version="2.0"
	xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:saxon="http://saxon.sf.net/"
	xmlns:xsd="http://www.w3.org/2001/XMLSchema"
	xmlns:ns="http://www.justep.com/x5#" 
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	component="/UI/system/components/window.xbl.xml#window" id="window_1">
	<xforms:model id="officeViewerWindow">
		<xforms:action ev:event="onload">
			<xforms:script>
				OP.load();
			</xforms:script>
		</xforms:action>
	</xforms:model>
	<xui:resource>
		<xhtml:style type="text/css"><![CDATA[
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
            }
         ]]>
        </xhtml:style>
		<xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil.js" />
		<xhtml:script src="/UI/system/components/dialog/dialog.js" />
		<xhtml:script src="/UI/system/components/windowDialog/windowDialog.js" />
		<xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js" />
		
		<xhtml:script language="JavaScript" type="text/javascript">
		<![CDATA[
        	var OP = {
	        	load: function() {
	        		$OV('ov').CreateOfficeViewer('100%','100%');
	        		var param = justep.XML.getNodeText(justep.Context.getRequestBody());
					OP.officeViewerInit(OV.JSON.parse(param));
	        	},
	        	
	            officeFullScreen: function() {
	                $OV("ov").FullScreen = !$OV("ov").FullScreen;
	                $OV("ov").focus();
	            },
	            getHost:function(docPath,fileID){
	            	if(!this.docUrl){
	            		var u = justep.Doc.getdocServerAction(docPath, "/repository/file/cache/office/"+fileID);
            			this.docUrl = u.indexOf(window.location.protocol) < 1 ? u : window.location.protocol+"//"+ window.location.host + u;
            		}
            		return this.docUrl;	 
	            },
	            officeViewerInit: function(obj) {
	            	if ($OV("ov").isOpened){
	            		return;
	            	}
	            	this.OVP = obj;
	            	this.OVP.saving = false;
	            	this.OVP.isRevision = false;
	            	this.OVP.isModified = false;
            		$OV("ov").Toolbars = false;
   					$OV("ov").HttpInit();
   					$OV("ov").HttpAddpostString("FileID", this.OVP.fileID);
   					$OV("ov").HttpAddpostString("FileExt", this.OVP.fileExt);
   					$OV("ov").HttpAddpostString("FileID", this.OVP.fileID);
   					$OV("ov").HttpAddpostString("VersionID", this.OVP.versionID);
   					$OV("ov").HttpAddpostString("PartType", this.OVP.partType);
   					$OV("ov").HttpOpenFileFromStream(this.getHost(this.OVP.host,this.OVP.fileID));
   					$OV("ov").OfficeProtectDocument();
	            	if (this.OVP.showField && $OV("ov").IsWordOpened()) {
	            		OP.officeUpdateField();
	            	}
	            	$OV("ov").DisableOfficeButton();
	            }
            };
        ]]></xhtml:script>
		<xhtml:script language="JavaScript" type="text/javascript"
			for="ov" event="NotifyCtrlReady">
		</xhtml:script>
		<xhtml:script language="JavaScript" type="text/javascript"
			for="ov" event="OnFileCommand(item, cancel)">
        	notifySendData("xml-text", item, cancel);
		</xhtml:script>
	</xui:resource>
	
	<xui:view id="view_1">
		<xui:layout style="width:100%;height:100%">
			<xhtml:div id="ovParent" style="width:100%;height:100%">
				<xhtml:div id="ov" style="border:10px solid black;width:500px;height:500px">
				</xhtml:div>
			</xhtml:div>
		</xui:layout>
	</xui:view>	
</xui:window>
<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" id="docSetting" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="docSettingModel" style="top:26px;height:auto;left:618px;"> 
    <data id="nameSpace" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_DocNameSpace" offset="1" limit="-1" auto-load="true" is-tree="true"
      onAfterSave="saveDocNode" onIndexChanged="onTreeIndexChanged"> 
      <reader action="/SA/doc/logic/action/queryNameSpaceAction"/>  
      <writer action="/SA/doc/logic/action/saveNameSpaceAction"/>  
      <creator action="/SA/doc/logic/action/createNameSpaceAction"/>  
      <filter name="sFlagFilter">SA_DocNameSpace.sFlag=1</filter>  
      <tree-option virtual-root="文档配置" parent-relation="sDisplayName"/>  
      <rule id="dataBizRule2" relation="sDisplayName"/> 
    </data>  
    <data id="docNode" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_DocNode" offset="1" limit="-1" auto-load="true"> 
      <reader action="/system/logic/action/queryDocNodeAction"/>  
      <writer action="/system/logic/action/saveDocNodeAction"/>  
      <creator action="/system/logic/action/createDocNodeAction"/>  
      <filter name="sFlagFilter">SA_DocNode.sFlag=1</filter>  
      <filter name="sKindFilter">SA_DocNode.sKind='dir'</filter> 
    </data>  
    <data xmlns="" id="tmpNameSpace" auto-load="true" component="/UI/system/components/data.xbl.xml#data"
      columns="sDisplayName,sUrl,sAccessMode" store-type="simple">  
      <rows> 
        <row id="tmpNameSpaceRow"> 
          <cell/>  
          <cell/>  
          <cell>1</cell> 
        </row> 
      </rows> 
    </data>  
    <data xmlns="" id="buttonState" auto-load="true" component="/UI/system/components/data.xbl.xml#data"
      columns="new,delete" store-type="simple">  
      <rows> 
        <row id="buttonStateRow"> 
          <cell>true</cell>  
          <cell>false</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('buttonState')/new" readonly="instance('buttonState')/new = 'false'"/>  
    <xforms:bind nodeset="instance('buttonState')/delete" readonly="instance('buttonState')/delete = 'false'"/>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">docSetting.docSettingModelLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <resource> 
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/SA/doc/docSetting/docSetting.js"/>  
    <xhtml:script id="htmlScript1" src="/UI/system/service/doc/docUtil2.js"/> 
  </resource>  
  <view> 
    <layout style="width:100%;height:100%;"> 
      <place control="newNameSpaceDlgView"/>  
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" id="splitter"
        has-drag-bar="true" has-arrow-button="true" mode="horz" fix-size="40%" style="width:100%;height:100%;"> 
        <xhtml:div region="left" style="width:100%; height:100%"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            style="width:100%; height: 100%" id="border1"> 
            <top id="top__" size="38px" border-size="4px"> 
              <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="width:100%;"><xui:place control="trigger2" id="controlPlace1"></xui:place>
  <xui:place control="trigger3" id="controlPlace2"></xui:place>
  <xui:place control="trigger4" id="controlPlace3"></xui:place>
  <xui:place control="trigger5" id="controlPlace4"></xui:place></xhtml:div></top>  
            <center id="cent__" style="padding:2px"> 
              <place control="nameSpaceTreeView" style="height:100%"/> 
            </center> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" style="width:100%; height:100%"> 
          <place control="nameSpaceDetailsView" style="width:100%;height:100%"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div style="display:none"> 
        <place control="docNodeListView"/> 
      </xhtml:div> 
    </layout>  
    <view id="nameSpaceTreeView" style="height:100%"> 
      <xhtml:div style="border:0px;width:100%;height:100%;"
        data="nameSpace" id="nameSpaceTreeGrid" appearance="tree" component="/UI/system/components/grid.xbl.xml#grid"
        onShowNodeImg="showNodeImg" class="ui-light"> 
        <column label="名称" ref="sDisplayName" type="tree"/> 
      </xhtml:div> 
    </view>  
    <view id="nameSpaceDetailsView"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        style="width:100%;height:100%;" id="border2" border-size="2px"> 
        <top id="top__2" size="33px"> 
               
            </top>
        <center id="centerNameSpace__" border-size="2px">
        	<xhtml:table style="padding-top:20px;font-size:9pt; display:none;" id="nameSpaceDetails"> 
            <xhtml:tr height="30px"> 
              <xhtml:td width="8px"/>  
              <xhtml:td>显示名：</xhtml:td>  
              <xhtml:td> 
                <xforms:input ref="instance('nameSpace')/sDisplayName" style="width:312px;"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr height="30px"> 
              <xhtml:td width="8px"/>  
              <xhtml:td>服务器地址：</xhtml:td>  
              <xhtml:td> 
                <xforms:input ref="data('nameSpace')/sUrl" style="width:312px;"/> 
              </xhtml:td> 
            </xhtml:tr>  
          </xhtml:table> 
          <xforms:trigger id="trigger1" onclick="docSetting.buttonQ3Click(event)" style="width:200px;margin-left:15px;display:none;" class="button-green"> 
            <xforms:label id="xuiLabel1"><![CDATA[ 测试文档服务器地址 ]]></xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate">
              <xforms:script id="xformsScript2">docSetting.trigger1Click(event)</xforms:script>
            </xforms:action>
          </xforms:trigger>  
          <xhtml:iframe name="docServerIframe" id="docServerIframe" show="replace" frameborder="no"
            border="0"  marginheight="0" scrolling="no" allowtransparency="yes"
            style="width:100%;height:100%;display:none;"/> 
        </center>
        <bottom size="2px">
        	<xhtml:div></xhtml:div>	
        </bottom>
       </xhtml:div> 
    </view>  
    <view id="docNodeListView"> 
      <xhtml:div data="docNode" id="docNodeListGrid" component="/UI/system/components/grid.xbl.xml#grid"> 
        <column label="名称" ref="sDocName" width="100px"/> 
      </xhtml:div> 
    </view>  
    <view id="newNameSpaceDlgView"> 
      <xforms:dialog level="modal" close="true" appearance="full" width="396" height="150"
        visible="true" id="newNameSpaceDlg" title="新建"> 
        <xhtml:table style="font-size:12px;width:100%;height:100%;table-layout:fixed"
          cellpadding="0" cellspacing="8" border="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
          <xhtml:tr> 
            <xhtml:td> 
              <xhtml:table style="width:100%;" cellpadding="0" cellspacing="0" border="0"> 
                <xhtml:tr height="30px"> 
                  <xhtml:td style="width:30%">显示名：</xhtml:td>  
                  <xhtml:td style="width:70%"> 
                    <xforms:input ref="instance('tmpNameSpace')/sDisplayName" style="width:100%"/> 
                  </xhtml:td> 
                </xhtml:tr>  
                <xhtml:tr height="30px"> 
                  <xhtml:td>服务器地址：</xhtml:td>  
                  <xhtml:td> 
                    <xforms:input ref="instance('tmpNameSpace')/sUrl" style="width:100%"/> 
                  </xhtml:td> 
                </xhtml:tr>  
              </xhtml:table> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr height="22px"> 
            <xhtml:td align="right">
            	<xforms:trigger id="btnOK" class="button-green"> 
			      <xforms:label id="xuiLabel2"><![CDATA[确定]]></xforms:label>  
			      <xforms:action id="action2" ev:event="DOMActivate">
			        <xforms:script id="xformsScript2"><![CDATA[newDocSetting();]]></xforms:script>
			      </xforms:action>
    			</xforms:trigger> 
              	<xforms:trigger id="btnCancel" appearance="minimal"> 
			      <xforms:label id="xuiLabel1"><![CDATA[取消]]></xforms:label>  
			      <xforms:action id="action3" ev:event="DOMActivate">
			        <xforms:script id="xformsScript3"><![CDATA[cancleNewDocSetting();]]></xforms:script>
			      </xforms:action>
			    </xforms:trigger>
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </xforms:dialog>  
      <xui:layout id="layout1" style="display:none;"> 
        <place control="newNameSpaceDlg"/> 
      </xui:layout> 
    </view> 
  <xforms:trigger appearance="image-text" ref="instance('buttonState')/new" id="trigger2" class="button-blue" icon-class="icon-system-plus">
   <xforms:label id="default1">新建</xforms:label>
   <xforms:action ev:event="DOMActivate" id="action3">
    <xforms:script id="xformsScript3">openNewDialog();</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger appearance="minimal" ref="instance('buttonState')/delete" id="trigger3" icon-class="icon-system-cancel">
   <xforms:label id="default2">删除</xforms:label>
   <xforms:action ev:event="DOMActivate" id="action4">
    <xforms:script id="xformsScript4">deleteDocSetting();</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger4" appearance="minimal" operation-owner="nameSpace" operation="save">
   <xforms:label id="default3"><![CDATA[保存]]></xforms:label></xforms:trigger>
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger5" appearance="minimal" operation-owner="nameSpace" operation="refresh">
   <xforms:label id="default4"><![CDATA[刷新]]></xforms:label></xforms:trigger></view> 
</window>

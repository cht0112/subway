<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:176px;left:39px;"> 
    <!--<data component="/UI/system/components/data.xbl.xml#data" columns="skeyId"
      src="" auto-load="true" id="docLinkKeys" style=";"/>-->  
    <data xmlns="" id="docLinkKeys" component="/UI/system/components/data.xbl.xml#data" columns="sKeyId" store-type="grid">  
      <rows/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="view1"> 
      <layout id="layout1"> 
        <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar2" style="width:100%;"><xui:place control="trigger4" id="controlPlace9" style="width:108px;"></xui:place>
  <xui:place control="trigger5" id="controlPlace10" style="width:82px;"></xui:place>
  <xui:place control="trigger6" id="controlPlace11" style="width:85px;"></xui:place></xhtml:div></layout> 
    <xforms:trigger id="trigger4" appearance="image-text" class="button-blue" icon-class="icon-system-plus">
   <xforms:label id="default5">新建key</xforms:label>
   <xforms:action id="action7" ev:event="DOMActivate">
    <xforms:script id="xformsScript8">docKeyList.btnInsertKeyClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="trigger5" appearance="minimal" src="/UI/SA/OPM/images/edit.gif" dis-src="/UI/SA/OPM/images/un_edit.gif" icon-class="icon-system-edit-alt">
   <xforms:label id="default6">修改Key</xforms:label>
   <xforms:action id="action8" ev:event="DOMActivate">
    <xforms:script id="xformsScript9">docKeyList.btnEditKeyClick(event)</xforms:script></xforms:action> </xforms:trigger>
  <xforms:trigger id="trigger6" appearance="minimal" src="/UI/SA/OPM/images/delete.gif" dis-src="/UI/SA/OPM/images/un_delete.gif" icon-class="icon-system-cancel">
   <xforms:label id="default7">删除key</xforms:label>
   <xforms:action id="action9" ev:event="DOMActivate">
    <xforms:script id="xformsScript10">docKeyList.btnDeleteKeyClick(event)</xforms:script></xforms:action> </xforms:trigger></xui:view>  
    <xui:view auto-load="true" id="view2" class="xui-container"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="docLinkKeys" class="grid-compact"> 
        <xui:column id="gridColumn1" ref="sKeyId" label="关联keyId" type="ed" width="*"/> 
      </xhtml:div>  
      <layout id="layout2" style="height:100%;width:100%;"> 
        <xui:place control="grid1" id="controlPlace4" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xhtml:table style="width:100%;height:100%;table-layout:fixed" cellspacing="8" border="0" cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:table border="0" cellspacing="0" cellpadding="0" style="width:100%;height:100%;table-layout:fixed" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="32px"> 
                <xhtml:td height="38px"> 
                  <xui:place control="view1" id="controlPlace1" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td> 
                  <xui:place control="view2" id="controlPlace3" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr style="height: 22px"> 
          <xhtml:td> 
            <xhtml:table border="0" cellspacing="0" cellpadding="0" style="width:100%;height:100%;table-layout:fixed"> 
              <xhtml:tr> 
                <xhtml:td width="100%"><xui:place control="trigger1" id="controlPlace5" style="float:right"></xui:place></xhtml:td>
                <!--  
                <xhtml:td width="90px" align="right"> 
                  <xhtml:button onclick="justep.windowDialogReceiver.windowEnsure(getTemplateData())"
                    style="width:75px">确定</xhtml:button> 
                </xhtml:td>  
                -->  
                </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger1" appearance="minimal">
   <xforms:label id="default1"><![CDATA[关闭]]></xforms:label>
  <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[justep.windowDialogReceiver.windowCancel()]]></xforms:script></xforms:action></xforms:trigger></xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script id="htmlScript1" src="docKeyList.js"/> 
  </xui:resource> 
</xui:window>

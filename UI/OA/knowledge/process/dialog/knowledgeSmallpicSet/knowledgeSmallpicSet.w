<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdKnowledge" style="top:538px;left:17px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="1" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge" store-type="simple"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKMKnowledgeAction"/>  
      <writer id="kwWriter" action="/OA/knowledge/logic/action/saveKMKnowledgeAction"/>  
      <creator id="kwCreator" action="/OA/knowledge/logic/action/createKMKnowledgeAction"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/attachmentImage.xbl.xml#attachmentImage" id="attachmentImage" model="mdKnowledge" ref="data('dKnowledge')/fSmallPic" root-path="/root" auto-load="true" sub-path="concat('业务附件/OA/知识中心/图片',toString(yearOf(currentDate())),'/',toString(monthOf(currentDate())))" runtime="flash"/>  
    <xforms:trigger id="trgRefresh"> 
      <xforms:label id="xuiLabel1">刷 新</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript1">trgRefreshDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trgSure"> 
      <xforms:label id="xuiLabel2">确 定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript2">trgSureDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trgCancel"> 
      <xforms:label id="xuiLabel3">取 消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action3"> 
        <xforms:script id="xformsScript3">trgCancelDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xui:layout style="position:relative;width:395px;height:275px" id="rootLayout" type="absolute"> 
      <xhtml:table id="table2" border="0" style="width:100%;height:100%;" cellspacing="0" cellpadding="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td7" colspan="3" align="center"> 
            <xui:place control="attachmentImage" id="controlPlace1" style="position:absolute;width:100%;height:240px;top:0px;left:0px;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5" > 
          <xhtml:td id="td8" style="height:30px;width:230px;"> 
            <xui:place control="trgRefresh" id="controlPlace2" style="width:58px;height:24px;"/> 
          </xhtml:td>  
          <xhtml:td id="td9" align="right" style="height:30px"> 
            <xui:place control="trgSure" id="controlPlace3" style="width:58px;height:24px;"/>  
          </xhtml:td> 
          <xhtml:td align="right" style="height:30px"> 
            <xui:place control="trgCancel" id="controlPlace4" style="width:58px;height:24px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="knowledgeSmallpicSet.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/> 
  </xui:resource> 
</xui:window>

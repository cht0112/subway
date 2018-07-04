<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:213px;left:181px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="returnDate,remark"
      src="" auto-load="true" id="dAssetReturn" store-type="simple"> 
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="default3"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="returnDate" type="xsd:date"/> 
    </data>  
    <xforms:action id="action4" ev:event="onload">
      <xforms:script id="xformsScript4"><![CDATA[assetReturnDialog.model1Load(event)]]></xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xforms:input style="width:100%;height:100%;" id="iptReturnDate" ref="data('dAssetReturn')/returnDate"
      auto-size="true" format="yyyy-MM-dd"/>  
    <xforms:textarea ref="data('dAssetReturn')/remark" id="taRemark" auto-size="true" style="height:100%;width:100%;"/>  
    <xforms:trigger id="trgOK"> 
      <xforms:label id="xuiLabel1">确定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript1">trgOKDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trgCancel"> 
      <xforms:label id="xuiLabel2">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript2">trgCancelDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xui:layout style="height:100%;width:100%;" type="excel" src="assetReturnDialog.xls"/> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetReturnDialog.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>

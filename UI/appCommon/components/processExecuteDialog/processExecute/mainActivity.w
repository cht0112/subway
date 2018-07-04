<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:150px;height:auto;left:137px;"> 
    <xforms:instance id="inst1"> 
      <form xmlns=""> </form> 
    </xforms:instance>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="fExecuteID,fOpinion,fVerdict,fCommonWords"
      src="" auto-load="true" id="dExecute" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="onload">
      <xforms:script id="xformsScript1"><![CDATA[mainActivity.model1Load(event)]]></xforms:script>
    </xforms:action>
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="常用语" width="400" height="300" modal="true" id="dlgCommonWords" url="/UI/appCommon/dialogs/selectCommonWords/selectCommonWords.w"
      minmaxable="false" resizable="false" onReceive="mainActivity.dlgCommonWordsReceive"/>  
    <xui:layout style="width:500px;height:300px;" type="flow"> 
      <place control="dlgCommonWords" style="top:155px;left:349px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="35px" id="borderLayout-top1"> 
          <xhtml:div id="div2" class="xui-container" style="width:100%;height:100%;"> 
            <xhtml:div id="div4" class="xui-container" style="height:100%;float:left;width:30%;">
              <xhtml:label id="label3" class="xui-label" style="float:left;margin-top:10px;margin-left:8px;">处理意见</xhtml:label>
            </xhtml:div>  
            <xhtml:div id="div6" class="xui-container" style="height:100%;float:left;width:40%;text-align:center;"> 
              <place control="rdVerdict" id="controlPlace3" style="width:100%;margin-top:6px;"/> 
            </xhtml:div>  
            <xhtml:div id="div7" class="xui-container" style="float:right;height:100%;width:30%;">
              <xhtml:button id="btnSelectCommonWords" class="xui-button" style="float:right;margin-top:5px;margin-right:8px;width:80px;"
                onclick="mainActivity.btnSelectCommonWordsClick(event)">选择常用语</xhtml:button>
            </xhtml:div> 
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xhtml:div id="div8" class="xui-container" style="height:100%;width:100%;">
            <place control="taOpinion" id="controlPlace1" style="position:relative;left:8px;width:485px;height:225px;"/>
          </xhtml:div>
        </center>  
        <bottom size="35px" id="borderLayout-bottom1"> 
          <place control="trgAdvance" id="controlPlace4" style="float:left;margin-top:5px;margin-left:8px;"/>  
          <place control="trgBack" id="controlPlace5" style="float:left;margin-top:5px;margin-left:8px;"/>  
          <place control="trgTransfer" id="controlPlace6" style="float:left;margin-top:5px;margin-left:8px;"/>  
          <place control="trgAbort" id="controlPlace7" style="float:left;margin-top:5px;margin-left:8px;"/>  
          <place control="trgClose" id="controlPlace8" style="float:right;margin-top:5px;margin-right:8px;"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:trigger id="trgAdvance"> 
      <xforms:label id="xuiLabel5">流　转</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript2">trgAdvanceDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trgBack"> 
      <xforms:label id="xuiLabel6">回　退</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action3"> 
        <xforms:script id="xformsScript3">trgBackDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trgTransfer"> 
      <xforms:label id="xuiLabel7">转　发</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action4"> 
        <xforms:script id="xformsScript4">trgTransferDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trgAbort"> 
      <xforms:label id="xuiLabel8">终　止</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action5"> 
        <xforms:script id="xformsScript5">trgAbortDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trgClose"> 
      <xforms:label id="xuiLabel9">关　闭</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action6"> 
        <xforms:script id="xformsScript6">trgCloseDOMActivate(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:select1 ref="data('dExecute')/fVerdict" id="rdVerdict" class="horizontal"> 
      <xforms:item id="selectItem3"> 
        <xforms:label id="xuiLabel3">同意</xforms:label>  
        <xforms:value id="default3">同意</xforms:value> 
      </xforms:item>  
      <xforms:item id="selectItem4"> 
        <xforms:label id="xuiLabel4">不同意</xforms:label>  
        <xforms:value id="default4">不同意</xforms:value> 
      </xforms:item> 
    </xforms:select1>  
    <xforms:textarea ref="data('dExecute')/fOpinion" id="taOpinion" auto-size="true"/>
  </xui:view>  
  <xui:resource> 
    <xhtml:script type="text/javascript" src="mainActivity.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource> 
</xui:window>

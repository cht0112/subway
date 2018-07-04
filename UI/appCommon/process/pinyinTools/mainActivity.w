<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" xmlns:xhtml="http://www.w3.org/1999/xhtml">  
  <xui:view id="rootView" auto-load="true"> 
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout" type="absolute"><xhtml:input type="text" value="" id="inputDataModel" class="xui-input" style="position:absolute;top:20px;left:150px;width:350px;"></xhtml:input>
  <xhtml:label id="label1" style="position:absolute;left:20px;top:26px;" class="xui-label">dataModel</xhtml:label>
  <xhtml:input type="text" value="" id="inputConcept" class="xui-input" style="position:absolute;position:absolute;left:150px;top:65px;width:350px;"></xhtml:input>
  <xhtml:label id="label3" class="xui-label" style="position:absolute;position:absolute;left:20px;top:71px;">concept</xhtml:label>
  <xhtml:input type="text" value="" id="inputChineseRelation" class="xui-input" style="position:absolute;position:absolute;left:150px;top:110px;width:350px;"></xhtml:input>
  <xhtml:label id="label5" class="xui-label" style="position:absolute;position:absolute;left:20px;top:116px;">chineseRelation</xhtml:label>
  <xhtml:label id="label6" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:20px;top:161px;">simplePinyinRelation</xhtml:label>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;position:absolute;position:absolute;left:20px;top:206px;">fullPinyinRelation</xhtml:label>
  <xhtml:input type="text" value="" id="inputSimplePinyinRelation" class="xui-input" style="position:absolute;position:absolute;position:absolute;left:150px;top:155px;width:350px;"></xhtml:input>
  <xhtml:input type="text" value="" id="inputFullPinyinRelation" class="xui-input" style="position:absolute;position:absolute;position:absolute;position:absolute;left:150px;top:200px;width:350px;"></xhtml:input>
  <xhtml:input type="button" value="生成拼音" id="btnGenerate" style="position:absolute;width:75px;top:250px;left:425px;" class="xui-button" onclick="mainActivity.btnGenerateClick(event)"></xhtml:input></xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script>
  <xhtml:script id="htmlScript2"></xhtml:script></xui:resource> 
<xforms:model id="model1" style="top:478px;height:auto;left:22px;"></xforms:model></xui:window>

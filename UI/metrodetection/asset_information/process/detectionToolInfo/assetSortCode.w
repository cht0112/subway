<?xml version="1.0" encoding="UTF-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window" id="window" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:47px;height:auto;left:277px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="xml" auto-load="true" id="assetSortD" concept="OA_AS_Kind" store-type="simple"><reader id="default1" action="/OA/asset/logic/action/queryASKindAction"></reader></data>
  <data component="/UI/system/components/data.xbl.xml#data" data-type="json" columns="fixCode,sortCode,sequeCode,ownercode" src="" auto-load="true" id="assetCD" store-type="simple"><rule id="dataRule1" column="sortCode" required="true()" alert="'数据不能为空'"></rule>
  <rule id="dataRule2" column="sequeCode" required="true()" alert="'数据不能为空'"></rule>
  <rule id="dataRule3" column="ownercode" required="true()" alert="'数据不能为空'"></rule></data></xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"><xui:place control="view1" id="controlPlace1" style="height:100%;width:100%;"></xui:place></xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1">
  <xui:place control="gridSelect1" id="controlPlace2" style="position:absolute;top:71px;left:74px;"></xui:place>
  <xui:place control="assetWR" id="controlPlace3" style="position:absolute;top:141px;left:276px;"></xui:place>
  <xui:place control="input1" id="controlPlace4" style="position:absolute;top:40px;left:74px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace5" style="position:absolute;top:104px;left:74px;"></xui:place>
  <xui:place control="gridSelect3" id="controlPlace6" style="position:absolute;left:74px;top:136px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;top:40px;left:22px;" class="xui-label"><![CDATA[初始代码]]></xhtml:label>
  <xhtml:label id="label2" class="xui-label" style="position:absolute;left:22px;position:absolute;top:71px;"><![CDATA[分类编码]]></xhtml:label>
  <xhtml:label id="label3" class="xui-label" style="position:absolute;left:22px;position:absolute;top:106px;"><![CDATA[序号代码]]></xhtml:label>
  <xhtml:label id="label4" class="xui-label" style="position:absolute;left:22px;position:absolute;top:136px;"><![CDATA[归属代码]]></xhtml:label>
  <xui:place control="trigger1" id="controlPlace7" style="position:absolute;top:172px;left:110px;"></xui:place></layout>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('assetCD')/sortCode" label-ref="data('assetCD')/sortCode">
   <xforms:label ref="fCode" id="default2"></xforms:label>
   <xforms:value ref="fCode" id="default3"></xforms:value>
   <xforms:itemset id="default4" data="assetSortD" auto-load-data="true">
  <xforms:column ref="fCode" id="default9"></xforms:column>
  <xforms:column ref="fName" id="default10"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="assetWR" onReceive="assetSortCode.assetWRReceive"></xhtml:div>
  <xforms:input id="input1" ref="data('assetCD')/fixCode" readonly="true"></xforms:input>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('assetCD')/sequeCode">
   <xforms:label ref="col_1" id="default11"></xforms:label>
   <xforms:value ref="col_0" id="default12"></xforms:value>
   <xforms:itemset id="default13" auto-load-data="true">
  
  
  
  <xforms:column ref="col_0" visible="false" id="default83"></xforms:column>
  <xforms:column ref="col_1" id="default84"></xforms:column>
  <itemset-data xmlns="" id="default146">
   <rows xmlns="" id="default147">
    <row id="default148">
     <cell id="default149">00</cell>
     <cell id="default150">00</cell></row> 
    <row id="default151">
     <cell id="default152">01</cell>
     <cell id="default153">01</cell></row> 
    <row id="default154">
     <cell id="default155">02</cell>
     <cell id="default156">02</cell></row> 
    <row id="default157">
     <cell id="default158">03</cell>
     <cell id="default159">03</cell></row> </rows> </itemset-data></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" row-height="36" dropdown-class="xui-grid-hide-VLine" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('assetCD')/ownercode">
   <xforms:label ref="col_1" id="default85"></xforms:label>
   <xforms:value ref="col_0" id="default86"></xforms:value>
   <xforms:itemset id="default87" auto-load-data="true"><itemset-data xmlns="" id="default112">
   <rows xmlns="" id="default113">
    <row id="default114">
     <cell id="default115">1</cell>
     <cell id="default116">小营一期</cell></row> 
    <row id="default117">
     <cell id="default118">2</cell>
     <cell id="default119">小营二期</cell></row> 
    <row id="default120">
     <cell id="default121">3</cell>
     <cell id="default122">西直门</cell></row> </rows> </itemset-data>
  
  
  
  <xforms:column ref="col_0" visible="false" id="default129"></xforms:column>
  <xforms:column ref="col_1" id="default130"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:trigger id="trigger1">
   <xforms:label id="default131"><![CDATA[确定]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[assetSortCode.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger></xui:view></xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="assetSortCode.js"></xhtml:script></xui:resource> 
</xui:window>

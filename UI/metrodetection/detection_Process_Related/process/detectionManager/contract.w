<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;top:252px;height:auto;left:499px;"><data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData1" concept="TEST_CONTRACT_INFO" store-type="simple"><creator id="default1" action="/metrodetection/system_code/logic/action/createTEST_CONTRACT_INFOAction"></creator>
  <reader id="default2" action="/metrodetection/system_code/logic/action/queryTEST_CONTRACT_INFOAction"></reader>
  <writer id="default3" action="/metrodetection/system_code/logic/action/saveTEST_CONTRACT_INFOAction"></writer>
  <rule id="dataBizRule2" relation="cONTRACTNAME" required="true()" alert="'合同名称不能为空!'"></rule>
  <rule id="dataBizRule3" relation="mANUFACTUREID" required="true()" alert="'客户名称不能为空!'"></rule>
  <rule id="dataBizRule4" relation="cONTRACTDATE" required="true()" alert="'合同签订日期不能为空!'"></rule>
  <rule id="dataBizRule5" relation="eXPECTENDINGDATE" required="true()" alert="'预期完成日期!'"></rule>
  <rule id="dataBizRule6" relation="cONTRACTDESC" required="true()" alert="'合同内容简介!'"></rule>
  <rule id="dataBizRule7" relation="aPPLICATIONNO" required="true()" alert="'对应申请序号不能为空!'"></rule></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver" id="windowReceiver" onReceive="contract.windowReceiverReceive"/>  
    <xui:layout style="height:100%;width:100%;position:relative;" type="absolute"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;position:absolute;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%;height:100%;position:absolute;"> 
        <center id="borderLayout-center1"><xui:place control="view1" id="controlPlace9" style="width:576px;height:529px;"></xui:place></center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()" style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button" value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" style="width:75px;float:right" type="button" value="确定" onclick="contract.inputbutton1Click(event)"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout> 
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;width:576px;height:529px;" id="layout1"><xui:place control="cONTRACTNAME" style="position: absolute;width:153px;top:19px;left:119px;" id="controlPlace10"></xui:place>
  <xui:place control="mANUFACTUREID" style="position: absolute;width:153px;top:49px;left:119px;" id="controlPlace11"></xui:place>
  <xui:place control="cONTRACTDATE" style="position: absolute;width:153px;top:79px;left:119px;" id="controlPlace12"></xui:place>
  <xui:place control="eXPECTENDINGDATE" style="position: absolute;width:153px;top:20px;left:377px;" id="controlPlace13"></xui:place>
  <xui:place control="cONTRACTDESC" style="position: absolute;width:153px;top:50px;left:377px;" id="controlPlace14"></xui:place>
  <xui:place control="aPPLICATIONNO" style="position: absolute;width:153px;top:80px;left:377px;" id="controlPlace15"></xui:place>
  <xhtml:label id="label2" style="position:absolute;top:24px;left:68px;" class="xui-label">合同名称</xhtml:label>
  <xhtml:label id="label3" style="position:absolute;top:54px;left:68px;" class="xui-label">客户名称</xhtml:label>
  <xhtml:label id="label4" style="position:absolute;top:84px;left:42px;" class="xui-label">合同签订日期</xhtml:label>
  <xhtml:label id="label5" style="position:absolute;top:25px;left:300px;" class="xui-label">预期完成日期</xhtml:label>
  <xhtml:label id="label6" style="position:absolute;top:55px;left:301px;" class="xui-label">合同内容简介</xhtml:label>
  <xhtml:label id="label7" style="position:absolute;top:86px;left:301px;" class="xui-label">对应申请序号</xhtml:label>
  <xhtml:label id="label8" style="position:absolute;top:113px;left:89px;" class="xui-label">备注</xhtml:label>
  <xui:place control="textarea1" id="controlPlace2" style="position:absolute;width:415px;top:114px;height:89px;left:117px;"></xui:place></layout>
  <xforms:input ref="data('bizData1')/cONTRACTNAME" id="cONTRACTNAME" tabindex="1"></xforms:input>
  <xforms:input ref="data('bizData1')/mANUFACTUREID" id="mANUFACTUREID" tabindex="3"></xforms:input>
  <xforms:input ref="data('bizData1')/cONTRACTDATE" id="cONTRACTDATE" format="yyyy-MM-dd" tabindex="5"></xforms:input>
  <xforms:input ref="data('bizData1')/eXPECTENDINGDATE" id="eXPECTENDINGDATE" format="yyyy-MM-dd" tabindex="2"></xforms:input>
  <xforms:input ref="data('bizData1')/cONTRACTDESC" id="cONTRACTDESC" tabindex="4"></xforms:input>
  <xforms:input ref="data('bizData1')/aPPLICATIONNO" id="aPPLICATIONNO" tabindex="6"></xforms:input>
  <xforms:textarea ref="data('bizData1')/mEMO" id="textarea1" tabindex="7"></xforms:textarea></xui:view></xui:view>  
  <xui:resource/> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="contract.js"></xhtml:script></resource></xui:window>

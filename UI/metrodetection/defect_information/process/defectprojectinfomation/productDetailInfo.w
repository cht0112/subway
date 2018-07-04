<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:92px;left:480px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="productD" concept="DEFECT_TRACK_PRODUCT_INFO"
      store-type="simple"> 
      <creator id="default1" action="/metrodetection/defect_information/logic/action/createDEFECT_TRACK_PRODUCT_INFOAction"/>  
      <reader id="default2" action="/metrodetection/defect_information/logic/action/queryDefectProductAction"/>  
      <writer id="default3" action="/metrodetection/defect_information/logic/action/saveDEFECT_TRACK_PRODUCT_INFOAction"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="productWR" id="controlPlace1" style="position:absolute;top:168px;left:523px;"/>  
      <xui:place control="productView" id="controlPlace2" style="height:100%;width:100%;"/> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="productWR" onReceive="productDetailInfo.productWRReceive"/>  
    <xui:view auto-load="true" id="productView" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1"> 
        <xui:place control="input1" id="controlPlace3" style="position:absolute;left:82px;top:67px;"/>  
        <xui:place control="textarea1" id="controlPlace4" style="position:absolute;height:80px;width:370px;left:82px;top:110px;"/>  
        <xui:place control="textarea2" id="controlPlace5" style="position:absolute;width:371px;height:82px;left:82px;top:215px;"/>  
        <xhtml:label id="label1" style="position:absolute;left:20px;top:67px;" class="xui-label"><![CDATA[产品名称]]></xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;left:20px;top:110px;" class="xui-label"><![CDATA[产品描述]]></xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;width:25px;left:46px;top:216px;"
          class="xui-label"><![CDATA[备注]]></xhtml:label>  
        <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;left:10px;top:67px;">*</xhtml:label>  
        <xui:place control="toolbars1" id="controlPlace6" style="position:absolute;left:10px;height:40px;width:456px;top:15px;"/> 
      </layout>  
      <xforms:input id="input1" ref="data('productD')/PRODUCT_NAME"/>  
      <xforms:textarea ref="data('productD')/PRODUCT_DESC" id="textarea1"/>  
      <xforms:textarea ref="data('productD')/MEMO" id="textarea2"/>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="productD"> 
          <item id="barItem1"> 
            <xforms:trigger appearance="image-text" id="insertNewDetail" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script><![CDATA[productDetailInfo.insertNewDetail(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="save-item" id="barItem2"/>  
          <item name="delete-item" id="barItem3"/>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="separator" id="customBarItem2"/>  
          <item name="pre-item" id="barItem6"/>  
          <item name="next-item" id="barItem7"/>  
          <item name="separator" id="customBarItem3"/> 
        </xui:bar> 
      </xhtml:div> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="productDetailInfo.js"/> 
  </xui:resource> 
</xui:window>

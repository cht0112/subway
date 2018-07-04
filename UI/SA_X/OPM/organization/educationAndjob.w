<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="height:auto;top:94px;left:640px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="educationAndJobD" concept="EDUCATION_AND_JOB_INFO"
      store-type="simple"> 
      <creator id="default1" action="/metrodetection/system_code/logic/action/createEDUCATION_AND_JOB_INFOAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryEDUCATION_AND_JOB_INFOAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveEDUCATION_AND_JOB_INFOAction"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="windowReceiver1" id="controlPlace1" style="position:absolute;top:79px;left:332px;"/>  
      <xui:place control="view1" id="controlPlace2" style="width:490px;height:359px;"/> 
    <xhtml:label id="label8" class="xui-label" style="color:#FF0000;position:absolute;left:25px;top:248px;">*</xhtml:label>
  <xhtml:label id="label9" class="xui-label" style="color:#FF0000;position:absolute;top:196px;left:49px;">*</xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="color:#FF0000;position:absolute;left:29px;top:111px;">*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="color:#FF0000;position:absolute;left:28px;top:65px;">*</xhtml:label>
  </xui:layout>  
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver1" onReceive="educationAndjob.windowReceiver1Receive"/>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <xforms:trigger id="trigger1">
   <xforms:label id="default7">trigger</xforms:label>
  <xforms:action id="action2" ev:event="DOMActivate"><xforms:script id="xformsScript2"><![CDATA[educationAndjob.trigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger><layout type="absolute" style="position:relative;" id="layout1"> 
        <xui:place control="toolbars1" id="controlPlace3" style="position:absolute;top:5px;left:5px;height:37px;width:439px;"/>  
        <xui:place control="input1" id="controlPlace4" style="position:absolute;left:86px;width:182px;top:109px;"/>  
        <xui:place control="input2" id="controlPlace5" style="position:absolute;left:86px;top:152px;width:182px;"/>  
        <xui:place control="textarea1" id="controlPlace6" style="position:absolute;height:29px;left:85px;width:371px;top:192px;"/>  
        <xui:place control="textarea2" id="controlPlace7" style="position:absolute;left:85px;height:29px;width:373px;top:243px;"/>  
        <xui:place control="textarea3" id="controlPlace8" style="position:absolute;left:86px;height:29px;width:373px;top:294px;"/>  
        <xui:place control="gridSelect1" id="controlPlace9" style="position:absolute;left:85px;top:61px;width:182px;"/> 
      <xhtml:label id="label1" style="position:absolute;top:63px;left:33px;" class="xui-label"><![CDATA[信息类型]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;left:34px;top:109px;" class="xui-label"><![CDATA[起始日期]]></xhtml:label>
  <xhtml:label id="label3" style="position:absolute;left:34px;top:153px;" class="xui-label"><![CDATA[结束日期]]></xhtml:label>
  <xhtml:label id="label4" style="position:absolute;top:194px;left:58px;" class="xui-label"><![CDATA[地点]]></xhtml:label>
  <xhtml:label id="label5" style="position:absolute;left:33px;top:246px;" class="xui-label"><![CDATA[内容说明]]></xhtml:label>
  <xhtml:label id="label6" style="position:absolute;top:300px;left:56px;" class="xui-label"><![CDATA[备注]]></xhtml:label><xhtml:label id="label7" class="xui-label" style="color:#FF0000;position:absolute;left:23px;top:151px;"><![CDATA[*]]></xhtml:label><xui:place control="trigger1" id="controlPlace10" style="position:absolute;top:128px;left:363px;"></xui:place></layout>  
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" mode="IMG_TXT_LR"
          id="navigatorBar1" data="educationAndJobD"> 
          <item id="barItem1"> 
            <xforms:trigger appearance="image-text" id="insertNew1" image-text-mode="LR"
              src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_newitem.gif"> 
              <xforms:label> <![CDATA[新建]]> </xforms:label>  
              <xforms:action id="action1" ev:event="DOMActivate"> 
                <xforms:script id="xformsScript1"><![CDATA[educationAndjob.insertNew1Click(event)]]></xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="save-item" id="barItem2"/>  
          <item name="delete-item" id="barItem3"/>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="separator" id="customBarItem2"/>  
          <item name="pre-item" id="barItem6"/>  
          <item name="next-item" id="barItem7"/> 
        </xui:bar> 
      </xhtml:div>  
      <xforms:input id="input1" ref="data('educationAndJobD')/eXPERIENCESTARTDATE" format="yyyy-MM-dd"/>  
      <xforms:input id="input2" ref="data('educationAndJobD')/eXPERIENCEENDDATE" format="yyyy-MM-dd"/>  
      <xforms:textarea ref="data('educationAndJobD')/eXPERIENCEPLACE" id="textarea1"/>  
      <xforms:textarea ref="data('educationAndJobD')/eXPERIENCEDESCRIPTION" id="textarea2"/>  
      <xforms:textarea ref="data('educationAndJobD')/mEMO" id="textarea3"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('educationAndJobD')/eXPERIENCETYPE"> 
        <xforms:label ref="col_1" id="default4"/>  
        <xforms:value ref="col_0" id="default5"/>  
        <xforms:itemset id="default6" auto-load-data="true"> 
          <xforms:column ref="col_0" visible="false" id="default44"/>  
          <xforms:column ref="col_1" id="default45"/>  
          <itemset-data xmlns="" id="default57">  
            <rows id="default58"> 
              <row id="default59"> 
                <cell id="default60">1</cell>  
                <cell id="default61">教育信息</cell> 
              </row>  
              <row id="default62"> 
                <cell id="default63">2</cell>  
                <cell id="default64">培训信息</cell> 
              </row>  
              <row id="default65"> 
                <cell id="default66">3</cell>  
                <cell id="default67">工作信息</cell> 
              </row> 
            </rows> 
          </itemset-data> 
        </xforms:itemset> 
      </xhtml:div> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="educationAndjob.js"/> 
  </xui:resource> 
</xui:window>

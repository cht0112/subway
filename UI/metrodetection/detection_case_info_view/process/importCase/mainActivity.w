<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:153px;top:10px;left:10px;height:65px;">
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      data-type="xml" auto-load="true" id="dectionBaseInfoData" concept="DECTION_BASED_ON_INFO"
      store-type="simple">
      <creator id="default1" action="/metrodetection/system_code/logic/action/createDECTION_BASED_ON_INFOAction"/>  
      <reader id="default2" action="/metrodetection/system_code/logic/action/queryDECTION_BASED_ON_INFOAction"/>  
      <writer id="default3" action="/metrodetection/system_code/logic/action/saveDECTION_BASED_ON_INFOAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" data-type="xml"
      columns="name" src="" auto-load="true" id="tempData" store-type="simple">
      <rows xmlns="" id="default4">  
        <row id="default5"> 
          <cell id="default6"/>
        </row> 
      </rows>
    </data>
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:layout style="height:100%;width:100%" id="rootLayout">
      <xui:place control="view1" id="controlPlace2" style="width:814px;height:518px;"/>
    </xui:layout>  
    <xui:view auto-load="true" id="view1" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout1">
        <xui:place control="gridSelect2" id="controlPlace3" style="position:absolute;top:64px;width:213px;left:266px;"/>  
        <xhtml:label id="label1" style="position:absolute;top:68px;left:170px;" class="xui-label"><![CDATA[请选择检测依据]]></xhtml:label>  
        <xhtml:input type="text" value="" id="caseVersion" style="position:absolute;top:115px;left:266px;width:213px;"
          class="xui-input"/>  
        <xhtml:label id="label3" style="position:absolute;top:115px;left:170px;" class="xui-label"><![CDATA[请输入用例版本]]></xhtml:label>
        
        <form action="" enctype="multipart/form-data" id="fileupload" method="post" name="fileupload" target="bbb">
          <hidden id="caseVersion" name="caseVersion"></hidden>
          <hidden id="jianceyiju" name="jianceyiju"></hidden>
          <span style="position:absolute;height:24px;left:170px;top:180px;">请选择用例文件</span> 
          <input id="file" name="file" style="position:absolute;height:24px;left:266px;top:180px;"
            type="file"/>  
          <input type="checkbox" id="importModel" name="importModel" style="position:absolute;left:260px;height:24px;top:220px;" />
          <span style="position:absolute;left:280px;height:24px;top:228px;">覆盖已存在用例</span>
          <input class="xui-button" id="sub" name="sub" onclick="uploadCase();"
            style="position:absolute;left:260px;height:24px;top:280px;" type="button"
            value="上传"/> 
        </form> 
        <xhtml:iframe xmlns:xhtml="http://www.w3.org/1999/xhtml" id="bbb" name="bbb" onload="mainActivity.afterImportCase(this);" src="about:blank" style="display:none;" />
      </layout>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect2" ref="data('tempData')/name" default-label-ref="'请选择检测依据'"> 
        <xforms:label ref="dECTIONBASEDONNAME" id="default7"/>  
        <xforms:value ref="DECTION_BASED_ON_INFO" id="default8"/>  
        <xforms:itemset id="default9" data="dectionBaseInfoData" auto-load-data="false"> 
          <xforms:column ref="DECTION_BASED_ON_INFO" visible="false" id="default11"/>  
          <xforms:column ref="dECTIONBASEDONNAME" id="default12"/>
        </xforms:itemset>
      </xhtml:div>  
      </xui:view>
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="mainActivity.js"/>
  </xui:resource> 
</xui:window>

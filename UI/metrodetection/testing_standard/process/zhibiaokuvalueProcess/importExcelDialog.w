<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:143px;top:55px;height:auto;left:688px;"/>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/windowReceiver.xbl.xml#windowReceiver"
      id="windowReceiver"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xui:place control="windowReceiver" id="controlPlace1" style="top:47px;left:181px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%;height:100%;"> 
        <center id="borderLayout-center1"> 
          <xui:place control="view3" id="controlPlace4" style="width:739px;height:284px;"/> 
        </center>  
        <bottom id="borderLayout-bottom1" size="40px"> 
          <xhtml:input class="xui-button" id="input(button)2" onclick="justep.xbl('windowReceiver').windowCancel()"
            style="width:75px;float:right;margin-left:8px;margin-right:20px" type="button"
            value="取消"/>  
          <xhtml:input class="xui-button" id="input(button)1" style="width:75px;float:right"
            type="button" value="确定" onclick="importExcelDialog.inputbutton1Click(event)"/> 
        </bottom>  
        <top size="30px" id="borderLayout-top1"/>  
        <left size="40px" id="borderLayout-left1"/> 
      </xhtml:div> 
    </xui:layout>  
    <xui:view auto-load="true" id="view3" class="xui-container"> 
      <layout type="absolute" style="position:relative;" id="layout3"> 
        <!--      <span style="position:absolute;height:24px;left:170px;top:180px;">请选择用例文件</span>  -->  
        <form action="" enctype="multipart/form-data" id="importValue" method="post"
          name="importValue" target="bbb"> 
          <span id="span1" style="position:absolute;height:21px;top:20px;left:0px;width:90px;"><![CDATA[导入excel文件：]]></span>  
          <input id="file" name="file" style="position:absolute;height:24px;left:100px;top:15px;" type="file"/>  
<!--          <input class="xui-button" id="sub" name="sub" onclick="importValue();"-->
<!--            style="position:absolute;height:21px;top:50px;left:0px;width:90px;" type="button"-->
<!--            value="确定"/> -->
        </form> 
        <xhtml:iframe xmlns:xhtml="http://www.w3.org/1999/xhtml" id="bbb" name="bbb" onload="importExcelDialog.afterImportCase(this);" src="about:blank" style="display:none;" />
      </layout> 
    </xui:view> 
  </xui:view>  
  <xui:resource id="resource1">
    <xhtml:script id="htmlScript1" src="/UI/metrodetection/testing_standard/process/zhibiaokuvalueProcess/importExcelDialog.js"/>
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="folderApproveSet.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource>  
  <xforms:model id="model1"> 
    <data component="/UI/system/components/data.xbl.xml#data" id="dApproveParam" columns="folderID" auto-load="true" store-type="simple"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view id="vDetail"> 
      <xhtml:input id="approveChb" type="checkbox" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input id="inheritChb" type="checkbox" onclick="javascript:inheritChbOnClick()" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input id="overrideChb" type="checkbox" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input type="button" id="btnEnsure" value="确定" onclick="javascript:onEnsureFun()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:60px;"/>  
      <xhtml:input type="button" id="btnCancel" value="取消" onclick="javascript:onCancelFun()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:60px;"/>  
      <xui:layout style="height:100%;" type="excel" src="folderApproveSet.xls"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="vDetail" style="height:100%;"/> 
    </xui:layout> 
  </xui:view> 
</xui:window>

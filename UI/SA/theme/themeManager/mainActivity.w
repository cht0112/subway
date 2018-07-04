<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:113px;left:166px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="main" concept="SA_ThemeManager"> 
      <reader id="default1" action="/SA/theme/logic/action/queryThemeManagerAction"/>  
      <writer id="default2" action="/SA/theme/logic/action/saveThemeManagerAction"/>  
      <creator id="default3" action="/SA/theme/logic/action/createThemeManagerAction"/>  
      <rule id="dataBizRule1" relation="sThemeID" required="true()" alert="'主题不能为空！'"/>  
      <rule id="dataBizRule2" relation="sOrgID" required="true()" alert="'组织不能为空！'"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="view1"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="main" mode="IMG_TXT_LR"> 
          <item name="insert-item" id="barItem1"/>  
          <item name="save-item" id="barItem2"/>  
          <item name="delete-item" id="barItem3"/>  
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-item" id="barItem5"/>  
          <item name="filter-pattern-item" id="barItem6"/>  
          <item name="separator" id="separatorItem2"/>  
          <item name="custom-page-item" id="barItem11"/> 
        </xui:bar>  
        <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" id="testsingleMulti" url="/UI/system/dialog/org/orgSingleTree.w" title="选择机构" modal="true" status="" width="496px" height="364px" initEveryTimes="true" minMaxAble="true" reSizeAble="true" autoSize="true" onReceive="singleMultiFromFreameValue" dialogUpdate="true"/> 
      </xhtml:div>  
      <layout id="layout1"> 
        <xui:place control="toolbars1" id="controlPlace3"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="view2"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="main"> 
        <xui:column id="gridColumn2" ref="sFName" label="组织" type="inputbtn" width="250px" onButtonClick="grid1SFNameButtonClick"/>  
        <xui:column id="gridColumn1" ref="sThemeName" label="主题" type="inputbtn" width="200px" align="center" onButtonClick="grid1SThemeNameButtonClick"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout2"> 
        <xui:place control="grid1" id="controlPlace4" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%" id="rootLayout"> 
      <xui:place control="view1" id="controlPlace1"/>  
      <xui:place control="view2" id="controlPlace2"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

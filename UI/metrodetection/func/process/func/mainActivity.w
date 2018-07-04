<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="width:143px;top:151px;height:auto;left:88px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="FUNC_ID" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" filter-relations="fUNCNAME,fUNCID,sYSTEMTYPECNAME,mANAGEMENTTYPECNAME"> 
      <creator action="/metrodetection/system_code/logic/action/createFUNC_IDAction" id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/queryFUNC_IDAction" id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/saveFUNC_IDAction" id="default3"/> 
    <rule id="dataBizRule1" relation="sYSTEMTYPE" readonly="data('dataMain')/sYSTEMTYPE=1" concept="FUNC_ID"></rule>
  </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData1" concept="SYSTEM_TYPE_CODE"><creator id="default10" action="/metrodetection/system_code/logic/action/createSYSTEM_TYPE_CODEAction"></creator>
  <reader id="default11" action="/metrodetection/system_code/logic/action/querySYSTEM_TYPE_CODEAction"></reader>
  <writer id="default12" action="/metrodetection/system_code/logic/action/saveSYSTEM_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="bizData2" concept="MANAGEMENT_TYPE_CODE"><creator id="default17" action="/metrodetection/system_code/logic/action/createMANAGEMENT_TYPE_CODEAction"></creator>
  <reader id="default18" action="/metrodetection/system_code/logic/action/queryMANAGEMENT_TYPE_CODEAction"></reader>
  <writer id="default19" action="/metrodetection/system_code/logic/action/saveMANAGEMENT_TYPE_CODEAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default5" label="功能编码" ref="fUNCID" type="ed" width="100px" /><column id="default4" label="功能名称" ref="fUNCNAME" type="ed" width="100px"/>  
        
      <column id="default6" label="系统类型" ref="sYSTEMTYPECNAME" type="select" width="100px" editor="gridSelect2"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/sYSTEMTYPE" label-ref="data('dataMain')/sYSTEMTYPECNAME" onDropdown="mainActivity.gridSelect2Dropdown">
				   
				   
				   
				
   <xforms:label ref="sYSTEMTYPECNAME" id="xuiLabel2"></xforms:label>
   <xforms:value ref="rowid" id="default13"></xforms:value>
   <xforms:itemset id="default14" data="bizData1" auto-load-data="false">
  
  
  
  <xforms:column ref="rowid" visible="false" id="default15"></xforms:column>
  <xforms:column ref="sYSTEMTYPECNAME" id="default16"></xforms:column></xforms:itemset></xhtml:div></column>  
      <column id="default7" label="管理类型" ref="mANAGEMENTTYPECNAME" type="select" width="100px" editor="gridSelect3"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataMain')/mANAGEMENTTYPE" label-ref="data('dataMain')/mANAGEMENTTYPECNAME">
				   
				   
				   
				
   <xforms:label ref="mANAGEMENTTYPECNAME" id="xuiLabel3"></xforms:label>
   <xforms:value ref="rowid" id="default20"></xforms:value>
   <xforms:itemset id="default21" data="bizData2">
  <xforms:column ref="rowid" visible="false" id="default36"></xforms:column>
  <xforms:column ref="mANAGEMENTTYPECNAME" id="default37"></xforms:column></xforms:itemset></xhtml:div></column> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain" mode="IMG_TXT_LR"> 
        <item id="barItem1" name="insert-item"/>  
        <item id="barItem2" name="save-item"/>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem2" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top1" size="32px"> 
          <place control="tbsMain" id="controlPlace2"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="grdMain" id="controlPlace1" style="width:100%;height:100%"/> 
        </center> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource/> 
<resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></resource></xui:window>

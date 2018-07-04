<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="mdDefault" style="width:143px;top:151px;left:88px;height:57px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TOOL_CATEGORY_CODE" direct-delete="true" id="dataMain" limit="20" offset="0" relations="tOOLCATEGORYCNAME,tOOLCATEGORYENAME,nUMSCODE,version" update-mode="whereVersion" data-type="xml" onValueChanged="mainActivity.dataMainValueChanged" filter-relations="tOOLCATEGORYCNAME,tOOLCATEGORYENAME,nUMSCODE"> 
      <creator action="/metrodetection/system_code/logic/action/createTOOL_CATEGORY_CODEAction" id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/queryTOOL_CATEGORY_CODEAction" id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTOOL_CATEGORY_CODEAction" id="default3"/> 
    </data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="oakind" concept="OA_AS_Kind" store-type="simple" limit="-1" confirm-refresh="false"><creator id="default6" action="/OA/asset/logic/action/createASKindAction"></creator>
  <reader id="default7" action="/OA/asset/logic/action/queryASKindAction"></reader>
  <writer id="default8" action="/OA/asset/logic/action/saveASKindAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="false" id="toolsChangeRecords" concept="TOOLS_CHANGE_RECORDS" limit="-1" store-type="simple"><creator id="default9" action="/metrodetection/system_code/logic/action/createTOOLS_CHANGE_RECORDSAction"></creator>
  <reader id="default10" action="/metrodetection/system_code/logic/action/queryTOOLS_CHANGE_RECORDSAction"></reader>
  <writer id="default11" action="/metrodetection/system_code/logic/action/saveTOOLS_CHANGE_RECORDSAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <xui:column id="gridColumn1" ref="nUMSCODE" label="编码" type="ed" width="100px"></xui:column><column id="default4" label="工具分类" ref="tOOLCATEGORYCNAME" type="ed" width="100px"/>  
      <column id="default5" label="英文名称" ref="tOOLCATEGORYENAME" type="ed" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain" mode="IMG_TXT_LR"> 
        <item id="barItem1">
        	<xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            id="insertTrigge" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none" title="新建" ondblclick="(event)"/> 
        </item>  
        <item id="barItem2" >
        	 <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"
            onclick="mainActivity.saveMore(event)" src="/UI/system/images/standardToolbar/standard/save.gif"
            style="border:none" title="保存" id="saveMas"/> 
        </item>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem2" name="separator"/>  
        <item id="barItem5" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top id="borderLayout-top1" size="40px"> 
          <place control="tbsMain" id="controlPlace2"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="grdMain" id="controlPlace1" style="width:100%;height:100%"/> 
        </center> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>

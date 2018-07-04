<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="mdDefault" style="width:143px;top:151px;height:auto;left:88px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="POSITION_TYPE_CODE" direct-delete="true" id="dataMain" limit="20" offset="0" relations="pOSITIONIDCNAME,pOSITIONIDENAME" update-mode="whereAll" confirm-delete="false" data-type="xml"> 
      <creator action="/metrodetection/system_code/logic/action/createPOSITION_TYPE_CODEAction" id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/queryPOSITION_TYPE_CODEAction" id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/savePOSITION_TYPE_CODEAction" id="default3"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default4" label="岗位中文名称" ref="pOSITIONIDCNAME" type="ed" width="100px"/>  
      <column id="default5" label="岗位英文名称" ref="pOSITIONIDENAME" type="ed" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain" mode="IMG_TXT_LR"> 
        <item id="barItem1" name="insert-item"/>  
        <item id="barItem2" name="save-item"/>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem2" name="separator"/>  
        <item id="barItem5" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem6"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="pOSITIONIDCNAME,pOSITIONIDENAME" id="smartFilter1"></xhtml:div> 
        </item>  
        <item id="barItem7"> 
          <xforms:trigger appearance="image-text" id="trigger1" src="/UI/SA/OPM/images/search.gif">  
            <xforms:label id="default6">  <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1">  
              <xforms:script id="xformsScript1">  <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
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
  <xui:resource id="resource1"/> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="mdDefault" style="width:143px;top:151px;height:auto;left:88px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TOOLS_CHANGE_RECORDS" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll"> 
      <creator action="/metrodetection/system_code/logic/action/createTOOLS_CHANGE_RECORDSAction" id="default1"/>  
      <reader action="/metrodetection/system_code/logic/action/queryTOOLS_CHANGE_RECORDSAction" id="default2"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTOOLS_CHANGE_RECORDSAction" id="default3"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default4" label="变更模块" ref="CHANGE_MODULAR" type="ed" width="170px" align="center"/>  
      <xui:column id="gridColumn1" ref="CHANGE_MODULAR_CONTENT" label="变更内容" type="ed" width="161px" align="center"></xui:column><column id="default5" label="变更前编码" ref="CHANGE_BEFORE_VAL" type="ed" width="168px" align="center"/>  
      <column id="default6" label="变更后编码" ref="CHANGE_AFTER_VAL" type="ed" width="170px" align="center"/>  
      <column id="default7" label="变更时间" ref="CHANGE_DATE" type="dateTime" width="154px" align="center"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain" mode="IMG_TXT_LR"> 
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
  <xui:resource id="resource1"/> 
</xui:window>

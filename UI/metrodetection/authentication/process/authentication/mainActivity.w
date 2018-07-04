<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="mdDefault" style="width:143px;top:151px;height:auto;left:88px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="FUNC_ID" direct-delete="true" id="dataMain" limit="20" offset="0" relations="fUNCNAME,sYSTEMTYPE,mANAGEMENTTYPE,fUNCID,sYSTEMTYPECNAME,mANAGEMENTTYPECNAME,pRIVILEGENAME" update-mode="whereAll" filter-relations="fUNCNAME,fUNCID,sYSTEMTYPECNAME,mANAGEMENTTYPECNAME,pRIVILEGENAME"> 
      <reader id="default1" action="/metrodetection/system_code/logic/action/queryFuncAction"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" show-header-menu="hide-column,save-layout,group-column,adjust-column" onInit="mainActivity.grdMainInit"> 
      <column id="default3" label="功能编码" ref="fUNCID" type="ed" width="100px" align="left"/><column id="default2" label="功能名称" ref="fUNCNAME" type="ed" width="100px"/>  
        
      <column id="default4" label="权限" ref="pRIVILEGENAME" type="ed" width="100px"/>  
      <column id="default5" label="系统类型" ref="sYSTEMTYPECNAME" type="ed" width="100px"/>  
      <column id="default6" label="管理类型" ref="mANAGEMENTTYPECNAME" type="ed" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain" mode="IMG_TXT_LR"> 
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem2" name="separator"/>  
        <item id="barItem5" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/> 
      <item id="customBarItem1"><xforms:trigger id="trigger2" style="width:100px;">
   <xforms:label id="default8"><![CDATA[下载认证信息]]></xforms:label>
  <xforms:action id="action1" ev:event="DOMActivate"><xforms:script id="xformsScript1"><![CDATA[mainActivity.trigger2Click(event)]]></xforms:script></xforms:action></xforms:trigger></item></xui:bar> 
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
      <xhtml:iframe xmlns:xhtml="http://www.w3.org/1999/xhtml" id="bbb" name="bbb" src="about:blank" style="display:none;"/>
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:103px;left:68px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="1"
      limit="20" xui:update-mode="whereVersion" auto-load="true" id="masterData" direct-delete="true"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbar"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar"
        data="masterData" mode="IMG_TXT_LR"> 
        <item> 

         <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script > <![CDATA[list.insertItemClick(event);]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
            
        </item>  
        <item id="edit-item"> 
   
          <xforms:trigger appearance="image-text" id="editTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/edit.gif"> 
            <xforms:label> <![CDATA[编辑]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script > <![CDATA[list.editItemClick(event);]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
          
        </item>  
        <item name="delete-item"/>  
        <item name="refresh-item"/>  
        <item name="separator"/>  
        <item name="filter-pro-item" id="barItem1"></item><item name="custom-page-item" items="pre,next,ext" page-count="0"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowRunner.xbl.xml#windowRunner"
      id="detailRunner" onReceive="list.detailRunnerReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="listGrid"
      data="masterData" onRowDblClick="list.listGridRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="40px" id="borderLayout-top1"> 
          <place control="toolbar"/> 
        </top>  
        <center id="borderLayout-center1"> 
          <place control="listGrid" style="width:100%;height:100%;"/> 
        </center> 
      </xhtml:div>  
      <xui:place control="detailRunner" id="controlPlace1" style="top:191px;left:87px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="list.js"/> 
  </xui:resource> 
</xui:window>

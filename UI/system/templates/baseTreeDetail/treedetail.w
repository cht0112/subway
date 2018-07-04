<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:93px;top:102px;height:72px;left:78px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataMain" is-tree="true"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="vDetail"> 
      <layout style="height:100%;" id="layout1" type="excel" src="detail.xls"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdMain" data="dataMain" appearance="tree"> 
      <column type="tree" ref=""/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngtbMain"
        data="dataMain" mode="IMG_TXT_LR"> 
        <item name="create-new-child-item" id="barItem12" /><item name="create-new-brother-item" id="barItem13" /><item name="create-new-root-item" id="barItem14" /></xui:bar> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="30%"
        mode="horz" has-drag-bar="true" has-arrow-button="true" id="HSplitter1" style="width:100%;height:100%;"> 
        <xhtml:div region="left" id="div1"> 
          <xhtml:div style="width:100%;height:100%" id="div2"> 
            <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
              id="borderLayout1" style="width:100%; height: 100%;;"> 
              <top size="75px" id="borderLayout-top1"> 
                <place control="tbsMain" id="controlPlace3"/> 
              <xui:place control="toolbars1" id="controlPlace4"></xui:place></top>  
              <center id="borderLayout-center1" style="padding-right:2px"> 
                <place control="grdMain" id="controlPlace1" style="width:100%;height:100%;"/> 
              </center> 
            </xhtml:div> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div3"> 
          <xhtml:div style="width:100%;height:100%;padding-left:3px" id="div4"> 
            <place control="vDetail" id="controlPlace2"/> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div> 
    </xui:layout> 
  <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"><xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" mode="IMG_TXT_LR" data="dataMain">
   <item name="save-item" id="barItem3"></item>
   <item name="delete-item" id="barItem4"></item>
   <item name="refresh-item" id="barItem5"></item>
   </xui:bar></xhtml:div></xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>

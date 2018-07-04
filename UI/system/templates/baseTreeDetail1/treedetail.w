<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="width:93px;height:auto;top:99px;left:499px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" data-type="json" offset="0"
      limit="20" update-mode="whereVersion" auto-load="true" id="dataMain" is-tree="true"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/menuButton.xbl.xml#menuButton" id="menuButton1"
      label="新建"> 
      <menuitem id="menuitem1" name="newChild" operation-owner="dataMain" operation="newChild"/>  
      <menuitem id="newBrother" name="newBrother" operation-owner="dataMain" operation="newBrother"/>  
      <menuitem id="newRoot" name="newRoot" operation-owner="dataMain" operation="new"
        label="新建根节点"/> 
    </xhtml:div>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="saveTrigger"
      appearance="image-minimal" operation-owner="dataMain" operation="save"> 
      <xforms:label id="saveTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="deleteTrigger"
      operation-owner="dataMain" operation="delete" appearance="image-minimal"> 
      <xforms:label id="deleteTriggerLabel"/> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="refreshTrigger"
      operation-owner="dataMain" operation="refresh" appearance="image-minimal"> 
      <xforms:label id="refreshTriggerLabel"/> 
    </xforms:trigger>  
    <xui:view auto-load="true" id="vDetail" class="xui-container"> 
      <layout style="height:100%;" id="layout1" type="excel" src="detail.xls"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="grdMain" data="dataMain" appearance="tree"> 
      <column type="tree" ref="" id="gridColumn1"/> 
    </xhtml:div>
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout2" style="width:100%; height: 100%;;"> 
        <top size="40px" id="borderLayout-top2"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            separator="false" separator-size="1" id="buttonBar1" expandable="false"
            expanded="true" expanded-label="展开过滤" collapsed-label="隐藏过滤" expanded-position="6"
            expanded-width="75" style="width:308px;height:38px;"> 
            <xui:place control="menuButton1" id="controlPlace7"/>  
            <xui:place control="saveTrigger" id="saveTriggerPlace"/>  
            <xui:place control="deleteTrigger" id="controlPlace6"/>  
            <xui:place control="refreshTrigger" id="refreshTriggerPlace"/> 
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center2"> 
          <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter"
            fix-size="240" mode="horz" has-drag-bar="true" has-arrow-button="true"
            id="HSplitter1" style="width:100%;height:100%;"> 
            <xhtml:div region="left" id="div1"> 
              <place control="grdMain" id="controlPlace1" style="width:100%;height:100%;"/>
            </xhtml:div>  
            <xhtml:div region="right" id="div3"> 
              <place control="vDetail" id="controlPlace2" style="height:100%;width:100%;"/> 
            </xhtml:div> 
          </xhtml:div> 
        </center> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"/> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:134px;left:336px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="-1" update-mode="whereVersion" auto-load="true" id="dGroup" concept="AP_CustomOrgGroup"
      is-tree="true" onBeforeDelete="dGroupBeforeDelete"> 
      <reader id="default1" action="/appCommon/logic/action/queryCustomOrgGroupAction"/>  
      <writer id="default2" action="/appCommon/logic/action/saveCustomOrgGroupAction"/>  
      <creator id="default3" action="/appCommon/logic/action/createCustomOrgGroupAction"/>  
      <tree-option id="treeOption1" parent-relation="fParent" root-filter="AP_CustomOrgGroup.fParent is null"
        node-kind-relation="fNodeKind" virtual-root="个人常用组"/>  
      <rule id="dataBizRule1" relation="fType" default-value="'personal'"/>  
      <rule id="dataBizRule2" relation="fName" required="true()" alert="'常用组名称不能为空'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0"
      limit="-1" update-mode="whereVersion" auto-load="true" id="dDetail" concept="AP_CustomOrgDetail"> 
      <reader id="default4" action="/appCommon/logic/action/queryCustomOrgDetailAction"/>  
      <writer id="default5" action="/appCommon/logic/action/saveCustomOrgDetailAction"/>  
      <creator id="default6" action="/appCommon/logic/action/createCustomOrgDetailAction"/>  
      <master id="master1" data="dGroup" relation="fMasterID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="detailInsertState"
      src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default7">  
        <row id="default8"> 
          <cell id="default9"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="detailInsertState" readonly="(data('dGroup')/rowid = '') or (data('dGroup')/rowid = '_is_root_')"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1"
        data="dGroup"> 
        <item id="barItem6"> 
          <xforms:trigger style="height:24px;width:24px;" id="triggerInsertGroup" appearance="image"
            src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label id="xuiLabel2">添加分组</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript1">triggerInsertGroupDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item" id="barItem2"/>  
        <item name="delete-item" id="barItem3"/>  
        <item name="refresh-item" id="barItem4"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridGroup" data="dGroup" edit-mode="true" onShowNodeImg="gridGroupShowNodeImg"
      appearance="tree"> 
      <xui:column id="gridColumn2" ref="fName" label="分组" type="tree"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2"
        data="dDetail"> 
        <item id="barItem5"> 
          <xforms:trigger style="height:24px;width:24px;" id="triggerInsertDetail" appearance="image"
            src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"
            ref="data('dTemp')/detailInsertState"> 
            <xforms:label id="xuiLabel1">添加组织</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript2">triggerInsertDetailDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item" id="barItem12"/>  
        <item name="delete-item" id="barItem13"/>  
        <item name="refresh-item" id="barItem14"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="barItem1"> 
          <xforms:trigger style="height:24px;width:24px;" id="triggerDetailMoveUp" src="/UI/appCommon/images/up.png"
            appearance="image"> 
            <xforms:label id="xuiLabel3">上移</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action3"> 
              <xforms:script id="xformsScript3">triggerDetailMoveUpDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem7"> 
          <xforms:trigger style="height:24px;width:24px;" id="triggerDetailMoveDown" src="/UI/appCommon/images/down.png"
            appearance="image"> 
            <xforms:label id="xuiLabel4">下移</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action4"> 
              <xforms:script id="xformsScript4">triggerDetailMoveDownDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      id="gridDetail" data="dDetail"> 
      <xui:column id="gridColumn4" ref="fOrgKind" label=" " type="html" width="20"
        onRender="gridDetailFOrgKindRender"/>  
      <xui:column id="gridColumn5" ref="fOrgName" label="组织" type="ro" width="100"/>  
      <xui:column id="gridColumn3" ref="fOrgFName" label="组织路径" type="ro"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="选择组织" width="600" height="450" modal="true" id="dlgInsertDetail" url="/appCommon/dialogs/orgSelectDialog/orgMultiSelect/mainActivity.w"
      onSend="dlgInsertDetailSend" onReceive="dlgInsertDetailReceive"/>  
    <xforms:input id="input2" ref="data('dGroup')/fName"></xforms:input><xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout"
      type="absolute"> 
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" fix-size="35%"
        mode="horz" has-drag-bar="true" has-arrow-button="true" id="HSplitter1" style="width:100%;height:95%;position:absolute;"> 
        <xhtml:div region="left" id="div1"> 
          <xhtml:div style="width:100%;height:100%" id="div2"> 
            <xhtml:table id="table3" style="width:100%;height:100%;table-layout:fixed;"> 
              <xhtml:tr id="default11"> 
                <xhtml:td id="td9" style="height:35px;"> 
                  <xui:place control="toolbars1" id="controlPlace1"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr id="default12"> 
                <xhtml:td id="td11"> 
                  <xui:place control="gridGroup" id="controlPlace2" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:div> 
        </xhtml:div>  
        <xhtml:div region="right" id="div3"> 
          <xhtml:div style="width:100%;height:100%" id="div4"> 
            <xhtml:table id="table4" style="width:100%;height:100%;table-layout:fixed;"> 
              <xhtml:tr id="default10"> 
                <xhtml:td id="td1" style="height:35px;" valign="middle">
                  	<xhtml:table id="table1" style="width:100%;height:100%;table-layout:fixed;border:0;" cellspacing="0" cellpadding="0">
   
   <xhtml:tr id="default16">
    <xhtml:td id="td4" style="width:65px;"><xhtml:label id="htmlLabel2" style="font-size:12;">常用组名称</xhtml:label></xhtml:td>
    <xhtml:td id="td5"><xui:place control="input2" id="controlPlace7" style="width:200px;"></xui:place></xhtml:td></xhtml:tr> </xhtml:table></xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr id="default13"> 
                <xhtml:td id="td13" style="height:35px;"> 
                  <xui:place control="toolbars2" id="controlPlace3"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr id="default14"> 
                <xhtml:td id="td15"> 
                  <xui:place control="gridDetail" id="controlPlace4" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:div> 
        </xhtml:div> 
      </xhtml:div>  
      <xui:place control="dlgInsertDetail" id="controlPlace6" style="position:absolute;top:242px;left:78px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="personalActivity.js"/> 
  </xui:resource> 
</xui:window>

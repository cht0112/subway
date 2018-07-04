<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:214px;left:160px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dAssetInventory"
      concept="OA_AS_Card" order-by="fCode:asc" filter-relations="fKind,fCode,fName,fSpecType,fUnit,fStatusName,fOriginValue,fRemainValue,fDutyDeptName,fDutyPsnName,fRemark"> 
      <reader id="default3" action="/OA/asset/logic/action/queryASCardAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <calculate-relation relation="inventory" id="calculate-relation2"/>  
      <calculate-relation relation="recCheck" id="calculate-relation3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dKind" concept="OA_AS_Kind"
      store-type="simple" order-by="fCode:asc"> 
      <reader id="default6" action="/OA/asset/logic/action/queryASKindAction"/>  
      <filter name="statusFilter" id="filter1">OA_AS_Kind.fUseStatus='1'</filter> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetInventory"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetInventory"
        data="dAssetInventory" mode="IMG_TXT_LR"> 
        <item id="barItem12"> 
          <xforms:trigger id="trgInsert" appearance="image" src="/UI/appCommon/images/insert.gif"
            dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label id="xuiLabel1">添加清查记录</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1">trgInsertDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem11" page-count="5"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem2">
          <xhtml:div id="div1" style="width:55px;text-align:center;">
          <xhtml:label id="label1" class="xui-label" style="width:55px;background-color:transparent;">资产类别</xhtml:label> 
          </xhtml:div>
        </item>
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter"
            style="width:120px;" all-selected-label="'全部'" id="gridFilter" filter-data="dAssetInventory"
            multi-select="true" default-label="'全部'" filter-relation="fKindID" dropdown-height="200"> 
            <xforms:label ref="fName" id="xuiLabel2"/>  
            <xforms:value ref="OA_AS_Kind" id="default4"/>  
            <xforms:itemset id="default5" data="dKind" auto-load-data="true"> 
              <xforms:column ref="fName" id="default13"/>  
              <xforms:column ref="OA_AS_Kind" visible="false" id="default14"/> 
            </xforms:itemset> 
          </xhtml:div> 
        </item>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="添加清查记录" width="400px" height="300px" modal="true" id="wDlgInsertInventory"
      url="/OA/asset/process/dialog/insertInventory/insertInventory.w" onSend="wDlgInsertInventorySend"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="清查记录" width="700px" height="450px" modal="true" id="wDlgInventoryRecord"
      url="/OA/asset/process/dialog/inventoryRecord/inventoryRecord.w" onSend="wDlgInventoryRecordSend"/>  
    <xui:view auto-load="true" id="vAssetInventory"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="grdAssetInventory" data="dAssetInventory"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="recCheck" label="#master_checkbox" type="checkbox"
          width="30" align="center"/>  
        <column id="gridColumn14" ref="inventory" type="html" width="55" label="清查记录"
          onRender="grdAssetInventory_inventoryRender" align="center"/>  
        <column id="gridColumn8" ref="fStatusName" label="状态" type="ro" width="40"
          align="center"/>  
        <column id="gridColumn3" ref="fKind" label="资产类别" type="ro" width="112"
          align="center"/>  
        <column id="gridColumn4" ref="fCode" label="资产编号" type="html" width="100"
          onRender="grdAssetInventory_fCodeRender"/>  
        <column id="gridColumn5" ref="fName" label="资产名称" type="ro" width="100"/>  
        <column id="gridColumn6" ref="fSpecType" label="规格型号" type="ro" width="115"/>  
        <column id="gridColumn7" ref="fUnit" label="单位" type="ro" width="30" align="center"/>  
        <column id="gridColumn9" ref="fOriginValue" label="资产原值" type="ro" width="80"
          align="right" format="0,000.00"/>  
        <column id="gridColumn10" ref="fRemainValue" label="资产净残值" type="ro" width="80"
          align="right" format="0,000.00"/>  
        <column id="gridColumn11" ref="fDutyDeptName" label="责任部门" type="ro" width="80"/>  
        <column id="gridColumn12" ref="fDutyPsnName" label="责任人" type="ro" width="70"/>  
        <column id="gridColumn13" ref="fRemark" label="备注" type="ro" width="100"/> 
      </xhtml:div>  
      <layout style="height:100%;" id="layout1"> 
        <place control="grdAssetInventory" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default1"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrAssetInventory" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default2"> 
          <xhtml:td id="td4"> 
            <place control="vAssetInventory" id="controlPlace2"/>  
            <place control="wDlgInsertInventory" id="controlPlace4" style="top:75px;left:402px;"/>  
            <place control="wDlgInventoryRecord" id="controlPlace6" style="top:72px;left:452px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetInventoryActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

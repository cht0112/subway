<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:210px;left:64px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dAssetCard" concept="OA_AS_Card" order-by="fCode:asc" filter-relations="fKind,fCode,fName,fSpecType,fStatusName,fOriginValue,fDutyPsnName,fSourceName,fDetailInfo,fRemark,fAssetConfirm"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASMyAssetAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASCardAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <calculate-relation relation="ch" type="xs:string"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetCard"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetCard" data="dAssetCard" mode="IMG_TXT_LR"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/> x 
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem11" page-count="5"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="barItem7"> 
          <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" style="width:80px" id="extDateFilter1" filter-data="dAssetCard" filter-date-mode="single" filter-date-relation1="fCreateTime"/> 
        </item>  
        <item name="separator" id="separatorItem3"/>  
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter" style="width:140px" id="extOrgFilter1" filter-data="dAssetCard" org-url-relation="sMainOrgFID" person-id-relation="fDutyPsnID" manage-type-codes="'systemManagement,assetManagement'"/> 
        </item>  
        <item name="separator" id="separatorItem4"/>  
        <item id="barItem9"> 
          </item>  
        <item id="barItem10"> 
          <xforms:trigger id="trgConfirm" style="width:62px;"> 
            <xforms:label id="xuiLabel1">资产确认</xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate">
              <xforms:script id="xformsScript2">myAssetActivity.trgConfirmClick(event)</xforms:script>
            </xforms:action>
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vAssetCard"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetCard" data="dAssetCard" onRowDblClick="grdAssetCardRowDblClick"> 
        <column label="#master_checkbox" width="30" align="center" ref="ch" type="checkbox" select-ref="ch"/>  
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fStatusName" label="状态" type="ro" width="40"/>  
        <column id="gridColumn12" ref="fAssetConfirm" label="资产确认" type="ro" width="60"/>  
        <column id="gridColumn3" ref="fCode" label="资产编号" type="html" width="100" onRender="grdAssetCard_fCodeRender"/>  
        <column id="gridColumn4" ref="fKind" label="资产类别" type="ro" width="80"/>  
        <column id="gridColumn5" ref="fName" label="名称" type="ro" width="120"/>  
        <column id="gridColumn6" ref="fSpecType" label="规格型号" type="ro" width="80"/>  
        <column id="gridColumn7" ref="fSourceName" label="资产来源" type="ro" width="60"/>  
        <column id="gridColumn6" ref="fDutyPsnName" label="责任人" type="ro" width="80"/>  
        <column id="gridColumn9" ref="fOriginValue" label="资产原值" type="ro" width="80" align="right" format="0,000.00"/>  
        <column id="gridColumn8" ref="fDetailInfo" label="详细配置" type="ro" width="120"/>  
        <column id="gridColumn13" ref="fRemark" label="备注" type="ro" width="120"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdAssetCard" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td2" style="height:35px;"> 
            <place control="tbrAssetCard" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td4"> 
            <place control="vAssetCard" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="myAssetActivity.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

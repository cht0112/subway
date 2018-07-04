<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="left:139px;top:172px;height:auto;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dAssetCard" concept="OA_AS_Card" order-by="fCode:asc" onAfterRefresh="assetReturnActivity.dAssetCardAfterRefresh" filter-relations="fKind,fCode,fName,fSpecType,fUnit,fOriginValue,fRemainValue,fDutyDeptName,fDutyPsnName"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASCardAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASCardAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASCardAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <filter name="cardStatusFilter" id="filter1">OA_AS_Card.fStatus = '1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dAssetReturn" concept="OA_AS_Return" store-type="simple"> 
      <reader id="default9" action="/OA/asset/logic/action/queryASReturnAction"/>  
      <writer id="default10" action="/OA/asset/logic/action/saveASReturnAction"/>  
      <creator id="default11" action="/OA/asset/logic/action/createASReturnAction"/>  
      <master id="master1" data="dAssetCard" relation="fAssetID"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetReturn"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetReturn" data="dAssetCard" mode="IMG_TXT_LR"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem11" page-count="5"/>  
        <!--<item name="separator" id="separatorItem3" />
				<item id="barItem1">
					<xhtml:div
						component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"
						style="width:160px;" id="smartFilter" filter-data="dAssetCard"
						filter-relations="fKind,fCode,fName,fUnit,fSpecType,fOriginValue,fRemainValue,fDutyDeptName,fDutyPsnName" />
				</item>
				-->  
        <item name="separator" id="separatorItem4"/>  
        <item id="barItem13"> 
          <xforms:trigger id="trgReturn" style="width:55px;"> 
            <xforms:label id="xuiLabel1">归还</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript3">trgReturnDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="资产归还信息录入" width="320px" height="250px" modal="true" id="wDlgReturn" onReceive="wDlgReturnReceive" url="/OA/asset/process/dialog/assetReturnDialog/assetReturnDialog.w"/>  
    <xui:view auto-load="true" id="vAssetReturn"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetCard" data="dAssetCard"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fKind" label="资产类别" type="ro" width="89"/>  
        <column id="gridColumn3" ref="fCode" label="资产编号" type="html" width="100" onRender="grdAssetCard_fCodeRender"/>  
        <column id="gridColumn4" ref="fName" label="资产名称" type="ro" width="120"/>  
        <column id="gridColumn5" ref="fSpecType" label="规格型号" type="ro" width="80"/>  
        <column id="gridColumn6" ref="fUnit" label="单位" type="ro" width="35" align="center"/>  
        <column id="gridColumn7" ref="fOriginValue" label="资产原值" type="ro" width="100" format="0,000.00" align="right"/>  
        <column id="gridColumn8" ref="fRemainValue" label="资产净残值" type="ro" width="100" align="right" format="0,000.00"/>  
        <column id="gridColumn9" ref="fDutyDeptName" label="责任部门" type="ed" width="100"/>  
        <column id="gridColumn10" ref="fDutyPsnName" label="责任人" type="ro" width="70"/> 
      </xhtml:div>  
      <layout style="height:100%;" id="layout1"> 
        <place control="grdAssetCard" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrAssetReturn" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td4"> 
            <place control="vAssetReturn" id="controlPlace2"/>  
            <place control="wDlgReturn" id="controlPlace4" style="top:8px;left:461px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetReturnActivity.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

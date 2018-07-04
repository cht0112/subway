<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:142px;left:76px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dAssetArrange" concept="OA_AS_Card" order-by="fCode:asc" onAfterRefresh="assetArrangeActivity.dAssetArrangeAfterRefresh" filter-relations="fKind,fCode,fName,fSpecType,fStatusName,fDutyDeptName,fDutyPsnName,fSourceName,fRemark"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASCardAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASCardAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASCardAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <filter name="cardStatusFilter" id="filter1">OA_AS_Card.fStatus = '0' OR OA_AS_Card.fStatus = '1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="true" id="dAssetStatus" store-type="simple"> 
      <rows xmlns="" id="default8">  
        <row id="default9"> 
          <cell id="default10">闲置</cell>  
          <cell id="default11">0</cell> 
        </row>  
        <row id="default12"> 
          <cell id="default13">占用</cell>  
          <cell id="default14">1</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetArrange"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetArrange" data="dAssetArrange"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem11" page-count="5"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem1"> 
        <xhtml:div style="width:55px;background-color:transparent;" align="center">
          <xhtml:label id="label1" class="xui-label" style="width:55px;background-color:transparent;">资产状态</xhtml:label> 
        </xhtml:div>
        </item>  
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" style="width:80px;" all-selected-label="'全部'" id="gridFilterStatus" filter-data="dAssetArrange" filter-relation="fStatus" default-value="'0'" default-label="'闲置'" multi-select="true"> 
            <xforms:label ref="label" id="xuiLabel1"/>  
            <xforms:value ref="value" id="default15"/>  
            <xforms:itemset id="default16" data="dAssetStatus" auto-load-data="true"> 
              <xforms:column ref="label" id="default20"/>  
              <xforms:column ref="value" visible="false" id="default22"/> 
            </xforms:itemset> 
          </xhtml:div> 
        </item>  
        <item name="separator" id="separatorItem3"/>  
        <item id="customBarItem4"> 
          <xforms:trigger id="trigger1" appearance="image" src="/UI/OA/common/images/search.png" style="width:24px;"> 
            <xforms:label id="xuiLabel1">trigger</xforms:label> 
          </xforms:trigger> 
        </item>  
        <item name="separator" id="separatorItem4"/>  
        <item id="barItem7"> 
          <xforms:trigger id="trgArrange" style="width:55px;"> 
            <xforms:label id="xuiLabel3">安排</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript3">trgArrangeDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="资产安排信息录入" width="320px" height="260px" modal="true" id="wDlgArrange" url="/OA/asset/process/dialog/assetArrangeDialog/assetArrangeDialog.w" onReceive="wDlgArrangeReceive"/>  
    <xui:view auto-load="true" id="vAssetArrange"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetArrange" data="dAssetArrange"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fStatusName" label="状态" type="ro" width="40" align="center"/>  
        <column id="gridColumn3" ref="fKind" label="资产类别" type="ro" width="100" align="center"/>  
        <column id="gridColumn4" ref="fCode" label="资产编号" type="html" width="100" onRender="grdAssetArrange_fCodeRender"/>  
        <column id="gridColumn5" ref="fName" label="资产名称" type="ro" width="175"/>  
        <column id="gridColumn6" ref="fSpecType" label="规格型号" type="ro" width="147"/>  
        <column id="gridColumn7" ref="fSourceName" label="资产来源" type="ed" width="61" align="center"/>  
        <column id="gridColumn8" ref="fDutyDeptName" label="责任部门" type="ro" width="130" align="center"/>  
        <column id="gridColumn9" ref="fDutyPsnName" label="责任人" type="ro" width="63" align="center"/>  
        <column id="gridColumn10" ref="fRemark" label="备注" type="ro" width="130"/> 
      </xhtml:div>  
      <layout style="height:100%;" id="layout1"> 
        <place control="grdAssetArrange" id="controlPlace3" style="width:100%;height:100%;"/> 
      <xui:place control="wDlgSelectPsn" id="controlPlace5"></xui:place></layout> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择资产责任人" width="600" height="500" modal="true" id="wDlgSelectPsn" url="/appCommon/dialogs/orgSelectDialog/orgSingleSelect/mainActivity.w" onSend="assetArrangeActivity.wDlgSelectPsnSend" onReceive="assetArrangeActivity.wDlgSelectPsnReceive"></xhtml:div></xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td1" style="height:35px"> 
            <place control="tbrAssetArrange" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td3"> 
            <place control="vAssetArrange" id="controlPlace2"/>  
            <place control="wDlgArrange" id="controlPlace4" style="top:70px;left:409px;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetArrangeActivity.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:173px;left:209px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dAssetAccount" concept="OA_AS_Card" order-by="fCode:asc" filter-relations="fKind,fCode,fName,fSpecType,fStatusName,fOriginValue,fRemainValue,fSourceName,fDetailInfo,fRemark,fCreateTime"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASCardAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dKind" concept="OA_AS_Kind" store-type="simple"> 
      <reader id="default9" action="/OA/asset/logic/action/queryASKindAction"/>  
      <filter name="statusFilter" id="filter1">OA_AS_Kind.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="true" id="dAssetStatus" store-type="simple"> 
      <rows xmlns="" id="default19">  
        <row id="default20"> 
          <cell id="default21">闲置</cell>  
          <cell id="default22">0</cell> 
        </row>  
        <row id="default23"> 
          <cell id="default24">占用</cell>  
          <cell id="default25">1</cell> 
        </row>  
        <row id="default26"> 
          <cell id="default27">报废</cell>  
          <cell id="default28">2</cell> 
        </row>  
        <row id="default29"> 
          <cell id="default30">处理</cell>  
          <cell id="default31">3</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetAccount"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetAccount" data="dAssetAccount" mode="IMG_TXT_LR"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem11" page-count="5"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="barItem7"> 
          <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" style="width:120px;" all-selected-label="'全部'" id="grdFilterKind" filter-data="dAssetAccount" filter-relation="fKindID" multi-select="true" dropdown-height="200" default-label="'资产类别'" default-value="'1'"> 
            <xforms:label ref="fName" id="xuiLabel1"/>  
            <xforms:value ref="OA_AS_Kind" id="default4"/>  
            <xforms:itemset id="default5" data="dKind" auto-load-data="true"> 
              <xforms:column ref="fName" id="default13"/>  
              <xforms:column ref="OA_AS_Kind" visible="false" id="default14"/> 
            </xforms:itemset> 
          </xhtml:div> 
        </item>  
        <item name="separator" id="separatorItem3"/>  
        <item id="barItem8"> 
          <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" style="width:100px;" all-selected-label="'全部'" id="grdFilterStatus" filter-data="dAssetAccount" filter-relation="fStatus" multi-select="true" default-label="'闲置,占用'" auto-refresh="true" default-value="'0,1'"> 
            <xforms:label ref="label" id="xuiLabel2"/>  
            <xforms:value ref="value" id="default15"/>  
            <xforms:itemset id="default16" data="dAssetStatus" auto-load-data="true"> 
              <xforms:column ref="label" id="default17"/>  
              <xforms:column ref="value" visible="false" id="default18"/> 
            </xforms:itemset> 
          </xhtml:div> 
        </item>  
        <item name="separator" id="separatorItem4"/>  
        <item id="barItem9"> 
          </item> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vAssetAccount"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetAccount" data="dAssetAccount" onRowDblClick="grdAssetAccountRowDblClick"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fStatusName" label="状态" type="ro" width="40"/>  
        <column id="gridColumn3" ref="fCode" label="资产编号" type="html" width="100" onRender="grdAssetAccount_fCodeRender"/>  
        <column id="gridColumn4" ref="fKind" label="资产类别" type="ro" width="110"/>  
        <column id="gridColumn5" ref="fName" label="资产名称" type="ro" width="120"/>  
        <column id="gridColumn6" ref="fSpecType" label="规格型号" type="ro" width="80"/>  
        <column id="gridColumn7" ref="fSourceName" label="资产来源" type="ro" width="60"/>  
        <column id="gridColumn8" ref="fOriginValue" label="资产原值" type="ro" width="80" align="right" format="0,000.00"/>  
        <column id="gridColumn9" ref="fRemainValue" label="资产净残值" type="ro" width="80" align="right" format="0,000.00"/>  
        <column id="gridColumn10" ref="fCreateTime" label="创建时间" type="dateTime" width="120" readonly="true"/>  
        <column id="gridColumn11" ref="fDetailInfo" label="详细配置" type="ro" width="150"/>  
        <column id="gridColumn12" ref="fRemark" label="备注" type="ro" width="150"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdAssetAccount" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default2"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrAssetAccount" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default3"> 
          <xhtml:td id="td4"> 
            <place control="vAssetAccount" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetAccountActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource> 
</xui:window>

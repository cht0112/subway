<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:142px;left:173px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereAll" auto-load="true" id="dAssetDeprecition" concept="OA_AS_Deprecition" filter-relations="fKind,fName,fSpecType,fOriginValue,fAssetCode,fDepreYear,fDepreMonth,fYearDepre,fMonthDepre,fAddDepreValue,fEquity,fDutyDeptName,fDutyPsnName,fServiceYear,fUseMonth,fCode"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASDeprecitionAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASDeprecitionAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASDeprecitionAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="year,month" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default6">  
        <row id="default7"> 
          <cell id="default8"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vAssetDeprecition"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetDeprecition" data="dAssetDeprecition"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fCode" label="资产编号" type="ro" width="100"/>  
        <column id="gridColumn3" ref="fKind" label="资产类别" type="ro" width="120"/>  
        <column id="gridColumn4" ref="fName" label="资产名称" type="ro" width="80"/>  
        <column id="gridColumn5" ref="fSpecType" label="规格型号" type="ro" width="80"/>  
        <column id="gridColumn6" ref="fDepreYear" label="折旧年份" type="ro" width="55" align="right"/>  
        <column id="gridColumn7" ref="fDepreMonth" label="折旧月份" type="ro" width="55" align="right"/>  
        <column id="gridColumn8" ref="fOriginValue" label="资产原值" type="ro" width="100" align="right" format="0,000.00"/>  
        <column id="gridColumn9" ref="fYearDepre" label="本年折旧" type="ro" width="80" align="right" format="0,000.00"/>  
        <column id="gridColumn10" ref="fMonthDepre" label="本月折旧" type="ro" width="80" align="right" format="0,000.00"/>  
        <column id="gridColumn11" ref="fAddDepreValue" label="累计折旧" type="ro" width="90" align="right" format="0,000.00"/>  
        <column id="gridColumn12" ref="fEquity" label="资产净值" type="ro" width="100" align="right" format="0,000.00"/>  
        <column id="gridColumn13" ref="fServiceYear" label="耐用年限" type="ro" width="55" align="right"/>  
        <column id="gridColumn14" ref="fUseMonth" label="使用月数" type="ro" width="55" align="right"/>  
        <column id="gridColumn15" ref="fDutyDeptName" label="责任部门" type="ro" width="80"/>  
        <column id="gridColumn16" ref="fDutyPsnName" label="责任人" type="ro" width="70"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdAssetDeprecition" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vTbr"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetDeprecition"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetDeprecition" data="dAssetDeprecition" mode="IMG_TXT_LR"> 
          <item name="refresh-item" id="barItem4"/>  
          <item name="filter-item" id="barItem5"/>  
          <item name="filter-pattern-item" id="barItem6"/>  
          <item name="separator" id="separatorItem2"/>  
          <item name="custom-page-item" id="barItem11" page-count="5"/>  
          <item name="separator" id="separatorItem3"/>  
          <item name="barItem1"> 
          <xhtml:div style="font-size:9pt;width:38px;text-align:center;">
            <xhtml:label id="htmlLabel1" style="font-size:9pt;width:38px;">年度：</xhtml:label> 
          </xhtml:div>
          </item>  
          <item name="barItem2"> 
            <xforms:input id="iptYear" ref="data('dTemp')/year" style="width:50px"/> 
          </item>  
          <item name="separator" id="separatorItem4"/>  
          <item name="barItem3"> 
           <xhtml:div style="font-size:9pt;width:38px;text-align:center;">
            <xhtml:label id="htmlLabel2" style="font-size:9pt;width:38px;">月份：</xhtml:label> 
           </xhtml:div>
          </item>  
          <item name="barItem4"> 
            <xforms:input id="iptMonth" ref="data('dTemp')/month" style="width:30px"/> 
          </item>  
          <item name="separator" id="separatorItem1"/>  
          <item name="barItem5"> 
            <xforms:trigger id="trgSearch" src="/UI/appCommon/images/search.png" appearance="image"> 
              <xforms:label id="xuiLabel1">查询</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action1"> 
                <xforms:script id="xformsScript1">trgSearchDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item>  
          <item name="separator" id="separatorItem5"/>  
          <item name="barItem6"> 
            <xforms:trigger id="trgDepreciation" style="width:55px;"> 
              <xforms:label id="xuiLabel3">折旧</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action3"> 
                <xforms:script id="xformsScript2">trgDepreciationDOMActivate(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </item> 
        </xui:bar> 
      </xhtml:div> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="vTbr" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td4"> 
            <place control="vAssetDeprecition" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetDepreciationActivity.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

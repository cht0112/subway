<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:210px;left:64px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dAssetCard" concept="OA_AS_Card"
      order-by="fCode:asc" onAfterRefresh="assetCardActivity.dAssetCardAfterRefresh" filter-relations="fKind,fCode,fName,fSpecType,fStatusName,fOriginValue,fRemainValue,fDutyDeptName,fDutyPsnName,fAddDepreValue,fSourceName,fDetailInfo,fRemark,fCreateTime,fAssetConfirm,fExtendStr1,fExtendStr2,fExtendStr3,fExtendStr4,fExtendDate1,fExtendDate2"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASCardAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASCardAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASCardAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <rule id="dataBizRule1" relation="fDetailInfo" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fCreateTime" readonly="true()"/>  
      <rule id="dataBizRule3" relation="fRemark" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value"
      src="" auto-load="true" id="dAssetStatus" store-type="simple"> 
      <rows xmlns="" id="default6">  
        <row id="default7"> 
          <cell id="default8">闲置</cell>  
          <cell id="default9">0</cell> 
        </row>  
        <row id="default10"> 
          <cell id="default11">占用</cell>  
          <cell id="default12">1</cell> 
        </row>  
        <row id="default13"> 
          <cell id="default14">报废</cell>  
          <cell id="default15">2</cell> 
        </row>  
        <row id="default16"> 
          <cell id="default17">处理</cell>  
          <cell id="default18">3</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetCard"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetCard"
        data="dAssetCard" mode="IMG_TXT_LR"> 
        <item id="barItem10"></item>  
        <item id="barItem1"> 
          <xforms:trigger id="insert" appearance="image" src="/UI/appCommon/images/insert.gif"
            dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label id="xuiLabel1">新增</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript2">insertDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item" id="barItem2"/>  
        <item name="delete-item" id="barItem3"/>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="custom-page-item" id="barItem11" page-count="5"/>  
        <item name="separator" id="separatorItem1"/> 
        <item id="customBarItem5">
          <xforms:trigger id="trgClear" style="width:63px;"> 
            <xforms:label id="xuiLabel5">资产清查</xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate">
              <xforms:script id="xformsScript4">assetCardActivity.trgClearClick(event)</xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vAssetCard"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
        id="grdAssetCard" data="dAssetCard" onRowDblClick="grdAssetCardRowDblClick"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fStatusName" label="状态" type="ro" width="30"/>  
        <column id="gridColumn22" ref="fAssetConfirm" label="资产确认" type="ro" width="60"
          align="center"/>  
        <column id="gridColumn3" ref="fCode" label="资产编号" type="html" width="100"
          onRender="grdAssetCard_fCodeRender"/>  
        <column id="gridColumn4" ref="fKind" label="资产类别" type="ro" width="100"
          align="center"/>  
        <column id="gridColumn5" ref="fName" label="名称" type="ro" width="120"/>  
        <column id="gridColumn6" ref="fSpecType" label="规格型号" type="ro" width="92"/>  
        <column id="gridColumn8" ref="fDetailInfo" label="详细配置" type="txt" width="255"/>  
        <column id="gridColumn7" ref="fSourceName" label="资产来源" type="ro" width="61"/>  
        <xui:column id="gridColumn14" ref="fDutyDeptName" label="责任部门" type="ed" width="100"
          align="center"/>  
        <xui:column id="gridColumn15" ref="fDutyPsnName" label="责任人" type="ed" width="57"/>  
        <xui:column id="gridColumn18" ref="fExtendStr3" label="存放位置" type="ed" width="99"/>  
        <xui:column id="gridColumn16" ref="fExtendStr1" label="Service Tag" type="ed"
          width="100" visible="false"/>  
        <xui:column id="gridColumn17" ref="fExtendStr2" label="Express Service Code"
          type="ed" width="151" visible="false"/>  
        <xui:column id="gridColumn19" ref="fExtendStr4" label="续保" type="ed" width="59"
          align="center" visible="false"/>  
        <xui:column id="gridColumn21" ref="fExtendDate1" label="开始时间" type="ed" width="68"
          align="center" visible="false"/>  
        <xui:column id="gridColumn20" ref="fExtendDate2" label="到期时间" type="ed" width="66"
          align="center" visible="false"/>  
        <column id="gridColumn9" ref="fOriginValue" label="资产原值" type="ro" width="80"
          align="right" format="0,000.00"/>  
        <column id="gridColumn10" ref="fAddDepreValue" label="累计折旧" type="ro"
          width="80" align="right" format="0,000.00"/>  
        <column id="gridColumn11" ref="fRemainValue" label="资产净残值" type="ed" width="80"
          align="right" format="0,000.00"/>  
        <column id="gridColumn13" ref="fRemark" label="备注" type="txt" width="120"/>  
        <column id="gridColumn12" ref="fCreateTime" label="创建时间" type="dateTime"
          width="120"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdAssetCard" id="controlPlace3" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrAssetCard" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default4"> 
          <xhtml:td id="td3" style="height:35px"> 
            <xui:place control="vFilter" id="controlPlace4" style="height:100%;width:66%;"/>
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td4"> 
            <place control="vAssetCard" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout>  
    <xui:view auto-load="true" id="vFilter" class="xui-container"> 
      <layout type="absolute" style="position:relative;height:100%;width:100%;"
        id="layout2">
        <xhtml:label id="label1" class="xui-label" style="position:absolute;width:30px;height:14px;top:8px;left:0px;">时间</xhtml:label>  
        <xui:place control="extDateFilter1" id="controlPlace6" style="position:absolute;width:80px;top:3px;left:30px;"/>  
        <xhtml:label id="label2" class="xui-label" style="position:absolute;width:55px;height:11px;top:8px;left:140px;">资产状态</xhtml:label>  
        <xui:place control="gridFilterStatus" id="controlPlace7" style="position:absolute;width:100px;top:3px;left:195px;"/>  
        </layout>  
      <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"
        id="extDateFilter1" filter-data="dAssetCard" filter-date-mode="single" filter-date-relation1="fCreateTime"/>  
      <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'"
        id="gridFilterStatus" filter-data="dAssetCard" filter-relation="fStatus" default-value="'0,1'"
        default-label="'闲置,占用'" multi-select="true"> 
        <xforms:label ref="label" id="xuiLabel2"/>  
        <xforms:value ref="value" id="default19"/>  
        <xforms:itemset id="default20" data="dAssetStatus" auto-load-data="true"> 
          <xforms:column ref="label" id="default23"/>  
          <xforms:column ref="value" visible="false" id="default24"/>
        </xforms:itemset> 
      </xhtml:div>  
      </xui:view>
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetCardActivity.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:206px;left:127px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="16" update-mode="whereVersion" auto-load="false" id="dAssetCard" concept="OA_AS_Card" order-by="fCode:asc"> 
      <reader action="/OA/asset/logic/action/queryASCardAction" id="readerAction"/>  
      <calculate-relation relation="recNo" id="calculate-relation1"/>  
      <filter name="statusFilter" id="filter2">OA_AS_Card.fStatus='0' or OA_AS_Card.fStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="true" id="dAssetStatus" store-type="simple"> 
      <rows xmlns="" id="default5">  
        <row id="default6"> 
          <cell id="default11">闲置</cell>  
          <cell id="default12">0</cell> 
        </row>  
        <row id="default16"> 
          <cell id="default17">占用</cell>  
          <cell id="default18">1</cell> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dKind" concept="OA_AS_Kind" store-type="simple" order-by="fCode:asc"> 
      <reader id="default8" action="/OA/asset/logic/action/queryASKindAction"/>  
      <filter name="kindFilter" id="filter1">OA_AS_Kind.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="status,kindID,kind,like" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default3">  
        <row id="default4"> 
          <cell id="default10">0</cell>  
          <cell id="default13"/>  
          <cell id="default14"/>  
          <cell id="default19"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetCard"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetCard" data="dAssetCard"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="barItem11"/>  
        <item name="separator" id="separatorItem3"/>  
        <item id="barItem1"> 
          <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:75px;" id="grdSltStatus" ref="data('dTemp')/status" multi-select="true" default-label-ref="'资产状态'" onCloseup="grdSltStatusCloseup" value-separator=","> 
            <xforms:label ref="label" id="xuiLabel1"/>  
            <xforms:value ref="value" id="default22"/>  
            <xforms:itemset id="default23" data="dAssetStatus" auto-load-data="true"> 
              <xforms:column ref="label" id="default28"/>  
              <xforms:column ref="value" visible="false" id="default29"/> 
            </xforms:itemset> 
          </xhtml:div> 
        </item>  
        <item name="separator" id="separatorItem4"/>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:90px;" id="grdSltKind" ref="data('dTemp')/kindID" multi-select="true" label-ref="data('dTemp')/kind" default-label-ref="'资产类别'" onCloseup="grdSltKindCloseup" value-separator=","> 
            <xforms:label ref="fName" id="xuiLabel2"/>  
            <xforms:value ref="rowid" id="default24"/>  
            <xforms:itemset id="default25" data="dKind" auto-load-data="true"> 
              <xforms:column ref="fName" id="default7"/>  
              <xforms:column ref="rowid" visible="false" id="default9"/> 
            </xforms:itemset> 
          </xhtml:div> 
        </item>  
        <item name="separator" id="separatorItem5"/>  
        </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vAssetCard"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetCard" data="dAssetCard" onRowDblClick="grdAssetCardRowDblClick"> 
        <column id="gridColumn1" ref="recNo" type="ro" width="30" label="序号" show-index="true"/>  
        <column id="gridColumn2" ref="fStatusName" label="状态" type="ro" width="40"/>  
        <column id="gridColumn3" ref="fCode" label="资产编号" type="ro" width="90"/>  
        <column id="gridColumn4" ref="fKind" label="资产类别" type="ro" width="100"/>  
        <column id="gridColumn5" ref="fName" label="名称" type="ro" width="101"/>  
        <column id="gridColumn6" ref="fSpecType" label="规格型号" type="ro" width="80"/>  
        <column id="gridColumn7" ref="fUnit" label="单位" type="ro" width="35" align="center"/>  
        <column id="gridColumn9" ref="fServiceYear" label="耐用年限" type="ro" width="55" align="right"/>  
        <column id="gridColumn8" ref="fRemainValue" label="资产净残值" type="ro" width="90" align="right" format="0,000.00"/> 
      </xhtml:div>  
      <layout id="layout1" style="height:100%;width:100%" type="flow"> 
        <place control="grdAssetCard" id="controlPlace3" style="height:100%;width:100%;"/> 
      </layout> 
    </xui:view>   
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:table id="table" border="0" style="table-layout:fixed;width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default1"> 
          <xhtml:td id="td2" style="height:35px" colspan="3"> 
            <place control="tbrAssetCard" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default2"> 
          <xhtml:td id="td4" style="width:600px;" colspan="3"> 
            <place control="vAssetCard" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default15"> 
          <xhtml:td id="td5" style="height:30px;"></xhtml:td>
          <xhtml:td id="td6" style="height:30px;width:55px" align="right"> 
             <xforms:trigger id="trgOK"> 
		        <xforms:label id="xuiLabel4">确定</xforms:label>  
		        <xforms:action ev:event="DOMActivate" id="action3"> 
		          <xforms:script id="xformsScript3">trgOKDOMActivate(event)</xforms:script> 
		        </xforms:action> 
		      </xforms:trigger>  
          </xhtml:td> 
          <xhtml:td id="td7" style="height:30px;width:55px" align="center"> 
              <xforms:trigger id="trgCancel"> 
		        <xforms:label id="xuiLabel5">取消</xforms:label>  
		        <xforms:action ev:event="DOMActivate" id="action4"> 
		          <xforms:script id="xformsScript2">trgCancelDOMActivate(event)</xforms:script> 
		        </xforms:action> 
		      </xforms:trigger>   
          </xhtml:td> 
        </xhtml:tr> 
   	</xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="singleSelectCard.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

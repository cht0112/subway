<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdAssetCard" style="top:250px;left:123px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAssetCard" concept="OA_AS_Card" store-type="simple" limit="1"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASCardAction"/>  
      <rule id="dataBizRule1" relation="fDetailInfo" readonly="true()"/>  
      <rule id="dataBizRule2" relation="fRemark" readonly="true()"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdAssetCardxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetCard"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetCard" data="dAssetCard"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="separator" id="separatorItem1"/>  
        <item id="barItem9"> 
          <xforms:trigger id="trgAssetInRecord"> 
            <xforms:label id="xuiLabel10">入库信息</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action7"> 
              <xforms:script id="xformsScript6">trgAssetInRecordDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem5"> 
          <xforms:trigger id="trgCheck"> 
            <xforms:label id="xuiLabel5">验收信息</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action2"> 
              <xforms:script id="xformsScript2">trgCheckDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem6"> 
          <xforms:trigger id="trgUseRecord"> 
            <xforms:label id="xuiLabel7">使用记录</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action4"> 
              <xforms:script id="xformsScript3">trgUseRecordDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem7"> 
          <xforms:trigger id="trgRepair"> 
            <xforms:label id="xuiLabel8">维修记录</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action5"> 
              <xforms:script id="xformsScript4">trgRepairDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem8"> 
          <xforms:trigger id="trgInventory"> 
            <xforms:label id="xuiLabel9">清查记录</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action6"> 
              <xforms:script id="xformsScript5">trgInventoryDOMActivate(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="验收信息" width="565px" height="415px" modal="true" id="wDlgCheck" url="/OA/asset/process/dialog/assetInCheckInfo/assetInCheckInfo.w" onSend="wDlgCheckSend" minmaxable="false" reload-on-open="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="使用记录" width="550px" height="380px" modal="true" id="wDlgUseRecord" url="/OA/asset/process/dialog/assetUseRecord/assetUseRecord.w" onSend="wDlgUseRecordSend"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="维修记录" width="550px" height="380px" modal="true" id="wDlgRepair" url="/OA/asset/process/dialog/assetRepairRecord/assetRepairRecord.w" onSend="wDlgRepairSend"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="清查记录" width="620px" height="450px" modal="true" id="wDlgInventory" url="/OA/asset/process/dialog/assetInventoryRecord/assetInventoryRecord.w" onSend="wDlgInventorySend"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="入库信息" width="800px" height="450px" modal="true" id="wDlgAssetInRecord" url="/OA/asset/process/dialog/assetInViewDialog/assetInViewDialog.w" onSend="wDlgAssetInRecordSend"/>  
    <xui:view auto-load="true" id="vAssetCard"> 
      <xforms:output style="width:140px" id="optCode" ref="data('dAssetCard')/fCode" auto-size="true"/>  
      <xforms:output style="width:140px" id="optName" ref="data('dAssetCard')/fName" auto-size="true"/>  
      <xforms:output style="width:140px" id="optSpecType" ref="data('dAssetCard')/fSpecType" auto-size="true"/>  
      <xforms:output style="width:140px" id="optOriginValue" ref="data('dAssetCard')/fOriginValue" auto-size="true" format="format-number('0,000.00')"/>  
      <xforms:output style="width:140px" id="optfAddDepreValue" ref="data('dAssetCard')/fAddDepreValue" auto-size="true" format="format-number('0,000.00')"/>  
      <xforms:output style="width:140px" id="optRemainValue" ref="data('dAssetCard')/fRemainValue" auto-size="true" format="format-number('0,000.00')"/>  
      <xforms:output style="width:140px" id="optServiceYear" ref="data('dAssetCard')/fServiceYear" auto-size="true"/>  
      <xforms:output style="width:140px" id="optBgDepreYear" ref="data('dAssetCard')/fBgDepreYear" auto-size="true"/>  
      <xforms:output style="width:140px" id="optBgDepreMonth" ref="data('dAssetCard')/fBgDepreMonth" auto-size="true"/>  
      <xforms:output style="width:140px" id="optFactoryDate" ref="data('dAssetCard')/fFactoryDate" auto-size="true" format="yyyy-MM-dd"/>  
      <xforms:output style="width:140px" id="optFactory" ref="data('dAssetCard')/fFactory" auto-size="true"/>  
      <xforms:output style="width:140px" id="optSupplier" ref="data('dAssetCard')/fSupplier" auto-size="true"/>  
      <xforms:textarea ref="data('dAssetCard')/fDetailInfo" id="taDetailInfo" auto-size="true"/>  
      <xforms:textarea ref="data('dAssetCard')/fRemark" id="taRemark" auto-size="true"/>  
      <xforms:output id="optKind" ref="data('dAssetCard')/fKind"/>  
      <xforms:output id="optDutyDeptName" ref="data('dAssetCard')/fDutyDeptName"/>  
      <xforms:output id="optDutyPsnName" ref="data('dAssetCard')/fDutyPsnName"/>  
      <xforms:output id="optStatus" ref="data('dAssetCard')/fStatusName"/>  
      <xforms:output id="optSource" ref="data('dAssetCard')/fSourceName"/>  
      <xforms:output id="optUnit" ref="data('dAssetCard')/fUnit"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetCard.xls"/>  
      <xforms:output id="output1" ref="data('dAssetCard')/fExtendStr1"/>  
      <xforms:output id="output2" ref="data('dAssetCard')/fExtendStr2"/>  
      <xforms:output id="output3" ref="data('dAssetCard')/fExtendStr3"/>  
      <xforms:output id="output4" ref="data('dAssetCard')/fExtendDate1"/>  
      <xforms:output id="output5" ref="data('dAssetCard')/fExtendDate2"/>  
      <xforms:select1 ref="data('dAssetCard')/fExtendStr4" id="radio1" disabled="true"> 
        <xforms:item id="selectItem1"> 
          <xforms:label id="xuiLabel1">已续保</xforms:label>  
          <xforms:value id="default2">已续保</xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem2"> 
          <xforms:label id="xuiLabel2">未续保</xforms:label>  
          <xforms:value id="default3">未续保</xforms:value> 
        </xforms:item> 
      </xforms:select1> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" align="center"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrAssetCard" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td4" style="height:300px"> 
            <place control="vAssetCard" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="wDlgCheck" id="controlPlace3" style="top:45px;left:141px;"/>  
      <place control="wDlgUseRecord" id="controlPlace4" style="top:44px;left:229px;"/>  
      <place control="wDlgRepair" id="controlPlace5" style="top:45px;left:312px;"/>  
      <place control="wDlgInventory" id="controlPlace6" style="top:45px;left:405px;"/>  
      <place control="wDlgAssetInRecord" id="controlPlace7" style="top:44px;left:72px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetCardDetailView.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

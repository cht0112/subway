<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdAssetCard" style="top:124px;left:381px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAssetCard" concept="OA_AS_Card" store-type="simple" onValueChanged="dAssetCardValueChanged" limit="1" onSaveCommit="dAssetCardSaveCommit"> 
      <reader id="default1" action="/OA/asset/logic/action/queryASCardAction"/>  
      <writer id="default2" action="/OA/asset/logic/action/saveASCardAction"/>  
      <creator id="default3" action="/OA/asset/logic/action/createASCardAction"/>  
      <rule id="dataBizRule1" relation="fKindID" alert="'资产类别不能为空！'" required="true()"/>  
      <rule id="dataBizRule2" relation="fCode" alert="'资产编号不能为空！'" required="true()"/>  
      <rule id="dataBizRule3" relation="fName" alert="'资产名称不能为空！'" required="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dKind" concept="OA_AS_Kind" order-by="fSequence:asc" store-type="simple"> 
      <reader id="default8" action="/OA/asset/logic/action/queryASKindAction"/>  
      <filter name="kindStatusFilter" id="filter1">OA_AS_Kind.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dUnit" concept="OA_AS_Unit" order-by="fSequence:asc" store-type="simple"> 
      <reader id="default9" action="/OA/asset/logic/action/queryASUnitAction"/>  
      <filter name="unitStatusFilter" id="filter2">OA_AS_Unit.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dAssetSource" concept="OA_AS_InMode" store-type="simple" order-by="fSequence:asc"> 
      <reader action="/OA/asset/logic/action/queryASInModeAction"/>  
      <filter name="sourceFilter" id="filter3">OA_AS_InMode.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" src="" auto-load="false" id="dAssetStatus" store-type="simple"> 
      <rows xmlns="" id="default21">  
        <row id="default22"> 
          <cell id="default23">闲置</cell>  
          <cell id="default24">0</cell> 
        </row>  
        <row id="default25"> 
          <cell id="default26">占用</cell>  
          <cell id="default27">1</cell> 
        </row>  
        <row id="default28"> 
          <cell id="default29">报废</cell>  
          <cell id="default30">2</cell> 
        </row>  
        <row id="default31"> 
          <cell id="default32">处理</cell>  
          <cell id="default33">3</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdAssetCardxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetCard"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetCard" data="dAssetCard"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="save-item" id="barItem2"/>  
        <item name="delete-item" id="barItem3"/>  
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
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="验收信息" width="560px" height="430px" modal="true" id="wDlgCheck" url="/OA/asset/process/dialog/assetInCheckInfo/assetInCheckInfo.w" onSend="wDlgCheckSend" minmaxable="false" reload-on-open="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="使用记录" width="550px" height="380px" modal="true" id="wDlgUseRecord" url="/OA/asset/process/dialog/assetUseRecord/assetUseRecord.w" onSend="wDlgUseRecordSend"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="维修记录" width="550px" height="380px" modal="true" id="wDlgRepair" url="/OA/asset/process/dialog/assetRepairRecord/assetRepairRecord.w" onSend="wDlgRepairSend"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="清查记录" width="620px" height="450px" modal="true" id="wDlgInventory" url="/OA/asset/process/dialog/assetInventoryRecord/assetInventoryRecord.w" onSend="wDlgInventorySend"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="入库信息" width="800px" height="450px" modal="true" id="wDlgAssetInRecord" url="/OA/asset/process/dialog/assetInViewDialog/assetInViewDialog.w" onSend="wDlgAssetInRecordSend"/>  
    <xui:view auto-load="true" id="vAssetCard"> 
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltKind" ref="data('dAssetCard')/fKindID" label-ref="data('dAssetCard')/fKind" onCloseup="grdSltKindCloseup" dropdown-height="200"> 
        <xforms:label ref="fName" id="xuiLabel1"/>  
        <xforms:value ref="OA_AS_Kind" id="default6"/>  
        <xforms:itemset id="default7" data="dKind" auto-load-data="true"> 
          <xforms:column ref="OA_AS_Kind" visible="false" id="default16"/>  
          <xforms:column ref="fName" id="default17"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltUnit" ref="data('dAssetCard')/fUnitID" label-ref="data('dAssetCard')/fUnit" dropdown-height="200"> 
        <xforms:label ref="fName" id="xuiLabel2"/>  
        <xforms:value ref="OA_AS_Unit" id="default14"/>  
        <xforms:itemset id="default15" data="dUnit" auto-load-data="true"> 
          <xforms:column ref="OA_AS_Unit" visible="false" id="default18"/>  
          <xforms:column ref="fName" id="default19"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltStatus" ref="data('dAssetCard')/fStatus" label-ref="data('dAssetCard')/fStatusName"> 
        <xforms:label ref="label" id="xuiLabel3"/>  
        <xforms:value ref="value" id="default20"/>  
        <xforms:itemset id="default47" data="dAssetStatus" auto-load-data="true"> 
          <xforms:column ref="label" id="default50"/>  
          <xforms:column ref="value" visible="false" id="default51"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dAssetCard')/fDutyDeptID" label-ref="data('dAssetCard')/fDutyDeptName"> 
          <xforms:itemset/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="psmSelect" show-org-types="psm"> 
        <xforms:model id="mdPsm"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dPsm"> 
            <tree-option id="treeOption1" root-filter="1=1"/>  
            <reader id="psmAction" action="/SA/opm/logic/action/queryPersonMemberAction"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dAssetCard')/fDutyPsnID" label-ref="data('dAssetCard')/fDutyPsnName" onDropdown="treeSltPsmDropdown" onCloseup="assetCardDetail.treeSltPsmCloseup"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdSltSource" ref="data('dAssetCard')/fSource" label-ref="data('dAssetCard')/fSourceName" dropdown-height="200"> 
        <xforms:label ref="fName" id="xuiLabel4"/>  
        <xforms:value ref="OA_AS_InMode" id="default54"/>  
        <xforms:itemset id="default55" data="dAssetSource" auto-load-data="true"> 
          <xforms:column ref="fName" id="default34"/>  
          <xforms:column ref="OA_AS_InMode" visible="false" id="default35"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:input id="iptCode" ref="data('dAssetCard')/fCode"/>  
      <xforms:input id="iptName" ref="data('dAssetCard')/fName"/>  
      <xforms:input id="iptSpecType" ref="data('dAssetCard')/fSpecType"/>  
      <xforms:input id="iptOriginValue" ref="data('dAssetCard')/fOriginValue" format="format-number('0,000.00')"/>  
      <xforms:input id="iptfAddDepreValue" ref="data('dAssetCard')/fAddDepreValue" format="format-number('0,000.00')"/>  
      <xforms:input id="iptRemainValue" ref="data('dAssetCard')/fRemainValue" format="format-number('0,000.00')"/>  
      <xforms:input id="iptServiceYear" ref="data('dAssetCard')/fServiceYear"/>  
      <xforms:input id="iptBgDepreYear" ref="data('dAssetCard')/fBgDepreYear"/>  
      <xforms:input id="iptBgDepreMonth" ref="data('dAssetCard')/fBgDepreMonth"/>  
      <xforms:input id="iptFactoryDate" ref="data('dAssetCard')/fFactoryDate" format="yyyy-MM-dd"/>  
      <xforms:input id="iptFactory" ref="data('dAssetCard')/fFactory"/>  
      <xforms:input id="iptSupplier" ref="data('dAssetCard')/fSupplier"/>  
      <xforms:textarea ref="data('dAssetCard')/fDetailInfo" id="taDetailInfo"/>  
      <xforms:textarea ref="data('dAssetCard')/fRemark" id="taRemark"/>  
      <layout style="height:100%;" id="layout1" type="excel" src="assetCard.xls"/>  
      <xforms:input id="ipt1ServicTag" class="xui-autofill" ref="data('dAssetCard')/fExtendStr1"/>  
      <xforms:input id="ipt3position" class="xui-autofill" ref="data('dAssetCard')/fExtendStr3"/>  
      <xforms:input id="iptcondata" ref="data('dAssetCard')/fExtendDate2" format="yyyy-MM-dd"/>  
      <xforms:input id="ipt2esc" ref="data('dAssetCard')/fExtendStr2"/>  
      <xforms:select1 ref="data('dAssetCard')/fExtendStr4" id="rd4conserver"> 
        <xforms:item id="selectItem1"> 
          <xforms:label id="xuiLabel6">已续保</xforms:label>  
          <xforms:value id="default10">已续保</xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem2"> 
          <xforms:label id="xuiLabel11">未续保</xforms:label>  
          <xforms:value id="default11">未续保</xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xforms:input id="ipt1data" class="xui-autofill" ref="data('dAssetCard')/fExtendDate1"/>
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" align="center" style="height:100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default4"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrAssetCard" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default5"> 
          <xhtml:td id="td4" > 
            <place control="vAssetCard" id="controlPlace2" style="height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="wDlgCheck" id="controlPlace3" style="top:46px;left:234px;"/>  
      <place control="wDlgUseRecord" id="controlPlace4" style="top:45px;left:315px;"/>  
      <place control="wDlgRepair" id="controlPlace5" style="top:44px;left:396px;"/>  
      <place control="wDlgInventory" id="controlPlace6" style="top:46px;left:487px;"/>  
      <place control="wDlgAssetInRecord" id="controlPlace7" style="top:45px;left:151px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="assetCardDetail.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="assetCardDetail.js"/> 
  </resource> 
</xui:window>

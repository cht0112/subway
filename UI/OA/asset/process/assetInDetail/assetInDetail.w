<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:309px;left:372px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" xui:update-mode="whereVersion" auto-load="false" id="dAssetInM" concept="OA_AS_InM" store-type="simple" onValueChanged="dAssetInValueChanged" onSaveCommit="dAssetInMSaveCommit"> 
      <reader action="/OA/asset/logic/action/queryASInMAction"/>  
      <writer action="/OA/asset/logic/action/saveASInMAction"/>  
      <creator action="/OA/asset/logic/action/createASInMAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" xui:update-mode="whereVersion" auto-load="true" id="dAssetInD" concept="OA_AS_InD" store-type="grid" onValueChanged="dBuyApplyDValueChanged" order-by="fCode:asc"> 
      <reader action="/OA/asset/logic/action/queryASInDAction"/>  
      <writer action="/OA/asset/logic/action/saveASInDAction"/>  
      <creator action="/OA/asset/logic/action/createASInDAction"/>  
      <calculate-relation relation="recCB"/>  
      <master id="master1" data="dAssetInM" relation="fMasterID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" xui:update-mode="whereVersion" auto-load="false" id="dMode" concept="OA_AS_InMode" order-by="fSequence:asc" store-type="simple"> 
      <reader action="/OA/asset/logic/action/queryASInModeAction"/>  
      <filter name="fUseStatusFilter">OA_AS_InMode.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAssetKind" concept="OA_AS_Kind" store-type="simple" order-by="fSequence:asc" limit="-1"> 
      <reader action="/OA/asset/logic/action/queryASKindAction"/>  
      <filter name="kindUseStatusFilter">OA_AS_Kind.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAssetUnit" concept="OA_AS_Unit" store-type="simple" order-by="fSequence:asc"> 
      <reader action="/OA/asset/logic/action/queryASUnitAction"/>  
      <filter name="unitdUseStatusFilter">OA_AS_Unit.fUseStatus='1'</filter> 
    </data>  
    <xforms:action id="action2" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript2">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view id="vAssetInDetail"> 
      <xforms:output id="optNO" ref="data('dAssetInM')/fNO"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt" style="height:100%;width:100%;"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dAssetInM')/fDutyDeptID" label-ref="data('dAssetInM')/fDutyDeptName"> 
          <xforms:itemset/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="psmSelect" show-org-types="psm" style="height:100%;width:100%;"> 
        <xforms:model id="mdPsm"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dPsm"> 
            <tree-option id="treeOption1" root-filter="1=1"/>  
            <reader id="psmAction" action="/SA/opm/logic/action/queryPersonMemberAction"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dAssetInM')/fDutyPsnID" label-ref="data('dAssetInM')/fDutyPsnName" onDropdown="treeSltPsmDropdown" onCloseup="assetInDetail.treeSltPsmCloseup"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:input ref="data('dAssetInM')/fDate" id="iptDate" format="yyyy-MM-dd" style="height:100%;width:100%;"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="grdsMode" ref="data('dAssetInM')/fModeID" label-ref="data('dAssetInM')/fMode" dropdown-height="200" style="height:100%;width:100%;"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_AS_InMode"/>  
        <xforms:itemset data="dMode" auto-load-data="true"> 
          <xforms:column ref="fName"/>  
          <xforms:column ref="OA_AS_InMode" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dAssetInM')/fRemark" id="taRemark" style="height:100%;width:100%;"/>  
      <xforms:output id="optState" ref="data('dAssetInM')/fStateName" type="ro" style="height:100%;width:100%;"/>  
      <xforms:output id="optAmount" ref="data('dAssetInM')/fAmount" format="format-number('0,000.00')" style="height:100%;width:100%;"/>  
      <xui:view id="vTbrAssetInD"> 
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetInD"> 
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetInD" data="dAssetInD"> 
            <item name="insert-item" id="barItem1"/>  
            <item name="separator"/> 
            <item name="delete" id="barItem2"> 
              <xforms:trigger appearance="image" id="trgdeleteBtn" src="/UI/appCommon/images/remove.gif" dis-src="/UI/appCommon/images/un_remove.gif"> 
                <xforms:label>删除</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script>assetDelete(event)</xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </item>  
            <item name="separator"/> 
            <item name="insert" id="barItem4"> 
              <xforms:trigger id="trgInsertBtn" style="width:80px" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png"> 
                <xforms:label>选择采购信息</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script>trgInsertBtnDOMActivate(event)</xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </item>  
            <item name="separator"/>  
            <item> 
              <xforms:trigger id="trgCheck"> 
                <xforms:label>验收</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script>assetInCheck(event)</xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </item> 
            <item name="separator"/>  
            <item> 
              <xforms:trigger id="trgIn"> 
                <xforms:label>入库</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script>assetIn(event)</xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </item> 
          </xui:bar> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="tbrAssetInD"/> 
        </xui:layout> 
      </xui:view>  
      <xui:view id="vGrdAssetInD"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdAssetInD" data="dAssetInD"> 
          <column label="#master_checkbox" width="30" ref="recCB" type="checkbox" align="center"/>  
          <column ref="序号" type="ro" width="30" show-index="true"/>  
          <column ref="fKind" label="资产类别" type="select" width="80" editor="gsAssetKind"/>  
          <column id="gridColumn2" ref="fCode" label="资产编号" type="ed" width="120"/>  
          <column id="fName" ref="fName" label="资产名称" type="ed" width="120"/>  
          <column id="fSpecType" ref="fSpecType" label="规格型号" type="ed" width="80"/>  
          <column ref="fUnit" label="单位" type="select" width="35" editor="gsAssetUnit" align="center"/>  
          <column label="金额(元)" width="100" ref="fAmount" type="ed" align="right" format="0,000.00"/>  
          <column id="gridColumn6" ref="fDate" label="入库日期" type="ro" width="70"/>  
          <column label="入库状态" width="55" ref="fIsInName" type="ro"/>  
          <column label="验收状态" width="55" ref="fIsCheckName" type="ro"/>  
          <column id="gridColumn5" ref="fBuyApplyNO" label="采购单" type="html" width="120" onRender="grdAssetInD_fBuyApplyNORender"/>  
          <column id="gridColumn5" ref="fCheckNO" label="验收单" type="html" width="120" onRender="grdAssetInD_fCheckNORender"/>  
          <xui:column id="gridColumn1" ref="fServicTag" label="ServicTag" type="ed" width="100" visible="false"/>
          <xui:column id="gridColumn3" ref="fESCode" label="ExpressServiceCode" type="ed" width="100" visible="false"/>
          <xui:column id="gridColumn4" ref="fSHKSSJ" label="服务开始时间" type="ed" width="100" visible="false"/>
          <xui:column id="gridColumn7" ref="fSHJSSJ" label="服务结束时间" type="ed" width="100" visible="false"/>
          <column label="备注" width="150" ref="fRemark" type="ed"/> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="grdAssetInD" style="width:100%;height:100%;"/> 
        </xui:layout> 
      </xui:view>  
      <xui:layout style="height:100%;" type="excel" src="assetInDetail.xls"> 
        <place control="vTbrAssetInD"/>  
        <place control="vGrdAssetInD"/> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrAssetInM"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarAssetInM" data="dAssetInM"> 
        <item name="insert-item" id="barItem3"/>  
        <item name="save-item" id="barItem5"/>  
        <item name="delete-item" id="barItem6"/>  
        <item name="refresh-item" id="barItem7"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:table id="table" align="center"> 
        <xhtml:tr id="default2"> 
          <xhtml:td id="td2" style="height:35px"> 
            <place control="tbrAssetInM" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vAssetInDetail"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="gsAssetKind" ref="data('dAssetInD')/fKindID" label-ref="data('dAssetInD')/fKind" dropdown-height="100" onCloseup="gsAssetKindCloseup"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_AS_Kind"/>  
        <xforms:itemset auto-load-data="true" data="dAssetKind"> 
          <xforms:column ref="fName"/>  
          <xforms:column ref="OA_AS_Kind" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="gsAssetUnit" ref="data('dAssetInD')/fUnitID" label-ref="data('dAssetInD')/fUnit" dropdown-height="100"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_AS_Unit"/>  
        <xforms:itemset auto-load-data="true" data="dAssetUnit"> 
          <xforms:column ref="fName"/>  
          <xforms:column ref="OA_AS_Unit" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择资产采购信息" width="600px" height="440px" modal="true" id="dlgBuyApply" url="/OA/asset/process/dialog/selectBuyApplyDialog/selectBuyApplyDialog.w" onReceive="dlgBuyApplyReceive" reload-on-open="true" style="top:18px;left:285px;"/>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="填写入库日期" width="280px" height="220px" modal="true" id="dlgInDate" url="/OA/asset/process/dialog/assetInDate/assetInDate.w" onReceive="dlgInDateReceive" reload-on-open="true" style="top:19px;left:156px;"/>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="资产验收单" width="560px" height="430px" modal="true" id="dlgInCheck" url="/OA/asset/process/dialog/assetInCheck/assetInCheck.w" onReceive="dlgInCheckReceive" reload-on-open="true" style="top:15px;left:110px;"/>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="资产验收单" width="550px" height="380px" modal="true" id="dlgInCheckInfo" url="/OA/asset/process/dialog/assetInCheckInfo/assetInCheckInfo.w" onSend="dlgAssetInCheckSend" reload-on-open="true" style="top:16px;left:230px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script src="assetInDetail.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="assetInDetail.js"/> 
  </resource> 
</xui:window>

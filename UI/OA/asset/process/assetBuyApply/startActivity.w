<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="mdMain" style="top:195px;left:243px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dBuyApplyM" concept="OA_AS_BuyApplyM" store-type="simple" auto-new="false" onValueChanged="dBuyApplyMValueChanged"> 
      <reader action="/OA/asset/logic/action/queryASBuyApplyMAction"/>  
      <writer action="/OA/asset/logic/action/saveASBuyApplyMAction"/>  
      <creator action="/OA/asset/logic/action/createASBuyApplyMAction"/>  
      <rule id="dataBizRule1" relation="fApplyDeptID" alert="'申请部门不能为空!'" required="true()"/>  
      <rule id="dataBizRule2" relation="fApplyPsnID" alert="'申请人不能为空!'" required="true()"/>  
      <rule id="dataBizRule3" relation="fApplyDate" alert="'申请时间不能为空!'" required="true()"/>  
      <rule id="dataBizRule4" relation="fApplyReason" alert="'申请原因不能为空!'" required="true()"/>  
      <rule id="dataBizRule5" concept="OA_AS_BuyApplyM" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="true" id="dBuyApplyD" concept="OA_AS_BuyApplyD" onValueChanged="dBuyApplyDValueChanged" onAfterDelete="dBuyApplyDAfterDelete"> 
      <master auto-load="true" data="dBuyApplyM" relation="fMasterID"/>  
      <reader action="/OA/asset/logic/action/queryASBuyApplyDAction"/>  
      <writer action="/OA/asset/logic/action/saveASBuyApplyDAction"/>  
      <creator action="/OA/asset/logic/action/createASBuyApplyDAction"/>  
      <calculate-relation relation="subRecNo"/>  
      <rule relation="fBuyNum" constraint="data('dBuyApplyD')/fBuyNum&gt;0" alert="'数量不能为空，且必须大于0！'"/>  
      <rule relation="fPrice" constraint="data('dBuyApplyD')/fPrice&gt;0" alert="'单价不能为空，且必须大于0！'"/>  
      <rule relation="fKind" required="true()" alert="'资产类别不能为空！'"/>  
      <rule relation="fName" required="true()" alert="'名称不能为空！'"/>  
      <rule id="dataBizRule6" concept="OA_AS_BuyApplyD" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAssetKind" concept="OA_AS_Kind" store-type="simple" order-by="fSequence:asc"> 
      <reader action="/OA/asset/logic/action/queryASKindAction"/>  
      <filter name="kindFilter" id="filter1"><![CDATA[OA_AS_Kind.fUseStatus='1']]></filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dAssetUnit" concept="OA_AS_Unit" store-type="simple" order-by="fSequence:asc"> 
      <reader action="/OA/asset/logic/action/queryASUnitAction"/>  
      <filter name="unitFilter" id="filter2"><![CDATA[OA_AS_Unit.fUseStatus='1']]></filter> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdMainxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrBuyApplyM"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="standardProcessBar" executeConcept="OA_AS_BuyExecute" data="dBuyApplyM" process-engine="assetBuyApplyProcess"/>  
      <!--<xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" style=";" data="dBuyApplyM"> 
        <item id="customBarItem1"> 
          <xforms:trigger id="trgPrint" appearance="image" src="/UI/system/images/report/print_print.gif" dis-src="/UI/system/images/report/print_print_g.gif"> 
            <xforms:label id="xuiLabel1"/>  
            <xforms:action id="action2" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript2">startActivity.trgPrintClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>   
      </xui:bar> 
    --></xhtml:div>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="assetBuyApplyProcess" data="dBuyApplyM" onBeforeAdvanceQuery="startActivity.assetBuyApplyProcessBeforeAdvanceQuery"/>  
    <xhtml:div component="/UI/system/components/processChart.xbl.xml#processChart" id="processChart"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList" data="dBuyApplyM"/>  
    <xui:view id="vBuyApplyM"> 
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/>  
            <tree-option id="treeOption2"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dBuyApplyM')/fApplyDeptID" label-ref="data('dBuyApplyM')/fApplyDeptName"> 
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
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dBuyApplyM')/fApplyPsnID" label-ref="data('dBuyApplyM')/fApplyPsnName" onDropdown="treeSltPsmDropdown" onCloseup="startActivity.treeSltPsmCloseup"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:textarea ref="data('dBuyApplyM')/fApplyReason" id="taApplyReason" auto-size="true"/>  
      <xforms:textarea ref="data('dBuyApplyM')/fRemark" id="taRemark" auto-size="true"/>  
      <xui:view id="vTbrBuyApplyD"> 
        <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrBuyApplyD"> 
          <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="ngBarBuyApplyD" data="dBuyApplyD"> 
            <item name="insert-item" id="barItem1" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
            <item name="separator" id="separatorItem1"/>  
            <item name="delete-item" id="barItem3" readonly="(call('justep.Context.getRequestParameter', 'activity-pattern') = 'detail')"/>  
            </xui:bar> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="tbrBuyApplyD"/> 
        </xui:layout> 
      </xui:view>  
      <xui:view id="vGrdBuyApply"> 
        <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grdBuyApplyD" data="dBuyApplyD"> 
          <column ref="序号" type="ro" width="30" show-index="true"/>  
          <column ref="fKind" label="类别" type="select" width="90" editor="gsAssetKind"/>  
          <column ref="fName" label="名称" type="ed" width="130"/>  
          <column ref="fSpecType" label="规格型号" type="ed" width="80"/>  
          <column ref="fUnit" label="单位" type="select" width="40" editor="gsAssetUnit" align="center"/>  
          <column ref="fBuyNum" label="数量" type="ed" width="40" align="right"/>  
          <column label="单价" width="80" ref="fPrice" type="ed" align="right" format="0,000.00"/>  
          <column label="金额(元)" width="100" ref="fAmount" type="ro" align="right" format="0,000.00"/>  
          <column label="备注" width="140" ref="fRemark" type="txt"/> 
        </xhtml:div>  
        <xui:layout style="height:100%"> 
          <place control="grdBuyApplyD" style="width:100%;height:100%;"/> 
        </xui:layout> 
      </xui:view>  
      <xforms:output id="optAmount" ref="data('dBuyApplyM')/fAmount" format="format-number('0,000.00')"/>  
      <xforms:output id="optNO" ref="data('dBuyApplyM')/fNO" style="background-color:transparent;"/>  
      <xforms:input ref="data('dBuyApplyM')/fApplyDate" id="iptApplyDate" format="format-dateTime('yyyy-MM-dd')" auto-size="true"/>  
      <xui:layout style="height:100%;" type="excel" src="assetBuyApply.xls"> 
        <place control="vTbrBuyApplyD"/>  
        <place control="vGrdBuyApply"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabBuyApply" style="height:100%;width:100%;;"> 
        <xui:tab id="tabDetail"> 
          <xui:label>详细</xui:label>  
          <xhtml:table id="table" align="center"> 
            <xhtml:tr> 
              <xhtml:td style="height:32px"> 
                <place control="tbrBuyApplyM"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td> 
                <place control="assetBuyApplyProcess" style="width:24px;top:51px;left:411px;"/>  
                <place control="vBuyApplyM"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr id="default1"> 
              <xhtml:td id="td1"> 
                <xui:place control="standardProcessExecuteList" id="controlPlace1" style="width:741px"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xui:tab>  
        <xui:tab id="tabFlowChart"> 
          <xui:label>流程轨迹</xui:label>  
            <place control="processChart" style="height:100%;width:100%;"/> 
          <xforms:action ev:event="xforms-select"> 
            <xforms:script>tabFlowChartxforms_select(event)</xforms:script> 
          </xforms:action> 
        </xui:tab> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="gsAssetUnit" ref="data('dBuyApplyD')/fUnitID" label-ref="data('dBuyApplyD')/fUnit" auto-size="true" dropdown-height="100"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_AS_Unit"/>  
        <xforms:itemset auto-load-data="true" data="dAssetUnit"> 
          <xforms:column ref="fName"/>  
          <xforms:column ref="OA_AS_Unit" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" id="gsAssetKind" ref="data('dBuyApplyD')/fKindID" label-ref="data('dBuyApplyD')/fKind" auto-size="true" dropdown-height="100"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_AS_Kind"/>  
        <xforms:itemset auto-load-data="true" data="dAssetKind"> 
          <xforms:column ref="fName" id="default4"/>  
          <xforms:column ref="OA_AS_Kind" visible="false" id="default5"/>
        </xforms:itemset> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="startActivity.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource> 
</xui:window>

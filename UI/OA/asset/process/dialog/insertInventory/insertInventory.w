<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="top:254px;left:308px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dInventory" concept="OA_AS_Inventory" store-type="simple" auto-new="false" onValueChanged="dInventoryValueChanged"> 
      <reader id="default2" action="/OA/asset/logic/action/queryASInventoryAction"/>  
      <writer id="default3" action="/OA/asset/logic/action/saveASInventoryAction"/>  
      <creator id="default4" action="/OA/asset/logic/action/createASInventoryAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dJoinInventory" concept="OA_AS_InventoryD" store-type="simple"> 
      <reader id="default7" action="/OA/asset/logic/action/queryASJoinInventoryAction"/>  
      <writer id="default8" action="/OA/asset/logic/action/saveASJoinInventoryAction"/>  
      <creator id="default9" action="/OA/asset/logic/action/createASJoinInventoryAction"/>  
      <master id="master1" data="dInventory" relation="fInventoryID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="dlgOperator,assetIDStr,assetID" src="" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="" id="default10">  
        <row id="default11"> 
          <cell id="default12"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vInventory"> 
      <xforms:input style="width:100%;height:100%;" id="iptDate" ref="data('dInventory')/fDate" format="yyyy-MM-dd" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt" style="height:100%;width:100%;"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dInventory')/fDeptID" label-ref="data('dInventory')/fDeptName"> 
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
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dInventory')/fPersonID" label-ref="data('dInventory')/fPersonName" onDropdown="treeSltPsmDropdown"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:textarea ref="data('dInventory')/fDescription" id="taDescription" auto-size="true" style="height:100%;width:100%;"/>  
      <xforms:textarea ref="data('dInventory')/fRemark" id="taRemark" auto-size="true" style="height:100%;width:100%;"/>  
      <xforms:trigger id="trgOK" style="height:100%;width:60px;"> 
        <xforms:label id="xuiLabel1">确定</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action1"> 
          <xforms:script id="xformsScript1">trgOKDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgCancel" style="height:100%;width:60px;"> 
        <xforms:label id="xuiLabel2">取消</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">trgCancelDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;width:100%;" id="layout1" type="excel" src="insertInventory.xls"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" style="width:100%;height:100%;table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="default1"> 
          <xhtml:td id="td1"> 
            <place control="vInventory" id="controlPlace1"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="insertInventory.js"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="insertInventory.js"/> 
  </resource> 
</xui:window>

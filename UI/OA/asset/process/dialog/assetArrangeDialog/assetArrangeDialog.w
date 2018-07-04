<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:263px;left:163px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="deptID,deptName,psnID,psnName,arrangeDate" src="" auto-load="true" id="dAssetArrange" store-type="simple" onValueChanged="dAssetArrangeValueChanged"> 
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="default3"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="arrangeDate" type="xsd:date"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vAssetArrange"> 
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="orgSelect" show-org-types="ogn,dpt" style="height:100%;width:100%;"> 
        <xforms:model id="mdOrg"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
            <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('dAssetArrange')/deptID" label-ref="data('dAssetArrange')/deptName"> 
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
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltPsm" data-ref="dPsm" ref="data('dAssetArrange')/psnID" label-ref="data('dAssetArrange')/psnName" onDropdown="treeSltPsmDropdown"> 
          <xforms:itemset data="dPsm"> 
            <xforms:column ref="sName"/>  
            <xforms:column ref="sPersonID" visible="false"/> 
          </xforms:itemset>  
          <xforms:value ref="sPersonID"/>  
          <xforms:label ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:input id="iptArrangeDate" format="yyyy-MM-dd" ref="data('dAssetArrange')/arrangeDate" auto-size="true"/>  
      <xforms:trigger id="trgOK"> 
        <xforms:label id="xuiLabel1">确定</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action1"> 
          <xforms:script id="xformsScript1">trgOKDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgCancel"> 
        <xforms:label id="xuiLabel2">取消</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript2">trgCancelDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="font-size:9pt;" id="layout1" type="excel" src="assetArrangeDialog.xls"> 
        <place control="personMemberSelect" id="controlPlace3" style="width:140px;"/>  
        <place control="iptArrangeDate" id="controlPlace4" style="width:140px;height:24px;"/>  
        <place control="trgOK" id="controlPlace5" style="width:100%;height:23px;"/>  
        <place control="trgCancel" id="controlPlace6" style="width:100%;height:23px;"/> 
      </layout> 
    </xui:view>  
    <xui:layout> 
      <place control="vAssetArrange" id="controlPlace1"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/>  
    <xhtml:script type="text/javascript" src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script id="htmlScript1" src="assetArrangeDialog.js"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="assetArrangeDialog.js"/> 
  </resource> 
</xui:window>

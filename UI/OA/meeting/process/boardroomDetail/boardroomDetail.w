<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="boardroomDetail.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="boardroomDetail.js"/> 
  </resource>  
  <xforms:model id="mdMain" style="top:14px;left:52px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="1" update-mode="whereVersion" auto-load="false" id="dBoardroom" concept="OA_MT_BOARDROOM"
      store-type="simple" onValueChanged="dBoardroomValueChanged"> 
      <reader action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/>  
      <writer action="/OA/meeting/logic/action/saveMTBOARDROOMAction"/>  
      <creator action="/OA/meeting/logic/action/createMTBOARDROOMAction"/>  
      <rule relation="fName" required="true()" alert="'名称不能为空!'"/>  
      <rule relation="fType" required="true()" alert="'类型不能为空!'"/>  
      <rule id="dataBizRule1" concept="OA_MT_BOARDROOM" readonly="call('justep.Context.getCurrentPersonID') != data('dBoardroom')/fCreatePsnID and data('dBoardroom')/fCreatePsnID !=''"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="true" id="dType" concept="OA_MT_BoardroomType"
      order-by="fCode:desc"> 
      <reader action="/OA/meeting/logic/action/queryMTBoardroomTypeAction"/>  
      <filter name="fUseStatusFilter">OA_MT_BoardroomType.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="canSelect"
      src="" auto-load="true" id="selectFilter" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="vBoardroom"> 
      <xforms:input style="width:100%;height:100%;" id="fCode" ref="data('dBoardroom')/fCode"/>  
      <xforms:input style="width:100%;height:100%;" id="fName" ref="data('dBoardroom')/fName"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:140px"
        id="gridSelect1" ref="data('dBoardroom')/fType" dropdown-height="200"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="fName"/>  
        <xforms:itemset data="dType" auto-load-data="true"> 
          <xforms:column ref="fID" visible="false"/>  
          <xforms:column ref="fName"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%;height:100%"
        id="orgDeptSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="model2"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrgDept"/> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeDeptSelect"
          data-ref="bizData2" ref="data('dBoardroom')/fDutyDeptID" label-ref="data('dBoardroom')/fDutyDeptName" dropdown-height="100"> 
          <xforms:itemset id="default2"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%;height:100%"
        id="orgPsmSelect" show-org-types="psm"> 
        <xforms:model id="model3"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrgPsm"> 
            <tree-option id="psmTreeOption" root-filter="1=1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treePsmSelect"
          data-ref="bizData3" ref="data('dBoardroom')/fDutyPsnID" label-ref="data('dBoardroom')/fDutyPsnName"
          onDropdown="treePsmSelectDropdown" dropdown-height="100" onCloseup="boardroomDetail.treePsmSelectCloseup"> 
          <xforms:itemset id="default3" data="dOrgPsm"> 
            <xforms:column ref="sName" id="default12"/>  
            <xforms:column ref="sPersonID" visible="false" id="default13"/> 
          </xforms:itemset>  
          <xforms:value id="default9" ref="sPersonID"/>  
          <xforms:label id="default10" ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xforms:input style="width:100%;height:100%;" id="fHoldNum" ref="data('dBoardroom')/fHoldNum"/>  
      <xforms:input style="width:100%;height:100%;" id="fUse" ref="data('dBoardroom')/fUse"/>  
      <xforms:input style="width:100%;height:100%;" id="fAddress" ref="data('dBoardroom')/fAddress"/>  
      <xforms:input style="width:100%;height:100%;" id="fFloor" ref="data('dBoardroom')/fFloor"/>  
      <xforms:input style="width:100%;height:100%;" id="fBaseConfig" ref="data('dBoardroom')/fBaseConfig"/>  
      <xforms:input style="height:100%;width:100%;" id="fEquipment" ref="data('dBoardroom')/fEquipment"/>  
      <xforms:textarea ref="data('dBoardroom')/fDescription" style="width:100%;height:100%"
        id="fDescription"/>  
      <xhtml:div component="/UI/system/components/attachmentImage.xbl.xml#attachmentImage"
        id="BizFile" model="mdMain" ref="data('dBoardroom')/fPicture" root-path="/root"
        style="width:210px;height:185px;" sub-path="concat('业务附件/OA/会议室管理',toString(yearOf(currentDate())),'/',toString(monthOf(currentDate())))"/>  
      <xforms:trigger id="triRefresh" style="width:100%;height:100%;"> 
        <xforms:label id="xuiLabel2">刷 新</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action1"> 
          <xforms:script id="xformsScript2">triRefreshDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triEnsure" ref="data('selectFilter')/canSelect" style="width:100%;height:100%;"> 
        <xforms:label id="xuiLabel3">确 定</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action2"> 
          <xforms:script id="xformsScript3">triEnsureDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="triCancel" style="width:100%;height:100%;"> 
        <xforms:label id="xuiLabel4">取 消</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action3"> 
          <xforms:script id="xformsScript1">triCancelDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="width:100%;height:100%;" id="layout1" type="excel" src="boardroomDetail.xls"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table" align="center" style="overflow:hidden;"> 
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vBoardroom" id="controlPlace1" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

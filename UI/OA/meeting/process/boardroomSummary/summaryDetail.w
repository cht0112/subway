<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdMain" style="width:150px;top:416px;height:80px;left:164px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dSummary" concept="OA_MT_Summary" store-type="simple" onValueChanged="dSummaryValueChanged"> 
      <reader id="default1" action="/OA/meeting/logic/action/queryMTSummaryAction"/>  
      <writer id="default2" action="/OA/meeting/logic/action/saveMTSummaryAction"/>  
      <creator id="default3" action="/OA/meeting/logic/action/createMTSummaryAction"/>  
      <rule relation="fMeetName" required="true()" alert="'会议主题不能为空!'"/>  
      <rule relation="fBeginTime" required="true()" alert="'开始时间不能为空!'"/>  
      <rule relation="fEndTime" required="true()" alert="'结束时间不能为空!'"/>  
      <rule id="dataBizRule1" concept="OA_MT_Summary" readonly="call('justep.Context.getCurrentPersonID') != data('dSummary')/fCreatePsnID and data('dSummary')/fCreatePsnID !=''"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dSummaryIssue" store-type="simple" concept="OA_MT_SummaryIssue"> 
      <reader id="default4" action="/OA/meeting/logic/action/queryMTSummaryIssueAction"/>  
      <writer id="default5" action="/OA/meeting/logic/action/saveMTSummaryIssueAction"/>  
      <creator id="default6" action="/OA/meeting/logic/action/createMTSummaryIssueAction"/>  
      <master id="master1" data="dSummary" relation="fMasterID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dBoardroom" concept="OA_MT_Boardroom" store-type="simple"> 
      <reader id="default7" action="/OA/meeting/logic/action/queryMTBOARDROOMAction"/>  
      <filter name="statusFilter">OA_MT_Boardroom.fUseStatus='1'</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="canSelect" src="" auto-load="true" id="selectFilter" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('selectFilter')/canSelect" readonly="call('justep.Context.getCurrentPersonID') != data('dSummary')/fCreatePsnID and data('dSummary')/fCreatePsnID !=''"/> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xui:view auto-load="true" id="vSummaryInfo"> 
      <xforms:input style="width:100%" id="iptTitle" ref="data('dSummary')/fMeetName"/>  
      <xforms:input style="width:100%" id="iptBeginTime" ref="data('dSummary')/fBeginTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:input style="width:100%" id="iptEndTime" ref="data('dSummary')/fEndTime" format="format-dateTime('yyyy-MM-dd hh:mm')"/>  
      <xforms:input style="width:100%" id="iptCompere" ref="data('dSummary')/fCompere"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:100%" id="selectBoardroom" ref="data('dSummary')/fBoardroomID" label-ref="data('dSummary')/fBoardroom" dropdown-height="200"> 
        <xforms:label ref="fName" id="xuiLabel1"/>  
        <xforms:value ref="rowid" id="default9"/>  
        <xforms:itemset id="default10" data="dBoardroom" auto-load-data="true"> 
          <xforms:column ref="rowid" visible="false" id="default15"/>  
          <xforms:column ref="fName" id="default19"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dSummary')/fMeetPsns" id="taMeetPsns" auto-size="true"/>  
      <xforms:textarea ref="data('dSummary')/fRemark" id="taRemark" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%;height:100%;" id="orgDeptSelect" show-org-types="ogn,dpt"> 
        <xforms:model id="model1"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrgDept"/> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSelect1" data-ref="bizData1" label-ref="data('dSummary')/fUseDeptName" ref="data('dSummary')/fUseDeptID" dropdown-height="100"> 
          <xforms:itemset id="default8"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" style="width:100%;height:100%;" id="orgPsmSelect" show-org-types="psm"> 
        <xforms:model id="model2"> 
          <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dPsm"> 
            <tree-option id="treeOption2" root-filter="1=1"/> 
          </xui:data> 
        </xforms:model>  
        <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treePsmSelect" data-ref="bizData2" ref="data('dSummary')/fUsePsnID" label-ref="data('dSummary')/fUsePsnName" onDropdown="treePsmSelectDropdown" onCloseup="summaryDetail.treePsmSelectCloseup"> 
          <xforms:itemset id="default13" data="dPsm"> 
            <xforms:column ref="sName" id="default16"/>  
            <xforms:column ref="sPersonID" visible="false" id="default17"/> 
          </xforms:itemset>  
          <xforms:value id="default18" ref="sPersonID"/>  
          <xforms:label id="default14" ref="sName"/> 
        </xhtml:div> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/attachmentEditor.xbl.xml#attachmentEditor" id="attContent" model="mdMain" ref="data('dSummary')/fContent" display-style="single" style="width:100%;height:100%;" root-path="/root" sub-path="concat('业务附件/OA/会议室管理',toString(yearOf(currentDate())),'/',toString(monthOf(currentDate())))" display-buttons="upload:true;download:false;delete:true;edit:true;history:true;template:false;"/>  
      <xhtml:div id="trgSelect"> 
        <xhtml:a href="#" onclick="trgSelectDOMActivate()">选 择</xhtml:a> 
      </xhtml:div>  
      <xhtml:div id="trgView"> 
        <xhtml:a href="#" onclick="trgViewDOMActivate()">查 看</xhtml:a> 
      </xhtml:div>  
      <xforms:trigger id="trgSelectPsn" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" ref="data('selectFilter')/canSelect"> 
        <xforms:label id="xuiLabel4">选择与会人员</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action3"> 
          <xforms:script id="xformsScript7">trgSelectPsnDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgSelectCompere" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" ref="data('selectFilter')/canSelect"> 
        <xforms:label id="xuiLabel5">选择主持人</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action4"> 
          <xforms:script id="xformsScript6">trgSelectCompereDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgRefresh" style="width:60px;height:25px;"> 
        <xforms:label id="xuiLabel7">刷 新</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action5"> 
          <xforms:script id="xformsScript5">trgRefreshDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgEnsure" ref="data('selectFilter')/canSelect" style="width:60px;height:25px;"> 
        <xforms:label id="xuiLabel8">确 定</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action7"> 
          <xforms:script id="xformsScript4">trgEnsureDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgCancel" style="width:60px;height:25px;"> 
        <xforms:label id="xuiLabel9">取 消</xforms:label>  
        <xforms:action ev:event="DOMActivate" id="action8"> 
          <xforms:script id="xformsScript3">trgCancelDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;" id="layout1" type="excel" src="boardroomSummary.xls"> 
        <place control="attContent" id="controlPlace5" style="height:100%;width:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vDetailToolbar"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrDetailBar"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar2" data="dSummary"> 
          <item id="barItem17"> 
            <xforms:trigger id="trgDetailRange"> 
              <xforms:label id="xuiLabel6">发布</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action6"/> 
            </xforms:trigger> 
          </item> 
        </xui:bar> 
      </xhtml:div>  
      <layout style="height:35px" id="layout3"> 
        <place control="tbrDetailBar" id="controlPlace3"/> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择主持人" width="600px" height="360px" modal="true" id="wDlgCompere" url="/system/service/commonChoose/treeListSingleOrgChoose.w" onSend="wDlgCompereSend" onReceive="wDlgCompereReceive" reload-on-open="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择参会人员" width="600px" height="360px" modal="true" id="wDlgConventioneer" url="/system/service/commonChoose/treeListMultiOrgChoose.w" reload-on-open="true" onSend="wDlgConventioneerSend" onReceive="wDlgConventioneerReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择会议安排" width="610px" height="360px" modal="true" id="wDlgSelectArrange" url="/OA/meeting/process/boardroomUseArrange/boardroomUseArrange.w" onSend="wDlgSelectArrangeSend" onReceive="wDlgSelectArrangeReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="会议室安排信息" width="710px" height="420px" modal="true" id="wDlgArrangeInfo" url="/OA/meeting/process/boardroomArrangeDialog/arrangeDetail.w" onSend="wDlgArrangeInfoSend"/>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:table id="table" align="center"> 
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vSummaryInfo" id="ctrlDetail"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table>  
      <place control="wDlgCompere" id="controlPlace1" style="top:448px;left:530px;"/>  
      <place control="wDlgConventioneer" id="controlPlace2" style="top:450px;left:483px;"/>  
      <place control="wDlgSelectArrange" id="controlPlace4" style="top:450px;left:399px;"/>  
      <place control="wDlgArrangeInfo" id="controlPlace6" style="top:449px;left:440px;"/> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="summaryDetail.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js" type="text/javascript" charset="utf-8"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/>  
    <xhtml:link rel="STYLESHEET" type="text/css" href="/UI/appCommon/css/common.css"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript2" src="summaryDetail.js"/> 
  </resource> 
</xui:window>

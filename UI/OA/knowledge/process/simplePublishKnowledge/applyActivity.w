<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script src="simplePublishKW.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/> 
  </xui:resource>  
  <xforms:model id="mdKnowledge" style="top:306px;left:531px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="1" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge" store-type="simple" onBeforeSave="dKnowledgeBeforeSave" onValueChanged="dKnowledgeValueChanged" onSaveCreateParam="dKnowledgeSaveCreateParam"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKMKnowledgeAction"/>  
      <writer id="kwWriter" action="/OA/knowledge/logic/action/saveKMKnowledgeAction1"/>  
      <creator id="kwCreator" action="/OA/knowledge/logic/action/createKMKnowledgeAction"/>  
      <rule concept="OA_KM_Knowledge" readonly="true()"/>  
      <rule relation="fFolderID" required="true()" alert="'发布栏目不能为空'"/>  
      <rule relation="fOtherFolders" readonly="data('dKnowledge')/fReleaseStatus = '1'"/>  
      <rule relation="fTitle" required="true()" alert="'标题不能为空'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="canRelease,canUnrelease,needApprove,canRightsSet,canOpenThumbnail" auto-load="true" id="dTemp" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="data('dTemp')/canRelease" readonly="data('dKnowledge')/fReleaseStatus=1 or data('dKnowledge')/fIsNeedApprove = '1'"/>  
    <xforms:bind nodeset="data('dTemp')/canUnrelease" readonly="data('dKnowledge')/fReleaseStatus!=1"/>  
    <xforms:bind nodeset="data('dTemp')/needApprove" readonly="data('dKnowledge')/fIsNeedApprove != '1' or data('dKnowledge')/fReleaseStatus != '0'"/>  
    <xforms:bind nodeset="data('dTemp')/canRightsSet" readonly="call('canOpenRightsSet')"/>  
    <xforms:bind nodeset="data('dTemp')/canOpenThumbnail" readonly="call('canOpenThumbnail')"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" auto-load="false" id="dImportant" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell>高</cell>  
          <cell>high</cell> 
        </row>  
        <row> 
          <cell>中</cell>  
          <cell>middle</cell> 
        </row>  
        <row> 
          <cell>低</cell>  
          <cell>low</cell> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dFolder" concept="OA_KM_Folder" store-type="grid" is-tree="true"> 
      <reader action="/OA/knowledge/logic/action/queryFolderAction"/>  
      <tree-option parent-relation="fParent" root-filter="OA_KM_Folder.fParent = 'public'"/>  
      <filter name="dataFilter" id="filter1">OA_KM_Folder.fUseStatus = 1</filter> 
    </data>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdKnowledgeConstructDone(event)</xforms:script> 
    </xforms:action>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">mdKnowledgeLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/appCommon/components/standardProcessBar.xbl.xml#standardProcessBar" id="KWProcessbar" data="dKnowledge" process-engine="processKW" executeConcept="OA_KM_KWExecute"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="其他栏目" width="540px" height="300px" modal="true" id="dlgOtherFolders" url="/OA/knowledge/process/dialog/selectFolder/selectFolder.w" onSend="dlgOtherFoldersSend" onReceive="dlgOtherFoldersReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="知识权限" width="700px" height="430px" modal="true" id="dlgRights" url="/OA/knowledge/process/dialog/knowledgeRightsSet/knowledgeRightsSet.w" onSend="dlgRightsSend" onReceive="dlgRightsReceive"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="缩略图" width="400px" height="300px" modal="true" id="dlgSmallpic" url="/OA/knowledge/process/dialog/knowledgeSmallpicSet/knowledgeSmallpicSet.w" reload-on-open="true" onSend="dlgSmallpicSend" onReceive="dlgSmallpicReceive"/>  
    <xhtml:div component="/UI/system/components/process.xbl.xml#process" id="processKW" data="dKnowledge" auto-start="false" auto-filter="false" onAdvanceError="processKWAdvanceError"/>  
    <xui:view auto-load="true" id="vDetail"> 
      <xforms:input style="width:140px" id="fCreateDeptName" ref="data('dKnowledge')/fCreateDeptName" auto-size="true"/>  
      <xforms:input style="width:140px" id="fCreatePsnName" ref="data('dKnowledge')/fCreatePsnName" auto-size="true"/>  
      <xforms:input style="width:140px" id="fTitle" ref="data('dKnowledge')/fTitle" auto-size="true"/>  
      <xforms:input style="width:140px" id="fKeyword" ref="data('dKnowledge')/fKeyword" auto-size="true"/>  
      <xforms:trigger id="trgKeyWord" class="xui-autofill" appearance="image" src="/UI/appCommon/images/search.png" dis-src="/UI/appCommon/images/un_search.png" disabled="true"> 
        <xforms:label id="xuiLabel1">选择主题词</xforms:label> 
      </xforms:trigger>  
      <xforms:input style="width:140px" id="fDocNumber" ref="data('dKnowledge')/fDocNumber" auto-size="true"/>  
      <xforms:input style="width:140px" id="fWriter" ref="data('dKnowledge')/fWriter" auto-size="true"/>  
      <xforms:input style="width:140px" id="fOtherFolders" ref="data('dKnowledge')/fOtherFolders" auto-size="true"/>  
      <xforms:input style="width:140px" id="fLinkURL" ref="data('dKnowledge')/fLinkURL" auto-size="true"/>  
      <xforms:textarea ref="data('dKnowledge')/fContent" id="fContent" auto-size="true" mediatype="text/html"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" style="width:140px" id="fImportant" ref="data('dKnowledge')/fImportant" label-ref="data('dKnowledge')/fImportantName" auto-size="true"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="dImportant" auto-load-data="true"> 
          <xforms:column ref="label" visable="true" width="100"/>  
          <xforms:column ref="value" visable="false" width="100"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="fFolder" auto-size="true" delay="true" ref="data('dKnowledge')/fFolderID" label-ref="data('dKnowledge')/fFolderName" onCloseup="fFolderCloseup" onShowNodeImg="fFolderShowNodeImg" onFilter="fFolderFilter"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_KM_Folder"/>  
        <xforms:itemset data="dFolder" auto-load-data="true"> 
          <xforms:column ref="fName" visable="true"/>  
          <xforms:column ref="OA_KM_Folder" visable="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:select1 ref="data('dKnowledge')/fIsTop" id="fIsTop"> 
        <xforms:item id="selectItem1"> 
          <xforms:label id="xuiLabel2">是</xforms:label>  
          <xforms:value id="default3">1</xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem2"> 
          <xforms:label id="xuiLabel3">否</xforms:label>  
          <xforms:value id="default4">0</xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xforms:select1 ref="data('dKnowledge')/fIsInheritRights" id="fIsInherit"> 
        <xforms:item id="selectItem3"> 
          <xforms:label id="xuiLabel4">是</xforms:label>  
          <xforms:value id="default4">1</xforms:value> 
        </xforms:item>  
        <xforms:item id="selectItem4"> 
          <xforms:label id="xuiLabel5">否</xforms:label>  
          <xforms:value id="default5">0</xforms:value> 
        </xforms:item> 
      </xforms:select1>  
      <xforms:trigger id="trgOtherFolders" ref="data('dKnowledge')/fOtherFolders" style="width:22px"> 
        <xforms:label style="font-size:9px;">...</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>trgOtherFoldersDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xhtml:div component="/UI/system/components/attachmentEditor.xbl.xml#attachmentEditor" id="fDocument" model="mdKnowledge" ref="data('dKnowledge')/fDocument" display-style="single" root-path="/root" sub-path="concat('业务附件/OA/知识中心',toString(yearOf(currentDate())),'/',toString(monthOf(currentDate())))" access="1799" display-buttons="upload:true;delete:true;" style="width:100%;"/>  
      <xhtml:div component="/UI/system/components/attachmentImage.xbl.xml#attachmentImage" style="margin:2px;width:98.5%;height:95%" model="mdKnowledge" ref="data('dKnowledge')/fSmallPic" root-path="/root/knowledge/knowledge_picture" limit-size="0" id="fSmallPic"/>  
      <xforms:output id="optTemplate" ref="data('dKnowledge')/fTemplateName"/>  
      <xhtml:div component="/UI/system/components/attachmentImage.xbl.xml#attachmentImage" model="mdKnowledge" ref="data('dKnowledge')/fPicture1" root-path="/root/knowledge/knowledge_picture" limit-size="0" id="fPicture1" auto-load="true" style="width:100%;height:100%;;width:100%;height:100%" disabled="true"/>  
      <xhtml:div component="/UI/system/components/attachmentImage.xbl.xml#attachmentImage" model="mdKnowledge" ref="data('dKnowledge')/fPicture2" root-path="/root/knowledge/knowledge_picture" limit-size="0" id="fPicture2" auto-load="true" style="width:100%;height:100%;;width:100%;height:100%" disabled="true"/>  
      <xhtml:div component="/UI/system/components/attachmentImage.xbl.xml#attachmentImage" model="mdKnowledge" ref="data('dKnowledge')/fPicture3" root-path="/root/knowledge/knowledge_picture" limit-size="0" id="fPicture3" auto-load="true" style="width:100%;height:100%;;width:100%;height:100%" disabled="true"/>  
      <layout style="height:100%;" id="layout1" src="simplePublishKW.xls" type="excel"/> 
    </xui:view>  
    <xui:view auto-load="true" id="vButton"> 
      <layout style="height:100%;width:100%;"> 
        <xhtml:table width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
          <xhtml:tr> 
            <xhtml:td width="70px" valign="center"> 
              <xforms:trigger ref="data('dTemp')/canRightsSet"> 
                <xforms:label>知识权限</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script>openRightsSetDialog()</xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </xhtml:td>  
            <xhtml:td width="60px" valign="center"> 
              <xforms:trigger ref="data('dTemp')/canOpenThumbnail"> 
                <xforms:label>缩略图</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script>openThumbnail(event)</xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </xhtml:td>  
            <xhtml:td valign="center"> 
              <xforms:trigger> 
                <xforms:label>预览</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script> <![CDATA[
										previewStaticPage();
									]]> </xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/attachmentEditor.xbl.xml#attachmentEditor" id="attachKnowledge" model="mdKnowledge" ref="data('dKnowledge')/fAttachment" display-style="list" root-path="/root" sub-path="concat('业务附件/OA/知识中心',toString(yearOf(currentDate())),'/',toString(monthOf(currentDate())))" display-buttons="template:false;edit:false;download:true;history:false;upload:true;delete:false;" style="border:1px solid #808A87; padding-left:4px; padding-right4px; padding-top:1px; padding-bottom:1px;" auto-load="true"/>  
    <xhtml:div component="/UI/appCommon/components/standardProcessExecuteList.xbl.xml#standardProcessExecuteList" panel-title="处理列表" state="collapsed" min-height="165" id="standardProcessExecuteList1" data="dKnowledge" status="collapsed"/>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="dlgOtherFolders" style="top:649px;left:255px;"/>  
      <place control="dlgSmallpic" style="top:652px;left:211px;"/>  
      <place control="dlgRights" style="top:648px;left:287px;"/>  
      <place control="processKW" style="width:24px;top:652px;left:318px;"/>  
      <xhtml:table align="center"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <xhtml:table width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td width="142px"> 
                  <place control="tbrKnowledge" style="height:100%;width:100%;"/> 
                </xhtml:td>  
                <xhtml:td> 
                  <place control="vButton"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vDetail"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:div fixed="true" component="/UI/system/components/collapsePanel.xbl.xml#collapsePanel" id="collapsePanel1" style="width:723px;" title="附件" state="collapsed" onExpand="collapsePanel1Expand" status="collapsed"> 
              <group name="panelarea" id="group1"> 
                <place control="attachKnowledge" style="width:723px;height:100%;"/> 
              </group> 
            </xhtml:div> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default1"> 
          <xhtml:td id="td1"> 
            <xui:place control="standardProcessExecuteList1" id="controlPlace2" style="width:723px;height:100%"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

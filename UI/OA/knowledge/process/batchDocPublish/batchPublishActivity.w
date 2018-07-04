<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script src="batchPublish.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/knowledgeInterface.js"/> 
  </xui:resource>  
  <xforms:model id="mdKnowledge" style="top:356px;left:57px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="1" update-mode="whereVersion" auto-load="false" auto-new="true" id="dKnowledge" concept="OA_KM_Knowledge" store-type="simple"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKMBatchKWAction"/>  
      <writer id="kwWriter" action="/OA/knowledge/logic/action/saveKMBatchKWAction"/>  
      <creator id="kwCreator" action="/OA/knowledge/logic/action/createKMBatchKWAction"/>  
      <rule relation="fFolderID" required="true()" alert="'发布栏目不能为空'" readonly="data('dKnowledge')/fReleaseStatus = '1'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="20" update-mode="whereVersion" auto-load="false" id="dFolder" concept="OA_KM_Folder" store-type="grid" is-tree="true"> 
      <reader action="/OA/knowledge/logic/action/queryFolderAction"/>  
      <tree-option id="folderRootFilter" parent-relation="fParent" root-filter="OA_KM_Folder.fParent = 'public'"/>  
      <filter name="dataFilter" id="filter1">OA_KM_Folder.fUseStatus = 1</filter> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge" data="dKnowledge"> 
        <item name="create-new-knowledge-item"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label>新增知识</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>newKnowledge(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item"/>  
        <item name="refresh-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="fFolder" auto-size="true" delay="true" ref="data('dKnowledge')/fFolderID" label-ref="data('dKnowledge')/fFolderName" onCloseup="fFolderCloseup" onShowNodeImg="fFolderShowNodeImg" onFilter="fFolderFilter"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_KM_Folder"/>  
        <xforms:itemset data="dFolder" auto-load-data="true"> 
          <xforms:column ref="fName" visable="true"/>  
          <xforms:column ref="OA_KM_Folder" visable="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xui:layout id="layout1" type="excel" src="batchPublish.xls"/> 
    </xui:view>  
    <xui:view auto-load="true" id="vButton"> 
      <layout style="height:100%;width:100%;"> 
        <xhtml:table width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
          <xhtml:tr> 
            <xhtml:td width="70px" valign="center"> 
              <xforms:trigger> 
                <xforms:label>批量发布</xforms:label>  
                <xforms:action ev:event="DOMActivate"> 
                  <xforms:script>relaseKnowledge(event)</xforms:script> 
                </xforms:action> 
              </xforms:trigger> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/attachmentEditor.xbl.xml#attachmentEditor" id="attachKnowledge" model="mdKnowledge" ref="data('dKnowledge')/fDocument" display-style="list" root-path="/root" sub-path="concat('业务附件/OA/知识中心',toString(yearOf(currentDate())),'/',toString(monthOf(currentDate())))" display-buttons="upload:true;delete:true;template:false;edit:false;download:true;history:false;" style="border:1px solid #808A87; padding-left:4px; padding-right4px; padding-top:1px; padding-bottom:1px;" auto-load="true"/>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table align="center"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <xhtml:table width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td width="90px"> 
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
            <place control="attachKnowledge" style="width:718px;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

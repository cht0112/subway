<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script id="htmlScript1" src="folderInterface.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource>  
  <xforms:model id="mdKnowledge" style="top:67px;left:5px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="20" update-mode="whereVersion" auto-load="false" id="dFolder" concept="OA_KM_Folder" store-type="grid" is-tree="true"> 
      <reader action="/OA/knowledge/logic/action/queryFolderAction"/>  
      <tree-option parent-relation="fParent" root-filter="OA_KM_Folder.fParent = 'public'"/>  
      <filter name="dataFilter" id="filter1">OA_KM_Folder.fUseStatus = 1</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="fTitle,fFolderID,fFolderName,fFolderFullID,fFolderFullName,fOtherFolderIDs,fOtherFolderNames" src="" auto-load="true" id="dInfo" store-type="simple"> 
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="fTitle"/>  
          <cell id="fFolderID"/>  
          <cell id="fFolderName"/>  
          <cell id="fFolderFullID"/>  
          <cell id="fFolderFullName"/>  
          <cell id="fOtherFolderIDs"/>  
          <cell id="fOtherFolderNames"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="其他栏目" width="540px" height="300px" modal="true" id="dlgOtherFolders" url="/OA/knowledge/process/dialog/selectFolder/selectFolder.w" onReceive="dlgOtherFoldersReceive" onSend="dlgOtherFoldersSend"/>  
    <xui:view auto-load="true" id="vDetail"> 
      <xforms:input style="width:140px" id="fTitle" ref="data('dInfo')/fTitle" auto-size="true"/>  
      <xforms:input style="width:140px" id="fOtherFolders" ref="data('dInfo')/fOtherFolderNames" auto-size="true"/>  
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdFolder" data="dFolder" onShowNodeImg="fFolderShowNodeImg" style="width:100%;height:100%;" onAfterIndexChanged="grdFolderAfterIndexChanged"> 
        <column ref="fName" label="名称" type="tree"/>  
        <column ref="OA_KM_Folder" visible="false"/>  
        <column ref="fFullID" visible="false"/>  
        <column ref="fFullName" visible="false"/> 
      </xhtml:div>  
      <xforms:trigger id="trgOtherFolders" style="width:24px"> 
        <xforms:label style="font-size:9px;">...</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>trgOtherFoldersDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgOK" style="width:50px"> 
        <xforms:label>确 定</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>trgOKDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgCancel" style="width:50px"> 
        <xforms:label>取 消</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script>trgCancelDOMActivate(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;" id="layout1" src="folderInterface.xls" type="excel"/> 
    </xui:view>  
    <xui:layout style="width:100%;height:100%;"> 
      <place control="dlgOtherFolders" style="top:649px;left:255px;"/>  
      <xhtml:table align="center"> 
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vDetail"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

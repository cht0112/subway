<?xml version="1.0" encoding="utf-8"?>

<window xmlns="http://www.justep.com/xui" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:f="http://orbeon.org/oxf/xml/formatting" xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:xui="http://www.justep.com/xui" id="docCenter" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="docCenterModel" style="height:auto;left:391px;top:188px;"> 
    <data id="docNodeTree" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_DocNode" is-tree="true" offset="1" limit="-1" auto-load="false" onIndexChanged="docNodeTreeIndexChanged"
      confirm-refresh="false"> 
      <reader action="/system/logic/action/queryDocNodeAction"/>  
      <writer action="/system/logic/action/saveDocNodeAction"/>  
      <creator action="/system/logic/action/createDocNodeAction"/>  
      <filter name="sKindFilter">SA_DocNode.sKind='dir'</filter>  
      <filter name="sFlagFilter">SA_DocNode.sFlag=1</filter>  
      <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL"
        id="docNodeTreeRootFilter"/> 
    </data>  
    <data id="docNodeList" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SA_DocNode" offset="1" limit="18" auto-load="true" filter-relations="sDocName,sCreatorName,sCreatorDeptName,sCreateTime,sEditorName,sEditorDeptName,sLastWriterName,sLastWriterDeptName,sDocSerialNumber,sKeywords"
      onIndexChanged="docNodeListIndexChanged" confirm-delete="false" order-by="sLastWriteTime desc"
      confirm-refresh="false"> 
      <reader action="/system/logic/action/queryDocNodeAction"/>  
      <writer action="/system/logic/action/saveDocNodeAction"/>  
      <creator action="/system/logic/action/createDocNodeAction"/>  
      <filter name="sKindFilter">SA_DocNode.sKind&lt;&gt;'dir'</filter>  
      <filter name="sFlagFilter">SA_DocNode.sFlag=1</filter>  
      <master data="docNodeTree" relation="sParentID" auto-load="true"/> 
    </data>  
    <data id="newDirMenuItems" auto-load="true" store-type="simple" columns="sLabel,sProgramID,sNewFilename"
      component="/UI/system/components/data.xbl.xml#data" confirm-refresh="false"> 
      <rows xmlns="">  
        <row id="createDirItem"> 
          <cell>新建文件夹</cell>  
          <cell>createDir</cell>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data id="newDocMenuItems" auto-load="true" store-type="simple" columns="sLabel,sProgramID,sNewFilename"
      component="/UI/system/components/data.xbl.xml#data" confirm-refresh="false"> 
      <rows xmlns="">  
        <row id="uploadDocItem"> 
          <cell>上传本地文件</cell>  
          <cell>uploadDoc</cell>  
          <cell/> 
        </row>  
        <row> 
          <cell>---------------------------------</cell>  
          <cell>-</cell>  
          <cell>-</cell> 
        </row>  
        <row id="wordDocumentItem"> 
          <cell>新建 Word 文档</cell>  
          <cell>Word.Application</cell>  
          <cell>新建 Microsoft Word 文档</cell> 
        </row>  
        <row id="excelSheetItem"> 
          <cell>新建 Excel 工作表</cell>  
          <cell>Excel.Application</cell>  
          <cell>新建 Microsoft Excel 工作表</cell> 
        </row>  
        <row id="PowerPointItem"> 
          <cell>新建 PowerPoint 演示文稿</cell>  
          <cell>PowerPoint.Application</cell>  
          <cell>新建 Microsoft PowerPoint 演示文稿</cell> 
        </row>  
        <row id="MSProjectProjectItem"> 
          <cell>新建 Project 项目</cell>  
          <cell>MSProject.Application</cell>  
          <cell>新建 Microsoft Project 项目</cell> 
        </row> 
      </rows> 
    </data>  
    <data id="editDocMenuItems" auto-load="true" store-type="simple" columns="sLabel,sProgramID,sNewFilename"
      component="/UI/system/components/data.xbl.xml#data" confirm-refresh="false"> 
      <rows xmlns="">  
        <row id="editDocItem"> 
          <cell>编辑</cell>  
          <cell>OpenOffice</cell>  
          <cell/> 
        </row>  
        <row> 
          <cell>--------------------------</cell>  
          <cell>-</cell>  
          <cell>-</cell> 
        </row>  
        <row id="reuploadDocItem"> 
          <cell>重新上传文件</cell>  
          <cell>reuploadDoc</cell>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <data xmlns="" id="permissions" auto-load="true" component="/UI/system/components/data.xbl.xml#data"
      columns="newDir,deleteDir,editDir,manageDir,downloadDir,newDoc,editDoc,deleteDoc,manageDoc,downloadDoc,browseDoc"
      store-type="simple" confirm-refresh="false" onValueChanged="docCenter.permissionsValueChanged">  
      <rows> 
        <row id="permissionsRow"> 
          <cell/>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <xforms:bind nodeset="instance('permissions')/newDir" readonly="instance('permissions')/newDir != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/deleteDir" readonly="instance('permissions')/deleteDir != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/editDir" readonly="instance('permissions')/editDir != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/manageDir" readonly="instance('permissions')/manageDir != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/downloadDir" readonly="instance('permissions')/downloadDir != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/newDoc" readonly="instance('permissions')/newDoc != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/editDoc" readonly="instance('permissions')/editDoc != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/deleteDoc" readonly="instance('permissions')/deleteDoc != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/manageDoc" readonly="instance('permissions')/manageDoc != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/downloadDoc" readonly="instance('permissions')/downloadDoc != 'true'"/>  
    <xforms:bind nodeset="instance('permissions')/browseDoc" readonly="instance('permissions')/browseDoc != 'true'"/>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1"><![CDATA[docCenter.docCenterModelLoad(event)]]></xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <resource> 
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/yahooUtil.js"/>  
    <xhtml:script id="htmlScript2" src="/UI/system/components/attachmentEditor/ajaxupload.js"/>  
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/docUtil2.js"/>
    <!--<xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/service/doc/Modal.js"/>  
    -->
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/components/windowOpener/windowOpener.js"/>
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/SA/doc/docCenter/docCenter.js"/>  
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script language="JavaScript" type="text/javascript" src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script language="JavaScript" for="transport" event="OnDownBeginRead(FileIndex, FileFullName, FileSize)">onDownBeginRead(FileIndex, FileFullName, FileSize);</xhtml:script>  
    <xhtml:script language="JavaScript" for="transport" event="OnDownReadError(FileIndex, FileFullName, FileSize, errS)"/>  
    <xhtml:script language="JavaScript" for="transport" event="OnDownOver()">onDownOver();</xhtml:script>  
    <xhtml:script language="JavaScript" for="transport" event="OnCreateDir(FullParentPath)">onCreateDir(FullParentPath);</xhtml:script>  
    <xhtml:script language="JavaScript" for="transport" event="OnFilesUploaded(File)">onFilesUploaded(File);</xhtml:script>  
    <xhtml:script language="JavaScript" for="transport" event="OnFileStatus(FileIndex,FileFullName, FileSize,TransedSize, Progress, Status)">onFileStatus(FileIndex,FileFullName, FileSize,TransedSize, Progress, Status);</xhtml:script>  
    <xhtml:script language="JavaScript" for="transport" event="OnFilesTransed(num)">onFilesTransed(num);</xhtml:script> 
  </resource>  
  <view> 
    <layout style="width:100%;height:100%;"> 
      <xhtml:div id="ocxdiv" style="width:0;height:0"/>  
      <xhtml:div component="/UI/system/components/splitter.xbl.xml#splitter" id="splitter"
        has-drag-bar="true" has-arrow-button="true" mode="horz" fix-size="280" style="width:100%;height:100%;" fix-type="left" status="normal"> 
        <xhtml:div region="left" style="width:100%; height:100%"> 
          <place control="docNodeTreeView" style="width:100%; height:100%"/> 
        </xhtml:div>  
        <xhtml:div region="right" style="width:100%; height:100%"> 
          <place control="docNodeListView" style="width:100%; height:100%"/> 
        </xhtml:div> 
      </xhtml:div>  
      <place control="dialogsView"/>
    </layout>  
    <view id="docNodeTreeView"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="docNodeTreePart" style="width:100%; height: 100%;" border-size="2"> 
        <top size="38px" id="docNodeTreePart-top"> 
          <xhtml:div menu-id="newDirMenu" appearance="context" component="/UI/system/components/menu.xbl.xml#menu"> 
            <xui:menuitemset data="newDirMenuItems"> 
              <xui:label ref="sLabel"/>  
              <xui:program ref="sProgramID"/>  
              <xui:filename ref="sNewFilename"/> 
            </xui:menuitemset>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>newDir(event);</xforms:script> 
            </xforms:action> 
          </xhtml:div>  
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar2" style="width:100%;"> 
            <xforms:trigger appearance="image-text" id="trigger10" class="button-blue" icon-class="icon-system-plus" ref="data('permissions')/newDir"> 
              <xforms:label id="default19">新建</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action14"> 
                <xforms:script id="xformsScript14">docCenter.trigger1Click(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xforms:trigger appearance="minimal" ref="data('permissions')/editDir"
              id="trigger11" class="button-blue"> 
              <xforms:label id="default20">属性</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action15"> 
                <xforms:script id="xformsScript15">docCenter.trigger3Click(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xhtml:div component="/UI/system/components/menuButton.xbl.xml#menuButton"
              id="dirMoreBtns" label="更多操作" mode="auto"> 
              <menuitem id="deleteDir" label="删除" name="deleteDir" onClick="docCenter.menuitem1Click"
                icon-class="icon-system-cancel"/>  
              <menuitem id="manageDir" label="权限" name="manageDir" onClick="docCenter.menuitem2Click"
                icon-class="icon-system-vcard"/> 
            </xhtml:div> 
          </xhtml:div> 
        </top>  
        <center id="docNodeTreePart-center"> 
          <xhtml:div style="width:100%; height:100%;border:0px;" data="docNodeTree" id="docNodeTreeGrid"
            appearance="tree" component="/UI/system/components/grid.xbl.xml#grid"
            onInit="onTreeInit" onShowNodeImg="showNodeImg" onBeforeIndexChanged="docCenter.docNodeTreeGridBeforeIndexChanged"
            class="ui-light" space-column="false"> 
            <column label="名称" ref="sDocName" type="tree" readonly="true" sort-datatype="str"
              width="*"/> 
          </xhtml:div> 
        </center>  
        <bottom size="38px" id="borderLayout-bottom1"> 
          <xhtml:table cellpadding="0" cellsapcing="0" border="0" width="90px" id="table1"
            style="height:30px;;"> 
            <xhtml:tr id="tr1"> 
              <xhtml:td id="td1"> 
                <xhtml:input type="checkbox" id="showRootIpt" onclick="docCenter.showRootIptClick(event)"/> 
              </xhtml:td>  
              <xhtml:td id="td2">显示根节点</xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </bottom> 
      </xhtml:div> 
    </view>  
    <view id="docNodeListView"> 
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="docNodeListPart" style="width:100%; height: 100%;" border-size="2px"> 
        <top size="38px" id="docNodeListPart-top"> 
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar"
            id="buttonBar1" style="width:100%;">
            <xforms:trigger appearance="image-text" id="trigger1" icon-class="icon-system-plus" class="button-blue" style="margin-left:5px" ref="data('permissions')/newDoc"> 
              <xforms:label id="default1">新建</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action2"> 
                <xforms:script id="xformsScript2">docCenter.trigger5Click(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xforms:trigger id="editDocTrigger" appearance="minimal" disabled="false" ref="data('permissions')/editDoc" icon-class="icon-system-edit-alt"> 
              <xforms:label id="default2">编辑</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action3"> 
                <xforms:script id="xformsScript3">docCenter.editDocTriggerClick(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xforms:trigger appearance="minimal" ref="data('permissions')/downloadDoc"
              id="trigger2" icon-class="icon-system-download"> 
              <xforms:label id="default3">下载</xforms:label>  
              <xforms:action ev:event="DOMActivate" id="action4"> 
                <xforms:script id="xformsScript4">docCenter.trigger11Click(event)</xforms:script> 
              </xforms:action> 
            </xforms:trigger>  
            <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger"
              id="trigger3" operation-owner="bizDataFilterMenu1" operation="show"
              appearance="minimal" ref="data('permissions')/browseDoc" icon-class="icon-system-search"> 
              <xforms:label id="default4"><![CDATA[查询]]></xforms:label> 
            </xforms:trigger>  
            <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger"
              id="trigger4" operation-owner="docNodeList" operation="refresh" appearance="minimal"> 
              <xforms:label id="default5"><![CDATA[刷新]]></xforms:label> 
            </xforms:trigger>  
            <xhtml:div component="/UI/system/components/menuButton.xbl.xml#menuButton"
              id="docMoreBtns" label="更多操作"> 
              <menuitem id="deleteDoc" label="删除" name="deleteDoc" onClick="docCenter.docDeleteClick"
                icon-class="icon-system-cancel"/>  
              <menuitem label="属性" onClick="docCenter.docAttrClick"
                name="editDoc" id="editDoc"/>  
              <menuitem id="manageDoc" label="权限" name="manageDoc" onClick="docCenter.docPermissionClick"
                icon-class="icon-system-vcard"/>  
              <menuitem id="docLock" label="锁定" onClick="docCenter.docLockClick"
                name="lockDoc" icon-class="icon-system-lock"/>  
              <menuitem id="docUnlock" label="解锁" name="unlockDoc" onClick="docCenter.docUnlockClick"
                icon-class="icon-system-lock-open"/>  
              <menuitem id="browseDoc" label="查看" name="browseDoc" onClick="docCenter.docBrowseClick"
                icon-class="icon-system-eye"/>  
              <menuitem id="menuitem11" label="下载历史" name="downloadDoc" onClick="docCenter.menuitem11Click"
                icon-class="icon-system-download"/>  
              <menuitem id="menuitem12" label="历史版本" name="historyDoc" onClick="docCenter.menuitem12Click"/> 
            </xhtml:div>  
            <xhtml:div component="/UI/system/components/bizDataFilterMenu.xbl.xml#bizDataFilterMenu"
              id="bizDataFilterMenu1" data="docNodeList"/> 
          </xhtml:div>  
          <xhtml:div menu-id="newDocMenu" appearance="context" component="/UI/system/components/menu.xbl.xml#menu"
            id="div1" class="xui-container"> 
            <xui:menuitemset data="newDocMenuItems" id="default9"> 
              <xui:label ref="sLabel" id="xuiLabel1"/>  
              <xui:program ref="sProgramID" id="default10"/>  
              <xui:filename ref="sNewFilename" id="default11"/> 
            </xui:menuitemset>  
            <xforms:action ev:event="DOMActivate" id="action8"> 
              <xforms:script id="xformsScript8">officeHandler(event);</xforms:script> 
            </xforms:action> 
          </xhtml:div>  
          <xhtml:div menu-id="editDocMenu" appearance="context" component="/UI/system/components/menu.xbl.xml#menu"
            id="div2" class="xui-container"> 
            <xui:menuitemset data="editDocMenuItems" id="default12"> 
              <xui:label ref="sLabel" id="xuiLabel2"/>  
              <xui:program ref="sProgramID" id="default13"/>  
              <xui:filename ref="sNewFilename" id="default14"/> 
            </xui:menuitemset>  
            <xforms:action ev:event="DOMActivate" id="action9"> 
              <xforms:script id="xformsScript9">officeHandler(event);</xforms:script> 
            </xforms:action> 
          </xhtml:div> 
        </top>  
        <center id="docNodeListPart-center"> 
          <xhtml:div data="docNodeList" id="docNodeListGrid" component="/UI/system/components/grid.xbl.xml#grid"
            onRowDblClick="browseDoc" onInit="onTreeInit" style="width:100%; height:100%"
            header-row-height="30" row-height="30" class="grid-flat xui-grid-hide-VLine"> 
            <column label="锁定" ref="sEditorFID" width="35px" type="html" onRender="imageCellFun" readonly="true" align="center" /><column label="名称" ref="sDocName" width="300px" align="left" />
            <column width="80px" ref="sSize" label="大小(KB)" type="html" onRender="transB2KB" readonly="true" align="right" />  
              
              
            <column width="120px" type="dateTime" ref="sCreateTime" label="创建时间"
              readonly="true"/>  
            <column width="100px" ref="sCreatorName" label="创建人" align="left"/>  
            <column width="150px" ref="sCreatorDeptName" label="创建人部门" align="left"/>  
            <column width="100px" ref="sEditorName" label="当前修改人" align="left"/>  
            <column width="80px" ref="sLastWriterName" label="最后修改人" align="left"/>  
            <column width="120px" ref="sLastWriteTime" type="dateTime" label="最后修改时间"
              	readonly="true" align="left"/>  
            </xhtml:div>
            <xhtml:div id="transportDiv"/>  
      		<xhtml:div id="docExtDiv"/> 
        </center> 
      <bottom size="38px" id="borderLayout-bottom2">
  <xhtml:div component="/UI/system/components/pagination.xbl.xml#pagination" items="first last pre next" id="pagination1" data="docNodeList" align="right"></xhtml:div></bottom></xhtml:div> 
    </view>  
    <view id="dialogsView"> 
      <xhtml:div component="/UI/system/components/dialog.xbl.xml#dialog" modal="true"
        width="330px" height="120px" id="uploadDirProgress" closable="false" title="正在上传..."
        minmaxable="false" resizable="false"> 
        <xhtml:table height="100%" width="100%"> 
          <xhtml:tr height="20px"/>  
          <xhtml:tr> 
            <xhtml:td width="10px"/>  
            <xhtml:td> 
              <xhtml:img src="/UI/SA/doc/docCenter/images/processing.gif"/> 
            </xhtml:td>  
            <xhtml:td width="10px"/>  
            <xhtml:td width="300px"> 
              <xhtml:div style="font:12px" id="uploading"/> 
            </xhtml:td>  
            <xhtml:td width="10px"/> 
          </xhtml:tr>  
          <xhtml:tr height="20px"/> 
        </xhtml:table> 
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/dialog.xbl.xml#dialog" modal="true"
        width="330px" height="120px" id="downProgess" title="正在下载..." minmaxable="false"
        resizable="false"> 
        <xhtml:table height="100%" width="100%"> 
          <xhtml:tr height="20px"/>  
          <xhtml:tr> 
            <xhtml:td width="10px"/>  
            <xhtml:td> 
              <xhtml:img src="/UI/SA/doc/docCenter/images/processing.gif"/> 
            </xhtml:td>  
            <xhtml:td width="10px"/>  
            <xhtml:td width="300px"> 
              <xhtml:div style="font:12px" id="downloading"/> 
            </xhtml:td>  
            <xhtml:td width="10px"/> 
          </xhtml:tr>  
          <xhtml:tr height="20px"/> 
        </xhtml:table> 
      </xhtml:div>  
      <xui:layout id="layout1" style="display:none;"> 
        <xui:place control="uploadDirProgress" id="controlPlace1"/>  
        <xui:place control="downProgess" id="controlPlace2"/> 
      </xui:layout> 
    </view> 
  </view> 
</window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="folderManagerSet.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:92px;left:35px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="false" concept="OA_KM_FDManager" id="dManager"> 
      <reader action="/OA/knowledge/logic/action/queryKMFDManagerAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMFDManagerAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMFDManagerAction"/>  
      <rule concept="OA_KM_FDManager" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrManager"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgManager" data="dManager"> 
        <item name="add-manage"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label>添加管理员</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								openSelectManagerDialog();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="delete-item" readonly="data('dManager')/fIsInherit = '1'"/>  
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择管理员" width="600px" height="350px" modal="true" id="dlgSelectManager" url="/system/service/commonChoose/treeListMultiOrgChoose.w" reload-on-open="true" onSend="orgDlgSendPsm" onReceive="orgDlgReceivePsm"/>  
    <xui:view id="vDetail"> 
      <xhtml:div style="width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" id="grdManager" data="dManager"> 
        <column ref="fFolderID" label="栏目ID" type="ro" visible="false"/>  
        <column ref="fManagerID" label="管理员ID" type="ro" visible="false"/>  
        <column ref="fManagerName" label="管理员" type="ed" width="100"/>  
        <column ref="sOrgFName" label="路径" type="ro" width="350"/>  
        <column ref="fIsInherit" label="继承" type="ch" width="40" align="center"/> 
      </xhtml:div>  
      <xhtml:input id="inheritChb" type="checkbox" onclick="javascript:inheritChbOnClick()" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input id="overrideChb" type="checkbox" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input type="button" id="btnEnsure" value="确定" onclick="javascript:onEnsureFun()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:60px;"/>  
      <xhtml:input type="button" id="btnCancel" value="取消" onclick="javascript:onCancelFun()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:60px;"/>  
      <!--<xhtml:button id="btnEnsure" onclick="javascript:onEnsureFun()" style="width:60px;height:24px">确定</xhtml:button>  
      <xhtml:button id="btnCancel" onclick="javascript:onCancelFun()" style="width:60px;height:24px">取消</xhtml:button>-->  
      <xui:layout style="height:100%;" src="folderManagerSet.xls" type="excel"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="dlgSelectManager" style="top:138px;left:35px;"/>  
      <xhtml:table style="width:100%;height:100%;overflow:hidden;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr > 
          <xhtml:td style="width:1px;height:35px"> 
          </xhtml:td> 
          <xhtml:td style="height:35px">
            <place control="tbrManager"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td valign="top" colspan="2"> 
            <place control="vDetail"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

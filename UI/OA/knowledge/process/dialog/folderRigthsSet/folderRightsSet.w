<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="folderRightsSet.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:431px;left:11px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="-1" update-mode="whereVersion" auto-load="false" id="dRights" concept="OA_KM_Rights"> 
      <reader action="/OA/knowledge/logic/action/queryKMRightsAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMRightsAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMRightsAction"/>  
      <rule concept="OA_KM_Rights" readonly="data('dRights')/fIsInherit = '1'"/>  
      <rule relation="fIsInherit" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrRights"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgRights" data="dRights"> 
        <item name="add-org-item"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label>添加组织</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								openSelectRightOrgDialog();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <!--<item name="save-item" />-->  
        <item name="delete-item" readonly="data('dRights')/fIsInherit = '1'"/>  
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择组织" width="600px" height="350px" modal="true" id="dlgSelectRightOrg" url="/system/service/commonChoose/treeListMultiOrgChoose.w" reload-on-open="true" onSend="orgDlgSendall" onReceive="orgDlgReceiveall"/>  
    <xui:view id="vDetail"> 
      <xhtml:div style="width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" id="grdRights" data="dRights"> 
        <column ref="fKWKind" label="类型" type="ro" visible="false"/>  
        <column ref="fFolderID" label="栏目ID" type="ro" visible="false"/>  
        <column ref="fFolderName" label="栏目" type="ro" visible="false"/>  
        <column ref="fKWFullID" label="栏目路径" type="ro" visible="false"/>  
        <column ref="fOrgKind" label="组织类型" type="ro" visible="false"/>  
        <column ref="fOrgID" label="组织ID" type="ro" visible="false"/>  
        <column ref="fOrgName" label="组织名称" type="ro" visible="false"/>  
        <column ref="fOrgFID" label="组织ID路径" type="ro" visible="false"/>  
        <column ref="fOrgFName" label="组织" type="ro" width="300"/>  
        <column ref="fCanCreateKW" label="权限|创建知识" type="ch" width="55" align="center"/>  
        <!--<column ref="fCanReadKW" label="权限|阅读知识"
					type="ch" width="55" align="center" visible="false" />-->  
        <column ref="fCanReleaseKW" label="权限|发布知识" type="ch" width="55" align="center"/>  
        <!--<column ref="fCanCreateComment" label="权限|发表评论"
					type="ch" width="55" align="center" visible="false" />
				<column ref="fCanReadComment" label="权限|阅读评论"
					type="ch" width="55" align="center" visible="false" />
				<column ref="fCanReadRecord" label="权限|查看历史"
					type="ch" width="55" align="center" visible="false" />
				<column ref="fCanScore" label="权限|评分"
					type="ch" width="35" align="center" visible="false" />-->  
        <column ref="fIsInherit" label="继承" type="ch" width="35" align="center"/> 
      </xhtml:div>  
      <xhtml:input id="inheritChb" type="checkbox" onclick="javascript:inheritChbOnClick()" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input id="overrideFDChb" type="checkbox" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input id="overrideKWChb" type="checkbox" style="width:13px;height:13px"></xhtml:input>  
      <xhtml:input type="button" id="btnEnsure" value="确定" onclick="javascript:onEnsureFun()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:60px;"/>  
      <xhtml:input type="button" id="btnCancel" value="取消" onclick="javascript:onCancelFun()" style="border-style: solid solid solid solid; border-width:1px; border-color:#808A87; background-color:#F4F4F0;width:60px;"/>  
      <!--<xhtml:button id="btnEnsure" onclick="javascript:onEnsureFun()" style="width:60px;height:24px">确定</xhtml:button>  
      <xhtml:button id="btnCancel" onclick="javascript:onCancelFun()" style="width:60px;height:24px">取消</xhtml:button>-->  
      <xui:layout src="folderRightsSet.xls" type="excel"/> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="dlgSelectRightOrg" style="top:480px;left:14px;"/>  
      <xhtml:table style="width:100%;height:100%;table-layout:fixed;overflow:hidden;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td style="width:5px;height:35px"> 
          </xhtml:td> 
          <xhtml:td style="height:35px"> 
            <place control="tbrRights" style="height:100%;width:100%;"/> 
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

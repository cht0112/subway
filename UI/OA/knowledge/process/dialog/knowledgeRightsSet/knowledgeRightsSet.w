<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="knowledgeRightsSet.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:124px;left:56px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dRights" concept="OA_KM_Rights"> 
      <reader action="/OA/knowledge/logic/action/queryKMRightsAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMRightsAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMRightsAction"/>  
      <rule relation="fIsInherit" readonly="true()"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrRights"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgRights"
        data="dRights"> 
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
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vRightsList"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdRights"
        data="dRights"> 
        <column ref="fKWKind" label="知识类型" type="ed" visible="false"/>  
        <column ref="fFolderName" label="继承栏目" type="ro" width="150"/>  
        <column ref="fFolderID" label="栏目ID" type="ro" visible="false"/>  
        <column ref="fKWID" label="知识ID" type="ed" visible="false"/>  
        <column ref="fKWName" label="知识名称" type="ed" visible="false"/>  
        <column ref="fKWFullID" label="知识ID路径" type="ed" visible="false"/>  
        <column ref="fKWFullName" label="知识Name路径" type="ed" visible="false"/>  
        <column ref="fOrgKind" label="组织类型" type="ed" visible="false"/>  
        <column ref="fOrgID" label="组织ID" type="ed" visible="false"/>  
        <column ref="fOrgName" label="组织名称" type="ed" visible="false"/>  
        <column ref="fOrgFID" label="组织ID路径" type="ed" visible="false"/>  
        <column ref="fOrgFName" label="组织" type="ro" width="280"/>  
        <column ref="fCanCreateKW" label="权限|创建知识" type="ch" width="55" align="center"
          visible="false"/>  
        <column ref="fCanReadKW" label="权限|阅读知识" type="ch" width="55" align="center"
          visible="false"/>  
        <column ref="fCanCreateComment" label="权限|发表评论" type="ch" width="55" align="center"
          visible="false"/>  
        <column ref="fCanReadComment" label="权限|阅读评论" type="ch" width="55" align="center"
          visible="false"/>  
        <column ref="fCanReadRecord" label="权限|查看历史" type="ch" width="55" align="center"
          visible="false"/>  
        <column ref="fCanScore" label="权限|评分" type="ch" width="35" align="center"
          visible="false"/>  
        <column ref="fIsInherit" label="继承" type="ch" width="35" align="center"/>  
        <column ref="fCreatePsnID" label="提交人员ID" type="ed" visible="false"/>  
        <column ref="fCreatePsnName" label="提交人员" type="ed" visible="false"/>  
        <column ref="fCreateTime" label="提交时间" type="ed" visible="false"/> 
      </xhtml:div>  
      <layout style="width:100%;height:100%;" id="layout1"> 
        <place control="grdRights" style="width:100%;height:100%;"/>  
        <!-- 
        <xhtml:input id="inheritChb" type="checkbox" style="position:absolute;width:20px;top:320px;left:5px;" onclick="javascript:inheritChbOnClick()"/>  
        <xhtml:label id="labInherit" style="position:absolute;font-size:12px;top:325px;left:28px;">继承栏目权限</xhtml:label> 
         --> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
        title="选择组织" width="600px" height="350px" modal="true" id="dlgSelectRightOrg"
        url="/system/service/commonChoose/treeListMultiOrgChoose.w" reload-on-open="true"
        onSend="orgDlgSendall" onReceive="orgDlgReceiveall" left="0"/>  
      <xhtml:table border="0" style="width:100%;height:100%;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td width="2px" height="30px"/>  
          <xhtml:td height="30px"> 
            <place control="tbrRights"/> 
          </xhtml:td>  
          <xhtml:td width="2px" height="30px"/> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td width="2px" height="348px"/>  
          <xhtml:td valign="top" height="348px"> 
            <place control="vRightsList"/> 
          </xhtml:td>  
          <xhtml:td width="2px" height="30px"/> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td width="2px" height="30px"/>  
          <xhtml:td valign="top" height="30px"> 
            <xhtml:table component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td style="width:550px;" valign="top" align="left"> 
                  <input type="button" value="刷新" onclick="windowRefresh()" id="refresh-btn"
                    style="height:23px;width:45px;"/> 
                </xhtml:td>  
                <xhtml:td valign="top" align="right"> 
                  <input type="button" value="确定" onclick="windowEnsure(windowSend())"
                    id="ensure-btn" style="height:23px;width:45px;"/> 
                </xhtml:td>  
                <xhtml:td valign="top" align="left"> 
                  <input type="button" value="取消" onclick="windowCancel()" id="cancel-btn"
                    style="height:23px;width:45px;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td>  
          <xhtml:td width="2px" height="30px"/> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

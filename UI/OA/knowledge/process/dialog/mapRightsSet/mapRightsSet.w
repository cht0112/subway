<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="mapRightsSet.js"/>  
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/>  
    <xhtml:script src="/UI/system/service/commonChoose/js/commonChoosePara.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:431px;left:11px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dRights" concept="OA_KM_Rights"> 
      <reader action="/OA/knowledge/logic/action/queryKMRightsAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMRightsAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMRightsAction"/>  
      <rule concept="OA_KM_Rights" readonly="true()"/> 
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
        <item name="delete-item"/>  
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择组织" width="550px" height="400px" modal="true" id="dlgSelectRightOrg" url="/system/service/commonChoose/treeListMultiOrgChoose.w" onSend="dlgSelectRightOrgSend" onReceive="dlgSelectRightOrgReceive"/>  
    <xui:view auto-load="true" id="vListRights"> 
      <xhtml:div style="width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" id="grdRights" data="dRights"> 
        <column label="序号" ref="recNo" show-index="true"/>  
        <column ref="fKWKind" label="类型" type="ro" visible="false"/>  
        <column ref="fFolderID" label="栏目ID" type="ro" visible="false"/>  
        <column ref="fFolderName" label="栏目" type="ro" visible="false"/>  
        <column ref="fKWFullID" label="栏目路径" type="ro" visible="false"/>  
        <column ref="fOrgKind" label="组织类型" type="ro" visible="false"/>  
        <column ref="fOrgID" label="组织ID" type="ro" visible="false"/>  
        <column ref="fOrgName" label="组织名称" type="ro" visible="false"/>  
        <column ref="fOrgFID" label="组织ID路径" type="ro" visible="false"/>  
        <column ref="fOrgFName" label="组织" type="ro" width="400"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <place control="grdRights"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="dlgSelectRightOrg" style="top:480px;left:14px;"/>  
      <xhtml:table style="width:100%;height:100%;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="35px"> 
          <xhtml:td> 
            <place control="tbrRights" style="height:100%;width:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td valign="top"> 
            <place control="vListRights"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr height="22px"> 
          <xhtml:td> 
            <xhtml:table width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td style="width:80%;height:20px" valign="top" align="left"> 
                  <input type="button" value="刷新" onclick="windowRefresh()" id="refresh-btn"/> 
                </xhtml:td>  
                <xhtml:td valign="top" align="right"> 
                  <input type="button" value="确定" onclick="windowEnsure(sendData())" id="ensure-btn"/> 
                </xhtml:td>  
                <xhtml:td valign="top" align="left"> 
                  <input type="button" value="取消" onclick="windowCancel()" id="cancel-btn"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

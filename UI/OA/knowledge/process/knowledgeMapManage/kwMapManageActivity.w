<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="kwMapManageActivity.js"/> 
  </xui:resource>  
  <xforms:model id="mdKWMapManage" style="top:65px;left:16px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dFolder" concept="OA_KM_Folder" order-by="fName:asc" is-tree="true"> 
      <tree-option parent-relation="fParent" root-filter="OA_KM_Folder = map"/>  
      <reader action="/OA/knowledge/logic/action/queryKMFolderAction"/>  
      <rule concept="OA_KM_Folder" readonly="true()"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dKWFolder" concept="OA_KM_KWFolder"> 
      <reader action="/OA/knowledge/logic/action/queryKowledgeFolderAction"/>  
      <writer action="/OA/knowledge/logic/action/saveKMKWFolderAction"/>  
      <creator action="/OA/knowledge/logic/action/createKMKWFolderAction"/>  
      <master data="dFolder" relation="fFolderID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="hasRight" auto-load="true" id="dControl" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <xforms:bind nodeset="data('dControl')/hasRight" readonly="call('canAddKnowledge')"/>  
    <xforms:action id="action1" ev:event="xbl-loaded"> 
      <xforms:script id="xformsScript1">mdKWMapManagexbl_loaded(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div style="border:1px solid #99bbe8;" component="/UI/system/components/grid.xbl.xml#grid" id="grdFolder" appearance="tree" data="dFolder" onShowNodeImg="showNodeImg"> 
      <column ref="fName" label="名称" type="tree" width="190"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge" data="dKWFolder"> 
        <item name="add-knowledge"> 
          <xforms:trigger appearance="image" ref="data('dControl')/hasRight" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label>添加知识</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								openSelectKnowledgeDialog();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item"/>  
        <item name="delete-item"/>  
        <item name="refresh-item"/>  
        <item name="next-page-item"/>  
        <item name="all-page-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vFilter"> 
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dKWFolder" filter-relations="fTitle,fKeyword,fWriter"/>  
      <layout style="height:100%;position:relative;width:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;position:absolute;width:26px;top:14px;left:4px;"> 
          <xhtml:font size="2">查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;width:140px;top:7px;left:34px;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vKWFolder"> 
      <xhtml:div style="border:1px solid #99bbe8;;width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" id="grdKWFolder" data="dKWFolder"> 
        <column label="" ref="recNo" show-index="true"/>  
        <column ref="fKWID" label="知识ID" type="ro" visible="false"/>  
        <column ref="fFolderKind" label="文件夹类型" type="ro" visible="false"/>  
        <column ref="fFolderID" label="栏目ID" type="ro" visible="false"/>  
        <column ref="fKWFullID" label="知识ID路径" type="ro" visible="false"/>  
        <column ref="fTitle" label="标题" width="250" type="ro"/>  
        <column ref="fKeyword" label="关键字" width="100" type="ro"/>  
        <column ref="fWriter" label="作者" width="80" type="ro"/>  
        <column ref="fContentTypeName" label="正文类型" width="80" type="ro"/>  
        <column ref="fReleaseTime" label="发布时间" width="120" type="dateTime"/> 
      </xhtml:div> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="添加知识" width="680px" height="440px" modal="true" id="dlgKnowledge" url="/OA/knowledge/process/dialog/selectKnowledge/selectKnowledge.w" onReceive="dlgKnowledgeReceive"/>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="dlgKnowledge" style="top:160px;left:17px;"/>  
      <xhtml:table width="100%" height="100%" border="0" style="table-layout:fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td width="200px"> 
            <place control="grdFolder" style="width:100%;height:100%;"/> 
          </xhtml:td>  
          <xhtml:td valign="top"> 
            <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="35px"> 
                <xhtml:td valign="top"> 
                  <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr> 
                      <xhtml:td width="175px"> 
                        <place control="tbrKnowledge" style="width:100%;height:100%;"/> 
                      </xhtml:td>  
                      <xhtml:td> 
                        <place control="vFilter"/> 
                      </xhtml:td> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td valign="top"> 
                  <place control="vKWFolder" style="width:100%;height:100%;"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

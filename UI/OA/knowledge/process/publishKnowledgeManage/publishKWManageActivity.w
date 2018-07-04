<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="publishKWManageActivity.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="publishKWManageActivity.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:99px;left:6px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dKnowledge" concept="OA_KM_Knowledge" order-by="fCreateTime:desc"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKMKnowledgeAction"/>  
      <writer id="kwWriter" action="/OA/knowledge/logic/action/saveKMKnowledgeAction"/>  
      <creator id="kwCreator" action="/OA/knowledge/logic/action/createKMKnowledgeAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dFolder" concept="OA_KM_Folder" store-type="grid" is-tree="true"> 
      <reader action="/OA/knowledge/logic/action/queryFolderAction"/>  
      <tree-option parent-relation="fParent" root-filter="OA_KM_Folder.fParent = 'public'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="folderID,folderName,canRelease" auto-load="true" id="dFilter" store-type="simple"> 
      <rows xmlns="">  
        <row/> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dFirstFolder" style=";" concept="V_OA_KW_FirstFolder" limit="-1" store-type="simple"> 
      <reader id="default6" action="/OA/knowledge/logic/action/queryV_OA_KW_FirstFolderAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dSecondFolder" style=";" concept="V_OA_KW_SecondFolder" limit="-1"> 
      <reader id="default7" action="/OA/knowledge/logic/action/queryV_OA_KW_SecondFolderAction"/> 
    </data>  
    <!--<xforms:bind nodeset="data('dFilter')/canRelease"
			readonly="data('dKnowledge')/fReleaseStatus=1" />-->  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value" auto-load="false" id="dReleaseStatus" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell>未发布</cell>  
          <cell>0</cell> 
        </row>  
        <row> 
          <cell>已发布</cell>  
          <cell>1</cell> 
        </row>  
        <row> 
          <cell>已取消</cell>  
          <cell>2</cell> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="firstFolderFullID,firstFolderName,secondFolderName" src="" auto-load="true" id="dTemp" style=";" store-type="simple"> 
      <rows xmlns="" id="default1">  
        <row id="default2"> 
          <cell id="default3"/>  
          <cell id="default4"/>  
          <cell id="default5"/> 
        </row> 
      </rows> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge" data="dKnowledge"> 
        <item name="new-knowledge-item"> 
          <xforms:trigger appearance="image" src="/UI/appCommon/images/insert.gif" dis-src="/UI/appCommon/images/un_insert.gif"> 
            <xforms:label>新增知识</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
								openPublishKnowledgeByNew();
							]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="save-item"/>  
        <item name="delete-item" readonly="call('canDeleteKW')"/>  
        <item name="refresh-item"/>  
        <item name="filter-item"/>  
        <item name="filter-pattern-item"/>  
        <item name="separator"/>  
        <item name="next-page-item"/>  
        <item name="all-page-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vButton"> 
      <xforms:trigger id="trgPublish" ref="data('dFilter')/canRelease"> 
        <xforms:label>发布知识</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script> <![CDATA[
						relaseKnowledge();
					]]> </xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="trgStopPublish"> 
        <xforms:label>取消发布</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script> <![CDATA[
						cancelRelaseKnowledge();
					]]> </xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;width:100%;"> 
        <xhtml:table style="width:100%;height:100%;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
          <xhtml:tr> 
            <xhtml:td width="50px"> 
              <place control="trgPublish"/> 
            </xhtml:td>  
            <xhtml:td> 
              <place control="trgStopPublish"/> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vKWList"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdKnowledge" data="dKnowledge"> 
        <column label="序号" ref="recNo" show-index="true"/>  
        <column ref="fReleaseStatusName" width="40" label="状态" type="ro"/>  
        <!--<column ref="fIsNeedApprove" width="55"
					label="审批发布" type="ch" align="center" />-->  
        <!--<column ref="fBizStateName" width="55"
					label="流程状态" type="html" htmlCallback="displayBizStateName" />-->  
        <column ref="fFolderFullName" label="栏目" width="100" type="ro"/>  
        <column ref="fTitle" width="250" type="html" label="标题" onRender="hyperlink2Knowledge"/>  
        <xui:column id="gridColumn1" ref="fKeyword" label="主题词" type="ro" width="100"/>  
        <column ref="fDocNumber" label="文号" width="150" type="ro"/>  
        <column ref="fWriter" label="作者" width="60" type="ro"/>  
        <column ref="fReleaseDeptName" label="发布部门" width="100" type="ro"/>  
        <column ref="fReleasePsnName" label="发布人" width="60" type="ro"/>  
        <column ref="fReleaseTime" label="发布时间" width="120" type="dateTime"/>  
        <column ref="fCreateDeptName" label="创建部门" width="100" type="ro"/>  
        <column ref="fCreatePsnName" label="创建人" width="60" type="ro"/>  
        <column ref="fCreateTime" label="创建时间" width="120" type="dateTime"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <place control="grdKnowledge" id="controlPlace2" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vFilterBar" class="xui-container"> 
      <xhtml:div component="/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter" id="manageFilter" filter-data="dKnowledge" person-id-relation="fCreatePsnID" org-url-relation="fCreatePsnFID" onGetCondition="manageFilterGetCondition" management-kinds="'kwPublishManage'" manage-type-codes="'knowledgeManagement'"/>  
      <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#treeFilter" id="trfFolder" filter-data="dKnowledge" filter-relation="fFolderID" multi-select="true" delay="true" default-label="'全部'" cascade="false" onShowNodeImg="trfFolderShowNodeImg"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_KM_Folder"/>  
        <xforms:itemset data="dFolder" auto-load-data="true"> 
          <xforms:column ref="fName"/>  
          <xforms:column ref="OA_KM_Folder" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'" id="gdfRelaseStatus" filter-data="dKnowledge" filter-relation="fReleaseStatus" multi-select="true" default-value="'0,1'" default-label="'未发布,已发布'"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="dReleaseStatus" auto-load-data="true"> 
          <xforms:column ref="label"/>  
          <xforms:column ref="value" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dKnowledge" filter-relations="fFolderName,fTitle,fDocNumber,fWriter"/>  
  
      <xforms:trigger id="trigger1" appearance="image" src="/UI/OA/common/images/search.png"> 
        <xforms:label id="xuiLabel1">trigger</xforms:label> 
      </xforms:trigger>  
      <layout style="height:100%;position:relative;width:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;width:55px;top:9px;left:0px;" class="xui-label"> 
          <xhtml:font size="2">管理权限</xhtml:font> 
        </xhtml:label>  
        <place control="manageFilter" style="position:absolute;top:3px;width:110px;left:60px;"/>  
        <xhtml:label style="position:absolute;width:27px;top:9px;left:190px;" class="xui-label"> 
          <xhtml:font size="2">栏目</xhtml:font> 
        </xhtml:label>  
        <place control="trfFolder" id="controlPlace3" style="position:absolute;top:3px;width:110px;left:222px;"/>  
        <xhtml:label style="position:absolute;top:9px;left:352px;width:27px;" class="xui-label"> 
          <xhtml:font size="2">状态</xhtml:font> 
        </xhtml:label>  
        <place control="gdfRelaseStatus" style="position:absolute;height:20px;top:3px;left:384px;width:80px;"/>  
        <xhtml:label style="position:absolute;position:absolute;width:55px;top:9px;left:484px;" class="xui-label"> 
          <xhtml:font size="2">模糊查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;top:3px;left:544px;width:120px;"/>  
        <xui:place control="trigger1" id="controlPlace2" style="position:absolute;width:33px;top:3px;left:684px;"/> 
      </layout>  
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table style="width:100%;height:100%;table-layout:fixed;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="64px"> 
          <xhtml:td> 
            <xhtml:table style="width:100%;height:100%;" cellspacing="0" border="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td width="200px" height="30px"> 
                  <place control="tbrKnowledge" style="height:100%;width:100%;"/> 
                </xhtml:td>  
                <xhtml:td> 
                  <place control="vButton"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td colspan="2"> 
                  <place control="vFilterBar"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <place control="vKWList"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

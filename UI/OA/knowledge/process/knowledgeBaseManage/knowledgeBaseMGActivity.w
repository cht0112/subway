<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="knowledgeBaseMGActivity.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/> 
  </xui:resource>  
  <xforms:model id="mdKnowledge" style="top:210px;height:auto;left:271px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="20" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge"
      order-by="fReleaseTime:desc" relations="fTitle,fKeyword,fDocNumber,fImportant,fImportantName,fWriter,fFolderID,fFolderName,fFolderFullID,fFolderFullName,fRightsText,fIsNeedApprove,fContentType,fContentTypeName,fTemplateID,fTemplateName,fLinkURL,fContentURL,fIsTop,fTopBeginTime,fTopEndTime,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fReleaseOgnID,fReleaseOgnName,fReleaseDeptID,fReleaseDeptName,fReleasePsnID,fReleasePsnName,fReleasePsnFID,fReleasePsnFName,fReleaseTime,fReleaseStatus,fReleaseStatusName,fApproverID,fApproverName,fApproveTime,fBizState,fBizStateName,fIsDisplayOnPortal,fIsInheritRights,fOtherFolders,fBizID,fBizType,fBizTypeName,fReaderCount,fRepliesCount,version,fGZPsnIDs"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKnowledgeAction"/> 
    </data>   
    <data component="/UI/system/components/data.xbl.xml#data" auto-load="true"
      columns="fName,folderFullID" store-type="simple" id="dFolder"> 
      <rows xmlns="">  
        <row id="public"> 
          <cell>知识中心</cell>  
          <cell>public</cell> 
        </row> 
      </rows> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="label,value"
      auto-load="false" id="dReleaseStatus" store-type="simple"> 
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
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdKnowledgexforms_model_construct_done(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="firstFolderFullID,firstFolderName,secondFolderName"
      src="" auto-load="true" id="dTemp" style=";" store-type="simple"> 
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
    <xui:view auto-load="true" id="vFolderTree"> 
      <xhtml:div style="border:1px solid #99bbe8;;width:100%;height:100%" data="dFolder"
        id="grdFolder" appearance="tree" onRowExpand="grdFolderRowExpand" component="/UI/system/components/grid.xbl.xml#grid"
        delay="true" onShowNodeImg="grdFolderShowNodeImg" onAfterIndexChanged="grdFolderAfterIndexChanged"> 
        <column label="名称" ref="fName" type="tree" width="120"/>  
        <column label="栏目路径" ref="folderFullID"/> 
      </xhtml:div>  
      <xui:layout style="height:100%;width:100%"> 
        <place control="grdFolder"/> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge"
        data="dKnowledge"> 
        <item name="refresh-item"/>  
        <item name="filter-item" id="barItem1"/>  
        <item name="filter-pattern-item" id="barItem2"/>  
        <item name="next-page-item"/>  
        <item name="all-page-item"/>  
        <item name="separator"/>  
        <item> 
          <xforms:trigger id="trgPublish"> 
            <xforms:label>发布知识</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
						relaseKnowledge();
					]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
         <item name="separator"/>  
        <item> 
          <xforms:trigger id="trgStopPublish"> 
            <xforms:label>取消发布</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[
						cancelRelaseKnowledge();
					]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
         <item name="separator"/>  
      </xui:bar> 
    </xhtml:div>   
    <xui:view auto-load="true" id="vFilterBar"> 
      <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"
        id="extDateFilter1" filter-data="dKnowledge" filter-date-relation1="fReleaseTime"/>  
      <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#gridFilter" all-selected-label="'全部'"
        id="gdfRelaseStatus" filter-data="dKnowledge" filter-relation="fReleaseStatus"
        multi-select="true" default-value="'0,1'" default-label="'未发布,已发布'"> 
        <xforms:label ref="label"/>  
        <xforms:value ref="value"/>  
        <xforms:itemset data="dReleaseStatus" auto-load-data="true"> 
          <xforms:column ref="label"/>  
          <xforms:column ref="value" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"
        id="smartFilter" filter-data="dKnowledge" filter-relations="fFolderName,fTitle,fDocNumber,fWriter"/>  
      <xforms:trigger id="trigger1" appearance="image" src="/UI/OA/common/images/search.png"> 
        <xforms:label id="xuiLabel1">trigger</xforms:label> 
      </xforms:trigger>  
      <layout style="height:100%;position:relative;width:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;top:9px;left:2px;"> 
          <xhtml:font size="2" id="default1">发布时间</xhtml:font> 
        </xhtml:label>  
        <place control="extDateFilter1" style="position:absolute;top:3px;left:60px;width:90px;"/>  
        <xhtml:label style="position:absolute;width:26px;height:11px;top:9px;left:170px;"> 
          <xhtml:font size="2">状态</xhtml:font> 
        </xhtml:label>  
        <place control="gdfRelaseStatus" style="position:absolute;height:20px;top:3px;left:201px;width:80px;"/>  
        <xhtml:label style="position:absolute;position:absolute;height:11px;width:55px;top:9px;left:301px;"> 
          <xhtml:font size="2">模糊查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;top:3px;width:85px;left:361px;"/>  
        <xui:place control="trigger1" id="controlPlace2" style="position:absolute;width:33px;top:3px;left:466px;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vKnowledge"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" style="border:1px solid #99bbe8;"
        id="grdKnowledge" data="dKnowledge" delay="false"> 
        <column label="" ref="recNo" show-index="true"/>  
        <column ref="fReleaseStatusName" label="状态 " width="60" type="ro"/>  
        <!--<column ref="fIsNeedApprove" width="60"
					label="审批发布" type="ch" align="center" />-->  
        <column ref="fTitle" label="标题" width="300" type="html" onRender="hyperlink2Knowledge"/>  
        <xui:column id="gridColumn2" ref="fFolderFullName" label="栏目" type="ro" width="150"/>  
        <xui:column id="gridColumn1" ref="fKeyword" label="主题词" type="ro" width="100"/>  
        <column ref="fDocNumber" label="文号" type="ro" width="100"/>  
        <column ref="fWriter" label="作者" type="ro" width="60"/>  
        <column ref="fReleaseDeptName" label="发布部门" type="ro" width="100"/>  
        <column ref="fReleasePsnName" label="发布人" type="ro" width="60"/>  
        <column ref="fReleaseTime" label="发布时间" width="120" type="dateTime"/>  
        <column ref="fCreateDeptName" label="创建部门" width="100" type="ro"/>  
        <column ref="fCreateTime" label="创建时间" width="120" type="dateTime"/>  
        <column ref="fCreatePsnName" label="创建人" width="60" type="ro"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdKnowledge" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table width="100%" height="100%" border="0" cellspacing="0" style="table-layout: fixed;"
        component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td width="200px" height="100%"> 
            <place control="vFolderTree"/> 
          </xhtml:td>  
          <xhtml:td width="2px"/>  
          <xhtml:td valign="top"> 
            <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;"
              component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="35px"> 
                <xhtml:td width="300px"> 
                  <place control="tbrKnowledge"/> 
                </xhtml:td>  
              </xhtml:tr>  
              <xhtml:tr height="35px"> 
                <xhtml:td > 
                  <place control="vFilterBar"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td valign="top" > 
                  <place control="vKnowledge"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

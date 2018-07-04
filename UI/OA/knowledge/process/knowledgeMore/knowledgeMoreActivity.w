<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="knowledgeMoreActivity.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/> 
  </xui:resource>  
  <xforms:model id="mdKnowledge" style="top:62px;left:12px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge" relations="fTitle,fKeyword,fDocNumber,fImportant,fImportantName,fWriter,fFolderID,fFolderName,fFolderFullID,fFolderFullName,fRightsText,fIsNeedApprove,fContentType,fContentTypeName,fTemplateID,fTemplateName,fLinkURL,fContentURL,fIsTop,fTopBeginTime,fTopEndTime,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fReleaseOgnID,fReleaseOgnName,fReleaseDeptID,fReleaseDeptName,fReleasePsnID,fReleasePsnName,fReleasePsnFID,fReleasePsnFName,fReleaseTime,fReleaseStatus,fReleaseStatusName,fApproverID,fApproverName,fApproveTime,fBizState,fBizStateName,fIsDisplayOnPortal,fIsInheritRights,fOtherFolders,fBizID,fBizType,fBizTypeName,fReaderCount,fRepliesCount,version,fGZPsnIDs"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKnowledgeAction"/> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdKnowledgexforms_model_construct_done();</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vToolbar"> 
      <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
        <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="dKnowledge"> 
          <item name="refresh-item"/>  
          <item name="next-page-item"/>  
          <item name="all-page-item"/> 
        </xui:bar> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <xhtml:table style="width:100%;height:100%;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
          <xhtml:tr> 
            <xhtml:td width="90px"> 
              <place control="tbrKnowledge" style="width:100%;height:100%;"/> 
            </xhtml:td>  
            <xhtml:td> 
              <xhtml:table width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                <xhtml:tr> 
                  <xhtml:td align="left" style="width:1px;" ></xhtml:td>  
                  <xhtml:td width="70px" align="left"> 
                    <xhtml:label> 
                      <xhtml:font size="2">　发布时间</xhtml:font> 
                    </xhtml:label> 
                  </xhtml:td>  
                  <xhtml:td width="100px" align="left"> 
                    <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" id="extDateFilter1" filter-data="dKnowledge" filter-date-relation1="fReleaseTime"/> 
                  </xhtml:td>  
                  <xhtml:td width="40px" align="left"> 
                    <xhtml:label> 
                      <xhtml:font size="2">　查询</xhtml:font> 
                    </xhtml:label> 
                  </xhtml:td>  
                  <xhtml:td width="200px" align="left"> 
                    <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dKnowledge" filter-relations="OA_KM_Knowledge.fFolderName,fTitle,fDocNumber,fWriter"/> 
                  </xhtml:td>  
                  <xhtml:td align="left"/> 
                </xhtml:tr> 
              </xhtml:table> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vListKnowledge"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdKnowledge" data="dKnowledge"> 
        <column label="" ref="recNo" show-index="true"/>  
        <column ref="fTitle" label="标题" width="280" type="html" onRender="hyperlink2Knowledge"/>  
        <column ref="fDocNumber" label="文号" type="ro" width="120"/>  
        <column ref="fWriter" label="作者" type="ro" width="60"/>  
        <column ref="fCreateDeptName" label="发布部门" type="ro" width="100"/>  
        <column ref="fCreatePsnName" label="发布人" type="ro" width="60"/>  
        <column ref="fCreateTime" label="发布时间" width="120" type="dateTime"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <place control="grdKnowledge" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="35px"> 
          <xhtml:td valign="top"> 
            <place control="vToolbar"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td valign="top"> 
            <place control="vListKnowledge"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

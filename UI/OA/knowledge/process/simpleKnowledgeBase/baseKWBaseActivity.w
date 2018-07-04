<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="simpleKnowledgeBase.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="baseKWBaseActivity.js"/> 
  </resource>  
  <xforms:model id="mdKnowledge" style="top:204px;left:272px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge" order-by="fReleaseTime:desc" relations="fTitle,fKeyword,fDocNumber,fImportant,fImportantName,fWriter,fFolderID,fFolderName,fFolderFullID,fFolderFullName,fRightsText,fIsNeedApprove,fContentType,fContentTypeName,fTemplateID,fTemplateName,fLinkURL,fContentURL,fIsTop,fTopBeginTime,fTopEndTime,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fReleaseOgnID,fReleaseOgnName,fReleaseDeptID,fReleaseDeptName,fReleasePsnID,fReleasePsnName,fReleasePsnFID,fReleasePsnFName,fReleaseTime,fReleaseStatus,fReleaseStatusName,fApproverID,fApproverName,fApproveTime,fBizState,fBizStateName,fIsDisplayOnPortal,fIsInheritRights,fOtherFolders,fBizID,fBizType,fBizTypeName,fReaderCount,fRepliesCount,version,fGZPsnIDs"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKnowledgeAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" auto-load="true" columns="fName,folderFullID" store-type="simple" id="dFolder"> 
      <rows xmlns="">  
        <row id="public"> 
          <cell id="folderName">知识中心</cell>  
          <cell id="folderFullID">public</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdKnowledgexforms_model_construct_done(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="viewBtn" src="" auto-load="true" id="dTemp" style=";" store-type="simple"> 
      <rows xmlns="" id="default2">  
        <row id="default3"> 
          <cell id="default4"/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="viewBtn" relevant="not(data('dFolder')/folderFullID !='public/CAC30D1948444CA6A7C67944ADD33BB9' and data('dFolder')/folderFullID !='public/FEC00EDC58314A25B259CDAF0AA02F35'  and  data('dFolder')/folderFullID !='public/DC46C5572BEA4DB89E3735A62E65C42C'  and   data('dFolder')/folderFullID !='public/43D739D43F314FA8A0F6EAD0C4B0CB03'  and   data('dFolder')/folderFullID !='public/90DF4A181EC94444B552395935A0A877'   and data('dFolder')/folderFullID !='public/8A1E96ECD6BB43CF86A4E39399FF61F9'  and  data('dFolder')/folderFullID !='public/F1A72C31716344EC8EF693C7E1FFC8C3'  and  data('dFolder')/folderFullID !='public/89741D792970483A8B506A190468D5CB'  and data('dFolder')/folderFullID !='public/00690512DB3A49B7B63D1A41F68A2D91'  and  data('dFolder')/folderFullID !='public/028DA41187764A888CA1CCD37EB53BB6'  and  data('dFolder')/folderFullID !='public/D685F5423F2D410A8C67D900688D10E3'  and data('dFolder')/folderFullID !='public/D1C9EE24B8794804944AA93A816D6F6B'  and  data('dFolder')/folderFullID !='public/AB0C10BAFE7F45C79702FA2E7894BED1' and data('dFolder')/folderFullID !='public/AF17A2B468F04C6C8BBB6E1890732592'  and data('dFolder')/folderFullID !='public/02F26315555D4B7194CD564B47BACD42')"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vFolderTree"> 
      <xhtml:div style="border:1px solid #99bbe8;;width:100%;height:100%" data="dFolder" id="grdFolder" appearance="tree" onRowExpand="grdFolderRowExpand" component="/UI/system/components/grid.xbl.xml#grid" delay="true" onShowNodeImg="grdFolderShowNodeImg" onAfterIndexChanged="grdFolderAfterIndexChanged"> 
        <column label="名称" ref="fName" type="tree" width="120"/>  
        <column label="栏目路径" ref="folderFullID"/> 
      </xhtml:div>  
      <xui:layout style="height:100%;width:100%"> 
        <place control="grdFolder"/> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge" data="dKnowledge"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="next-page-item" id="barItem12"/>  
        <item name="all-page-item" id="barItem13"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vKnowledge"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" style="border:1px solid #99bbe8;" id="grdKnowledge" data="dKnowledge" delay="false"> 
        <column label="" ref="recNo" show-index="true"/>  
        <column ref="fTitle" label="标题" width="300" type="html" onRender="hyperlink2Knowledge"/>  
        <xui:column id="gridColumn1" ref="fKeyword" label="关键字" type="ed" width="132"/>  
        <column ref="fDocNumber" label="文号" type="ro" id="DocNum" width="150"/>  
        <column ref="fWriter" label="作者" type="ro" id="DocAuthor" width="60"/>  
        <column ref="fReleaseDeptName" label="发布部门" type="ro" width="100"/>  
        <column ref="fReleasePsnName" label="发布人" type="ro" width="60"/>  
        <column ref="fReleaseTime" label="发布时间" width="120" type="dateTime"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdKnowledge" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vFilter"> 
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dKnowledge" filter-relations="fTitle,fDocNumber,fWriter"/>  
      <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" id="extDateFilter1" filter-data="dKnowledge" filter-date-relation1="fReleaseTime"/>  
      <layout style="height:100%;position:relative;width:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;left:-2px;top:9px;"> 
          <xhtml:font size="2" id="default1">发布时间</xhtml:font> 
        </xhtml:label>  
        <place control="extDateFilter1" style="position:absolute;left:53px;top:4px;width:70px;"/>  
        <xhtml:label style="position:absolute;position:absolute;width:26px;top:9px;left:129px;"> 
          <xhtml:font size="2">查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;top:4px;left:159px;width:110px;"/>  
        <xhtml:input style="position:absolute;position:absolute;width:21px;top:4px;left:280px;" id="displaySubChb" type="checkbox" onclick="javascript:displayKnowledge()"/>  
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;top:9px;left:305px;"> 
          <xhtml:font size="2">显示下级</xhtml:font> 
        </xhtml:label>  
        <xui:place control="trgView" id="controlPlace2" style="position:absolute;top:3px;left:365px;width:85px;"/> 
      </layout>  
      <xforms:trigger id="trgView" ref="data('dTemp')/viewBtn"> 
        <xforms:label id="xuiLabel1">切换显示方式</xforms:label>  
        <xforms:action id="action2" ev:event="DOMActivate"> 
          <xforms:script id="xformsScript2">trgViewClick(event)</xforms:script> 
        </xforms:action> 
      </xforms:trigger> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table width="100%" height="100%" border="0" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td width="150px"> 
            <place control="vFolderTree"/> 
          </xhtml:td> 
          <xhtml:td width="3px"></xhtml:td> 
          <xhtml:td valign="top"> 
            <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="35px"> 
                <xhtml:td valign="top"> 
                  <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr> 
                      <xhtml:td width="110px"> 
                        <place control="tbrKnowledge"/> 
                      </xhtml:td>  
                      <xhtml:td valign="top"> 
                        <place control="vFilter"/> 
                      </xhtml:td> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td valign="top"> 
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

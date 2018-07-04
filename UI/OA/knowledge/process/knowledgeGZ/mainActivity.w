<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="mainActivity.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/> 
  </xui:resource>  
  <xforms:model id="mdKnowledge" style="top:204px;left:272px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge" order-by="fReleaseTime:desc" relations="fTitle,fKeyword,fDocNumber,fImportant,fImportantName,fWriter,fFolderID,fFolderName,fFolderFullID,fFolderFullName,fRightsText,fIsNeedApprove,fContentType,fContentTypeName,fTemplateID,fTemplateName,fLinkURL,fContentURL,fIsTop,fTopBeginTime,fTopEndTime,fCreateOgnID,fCreateOgnName,fCreateDeptID,fCreateDeptName,fCreatePsnID,fCreatePsnName,fCreatePsnFID,fCreatePsnFName,fCreateTime,fReleaseOgnID,fReleaseOgnName,fReleaseDeptID,fReleaseDeptName,fReleasePsnID,fReleasePsnName,fReleasePsnFID,fReleasePsnFName,fReleaseTime,fReleaseStatus,fReleaseStatusName,fApproverID,fApproverName,fApproveTime,fBizState,fBizStateName,fIsDisplayOnPortal,fIsInheritRights,fOtherFolders,fBizID,fBizType,fBizTypeName,fReaderCount,fRepliesCount,version,fGZPsnIDs"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKnowledgeAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" auto-load="true" columns="fName,folderFullID" store-type="simple" id="dFolder"> 
      <rows xmlns="">  
        <row id="public"> 
          <cell>知识中心</cell>  
          <cell>public</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdKnowledgexforms_model_construct_done(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="addBtn,cancelBtn" src="" auto-load="true" id="dBtn" style=";" store-type="simple"> 
      <rule id="dataRule1" column="addBtn"/>  
      <rule id="dataRule2" column="cancelBtn"/>  
      <rows xmlns="" id="default6">  
        <row id="default7"> 
          <cell id="default8"/>  
          <cell id="default9"/> 
        </row> 
      </rows> 
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
        <item name="separator"/>  
        <item id="customBarItem2"> 
          <xforms:trigger id="trgCancel" style="width:60px" ref="data('dBtn')/cancelBtn"> 
            <xforms:label id="xuiLabel4">取消关注</xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript3">knowledgeBaseActivity.trgCancelClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator"/>  
        <item id="customBarItem3"> 
          <xforms:trigger id="trgZSK" style="width:140px"> 
            <xforms:label id="xuiLabel7">进入知识中心增加关注</xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript2">mainActivity.trgZSKClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator"/>  
        <item name="next-page-item" id="barItem1"/>  
        <item name="separator"/>  
        <item name="all-page-item" id="barItem2"/> 
      </xui:bar> 
  
    </xhtml:div> 
     <xui:view auto-load="true" id="vKnowledge"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" style="border:1px solid #99bbe8;" id="grdKnowledge" data="dKnowledge" delay="false"> 
        <column label="序号" ref="recNo" show-index="true" width="30"/>  
        <column ref="fTitle" label="标题" width="300" type="html" onRender="hyperlink2Knowledge"/>  
        <column ref="fDocNumber" label="文号" type="ro" width="150"/>  
        <column ref="fWriter" label="作者" type="ro" width="60"/>  
        <column ref="fReleaseDeptName" label="发布部门" type="ro" width="100"/>  
        <column ref="fReleasePsnName" label="发布人" type="ro" width="60"/>  
        <column ref="fReleaseTime" label="发布时间" width="120" type="dateTime"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdKnowledge" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vFilter"> 
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dKnowledge" filter-relations="OA_KM_Knowledge.fFolderName,OA_KM_Knowledge.fTitle,OA_KM_Knowledge.fDocNumber,OA_KM_Knowledge.fWriter"/>  
      <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" id="extDateFilter1" filter-data="dKnowledge" filter-date-relation1="fReleaseTime"/>  
      <layout style="position:relative;width:100%;height:100%;" type="absolute"> 
        <xhtml:input style="position:absolute;position:absolute;left:2px;width:21px;top:3px;" id="displaySubChb" type="checkbox" onclick="javascript:displayKnowledge()" checked="true"/>  
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;top:8px;left:28px;"> 
          <xhtml:font size="2">显示下级</xhtml:font> 
        </xhtml:label>  
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;top:8px;left:100px;"> 
          <xhtml:font size="2" id="default1">发布时间</xhtml:font> 
        </xhtml:label>  
        <place control="extDateFilter1" style="position:absolute;top:3px;width:70px;left:160px;"/>  
        <xhtml:label style="position:absolute;position:absolute;width:55px;top:8px;height:11px;left:250px;"> 
          <xhtml:font size="2">模糊查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;top:3px;width:110px;left:310px;"/>  
        <xui:place control="trigger1" id="controlPlace2" style="position:absolute;width:33px;top:3px;left:425px;"/> 
      </layout>  
      <xforms:trigger id="trigger1" appearance="image" src="/UI/OA/common/images/search.png"> 
        <xforms:label id="xuiLabel1">trigger</xforms:label> 
      </xforms:trigger> 
    </xui:view>  
    <!--  
    <xui:view auto-load="true" id="vFilter"> 
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"
        id="smartFilter" filter-data="dKnowledge" filter-relations="OA_KM_Knowledge.fFolderName,OA_KM_Knowledge.fTitle,OA_KM_Knowledge.fDocNumber,OA_KM_Knowledge.fWriter"/>  
      <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"
        id="extDateFilter1" filter-data="dKnowledge" filter-date-relation1="fReleaseTime"/>  
      <layout style="height:100%;position:relative;width:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;left:-2px;top:9px;"> 
          <xhtml:font size="2" id="default1">发布时间</xhtml:font> 
        </xhtml:label>  
        <place control="extDateFilter1" style="position:absolute;left:53px;top:4px;width:70px;"/>  
        <xhtml:label style="position:absolute;position:absolute;width:55px;top:9px;height:11px;left:125px;"> 
          <xhtml:font size="2">模糊查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;top:3px;width:110px;left:182px;"/>  
        <xhtml:input style="position:absolute;position:absolute;width:21px;top:3px;left:330px;"
          id="displaySubChb" type="checkbox" onclick="javascript:displayKnowledge()"/>  
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;top:8px;left:354px;"> 
          <xhtml:font size="2">显示下级</xhtml:font> 
        </xhtml:label>  
        <xui:place control="trigger1" id="controlPlace2" style="position:absolute;width:33px;top:2px;left:300px;"/> 
      </layout>  
      <xforms:trigger id="trigger1" appearance="image" src="/UI/OA/common/images/search.png"> 
        <xforms:label id="xuiLabel1">trigger</xforms:label> 
      </xforms:trigger> 
    </xui:view>  
    -->  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table width="100%" height="100%" border="0" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td width="200px"> 
            <place control="vFolderTree"/> 
          </xhtml:td>  
          <xhtml:td valign="top"> 
            <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="35px"> 
                <xhtml:td valign="top"> 
                  <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr> 
                      <xhtml:td width="270px"> 
                        <place control="tbrKnowledge" style="width:100%;height:100%;"/> 
                      </xhtml:td> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr height="35px"> 
                <xhtml:td valign="top"> 
                  <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr> 
                      <xhtml:td valign="top"> 
                        <place control="vFilter" style="width:100%;height:100%;"/> 
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

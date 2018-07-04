<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="knowledgeBaseActivity.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/> 
  </xui:resource>  
  <xforms:model id="mdKnowledge" style="top:204px;left:272px;"> 
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
    <xforms:action id="action1" ev:event="xforms-model-construct-done"> 
      <xforms:script id="xformsScript1">mdKnowledgexforms_model_construct_done(event)</xforms:script> 
    </xforms:action>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="addBtn,cancelBtn,checkBox,firstFolderFullID,firstFolderName,secondFolderName"
      src="" auto-load="true" id="dTemp" style=";" store-type="simple"> 
      <rule id="dataRule1" column="addBtn"/>  
      <rule id="dataRule2" column="cancelBtn"/>  
      <rule id="dataRule3" column="checkBox"/>  
      <rows xmlns="" id="default12">  
        <row id="default13"> 
          <cell id="default14"/>  
          <cell id="default15"/>  
          <cell id="default16">1</cell> 
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
        <place control="grdFolder" style="height:100%;width:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge"
        data="dKnowledge"> 
        <item name="refresh-item" id="barItem4"/>  
        <item name="separator"/>  
        <item name="filter-item" id="barItem1"/>  
        <item name="filter-pattern-item" id="barItem2"/>  
        <item name="next-page-item" id="barItem12"/>  
        <item name="separator"/>  
        <item name="all-page-item" id="barItem13"/>  
        <item name="separator" id="separatorItem2" style=";"/>  
        <item id="customBarItem1"> 
          <xforms:trigger id="trgAdd" style="width:60px" ref="data('dTemp')/addBtn"> 
            <xforms:label id="xuiLabel3">增加关注</xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript2">knowledgeBaseActivity.trgAddClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator" id="separatorItem1"/>  
        <item id="customBarItem2"> 
          <xforms:trigger id="trgCancel" style="width:60px" ref="data('dTemp')/cancelBtn"> 
            <xforms:label id="xuiLabel4">取消关注</xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript3">knowledgeBaseActivity.trgCancelClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vKnowledge"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" style="border:1px solid #99bbe8;"
        id="grdKnowledge" data="dKnowledge" delay="false"> 
        <column label="序号" ref="recNo" show-index="true" width="30"/>  
        <!--<column label="关注状态" ref="fGZPsnIDs1" width="60" type="html" onRender="grdKnowledgeRecStateRender"/>-->  
        <column id="gridColumn1" ref="fGZPsnIDs" label="关注状态" width="60" type="html"
          onRender="grdKnowledgeRecStateRender"/>  
        <column ref="fTitle" label="标题" width="330" type="html" onRender="hyperlink2Knowledge"/>  
        <xui:column id="gridColumn2" ref="fKeyword" label="主题词" type="ed" width="202"/>  
        <column ref="fDocNumber" label="文号" type="ro" width="150"/>  
        <column ref="fWriter" label="作者" type="ro" width="60"/>  
        <xui:column id="gridColumn3" ref="fFolderFullName" label="栏目路径" type="ro"
          width="200"/>  
        <column ref="fReleaseDeptName" label="发布部门" type="ro" width="100"/>  
        <column ref="fReleasePsnName" label="发布人" type="ro" width="60"/>  
        <column ref="fReleaseTime" label="发布时间" width="120" type="dateTime"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;" id="layout1"> 
        <place control="grdKnowledge" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vFilter"> 
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter"
        id="smartFilter" filter-data="dKnowledge" filter-relations="OA_KM_Knowledge.fFolderName,OA_KM_Knowledge.fTitle,OA_KM_Knowledge.fDocNumber,OA_KM_Knowledge.fWriter,OA_KM_Knowledge.fFolderName"/>  
      <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter"
        id="extDateFilter1" filter-data="dKnowledge" filter-date-relation1="fReleaseTime"/>  
      <layout style="position:relative;width:100%;height:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;top:9px;left:2px;"> 
          <xhtml:font size="2" id="default1">发布时间</xhtml:font> 
        </xhtml:label>  
        <place control="extDateFilter1" style="position:absolute;top:3px;width:90px;left:62px;"/>  
        <xhtml:label style="position:absolute;position:absolute;width:55px;top:9px;height:11px;left:172px;"> 
          <xhtml:font size="2">模糊查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;top:3px;left:237px;width:120px;"/>  
        <xui:place control="trigger1" id="controlPlace2" style="position:absolute;width:33px;top:3px;left:377px;"/> 
      </layout>  
      <xforms:trigger id="trigger1" appearance="image" src="/UI/OA/common/images/search.png"> 
        <xforms:label id="xuiLabel1">trigger</xforms:label> 
      </xforms:trigger> 
    </xui:view>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:table width="100%" height="100%" border="0" cellspacing="0" style="table-layout: fixed;height:100%;width:100%;"
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
                <xhtml:td valign="top" style="width:310px;"> 
                  <place control="tbrKnowledge"/> 
                </xhtml:td>  
                <xhtml:td style="width:100%;" valign="top"> 
                  <xui:place control="vFilter1" id="controlPlace6"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr height="35px"> 
                <xhtml:td valign="top" colspan="2"> 
                  <xhtml:table border="0" width="100%" height="100%" cellspacing="0"
                    style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr> 
                      <xhtml:td height="100%" style="width:100%;"> 
                        <place control="vFilter"/> 
                      </xhtml:td> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td valign="top" colspan="2"> 
                  <place control="vKnowledge"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout>  
    <xui:view auto-load="true" id="vFilter1" class="xui-container"> 
      <layout id="layout2" type="absolute" style="position:relative;height:100%;width:100%;"> 
        <xhtml:label id="label1" style="position:absolute;position:absolute;position:absolute;position:absolute;width:110px;left:24px;top:9px;"
          class="xui-label"> 
          <xhtml:font size="2" id="default22">显示下级目录</xhtml:font> 
        </xhtml:label>  
        <xhtml:input id="displaySubChb" type="checkbox" onclick="javascript:displayKnowledge()"
          style="position:absolute;position:absolute;position:absolute;left:0px;top:5px;width:20px;"/>  
        <xhtml:label id="label2" class="xui-label" style="position:absolute;position:absolute;width:100px;top:9px;left:134px;"> 
          <xhtml:font size="2" id="default23">显示已关注信息</xhtml:font> 
        </xhtml:label>  
        <xhtml:input id="iptCheckBox" type="checkbox" onclick="javascript:displayKnowledge()"
          style="position:absolute;position:absolute;top:5px;width:20px;left:110px;"/> 
      </layout> 
    </xui:view> 
  </xui:view> 
</xui:window>

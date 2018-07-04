<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OA_KM_Folder" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">栏目</label>  
    <has-relation relation="fName" default-value-expr="'新增栏目'"/>  
    <has-relation relation="fDescription"/>  
    <has-relation relation="fParent" data-type="OA_KM_Folder"/>  
    <has-relation relation="fFullID"/>  
    <has-relation relation="fFullName"/>  
    <has-relation relation="fIsNeedApprove" default-value-expr="0"/>  
    <has-relation relation="fManagerNames"/>  
    <has-relation relation="fIsInheritApprove" default-value-expr="1"/>  
    <has-relation relation="fIsInheritManager" default-value-expr="1"/>  
    <has-relation relation="fIsInheritRights" default-value-expr="1"/>  
    <has-relation relation="fSequence"/>  
    <has-relation relation="fUseStatus" data-type="Integer" default-value-expr="0"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()" data-type="DateTime"/>  
    <has-relation relation="fRebuildApprove" default-value-expr="0"/>  
    <has-relation relation="fRebuildManager" default-value-expr="0"/>  
    <has-relation relation="fRebuildRight" default-value-expr="0"/>
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <relation name="fFullID" data-type="String" single-valued="true"> 
    <label language="zh_CN">ID路径</label> 
  </relation>  
  <relation name="fFullName" data-type="String" single-valued="true"> 
    <label language="zh_CN">name路径</label> 
  </relation>  
  <relation name="fIsNeedApprove" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否需要审批</label> 
  </relation>  
  <relation name="fManagerNames" data-type="String" single-valued="true"> 
    <label language="zh_CN">管理员名称</label> 
  </relation>  
  <relation name="fIsInheritApprove" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否继承父项审批设置</label> 
  </relation>  
  <relation name="fIsInheritManager" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否继承父项管理员设置</label> 
  </relation>  
  <relation name="fIsInheritRights" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否继承父项权限设置</label> 
  </relation>  
  <relation name="fFolderID" data-type="OA_KM_Folder" single-valued="true"> 
    <label language="zh_CN">栏目ID</label> 
  </relation>  
  <relation name="fFolderName" data-type="String" single-valued="true"> 
    <label language="zh_CN">栏目名称</label> 
  </relation>  
  <relation name="fFolderFullID" data-type="String" single-valued="true"> 
    <label language="zh_CN">栏目ID路径</label> 
  </relation>  
  <relation name="fFolderFullName" data-type="String" single-valued="true"> 
    <label language="zh_CN">栏目Name路径</label> 
  </relation>  
  <relation name="fManagerID" data-type="String" single-valued="true"> 
    <label language="zh_CN">管理员ID</label> 
  </relation>  
  <relation name="fManagerName" data-type="String" single-valued="true"> 
    <label language="zh_CN">管理员</label> 
  </relation>  
  <relation name="fManagerURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">管理员路径</label> 
  </relation>  
  <relation name="fKWKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">知识类型</label> 
  </relation>  
  <relation name="fKWName" data-type="String" single-valued="true"> 
    <label language="zh_CN">知识名称</label> 
  </relation>  
  <relation name="fKWFullID" data-type="String" single-valued="true"> 
    <label language="zh_CN">知识ID路径</label> 
  </relation>  
  <relation name="fKWFullName" data-type="String" single-valued="true"> 
    <label language="zh_CN">知识Name路径</label> 
  </relation>  
  <relation name="fCanCreateKW" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">创建知识权限</label> 
  </relation>  
  <relation name="fCanReadKW" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">阅读知识权限</label> 
  </relation>  
  <relation name="fCanReleaseKW" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">发布知识权限</label> 
  </relation>  
  <relation name="fCanCreateComment" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">发表评论权限</label> 
  </relation>  
  <relation name="fCanReadComment" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">阅读评论权限</label> 
  </relation>  
  <relation name="fCanScore" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">评分权限</label> 
  </relation>  
  <relation name="fKeyword" data-type="String" single-valued="true"> 
    <label language="zh_CN">关键字</label> 
  </relation>  
  <relation name="fDocNumber" data-type="String" single-valued="true"> 
    <label language="zh_CN">文号</label> 
  </relation>  
  <relation name="fImportant" data-type="String" single-valued="true"> 
    <label language="zh_CN">重要度</label> 
  </relation>  
  <relation name="fAuthor" data-type="String" single-valued="true"> 
    <label language="zh_CN">作者</label> 
  </relation>  
  <relation name="fRightsText" data-type="String" single-valued="true"> 
    <label language="zh_CN">权限显示文本</label> 
  </relation>  
  <relation name="fTemplateID" data-type="OA_KM_Template" single-valued="true"> 
    <label language="zh_CN">内容模板ID</label> 
  </relation>  
  <relation name="fTemplateCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">内容模板编码</label> 
  </relation>  
  <relation name="fTemplateName" data-type="String" single-valued="true"> 
    <label language="zh_CN">内容模板名称</label> 
  </relation>  
  <relation name="fLinkURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">引用链接</label> 
  </relation>  
  <relation name="fContentURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">静态页面URL</label> 
  </relation>  
  <relation name="fApproverID" data-type="String" single-valued="true"> 
    <label language="zh_CN">审核人ID</label> 
  </relation>  
  <relation name="fApproverName" data-type="String" single-valued="true"> 
    <label language="zh_CN">审核人名称</label> 
  </relation>  
  <relation name="fApproveTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">审核时间</label> 
  </relation>  
  <relation name="fReleaseStatus" data-type="String" single-valued="true"> 
    <label language="zh_CN">发布状态</label> 
  </relation>  
  <relation name="fReleaseStatusName" data-type="String" single-valued="true"> 
    <label language="zh_CN">发布状态名称</label> 
  </relation>  
  <relation name="fFolderKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">文件夹类型</label> 
  </relation>  
  <concept name="OA_KM_FDManager" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">栏目管理员</label>  
    <has-relation relation="fFolderID" data-type="String"/>  
    <has-relation relation="fManagerID" data-type="String"/>  
    <has-relation relation="fManagerName"/>  
    <has-relation relation="fIsInherit" default-value-expr="0"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/> 
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <relation name="fIsInherit" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">继承</label> 
  </relation>  
  <concept name="OA_KM_Rights" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">栏目知识权限</label>  
    <has-relation relation="fKWKind"/>  
    <has-relation relation="fFolderID" data-type="OA_KM_Folder"/>  
    <has-relation relation="fFolderName" data-type="String"/>  
    <has-relation relation="fKWID" data-type="String"/>  
    <has-relation relation="fKWName" data-type="String"/>  
    <has-relation relation="fKWFullID"/>  
    <has-relation relation="fKWFullName"/>  
    <has-relation relation="fOrgKind"/>  
    <has-relation relation="fOrgID"/>  
    <has-relation relation="fOrgName"/>  
    <has-relation relation="fOrgFID"/>  
    <has-relation relation="fOrgFName"/>  
    <has-relation relation="fCanCreateKW" default-value-expr="1"/>  
    <has-relation relation="fCanReadKW" default-value-expr="1"/>  
    <has-relation relation="fCanReleaseKW" default-value-expr="1"/>  
    <has-relation relation="fCanCreateComment" default-value-expr="1"/>  
    <has-relation relation="fCanReadComment" default-value-expr="1"/>  
    <has-relation relation="fCanScore" default-value-expr="1"/>  
    <has-relation relation="fCanReadRecord" default-value-expr="1"/>  
    <has-relation relation="fIsInherit" default-value-expr="1"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/> 
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <relation name="fCanReadRecord" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">查看历史</label> 
  </relation>  
  <concept name="OA_KM_Knowledge" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">知识</label>  
    <has-relation relation="fTitle"/>  
    <has-relation relation="fKeyword"/>  
    <has-relation relation="fDocNumber"/>  
    <has-relation relation="fImportant" default-value-expr="'low'"/>  
    <has-relation relation="fImportantName" default-value-expr="'低'"/>  
    <has-relation relation="fWriter"/>  
    <has-relation relation="fFolderID" data-type="String"/>  
    <has-relation relation="fFolderName"/>  
    <has-relation relation="fFolderFullID"/>  
    <has-relation relation="fFolderFullName"/>  
    <has-relation relation="fRightsText"/>  
    <has-relation relation="fIsNeedApprove"/>  
    <has-relation relation="fContentType"/>  
    <has-relation relation="fContentTypeName"/>  
    <has-relation relation="fTemplateID" data-type="String"/>  
    <has-relation relation="fTemplateName"/>  
    <has-relation relation="fTemplateFileName" data-type="String">
      <label language="zh_CN">内容模板文件名称</label> 
    </has-relation> 
    <has-relation relation="fLinkURL"/>  
    <has-relation relation="fContent"/>  
    <has-relation relation="fContentURL"/>  
    <has-relation relation="fIsTop" default-value-expr="0"/>  
    <has-relation relation="fTopBeginTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fTopEndTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()"/>  
    <has-relation relation="fCreatePsnFID"/>  
    <has-relation relation="fCreatePsnFName"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fReleaseOgnID"/>  
    <has-relation relation="fReleaseOgnName"/>  
    <has-relation relation="fReleaseDeptID"/>  
    <has-relation relation="fReleaseDeptName"/>  
    <has-relation relation="fReleasePsnID"/>  
    <has-relation relation="fReleasePsnName"/>  
    <has-relation relation="fReleasePsnFID"/>  
    <has-relation relation="fReleasePsnFName"/>  
    <has-relation relation="fReleaseTime"/>  
    <has-relation relation="fReleaseStatus" default-value-expr="'0'"/>  
    <has-relation relation="fReleaseStatusName" default-value-expr="'未发布'"/>  
    <has-relation relation="fApproverID"/>  
    <has-relation relation="fApproverName"/>  
    <has-relation relation="fApproveTime"/>  
    <has-relation relation="fBizState"/>  
    <has-relation relation="fBizStateName"/>  
    <has-relation relation="fIsDisplayOnPortal" default-value-expr="0"/>  
    <has-relation relation="fSmallPic" data-type="String"/>  
    <has-relation relation="fIsInheritRights" default-value-expr="1"/>  
    <has-relation relation="fOtherFolders"/>  
    <has-relation relation="fAttachment" data-type="String"/>  
    <has-relation relation="fDocument" data-type="String"/>  
    <has-relation relation="fBizID"/>  
    <has-relation relation="fBizType"/>  
    <has-relation relation="fBizTypeName"/>  
    <has-relation relation="fReaderCount" default-value-expr="0"/>  
    <has-relation relation="fRepliesCount" default-value-expr="0"/>  
    <has-relation relation="fPicture1"/>  
    <has-relation relation="fPicture2"/>  
    <has-relation relation="fPicture3"/>  
    <has-relation relation="fPicture4"/>  
    <has-relation relation="fPicture5"/>  
    <has-relation relation="fCurrentActivities"/>  
    <has-relation relation="fCurrentExecutors"/>
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>  
  <has-relation relation="fGZPsnIDs" data-type="Text"><label language="zh_CN">关注人IDs</label>
</has-relation>
</concept>  
  <relation name="fPicture1" data-type="String" single-valued="true"> 
    <label language="zh_CN">照片1</label> 
  </relation>  
  <relation name="fPicture2" data-type="String" single-valued="true"> 
    <label language="zh_CN">照片2</label> 
  </relation>  
  <relation name="fPicture3" data-type="String" single-valued="true"> 
    <label language="zh_CN">照片3</label> 
  </relation>  
  <relation name="fPicture4" data-type="String" single-valued="true"> 
    <label language="zh_CN">照片4</label> 
  </relation>  
  <relation name="fPicture5" data-type="String" single-valued="true"> 
    <label language="zh_CN">照片5</label> 
  </relation>  
  <relation name="fWriter" data-type="String" single-valued="true"> 
    <label language="zh_CN">作者</label> 
  </relation>  
  <relation name="fContentType" data-type="String" single-valued="true"> 
    <label language="zh_CN">正文类型</label> 
  </relation>  
  <relation name="fContentTypeName" data-type="String" single-valued="true"> 
    <label language="zh_CN">正文类型显示</label> 
  </relation>  
  <relation name="fIsTop" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否置顶</label> 
  </relation>  
  <relation name="fTopBeginTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">置顶开始时间</label> 
  </relation>  
  <relation name="fTopEndTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">置顶结束时间</label> 
  </relation>  
  <relation name="fIsDisplayOnPortal" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否显示在Portal</label> 
  </relation>  
  <concept name="OA_KM_KWFolder" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">知识栏目关系</label>  
    <has-relation relation="fKWID" data-type="String"/>  
    <has-relation relation="fFolderKind"/>  
    <has-relation relation="fFolderID" data-type="String"/>  
    <has-relation relation="fKWFullID"/>  
    <has-relation relation="fKWFullName"/>
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <concept name="OA_KM_KWPictures" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">图片</label>  
    <has-relation relation="fKWID" data-type="OA_KM_Knowledge"/>  
    <has-relation relation="fSequence"/>  
    <has-relation relation="fName"/>  
    <has-relation relation="fPicInfo"/> 
  </concept>  
  <relation name="fFileName" data-type="String" single-valued="true"> 
    <label language="zh_CN">文件名</label> 
  </relation>  
  <relation name="fPictureCount" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">图片个数</label> 
  </relation>  
  <concept name="OA_KM_Template" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">HTML模板表</label>  
    <has-relation relation="fName"/>  
    <has-relation relation="fFileName"/>  
    <has-relation relation="fPictureCount"/>  
    <has-relation relation="fUseStatus"/>  
    <has-relation relation="fUseStatusName"/> 
  </concept>  
  <relation name="fKWID" data-type="OA_KM_Knowledge" single-valued="true"> 
    <label language="zh_CN">知识ID</label> 
  </relation>  
  <relation name="fSmallPic" data-type="String" single-valued="true"> 
    <label language="zh_CN">缩略图</label> 
  </relation>  
  <relation name="fPicInfo" data-type="String" single-valued="true"> 
    <label language="zh_CN">图片信息</label> 
  </relation>  
  <relation name="fOtherFolders" data-type="String" single-valued="true"> 
    <label language="zh_CN">同时发布栏目</label> 
  </relation>  
  <relation name="fAttachment" data-type="String" single-valued="true"> 
    <label language="zh_CN">附件</label> 
  </relation>  
  <relation name="fDocument" data-type="String" single-valued="true"> 
    <label language="zh_CN">上传文档</label> 
  </relation>  
  <relation name="fBizID" data-type="String" single-valued="true"> 
    <label language="zh_CN">接口ID</label> 
  </relation>  
  <relation name="fImportantName" data-type="String" single-valued="true"> 
    <label language="zh_CN">重要度名称</label> 
  </relation>  
  <concept name="OA_KM_READERS" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">阅文</label>  
    <has-relation relation="fReaderID"/>  
    <has-relation relation="fKWID" data-type="String"/>  
    <has-relation relation="fReaderName"/>  
    <has-relation relation="fReadTime"/>  
    <has-relation relation="fScore" data-type="Float"/> 
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <relation name="fReaderID" data-type="String" single-valued="true"> 
    <label language="zh_CN">阅文人ID</label> 
  </relation>  
  <relation name="fReaderName" data-type="String" single-valued="true"> 
    <label language="zh_CN">阅文人姓名</label> 
  </relation>  
  <relation name="fReadTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">阅文时间</label> 
  </relation>  
  <relation name="fScore" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">评分</label> 
  </relation>  
  <concept name="OA_KM_REPLIES" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">评论</label>  
    <has-relation relation="fReplierID"/>  
    <has-relation relation="fReplierName"/>  
    <has-relation relation="fReplyTime"/>  
    <has-relation relation="fKWID"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="fContent"/> 
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <relation name="fReplierID" data-type="String" single-valued="true"> 
    <label language="zh_CN">回复人ID</label> 
  </relation>  
  <relation name="fReplierName" data-type="String" single-valued="true"> 
    <label language="zh_CN">回复人姓名</label> 
  </relation>  
  <relation name="fReplyTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">回复时间</label> 
  </relation>  
  <relation name="fReaderCount" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">已阅人数</label> 
  </relation>  
  <relation name="fRepliesCount" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">回复人数</label> 
  </relation>  
  <relation name="fBizType" data-type="String" single-valued="true"> 
    <label language="zh_CN">接口类型</label> 
  </relation>  
  <relation name="fBizTypeName" data-type="String" single-valued="true"> 
    <label language="zh_CN">接口类型名称</label> 
  </relation>  
  <relation name="fRebuildRight" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">重构权限标记</label> 
  </relation>  
  <relation name="fRebuildManager" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">重构管理员标记</label> 
  </relation>  
  <relation name="fRebuildApprove" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">重构审批标记</label> 
  </relation>  
  <concept name="OA_KM_KWExecute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_KM_Knowledge"/>  
    <has-relation relation="fTaskID"/>  
    <has-relation relation="fActivityFName"/>  
    <has-relation relation="fActivityLabel"/>  
    <has-relation relation="fOpinion"/>  
    <has-relation relation="fVerdict"/>  
    <has-relation relation="fState"/>  
    <has-relation relation="fStateName"/>  
    <has-relation relation="fCreateOgnID"/>  
    <has-relation relation="fCreateOgnName"/>  
    <has-relation relation="fCreateDeptID"/>  
    <has-relation relation="fCreateDeptName"/>  
    <has-relation relation="fCreatePosID"/>  
    <has-relation relation="fCreatePosName"/>  
    <has-relation relation="fCreatePsnID"/>  
    <has-relation relation="fCreatePsnName"/>  
    <has-relation relation="fCreatePsnFID"/>  
    <has-relation relation="fCreatePsnFName"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID"/>  
    <has-relation relation="fUpdatePsnName"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">知识发布(处理表)</label> 
  </concept>  
  <concept name="OA_KM_BatchKW" default-value-expr="guid()"> 
    <has-relation relation="fFolderID"/>  
    <has-relation relation="fFolderName"/>  
    <has-relation relation="fFolderFullID"/>  
    <has-relation relation="fFolderFullName"/>  
    <has-relation relation="fIsNeedApprove"/>  
    <has-relation relation="fReleaseStatus"/>  
    <has-relation relation="fReleaseStatusName"/>  
    <has-relation relation="fDocument"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">知识批量发布</label> 
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <relation name="fTemplateFileName" data-type="String">
    <label language="zh_CN">内容模板文件名称</label> 
  </relation> 
<relation name="fGZPsnIDs" data-type="Text"><label language="zh_CN">关注人</label>
</relation>
<concept name="OA_KM_KnowledgeGZPsn" default-value-expr="guid()"><has-relation relation="version" default-value-expr="0"><label language="zh_CN">版本</label>
</has-relation>
<label language="zh_CN">知识关注人</label>
<has-relation relation="fMasterID" data-type="OA_KM_Knowledge" size="36"><label language="zh_CN">主数据ID</label>
</has-relation>
<has-relation relation="fCreatePsnID" size="64"><label language="zh_CN">提交人员ID</label>
</has-relation>
<has-relation relation="fCreatePsnName" size="36"><label language="zh_CN">提交人员</label>
</has-relation>
<has-relation relation="fCreatePsnFID" size="512"><label language="zh_CN">提交人员FullID</label>
</has-relation>
<has-relation relation="fCreatePsnFName" size="1024"><label language="zh_CN">提交人员FullName</label>
</has-relation>
<has-relation relation="fCreateTime"><label language="zh_CN">提交时间</label>
</has-relation>
</concept>
<concept name="V_OA_KW_FirstFolder" default-value-expr="guid()">
<label language="zh_CN">一级栏目</label>
<has-relation relation="fName"><label language="zh_CN">名称</label>
</has-relation><has-relation relation="fFullID"><label language="zh_CN">ID路径</label>
</has-relation>
<has-relation relation="fFullName"><label language="zh_CN">name路径</label>
</has-relation>

</concept>
<concept name="V_OA_KW_SecondFolder" default-value-expr="guid()">
<label language="zh_CN">二级栏目</label>
<has-relation relation="fName"><label language="zh_CN">名称</label>
</has-relation>
</concept>
</model>

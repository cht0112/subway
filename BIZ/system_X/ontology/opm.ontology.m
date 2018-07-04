<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="sCatalog" single-valued="true"> 
    <label language="zh_CN">分类</label> 
  </relation>  
  <relation name="sSafeLevelID" single-valued="true"> 
    <label language="zh_CN">密级</label> 
  </relation>  
  <relation name="sCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">编码</label> 
  </relation>  
  <relation name="sFCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">全路径编码</label> 
  </relation>  
  <relation name="sCountry" data-type="String" single-valued="true"> 
    <label language="zh_CN">国家</label> 
  </relation>  
  <relation name="sProvince" data-type="String" single-valued="true"> 
    <label language="zh_CN">省</label> 
  </relation>  
  <relation name="sCity" data-type="String" single-valued="true"> 
    <label language="zh_CN">市</label> 
  </relation>  
  <relation name="sValidState" data-type="Integer" default-value-expr="1" single-valued="true"> 
    <label language="zh_CN">可用状态</label> 
  </relation>  
  <relation name="sEnglishName" data-type="String" single-valued="true"> 
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="sPersonID" data-type="SA_OPPerson" single-valued="true"> 
    <label language="zh_CN">人员</label> 
  </relation>  
  <relation name="sOrgID" data-type="SA_OPOrg" single-valued="true"> 
    <label language="zh_CN">组织</label> 
  </relation>  
  <relation name="sNodeKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">节点类型</label> 
  </relation>  
  <relation name="sOrgFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">组织全路径ID</label> 
  </relation>  
  <relation name="sFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">全路径ID</label> 
  </relation>  
  <relation name="sFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">全路径名</label> 
  </relation>  
  <relation name="sOrgName" data-type="String" single-valued="true"> 
    <label language="zh_CN">组织名</label> 
  </relation>  
  <relation name="sOrgFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">组织全路径名</label> 
  </relation>  
  <relation name="sActions" data-type="String" single-valued="true"> 
    <label language="zh_CN">动作权限</label> 
  </relation>  
  <relation name="sSemanticDP" data-type="String" single-valued="true"> 
    <label language="zh_CN">语义数据权限</label> 
  </relation>  
  <relation name="sActivityFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">活动全路径名</label> 
  </relation>  
  <relation name="sActionsNames" data-type="String" single-valued="true"> 
    <label language="zh_CN">动作名称</label> 
  </relation>  
  <relation name="sHasPermission" data-type="SA_OPPermission" inverse-of="sPermissionRoleID"
    single-valued="false"> 
    <label language="zh_CN">拥有权限</label> 
  </relation>  
  <relation name="sPermissionRoleID" data-type="SA_OPRole" single-valued="true"
    inverse-of="sHasPermission"> 
    <label language="zh_CN">所属角色</label> 
  </relation>  
  <relation name="sPermissionKind" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">权限类型</label> 
  </relation>  
  <relation name="sRoleKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">角色类型</label> 
  </relation>  
  <relation name="sParentRole" data-type="SA_OPRole" inverse-of="sChildRole" single-valued="false"> 
    <label language="zh_CN">父角色</label> 
  </relation>  
  <relation name="sChildRole" data-type="SA_OPRole" inverse-of="sParentRole" single-valued="false"> 
    <label language="zh_CN">子角色</label> 
  </relation>  
  <relation name="sPhoto" data-type="Blob" single-valued="true"> 
    <label language="zh_CN">照片</label> 
  </relation>  
  <relation name="sSex" data-type="String" single-valued="true"> 
    <label language="zh_CN">性别</label> 
  </relation>  
  <relation name="sBirthday" data-type="Date" single-valued="true"> 
    <label language="zh_CN">出生日期</label> 
  </relation>  
  <relation name="sJoinDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">参加工作日期</label> 
  </relation>  
  <relation name="sHomePlace" data-type="String" single-valued="true"> 
    <label language="zh_CN">出生地</label> 
  </relation>  
  <relation name="sDegree" data-type="String" single-valued="true"> 
    <label language="zh_CN">学历</label> 
  </relation>  
  <relation name="sGraduateSchool" data-type="String" single-valued="true"> 
    <label language="zh_CN">毕业院校</label> 
  </relation>  
  <relation name="sSpeciality" data-type="String" single-valued="true"> 
    <label language="zh_CN">专业</label> 
  </relation>  
  <relation name="sSchoolLength" data-type="String" single-valued="true"> 
    <label language="zh_CN">学年制</label> 
  </relation>  
  <relation name="sTitle" data-type="String" single-valued="true"> 
    <label language="zh_CN">职称</label> 
  </relation>  
  <relation name="sMarriage" data-type="String" single-valued="true"> 
    <label language="zh_CN">婚姻状况</label> 
  </relation>  
  <relation name="sCardNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">证件号码</label> 
  </relation>  
  <relation name="sCardKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">证件类型</label> 
  </relation>  
  <relation name="sFamilyAddress" data-type="String" single-valued="true"> 
    <label language="zh_CN">家庭住址</label> 
  </relation>  
  <relation name="sMsn" data-type="String" single-valued="true"> 
    <label language="zh_CN">MSN</label> 
  </relation>  
  <relation name="sQQ" data-type="String" single-valued="true"> 
    <label language="zh_CN">QQ</label> 
  </relation>  
  <relation name="sMail" data-type="String" single-valued="true"> 
    <label language="zh_CN">电子邮件</label> 
  </relation>  
  <relation name="sMobilePhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">移动电话</label> 
  </relation>  
  <relation name="sFamilyPhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">家庭电话</label> 
  </relation>  
  <relation name="sOfficePhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">办公电话</label> 
  </relation>  
  <relation name="sPassword" data-type="String" single-valued="true"> 
    <label language="zh_CN">密码(MD5)</label> 
  </relation>  
  <relation name="sMainOrgID" data-type="SA_OPOrg" single-valued="true"> 
    <label language="zh_CN">所属部门</label> 
  </relation>  
  <relation name="sLoginName" data-type="String" single-valued="true"> 
    <label language="zh_CN">登录名</label> 
  </relation>  
  <relation name="sNumb" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">数字编号</label> 
  </relation>  
  <relation name="sLevel" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">级别</label> 
  </relation>  
  <relation name="sPhone" data-type="String" single-valued="true"> 
    <label language="zh_CN">电话</label> 
  </relation>  
  <relation name="sFax" data-type="String" single-valued="true"> 
    <label language="zh_CN">传真</label> 
  </relation>  
  <relation name="sAddress" data-type="String" single-valued="true"> 
    <label language="zh_CN">地址</label> 
  </relation>  
  <relation name="sZip" data-type="String" single-valued="true"> 
    <label language="zh_CN">邮编</label> 
  </relation>  
  <relation name="sLongName" data-type="String" single-valued="true"> 
    <label language="zh_CN">长名称</label> 
  </relation>  
  <relation name="sOrgKindID" data-type="SA_OPOrgKind" single-valued="true"> 
    <label language="zh_CN">组织类型</label> 
  </relation>  
  <relation name="sAgentID" data-type="SA_OPPerson" single-valued="true"> 
    <label language="zh_CN">代理人</label> 
  </relation>  
  <relation name="sAuthorizedTo" data-type="SA_OPAuthorize" single-valued="false"
    inverse-of="sAuthorizeRoleID"> 
    <label language="zh_CN">授权给</label> 
  </relation>  
  <relation name="sRoleID" data-type="SA_OPRole" single-valued="true"> 
    <label language="zh_CN">角色</label> 
  </relation>  
  <relation name="sAuthorizeRoleID" data-type="SA_OPRole" single-valued="true"> 
    <label language="zh_CN">授权角色</label> 
  </relation>  
  <relation name="sParentRolesNames" data-type="String" single-valued="true"> 
    <label language="zh_CN">父角色名称列表</label> 
  </relation>  
  <relation name="sParentRoleID" data-type="SA_OPRole" single-valued="true"> 
    <label language="zh_CN">父角色</label> 
  </relation>  
  <!-- 机构类型 -->  
  <concept name="SA_OPOrgKind"> 
    <has-relation relation="sName"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">机构类型</label> 
  </concept>  
  <!-- 组织 -->  
  <concept name="SA_OPOrg" default-value-expr="guid()"> 
    <has-relation relation="sName"/>  
    <has-relation relation="sCode"/>  
    <has-relation relation="sLongName"/>  
    <has-relation relation="sFName"/>  
    <has-relation relation="sFCode"/>  
    <has-relation relation="sFID"/>  
    <has-relation relation="sOrgKindID" default-value-expr="'dpt'"/>  
    <has-relation relation="sSequence" data-type="String"/>  
    <has-relation relation="sValidState"/>  
    <has-relation relation="sParent" data-type="SA_OPOrg"/>  
    <has-relation relation="sChildren" single-valued="false" data-type="SA_OPOrg"/>  
    <has-relation relation="sLevel"/>  
    <has-relation relation="sPhone"/>  
    <has-relation relation="sFax"/>  
    <has-relation relation="sAddress"/>  
    <has-relation relation="sZip"/>  
    <has-relation relation="sDescription"/>  
    <has-relation relation="sPersonID"/>  
    <has-relation relation="sNodeKind"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">组织机构</label> 
  </concept>  
  <!-- 人员 -->  
  <concept name="SA_OPPerson" default-value-expr="guid()"> 
    <has-relation relation="sName"/>  
    <has-relation relation="sCode"/>  
    <has-relation relation="sIDCard"/>  
    <has-relation relation="sNumb" default-value-expr="nextSeq('SA_OPPerson.sNumb')"/>  
    <has-relation relation="sLoginName"/>  
    <has-relation relation="sPassword" default-value-expr="defaultEncryptPassword()"/>  
    <has-relation relation="sPasswordTimeLimit" default-value-expr="90" />
    <has-relation relation="sPasswordModifyTime" default-value-expr="currentDateTime()" />
    <has-relation relation="sMainOrgID" default-value-expr="currentOrgID()"/>  
    <has-relation relation="sSafeLevelID" data-type="SA_OPSafeLevel"/>  
    <has-relation relation="sSequence" data-type="Integer" default-value-expr="0"/>  
    <has-relation relation="sValidState"/>  
    <has-relation relation="sDescription"/>  
    <has-relation relation="sPhoto" data-type="Blob"/>  
    <has-relation relation="sSex"/>  
    <has-relation relation="sBirthday"/>  
    <has-relation relation="sJoinDate"/>  
    <has-relation relation="sHomePlace"/>  
    <has-relation relation="sCountry"/>  
    <has-relation relation="sProvince"/>  
    <has-relation relation="sCity"/>  
    <has-relation relation="sDegree"/>  
    <has-relation relation="sGraduateSchool"/>  
    <has-relation relation="sSpeciality"/>  
    <has-relation relation="sSchoolLength"/>  
    <has-relation relation="sTitle"/>  
    <has-relation relation="sMarriage"/>  
    <has-relation relation="sCardNO"/>  
    <has-relation relation="sCardKind"/>  
    <has-relation relation="sFamilyAddress"/>  
    <has-relation relation="sZip"/>  
    <has-relation relation="sMsn"/>  
    <has-relation relation="sQQ"/>  
    <has-relation relation="sMail"/>  
    <has-relation relation="sMobilePhone"/>  
    <has-relation relation="sFamilyPhone"/>  
    <has-relation relation="sOfficePhone"/>  
    <has-relation relation="sEnglishName"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">人员</label> 
  </concept>  
  <!-- 代理 -->  
  <concept name="SA_OPAgent" default-value-expr="guid()"> 
    <has-relation relation="sOrgFID"> 
      <label language="zh_CN">委托人</label> 
    </has-relation>  
    <has-relation relation="sOrgFName"> 
      <label language="zh_CN">委托人</label> 
    </has-relation>  
    <has-relation relation="sAgentID"/>  
    <has-relation relation="sStartTime"/>  
    <has-relation relation="sFinishTime"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">代理</label>  
    <has-relation relation="sProcess" data-type="Text">
      <label language="zh_CN">过程</label> 
    </has-relation>  
    <has-relation relation="sValidState">
      <label language="zh_CN">可用状态</label> 
    </has-relation>  
    <has-relation relation="sCreatorID">
      <label language="zh_CN">提交者ID</label> 
    </has-relation>  
    <has-relation relation="sCreatorName">
      <label language="zh_CN">提交者</label> 
    </has-relation>  
    <has-relation relation="sCreateTime">
      <label language="zh_CN">创建时间</label> 
    </has-relation>  
    <has-relation relation="sCanTranAgent" data-type="Integer" default-value-expr="0">
      <label language="zh_CN">是否允许把代理工作转交给其他人</label> 
    </has-relation> 
  </concept>  
  <!-- 父角色 -->  
  <concept name="SA_OPParentRole" default-value-expr="guid()"> 
    <has-relation relation="version"/>  
    <label language="zh_CN">父角色</label>  
    <has-relation relation="sRoleID"/>  
    <has-relation relation="sParentRoleID"/> 
  </concept>  
  <!-- 授权 -->  
  <concept name="SA_OPAuthorize" default-value-expr="guid()"> 
    <has-relation relation="sOrgID" />  
    <has-relation relation="sOrgFID"/>  
    <has-relation relation="sOrgName"/>  
    <has-relation relation="sOrgFName"/>  
    <has-relation relation="sAuthorizeRoleID"/>  
    <has-relation relation="sDescription"/>  
    <has-relation relation="sCreatorFID"> 
      <label language="zh_CN">授权人</label> 
    </has-relation>  
    <has-relation relation="sCreatorFName"> 
      <label language="zh_CN">授权人</label> 
    </has-relation>  
    <has-relation relation="sCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">授权</label> 
  </concept>  
  <!-- 权限 -->  
  <concept name="SA_OPPermission" default-value-expr="guid()"> 
    <has-relation relation="sPermissionRoleID"/>  
    <has-relation relation="sProcess"> 
      <label language="zh_CN">过程</label> 
    </has-relation>  
    <has-relation relation="sActivityFName"/>  
    <has-relation relation="sActivity"> 
      <label language="zh_CN">活动</label> 
    </has-relation>  
    <has-relation relation="sActionsNames"/>  
    <has-relation relation="sActions" data-type="Text"/>  
    <has-relation relation="sSemanticDP"/>  
    <has-relation relation="sPermissionKind"/>  
    <has-relation relation="sDescription"/>  
    <has-relation relation="sSequence" data-type="Integer"/>  
    <has-relation relation="sValidState"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">权限</label> 
  </concept>  
  <!-- 角色 -->  
  <concept name="SA_OPRole" default-value-expr="guid()"> 
    <has-relation relation="sName"/>  
    <has-relation relation="sCode"/>  
    <has-relation relation="sCatalog" data-type="String"/>  
    <has-relation relation="sRoleKind"/>  
    <has-relation relation="sDescription"/>  
    <has-relation relation="sSequence" data-type="Integer"/>  
    <has-relation relation="sValidState"/>  
    <has-relation relation="sParentRole"/>  
    <has-relation relation="sParentRolesNames"/>  
    <has-relation relation="sChildRole"/>  
    <has-relation relation="sHasPermission"/>  
    <has-relation relation="sAuthorizedTo"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">角色</label> 
  <has-relation relation="fZW" data-type="String"></has-relation>
<has-relation relation="fGW" data-type="String"></has-relation>
</concept>  
  <!-- 密级 -->  
  <concept name="SA_OPSafeLevel"> 
    <has-relation relation="sName"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">密级</label> 
  </concept>  
  <concept name="SA_OPTempPermission" default-value-expr="guid()">
    <has-relation relation="version" default-value-expr="0">
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">临时权限</label>  
    <has-relation relation="sProcess">
      <label language="zh_CN">过程</label> 
    </has-relation>  
    <has-relation relation="sActivity">
      <label language="zh_CN">环节</label> 
    </has-relation>  
    <has-relation relation="sCreatorFID">
      <label language="zh_CN">提交者FID</label> 
    </has-relation>  
    <has-relation relation="sCreatorFName">
      <label language="zh_CN">提交者</label> 
    </has-relation>  
    <has-relation relation="sCreateTime">
      <label language="zh_CN">创建时间</label> 
    </has-relation> 
  </concept>  
  <relation name="sIDCard" data-type="String">
    <label language="zh_CN">身份证号</label> 
  </relation>  
  <relation name="sCanTranAgent" data-type="Integer">
    <label language="zh_CN">是否允许把代理工作转交给其他人</label> 
  </relation> 
  
  <!-- 资源控制 -->
  <concept name="SA_ResourceControl">
  	<label language="zh_CN">资源控制</label>
  	<has-relation relation="sName"/>
  	<has-relation relation="sOrgID" required="true"/>
  	<has-relation relation="sOrgName"/>
  	<has-relation relation="sOrgFID" required="true"/>
  	<has-relation relation="sOrgFName"/>
  	
  	
  <has-relation relation="sCreatorFID" required="true"><label language="zh_CN">提交者FID</label>
</has-relation>
<has-relation relation="sCreatorID" default-value-expr="currentPersonID()" required="true"><label language="zh_CN">提交者ID</label>
</has-relation>
<has-relation relation="sCreatorFName"><label language="zh_CN">提交者</label>
</has-relation>
<has-relation relation="sCreatorName" default-value-expr="currentPersonMemberNameWithAgent()"><label language="zh_CN">提交者</label>
</has-relation>
<has-relation relation="sCreateTime" default-value-expr="currentDateTime()"><label language="zh_CN">创建时间</label>
</has-relation>
<has-relation relation="version" required="true"><label language="zh_CN">版本</label>
</has-relation>
<has-relation relation="sResourceID" data-type="String" required="true"><label language="zh_CN">资源标识</label>
</has-relation>
<has-relation relation="sTypeID" data-type="String"><label language="zh_CN">资源类型ID</label>
</has-relation>
<has-relation relation="sTypeName"><label language="zh_CN">资源类型</label>
</has-relation>
<has-relation relation="sDescription"><label language="zh_CN">描述</label>
</has-relation>
<has-relation relation="sProcess"><label language="zh_CN">过程</label>
</has-relation>
<has-relation relation="sProcessName"><label language="zh_CN">过程</label>
</has-relation>
<has-relation relation="sActivity"><label language="zh_CN">环节</label>
</has-relation>
<has-relation relation="sActivityName"><label language="zh_CN">环节</label>
</has-relation>
<has-relation relation="sAction"><label language="zh_CN">动作</label>
</has-relation>
<has-relation relation="sActionName" data-type="String"><label language="zh_CN">动作</label>
</has-relation>
</concept>
<relation name="sResourceID" data-type="String"><label language="zh_CN">资源标识</label>
</relation>
<relation name="sActionName" data-type="String"><label language="zh_CN">动作名称</label>
</relation>
<relation name="sPasswordTimeLimit" data-type="Integer"><label language="zh_CN">密码时限（天）</label>
</relation>
<relation name="sPasswordModifyTime" data-type="DateTime"><label language="zh_CN">密码修改时间</label>
</relation>
<relation name="fZW" data-type="String"><label language="zh_CN">职位</label>
</relation>
<relation name="fGW" data-type="String"><label language="zh_CN">岗位</label>
</relation>
<concept name="SA_OPCustomGroup" default-value-expr="guid()"><has-relation relation="version" default-value-expr="0"><label language="zh_CN">版本</label>
</has-relation>
<label language="zh_CN">自定义组织分组</label>
<has-relation relation="sName" single-valued="true" required="true" size="64"></has-relation>
<has-relation relation="sTypeID" data-type="String" size="32" required="true"><label language="zh_CN">类型ID</label>
</has-relation>
<has-relation relation="sTypeName" size="64" required="true"><label language="zh_CN">类型</label>
</has-relation>
<has-relation relation="sSequence"><label language="zh_CN">排序</label>
</has-relation>
<has-relation relation="sCreatorID" default-value-expr="currentPersonID()" size="32"></has-relation>
<has-relation relation="sCreatorName" default-value-expr="currentPersonName()" size="64"></has-relation>
<has-relation relation="sCreateTime" default-value-expr="currentDateTime()"></has-relation>

<has-relation relation="sResources" data-type="SA_ResourceControl" single-valued="false" inverse-of="sResourceID" whole-part="composition"><label language="zh_CN">资源（成员和范围）</label>
</has-relation>
</concept>
<relation name="sResources" data-type="String" single-valued="false"><label language="zh_CN">资源</label>
</relation>
</model>

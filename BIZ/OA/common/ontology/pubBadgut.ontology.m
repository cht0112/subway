<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OA_BG_CostCenter" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">成本中心</label>  
    <has-relation relation="fCostCenterName"/>  
    <has-relation relation="fCostCenterCode"/>  
    <has-relation relation="fAllAccount" default-value-expr="1"/>  
    <has-relation relation="fAttachDeptName"/>  
    <has-relation relation="fAttachDeptID"/>  
    <has-relation relation="fAttachDeptURL"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOrgID()"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOrgName()"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/> 
  </concept>  
  <relation name="fAllAccount" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">全部科目</label> 
  </relation>  
  <relation name="fAttachDeptName" data-type="String" single-valued="true"> 
    <label language="zh_CN">归属部门</label> 
  </relation>  
  <relation name="fAttachDeptID" data-type="String" single-valued="true"> 
    <label language="zh_CN">归属部门ID</label> 
  </relation>  
  <relation name="fAttachDeptURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">归属部门URL</label> 
  </relation>  
  <concept name="OA_BG_CostAccount" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">总账科目模板</label>  
    <has-relation relation="fCostCenterID"/>  
    <has-relation relation="fAccountID"/>  
    <has-relation relation="fAccountName"/>  
    <has-relation relation="fAccountCode"/> 
  </concept>  
  <concept name="OA_BG_Account" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">总账科目</label>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fDescription" size="512"/>  
    <has-relation relation="fSequence" data-type="String" size="10"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'" size="36"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'" size="64"/>  
    <has-relation relation="fParentCode" size="64"/>  
    <has-relation relation="fLevel"/>  
    <has-relation relation="fURL" size="512"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/> 
  </concept> 
</model>

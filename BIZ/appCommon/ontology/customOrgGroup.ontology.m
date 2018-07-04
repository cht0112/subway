<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="AP_CustomOrgGroup" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">组织机构分组</label>  
    <has-relation relation="fParent" data-type="AP_CustomOrgGroup"> 
      <label language="zh_CN">父</label> 
    </has-relation>
    <has-relation relation="fType" required="true">
      <label language="zh_CN">类型</label> 
    </has-relation>
    <has-relation relation="fName" required="true" default-value-expr="'新建分组'"> 
      <label language="zh_CN">分组</label> 
    </has-relation>  
    <has-relation relation="fCreatePsnID" default-value-expr="currentPersonID()" required="false"> 
      <label language="zh_CN">创建人</label> 
    </has-relation>  
    <has-relation relation="fCreatePsnName" default-value-expr="currentPersonName()" required="false"> 
      <label language="zh_CN">创建人</label> 
    </has-relation>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()" required="false"> 
      <label language="zh_CN">创建时间</label> 
    </has-relation>  
      
     
  <has-relation relation="fNodeKind"><label language="zh_CN">节点类型</label>
</has-relation>
</concept>  
  <concept name="AP_CustomOrgDetail" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">组织机构分组明细</label>  
    <has-relation relation="fMasterID" data-type="AP_CustomOrgGroup" required="true"> 
      <label language="zh_CN">主ID</label> 
    </has-relation>  
    <has-relation relation="fOrgID" required="true">
      <label language="zh_CN">组织</label> 
    </has-relation>  
    <has-relation relation="fOrgName" required="true">
      <label language="zh_CN">组织</label> 
    </has-relation> 
    <has-relation relation="fOrgFID" required="true"> 
      <label language="zh_CN">组织路径</label> 
    </has-relation>  
    <has-relation relation="fOrgFName" required="true"> 
      <label language="zh_CN">组织路径</label> 
    </has-relation>  
  <has-relation relation="fOrgKind" required="true"><label language="zh_CN">组织类型</label>
</has-relation>
<has-relation relation="fSequence"><label language="zh_CN">顺序</label>
</has-relation>
</concept>  
  <relation name="fCustomOrgGroupDetails" data-type="AP_CustomOrgDetail" single-valued="false"> 
    <label language="zh_CN">分组明细</label> 
  </relation>  
  <concept name="AP_CustomOrgRange" default-value-expr="guid()">
    <has-relation relation="version" default-value-expr="0">
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">组织机构分组应用范围</label>  
    <has-relation relation="fMasterID" data-type="AP_CustomOrgGroup" required="true">
      <label language="zh_CN">主ID</label> 
    </has-relation> 
  



<has-relation relation="fOrgID" required="true"><label language="zh_CN">组织</label>
</has-relation>
<has-relation relation="fOrgName" required="true"><label language="zh_CN">组织</label>
</has-relation>
<has-relation relation="fOrgFID" required="true"><label language="zh_CN">组织路径</label>
</has-relation>
<has-relation relation="fOrgFName" required="true"><label language="zh_CN">组织路径</label>
</has-relation>
<has-relation relation="fOrgKind" required="true"><label language="zh_CN">组织类型</label>
</has-relation>
</concept>  
  <relation name="fCustomOrgGroupRange" data-type="AP_CustomOrgRange" single-valued="false">
    <label language="zh_CN">分组应用范围</label> 
  </relation> 
</model>

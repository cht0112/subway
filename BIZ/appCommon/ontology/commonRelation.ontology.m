<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="fPersonID" data-type="String" single-valued="true" size="32"> 
    <label language="zh_CN">人员</label> 
  </relation>  
  <relation name="fPersonName" data-type="String" single-valued="true" size="64"> 
    <label language="zh_CN">人员</label> 
  </relation>  
  <relation name="fName" data-type="String" size="64"> 
    <label language="zh_CN">名称</label> 
  </relation>  
  <relation name="fCreateTime" data-type="DateTime"> 
    <label language="zh_CN">创建时间</label> 
  </relation>  
  <relation name="fOrgID" data-type="String" size="65">
    <label language="zh_CN">组织</label> 
  </relation>  
  <relation name="fOrgName" data-type="String" size="64">
    <label language="zh_CN">组织</label> 
  </relation> 
  <relation name="fOrgFID" data-type="String" size="512"> 
    <label language="zh_CN">组织路径</label> 
  </relation>  
  <relation name="fOrgFName" data-type="String" size="1024"> 
    <label language="zh_CN">组织路径</label> 
  </relation>  
  <relation name="fMasterID" data-type="String" size="32"> 
    <label language="zh_CN">主ID</label> 
  </relation>  
  <relation name="fCreatePsnID" data-type="String" size="32"> 
    <label language="zh_CN">创建人</label> 
  </relation>  
  <relation name="fCreatePsnName" data-type="String" size="64"> 
    <label language="zh_CN">创建人</label> 
  </relation>  
  <relation name="fParent" data-type="String" size="32">
    <label language="zh_CN">父</label> 
  </relation>  
  <relation name="fChildren" data-type="String" single-valued="false" inverse-of="fParent">
    <label language="zh_CN">子</label> 
  </relation>  
  <relation name="fType" data-type="String" size="32">
    <label language="zh_CN">类型</label> 
  </relation>  
<relation name="fOrgKind" data-type="String" size="32"><label language="zh_CN">组织类型</label>
</relation>
<relation name="fSequence" data-type="Integer"><label language="zh_CN">顺序</label>
</relation>
<relation name="fNodeKind" data-type="String" size="32"><label language="zh_CN">节点类型</label>
</relation>
</model>

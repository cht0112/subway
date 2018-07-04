<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OA_Pub_FirstKeyWord" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">首主题词</label>  
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
  <concept name="OA_Pub_SencondKeyWord" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">自选主题词</label>  
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
  <concept name="OA_Pub_EndKeyWord" default-value-expr="guid()">
    <has-relation relation="version" default-value-expr="0">
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">末主题词</label> 
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

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_PROJECT_MEMBER_INFO_VIEW" default-value-expr="guid()">
      
    <has-relation relation="project_info" size="100" required="true">
      <label language="zh_CN">成员信息</label> 
    </has-relation>  
    <has-relation relation="pROJECTMEMBERID" size="8" required="true"/>  
    <has-relation relation="aPPLICATION_NO" required="true"/>  
    <has-relation relation="oPERATORNAME" size="30" required="true"/>  
    <has-relation relation="pOSITIONID" data-type="Integer"/>  
    <has-relation relation="oCCUPYSTARTDATETIME"/>  
    <has-relation relation="OCCUPYENDDATETIME" data-type="Date"><label language="zh_CN">计划占用结束日期时间</label>
</has-relation>  
    <has-relation relation="pROJECTNAME" size="200"/>  
    <has-relation relation="tASKID" data-type="Integer"><label language="zh_CN">任务ID</label>
</has-relation>  
    <has-relation relation="taskname" size="200" data-type="String"><label language="zh_CN">任务名称</label>
</has-relation>  
    <has-relation relation="pOSITIONIDCNAME" size="100"/>  
    <has-relation relation="project_member_role"><label language="zh_CN">成员角色</label>
</has-relation>  
    <has-relation relation="project_id"/> 
  <label language="zh_CN">项目成员视图</label>
</concept>  
  <relation name="project_info" data-type="String">
    <label language="zh_CN">成员信息</label> 
  </relation>  
   
  <relation name="OCCUPYENDDATETIME" data-type="date">
  	<label language="zh_CN">计划占用结束日期时间</label>
  </relation>
  <relation name="taskname" data-type="String">
  	<label language="zh_CN">任务名称</label>
  </relation>
  <relation name="project_member_role" data-type="Integer">
  	<label language="zh_CN">成员角色</label>
  </relation>
</model>

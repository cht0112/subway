<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_PROJECT_MEMBER_INFO" default-value-expr="guid()">
    <label language="zh_CN">项目成员信息</label>  
      
    <has-relation relation="pROJECTMEMBERID" size="8" required="true">
      <label language="zh_CN">成员ID</label> 
    </has-relation>  
    <has-relation relation="pROJECTMEMBERROLE" size="10" required="true">
      <label language="zh_CN">成员项目角色</label> 
    </has-relation> 
  <has-relation relation="aPPLICATION_NO" data-type="Integer"></has-relation>
</concept>  
    
  <relation name="pROJECTMEMBERROLE" data-type="Decimal">
    <label language="zh_CN">成员项目角色</label> 
  </relation>  
  <relation name="pROJECTMEMBERID" data-type="String">
    <label language="zh_CN">成员ID</label> 
  </relation> 
<relation name="aPPLICATION_NO" data-type="Integer"><label language="zh_CN">申请序号</label>
</relation>
</model>

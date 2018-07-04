<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="ROLE_PRIVILEGE" default-value-expr="guid()">
    <label language="zh_CN">角色权限分配</label>  
    <has-relation relation="rOLEID" size="22" required="true">
      <label language="zh_CN">角色编号</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPE" size="3" required="true"/>  
    <has-relation relation="pRIVILEGEID" size="10" required="true">
      <label language="zh_CN">权限ID</label> 
    </has-relation> 
  </concept>  
  <relation name="pRIVILEGEID" data-type="Decimal">
    <label language="zh_CN">权限ID</label> 
  </relation> 
</model>

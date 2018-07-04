<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="ROLE_OPERATOR" default-value-expr="guid()">
    <label language="zh_CN">操作员角色分配</label>  
    <has-relation relation="oPERATORID" size="8" required="true">
      <label language="zh_CN">操作员编号</label> 
    </has-relation>  
    <has-relation relation="rOLEID" size="10" required="true">
      <label language="zh_CN">角色编号</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPE" size="3" required="true">
      <label language="zh_CN">管理类型</label> 
    </has-relation> 
  </concept>  
  <relation name="oPERATORID" data-type="String">
    <label language="zh_CN">操作员编号</label> 
  </relation>  
  <relation name="rOLEID" data-type="Decimal">
    <label language="zh_CN">角色编号</label> 
  </relation>  
  <relation name="mANAGEMENTTYPE" data-type="Decimal">
    <label language="zh_CN">管理类型</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="MANAGEMENT_TYPE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">管理类型</label>  
    <has-relation relation="mANAGEMENTTYPE" size="22" required="true"> 
      <label language="zh_CN">管理类型</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPECNAME" size="100" required="true"> 
      <label language="zh_CN">管理类型</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPEENAME" size="100"> 
      <label language="zh_CN">管理类型英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="mANAGEMENTTYPEENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="mANAGEMENTTYPECNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="mANAGEMENTTYPE" data-type="Integer"> 
    <label language="zh_CN">管理类型</label> 
  </relation> 
</model>

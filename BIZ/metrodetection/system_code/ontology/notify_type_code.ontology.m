<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="NOTIFY_TYPE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">通知类型</label>  
    <has-relation relation="nOTIFYTYPECNAME" size="100" required="true"> 
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="nOTIFYTYPEENAME" size="100"> 
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="nOTIFYTYPECNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="nOTIFYTYPEENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

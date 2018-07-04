<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="APPLICATION_TYPE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">申请类型</label>  
    <has-relation relation="aPPLICATIONTYPE" size="22" required="true"> 
      <label language="zh_CN">申请类型</label> 
    </has-relation>  
    <has-relation relation="aPPLICATIONTYPECNAME" size="100" required="true"> 
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="aPPLICATIONTYPEENAME" size="100"> 
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="aPPLICATIONTYPECNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="aPPLICATIONTYPEENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="aPPLICATIONTYPE" data-type="Integer"> 
    <label language="zh_CN">申请类型</label> 
  </relation> 
</model>

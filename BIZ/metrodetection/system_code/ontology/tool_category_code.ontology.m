<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TOOL_CATEGORY_CODE" default-value-expr="nextSeq('201309')+1000">
    <label language="zh_CN">工具分类</label>  
    <has-relation relation="tOOLCATEGORYCNAME" size="100" required="true">
      <label language="zh_CN">工具分类</label> 
    </has-relation>  
    <has-relation relation="tOOLCATEGORYENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
    <has-relation relation="nUMSCODE" size="64">
      <label language="zh_CN">编码</label> 
    </has-relation>
    <has-relation relation="version"  default-value-expr="0">
      <label language="zh_CN">版本</label> 
    </has-relation>
  </concept>  
  <relation name="tOOLCATEGORYCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="tOOLCATEGORYENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>
  <relation name="nUMSCODE" data-type="String">
    <label language="zh_CN">编码</label> 
  </relation> 
  <relation name="version" data-type="Integer">
    <label language="zh_CN">版本</label> 
  </relation> 
</model>

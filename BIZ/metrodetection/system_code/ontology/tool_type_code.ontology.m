<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TOOL_TYPE_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">工具名称</label>  
    <has-relation relation="tOOLTYPECNAME" size="100" required="true">
      <label language="zh_CN">工具名称</label> 
    </has-relation>  
    <has-relation relation="tOOLTYPEENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
    <has-relation relation="nUMSCODE" size="64">
      <label language="zh_CN">编码</label> 
    </has-relation>
    <has-relation relation="version"  default-value-expr="0">
      <label language="zh_CN">版本</label> 
    </has-relation>
    <has-relation relation="pARENTLEV"  default-value-expr="0">
      <label language="zh_CN">父级标识</label> 
    </has-relation>
  </concept>  
  <relation name="tOOLTYPECNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="tOOLTYPEENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation> 
  <relation name="nUMSCODE" data-type="String">
    <label language="zh_CN">编码</label> 
  </relation>
  <relation name="version" data-type="Integer">
    <label language="zh_CN">版本</label> 
  </relation>
  <relation name="pARENTLEV" data-type="Integer">
    <label language="zh_CN">父级标识</label> 
  </relation> 
</model>

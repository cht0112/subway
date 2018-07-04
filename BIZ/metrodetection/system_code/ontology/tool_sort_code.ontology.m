<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TOOL_SORT_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">工具类型</label>  
    <has-relation relation="tOOLSORTCNAME" size="100" required="true">
      <label language="zh_CN">工具类型</label> 
    </has-relation>  
    <has-relation relation="tOOLSORTENAME" size="100">
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
  <relation name="tOOLSORTENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="tOOLSORTCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
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

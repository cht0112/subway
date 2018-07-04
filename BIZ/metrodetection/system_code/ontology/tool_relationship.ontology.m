<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TOOL_RELATIONSHIP" default-value-expr="nextSeq('210')"> 
    <label language="zh_CN">工具分类映射</label>  
    <has-relation relation="tOOLCATEGORY" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">工具分类</label> 
    </has-relation>  
    <has-relation relation="tOOLSORT" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">工具类型</label> 
    </has-relation>  
    <has-relation relation="tOOLTYPE" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">工具名称</label> 
    </has-relation> 
  </concept>  
  <relation name="tOOLTYPE" data-type="Decimal"> 
    <label language="zh_CN">工具名称</label> 
  </relation>  
  <relation name="tOOLCATEGORY" data-type="Decimal"> 
    <label language="zh_CN">工具分类</label> 
  </relation>  
  <relation name="tOOLSORT" data-type="Decimal"> 
    <label language="zh_CN">工具类型</label> 
  </relation> 
</model>

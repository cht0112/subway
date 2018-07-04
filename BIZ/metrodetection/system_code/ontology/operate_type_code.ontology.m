<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OPERATE_TYPE_CODE" default-value-expr="guid()">
    <label language="zh_CN">操作类型编码</label>  
    <has-relation relation="oPERATETYPECNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="oPERATETYPEENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="oPERATETYPECNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="oPERATETYPEENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

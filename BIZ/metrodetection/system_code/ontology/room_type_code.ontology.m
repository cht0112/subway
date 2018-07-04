<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="ROOM_TYPE_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">房间类型信息</label>  
    <has-relation relation="rOOMTYPECNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="rOOMTYPEENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="rOOMTYPEENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="rOOMTYPECNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

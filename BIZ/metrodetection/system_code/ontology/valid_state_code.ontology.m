<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="VALID_STATE_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">(使用状态编码)</label>  
    <has-relation relation="vALIDSTATECNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="vALIDSTATEENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="vALIDSTATEENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="vALIDSTATECNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

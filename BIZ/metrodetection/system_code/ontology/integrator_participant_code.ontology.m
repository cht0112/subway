<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="INTEGRATOR_PARTICIPANT_CODE" default-value-expr="guid()">
    <label language="zh_CN">集成商编码</label>  
    <has-relation relation="pARTICIPANTIDCNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="pARTICIPANTIDENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="pARTICIPANTIDCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="pARTICIPANTIDENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

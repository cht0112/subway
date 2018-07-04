<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TIME_UNIT_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">时间单位类型定义</label>  
    <has-relation relation="tIMEUNITCNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="tIMEUNITENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="tIMEUNITENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="tIMEUNITCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

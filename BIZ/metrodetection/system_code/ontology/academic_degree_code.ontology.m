<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="ACADEMIC_DEGREE_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">学位编码</label>  
    <has-relation relation="dEGREEIDCNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="dEGREEIDENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="dEGREEIDENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="dEGREEIDCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

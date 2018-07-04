<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="EDUCATION_CODE" default-value-expr="nextSeq('20101010')
">
    <label language="zh_CN">学历编码</label>  
    <has-relation relation="eDUCATIONIDCNAME" size="100" required="true">
      <label language="zh_CN">学历</label> 
    </has-relation>  
    <has-relation relation="eDUCATIONIDENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="eDUCATIONIDENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="eDUCATIONIDCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="POLITICAL_AFFILIATION_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">政治面貌编码</label>  
    <has-relation relation="pOLITICALIDCNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="pOLITICALIDENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="pOLITICALIDENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="pOLITICALIDCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

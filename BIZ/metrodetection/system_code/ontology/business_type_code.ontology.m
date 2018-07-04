<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="BUSINESS_TYPE_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">业务类型定义</label>  
    <has-relation relation="bUSINESSIDCNAME" size="100" required="true">
      <label language="zh_CN">业务类型</label> 
    </has-relation>  
    <has-relation relation="bUSINESSIDENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="bUSINESSIDCNAME" data-type="String">
    <label language="zh_CN">业务类型</label> 
  </relation>  
  <relation name="bUSINESSIDENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DECTION_BASED_ON_ID_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">检测依据编码</label>  
    <has-relation relation="dECTIONBASEDONIDCNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="dECTIONBASEDONIDENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="dECTIONBASEDONIDENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="dECTIONBASEDONIDCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

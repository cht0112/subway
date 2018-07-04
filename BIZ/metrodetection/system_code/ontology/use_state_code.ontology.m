<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="USE_STATE_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">使用状态编码</label>  
    <has-relation relation="uSESTATECODECNAME" size="100" required="true">
      <label language="zh_CN">状态</label> 
    </has-relation>  
    <has-relation relation="uSESTATECODEENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="uSESTATECODECNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="uSESTATECODEENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

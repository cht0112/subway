<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="POSITION_TYPE_CODE" default-value-expr="nextSeq('20101010')+1000">
    <label language="zh_CN">岗位编码</label>  
    <has-relation relation="pOSITIONIDCNAME" size="100" required="true">
      <label language="zh_CN">岗位中文名称</label> 
    </has-relation>  
    <has-relation relation="pOSITIONIDENAME" size="100">
      <label language="zh_CN">岗位英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="pOSITIONIDCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="pOSITIONIDENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

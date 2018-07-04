<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="INDEX_ID_APPLY_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">指标应用信息</label>  
    <has-relation relation="iNDEXID" size="22" required="true"/>  
    <has-relation relation="aPPLYFOROBJECT" size="5" required="true"/>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true"/> 
  </concept> 
  <relation name="iNDEXID" data-type="Integer"> 
    <label language="zh_CN">指标ID</label> 
  </relation>
  <relation name="aPPLYFOROBJECT" data-type="Decimal"> 
    <label language="zh_CN">应用检测对象类型</label> 
  </relation>
  <relation name="aPPLYFORDEVICETYPE" data-type="Decimal"> 
    <label language="zh_CN">指标ID</label> 
  </relation>
</model>

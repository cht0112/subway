<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="CITY_CODE" default-value-expr="guid()">
    <label language="zh_CN">城市编码</label>  
    <has-relation relation="cITYCODECNAME" size="100" required="true">
      <label language="zh_CN">标准所属城市</label> 
    </has-relation>  
    <has-relation relation="cITYCODEENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="cITYCODEENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="cITYCODECNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

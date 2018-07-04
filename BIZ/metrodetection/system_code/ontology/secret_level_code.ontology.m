<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SECRET_LEVEL_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">涉密级别</label>  
    <has-relation relation="sECRETLEVEL" size="22" required="true"> 
      <label language="zh_CN">涉密级别</label> 
    </has-relation>  
    <has-relation relation="sECRETLEVELCNAME" size="100" required="true"> 
      <label language="zh_CN">涉密级别</label> 
    </has-relation>  
    <has-relation relation="sECRETLEVELENAME" size="100"> 
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="sECRETLEVELCNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="sECRETLEVELENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="sECRETLEVEL" data-type="Integer"> 
    <label language="zh_CN">涉密级别</label> 
  </relation> 
</model>

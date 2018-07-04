<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SYSTEM_SUB_TYPE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">检测中心系统子类型编码</label>  
    <has-relation relation="sYSTEMTYPE" size="22" required="true"> 
      <label language="zh_CN">系统类型</label> 
    </has-relation>  
    <has-relation relation="sYSTEMSUBTYPE" size="5" required="true"> 
      <label language="zh_CN">系统子类型</label> 
    </has-relation>  
    <has-relation relation="sYSTEMSUBTYPECNAME" size="100" required="true"> 
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="sYSTEMSUBTYPEENAME" size="100"> 
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="sYSTEMSUBTYPEENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="sYSTEMTYPE" data-type="Integer"> 
    <label language="zh_CN">系统类型</label> 
  </relation>  
  <relation name="sYSTEMSUBTYPE" data-type="Decimal"> 
    <label language="zh_CN">系统子类型</label> 
  </relation>  
  <relation name="sYSTEMSUBTYPECNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

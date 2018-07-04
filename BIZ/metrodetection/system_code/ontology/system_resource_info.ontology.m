<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SYSTEM_RESOURCE_INFO" default-value-expr="nextSeq('20101010')"> 
    <label language="zh_CN">检测系统问题资源库</label>  
    <has-relation relation="sYSTEMTYPE" size="3" required="true"> 
      <label language="zh_CN">系统类型</label> 
    </has-relation>  
    <has-relation relation="eRRORTYPE" size="5" required="true"> 
      <label language="zh_CN">问题类型</label> 
    </has-relation><has-relation relation="MODULE_NAME" data-type="String"></has-relation>  
    <has-relation relation="dECTIONOBJECT" size="5"> 
      <label language="zh_CN">检测对象</label> 
    </has-relation>  
    <has-relation relation="dECTIONBUSINESS" size="200"> 
      <label language="zh_CN">检测业务 包含检测方面、检测业务等信息</label> 
    </has-relation>  
    <has-relation relation="eRRORDESC" size="1000" required="true"> 
      <label language="zh_CN">问题描述</label> 
    </has-relation>  
    <has-relation relation="eRRORSOLUTION" size="1000" required="true"> 
      <label language="zh_CN">问题解决方法</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  
</concept>  
  <relation name="eRRORSOLUTION" data-type="String"> 
    <label language="zh_CN">问题解决方法</label> 
  </relation>  
  <relation name="dECTIONBUSINESS" data-type="String"> 
    <label language="zh_CN">检测业务 包含检测方面、检测业务等信息</label> 
  </relation>  
  <relation name="dECTIONOBJECT" data-type="Decimal"> 
    <label language="zh_CN">检测对象</label> 
  </relation>  
  <relation name="sYSTEMTYPE" data-type="Decimal"> 
    <label language="zh_CN">系统类型</label> 
  </relation>  
  <relation name="eRRORDESC" data-type="String"> 
    <label language="zh_CN">问题描述</label> 
  </relation>  
  <relation name="eRRORTYPE" data-type="Decimal"> 
    <label language="zh_CN">问题类型</label> 
  </relation> 
<relation name="MODULE_NAME" data-type="String"><label language="zh_CN">模块名称</label>
</relation>
</model>

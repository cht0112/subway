<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="RECURRENCE_TEST_SCHEME" default-value-expr="guid()"> 
    <has-relation relation="APPLICATION_NO" required="true" single-valued="true"> 
      <label language="zh_CN">申请序号</label> 
    </has-relation>  
    <has-relation relation="TEST_SCHEME_ID" required="true" single-valued="true"> 
      <label language="zh_CN">检测方案Id</label> 
    </has-relation>  
    <has-relation relation="IS_USED" required="true"> 
      <label language="zh_CN">是否在用</label> 
    </has-relation>  
    <label language="zh_CN">检测回归方案</label> 
  </concept>  
  <relation name="IS_USED" data-type="Integer"> 
    <label language="zh_CN">是否在用</label> 
  </relation> 
   <relation name="APPLICATION_NO" data-type="Integer"> 
    <label language="zh_CN">申请序号</label> 
  </relation> 
  <relation name="TEST_SCHEME_ID" data-type="Integer"> 
    <label language="zh_CN">检测方案Id</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="fBizState" data-type="String" single-valued="true"> 
    <label language="zh_CN">业务流程状态编码</label> 
  </relation>  
  <relation name="fBizStateName" data-type="String" single-valued="true"> 
    <label language="zh_CN">业务流程状态</label> 
  </relation>  
  <relation name="fState" data-type="String" single-valued="true"> 
    <label language="zh_CN">处理状态编码</label> 
  </relation>  
  <relation name="fStateName" data-type="String" single-valued="true"> 
    <label language="zh_CN">处理状态</label> 
  </relation>  
  <relation name="fActivityFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">环节路径</label> 
  </relation>  
  <relation name="fActivityLabel" data-type="String" single-valued="true"> 
    <label language="zh_CN">环节名称</label> 
  </relation>  
  <relation name="fCurrentActivities" data-type="String" single-valued="true"> 
    <label language="zh_CN">当前环节</label> 
  </relation>  
  <relation name="fCurrentExecutors" data-type="String" single-valued="true"> 
    <label language="zh_CN">当前执行者</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="ROOM_OCCUPY_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">房间占用信息</label>  
    <has-relation relation="rOOMID" size="22" data-type="Integer" required="true"/>  
    <has-relation relation="rOOMAREA" size="20" data-type="String" required="true"/>  
    <has-relation relation="tESTTASKID" size="20" data-type="Integer"/>  
    <has-relation relation="oCCUPYSTARTDATETIME" required="true" data-type="Date"/>  
    <has-relation relation="oCCUPYENDDATETIME" required="true" data-type="Date"/>  
    <has-relation relation="rOOMUSED" data-type="Integer" required="true"/>  
    <has-relation relation="tECHMANAGER" data-type="String" required="true"/>  
    <has-relation relation="mEMO" size="200" data-type="String"/>  
    <has-relation relation="version" size="10" data-type="Integer" default-value-expr="0"/> 
  </concept>  
  <relation name="oCCUPYENDDATETIME" data-type="Date"> 
    <label language="zh_CN">计划占用结束日期时间</label> 
  </relation>  
  <relation name="oCCUPYSTARTDATETIME" data-type="Date"> 
    <label language="zh_CN">计划占用起始日期时间</label> 
  </relation>  
  <relation name="tESTTASKID" data-type="Integer"> 
    <label language="zh_CN">测试任务ID</label> 
  </relation>  
  <relation name="rOOMUSED" data-type="Integer"> 
    <label language="zh_CN">房间可用性</label> 
  </relation>  
  <relation name="tECHMANAGER" data-type="String"> 
    <label language="zh_CN">质量负责人</label> 
  </relation>  
  <relation name="version" data-type="Integer"> 
    <label language="zh_CN">版本</label> 
  </relation> 
</model>

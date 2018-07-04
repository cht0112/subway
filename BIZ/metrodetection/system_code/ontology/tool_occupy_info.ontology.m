<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TOOL_OCCUPY_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">工具占用信息</label>  
    <has-relation relation="tOOLNO1" size="5" required="true"> 
      <label language="zh_CN">工具序号</label> 
    </has-relation>  
    <has-relation relation="tESTTASKID" size="20" required="true" data-type="Integer"/>  
    <has-relation relation="oCCUPYSTARTDATETIME" required="true" data-type="DateTime"/>  
    <has-relation relation="oCCUPYENDDATETIME" required="true" data-type="DateTime"/>  
    <has-relation relation="mEMO" size="200"/>  
    <has-relation relation="tOOLUSED" size="20" required="true"/>  
    <has-relation relation="tECHMANAGER" size="20" required="true"/> 
     <has-relation relation="version" size="10" data-type="Integer" default-value-expr="0"/>
  </concept>  
  <relation name="oCCUPYENDDATETIME" data-type="Date"> 
    <label language="zh_CN">计划占用结束日期时间</label> 
  </relation>  
  <relation name="oCCUPYSTARTDATETIME" data-type="Date"> 
    <label language="zh_CN">计划占用起始日期时间</label> 
  </relation>  
  <relation name="tESTTASKID" data-type="String"> 
    <label language="zh_CN">测试任务ID</label> 
  </relation>  
  <relation name="tOOLNO1" data-type="Integer"> 
    <label language="zh_CN">工具序号</label> 
  </relation>  
  <relation name="tOOLUSED" data-type="Integer"> 
    <label language="zh_CN">工具可用性</label> 
  </relation>  
  <relation name="tECHMANAGER" data-type="String"> 
    <label language="zh_CN">质量负责人</label>
  </relation>
  <relation name="version" data-type="Integer"> 
    <label language="zh_CN">版本</label>
  </relation> 
</model>

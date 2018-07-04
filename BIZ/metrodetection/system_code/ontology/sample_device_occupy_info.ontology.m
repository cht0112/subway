<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SAMPLE_DEVICE_OCCUPY_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">受测样品占用信息</label>  
    <has-relation relation="sAMPLEDEVICENO" size="22" required="true"> 
      <label language="zh_CN">样品序号</label> 
    </has-relation>  
    <has-relation relation="pROJECTID" size="10" required="true"> 
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="dEVICEID" size="8" required="true"> 
      <label language="zh_CN">设备ID</label> 
    </has-relation>  
    <has-relation relation="tESTTASKID" size="20" required="true"> 
      <label language="zh_CN">测试任务ID</label> 
    </has-relation>  
    <has-relation relation="oCCUPYSTARTDATETIME" required="true" data-type="DateTime"> 
      <label language="zh_CN">计划占用起始日期时间</label> 
    </has-relation>  
    <has-relation relation="oCCUPYENDDATETIME" required="true" data-type="DateTime"> 
      <label language="zh_CN">计划占用结束日期时间</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  </concept> 
</model>

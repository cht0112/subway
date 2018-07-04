<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SAMPLE_DEVICE_HARDWARE_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">受检样品硬件配置信息</label>  
    <has-relation relation="sAMPLEDEVICENO" size="22" required="true"> 
      <label language="zh_CN">样品序号</label> 
    </has-relation>  
    <has-relation relation="mODELNAME" size="200" required="true"> 
      <label language="zh_CN">模块名称</label> 
    </has-relation>  
    <has-relation relation="mODELSTYLE" size="200"> 
      <label language="zh_CN">模块型号</label> 
    </has-relation>  
    <has-relation relation="mODELNUMBER" size="3" data-type="Integer"> 
      <label language="zh_CN">模块数量</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  </concept>  
  <relation name="mODELNAME" data-type="String"> 
    <label language="zh_CN">模块名称</label> 
  </relation>  
  <relation name="mODELNUMBER" data-type="Decimal"> 
    <label language="zh_CN">模块数量</label> 
  </relation>  
  <relation name="sAMPLEDEVICENO" data-type="Integer"> 
    <label language="zh_CN">样品序号</label> 
  </relation>  
  <relation name="mODELSTYLE" data-type="String"> 
    <label language="zh_CN">模块型号</label> 
  </relation> 
</model>

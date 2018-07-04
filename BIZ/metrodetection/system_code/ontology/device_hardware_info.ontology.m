<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DEVICE_HARDWARE_INFO" default-value-expr="guid()">
    <label language="zh_CN">设备硬件配置信息</label>  
    <has-relation relation="dEVICETYPE" size="22" required="true">
      <label language="zh_CN">检测对象</label> 
    </has-relation>  
    <has-relation relation="mODELTYPE" size="5" required="true">
      <label language="zh_CN">模块类型</label> 
    </has-relation>  
    <has-relation relation="mODELNUMBER" size="3" required="true">
      <label language="zh_CN">模块数量</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="2000">
      <label language="zh_CN">备注</label> 
    </has-relation> 
  </concept>  
  <relation name="mEMO" data-type="String">
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="dEVICETYPE" data-type="Integer">
    <label language="zh_CN">检测对象</label> 
  </relation>  
  <relation name="mODELNUMBER" data-type="Decimal">
    <label language="zh_CN">模块数量</label> 
  </relation>  
  <relation name="mODELTYPE" data-type="Decimal">
    <label language="zh_CN">模块类型</label> 
  </relation> 
</model>

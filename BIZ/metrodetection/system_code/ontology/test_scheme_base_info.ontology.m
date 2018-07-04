<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_SCHEME_BASE_INFO" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">检测方案基本信息</label>  
    <has-relation relation="tESTSCHEMENAME" size="200" required="true">
      <label language="zh_CN">检测方案名称</label> 
    </has-relation>  
    <has-relation relation="tESTSCHEMEDESC" size="1000">
      <label language="zh_CN">检测方案描述</label> 
    </has-relation>  
    <has-relation relation="bUSINESSID" size="5" required="true" data-type="Integer">
      <label language="zh_CN">业务类型</label> 
    </has-relation>  
    <has-relation relation="dECTIONBASEDONID" size="10" required="true" data-type="Integer">
      <label language="zh_CN">检测依据ID</label> 
    </has-relation>  
    <has-relation relation="mAKEDATETIME" required="true" data-type="Date">
      <label language="zh_CN">制作日期时间</label> 
    </has-relation>  
    <has-relation relation="vALIDSTATE" size="3" required="true" data-type="Integer">
      <label language="zh_CN">有效状态</label> 
    </has-relation>
     <has-relation relation="aPPLICATIONNO" data-type="Integer">
      <label language="zh_CN">申请序号</label> 
    </has-relation>  
  </concept>  
  <relation name="tESTSCHEMENAME" data-type="String">
    <label language="zh_CN">检测方案名称</label> 
  </relation>  
  <relation name="tESTSCHEMEDESC" data-type="String">
    <label language="zh_CN">检测方案描述</label> 
  </relation> 
</model>

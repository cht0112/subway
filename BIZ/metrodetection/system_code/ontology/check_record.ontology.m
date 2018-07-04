<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="CHECK_RECORD" default-value-expr="guid()"> 
    <label language="zh_CN">审批记录</label>  
    <has-relation relation="aPPLICATIONNO" size="22" required="true" data-type="Integer"> 
      <label language="zh_CN">申请序号</label> 
    </has-relation>  
    <has-relation relation="aPPLICATIONTYPE" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">申请类型</label> 
    </has-relation>  
    <has-relation relation="cHECKNAME" size="100" required="true" default-value-expr="currentActivityLabel()"> 
      <label language="zh_CN">审批级别</label> 
    </has-relation>  
    <has-relation relation="cHECKER" size="8" required="true"> 
      <label language="zh_CN">审批人</label> 
    </has-relation>  
    <has-relation relation="cHECKRESULT" size="3" required="true" data-type="Integer" default-value-expr="2"> 
      <label language="zh_CN">审批结果</label> 
    </has-relation>  
    <has-relation relation="cHECKDESC" size="1000"> 
      <label language="zh_CN">审批说明</label> 
    </has-relation>  
    <has-relation relation="cHECKTIME" required="true" default-value-expr="currentDate()" data-type="Date"> 
      <label language="zh_CN">审批时间</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  </concept>  
  <relation name="cHECKTIME" data-type="DateTime"> 
    <label language="zh_CN">审批时间</label> 
  </relation>  
  <relation name="cHECKNAME" data-type="String"> 
    <label language="zh_CN">审批级别</label> 
  </relation>  
  <relation name="cHECKDESC" data-type="String"> 
    <label language="zh_CN">审批说明</label> 
  </relation>  
  <relation name="cHECKRESULT" data-type="Decimal"> 
    <label language="zh_CN">审批结果</label> 
  </relation>  
  <relation name="cHECKER" data-type="String"> 
    <label language="zh_CN">审批人</label> 
  </relation>  
  <relation name="aPPLICATIONTYPE" data-type="Decimal"> 
    <label language="zh_CN">申请类型</label> 
  </relation> 
</model>

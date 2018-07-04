<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_PROJECT_ASSIGN_INFO" default-value-expr="guid()">
    <label language="zh_CN">项目委托检测信息</label>  
    <has-relation relation="pROJECTID" size="22" required="true">
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="tASKID" size="10" required="true">
      <label language="zh_CN">委托任务ID</label> 
    </has-relation>  
    <has-relation relation="aSSIGNEDCONTRACTCODE" size="50" required="true">
      <label language="zh_CN">委托合同编号</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREID" size="5" required="true">
      <label language="zh_CN">受理单位</label> 
    </has-relation>  
    <has-relation relation="dECTIONDEVICE" size="1000">
      <label language="zh_CN">检测产品</label> 
    </has-relation>  
    <has-relation relation="dECTIONCONTENT" size="2000" required="true">
      <label language="zh_CN">检测内容</label> 
    </has-relation>  
    <has-relation relation="aSSIGNEDDATE">
      <label language="zh_CN">委托日期</label> 
    </has-relation>  
    <has-relation relation="aSSIGNEDCONTACTOR" size="20" required="true">
      <label language="zh_CN">受理联系人</label> 
    </has-relation>  
    <has-relation relation="cONTACTTELEPHONE" size="20">
      <label language="zh_CN">受理联系电话</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  </concept>  
  <relation name="aSSIGNEDDATE" data-type="DateTime">
    <label language="zh_CN">委托日期</label> 
  </relation>  
  <relation name="dECTIONCONTENT" data-type="String">
    <label language="zh_CN">检测内容</label> 
  </relation>  
  <relation name="aSSIGNEDCONTRACTCODE" data-type="String">
    <label language="zh_CN">委托合同编号</label> 
  </relation>  
  <relation name="tASKID" data-type="Decimal">
    <label language="zh_CN">委托任务ID</label> 
  </relation>  
  <relation name="aSSIGNEDCONTACTOR" data-type="String">
    <label language="zh_CN">受理联系人</label> 
  </relation>  
  <relation name="dECTIONDEVICE" data-type="String">
    <label language="zh_CN">检测产品</label> 
  </relation> 
</model>

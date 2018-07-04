<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_CONTRACT_INFO" default-value-expr="nextSeq('20121212')"> 
    <label language="zh_CN">合同管理</label>  
    <has-relation relation="cONTRACTNAME" size="200" required="true"> 
      <label language="zh_CN">合同名称</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREID" size="5" required="true"> 
      <label language="zh_CN">客户名称</label> 
    </has-relation>  
    <has-relation relation="cONTRACTDATE" required="true" data-type="DateTime" default-value-expr="currentDateTime()"> 
      <label language="zh_CN">合同签订日期</label> 
    </has-relation>  
    <has-relation relation="eXPECTENDINGDATE" required="true" data-type="DateTime"> 
      <label language="zh_CN">预期完成日期</label> 
    </has-relation>  
    <has-relation relation="cONTRACTDESC" size="1000" required="true"> 
      <label language="zh_CN">合同内容简介</label> 
    </has-relation>  
    <has-relation relation="aPPLICATIONNO" size="10" required="true"> 
      <label language="zh_CN">对应申请序号</label> 
    </has-relation>  
    <has-relation relation="cONTRACTCODE" data-type="String" size="50"/>  
    <label language="zh_CN">合同编号</label>  
    <has-relation relation="mEMO" size="1000"/>  
    <label language="zh_CN">备注</label> 
  </concept>  
  <relation name="cONTRACTDESC" data-type="String"> 
    <label language="zh_CN">合同内容简介</label> 
  </relation>  
  <relation name="eXPECTENDINGDATE" data-type="DateTime"> 
    <label language="zh_CN">预期完成日期</label> 
  </relation>  
  <relation name="mANUFACTUREID" data-type="Decimal"> 
    <label language="zh_CN">客户名称</label> 
  </relation>  
  <relation name="cONTRACTNAME" data-type="String"> 
    <label language="zh_CN">合同名称</label> 
  </relation>  
  <relation name="aPPLICATIONNO" data-type="Decimal"> 
    <label language="zh_CN">对应申请序号</label> 
  </relation>  
  <relation name="cONTRACTDATE" data-type="DateTime"> 
    <label language="zh_CN">合同签订日期</label> 
  </relation>  
  <relation name="cONTRACTCODE" data-type="String"> 
    <label language="zh_CN">合同编号</label> 
  </relation> 
</model>

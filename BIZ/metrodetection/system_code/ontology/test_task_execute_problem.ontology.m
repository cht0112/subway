<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_TASK_EXECUTE_PROBLEM" default-value-expr="nextSeq('20110')">
    <label language="zh_CN">测试任务执行问题</label>  
      
      
    <has-relation relation="tASKID" size="10" required="true">
      <label language="zh_CN">任务ID</label> 
    </has-relation>  
    <has-relation relation="dEVICEID" size="8" required="true">
      <label language="zh_CN">设备ID</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true">
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEID" size="20" required="true">
      <label language="zh_CN">测试子用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASESTEPID" size="5" required="true">
      <label language="zh_CN">测试子用例步骤ID</label> 
    </has-relation>  
    <has-relation relation="eXECUTEDATETIME" required="true" data-type="Date">
      <label language="zh_CN">执行出错日期</label> 
    </has-relation>  
    <has-relation relation="pROBLEMPRIOR" size="5" required="true">
      <label language="zh_CN">问题级别</label> 
    </has-relation>  
    <has-relation relation="pROBLEMTYPE" size="5" required="true">
      <label language="zh_CN">问题类型</label> 
    </has-relation>  
    <has-relation relation="pROBLEMDESC" size="1000" required="true">
      <label language="zh_CN">问题描述</label> 
    </has-relation>  
    <has-relation relation="oPERATORID" size="8" required="true">
      <label language="zh_CN">检测人员</label> 
    </has-relation>  
    <has-relation relation="rEPORTDATE" required="true" data-type="DateTime">
      <label language="zh_CN">上报日期</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="200"/>  
    <has-relation relation="pROBLEMID" size="10" required="true">
      <label language="zh_CN">解决问题编号</label> 
    </has-relation> 
  </concept>  
  <relation name="pROBLEMID" data-type="Decimal">
    <label language="zh_CN">解决问题编号</label> 
  </relation>  
  <relation name="pROBLEMDESC" data-type="String">
    <label language="zh_CN">问题描述</label> 
  </relation>  
  <relation name="dEVICEID" data-type="String">
    <label language="zh_CN">设备ID</label> 
  </relation>  
  <relation name="dECTIONPROBLEMNO" data-type="Integer">
    <label language="zh_CN">受测系统问题序号</label> 
  </relation>  
  <relation name="pROBLEMTYPE" data-type="Decimal">
    <label language="zh_CN">问题类型</label> 
  </relation>  
  <relation name="pROBLEMPRIOR" data-type="Decimal">
    <label language="zh_CN">问题级别</label> 
  </relation>  
  <relation name="sUBTESTCASESTEPID" data-type="Decimal">
    <label language="zh_CN">测试子用例步骤ID</label> 
  </relation> 
</model>

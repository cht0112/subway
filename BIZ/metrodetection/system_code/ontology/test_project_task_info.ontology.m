<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_PROJECT_TASK_INFO" default-value-expr="guid()">
    <label language="zh_CN">项目测试任务信息</label>  
    <has-relation relation="pROJECTID" size="22" required="true">
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="tASKTYPE" size="3" required="true">
      <label language="zh_CN">任务类型</label> 
    </has-relation>  
    <has-relation relation="tASKID" size="10" required="true" default-value-expr="toDecimal(toString(nextSeq('1000000000')))">
      <label language="zh_CN">任务ID</label> 
    </has-relation><has-relation relation="tASKNAME" data-type="String"></has-relation>  
    <has-relation relation="pLANOPERATORID" size="8" required="true">
      <label language="zh_CN">计划执行人</label> 
    </has-relation>  
    <has-relation relation="pLANSTARTDATE" required="true">
      <label language="zh_CN">计划开始日期</label> 
    </has-relation>  
    <has-relation relation="pLANENDINGDATE" required="true">
      <label language="zh_CN">计划结束日期</label> 
    </has-relation>  
    <has-relation relation="tESTTASKAREA" size="200">
      <label language="zh_CN">区域</label> 
    </has-relation>  
    <has-relation relation="tESTTASKITERATIVE" size="200">
      <label language="zh_CN">迭代</label> 
    </has-relation>  
    <has-relation relation="tESTTASKREASON" size="3" required="true">
      <label language="zh_CN">任务生成原因</label> 
    </has-relation>  
    <has-relation relation="aCTUALOPERATORID" size="8">
      <label language="zh_CN">任务执行人</label> 
    </has-relation>  
    <has-relation relation="aCTUALSTARTDATE">
      <label language="zh_CN">任务开始日期</label> 
    </has-relation>  
    <has-relation relation="aCTUALENDINGDATE">
      <label language="zh_CN">任务结束日期</label> 
    </has-relation>  
    <has-relation relation="tASKEXECUTE" size="3" required="true">
      <label language="zh_CN">任务执行状态</label> 
    </has-relation>  
    <has-relation relation="tASKCHECK" size="3" required="true" data-type="Integer">
      <label language="zh_CN">任务执行结果</label> 
    </has-relation>  
    <has-relation relation="tESTTASKFILE">
      <label language="zh_CN">测试任务下发XML文件</label> 
    </has-relation>  
    <has-relation relation="tESTTASKRESULTFILE">
      <label language="zh_CN">测试任务结果XML文件</label> 
    </has-relation> 
  
</concept>  
  <relation name="aCTUALOPERATORID" data-type="String">
    <label language="zh_CN">任务执行人</label> 
  </relation>  
  <relation name="pLANENDINGDATE" data-type="DateTime">
    <label language="zh_CN">计划结束日期</label> 
  </relation>  
  <relation name="tESTTASKREASON" data-type="Decimal">
    <label language="zh_CN">任务生成原因</label> 
  </relation>  
  <relation name="tESTTASKRESULTFILE" data-type="Text">
    <label language="zh_CN">测试任务结果XML文件</label> 
  </relation>  
  <relation name="tASKTYPE" data-type="Decimal">
    <label language="zh_CN">任务类型</label> 
  </relation>  
  <relation name="tESTTASKITERATIVE" data-type="String">
    <label language="zh_CN">迭代</label> 
  </relation>  
  <relation name="pLANOPERATORID" data-type="String">
    <label language="zh_CN">计划执行人</label> 
  </relation>  
  <relation name="tESTTASKAREA" data-type="String">
    <label language="zh_CN">区域</label> 
  </relation>  
  <relation name="pLANSTARTDATE" data-type="DateTime">
    <label language="zh_CN">计划开始日期</label> 
  </relation>  
  <relation name="tESTTASKFILE" data-type="Text">
    <label language="zh_CN">测试任务下发XML文件</label> 
  </relation>  
  <relation name="tASKEXECUTE" data-type="Decimal">
    <label language="zh_CN">任务执行状态</label> 
  </relation>  
  <relation name="tASKCHECK" data-type="Integer">
    <label language="zh_CN">任务执行结果</label> 
  </relation>  
  <relation name="aCTUALENDINGDATE" data-type="DateTime">
    <label language="zh_CN">任务结束日期</label> 
  </relation>  
  <relation name="aCTUALSTARTDATE" data-type="DateTime">
    <label language="zh_CN">任务开始日期</label> 
  </relation> 

<relation name="tASKNAME" data-type="String"><label language="zh_CN">任务名称</label>
</relation>
</model>

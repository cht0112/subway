<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="PROBLEM_PRIOR_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">问题级别编码</label>  
    <has-relation relation="pROBLEMPRIORCNAME" size="100" required="true">
      <label language="zh_CN">问题级别</label> 
    </has-relation>  
    <has-relation relation="pROBLEMPRIORENAME" size="100">
      <label language="zh_CN">问题级别英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="pROBLEMPRIORENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="pROBLEMPRIORCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

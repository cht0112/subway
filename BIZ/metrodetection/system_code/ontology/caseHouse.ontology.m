<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
    
  <relation name="FCNAME" data-type="String">
    <label language="zh_CN">FCNAME</label> 
  </relation>  
  <relation name="FQZRW" data-type="String">
    <label language="zh_CN">FQZRW</label> 
  </relation>  
  <relation name="FPID" data-type="String">
    <label language="zh_CN">FPID</label> 
  </relation>  
  <relation name="FAPPLICATIONNO" data-type="String">
    <label language="zh_CN">FAPPLICATIONNO</label> 
  </relation>  
  <relation name="FETIME" data-type="DateTime">
    <label language="zh_CN">FETIME</label> 
  </relation>  
  <relation name="FSTIME" data-type="DateTime">
    <label language="zh_CN">FSTIME</label> 
  </relation>
  <relation name="RANGENAME" data-type="String">
    <label language="zh_CN">RANGENAME</label> 
  </relation>
  <relation name="TASKID" data-type="Integer">
    <label language="zh_CN">TASKID</label> 
  </relation> 
  <relation name="DETOBJNAME" data-type="String">
    <label language="zh_CN">DETOBJNAME</label> 
  </relation>

<relation name="FCID" data-type="String"><label language="zh_CN">FCID</label>
</relation>
<concept name="CASE_HOUSE" default-value-expr="guid()"><label language="zh_CN">检测任务信息临时存储</label>
<has-relation relation="FCID" size="100" required="true"></has-relation>
<has-relation relation="FCNAME" size="100" required="true"></has-relation>
<has-relation relation="FSTIME" required="true"></has-relation>
<has-relation relation="FETIME" required="true"></has-relation>
<has-relation relation="FQZRW" size="100"></has-relation>
<has-relation relation="FPID" size="100"></has-relation>
<has-relation relation="FAPPLICATIONNO" size="100"></has-relation>
<has-relation relation="TIMEPARAM" size="100"><label language="zh_CN">TIMEPARAM</label>
</has-relation>
<has-relation relation="SCHEMEID"></has-relation>
<has-relation relation="RANGENAME" size="100"><label language="zh_CN">RANGENAME</label></has-relation>
<has-relation relation="TASKID" size="100"><label language="zh_CN">TASKID</label></has-relation>
<has-relation relation="DETOBJNAME" size="100"><label language="zh_CN">DETOBJNAME</label></has-relation>
</concept>
<relation name="TIMEPARAM" data-type="String"><label language="zh_CN">TIMEPARAM</label>
</relation>
<relation name="SCHEMEID" data-type="Integer"><label language="zh_CN">SCHEMEID</label>
</relation>
</model>

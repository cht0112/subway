<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_TASK_REASON_CODE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">任务产生原因</label>  
    <has-relation relation="tESTTASKREASONCNAME" size="100" required="true">
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="tESTTASKREASONENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="tESTTASKREASONCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="tESTTASKREASONENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

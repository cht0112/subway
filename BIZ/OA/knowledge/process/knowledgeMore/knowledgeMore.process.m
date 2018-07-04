<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="knowledgeMoreProcess" kind="SYSTEM">
    <label language="zh_CN">更多</label>
    <has-action action="queryKnowledgeAction"/>
    <has-action action="insertReadersAction"/>
    <has-action action="queryKMKnowledgeAction"/>
    <has-action action="getNoReaderCountAction"/>
    <static-activity name="knowledgeMoreActivity">
      <label language="zh_CN">更多</label>
    </static-activity>
  </process>
</model>

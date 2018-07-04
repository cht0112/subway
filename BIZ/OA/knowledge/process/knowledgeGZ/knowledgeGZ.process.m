<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="knowledgeGZProcess"> 
    <static-activity name="mainActivity">
      <label language="zh_CN">文档关注</label> 
    </static-activity>  
    <has-action action="getDirectSubFoldersAction" access-permission="public"/>  
    <has-action action="queryKMKnowledgeAction" access-permission="public"/>  
    <has-action action="queryKnowledgeAction" access-permission="public"/>  
    <has-action action="queryKMREADERSAction" access-permission="public"/>  
    <has-action action="getNoReadersAction" access-permission="public"/>  
    <has-action action="getNoReaderCountAction" access-permission="public"/>  
    <has-action action="insertReadersAction" access-permission="public"/>  
    <has-action action="addKnowledgeGZAction" access-permission="public"/>  
    <has-action action="cancelKnowledgeGZAction" access-permission="public"/> 
  <label language="zh_CN">文档关注</label>
</process> 
</model>

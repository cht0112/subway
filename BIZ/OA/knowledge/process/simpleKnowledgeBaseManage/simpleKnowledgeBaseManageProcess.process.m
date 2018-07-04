<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="simpleKnowledgeBaseManageProcess"> 
    <label language="zh_CN">简版知识库管理</label>  
    <has-action action="createKMKnowledgeAction"/>  
    <has-action action="queryKMKnowledgeAction"/>  
    <has-action action="saveKMKnowledgeAction"/>  
    <has-action action="getDirectSubFoldersMGAction"/>  
    <has-action action="getFolderManagersAction"/>  
    <static-activity name="baseKWBaseMGActivity">
    	<label language="zh_CN">简版知识库管理</label>
    </static-activity>
    <static-activity name="newsBaseMGActivity">
    	<label language="zh_CN">新闻管理</label>
    </static-activity>
    <static-activity name="noticeBaseMGActivity">
    	<label language="zh_CN">公告管理</label>
    </static-activity>
    <static-activity name="docBaseMGActivity">
    	<label language="zh_CN">文件管理</label>
    </static-activity>
    <static-activity name="ruleBaseMGActivity">
    	<label language="zh_CN">规则制度管理</label>
    </static-activity>
  </process> 
</model>

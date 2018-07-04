<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="simplePublishKnowledgeManageProcess">
    <label language="zh_CN">简版知识发布管理</label>
    <has-action action="createKMKnowledgeAction"/>
    <has-action action="queryKMKnowledgeAction"/>
    <has-action action="saveKMKnowledgeAction"/>
    <has-action action="queryFolderAction"/>
    <static-activity name="basePublishManageActivity">
      <label language="zh_CN">基类知识发布管理</label>
    </static-activity>
    <static-activity name="newsPublishManageActivity">
      <label language="zh_CN">新闻发布管理</label>
    </static-activity>
    <static-activity name="noticePublishManageActivity">
      <label language="zh_CN">公告发布管理</label>
    </static-activity>
    <static-activity name="docPublishManageActivity">
      <label language="zh_CN">文件发布管理</label>
    </static-activity>
    <static-activity name="rulePublishManageActivity">
      <label language="zh_CN">规章制度发布管理</label>
    </static-activity>
  </process>
</model>

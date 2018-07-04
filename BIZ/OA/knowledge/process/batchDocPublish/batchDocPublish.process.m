<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="batchDocPublishProcess">
    <label language="zh_CN">文档批量发布</label>
    <has-action action="queryFolderAction"/> 
    <has-action action="createKMBatchKWAction"/>
    <has-action action="queryKMBatchKWAction"/>
    <has-action action="saveKMBatchKWAction"/>
    <has-action action="canCreateKWAction"/>
    <has-action action="docBatchPublishAction"/>
    <static-activity name="batchPublishActivity">
      <label language="zh_CN">文档批量发布</label>
    </static-activity>
  </process>
</model>

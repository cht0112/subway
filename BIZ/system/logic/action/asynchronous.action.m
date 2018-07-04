<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="createRemindTaskAction" global="true" procedure="createRemindProcedure"> 
    <label language="zh_CN">创建提醒消息</label>  
    <public name="sid" type="String"/> 
  </action> 
  <action name="queryIdByNameAction" procedure="sqlQueryProcedure"> 
    <public name="sql" type="Map"/>  
    <public name="dataModel" type="String" value="/system/data"/> 
  <label language="zh_CN">查询用户ID</label>
</action> 
</model>

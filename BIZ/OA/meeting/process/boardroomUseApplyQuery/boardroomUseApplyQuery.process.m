<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  
  <process name="boardroomUseApplyQueryProcess">
    <label language="zh_CN">会议室使用申请查询</label>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
    <has-action action="queryMTUSEAPPLYAction"/>
    <has-action action="createMTUSEAPPLYAction"/>
    <has-action action="saveMTUSEAPPLYAction"/>
    <has-action action="queryMTUSEAPPLYPSNSAction"/>
    <has-action action="queryMTBOARDROOMAction"/>
  </process>
</model>

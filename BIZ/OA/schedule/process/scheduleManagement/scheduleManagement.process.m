<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="scheduleManagementProcess">
    <label language="zh_CN">日程管理</label>
    <has-action action="createSDSCHEDULEAction"/>
    <has-action action="querySDSCHEDULEAction"/>
    <has-action action="saveSDSCHEDULEAction"/>
    <has-action action="createSDEXECUTORAction"/>
    <has-action action="querySDEXECUTORAction"/>
    <has-action action="saveSDEXECUTORAction"/>
    <has-action action="deleteScheduleAction"/>
    <has-action action="getManageOrgIDsAction"/>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
  </process>
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="boardroomDetailProcess">
    <label language="zh_CN">会议室信息</label>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
    <has-action action="createMTBOARDROOMAction"/>
    <has-action action="queryMTBOARDROOMAction"/>
    <has-action action="saveMTBOARDROOMAction"/>
    <has-action action="queryMTBoardroomTypeAction"/>
  </process>
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="boardroomTypeProcess">
    <label language="zh_CN">会议室类型</label>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
    <has-action action="createMTBoardroomTypeAction"/>
    <has-action action="queryMTBoardroomTypeAction"/>
    <has-action action="saveMTBoardroomTypeAction"/>
  </process>
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="boardroomArrangeDialogProcess">
    <label language="zh_CN">会议室安排对话框</label>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
    <has-action action="createMTBOARDROOMAction"/>
    <has-action action="queryMTBOARDROOMAction"/>
    <has-action action="saveMTBOARDROOMAction"/>
    <has-action action="queryMTBoardroomTypeAction"/>
    <has-action action="queryMTRoomArrangeAction"/>
    <has-action action="createMTRoomArrangeAction"/>
    <has-action action="saveMTRoomArrangeAction"/>
    <has-action action="checkBoardroomUsedAction"/>
    <has-action action="deleteScheduleByBizAction"/>
    <has-action action="newScheduleByMeetingAction"/>
    <!--<has-action action="newScheduleAction"/>-->
    <!--<has-action action="createSDSCHEDULEAction"/>
    <has-action action="querySDSCHEDULEAction"/>
    <has-action action="saveSDSCHEDULEAction"/>-->
  </process>
</model>

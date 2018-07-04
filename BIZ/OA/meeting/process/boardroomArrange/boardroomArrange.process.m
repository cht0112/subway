<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  
  <process name="boardroomArrangeProcess">
    <label language="zh_CN">会议室安排</label>
    <static-activity name="boardroomArrange">
      <label language="zh_CN">boardroomArrange</label>
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
    <has-action action="queryMTARRANGEPSNSAction"/>
    <has-action action="saveMTARRANGEPSNSAction"/>
    <has-action action="createMTARRANGEPSNSAction"/>
    <has-action action="createMTUSEAPPLYAction"/>
    <has-action action="queryMTUSEAPPLYAction"/>
    <has-action action="saveMTUSEAPPLYAction"/>
    <has-action action="createMTUSEAPPLYPSNSAction"/>
    <has-action action="saveMTUSEAPPLYPSNSAction"/>
    <has-action action="queryMTUSEAPPLYPSNSAction"/>
    <has-action action="sqlQueryAction">
    	<public name="dataModel" type="String" value="/OA/meeting/data" />
    </has-action>
  </process>
</model>

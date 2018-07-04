<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="boardroomSummaryProcess">
    <label language="zh_CN">会议纪要</label>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
    <has-action action="queryMTSummaryAction"/>
    <has-action action="createMTSummaryAction"/>
    <has-action action="saveMTSummaryAction"/>
    <has-action action="createMTSummaryIssueAction"/>
    <has-action action="queryMTSummaryIssueAction"/>
    <has-action action="saveMTSummaryIssueAction"/>
    <has-action action="queryMTBOARDROOMAction"/>
    <has-action action="queryMTARRANGEPSNSAction"/>
    <has-action action="queryMTRoomArrangeAction"/>
    <has-action action="queryMTBoardroomTypeAction"/>
    <has-action action="publishKnowledgeInterfaceAction"/> 
    <has-action action="newScheduleByMeetingAction" />
    <has-action action="saveMTBOARDROOMAction" />
    <has-action action="checkBoardroomUsedAction" />
  </process>
</model>

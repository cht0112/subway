<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS boardroomUseArrangeProcess
	(FLOW FALSE)
	(LABEL "会议室使用安排" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/meeting/data")
	(DEFACTIVITY-STATIC startActivity
		(LABEL "startActivity" "zh_CN"))
	(HAS-ACTION createMTARRANGEPSNSAction "/OA/meeting/data")
	(HAS-ACTION queryMTARRANGEPSNSAction "/OA/meeting/data")
	(HAS-ACTION saveMTARRANGEPSNSAction "/OA/meeting/data")
	(HAS-ACTION queryMTBOARDROOMAction "/OA/meeting/data")
	(HAS-ACTION createMTRoomArrangeAction "/OA/meeting/data")
	(HAS-ACTION queryMTRoomArrangeAction "/OA/meeting/data")
	(HAS-ACTION saveMTRoomArrangeAction "/OA/meeting/data"))-->
  <process name="boardroomUseArrangeProcess">
    <label language="zh_CN">会议室使用安排</label>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
    <has-action action="createMTARRANGEPSNSAction"/>
    <has-action action="queryMTARRANGEPSNSAction"/>
    <has-action action="saveMTARRANGEPSNSAction"/>
    <has-action action="queryMTBOARDROOMAction"/>
    <has-action action="createMTRoomArrangeAction"/>
    <has-action action="queryMTRoomArrangeAction"/>
    <has-action action="saveMTRoomArrangeAction"/>
  </process>
</model>

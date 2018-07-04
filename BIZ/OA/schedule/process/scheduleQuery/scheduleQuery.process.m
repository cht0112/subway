<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS scheduleQueryProcess
	(FLOW FALSE)
	(LABEL "公开日程查询" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/schedule/data")
	(HAS-ACTION querySDSCHEDULEAction "/OA/schedule/data")
	(HAS-ACTION saveSDSCHEDULEAction "/OA/schedule/data")
	(HAS-ACTION createSDSCHEDULEAction "/OA/schedule/data")
	(HAS-ACTION querySDEXECUTORAction "/OA/schedule/data")
	(HAS-ACTION saveSDEXECUTORAction "/OA/schedule/data")
	(HAS-ACTION createSDEXECUTORAction "/OA/schedule/data")
	
	(HAS-ACTION newScheduleAction "/OA/schedule/data")
	(HAS-ACTION deleteScheduleAction "/OA/schedule/data")
	(HAS-ACTION updateScheduleAction "/OA/schedule/data")
	(HAS-ACTION queryWhoShared2MeAction "/OA/schedule/data")
	(HAS-ACTION querySAOPPersonAction)
	(DEFACTIVITY-STATIC startActivity
		(LABEL "startActivity" "zh_CN")
)
)-->
  <process name="scheduleQueryProcess">
    <label language="zh_CN">公开日程查询</label>
    <has-action action="querySDSCHEDULEAction"/>
    <has-action action="saveSDSCHEDULEAction"/>
    <has-action action="createSDSCHEDULEAction"/>
    <has-action action="querySDEXECUTORAction"/>
    <has-action action="saveSDEXECUTORAction"/>
    <has-action action="createSDEXECUTORAction"/>
    <has-action action="newScheduleAction"/>
    <has-action action="deleteScheduleAction"/>
    <has-action action="updateScheduleAction"/>
    <has-action action="queryWhoShared2MeAction"/>
    <has-action action="querySAOPPersonAction"/>
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
  </process>
</model>

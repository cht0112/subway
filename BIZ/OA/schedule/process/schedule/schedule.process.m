<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS scheduleProcess
	(FLOW FALSE)
	(LABEL "日程安排" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/schedule/data")
	(HAS-ACTION querySDSCHEDULEAction "/OA/schedule/data")
	(HAS-ACTION saveSDSCHEDULEAction "/OA/schedule/data")
	(HAS-ACTION createSDSCHEDULEAction "/OA/schedule/data")
	(HAS-ACTION querySDEXECUTORAction "/OA/schedule/data")
	(HAS-ACTION saveSDEXECUTORAction "/OA/schedule/data")
	(HAS-ACTION createSDEXECUTORAction "/OA/schedule/data")
	(DEFACTIVITY-STATIC startActivity
		(LABEL "startActivity" "zh_CN")
)
)-->
  <process name="scheduleProcess" kind="SYSTEM">
    <label language="zh_CN">日程安排</label>
    
    
    
    
    
    
    
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
  







<has-action action="querySDSCHEDULEAction" access-permission="public"></has-action>
<has-action action="saveSDSCHEDULEAction" access-permission="public"></has-action>
<has-action action="createSDSCHEDULEAction" access-permission="public"></has-action>
<has-action action="querySDEXECUTORAction" access-permission="public"></has-action>
<has-action action="saveSDEXECUTORAction" access-permission="public"></has-action>
<has-action action="createSDEXECUTORAction" access-permission="public"></has-action>
<has-action action="deleteScheduleExecutorsAction" access-permission="public"></has-action>
<has-action action="orgSelectDialogQueryAction" access-permission="public"></has-action>
</process>
</model>

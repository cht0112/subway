<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <!--(DEFPROCESS systemShareProcess
	(FLOW FALSE)
	(LABEL "系统公开范围设置" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/schedule/data")
	(HAS-ACTION createSDSHARERANGEAction "/OA/schedule/data")
	(HAS-ACTION querySDSHARERANGEAction "/OA/schedule/data")
	(HAS-ACTION saveSDSHARERANGEAction "/OA/schedule/data")
	(HAS-ACTION queryWhoShared2MeAction "/OA/schedule/data")
	(DEFACTIVITY-STATIC startActivity
		(LABEL "startActivity" "zh_CN")
)
)-->  
  <process name="systemShareProcess"> 
    <label language="zh_CN">系统公开范围设置</label>  
    <static-activity name="startActivity"> 
      <label language="zh_CN">startActivity</label> 
    </static-activity>  
    <has-action action="createSDSHARERANGEAction" access-permission="public"/>  
    <has-action action="querySDSHARERANGEAction" access-permission="public"/>  
    <has-action action="saveSDSHARERANGEAction" access-permission="public"/>  
    <has-action action="queryWhoShared2MeAction" access-permission="public"/>  
    <has-action action="orgSelectDialogQueryAction" access-permission="public"/> 
  </process> 
</model>

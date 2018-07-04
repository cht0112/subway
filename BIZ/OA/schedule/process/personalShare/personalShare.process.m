<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS personalShareProcess
	(FLOW FALSE)
	(LABEL "个人公开范围设置" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/schedule/data")
	(HAS-ACTION querySDSHARERANGEAction "/OA/schedule/data")
	(HAS-ACTION saveSDSHARERANGEAction "/OA/schedule/data")
	(HAS-ACTION createSDSHARERANGEAction "/OA/schedule/data")
	(HAS-ACTION queryWhoShared2MeAction "/OA/schedule/data")
	
	(HAS-ACTION querySAOPOrgAction)
	(DEFACTIVITY-STATIC startActivity
		(LABEL "startActivity" "zh_CN")
)
)-->
  <process name="personalShareProcess">
    <label language="zh_CN">个人公开范围设置</label>
    
    
    
    
<!--    <has-action action="querySAOPOrgAction"/>-->
    <static-activity name="startActivity">
      <label language="zh_CN">startActivity</label>
    </static-activity>
  




<has-action action="querySDSHARERANGEAction" access-permission="public"></has-action>
<has-action action="saveSDSHARERANGEAction" access-permission="public"></has-action>
<has-action action="createSDSHARERANGEAction" access-permission="public"></has-action>
<has-action action="queryWhoShared2MeAction" access-permission="public"></has-action>
<has-action action="orgSelectDialogQueryAction" access-permission="public"></has-action>
</process>
</model>

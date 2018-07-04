<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
	<config name="actionInterceptor" value="">
		<!-- 
		<item name="sysRuntimeLog" value="/system/logic/code,SysRuntimeLog,before"/>
		-->
		<item name="initClient" value="/system/logic/code/interceptor,com.justep.system.interceptor.InitClient,before"/>
		<item name="checkPermission" value="/system/logic/code/interceptor,com.justep.system.interceptor.CheckPermission,before"/>
		<item name="checkClientPermission" value="/system/logic/code/interceptor,com.justep.system.interceptor.CheckClientPermission,before"/>
		<item name="logBefore" value="/system/logic/code/interceptor,com.justep.system.interceptor.LogBefore,before"/>
		<item name="logAfter" value="/system/logic/code/interceptor,com.justep.system.interceptor.LogAfter,after"/>
	</config>
</model>
<?xml version="1.0" encoding="utf-8"?>
<model xmlns="http://www.justep.com/model">
	<procedure name="appCommonAfterProcessActionListener" 
		code-model="/appCommon/logic/code"
		code="com.justep.appCommon.ProcessExecute.doAfterProcessAction">
	</procedure>
	<listener action="startProcessAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
	<listener action="advanceProcessAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
	<listener action="backProcessAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
	<listener action="transferTaskAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
	<listener action="abortProcessAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
	<listener action="suspendProcessAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
	<listener action="resumeProcessAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
	<listener action="withdrawTaskAction" event="after"
		handler="appCommonAfterProcessActionListener"></listener>
</model>
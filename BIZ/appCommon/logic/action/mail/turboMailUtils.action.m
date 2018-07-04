<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<procedure name="turboMailSyncAllPersonProcedure" 
		code-model="/appCommon/logic/code"
		code="com.justep.appCommon.mail.turbomail.TurboMailUtils.syncAllPerson">
	</procedure>
	<action name="turboMailSyncAllPersonAction" global="false"
		procedure="turboMailSyncAllPersonProcedure">
	</action>
	<procedure name="turboMailGetLoginURLProcedure" 
		code-model="/appCommon/logic/code"
		code="com.justep.appCommon.mail.turbomail.TurboMailUtils.getLoginURL">
	</procedure>
	<action name="turboMailGetLoginURLAction" global="false"
		procedure="turboMailGetLoginURLProcedure">
	</action>
	<procedure name="turboMailGetNewMsgNumProcedure" 
		code-model="/appCommon/logic/code"
		code="com.justep.appCommon.mail.turbomail.TurboMailUtils.getNewMsgNum">
	</procedure>
	<action name="turboMailGetNewMsgNumAction" global="false"
		procedure="turboMailGetNewMsgNumProcedure">
	</action>
</model>
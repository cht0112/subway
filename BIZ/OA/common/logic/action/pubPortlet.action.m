<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
	<action name="getRoleTypeAction" global="TRUE"
		procedure="getRoleTypeActionProcedure">
		<public name="fOrgFID" type="String"/>
	</action>
	<procedure name="getRoleTypeActionProcedure" 
		code-model="/OA/common/logic/code"
		code="Portlet.getRoleType">
		<parameter name="fOrgFID" type="String"/>
	</procedure>
	
	<action name="getAllDeptUnderOrgAction" global="TRUE"
		procedure="getAllDeptUnderOrgProcedure">
	</action>
	<procedure name="getAllDeptUnderOrgProcedure" 
		code-model="/OA/common/logic/code"
		code="Portlet.getAllDeptUnderOrg">
	</procedure>
</model>
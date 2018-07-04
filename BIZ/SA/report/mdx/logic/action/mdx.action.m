<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">

	<action name="queryMDXAction" procedure="queryMDXProcedure">		
		<public name="mdxQuery" type="String"/>
		<public name="properties" type="String"/>
		<public name="dataModel" type="String"/>
	</action>

	<action name="queryDrillMDXAction" procedure="queryDrillMDXProcedure">
		<public name="mdxQuery" type="String"/>
		<public name="properties" type="String"/>
		<public name="dataModel" type="String"/>
	</action>
	
	<action name="initMDXCubeMetaDataAction" procedure="initMDXCubeMetaDataProcedure">
		<public name="request" type="String"/>
		<public name="restrictions" type="String"/>
		<public name="properties" type="String"/>
		<public name="dataModel" type="String"/>
	</action>
	

</model>
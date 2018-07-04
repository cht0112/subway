<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">
	
	<procedure name="queryMDXProcedure"
		code-model="/SA/report/mdx/logic/code"
		code="MDXProcedure.queryMDX">
		<parameter name="mdxQuery" type="String"/>
		<parameter name="properties" type="String"/>
		<parameter name="dataModel" type="String"/>
	</procedure>
	
	<procedure name="queryDrillMDXProcedure"
		code-model="/SA/report/mdx/logic/code"
		code="MDXProcedure.queryMDXDrill">
		<parameter name="mdxQuery" type="String"/>
		<parameter name="properties" type="String"/>
		<parameter name="dataModel" type="String"/>
	</procedure>
	
	<procedure name="initMDXCubeMetaDataProcedure"
		code-model="/SA/report/mdx/logic/code"
		code="MDXProcedure.initMDX">
		<parameter name="request" type="String"/>
		<parameter name="restrictions" type="String"/>
		<parameter name="properties" type="String"/>
		<parameter name="dataModel" type="String"/>
	</procedure>
	
</model>
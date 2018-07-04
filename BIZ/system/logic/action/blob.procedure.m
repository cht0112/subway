<?xml version="1.0" encoding="utf-8"?>
<model xmlns="http://www.justep.com/model"
	xmlns:m="http://www.justep.com/model">
	<procedure name="blobUpdateProcedure"
		code-model="/system/logic/code"
		code="BlobProcedure.update">
		<parameter name="dataModel" type="String"/>
		<parameter name="concept" type="String"/>
		<parameter name="relation" type="String"/>
		<parameter name="id" type="String"/>
		<parameter name="size" type="String"/>
		<parameter name="blobData" type="Object"/>
	</procedure>
	<procedure name="blobDeleteProcedure"
		code-model="/system/logic/code"
		code="BlobProcedure.delete">
		<parameter name="dataModel" type="String"/>
		<parameter name="concept" type="String"/>
		<parameter name="relation" type="String"/>
		<parameter name="id" type="String"/>
	</procedure>
	<procedure name="blobDownloadProcedure"
		code-model="/system/logic/code"
		code="BlobProcedure.query">
		<parameter name="dataModel" type="String"/>
		<parameter name="concept" type="String"/>
		<parameter name="relation" type="String"/>
		<parameter name="id" type="String"/>
	</procedure>
</model>	
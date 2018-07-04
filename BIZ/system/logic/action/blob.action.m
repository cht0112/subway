<?xml version="1.0" encoding="utf-8"?>
<model xmlns="http://www.justep.com/model"
	xmlns:m="http://www.justep.com/model">
	<action name="blobUpdateAction" global="true" procedure="blobUpdateProcedure">
		<label language="zh_CN">blob更新</label>
		<public name="dataModel" type="String" />
		<public name="concept" type="String" />
		<public name="relation" type="String" />
		<public name="id" type="String" />
		<public type="String" required="false" name="size"/><public name="blobData" type="Object" />
	
</action>
	<action name="blobDeleteAction" global="true" procedure="blobDeleteProcedure">
		<label language="zh_CN">blob数据清除</label>
		<public name="dataModel" type="String" />
		<public name="concept" type="String" />
		<public name="relation" type="String" />
		<public name="id" type="String" />
	</action>
	<action name="blobDownloadAction" global="true" procedure="blobDownloadProcedure">
		<label language="zh_CN">blob数据下载</label>
		<public name="dataModel" type="String" />
		<public name="concept" type="String" />
		<public name="relation" type="String" />
		<public name="id" type="String" />
	</action>
</model>	
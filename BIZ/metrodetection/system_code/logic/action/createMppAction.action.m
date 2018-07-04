<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="createMppAction" global="false" procedure="createMppProcedure"><label language="zh_CN"> 导出app文件</label>

<public type="Integer" name="applicationNo"></public>

</action>
<action name="importMpp" global="false" procedure="importMppProcedure"><label language="zh_CN">导入mpp</label>
<public type="String" name="filename"></public>
<public type="String" name="applicationNo"></public>
<public type="String" name="timeParam"></public>
</action>
</model>
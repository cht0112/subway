<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="downloadTask" global="false" procedure="downloadTaskProcedure"><label language="zh_CN">下载任务计划</label>
<public type="List" name="taskID" required="true"/>
</action>

<action name="uploadTask" global="false" procedure="uploadTaskProcedure">
<label language="zh_CN">上传文件</label>


<public type="Xml" name="processes"></public>
</action>
<action name="downUser" global="false" procedure="downUserProcedure"><label language="zh_CN">下载个人认证信息</label>
<public type="String" name="orgID"></public>
</action>
</model>
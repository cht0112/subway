<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="defectAnalysisByVersion" global="false" procedure="defectAnalysisByVersionProcedure"><public type="Integer" name="productId" required="true"></public>
<label language="zh_CN">按版本缺陷统计</label>
</action>
<action name="defectAnalysisByPriority" global="false" procedure="defectAnalysisByPriorityProcedure"><label language="zh_CN">按缺陷类型统计分析</label>
<public type="Integer" name="productId" required="true"></public>
</action>
<action name="defectAnalysisBySeverity" global="false" procedure="defectAnalysisBySeverityProcedure"><label language="zh_CN">按缺陷等級统计分析</label>
<public type="Integer" name="productId" required="true"></public>
</action>
</model>
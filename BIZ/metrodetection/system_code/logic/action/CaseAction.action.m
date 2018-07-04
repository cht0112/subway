<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="planAction" global="false" procedure="planProcedure"><label language="zh_CN">制定计划所用action</label>
<public type="Table" required="true" name="tabParam"/>
<public type="String" required="true" name="applicationNo"/>
<public type="String" required="true" name="currentPersonId"/>
<public type="Integer" required="true" name="pattern"/>
<public type="String" name="timeParam" required="true"></public>
<public type="String" name="modeCode" required="false"></public>
<public type="Integer" name="schemeParam" required="true"></public>
</action>
</model>
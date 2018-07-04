<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryDailySupervisionRecordAction" global="false" procedure="myQueryDailySupervisionRecordProcedure">
<permission name="range" type="List"/>
<private name="concept" type="String" value="DAILY_SUPERVISION_RECORD"/>
<private name="select" type="String" value="DAILY_SUPERVISION_RECORD.*,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO_6.oPERATORNAME as oPERATORNAME1"/>
<private name="from" type="String" value="DAILY_SUPERVISION_RECORD DAILY_SUPERVISION_RECORD  optional  join HR_BASE_INFO HR_BASE_INFO on DAILY_SUPERVISION_RECORD.SUPERVISION_PERSON = HR_BASE_INFO optional  join HR_BASE_INFO HR_BASE_INFO_6 on DAILY_SUPERVISION_RECORD.RESPONSOR_PERSON = HR_BASE_INFO_6"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/quality_supervision/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="DAILY_SUPERVISION_RECORD"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>
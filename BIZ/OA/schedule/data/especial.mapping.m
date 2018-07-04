<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="OA_SD_ScheduleEsp"/>

<store name="OA_v_especialSchedule"/>
<store name="OA_SD_especialSchedulePerson"/><mapping concept="OA_SD_especialSchedulePerson"><table name="OA_SD_especialSchedulePerson" type="owner-table"><key field="fID" type="String"/>
<item field="version" relation="version"/>
<item field="fExecutorID" relation="fExecutorID"/>
<item field="fExecutorName" relation="fExecutorName"/>
<item field="fOrderNum" relation="fOrderNum"/>
</table>
</mapping>
<mapping concept="OA_v_especialSchedule"><table name="OA_v_especialSchedule" type="owner-table"><key field="fID" type="String"/>
<item field="version" relation="version"/>
<item field="fScheduleID" relation="fScheduleID"/>
<item field="fTitle" relation="fTitle"/>
<item field="fExecutorName" relation="fExecutorName"/>
<item field="fExecutorID" relation="fExecutorID"/>
<item field="fContent" relation="fContent"/>
<item field="fEndDatePart" relation="fEndDatePart"/>
<item field="fEndTime" relation="fEndTime"/>
<item field="fDate" relation="fDate"/>
</table>
</mapping>
<mapping concept="OA_SD_ScheduleEsp"><table name="OA_SD_Schedule" type="owner-table"><key field="fID" type="String"/>
<discriminator field="fScope" value="领导日程"/>
<item field="version" relation="version"/>
<item field="fTitle" relation="fTitle"/>
<item field="fBeginDatePart" relation="fBeginDatePart"/>
<item field="fBeginTimePart" relation="fBeginTimePart"/>
<item field="fBeginTime" relation="fBeginTime"/>
<item field="fEndDatePart" relation="fEndDatePart"/>
<item field="fEndTimePart" relation="fEndTimePart"/>
<item field="fEndTime" relation="fEndTime"/>
<item field="fContent" relation="fContent"/>
<item field="fExecutors" relation="fExecutors"/>
<item field="fIsShared" relation="fIsShared"/>
<item field="fIsRemind" relation="fIsRemind"/>
<item field="fRemindDatePart" relation="fRemindDatePart"/>
<item field="fRemindTimePart" relation="fRemindTimePart"/>
<item field="fRemindTime" relation="fRemindTime"/>
<item field="fCreatePsnID" relation="fCreatePsnID"/>
<item field="fCreatePsnName" relation="fCreatePsnName"/>
<item field="fCreateTime" relation="fCreateTime"/>
<item field="fCreateURL" relation="fCreateURL"/>

</table>
</mapping>
</model>
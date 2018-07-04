<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="textRealxAction" global="false" procedure="ksqlQueryProcedure">
<label language="zh_CN">报表汇总查询</label>
<private name="ksql" type="String" value="select BUSINESS_STAGE_CODE,BUSINESS_STAGE_CODE.bUSINESSID as bUSINESSID,BUSINESS_STAGE_CODE.bUSINESSSTAGE as bUSINESSSTAGE,BUSINESS_STAGE_CODE.bUSINESSSTAGECNAME as bUSINESSSTAGECNAME,BUSINESS_STAGE_CODE.bUSINESSSTAGEENAME as bUSINESSSTAGEENAME,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,BUSINESS_TYPE_CODE.bUSINESSIDENAME as bUSINESSIDENAME from BUSINESS_STAGE_CODE BUSINESS_STAGE_CODE  optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on BUSINESS_STAGE_CODE.bUSINESSID = BUSINESS_TYPE_CODE"></private>
<public name="variables" type="Map"></public>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"></private>
<public name="fnModel" type="String"></public>
</action>
</model>
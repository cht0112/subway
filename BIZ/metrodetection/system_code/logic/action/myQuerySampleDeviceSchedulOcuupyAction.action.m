<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQuerySampleDeviceScheduleAction" global="false" procedure="myQuerySampleDeviceScheduleProcedure"><label language="zh_CN">自建受检样品日历占用信息</label>
<permission type="List" name="range"/>
<private type="String" name="concept" value="SAMPLE_DEVICE_OCCUPY_INFO"></private>
<private type="String" name="select" value="SAMPLE_DEVICE_OCCUPY_INFO,SAMPLE_DEVICE_OCCUPY_INFO.sAMPLEDEVICENO as sAMPLEDEVICENO,SAMPLE_DEVICE_OCCUPY_INFO.pROJECTID as pROJECTID,SAMPLE_DEVICE_OCCUPY_INFO.dEVICEID as dEVICEID,SAMPLE_DEVICE_OCCUPY_INFO.tESTTASKID as tESTTASKID,SAMPLE_DEVICE_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,SAMPLE_DEVICE_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME"></private>
<private type="String" name="from" value="SAMPLE_DEVICE_OCCUPY_INFO SAMPLE_DEVICE_OCCUPY_INFO  optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on SAMPLE_DEVICE_OCCUPY_INFO.pROJECTID  =  TEST_PROJECT_INFO"></private>
<private type="String" name="aggregate"></private>
<private type="String" name="dataModel" value="/metrodetection/system_code/data"></private>
<private type="String" name="fnModel"></private>
<protected type="String" name="condition" />
<public type="Boolean" name="distinct" value="false"/>
<public type="String" name="idColumn" value="SAMPLE_DEVICE_OCCUPY_INFO"/>
<public type="String" name="filter"/>
<public type="Integer" name="limit"/>
<public type="Integer" name="offset" />
<public type="String" name="columns" />
<public type="String" name="orderBy" />
<public type="String" name="aggregateColumns" />
<public type="Map" name="variables" />
</action>
</model>
<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQuerylvli" global="false" procedure="myQuerylvliProcedure"><label language="zh_CN">自定义受检样品履历</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="SAMPLE_DEVICE_MOVING_RECORD"/>
<private name="select" type="String" value="SAMPLE_DEVICE_MOVING_RECORD.oPERATEDATETIME as oPERATEDATETIME,SAMPLE_DEVICE_MOVING_RECORD.oPERATETYPE as oPERATETYPE,SAMPLE_DEVICE_MOVING_RECORD.oPERATORID as oPERATORID,SAMPLE_DEVICE_MOVING_RECORD.pROJECTID as pROJECTID,SAMPLE_DEVICE_MOVING_RECORD.tESTTASKID as tESTTASKID,SAMPLE_DEVICE_MOVING_RECORD.dEVICEID as dEVICEID,SAMPLE_DEVICE_MOVING_RECORD.oPERATERESULTSTATE as oPERATERESULTSTATE,SAMPLE_DEVICE_MOVING_RECORD.mEMO as mEMO,SAMPLE_DEVICE_MOVING_RECORD.sAMPLEDEVICENO as sAMPLEDEVICENO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,case when SAMPLE_DEVICE_MOVING_RECORD.oPERATETYPE = 1 then '供应商移交' when SAMPLE_DEVICE_MOVING_RECORD.oPERATETYPE = 2 then '返还供应商' when SAMPLE_DEVICE_MOVING_RECORD.oPERATETYPE = 3 then '内部领用' else '内部归还' end as oPERATETYPE1,case when SAMPLE_DEVICE_MOVING_RECORD.oPERATERESULTSTATE = 0 then '成功' else '失败' end as oPERATERESULTSTATE1,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,SAMPLE_DEVICE_MOVING_RECORD"/>
<private name="from" type="String" value="SAMPLE_DEVICE_MOVING_RECORD SAMPLE_DEVICE_MOVING_RECORD  optional  join HR_BASE_INFO HR_BASE_INFO on SAMPLE_DEVICE_MOVING_RECORD.oPERATORID = HR_BASE_INFO optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on SAMPLE_DEVICE_MOVING_RECORD.pROJECTID = TEST_PROJECT_INFO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="SAMPLE_DEVICE_MOVING_RECORD"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>
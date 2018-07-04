<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryTaskRoomDevice" global="false" procedure="queryTaskRoomDeviceProcedure"><label language="zh_CN">查询任务房间工具占用信息</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="TEST_PROJECT_TASK_INFO"/>
<private name="select" type="String" value="t1.*,t2 as TEST_PROJECT_INFO,t2.pROJECTNAME as pROJECTNAME,t2.pROJECTTYPE as pROJECTTYPE,t2.aPPLICATIONNO as aPPLICATIONNO,t2.aSSIGNEDMANUFACTUREID as aSSIGNEDMANUFACTUREID,t2.cONTACTPERSON as cONTACTPERSON,t2.cONTACTMOBILE as cONTACTMOBILE,t2.cONTACTTELEPHONE as cONTACTTELEPHONE,t2.cONTACTEMAIL as cONTACTEMAIL,t2.nOTIFYTYPE as nOTIFYTYPE,t2.lINEID as lINEID,t2.bUSINESSID as bUSINESSID,t2.mANUFACTUREID as mANUFACTUREID,t2.pROJECTDATE as pROJECTDATE,t2.eNDINGDATE as eNDINGDATE,t2.pROJECTMANAGER as pROJECTMANAGER,t2.tESTSCHEMEID as tESTSCHEMEID,t2.mAKEDATE as mAKEDATE,t2.eXECUTESTATE as eXECUTESTATE,t2.mEMO as mEMO,t3 as OPERATOR_PASSWORD,t3.uSERNAME as uSERNAME,t3.uSERTYPE as uSERTYPE,t3.vALIDENDDATE as vALIDENDDATE,t3.oPERATORPASSWORD as oPERATORPASSWORD,t3.oRGID as oRGID,roi.*,ri.*,toi.*,ti.*,sdoi.*"/>
<private name="from" type="String" value="TEST_PROJECT_TASK_INFO t1  optional  join TEST_PROJECT_INFO t2 on t1.pROJECTID = t2 optional  join OPERATOR_PASSWORD t3 on t1.pLANOPERATORID = t3 optional  join ROOM_OCCUPY_INFO roi on t1.tASKID = roi.tESTTASKID optional  join DETECTION_ROOM_INFO ri on roi.rOOMID = ri optional  join TOOL_OCCUPY_INFO toi on t1.tASKID = toi.tESTTASKID optional  join DETECTION_TOOL_INFO ti on toi.tOOLNO1  =  ti optional  join SAMPLE_DEVICE_OCCUPY_INFO sdoi on t1.pROJECTID = sdoi.pROJECTID AND t1.tASKID = sdoi.tESTTASKID"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="t1"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>
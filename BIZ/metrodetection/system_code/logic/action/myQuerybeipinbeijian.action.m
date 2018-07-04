<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQuerybeipinbeijian" global="false" procedure="myQuerybeipinbeijianProcedure"><label language="zh_CN">自定义备品备件</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="DETECTION_TOOL_MOVING_RECORD"/>
<private name="select" type="String" value="DETECTION_TOOL_MOVING_RECORD.oPERATEDATETIME as oPERATEDATETIME,DETECTION_TOOL_MOVING_RECORD.oPERATETYPE as oPERATETYPE,DETECTION_TOOL_MOVING_RECORD.oPERATORID as oPERATORID,DETECTION_TOOL_MOVING_RECORD.pROJECTID as pROJECTID,DETECTION_TOOL_MOVING_RECORD.tESTTASKID as tESTTASKID,DETECTION_TOOL_MOVING_RECORD.tOOLTYPEID as tOOLTYPEID,DETECTION_TOOL_MOVING_RECORD.tOOLID as tOOLID,DETECTION_TOOL_MOVING_RECORD.tOOLIDSTATE as tOOLIDSTATE,DETECTION_TOOL_MOVING_RECORD.tOOLNUMBER as tOOLNUMBER,DETECTION_TOOL_MOVING_RECORD.mOVINGREASON as mOVINGREASON,DETECTION_TOOL_MOVING_RECORD.mEMO as mEMO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,DETECTION_TOOL_MOVING_RECORD,DETECTION_TOOL_MOVING_RECORD.tOOLNO as tOOLNO,USE_STATE_CODE.uSESTATECODECNAME as uSESTATECODECNAME,case when DETECTION_TOOL_MOVING_RECORD.oPERATETYPE = 1 then '领用' when DETECTION_TOOL_MOVING_RECORD.oPERATETYPE = 2 then '归还' when DETECTION_TOOL_MOVING_RECORD.oPERATETYPE = 3 then '外部入库' else '外部出库' end as oPERATETYPE1,case when DETECTION_TOOL_MOVING_RECORD.mOVINGREASON = 1 then '测试' when DETECTION_TOOL_MOVING_RECORD.mOVINGREASON = 2 then '维修' else '校准' end as mOVINGREASON1,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,TOOL_CATEGORY_CODE.tOOLCATEGORYCNAME as tOOLCATEGORYCNAME"/>
<private name="from" type="String" value="DETECTION_TOOL_MOVING_RECORD DETECTION_TOOL_MOVING_RECORD  optional  join HR_BASE_INFO HR_BASE_INFO on DETECTION_TOOL_MOVING_RECORD.oPERATORID = HR_BASE_INFO optional  join USE_STATE_CODE USE_STATE_CODE on DETECTION_TOOL_MOVING_RECORD.tOOLIDSTATE = USE_STATE_CODE optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on DETECTION_TOOL_MOVING_RECORD.pROJECTID = TEST_PROJECT_INFO optional  join TOOL_CATEGORY_CODE TOOL_CATEGORY_CODE on DETECTION_TOOL_MOVING_RECORD.tOOLTYPEID  =  TOOL_CATEGORY_CODE"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="DETECTION_TOOL_MOVING_RECORD"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>
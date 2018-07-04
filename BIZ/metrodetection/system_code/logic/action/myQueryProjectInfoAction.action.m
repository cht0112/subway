<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryProjectInfoAction" global="false" procedure="myQueryProjectInfoProcedure">
<label language="zh_CN">自建项目信息查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_PROJECT_INFO"/>  
    <private name="select" type="String" value="TEST_PROJECT_INFO,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,case when TEST_PROJECT_INFO.pROJECTTYPE = 1 then 'AFC专业检测项目' end as pROJECTTYPE1,TEST_PROJECT_INFO.aPPLICATIONNO as aPPLICATIONNO,TEST_PROJECT_INFO.aSSIGNEDMANUFACTUREID as aSSIGNEDMANUFACTUREID,TEST_PROJECT_INFO.cONTACTPERSON as cONTACTPERSON,TEST_PROJECT_INFO.cONTACTMOBILE as cONTACTMOBILE,TEST_PROJECT_INFO.cONTACTTELEPHONE as cONTACTTELEPHONE,TEST_PROJECT_INFO.cONTACTEMAIL as cONTACTEMAIL,TEST_PROJECT_INFO.nOTIFYTYPE as nOTIFYTYPE,TEST_PROJECT_INFO.bUSINESSID as bUSINESSID,case when TEST_PROJECT_INFO.lINEID = 0 then '线路无关' end as lINEID1,TEST_PROJECT_INFO.mANUFACTUREID as mANUFACTUREID2,(dateTimeToDate(TEST_PROJECT_INFO.pROJECTDATE)) as pROJECTDATE,dateTimeToDate(TEST_PROJECT_INFO.eNDINGDATE) as eNDINGDATE,case when TEST_PROJECT_INFO.eXECUTESTATE = 0 then '未开始' when TEST_PROJECT_INFO.eXECUTESTATE = 1 then '开始检测' when TEST_PROJECT_INFO.eXECUTESTATE = 2 then '检测完成' when TEST_PROJECT_INFO.eXECUTESTATE = 3 then '出具报告' end as eXECUTESTATE1,TEST_PROJECT_INFO.pROJECTMANAGER as pROJECTMANAGER,TEST_PROJECT_INFO.mAKEDATE as mAKEDATE,TEST_PROJECT_INFO.tESTSCHEMEID as tESTSCHEMEID,TEST_PROJECT_INFO.mEMO as mEMO,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,NOTIFY_TYPE_CODE,NOTIFY_TYPE_CODE.nOTIFYTYPECNAME as nOTIFYTYPECNAME,BUSINESS_TYPE_CODE,BUSINESS_TYPE_CODE.bUSINESSIDCNAME as bUSINESSIDCNAME,AFC_MANUFACTURER_INFO1.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME1,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,TEST_SCHEME_BASE_INFO,TEST_SCHEME_BASE_INFO.tESTSCHEMENAME as tESTSCHEMENAME"/>  
    <private name="from" type="String" value="TEST_PROJECT_INFO TEST_PROJECT_INFO  optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on TEST_PROJECT_INFO.aSSIGNEDMANUFACTUREID = AFC_MANUFACTURER_INFO optional  join NOTIFY_TYPE_CODE NOTIFY_TYPE_CODE on TEST_PROJECT_INFO.nOTIFYTYPE = NOTIFY_TYPE_CODE optional  join BUSINESS_TYPE_CODE BUSINESS_TYPE_CODE on TEST_PROJECT_INFO.bUSINESSID = BUSINESS_TYPE_CODE optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO1 on TEST_PROJECT_INFO.mANUFACTUREID = AFC_MANUFACTURER_INFO1 optional  join HR_BASE_INFO HR_BASE_INFO on TEST_PROJECT_INFO.pROJECTMANAGER = HR_BASE_INFO optional  join TEST_SCHEME_BASE_INFO TEST_SCHEME_BASE_INFO on TEST_PROJECT_INFO.tESTSCHEMEID = TEST_SCHEME_BASE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="TEST_PROJECT_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>
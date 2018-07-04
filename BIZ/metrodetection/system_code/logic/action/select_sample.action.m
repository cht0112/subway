<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="select_sample" global="false" procedure="select_sampleProcedure"><label language="zh_CN">查询接受样例详细信息</label>
<permission name="range" type="List"/>
<private name="concept" type="String" value="SAMPLE_DEVICE_INFO"/>
<private name="select" type="String" value="SAMPLE_DEVICE_INFO,SAMPLE_DEVICE_INFO.aPPLICATIONNO as aPPLICATIONNO1,SAMPLE_DEVICE_INFO.mANUFACTUREID as mANUFACTUREID,SAMPLE_DEVICE_INFO.dEVICETYPE as dEVICETYPE,SAMPLE_DEVICE_INFO.dEVICESTYLE as dEVICESTYLE,SAMPLE_DEVICE_INFO.dECTIONTYPE as dECTIONTYPE,SAMPLE_DEVICE_INFO.dEVICEID as dEVICEID,SAMPLE_DEVICE_INFO.sOFTWAREVERSION as sOFTWAREVERSION,SAMPLE_DEVICE_INFO.hARDWAREVERSION as hARDWAREVERSION,SAMPLE_DEVICE_INFO.dEADLINERECEIVEDATE as dEADLINERECEIVEDATE,SAMPLE_DEVICE_INFO.iNDEEDRECEIVEDATE as iNDEEDRECEIVEDATE,SAMPLE_DEVICE_INFO.rETURNDATE as rETURNDATE,SAMPLE_DEVICE_INFO.iNDEEDRETURNDATE as iNDEEDRETURNDATE,SAMPLE_DEVICE_INFO.sHAREDFLAG as sHAREDFLAG,SAMPLE_DEVICE_INFO.mEMO as mEMO,SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO as sAMPLEDEVICENO,TEST_PROJECT_INFO,TEST_PROJECT_INFO.aPPLICATIONNO as aPPLICATIONNO,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,DEVICE_TYPE_CODE.dEVICETYPE as dEVICETYPE1,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,TEST_APPLICATION_INFO,TEST_APPLICATION_INFO.dETECTIONOBJECTTYPE as dETECTIONOBJECTTYPE,TEST_INTENTION_INFO,TEST_INTENTION_INFO.APPLICATION_NONO as APPLICATION_NONO,TEST_INTENTION_INFO.MANUFACTURE_IDID as MANUFACTURE_IDID"/>
<private name="from" type="String" value="SAMPLE_DEVICE_INFO SAMPLE_DEVICE_INFO  optional  join SAMPLE_DEVICE_HARDWARE_INFO SAMPLE_DEVICE_HARDWARE_INFO on SAMPLE_DEVICE_INFO = SAMPLE_DEVICE_HARDWARE_INFO.sAMPLEDEVICENO join TEST_PROJECT_INFO TEST_PROJECT_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_PROJECT_INFO.aPPLICATIONNO join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on SAMPLE_DEVICE_INFO.mANUFACTUREID = AFC_MANUFACTURER_INFO join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on SAMPLE_DEVICE_INFO.dEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE join TEST_APPLICATION_INFO TEST_APPLICATION_INFO on TEST_PROJECT_INFO.aPPLICATIONNO = TEST_APPLICATION_INFO AND DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE = TEST_APPLICATION_INFO.dETECTIONOBJECTTYPE join TEST_INTENTION_INFO TEST_INTENTION_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_INTENTION_INFO.APPLICATION_NONO"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/system_code/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="true"/>
<public name="idColumn" type="String" value="SAMPLE_DEVICE_INFO"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>

<action name="select_task" global="false" procedure="select_taskProcedure">
<label language="zh_CN">查询测试项目任务信息</label>
<permission name="range" type="List" />
<private name="concept" type="String" value="TEST_PROJECT_TASK_INFO" />
<private name="select" type="String" value="t1.*,t2 as TEST_PROJECT_INFO,t2.pROJECTNAME as pROJECTNAME,t2.pROJECTTYPE as pROJECTTYPE,t2.aPPLICATIONNO as aPPLICATIONNO,t2.aSSIGNEDMANUFACTUREID as aSSIGNEDMANUFACTUREID,t2.cONTACTPERSON as cONTACTPERSON,t2.cONTACTMOBILE as cONTACTMOBILE,t2.cONTACTTELEPHONE as cONTACTTELEPHONE,t2.cONTACTEMAIL as cONTACTEMAIL,t2.nOTIFYTYPE as nOTIFYTYPE,t2.lINEID as lINEID,t2.bUSINESSID as bUSINESSID,t2.mANUFACTUREID as mANUFACTUREID,t2.pROJECTDATE as pROJECTDATE,t2.eNDINGDATE as eNDINGDATE,t2.pROJECTMANAGER as pROJECTMANAGER,t2.tESTSCHEMEID as tESTSCHEMEID,t2.mAKEDATE as mAKEDATE,t2.eXECUTESTATE as eXECUTESTATE,t2.mEMO as mEMO,t3 as OPERATOR_PASSWORD,t3.uSERNAME as uSERNAME,t3.uSERTYPE as uSERTYPE,t3.vALIDENDDATE as vALIDENDDATE,t3.oPERATORPASSWORD as oPERATORPASSWORD,t3.oRGID as oRGID,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,zhixing,zhixing.oPERATORNAME as zhixingname" />
<private name="from" type="String" value="TEST_PROJECT_TASK_INFO t1  join TEST_PROJECT_INFO t2 on t1.pROJECTID = t2 join OPERATOR_PASSWORD t3 on t1.pLANOPERATORID = t3 join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on t2.aSSIGNEDMANUFACTUREID = AFC_MANUFACTURER_INFO join HR_BASE_INFO HR_BASE_INFO on t1.pLANOPERATORID = HR_BASE_INFO optional  join HR_BASE_INFO zhixing on t1.aCTUALOPERATORID = zhixing" />
<private name="aggregate" type="String" />
<private name="dataModel" type="String" value="/metrodetection/system_code/data" />
<private name="fnModel" type="String" />
<protected name="condition" type="String" />
<public name="distinct" type="Boolean" value="true"></public>
<public name="idColumn" type="String" value="t1"></public>
<public name="filter" type="String"></public>
<public name="limit" type="Integer"></public>
<public name="offset" type="Integer"></public>
<public name="columns" type="String"></public>
<public name="orderBy" type="String"></public>
<public name="aggregateColumns" type="String"></public>
<public name="variables" type="Map"></public>
</action>
</model>
<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQuerySampleDeviceInfo" global="false" procedure="myQuerySampleDeviceInfoProcedure"><label language="zh_CN">自建受检样品信息查询</label>
<permission type="List" name="range"/>
<private type="String" name="concept" value="SAMPLE_DEVICE_INFO"></private>
<private type="String" name="select" value="SAMPLE_DEVICE_INFO,SAMPLE_DEVICE_INFO.aPPLICATIONNO as aPPLICATIONNO,SAMPLE_DEVICE_INFO.mANUFACTUREID as mANUFACTUREID,SAMPLE_DEVICE_INFO.dEVICETYPE as dEVICETYPE,SAMPLE_DEVICE_INFO.dEVICESTYLE as dEVICESTYLE,SAMPLE_DEVICE_INFO.dECTIONTYPE as dECTIONTYPE,SAMPLE_DEVICE_INFO.dEVICEID as dEVICEID,SAMPLE_DEVICE_INFO.sOFTWAREVERSION as sOFTWAREVERSION,SAMPLE_DEVICE_INFO.hARDWAREVERSION as hARDWAREVERSION,SAMPLE_DEVICE_INFO.dEADLINERECEIVEDATE as dEADLINERECEIVEDATE,SAMPLE_DEVICE_INFO.iNDEEDRECEIVEDATE as iNDEEDRECEIVEDATE,SAMPLE_DEVICE_INFO.rETURNDATE as rETURNDATE,SAMPLE_DEVICE_INFO.iNDEEDRETURNDATE as iNDEEDRETURNDATE,SAMPLE_DEVICE_INFO.sHAREDFLAG as sHAREDFLAG,SAMPLE_DEVICE_INFO.mEMO as mEMO1,SAMPLE_DEVICE_OCCUPY_INFO,SAMPLE_DEVICE_OCCUPY_INFO.sAMPLEDEVICENO as sAMPLEDEVICENO1,SAMPLE_DEVICE_OCCUPY_INFO.dEVICEID as dEVICEID1,SAMPLE_DEVICE_OCCUPY_INFO.tESTTASKID as tESTTASKID,SAMPLE_DEVICE_OCCUPY_INFO.oCCUPYSTARTDATETIME as oCCUPYSTARTDATETIME,SAMPLE_DEVICE_OCCUPY_INFO.oCCUPYENDDATETIME as oCCUPYENDDATETIME,SAMPLE_DEVICE_OCCUPY_INFO.mEMO as mEMO2,TEST_CONTRACT_INFO,TEST_PROJECT_INFO,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,case when SAMPLE_DEVICE_INFO.dECTIONTYPE = 1 then '软件' when SAMPLE_DEVICE_INFO.dECTIONTYPE = 2 then '硬件' else '全部' end as typ,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,SAMPLE_DEVICE_OCCUPY_INFO.pROJECTID as pROJECTID,TEST_CONTRACT_INFO_1.cONTRACTNAME as cONTRACTNAME"></private>
<private type="String" name="from" value="SAMPLE_DEVICE_INFO SAMPLE_DEVICE_INFO  optional  join SAMPLE_DEVICE_OCCUPY_INFO SAMPLE_DEVICE_OCCUPY_INFO on SAMPLE_DEVICE_INFO = SAMPLE_DEVICE_OCCUPY_INFO.sAMPLEDEVICENO optional  join TEST_CONTRACT_INFO TEST_CONTRACT_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_CONTRACT_INFO.aPPLICATIONNO optional  join TEST_PROJECT_INFO TEST_PROJECT_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_PROJECT_INFO.aPPLICATIONNO optional  join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on SAMPLE_DEVICE_INFO.mANUFACTUREID = AFC_MANUFACTURER_INFO optional  join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on SAMPLE_DEVICE_INFO.dEVICETYPE = DETECTION_OBJECT_TYPE optional  join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on DETECTION_OBJECT_TYPE = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND SAMPLE_DEVICE_INFO.dEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE optional  join TEST_CONTRACT_INFO TEST_CONTRACT_INFO_1 on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_CONTRACT_INFO_1.aPPLICATIONNO optional  join TEST_APPLICATION_INFO TEST_APPLICATION_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_APPLICATION_INFO"></private>
<private type="String" name="aggregate"></private>
<private type="String" name="dataModel" value="/metrodetection/system_code/data"></private>
<private type="String" name="fnModel"></private>
<protected type="String" name="condition"/>
<public type="Boolean" name="distinct" value="false"/>
<public type="String" name="idColumn" value="SAMPLE_DEVICE_INFO"/>
<public type="String" name="filter"/>
<public type="Integer" name="limit"/>
<public type="Integer" name="offset" />
<public type="String" name="columns" />
<public type="String" name="orderBy" />
<public type="String" name="aggregateColumns" />
<public type="Map" name="variables" />

</action>
<action name="myQuerySampleDeviceInfozf" global="false" procedure="myQuerySampleDeviceInfozfProcedure"><label language="zh_CN">自建受检样品信息查询</label>
<permission type="List" name="range"/>
<private type="String" name="concept" value="SAMPLE_DEVICE_INFO"></private>
<private type="String" name="select" value="SAMPLE_DEVICE_INFO,SAMPLE_DEVICE_INFO.aPPLICATIONNO as aPPLICATIONNO,SAMPLE_DEVICE_INFO.mANUFACTUREID as mANUFACTUREID,SAMPLE_DEVICE_INFO.dEVICETYPE as dEVICETYPE,SAMPLE_DEVICE_INFO.dEVICESTYLE as dEVICESTYLE,SAMPLE_DEVICE_INFO.dECTIONTYPE as dECTIONTYPE,SAMPLE_DEVICE_INFO.dEVICEID as dEVICEID,SAMPLE_DEVICE_INFO.sOFTWAREVERSION as sOFTWAREVERSION,SAMPLE_DEVICE_INFO.hARDWAREVERSION as hARDWAREVERSION,SAMPLE_DEVICE_INFO.dEADLINERECEIVEDATE as dEADLINERECEIVEDATE,SAMPLE_DEVICE_INFO.iNDEEDRECEIVEDATE as iNDEEDRECEIVEDATE,SAMPLE_DEVICE_INFO.rETURNDATE as rETURNDATE,SAMPLE_DEVICE_INFO.iNDEEDRETURNDATE as iNDEEDRETURNDATE,SAMPLE_DEVICE_INFO.sHAREDFLAG as sHAREDFLAG,SAMPLE_DEVICE_INFO.mEMO as mEMO1,TEST_CONTRACT_INFO,TEST_PROJECT_INFO,TEST_PROJECT_INFO.pROJECTNAME as pROJECTNAME,AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,DETECTION_OBJECT_TYPE,DETECTION_OBJECT_TYPE.dETECTIONOBJECTCNAME as dETECTIONOBJECTCNAME,case when SAMPLE_DEVICE_INFO.dECTIONTYPE = 1 then '软件' when SAMPLE_DEVICE_INFO.dECTIONTYPE = 2 then '硬件' else '全部' end as typ,DEVICE_TYPE_CODE.dEVICETYPECNAME as dEVICETYPECNAME,TEST_CONTRACT_INFO.cONTRACTNAME as cONTRACTNAME"></private>
<private type="String" name="from" value="SAMPLE_DEVICE_INFO SAMPLE_DEVICE_INFO  join TEST_CONTRACT_INFO TEST_CONTRACT_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_CONTRACT_INFO.aPPLICATIONNO join TEST_PROJECT_INFO TEST_PROJECT_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_PROJECT_INFO.aPPLICATIONNO join AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO on SAMPLE_DEVICE_INFO.mANUFACTUREID = AFC_MANUFACTURER_INFO join DETECTION_OBJECT_TYPE DETECTION_OBJECT_TYPE on SAMPLE_DEVICE_INFO.dECTIONTYPE = DETECTION_OBJECT_TYPE join DEVICE_TYPE_CODE DEVICE_TYPE_CODE on DETECTION_OBJECT_TYPE = DEVICE_TYPE_CODE.dETECTIONOBJECTTYPE AND SAMPLE_DEVICE_INFO.dEVICETYPE = DEVICE_TYPE_CODE.dEVICETYPE join TEST_APPLICATION_INFO TEST_APPLICATION_INFO on SAMPLE_DEVICE_INFO.aPPLICATIONNO = TEST_APPLICATION_INFO"></private>
<private type="String" name="aggregate"></private>
<private type="String" name="dataModel" value="/metrodetection/system_code/data"></private>
<private type="String" name="fnModel"></private>
<protected type="String" name="condition"/>
<public type="Boolean" name="distinct" value="true"/>
<public type="String" name="idColumn" value="SAMPLE_DEVICE_INFO"/>
<public type="String" name="filter"/>
<public type="Integer" name="limit"/>
<public type="Integer" name="offset" />
<public type="String" name="columns" />
<public type="String" name="orderBy" />
<public type="String" name="aggregateColumns" />
<public type="Map" name="variables" />
</action>
</model>
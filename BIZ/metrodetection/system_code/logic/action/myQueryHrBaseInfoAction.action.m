<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryHrBaseInfoAction" global="false" procedure="myQueryHrBaseInfoProcedure">
    <label language="zh_CN">人力资源信息查询</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="HR_BASE_INFO"/>  
    <private name="select" type="String" value="HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,HR_BASE_INFO.oPERATORSEX as oPERATORSEX,HR_BASE_INFO.oPERATORBIRTHDAY as oPERATORBIRTHDAY,HR_BASE_INFO.nATION as nATION,HR_BASE_INFO.oFFICEID as oFFICEID,HR_BASE_INFO.pOSITIONID as pOSITIONID,HR_BASE_INFO.dEGREEID as dEGREEID,HR_BASE_INFO.eDUCATIONID as eDUCATIONID,HR_BASE_INFO.pOLITICALID as pOLITICALID,HR_BASE_INFO.pROFESSIONAL as pROFESSIONAL,HR_BASE_INFO.pOSITIONALTITLE as pOSITIONALTITLE,HR_BASE_INFO.eMAILADDRESS as eMAILADDRESS,HR_BASE_INFO.mOBILE as mOBILE,HR_BASE_INFO.oPERATORSTATE as oPERATORSTATE,HR_BASE_INFO.Scode as Scode,OFFICE_TYPE_CODE,OFFICE_TYPE_CODE.oFFICEIDCNAME as oFFICEIDCNAME,POSITION_TYPE_CODE,POSITION_TYPE_CODE.pOSITIONIDCNAME as pOSITIONIDCNAME,ACADEMIC_DEGREE_CODE,ACADEMIC_DEGREE_CODE.dEGREEIDCNAME as dEGREEIDCNAME,EDUCATION_CODE,EDUCATION_CODE.eDUCATIONIDCNAME as eDUCATIONIDCNAME,POLITICAL_AFFILIATION_CODE,POLITICAL_AFFILIATION_CODE.pOLITICALIDCNAME as pOLITICALIDCNAME,POSITIONAL_TITLE_CODE,POSITIONAL_TITLE_CODE.pOSITIONALTITLEIDCNAME as pOSITIONALTITLEIDCNAME,HR_BASE_INFO.mEMO as mEMO,HR_BASE_INFO.cARDID as cARDID"/>  
    <private name="from" type="String" value="HR_BASE_INFO HR_BASE_INFO  optional  join OFFICE_TYPE_CODE OFFICE_TYPE_CODE on HR_BASE_INFO.oFFICEID = OFFICE_TYPE_CODE optional  join POSITION_TYPE_CODE POSITION_TYPE_CODE on HR_BASE_INFO.pOSITIONID = POSITION_TYPE_CODE optional  join ACADEMIC_DEGREE_CODE ACADEMIC_DEGREE_CODE on HR_BASE_INFO.dEGREEID = ACADEMIC_DEGREE_CODE optional  join EDUCATION_CODE EDUCATION_CODE on HR_BASE_INFO.eDUCATIONID = EDUCATION_CODE optional  join POLITICAL_AFFILIATION_CODE POLITICAL_AFFILIATION_CODE on HR_BASE_INFO.pOLITICALID = POLITICAL_AFFILIATION_CODE optional  join POSITIONAL_TITLE_CODE POSITIONAL_TITLE_CODE on HR_BASE_INFO.pOSITIONALTITLE = POSITIONAL_TITLE_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_resource/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="HR_BASE_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryAFCManufacturerAction" global="false" procedure="myQueryAFCManufacturerProcedure">
    <label language="zh_CN">自建委派单位管理查询</label> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="AFC_MANUFACTURER_INFO"/>  
    <private name="select" type="String" value="AFC_MANUFACTURER_INFO,AFC_MANUFACTURER_INFO.mANUFACTUREIDCNAME as mANUFACTUREIDCNAME,case when AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 1 then '设备厂商' when AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 2 then '工具厂商' when AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 3 then '第三方检测机构' when AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 4 then '检测中心实验室' when AFC_MANUFACTURER_INFO.mANUFACTURETYPE = 5 then '加工单位' end as mANUFACTURETYPE_1,AFC_MANUFACTURER_INFO.mANUFACTUREADDRESS as mANUFACTUREADDRESS,AFC_MANUFACTURER_INFO.cONTACTOR as cONTACTOR,AFC_MANUFACTURER_INFO.cONTACTTELEPHONE as cONTACTTELEPHONE,AFC_MANUFACTURER_INFO.mANUFACTUREIDENAME as mANUFACTUREIDENAME,AFC_MANUFACTURER_INFO.mANUFACTURETYPE as mANUFACTURETYPE1,AFC_MANUFACTURER_INFO.mANUFACTUREPOSTCODE as mANUFACTUREPOSTCODE,AFC_MANUFACTURER_INFO.cONTACTMOBILE as cONTACTMOBILE,AFC_MANUFACTURER_INFO.fAXNUMBER as fAXNUMBER,AFC_MANUFACTURER_INFO.cONTACTEMAIL as cONTACTEMAIL,AFC_MANUFACTURER_INFO.mEMO as mEMO,AFC_MANUFACTURER_INFO.oPERATOR_ID as oPERATOR_ID"/>  
    <private name="from" type="String" value="AFC_MANUFACTURER_INFO AFC_MANUFACTURER_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="AFC_MANUFACTURER_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>

<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryCheckRecordAllAction" global="false" procedure="myQueryCheckRecordAllProcedure"><label language="zh_CN">自建纸质文档审批记录查询</label>
    <permission type="List" name="range"/>  
    <private type="String" name="concept" value="CHECK_RECORD"/>  
    <private type="String" name="select" value="CHECK_RECORD,CHECK_RECORD.aPPLICATIONNO as aPPLICATIONNO,CHECK_RECORD.cHECKRESULT as cHECKRESULT,CHECK_RECORD.cHECKNAME as cHECKNAME,CHECK_RECORD.cHECKDESC as cHECKDESC,CHECK_RECORD_1.cHECKNAME as cHECKNAME1,CHECK_RECORD_1.cHECKRESULT as cHECKRESULT1,CHECK_RECORD_1.cHECKDESC as cHECKDESC1,CHECK_RECORD_2.cHECKNAME as cHECKNAME2,CHECK_RECORD_2.cHECKRESULT as cHECKRESULT2,CHECK_RECORD_2.cHECKDESC as cHECKDESC2"/>  
    <private type="String" name="from" value="CHECK_RECORD CHECK_RECORD  optional  join CHECK_RECORD CHECK_RECORD_1 on CHECK_RECORD.aPPLICATIONNO  =  CHECK_RECORD_1.aPPLICATIONNO optional  join CHECK_RECORD CHECK_RECORD_2 on CHECK_RECORD_1.aPPLICATIONNO  =  CHECK_RECORD_2.aPPLICATIONNO"/>  
    <private type="String" name="aggregate"/>  
    <private type="String" name="dataModel" value="/metrodetection/zhip_documents_archive/data"/>  
    <private type="String" name="fnModel"/>  
    <protected type="String" name="condition" value="1=0"/>  
    <public type="Boolean" name="distinct" value="false"/>  
    <public type="String" name="idColumn" value=""/>  
    <public type="String" name="filter"/>  
    <public type="Integer" name="limit"/>  
    <public type="Integer" name="offset"/>  
    <public type="String" name="columns"/>  
    <public type="String" name="orderBy"/>  
    <public type="String" name="aggregateColumns"/>  
    <public type="Map" name="variables"/> 
</action>
</model>
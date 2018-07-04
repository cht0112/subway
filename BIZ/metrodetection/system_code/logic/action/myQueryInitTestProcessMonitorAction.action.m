<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryInitTestProcessMonitorAction" global="false" procedure="myQueryInitTestProcessMonitorProcedure"> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="TEST_TASK_EXECUTE_SUB_CASE"/>  
    <private name="select" type="String" value="ttesc,ttesc.tASKID as tASKID,ttesc.tESTCASEVER as tESTCASEVER,ttesc.tESTCASEID as tESTCASEID,ttesc.sUBTESTCASEID as sUBTESTCASEID,ttesc.sUBTESTCASENAME as sUBTESTCASENAME,ttesc.sUBTESTCASEPRIOR as sUBTESTCASEPRIOR,ttesc.sUBTESTCASEORDER as sUBTESTCASEORDER,ttesc.tIMEUNITID as tIMEUNITID,case when ttesc.tIMEUNITID = 1 then   abs(ttesc.sUBTESTCASETIME) * 365  * 24  when ttesc.tIMEUNITID = 2 then   abs(ttesc.sUBTESTCASETIME) * 30  * 24  when ttesc.tIMEUNITID = 3 then   abs(ttesc.sUBTESTCASETIME) * 7  * 24  when ttesc.tIMEUNITID = 4 then  abs(ttesc.sUBTESTCASETIME) * 24  when ttesc.tIMEUNITID = 5 then  abs(ttesc.sUBTESTCASETIME) * 1  when ttesc.tIMEUNITID = 6 then  abs(ttesc.sUBTESTCASETIME) / 60  when ttesc.tIMEUNITID = 7 then   abs(ttesc.sUBTESTCASETIME) / 60  / 60  end as sUBTESTCASETIME,case when ttesc.sUBTESTCASEEXECUTE = 0 then '未执行' when ttesc.sUBTESTCASEEXECUTE = 1 then '执行中' when ttesc.sUBTESTCASEEXECUTE = 2 then '已执行' when ttesc.sUBTESTCASEEXECUTE = 3 then '延迟' end as sUBTESTCASEEXECUTE,case when ttesc.sUBTESTCASECHECK = 0 then '未知' when ttesc.sUBTESTCASECHECK = 1 then '成功' when ttesc.sUBTESTCASECHECK = 2 then '失败' when ttesc.sUBTESTCASECHECK = 3 then '受阻' end as sUBTESTCASECHECK,case when ttesc.tIMEUNITID = 1 then    abs(ttesc.aCTUALSUBTESTCASETIME) * 12  * 24  * 30  when ttesc.tIMEUNITID = 2 then   abs(ttesc.aCTUALSUBTESTCASETIME) * 24  * 30  when ttesc.tIMEUNITID = 3 then   abs(ttesc.aCTUALSUBTESTCASETIME) * 7  * 30  when ttesc.tIMEUNITID = 4 then   abs(ttesc.aCTUALSUBTESTCASETIME) * 1  * 24  when ttesc.tIMEUNITID = 5 then  abs(ttesc.aCTUALSUBTESTCASETIME) * 1  when ttesc.tIMEUNITID = 6 then abs(ttesc.aCTUALSUBTESTCASETIME) when ttesc.tIMEUNITID = 7 then abs(ttesc.aCTUALSUBTESTCASETIME) end as aCTUALSUBTESTCASETIME,ttesc.eXECUTEDATETIME as eXECUTEDATETIME,ttesc.sUBTESTCASEDESC as sUBTESTCASEDESC,ttesc.rEPORTDATE as rEPORTDATE,case when ttesc.sUBTESTCASECHECK = 1 then '' else '!' end as mark,TEST_PROJECT_TASK_INFO.pROJECTID as pROJECTID,TEST_PROJECT_TASK_INFO.tASKID as tASKID1,TEST_PROJECT_TASK_INFO.tASKNAME as tASKNAME"/>  
    <private name="from" type="String" value="TEST_TASK_EXECUTE_SUB_CASE ttesc  optional  join TEST_PROJECT_TASK_INFO TEST_PROJECT_TASK_INFO on ttesc.tASKID  =  TEST_PROJECT_TASK_INFO.tASKID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="ttesc"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
</model>

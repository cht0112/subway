<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="queryEducationAndJobAction" global="false" procedure="queryEducationAndJobProcedure">
    <label language="zh_CN">新建教育和工作信息查询</label> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String"/>  
    <private name="select" type="String" value="EDUCATION_AND_JOB_INFO,EDUCATION_AND_JOB_INFO.oPERATORID as oPERATORID,EDUCATION_AND_JOB_INFO.eXPERIENCETYPE as eXPERIENCETYPE,case when EDUCATION_AND_JOB_INFO.eXPERIENCETYPE = 1 then '教育信息' when EDUCATION_AND_JOB_INFO.eXPERIENCETYPE = 2 then '培训信息' when EDUCATION_AND_JOB_INFO.eXPERIENCETYPE = 3 then '工作信息' end  as eXPERIENCETYPECNAME,EDUCATION_AND_JOB_INFO.eXPERIENCEPLACE as eXPERIENCEPLACE,EDUCATION_AND_JOB_INFO.eXPERIENCEDESCRIPTION as eXPERIENCEDESCRIPTION,EDUCATION_AND_JOB_INFO.eXPERIENCESTARTDATE as eXPERIENCESTARTDATE,EDUCATION_AND_JOB_INFO.eXPERIENCEENDDATE as eXPERIENCEENDDATE,EDUCATION_AND_JOB_INFO.mEMO as mEMO"/>  
    <private name="from" type="String" value="EDUCATION_AND_JOB_INFO EDUCATION_AND_JOB_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="EDUCATION_AND_JOB_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>
  </action> 
</model>

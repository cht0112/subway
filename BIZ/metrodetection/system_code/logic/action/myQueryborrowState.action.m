<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="myQueryborrowState" global="false" procedure="myQueryborrowStateProcedure"><label language="zh_CN">自定义查询可借状态</label>
<permission name="range" type="List"/>  
    <private name="concept" type="String" value="P_DOCUMENTS_BORROW_RECORD"/>  
    <private name="select" type="String" value="P_DOCUMENTS_BORROW_RECORD.*,P_DOCUMENTS_ARCHIVE.aLLOWBORROW as aLLOWBORROW"/>  
    <private name="from" type="String" value="P_DOCUMENTS_BORROW_RECORD P_DOCUMENTS_BORROW_RECORD  optional  join P_DOCUMENTS_ARCHIVE P_DOCUMENTS_ARCHIVE on P_DOCUMENTS_BORROW_RECORD.pFILEID = P_DOCUMENTS_ARCHIVE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="P_DOCUMENTS_BORROW_RECORD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveP_DOCUMENTS_BORROW_RECORDAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="P_DOCUMENTS_BORROW_RECORD"/>  
    <private name="dataModel" type="String" value="/metrodetection/system_code/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createP_DOCUMENTS_BORROW_RECORDAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="P_DOCUMENTS_BORROW_RECORD"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
</action>
</model>
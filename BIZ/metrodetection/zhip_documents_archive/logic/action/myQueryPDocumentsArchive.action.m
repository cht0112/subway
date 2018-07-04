<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryPDocumentsArchive" global="false" procedure="myQueryPDocumentsArchiveProcedure">
    <label language="zh_CN">自建纸质文档查询</label>  
    <permission type="List" name="range"/>  
    <private type="String" name="concept" value="P_DOCUMENTS_ARCHIVE"/>  
    <private type="String" name="select" value="P_DOCUMENTS_ARCHIVE.DOCUMENT_CATEGORY as DOCUMENT_CATEGORY,DOCUMENT_CATEGORY_CODE"/>  
    <private type="String" name="from" value="P_DOCUMENTS_ARCHIVE P_DOCUMENTS_ARCHIVE  optional  join DOCUMENT_CATEGORY_CODE DOCUMENT_CATEGORY_CODE on P_DOCUMENTS_ARCHIVE.DOCUMENT_CATEGORY =  DOCUMENT_CATEGORY_CODE"/>  
    <private type="String" name="aggregate"/>  
    <private type="String" name="dataModel" value="/metrodetection/zhip_documents_archive/data"/>  
    <private type="String" name="fnModel"/>  
    <protected type="String" name="condition"/>  
    <public type="Boolean" name="distinct" value="false"/>  
    <public type="String" name="idColumn" value="P_DOCUMENTS_ARCHIVE"/>  
    <public type="String" name="filter"/>  
    <public type="Integer" name="limit"/>  
    <public type="Integer" name="offset"/>  
    <public type="String" name="columns"/>  
    <public type="String" name="orderBy"/>  
    <public type="String" name="aggregateColumns"/>  
    <public type="Map" name="variables"/> 
  </action> 

</model>

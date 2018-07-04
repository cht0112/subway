<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myComplaintInfoSelete" global="false" procedure="myComplaintInfoSeleteProcedure"> 
    <label language="zh_CN">解决静态变量显示问题</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="CUSTOMER_COMPLAINT_INFO"/>  
    <private name="select" type="String" value="HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,CUSTOMER_COMPLAINT_INFO,CUSTOMER_COMPLAINT_INFO.MEMO as MEMO,case when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE = 1 then '电话' when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE = 2 then '信函' when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE = 3 then '当面口述' else '传真' end as COMPLAINT_SOURCE1,case when CUSTOMER_COMPLAINT_INFO.SEVERITY = 1 then '严重投诉' when CUSTOMER_COMPLAINT_INFO.SEVERITY = 2 then '较严重投诉' when CUSTOMER_COMPLAINT_INFO.SEVERITY = 3 then '一般投诉' when CUSTOMER_COMPLAINT_INFO.SEVERITY = 4 then '较小投诉' else '其它' end as SEVERITY1,case when CUSTOMER_COMPLAINT_INFO.TYPE = 1 then '对设备的投诉' when CUSTOMER_COMPLAINT_INFO.TYPE = 2 then '对服务态度' when CUSTOMER_COMPLAINT_INFO.TYPE = 3 then '对服务人员技能' when CUSTOMER_COMPLAINT_INFO.TYPE = 4 then '对异常事件' else '其它' end as TYPE1,CUSTOMER_COMPLAINT_INFO.COMPLAINT_DOC_CODE as COMPLAINT_DOC_CODE,CUSTOMER_COMPLAINT_INFO.COMPLAINT_DOC_NO as COMPLAINT_DOC_NO,CUSTOMER_COMPLAINT_INFO.COMPLAINT_UNIT as COMPLAINT_UNIT,CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE as COMPLAINT_SOURCE,CUSTOMER_COMPLAINT_INFO.COMPLAINT_DATE as COMPLAINT_DATE,CUSTOMER_COMPLAINT_INFO.TITLE as TITLE,CUSTOMER_COMPLAINT_INFO.COMPLAINT_CONTENT as COMPLAINT_CONTENT,CUSTOMER_COMPLAINT_INFO.CONTACTOR as CONTACTOR,CUSTOMER_COMPLAINT_INFO.MAILING_ADDRESS as MAILING_ADDRESS,CUSTOMER_COMPLAINT_INFO.POSTCODE as POSTCODE,CUSTOMER_COMPLAINT_INFO.TYPE as TYPE,CUSTOMER_COMPLAINT_INFO.SEVERITY as SEVERITY,CUSTOMER_COMPLAINT_INFO.CONTACTOR_TELEPHONE as CONTACTOR_TELEPHONE,CUSTOMER_COMPLAINT_INFO.CONTACT_EMAIL as CONTACT_EMAIL,CUSTOMER_COMPLAINT_INFO.REGION as REGION,CUSTOMER_COMPLAINT_INFO.RECEIPT as RECEIPT,CUSTOMER_COMPLAINT_INFO.RECEIPT_DATE as RECEIPT_DATE"/>  
    <private name="from" type="String" value="CUSTOMER_COMPLAINT_INFO CUSTOMER_COMPLAINT_INFO  optional  join HR_BASE_INFO HR_BASE_INFO on CUSTOMER_COMPLAINT_INFO.RECEIPT = HR_BASE_INFO"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/customer_service/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="CUSTOMER_COMPLAINT_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
    
   
</model>

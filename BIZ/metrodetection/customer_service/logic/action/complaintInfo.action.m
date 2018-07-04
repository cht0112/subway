<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
    
    
    
  <action name="queryCUSTOMER_COMPLAINT_INFOAction" procedure="bizQueryProcedure">
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="CUSTOMER_COMPLAINT_INFO"/>  
    <private name="select" type="String" value="CUSTOMER_COMPLAINT_INFO.*"/>  
    <private name="from" type="String" value="CUSTOMER_COMPLAINT_INFO CUSTOMER_COMPLAINT_INFO"/>  
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
  <action name="saveCUSTOMER_COMPLAINT_INFOAction" procedure="bizSaveProcedure">
    <permission name="insertRange" type="List"/>  
    <permission name="deleteRange" type="List"/>  
    <permission name="updateRange" type="List"/>  
    <private name="concept" type="String" value="CUSTOMER_COMPLAINT_INFO"/>  
    <private name="dataModel" type="String" value="/metrodetection/customer_service/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" required="true" type="Table"/> 
  </action>  
  <action name="createCUSTOMER_COMPLAINT_INFOAction" procedure="bizCreateProcedure">
    <private name="concept" type="String" value="CUSTOMER_COMPLAINT_INFO"/>  
    <private name="fnModel" type="String"/>  
    <public name="table" required="true" type="Table"/>  
    <public name="defaultValues" type="Map"/> 
  </action>  
    
  <action global="false" name="myQueryComplantFeedbackAction" procedure="myQueryComplantFeedbackProcedure">
    <label language="zh_CN">自建投诉处理关联查询</label> 
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK"/>  
    <private name="select" type="String" value="CUSTOMER_COMPLAINT_INFO.RECEIPT as RECEIPT,CUSTOMER_COMPLAINT_INFO.MEMO as MEMO,CUSTOMER_COMPLAINT_FEEDBACK,CUSTOMER_COMPLAINT_FEEDBACK.RESPONSOR as RESPONSOR,CUSTOMER_COMPLAINT_FEEDBACK.MEMO as MEMO1,case when CUSTOMER_COMPLAINT_INFO.SEVERITY = 1 then '严重投诉' when CUSTOMER_COMPLAINT_INFO.SEVERITY = 2 then '较严重投诉' when CUSTOMER_COMPLAINT_INFO.SEVERITY = 3 then '一般投诉' when CUSTOMER_COMPLAINT_INFO.SEVERITY = 4 then '较小投诉' else '其它' end as SEVERITY1,case when CUSTOMER_COMPLAINT_INFO.TYPE = 1 then '对设备的投诉' when CUSTOMER_COMPLAINT_INFO.TYPE = 2 then '对服务态度' when CUSTOMER_COMPLAINT_INFO.TYPE = 3 then '对服务人员技能' when CUSTOMER_COMPLAINT_INFO.TYPE = 4 then '对异常事件' else '其它' end as TYPE1,case when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE = 1 then '电话' when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE = 2 then '信函' when CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE = 3 then '当面口述' else '传真' end as COMPLAINT_SOURCE1,case when CUSTOMER_COMPLAINT_FEEDBACK.RELEASE = 1 then '是' else '否' end as RELEASE1,case when CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ADVICE = 1 then '即时处理' else '上报管理者代表' end as COMPLAINT_ADVICE1,HR_BASE_INFO1.oPERATORNAME as oPERATORNAME1,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,CUSTOMER_COMPLAINT_INFO.COMPLAINT_DOC_CODE as COMPLAINT_DOC_CODE,CUSTOMER_COMPLAINT_INFO.COMPLAINT_DOC_NO as COMPLAINT_DOC_NO,CUSTOMER_COMPLAINT_INFO.COMPLAINT_UNIT as COMPLAINT_UNIT,CUSTOMER_COMPLAINT_INFO.COMPLAINT_SOURCE as COMPLAINT_SOURCE,CUSTOMER_COMPLAINT_INFO.COMPLAINT_DATE as COMPLAINT_DATE,CUSTOMER_COMPLAINT_INFO.TITLE as TITLE,CUSTOMER_COMPLAINT_INFO.COMPLAINT_CONTENT as COMPLAINT_CONTENT,CUSTOMER_COMPLAINT_INFO.CONTACTOR as CONTACTOR,CUSTOMER_COMPLAINT_INFO.MAILING_ADDRESS as MAILING_ADDRESS,CUSTOMER_COMPLAINT_INFO.POSTCODE as POSTCODE,CUSTOMER_COMPLAINT_INFO.TYPE as TYPE,CUSTOMER_COMPLAINT_INFO.SEVERITY as SEVERITY,CUSTOMER_COMPLAINT_INFO.CONTACTOR_TELEPHONE as CONTACTOR_TELEPHONE,CUSTOMER_COMPLAINT_INFO.CONTACT_EMAIL as CONTACT_EMAIL,CUSTOMER_COMPLAINT_INFO.REGION as REGION,CUSTOMER_COMPLAINT_INFO.RECEIPT_DATE as RECEIPT_DATE,CUSTOMER_COMPLAINT_FEEDBACK.RESPONSOR_TITLE as RESPONSOR_TITLE,CUSTOMER_COMPLAINT_FEEDBACK.DEAL_DATE as DEAL_DATE,CUSTOMER_COMPLAINT_FEEDBACK.RELEASE as RELEASE,CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ANALYSIS as COMPLAINT_ANALYSIS,CUSTOMER_COMPLAINT_FEEDBACK.SOLVING_DESCRIPTION as SOLVING_DESCRIPTION,CUSTOMER_COMPLAINT_FEEDBACK.APPROVER as APPROVER,CUSTOMER_COMPLAINT_FEEDBACK.APPROVAL_DATE as APPROVAL_DATE,CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ADVICE as COMPLAINT_ADVICE,CUSTOMER_COMPLAINT_FEEDBACK.TREATMENT_VERIFICATION as TREATMENT_VERIFICATION,CUSTOMER_COMPLAINT_FEEDBACK.VERIFIER as VERIFIER,CUSTOMER_COMPLAINT_FEEDBACK.VERIFY_DATE as VERIFY_DATE,HR_BASE_INFO_5.oPERATORNAME as oPERATORNAME2,HR_BASE_INFO_6.oPERATORNAME as oPERATORNAME3,CUSTOMER_COMPLAINT_INFO"/>  
    <private name="from" type="String" value="CUSTOMER_COMPLAINT_INFO CUSTOMER_COMPLAINT_INFO  optional  join CUSTOMER_COMPLAINT_FEEDBACK CUSTOMER_COMPLAINT_FEEDBACK on CUSTOMER_COMPLAINT_INFO = CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ID optional  join HR_BASE_INFO HR_BASE_INFO1 on HR_BASE_INFO1 = CUSTOMER_COMPLAINT_FEEDBACK.RESPONSOR optional  join HR_BASE_INFO HR_BASE_INFO on HR_BASE_INFO = CUSTOMER_COMPLAINT_INFO.RECEIPT optional  join HR_BASE_INFO HR_BASE_INFO_5 on HR_BASE_INFO_5 = CUSTOMER_COMPLAINT_FEEDBACK.APPROVER optional  join HR_BASE_INFO HR_BASE_INFO_6 on HR_BASE_INFO_6 = CUSTOMER_COMPLAINT_FEEDBACK.VERIFIER"/>  
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

<action name="queryCUSTOMER_COMPLAINT_FEEDBACKAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK"/>
<private name="select" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK.*"/>
<private name="from" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK CUSTOMER_COMPLAINT_FEEDBACK"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/metrodetection/customer_service/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveCUSTOMER_COMPLAINT_FEEDBACKAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK"/>
<private name="dataModel" type="String" value="/metrodetection/customer_service/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createCUSTOMER_COMPLAINT_FEEDBACKAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
  

</model>
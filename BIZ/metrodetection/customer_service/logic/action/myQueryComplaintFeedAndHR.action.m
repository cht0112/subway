<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="myQueryComplaintFeedAndHR" global="false" procedure="myQueryComplaintFeedAndHRProcedure">
    <label language="zh_CN">自建查询投诉处理显示当前人</label>  
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK"/>  
    <private name="select" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK,CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ID as COMPLAINT_ID,CUSTOMER_COMPLAINT_FEEDBACK.MEMO as MEMO,HR_BASE_INFO,HR_BASE_INFO.oPERATORNAME as oPERATORNAME,CUSTOMER_COMPLAINT_FEEDBACK.RESPONSOR as RESPONSOR,CUSTOMER_COMPLAINT_FEEDBACK.RESPONSOR_TITLE as RESPONSOR_TITLE,CUSTOMER_COMPLAINT_FEEDBACK.DEAL_DATE as DEAL_DATE,CUSTOMER_COMPLAINT_FEEDBACK.RELEASE as RELEASE,CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ANALYSIS as COMPLAINT_ANALYSIS,CUSTOMER_COMPLAINT_FEEDBACK.SOLVING_DESCRIPTION as SOLVING_DESCRIPTION,CUSTOMER_COMPLAINT_FEEDBACK.APPROVER as APPROVER,CUSTOMER_COMPLAINT_FEEDBACK.APPROVAL_DATE as APPROVAL_DATE,CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ADVICE as COMPLAINT_ADVICE,CUSTOMER_COMPLAINT_FEEDBACK.TREATMENT_VERIFICATION as TREATMENT_VERIFICATION,CUSTOMER_COMPLAINT_FEEDBACK.VERIFIER as VERIFIER,CUSTOMER_COMPLAINT_FEEDBACK.VERIFY_DATE as VERIFY_DATE,HR_BASE_INFO_7.oPERATORNAME as oPERATORNAME1,HR_BASE_INFO_8.oPERATORNAME as oPERATORNAME2,case when CUSTOMER_COMPLAINT_FEEDBACK.RELEASE = 1 then '是' else '否' end as RELEASE1,case when CUSTOMER_COMPLAINT_FEEDBACK.COMPLAINT_ADVICE = 1 then '即时处理' else '上报管理者代表' end as COMPLAINT_ADVICE1"/>  
    <private name="from" type="String" value="CUSTOMER_COMPLAINT_FEEDBACK CUSTOMER_COMPLAINT_FEEDBACK  optional  join HR_BASE_INFO HR_BASE_INFO on CUSTOMER_COMPLAINT_FEEDBACK.RESPONSOR = HR_BASE_INFO optional  join HR_BASE_INFO HR_BASE_INFO_7 on HR_BASE_INFO_7 = CUSTOMER_COMPLAINT_FEEDBACK.APPROVER optional  join HR_BASE_INFO HR_BASE_INFO_8 on HR_BASE_INFO_8 = CUSTOMER_COMPLAINT_FEEDBACK.VERIFIER"/>  
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
</model>

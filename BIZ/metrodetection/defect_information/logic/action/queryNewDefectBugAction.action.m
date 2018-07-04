<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<action name="queryNewDefectBugAction" global="false" procedure="queryNewDefectBugProcedure"><label language="zh_CN">自建新建缺陷查询</label>
    <permission name="range" type="List"/>  
    <private name="concept" type="String" value="DEFECT_TRACK_BUG_INFO"/>  
    <private name="select" type="String" value="DEFECT_TRACK_BUG_INFO,DEFECT_TRACK_BUG_INFO.VERSION_ID as VERSION_ID,DEFECT_TRACK_BUG_INFO.FUNC_ID as FUNC_ID,DEFECT_TRACK_BUG_INFO.PLATFORM_INFO as PLATFORM_INFO,DEFECT_TRACK_BUG_INFO.PRIORITY as PRIORITY,DEFECT_TRACK_BUG_INFO.SEVERITY as SEVERITY,DEFECT_TRACK_BUG_INFO.ASSIGN_PERSON as ASSIGN_PERSON,DEFECT_TRACK_BUG_INFO.CC_PERSON as CC_PERSON,DEFECT_TRACK_BUG_INFO.DEFECT_DESC as DEFECT_DESC,DEFECT_TRACK_BUG_INFO.DEFECT_DETAIL as DEFECT_DETAIL,DEFECT_TRACK_BUG_INFO.DEFECT_REASON as DEFECT_REASON,DEFECT_TRACK_BUG_INFO.DEFECT_SOLUTION as DEFECT_SOLUTION,DEFECT_TRACK_BUG_INFO.DEFECT_STATUS as DEFECT_STATUS,DEFECT_TRACK_BUG_INFO.CREATOR as CREATOR,DEFECT_TRACK_BUG_INFO.CREATE_DATE as CREATE_DATE,DEFECT_TRACK_BUG_INFO.REVIEW_COMMENT as REVIEW_COMMENT,DEFECT_TRACK_BUG_INFO.REVIEWER as REVIEWER,DEFECT_TRACK_BUG_INFO.REVIEW_DATE as REVIEW_DATE,DEFECT_TRACK_BUG_INFO.MEMO as MEMO,DEFECT_TRACK_FUNC_INFO.FUNC_NAME as FUNC_NAME,HR_BASE_INFO.oPERATORNAME as ASSIGN_PERSON_NAME,HR_BASE_INFO_1.oPERATORNAME as CC_PERSON_NAME,HR_BASE_INFO_2.oPERATORNAME as CREATOR_NAME,HR_BASE_INFO_3.oPERATORNAME as REVIEWER_NAME,(concat(concat(concat(concat(DEFECT_TRACK_VERSION_INFO.MAJOR_VERSION_NUMBER, '.'), DEFECT_TRACK_VERSION_INFO.MINOR_VERSION_NUMBER), '.'), DEFECT_TRACK_VERSION_INFO.REVISION_NUMBER)) as myVersionId,case when DEFECT_TRACK_BUG_INFO.PRIORITY = 1 then '功能错误' when DEFECT_TRACK_BUG_INFO.PRIORITY = 2 then '功能缺失' when DEFECT_TRACK_BUG_INFO.PRIORITY = 3 then '界面缺陷' when DEFECT_TRACK_BUG_INFO.PRIORITY = 4 then '其他' end as PRIORITY_NAME,case when DEFECT_TRACK_BUG_INFO.SEVERITY = 1 then '致命缺陷' when DEFECT_TRACK_BUG_INFO.SEVERITY = 2 then '严重缺陷' when DEFECT_TRACK_BUG_INFO.SEVERITY = 3 then '一般性缺陷' when DEFECT_TRACK_BUG_INFO.SEVERITY = 4 then '建议性缺陷' when DEFECT_TRACK_BUG_INFO.SEVERITY = 5 then '其它缺陷' end as SEVERITY_NAME,case when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 1 then '已提交' when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 2 then '已分配' when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 3 then '已解决' when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 4 then '不解决' when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 5 then '以后解决' when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 6 then '待审核' when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 7 then '已审核' when DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = 8 then '已关闭' end as DEFECT_STATUS_NAME,DEFECT_TRACK_FUNC_INFO_7.MODULE_ID as MODULE_ID,DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID as PROJECT_ID,DEFECT_TRACK_PRODUCT_INFO.PRODUCT_NAME as PRODUCT_NAME,DEFECT_TRACK_MODULE_INFO.PRODUCT_IDID as PRODUCT_IDID,DEFECT_TRACK_MODULE_INFO.MODULE_NAME as MODULE_NAME,DEFECT_TRACK_PROJECT_INFO.PROJECT_NAME as PROJECT_NAME,DEFECT_TRACK_PROJECT_INFO.PROJECT_MANAGER as PROJECT_MANAGER,DEFECT_TRACK_VERSION_INFO.MAJOR_VERSION_NUMBER as MAJOR_VERSION_NUMBER,DEFECT_TRACK_VERSION_INFO.MINOR_VERSION_NUMBER as MINOR_VERSION_NUMBER,HR_BASE_INFO_4.oPERATORNAME as PROJECT_MANAGER_NAME,DEFECT_STATUS_CODE.DEFECT_STATUS_CNAME as DEFECT_STATUS_CNAME"/>  
    <private name="from" type="String" value="DEFECT_TRACK_BUG_INFO DEFECT_TRACK_BUG_INFO  optional  join DEFECT_TRACK_FUNC_INFO DEFECT_TRACK_FUNC_INFO on DEFECT_TRACK_BUG_INFO.FUNC_ID = DEFECT_TRACK_FUNC_INFO optional  join HR_BASE_INFO HR_BASE_INFO on DEFECT_TRACK_BUG_INFO.ASSIGN_PERSON = HR_BASE_INFO optional  join HR_BASE_INFO HR_BASE_INFO_1 on DEFECT_TRACK_BUG_INFO.CC_PERSON = HR_BASE_INFO_1  or  DEFECT_TRACK_BUG_INFO.CC_PERSON  =  HR_BASE_INFO_1.Scode optional  join HR_BASE_INFO HR_BASE_INFO_2 on DEFECT_TRACK_BUG_INFO.CREATOR = HR_BASE_INFO_2 or  DEFECT_TRACK_BUG_INFO.CREATOR  =  HR_BASE_INFO_2.Scode optional  join HR_BASE_INFO HR_BASE_INFO_3 on DEFECT_TRACK_BUG_INFO.REVIEWER = HR_BASE_INFO_3 or  DEFECT_TRACK_BUG_INFO.REVIEWER  =  HR_BASE_INFO_3.Scode optional  join DEFECT_TRACK_FUNC_INFO DEFECT_TRACK_FUNC_INFO_7 on DEFECT_TRACK_BUG_INFO.FUNC_ID = DEFECT_TRACK_FUNC_INFO_7 optional  join DEFECT_TRACK_MODULE_INFO DEFECT_TRACK_MODULE_INFO on DEFECT_TRACK_FUNC_INFO_7.MODULE_ID = DEFECT_TRACK_MODULE_INFO optional  join DEFECT_TRACK_PRODUCT_INFO DEFECT_TRACK_PRODUCT_INFO on DEFECT_TRACK_MODULE_INFO.PRODUCT_IDID = DEFECT_TRACK_PRODUCT_INFO optional  join DEFECT_TRACK_PROJECT_INFO DEFECT_TRACK_PROJECT_INFO on DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID = DEFECT_TRACK_PROJECT_INFO optional  join DEFECT_TRACK_VERSION_INFO DEFECT_TRACK_VERSION_INFO on DEFECT_TRACK_BUG_INFO.VERSION_ID = DEFECT_TRACK_VERSION_INFO optional  join HR_BASE_INFO HR_BASE_INFO_4 on DEFECT_TRACK_PROJECT_INFO.PROJECT_MANAGER = HR_BASE_INFO_4 optional  join DEFECT_STATUS_CODE DEFECT_STATUS_CODE on DEFECT_TRACK_BUG_INFO.DEFECT_STATUS = DEFECT_STATUS_CODE"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/metrodetection/defect_information/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="DEFECT_TRACK_BUG_INFO"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="DEFECT_TRACK_PRODUCT_INFO.PROJECT_ID desc, DEFECT_TRACK_MODULE_INFO.PRODUCT_IDID desc, DEFECT_TRACK_FUNC_INFO_7.MODULE_ID desc, DEFECT_TRACK_BUG_INFO.FUNC_ID desc, DEFECT_TRACK_BUG_INFO.VERSION_ID desc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
</action>
</model>
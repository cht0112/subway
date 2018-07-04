<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TRAINING_CONTENT_INFO" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="TRAINING_NAME" size="50" required="true"> 
      <label language="zh_CN">培训内容名称</label> 
    </has-relation>  
    <has-relation relation="TRAINING_CONTENT" size="1000"> 
      <label language="zh_CN">培训内容描述</label> 
    </has-relation>  
    <has-relation relation="TRAINING_DOC_ID" size="50"> 
      <label language="zh_CN">培训教材</label> 
    </has-relation>  
    <label language="zh_CN">培训内容</label> 
  <has-relation relation="TRAINING_DOC" data-type="String" size="200"></has-relation><has-relation relation="fChildContentSubjectContent" data-type="RELATION_CONTENT_SUBJECT" whole-part="composition"></has-relation>

</concept>  
  <concept name="TRAINING_COURSE_INFO" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="COURSE_NAME" size="50" required="true"> 
      <label language="zh_CN">培训课程名称</label> 
    </has-relation>  
    <has-relation relation="COURSE_LENGTH" size="20"> 
      <label language="zh_CN">课时长度</label> 
    </has-relation>  
    <label language="zh_CN">培训课程</label>  
    <has-relation relation="fChildContentSubject" data-type="RELATION_CONTENT_SUBJECT"
      single-valued="false" whole-part="composition"/> 
  
<has-relation relation="fChildPlanSubject" data-type="RELATION_PLAN_SUBJECT" whole-part="composition"></has-relation>
</concept>  
  <concept name="TRAINING_EVALUATION_INFO" default-value-expr="nextSeq('20101010')"> 
      
    <has-relation relation="EVALUATION_CODE" size="50" required="true" default-value-expr="'MNITL-03-RF-MR-051-V1.0'"> 
      <label language="zh_CN">评价表编码</label> 
    </has-relation>  
    <has-relation relation="EVALUATION_NO" size="50" required="true" default-value-expr="nextSeqString(concat('SGZGPJB',dateFormat(currentDate(), 'yyyyMMdd' )),'000')"> 
      <label language="zh_CN">评价表编号</label> 
    </has-relation>  
    <has-relation relation="EVALUATED_ID" size="8" required="true"> 
      <label language="zh_CN">被评价人姓名</label> 
    </has-relation>  
    <has-relation relation="EVALUATED_DEPT" size="30"> 
      <label language="zh_CN">所在部门</label> 
    </has-relation>  
    <has-relation relation="POSITION_ID" size="5" data-type="Integer"> 
      <label language="zh_CN">岗位</label> 
    </has-relation>  
    <has-relation relation="IDENTIFED" size="30"> 
      <label language="zh_CN">身份</label> 
    </has-relation>  
    <has-relation relation="WORK_EXP_YEAR" size="22" required="true"> 
      <label language="zh_CN">工作年限</label> 
    </has-relation>  
    <has-relation relation="WORK_TEST_YEAR" size="22" required="true"> 
      <label language="zh_CN">与测试相关工作年限</label> 
    </has-relation>  
    <has-relation relation="ETHICS_EVALUATION" size="1000" required="false"> 
      <label language="zh_CN">职业道德情况评价</label> 
    </has-relation>  
    <has-relation relation="SKILL_EVALUATION" size="1000" required="false"> 
      <label language="zh_CN">专业技术水平能力评价</label> 
    </has-relation>  
    <has-relation relation="EFFECT_EVALUATION" size="1000"> 
      <label language="zh_CN">培训效果评价</label> 
    </has-relation>  
    <has-relation relation="DEFICIENCY" size="1000"> 
      <label language="zh_CN">不足之处</label> 
    </has-relation>  
    <has-relation relation="RECOMMENDATION" size="1000"> 
      <label language="zh_CN">推荐意见</label> 
    </has-relation>  
    <has-relation relation="EVALUATEE" size="8"> 
      <label language="zh_CN">评价人</label> 
    </has-relation>  
    <has-relation relation="EVALUATEE_DATE" data-type="Date" default-value-expr="currentDate()"> 
      <label language="zh_CN">评价日期</label> 
    </has-relation>  
    <has-relation relation="APPROVAL_OPINION" size="1000"> 
      <label language="zh_CN">批准意见</label> 
    </has-relation>  
    <has-relation relation="APPROVAL_ID" size="8"> 
      <label language="zh_CN">批准人</label> 
    </has-relation>  
    <has-relation relation="APPROVAL_DATE" data-type="Date"> 
      <label language="zh_CN">批准日期</label> 
    </has-relation>  
    <has-relation relation="MEMO" size="1000"> 
      <label language="zh_CN">备注</label> 
    </has-relation>  
    <label language="zh_CN">上岗资格评价表</label> 
  </concept>  
  <concept name="TRAINING_PLAN_INFO" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="PLAN_DOC_NO" size="30" default-value-expr="'MNIPL-03-RF-MR-051-V1.0'"> 
      <label language="zh_CN">培训计划文档编码</label> 
    </has-relation>  
    <has-relation relation="PLAN_NO" size="30" default-value-expr="nextSeqString(concat('PXJHSQ',dateFormat(currentDate(), 'yyyyMMdd' )),'000')"> 
      <label language="zh_CN">培训计划编号</label> 
    </has-relation>  
    <has-relation relation="TRAINING_DATE" required="true" data-type="Date"> 
      <label language="zh_CN">培训时间</label> 
    </has-relation>  
    <has-relation relation="DEPT_ID" size="8" required="true"> 
      <label language="zh_CN">培训部门</label> 
    </has-relation>  
    <has-relation relation="TRAINING_TYPE_CODE" size="5" data-type="Integer"> 
      <label language="zh_CN">培训方式</label> 
    </has-relation>  
    <has-relation relation="TEACHER_SOURCE_CODE" size="5" data-type="Integer"> 
      <label language="zh_CN">师资来源</label> 
    </has-relation>  
    <has-relation relation="TRAINING_TIME" size="22"> 
      <label language="zh_CN">培训学时</label> 
    </has-relation>  
    <has-relation relation="TRAINEE_NUMBER" size="22"> 
      <label language="zh_CN">参训人数</label> 
    </has-relation>  
    <has-relation relation="TRAINING_PERIOD" size="22"> 
      <label language="zh_CN">培训期数</label> 
    </has-relation>  
    <has-relation relation="TRAINING_BUDGET" size="10" scale="2"> 
      <label language="zh_CN">费用预算</label> 
    </has-relation>  
    <has-relation relation="PLAN_MAKER" size="8" required="true"> 
      <label language="zh_CN">制定人</label> 
    </has-relation>  
    <has-relation relation="PLAN_MAKE_DATE" required="true" data-type="Date" default-value-expr="currentDate()"> 
      <label language="zh_CN">制定日期</label> 
    </has-relation>  
    <has-relation relation="PLAN_AUDITOR" size="8"> 
      <label language="zh_CN">审批人</label> 
    </has-relation>  
    <has-relation relation="PLAN_AUDIT_DATE" data-type="Date" default-value-expr="currentDate()"> 
      <label language="zh_CN">审批日期</label> 
    </has-relation>  
      
    <label language="zh_CN">培训计划信息</label>  
    <has-relation relation="fChildren" data-type="RELATION_PLAN_SUBJECT" whole-part="composition"
      inverse-of="TRAINING_PLAN_ID"/> 
  </concept>  
  <relation name="WORK_TEST_YEAR" data-type="Integer"> 
    <label language="zh_CN">与测试相关工作年限</label> 
  </relation>  
  <relation name="TEACHER_SOURCE_CODE" data-type="Decimal"> 
    <label language="zh_CN">师资来源</label> 
  </relation>  
  <relation name="TRAINING_PLAN_ID" data-type="Integer"> 
    <label language="zh_CN">培训计划ID</label> 
  </relation>  
  <relation name="POSITION_ID" data-type="Decimal"> 
    <label language="zh_CN">岗位</label> 
  </relation>  
  <relation name="TRAINING_TIME" data-type="Integer"> 
    <label language="zh_CN">培训学时</label> 
  </relation>  
  <relation name="DEFICIENCY" data-type="String"> 
    <label language="zh_CN">不足之处</label> 
  </relation>  
  <relation name="COURSE_NAME" data-type="String"> 
    <label language="zh_CN">培训课程名称</label> 
  </relation>  
  <relation name="APPROVAL_ID" data-type="String"> 
    <label language="zh_CN">批准人</label> 
  </relation>  
  <relation name="SKILL_EVALUATION" data-type="String"> 
    <label language="zh_CN">专业技术水平能力评价</label> 
  </relation>  
  <relation name="EVALUATEE" data-type="String"> 
    <label language="zh_CN">评价人</label> 
  </relation>  
  <relation name="RECOMMENDATION" data-type="String"> 
    <label language="zh_CN">推荐意见</label> 
  </relation>  
  <relation name="EVALUATED_ID" data-type="String"> 
    <label language="zh_CN">被评价人姓名</label> 
  </relation>  
  <relation name="EVALUATION_NO" data-type="String"> 
    <label language="zh_CN">评价表编号</label> 
  </relation>  
  <relation name="APPROVAL_OPINION" data-type="String"> 
    <label language="zh_CN">批准意见</label> 
  </relation>  
  <relation name="TRAINING_CONTENT" data-type="String"> 
    <label language="zh_CN">培训内容描述</label> 
  </relation>  
  <relation name="TRAINING_TYPE_CODE" data-type="Decimal"> 
    <label language="zh_CN">培训方式</label> 
  </relation>  
  <relation name="TRAINING_BUDGET" data-type="Decimal"> 
    <label language="zh_CN">费用预算</label> 
  </relation>  
  <relation name="TRAINEE_NUMBER" data-type="Integer"> 
    <label language="zh_CN">参训人数</label> 
  </relation>  
  <relation name="TRAINING_NAME" data-type="String"> 
    <label language="zh_CN">培训内容名称</label> 
  </relation>  
  <relation name="TRAINING_DOC_ID" data-type="String"> 
    <label language="zh_CN">培训教材ID</label> 
  </relation>  
  <relation name="TRAINING_PERIOD" data-type="Integer"> 
    <label language="zh_CN">培训期数</label> 
  </relation>  
  <relation name="DEPT_ID" data-type="String"> 
    <label language="zh_CN">培训部门</label> 
  </relation>  
  <relation name="ETHICS_EVALUATION" data-type="String"> 
    <label language="zh_CN">职业道德情况评价</label> 
  </relation>  
  <relation name="COURSE_LENGTH" data-type="String"> 
    <label language="zh_CN">课时长度</label> 
  </relation>  
  <relation name="APPROVAL_DATE" data-type="DateTime"> 
    <label language="zh_CN">批准日期</label> 
  </relation>  
  <relation name="PLAN_DOC_NO" data-type="String"> 
    <label language="zh_CN">培训计划文档编码</label> 
  </relation>  
  <relation name="EFFECT_EVALUATION" data-type="String"> 
    <label language="zh_CN">培训效果评价</label> 
  </relation>  
  <relation name="PLAN_AUDIT_DATE" data-type="DateTime"> 
    <label language="zh_CN">审批日期</label> 
  </relation>  
  <relation name="IDENTIFED" data-type="String"> 
    <label language="zh_CN">身份</label> 
  </relation>  
  <relation name="WORK_EXP_YEAR" data-type="Integer"> 
    <label language="zh_CN">工作年限</label> 
  </relation>  
  <relation name="EVALUATED_DEPT" data-type="String"> 
    <label language="zh_CN">所在部门</label> 
  </relation>  
  <relation name="PLAN_MAKER" data-type="String"> 
    <label language="zh_CN">制定人</label> 
  </relation>  
  <relation name="PLAN_NO" data-type="String"> 
    <label language="zh_CN">培训计划编号</label> 
  </relation>  
  <relation name="MEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="PLAN_AUDITOR" data-type="String"> 
    <label language="zh_CN">审批人</label> 
  </relation>  
  <relation name="EVALUATION_CODE" data-type="String"> 
    <label language="zh_CN">评价表编码</label> 
  </relation>  
  <relation name="PLAN_MAKE_DATE" data-type="DateTime"> 
    <label language="zh_CN">制定日期</label> 
  </relation>  
  <relation name="TRAINING_DATE" data-type="DateTime"> 
    <label language="zh_CN">培训时间</label> 
  </relation>  
  <relation name="EVALUATEE_DATE" data-type="DateTime"> 
    <label language="zh_CN">评价日期</label> 
  </relation>  
  <concept name="RELATION_CONTENT_SUBJECT" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="TRAINING_CONTENT_ID" size="22"> 
      <label language="zh_CN">培训内容ID</label> 
    </has-relation>  
    <label language="zh_CN">培训内容与课程关系</label>  
    <has-relation relation="COURSE_IDID" data-type="Integer">
      <label language="zh_CN">培训课程ID</label> 
    </has-relation> 
  </concept>  
  <concept name="RELATION_PLAN_SUBJECT" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="COURSE_ID" size="22"> 
      <label language="zh_CN">培训课程ID</label> 
    </has-relation>  
    <label language="zh_CN">培训计划与课程关系</label>  
    <has-relation relation="TRAINING_PLAN_ID"/> 
  </concept>  
  <relation name="COURSE_ID" data-type="Integer"> 
    <label language="zh_CN">培训课程ID</label> 
  </relation>  
    <relation name="COURSE_IDID" data-type="Integer"> 
    <label language="zh_CN">培训课程ID</label> 
  </relation>  
  <relation name="TRAINING_CONTENT_ID" data-type="Integer"> 
    <label language="zh_CN">培训内容ID</label> 
  </relation>  
  <relation name="fPXJHID1" data-type="Integer"> 
    <label language="zh_CN">培训计划ID1</label> 
  </relation>  
  <relation name="fChildren" data-type="RELATION_PLAN_SUBJECT" inverse-of="TRAINING_PLAN_ID"
    single-valued="false"> 
    <label language="zh_CN">Children</label> 
  </relation>  
  <relation name="fChildContentSubject" data-type="RELATION_CONTENT_SUBJECT" single-valued="false"
    inverse-of="COURSE_IDID"> 
    <label language="zh_CN">ChildContentSubject</label> 
  </relation> 

<relation name="fChildPlanSubject" data-type="RELATION_PLAN_SUBJECT" inverse-of="COURSE_ID" single-valued="false"><label language="zh_CN">ChildPlanSubject</label>
</relation>
<relation name="fChildContentSubjectContent" data-type="RELATION_CONTENT_SUBJECT" inverse-of="TRAINING_CONTENT_ID" single-valued="false"><label language="zh_CN">ChildContentSubjectContent</label>
</relation>
<relation name="TRAINING_DOC" data-type="String"><label language="zh_CN">培训纸质教材</label>
</relation>
</model>

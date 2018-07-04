<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="QA_SUPERVISION_PLAN" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="SUPERVISION_PLAN_CODEPLANCODE" size="50" required="true" default-value-expr="'MNITL-03-RF-QR-0011-V1.0 '"> 
      <label language="zh_CN">质量监督计划编码</label> 
    </has-relation>  
    <has-relation relation="SUPERVISION_NO" size="50" required="true" default-value-expr="nextSeqString(concat('ZLJD',dateFormat(currentDate(), 'yyyyMMdd' )),'000')"> 
      <label language="zh_CN">计量监督计划编号</label> 
    </has-relation>  
    <has-relation relation="PROJECT_ID" size="10" required="true" data-type="Integer"> 
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="PROJECT_NAME" size="200" required="true"> 
      <label language="zh_CN">项目名称</label> 
    </has-relation>  
    <has-relation relation="PROJECT_DATE" required="true" data-type="Date"> 
      <label language="zh_CN">项目开始日期</label> 
    </has-relation>  
    <has-relation relation="ENDING_DATE" required="true" data-type="Date"> 
      <label language="zh_CN">项目结束日期</label> 
    </has-relation>  
    <has-relation relation="EMPLOYEE_NUMBER" size="3" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">正式员工数</label> 
    </has-relation>  
    <has-relation relation="PROBATION_NUMBER" size="3" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">试用期员工数</label> 
    </has-relation>  
    <has-relation relation="STUDENT_NUMBER" size="3" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">实习学生数</label> 
    </has-relation>  
    <has-relation relation="OTHER_NUMBER" size="3" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">其它人数</label> 
    </has-relation>  
    <has-relation relation="TOTAL_NUMBER" size="3" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">合计人数</label> 
    </has-relation>  
    <has-relation relation="PROJECT_PRIOR" size="3" default-value-expr="3" data-type="Integer"> 
      <label language="zh_CN">项目重要程度等级</label> 
    </has-relation>  
    <has-relation relation="SUPERVISION_COUNT" size="3" data-type="Integer"> 
      <label language="zh_CN">质量监督次数</label> 
    </has-relation>  
    <has-relation relation="PLAN_PEOPLE" size="8" required="true"> 
      <label language="zh_CN">计划制定人</label> 
    </has-relation>  
    <has-relation relation="PLAN_DATE" required="true" default-value-expr="currentDate()" data-type="Date"> 
      <label language="zh_CN">计划制定日期</label> 
    </has-relation>  
    <has-relation relation="SUPPLEMENT" size="1000"> 
      <label language="zh_CN">其他补充说明</label> 
    </has-relation>  
    <has-relation relation="RESPONSOR_VIEW" size="1000"> 
      <label language="zh_CN">质量负责人意见</label> 
    </has-relation>  
    <has-relation relation="MEMO" size="1000"> 
      <label language="zh_CN">备注</label> 
    </has-relation>  
    <label language="zh_CN">质量监督计划</label> 
  <has-relation relation="fChildren" data-type="QA_SUPERVISION_PLAN_ROUND" whole-part="composition"></has-relation>
<has-relation relation="fChildren2" data-type="DAILY_SUPERVISION_RECORD" whole-part="composition"></has-relation>
</concept>  
  <relation name="SUPPLEMENT" data-type="String"> 
    <label language="zh_CN">其他补充说明</label> 
  </relation>  
  <relation name="PLAN_PEOPLE" data-type="String"> 
    <label language="zh_CN">计划制定人</label> 
  </relation>  
  <relation name="SUPERVISION_COUNT" data-type="Decimal"> 
    <label language="zh_CN">质量监督次数</label> 
  </relation>  
  <relation name="PROJECT_NAME" data-type="String"> 
    <label language="zh_CN">项目名称</label> 
  </relation>  
  <relation name="PROJECT_PRIOR" data-type="Decimal"> 
    <label language="zh_CN">项目重要程度等级</label> 
  </relation>  
  <relation name="RESPONSOR_VIEW" data-type="String"> 
    <label language="zh_CN">质量负责人意见</label> 
  </relation>  
  <relation name="EMPLOYEE_NUMBER" data-type="Decimal"> 
    <label language="zh_CN">正式员工数</label> 
  </relation>  
  <relation name="PROJECT_DATE" data-type="DateTime"> 
    <label language="zh_CN">项目开始日期</label> 
  </relation>  
  <relation name="SUPERVISION_PLAN_CODEPLANCODE" data-type="String"> 
    <label language="zh_CN">质量监督计划编码</label> 
  </relation>  
  <relation name="MEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="PROBATION_NUMBER" data-type="Decimal"> 
    <label language="zh_CN">试用期员工数</label> 
  </relation>  
  <relation name="PROJECT_ID" data-type="Decimal"> 
    <label language="zh_CN">项目ID</label> 
  </relation>  
  <relation name="SUPERVISION_NO" data-type="String"> 
    <label language="zh_CN">SUPERVISION_NONO</label> 
  </relation>  
  <relation name="STUDENT_NUMBER" data-type="Decimal"> 
    <label language="zh_CN">实习学生数</label> 
  </relation>  
  <relation name="TOTAL_NUMBER" data-type="Decimal"> 
    <label language="zh_CN">合计人数</label> 
  </relation>  
  <relation name="PLAN_DATE" data-type="DateTime"> 
    <label language="zh_CN">计划制定日期</label> 
  </relation>  
  <relation name="ENDING_DATE" data-type="DateTime"> 
    <label language="zh_CN">项目结束日期</label> 
  </relation>  
  <relation name="OTHER_NUMBER" data-type="Decimal"> 
    <label language="zh_CN">其他人数</label> 
  </relation> 
<relation name="fChildren" data-type="QA_SUPERVISION_PLAN_ROUND" single-valued="false" inverse-of="SUPERVISION_PLAN_ID"><label language="zh_CN">Children</label>
</relation>
<relation name="fChildren2" data-type="DAILY_SUPERVISION_RECORD" single-valued="false" inverse-of="SUPERVISION_PLAN_IDID"><label language="zh_CN">Children2</label>
</relation>
</model>

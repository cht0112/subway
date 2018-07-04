<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="CHANGE_APPLY_INFO" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="CHANGE_APPLY_DOC_NO" data-type="String" default-value-expr="'MNITL-03-RF-TR-001-V1.0'"></has-relation><has-relation relation="CHANGE_APPLY_NOAPPLYNO" size="30" required="true" default-value-expr="nextSeqString(concat('BGSQ',dateFormat(currentDate(), 'yyyyMMdd' )),'000')
"> 
      <label language="zh_CN">CHANGE_APPLY_NOAPPLYNO</label> 
    </has-relation>  
    <has-relation relation="CHANGE_TITLETITLE" size="256" required="true"> 
      <label language="zh_CN">CHANGE_TITLETITLE</label> 
    </has-relation>  
    <has-relation relation="PROJECT_IDID" size="10" data-type="Integer"/>  
    <has-relation relation="PROJECT_NAMENAME" size="200"> 
      <label language="zh_CN">PROJECT_NAMENAME</label> 
    </has-relation>  
    <has-relation relation="CHANGE_OBJECTOBJECT" size="50"> 
      <label language="zh_CN">CHANGE_OBJECTOBJECT</label> 
    </has-relation>  
    <has-relation relation="CHANGE_CONTENTCONTENT" size="1000" required="true"> 
      <label language="zh_CN">CHANGE_CONTENTCONTENT</label> 
    </has-relation>  
    <has-relation relation="CHANGE_REASONREASON" size="100"> 
      <label language="zh_CN">CHANGE_REASONREASON</label> 
    </has-relation>  
    <has-relation relation="IMPACT_RANGERANGE" size="200"> 
      <label language="zh_CN">IMPACT_RANGERANGE</label> 
    </has-relation>  
    <has-relation relation="POTENTIAL_RISKRISK" size="200"> 
      <label language="zh_CN">POTENTIAL_RISKRISK</label> 
    </has-relation>  
    <has-relation relation="RESOLVE_RISKRISK" size="200"> 
      <label language="zh_CN">RESOLVE_RISKRISK</label> 
    </has-relation>  
    <has-relation relation="IMPLEMENTATION_PROCESSPROCESS" size="1000"> 
      <label language="zh_CN">IMPLEMENTATION_PROCESSPROCESS</label> 
    </has-relation>  
    <has-relation relation="RESOURCES_NEEDEDNEEDED" size="200"> 
      <label language="zh_CN">RESOURCES_NEEDEDNEEDED</label> 
    </has-relation>  
    <has-relation relation="CHANGE_TIMETIME" data-type="Date"> 
      <label language="zh_CN">CHANGE_TIMETIME</label> 
    </has-relation>  
    <has-relation relation="APPLY_PERSONPERSON" size="8" required="true"> 
      <label language="zh_CN">APPLY_PERSONPERSON</label> 
    </has-relation>  
    <has-relation relation="APPLY_DATEDATE" required="true" default-value-expr="currentDate()" data-type="Date"> 
      <label language="zh_CN">APPLY_DATEDATE</label> 
    </has-relation><has-relation relation="APPLY_APPROVER" data-type="String"></has-relation>  
    <has-relation relation="APPLY_APPROVE_DATE" data-type="Date" default-value-expr="currentDate()"></has-relation><has-relation relation="REASON_ASSESSMENTASSESSMENT" size="200"> 
      <label language="zh_CN">REASON_ASSESSMENTASSESSMENT</label> 
    </has-relation>  
    <has-relation relation="RANGE_ASSESSMENTASSESSMENT" size="200"> 
      <label language="zh_CN">RANGE_ASSESSMENTASSESSMENT</label> 
    </has-relation>  
    <has-relation relation="RISK_ASSESSMENTASSESSMENT" size="200"> 
      <label language="zh_CN">RISK_ASSESSMENTASSESSMENT</label> 
    </has-relation>  
    <has-relation relation="PROCESS_ASSESSMENTASSESSMENT" size="200"> 
      <label language="zh_CN">PROCESS_ASSESSMENTASSESSMENT</label> 
    </has-relation>  
    <has-relation relation="RESOURCE_ASSESSMENTASSESSMENT" size="200"> 
      <label language="zh_CN">RESOURCE_ASSESSMENTASSESSMENT</label> 
    </has-relation>  
    <has-relation relation="TIME_ASSESSMENTASSESSMENT" size="200"> 
      <label language="zh_CN">TIME_ASSESSMENTASSESSMENT</label> 
    </has-relation>  
    <has-relation relation="APPROVAL_STATUSSTATUS" size="3" data-type="Integer" default-value-expr="3"> 
      <label language="zh_CN">APPROVAL_STATUSSTATUS</label> 
    </has-relation>  
    <has-relation relation="ACCEPT_OPINIONOPINION" size="1000"> 
      <label language="zh_CN">ACCEPT_OPINIONOPINION</label> 
    </has-relation>  
    <has-relation relation="CHANGE_AUDIT_DATE" data-type="Date" default-value-expr="currentDate()"> 
      <label language="zh_CN">CHANGE_AUDIT_DATE</label> 
    </has-relation>  
    <has-relation relation="CHANGE_AUDITOR" size="8"> 
      <label language="zh_CN">CHANGE_AUDITOR</label> 
    </has-relation> 
  <label language="zh_CN">变更申请审核信息</label>

<has-relation relation="VERSION" data-type="Integer"></has-relation>
<has-relation relation="MEMO" data-type="String"></has-relation>


</concept>  
  <relation name="PROCESS_ASSESSMENTASSESSMENT" data-type="String"> 
    <label language="zh_CN">PROCESS_ASSESSMENTASSESSMENT</label> 
  </relation>  
  <relation name="CHANGE_OBJECTOBJECT" data-type="String"> 
    <label language="zh_CN">CHANGE_OBJECTOBJECT</label> 
  </relation>  
  <relation name="APPROVAL_STATUSSTATUS" data-type="Decimal"> 
    <label language="zh_CN">APPROVAL_STATUSSTATUS</label> 
  </relation>  
  <relation name="ACCEPT_OPINIONOPINION" data-type="String"> 
    <label language="zh_CN">ACCEPT_OPINIONOPINION</label> 
  </relation>  
  <relation name="POTENTIAL_RISKRISK" data-type="String"> 
    <label language="zh_CN">POTENTIAL_RISKRISK</label> 
  </relation>  
  <relation name="IMPACT_RANGERANGE" data-type="String"> 
    <label language="zh_CN">IMPACT_RANGERANGE</label> 
  </relation>  
  <relation name="RANGE_ASSESSMENTASSESSMENT" data-type="String"> 
    <label language="zh_CN">RANGE_ASSESSMENTASSESSMENT</label> 
  </relation>  
  <relation name="RESOURCE_ASSESSMENTASSESSMENT" data-type="String"> 
    <label language="zh_CN">RESOURCE_ASSESSMENTASSESSMENT</label> 
  </relation>  
  <relation name="TIME_ASSESSMENTASSESSMENT" data-type="String"> 
    <label language="zh_CN">TIME_ASSESSMENTASSESSMENT</label> 
  </relation>  
  <relation name="IMPLEMENTATION_PROCESSPROCESS" data-type="String"> 
    <label language="zh_CN">IMPLEMENTATION_PROCESSPROCESS</label> 
  </relation>  
  <relation name="CHANGE_AUDIT_DATE" data-type="DateTime"> 
    <label language="zh_CN">CHANGE_AUDIT_DATE</label> 
  </relation>  
  <relation name="PROJECT_NAMENAME" data-type="String"> 
    <label language="zh_CN">PROJECT_NAMENAME</label> 
  </relation>  
  <relation name="CHANGE_REASONREASON" data-type="String"> 
    <label language="zh_CN">CHANGE_REASONREASON</label> 
  </relation>  
  <relation name="CHANGE_APPLY_NOAPPLYNO" data-type="String"> 
    <label language="zh_CN">CHANGE_APPLY_NOAPPLYNO</label> 
  </relation>  
  <relation name="CHANGE_TITLETITLE" data-type="String"> 
    <label language="zh_CN">CHANGE_TITLETITLE</label> 
  </relation>  
  <relation name="RISK_ASSESSMENTASSESSMENT" data-type="String"> 
    <label language="zh_CN">RISK_ASSESSMENTASSESSMENT</label> 
  </relation>  
  <relation name="CHANGE_TIMETIME" data-type="DateTime"> 
    <label language="zh_CN">CHANGE_TIMETIME</label> 
  </relation>  
  <relation name="RESOLVE_RISKRISK" data-type="String"> 
    <label language="zh_CN">RESOLVE_RISKRISK</label> 
  </relation>  
  <relation name="CHANGE_AUDITOR" data-type="String"> 
    <label language="zh_CN">CHANGE_AUDITOR</label> 
  </relation>  
  <relation name="APPLY_PERSONPERSON" data-type="String"> 
    <label language="zh_CN">APPLY_PERSONPERSON</label> 
  </relation>  
  <relation name="REASON_ASSESSMENTASSESSMENT" data-type="String"> 
    <label language="zh_CN">REASON_ASSESSMENTASSESSMENT</label> 
  </relation>  
  <relation name="PROJECT_IDID" data-type="Decimal"> 
    <label language="zh_CN">PROJECT_IDID</label> 
  </relation>  
  <relation name="CHANGE_CONTENTCONTENT" data-type="String"> 
    <label language="zh_CN">CHANGE_CONTENTCONTENT</label> 
  </relation>  
  <relation name="RESOURCES_NEEDEDNEEDED" data-type="String"> 
    <label language="zh_CN">RESOURCES_NEEDEDNEEDED</label> 
  </relation>  
  <relation name="APPLY_DATEDATE" data-type="DateTime"> 
    <label language="zh_CN">APPLY_DATEDATE</label> 
  </relation> 
<relation name="CHANGE_APPLY_DOC_NO" data-type="String"><label language="zh_CN">CHANGE_APPLY_DOC_NO</label>
</relation>
<relation name="VERSION" data-type="Integer"><label language="zh_CN">VERSION</label>
</relation>
<relation name="MEMO" data-type="String"><label language="zh_CN">MEMO</label>
</relation>
<relation name="APPLY_APPROVER" data-type="String"><label language="zh_CN">APPLY_APPROVER</label>
</relation>
<relation name="APPLY_APPROVE_DATE" data-type="DateTime"><label language="zh_CN">APPLY_APPROVE_DATE</label>
</relation>
</model>

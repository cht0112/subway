<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="QA_SUPERVISION_PLAN_ROUND" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="SUPERVISION_PLAN_ID" size="22"> 
      <label language="zh_CN">质量监督计划ID</label> 
    </has-relation>  
    <has-relation relation="ROUND_NO" size="3" required="true" data-type="Integer"> 
      <label language="zh_CN">轮次</label> 
    </has-relation>  
    <has-relation relation="SUPERVISION_DATE" required="true" data-type="Date"> 
      <label language="zh_CN">监督时间</label> 
    </has-relation>  
    <has-relation relation="SUPERVISION_PERSON" size="8" required="true"> 
      <label language="zh_CN">监督员</label> 
    </has-relation>  
    <label language="zh_CN"/> 
  </concept>  
  <relation name="SUPERVISION_PERSON" data-type="String"> 
    <label language="zh_CN">监督员</label> 
  </relation>  
  <relation name="SUPERVISION_DATE" data-type="DateTime"> 
    <label language="zh_CN">监督时间</label> 
  </relation>  
  <relation name="ROUND_NO" data-type="Decimal"> 
    <label language="zh_CN">轮次</label> 
  </relation>  
  <relation name="SUPERVISION_PLAN_ID" data-type="Integer"> 
    <label language="zh_CN">质量监督计划ID</label> 
  </relation> 
</model>

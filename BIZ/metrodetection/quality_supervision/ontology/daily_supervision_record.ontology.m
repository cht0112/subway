<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DAILY_SUPERVISION_RECORD" default-value-expr="nextSeq('20101010')"> 
    <has-relation relation="SUPERVISION_PLAN_IDID" size="22"/>  
    <has-relation relation="RECORD_CODE" size="50" required="true" default-value-expr="'MNITL-03-RF-QR-008-V1.0 '"> 
      <label language="zh_CN">记录单据编码</label> 
    </has-relation>  
    <has-relation relation="RECORD_NO" size="50" required="true" default-value-expr="nextSeqString(concat('YCJD',dateFormat(currentDate(), 'yyyyMMdd' )),'000')"> 
      <label language="zh_CN">记录单据编号</label> 
    </has-relation>  
    <has-relation relation="RECORD_DATE" required="true" data-type="Date"> 
      <label language="zh_CN">监督检查日期</label> 
    </has-relation>  
    <has-relation relation="SUPERVISION_PERSON" size="8" required="true"/>  
    <has-relation relation="RECORD_CONTENT" size="50" required="true"> 
      <label language="zh_CN">监督内容</label> 
    </has-relation>  
    <has-relation relation="FACTUAL_RECORD" size="1000" required="true"> 
      <label language="zh_CN">监督事实记录</label> 
    </has-relation>  
    <has-relation relation="CONFIRMATION_OPINIONS" size="1000"> 
      <label language="zh_CN">确认意见</label> 
    </has-relation>  
    <has-relation relation="SUPPLEMENTARY_DESC" size="1000"> 
      <label language="zh_CN">补充说明</label> 
    </has-relation>  
      
    <has-relation relation="SIGNING_DATE" data-type="Date"> 
      <label language="zh_CN">签署意见日期</label> 
    </has-relation>  
    <label language="zh_CN">日常监督记录表</label> 
  <has-relation relation="RESPONSOR_PERSON"></has-relation>
</concept>  
  <relation name="SUPERVISION_PERSON" data-type="String"> 
    <label language="zh_CN">监督员</label> 
  </relation>  
  <relation name="RESPONSOR_PERSON" data-type="String"> 
    <label language="zh_CN">被监督部门负责人</label> 
  </relation>  
  <relation name="SUPPLEMENTARY_DESC" data-type="String"> 
    <label language="zh_CN">补充说明</label> 
  </relation>  
  <relation name="RECORD_CODE" data-type="String"> 
    <label language="zh_CN">记录单据编码</label> 
  </relation>  
  <relation name="RECORD_CONTENT" data-type="String"> 
    <label language="zh_CN">监督内容</label> 
  </relation>  
  <relation name="RECORD_NO" data-type="String"> 
    <label language="zh_CN">记录单据编号</label> 
  </relation>  
  <relation name="CONFIRMATION_OPINIONS" data-type="String"> 
    <label language="zh_CN">确认意见</label> 
  </relation>  
  <relation name="RECORD_DATE" data-type="DateTime"> 
    <label language="zh_CN">监督检查日期</label> 
  </relation>  
  <relation name="SIGNING_DATE" data-type="DateTime"> 
    <label language="zh_CN">签署意见日期</label> 
  </relation>  
  <relation name="FACTUAL_RECORD" data-type="String"> 
    <label language="zh_CN">监督事实记录</label> 
  </relation>  
  <relation name="SUPERVISION_PLAN_IDID" data-type="Integer"> 
    <label language="zh_CN">质量监督计划ID</label> 
  </relation> 
</model>

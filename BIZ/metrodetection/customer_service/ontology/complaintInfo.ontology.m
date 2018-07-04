<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="CUSTOMER_COMPLAINT_INFO" default-value-expr="nextSeq('20101010')"> 
    <label language="zh_CN">客户投诉登记</label>  
    <has-relation relation="COMPLAINT_DOC_CODE" default-value-expr="'MNITL-03-RF-MR-020-V1.0'"><label language="zh_CN">客户投诉文档编码</label>
</has-relation>  
    <has-relation relation="COMPLAINT_DOC_NO" default-value-expr="nextSeqString(concat('KHTSWD',dateFormat(currentDate(), 'yyyyMMdd' )),'000')"><label language="zh_CN">客户投诉文档单据号</label>
</has-relation>  
    <has-relation relation="COMPLAINT_UNIT"><label language="zh_CN">客户名称</label>
</has-relation><has-relation relation="COMPLAINT_SOURCE" default-value-expr="1"></has-relation><has-relation relation="COMPLAINT_DATE" data-type="Date" default-value-expr="currentDate()"><label language="zh_CN">意见来源时间</label>
</has-relation><has-relation relation="TITLE" /><has-relation relation="COMPLAINT_CONTENT"><label language="zh_CN">意见综述</label>
</has-relation><has-relation relation="CONTACTOR"><label language="zh_CN">联系人</label>
</has-relation>  
      
      
      
    <has-relation relation="MAILING_ADDRESS"></has-relation><has-relation relation="POSTCODE"></has-relation><has-relation relation="TYPE" data-type="Integer" default-value-expr="1"/>  
    <has-relation relation="SEVERITY" data-type="Integer" default-value-expr="3"><label language="zh_CN">严重级</label>
</has-relation><has-relation relation="CONTACTOR_TELEPHONE" />  
      
    <has-relation relation="CONTACT_EMAIL"><label language="zh_CN">电子邮箱</label>
</has-relation>  
    <has-relation relation="REGION"/>  
      
    <has-relation relation="RECEIPT"/>  
    <has-relation relation="RECEIPT_DATE" data-type="Date" default-value-expr="currentDate()"/>  
      
      
    <has-relation relation="MEMO"/> 
  <has-relation relation="fChildren" data-type="CUSTOMER_COMPLAINT_FEEDBACK" single-valued="false" whole-part="composition"></has-relation>



</concept>  
  <relation name="TYPE" data-type="Integer">
    <label language="zh_CN">投诉类型</label> 
  </relation>  
  <relation name="RECEIPT_DATE" data-type="Date">
    <label language="zh_CN">受理日期</label> 
  </relation>  
  <relation name="COMPLAINT_UNIT" data-type="String">
    <label language="zh_CN">客户名称</label> 
  </relation>  
  <relation name="RECEIPT" data-type="String">
    <label language="zh_CN">受理人</label> 
  </relation>  
    
  <relation name="CONTACTOR" data-type="String">
    <label language="zh_CN">联系人</label> 
  </relation>  
  <relation name="REGION" data-type="String">
    <label language="zh_CN">所属地区</label> 
  </relation>  
  <relation name="COMPLAINT_DATE" data-type="Date">
    <label language="zh_CN">意见来源时间</label> 
  </relation>  
  <relation name="COMPLAINT_DOC_CODE" data-type="String">
    <label language="zh_CN">客户投诉文档编码</label> 
  </relation>  
  <relation name="MEMO" data-type="String">
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="TITLE" data-type="String">
    <label language="zh_CN">投诉主题</label> 
  </relation>  
    
  <relation name="COMPLAINT_DOC_NO" data-type="String">
    <label language="zh_CN">客户投诉文档单据号</label> 
  </relation>  
  <relation name="CONTACTOR_TELEPHONE" data-type="String">
    <label language="zh_CN">联系电话</label> 
  </relation>  
  <relation name="COMPLAINT_CONTENT" data-type="String">
    <label language="zh_CN">意见综述</label> 
  </relation>  
  <relation name="CONTACT_EMAIL" data-type="String">
    <label language="zh_CN">电子邮箱</label> 
  </relation>  
  <relation name="SEVERITY" data-type="Integer">
    <label language="zh_CN">严重级</label> 
  </relation>  
  <concept name="CUSTOMER_COMPLAINT_FEEDBACK" default-value-expr="nextSeq('020101010')"> 
    <label language="zh_CN">客户投诉处理</label>  
    <has-relation relation="COMPLAINT_ID"/>
    <has-relation relation="RESPONSOR"/>
    <has-relation relation="RESPONSOR_TITLE"/>
    <has-relation relation="DEAL_DATE" default-value-expr="currentDate()"/>  
    <has-relation relation="RELEASE"/>
    <has-relation relation="COMPLAINT_ANALYSIS"/>  
    <has-relation relation="SOLVING_DESCRIPTION"/>  
    <has-relation relation="MEMO"/> 
  <has-relation relation="APPROVER"></has-relation>
<has-relation relation="APPROVAL_DATE" data-type="Date"></has-relation>
<has-relation relation="COMPLAINT_ADVICE" default-value-expr="1"></has-relation>
<has-relation relation="TREATMENT_VERIFICATION"></has-relation>
<has-relation relation="VERIFIER"></has-relation>
<has-relation relation="VERIFY_DATE" data-type="Date"></has-relation>
</concept>  
  <relation name="DEAL_DATE" data-type="Date" default-value-expr="currentDate()">
    <label language="zh_CN">分析日期</label> 
  </relation>  
  <relation name="RELEASE" data-type="Integer">
    <label language="zh_CN">是否发布</label> 
  </relation>  
  <relation name="SOLVING_DESCRIPTION" data-type="String">
    <label language="zh_CN">解决问题过程综述</label> 
  </relation>  
  <relation name="COMPLAINT_ID" data-type="Integer">
    <label language="zh_CN">投诉记录ID</label> 
  </relation>  
  <relation name="COMPLAINT_ANALYSIS" data-type="String">
    <label language="zh_CN">问题分析及处理建议</label> 
  </relation>  
  <relation name="RESPONSOR_TITLE" data-type="String">
    <label language="zh_CN">处理人职务</label> 
  </relation>  
  <relation name="RESPONSOR" data-type="String">
    <label language="zh_CN">分析人</label> 
  </relation> 
<relation name="fChildren" data-type="CUSTOMER_COMPLAINT_FEEDBACK" single-valued="false" inverse-of="COMPLAINT_ID"><label language="zh_CN">Children</label>
</relation>

<relation name="COMPLAINT_SOURCE" data-type="Integer"><label language="zh_CN">意见来源</label>
</relation>
<relation name="MAILING_ADDRESS" data-type="String"><label language="zh_CN">通信地址</label>
</relation>
<relation name="POSTCODE" data-type="String"><label language="zh_CN">邮编</label>
</relation>
<relation name="APPROVER" data-type="String"><label language="zh_CN">批准人</label>
</relation>
<relation name="APPROVAL_DATE" data-type="Date"><label language="zh_CN">批准日期</label>
</relation>
<relation name="COMPLAINT_ADVICE" data-type="Integer"><label language="zh_CN">处理建议</label>
</relation>
<relation name="TREATMENT_VERIFICATION" data-type="String"><label language="zh_CN">处理效果情况验证</label>
</relation>
<relation name="VERIFIER" data-type="String"><label language="zh_CN">验证人</label>
</relation>
<relation name="VERIFY_DATE" data-type="Date"><label language="zh_CN">验证日期</label>
</relation>
</model>

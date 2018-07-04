<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DEFECT_TRACK_MODULE_INFO" default-value-expr="nextSeq('20181010')">
    <has-relation relation="PRODUCT_IDID" size="22" data-type="Integer" single-valued="true"
      required="true">
      <label language="zh_CN">产品ID</label> 
    </has-relation>  
    <has-relation relation="MODULE_NAME" size="200" required="true">
      <label language="zh_CN">模块名称</label> 
    </has-relation>  
    <has-relation relation="MEMO" size="1000">
      <label language="zh_CN">备注</label> 
    </has-relation>  
    <label language="zh_CN">缺陷跟踪产品模块信息</label>  
    <has-relation relation="fChildren" data-type="DEFECT_TRACK_FUNC_INFO" inverse-of="MODULE_ID"
      single-valued="false" whole-part="composition"/> 
  </concept>  
  <relation name="MODULE_NAME" data-type="String">
    <label language="zh_CN">MODULE_NAME</label> 
  </relation>  
  <relation name="fChildren" data-type="DEFECT_TRACK_FUNC_INFO" single-valued="false" inverse-of="MODULE_ID">
    <label language="zh_CN">Children</label> 
  </relation> 
<relation name="PRODUCT_IDID" data-type="Integer"><label language="zh_CN">PRODUCT_ID</label>
</relation>
</model>

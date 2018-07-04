<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DEFECT_TRACK_VERSION_INFO" default-value-expr="nextSeq('00000000000')">
    <has-relation relation="PRODUCT_ID" size="22">
      <label language="zh_CN">PRODUCT_ID</label> 
    </has-relation>  
    <has-relation relation="MAJOR_VERSION_NUMBER" size="5" required="true">
      <label language="zh_CN">主版本号</label> 
    </has-relation>  
    <has-relation relation="MINOR_VERSION_NUMBER" size="5" required="true">
      <label language="zh_CN">次版本号</label> 
    </has-relation>  
    <has-relation relation="REVISION_NUMBER" size="20" required="true">
      <label language="zh_CN">修订版本号</label> 
    </has-relation>  
    <has-relation relation="BUILD_DATE" required="true" data-type="Date">
      <label language="zh_CN">构建日期</label> 
    </has-relation>  
    <has-relation relation="BUILD_PERSON" size="8" required="true">
      <label language="zh_CN">BUILD_PERSON</label> 
    </has-relation>  
    <has-relation relation="MEMO" size="1000"><label language="zh_CN">备注</label>
</has-relation> 
  <has-relation relation="fChildBugVersionID" data-type="DEFECT_TRACK_BUG_INFO" single-valued="false" inverse-of="VERSION_ID" whole-part="composition"></has-relation>
</concept>  
  <relation name="REVISION_NUMBER" data-type="String">
    <label language="zh_CN">REVISION_NUMBER</label> 
  </relation>  
  <relation name="MAJOR_VERSION_NUMBER" data-type="String">
    <label language="zh_CN">MAJOR_VERSION_NUMBER</label> 
  </relation>  
  <relation name="PRODUCT_ID" data-type="Integer">
    <label language="zh_CN">PRODUCT_ID</label> 
  </relation>  
  <relation name="BUILD_PERSON" data-type="String">
    <label language="zh_CN">BUILD_PERSON</label> 
  </relation>  
  <relation name="MINOR_VERSION_NUMBER" data-type="String">
    <label language="zh_CN">MINOR_VERSION_NUMBER</label> 
  </relation>  
  <relation name="BUILD_DATE" data-type="DateTime">
    <label language="zh_CN">BUILD_DATE</label> 
  </relation> 
<relation name="fChildBugVersionID" data-type="DEFECT_TRACK_BUG_INFO" inverse-of="VERSION_ID" single-valued="false"><label language="zh_CN">ChildBugVersionID</label>
</relation>
</model>

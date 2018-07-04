<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DEFECT_TRACK_PRODUCT_INFO" default-value-expr="nextSeq('00000000000')">
    <has-relation relation="PROJECT_ID" size="22">
      <label language="zh_CN">PROJECT_ID</label> 
    </has-relation>  
    <has-relation relation="PRODUCT_NAME" size="200" required="true">
      <label language="zh_CN">产品名称</label> 
    </has-relation>  
    <has-relation relation="PRODUCT_DESC" size="1000">
      <label language="zh_CN">产品描述</label> 
    </has-relation>  
    <has-relation relation="MEMO" size="1000"><label language="zh_CN">备注</label>
</has-relation> 
  

<has-relation relation="fChildVersionProductID" whole-part="composition"></has-relation>
<has-relation relation="fChildModuleProductID" whole-part="composition"></has-relation>
</concept>  
  <relation name="PROJECT_ID" data-type="Integer">
    <label language="zh_CN">PROJECT_ID</label> 
  </relation>  
  <relation name="PRODUCT_DESC" data-type="String">
    <label language="zh_CN">PRODUCT_DESC</label> 
  </relation>  
  <relation name="PRODUCT_NAME" data-type="String">
    <label language="zh_CN">PRODUCT_NAME</label> 
  </relation> 


<relation name="fChildVersionProductID" data-type="DEFECT_TRACK_VERSION_INFO" single-valued="false" inverse-of="PRODUCT_ID"><label language="zh_CN">ChildVersionProductID</label>
</relation>
<relation name="fChildModuleProductID" data-type="DEFECT_TRACK_MODULE_INFO" single-valued="false" inverse-of="PRODUCT_IDID"><label language="zh_CN">ChildModuleProductID</label>
</relation>
</model>

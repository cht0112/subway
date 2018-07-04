<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DEFECT_TRACK_PROJECT_INFO" default-value-expr="nextSeq('00000000000')"> 
      
    <has-relation relation="PROJECT_NAME" size="200" required="true"> 
      <label language="zh_CN">项目名称</label> 
    </has-relation>  
    <has-relation relation="PROJECT_MANAGER" size="8" required="true"> 
      <label language="zh_CN">PROJECT_MANAGER</label> 
    </has-relation>  
    <has-relation relation="PROJECT_DESC" size="1000"> 
      <label language="zh_CN">项目描述</label> 
    </has-relation>  
    <has-relation relation="MEMO" size="1000"> 
      <label language="zh_CN">备注</label> 
    </has-relation> 
  <has-relation relation="fChildProductProjectID" data-type="DEFECT_TRACK_PRODUCT_INFO" inverse-of="PROJECT_ID" single-valued="false" whole-part="composition"></has-relation>
</concept>  
  <relation name="MEMO" data-type="String"> 
    <label language="zh_CN">MEMO</label> 
  </relation>  
  <relation name="PROJECT_NAME" data-type="String"> 
    <label language="zh_CN">PROJECT_NAME</label> 
  </relation>  
  <relation name="PROJECT_DESC" data-type="String"> 
    <label language="zh_CN">PROJECT_DESC</label> 
  </relation>  
  <relation name="PROJECT_MANAGER" data-type="String"> 
    <label language="zh_CN">PROJECT_MANAGER</label> 
  </relation> 
<relation name="fChildProductProjectID" data-type="DEFECT_TRACK_PRODUCT_INFO" inverse-of="PROJECT_ID"><label language="zh_CN">ChildProductProjectID</label>
</relation>
</model>

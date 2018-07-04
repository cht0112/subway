<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="BASE_DECTION_AND_DOCNOD" default-value-expr="guid()"> 
    <has-relation relation="DECTION_BASED_ON_ID" size="10" required="true"> 
      <label language="zh_CN">DECTION_BASED_ON_ID</label> 
    </has-relation>  
    <has-relation relation="SID" size="36" required="true"> 
      <label language="zh_CN">SID</label> 
    </has-relation> 
  </concept>  
  <relation name="SID" data-type="String"> 
    <label language="zh_CN">SID</label> 
  </relation>  
  <relation name="DECTION_BASED_ON_ID" data-type="Decimal"> 
    <label language="zh_CN">DECTION_BASED_ON_ID</label> 
  </relation> 
</model>

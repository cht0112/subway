<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DECTION_BASED_STANDARD" default-value-expr="guid()">
    <has-relation relation="DECTION_BASED_ON_ID" size="10" required="true"/>  
    <has-relation relation="SID" size="100" required="true"/> 
  </concept>  
  <relation name="DECTION_BASED_ON_ID" data-type="Decimal">
    <label language="zh_CN">DECTION_BASED_ON_ID</label> 
  </relation> 
</model>

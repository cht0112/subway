<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_RESULT_ANALYSIS_VIEW" default-value-expr="guid()"> 
    <has-relation relation="PARENT" size="40"> 
      <label language="zh_CN">PARENT</label> 
    </has-relation>  
    <has-relation relation="NAME" size="200"> 
      <label language="zh_CN">NAME</label> 
    </has-relation>  
    <has-relation relation="CHILD" size="22"> 
      <label language="zh_CN">CHILD</label> 
    </has-relation>  
    <has-relation relation="ID" size="22"> 
      <label language="zh_CN">id</label> 
    </has-relation> 
  </concept>  
  <relation name="PARENT" data-type="String"> 
    <label language="zh_CN">PARENT</label> 
  </relation>  
  <relation name="CHILD" data-type="Integer"> 
    <label language="zh_CN">CHILD</label> 
  </relation>  
  <relation name="NAME" data-type="String"> 
    <label language="zh_CN">NAME</label> 
  </relation>  
  <relation name="ID" data-type="String"> 
    <label language="zh_CN">id</label> 
  </relation> 
</model>

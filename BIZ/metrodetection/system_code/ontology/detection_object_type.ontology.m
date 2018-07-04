<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DETECTION_OBJECT_TYPE" default-value-expr="guid()"> 
    <label language="zh_CN">检测对象类别定义</label>  
    <has-relation relation="dETECTIONOBJECTCNAME" size="100" required="true"> 
      <label language="zh_CN">检测对象类别</label> 
    </has-relation>  
    <has-relation relation="dETECTIONOBJECTENAME" size="100"> 
      <label language="zh_CN">检测对象类别</label> 
    </has-relation>  
     
  </concept>  
  <relation name="dETECTIONOBJECTCNAME" data-type="String"> 
    <label language="zh_CN">检测对象类别</label> 
  </relation>  
  <relation name="dETECTIONOBJECTENAME" data-type="String"> 
    <label language="zh_CN">检测对象类别</label> 
  </relation>  
   
</model>

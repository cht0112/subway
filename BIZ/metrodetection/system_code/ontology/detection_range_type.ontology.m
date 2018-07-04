<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DETECTION_RANGE_TYPE" default-value-expr="guid()">
    <label language="zh_CN">检测方面类别定义</label>  
    <has-relation relation="dETECTIONRANGECNAME" size="100" required="true">
      <label language="zh_CN">检测方面类别</label> 
    </has-relation>  
    <has-relation relation="dETECTIONRANGEENAME" size="100">
      <label language="zh_CN">检测方面类别</label> 
    </has-relation> 
  </concept>  
  <relation name="dETECTIONRANGEENAME" data-type="String">
    <label language="zh_CN">检测方面类别</label> 
  </relation>  
  <relation name="dETECTIONRANGECNAME" data-type="String">
    <label language="zh_CN">检测方面类别</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DETECTION_RANGE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">检测方面定义</label>  
    <has-relation relation="dETECTIONRANGETYPE" size="22" required="true"> 
      <label language="zh_CN">检测方面类别</label> 
    </has-relation>  
    <has-relation relation="dETECTIONRANGEID" size="5" required="true"> 
      <label language="zh_CN">检测方面</label> 
    </has-relation>  
    <has-relation relation="rANGEIDCNAME" size="100" required="true"> 
      <label language="zh_CN">检测方面</label> 
    </has-relation>  
    <has-relation relation="rANGEIDENAME" size="100"> 
      <label language="zh_CN">检测方面</label> 
    </has-relation> 
  </concept>  
  <relation name="rANGEIDENAME" data-type="String"> 
    <label language="zh_CN">检测方面</label> 
  </relation>  
  <relation name="rANGEIDCNAME" data-type="String"> 
    <label language="zh_CN">检测方面</label> 
  </relation>  
  <relation name="dETECTIONRANGETYPE" data-type="Integer"> 
    <label language="zh_CN">检测方面类别</label> 
  </relation>  
  <relation name="dETECTIONRANGEID" data-type="Decimal"> 
    <label language="zh_CN">业务阶段</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DEVICE_TYPE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">检测对象定义</label>  
    <has-relation relation="dETECTIONOBJECTTYPE" size="22" required="true"> 
      <label language="zh_CN">检测对象类别</label> 
    </has-relation>  
    <has-relation relation="dEVICETYPE" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">检测对象</label> 
    </has-relation>  
    <has-relation relation="dEVICETYPECNAME" size="100" required="true"> 
      <label language="zh_CN">检测对象</label> 
    </has-relation>  
    <has-relation relation="dEVICETYPEENAME" size="100"> 
      <label language="zh_CN">检测对象</label> 
    </has-relation> 
  </concept>  
  <relation name="dEVICETYPE" data-type="Decimal"> 
    <label language="zh_CN">业务阶段</label> 
  </relation>  
  <relation name="dEVICETYPECNAME" data-type="String"> 
    <label language="zh_CN">检测对象</label> 
  </relation>  
  <relation name="dETECTIONOBJECTTYPE" data-type="Integer"> 
    <label language="zh_CN">检测对象类别</label> 
  </relation>  
  <relation name="dEVICETYPEENAME" data-type="String"> 
    <label language="zh_CN">检测对象</label> 
  </relation> 
</model>

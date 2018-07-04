<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_CASE_DECTION_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">测试用例检测信息</label>  
    <has-relation relation="tESTCASEVER" size="22" required="true"> 
      <label language="zh_CN">测试用例版本</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true"> 
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="aPPLYFOROBJECT" size="5" required="true"> 
      <label language="zh_CN">应用检测对象类型</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true"> 
      <label language="zh_CN">应用检测对象</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORRANGE" size="5" required="true"> 
      <label language="zh_CN">应用检测方面类型</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORSUBRANGE" size="5" required="true"> 
      <label language="zh_CN">应用检测方面</label> 
    </has-relation> 
  </concept>  
  <relation name="aPPLYFORRANGE" data-type="Decimal"> 
    <label language="zh_CN">应用检测方面类型</label> 
  </relation>  
  <relation name="aPPLYFOROBJECT" data-type="Decimal"> 
    <label language="zh_CN">应用检测对象类型</label> 
  </relation>  
  <relation name="aPPLYFORDEVICETYPE" data-type="Decimal"> 
    <label language="zh_CN">应用检测对象</label> 
  </relation>  
  <relation name="aPPLYFORSUBRANGE" data-type="Decimal"> 
    <label language="zh_CN">应用检测方面</label> 
  </relation> 
</model>

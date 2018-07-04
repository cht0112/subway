<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="aPPLYFOROBJECT" data-type="Decimal"> 
    <label language="zh_CN">应用检测对象类型</label> 
  </relation>  
  <relation name="aPPLYFORDEVICETYPE" data-type="Decimal"> 
    <label language="zh_CN">应用检测对象</label> 
  </relation>  
  <relation name="tOOLTYPEID" data-type="Integer"> 
    <label language="zh_CN">工具类型</label> 
  </relation>  
  <concept name="TOOL_APPLY_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">工具应用检测信息</label>  
    <has-relation relation="tOOLTYPEID" size="22" required="true"> 
      <label language="zh_CN">工具类型</label> 
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
  
<has-relation relation="tOOLNO2" size="5" required="true"></has-relation>
</concept>  
  <relation name="aPPLYFORRANGE" data-type="Decimal"> 
    <label language="zh_CN">应用检测方面类型</label> 
  </relation> 
<relation name="tOOLNO2" data-type="Integer"><label language="zh_CN">工具序号</label>
</relation>
</model>

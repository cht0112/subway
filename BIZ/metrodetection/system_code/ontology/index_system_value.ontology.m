<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="INDEX_SYSTEM_VALUE" default-value-expr="nextSeq('00000000')"> 
    <label language="zh_CN">指标库数值</label>  
    <has-relation relation="iNDEXSYSTEMNO" size="10" required="true" data-type="Integer"> 
      <label language="zh_CN">指标库序号</label> 
    </has-relation>  
    <has-relation relation="bUSINESSID" size="5" required="true"> 
      <label language="zh_CN">指标应用业务类型</label> 
    </has-relation>  
    <has-relation relation="iNDEXID" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">指标ID</label> 
    </has-relation>  
    <has-relation relation="aPPLYFOROBJECT" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">应用检测对象类型</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">应用检测对象</label> 
    </has-relation>  
    <has-relation relation="iNDEXVALUE" size="200" required="true"> 
      <label language="zh_CN">指标值公式</label> 
    </has-relation>  
    <has-relation relation="iNDEXVALUEDESC" size="200" required="true"> 
      <label language="zh_CN">指标值文字描述</label> 
    </has-relation> 
  </concept>  
  <relation name="iNDEXVALUEDESC" data-type="String"> 
    <label language="zh_CN">指标值文字描述</label> 
  </relation>  
  <relation name="iNDEXID" data-type="Integer"> 
    <label language="zh_CN">指标ID</label> 
  </relation>  
  <relation name="iNDEXSYSTEMNO" data-type="Integer"> 
    <label language="zh_CN">指标库序号</label> 
  </relation>  
  <relation name="iNDEXVALUE" data-type="String"> 
    <label language="zh_CN">指标值公式</label> 
  </relation> 
</model>

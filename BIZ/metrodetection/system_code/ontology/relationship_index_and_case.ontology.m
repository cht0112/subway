<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="RELATIONSHIP_INDEX_AND_CASE" default-value-expr="guid()">
    <label language="zh_CN">指标和用例映射关系</label>  
    <has-relation relation="tESTCASEVER" size="22" required="true">
      <label language="zh_CN">测试用例版本</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true">
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEID" size="20" required="true">
      <label language="zh_CN">测试子用例ID</label> 
    </has-relation>  
    <has-relation relation="bUSINESSID" size="5" required="true">
      <label language="zh_CN">指标应用业务类型</label> 
    </has-relation>  
    <has-relation relation="iNDEXNO" size="10" required="true">
      <label language="zh_CN">指标序号</label> 
    </has-relation> 
  </concept>  
  <relation name="bUSINESSID" data-type="Decimal">
    <label language="zh_CN">指标应用业务类型</label> 
  </relation>  
  <relation name="iNDEXNO" data-type="Decimal">
    <label language="zh_CN">指标序号</label> 
  </relation> 
</model>

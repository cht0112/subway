<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="INDEX_ID_BASE_INFO" default-value-expr="nextSeq('2013')+9000"> 
    <label language="zh_CN">指标定义基础信息</label>  
    <has-relation relation="iNDEXIDCNAME" size="200" required="true"> 
      <label language="zh_CN">指标名称</label> 
    </has-relation>  
    <has-relation relation="iNDEXIDDEFINITION" size="200" required="true"> 
      <label language="zh_CN">指标定义</label> 
    </has-relation>  
    <has-relation relation="dETECTIONRANGETYPE" size="5" required="true"> 
      <label language="zh_CN">指标检测方面类别</label> 
    </has-relation>  
    <has-relation relation="dETECTIONRANGEID" size="5" required="true"> 
      <label language="zh_CN">检测方面</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="200"/>  
    <has-relation relation="childindexId" data-type="INDEX_ID_APPLY_INFO" single-valued="false"
      whole-part="composition" inverse-of="iNDEXID"/> 
  </concept>  
  <relation name="mEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="dETECTIONRANGETYPE" data-type="Decimal"> 
    <label language="zh_CN">指标检测方面类别</label> 
  </relation>  
  <relation name="iNDEXIDDEFINITION" data-type="String"> 
    <label language="zh_CN">指标定义</label> 
  </relation>  
  <relation name="dETECTIONRANGEID" data-type="Decimal"> 
    <label language="zh_CN">检测方面</label> 
  </relation>  
  <relation name="iNDEXIDCNAME" data-type="String"> 
    <label language="zh_CN">指标名称</label> 
  </relation>  
  <relation name="childindexId" data-type="INDEX_ID_APPLY_INFO">
    <label language="zh_CN">子表数据</label> 
  </relation> 
</model>

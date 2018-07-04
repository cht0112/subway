<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DOCUMENT_TYPE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">文档类型</label>  
    <has-relation relation="dOCUMENTCATEGORY" size="22" required="true">
      <label language="zh_CN">文档科目</label> 
    </has-relation>  
    <has-relation relation="dOCUMENTTYPE" size="5" required="true" data-type="Integer">
      <label language="zh_CN">文件类型</label> 
    </has-relation>  
    <has-relation relation="dOCUMENTTYPECNAME" size="100" required="true"> 
      <label language="zh_CN">文件类型</label> 
    </has-relation>  
    <has-relation relation="dOCUMENTTYPEENAME" size="100"> 
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="dOCUMENTTYPE" data-type="Decimal"> 
    <label language="zh_CN">文件类型</label> 
  </relation>  
  <relation name="dOCUMENTCATEGORY" data-type="Integer"> 
    <label language="zh_CN">文档科目</label> 
  </relation>  
  <relation name="dOCUMENTTYPEENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="dOCUMENTTYPECNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

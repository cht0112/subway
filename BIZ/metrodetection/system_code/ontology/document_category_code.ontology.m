<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DOCUMENT_CATEGORY_CODE" default-value-expr="guid()">
    <label language="zh_CN">文档科目</label>  
    <has-relation relation="dOCUMENTCATEGORYCNAME" size="100" required="true">
      <label language="zh_CN">文档科目</label> 
    </has-relation>  
    <has-relation relation="dOCUMENTCATEGORYENAME" size="100">
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="dOCUMENTCATEGORYENAME" data-type="String">
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="dOCUMENTCATEGORYCNAME" data-type="String">
    <label language="zh_CN">中文名称</label> 
  </relation> 
</model>

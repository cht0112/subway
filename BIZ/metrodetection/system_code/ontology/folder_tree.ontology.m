<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="FOLDER_TREE" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">文件夹管理</label>  
    <has-relation relation="fOLDERNAME" size="200" required="true">
      <label language="zh_CN">文件夹名称</label> 
    </has-relation>  
    <has-relation relation="pARENTFOLDERID" size="10" required="true">
      <label language="zh_CN">父节点</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000" required="true">
      <label language="zh_CN">备注</label> 
    </has-relation> 
  </concept>  
  <relation name="mEMO" data-type="String">
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="fOLDERNAME" data-type="String">
    <label language="zh_CN">文件夹名称</label> 
  </relation>  
  <relation name="pARENTFOLDERID" data-type="Decimal">
    <label language="zh_CN">父节点</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="E_DOCUMENTS_HISTORY" default-value-expr="guid()">
    <label language="zh_CN">电子文档版本记录</label>  
    <has-relation relation="eFILEID" size="50" required="true">
      <label language="zh_CN">文件编号</label> 
    </has-relation>  
    <has-relation relation="fILEVER" size="20" required="true">
      <label language="zh_CN">文件版本</label> 
    </has-relation>  
    <has-relation relation="eFILE" data-type="Blob">
      <label language="zh_CN">电子文件</label> 
    </has-relation>  
    <has-relation relation="cHANGER" size="8" required="true">
      <label language="zh_CN">修改人</label> 
    </has-relation>  
    <has-relation relation="cHANGEDATE" required="true">
      <label language="zh_CN">更改日期</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  </concept>  
  <relation name="eFILE">
    <label language="zh_CN">电子文件</label> 
  </relation>  
  <relation name="cHANGER" data-type="String">
    <label language="zh_CN">修改人</label> 
  </relation>  
  <relation name="cHANGEDATE" data-type="DateTime">
    <label language="zh_CN">更改日期</label> 
  </relation> 
</model>

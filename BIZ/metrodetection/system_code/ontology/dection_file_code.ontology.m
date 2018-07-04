<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DECTION_FILE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">(检测文件编码)</label>  
    <has-relation relation="cITYCODE" size="5" required="true"> 
      <label language="zh_CN">城市编码</label> 
    </has-relation>  
    <has-relation relation="fILEIDCNAME" size="100" required="true"> 
      <label language="zh_CN">中文名称</label> 
    </has-relation>  
    <has-relation relation="fILEIDENAME" size="100"> 
      <label language="zh_CN">英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="fILEIDCNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="cITYCODE" data-type="Decimal"> 
    <label language="zh_CN">城市编码</label> 
  </relation>  
  <relation name="fILEIDENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="INDEX_SYSTEM_PARAMETER" default-value-expr="nextSeq('000000')">
    <label language="zh_CN">指标库定义</label>  
    <has-relation relation="iNDEXSYSTEMNAME" size="200" required="true">
      <label language="zh_CN">指标库名称</label> 
    </has-relation>  
    <has-relation relation="mAKEDATETIME" required="true" data-type="Date">
      <label language="zh_CN">作成日期时间</label> 
    </has-relation>  
    <has-relation relation="dECTIONBASEDONID" size="10" required="true">
      <label language="zh_CN">检测依据ID</label> 
    </has-relation>  
      
    <has-relation relation="vALIDSTATE" size="3" required="true">
      <label language="zh_CN">指标库有效状态</label> 
    </has-relation> 
  </concept>  
  <relation name="iNDEXSYSTEMNAME" data-type="String">
    <label language="zh_CN">指标库名称</label> 
  </relation> 
</model>

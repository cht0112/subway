<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DOCUMENTS_DESTROY_RECORD" default-value-expr="nextSeq('20010')">
    <label language="zh_CN">文档销毁记录</label>  
    <has-relation relation="aPPLICATIONTIME" required="true" default-value-expr="currentDate()" data-type="Date">
      <label language="zh_CN">销毁申请时间</label> 
    </has-relation>  
    <has-relation relation="dESTROYTYPE" size="3" required="true">
      <label language="zh_CN">销毁类别</label> 
    </has-relation>  
    <has-relation relation="fILEID" size="50" required="true">
      <label language="zh_CN">文件编号</label> 
    </has-relation>  
    <has-relation relation="fILENAME" size="200" required="true">
      <label language="zh_CN">文件名称</label> 
    </has-relation>  
    <has-relation relation="fILEVER" size="20" required="true" default-value-expr="'0.0'">
      <label language="zh_CN">文件版本</label> 
    </has-relation>  
    <has-relation relation="sECRETLEVEL" size="5" required="true" data-type="Integer">
      <label language="zh_CN">涉密级别</label> 
    </has-relation>  
    <has-relation relation="fILEDESC" size="1000">
      <label language="zh_CN">文件简介</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  <has-relation relation="oPERATORID"><label language="zh_CN">申请人</label>
</has-relation>
</concept>  
  <relation name="fILENAME" data-type="String">
    <label language="zh_CN">文件名称</label> 
  </relation>  
  <relation name="dESTROYTYPE" data-type="Integer">
    <label language="zh_CN">销毁类别</label> 
  </relation>  
  <relation name="fILEDESC" data-type="String">
    <label language="zh_CN">文件简介</label> 
  </relation>  
  <relation name="fILEID" data-type="String">
    <label language="zh_CN">文件编号</label> 
  </relation> 

</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="P_DOCUMENTS_BORROW_RECORD" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">纸质文档借阅申请</label>  
    <has-relation relation="aPPLICATIONTIME" required="true" default-value-expr="currentDateTime()" data-type="DateTime">
      <label language="zh_CN">借阅申请时间</label> 
    </has-relation>  
    <has-relation relation="pFILEID" size="50" required="true">
      <label language="zh_CN">文件编号</label> 
    </has-relation>  
    <has-relation relation="dOCUMENTCATEGORY" size="5" required="true">
      <label language="zh_CN">文件科目</label> 
    </has-relation>  
    <has-relation relation="dOCUMENTTYPE" size="5" required="true" data-type="Integer">
      <label language="zh_CN">文件类型</label> 
    </has-relation>  
    <has-relation relation="pFILENAME" size="200" required="true">
      <label language="zh_CN">文件名称</label> 
    </has-relation>  
    <has-relation relation="bORROWER" size="8" required="true">
      <label language="zh_CN">借阅者</label> 
    </has-relation>  
    <has-relation relation="rETURNDATE" required="true" data-type="Date">
      <label language="zh_CN">预计归还日期</label> 
    </has-relation>  
    <has-relation relation="iNDEEDRETURNDATE" data-type="Date">
      <label language="zh_CN">实际归还日期</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  </concept>  
  <relation name="aPPLICATIONTIME" data-type="Date">
    <label language="zh_CN">借阅申请时间</label> 
  </relation>  
  <relation name="rETURNDATE" data-type="Date">
    <label language="zh_CN">预计归还日期</label> 
  </relation>  
  <relation name="pFILEID" data-type="String">
    <label language="zh_CN">文件编号</label> 
  </relation>  
  <relation name="iNDEEDRETURNDATE" data-type="Date">
    <label language="zh_CN">实际归还日期</label> 
  </relation>  
  <relation name="bORROWER" data-type="String">
    <label language="zh_CN">借阅者</label> 
  </relation> 
</model>

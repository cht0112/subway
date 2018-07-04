<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="EDUCATION_AND_JOB_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">(人员教育和工作信息)</label>  
    <has-relation relation="oPERATORID" size="8" required="true"> 
      <label language="zh_CN">操作员</label> 
    </has-relation>  
    <has-relation relation="eXPERIENCETYPE" size="3" required="true" data-type="Integer"> 
      <label language="zh_CN">信息类型</label> 
    </has-relation>  
    <has-relation relation="eXPERIENCEPLACE" size="200" required="true"> 
      <label language="zh_CN">地点</label> 
    </has-relation>  
    <has-relation relation="eXPERIENCEDESCRIPTION" size="1000" required="true"> 
      <label language="zh_CN">内容说明</label> 
    </has-relation>  
    <has-relation relation="eXPERIENCESTARTDATE" required="true"> 
      <label language="zh_CN">起始日期</label> 
    </has-relation>  
    <has-relation relation="eXPERIENCEENDDATE" required="true"> 
      <label language="zh_CN">结束日期</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="200"/> 
  </concept>  
  <relation name="eXPERIENCESTARTDATE" data-type="Date"> 
    <label language="zh_CN">起始日期</label> 
  </relation>  
  <relation name="eXPERIENCETYPE" data-type="Integer"> 
    <label language="zh_CN">信息类型</label> 
  </relation>  
  <relation name="eXPERIENCEPLACE" data-type="String"> 
    <label language="zh_CN">地点</label> 
  </relation>  
  <relation name="eXPERIENCEENDDATE" data-type="Date"> 
    <label language="zh_CN">结束日期</label> 
  </relation>  
  <relation name="eXPERIENCEDESCRIPTION" data-type="String"> 
    <label language="zh_CN">内容说明</label> 
  </relation> 
</model>

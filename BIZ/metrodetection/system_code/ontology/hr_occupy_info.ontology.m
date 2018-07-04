<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="HR_OCCUPY_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">人员占用信息</label>  
    <has-relation relation="oPERATORID" size="8" required="true"/>  
    <has-relation relation="tESTTASKID" size="20" required="true"/>  
    <has-relation relation="oCCUPYSTARTDATETIME" required="true" data-type="DateTime"/>  
    <has-relation relation="oCCUPYENDDATETIME" required="true" data-type="DateTime"/>  
    <has-relation relation="mEMO" size="200"/> 
  </concept> 
</model>

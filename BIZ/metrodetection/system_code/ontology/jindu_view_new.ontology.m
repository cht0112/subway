<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="JINDU_VIEW_NEW" default-value-expr="guid()"> 
    <has-relation relation="FID" size="233" required="true"/>  
    <has-relation relation="FPARENTID" data-type="String"/>  
    <has-relation relation="TNAME" size="200"/>  
    <has-relation relation="TPERSON" data-type="String"/>  
    <has-relation relation="TPERSONNAME" size="30" required="true"/>  
    <has-relation relation="TSTART"/>  
    <has-relation relation="TEND"/>  
    <has-relation relation="TEXECUTE" size="8" data-type="String"/>  
    <has-relation relation="TCHECK" size="8" data-type="String"/>  
    <has-relation relation="ROOMID"/>  
    <has-relation relation="ROOMAREA" size="100"/>  
    <has-relation relation="TOOLNO"/>  
    <has-relation relation="LINEID"/>  
    <has-relation relation="TASKID" data-type="String"/> 
  </concept>  
  <relation name="TSTART" data-type="DateTime"> 
    <label language="zh_CN">TSTART</label> 
  </relation>  
  <relation name="FPARENTID" data-type="String"> 
    <label language="zh_CN">FPARENTID</label> 
  </relation>  
  <relation name="TEXECUTE" data-type="String"> 
    <label language="zh_CN">TEXECUTE</label> 
  </relation>  
  <relation name="TCHECK" data-type="String"> 
    <label language="zh_CN">TCHECK</label> 
  </relation>  
  <relation name="ROOMAREA" data-type="String"> 
    <label language="zh_CN">ROOMAREA</label> 
  </relation>  
  <relation name="TNAME" data-type="String"> 
    <label language="zh_CN">TNAME</label> 
  </relation>  
  <relation name="TEND" data-type="DateTime"> 
    <label language="zh_CN">TEND</label> 
  </relation>  
  <relation name="TOOLNO" data-type="Integer"> 
    <label language="zh_CN">TOOLNO</label> 
  </relation>  
  <relation name="TPERSON" data-type="String"> 
    <label language="zh_CN">TPERSON</label> 
  </relation>  
  <relation name="FID" data-type="String"> 
    <label language="zh_CN">FID</label> 
  </relation>  
  <relation name="ROOMID" data-type="Integer"> 
    <label language="zh_CN">ROOMID</label> 
  </relation>  
  <relation name="LINEID" data-type="Integer"> 
    <label language="zh_CN">LINEID</label> 
  </relation>  
  <relation name="TPERSONNAME" data-type="String"> 
    <label language="zh_CN">TPERSONNAME</label> 
  </relation>  
  <relation name="TASKID" data-type="String">
    <label language="zh_CN">TASKID</label> 
  </relation> 
</model>

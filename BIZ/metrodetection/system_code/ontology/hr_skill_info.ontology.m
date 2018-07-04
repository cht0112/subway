<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="HR_SKILL_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">(人员技能信息)</label>  
    <has-relation relation="oPERATORID" size="8" required="true"> 
      <label language="zh_CN">操作员</label> 
    </has-relation>  
    <has-relation relation="aPPLYFOROBJECT" size="5" required="true"> 
      <label language="zh_CN">应用检测对象类型</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true"> 
      <label language="zh_CN">应用检测对象</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORRANGE" size="5" required="true"> 
      <label language="zh_CN">应用检测方面类型</label> 
    </has-relation> 
  </concept>  
  <relation name="oPERATORID" data-type="String"> 
    <label language="zh_CN">操作员</label> 
  </relation> 
</model>

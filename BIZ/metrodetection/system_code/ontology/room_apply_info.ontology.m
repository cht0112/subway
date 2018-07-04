<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="ROOM_APPLY_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">房间应用检测信息</label>  
    <has-relation relation="rOOMID" size="22" required="true"/>  
    <has-relation relation="rOOMAREA" size="20" required="true"/>  
    <has-relation relation="aPPLYFOROBJECT" size="5" required="true"/>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true"/>  
    <has-relation relation="aPPLYFORRANGE" size="5" required="true"/>  
    <has-relation relation="iMAGE" data-type="Blob"/> 
  </concept>  
  <relation name="aPPLYFORRANGE" data-type="Decimal"> 
    <label language="zh_CN">应用检测方面类型</label> 
  </relation>  
  <relation name="rOOMID" data-type="Integer"> 
    <label language="zh_CN">房间编号</label> 
  </relation>  
  <relation name="aPPLYFOROBJECT" data-type="Decimal"> 
    <label language="zh_CN">应用检测对象类型</label> 
  </relation>  
  <relation name="aPPLYFORDEVICETYPE" data-type="Decimal"> 
    <label language="zh_CN">应用检测对象</label> 
  </relation>  
  <relation name="iMAGE"> 
    <label language="zh_CN">区域位置图</label> 
  </relation>  
  <relation name="rOOMAREA" data-type="String"> 
    <label language="zh_CN">区域</label> 
  </relation> 
</model>

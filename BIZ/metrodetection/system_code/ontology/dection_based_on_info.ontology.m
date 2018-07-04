<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DECTION_BASED_ON_INFO" default-value-expr="nextSeq('1')"> 
    <label language="zh_CN">检测依据</label>  
    <has-relation relation="dECTIONBASEDONNAME" size="200"> 
      <label language="zh_CN">检测依据文件名称</label> 
    </has-relation>  
    <has-relation relation="vALIDDATETIME" required="true" data-type="DateTime"> 
      <label language="zh_CN">依据生效时间</label> 
    </has-relation>  
    <has-relation relation="vALIDSTATE" size="3" required="true" data-type="Integer"> 
      <label language="zh_CN">依据有效状态</label> 
    </has-relation>  
    <has-relation relation="version" data-type="Integer" default-value-expr="0"/> 
  <has-relation relation="fChildstandardMid" data-type="DECTION_BASED_STANDARD" inverse-of="DECTION_BASED_ON_ID" single-valued="false" whole-part="composition"></has-relation>
</concept>  
  <relation name="dECTIONBASEDONNAME" data-type="String"> 
    <label language="zh_CN">检测依据文件名称</label> 
  </relation>  
  <relation name="vALIDSTATE" data-type="Decimal"> 
    <label language="zh_CN">依据有效状态</label> 
  </relation>  
  <relation name="vALIDDATETIME" data-type="DateTime"> 
    <label language="zh_CN">依据生效时间</label> 
  </relation>  
  <relation name="version" data-type="Integer"> 
    <label language="zh_CN">版本</label> 
  </relation> 
<relation name="fChildstandardMid" data-type="DECTION_BASED_STANDARD"><label language="zh_CN">childstandardMid</label>
</relation>
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="AP_PersonSignature"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">个人签名</label>  
    <has-relation relation="fSignature" data-type="Blob"> 
      <label language="zh_CN">签名</label> 
    </has-relation> 
  </concept>  
  <relation name="fSignature" data-type="Blob"> 
    <label language="zh_CN">签名</label> 
  </relation> 
</model>

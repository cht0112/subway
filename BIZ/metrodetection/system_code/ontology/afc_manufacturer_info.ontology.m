<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="mEMO" data-type="String">
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="cONTACTTELEPHONE" data-type="String">
    <label language="zh_CN">联系电话</label> 
  </relation>  
  <relation name="fAXNUMBER" data-type="String">
    <label language="zh_CN">传真</label> 
  </relation>  
  <relation name="mANUFACTUREIDCNAME" data-type="String">
    <label language="zh_CN">厂商和检测机构商中文名称</label> 
  </relation>  
  <relation name="mANUFACTUREIDENAME" data-type="String">
    <label language="zh_CN">厂商和检测机构商英文名称</label> 
  </relation>  
  <relation name="cONTACTOR" data-type="String">
    <label language="zh_CN">联系人</label> 
  </relation>  
  <relation name="mANUFACTUREPOSTCODE" data-type="Integer">
    <label language="zh_CN">厂商邮编</label> 
  </relation>  
  <relation name="mANUFACTURETYPE" data-type="Integer">
    <label language="zh_CN">厂商和检测机构商类型</label> 
  </relation>  
  <relation name="cONTACTEMAIL" data-type="String">
    <label language="zh_CN">联系邮件</label> 
  </relation>  
  <relation name="mANUFACTUREADDRESS" data-type="String">
    <label language="zh_CN">厂商通信地址</label> 
  </relation>  
  <relation name="cONTACTMOBILE" data-type="String">
    <label language="zh_CN">联系手机</label> 
  </relation>  
  <concept name="AFC_MANUFACTURER_INFO" default-value-expr="nextSeq('2010')">
    <label language="zh_CN">厂商和第三方检测机构信息</label>  
    <has-relation relation="mANUFACTUREIDCNAME" size="200" required="true">
      <label language="zh_CN">厂商和检测机构商中文名称</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREIDENAME" size="200">
      <label language="zh_CN">厂商和检测机构商英文名称</label> 
    </has-relation>  
    <has-relation relation="mANUFACTURETYPE" size="1" required="true" data-type="Integer">
      <label language="zh_CN">厂商和检测机构商类型</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREADDRESS" size="200">
      <label language="zh_CN">厂商通信地址</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREPOSTCODE" size="6" data-type="Integer">
      <label language="zh_CN">厂商邮编</label> 
    </has-relation>  
    <has-relation relation="cONTACTTELEPHONE" size="20" required="true">
      <label language="zh_CN">联系电话</label> 
    </has-relation>  
    <has-relation relation="cONTACTOR" size="20"/>  
    <has-relation relation="cONTACTMOBILE" size="20">
      <label language="zh_CN">联系手机</label> 
    </has-relation>  
    <has-relation relation="fAXNUMBER" size="20">
      <label language="zh_CN">传真</label> 
    </has-relation>  
    <has-relation relation="cONTACTEMAIL" size="200">
      <label language="zh_CN">联系邮件</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="2000">  
    	<label language="zh_CN">备注</label> 
    </has-relation>
    <has-relation relation="oPERATOR_ID" data-type="String" size="8"></has-relation>
</concept>
<relation name="oPERATOR_ID" data-type="String"><label language="zh_CN">操作员ID</label>
</relation>
</model>

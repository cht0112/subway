<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OPERATOR_PASSWORD"> 
    <label language="zh_CN">用户和用户组信息 user_type</label>  
    <has-relation relation="uSERNAME" size="30" required="true"> 
      <label language="zh_CN">用户或用户组名称</label> 
    </has-relation>  
    <has-relation relation="uSERTYPE" size="3" required="true"> 
      <label language="zh_CN">用户类型</label> 
    </has-relation>  
    <has-relation relation="vALIDENDDATE" required="true"> 
      <label language="zh_CN">操作员有效截止日期</label> 
    </has-relation>  
    <has-relation relation="oPERATORPASSWORD" required="true" default-value-expr="'123456'"> 
      <label language="zh_CN">操作员密码</label> 
    </has-relation>  
    <has-relation relation="oRGID" data-type="String" size="65" required="true">
    	 <label language="zh_CN">组织机构id</label> 
    </has-relation> 
  </concept>  
  <relation name="vALIDENDDATE" data-type="DateTime"> 
    <label language="zh_CN">操作员有效截止日期</label> 
  </relation>  
  <relation name="uSERTYPE" data-type="Decimal"> 
    <label language="zh_CN">用户类型</label> 
  </relation>  
  <relation name="uSERNAME" data-type="String"> 
    <label language="zh_CN">用户或用户组名称</label> 
  </relation>  
  <relation name="oPERATORPASSWORD" data-type="String"> 
    <label language="zh_CN">用户或用户组密码</label> 
  </relation>  
  <relation name="oRGID" data-type="String"> 
    <label language="zh_CN">组织机构id</label> 
  </relation> 
</model>

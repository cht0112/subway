<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="ROLE_ID"> 
    <label language="zh_CN">角色表</label>  
    <has-relation relation="rOLENAME" size="200" required="true"> 
      <label language="zh_CN">角色名称</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPE" size="3" required="true"> 
      <label language="zh_CN">管理类型</label> 
    </has-relation>  
    <has-relation relation="oFFICEID" size="5"> 
      <label language="zh_CN">职位</label> 
    </has-relation>  
    <has-relation relation="pOSITIONID" size="5"> 
      <label language="zh_CN">岗位</label> 
    </has-relation> 
  <has-relation relation="rID" data-type="String"></has-relation>
</concept>  
  <relation name="rID" data-type="String"> 
    <label language="zh_CN">角色表关联ID</label> 
  </relation>  
  <relation name="rOLENAME" data-type="String"> 
    <label language="zh_CN">角色名称</label> 
  </relation>  
  <relation name="mANAGEMENTTYPE" data-type="Decimal"> 
    <label language="zh_CN">管理类型</label> 
  </relation>  
  <relation name="oFFICEID" data-type="Decimal"> 
    <label language="zh_CN">职位</label> 
  </relation>  
  <relation name="pOSITIONID" data-type="Decimal"> 
    <label language="zh_CN">岗位</label> 
  </relation>  
  <relation name="fUNCNAME" data-type="String"> 
    <label language="zh_CN">功能名称</label> 
  </relation>  
  <relation name="sYSTEMTYPE" data-type="Decimal"> 
    <label language="zh_CN">系统类型</label> 
  </relation>  
  <relation name="mANAGEMENTTYPE" data-type="Integer"> 
    <label language="zh_CN">管理类型</label> 
  </relation>  
  <relation name="fUNC_ID" data-type="Decimal"> 
    <label language="zh_CN">功能编码</label> 
  </relation>  
  <concept name="PRIVILEGE_FUNC" default-value-expr="guid()"> 
    <label language="zh_CN">功能权限分配</label>  
      
    <has-relation relation="pRIVILEGETYPE" size="5" required="true"> 
      <label language="zh_CN">权限类型</label> 
    </has-relation>  
    <has-relation relation="fUNCID" size="10" required="true"> 
      <label language="zh_CN">功能编码</label> 
    </has-relation> 
  </concept>  
  <concept name="ROLE_PRIVILEGE" default-value-expr="guid()"> 
    <label language="zh_CN">角色权限分配</label>  
    <has-relation relation="rOLEID" size="22" required="true"> 
      <label language="zh_CN">角色编号</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPE" size="3" required="true"> 
      <label language="zh_CN">管理类型</label> 
    </has-relation>  
    <has-relation relation="pRIVILEGEID" size="10" required="true"> 
      <label language="zh_CN">权限ID</label> 
    </has-relation> 
  </concept>  
  <relation name="rOLEID" data-type="Integer"> 
    <label language="zh_CN">角色编号</label> 
  </relation>  
  <relation name="pRIVILEGEID" data-type="Decimal"> 
    <label language="zh_CN">权限ID</label> 
  </relation>  
  <relation name="pRIVILEGETYPE" data-type="Decimal"> 
    <label language="zh_CN">权限类型</label> 
  </relation>  
  <relation name="fUNCID" data-type="Decimal"> 
    <label language="zh_CN">功能编码</label> 
  </relation>  
  <relation name="mANAGEMENTTYPE" data-type="Decimal"> 
    <label language="zh_CN">管理类型</label> 
  </relation>  
  <concept name="ROLE_OPERATOR" default-value-expr="guid()"> 
    <label language="zh_CN">操作员角色分配</label>  
    <has-relation relation="oPERATORID" size="8" required="true"> 
      <label language="zh_CN">操作员编号</label> 
    </has-relation>  
    <has-relation relation="rOLEID" size="10" required="true"> 
      <label language="zh_CN">角色编号</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPE" size="3" required="true"> 
      <label language="zh_CN">管理类型</label> 
    </has-relation> 
  </concept>  
  <relation name="oPERATORID" data-type="String"> 
    <label language="zh_CN">操作员编号</label> 
  </relation>  
  <concept name="FUNC_ID" default-value-expr="toInteger(nextSeqString('1','00100'))">
    <label language="zh_CN">功能模块表</label>  
    <has-relation relation="fUNCNAME" size="200" required="true">
      <label language="zh_CN">功能名称</label> 
    </has-relation>  
    <has-relation relation="sYSTEMTYPE" size="3" required="true">
      <label language="zh_CN">系统类型</label> 
    </has-relation>  
    <has-relation relation="mANAGEMENTTYPE" size="3" required="true">
      <label language="zh_CN">管理类型</label> 
    </has-relation>  
    <has-relation relation="fUNCID" size="22">
    	<label language="zh_CN">功能编码</label> 
    </has-relation> 
  </concept>  
  <relation name="fUNCID" data-type="Integer">
    <label language="zh_CN">功能编码</label> 
  </relation> 
<relation name="rID" data-type="String"><label language="zh_CN">角色表关联ID</label>
</relation>
</model>

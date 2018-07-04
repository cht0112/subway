<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="E_DOCUMENTS_MANAGEMENT" default-value-expr="guid()">
    <label language="zh_CN">电子文档基本信息</label>  
    <has-relation relation="fOLDERID" size="22" required="true">
      <label language="zh_CN">当前文件夹节点</label> 
    </has-relation>  
    <has-relation relation="eFILEID" size="50" required="true">
      <label language="zh_CN">文件编号</label> 
    </has-relation>  
    <has-relation relation="eFILENAME" size="200" required="true">
      <label language="zh_CN">文件名称</label> 
    </has-relation>  
    <has-relation relation="fILEVER" size="20" required="true">
      <label language="zh_CN">文件版本</label> 
    </has-relation>  
    <has-relation relation="sECRETLEVEL" size="5" required="true">
      <label language="zh_CN">涉密级别</label> 
    </has-relation>  
    <has-relation relation="eFILEPROPERTY" size="1000">
      <label language="zh_CN">文件属性</label> 
    </has-relation>  
    <has-relation relation="eFILEDESC" size="1000">
      <label language="zh_CN">文件简介</label> 
    </has-relation>  
    <has-relation relation="cREATOR" size="8" required="true">
      <label language="zh_CN">创建者</label> 
    </has-relation>  
    <has-relation relation="cREATEDATE" required="true">
      <label language="zh_CN">创建日期</label> 
    </has-relation>  
    <has-relation relation="lASTCHANGER" size="8" required="true">
      <label language="zh_CN">签出者</label> 
    </has-relation>  
    <has-relation relation="lASTCHANGEDATE" required="true">
      <label language="zh_CN">最后更改日期</label> 
    </has-relation>  
    <has-relation relation="cHECKOUTSTATE" size="3" required="true">
      <label language="zh_CN">签出状态,1、正常；2、签出</label> 
    </has-relation>  
    <has-relation relation="dESTROYSTATE" size="3" required="true">
      <label language="zh_CN">销毁状态,1、正常；2、销毁</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
  </concept>  
  <relation name="lASTCHANGEDATE" data-type="DateTime">
    <label language="zh_CN">最后更改日期</label> 
  </relation>  
  <relation name="eFILEPROPERTY" data-type="String">
    <label language="zh_CN">文件属性</label> 
  </relation>  
  <relation name="fOLDERID" data-type="Integer">
    <label language="zh_CN">当前文件夹节点</label> 
  </relation>  
  <relation name="cREATOR" data-type="String">
    <label language="zh_CN">创建者</label> 
  </relation>  
  <relation name="eFILENAME" data-type="String">
    <label language="zh_CN">文件名称</label> 
  </relation>  
  <relation name="cHECKOUTSTATE" data-type="Decimal">
    <label language="zh_CN">签出状态,1、正常；2、签出</label> 
  </relation>  
  <relation name="cREATEDATE" data-type="DateTime">
    <label language="zh_CN">创建日期</label> 
  </relation>  
  <relation name="eFILEDESC" data-type="String">
    <label language="zh_CN">文件简介</label> 
  </relation>  
  <relation name="eFILEID" data-type="String">
    <label language="zh_CN">文件编号</label> 
  </relation>  
  <relation name="lASTCHANGER" data-type="String">
    <label language="zh_CN">签出者</label> 
  </relation> 
</model>

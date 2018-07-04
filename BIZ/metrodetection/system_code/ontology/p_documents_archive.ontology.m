<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="P_DOCUMENTS_ARCHIVE" default-value-expr="guid()"> 
    <label language="zh_CN">纸质文档归档</label>  
    <has-relation relation="dOCUMENTCATEGORY" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">文件科目</label> 
    </has-relation>  
    <has-relation relation="dOCUMENTTYPE" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">文件类型</label> 
    </has-relation>  
    <has-relation relation="pFILENAME" size="200" required="true"> 
      <label language="zh_CN">文件名称</label> 
    </has-relation>  
    <has-relation relation="fILEVER" size="20" required="true" default-value-expr="'0.0'"> 
      <label language="zh_CN">文件版本</label> 
    </has-relation>  
    <has-relation relation="sECRETLEVEL" size="5" data-type="Integer"> 
      <label language="zh_CN">涉密级别</label> 
    </has-relation>  
    <has-relation relation="pFILEPROPERTY" size="1000"> 
      <label language="zh_CN">文件属性</label> 
    </has-relation>  
    <has-relation relation="pFILEDESC" size="1000"> 
      <label language="zh_CN">文件简介</label> 
    </has-relation>  
    <has-relation relation="lOCATIONROOMID" size="10" required="true" data-type="Integer"> 
      <label language="zh_CN">存档房间</label> 
    </has-relation>  
    <has-relation relation="lOCATIONCABINETID" size="30"> 
      <label language="zh_CN">存档文件柜</label> 
    </has-relation>  
    <has-relation relation="aRCHIVEDATE" required="true" default-value-expr="currentDate()"
      data-type="Date"> 
      <label language="zh_CN">存档日期</label> 
    </has-relation>  
    <has-relation relation="aRCHIVEOPERATOR" size="8" required="true"> 
      <label language="zh_CN">存档人</label> 
    </has-relation>  
    <has-relation relation="iNPUTOPERATOR" size="8" required="true"> 
      <label language="zh_CN">记录人</label> 
    </has-relation>  
    <has-relation relation="aLLOWBORROW" size="3" required="true" data-type="Integer"
      default-value-expr="1"> 
      <label language="zh_CN">可借状态</label> 
    </has-relation>  
    <has-relation relation="dESTROYSTATE" size="3" required="true" data-type="Integer"
      default-value-expr="1"> 
      <label language="zh_CN">销毁状态</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/>  
    <has-relation relation="dOCUMENTARCHIVECHILD" unique="false" whole-part="composition"/> 
  </concept>  
  <relation name="dOCUMENTTYPE" data-type="Integer"> 
    <label language="zh_CN">文件类型</label> 
  </relation>  
  <relation name="dESTROYSTATE" data-type="Integer"> 
    <label language="zh_CN">销毁状态</label> 
  </relation>  
  <relation name="lOCATIONROOMID" data-type="Integer"> 
    <label language="zh_CN">存档房间</label> 
  </relation>  
  <relation name="pFILEDESC" data-type="String"> 
    <label language="zh_CN">文件简介</label> 
  </relation>  
  <relation name="lOCATIONCABINETID" data-type="String"> 
    <label language="zh_CN">存档文件柜</label> 
  </relation>  
  <relation name="sECRETLEVEL" data-type="Integer"> 
    <label language="zh_CN">涉密级别</label> 
  </relation>  
  <relation name="pFILEPROPERTY" data-type="String"> 
    <label language="zh_CN">文件属性</label> 
  </relation>  
  <relation name="dOCUMENTCATEGORY" data-type="Integer"> 
    <label language="zh_CN">文件科目</label> 
  </relation>  
  <relation name="aRCHIVEOPERATOR" data-type="String"> 
    <label language="zh_CN">存档人</label> 
  </relation>  
  <relation name="pFILENAME" data-type="String"> 
    <label language="zh_CN">文件名称</label> 
  </relation>  
  <relation name="fILEVER" data-type="String"> 
    <label language="zh_CN">文件版本0.0</label> 
  </relation>  
  <relation name="iNPUTOPERATOR" data-type="String"> 
    <label language="zh_CN">记录人</label> 
  </relation>  
  <relation name="aLLOWBORROW" data-type="Integer"> 
    <label language="zh_CN">可借状态</label> 
  </relation>  
  <relation name="aRCHIVEDATE" data-type="Date"> 
    <label language="zh_CN">存档日期</label> 
  </relation>  
  <relation name="dOCUMENTARCHIVECHILD" data-type="P_DOCUMENTS_BORROW_RECORD" single-valued="false"
    inverse-of="pFILEID"> 
    <label language="zh_CN">纸质文档子关系</label> 
  </relation> 
</model>

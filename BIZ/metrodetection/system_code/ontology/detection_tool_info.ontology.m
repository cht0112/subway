<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DETECTION_TOOL_INFO" default-value-expr="nextSeq('20110')"> 
    <label language="zh_CN">工具信息</label>  
    <has-relation relation="tOOLCNAME" size="200"> 
      <label language="zh_CN">工具名称</label> 
    </has-relation>  
    <has-relation relation="tOOLENAME" size="200"> 
      <label language="zh_CN">工具英文名称</label> 
    </has-relation>  
    <has-relation relation="tOOLTYPEID" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">工具类型</label> 
    </has-relation>  
    <has-relation relation="tOOLMODEL" size="200" required="true"> 
      <label language="zh_CN">工具型号</label> 
    </has-relation>  
    <has-relation relation="tOOLSTANDARDS" size="200" required="true"> 
      <label language="zh_CN">工具规格</label> 
    </has-relation>  
    <has-relation relation="tOOLID" size="200" required="true"> 
      <label language="zh_CN">工具id</label> 
    </has-relation>  
    <has-relation relation="uSESTATECODE" size="3" required="true" data-type="Integer"> 
      <label language="zh_CN">状态</label> 
    </has-relation>  
    <has-relation relation="tOOLUNIT" size="200"> 
      <label language="zh_CN">计量单位</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREID" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">供应商ID</label> 
    </has-relation>  
    <has-relation relation="tOOLRESOURCE" size="3" data-type="Integer"> 
      <label language="zh_CN">资产来源</label> 
    </has-relation>  
    <has-relation relation="iNDATE" data-type="Date"> 
      <label language="zh_CN">入账时间</label> 
    </has-relation>  
    <has-relation relation="iNPRICE" size="10" data-type="Integer"> 
      <label language="zh_CN">入账价值</label> 
    </has-relation>  
    <has-relation relation="sHAREDFLAG" size="1" data-type="Integer" default-value-expr="0"
      required="true"> 
      <label language="zh_CN">是否允许资源共用</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="200"> 
      <label language="zh_CN">备注</label> 
    </has-relation>  
    <has-relation relation="aSSETSORTCODE" size="13" data-type="String"> 
      <label language="zh_CN">固定资产分类</label> 
    </has-relation>  
    <has-relation relation="fFChildToolOccupy" data-type="TOOL_OCCUPY_INFO" inverse-of="tOOLNO1"
      single-valued="false" whole-part="composition"/>  
    <has-relation relation="fFChildToolApply" data-type="TOOL_APPLY_INFO" inverse-of="tOOLNO2"
      single-valued="false" whole-part="composition"/>  
    <has-relation relation="fFChildMovingRecord" data-type="DETECTION_TOOL_MOVING_RECORD"
      inverse-of="tOOLNO" single-valued="false" whole-part="composition"/>  
    <has-relation relation="rECIVESTATE" size="3" default-value-expr="0"/> 
  </concept>  
  <relation name="mEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="tOOLTYPEID" data-type="String"> 
    <label language="zh_CN">工具类型</label> 
  </relation>  
  <relation name="tOOLENAME" data-type="String"> 
    <label language="zh_CN">工具英文名称</label> 
  </relation>  
  <relation name="sHAREDFLAG" data-type="Decimal"> 
    <label language="zh_CN">是否允许资源共用</label> 
  </relation>  
  <relation name="tOOLUNIT" data-type="String"> 
    <label language="zh_CN">计量单位</label> 
  </relation>  
  <relation name="iNPRICE" data-type="Decimal"> 
    <label language="zh_CN">入账价值</label> 
  </relation>  
  <relation name="tOOLCNAME" data-type="String"> 
    <label language="zh_CN">工具中文名称</label> 
  </relation>  
  <relation name="iNDATE" data-type="DateTime"> 
    <label language="zh_CN">入账时间</label> 
  </relation>  
  <relation name="tOOLMODEL" data-type="String"> 
    <label language="zh_CN">工具型号</label> 
  </relation>  
  <relation name="mANUFACTUREID" data-type="Decimal"> 
    <label language="zh_CN">供应商ID</label> 
  </relation>  
  <relation name="tOOLSTANDARDS" data-type="String"> 
    <label language="zh_CN">工具规格</label> 
  </relation>  
  <relation name="tOOLID" data-type="String"> 
    <label language="zh_CN">工具id</label> 
  </relation>  
  <relation name="uSESTATECODE" data-type="Decimal"> 
    <label language="zh_CN">状态</label> 
  </relation>  
  <relation name="tOOLRESOURCE" data-type="Decimal"> 
    <label language="zh_CN">资产来源</label> 
  </relation>  
  <relation name="aSSETSORTCODE" data-type="String"> 
    <label language="zh_CN">固定资产分类</label> 
  </relation>  
  <relation name="fFChildToolOccupy" data-type="Integer" single-valued="false"> 
    <label language="zh_CN">fChildToolOccupy</label> 
  </relation>  
  <relation name="fFChildToolApply" data-type="Integer" single-valued="false"> 
    <label language="zh_CN">fChildToolApply</label> 
  </relation>  
  <relation name="fFChildMovingRecord" data-type="Integer" single-valued="false"> 
    <label language="zh_CN">fChildMovingRecord</label> 
  </relation> 
</model>

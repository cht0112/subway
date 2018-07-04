<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SAMPLE_DEVICE_INFO" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">受检样品信息</label>  
      
    <has-relation relation="aPPLICATIONNO" size="10" required="true" data-type="Integer">
      <label language="zh_CN">申请序号</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREID" size="5" required="true">
      <label language="zh_CN">供应商ID</label> 
    </has-relation>  
    <has-relation relation="dEVICETYPE" size="5" required="true">
      <label language="zh_CN">检测对象</label> 
    </has-relation>  
    <has-relation relation="dEVICESTYLE" size="200">
      <label language="zh_CN">对象型号</label> 
    </has-relation>  
    <has-relation relation="dECTIONTYPE" size="3" required="true" data-type="Integer">
      <label language="zh_CN">检测类型</label> 
    </has-relation>  
    <has-relation relation="dEVICEID" size="8">
      <label language="zh_CN">设备ID</label> 
    </has-relation>  
    <has-relation relation="sOFTWAREVERSION" size="10" required="true" data-type="Integer">
      <label language="zh_CN">软件版本</label> 
    </has-relation>  
    <has-relation relation="hARDWAREVERSION" size="10" required="true" data-type="Integer">
      <label language="zh_CN">硬件版本</label> 
    </has-relation>  
    <has-relation relation="dEADLINERECEIVEDATE" required="true" data-type="Date">
      <label language="zh_CN">最晚进场日期</label> 
    </has-relation>  
    <has-relation relation="iNDEEDRECEIVEDATE" required="true" data-type="Date">
      <label language="zh_CN">实际进场日期</label> 
    </has-relation>  
    <has-relation relation="rETURNDATE" required="true" data-type="Date">
      <label language="zh_CN">预计归还日期</label> 
    </has-relation>  
    <has-relation relation="iNDEEDRETURNDATE" required="true" default-value-expr="toDate('1970-01-01')" data-type="Date">
      <label language="zh_CN">实际归还日期</label> 
    </has-relation>  
    <has-relation relation="sHAREDFLAG" size="1" required="true" default-value-expr="1" data-type="Integer">
      <label language="zh_CN">是否允许资源共用</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000">
      <label language="zh_CN">备注</label> 
    </has-relation> 
  

<has-relation relation="rECIVESTATE" data-type="Integer" size="3" default-value-expr="0"></has-relation>
</concept>
    
    
  <relation name="mANUFACTUREID" data-type="Integer">
    <label language="zh_CN">供应商ID</label> 
  </relation>  
  <relation name="dEVICETYPE" data-type="Integer">
    <label language="zh_CN">检测对象</label> 
  </relation>  
  <relation name="dEVICESTYLE" data-type="String">
    <label language="zh_CN">对象型号</label> 
  </relation>  
  <relation name="dECTIONTYPE" data-type="Decimal">
    <label language="zh_CN">检测类型</label> 
  </relation>  
  <relation name="dEVICEID" data-type="String">
    <label language="zh_CN">设备ID</label> 
  </relation>  
  <relation name="sOFTWAREVERSION" data-type="Decimal">
    <label language="zh_CN">软件版本</label> 
  </relation> 
  <relation name="hARDWAREVERSION" data-type="Decimal">
    <label language="zh_CN">硬件版本</label> 
  </relation>  
  <relation name="dEADLINERECEIVEDATE" data-type="DateTime">
    <label language="zh_CN">最晚进场日期</label> 
  </relation>  
  <relation name="iNDEEDRECEIVEDATE" data-type="DateTime">
    <label language="zh_CN">实际进场日期</label> 
  </relation> 
  <relation name="rETURNDATE" data-type="DateTime">
    <label language="zh_CN">预计归还日期</label> 
  </relation>  
  <relation name="iNDEEDRETURNDATE" data-type="DateTime">
    <label language="zh_CN">实际归还日期</label> 
  </relation>   
  <relation name="sHAREDFLAG" data-type="Decimal">
    <label language="zh_CN">是否允许资源共用</label> 
  </relation>  
  <relation name="mEMO" data-type="String">
    <label language="zh_CN">备注</label> 
  </relation>  
<relation name="fRECIVESTATE" data-type="Integer"><label language="zh_CN">rECIVESTATE</label>
</relation>
<relation name="rECIVESTATE" data-type="Integer"><label language="zh_CN">接受状态</label>
</relation>
</model>

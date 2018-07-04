<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="dEVICEID" data-type="String"> 
    <label language="zh_CN">唯一编号</label> 
  </relation>  
  <relation name="oPERATERESULTSTATE" data-type="Integer"> 
    <label language="zh_CN">操作结果</label> 
  </relation>  
  <relation name="tESTTASKID" data-type="String"> 
    <label language="zh_CN">测试任务ID</label> 
  </relation>  
  <relation name="pROJECTID" data-type="Integer"> 
    <label language="zh_CN">项目ID</label> 
  </relation>  
  <relation name="oPERATORID" data-type="String"> 
    <label language="zh_CN">操作员</label> 
  </relation>  
  <relation name="oPERATETYPE" data-type="Integer"> 
    <label language="zh_CN">操作类型</label> 
  </relation>  
  <relation name="oPERATEDATETIME" data-type="Date"> 
    <label language="zh_CN">操作日期时间</label> 
  </relation>  
  <relation name="mEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <concept name="SAMPLE_DEVICE_MOVING_RECORD" default-value-expr="guid()"> 
    <label language="zh_CN">受测样品操作履历</label>  
    <has-relation relation="oPERATEDATETIME" required="true" default-value-expr="currentDate()"> 
      <label language="zh_CN">操作日期时间</label> 
    </has-relation>  
    <has-relation relation="oPERATETYPE" size="3" required="true" data-type="Integer"> 
      <label language="zh_CN">操作类型</label> 
    </has-relation>  
    <has-relation relation="oPERATORID" size="8" required="true"> 
      <label language="zh_CN">操作员</label> 
    </has-relation>  
    <has-relation relation="pROJECTID" size="10" required="false" data-type="Integer"> 
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="tESTTASKID" size="20"> 
      <label language="zh_CN">测试任务ID</label> 
    </has-relation>  
    <has-relation relation="dEVICEID" size="200" required="true"> 
      <label language="zh_CN">唯一编号</label> 
    </has-relation>  
    <has-relation relation="oPERATERESULTSTATE" size="1" required="true" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">操作结果</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"/> 
    
  <has-relation relation="sAMPLEDEVICENO" size="10" required="true" data-type="Integer">
  <label language="zh_CN">样品序号</label> 
  </has-relation>
</concept> 
</model>

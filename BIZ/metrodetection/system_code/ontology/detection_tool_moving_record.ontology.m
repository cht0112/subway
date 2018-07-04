<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DETECTION_TOOL_MOVING_RECORD" default-value-expr="guid()"> 
    <label language="zh_CN">备品备件出入库记录</label>  
    <has-relation relation="oPERATEDATETIME" required="true" default-value-expr="currentDate()" data-type="Date"> 
      <label language="zh_CN">操作日期时间</label> 
    </has-relation>  
    <has-relation relation="oPERATETYPE" size="3" required="true"> 
      <label language="zh_CN">操作类型</label> 
    </has-relation>  
    <has-relation relation="oPERATORID" size="8" required="true"> 
      <label language="zh_CN">操作员</label> 
    </has-relation>  
    <has-relation relation="pROJECTID" size="10" required="false"> 
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="tESTTASKID" size="20" required="false" data-type="String"> 
      <label language="zh_CN">测试任务ID</label> 
    </has-relation>  
    <has-relation relation="tOOLTYPEID" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">工具类型</label> 
    </has-relation>  
    <has-relation relation="tOOLID" size="200" required="true" data-type="String"> 
      <label language="zh_CN">工具ID</label> 
    </has-relation>  
    <has-relation relation="tOOLIDSTATE" size="3" required="true"> 
      <label language="zh_CN">工具状态</label> 
    </has-relation>  
    <has-relation relation="tOOLNUMBER" size="10" required="true" default-value-expr="0"> 
      <label language="zh_CN">工具数量</label> 
    </has-relation>  
    <has-relation relation="mOVINGREASON" size="3" required="true"> 
      <label language="zh_CN">出入库原因</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="1000"> 
      <label language="zh_CN">备注</label> 
    </has-relation> 
  
<has-relation relation="tOOLNO" data-type="Integer" size="5" required="true"></has-relation>
</concept>  
  <relation name="oPERATORID" data-type="String"> 
    <label language="zh_CN">操作员</label> 
  </relation>  
  <relation name="oPERATETYPE" data-type="Integer"> 
    <label language="zh_CN">操作类型</label> 
  </relation>  
  <relation name="oPERATEDATETIME" data-type="DateTime"> 
    <label language="zh_CN">操作日期时间</label> 
  </relation>  
  <relation name="pROJECTID" data-type="Integer"> 
    <label language="zh_CN">项目ID</label> 
  </relation>  
  <relation name="tOOLIDSTATE" data-type="Integer"> 
    <label language="zh_CN">工具状态</label> 
  </relation>  
  <relation name="mOVINGREASON" data-type="Integer"> 
    <label language="zh_CN">出入库原因</label> 
  </relation>  
  <relation name="tOOLNUMBER" data-type="Integer"> 
    <label language="zh_CN">工具数量</label> 
  </relation>  
  <relation name="mEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="tOOLTYPE" data-type="Integer"> 
    <label language="zh_CN">工具类型</label> 
  </relation>  
  <relation name="tESTTASKID" data-type="Integer"> 
    <label language="zh_CN">测试任务ID</label> 
  </relation>  
  <relation name="tOOLID" data-type="String"> 
    <label language="zh_CN">工具ID</label> 
  </relation> 
<relation name="tOOLNO" data-type="Integer"><label language="zh_CN">工具序号</label>
</relation>
</model>

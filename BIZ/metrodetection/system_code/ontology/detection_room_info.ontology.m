<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DETECTION_ROOM_INFO" default-value-expr="nextSeq('2010')"> 
    <label language="zh_CN">房间场地资源信息</label>  
    <has-relation relation="rOOMTYPE" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">房间类型</label> 
    </has-relation>  
    <has-relation relation="rOOMCNAME" size="200" required="true"> 
      <label language="zh_CN">房间名称</label> 
    </has-relation>  
    <has-relation relation="rOOMENAME" size="200"> 
      <label language="zh_CN">房间英文名称</label> 
    </has-relation>  
    <has-relation relation="iMAGE" data-type="Blob"> 
      <label language="zh_CN">房间位置图</label> 
    </has-relation>  
    <has-relation relation="mEMO" size="200"> 
      <label language="zh_CN">备注</label> 
    </has-relation> 
  



<has-relation relation="MANUFACTURE_ID" data-type="Integer"></has-relation>
<has-relation relation="IS_DELEGATE" data-type="Integer" default-value-expr="0"></has-relation>
</concept>  
  <relation name="mEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="rOOMCNAME" data-type="String"> 
    <label language="zh_CN">房间中文名称</label> 
  </relation>  
  <relation name="rOOMENAME" data-type="String"> 
    <label language="zh_CN">房间英文名称</label> 
  </relation>  
  <relation name="rOOMTYPE" data-type="Decimal"> 
    <label language="zh_CN">房间类型</label> 
  </relation>  
  <relation name="iMAGE" data-type="Blob"> 
    <label language="zh_CN">房间位置图</label> 
  </relation> 


<relation name="fJGID" data-type="String"><label language="zh_CN">机构ID</label>
</relation>
<relation name="fMANUFACTUREID" data-type="String"><label language="zh_CN">mANUFACTUREID</label>
</relation>
<relation name="MANUFACTURE_ID" data-type="Integer"><label language="zh_CN">mANUFACTUREID</label>
</relation>
<relation name="IS_DELEGATE" data-type="Integer"><label language="zh_CN">iSDELEGATE</label>
</relation>
</model>

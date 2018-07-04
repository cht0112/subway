<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_TASK_STAT" default-value-expr="guid()"> 
    <label language="zh_CN">单项测试任务统计</label>  
    <has-relation relation="pROJECTID" size="22" required="true"> 
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="tASKID" size="10" required="true" data-type="Integer"> 
      <label language="zh_CN">任务ID</label> 
    </has-relation>  
    <has-relation relation="bUSINESSID" size="5" required="true"> 
      <label language="zh_CN">业务类型</label> 
    </has-relation>  
    <has-relation relation="bUSINESSSTAGE" size="5" required="true"> 
      <label language="zh_CN">业务阶段</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true"> 
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true"> 
      <label language="zh_CN">应用检测对象</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREID" size="5" required="true"> 
      <label language="zh_CN">供应商ID</label> 
    </has-relation>  
    <has-relation relation="aCTUALOPERATORID" size="200" required="true"> 
      <label language="zh_CN">任务执行人</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASENUMBER" size="5" required="true"> 
      <label language="zh_CN">测试子用例数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASETIME" size="10" required="true"> 
      <label language="zh_CN">测试子用例工时</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASESTEPDATANUMBER" size="10" required="true" data-type="Integer"> 
      <label language="zh_CN">测试子用例数据数量</label> 
    </has-relation>  
    <has-relation relation="pLANSTARTDATE" size="8" required="true" data-type="Integer"> 
      <label language="zh_CN">计划开始日期</label> 
    </has-relation>  
    <has-relation relation="aCTUALSTARTDATE" size="8" required="true" data-type="Integer"> 
      <label language="zh_CN">任务开始日期</label> 
    </has-relation> 
  </concept>  
  <relation name="pLANSTARTDATE" data-type="Integer"> 
    <label language="zh_CN">计划开始日期</label> 
  </relation>  
  <relation name="aCTUALOPERATORID" data-type="String"> 
    <label language="zh_CN">任务执行人</label> 
  </relation>  
  <relation name="sUBTESTCASESTEPDATANUMBER" data-type="Integer"> 
    <label language="zh_CN">测试子用例数据数量</label> 
  </relation>  
  <relation name="pROJECTID" data-type="Integer"> 
    <label language="zh_CN">项目ID</label> 
  </relation>  
  <relation name="tESTCASEID" data-type="String"> 
    <label language="zh_CN">测试用例ID</label> 
  </relation>  
  <relation name="tASKID" data-type="Integer"> 
    <label language="zh_CN">任务ID</label> 
  </relation>  
  <relation name="aCTUALSTARTDATE" data-type="Integer"> 
    <label language="zh_CN">任务开始日期</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TASK_EXECUTE_PROBLEM_STAT" default-value-expr="nextSeq('20101010')"> 
    <label language="zh_CN">测试任务执行问题汇总</label>  
    <has-relation relation="eXECUTEDATE" size="8" required="true"> 
      <label language="zh_CN">执行出错日期</label> 
    </has-relation>  
    <has-relation relation="bUSINESSID" size="5" required="true"> 
      <label language="zh_CN">业务类型</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREID" size="5" required="true"> 
      <label language="zh_CN">供应商ID</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true"> 
      <label language="zh_CN">应用检测对象</label> 
    </has-relation>  
    <has-relation relation="pROBLEMPRIOR" size="5" required="true"> 
      <label language="zh_CN">问题级别</label> 
    </has-relation>  
    <has-relation relation="pROBLEMTYPE" size="5" required="true"> 
      <label language="zh_CN">问题类型</label> 
    </has-relation>  
    <has-relation relation="pROJECTNUMBER" size="5" required="true"> 
      <label language="zh_CN">执行项目总数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASENUMBER" size="5" required="true"> 
      <label language="zh_CN">测试子用例数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEPASS" size="5" required="true"> 
      <label language="zh_CN">测试子用例成功数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEFAILED" size="5" required="true"> 
      <label language="zh_CN">测试子用例失败数</label> 
    </has-relation> 
  </concept>  
  <relation name="eXECUTEDATE" data-type="Decimal"> 
    <label language="zh_CN">执行出错日期</label> 
  </relation>  
  <relation name="pROBLEMTYPE" data-type="Decimal"> 
    <label language="zh_CN">问题类型</label> 
  </relation>  
  <relation name="pROBLEMPRIOR" data-type="Decimal"> 
    <label language="zh_CN">问题级别</label> 
  </relation> 
</model>

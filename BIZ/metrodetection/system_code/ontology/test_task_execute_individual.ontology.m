<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_TASK_EXECUTE_INDIVIDUAL" default-value-expr="guid()">
    <label language="zh_CN">单项测试任务执行进度日统计</label>  
    <has-relation relation="rEPORTDATE" size="8" required="true" data-type="Integer">
      <label language="zh_CN">上报日期</label> 
    </has-relation>  
    <has-relation relation="pROJECTID" size="10" required="true" data-type="Integer">
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="tASKID" size="10" required="true" data-type="Integer">
      <label language="zh_CN">任务ID</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true">
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEPASS" size="5" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例成功数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEFAILED" size="5" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例失败数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEBLOCKED" size="5" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例阻碍数</label> 
    </has-relation>  
    <has-relation relation="aCTUALSUBTESTCASETIME" size="10" scale="2" required="true">
      <label language="zh_CN">测试子用例实际总工时数</label> 
    </has-relation> 
  </concept>  
  <relation name="aCTUALSUBTESTCASETIME" data-type="Decimal">
    <label language="zh_CN">测试子用例实际总工时数</label> 
  </relation>  
  <relation name="pROJECTID" data-type="Integer">
    <label language="zh_CN">项目ID</label> 
  </relation>  
  <relation name="tESTCASEID" data-type="String">
    <label language="zh_CN">测试用例ID</label> 
  </relation>  
  <relation name="sUBTESTCASEBLOCKED" data-type="Integer">
    <label language="zh_CN">测试子用例阻碍数</label> 
  </relation>  
  <relation name="tASKID" data-type="Integer">
    <label language="zh_CN">任务ID</label> 
  </relation>  
  <relation name="sUBTESTCASEFAILED" data-type="Integer">
    <label language="zh_CN">测试子用例失败数</label> 
  </relation>  
  <relation name="sUBTESTCASEPASS" data-type="Integer">
    <label language="zh_CN">测试子用例成功数</label> 
  </relation> 
</model>

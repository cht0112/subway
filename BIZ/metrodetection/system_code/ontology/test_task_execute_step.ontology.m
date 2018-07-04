<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_TASK_EXECUTE_STEP" default-value-expr="guid()"> 
    <label language="zh_CN">测试任务执行步骤信息</label>  
    <has-relation relation="pROJECTID" size="22" required="true"> 
      <label language="zh_CN">项目ID</label> 
    </has-relation>  
    <has-relation relation="tASKID" size="10" required="true" data-type="Integer"> 
      <label language="zh_CN">任务ID</label> 
    </has-relation>  
    <has-relation relation="tESTCASEVER" size="10" required="true" data-type="Integer"> 
      <label language="zh_CN">测试用例版本</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true"> 
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEID" size="20" required="true"> 
      <label language="zh_CN">测试子用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASESTEPID" size="5" data-type="Integer"> 
      <label language="zh_CN">测试子用例步骤ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASESTEPDESC" size="1000"> 
      <label language="zh_CN">测试子用例步骤描述</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASESTEPPRIOR" size="5" required="true" data-type="Integer"> 
      <label language="zh_CN">测试子用例步骤级别</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASESTEPEXECUTE" size="3" required="true" data-type="Integer"> 
      <label language="zh_CN">测试子用例步骤执行情况</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASESTEPCHECK" size="3" required="true" data-type="Integer"> 
      <label language="zh_CN">测试子用例步骤检查情况</label> 
    </has-relation>  
    <has-relation relation="eXECUTEDATETIME" required="true"> 
      <label language="zh_CN">测试子用例步骤执行日期</label> 
    </has-relation>  
    <has-relation relation="rEPORTDATE" required="true" data-type="DateTime"> 
      <label language="zh_CN">上报日期</label> 
    </has-relation> 
   <has-relation relation="sUBTESTCASESTEPEXCUTEDESC" size="1000"> 
      <label language="zh_CN">测试子用例步骤执行描述</label> 
    </has-relation>
  </concept>  
  <relation name="sUBTESTCASESTEPEXECUTE" data-type="Integer"> 
    <label language="zh_CN">测试子用例步骤执行情况</label> 
  </relation>  
  <relation name="sUBTESTCASESTEPCHECK" data-type="Integer"> 
    <label language="zh_CN">测试子用例步骤检查情况</label> 
  </relation>  
  <relation name="sUBTESTCASESTEPPRIOR" data-type="Integer"> 
    <label language="zh_CN">测试子用例步骤级别</label> 
  </relation>  
  <relation name="sUBTESTCASESTEPDESC" data-type="String"> 
    <label language="zh_CN">测试子用例步骤描述</label> 
  </relation> 
  <relation name="sUBTESTCASESTEPEXCUTEDESC" data-type="String"> 
    <label language="zh_CN">测试子用例步骤执行描述</label> 
  </relation> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_TASK_EXECUTE_SUB_CASE" default-value-expr="guid()">
    <label language="zh_CN">测试任务执行子用例信息</label>  
      
    <has-relation relation="tASKID" size="10" required="true">
      <label language="zh_CN">任务ID</label> 
    </has-relation>  
    <has-relation relation="tESTCASEVER" size="10" required="true">
      <label language="zh_CN">测试用例版本</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true">
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEID" size="20" required="true">
      <label language="zh_CN">测试子用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASENAME" size="200" required="true">
      <label language="zh_CN">测试子用例名称</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEPRIOR" size="5" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例执行级别</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEORDER" size="5" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例执行顺序</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASETIME" size="10" required="true" data-type="Decimal" scale="3">
      <label language="zh_CN">测试子用例执行耗时</label> 
    </has-relation>  
    <has-relation relation="tIMEUNITID" size="5" required="true" data-type="Integer">
      <label language="zh_CN">执行时间单位</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEEXECUTE" size="3" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例执行情况</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASECHECK" size="3" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例检查情况</label> 
    </has-relation>  
    <has-relation relation="aCTUALSUBTESTCASETIME" size="10" required="true" data-type="Decimal" scale="3">
      <label language="zh_CN">测试子用例实际执行耗时</label> 
    </has-relation>  
    <has-relation relation="eXECUTEDATETIME" required="true">
      <label language="zh_CN">测试子用例执行日期时间</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEDESC" size="1000">
      <label language="zh_CN">测试子用例执行描述</label> 
    </has-relation>  
    <has-relation relation="rEPORTDATE" required="true" data-type="Date">
      <label language="zh_CN">上报日期</label> 
    </has-relation> 
  </concept>  
  <relation name="tIMEUNITID" data-type="Integer">
    <label language="zh_CN">执行时间单位</label> 
  </relation>  
  <relation name="aCTUALSUBTESTCASETIME" data-type="Integer">
    <label language="zh_CN">测试子用例实际执行耗时</label> 
  </relation>  
  <relation name="sUBTESTCASENAME" data-type="String">
    <label language="zh_CN">测试子用例名称</label> 
  </relation>  
  <relation name="sUBTESTCASEID" data-type="String">
    <label language="zh_CN">测试子用例ID</label> 
  </relation>  
  <relation name="sUBTESTCASEORDER" data-type="Integer">
    <label language="zh_CN">测试子用例执行顺序</label> 
  </relation>  
  <relation name="eXECUTEDATETIME" data-type="DateTime">
    <label language="zh_CN">测试子用例执行日期时间</label> 
  </relation>  
  <relation name="sUBTESTCASEPRIOR" data-type="Integer">
    <label language="zh_CN">测试子用例执行级别</label> 
  </relation>  
  <relation name="sUBTESTCASETIME" data-type="Integer">
    <label language="zh_CN">测试子用例执行耗时</label> 
  </relation>  
  <relation name="rEPORTDATE" data-type="Date">
    <label language="zh_CN">上报日期</label> 
  </relation>  
  <relation name="sUBTESTCASEEXECUTE" data-type="Integer">
    <label language="zh_CN">测试子用例执行情况</label> 
  </relation>  
  <relation name="sUBTESTCASEDESC" data-type="String">
    <label language="zh_CN">测试子用例执行描述</label> 
  </relation>  
  <relation name="sUBTESTCASECHECK" data-type="Integer">
    <label language="zh_CN">测试子用例检查情况</label> 
  </relation> 
</model>

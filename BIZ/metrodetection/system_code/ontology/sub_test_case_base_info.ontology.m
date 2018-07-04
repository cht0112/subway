<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SUB_TEST_CASE_BASE_INFO" default-value-expr="guid()"> 
    <label language="zh_CN">测试子用例基本信息</label>  
    <has-relation relation="tESTCASEVER" size="22" required="true"> 
      <label language="zh_CN">测试用例版本</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true" data-type="String"> 
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEID" size="20" required="true" data-type="String"
      single-valued="true"> 
      <label language="zh_CN">测试子用例ID</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASENAME" size="200" required="true"> 
      <label language="zh_CN">测试子用例名称</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEPRIOR" size="5" required="true"> 
      <label language="zh_CN">测试子用例执行级别</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASEORDER" size="5" required="true"> 
      <label language="zh_CN">测试子用例执行顺序</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASETIME" size="10" required="true" scale="3"> 
      <label language="zh_CN">测试子用例执行耗时</label> 
    </has-relation>  
    <has-relation relation="tIMEUNITID" size="5" required="true"> 
      <label language="zh_CN">执行时间单位.默认单位小时</label> 
    </has-relation> 
    <has-relation relation="iNDEXNAME" size="200" required="true"> 
      <label language="zh_CN">指标名称</label> 
    </has-relation> 
  </concept>  
  <relation name="tIMEUNITID" data-type="Decimal"> 
    <label language="zh_CN">执行时间单位.默认单位小时</label> 
  </relation>  
  <relation name="sUBTESTCASENAME" data-type="String"> 
    <label language="zh_CN">测试子用例名称</label> 
  </relation>  
  <relation name="sUBTESTCASEORDER" data-type="Decimal"> 
    <label language="zh_CN">测试子用例执行顺序</label> 
  </relation>  
  <relation name="sUBTESTCASEPRIOR" data-type="Decimal"> 
    <label language="zh_CN">测试子用例执行级别</label> 
  </relation>  
  <relation name="sUBTESTCASETIME" data-type="Decimal"> 
    <label language="zh_CN">测试子用例执行耗时</label> 
  </relation> 
  <relation name="iNDEXNAME" data-type="String"> 
    <label language="zh_CN">指标名称</label> 
  </relation>
</model>

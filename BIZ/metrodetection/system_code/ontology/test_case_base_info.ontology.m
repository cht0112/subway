<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_CASE_BASE_INFO" default-value-expr="guid()">
    <label language="zh_CN">测试用例基本信息</label>  
    <has-relation relation="tESTCASEVER" size="22" required="true">
      <label language="zh_CN">测试用例版本</label> 
    </has-relation>  
    <has-relation relation="tESTCASEID" size="16" required="true">
      <label language="zh_CN">测试用例ID</label> 
    </has-relation>  
    <has-relation relation="tESTCASENAME" size="200" required="true">
      <label language="zh_CN">测试用例名称</label> 
    </has-relation>  
    <has-relation relation="tESTCASEPRIOR" size="1" required="true">
      <label language="zh_CN">测试用例级别</label> 
    </has-relation>  
    <has-relation relation="tESTCASEDESC" size="1000" required="true">
      <label language="zh_CN">测试用例描述</label> 
    </has-relation>  
    <has-relation relation="tESTCASEFILE">
      <label language="zh_CN">测试用例XML文件</label> 
    </has-relation>  
    <has-relation relation="mAKEDATETIME" required="true">
      <label language="zh_CN">作成时间</label> 
    </has-relation>  
    <has-relation relation="dECTIONBASEDONID" size="10" required="true">
      <label language="zh_CN">检测依据</label> 
    </has-relation>  
     
  </concept>  
  <relation name="sTANDARDEFILEID" data-type="String">
    <label language="zh_CN">依据标准内部文件ID</label> 
  </relation>  
  <relation name="tESTCASENAME" data-type="String">
    <label language="zh_CN">测试用例名称</label> 
  </relation>  
  <relation name="tESTCASEDESC" data-type="String">
    <label language="zh_CN">测试用例描述</label> 
  </relation>  
  <relation name="dECTIONBASEDONID" data-type="Decimal">
    <label language="zh_CN">作成时间</label> 
  </relation>  
  <relation name="tESTCASEPRIOR" data-type="String">
    <label language="zh_CN">测试用例级别</label> 
  </relation>  
  <relation name="mAKEDATETIME" data-type="DateTime">
    <label language="zh_CN">作成时间</label> 
  </relation>  
  <relation name="tESTCASEFILE" data-type="String">
    <label language="zh_CN">测试用例XML文件</label> 
  </relation> 
</model>

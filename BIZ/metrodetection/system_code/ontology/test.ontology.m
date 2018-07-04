<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_CASE_BASE_NEW" default-value-expr="guid()">
    <has-relation relation="tESTCASEID" size="16"/>  
    <has-relation relation="tESTCASENAME" size="20"/>  
    <has-relation relation="sUBTESTCASEID" size="20"/>  
    <label language="zh_CN">tt</label> 
  </concept>  
  <relation name="fCSYLID" data-type="String">
    <label language="zh_CN">测试用例id</label>
  </relation>  
  <relation name="fYLMC" data-type="String">
    <label language="zh_CN">用例名称</label>
  </relation>  
  <relation name="fCSZYLID" data-type="String">
    <label language="zh_CN">测试子用例id</label>
  </relation> 
</model>

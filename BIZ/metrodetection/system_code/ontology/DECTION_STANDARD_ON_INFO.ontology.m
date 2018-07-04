<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="DECTION_STANDARD_ON_INFO" default-value-expr="guid()"> 
    <has-relation relation="DECTION_STANDARD_TYPE" size="3"> 
      <label language="zh_CN">DECTION_STANDARD_TYPE</label> 
    </has-relation>  
    <has-relation relation="DECTION_STANDARD_ID" size="200"> 
      <label language="zh_CN">标准编码</label> 
    </has-relation>  
    <has-relation relation="CITY_CODE" size="5" required="true"> 
      <label language="zh_CN">CITY_CODE</label> 
    </has-relation>  
    <has-relation relation="PUBLISH_DATE" required="true" data-type="Date"> 
      <label language="zh_CN">标准发布时间</label> 
    </has-relation>  
    <has-relation relation="STANDARD_E_FILE_ID" size="50" required="true"> 
      <label language="zh_CN">STANDARD_E_FILE_ID</label> 
    </has-relation>  
    <has-relation relation="STANDARD_FILE_VER" required="true" data-type="String"> 
      <label language="zh_CN">STANDARD_FILE_VER</label> 
    </has-relation>  
    <has-relation relation="STANDARD_FILE_DESC" size="2000" required="true"> 
      <label language="zh_CN">标准内容描述</label> 
    </has-relation> 
  <has-relation relation="childStandrad" data-type="DECTION_BASED_STANDARD" single-valued="false" inverse-of="SID" whole-part="composition"></has-relation>
</concept>  
  <relation name="DECTION_STANDARD_ID" data-type="String"> 
    <label language="zh_CN">DECTION_STANDARD_ID</label> 
  </relation>  
  <relation name="STANDARD_FILE_VER"> 
    <label language="zh_CN">STANDARD_FILE_VER</label> 
  </relation>  
  <relation name="DECTION_STANDARD_TYPE" data-type="Decimal"> 
    <label language="zh_CN">DECTION_STANDARD_TYPE</label> 
  </relation>  
  <relation name="STANDARD_E_FILE_ID" data-type="String"> 
    <label language="zh_CN">STANDARD_E_FILE_ID</label> 
  </relation>  
  <relation name="STANDARD_FILE_DESC" data-type="String"> 
    <label language="zh_CN">STANDARD_FILE_DESC</label> 
  </relation>  
  <relation name="CITY_CODE" data-type="Decimal"> 
    <label language="zh_CN">CITY_CODE</label> 
  </relation>  
  <relation name="PUBLISH_DATE" data-type="DateTime"> 
    <label language="zh_CN">PUBLISH_DATE</label> 
  </relation> 
<relation name="childStandrad" data-type="DECTION_BASED_STANDARD" inverse-of="SID" unique="false" single-valued="false"><label language="zh_CN">关联子表</label>
</relation>
</model>

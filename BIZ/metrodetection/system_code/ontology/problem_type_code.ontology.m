<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="PROBLEM_TYPE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">问题类型编码</label>  
    <has-relation relation="pROBLEMPRIOR" size="22" required="true"> 
      <label language="zh_CN">问题级别</label> 
    </has-relation>  
    <has-relation relation="pROBLEMTYPE" size="5" required="true"> 
      <label language="zh_CN">问题类型</label> 
    </has-relation>  
    <has-relation relation="pROBLEMTYPECNAME" size="100" required="true"> 
      <label language="zh_CN">问题类型</label> 
    </has-relation>  
    <has-relation relation="pROBLEMTYPEENAME" size="100"> 
      <label language="zh_CN">问题类型英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="pROBLEMTYPECNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="pROBLEMTYPE" data-type="Decimal"> 
    <label language="zh_CN">业务阶段</label> 
  </relation>  
  <relation name="pROBLEMTYPEENAME" data-type="String"> 
    <label language="zh_CN">英文名称</label> 
  </relation>  
  <relation name="pROBLEMPRIOR" data-type="Integer"> 
    <label language="zh_CN">问题级别</label> 
  </relation> 
</model>

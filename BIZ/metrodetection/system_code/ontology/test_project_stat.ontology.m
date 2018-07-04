<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="TEST_PROJECT_STAT" default-value-expr="guid()">
    <label language="zh_CN">测试项目统计</label>  
    <has-relation relation="rEPORTDATE" size="8" required="true" data-type="Integer">
      <label language="zh_CN">统计报告日期</label> 
    </has-relation>  
    <has-relation relation="pROJECTDATE" size="8" required="true" data-type="Integer">
      <label language="zh_CN">立项日期</label> 
    </has-relation>  
    <has-relation relation="bUSINESSID" size="5" required="true" data-type="Integer">
      <label language="zh_CN">业务类型</label> 
    </has-relation>  
    <has-relation relation="bUSINESSSTAGE" size="5" required="true" data-type="Integer">
      <label language="zh_CN">业务阶段</label> 
    </has-relation>  
    <has-relation relation="aPPLYFORDEVICETYPE" size="5" required="true" data-type="Integer">
      <label language="zh_CN">应用检测对象</label> 
    </has-relation>  
    <has-relation relation="mANUFACTUREID" size="5" required="true" data-type="Integer">
      <label language="zh_CN">供应商ID</label> 
    </has-relation>  
    <has-relation relation="pROJECTNUMBER" size="5" required="true" data-type="Integer">
      <label language="zh_CN">项目总数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASENUMBER" size="5" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例数</label> 
    </has-relation>  
    <has-relation relation="sUBTESTCASETIME" size="10" required="true" data-type="Integer">
      <label language="zh_CN">测试子用例工时</label> 
    </has-relation> 
  </concept>  
  <relation name="pROJECTDATE" data-type="Integer">
    <label language="zh_CN">立项日期</label> 
  </relation>  
  <relation name="pROJECTNUMBER" data-type="Integer">
    <label language="zh_CN">项目总数</label> 
  </relation>  
  <relation name="bUSINESSID" data-type="Integer">
    <label language="zh_CN">业务类型</label> 
  </relation>  
  <relation name="sUBTESTCASETIME" data-type="Integer">
    <label language="zh_CN">测试子用例工时</label> 
  </relation>  
  <relation name="mANUFACTUREID" data-type="Integer">
    <label language="zh_CN">供应商ID</label> 
  </relation>  
  <relation name="bUSINESSSTAGE" data-type="Integer">
    <label language="zh_CN">业务阶段</label> 
  </relation>  
  <relation name="aPPLYFORDEVICETYPE" data-type="Integer">
    <label language="zh_CN">应用检测对象</label> 
  </relation>  
  <relation name="rEPORTDATE" data-type="Integer">
    <label language="zh_CN">统计报告日期</label> 
  </relation>  
  <relation name="sUBTESTCASENUMBER" data-type="Integer">
    <label language="zh_CN">测试子用例数</label> 
  </relation> 
</model>

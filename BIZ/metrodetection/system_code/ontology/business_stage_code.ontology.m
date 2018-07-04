<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="BUSINESS_STAGE_CODE" default-value-expr="guid()"> 
    <label language="zh_CN">业务阶段定义</label>  
    <has-relation relation="bUSINESSID" size="22" required="true"/>  
    <has-relation relation="bUSINESSSTAGE" size="5" required="true"> 
      <label language="zh_CN">业务阶段</label> 
    </has-relation>  
    <has-relation relation="bUSINESSSTAGECNAME" size="100" required="true"> 
      <label language="zh_CN">业务阶段</label> 
    </has-relation>  
    <has-relation relation="bUSINESSSTAGEENAME" size="100"> 
      <label language="zh_CN">业务阶段英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="bUSINESSSTAGECNAME" data-type="String"> 
    <label language="zh_CN">中文名称</label> 
  </relation>  
  <relation name="bUSINESSID" data-type="Integer"> 
    <label language="zh_CN">业务类型</label> 
  </relation>  
  <relation name="bUSINESSSTAGEENAME" data-type="String"> 
    <label language="zh_CN">业务阶段英文名称</label> 
  </relation>  
  <relation name="bUSINESSSTAGE" data-type="Decimal"> 
    <label language="zh_CN">业务阶段</label> 
  </relation>
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OFFICE_TYPE_CODE" default-value-expr="nextSeq('20130522')+1000">
    <label language="zh_CN">职位编码</label>  
    <has-relation relation="oFFICEIDCNAME" size="100" required="true">
      <label language="zh_CN">职位中文名称</label> 
    </has-relation>  
    <has-relation relation="oFFICEIDENAME" size="100">
      <label language="zh_CN">职位英文名称</label> 
    </has-relation> 
  </concept>  
  <relation name="oFFICEIDCNAME" data-type="String">
    <label language="zh_CN">职位中文名称</label> 
  </relation>  
  <relation name="oFFICEIDENAME" data-type="String">
    <label language="zh_CN">职位英文名称</label> 
  </relation> 
</model>

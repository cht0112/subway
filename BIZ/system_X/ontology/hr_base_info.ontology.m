<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="HR_BASE_INFO"> 
    <label language="zh_CN">人力资源信息</label>  
    <has-relation relation="oPERATORNAME" size="30" required="true"> 
      <label language="zh_CN">姓名</label> 
    </has-relation>  
    <has-relation relation="oPERATORSEX" size="3" required="true"> 
      <label language="zh_CN">性别</label> 
    </has-relation>  
    <has-relation relation="oPERATORBIRTHDAY" data-type="Date"> 
      <label language="zh_CN">出生年月日</label> 
    </has-relation>  
    <has-relation relation="nATION" size="30" required="false"> 
      <label language="zh_CN">民族</label> 
    </has-relation>  
    <has-relation relation="oFFICEID" size="5" required="true"> 
      <label language="zh_CN">职位</label> 
    </has-relation>  
    <has-relation relation="pOSITIONID" size="5"> 
      <label language="zh_CN">岗位</label> 
    </has-relation>  
    <has-relation relation="dEGREEID" size="5" required="true"> 
      <label language="zh_CN">学位</label> 
    </has-relation>  
    <has-relation relation="eDUCATIONID" size="5" required="true"> 
      <label language="zh_CN">学历</label> 
    </has-relation>  
    <has-relation relation="pOLITICALID" size="5" required="true"> 
      <label language="zh_CN">政治面貌</label> 
    </has-relation>  
    <has-relation relation="pROFESSIONAL" size="200"> 
      <label language="zh_CN">专业</label> 
    </has-relation>  
    <has-relation relation="pOSITIONALTITLE" size="5"> 
      <label language="zh_CN">职称</label> 
    </has-relation>  
    <has-relation relation="eMAILADDRESS" size="200"> 
      <label language="zh_CN">email地址</label> 
    </has-relation>  
    <has-relation relation="mOBILE" size="20"> 
      <label language="zh_CN">移动电话</label> 
    </has-relation>  
    <has-relation relation="oPERATORSTATE" size="3" required="true"> 
      <label language="zh_CN">操作员状态</label> 
    </has-relation>  
    <has-relation relation="mEMO" data-type="String"/>  
    <has-relation relation="Scode" data-type="String" unique="true" single-valued="false"/> 
    <has-relation relation="cARDID" size="64"> 
      <label language="zh_CN">证件号</label> 
    </has-relation>
  </concept>  
  <relation name="oPERATORNAME" data-type="String"> 
    <label language="zh_CN">姓名</label> 
  </relation>  
  <relation name="pOLITICALID" data-type="Decimal"> 
    <label language="zh_CN">政治面貌</label> 
  </relation>  
  <relation name="pOSITIONID" data-type="Decimal"> 
    <label language="zh_CN">岗位</label> 
  </relation>  
  <relation name="pOSITIONALTITLE" data-type="Decimal"> 
    <label language="zh_CN">职称</label> 
  </relation>  
  <relation name="eMAILADDRESS" data-type="String"> 
    <label language="zh_CN">email地址</label> 
  </relation>  
  <relation name="oPERATORSTATE" data-type="Decimal"> 
    <label language="zh_CN">操作员状态</label> 
  </relation>  
  <relation name="eDUCATIONID" data-type="Decimal"> 
    <label language="zh_CN">学历</label> 
  </relation>  
  <relation name="nATION" data-type="String"> 
    <label language="zh_CN">民族</label> 
  </relation>  
  <relation name="oFFICEID" data-type="Decimal"> 
    <label language="zh_CN">职位</label> 
  </relation>  
  <relation name="oPERATORSEX" data-type="Decimal"> 
    <label language="zh_CN">性别</label> 
  </relation>  
  <relation name="dEGREEID" data-type="Decimal"> 
    <label language="zh_CN">学位</label> 
  </relation>  
  <relation name="mOBILE" data-type="String"> 
    <label language="zh_CN">移动电话</label> 
  </relation>  
  <relation name="oPERATORBIRTHDAY" data-type="Date"> 
    <label language="zh_CN">出生年月日</label> 
  </relation>  
  <relation name="pROFESSIONAL" data-type="String"> 
    <label language="zh_CN">专业</label> 
  </relation>  
  <relation name="mEMO" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="Scode" data-type="String"> 
    <label language="zh_CN">编码</label> 
  </relation> 
  <relation name="cARDID" data-type="String"> 
    <label language="zh_CN">证件号</label> 
  </relation>
</model>

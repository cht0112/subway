<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="FOLDER_FILE_PRIVILEG" default-value-expr="guid()">
    <label language="zh_CN">文件夹或文件权限指派</label>  
    <has-relation relation="pRIVILEGECHOOSE" size="22" required="true">
      <label language="zh_CN">指派类型</label> 
    </has-relation>  
    <has-relation relation="fOLDERORFILEID" size="50" required="true">
      <label language="zh_CN">指派文件夹或文件编号</label> 
    </has-relation>  
    <has-relation relation="uSERORGROUP" size="8" required="true">
      <label language="zh_CN">操作用户或用户组</label> 
    </has-relation>  
    <has-relation relation="pRIVILEGETYPE" size="5" required="true">
      <label language="zh_CN">权限类型</label> 
    </has-relation> 
  </concept>  
  <relation name="uSERORGROUP" data-type="String">
    <label language="zh_CN">操作用户或用户组</label> 
  </relation>  
  <relation name="pRIVILEGETYPE" data-type="Decimal">
    <label language="zh_CN">权限类型</label> 
  </relation>  
  <relation name="fOLDERORFILEID" data-type="String">
    <label language="zh_CN">指派文件夹或文件编号</label> 
  </relation>  
  <relation name="pRIVILEGECHOOSE" data-type="Integer">
    <label language="zh_CN">指派类型</label> 
  </relation> 
</model>

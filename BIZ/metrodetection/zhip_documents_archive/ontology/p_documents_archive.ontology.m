<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="P_DOCUMENTS_ARCHIVE" default-value-expr="guid()">
    <label language="zh_CN">纸质文档归档</label>  
    <has-relation relation="DOCUMENT_CATEGORY" size="5" required="true">
      <label language="zh_CN">文件科目</label> 
    </has-relation>  
    <has-relation relation="DOCUMENT_TYPE" size="5" required="true">
      <label language="zh_CN">文件类型</label> 
    </has-relation>  
    <has-relation relation="P_FILE_NAME" size="200" required="true">
      <label language="zh_CN">文件名称</label> 
    </has-relation>  
    <has-relation relation="FILE_VER" size="20" required="true" default-value-expr="'0.0'">
      <label language="zh_CN">文件版本0.0</label> 
    </has-relation>  
    <has-relation relation="SECRET_LEVEL" size="5">
      <label language="zh_CN">涉密级别</label> 
    </has-relation>  
    <has-relation relation="P_FILE_PROPERTY" size="1000">
      <label language="zh_CN">文件属性</label> 
    </has-relation>  
    <has-relation relation="P_FILE_DESC" size="1000">
      <label language="zh_CN">文件简介</label> 
    </has-relation>  
    <has-relation relation="LOCATION_ROOM_ID" size="10" required="true">
      <label language="zh_CN">存档房间</label> 
    </has-relation>  
    <has-relation relation="LOCATION_CABINET_ID" size="30">
      <label language="zh_CN">存档文件柜</label> 
    </has-relation>  
    <has-relation relation="ARCHIVE_DATE" required="true" default-value-expr="currentDateTime()">
      <label language="zh_CN">存档日期</label> 
    </has-relation>  
    <has-relation relation="ARCHIVE_OPERATOR" size="8" required="true">
      <label language="zh_CN">存档人</label> 
    </has-relation>  
    <has-relation relation="INPUT_OPERATOR" size="8" required="true">
      <label language="zh_CN">记录人</label> 
    </has-relation>  
    <has-relation relation="ALLOW_BORROW" size="3" required="true">
      <label language="zh_CN">可借状态</label> 
    </has-relation>  
    <has-relation relation="DESTROY_STATE" size="3" required="true">
      <label language="zh_CN">销毁状态</label> 
    </has-relation>  
    <has-relation relation="MEMO" size="1000">
      <label language="zh_CN">备注</label> 
    </has-relation> 
  </concept>  
  <relation name="ARCHIVE_OPERATOR" data-type="String">
    <label language="zh_CN">存档人</label> 
  </relation>  
  <relation name="DESTROY_STATE" data-type="Decimal">
    <label language="zh_CN">销毁状态</label> 
  </relation>  
  <relation name="ARCHIVE_DATE" data-type="DateTime">
    <label language="zh_CN">存档日期</label> 
  </relation>  
  <relation name="SECRET_LEVEL" data-type="Decimal">
    <label language="zh_CN">涉密级别</label> 
  </relation>  
  <relation name="ALLOW_BORROW" data-type="Decimal">
    <label language="zh_CN">可借状态</label> 
  </relation>  
  <relation name="LOCATION_CABINET_ID" data-type="String">
    <label language="zh_CN">存档文件柜</label> 
  </relation>  
  <relation name="INPUT_OPERATOR" data-type="String">
    <label language="zh_CN">记录人</label> 
  </relation>  
  <relation name="MEMO" data-type="String">
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="DOCUMENT_CATEGORY" data-type="Decimal">
    <label language="zh_CN">文件科目</label> 
  </relation>  
  <relation name="DOCUMENT_TYPE" data-type="Decimal">
    <label language="zh_CN">文件类型</label> 
  </relation>  
  <relation name="P_FILE_PROPERTY" data-type="String">
    <label language="zh_CN">文件属性</label> 
  </relation>  
  <relation name="P_FILE_NAME" data-type="String">
    <label language="zh_CN">文件名称</label> 
  </relation>  
  <relation name="P_FILE_DESC" data-type="String">
    <label language="zh_CN">文件简介</label> 
  </relation>  
  <relation name="FILE_VER" data-type="String">
    <label language="zh_CN">文件版本</label> 
  </relation>  
  <relation name="LOCATION_ROOM_ID" data-type="Decimal">
    <label language="zh_CN">存档房间</label> 
  </relation> 

<relation name="P_FILE_IDFILEID" data-type="String"><label language="zh_CN">文件编号</label>
</relation>
<relation name="DOCUMENT_TYPETYPE" data-type="Decimal"><label language="zh_CN">文件类型</label>
</relation>
<relation name="DOCUMENT_CATEGORYCATEGORY" data-type="Decimal"><label language="zh_CN">文件科目</label>
</relation>
<relation name="INDEED_RETURN_DATERETURNDATE" data-type="DateTime"><label language="zh_CN">实际归还日期</label>
</relation>
<relation name="RETURN_DATEDATE" data-type="DateTime"><label language="zh_CN">预计归还日期</label>
</relation>
<relation name="P_FILE_NAMEFILENAME" data-type="String"><label language="zh_CN">文件名称</label>
</relation>
<relation name="BORROWER" data-type="String"><label language="zh_CN">借阅者</label>
</relation>
<relation name="APPLICATION_TIMETIME" data-type="DateTime"><label language="zh_CN">借阅申请时间</label>
</relation>
</model>

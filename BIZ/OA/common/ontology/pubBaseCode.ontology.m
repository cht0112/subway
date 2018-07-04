<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <concept name="OA_Pub_BaseCode" default-value-expr="createGuid()">
    <has-relation relation="version" default-value-expr="0"/>
    <label language="zh_CN">OA公共基础编码表</label>
    <has-relation relation="fScope"/>
    <has-relation relation="fCode"/>
    <has-relation relation="fName"/>
    <has-relation relation="fDescription"/>
    <has-relation relation="fSequence" data-type="String"/>
    <has-relation relation="fUseStatus"/>
    <has-relation relation="fUseStatusName"/>
    <has-relation relation="fParentCode"/>
    <has-relation relation="fLevel" data-type="Integer"/>
    <has-relation relation="fURL"/>
    <has-relation relation="fCreateOgnID"/>
    <has-relation relation="fCreateOgnName"/>
    <has-relation relation="fCreateDeptID"/>
    <has-relation relation="fCreateDeptName"/>
    <has-relation relation="fCreatePsnID"/>
    <has-relation relation="fCreatePsnName"/>
    <has-relation relation="fCreatePsnFID"/>
    <has-relation relation="fCreateTime"/>
    <has-relation relation="fUpdatePsnID"/>
    <has-relation relation="fUpdatePsnName"/>
    <has-relation relation="fUpdateTime"/>
  </concept>
</model>

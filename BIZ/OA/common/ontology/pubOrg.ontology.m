<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="V_SA_OPOrg" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">组织机构视图</label>  
    <has-relation relation="sName"/>  
    <has-relation relation="sCode"/>  
    <has-relation relation="sFName"/>  
    <has-relation relation="sFCode"/>  
    <has-relation relation="sFID"/>  
    <has-relation relation="sOrgKindID"/>  
    <has-relation relation="sSequence" data-type="Integer"/>  
    <has-relation relation="sValidState"/>  
    <has-relation relation="sParent" data-type="V_SA_OPOrg"/>  
    <has-relation relation="sChildren" single-valued="false" data-type="V_SA_OPOrg"/>  
    <has-relation relation="sLevel"/>  
    <has-relation relation="sPhone"/>  
    <has-relation relation="sFax"/>  
    <has-relation relation="sAddress"/>  
    <has-relation relation="sZip"/>  
    <has-relation relation="sDescription"/>  
    <has-relation relation="sPersonID"/> 
  </concept>  
  <concept name="V_SA_OPPerson" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">人员视图</label>  
    <has-relation relation="sName"/>  
    <has-relation relation="sCode"/>  
    <has-relation relation="sNumb"/>  
    <has-relation relation="sLoginName"/>  
    <has-relation relation="sPassword"/>  
    <has-relation relation="sMainOrgID" data-type="String"/>  
    <has-relation relation="sSafeLevelID" data-type="String"/>  
    <has-relation relation="sSequence" data-type="Integer"/>  
    <has-relation relation="sValidState"/>  
    <has-relation relation="sDescription"/>  
    <has-relation relation="sPhoto"/>  
    <has-relation relation="sSex"/>  
    <has-relation relation="sBirthday"/>  
    <has-relation relation="sJoinDate"/>  
    <has-relation relation="sHomePlace"/>  
    <has-relation relation="sCountry"/>  
    <has-relation relation="sProvince"/>  
    <has-relation relation="sCity"/>  
    <has-relation relation="sDegree"/>  
    <has-relation relation="sGraduateSchool"/>  
    <has-relation relation="sSpeciality"/>  
    <has-relation relation="sSchoolLength"/>  
    <has-relation relation="sTitle"/>  
    <has-relation relation="sMarriage"/>  
    <has-relation relation="sCardNO"/>  
    <has-relation relation="sCardKind"/>  
    <has-relation relation="sFamilyAddress"/>  
    <has-relation relation="sZip"/>  
    <has-relation relation="sMsn"/>  
    <has-relation relation="sQQ"/>  
    <has-relation relation="sMail"/>  
    <has-relation relation="sMobilePhone"/>  
    <has-relation relation="sFamilyPhone"/>  
    <has-relation relation="sOfficePhone"/>  
    <has-relation relation="sMainOrgFID"/>  
    <has-relation relation="sMainOrgFName"/> 
  </concept> 
</model>

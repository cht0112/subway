<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="customOrgGroupProcess"> 
    <label language="zh_CN">组织机构分组</label>  
    <has-action action="saveCustomOrgGroupAction" access-permission="public"/>  
    <has-action action="createCustomOrgGroupAction" access-permission="public"/>  
    <has-action action="queryCustomOrgDetailAction" access-permission="public"/>  
    <has-action action="saveCustomOrgDetailAction" access-permission="public"/>  
    <has-action action="createCustomOrgDetailAction" access-permission="public"/>  
    <static-activity name="personalActivity">
      <label language="zh_CN">组织机构分组_个人</label>  
      <has-action action="queryCustomOrgGroupAction" access-permission="public">
        <protected name="condition" type="String" value="(AP_CustomOrgGroup.fType = 'personal') and (AP_CustomOrgGroup.fCreatePsnID = :currentPersonID())"/> 
      </has-action> 
    </static-activity>  
    <static-activity name="departmentalActivity">
      <label language="zh_CN">组织机构分组_部门</label>  
      <has-action action="queryCustomOrgGroupAction" access-permission="public"/> 
    </static-activity>  
    <static-activity name="globalActivity">
      <label language="zh_CN">组织机构分组_系统</label>  
      <has-action action="queryCustomOrgGroupAction" access-permission="public">
        <protected name="condition" type="String" value="(AP_CustomOrgGroup.fType = 'global')"/> 
      </has-action> 
    </static-activity> 
  </process> 
</model>

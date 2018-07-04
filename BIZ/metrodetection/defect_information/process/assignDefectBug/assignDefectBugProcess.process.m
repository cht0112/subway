<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assignDefectBugProcess"> 
    <label language="zh_CN">分配缺陷</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">分配缺陷</label> 
    </static-activity>  
    <has-action action="queryDEFECT_TRACK_BUG_INFOAction" access-permission="public"/>  
    <has-action action="saveDEFECT_TRACK_BUG_INFOAction" access-permission="public"/>  
    <has-action action="createDEFECT_TRACK_BUG_INFOAction" access-permission="public"/>  
    <has-action action="queryDEFECT_TRACK_FUNC_INFOAction" access-permission="public"/>  
    <has-action action="queryDEFECT_TRACK_MODULE_INFOAction" access-permission="public"/>  
    <has-action action="queryDEFECT_TRACK_PRODUCT_INFOAction" access-permission="public"/>  
    <has-action action="queryDEFECT_TRACK_PROJECT_INFOAction" access-permission="public"/>  
    <has-action action="queryDEFECT_TRACK_VERSION_INFOAction" access-permission="public"/>  
    <has-action action="queryNewDefectBugAction" access-permission="public"/>  
    <has-action action="queryHR_BASE_INFOAction" access-permission="public"/>  
    <has-action action="queryProductVersionAction" access-permission="public"/>  
    <has-action action="queryProjectMemberNameAction" access-permission="public"/>  
    <has-action action="queryHR_OPERATOR_PASSWORD_INFOAction" access-permission="public"/>  
    <has-action action="queryDEFECT_STATUS_CODEAction" access-permission="public"/>  
    <has-action action="queryOPOrgAction" access-permission="public"/> 
  </process> 
</model>

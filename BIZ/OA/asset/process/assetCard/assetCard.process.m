<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assetCardProcess"> 
    <label language="zh_CN">资产卡片</label>  
    <static-activity name="assetCardActivity"> 
      <label language="zh_CN">资产卡片</label> 
    </static-activity>  
    <has-action action="createASCardAction" access-permission="public"/>  
    <has-action action="queryASCardAction" access-permission="public"/>  
    <has-action action="saveASCardAction" access-permission="public"/>  
    <has-action action="queryASKindAction" access-permission="public"/>  
    <has-action action="queryASUnitAction" access-permission="public"/>  
    <has-action action="queryASCheckMAction" access-permission="public"/>  
    <has-action action="queryASCheckDAction" access-permission="public"/>  
    <has-action action="queryASUseRecordAction" access-permission="public"/>  
    <has-action action="queryASInMAction" access-permission="public"/>  
    <has-action action="queryASInDAction" access-permission="public"/>  
    <has-action action="queryASRepairApplyAction" access-permission="public"/>  
    <has-action action="queryASInventoryRecordAction" access-permission="public"/>  
    <has-action action="queryASBuyApplyMAction" access-permission="public"/>  
    <has-action action="queryASBuyApplyDAction" access-permission="public"/>  
    <has-action action="queryASInModeAction" access-permission="public"/> 
    <has-action action="updateAssetConfirmStatusAction" access-permission="public" />
  </process> 
</model>

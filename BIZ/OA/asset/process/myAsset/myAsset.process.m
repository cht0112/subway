<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="myAssetProcess">
    <label language="zh_CN">我的资产</label>
    <static-activity name="myAssetActivity">
      <label language="zh_CN">我的资产</label>
    </static-activity>
    <has-action action="queryASMyAssetAction"/>
    <has-action action="queryASCardAction"/>
    <has-action action="queryASCheckMAction" access-permission="public"/>  
    <has-action action="queryASCheckDAction" access-permission="public"/>  
    <has-action action="queryASUseRecordAction" access-permission="public"/>  
    <has-action action="queryASInMAction" access-permission="public"/>  
    <has-action action="queryASInDAction" access-permission="public"/>  
    <has-action action="queryASRepairApplyAction" access-permission="public"/>  
    <has-action action="queryASInventoryRecordAction" access-permission="public"/>  
    <has-action action="queryASBuyApplyMAction" access-permission="public"/>  
    <has-action action="queryASBuyApplyDAction" access-permission="public"/>  
    <has-action action="saveASCardAction" access-permission="public" />
  </process>
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="assetInventoryProcess">
    <label language="zh_CN">资产清查</label>
    <static-activity name="assetInventoryActivity">
      <label language="zh_CN">资产清查</label>
    </static-activity>
    <has-action action="queryASCardAction"/>
    <has-action action="createASInventoryAction"/>
    <has-action action="queryASInventoryAction"/>
    <has-action action="saveASInventoryAction"/>
    <has-action action="createASJoinInventoryAction"/>
    <has-action action="queryASJoinInventoryAction"/>
    <has-action action="saveASJoinInventoryAction"/>
    <has-action action="queryASInventoryRecordAction"/>
    <has-action action="queryASCheckMAction"/>
    <has-action action="queryASCheckDAction"/>
    <has-action action="queryASUseRecordAction"/>
    <has-action action="queryASInMAction"/>
    <has-action action="queryASInDAction"/>
    <has-action action="queryASRepairApplyAction"/>
    <has-action action="queryASBuyApplyMAction"/>
    <has-action action="queryASBuyApplyDAction"/>
    <has-action action="queryASKindAction"/>
  </process>
</model>

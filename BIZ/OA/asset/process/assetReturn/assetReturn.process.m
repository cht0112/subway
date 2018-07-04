<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="assetReturnProcess">
    <label language="zh_CN">资产归还</label>
    <static-activity name="assetReturnActivity">
      <label language="zh_CN">资产归还</label>
    </static-activity>
    <has-action action="createASCardAction"/>
    <has-action action="queryASCardAction"/>
    <has-action action="saveASCardAction"/>
    <has-action action="assetReturnAction"/>
    <has-action action="queryASReturnAction"/>
    <has-action action="createASReturnAction"/>
    <has-action action="saveASReturnAction"/>
    <has-action action="queryASCheckMAction"/>
    <has-action action="queryASCheckDAction"/>
    <has-action action="queryASUseRecordAction"/>
    <has-action action="queryASInMAction"/>
    <has-action action="queryASInDAction"/>
    <has-action action="queryASRepairApplyAction"/>
    <has-action action="queryASInventoryRecordAction"/>
    <has-action action="queryASBuyApplyMAction"/>
    <has-action action="queryASBuyApplyDAction"/>
  </process>
</model>

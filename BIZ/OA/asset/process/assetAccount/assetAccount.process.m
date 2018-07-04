<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="assetAccountProcess">
    <label language="zh_CN">资产台帐</label>
    <static-activity name="assetAccountActivity">
      <label language="zh_CN">资产台帐</label>
    </static-activity>
    <has-action action="queryASCardAction"/>
    <has-action action="queryASKindAction"/>
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

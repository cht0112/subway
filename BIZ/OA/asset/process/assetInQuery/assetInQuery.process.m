<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="assetInQueryProcess">
    <label language="zh_CN">资产入库查询</label>
    <static-activity name="startActivity">
      <label language="zh_CN">资产入库查询</label>
    </static-activity>
    <has-action action="queryASInMAction"/>
    <has-action action="queryASInDAction"/>
    <has-action action="queryASCheckMAction"/>
    <has-action action="queryASCheckDAction"/>
    <has-action action="queryASBuyApplyMAction"/>
    <has-action action="queryASBuyApplyDAction"/>
  </process>
</model>

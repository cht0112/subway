<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="assetUnitSetProcess">
    <label language="zh_CN">assetUnitSet</label>
    <static-activity name="assetUnitSetActivity">
      <label language="zh_CN">计量单位设置</label>
    </static-activity>
    <has-action action="createASUnitAction"/>
    <has-action action="queryASUnitAction"/>
    <has-action action="saveASUnitAction"/>
  </process>
</model>

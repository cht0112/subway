<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="assetKindSummaryProcess">
    <label language="zh_CN">类别统计报表</label>
    <static-activity name="assetKindSummaryActivity">
      <label language="zh_CN">类别统计报表</label>
    </static-activity>
     <has-action action="sqlQueryAction">
    	<public name="dataModel" type="String" value="/OA/asset/data" />
    </has-action>
  </process>
</model>

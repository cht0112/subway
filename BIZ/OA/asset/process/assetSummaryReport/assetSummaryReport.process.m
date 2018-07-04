<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assetSummaryReportProcess"> 
    <static-activity name="mainActivity">
      <label language="zh_CN">固定资产申购统计</label> 
    </static-activity>  
    <label language="zh_CN">固定资产申购统计</label> 
    
  <has-action action="sqlQueryAction" access-permission="public"><public name="dataModel" type="String" value="/OA/asset/data"></public>
</has-action>
<has-action action="assetSummaryMainAction" access-permission="public"></has-action>
<has-action action="assetSummaryDetailAction" access-permission="public"></has-action>
<has-action action="assetSummaryZTAction" access-permission="public"></has-action>
<has-action action="assetSummaryBTAction" access-permission="public"></has-action>
</process> 
</model>

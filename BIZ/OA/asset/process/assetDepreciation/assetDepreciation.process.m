<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="assetDepreciationProcess">
    <label language="zh_CN">资产折旧</label>
    <static-activity name="assetDepreciationActivity">
      <label language="zh_CN">资产折旧</label>
    </static-activity>
    
    
    
  



<has-action action="queryASDeprecitionAction" access-permission="public"></has-action>
<has-action action="insertDepreciationAction" access-permission="public"></has-action>
<has-action action="updateDepreciationAction" access-permission="public"></has-action>
<has-action action="sqlQueryAction" access-permission="public"><public name="dataModel" type="String" value="/OA/asset/data"></public>
</has-action>
</process>
</model>

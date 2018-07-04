<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS assetDiscardApplyQueryProcess	(LABEL "资产报废申请查询" "zh_CN")
	(FLOW FALSE)
	(HAS-DEFAULT-ACTIONS "/OA/asset/data")
	(DEFACTIVITY-STATIC assetDiscardApplyQueryActivity
		(LABEL "资产报废申请查询" "zh_CN"))
	(HAS-ACTION queryASDiscardApplyAction "/OA/asset/data"))-->
  <process name="assetDiscardApplyQueryProcess">
    <label language="zh_CN">资产报废申请查询</label>
    <static-activity name="assetDiscardApplyQueryActivity">
      <label language="zh_CN">资产报废申请查询</label>
    </static-activity>
    
  





<has-action action="queryASDiscardApplyAction" access-permission="public"></has-action>
<has-action action="sqlQueryAction" access-permission="public"><public name="dataModel" type="String" value="/OA/asset/data"></public>
</has-action>
</process>
</model>

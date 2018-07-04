<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS assetRepairApplyQueryProcess	(LABEL "资产维修申请查询" "zh_CN")
	(FLOW FALSE)
	(HAS-DEFAULT-ACTIONS "/OA/asset/data")
	(DEFACTIVITY-STATIC assetRepairApplyQueryActivity
		(LABEL "资产维修申请查询" "zh_CN"))
	(HAS-ACTION queryASRepairApplyAction "/OA/asset/data")
	(HAS-ACTION queryASRepairItemAction "/OA/asset/data")
	(HAS-ACTION queryASFittingInfoAction "/OA/asset/data"))-->
  <process name="assetRepairApplyQueryProcess">
    <label language="zh_CN">资产维修申请查询</label>
    <static-activity name="assetRepairApplyQueryActivity">
      <label language="zh_CN">资产维修申请查询</label>
    </static-activity>
    <has-action action="queryASRepairApplyAction"/>
    <has-action action="queryASRepairItemAction"/>
    <has-action action="queryASFittingInfoAction"/>
  </process>
</model>

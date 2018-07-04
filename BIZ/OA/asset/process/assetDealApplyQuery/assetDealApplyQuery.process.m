<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS assetDealApplyQueryProcess	(LABEL "资产处置申请查询" "zh_CN")
	(FLOW FALSE)
	(HAS-DEFAULT-ACTIONS "/OA/asset/data")
	(DEFACTIVITY-STATIC assetDealApplyQueryActivity
		(LABEL "资产处置申请查询" "zh_CN"))
	(HAS-ACTION queryASDealApplyAction "/OA/asset/data"))-->
  <process name="assetDealApplyQueryProcess">
    <label language="zh_CN">资产处置申请查询</label>
    <static-activity name="assetDealApplyQueryActivity">
      <label language="zh_CN">资产处置申请查询</label>
    </static-activity>
    <has-action action="queryASDealApplyAction"/>
  </process>
</model>

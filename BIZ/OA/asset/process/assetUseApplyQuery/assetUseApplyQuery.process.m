<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS assetUseApplyQueryProcess	(LABEL "资产使用申请查询" "zh_CN")
	(FLOW FALSE)
	(HAS-DEFAULT-ACTIONS "/OA/asset/data")
	(DEFACTIVITY-STATIC assetUseApplyQueryActivity
		(LABEL "资产使用申请查询" "zh_CN"))
	(HAS-ACTION queryASUseApplyMAction "/OA/asset/data")
	(HAS-ACTION queryASUseArrangeAction "/OA/asset/data"))-->
  <process name="assetUseApplyQueryProcess">
    <label language="zh_CN">资产使用申请查询</label>
    <static-activity name="assetUseApplyQueryActivity">
      <label language="zh_CN">资产使用申请查询</label>
    </static-activity>
    <has-action action="queryASUseApplyMAction"/>
    <has-action action="queryASUseArrangeAction"/>
  </process>
</model>

<?xml version="1.0" encoding="utf-8"?>

<root> 
  <item label="办公自动化（北京起步）"> 
    <item label="固定资产管理"> 
      <item label="基础设置"> 
        <item label="资产类别设置" process="/OA/asset/process/baseSet/assetKindSet/assetKindSetProcess"
          activity="assetKindSetActivity" url="/OA/asset/process/baseSet/assetKindSet/assetKindSetActivity.w"/>  
        <item label="计量单位设置" process="/OA/asset/process/baseSet/assetUnitSet/assetUnitSetProcess"
          activity="assetUnitSetActivity" url="/OA/asset/process/baseSet/assetUnitSet/assetUnitSetActivity.w"/>  
        <item label="入库方式设置" process="/OA/asset/process/baseSet/assetInModeSet/assetInModeSetProcess"
          activity="assetInModeSetActivity" url="/OA/asset/process/baseSet/assetInModeSet/assetInModeSetActivity.w"/>  
        <item label="处置方式设置" process="/OA/asset/process/baseSet/assetDealModeSet/assetDealModeSetProcess"
          activity="assetDealModeSetActivity" url="/OA/asset/process/baseSet/assetDealModeSet/assetDealModeSetActivity.w"/>  
        <item label="维修类型设置" process="/OA/asset/process/baseSet/assetRepairTypeSet/assetRepairTypeSetProcess"
          activity="assetRepairTypeSetActivity" url="/OA/asset/process/baseSet/assetRepairTypeSet/assetRepairTypeSetActivity.w"/> 
      </item>  
      <item label="资产采购"> 
        <item label="资产采购申请" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="startActivity" url="/OA/asset/process/assetBuyApply/startActivity.w"/>  
        <item label="资产采购申请" display="hide" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="applyActivity" url="/OA/asset/process/assetBuyApply/applyActivity.w"/>  
        <item label="部门领导审批" display="hide" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="deptAuditActivity" url="/OA/asset/process/assetBuyApply/deptAuditActivity.w"/>  
        <item label="主管部门审批" display="hide" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="mainDeptDirectorActivity" url="/OA/asset/process/assetBuyApply/mainDeptDirectorActivity.w"/>  
        <item label="办公室审批" display="hide" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="departManagerDirectorActivity" url="/OA/asset/process/assetBuyApply/departManagerDirectorActivity.w"/>  
        <item label="财务部门审批" display="hide" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="financeDirectorActivity" url="/OA/asset/process/assetBuyApply/financeDirectorActivity.w"/>  
        <item label="总经理审批" display="hide" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="managerDirectorActivity" url="/OA/asset/process/assetBuyApply/managerDirectorActivity.w"/>  
        <item label="资产采购通知" display="hide" process="/OA/asset/process/assetBuyApply/assetBuyApplyProcess"
          activity="noticeActivity" url="/OA/asset/process/assetBuyApply/noticeActivity.w"/>  
        <item label="资产采购申请查询" process="/OA/asset/process/assetBuyApplyQuery/assetBuyApplyQueryProcess"
          activity="startActivity" url="/OA/asset/process/assetBuyApplyQuery/assetBuyApplyQuery.w"/>  
        <item label="资产采购明细查询" process="/OA/asset/process/assetBuyApplyDetailQuery/assetBuyApplyDetailQueryProcess"
          activity="startActivity" url="/OA/asset/process/assetBuyApplyDetailQuery/assetBuyApplyDetailQuery.w"/> 
      </item>  
      <item label="资产使用"> 
        <item label="资产使用申请" process="/OA/asset/process/assetUseApply/assetUseApplyProcess"
          activity="startActivity" url="/OA/asset/process/assetUseApply/startActivity.w"/>  
        <item label="资产申请" display="hide" process="/OA/asset/process/assetUseApply/assetUseApplyProcess"
          activity="useApplyActivity" url="/OA/asset/process/assetUseApply/useApplyActivity.w"/>  
        <item label="部门领导审批" display="hide" process="/OA/asset/process/assetUseApply/assetUseApplyProcess"
          activity="deptManagerActivity" url="/OA/asset/process/assetUseApply/deptManagerActivity.w"/>  
        <item label="主管人员办理" display="hide" process="/OA/asset/process/assetUseApply/assetUseApplyProcess"
          activity="managerProcessActivity" url="/OA/asset/process/assetUseApply/managerProcessActivity.w"/>  
        <item label="资产使用通知" display="hide" process="/OA/asset/process/assetUseApply/assetUseApplyProcess"
          activity="noticeActivity" url="/OA/asset/process/assetUseApply/noticeActivity.w"/>  
        <item label="资产使用申请查询" process="/OA/asset/process/assetUseApplyQuery/assetUseApplyQueryProcess"
          activity="assetUseApplyQueryActivity" url="/OA/asset/process/assetUseApplyQuery/assetUseApplyQueryActivity.w"/> 
      </item>  
      <item label="资产维修"> 
        <item label="资产维修申请" process="/OA/asset/process/assetRepairApply/assetRepairApplyProcess"
          activity="startActivity" url="/OA/asset/process/assetRepairApply/startActivity.w"/>  
        <item label="维修申请" display="hide" process="/OA/asset/process/assetRepairApply/assetRepairApplyProcess"
          activity="repairApplyActivity" url="/OA/asset/process/assetRepairApply/repairApplyActivity.w"/>  
        <item label="主管部门审核" display="hide" process="/OA/asset/process/assetRepairApply/assetRepairApplyProcess"
          activity="mainDeptDirectorActivity" url="/OA/asset/process/assetRepairApply/mainDeptDirectorActivity.w"/>  
        <item label="部门领导审批" display="hide" process="/OA/asset/process/assetRepairApply/assetRepairApplyProcess"
          activity="deptDirectorActivity" url="/OA/asset/process/assetRepairApply/deptDirectorActivity.w"/>  
        <item label="经办人办理" display="hide" process="/OA/asset/process/assetRepairApply/assetRepairApplyProcess"
          activity="handlerDirectorActivity" url="/OA/asset/process/assetRepairApply/handlerDirectorActivity.w"/>  
        <item label="资产维修通知" display="hide" process="/OA/asset/process/assetRepairApply/assetRepairApplyProcess"
          activity="noticeActivity" url="/OA/asset/process/assetRepairApply/noticeActivity.w"/>  
        <item label="资产维修申请查询" process="/OA/asset/process/assetRepairApplyQuery/assetRepairApplyQueryProcess"
          activity="assetRepairApplyQueryActivity" url="/OA/asset/process/assetRepairApplyQuery/assetRepairApplyQueryActivity.w"/> 
      </item>  
      <item label="资产处置"> 
        <item label="资产处置申请" process="/OA/asset/process/assetDealApply/assetDealApplyProcess"
          activity="startActivity" url="/OA/asset/process/assetDealApply/startActivity.w"/>  
        <item label="处置申请" display="hide" process="/OA/asset/process/assetDealApply/assetDealApplyProcess"
          activity="dealApplyActivity" url="/OA/asset/process/assetDealApply/dealApplyActivity.w"/>  
        <item label="部门领导审批" display="hide" process="/OA/asset/process/assetDealApply/assetDealApplyProcess"
          activity="deptDirectorActivity" url="/OA/asset/process/assetDealApply/deptDirectorActivity.w"/>  
        <item label="主管部门审批" display="hide" process="/OA/asset/process/assetDealApply/assetDealApplyProcess"
          activity="mainDeptDirectorActivity" url="/OA/asset/process/assetDealApply/mainDeptDirectorActivity.w"/>  
        <item label="资产处置通知" display="hide" process="/OA/asset/process/assetDealApply/assetDealApplyProcess"
          activity="noticeActivity" url="/OA/asset/process/assetDealApply/noticeActivity.w"/>  
        <item label="资产处置申请查询" process="/OA/asset/process/assetDealApplyQuery/assetDealApplyQueryProcess"
          activity="assetDealApplyQueryActivity" url="/OA/asset/process/assetDealApplyQuery/assetDealApplyQueryActivity.w"/> 
      </item>  
      <item label="资产报废"> 
        <item label="资产报废申请" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="startActivity" url="/OA/asset/process/assetDiscardApply/startActivity.w"/>  
        <item label="报废申请" display="hide" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="discardApplyActivity" url="/OA/asset/process/assetDiscardApply/discardApplyActivity.w"/>  
        <item label="部门领导审批" display="hide" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="deptManagerActivity" url="/OA/asset/process/assetDiscardApply/deptManagerActivity.w"/>  
        <item label="主管部门审核" display="hide" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="managerProcessActivity" url="/OA/asset/process/assetDiscardApply/managerProcessActivity.w"/>  
        <item label="办公室意见" display="hide" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="officeActivity" url="/OA/asset/process/assetDiscardApply/officeActivity.w"/>  
        <item label="财务部意见" display="hide" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="financeActivity" url="/OA/asset/process/assetDiscardApply/financeActivity.w"/>  
        <item label="主管领导审批" display="hide" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="managerActivity" url="/OA/asset/process/assetDiscardApply/managerActivity.w"/>  
        <!-- sucg add   end  -->  
        <item label="资产报废通知" display="hide" process="/OA/asset/process/assetDiscardApply/assetDiscardApplyProcess"
          activity="noticeActivity" url="/OA/asset/process/assetDiscardApply/noticeActivity.w"/>  
        <item label="资产报废申请查询" process="/OA/asset/process/assetDiscardApplyQuery/assetDiscardApplyQueryProcess"
          activity="assetDiscardApplyQueryActivity" url="/OA/asset/process/assetDiscardApplyQuery/assetDiscardApplyQueryActivity.w"/> 
      </item>  
      <item label="资产入库"> 
        <item label="资产入库管理" process="/OA/asset/process/assetIn/assetInProcess"
          activity="startActivity" url="/OA/asset/process/assetIn/assetIn.w"/>  
        <item label="资产入库查询" process="/OA/asset/process/assetInQuery/assetInQueryProcess"
          activity="startActivity" url="/OA/asset/process/assetInQuery/assetInQuery.w"/>  
        <item label="资产入库明细查询" process="/OA/asset/process/assetInDetailQuery/assetInDetailQueryProcess"
          activity="startActivity" url="/OA/asset/process/assetInDetailQuery/assetInDetailQuery.w"/> 
      </item>  
      <item label="资产卡片" process="/OA/asset/process/assetCard/assetCardProcess"
        activity="assetCardActivity" url="/OA/asset/process/assetCard/assetCardActivity.w"/>  
      <item label="资产安排/归还"> 
        <item label="资产安排" process="/OA/asset/process/assetArrange/assetArrangeProcess"
          activity="assetArrangeActivity" url="/OA/asset/process/assetArrange/assetArrangeActivity.w"/>  
        <item label="资产归还" process="/OA/asset/process/assetReturn/assetReturnProcess"
          activity="assetReturnActivity" url="/OA/asset/process/assetReturn/assetReturnActivity.w"/> 
      </item>  
      <item label="资产清查"> 
        <item label="资产清查" process="/OA/asset/process/assetInventory/assetInventoryProcess"
          activity="assetInventoryActivity" url="/OA/asset/process/assetInventory/assetInventoryActivity.w"/>  
        <item label="清查记录查询" process="/OA/asset/process/assetInventoryQuery/assetInventoryQueryProcess"
          activity="assetInventoryQueryActivity" url="/OA/asset/process/assetInventoryQuery/assetInventoryQueryActivity.w"/> 
      </item>  
      <item label="资产折旧" process="/OA/asset/process/assetDepreciation/assetDepreciationProcess"
        activity="assetDepreciationActivity" url="/OA/asset/process/assetDepreciation/assetDepreciationActivity.w"/>  
      <item label="类别统计报表" process="/OA/asset/process/assetKindSummary/assetKindSummaryProcess"
        activity="assetKindSummaryActivity" url="/OA/asset/process/assetKindSummary/assetKindSummaryActivity.w"/>  
      <item label="固定资产申购统计" process="/OA/asset/process/assetSummaryReport/assetSummaryReportProcess"
        activity="mainActivity" url="/OA/asset/process/assetSummaryReport/mainActivity.w"/>  
      <item label="我的资产" process="/OA/asset/process/myAsset/myAssetProcess"
        activity="myAssetActivity" url="/OA/asset/process/myAsset/myAssetActivity.w"/>  
      <item label="资产台帐" process="/OA/asset/process/assetAccount/assetAccountProcess"
        activity="assetAccountActivity" url="/OA/asset/process/assetAccount/assetAccountActivity.w"/> 
    </item>  
     <item label="会议室管理"> 
      <item label="基础数据"> 
        <item label="会议室类型" process="/OA/meeting/process/boardroomType/boardroomTypeProcess"
          activity="startActivity" url="/OA/meeting/process/boardroomType/boardroomType.w"/> 
      </item>  
      <item label="会议室信息管理" process="/OA/meeting/process/boardroomSet/boardroomSetProcess"
        activity="startActivity" url="/OA/meeting/process/boardroomSet/boardroomSet.w"/>  
      <item label="会议室管理" process="/OA/meeting/process/boardroomArrange/boardroomArrangeProcess"
        activity="boardroomArrange" url="/OA/meeting/process/boardroomArrange/boardroomArrange.w"/>  
      <item label="会议室使用申请" process="/OA/meeting/process/boardroomUseApply/boardroomUseApplyProcess"
        activity="useApply" url="/OA/meeting/process/boardroomUseApply/useApply.w"/>  
      <item label="会议室使用安排" display="hide" process="/OA/meeting/process/boardroomUseApply/boardroomUseApplyProcess"
        activity="useArrangeActivity" url="/OA/meeting/process/boardroomUseApply/useArrangeActivity.w"/>  
      <item label="会议室使用审批" display="hide" process="/OA/meeting/process/boardroomUseApply/boardroomUseApplyProcess"
        activity="useApproveActivity" url="/OA/meeting/process/boardroomUseApply/useApproveActivity.w"/>  
      <item label="会议室使用申请" display="hide" process="/OA/meeting/process/boardroomUseApply/boardroomUseApplyProcess"
        activity="useApplyActivity" url="/OA/meeting/process/boardroomUseApply/useApplyActivity.w"/>  
      <item label="会议室使用申请查询" process="/OA/meeting/process/boardroomUseApplyQuery/boardroomUseApplyQueryProcess"
        activity="startActivity" url="/OA/meeting/process/boardroomUseApplyQuery/boardroomUseApplyQuery.w"/>  
      <item label="会议室安排查询" process="/OA/meeting/process/boardroomArrangeQuery/boardroomArrangeQueryProcess"
        activity="startActivity" url="/OA/meeting/process/boardroomArrangeQuery/boardroomArrangeQuery.w"/>  
      <item label="会议纪要" process="/OA/meeting/process/boardroomSummary/boardroomSummaryProcess"
        activity="startActivity" url="/OA/meeting/process/boardroomSummary/boardroomSummary.w"/> 
    </item>
    <item label="工作计划"> 
      <item label="我的工作计划编制" process="/OA/workPlan/process/personalWorkPlan/personalWorkPlanProcess"
        activity="mainActivity" url="/OA/workPlan/process/personalWorkPlan/mainActivity.w"/>  
      <item label="处工作计划编制" process="/OA/workPlan/process/officesWorkPlan/officesWorkPlanProcess"
        activity="mainActivity" url="/OA/workPlan/process/officesWorkPlan/mainActivity.w"/>  
      <item label="处工作计划通知" display="hide" process="/OA/workPlan/process/officesWorkPlan/officesWorkPlanProcess"
        activity="noticeActivity" url="/OA/workPlan/process/officesWorkPlan/noticeActivity.w"/>  
      <item label="参谋拟制" display="hide" process="/OA/workPlan/process/officesWorkPlan/officesWorkPlanProcess"
        activity="bizActivity1" url="/OA/workPlan/process/officesWorkPlan/bizActivity1.w"/>  
      <item label="处长审批" display="hide" process="/OA/workPlan/process/officesWorkPlan/officesWorkPlanProcess"
        activity="bizActivity2" url="/OA/workPlan/process/officesWorkPlan/bizActivity2.w"/>  
      <item label="部工作计划编制" process="/OA/workPlan/process/deptWorkPlan/deptWorkPlanProcess"
        activity="mainActivity" url="/OA/workPlan/process/deptWorkPlan/mainActivity.w"/>  
      <item label="部工作计划通知" display="hide" process="/OA/workPlan/process/deptWorkPlan/deptWorkPlanProcess"
        activity="noticeActivity" url="/OA/workPlan/process/deptWorkPlan/noticeActivity.w"/>  
      <item label="参谋拟制" display="hide" process="/OA/workPlan/process/deptWorkPlan/deptWorkPlanProcess"
        activity="deptEdActivity" url="/OA/workPlan/process/deptWorkPlan/deptEdActivity.w"/>  
      <item label="部长审批" display="hide" process="/OA/workPlan/process/deptWorkPlan/deptWorkPlanProcess"
        activity="manageActivity" url="/OA/workPlan/process/deptWorkPlan/manageActivity.w"/>  
      <item label="工作计划查询" process="/OA/workPlan/process/workPlanQuery/workPlanQueryProcess"
        activity="mainActivity" url="/OA/workPlan/process/workPlanQuery/mainActivity.w"/> 
    </item>  
  </item> 
</root>

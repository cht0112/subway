<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <relation name="fKindID" data-type="OA_AS_Kind" single-valued="true"> 
    <label language="zh_CN">资产类别ID</label> 
  </relation>  
  <relation name="fKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">资产类别</label> 
  </relation>  
   <relation name="lINKCODE" data-type="String" single-valued="true"> 
    <label language="zh_CN">联动编码</label> 
  </relation> 
  <relation name="fSpecType" data-type="String" single-valued="true"> 
    <label language="zh_CN">规格型号</label> 
  </relation>  
  <relation name="fUnitID" data-type="OA_AS_Unit" single-valued="true"> 
    <label language="zh_CN">单位ID</label> 
  </relation>  
  <relation name="fUnit" data-type="String" single-valued="true"> 
    <label language="zh_CN">单位</label> 
  </relation>  
  <relation name="fNum" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">数量</label> 
  </relation>  
  <relation name="fInNum" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">入库数量</label> 
  </relation>  
  <relation name="fBuyNum" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">采购数量</label> 
  </relation>  
  <relation name="fAssetInID" data-type="String" single-valued="true"> 
    <label language="zh_CN">入库ID</label> 
  </relation>  
  <relation name="fAssetInNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">入库单号</label> 
  </relation>  
  <relation name="fApplyReason" data-type="String" single-valued="true"> 
    <label language="zh_CN">购置原因</label> 
  </relation>  
  <relation name="fOriginValue" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">资产原值</label> 
  </relation>  
  <relation name="fRemainValue" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">资产净残值</label> 
  </relation>  
  <relation name="fServiceYear" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">耐用年限</label> 
  </relation>  
  <relation name="fDutyOgnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任机构ID</label> 
  </relation>  
  <relation name="fDutyOgnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任机构</label> 
  </relation>  
  <relation name="fDutyDeptID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任部门ID</label> 
  </relation>  
  <relation name="fDutyDeptName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任部门</label> 
  </relation>  
  <relation name="fDutyPosID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任岗位ID</label> 
  </relation>  
  <relation name="fDutyPosName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任岗位</label> 
  </relation>  
  <relation name="fDutyPsnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人ID</label> 
  </relation>  
  <relation name="fDutyPsnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人</label> 
  </relation>  
  <relation name="fDutyPsnFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人FID</label> 
  </relation>  
  <relation name="fDutyPsnFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人FName</label> 
  </relation>  
  <relation name="fBgDepreYear" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">开始折旧年</label> 
  </relation>  
  <relation name="fBgDepreMonth" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">开始折旧月</label> 
  </relation>  
  <relation name="fAddDepreValue" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">累计折旧</label> 
  </relation>  
  <relation name="fFactory" data-type="String" single-valued="true"> 
    <label language="zh_CN">制造商</label> 
  </relation>  
  <relation name="fFactoryDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">出厂日期</label> 
  </relation>  
  <relation name="fSupplier" data-type="String" single-valued="true"> 
    <label language="zh_CN">供应商</label> 
  </relation>  
  <relation name="fSource" data-type="String" single-valued="true"> 
    <label language="zh_CN">资产来源</label> 
  </relation>  
  <relation name="fSourceName" data-type="String" single-valued="true"> 
    <label language="zh_CN">资产来源</label> 
  </relation>  
  <relation name="fDetailInfo" data-type="String" single-valued="true"> 
    <label language="zh_CN">详细配置</label> 
  </relation>  
  <relation name="fModeID" data-type="String" single-valued="true"> 
    <label language="zh_CN">入库方式ID</label> 
  </relation>  
  <relation name="fMode" data-type="String" single-valued="true"> 
    <label language="zh_CN">入库方式</label> 
  </relation>  
  <relation name="fBuyApplyID" data-type="String" single-valued="true"> 
    <label language="zh_CN">采购单ID</label> 
  </relation>  
  <relation name="fBuyDetailID" data-type="String" single-valued="true"> 
    <label language="zh_CN">采购明细ID</label> 
  </relation>  
  <relation name="fBuyApplyNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">采购单号</label> 
  </relation>  
  <relation name="fStatus" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">状态</label> 
  </relation>  
  <relation name="fStatusName" data-type="String" single-valued="true"> 
    <label language="zh_CN">状态名</label> 
  </relation>  
  <relation name="fIsCheck" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否验收</label> 
  </relation>  
  <relation name="fIsCheckName" data-type="String" single-valued="true"> 
    <label language="zh_CN">是否验收</label> 
  </relation>  
  <relation name="fCheckID" data-type="String" single-valued="true"> 
    <label language="zh_CN">验收单ID</label> 
  </relation>  
  <relation name="fCheckNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">验收单号</label> 
  </relation>  
  <relation name="fIsIn" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否入库</label> 
  </relation>  
  <relation name="fIsInName" data-type="String" single-valued="true"> 
    <label language="zh_CN">是否入库</label> 
  </relation>  
  <relation name="fAssetID" data-type="String" single-valued="true"> 
    <label language="zh_CN">资产ID</label> 
  </relation>  
  <relation name="fDemandDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">需求日期</label> 
  </relation>  
  <relation name="fReturnDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">预计归还日期</label> 
  </relation>  
  <relation name="fRequire" data-type="String" single-valued="true"> 
    <label language="zh_CN">对资产要求</label> 
  </relation>  
  <relation name="fProcess" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">处理方式</label> 
  </relation>  
  <relation name="fProcessName" data-type="String" single-valued="true"> 
    <label language="zh_CN">处理方式</label> 
  </relation>  
  <relation name="fCheckDeptIDs" data-type="String" single-valued="true"> 
    <label language="zh_CN">参与验收部门IDs</label> 
  </relation>  
  <relation name="fCheckDepts" data-type="String" single-valued="true"> 
    <label language="zh_CN">参与验收部门</label> 
  </relation>  
  <relation name="fCheckPsnIDs" data-type="String" single-valued="true"> 
    <label language="zh_CN">参与验收人员IDs</label> 
  </relation>  
  <relation name="fCheckPsns" data-type="String" single-valued="true"> 
    <label language="zh_CN">参与验收人员</label> 
  </relation>  
  <relation name="fCheckItem" data-type="String" single-valued="true"> 
    <label language="zh_CN">验收项</label> 
  </relation>  
  <relation name="fCheckPsnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">验收人ID</label> 
  </relation>  
  <relation name="fCheckPsn" data-type="String" single-valued="true"> 
    <label language="zh_CN">验收人</label> 
  </relation>  
  <relation name="fChecked" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">选中</label> 
  </relation>  
  <relation name="fOptKind" data-type="String" single-valued="true"> 
    <label language="zh_CN">操作类型</label> 
  </relation>  
  <relation name="fUsedYear" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">已用年限</label> 
  </relation>  
  <relation name="fRepairTypeID" data-type="String" single-valued="true"> 
    <label language="zh_CN">维修类型ID</label> 
  </relation>  
  <relation name="fRepairType" data-type="String" single-valued="true"> 
    <label language="zh_CN">维修类型</label> 
  </relation>  
  <relation name="fRepairDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">送修日期</label> 
  </relation>  
  <relation name="fRepairAmount" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">维修金额</label> 
  </relation>  
  <relation name="fItem" data-type="String" single-valued="true"> 
    <label language="zh_CN">维修项目</label> 
  </relation>  
  <relation name="fEvaluateValue" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">估计残值</label> 
  </relation>  
  <relation name="fReason" data-type="String" single-valued="true"> 
    <label language="zh_CN">报废原因</label> 
  </relation>  
  <relation name="fDealTypeID" data-type="String" single-valued="true"> 
    <label language="zh_CN">处置类别ID</label> 
  </relation>  
  <relation name="fDealType" data-type="String" single-valued="true"> 
    <label language="zh_CN">处置类别</label> 
  </relation>  
  <relation name="fArrangeDate" data-type="Date" single-valued="true"> 
    <label language="zh_CN">安排日期</label> 
  </relation>  
  <relation name="fDutyOgnFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任机构FID</label> 
  </relation>  
  <relation name="fUseApplyNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">资产使用申请单据号</label> 
  </relation>  
  <relation name="fBuyID" data-type="String" single-valued="true"> 
    <label language="zh_CN">采购单ID</label> 
  </relation>  
  <relation name="fInventoryNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">清查单号</label> 
  </relation>  
  <relation name="fInventoryID" data-type="String" single-valued="true"> 
    <label language="zh_CN">清查ID</label> 
  </relation>  
  <relation name="fBuyNO" data-type="String" single-valued="true"> 
    <label language="zh_CN">采购单号</label> 
  </relation>  
  <relation name="fTotalAmount" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">总金额</label> 
  </relation>  
  <relation name="fBuyRemark" data-type="String" single-valued="true"> 
    <label language="zh_CN">请购申请备注</label> 
  </relation>  
  <relation name="fMainID" data-type="String" single-valued="true"> 
    <label language="zh_CN">采购申请表ID</label> 
  </relation>  
  <relation name="fArrangePsnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排人</label> 
  </relation>  
  <relation name="fArrangePsnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排人名称</label> 
  </relation>  
  <relation name="fAssetCode" data-type="String" single-valued="true"> 
    <label language="zh_CN">资产编号</label> 
  </relation>  
  <relation name="fPercent" data-type="String" single-valued="true"> 
    <label language="zh_CN">百分率</label> 
  </relation>  
  <relation name="fYearDepre" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">本年折旧</label> 
  </relation>  
  <relation name="fMonthDepre" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">本月折旧</label> 
  </relation>  
  <relation name="fEquity" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">资产净值</label> 
  </relation>  
  <relation name="fUseMonth" data-type="Decimal" single-valued="true"> 
    <label language="zh_CN">使用月数</label> 
  </relation>  
  <relation name="fDepreYear" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">折旧年</label> 
  </relation>  
  <relation name="fDepreMonth" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">折旧月</label> 
  </relation>  
  <concept name="OA_AS_Kind" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产类别</label>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fDescription" size="512"/>  
    <has-relation relation="fSequence" data-type="String" size="10"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'" size="36"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'" size="64"/>  
    <has-relation relation="fParentCode" size="64"/>  
    <has-relation relation="fLevel"/>  
    <has-relation relation="fURL" size="512"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/> 
    <has-relation relation="lINKCODE" size="64"/> 
  </concept>  
  <concept name="OA_AS_Unit" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产单位</label>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fDescription" size="512"/>  
    <has-relation relation="fSequence" data-type="String" size="10"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'" size="36"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'" size="64"/>  
    <has-relation relation="fParentCode" size="64"/>  
    <has-relation relation="fLevel"/>  
    <has-relation relation="fURL" size="512"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/> 
  </concept>  
  <concept name="OA_AS_InMode" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">入库方式</label>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fDescription" size="512"/>  
    <has-relation relation="fSequence" data-type="String" size="10"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'" size="36"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'" size="64"/>  
    <has-relation relation="fParentCode" size="64"/>  
    <has-relation relation="fLevel"/>  
    <has-relation relation="fURL" size="512"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/> 
  </concept>  
  <concept name="OA_AS_RepairType" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产维修类型</label>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fDescription" size="512"/>  
    <has-relation relation="fSequence" data-type="String" size="10"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'" size="36"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'" size="64"/>  
    <has-relation relation="fParentCode" size="64"/>  
    <has-relation relation="fLevel"/>  
    <has-relation relation="fURL" size="512"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/> 
  </concept>  
  <concept name="OA_AS_DealMode" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产处置类型</label>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fDescription" size="512"/>  
    <has-relation relation="fSequence" data-type="String" size="10"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'" size="36"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'" size="64"/>  
    <has-relation relation="fParentCode" size="64"/>  
    <has-relation relation="fLevel"/>  
    <has-relation relation="fURL" size="512"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/> 
  </concept>  
  <concept name="OA_AS_BuyApplyM" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产采购申请</label>  
    <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s','CGSQ',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>  
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fApplyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fApplyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fApplyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fApplyDate" data-type="Date" default-value-expr="currentDate()"/>  
    <has-relation relation="fApplyReason" size="128"/>  
    <has-relation relation="fAmount" default-value-expr="0.0" data-type="Decimal"> 
      <label language="zh_CN">总金额</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fBizState" default-value-expr="'bsEditing'" size="36"/>  
    <has-relation relation="fBizStateName" default-value-expr="'编辑中'" size="36"><label language="zh_CN">状态</label>
</has-relation>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fState" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">入库状态</label> 
    </has-relation>  
    <has-relation relation="fStateName" default-value-expr="'未完成'" size="36"> 
      <label language="zh_CN">入库状态</label> 
    </has-relation>  
    <has-relation relation="fUseApplyNO" size="64"/>  
    <has-relation relation="fCurrentActivities" size="128"/>  
    <has-relation relation="fCurrentExecutors" size="128"/> 
  <has-relation relation="fExtendStr1" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
</concept>  
  <concept name="OA_AS_BuyApplyD" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">采购明细</label>  
    <has-relation relation="fMasterID" data-type="OA_AS_BuyApplyM" size="36"/>  
    <has-relation relation="fNO" size="64"> 
      <label language="zh_CN">采购单号</label> 
    </has-relation>  
    <has-relation relation="fKindID" data-type="String" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fUnitID" data-type="String" size="36"/>  
    <has-relation relation="fUnit" size="64"/>  
    <has-relation relation="fInNum" default-value-expr="0"/>  
    <has-relation relation="fBuyNum"/>  
    <has-relation relation="fPrice" data-type="Decimal"/>  
    <has-relation relation="fAmount" data-type="Decimal"> 
      <label language="zh_CN">金额</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fName" size="64"> 
      <label language="zh_CN">资产名称</label> 
    </has-relation> 
  </concept>  
  <concept name="OA_AS_BuyExecute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_AS_BuyApplyM" size="36"/>  
    <has-relation relation="fTaskID" size="36"/>  
    <has-relation relation="fActivityFName" size="512"/>  
    <has-relation relation="fActivityLabel" size="64"/>  
    <has-relation relation="fOpinion" data-type="String"/>  
    <has-relation relation="fVerdict" size="36"/>  
    <has-relation relation="fState" size="36"/>  
    <has-relation relation="fStateName" size="64"/>  
    <has-relation relation="fCreateOgnID" size="36"/>  
    <has-relation relation="fCreateOgnName" size="64"/>  
    <has-relation relation="fCreateDeptID" size="36"/>  
    <has-relation relation="fCreateDeptName" size="64"/>  
    <has-relation relation="fCreatePosID" size="36"/>  
    <has-relation relation="fCreatePosName" size="64"/>  
    <has-relation relation="fCreatePsnID" size="36"/>  
    <has-relation relation="fCreatePsnName" size="64"/>  
    <has-relation relation="fCreatePsnFID" size="512"/>  
    <has-relation relation="fCreatePsnFName" size="1024"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产采购申请(处理表)</label> 
  </concept>  
  <concept name="OA_AS_Card" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产卡片</label>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fCode" size="64"><label language="zh_CN">资产编码</label>
</has-relation>  
    <has-relation relation="fName" size="64"><label language="zh_CN">资产名称</label>
</has-relation>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fUnitID" size="36"/>  
    <has-relation relation="fUnit" size="64"/>  
    <has-relation relation="fStatus" default-value-expr="'0'" data-type="String"/>  
    <has-relation relation="fStatusName" default-value-expr="'闲置'" size="36"><label language="zh_CN">状态</label>
</has-relation>  
    <has-relation relation="fOriginValue" data-type="Decimal"/>  
    <has-relation relation="fRemainValue" data-type="Decimal"/>  
    <has-relation relation="fServiceYear" data-type="Decimal"/>  
    <has-relation relation="fDutyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fDutyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fDutyOgnFID" default-value-expr="currentOgnFID()" size="512"/>  
    <has-relation relation="fDutyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fDutyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fDutyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fDutyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fDutyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fDutyPsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fDutyPsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fDutyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fBgDepreYear"/>  
    <has-relation relation="fBgDepreMonth"/>  
    <has-relation relation="fAddDepreValue"/>  
    <has-relation relation="fFactory" size="64"/>  
    <has-relation relation="fFactoryDate"/>  
    <has-relation relation="fSupplier" size="64"/>  
    <has-relation relation="fSource" default-value-expr="'0'" size="36"/>  
    <has-relation relation="fSourceName" default-value-expr="'外购'" size="36"> 
      <label language="zh_CN">资产来源</label> 
    </has-relation>  
    <has-relation relation="fDetailInfo" size="512"> 
      <label language="zh_CN">详细配置</label> 
    </has-relation>  
    <has-relation relation="fCheckID" size="36"/>  
    <has-relation relation="fCheckNO" size="64"/>  
    <has-relation relation="fBuyApplyID" size="36"/>  
    <has-relation relation="fBuyApplyNO" size="64"/>  
    <has-relation relation="fAssetInID" size="36"/>  
    <has-relation relation="fAssetInNO" size="64"/>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"> 
      <label language="zh_CN">创建时间</label> 
    </has-relation>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fArrangeDate"/>  
    <has-relation relation="fChecked" default-value-expr="1"/> 
  <has-relation relation="fAssetConfirm" data-type="String" default-value-expr="'未确认'"><label language="zh_CN">资产确认</label>
</has-relation>
<has-relation relation="fExtendStr1" size="64"><label language="zh_CN">Service Tag</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">Express Service Code</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">存放位置</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">续保</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">开始时间</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">到期时间</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
</concept>  
  <concept name="OA_AS_InM" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产入库单</label>  
    <has-relation relation="fNO" unique="true" default-value-expr="nextSeqString(format('%s%s','ZCRK',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="36"/>  
    <has-relation relation="fDutyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fDutyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fDutyOgnFID" default-value-expr="currentOgnFID()" size="512"/>  
    <has-relation relation="fDutyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fDutyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fDutyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fDutyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fDutyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fDutyPsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fDutyPsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fDutyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fDate" data-type="Date" default-value-expr="currentDate()"> 
      <label language="zh_CN">入库日期</label> 
    </has-relation>  
    <has-relation relation="fModeID" size="36"/>  
    <has-relation relation="fMode" size="64"/>  
    <has-relation relation="fAmount" data-type="Decimal" default-value-expr="0.0"> 
      <label language="zh_CN">总金额</label> 
    </has-relation>  
    <has-relation relation="fState" data-type="Integer" default-value-expr="0"> 
      <label language="zh_CN">入库状态</label> 
    </has-relation>  
    <has-relation relation="fStateName" default-value-expr="'未完成'" size="36"> 
      <label language="zh_CN">入库状态</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/> 
    <has-relation relation="fExtendStr1" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <concept name="OA_AS_InD" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">入库单明细</label>  
    <has-relation relation="fMasterID" size="36"/>  
    <has-relation relation="fCode" size="64"> 
      <label language="zh_CN">资产编号</label> 
    </has-relation>  
    <has-relation relation="fKindID" data-type="String" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fName" size="64"> 
      <label language="zh_CN">资产名称</label> 
    </has-relation>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fUnitID" data-type="String" size="36"/>  
    <has-relation relation="fUnit" size="64"/>  
    <has-relation relation="fBuyApplyID" size="36"/>  
    <has-relation relation="fBuyApplyNO" size="64"><label language="zh_CN">请购单号</label>
</has-relation>  
    <has-relation relation="fBuyDetailID" size="36"/>  
    <has-relation relation="fAmount" default-value-expr="0.0" data-type="Decimal"> 
      <label language="zh_CN">金额</label> 
    </has-relation>  
    <has-relation relation="fIsCheck" data-type="Integer" default-value-expr="0"/>  
    <has-relation relation="fIsCheckName" default-value-expr="'未验收'" size="36"/>  
    <has-relation relation="fCheckID" size="36"/>  
    <has-relation relation="fCheckNO" size="64"/>  
    <has-relation relation="fIsIn" default-value-expr="0"/>  
    <has-relation relation="fIsInName" default-value-expr="'未入库'" size="36"/>  
    <has-relation relation="fDate" data-type="Date"> 
      <label language="zh_CN">入库日期</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fChecked" default-value-expr="1"/> 
  <has-relation relation="fServicTag" data-type="String" size="255"><label language="zh_CN">ServicTag</label>
</has-relation>
<has-relation relation="fESCode" data-type="String" size="255"><label language="zh_CN">ExpressServiceCode</label>
</has-relation>
<has-relation relation="fSHKSSJ" data-type="Date"><label language="zh_CN">服务开始时间</label>
</has-relation>
<has-relation relation="fSHJSSJ" data-type="Date"><label language="zh_CN">服务结束时间</label>
</has-relation>
</concept>  
  <concept name="OA_AS_Return" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产归还</label>  
    <has-relation relation="fAssetID" size="36"/>  
    <has-relation relation="fCode" size="64"> 
      <label language="zh_CN">资产编号</label> 
    </has-relation>  
    <has-relation relation="fKind" size="36"/>  
    <has-relation relation="fName" size="64"> 
      <label language="zh_CN">资产名称</label> 
    </has-relation>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fUnit" size="36"> 
      <label language="zh_CN">计量单位</label> 
    </has-relation>  
    <has-relation relation="fDutyOgnID" size="36"/>  
    <has-relation relation="fDutyOgnName" size="64"/>  
    <has-relation relation="fDutyDeptID" size="36"/>  
    <has-relation relation="fDutyDeptName" size="64"/>  
    <has-relation relation="fDutyPosID" size="36"/>  
    <has-relation relation="fDutyPosName" size="64"/>  
    <has-relation relation="fDutyPsnID" size="36"/>  
    <has-relation relation="fDutyPsnName" size="64"/>  
    <has-relation relation="fDutyPsnFID" size="512"/>  
    <has-relation relation="fDutyPsnFName" size="1024"/>  
    <has-relation relation="fTime" data-type="Date"> 
      <label language="zh_CN">归还时间</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="1024"/>  
    <has-relation relation="fCreateOgnID" size="36"/>  
    <has-relation relation="fCreateOgnName" size="64"/>  
    <has-relation relation="fCreateDeptID" size="36"/>  
    <has-relation relation="fCreateDeptName" size="64"/>  
    <has-relation relation="fCreatePosID" size="36"/>  
    <has-relation relation="fCreatePosName" size="64"/>  
    <has-relation relation="fCreatePsnID" size="36"/>  
    <has-relation relation="fCreatePsnName" size="64"/>  
    <has-relation relation="fCreatePsnFID" size="512"/>  
    <has-relation relation="fCreatePsnFName" size="1024"/>  
    <has-relation relation="fCreateTime"/>
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <concept name="OA_AS_UseApplyM" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产使用申请</label>  
    <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s','SYSQ',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>  
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fApplyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fApplyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fApplyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fApplyDate" data-type="Date" default-value-expr="currentDate()"/>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fName" size="64"> 
      <label language="zh_CN">资产名称</label> 
    </has-relation>  
    <has-relation relation="fDemandDate" default-value-expr="currentDate()"/>  
    <has-relation relation="fReturnDate" default-value-expr="currentDate()"/>  
    <has-relation relation="fRequire" size="255"/>  
    <has-relation relation="fApplyReason" size="128"> 
      <label language="zh_CN">申请原因</label> 
    </has-relation>  
    <has-relation relation="fProcess" default-value-expr="0"> 
      <label language="zh_CN">处理方式</label> 
    </has-relation>  
    <has-relation relation="fProcessName" default-value-expr="'安排'" size="36"/>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fBizState" default-value-expr="'bsEditing'" size="36"/>  
    <has-relation relation="fBizStateName" default-value-expr="'编辑中'" size="36"><label language="zh_CN">状态</label>
</has-relation>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fCurrentActivities" size="128"/>  
    <has-relation relation="fCurrentExecutors" size="128"/> 
  <has-relation relation="fExtendStr1" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
</concept>  
  <concept name="OA_AS_UseArrange" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产使用安排</label>  
    <has-relation relation="fMasterID" data-type="OA_AS_UseApplyM" size="36"/>  
    <has-relation relation="fAssetID" data-type="OA_AS_Card" size="36"/>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fCode" size="64"> 
      <label language="zh_CN">资产编号</label> 
    </has-relation>  
    <has-relation relation="fName" size="64"> 
      <label language="zh_CN">资产名称</label> 
    </has-relation>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fUnitID" size="36"/>  
    <has-relation relation="fUnit" size="64"/>  
    <has-relation relation="fArrangeDate" default-value-expr="currentDate()"/>  
    <has-relation relation="fArrangePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fArrangePsnName" default-value-expr="operatorName()" size="64"/>
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <concept name="OA_AS_UseExecute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_AS_UseApplyM" size="36"/>  
    <has-relation relation="fTaskID" size="36"/>  
    <has-relation relation="fActivityFName" size="512"/>  
    <has-relation relation="fActivityLabel" size="64"/>  
    <has-relation relation="fOpinion" data-type="String"/>  
    <has-relation relation="fVerdict" size="36"/>  
    <has-relation relation="fState" size="36"/>  
    <has-relation relation="fStateName" size="64"/>  
    <has-relation relation="fCreateOgnID" size="36"/>  
    <has-relation relation="fCreateOgnName" size="64"/>  
    <has-relation relation="fCreateDeptID" size="36"/>  
    <has-relation relation="fCreateDeptName" size="64"/>  
    <has-relation relation="fCreatePosID" size="36"/>  
    <has-relation relation="fCreatePosName" size="64"/>  
    <has-relation relation="fCreatePsnID" size="36"/>  
    <has-relation relation="fCreatePsnName" size="64"/>  
    <has-relation relation="fCreatePsnFID" size="512"/>  
    <has-relation relation="fCreatePsnFName" size="1024"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产使用申请(处理表)</label> 
  </concept>  
  <concept name="OA_AS_CheckM" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产验收单</label>  
    <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s','ZCYS',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>  
    <has-relation relation="fDate" default-value-expr="currentDate()" data-type="Date"/>  
    <has-relation relation="fRemark" data-type="String"/>  
    <has-relation relation="fCheckDeptIDs" size="512"/>  
    <has-relation relation="fCheckDepts" size="512"/>  
    <has-relation relation="fCheckPsnIDs" size="512"/>  
    <has-relation relation="fCheckPsns" size="512"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/> 
    <has-relation relation="fExtendStr1" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <concept name="OA_AS_CheckD" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产验收单明细</label>  
    <has-relation relation="fMasterID" data-type="OA_AS_CheckM" size="36"/>  
    <has-relation relation="fCheckItem" size="36"/>  
    <has-relation relation="fDescription" size="255"> 
      <label language="zh_CN">验收情况说明</label> 
    </has-relation>  
    <has-relation relation="fCheckPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCheckPsn" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fRemark" data-type="String" size="255"/> 
  </concept>  
  <concept name="OA_AS_RepairApply" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产维修申请</label>  
    <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s','WXSQ',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>  
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fApplyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fApplyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fApplyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fApplyDate" data-type="Date" default-value-expr="currentDate()"/>  
    <has-relation relation="fAssetID" size="36"/>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fServiceYear"/>  
    <has-relation relation="fUsedYear"/>  
    <has-relation relation="fRepairTypeID" size="36"/>  
    <has-relation relation="fRepairType" size="64"/>  
    <has-relation relation="fRemainValue"/>  
    <has-relation relation="fDescription" data-type="String"/>  
    <has-relation relation="fRemark" data-type="String"/>  
    <has-relation relation="fRepairDate"/>  
    <has-relation relation="fReturnDate"/>  
    <has-relation relation="fRepairAmount" default-value-expr="0.0"/>  
    <has-relation relation="fBizState" default-value-expr="'bsEditing'" size="36"/>  
    <has-relation relation="fBizStateName" default-value-expr="'编辑中'" size="64"><label language="zh_CN">状态</label>
</has-relation>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fCurrentActivities" size="128"/>  
    <has-relation relation="fCurrentExecutors" size="128"/> 
    <has-relation relation="fExtendStr1" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <concept name="OA_AS_RepairItem" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">维修项</label>  
    <has-relation relation="fMasterID" data-type="OA_AS_RepairApply" size="36"/>  
    <has-relation relation="fItem" size="36"/>  
    <has-relation relation="fDescription" size="128"/>  
    <has-relation relation="fAmount" default-value-expr="0.0" data-type="Decimal"> 
      <label language="zh_CN">金额</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="255"/>
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <concept name="OA_AS_FittingInfo" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">配件信息</label>  
    <has-relation relation="fMasterID" data-type="OA_AS_RepairApply" size="36"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fUnit" size="64"/>  
    <has-relation relation="fNum"/>  
    <has-relation relation="fPrice" data-type="Decimal"/>  
    <has-relation relation="fAmount" default-value-expr="0.0" data-type="Decimal"> 
      <label language="zh_CN">金额</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fUnitID" data-type="OA_AS_Unit" size="36"/> 
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept>  
  <concept name="OA_AS_RepairExecute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_AS_RepairApply" size="36"/>  
    <has-relation relation="fTaskID" size="36"/>  
    <has-relation relation="fActivityFName" size="512"/>  
    <has-relation relation="fActivityLabel" size="64"/>  
    <has-relation relation="fOpinion" data-type="String"/>  
    <has-relation relation="fVerdict" size="36"/>  
    <has-relation relation="fState" size="36"/>  
    <has-relation relation="fStateName" size="64"/>  
    <has-relation relation="fCreateOgnID" size="36"/>  
    <has-relation relation="fCreateOgnName" size="64"/>  
    <has-relation relation="fCreateDeptID" size="36"/>  
    <has-relation relation="fCreateDeptName" size="64"/>  
    <has-relation relation="fCreatePosID" size="36"/>  
    <has-relation relation="fCreatePosName" size="64"/>  
    <has-relation relation="fCreatePsnID" size="36"/>  
    <has-relation relation="fCreatePsnName" size="64"/>  
    <has-relation relation="fCreatePsnFID" size="512"/>  
    <has-relation relation="fCreatePsnFName" size="1024"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产维修申请(处理表)</label> 
  </concept>  
  <concept name="OA_AS_DiscardApply" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产报废</label>  
    <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s','BFSQ',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>  
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fApplyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fApplyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fApplyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fApplyDate" data-type="Date" default-value-expr="currentDate()"/>  
    <has-relation relation="fAssetID" data-type="OA_AS_Card" size="36"/>  
    <has-relation relation="fCode" size="64"> 
      <label language="zh_CN">资产编号</label> 
    </has-relation>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fName" size="64"> 
      <label language="zh_CN">资产名称</label> 
    </has-relation>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fServiceYear"/>  
    <has-relation relation="fUsedYear"/>  
    <has-relation relation="fEvaluateValue"/>  
    <has-relation relation="fReason" size="128"/>  
    <has-relation relation="fRemark" data-type="String" size="255"/>  
    <has-relation relation="fBizState" default-value-expr="'bsEditing'" size="36"> 
      <label language="zh_CN">业务状态编码</label> 
    </has-relation>  
    <has-relation relation="fBizStateName" default-value-expr="'编辑中'" size="36"> 
      <label language="zh_CN">状态</label> 
    </has-relation>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fCurrentActivities" size="128"/>  
    <has-relation relation="fCurrentExecutors" size="128"/>
    <has-relation relation="fExtendStr1" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <concept name="OA_AS_DiscardExecute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_AS_DiscardApply" size="36"/>  
    <has-relation relation="fTaskID" size="36"/>  
    <has-relation relation="fActivityFName" size="512"/>  
    <has-relation relation="fActivityLabel" size="64"/>  
    <has-relation relation="fOpinion" data-type="String"/>  
    <has-relation relation="fVerdict" size="36"/>  
    <has-relation relation="fState" size="36"/>  
    <has-relation relation="fStateName" size="64"/>  
    <has-relation relation="fCreateOgnID" size="36"/>  
    <has-relation relation="fCreateOgnName" size="64"/>  
    <has-relation relation="fCreateDeptID" size="36"/>  
    <has-relation relation="fCreateDeptName" size="64"/>  
    <has-relation relation="fCreatePosID" size="36"/>  
    <has-relation relation="fCreatePosName" size="64"/>  
    <has-relation relation="fCreatePsnID" size="36"/>  
    <has-relation relation="fCreatePsnName" size="64"/>  
    <has-relation relation="fCreatePsnFID" size="512"/>  
    <has-relation relation="fCreatePsnFName" size="1024"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产报废申请(处理表)</label> 
  </concept>  
  <concept name="OA_AS_DealApply" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产处置</label>  
    <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s','CZSQ',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>  
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOrgName()" size="64"/>  
    <has-relation relation="fApplyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fApplyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fApplyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fApplyDate" data-type="Date" default-value-expr="currentDate()"/>  
    <has-relation relation="fAssetID" size="36"/>  
    <has-relation relation="fCode" size="64"> 
      <label language="zh_CN">资产编号</label> 
    </has-relation>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fServiceYear"/>  
    <has-relation relation="fUsedYear"/>  
    <has-relation relation="fEvaluateValue"/>  
    <has-relation relation="fDealTypeID" data-type="OA_AS_DealMode" size="36"/>  
    <has-relation relation="fDealType" size="64"><label language="zh_CN">处置类型</label>
</has-relation>  
    <has-relation relation="fReason"> 
      <label language="zh_CN">申请原因</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String"/>  
    <has-relation relation="fBizState" default-value-expr="'bsEditing'" size="36"/>  
    <has-relation relation="fBizStateName" default-value-expr="'编辑中'" size="36"><label language="zh_CN">状态</label>
</has-relation>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fCurrentActivities" size="128"/>  
    <has-relation relation="fCurrentExecutors" size="128"/>
    <has-relation relation="fExtendStr1" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <concept name="OA_AS_DealExecute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_AS_DealApply" size="36"/>  
    <has-relation relation="fTaskID" size="36"/>  
    <has-relation relation="fActivityFName" size="512"/>  
    <has-relation relation="fActivityLabel" size="64"/>  
    <has-relation relation="fOpinion" data-type="String"/>  
    <has-relation relation="fVerdict" size="36"/>  
    <has-relation relation="fState" size="36"/>  
    <has-relation relation="fStateName" size="64"/>  
    <has-relation relation="fCreateOgnID" size="36"/>  
    <has-relation relation="fCreateOgnName" size="64"/>  
    <has-relation relation="fCreateDeptID" size="36"/>  
    <has-relation relation="fCreateDeptName" size="64"/>  
    <has-relation relation="fCreatePosID" size="36"/>  
    <has-relation relation="fCreatePosName" size="64"/>  
    <has-relation relation="fCreatePsnID" size="36"/>  
    <has-relation relation="fCreatePsnName" size="64"/>  
    <has-relation relation="fCreatePsnFID" size="512"/>  
    <has-relation relation="fCreatePsnFName" size="1024"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产处置申请(处理表)</label> 
  </concept>  
  <concept name="OA_AS_UseRecord" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">使用记录</label>  
    <has-relation relation="fAssetID" size="36"/>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fCode" size="64"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fDutyOgnID" size="36"/>  
    <has-relation relation="fDutyOgnName" size="64"/>  
    <has-relation relation="fDutyDeptID" size="36"/>  
    <has-relation relation="fDutyDeptName" size="64"/>  
    <has-relation relation="fDutyPosID" size="36"/>  
    <has-relation relation="fDutyPosName" size="64"/>  
    <has-relation relation="fDutyPsnID" size="36"/>  
    <has-relation relation="fDutyPsnName" size="64"/>  
    <has-relation relation="fDutyPsnFID" size="512"/>  
    <has-relation relation="fDutyPsnFName" size="1024"/>  
    <has-relation relation="fBeginDate" data-type="Date"/>  
    <has-relation relation="fEndDate" data-type="Date"/>  
    <has-relation relation="fRemark" data-type="String"/> 
  </concept>  
  <concept name="OA_AS_Inventory" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">固定资产清查</label>  
    <has-relation relation="fDate" default-value-expr="currentDate()" data-type="Date"> 
      <label language="zh_CN">清查日期</label> 
    </has-relation>  
    <has-relation relation="fRemark" data-type="String" size="256"/>  
    <has-relation relation="fDescription" size="512"> 
      <label language="zh_CN">描述</label>  
    </has-relation>  
    <has-relation relation="fDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"> 
      <label language="zh_CN">清查部门ID</label> 
    </has-relation>  
    <has-relation relation="fDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"> 
      <label language="zh_CN">清查部门</label> 
    </has-relation>  
    <has-relation relation="fPersonID" default-value-expr="operatorID()" size="36"> 
      <label language="zh_CN">清查人员ID</label> 
    </has-relation>  
    <has-relation relation="fPersonName" default-value-expr="operatorName()" size="64"> 
      <label language="zh_CN">清查人</label> 
    </has-relation>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="64"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fAssetID" size="36"/>  
    <has-relation relation="fInventoryNO" default-value-expr="nextSeqString(format('%s%s','ZCQC',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>  
    <has-relation relation="fChecked"/>
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation> 
  </concept>  
  <concept name="OA_AS_InventoryD" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产清查中间表</label>  
    <has-relation relation="fAssetID" size="36"/>  
    <has-relation relation="fInventoryID" data-type="OA_AS_Inventory" size="36"/> 
  </concept>  
  <concept name="OA_AS_Deprecition" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">资产折旧统计</label>  
    <has-relation relation="fKindID" size="36"/>  
    <has-relation relation="fKind" size="64"/>  
    <has-relation relation="fAssetID" size="36"/>  
    <has-relation relation="fName" size="64"/>  
    <has-relation relation="fSpecType" size="64"/>  
    <has-relation relation="fOriginValue"/>  
    <has-relation relation="fAssetCode" size="64"/>  
    <has-relation relation="fBgDepreYear"/>  
    <has-relation relation="fBgDepreMonth"/>  
    <has-relation relation="fDepreYear"/>  
    <has-relation relation="fDepreMonth"/>  
    <has-relation relation="fPercent"/>  
    <has-relation relation="fYearDepre"/>  
    <has-relation relation="fMonthDepre"/>  
    <has-relation relation="fAddDepreValue"/>  
    <has-relation relation="fEquity"/>  
    <has-relation relation="fUseTime"/>  
    <has-relation relation="fDutyDeptID" size="36"/>  
    <has-relation relation="fDutyDeptName" size="64"/>  
    <has-relation relation="fDutyPsnID" size="36"/>  
    <has-relation relation="fDutyPsnName" size="64"/>  
    <has-relation relation="fServiceYear"/>  
    <has-relation relation="fUseMonth"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fCode" size="64"><label language="zh_CN">资产编码</label>
</has-relation> 
    <has-relation relation="fExtendStr1" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr2" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr3" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr4" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr5" data-type="String" size="64"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr6" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr7" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr8" data-type="String" size="255"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendStr9" data-type="String" size="1024"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate1" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate2" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate3" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate4" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendDate5" data-type="Date"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
<has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"><label language="zh_CN">扩展字段</label>
</has-relation>
  </concept> 
<relation name="fAssetConfirm" data-type="String"><label language="zh_CN">资产确认</label>
</relation>

<relation name="fServicTag" data-type="String"><label language="zh_CN">ServicTag</label>
</relation>
<relation name="fESCode" data-type="String"><label language="zh_CN">ExpressServiceCode</label>
</relation>
<relation name="fSHKSSJ" data-type="Date"><label language="zh_CN">开始时间</label>
</relation>
<relation name="fSHJSSJ" data-type="Date"><label language="zh_CN">结束时间</label>
</relation>
</model>

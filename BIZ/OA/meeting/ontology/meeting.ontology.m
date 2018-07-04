<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OA_MT_ArrangePsns" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议室安排人员</label>  
    <has-relation relation="fMasterID"/>  
    <has-relation relation="fOrgKind"/>  
    <has-relation relation="fOrgID"/>  
    <has-relation relation="fOrgName"/>  
    <has-relation relation="fPersonID"/>  
    <has-relation relation="fPersonName"/>  
    <has-relation relation="fRangeURL"/>  
    <has-relation relation="fRangeURLName"/> 
  </concept>  
  <relation name="fRangeURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">参会人员全路径</label> 
  </relation>  
  <relation name="fRangeURLName" data-type="String" single-valued="true"> 
    <label language="zh_CN">参会人员全路径名称</label> 
  </relation>  
  <concept name="OA_MT_Boardroom" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议室信息</label>  
    <has-relation relation="fType"/>  
    <has-relation relation="fHoldNum"/>  
    <has-relation relation="fUse"/>  
    <has-relation relation="fFloor" data-type="String"/>  
    <has-relation relation="fBaseConfig"/>  
    <has-relation relation="fEquipment"/>  
    <has-relation relation="fDescription"/>  
    <has-relation relation="fPicture" data-type="String"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'"/>  
    <has-relation relation="fDuptOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fDuptOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fDuptOgnFID" default-value-expr="currentOgnFID()"> 
      <label language="zh_CN">责任机构FID</label> 
    </has-relation>  
    <has-relation relation="fDutyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fDutyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fDutyPsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fDutyPsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fDutyPsnFID" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fDutyPsnFName" default-value-expr="currentPersonMemberFName()"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fDisUseTime"/>  
    <has-relation relation="fAddress"/>  
    <has-relation relation="fCode"/>  
    <has-relation relation="fName"/>  
    <has-relation relation="fRemark" data-type="String"/>  
    <!--<has-relation relation="fID"/>-->  
    <has-relation relation="fExtendStr1" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr2" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr3" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr4" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr5" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr6" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr7" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr8" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr9" data-type="String" size="1024"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate1" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate2" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate3" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate4" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate5" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation> 
  </concept>  
  <relation name="fType" data-type="String" single-valued="true"> 
    <label language="zh_CN">会议室类型</label> 
  </relation>  
  <relation name="fHoldNum" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">容纳人数</label> 
  </relation>  
  <relation name="fUse" data-type="String" single-valued="true"> 
    <label language="zh_CN">主要用途</label> 
  </relation>  
  <relation name="fFloor" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">所在楼层</label> 
  </relation>  
  <relation name="fBaseConfig" data-type="String" single-valued="true"> 
    <label language="zh_CN">基础配置</label> 
  </relation>  
  <relation name="fEquipment" data-type="String" single-valued="true"> 
    <label language="zh_CN">附属设备</label> 
  </relation>  
  <relation name="fPicture" data-type="String" single-valued="true"> 
    <label language="zh_CN">图片</label> 
  </relation>  
  <relation name="fDuptOgnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">所属机构ID</label> 
  </relation>  
  <relation name="fDuptOgnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">所属机构</label> 
  </relation>  
  <relation name="fDuptOgnFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任部门FID</label> 
  </relation>  
  <relation name="fDutyDeptID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任部门ID</label> 
  </relation>  
  <relation name="fDutyDeptName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任部门</label> 
  </relation>  
  <relation name="fDutyPsnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人</label> 
  </relation>  
  <relation name="fDutyPsnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人姓名</label> 
  </relation>  
  <relation name="fDutyPsnFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人全路径</label> 
  </relation>  
  <relation name="fDutyPsnFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">责任人完整姓名</label> 
  </relation>  
  <concept name="OA_MT_UseApply" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议室申请</label>  
    <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s', 'HYSSQ-',format('%1$tY%1$tm%1$td',currentDateTime())), '000')"/>  
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()"/>  
    <has-relation relation="fApplyDate" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fMeetName"/>  
    <has-relation relation="fMeetPsns"/>  
    <has-relation relation="fMeetPsnNum"/>  
    <has-relation relation="fBoardroomID" data-type="OA_MT_Boardroom"/>  
    <has-relation relation="fBoardroom"/>  
    <has-relation relation="fBeginTime"/>  
    <has-relation relation="fEndTime"/>  
    <has-relation relation="fPhone"/>  
    <has-relation relation="fDescription"/>  
    <has-relation relation="fArrBoardroomID" data-type="OA_MT_Boardroom"/>  
    <has-relation relation="fArrBoardroom"/>  
    <has-relation relation="fArrBeginTime"/>  
    <has-relation relation="fArrEndTime"/>  
    <has-relation relation="fArrOgnID"/>  
    <has-relation relation="fArrOgnName"/>  
    <has-relation relation="fArrDeptID"/>  
    <has-relation relation="fArrDeptName"> 
      <label language="zh_CN">安排人</label> 
    </has-relation>  
    <has-relation relation="fArrPsnID"/>  
    <has-relation relation="fArrPsnName"/>  
    <has-relation relation="fArrPsnFID"/>  
    <has-relation relation="fArrPsnFName"/>  
    <has-relation relation="fArrTime"/>  
    <has-relation relation="fArrRemark" data-type="String"/>  
    <has-relation relation="fBizState" default-value-expr="'bsEditing'"/>  
    <has-relation relation="fBizStateName" default-value-expr="'编辑中'"><label language="zh_CN">状态</label>
</has-relation>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fRemark" data-type="String"/>  
    <has-relation relation="fApplyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fCurrentActivities"/>  
    <has-relation relation="fCurrentExecutors"/>  
    <has-relation relation="fOutPsns"/>  
    <has-relation relation="fExtendStr1" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr2" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr3" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr4" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr5" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr6" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr7" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr8" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr9" data-type="String" size="1024"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate1" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate2" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate3" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate4" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate5" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation> 
  </concept>  
  <relation name="fMeetName" data-type="String" single-valued="true"> 
    <label language="zh_CN">会议主题</label> 
  </relation>  
  <relation name="fMeetPsns" data-type="String" single-valued="true"> 
    <label language="zh_CN">参会人员</label> 
  </relation>  
  <relation name="fMeetPsnNum" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">参会人数</label> 
  </relation>  
  <relation name="fBoardroomID" data-type="String" single-valued="true"> 
    <label language="zh_CN">会议室ID</label> 
  </relation>  
  <relation name="fBoardroom" data-type="String" single-valued="true"> 
    <label language="zh_CN">会议室</label> 
  </relation>  
  <relation name="fArrBoardroomID" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排会议室ID</label> 
  </relation>  
  <relation name="fArrBoardroom" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排会议室</label> 
  </relation>  
  <relation name="fArrBeginTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">安排开始时间</label> 
  </relation>  
  <relation name="fArrEndTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">安排结束时间</label> 
  </relation>  
  <relation name="fArrOgnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排机构</label> 
  </relation>  
  <relation name="fArrOgnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排机构名称</label> 
  </relation>  
  <relation name="fArrDeptID" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排部门ID</label> 
  </relation>  
  <relation name="fArrDeptName" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排部门</label> 
  </relation>  
  <relation name="fArrDeptPsnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排人ID</label> 
  </relation>  
  <relation name="fArrPsnFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排人FID</label> 
  </relation>  
  <relation name="fArrPsnFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排人FName</label> 
  </relation>  
  <relation name="fArrTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">安排时间</label> 
  </relation>  
  <relation name="fArrRemark" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排备注</label> 
  </relation>  
  <concept name="OA_MT_UseApplyPsns" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议室申请参会人员</label>  
    <has-relation relation="fMasterID"> 
      <label language="zh_CN">主数据ID</label> 
    </has-relation>  
    <has-relation relation="fOrgKind"> 
      <label language="zh_CN">组织类型</label> 
    </has-relation>  
    <has-relation relation="fOrgID"/>  
    <has-relation relation="fOrgName"/>  
    <has-relation relation="fPersonID"/>  
    <has-relation relation="fPersonName"/>  
    <has-relation relation="fRangeURL"/>  
    <has-relation relation="fRangeURLName"/> 
  </concept>  
  <concept name="OA_MT_BoardroomType" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议室类型</label>  
    <!--<has-relation relation="fScope"/>-->  
    <has-relation relation="fCode"/>  
    <has-relation relation="fName"/>  
    <has-relation relation="fDescription"/>  
    <has-relation relation="fSequence" data-type="String"/>  
    <has-relation relation="fUseStatus" default-value-expr="'0'"/>  
    <has-relation relation="fUseStatusName" default-value-expr="'未启用'"/>  
    <has-relation relation="fParentCode"/>  
    <has-relation relation="fLevel"/>  
    <has-relation relation="fURL"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID"/>  
    <has-relation relation="fUpdatePsnName"/>  
    <has-relation relation="fUpdateTime"/> 
  </concept>  
  <concept name="OA_MT_RoomArrange" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议室安排</label>  
    <has-relation relation="fUseOgnId"/>  
    <has-relation relation="fUseOrgName"/>  
    <has-relation relation="fUseDeptID"/>  
    <has-relation relation="fUseDeptName"/>  
    <has-relation relation="fUsePsnID"> 
      <label language="zh_CN">使用人ID</label> 
    </has-relation>  
    <has-relation relation="fUsePsnName"/>  
    <has-relation relation="fUsePsnFID"/>  
    <has-relation relation="fUsePsnFName"/>  
    <has-relation relation="fBoardroomID" data-type="OA_MT_Boardroom"/>  
    <has-relation relation="fBoardroom"/>  
    <has-relation relation="fMeetName"/>  
    <has-relation relation="fMeetPsns"/>  
    <has-relation relation="fMeetPsnNum"/>  
    <has-relation relation="fBeginTime"/>  
    <has-relation relation="fEndTime"/>  
    <has-relation relation="fPhone"/>  
    <has-relation relation="fArrOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fArrOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fArrDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fArrDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fArrPsnFID" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fArrPsnFName" default-value-expr="currentPersonMemberFName()"/>  
    <has-relation relation="fArrTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fDescription"/>  
    <has-relation relation="fEffect" default-value-expr="1"/>  
    <has-relation relation="fMTUseApplyID" data-type="OA_MT_UseApply"/>  
    <has-relation relation="fArrPsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fArrPsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fRemark" data-type="String"/>  
    <has-relation relation="fOutPsns"/>  
    <has-relation relation="fExtendStr1" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr2" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr3" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr4" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr5" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr6" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr7" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr8" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr9" data-type="String" size="1024"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate1" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate2" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate3" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate4" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate5" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation> 
  </concept>  
  <relation name="fUseOgnId" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用机构ID</label> 
  </relation>  
  <relation name="fUseOrgName" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用机构</label> 
  </relation>  
  <relation name="fUseDeptID" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用部门ID</label> 
  </relation>  
  <relation name="fUseDeptName" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用部门</label> 
  </relation>  
  <relation name="fUsePsnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用人</label> 
  </relation>  
  <relation name="fUsePsnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用人</label> 
  </relation>  
  <relation name="fUsePsnFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用人FID</label> 
  </relation>  
  <relation name="fUsePsnFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">使用人FName</label> 
  </relation>  
  <relation name="fEffect" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否有效</label> 
  </relation>  
  <relation name="fMTUseApplyID" data-type="String" single-valued="true"> 
    <label language="zh_CN">会议室申请ID</label> 
  </relation>  
  <concept name="OA_MT_Summary" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议纪要</label>  
    <has-relation relation="fArrangeID" data-type="OA_MT_RoomArrange"/>  
    <has-relation relation="fCompereID"/>  
    <has-relation relation="fCompere"/>  
    <has-relation relation="fMeetName"/>  
    <has-relation relation="fBeginTime"/>  
    <has-relation relation="fEndTime"/>  
    <has-relation relation="fMeetPsns"/>  
    <has-relation relation="fMeetPsnNum"/>  
    <has-relation relation="fContent" data-type="String"/>  
    <has-relation relation="fAttachment"/>  
    <has-relation relation="fIssueRange"/>  
    <has-relation relation="fIssueState" default-value-expr="'0'"/>  
    <has-relation relation="fIssueStateName" default-value-expr="'未发布'"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"/>  
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()"> 
      <label language="zh_CN">提交人员FID</label> 
    </has-relation>  
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()"> 
      <label language="zh_CN">提交人员FName</label> 
    </has-relation>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fBoardroomID" data-type="OA_MT_Boardroom"/>  
    <has-relation relation="fBoardroom"/>  
    <has-relation relation="fUseOgnId"/>  
    <has-relation relation="fUseOrgName"/>  
    <has-relation relation="fUseDeptID"/>  
    <has-relation relation="fUseDeptName"/>  
    <has-relation relation="fUsePsnID"/>  
    <has-relation relation="fUsePsnName"/>  
    <has-relation relation="fUsePsnFID"/>  
    <has-relation relation="fUsePsnFName"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="currentPersonID()"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="currentPersonName()"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fRemark" data-type="String"/>  
    <has-relation relation="fExtendStr1" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr2" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr3" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr4" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr5" data-type="String" size="64"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr6" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr7" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr8" data-type="String" size="255"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendStr9" data-type="String" size="1024"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate1" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate2" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate3" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate4" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendDate5" data-type="Date"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum1" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum2" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum3" data-type="Decimal" size="15" scale="2"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum4" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation>  
    <has-relation relation="fExtendNum5" data-type="Decimal" size="18" scale="4"> 
      <label language="zh_CN">扩展字段</label> 
    </has-relation> 
  </concept>  
  <relation name="fArrangeID" data-type="String" single-valued="true"> 
    <label language="zh_CN">会议安排ID</label> 
  </relation>  
  <relation name="fCompereID" data-type="String" single-valued="true"> 
    <label language="zh_CN">主持人ID</label> 
  </relation>  
  <relation name="fCompere" data-type="String" single-valued="true"> 
    <label language="zh_CN">主持人</label> 
  </relation>  
  <relation name="fAttachment" data-type="String" single-valued="true"> 
    <label language="zh_CN">附件</label> 
  </relation>  
  <relation name="fIssueRange" data-type="String" single-valued="true"> 
    <label language="zh_CN">发布范围</label> 
  </relation>  
  <relation name="fIssueState" data-type="String" single-valued="true"> 
    <label language="zh_CN">状态</label> 
  </relation>  
  <relation name="fIssueStateName" data-type="String" single-valued="true"> 
    <label language="zh_CN">状态名称</label> 
  </relation>  
  <concept name="OA_MT_SummaryIssue" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">会议纪要发布范围</label>  
    <has-relation relation="fMasterID" data-type="OA_MT_Summary"> 
      <label language="zh_CN">会议纪要ID</label> 
    </has-relation>  
    <has-relation relation="fOrgKind"> 
      <label language="zh_CN">组织类型</label> 
    </has-relation>  
    <has-relation relation="fOrgID"> 
      <label language="zh_CN">组织ID</label> 
    </has-relation>  
    <has-relation relation="fOrgName"> 
      <label language="zh_CN">组织名称</label> 
    </has-relation>  
    <has-relation relation="fPersonID"/>  
    <has-relation relation="fPersonName"/>  
    <has-relation relation="fRangeURL"> 
      <label language="zh_CN">组织机构全路径</label> 
    </has-relation>  
    <has-relation relation="fRangeURLName"> 
      <label language="zh_CN">组织机构全称</label> 
    </has-relation> 
  </concept>  
  <relation name="fArrPsnID" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排人ID</label> 
  </relation>  
  <relation name="fArrPsnName" data-type="String" single-valued="true"> 
    <label language="zh_CN">安排人</label> 
  </relation>  
  <concept name="OA_MT_UseExecute"> 
    <has-relation relation="fMasterID" data-type="OA_MT_UseApply"/>  
    <has-relation relation="fTaskID"/>  
    <has-relation relation="fActivityFName"/>  
    <has-relation relation="fActivityLabel"/>  
    <has-relation relation="fOpinion" data-type="String"/>  
    <has-relation relation="fVerdict"/>  
    <has-relation relation="fState"/>  
    <has-relation relation="fStateName"/>  
    <has-relation relation="fCreateOgnID"/>  
    <has-relation relation="fCreateOgnName"/>  
    <has-relation relation="fCreateDeptID"/>  
    <has-relation relation="fCreateDeptName"/>  
    <has-relation relation="fCreatePosID"/>  
    <has-relation relation="fCreatePosName"/>  
    <has-relation relation="fCreatePsnID"/>  
    <has-relation relation="fCreatePsnName"/>  
    <has-relation relation="fCreatePsnFID"/>  
    <has-relation relation="fCreatePsnFName"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID"/>  
    <has-relation relation="fUpdatePsnName"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">会议室使用申请(处理表)</label> 
  </concept>  
  <relation name="fOutPsns" data-type="String" single-valued="true"> 
    <label language="zh_CN">外部参会人员</label> 
  </relation>  
  <concept name="OA_MT_BudgetApply" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">会议费预算申请</label>  
    <has-relation relation="fMeetName" size="256"> 
      <label language="zh_CN">会议名称</label> 
    </has-relation>  
    <has-relation relation="fMeetTime"/>  
    <has-relation relation="fMeetPalce" size="256"/>  
    <has-relation relation="fMeetReport" size="64"/>  
    <has-relation relation="fMeetType" size="64"/>  
    <has-relation relation="fMeetTypeCode" size="36"/>  
    <has-relation relation="fMeetDayCount"/>  
    <has-relation relation="fMeetPartnerNum"/>  
    <has-relation relation="fRentHouseCost" size="64"/>  
    <has-relation relation="fRentHouseCostStand"/>  
    <has-relation relation="fEatCost" size="64"/>  
    <has-relation relation="fEatCostStadard"/>  
    <has-relation relation="fOtherCost"/>  
    <has-relation relation="fConsultCost"/>  
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fApplyDeptID" size="36"/>  
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>  
    <has-relation relation="fApplyPosID" size="36"/>  
    <has-relation relation="fApplyPosName" size="64"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="currentPersonID()" size="36"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="currentPersonName()" size="64"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()" size="1024"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>  
    <has-relation relation="fApplyDate" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fCostSource" size="128"/> 
  <has-relation relation="fAccountName" size="64"><label language="zh_CN">列表科目</label>
</has-relation>
<has-relation relation="fBizState" default-value-expr="'bsEditing'" size="32"></has-relation>
<has-relation relation="fBizStateName" default-value-expr="'编辑中'" size="64"></has-relation>
<has-relation relation="fCurrentActivities" size="64"></has-relation>
<has-relation relation="fCurrentExecutors" size="64"></has-relation>
</concept>  
  <concept name="OA_MT_BudgetApplyExecute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_MT_BudgetApply"/>  
    <has-relation relation="fTaskID" size="36"/>  
    <has-relation relation="fActivityFName" size="1024"/>  
    <has-relation relation="fActivityLabel" size="64"/>  
    <has-relation relation="fOpinion" data-type="String" size="1024"/>  
    <has-relation relation="fVerdict" size="64"/>  
    <has-relation relation="fState" size="32"/>  
    <has-relation relation="fStateName" size="32"/>  
    <has-relation relation="fCreateOgnID" size="36"/>  
    <has-relation relation="fCreateOgnName" size="64"/>  
    <has-relation relation="fCreateDeptID" size="36"/>  
    <has-relation relation="fCreateDeptName" size="64"/>  
    <has-relation relation="fCreatePosID" size="36"/>  
    <has-relation relation="fCreatePosName" size="64"/>  
    <has-relation relation="fCreatePsnID" size="36"/>  
    <has-relation relation="fCreatePsnName" size="64"/>  
    <has-relation relation="fCreatePsnFID" size="1024"/>  
    <has-relation relation="fCreatePsnFName" size="1024"/>  
    <has-relation relation="fCreateTime"/>  
    <has-relation relation="fUpdatePsnID" size="36"/>  
    <has-relation relation="fUpdatePsnName" size="64"/>  
    <has-relation relation="fUpdateTime"/>  
    <has-relation relation="version"/>  
    <label language="zh_CN">会议费预算申请（处理表）</label> 
  </concept> 
</model>

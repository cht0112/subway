<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OA_SD_Schedule" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">日程</label>  
    <has-relation relation="fTitle" default-value-expr="'新建日程'"/>  
    <has-relation relation="fBeginDatePart" data-type="Date"/>  
    <has-relation relation="fBeginTimePart"/>  
    <has-relation relation="fBeginTime" data-type="DateTime"/>  
    <has-relation relation="fEndDatePart" data-type="Date"/>  
    <has-relation relation="fEndTimePart"/>  
    <has-relation relation="fEndTime"/>  
    <has-relation relation="fContent"/>  
    <has-relation relation="fExecutors"/>  
    <has-relation relation="fIsShared" default-value-expr="1"/>  
    <has-relation relation="fIsRemind"/>  
    <has-relation relation="fRemindDatePart" data-type="Date"/>  
    <has-relation relation="fRemindTimePart"/>  
    <has-relation relation="fRemindTime" data-type="DateTime"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()"/>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()" data-type="DateTime"/>  
    <has-relation relation="fCreateURL" default-value-expr="currentPersonMemberFID()"/>  
    <has-relation relation="fBizID"/>  
    <has-relation relation="fBizType"/>  
      
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
    <has-relation relation="fScope" default-value-expr="'0'" size="36"> 
      <label language="zh_CN">类别编码</label> 
    </has-relation>  
  <has-relation relation="fIsOutSide" data-type="String" size="36"></has-relation>
</concept>  
  <relation name="fBeginDatePart" data-type="Date" single-valued="true"> 
    <label language="zh_CN">开始时间日期部分</label> 
  </relation>  
  <relation name="fBeginTimePart" data-type="String" single-valued="true"> 
    <label language="zh_CN">开始时间时间部分</label> 
  </relation>  
  <relation name="fEndDatePart" data-type="Date" single-valued="true"> 
    <label language="zh_CN">结束时间日期部分</label> 
  </relation>  
  <relation name="fEndTimePart" data-type="String" single-valued="true"> 
    <label language="zh_CN">结束时间时间部分</label> 
  </relation>  
  <relation name="fExecutors" data-type="String" single-valued="true"> 
    <label language="zh_CN">执行人</label> 
  </relation>  
  <relation name="fIsShared" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否公开</label> 
  </relation>  
  <relation name="fIsRemind" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">是否提醒</label> 
  </relation>  
  <relation name="fRemindDatePart" data-type="Date" single-valued="true"> 
    <label language="zh_CN">提醒时间日期部分</label> 
  </relation>  
  <relation name="fRemindTimePart" data-type="String" single-valued="true"> 
    <label language="zh_CN">提醒时间时间部分</label> 
  </relation>  
  <relation name="fRemindTime" data-type="DateTime" single-valued="true"> 
    <label language="zh_CN">提醒时间</label> 
  </relation>  
  <relation name="fCreateURL" data-type="String" single-valued="true"> 
    <label language="zh_CN">创建人路径</label> 
  </relation>  
  <relation name="fBizID" data-type="String" single-valued="true"> 
    <label language="zh_CN">业务ID</label> 
  </relation>  
  <relation name="fBizType" data-type="String" single-valued="true"> 
    <label language="zh_CN">业务类型</label> 
  </relation>  
  <relation name="fSDMasterID" data-type="String" single-valued="true"> 
    <label language="zh_CN">业务外键</label> 
  </relation>  
  <concept name="OA_SD_Executor" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">日程执行人</label>  
    <has-relation relation="fSDMasterID" data-type="OA_SD_Schedule"/>  
    <has-relation relation="fExecutorID"/>  
    <has-relation relation="fExecutorName"/>  
    <has-relation relation="fRemark"/>  
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
  <relation name="fExecutorID" data-type="String" single-valued="true"> 
    <label language="zh_CN">执行人</label> 
  </relation>  
  <relation name="fExecutorName" data-type="String" single-valued="true"> 
    <label language="zh_CN">执行人姓名</label> 
  </relation>  
  <concept name="OA_SD_ShareRange" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">日程共享范围</label>  
    <has-relation relation="fShareType"/>  
    <has-relation relation="fSharedOrgKindID"/>  
    <has-relation relation="fSharedOrgID"/>  
    <has-relation relation="fSharedOrgName"/>  
    <has-relation relation="fSharedOrgFID"/>  
    <has-relation relation="fSharedOrgFName"/>  
    <has-relation relation="fShareToOrgKindID"/>  
    <has-relation relation="fShareToOrgID"/>  
    <has-relation relation="fShareToOrgName"/>  
    <has-relation relation="fShareToOrgFID"/>  
    <has-relation relation="fShareToOrgFName"/>  
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
  <relation name="fShareType" data-type="Integer" single-valued="true"> 
    <label language="zh_CN">共享类型</label> 
  </relation>  
  <relation name="fSharedOrgKindID" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享组织类型</label> 
  </relation>  
  <relation name="fSharedOrgID" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享组织</label> 
  </relation>  
  <relation name="fSharedOrgName" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享组织名称</label> 
  </relation>  
  <relation name="fSharedOrgFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享组织路径</label> 
  </relation>  
  <relation name="fSharedOrgFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享组织全称</label> 
  </relation>  
  <relation name="fShareToOrgKindID" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享到组织类型</label> 
  </relation>  
  <relation name="fShareToOrgID" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享到组织</label> 
  </relation>  
  <relation name="fShareToOrgName" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享到组织名称</label> 
  </relation>  
  <relation name="fShareToOrgFID" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享到组织路径</label> 
  </relation>  
  <relation name="fShareToOrgFName" data-type="String" single-valued="true"> 
    <label language="zh_CN">共享到组织全称</label> 
  </relation>  
  <relation name="fHasExecutors" data-type="OA_SD_Executor" inverse-of="fSDMasterID"> 
    <label language="zh_CN">日程的执行者</label> 
  </relation> 
<relation name="fIsOutSide" data-type="String"><label language="zh_CN">是否外出</label>
</relation>
</model>

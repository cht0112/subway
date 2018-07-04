<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OA_GZJH" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">工作计划</label>  
    <has-relation relation="fGZNR" data-type="String" size="3000"> 
      <label language="zh_CN">工作内容</label> 
    </has-relation>  
    <has-relation relation="fJHKSRQ" data-type="Date"> 
      <label language="zh_CN">计划开始日期</label> 
    </has-relation>  
    <has-relation relation="fJHJSRQ" data-type="Date"> 
      <label language="zh_CN">计划结束日期</label> 
    </has-relation>  
    <has-relation relation="fCBR" data-type="String" size="1000" default-value-expr="operatorName()"> 
      <label language="zh_CN">承办人</label> 
    </has-relation>  
    <has-relation relation="fCBRID" data-type="String" size="1000" default-value-expr="operatorID()"> 
      <label language="zh_CN">承办人id</label> 
    </has-relation>  
    <has-relation relation="fFZR" data-type="String"> 
      <label language="zh_CN">负责人</label> 
    </has-relation>  
    <has-relation relation="fFZRID" data-type="SA_OPPerson"> 
      <label language="zh_CN">负责人id</label> 
    </has-relation>  
    <has-relation relation="fBZ" data-type="String"> 
      <label language="zh_CN">备注</label> 
    </has-relation>  
    <has-relation relation="fCBBM" data-type="String" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())"> 
      <label language="zh_CN">承办部门</label> 
    </has-relation>  
    <has-relation relation="fCBBMID" data-type="SA_OPOrg" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())"> 
      <label language="zh_CN">承办部门id</label> 
    </has-relation>  
    <has-relation relation="fGZJHLX" data-type="String"> 
      <label language="zh_CN">工作计划类型</label> 
    </has-relation>  
    <has-relation relation="fCBRBM" data-type="String" size="1000"> 
      <label language="zh_CN">承办人部门ID</label> 
    </has-relation>  
    <has-relation relation="fFZRBM" data-type="String" size="300"> 
      <label language="zh_CN">负责人部门ID</label> 
    </has-relation>  
    <has-relation relation="fJHZT" data-type="String" size="200"> 
      <label language="zh_CN">计划主题</label> 
    </has-relation>  
    <has-relation relation="fDD" data-type="String"> 
      <label language="zh_CN">地点</label> 
    </has-relation>  
    <has-relation relation="fPlanYear" data-type="String" default-value-expr="toString(yearOf(currentDate()))"> 
      <label language="zh_CN">年度</label> 
    </has-relation>  
    <has-relation relation="fPlanMonth" data-type="String"> 
      <label language="zh_CN">月份</label> 
    </has-relation>  
    <has-relation relation="fPlanWeek" data-type="String"> 
      <label language="zh_CN">周</label> 
    </has-relation>  
     <has-relation relation="fNO" default-value-expr="nextSeqString(format('%s%s','GZJH-',format('%1$tY%1$tm%1$td', currentDateTime())),'000')" size="64"/>
    <has-relation relation="fBizState" default-value-expr="'bsEditing'" size="36"/>
    <has-relation relation="fBizStateName" default-value-expr="'编辑中'" size="36"><label language="zh_CN">状态</label>
</has-relation>
    <has-relation relation="fApplyOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fApplyOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fApplyDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>
    <has-relation relation="fApplyDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>
    <has-relation relation="fApplyPosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fApplyPosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fApplyPsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fApplyPsnName" default-value-expr="operatorName()" size="128"/>  
    <has-relation relation="fApplyPsnFID" default-value-expr="currentPersonMemberFID()"
      size="512"/>  
    <has-relation relation="fApplyPsnFName" default-value-expr="currentPersonMemberFName()"
      size="1024"/>  
    <has-relation relation="fApplyDate" data-type="Date" default-value-expr="currentDate()"/>  
    <has-relation relation="fCreateOgnID" default-value-expr="currentOgnID()" size="36"/>  
    <has-relation relation="fCreateOgnName" default-value-expr="currentOgnName()" size="64"/>  
    <has-relation relation="fCreateDeptID" default-value-expr="if(currentDeptID() = null, currentOgnID(), currentDeptID())" size="36"/>
    <has-relation relation="fCreateDeptName" default-value-expr="if(currentDeptName() = null, currentOgnName(), currentDeptName())" size="64"/>
    <has-relation relation="fCreatePosID" default-value-expr="currentPosID()" size="36"/>  
    <has-relation relation="fCreatePosName" default-value-expr="currentPosName()" size="64"/>  
    <has-relation relation="fCreatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fCreatePsnName" default-value-expr="operatorName()" size="128"/>  
    <has-relation relation="fCreatePsnFID" default-value-expr="currentPersonMemberFID()" size="512"/>
    <has-relation relation="fCreatePsnFName" default-value-expr="currentPersonMemberFName()" size="1024"/>
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fUpdatePsnID" default-value-expr="operatorID()" size="36"/>  
    <has-relation relation="fUpdatePsnName" default-value-expr="operatorName()" size="128"/>  
    <has-relation relation="fUpdateTime" default-value-expr="currentDateTime()"/>  
    <has-relation relation="fCurrentActivities" size="128"/>  
    <has-relation relation="fCurrentExecutors" size="128"/> 
  </concept>  
  <concept name="OA_GZJH_Execute" default-value-expr="guid()"> 
    <has-relation relation="fMasterID" data-type="OA_GZJH"/>  
    <has-relation relation="fTaskID"/>  
    <has-relation relation="fActivityFName"/>  
    <has-relation relation="fActivityLabel"/>  
    <has-relation relation="fOpinion"/>  
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
    <has-relation relation="version" default-value-expr="0"/>  
    <label language="zh_CN">工作计划(处理表)</label> 
  </concept>  
  <relation name="fGZNR" data-type="String"> 
    <label language="zh_CN">工作内容</label> 
  </relation>  
  <relation name="fJHKSRQ" data-type="Date"> 
    <label language="zh_CN">计划开始日期</label> 
  </relation>  
  <relation name="fJHJSRQ" data-type="Date"> 
    <label language="zh_CN">计划结束日期</label> 
  </relation>  
  <relation name="fCBR" data-type="String"> 
    <label language="zh_CN">承办人</label> 
  </relation>  
  <relation name="fCBRID" data-type="String"> 
    <label language="zh_CN">承办人id</label> 
  </relation>  
  <relation name="fFZR" data-type="String"> 
    <label language="zh_CN">负责人</label> 
  </relation>  
  <relation name="fFZRID" data-type="String"> 
    <label language="zh_CN">负责人id</label> 
  </relation>  
  <relation name="fBZ" data-type="String"> 
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="fCBBM" data-type="String"> 
    <label language="zh_CN">承办部门</label> 
  </relation>  
  <relation name="fCBBMID" data-type="String"> 
    <label language="zh_CN">承办部门id</label> 
  </relation>  
  <relation name="fGZJHLX" data-type="String"> 
    <label language="zh_CN">工作计划类型</label> 
  </relation>  
  <relation name="fCBRBM" data-type="String"> 
    <label language="zh_CN">承办人部门</label> 
  </relation>  
  <relation name="fFZRBM" data-type="String"> 
    <label language="zh_CN">负责人部门</label> 
  </relation>  
  <relation name="fJHZT" data-type="String"> 
    <label language="zh_CN">计划主题</label> 
  </relation>  
  <relation name="fDD" data-type="String"> 
    <label language="zh_CN">地点</label> 
  </relation>  
  <relation name="fPlanYear" data-type="String"> 
    <label language="zh_CN">年度</label> 
  </relation>  
  <relation name="fPlanMonth" data-type="String"> 
    <label language="zh_CN">月份</label> 
  </relation>  
  <relation name="fPlanWeek" data-type="String"> 
    <label language="zh_CN">周</label> 
  </relation> 
<concept name="OA_GZNR" default-value-expr="guid()"><has-relation relation="version" default-value-expr="0"><label language="zh_CN">版本</label>
</has-relation>
<label language="zh_CN">工作内容</label>
<has-relation relation="fGZJHID" data-type="OA_GZJH"><label language="zh_CN">主数据ID</label>
</has-relation><has-relation relation="fPlanTime" data-type="Date"><label language="zh_CN">计划时间</label>
</has-relation>
<has-relation relation="fWorkContent" data-type="String" size="1024"><label language="zh_CN">工作内容</label>
</has-relation>
<has-relation relation="fSponsor" data-type="String" size="256"><label language="zh_CN">承办单位</label>
</has-relation>
<has-relation relation="fChargePerson" data-type="String" size="512"><label language="zh_CN">负责人id</label>
</has-relation>
<has-relation relation="fChargePersonName" data-type="String" size="1024"><label language="zh_CN">负责人</label>
</has-relation>
<has-relation relation="fParticipantsID" data-type="String" size="512"><label language="zh_CN">参加人员id</label>
</has-relation>
<has-relation relation="fParticipants" data-type="String" size="1024"><label language="zh_CN">参加人员</label>
</has-relation>
<has-relation relation="fAddress" data-type="String" size="512"><label language="zh_CN">地点</label>
</has-relation>
<has-relation relation="fRemark" data-type="String" size="512"><label language="zh_CN">备注</label>
</has-relation>


<has-relation relation="fFGLD" data-type="String" size="100"><label language="zh_CN">分管领导</label>
</has-relation>
<has-relation relation="fZRC" data-type="String" size="100"><label language="zh_CN">责任处</label>
</has-relation>
<has-relation relation="fZRR" data-type="String" size="100"><label language="zh_CN">责任人</label>
</has-relation>
</concept>
<relation name="fPlanTime" data-type="DateTime"><label language="zh_CN">计划时间</label>
</relation>
<relation name="fWorkContent" data-type="String"><label language="zh_CN">工作内容</label>
</relation>
<relation name="fSponsor" data-type="String"><label language="zh_CN">承办单位</label>
</relation>
<relation name="fChargePerson" data-type="String"><label language="zh_CN">负责人</label>
</relation>
<relation name="fChargePersonName" data-type="String"><label language="zh_CN">负责人</label>
</relation>
<relation name="fParticipantsID" data-type="String"><label language="zh_CN">参加人员id</label>
</relation>
<relation name="fParticipants" data-type="String"><label language="zh_CN">参加人员</label>
</relation>
<relation name="fAddress" data-type="String"><label language="zh_CN">地点</label>
</relation>
<relation name="fRemark" data-type="String"><label language="zh_CN">备注</label>
</relation>
<relation name="fID" data-type="String"><label language="zh_CN">主键</label>
</relation>
<relation name="fGZJHID" data-type="String"><label language="zh_CN">主数据ID</label>
</relation>
<relation name="fFGLD" data-type="String"><label language="zh_CN">分管领导</label>
</relation>
<relation name="fZRC" data-type="String"><label language="zh_CN">责任处</label>
</relation>
<relation name="fZRR" data-type="String"><label language="zh_CN">责任人</label>
</relation>
</model>

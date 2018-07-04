<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="OA_SD_especialSchedulePerson" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">默认领导日程人员列表</label>  
    <has-relation relation="fExecutorID"> 
      <label language="zh_CN">执行人</label> 
    </has-relation>  
    <has-relation relation="fExecutorName"> 
      <label language="zh_CN">执行人姓名</label> 
    </has-relation>  
    <has-relation relation="fOrderNum" data-type="Integer"> 
      <label language="zh_CN">顺序号</label> 
    </has-relation> 
  </concept>  
  <relation name="fOrderNum" data-type="Integer"> 
    <label language="zh_CN">顺序号</label> 
  </relation>  
  <concept name="OA_v_especialSchedule" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">领导日程</label>  
    <has-relation relation="fScheduleID" data-type="String" size="36"> 
      <label language="zh_CN">领导日程ID</label> 
    </has-relation>  
    <has-relation relation="fTitle" size="1024"> 
      <label language="zh_CN">主题</label> 
    </has-relation>  
    <has-relation relation="fExecutorName"> 
      <label language="zh_CN">执行人姓名</label> 
    </has-relation>  
    <has-relation relation="fExecutorID"> 
      <label language="zh_CN">执行人</label> 
    </has-relation>  
    <has-relation relation="fContent"> 
      <label language="zh_CN">内容</label> 
    </has-relation>  
    <has-relation relation="fEndDatePart"> 
      <label language="zh_CN">结束时间日期部分</label> 
    </has-relation>  
    <has-relation relation="fEndTime"> 
      <label language="zh_CN">结束时间</label> 
    </has-relation>  
    <has-relation relation="fDate"> 
      <label language="zh_CN">日期</label> 
    </has-relation> 
  <has-relation relation="fBeginTimePart"><label language="zh_CN">开始时间时间部分</label>
</has-relation>
<has-relation relation="fEndTimePart"><label language="zh_CN">结束时间时间部分</label>
</has-relation>
</concept>  
  <relation name="fScheduleID" data-type="String"> 
    <label language="zh_CN">领导日程ID</label> 
  </relation>  
  <concept name="OA_SD_ScheduleEsp" default-value-expr="guid()"> 
    <has-relation relation="version" default-value-expr="0"> 
      <label language="zh_CN">版本</label> 
    </has-relation>  
    <label language="zh_CN">日程表</label>  
    <has-relation relation="fTitle" default-value-expr="'新建日程'"> 
      <label language="zh_CN">主题</label> 
    </has-relation>  
    <has-relation relation="fBeginDatePart" default-value-expr="currentDate()"> 
      <label language="zh_CN">开始时间日期部分</label> 
    </has-relation>  
    <has-relation relation="fBeginTimePart" default-value-expr="'00:00'"> 
      <label language="zh_CN">开始时间时间部分</label> 
    </has-relation>  
    <has-relation relation="fBeginTime"> 
      <label language="zh_CN">开始时间</label> 
    </has-relation>  
    <has-relation relation="fEndDatePart" default-value-expr="currentDate()"> 
      <label language="zh_CN">结束时间日期部分</label> 
    </has-relation>  
    <has-relation relation="fEndTimePart" default-value-expr="'00:00'"> 
      <label language="zh_CN">结束时间时间部分</label> 
    </has-relation>  
    <has-relation relation="fEndTime"> 
      <label language="zh_CN">结束时间</label> 
    </has-relation>  
    <has-relation relation="fContent"> 
      <label language="zh_CN">内容</label> 
    </has-relation>  
    <has-relation relation="fExecutors"> 
      <label language="zh_CN">执行人</label> 
    </has-relation>  
    <has-relation relation="fIsShared" default-value-expr="0"> 
      <label language="zh_CN">是否公开</label> 
    </has-relation>  
    <has-relation relation="fIsRemind" default-value-expr="0"> 
      <label language="zh_CN">是否提醒</label> 
    </has-relation>  
    <has-relation relation="fRemindDatePart" default-value-expr="currentDate()"> 
      <label language="zh_CN">提醒时间日期部分</label> 
    </has-relation>  
    <has-relation relation="fRemindTimePart" default-value-expr="'00:00'"> 
      <label language="zh_CN">提醒时间时间部分</label> 
    </has-relation>  
    <has-relation relation="fRemindTime"> 
      <label language="zh_CN">提醒时间</label> 
    </has-relation>  
    <has-relation relation="fCreatePsnID" default-value-expr="currentPersonID()"> 
      <label language="zh_CN">提交人员ID</label> 
    </has-relation>  
    <has-relation relation="fCreatePsnName" default-value-expr="currentPersonName()"> 
      <label language="zh_CN">提交人员</label> 
    </has-relation>  
    <has-relation relation="fCreateTime" default-value-expr="currentDateTime()"> 
      <label language="zh_CN">提交时间</label> 
    </has-relation>  
    <has-relation relation="fCreateURL" default-value-expr="currentPersonMemberFID()"> 
      <label language="zh_CN">创建人路径</label> 
    </has-relation>  
     
  </concept> 
</model>

<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="boardroomUseApplyProcess" start="start1" end="end1"> 
    <label language="zh_CN">会议室使用申请</label>  
    <static-activity name="useApply"> 
      <label language="zh_CN">会议室使用申请</label> 
    </static-activity>  
    <has-action action="createMTUSEAPPLYAction"/>  
    <has-action action="queryMTUSEAPPLYAction"/>  
    <has-action action="saveMTUSEAPPLYAction"/>  
    <has-action action="saveMTBOARDROOMAction" />
    <has-action action="queryMTBOARDROOMAction" />
    <has-action action="createMTBOARDROOMAction" />
    <has-action action="createMTUSEAPPLYPSNSAction"/>  
    <has-action action="queryMTUSEAPPLYPSNSAction"/>  
    <has-action action="saveMTUSEAPPLYPSNSAction"/>  
    <has-action action="queryMTBoardroomTypeAction"/>  
    <has-action action="checkBoardroomUsedAction"/>  
    <has-action action="queryMTRoomArrangeAction" />
    <has-action action="sqlQueryAction" >
    	<public name="dataModel" type="String" value="/OA/meeting/data" />
    </has-action>
     <token name="t1281511522312"/>  
    <listener action="advanceProcessAction" event="after" handler="boardroomUseApplyProcessAfterAdvanceProcedure"/>  
    <token name="init"/>  
    <place name="start1">
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <business-activity name="useApplyActivity" condition="true">
      <label language="zh_CN">会议室使用申请</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="useApproveActivity"/> 
    </business-activity>  
    <business-activity name="useApproveActivity" condition="true">
      <label language="zh_CN">会议室使用审批</label>  
      <input name="x" unit="useApplyActivity"/>  
      <output name="x" unit="useArrangeActivity"/> 
    
<back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true" back-range="specified" ><to activity="useApplyActivity"></to>
</back-rule>
</business-activity>  
    <business-activity name="useArrangeActivity" condition="true">
      <label language="zh_CN">会议室使用安排</label>  
      <input name="x" unit="useApproveActivity"/>  
      <output name="x" unit="end1"/> 
    
<back-rule condition="true" dialog-enabled="true" save-enabled="false" ignore-execute-mode="true" back-range="specified" ><to activity="useApplyActivity"></to>
</back-rule>
</business-activity>  
    <place name="end1">
      <label language="zh_CN">结束</label> 
    </place> 
  </process> 
</model>

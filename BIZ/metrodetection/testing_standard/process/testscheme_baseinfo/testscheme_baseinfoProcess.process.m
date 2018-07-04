<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="testscheme_baseinfoProcess" start="start1" end="end1"> 
    <label language="zh_CN">检测方案基本信息</label>  
    <static-activity name="mainActivity"> 
      <label language="zh_CN">检测方案流程</label> 
    </static-activity>  
    <place name="start1">
      <label language="zh_CN">开始</label>  
      <has-token token="init"/> 
    </place>  
    <token name="init"/>  
    <business-activity name="compilation" condition="true">
      <label language="zh_CN">编制</label>  
      <input name="x" unit="start1"/>  
      <output name="x" unit="examineVerify"/> 
    </business-activity>  
    <business-activity name="examineVerify" condition="true">
      <label language="zh_CN">审核</label>  
      <input name="x" unit="compilation"/>  
      <output name="x" unit="approve"/> 
    </business-activity>  
    <business-activity name="approve" condition="true">
      <label language="zh_CN">批准</label>  
      <input name="x" unit="examineVerify"/>  
      <output name="x" unit="end1"/> 
    </business-activity>  
    <place name="end1">
      <label language="zh_CN">结束</label> 
    </place>  
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
     
  
<start-rule condition="true"><task-relation-value><item relation="sName">schemeTitle()</item>
</task-relation-value>
</start-rule>























































































































































































































































































<has-action action="queryTEST_SCHEME_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="saveTEST_SCHEME_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="createTEST_SCHEME_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="queryAllBusinessActivity2Action" access-permission="public"></has-action>
<has-action action="queryVALID_STATE_CODEAction" access-permission="public"></has-action>
<has-action action="saveVALID_STATE_CODEAction" access-permission="public"></has-action>
<has-action action="createVALID_STATE_CODEAction" access-permission="public"></has-action>
<has-action action="queryDECTION_BASED_ON_ID_CODEAction" access-permission="public"></has-action>
<has-action action="myQuerylist" access-permission="public"></has-action>
<has-action action="queryTEST_CASE_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="saveTEST_CASE_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="createTEST_CASE_BASE_INFOAction" access-permission="public"></has-action>
<has-action action="queryBUSINESS_STAGE_CODEAction" access-permission="public"></has-action>
<has-action action="saveBUSINESS_STAGE_CODEAction" access-permission="public"></has-action>
<has-action action="createBUSINESS_STAGE_CODEAction" access-permission="public"></has-action>
<has-action action="queryDETECTION_OBJECT_TYPEAction" access-permission="public"></has-action>
<has-action action="saveDETECTION_OBJECT_TYPEAction" access-permission="public"></has-action>
<has-action action="createDETECTION_OBJECT_TYPEAction" access-permission="public"></has-action>
<has-action action="queryDEVICE_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="saveDEVICE_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="createDEVICE_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="myQueryTestBaseCaseInfoAction" access-permission="public"></has-action>
<has-action action="queryBUSINESS_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="saveBUSINESS_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="createBUSINESS_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="queryTEST_SCHEME_CASE_INFOAction" access-permission="public"></has-action>
<has-action action="saveTEST_SCHEME_CASE_INFOAction" access-permission="public"></has-action>
<has-action action="createTEST_SCHEME_CASE_INFOAction" access-permission="public"></has-action>
<has-action action="myTestCaseBaseDectionInfoAction" access-permission="public"></has-action>
<has-action action="queryDECTION_BASED_ON_INFOAction" access-permission="public"></has-action>
<has-action action="saveDECTION_BASED_ON_INFOAction" access-permission="public"></has-action>
<has-action action="createDECTION_BASED_ON_INFOAction" access-permission="public"></has-action>
<has-action action="queryRELATIONSHIP_INDEX_AND_CASEAction" access-permission="public"></has-action>
<has-action action="querySubRelationIndexAction" access-permission="public"></has-action>
<has-action action="testSchemeProcessQueryReportAction" access-permission="public"></has-action>
<has-action action="testSchemeProcessQueryAction" access-permission="public"></has-action>

<notice-rule condition="true" dialog-enabled="true" save-enabled="true" task-assign-mode="singleness"><occasion>finishProcess</occasion>
<executor-range range-expr="findActivityCreator('START')" default-expr="findActivityCreator('START')"><kind>PSM</kind>
</executor-range>
<task-relation-value><item relation="sEURL">'/metrodetection/testing_standard/process/testscheme_baseinfo/schemeProcessQueryDetail.w'</item>
<item relation="sExecuteMode2">'finishWhenOpen'</item>
<item relation="sName">concat('通知:',schemeTitle())</item>
</task-relation-value>
</notice-rule>
<static-activity name="schemeProcessQueryDetail"><label language="zh_CN">通知环节</label>
</static-activity>
</process> 
</model>

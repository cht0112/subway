<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="query_sample_device_info" default-value-expr="guid()"> 
    <label language="zh_CN">查询受测样品信息</label>  
    <has-relation relation="contract_code" data-type="String"/>  
    <has-relation relation="project_id" data-type="Integer"/>  
    <has-relation relation="manufacture_id" data-type="Integer"/>  
    <has-relation relation="device_type" data-type="Integer"/>  
    <has-relation relation="device_style" data-type="String"/>  
    <has-relation relation="dection_type" data-type="Integer"/>  
    <has-relation relation="device_id" data-type="String"/>  
    <has-relation relation="software_version" data-type="Integer"/>  
    <has-relation relation="hardware_version" data-type="Integer"/>  
    <has-relation relation="deadline_receive_date" data-type="Date"/>  
    <has-relation relation="indeed_receive_date" data-type="Date"/>  
    <has-relation relation="return_date" data-type="Date"/>  
    <has-relation relation="indeed_return_date" data-type="Date"/>  
    <has-relation relation="shared_flag" data-type="Integer"/>  
    <has-relation relation="memo" data-type="String"/>  
    <has-relation relation="model_name" data-type="String"/>  
    <has-relation relation="model_style" data-type="String"/>  
    <has-relation relation="model_number" data-type="Integer"/>  
    <has-relation relation="device_info_memo" data-type="String"/>  
    <has-relation relation="test_task_id" data-type="String"/>  
    <has-relation relation="occupy_start_date_time" data-type="DateTime"/>  
    <has-relation relation="occupy_end_date_time" data-type="DateTime"/>  
    <has-relation relation="occupy_info_memo" data-type="String"/> 
  </concept>  
  <relation name="contract_code" data-type="String">
    <label language="zh_CN">合同编号</label> 
  </relation>  
  <relation name="project_id" data-type="Integer">
    <label language="zh_CN">项目ID</label> 
  </relation>  
  <relation name="manufacture_id" data-type="Integer">
    <label language="zh_CN">供应商ID</label> 
  </relation>  
  <relation name="device_type" data-type="Integer">
    <label language="zh_CN">检测对象</label> 
  </relation>  
  <relation name="device_style" data-type="String">
    <label language="zh_CN">对象型号</label> 
  </relation>  
  <relation name="dection_type" data-type="Integer">
    <label language="zh_CN">检测类型</label> 
  </relation>  
  <relation name="device_id" data-type="String">
    <label language="zh_CN">设备ID</label> 
  </relation>  
  <relation name="software_version" data-type="Integer">
    <label language="zh_CN">软件版本</label> 
  </relation>  
  <relation name="hardware_version" data-type="Integer">
    <label language="zh_CN">硬件版本</label> 
  </relation>  
  <relation name="deadline_receive_date" data-type="Date">
    <label language="zh_CN">最晚进场日期</label> 
  </relation>  
  <relation name="indeed_receive_date" data-type="Date">
    <label language="zh_CN">实际进场日期</label> 
  </relation>  
  <relation name="return_date" data-type="Date">
    <label language="zh_CN">预计归还日期</label> 
  </relation>  
  <relation name="indeed_return_date" data-type="Date">
    <label language="zh_CN">实际归还日期</label> 
  </relation>  
  <relation name="shared_flag" data-type="Integer">
    <label language="zh_CN">是否允许资源共用</label> 
  </relation>  
  <relation name="memo" data-type="String">
    <label language="zh_CN">备注</label> 
  </relation>  
  <relation name="model_name" data-type="String">
    <label language="zh_CN">模块名称</label> 
  </relation>  
  <relation name="model_style" data-type="String">
    <label language="zh_CN">模块型号</label> 
  </relation>  
  <relation name="model_number" data-type="Integer">
    <label language="zh_CN">模块数量</label> 
  </relation>  
  <relation name="device_info_memo" data-type="String">
    <label language="zh_CN">配置信息备注</label> 
  </relation>  
  <relation name="test_task_id" data-type="String">
    <label language="zh_CN">测试任务ID</label> 
  </relation>  
  <relation name="occupy_start_date_time" data-type="DateTime">
    <label language="zh_CN">计划占用起始日期时间</label> 
  </relation>  
  <relation name="occupy_end_date_time" data-type="DateTime">
    <label language="zh_CN">计划占用结束日期时间</label> 
  </relation>  
  <relation name="occupy_info_memo" data-type="String">
    <label language="zh_CN">占用信息备注</label> 
  </relation> 
</model>

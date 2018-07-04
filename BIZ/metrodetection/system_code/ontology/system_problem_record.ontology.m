<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <concept name="SYSTEM_PROBLEM_RECORD" default-value-expr="nextSeq('20101010')">
    <label language="zh_CN">系统问题记录</label> 
  <has-relation relation="system_problem_no" data-type="Integer"></has-relation>
<has-relation relation="error_date_time" data-type="Date"></has-relation>
<has-relation relation="system_type" data-type="Integer"></has-relation>
<has-relation relation="model_name" data-type="String"></has-relation>
<has-relation relation="error_type" data-type="Integer"></has-relation>
<has-relation relation="dection_object" data-type="Integer"></has-relation>
<has-relation relation="dection_business" data-type="String"></has-relation>
<has-relation relation="error_desc" data-type="String"></has-relation>
<has-relation relation="memo" data-type="String"></has-relation>
<has-relation relation="error_id" data-type="Integer"></has-relation>
</concept> 
<relation name="system_problem_no" data-type="Integer"><label language="zh_CN">检测系统问题序号</label>
</relation>
<relation name="error_date_time" data-type="DateTime"><label language="zh_CN">出错日期时间</label>
</relation>
<relation name="system_type" data-type="Integer"><label language="zh_CN">系统类型</label>
</relation>
<relation name="modelname" data-type="String"><label language="zh_CN">模块名称</label>
</relation>
<relation name="error_type" data-type="Integer"><label language="zh_CN">问题类型</label>
</relation>
<relation name="dection_object" data-type="Integer"><label language="zh_CN">检测对象</label>
</relation>
<relation name="dection_business" data-type="String"><label language="zh_CN">检测业务</label>
</relation>
<relation name="error_desc" data-type="String"><label language="zh_CN">问题描述</label>
</relation>
<relation name="Memo" data-type="String"><label language="zh_CN">备注</label>
</relation>
<relation name="error_id" data-type="String"><label language="zh_CN">解决问题编号</label>
</relation>
</model>

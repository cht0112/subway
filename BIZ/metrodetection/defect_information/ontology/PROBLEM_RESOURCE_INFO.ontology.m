<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="PROBLEM_RESOURCE_INFO" default-value-expr="nextSeq('20101010')"><has-relation relation="MANUFACTURE_ID" size="5" data-type="Integer"><label language="zh_CN">受测厂商</label>
</has-relation>
<has-relation relation="APPLY_FOR_OBJECT" size="5" required="true" data-type="Integer"><label language="zh_CN">应用检测对象类型</label>
</has-relation>
<has-relation relation="APPLY_FOR_DEVICE_TYPE" size="5" required="true" data-type="Integer"><label language="zh_CN">应用检测对象</label>
</has-relation>
<has-relation relation="DEVICE_STYLE" size="200"><label language="zh_CN">对象型号</label>
</has-relation>
<has-relation relation="APPLY_FOR_RANGE" size="5" required="true" data-type="Integer"><label language="zh_CN">应用检测方面类型</label>
</has-relation>
<has-relation relation="APPLY_FOR_SUB_RANGE" size="5" required="true" data-type="Integer"><label language="zh_CN">应用检测方面</label>
</has-relation>
<has-relation relation="HARDWARE_VERSION" size="10" data-type="Integer"><label language="zh_CN">版本信息</label>
</has-relation>
<has-relation relation="PROBLEM_PRIOR" size="5" required="true" data-type="Integer"><label language="zh_CN">问题级别</label>
</has-relation>
<has-relation relation="PROBLEM_TYPE" size="5" required="true" data-type="Integer"><label language="zh_CN">问题类型</label>
</has-relation>
<has-relation relation="PROBLEM_DESC" size="1000" required="true"><label language="zh_CN">问题描述</label>
</has-relation>
<has-relation relation="SOLUTION" size="1000"><label language="zh_CN">解决方案</label>
</has-relation>
<has-relation relation="MEMO" size="1000"><label language="zh_CN">备注</label>
</has-relation>
<label language="zh_CN">受测系统问题资源库</label>
</concept>
<relation name="APPLY_FOR_RANGE" data-type="Decimal"><label language="zh_CN">《数据字典》</label>
</relation>
<relation name="PROBLEM_TYPE" data-type="Decimal"><label language="zh_CN">应用检测方面类型</label>
</relation>
<relation name="PROBLEM_PRIOR" data-type="Decimal"><label language="zh_CN">问题级别</label>
</relation>
<relation name="PROBLEM_DESC" data-type="String"><label language="zh_CN">问题描述</label>
</relation>
<relation name="MANUFACTURE_ID" data-type="Decimal"><label language="zh_CN">受测厂商</label>
</relation>
<relation name="SOLUTION" data-type="String"><label language="zh_CN">解决方案</label>
</relation>
<relation name="APPLY_FOR_SUB_RANGE" data-type="Decimal"><label language="zh_CN">应用检测方面类型</label>
</relation>
<relation name="APPLY_FOR_DEVICE_TYPE" data-type="Decimal"><label language="zh_CN">应用检测对象</label>
</relation>
<relation name="HARDWARE_VERSION" data-type="Decimal"><label language="zh_CN">版本信息</label>
</relation>
<relation name="DEVICE_STYLE" data-type="String"><label language="zh_CN">对象型号</label>
</relation>
<relation name="APPLY_FOR_OBJECT" data-type="Decimal"><label language="zh_CN">应用检测对象类型</label>
</relation>
</model>
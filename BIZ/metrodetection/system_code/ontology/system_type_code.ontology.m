<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="SYSTEM_TYPE_CODE" default-value-expr="nextSeq('20101010')"><label language="zh_CN">系统类型编码</label>
<has-relation relation="sYSTEMTYPECNAME" size="100" required="true"><label language="zh_CN">系统类型</label>
</has-relation>
<has-relation relation="sYSTEMTYPEENAME" size="100"><label language="zh_CN">系统类型编码英文名称</label>
</has-relation>
</concept>
<relation name="sYSTEMTYPECNAME" data-type="String"><label language="zh_CN">中文名称</label>
</relation>
<relation name="sYSTEMTYPEENAME" data-type="String"><label language="zh_CN">英文名称</label>
</relation>
</model>
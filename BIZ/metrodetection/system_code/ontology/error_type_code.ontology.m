<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="ERROR_TYPE_CODE" default-value-expr="guid()"><label language="zh_CN">错误类型编码</label>
<has-relation relation="eRRORTYPECNAME" size="100" required="true"><label language="zh_CN">错误类型</label>
</has-relation>
<has-relation relation="eRRORTYPEENAME" size="100"><label language="zh_CN">错误类型编码英文名称</label>
</has-relation>
</concept>
<relation name="eRRORTYPEENAME" data-type="String"><label language="zh_CN">英文名称</label>
</relation>
<relation name="eRRORTYPECNAME" data-type="String"><label language="zh_CN">中文名称</label>
</relation>
</model>
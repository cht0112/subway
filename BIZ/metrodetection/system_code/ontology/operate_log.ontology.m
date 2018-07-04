<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="OPERATE_LOG" default-value-expr="guid()"><label language="zh_CN">操作日志</label>
<has-relation relation="oPERATORID" size="8" required="true"><label language="zh_CN">操作员编号
</label>
</has-relation>
<has-relation relation="oPERATETYPE" size="5" required="true"><label language="zh_CN">操作类型
</label>
</has-relation>
<has-relation relation="oPERATETIME" required="true"><label language="zh_CN">操作时间
</label>
</has-relation>
<has-relation relation="sYSTEMTYPE" size="3" required="true"><label language="zh_CN">系统类型
</label>
</has-relation>
<has-relation relation="oPERATEDEVICETYPE" size="2"><label language="zh_CN">操作设备类型
</label>
</has-relation>
<has-relation relation="oPERATEDEVICEID" size="8"><label language="zh_CN">操作设备ID
</label>
</has-relation>
<has-relation relation="oPERATECONTENT" size="200" required="true"><label language="zh_CN">操作内容
</label>
</has-relation>
<has-relation relation="oPERATERESULT" size="200"><label language="zh_CN">操作结果
</label>
</has-relation>
<has-relation relation="mEMO" size="200"><label language="zh_CN">备注
</label>
</has-relation>
</concept>
<relation name="mEMO" data-type="String"><label language="zh_CN">备注
</label>
</relation>
<relation name="oPERATORID" data-type="String"><label language="zh_CN">操作员编号
</label>
</relation>
<relation name="oPERATETYPE" data-type="Decimal"><label language="zh_CN">操作类型
</label>
</relation>
<relation name="oPERATETIME" data-type="DateTime"><label language="zh_CN">操作时间
</label>
</relation>
<relation name="oPERATEDEVICEID" data-type="String"><label language="zh_CN">操作设备ID
</label>
</relation>
<relation name="oPERATEDEVICETYPE" data-type="String"><label language="zh_CN">操作设备类型
</label>
</relation>
<relation name="sYSTEMTYPE" data-type="Decimal"><label language="zh_CN">系统类型
</label>
</relation>
<relation name="oPERATERESULT" data-type="String"><label language="zh_CN">操作结果
</label>
</relation>
<relation name="oPERATECONTENT" data-type="String"><label language="zh_CN">操作内容
</label>
</relation>
</model>
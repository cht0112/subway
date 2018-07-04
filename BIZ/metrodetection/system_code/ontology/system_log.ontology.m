<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="SYSTEM_LOG" default-value-expr="guid()"><label language="zh_CN">系统日志</label>
<has-relation relation="oPERATETIME" required="true"><label language="zh_CN">产生时间
</label>
</has-relation>
<has-relation relation="sYSTEMTYPE" size="3" required="true"><label language="zh_CN">系统类型
</label>
</has-relation>
<has-relation relation="sYSTEMSUBTYPE" size="5" required="true"><label language="zh_CN">系统子类型
</label>
</has-relation>
<has-relation relation="dEVICEID" size="50" required="true"><label language="zh_CN">终端设备ID
</label>
</has-relation>
<has-relation relation="aBNORMALCODE" size="50" required="true"><label language="zh_CN">异常编码
</label>
</has-relation>
<has-relation relation="aBNORMALDESC" size="1000" required="true"><label language="zh_CN">异常描述
</label>
</has-relation>
</concept>
<relation name="dEVICEID" data-type="String"><label language="zh_CN">终端设备ID
</label>
</relation>
<relation name="aBNORMALCODE" data-type="String"><label language="zh_CN">异常编码
</label>
</relation>
<relation name="sYSTEMSUBTYPE" data-type="Decimal"><label language="zh_CN">系统子类型
</label>
</relation>
<relation name="aBNORMALDESC" data-type="String"><label language="zh_CN">异常描述
</label>
</relation>
</model>
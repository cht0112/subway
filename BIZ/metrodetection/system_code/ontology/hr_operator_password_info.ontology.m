<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="HR_OPERATOR_PASSWORD_INFO" default-value-expr="guid()"><has-relation relation="FID" size="8"></has-relation>
<has-relation relation="PARENT" size="8"></has-relation>
<has-relation relation="NAME" size="30"></has-relation>
<has-relation relation="FLEVEL" size="1"><label language="zh_CN">FLEVEL</label>
</has-relation>
<has-relation relation="CODE" size="10"><label language="zh_CN">CODE</label>
</has-relation>
</concept>
<relation name="CODE" data-type="String"><label language="zh_CN">CODE</label>
</relation>
<relation name="FLEVEL" data-type="String"><label language="zh_CN">FLEVEL</label>
</relation>
</model>
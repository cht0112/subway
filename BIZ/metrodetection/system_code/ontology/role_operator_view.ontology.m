<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">

<concept name="ROLE_OPERATOR_VIEW" default-value-expr="guid()">
<has-relation relation="fPARENTID" size="22" data-type="String"><label language="zh_CN">父关系</label>
</has-relation>
<has-relation relation="rOLENAME" size="200"></has-relation>
<has-relation relation="uSERNAME" size="30"></has-relation>
<label language="zh_CN">角色分配视图查询项目负责人</label>
</concept>
<relation name="fPARENTID" data-type="Integer"><label language="zh_CN">父关系</label>
</relation>
</model>
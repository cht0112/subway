<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="OPERATOR_PRIVILEGE" default-value-expr="guid()"><label language="zh_CN">用户权限指派</label>
<has-relation relation="oPERATORID" size="8" required="true"><label language="zh_CN">操作员编号
</label>
</has-relation>
<has-relation relation="pRIVILEGEID" size="10" required="true"><label language="zh_CN">权限ID
</label>
</has-relation>
</concept>
</model>
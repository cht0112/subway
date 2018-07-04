<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="PRIVILEGE_TYPE" default-value-expr="guid()"><label language="zh_CN">权限类型表</label>
<has-relation relation="pRIVILEGENAME" size="200" required="true"><label language="zh_CN">权限名称
</label>
</has-relation>
</concept>
<relation name="pRIVILEGENAME" data-type="String"><label language="zh_CN">权限名称
</label>
</relation>
</model>
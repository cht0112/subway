<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="MEMBER_IN_USERGROUP" default-value-expr="guid()"><label language="zh_CN">用户组员信息</label>
<has-relation relation="oPERATORID" size="8" required="true"><label language="zh_CN">用户组编号
</label>
</has-relation>
<has-relation relation="gROUPMEMBERID" size="8" required="true"><label language="zh_CN">用户组员ID
</label>
</has-relation>
</concept>
<relation name="gROUPMEMBERID" data-type="String"><label language="zh_CN">用户组员ID
</label>
</relation>
</model>
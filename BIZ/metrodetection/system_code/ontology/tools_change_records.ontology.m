<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="TOOLS_CHANGE_RECORDS" default-value-expr="guid()"><has-relation relation="CHANGE_MODULAR" size="100" required="true"><label language="zh_CN">变更模块</label>
</has-relation>
<has-relation relation="CHANGE_MODULAR_CONTENT" size="100" required="true"><label language="zh_CN">变更内容</label>
</has-relation>
<has-relation relation="CHANGE_BEFORE_VAL" size="100" required="true"><label language="zh_CN">变更前编码</label>
</has-relation>
<has-relation relation="CHANGE_AFTER_VAL" size="100" required="true"><label language="zh_CN">变更后编码</label>
</has-relation>
<has-relation relation="CHANGE_DATE" required="true" default-value-expr="currentDateTime()"><label language="zh_CN">变更时间</label>
</has-relation>
</concept>
<relation name="CHANGE_MODULAR" data-type="String"><label language="zh_CN">CHANGE_MODULAR</label>
</relation>
<relation name="CHANGE_MODULAR_CONTENT" data-type="String"><label language="zh_CN">CHANGE_MODULAR_CONTENT</label>
</relation>
<relation name="CHANGE_AFTER_VAL" data-type="String"><label language="zh_CN">CHANGE_AFTER_VAL</label>
</relation>
<relation name="CHANGE_BEFORE_VAL" data-type="String"><label language="zh_CN">CHANGE_BEFORE_VAL</label>
</relation>
<relation name="CHANGE_DATE" data-type="DateTime"><label language="zh_CN">CHANGE_DATE</label>
</relation>
</model>
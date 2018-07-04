<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="ME_MyTest" default-value-expr="guid()"><has-relation relation="version" default-value-expr="0"><label language="zh_CN">版本</label>
</has-relation>
<label language="zh_CN">MyTest</label>
<has-relation relation="fName" data-type="String"></has-relation>
<has-relation relation="fAge" data-type="Integer"></has-relation>
</concept>
<relation name="fName" data-type="String"><label language="zh_CN">name</label>
</relation>
<relation name="fAge" data-type="Integer"><label language="zh_CN">age</label>
</relation>
</model>
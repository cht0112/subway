<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="RECEPTION_INFO" default-value-expr="nextSeq('20101010')"><has-relation relation="VISITOR" size="200" required="true"><label language="zh_CN">来访单位名称</label>
</has-relation>
<has-relation relation="VISIT_DATE" required="true" data-type="Date"><label language="zh_CN">参观时间</label>
</has-relation>
<has-relation relation="VISITOR_PERSON" size="22"><label language="zh_CN">访客人数</label>
</has-relation>
<has-relation relation="RECEPT_UNIT" size="200"><label language="zh_CN">接待单位</label>
</has-relation>
<has-relation relation="RECEPT_LEADER" size="50"><label language="zh_CN">接待单位负责人</label>
</has-relation>
<has-relation relation="CONTENT_DESC" size="1000"><label language="zh_CN">行程描述</label>
</has-relation>
<has-relation relation="MEMO" size="1000"><label language="zh_CN">备注</label>
</has-relation>
<label language="zh_CN">接待信息</label>
</concept>
<relation name="MEMO" data-type="String"><label language="zh_CN">备注</label>
</relation>
<relation name="VISITOR" data-type="String"><label language="zh_CN">来访单位名称</label>
</relation>
<relation name="CONTENT_DESC" data-type="String"><label language="zh_CN">行程描述</label>
</relation>
<relation name="VISIT_DATE" data-type="DateTime"><label language="zh_CN">参观时间</label>
</relation>
<relation name="VISITOR_PERSON" data-type="Integer"><label language="zh_CN">访客人数</label>
</relation>
<relation name="RECEPT_LEADER" data-type="String"><label language="zh_CN">接待单位负责人</label>
</relation>
<relation name="RECEPT_UNIT" data-type="String"><label language="zh_CN">接待单位</label>
</relation>
</model>
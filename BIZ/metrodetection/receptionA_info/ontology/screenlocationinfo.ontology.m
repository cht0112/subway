<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="SCREEN_LOCATION_INFO" default-value-expr="nextSeq('20101010')"><has-relation relation="IDENTIFY_CODE" size="50"><label language="zh_CN">屏幕唯一识别ID</label>
</has-relation>
<has-relation relation="SCREEN_LOCALTION" size="50" required="true"><label language="zh_CN">屏幕位置</label>
</has-relation>
<has-relation relation="LOCATION_TYPE" size="22" required="true"><label language="zh_CN">屏幕位置类型</label>
</has-relation>
<has-relation relation="SCREEN_TYPE" size="22" required="true"><label language="zh_CN">屏幕类型</label>
</has-relation>
<has-relation relation="USE_DESC" size="1000"><label language="zh_CN">屏幕用途描述</label>
</has-relation>
<has-relation relation="MEMO" size="1000"></has-relation>
<label language="zh_CN">屏幕位置信息</label>
</concept>
<relation name="USE_DESC" data-type="String"><label language="zh_CN">屏幕用途描述</label>
</relation>
<relation name="SCREEN_TYPE" data-type="Integer"><label language="zh_CN">屏幕类型</label>
</relation>
<relation name="SCREEN_LOCALTION" data-type="String"><label language="zh_CN">屏幕位置</label>
</relation>
<relation name="LOCATION_TYPE" data-type="Integer"><label language="zh_CN">屏幕位置类型</label>
</relation>
<relation name="IDENTIFY_CODE" data-type="String"><label language="zh_CN">屏幕唯一识别ID</label>
</relation>
</model>
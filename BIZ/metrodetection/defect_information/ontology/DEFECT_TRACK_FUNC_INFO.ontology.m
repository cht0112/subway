<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">

<concept name="DEFECT_TRACK_FUNC_INFO" default-value-expr="nextSeq('20191010')"><has-relation relation="MODULE_ID" size="22"><label language="zh_CN">模块ID</label>
</has-relation>
<has-relation relation="FUNC_NAME" size="200" required="true"><label language="zh_CN">功能名称</label>
</has-relation>
<has-relation relation="MEMO" size="1000"><label language="zh_CN">备注</label>
</has-relation>
<label language="zh_CN">缺陷追踪模块功能信息</label>
<has-relation relation="fChildBugFuncID" data-type="DEFECT_TRACK_BUG_INFO" single-valued="false" inverse-of="FUNC_ID" whole-part="composition"></has-relation>
</concept>
<relation name="MODULE_ID" data-type="Integer"><label language="zh_CN">MODULE_ID</label>
</relation>
<relation name="FUNC_NAME" data-type="String"><label language="zh_CN">FUNC_NAME</label>
</relation>
<relation name="fChildBugFuncID" data-type="DEFECT_TRACK_BUG_INFO" single-valued="false" inverse-of="FUNC_ID"><label language="zh_CN">ChildBugFuncID</label>
</relation>
</model>
<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="TEST_CASE_TOOL_INFO" default-value-expr="guid()"><label language="zh_CN">测试用例检测工具信息</label>
<has-relation relation="tESTCASEVER" size="22" required="true"><label language="zh_CN">测试用例版本
</label>
</has-relation>
<has-relation relation="tESTCASEID" size="16" required="true"><label language="zh_CN">测试用例ID
</label>
</has-relation>
<has-relation relation="tOOLTYPEID" size="5" required="true"><label language="zh_CN">工具类型，参见《tool_relationship(工具分类映射)》
</label>
</has-relation>
<has-relation relation="tOOLMODEL" size="200" required="true"><label language="zh_CN">工具型号
</label>
</has-relation>
<has-relation relation="tOOLSTANDARDS" size="200" required="true"><label language="zh_CN">工具规格
</label>
</has-relation>
<has-relation relation="tOOLNUMBER" size="3" required="true"><label language="zh_CN">工具数量
</label>
</has-relation>
</concept>
<relation name="tOOLMODEL" data-type="String"><label language="zh_CN">工具型号
</label>
</relation>
<relation name="tOOLSTANDARDS" data-type="String"><label language="zh_CN">工具规格
</label>
</relation>
<relation name="tOOLTYPEID" data-type="Decimal"><label language="zh_CN">工具类型，参见《tool_relationship(工具分类映射)》
</label>
</relation>
<relation name="tOOLNUMBER" data-type="Decimal"><label language="zh_CN">工具数量
</label>
</relation>
</model>
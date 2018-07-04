<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="SUB_TEST_CASE_STEP_INFO" default-value-expr="guid()"><label language="zh_CN">测试子用例步骤信息</label>
<has-relation relation="tESTCASEVER" size="22" required="true"><label language="zh_CN">测试用例版本
</label>
</has-relation>
<has-relation relation="tESTCASEID" size="16" required="true"><label language="zh_CN">测试用例ID
</label>
</has-relation>
<has-relation relation="sUBTESTCASEID" size="20" required="true"><label language="zh_CN">测试子用例ID
</label>
</has-relation>
<has-relation relation="sUBTESTCASESTEPID" size="5" required="true"><label language="zh_CN">测试子用例步骤ID
</label>
</has-relation>
<has-relation relation="sUBTESTCASESTEPDESC" size="1000" required="true"><label language="zh_CN">测试子用例步骤描述
</label>
</has-relation>
<has-relation relation="sUBTESTCASESTEPPRIOR" size="5" required="true"><label language="zh_CN">测试子用例步骤级别
</label>
</has-relation>
</concept>
<relation name="sUBTESTCASESTEPPRIOR" data-type="Decimal"><label language="zh_CN">测试子用例步骤级别
</label>
</relation>
<relation name="sUBTESTCASEID" data-type="String"><label language="zh_CN">测试子用例ID
</label>
</relation>
<relation name="tESTCASEID" data-type="String"><label language="zh_CN">测试用例ID
</label>
</relation>
<relation name="tESTCASEVER" data-type="Integer"><label language="zh_CN">测试用例版本
</label>
</relation>
<relation name="sUBTESTCASESTEPDESC" data-type="String"><label language="zh_CN">测试子用例步骤描述
</label>
</relation>
<relation name="sUBTESTCASESTEPID" data-type="Decimal"><label language="zh_CN">测试子用例步骤ID
</label>
</relation>
</model>
<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="SUB_TEST_CASE_DATA_INFO" default-value-expr="guid()"><label language="zh_CN">测试子用例数据准备信息
sub_test_case_step_send_flag:1、执行产生；2、提前产生</label>
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
<has-relation relation="sUBTESTCASESTEPSENDFLAG" size="3" required="true"><label language="zh_CN">测试子用例数据发送方式，1、执行产生；2、提前产生
</label>
</has-relation>
<has-relation relation="sUBTESTCASESTEPDATANUMBER" size="10" required="true"><label language="zh_CN">测试子用例数据数量
</label>
</has-relation>
</concept>
<relation name="sUBTESTCASESTEPSENDFLAG" data-type="Decimal"><label language="zh_CN">测试子用例数据发送方式，1、执行产生；2、提前产生
</label>
</relation>
<relation name="sUBTESTCASESTEPDATANUMBER" data-type="Decimal"><label language="zh_CN">测试子用例数据数量
</label>
</relation>
</model>
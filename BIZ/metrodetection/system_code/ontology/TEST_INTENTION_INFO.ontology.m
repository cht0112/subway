<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="TEST_INTENTION_INFO" default-value-expr="nextSeq('20110')"><label language="zh_CN">合约意向信息</label>
<has-relation relation="APPLICATION_NONO" size="10" required="true"></has-relation>
<has-relation relation="MANUFACTURE_IDID" size="5" required="true"></has-relation>
<has-relation relation="EXPECT_ENDING_DATEENDINGDATE" required="true" data-type="Date"><label language="zh_CN">预期完成日期</label>
</has-relation>
<has-relation relation="INTENTION_DESCDESC" size="1000" required="true"><label language="zh_CN">合同内容简介</label>
</has-relation>
<has-relation relation="MEMO" size="1000"></has-relation>
</concept>
<relation name="INTENTION_DESCDESC" data-type="String"><label language="zh_CN">合同内容简介</label>
</relation>
<relation name="APPLICATION_NONO" data-type="Decimal"><label language="zh_CN">APPLICATION_NONO</label>
</relation>
<relation name="MANUFACTURE_IDID" data-type="Decimal"><label language="zh_CN">MANUFACTURE_IDID</label>
</relation>
<relation name="EXPECT_ENDING_DATEENDINGDATE" data-type="DateTime"><label language="zh_CN">预期完成日期</label>
</relation>
</model>
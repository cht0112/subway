<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">





















<concept name="TEST_CASE_ROLLBACK_RECORD" default-value-expr="nextSeq('2010')"><has-relation relation="AUTHORIZER_ID" size="8" required="true"><label language="zh_CN">AUTHORIZER_ID</label>
</has-relation>
<has-relation relation="OPERATOR_ID" size="8" required="true"></has-relation>
<has-relation relation="ROLLBACK_DESC" size="200"><label language="zh_CN">ROLLBACK_DESC</label>
</has-relation>
<has-relation relation="PROJECT_ID" required="true"></has-relation>
<has-relation relation="TASK_ID" required="true"><label language="zh_CN">TASK_ID</label>
</has-relation>
<has-relation relation="TEST_CASE_ID" size="16" required="true"><label language="zh_CN">TEST_CASE_ID</label>
</has-relation>
<has-relation relation="ROLLBACK_TIME" required="true"><label language="zh_CN">ROLLBACK_TIME</label>
</has-relation>
<has-relation relation="TIMES"><label language="zh_CN">TIMES</label>
</has-relation>
</concept>
<relation name="AUTHORIZER_ID" data-type="String"><label language="zh_CN">AUTHORIZER_ID</label>
</relation>
<relation name="TIMES" data-type="Integer"><label language="zh_CN">TIMES</label>
</relation>
<relation name="OPERATOR_ID" data-type="String"><label language="zh_CN">OPERATOR_ID</label>
</relation>
<relation name="PROJECT_ID" data-type="Integer"><label language="zh_CN">PROJECT_ID</label>
</relation>
<relation name="TASK_ID" data-type="Integer"><label language="zh_CN">TASK_ID</label>
</relation>
<relation name="ROLLBACK_TIME" data-type="DateTime"><label language="zh_CN">ROLLBACK_TIME</label>
</relation>
<relation name="TEST_CASE_ID" data-type="String"><label language="zh_CN">TEST_CASE_ID</label>
</relation>
<relation name="ROLLBACK_DESC" data-type="String"><label language="zh_CN">ROLLBACK_DESC</label>
</relation>
</model>
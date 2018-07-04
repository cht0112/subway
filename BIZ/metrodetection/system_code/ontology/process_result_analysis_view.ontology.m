<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
   
<concept name="PROCESS_RESULT_ANALYSIS_VIEW" default-value-expr="guid()"><has-relation relation="FID" size="136"></has-relation>
<has-relation relation="PROJECT_IDID" size="22" required="true"></has-relation>
<has-relation relation="TASK_IDID" size="10" required="true"><label language="zh_CN">TASK_IDID</label>
</has-relation>
<has-relation relation="TEST_CASE_VERCASEVER" size="10" required="true"><label language="zh_CN">TEST_CASE_VERCASEVER</label>
</has-relation>
<has-relation relation="TEST_CASE_IDCASEID" size="16" required="true"><label language="zh_CN">TEST_CASE_IDCASEID</label>
</has-relation>
<has-relation relation="SUBCOUNT" size="22"><label language="zh_CN">SUBCOUNT</label>
</has-relation>
<has-relation relation="TESTCASETIMETOTAL" size="22"><label language="zh_CN">TESTCASETIMETOTAL</label>
</has-relation>
<has-relation relation="ACTUALSUBTOTAL" size="22"><label language="zh_CN">ACTUALSUBTOTAL</label>
</has-relation>
<has-relation relation="SUCCSESSCOUNT" size="22"><label language="zh_CN">SUCCSESSCOUNT</label>
</has-relation>
<has-relation relation="FAILDCOUNT" size="22"><label language="zh_CN">FAILDCOUNT</label>
</has-relation>
</concept>
<relation name="TESTCASETIMETOTAL" data-type="Integer"><label language="zh_CN">TESTCASETIMETOTAL</label>
</relation>
<relation name="FAILDCOUNT" data-type="Integer"><label language="zh_CN">FAILDCOUNT</label>
</relation>
<relation name="TEST_CASE_IDCASEID" data-type="String"><label language="zh_CN">TEST_CASE_IDCASEID</label>
</relation>
<relation name="TEST_CASE_VERCASEVER" data-type="Decimal"><label language="zh_CN">TEST_CASE_VERCASEVER</label>
</relation>
<relation name="TASK_IDID" data-type="Decimal"><label language="zh_CN">TASK_IDID</label>
</relation>
<relation name="SUBCOUNT" data-type="Integer"><label language="zh_CN">SUBCOUNT</label>
</relation>
<relation name="SUCCSESSCOUNT" data-type="Integer"><label language="zh_CN">SUCCSESSCOUNT</label>
</relation>
<relation name="ACTUALSUBTOTAL" data-type="Integer"><label language="zh_CN">ACTUALSUBTOTAL</label>
</relation>
</model>

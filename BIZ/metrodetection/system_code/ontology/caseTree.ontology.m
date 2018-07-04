<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">

<relation name="CASEVERSION" data-type="Integer"><label language="zh_CN">CASEVERSION</label>
</relation>
<relation name="SHIJIAN" data-type="Integer"><label language="zh_CN">SHIJIAN</label>
</relation>
<relation name="TOOLNAME" data-type="String"><label language="zh_CN">TOOLNAME</label>
</relation>
<relation name="ROOMNAME" data-type="String"><label language="zh_CN">ROOMNAME</label>
</relation>
<relation name="OPERATORNAME" data-type="String"><label language="zh_CN">OPERATORNAME</label>
</relation>
<relation name="ENDTIME" data-type="String"><label language="zh_CN">ENDTIME</label>
</relation>
<relation name="STARTTIME" data-type="String"><label language="zh_CN">STARTTIME</label>
</relation>
<relation name="QZRW" data-type="String"><label language="zh_CN">QZRW</label>
</relation>
<relation name="TESTCASENAME" data-type="String"><label language="zh_CN">TESTCASENAME</label>
</relation>
<concept name="CASE_TREE" default-value-expr="guid()"><has-relation relation="FID" size="40"></has-relation>
<has-relation relation="FPARENTID" size="40" data-type="String"></has-relation>
<has-relation relation="TESTCASENAME" size="200"></has-relation>
<has-relation relation="SHIJIAN" size="22"></has-relation>
<has-relation relation="STARTTIME"></has-relation>
<has-relation relation="ENDTIME"></has-relation>
<has-relation relation="QZRW"></has-relation>
<has-relation relation="OPERATORNAME"></has-relation>
<has-relation relation="ROOMNAME"></has-relation>
<has-relation relation="TOOLNAME"></has-relation>
<has-relation relation="CASEID" size="16"><label language="zh_CN">CASEID</label>
</has-relation>
<has-relation relation="CASEVERSION" size="22"></has-relation>
</concept>
<relation name="CASEID" data-type="String"><label language="zh_CN">CASEID</label>
</relation>


<relation name="cASEID" data-type="String"><label language="zh_CN">cASEID</label>
</relation>
<concept name="CASE_TREE_NEW" default-value-expr="guid()"><has-relation relation="fID" size="57"></has-relation>
<has-relation relation="fPARENTID" size="57" data-type="String"></has-relation>
<has-relation relation="tESTCASENAME" size="200"></has-relation>
<has-relation relation="sHIJIAN" size="22"></has-relation>
<has-relation relation="sTARTTIME"></has-relation>
<has-relation relation="eNDTIME"></has-relation>
<has-relation relation="qZRW"></has-relation>
<has-relation relation="oPERATORNAME"></has-relation>
<has-relation relation="rOOMNAME"></has-relation>
<has-relation relation="tOOLNAME"></has-relation>
<has-relation relation="cASEID" size="16"></has-relation>
<has-relation relation="cASEVERSION" size="22"></has-relation>
<has-relation relation="tREESN" size="22"><label language="zh_CN">tREESN</label>
</has-relation>
</concept>
<relation name="tREESN" data-type="Integer"><label language="zh_CN">tREESN</label>
</relation>
<concept name="CASE_TREE_NEW_V" default-value-expr="guid()"><has-relation relation="fID" size="61"></has-relation>
<has-relation relation="fPARENTID" size="61" data-type="String"></has-relation>
<has-relation relation="tESTCASENAME" size="200"></has-relation>
<has-relation relation="sHIJIAN" size="22"></has-relation>
<has-relation relation="sTARTTIME"></has-relation>
<has-relation relation="eNDTIME"></has-relation>
<has-relation relation="qZRW"></has-relation>
<has-relation relation="oPERATORNAME"></has-relation>
<has-relation relation="rOOMNAME"></has-relation>
<has-relation relation="tOOLNAME"></has-relation>
<has-relation relation="cASEID" size="16"></has-relation>
<has-relation relation="cASEVERSION" size="22"></has-relation>
<has-relation relation="tREESN" size="22"></has-relation>
</concept>

<relation name="TREESN" data-type="Integer"><label language="zh_CN">TREESN</label>
</relation>
<concept name="CASE_TREE_NEW_OBJ" default-value-expr="guid()"><has-relation relation="fID" size="81"></has-relation>
<has-relation relation="fPARENTID" size="81"></has-relation>
<has-relation relation="tESTCASENAME" size="200"></has-relation>
<has-relation relation="sHIJIAN" size="22"></has-relation>
<has-relation relation="sTARTTIME"></has-relation>
<has-relation relation="eNDTIME"></has-relation>
<has-relation relation="qZRW"></has-relation>
<has-relation relation="oPERATORNAME"></has-relation>
<has-relation relation="rOOMNAME"></has-relation>
<has-relation relation="tOOLNAME"></has-relation>
<has-relation relation="cASEID" size="16"></has-relation>
<has-relation relation="cASEVERSION" size="22"></has-relation>
<has-relation relation="tREESN" size="22"></has-relation>
</concept>
<concept name="CASE_TREE_NEW_OBJ_V" default-value-expr="guid()"><has-relation relation="fID" size="81"></has-relation>
<has-relation relation="fPARENTID" size="81"></has-relation>
<has-relation relation="tESTCASENAME" size="200"></has-relation>
<has-relation relation="sHIJIAN" size="22"></has-relation>
<has-relation relation="sTARTTIME"></has-relation>
<has-relation relation="eNDTIME"></has-relation>
<has-relation relation="qZRW"></has-relation>
<has-relation relation="oPERATORNAME"></has-relation>
<has-relation relation="rOOMNAME"></has-relation>
<has-relation relation="tOOLNAME"></has-relation>
<has-relation relation="cASEID" size="16"></has-relation>
<has-relation relation="cASEVERSION" size="22"></has-relation>
<has-relation relation="tREESN" size="22"></has-relation>
</concept>
</model>
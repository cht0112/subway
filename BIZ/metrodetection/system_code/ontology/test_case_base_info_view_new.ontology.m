<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">

<relation name="fPARENTID" data-type="String"><label language="zh_CN">父关系</label>
</relation>
<relation name="fID" data-type="String"><label language="zh_CN">fid</label>
</relation>

<relation name="cASETIME" data-type="Integer"><label language="zh_CN"></label>
</relation>

<relation name="sTARTTIME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="eNDTIME" data-type="String"><label language="zh_CN"></label>
</relation>

<relation name="tOOLNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="rOOMNAME" data-type="String"><label language="zh_CN"></label>
</relation>

<relation name="tOOLNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="rOOMNAME" data-type="String"><label language="zh_CN"></label>
</relation>
<relation name="qZRW" data-type="String"><label language="zh_CN"></label>
</relation>

<relation name="sHIJIAN" data-type="Integer"><label language="zh_CN"></label>
</relation>






<concept name="TEST_CASE_BASE_INFO_VIEW_NEW" default-value-expr="guid()"><has-relation relation="fID" size="20"></has-relation>
<has-relation relation="fPARENTID" size="16"></has-relation>
<has-relation relation="tESTCASENAME" size="200"></has-relation>
<has-relation relation="sHIJIAN" size="22"><label language="zh_CN">耗时</label>
</has-relation>
<has-relation relation="sTARTTIME"><label language="zh_CN">开始时间</label>
</has-relation>
<has-relation relation="eNDTIME"><label language="zh_CN">结束时间</label>
</has-relation>
<has-relation relation="qZRW"><label language="zh_CN">前置任务</label>
</has-relation>
<has-relation relation="oPERATORNAME"></has-relation>
<has-relation relation="rOOMNAME"></has-relation>
<has-relation relation="tOOLNAME"></has-relation>
</concept>
</model>
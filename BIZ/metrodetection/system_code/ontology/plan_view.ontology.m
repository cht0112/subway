<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">


<relation name="cASEVERSION" data-type="Integer"><label language="zh_CN">cASEVERSION</label>
</relation>

<relation name="rANGENAME" data-type="String"><label language="zh_CN">rANGENAME</label>
</relation>
<relation name="tASKID" data-type="Integer"><label language="zh_CN">tASKID</label>
</relation>
<relation name="dETOBJNAME" data-type="String"><label language="zh_CN">dETOBJNAME</label>
</relation>

<concept name="PLAN_VIEW" default-value-expr="guid()"><has-relation relation="fID" size="57"></has-relation>
<has-relation relation="fPARENTID" size="57" data-type="String"></has-relation>
<has-relation relation="tESTCASENAME" size="200"></has-relation>
<has-relation relation="sHIJIAN" size="10" data-type="Decimal" scale="3"><label language="zh_CN">耗时</label>
</has-relation>
<has-relation relation="sTARTTIME"><label language="zh_CN">开始时间</label>
</has-relation>
<has-relation relation="eNDTIME"><label language="zh_CN">结束时间</label>
</has-relation>
<has-relation relation="qZRW"><label language="zh_CN">前置任务</label>
</has-relation>
<has-relation relation="oPERATORNAME"></has-relation>
<has-relation relation="rOOMNAME"><label language="zh_CN">房间</label>
</has-relation>
<has-relation relation="tOOLNAME"><label language="zh_CN">工具</label>
</has-relation>
<has-relation relation="cASEID" size="16"><label language="zh_CN">用例id</label>
</has-relation>
<has-relation relation="cASEVERSION" size="22"><label language="zh_CN">用例版本</label>
</has-relation>
<has-relation relation="rANGENAME" size="100"><label language="zh_CN">检测方面</label>
</has-relation>
<has-relation relation="tASKID"><label language="zh_CN">检测任务</label>
</has-relation>
<has-relation relation="dETOBJNAME" size="100"><label language="zh_CN">检测对象</label>
</has-relation>
</concept>
</model>
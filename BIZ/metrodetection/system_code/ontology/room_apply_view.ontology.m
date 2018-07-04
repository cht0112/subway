<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">








<relation name="FID" data-type="String"><label language="zh_CN">FID</label>
</relation>
<relation name="AREA" data-type="String"><label language="zh_CN">AREA</label>
</relation>
<relation name="PARENTID" data-type="String"><label language="zh_CN">PARENTID</label>
</relation>


<relation name="ROOMID" data-type="Integer"><label language="zh_CN">ROOMID</label>
</relation>
<concept name="ROOM_APPLY_INFO_VIEW" default-value-expr="guid()"><has-relation relation="FID" size="242"></has-relation>
<has-relation relation="PARENTID" size="242"></has-relation>
<has-relation relation="AREA" size="200"></has-relation>
<has-relation relation="ROOMID" size="22"></has-relation>
<has-relation relation="AREAID" size="100"><label language="zh_CN">AREAID</label>
</has-relation>
</concept>
<relation name="AREAID" data-type="String"><label language="zh_CN">AREAID</label>
</relation>
</model>
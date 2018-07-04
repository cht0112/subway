<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">



<concept name="DEFECT_STATUS_CODE"><label language="zh_CN">缺陷状态编码</label>
<has-relation relation="DEFECT_STATUS_CNAME" size="100" required="true"><label language="zh_CN">缺陷状态</label>
</has-relation>
<has-relation relation="DEFECT_STATUS_ENAME" size="100"><label language="zh_CN">缺陷状态英文名称</label>
</has-relation>
</concept>
<relation name="DEFECT_STATUS_CNAME" data-type="String"><label language="zh_CN">缺陷状态中文名称</label>
</relation>
<relation name="DEFECT_STATUS_ENAME" data-type="String"><label language="zh_CN">缺陷状态英文名称</label>
</relation>
</model>
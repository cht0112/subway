<?xml version="1.0" encoding="UTF-8"?>
<model xmlns="http://www.justep.com/model">
<concept name="DEFECT_TRACK_BUG_INFO" default-value-expr="nextSeq('20101010')"><has-relation relation="VERSION_ID" size="22"><label language="zh_CN">版本ID</label>
</has-relation>
<has-relation relation="FUNC_ID" size="22"><label language="zh_CN">功能ID</label>
</has-relation>
<has-relation relation="PLATFORM_INFO" size="200"><label language="zh_CN">平台及操作系统</label>
</has-relation>
<has-relation relation="PRIORITY" size="3" required="true" default-value-expr="1"><label language="zh_CN">缺陷类型</label>
</has-relation>
<has-relation relation="SEVERITY" size="3" required="true" default-value-expr="3"><label language="zh_CN">缺陷等级</label>
</has-relation>
<has-relation relation="ASSIGN_PERSON" size="8" required="true"><label language="zh_CN">分配给谁</label>
</has-relation>
<has-relation relation="CC_PERSON" size="8"><label language="zh_CN">抄送给谁</label>
</has-relation>
<has-relation relation="DEFECT_DESC" size="200" required="true"><label language="zh_CN">缺陷描述</label>
</has-relation>
<has-relation relation="DEFECT_DETAIL" size="2000"><label language="zh_CN">缺陷详细</label>
</has-relation>
<has-relation relation="DEFECT_REASON" size="1000"><label language="zh_CN">缺陷原因</label>
</has-relation>
<has-relation relation="DEFECT_SOLUTION" size="1000"><label language="zh_CN">缺陷解决过程</label>
</has-relation>
<has-relation relation="DEFECT_STATUS" size="3" required="true" default-value-expr="1"><label language="zh_CN">缺陷状态</label>
</has-relation>
<has-relation relation="CREATOR" size="8" required="true"><label language="zh_CN">缺陷提出人</label>
</has-relation>
<has-relation relation="CREATE_DATE" required="true" default-value-expr="currentDate()"><label language="zh_CN">缺陷提出日期</label>
</has-relation>
<has-relation relation="REVIEW_COMMENT" size="1000"><label language="zh_CN">缺陷评审意见</label>
</has-relation>
<has-relation relation="REVIEWER" size="8"><label language="zh_CN">缺陷评审人</label>
</has-relation>
<has-relation relation="REVIEW_DATE" data-type="Date"><label language="zh_CN">缺陷评审日期</label>
</has-relation>
<has-relation relation="MEMO" size="1000"><label language="zh_CN">备注</label>
</has-relation>
<label language="zh_CN">缺陷跟踪BUG信息</label>
</concept>
<relation name="REVIEW_DATE" data-type="Date"><label language="zh_CN">缺陷评审日期</label>
</relation>
<relation name="FUNC_ID" data-type="Integer"><label language="zh_CN">功能ID</label>
</relation>
<relation name="ASSIGN_PERSON" data-type="String"><label language="zh_CN">分配给谁</label>
</relation>
<relation name="DEFECT_STATUS" data-type="Integer"><label language="zh_CN">缺陷状态</label>
</relation>
<relation name="REVIEW_COMMENT" data-type="String"><label language="zh_CN">缺陷评审意见</label>
</relation>
<relation name="PRIORITY" data-type="Integer"><label language="zh_CN">缺陷类型</label>
</relation>
<relation name="CREATOR" data-type="String"><label language="zh_CN">缺陷提出人</label>
</relation>
<relation name="CREATE_DATE" data-type="Date"><label language="zh_CN">缺陷提出日期</label>
</relation>
<relation name="PLATFORM_INFO" data-type="String"><label language="zh_CN">平台及操作系统</label>
</relation>
<relation name="DEFECT_DESC" data-type="String"><label language="zh_CN">缺陷描述</label>
</relation>
<relation name="DEFECT_REASON" data-type="String"><label language="zh_CN">缺陷原因</label>
</relation>
<relation name="VERSION_ID" data-type="Integer"><label language="zh_CN">版本ID</label>
</relation>
<relation name="REVIEWER" data-type="String"><label language="zh_CN">缺陷评审人</label>
</relation>
<relation name="CC_PERSON" data-type="String"><label language="zh_CN">抄送给谁</label>
</relation>
<relation name="DEFECT_SOLUTION" data-type="String"><label language="zh_CN">缺陷解决过程</label>
</relation>
<relation name="SEVERITY" data-type="Integer"><label language="zh_CN">缺陷等级</label>
</relation>
<relation name="DEFECT_DETAIL" data-type="String"><label language="zh_CN">缺陷详细</label>
</relation>
</model>
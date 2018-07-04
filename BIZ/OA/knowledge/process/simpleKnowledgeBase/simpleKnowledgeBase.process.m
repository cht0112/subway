<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="simpleKnowledgeBaseProcess" kind="SYSTEM">
    <label language="zh_CN">简版知识库</label>
    
    
    
    
    
    
    
    <static-activity name="baseKWBaseActivity">
      <label language="zh_CN">知识查看</label>
    </static-activity>
    <static-activity name="newsBaseActivity">
      <label language="zh_CN">新闻查看</label>
    </static-activity>
    <static-activity name="noticeBaseActivity">
      <label language="zh_CN">公告查看</label>
    </static-activity>
    <static-activity name="docBaseActivity">
      <label language="zh_CN">文件查看</label>
    </static-activity>
    <static-activity name="ruleBaseActivity">
      <label language="zh_CN">规章制度查看</label>
    </static-activity>
    <static-activity name="rcNoticeBaseActivity">
      <label language="zh_CN">日常通知查看</label>
    </static-activity>
    <static-activity name="leaderBaseActivity">
      <label language="zh_CN">领导参考查看</label>
    </static-activity>
    <static-activity name="officeBaseActivity">
      <label language="zh_CN">行政办公查看</label>
    </static-activity>
    <static-activity name="dwBaseActivity">
      <label language="zh_CN">党委查看</label>
    </static-activity>
    <static-activity name="zzrsBaseActivity">
      <label language="zh_CN">组织人事</label>
    </static-activity>
    <static-activity name="scbBaseActivity">
      <label language="zh_CN">市场部</label>
    </static-activity>
    <static-activity name="kjbBaseActivity">
      <label language="zh_CN">科技部</label>
    </static-activity>
    <static-activity name="jsbBaseActivity">
      <label language="zh_CN">建设部</label>
    </static-activity>
    <static-activity name="aqbBaseActivity">
      <label language="zh_CN">安全部</label>
    </static-activity>
    <static-activity name="lzjyBaseActivity">
      <label language="zh_CN">廉政教育</label>
    </static-activity>
    <static-activity name="shenjiBaseActivity">
      <label language="zh_CN">审计</label>
    </static-activity>
    <static-activity name="caiwuBaseActivity">
      <label language="zh_CN">财务</label>
    </static-activity>
    <static-activity name="fawuBaseActivity">
      <label language="zh_CN">法务</label>
    </static-activity>
    <static-activity name="touziBaseActivity">
      <label language="zh_CN">投资</label>
    </static-activity>
    <static-activity name="gonghuiBaseActivity">
      <label language="zh_CN">工会</label>
    </static-activity>
    <static-activity name="tuanweiBaseActivity">
      <label language="zh_CN">团委</label>
    </static-activity>
    <static-activity name="haiwaiBaseActivity">
      <label language="zh_CN">海外</label>
    </static-activity>
    <static-activity name="cjxxBaseActivity">
      <label language="zh_CN">城建信息</label>
    </static-activity>
    <static-activity name="ldjhBaseActivity">
      <label language="zh_CN">领导讲话</label>
    </static-activity>
    <static-activity name="shhgzBaseActivity">
      <label language="zh_CN">上海国资</label>
    </static-activity>
    <static-activity name="hynewsBaseActivity">
      <label language="zh_CN">行业新闻</label>
    </static-activity>
    <static-activity name="ztbdBaseActivity">
      <label language="zh_CN">专题报道</label>
    </static-activity>
    <static-activity name="zhnewsBaseActivity">
      <label language="zh_CN">综合新闻</label>
    </static-activity>
    <static-activity name="jtgsBaseActivity">
      <label language="zh_CN">集团公示</label>
    </static-activity>
    <static-activity name="rctgsBaseActivity">
      <label language="zh_CN">日常通告</label>
    </static-activity>
    <static-activity name="rlzzrsBaseActivity">
      <label language="zh_CN">人力组织人事</label>
    </static-activity>
    <static-activity name="jtggBaseActivity">
      <label language="zh_CN">集团公告</label>
    </static-activity>
    <static-activity name="itnoticeBaseActivity">
      <label language="zh_CN">IT公告</label>
    </static-activity>
    <static-activity name="gzzdBaseActivity">
      <label language="zh_CN">规则制度</label>
    </static-activity>
  <has-action action="getDirectSubFoldersAction" access-permission="public"></has-action>
<has-action action="queryKMKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryKMREADERSAction" access-permission="public"></has-action>
<has-action action="getNoReadersAction" access-permission="public"></has-action>
<has-action action="getNoReaderCountAction" access-permission="public"></has-action>
<has-action action="insertReadersAction" access-permission="public"></has-action>
<has-action action="addKnowledgeGZAction" access-permission="public"></has-action>
</process>
</model>

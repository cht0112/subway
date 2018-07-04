<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS knowledgePortletProcess
	(KIND "SYSTEM")
	(LABEL "知识中心 Portlet" "zh_CN")
	(HAS-ACTION getPortletDataAction "/OA/knowledge/data")
	
	(HAS-ACTION queryKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKMREADERSAction "/OA/knowledge/data")
	(HAS-ACTION getNoReadersAction "/OA/knowledge/data")
	(HAS-ACTION getNoReaderCountAction "/OA/knowledge/data")
	(HAS-ACTION insertReadersAction "/OA/knowledge/data")
	
	(DEFACTIVITY-STATIC textPortletActivity
		(LABEL "文字 portlet" "zh_CN"))
	(DEFACTIVITY-STATIC textAndPicPortletActivity
		(LABEL "图片+文字 portlet" "zh_CN"))
)-->
  <process name="knowledgePortletProcess" kind="SYSTEM">
    <label language="zh_CN">知识中心 Portlet</label>
    
    
    
    
    
    
    
    <static-activity name="textPortletActivity">
      <label language="zh_CN">文字 portlet</label>
    </static-activity>
    <static-activity name="textAndPicPortletActivity">
      <label language="zh_CN">图片+文字 portlet</label>
    </static-activity>
    <static-activity name="textMorePortletActivity">
      <label language="zh_CN">文字 more portlet</label>
    </static-activity>
  
















<has-action action="getPortletDataAction" access-permission="public"></has-action>
<has-action action="queryKMKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryKMREADERSAction" access-permission="public"></has-action>
<has-action action="getNoReadersAction" access-permission="public"></has-action>
<has-action action="getNoReaderCountAction" access-permission="public"></has-action>
<has-action action="insertReadersAction" access-permission="public"></has-action>
<has-action action="getFolderDataAction" access-permission="public"></has-action>
<has-action action="getDirectSubFoldersAction" access-permission="public"></has-action>
<has-action action="addKnowledgeGZAction" access-permission="public"></has-action>
</process>
</model>

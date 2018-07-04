<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS knowledgeBaseProcess
	(FLOW FALSE)
	(LABEL "知识库" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/knowledge/data")
	(HAS-ACTION getDirectSubFoldersAction "/OA/knowledge/data")
	(HAS-ACTION queryKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKMREADERSAction "/OA/knowledge/data")
	
	(HAS-ACTION getNoReadersAction "/OA/knowledge/data")
	(HAS-ACTION getNoReaderCountAction "/OA/knowledge/data")
	(HAS-ACTION insertReadersAction "/OA/knowledge/data")
	
	(DEFACTIVITY-STATIC knowledgeBaseActivity
		(LABEL "知识库" "zh_CN")
	)
	
	(DEFACTIVITY-STATIC kwBaseWithOrgActivity
		(LABEL "知识库" "zh_CN")
	)
)-->
  <process name="knowledgeBaseProcess">
    <label language="zh_CN">知识库</label>
    
    
    
    
    
    
    
    <static-activity name="knowledgeBaseActivity">
      <label language="zh_CN">知识库</label>
    </static-activity>
    <static-activity name="kwBaseWithOrgActivity">
      <label language="zh_CN">知识库</label>
    </static-activity>
  








<has-action action="getDirectSubFoldersAction" access-permission="public"></has-action>
<has-action action="queryKMKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryKMREADERSAction" access-permission="public"></has-action>
<has-action action="getNoReadersAction" access-permission="public"></has-action>
<has-action action="getNoReaderCountAction" access-permission="public"></has-action>
<has-action action="insertReadersAction" access-permission="public"></has-action>
<has-action action="addKnowledgeGZAction" access-permission="public"></has-action>
<has-action action="cancelKnowledgeGZAction" access-permission="public"></has-action>
</process>
</model>

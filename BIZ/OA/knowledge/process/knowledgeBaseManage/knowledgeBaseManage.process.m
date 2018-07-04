<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS knowledgeBaseManageProcess
	(FLOW FALSE)
	(LABEL "知识库管理" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/knowledge/data")
	(HAS-ACTION createKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION saveKMKnowledgeAction "/OA/knowledge/data")
	
	(HAS-ACTION getDirectSubFoldersMGAction "/OA/knowledge/data")
	(HAS-ACTION getFolderManagersAction "/OA/knowledge/data")
	
	(DEFACTIVITY-STATIC knowledgeBaseMGActivity
		(LABEL "知识库管理" "zh_CN"))
)-->
  <process name="knowledgeBaseManageProcess">
    <label language="zh_CN">知识库管理</label>
    
    
    
    
    
    <static-activity name="knowledgeBaseMGActivity">
      <label language="zh_CN">知识库管理</label>
    </static-activity>
<has-action action="queryKnowledgeAction" access-permission="public"></has-action>
<has-action action="getDirectSubFoldersMGAction" access-permission="public"></has-action>
<has-action action="getFolderManagersAction" access-permission="public"></has-action>
</process>
</model>

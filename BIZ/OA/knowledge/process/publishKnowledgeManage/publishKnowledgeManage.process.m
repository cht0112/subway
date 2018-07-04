<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS publishKnowledgeManageProcess
	(FLOW FALSE)
	(LABEL "知识发布管理" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/knowledge/data")
	(HAS-ACTION createKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION saveKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryFolderAction "/OA/knowledge/data")
	(DEFACTIVITY-STATIC publishKWManageActivity
		(LABEL "知识发布管理" "zh_CN")
	)
)-->
  <process name="publishKnowledgeManageProcess">
    <label language="zh_CN">知识发布管理</label>
    
    
    
    
    <static-activity name="publishKWManageActivity">
      <label language="zh_CN">知识发布管理</label>
    </static-activity>
  <has-action action="createKMKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryKMKnowledgeAction" access-permission="public"></has-action>
<has-action action="saveKMKnowledgeAction" access-permission="public"></has-action>
<has-action action="queryFolderAction" access-permission="public"></has-action>
<has-action action="queryV_OA_KW_FirstFolderAction" access-permission="public"></has-action>
<has-action action="queryV_OA_KW_SecondFolderAction" access-permission="public"></has-action>
</process>
</model>

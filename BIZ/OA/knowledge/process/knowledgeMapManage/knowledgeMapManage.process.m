<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS knowledgeMapManageProcess
	(FLOW FALSE)
	(LABEL "知识地图管理" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/knowledge/data")
	(HAS-ACTION queryKMFolderAction "/OA/knowledge/data")
	(HAS-ACTION queryKowledgeFolderAction "/OA/knowledge/data")
	(HAS-ACTION getKnowledgeMapManagersAction "/OA/knowledge/data")
	
	(HAS-ACTION queryKowledgeFolderAction "/OA/knowledge/data")
	(HAS-ACTION saveKMKWFolderAction "/OA/knowledge/data")
	(HAS-ACTION createKMKWFolderAction "/OA/knowledge/data")
	
	(HAS-ACTION queryKnowledgeForFolderAction "/OA/knowledge/data")
	(HAS-ACTION queryFolderAction "/OA/knowledge/data")
	
	(DEFACTIVITY-STATIC kwMapManageActivity
		(LABEL "知识地图管理" "zh_CN"))
)-->
  <process name="knowledgeMapManageProcess">
    <label language="zh_CN">知识地图管理</label>
    <has-action action="queryKMFolderAction"/>
    <has-action action="queryKowledgeFolderAction"/>
    <has-action action="getKnowledgeMapManagersAction"/>
    <has-action action="saveKMKWFolderAction"/>
    <has-action action="createKMKWFolderAction"/>
    <has-action action="queryKnowledgeForFolderAction"/>
    <has-action action="queryFolderAction"/>
    <static-activity name="kwMapManageActivity">
      <label language="zh_CN">知识地图管理</label>
    </static-activity>
  </process>
</model>

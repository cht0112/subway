<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS knowledgeMapSetProcess
	(FLOW FALSE)
	(LABEL "知识地图设置" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/knowledge/data")
	(HAS-ACTION createKMFolderAction "/OA/knowledge/data")
	(HAS-ACTION queryKMFolderAction "/OA/knowledge/data")
	(HAS-ACTION saveKMFolderAction "/OA/knowledge/data")
	
	(HAS-ACTION createKMFDManagerAction "/OA/knowledge/data")
	(HAS-ACTION queryKMFDManagerAction "/OA/knowledge/data")
	(HAS-ACTION saveKMFDManagerAction "/OA/knowledge/data")
	
	(HAS-ACTION createKMRightsAction "/OA/knowledge/data")
	(HAS-ACTION queryKMRightsAction "/OA/knowledge/data")
	(HAS-ACTION saveKMRightsAction "/OA/knowledge/data")
	
	(HAS-ACTION allUseAction "/OA/knowledge/data")
	(HAS-ACTION updateAllSubNodeFullNameAction "/OA/knowledge/data")
	(HAS-ACTION getFolderInfoAction "/OA/knowledge/data")
	(HAS-ACTION inheritManagerSetAction "/OA/knowledge/data")
	
	(HAS-ACTION getParentFolderManagerSetAction "/OA/knowledge/data")
	(HAS-ACTION getPsnMainOrgFullNameAction "/OA/knowledge/data")
	(HAS-ACTION updateAllSubFolderManagerSetAction "/OA/knowledge/data")
	
	(DEFACTIVITY-STATIC kwMapSetActivity
		(LABEL "知识地图设置" "zh_CN"))
)-->
  <process name="knowledgeMapSetProcess">
    <label language="zh_CN">知识地图设置</label>
    <has-action action="createKMFolderAction"/>
    <has-action action="queryKMFolderAction"/>
    <has-action action="saveKMFolderAction"/>
    <has-action action="createKMFDManagerAction"/>
    <has-action action="queryKMFDManagerAction"/>
    <has-action action="saveKMFDManagerAction"/>
    <has-action action="createKMRightsAction"/>
    <has-action action="queryKMRightsAction"/>
    <has-action action="saveKMRightsAction"/>
    <has-action action="allUseAction"/>
    <has-action action="updateAllSubNodeFullNameAction"/>
    <has-action action="getFolderInfoAction"/>
    <has-action action="inheritManagerSetAction"/>
    <has-action action="getParentFolderManagerSetAction"/>
    <has-action action="getPsnMainOrgFullNameAction"/>
    <has-action action="updateAllSubFolderManagerSetAction"/>
    <static-activity name="kwMapSetActivity">
      <label language="zh_CN">知识地图设置</label>
    </static-activity>
  </process>
</model>

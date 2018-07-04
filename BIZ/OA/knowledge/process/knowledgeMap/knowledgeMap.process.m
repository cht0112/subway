<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <!--(DEFPROCESS knowledgeMapProcess
	(FLOW FALSE)
	(LABEL "知识地图" "zh_CN")
	(HAS-DEFAULT-ACTIONS "/OA/knowledge/data")
	(HAS-ACTION getCurrentPsnKnowledgeMapAction "/OA/knowledge/data")
	(HAS-ACTION queryKMKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKnowledgeAction "/OA/knowledge/data")
	(HAS-ACTION queryKMREADERSAction "/OA/knowledge/data")
	
	(HAS-ACTION getNoReadersAction "/OA/knowledge/data")
	(HAS-ACTION getNoReaderCountAction "/OA/knowledge/data")
	(HAS-ACTION insertReadersAction "/OA/knowledge/data")
	
	(DEFACTIVITY-STATIC kwMapActivity
		(LABEL "知识地图" "zh_CN"))
)-->
  <process name="knowledgeMapProcess">
    <label language="zh_CN">知识地图</label>
    <has-action action="getCurrentPsnKnowledgeMapAction"/>
    <has-action action="queryKMKnowledgeAction"/>
    <has-action action="queryKnowledgeAction"/>
    <has-action action="queryKMREADERSAction"/>
    <has-action action="getNoReadersAction"/>
    <has-action action="getNoReaderCountAction"/>
    <has-action action="insertReadersAction"/>
    <static-activity name="kwMapActivity">
      <label language="zh_CN">知识地图</label>
    </static-activity>
  </process>
</model>

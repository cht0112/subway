<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" 
  xmlns="http://www.justep.com/xui"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/OA/knowledge/process/simpleKnowledgeBaseManage/baseKWBaseMGActivity.w">
  <data id="dFolder" xui:update-mode="merge-and-replace">
		<rows xmlns="">
			<row id="notice">
				<cell id="folderName">公告</cell>
				<cell id="folderFullID">public/notice</cell>
			</row>
		</rows>
	</data>
</xui:window>

<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/OA/knowledge/process/simpleKnowledgeBaseManage/baseKWBaseMGActivity.w" >
	<data id="dFolder" xui:update-mode="merge-and-replace">
		<rows xmlns="">
			<row id="news">
				<cell id="folderName">新闻</cell>
				<cell id="folderFullID">public/news</cell>
			</row>
		</rows>
	</data>
</window>
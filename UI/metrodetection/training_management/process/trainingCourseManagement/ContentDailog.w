<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/system/dialog/base/multiList.w" >

   <data id="main" concept="TRAINING_CONTENT_INFO"  xui:update-mode="merge"/>
    <creator action="/metrodetection/training_management/logic/action/createTRAINING_CONTENT_INFOAction" id="default1_1" xui:parent="main" xui:update-mode="insert" />
    <reader action="/metrodetection/training_management/logic/action/myQueryContentAction" id="default2_1" xui:parent="main" xui:update-mode="insert" />
    <writer action="/metrodetection/training_management/logic/action/saveTRAINING_CONTENT_INFOAction" id="default3_1" xui:parent="main" xui:update-mode="insert" />
   <xhtml:div id="windowReceiver" onReceive="ContentDailog.windowReceiverReceive"  xui:update-mode="merge"/>
   <item id="displayColumnId" value="TRAINING_NAME"  xui:update-mode="merge"/>
   <xhtml:div id="smartFilter" filter-relations="TRAINING_NAME,COMPLAINT_CONTENT,TRAINING_DOC_ID"  xui:update-mode="merge"/>
    <xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn3_1" label="培训内容名称" ref="TRAINING_NAME" type="ro" width="137px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn4_1" label="培训纸质教材" ref="TRAINING_DOC" type="ro" width="139px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn6_1" label="培训电子教材" ref="sDocName" type="ro" width="174px" xui:parent="grid" xui:update-mode="insert" />
    <xui:column xmlns:xui="http://www.justep.com/xui" id="gridColumn5_1" label="培训内容描述" ref="TRAINING_CONTENT" type="ro" width="153px" xui:parent="grid" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_4" src="ContentDailog.js" xui:parent="resource" xui:update-mode="insert" />

</window>
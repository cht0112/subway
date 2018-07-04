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

    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="onload" id="action2_4" xui:parent="model" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript2_4" >
<![CDATA[CourseDialog.modelLoad(event)]]>
</xforms:script>
</xforms:action>
   <data id="main" concept="TRAINING_COURSE_INFO" update-mode="whereAll"  xui:update-mode="merge"/>
    <creator action="/metrodetection/training_management/logic/action/createTRAINING_COURSE_INFOAction" id="default1_5" xui:parent="main" xui:update-mode="insert" />
    <reader action="/metrodetection/training_management/logic/action/queryTRAINING_COURSE_INFOAction" id="default2_5" xui:parent="main" xui:update-mode="insert" />
    <writer action="/metrodetection/training_management/logic/action/saveTRAINING_COURSE_INFOAction" id="default3_5" xui:parent="main" xui:update-mode="insert" />
   <xhtml:div id="windowReceiver" onReceive="CourseDialog.windowReceiverReceive"  xui:update-mode="merge"/>
   <item id="displayColumnId" value="COURSE_NAME"  xui:update-mode="merge"/>
   <xhtml:div id="smartFilter" filter-relations="COURSE_NAME,COURSE_LENGTH"  xui:update-mode="merge"/>
    <column align="center" id="default4_5" label="培训课程名称" ref="COURSE_NAME" type="ro" width="198px" xui:parent="grid" xui:update-mode="insert" />
    <column align="center" id="default5_5" label="课时长度" ref="COURSE_LENGTH" type="ro" width="122px" xui:parent="grid" xui:update-mode="insert" />
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_2" src="CourseDialog.js" xui:parent="resource" xui:update-mode="insert" />

</window>
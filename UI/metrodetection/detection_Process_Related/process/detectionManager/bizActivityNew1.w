<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/metrodetection/detection_Process_Related/process/detectionManager/mainActivityNew.w" >

  <div id="action2" xui:update-mode="delete"/>
    <xforms:action xmlns:xforms="http://www.justep.com/xforms" ev:event="xbl-loaded" id="action1_2" xui:parent="mdDefault" xui:update-mode="insert" >
<xforms:script xmlns:xforms="http://www.justep.com/xforms" id="xformsScript1_2" >
<![CDATA[bizActivityNew1.mdDefaultXBLLoaded(event)]]>
</xforms:script>
</xforms:action>
   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_2" src="bizActivityNew1.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>
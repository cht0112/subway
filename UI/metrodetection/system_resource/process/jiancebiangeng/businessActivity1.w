<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/metrodetection/system_resource/process/jiancebiangeng/mainActivity.w" >

   <data id="dataMain" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
   <xforms:script id="xformsScript2"  xui:update-mode="replace-and-replace">businessActivity1.mdDefaultLoad(event)</xforms:script>   <xhtml:div id="flw" auto-filter="false"  xui:update-mode="merge"/>
    <xhtml:script xmlns:xhtml="http://www.w3.org/1999/xhtml" id="htmlScript1_1" src="businessActivity1.js" xui:parent="rsMain" xui:update-mode="insert" />

</window>
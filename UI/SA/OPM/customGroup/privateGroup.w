<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  id="window" 
  extends="/UI/SA/OPM/customGroup/publicGroup.w" >

  <div id="filter3" xui:update-mode="delete"/>
    <filter id="filter1_3" name="filter3" xui:parent="dCustomGroup" xui:update-mode="insert" >
<![CDATA[sTypeID = 'private' and sCreatorID = :currentPersonID()]]>
</filter>
   <rule id="dataBizRule1" default-value="'private'"  xui:update-mode="merge"/>
   <rule id="dataBizRule2" default-value="'个人'"  xui:update-mode="merge"/>
   <data id="dRange" auto-load="false"  xui:update-mode="merge"/>
   <xhtml:div id="VSplitter1" resizable="false" has-arrow-button="false" has-drag-bar="false" status="show-top"  xui:update-mode="merge"/>

</window>
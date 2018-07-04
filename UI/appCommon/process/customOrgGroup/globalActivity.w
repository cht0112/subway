<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/appCommon/process/customOrgGroup/personalActivity.w" >

   <tree-option id="treeOption1" virtual-root="系统常用组"  xui:update-mode="merge"/>
   <rule id="dataBizRule1" default-value="'global'"  xui:update-mode="merge"/>

</window>
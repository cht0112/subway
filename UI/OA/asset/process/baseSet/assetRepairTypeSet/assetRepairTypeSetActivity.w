<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/appCommon/templates/pubBaseCode/pubBaseCodeActivity.w" >

   <data id="dPubBaseCode" filter-relations="fCode,fName,fDescription,fSequence,fUseStatusName" concept="OA_AS_RepairType"  xui:update-mode="merge-and-replace"/>
    <reader action="/OA/asset/logic/action/queryASRepairTypeAction" xui:parent="dPubBaseCode" xui:update-mode="insert" />
    <writer action="/OA/asset/logic/action/saveASRepairTypeAction" xui:parent="dPubBaseCode" xui:update-mode="insert" />
    <creator action="/OA/asset/logic/action/createASRepairTypeAction" xui:parent="dPubBaseCode" xui:update-mode="insert" />
    <rule alert="'名称必填!'" relation="fName" required="true()" xui:parent="dPubBaseCode" xui:update-mode="insert" />

</window>
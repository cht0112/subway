<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/appCommon/templates/pubBaseCode/pubBaseCodeActivity.w" >

   <data id="dPubBaseCode" filter-relations="fCode,fName,fDescription,fSequence,fUseStatusName" concept="OA_MT_BoardroomType"  xui:update-mode="merge-and-replace"/>
    <reader action="/OA/meeting/logic/action/queryMTBoardroomTypeAction" xui:parent="dPubBaseCode" xui:update-mode="insert" />
    <writer action="/OA/meeting/logic/action/saveMTBoardroomTypeAction" xui:parent="dPubBaseCode" xui:update-mode="insert" />
    <creator action="/OA/meeting/logic/action/createMTBoardroomTypeAction" xui:parent="dPubBaseCode" xui:update-mode="insert" />
    <rule alert="'名称必填!'" relation="fName" required="true()" xui:parent="dPubBaseCode" xui:update-mode="insert" />
    <rule alert="'编码必填!'" relation="fCode" required="true()" xui:parent="dPubBaseCode" xui:update-mode="insert" />

</window>
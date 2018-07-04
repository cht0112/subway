<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/OA\asset/process/baseSet/assetKindSet/pubAssetBaseCodeActivity.w" >

   <data id="dPubBaseCodeAsset" filter-relations="fCode,fName,fDescription,fSequence,fUseStatusName" concept="OA_AS_Kind"  xui:update-mode="merge-and-replace"/>
    <reader action="/OA/asset/logic/action/queryASKindAction" xui:parent="dPubBaseCodeAsset" xui:update-mode="insert" />
    <writer action="/OA/asset/logic/action/saveASKindAction" xui:parent="dPubBaseCodeAsset" xui:update-mode="insert" />
    <creator action="/OA/asset/logic/action/createASKindAction" xui:parent="dPubBaseCodeAsset" xui:update-mode="insert" />
    <rule alert="'名称必填!'" relation="fName" required="true()" xui:parent="dPubBaseCodeAsset" xui:update-mode="insert" />
    <reader action="/metrodetection/system_code/logic/action/queryTOOL_TYPE_CODEAction" xui:parent="dAssetD" xui:update-mode="insert" />

</window>
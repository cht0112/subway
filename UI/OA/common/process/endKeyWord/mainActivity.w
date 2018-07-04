<xui:window xmlns="http://www.justep.com/xui" xmlns:xui="http://www.justep.com/xui"
	xmlns:xforms="http://www.justep.com/xforms" component="/UI/system/components/window.xbl.xml#window"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	extends="/UI/appCommon/templates/pubBaseCode/pubBaseCodeActivity.w">
	<data id="dPubBaseCode" concept="OA_Pub_EndKeyWord" xui:update-mode="merge-and-replace">
		<reader action="/OA/common/logic/action/queryOA_Pub_EndKeyWordAction" />
		<writer action="/OA/common/logic/action/saveOA_Pub_EndKeyWordAction" />
		<creator action="/OA/common/logic/action/createOA_Pub_EndKeyWordAction" />
		<rule relation="fName" required="true()" alert="'名称必填!'" />
	</data>
</xui:window>

<window xmlns="http://www.justep.com/xui"
	xmlns:xui="http://www.justep.com/xui"
	xmlns:xhtml="http://www.w3.org/1999/xhtml"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
	xmlns:xforms="http://www.justep.com/xforms"
	xmlns:ev="http://www.w3.org/2001/xml-events"
	xmlns:f="http://orbeon.org/oxf/xml/formatting"
	xmlns:justep="http://www.justep.com/x5#"
	xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xs="http://www.w3.org/2001/XMLSchema"
	component="/UI/system/components/window.xbl.xml#window"
	extends="/UI/system/service/commonChoose/treeListMultiPersonChoose.w">
	<reader action="/SA/OPM/logic/action/queryPersonMemberManagementGAction" id="readerAction" xui:update-mode="merge"/>
	<reader action="/SA/OPM/logic/action/queryTopOrgManagementGAction" id="treeReaderAction" xui:update-mode="merge"/>
	<tree-option root-filter="_management_" id="tree-option" xui:update-mode="merge"/>  
	<xhtml:div id="quick-locate" xui:update-mode="merge-and-append" use-management="true"/>
</window>
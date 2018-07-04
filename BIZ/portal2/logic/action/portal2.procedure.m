<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model" xmlns:m="http://www.justep.com/model">
	<!--   
  <procedure name="savePortalProfilesProcedure" code-model="/portal2/logic/code" code="Portal2.savePortalProfiles"> 
    <parameter name="value" type="String"/>  
    <parameter name="personID" type="String"/> 
  </procedure>  
  <procedure name="removePortalProfilesProcedure" code-model="/portal2/logic/code" code="Portal2.removePortalProfiles">
    <parameter name="personID" type="String"/>
  </procedure>
  -->
  <procedure name="selectPortal2ProfilesProcedure" code-model="/portal2/logic/code" code="Portal2.selectPortalProfiles"> 
    <parameter name="personID" type="String"/> 
  </procedure>  
  <procedure name="saveFunctreeProcedure" code-model="/portal2/logic/code" code="Portal2.saveFunctree"> 
    <parameter name="functree" type="String"/>  
    <parameter name="personID" type="String"/> 
  </procedure>  
  <procedure name="saveOtherProcedure" code-model="/portal2/logic/code" code="Portal2.saveOther"> 
    <parameter name="other" type="String"/>  
    <parameter name="personID" type="String"/> 
  </procedure>  
  <procedure name="savePortalProcedure" code-model="/portal2/logic/code" code="Portal2.savePortal"> 
    <parameter name="portal" type="String"/>  
    <parameter name="personID" type="String"/> 
  </procedure>  
  <procedure name="clearPortalProcedure" code-model="/portal2/logic/code" code="Portal2.clearPortal"> 
    <parameter name="personID" type="String"/> 
  </procedure>  
</model>

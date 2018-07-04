<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DEFECT_TRACK_VERSION_INFO"/>
  <mapping concept="DEFECT_TRACK_VERSION_INFO">
    <table name="DEFECT_TRACK_VERSION_INFO" type="owner-table">
      <key field="VERSION_ID" type="Integer"/>  
      <item field="PRODUCT_ID" relation="PRODUCT_ID" type="Integer"/>  
      <item field="MAJOR_VERSION_NUMBER" relation="MAJOR_VERSION_NUMBER" type="String"/>  
      <item field="MINOR_VERSION_NUMBER" relation="MINOR_VERSION_NUMBER" type="String"/>  
      <item field="REVISION_NUMBER" relation="REVISION_NUMBER" type="String"/>  
      <item field="BUILD_DATE" relation="BUILD_DATE" type="Date"/>  
      <item field="BUILD_PERSON" relation="BUILD_PERSON" type="String"/>  
      <index fields="PRODUCT_ID" name="RELATIONSHIP_4_FK" type="NORMAL"/> 
    
<item relation="fChildBugVersionID" field="fChildBugVersionID" type="Integer"></item>
</table> 
  </mapping> 
</model>
<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="DEFECT_TRACK_PRODUCT_INFO"/>
  <mapping concept="DEFECT_TRACK_PRODUCT_INFO">
    <table name="DEFECT_TRACK_PRODUCT_INFO" type="owner-table">
      <key field="PRODUCT_ID" type="Integer"/>  
      <item field="PROJECT_ID" relation="PROJECT_ID" type="Integer"/>  
      <item field="PRODUCT_NAME" relation="PRODUCT_NAME" type="String"/>  
      <item field="PRODUCT_DESC" relation="PRODUCT_DESC" type="String"/>  
      <index fields="PROJECT_ID" name="RELATIONSHIP_1_FK" type="NORMAL"/> 
    <item field="fChildModuleProductID" relation="fChildModuleProductID" type="Integer"/>
<item field="fChildVersionProductID" relation="fChildVersionProductID" type="Integer"/>
</table> 
  </mapping> 
</model>
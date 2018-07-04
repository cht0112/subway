<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <store name="OA_BG_CostCenter"/>  
  <store name="OA_BG_CostAccount"/>  
  <store name="OA_BG_Account"/>  
  <mapping concept="OA_BG_CostCenter"> 
    <table type="owner-table" name="OA_BG_CostCenter"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_BG_CostAccount"> 
    <table type="owner-table" name="OA_BG_CostAccount"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_BG_Account"> 
    <table type="owner-table" name="OA_Pub_BaseCode"> 
      <key field="fID" type="String"/>  
      <discriminator field="fScope" value="总账科目"/> 
    </table> 
  </mapping> 
</model>

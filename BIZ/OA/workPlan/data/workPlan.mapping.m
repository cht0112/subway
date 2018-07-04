<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="OA_GZNR"/>  
  <store name="OA_GZJH"/>  
  <store name="OA_GZJH_Execute"/>  
  <mapping concept="OA_GZJH_Execute"> 
    <table name="OA_PUB_Execute" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fBizKind" value="工作计划"/>  
      <item field="fMasterID" relation="fMasterID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_GZNR"> 
    <table name="OA_GZNR" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_GZJH"> 
    <table name="OA_GZJH" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping> 
</model>
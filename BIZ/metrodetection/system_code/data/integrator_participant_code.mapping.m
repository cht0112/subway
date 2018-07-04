<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="INTEGRATOR_PARTICIPANT_CODE"/>
  <mapping concept="INTEGRATOR_PARTICIPANT_CODE">
    <table name="INTEGRATOR_PARTICIPANT_CODE" type="owner-table">
      <key field="pARTICIPANT_ID" type="Integer"/>  
      <item field="PARTICIPANT_ID_CNAME" relation="pARTICIPANTIDCNAME" type="String"/>  
      <item field="PARTICIPANT_ID_ENAME" relation="pARTICIPANTIDENAME" type="String"/> 
    </table> 
  </mapping> 
</model>
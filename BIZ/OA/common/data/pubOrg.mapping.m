<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <store name="V_SA_OPOrg"/>
  <store name="V_SA_OPPerson"/>
  <mapping concept="V_SA_OPOrg">
    <table type="owner-table" name="V_SA_OPOrg"> 
      <key field="sID" type="String"/>
      <item relation="sParent" field="SPARENT" type="String" />
    </table>
  </mapping>
  <mapping concept="V_SA_OPPerson">
    <table type="owner-table" name="V_SA_OPPerson">
      <key field="sID" type="String"/>
    </table>
  </mapping>
</model>

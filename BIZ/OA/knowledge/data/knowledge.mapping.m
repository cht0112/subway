<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">
<store name="V_OA_KW_SecondFolder"/>

<store name="V_OA_KW_FirstFolder"/>
<store name="v_oa_kw_firstfolder"/>
<store name="OA_KM_KnowledgeGZPsn"/>  
  <store name="OA_KM_Folder"/>  
  <store name="OA_KM_Rights"/>  
  <store name="OA_KM_FDManager"/>  
  <store name="OA_KM_Knowledge"/>  
  <store name="OA_KM_KWFolder"/>  
  <store name="OA_KM_KWPictures"/>  
  <store name="OA_KM_Template"/>  
  <store name="OA_KM_READERS"/>  
  <store name="OA_KM_BatchKW"/>  
  <store name="OA_KM_KWExecute"/>  
  <mapping concept="OA_KM_Folder"> 
    <table name="OA_KM_Folder" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fParent" relation="fParent" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_Rights"> 
    <table name="OA_KM_Rights" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fKWID" relation="fKWID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_FDManager"> 
    <table name="OA_KM_FDManager" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_Knowledge"> 
    <table name="OA_KM_Knowledge" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_KWFolder"> 
    <table name="OA_KM_KWFolder" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fKWID" relation="fKWID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_KWPictures"> 
    <table name="OA_KM_KWPictures" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fKWID" relation="fKWID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_Template"> 
    <table name="OA_KM_Template" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_READERS"> 
    <table name="OA_KM_READERS" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fKWID" relation="fKWID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_KM_BatchKW"> 
    <table name="OA_KM_BatchKW" type="owner-table"> 
      <key field="fID" type="String"/>  
    </table> 
  </mapping>  
  <mapping concept="OA_KM_KWExecute"> 
    <table name="OA_PUB_Execute" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fMasterID" relation="fMasterID" type="String"/>  
      <discriminator field="fBizKind" value="知识发布"/> 
    </table> 
  </mapping>  
</model>
<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <store name="OA_AS_Deprecition"/>  
  <store name="OA_AS_InventoryD"/>  
  <store name="OA_AS_Inventory"/>  
  <store name="OA_AS_UseRecord"/>  
  <store name="OA_AS_DealExecute"/>  
  <store name="OA_AS_DealApply"/>  
  <store name="OA_AS_DiscardExecute"/>  
  <store name="OA_AS_DiscardApply"/>  
  <store name="OA_AS_RepairExecute"/>  
  <store name="OA_AS_FittingInfo"/>  
  <store name="OA_AS_RepairItem"/>  
  <store name="OA_AS_RepairApply"/>  
  <store name="OA_AS_CheckD"/>  
  <store name="OA_AS_CheckM"/>  
  <store name="OA_AS_UseExecute"/>  
  <store name="OA_AS_UseArrange"/>  
  <store name="OA_AS_UseApplyM"/>  
  <store name="OA_AS_Return"/>  
  <store name="OA_AS_InD"/>  
  <store name="OA_AS_InM"/>  
  <store name="OA_AS_Card"/>  
  <store name="OA_AS_BuyExecute"/>  
  <store name="OA_AS_BuyApplyD"/>  
  <store name="OA_AS_BuyApplyM"/>  
  <store name="OA_AS_DealMode"/>  
  <store name="OA_AS_RepairType"/>  
  <store name="OA_AS_InMode"/>  
  <store name="OA_AS_Unit"/>  
  <store name="OA_AS_Kind"/>  
  <store name="V_SA_OPPerson"/>  
  <mapping concept="V_SA_OPPerson"> 
    <table name="V_SA_OPPerson" type="owner-table"> 
      <key field="sID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_Kind"> 
    <table name="OA_Pub_BaseCode" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fScope" value="固定资产类别"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_Unit"> 
    <table name="OA_Pub_BaseCode" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fScope" value="固定资产单位"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_InMode"> 
    <table name="OA_Pub_BaseCode" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fScope" value="资产入库类型"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_RepairType"> 
    <table name="OA_Pub_BaseCode" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fScope" value="资产维修类型"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_DealMode"> 
    <table name="OA_Pub_BaseCode" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fScope" value="资产处置类型"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_BuyApplyM"> 
    <table name="OA_AS_BuyApplyM" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_BuyApplyD"> 
    <table name="OA_AS_BuyApplyD" type="owner-table"> 
      <key field="fID" type="String"/>  
      <item field="fMasterID" relation="fMasterID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_Card"> 
    <table name="OA_AS_Card" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_InM"> 
    <table name="OA_AS_InM" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_InD"> 
    <table name="OA_AS_InD" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_Return"> 
    <table name="OA_AS_Return" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_UseApplyM"> 
    <table name="OA_AS_UseApplyM" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_UseArrange"> 
    <table name="OA_AS_UseArrange" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_CheckM"> 
    <table name="OA_AS_CheckM" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_CheckD"> 
    <table name="OA_AS_CheckD" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_RepairApply"> 
    <table name="OA_AS_RepairApply" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_RepairItem"> 
    <table name="OA_AS_RepairItem" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_FittingInfo"> 
    <table name="OA_AS_FittingInfo" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_DiscardApply"> 
    <table name="OA_AS_DiscardApply" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_DealApply"> 
    <table name="OA_AS_DealApply" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_UseRecord"> 
    <table name="OA_AS_UseRecord" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_Inventory"> 
    <table name="OA_AS_Inventory" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_InventoryD"> 
    <table name="OA_AS_JoinInventory" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_Deprecition"> 
    <table name="OA_AS_Deprecition" type="owner-table"> 
      <key field="fID" type="String"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_BuyExecute"> 
    <table name="OA_PUB_Execute" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fBizKind" value="资产采购申请"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_UseExecute"> 
    <table name="OA_PUB_Execute" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fBizKind" value="资产使用申请"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_RepairExecute"> 
    <table name="OA_PUB_Execute" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fBizKind" value="资产维修申请"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_DiscardExecute"> 
    <table name="OA_PUB_Execute" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fBizKind" value="资产报废申请"/> 
    </table> 
  </mapping>  
  <mapping concept="OA_AS_DealExecute"> 
    <table name="OA_PUB_Execute" type="owner-table"> 
      <key field="fID" type="String"/>  
      <discriminator field="fBizKind" value="资产处置申请"/> 
    </table> 
  </mapping> 
</model>
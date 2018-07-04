<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <!-- OA_AS_Kind -->  
  <action name="createASKindAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_Kind"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASKindAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_Kind"/>  
    <private name="select" type="String" value="OA_AS_Kind.*"/>  
    <private name="from" type="String" value="OA_AS_Kind OA_AS_Kind"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_Kind"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASKindAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_Kind"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_Unit -->  
  <action name="createASUnitAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_Unit"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASUnitAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_Unit"/>  
    <private name="select" type="String" value="OA_AS_Unit.*"/>  
    <private name="from" type="String" value="OA_AS_Unit OA_AS_Unit"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_Unit"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASUnitAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_Unit"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_InMode -->  
  <action name="createASInModeAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_InMode"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASInModeAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_InMode"/>  
    <private name="select" type="String" value="OA_AS_InMode.*"/>  
    <private name="from" type="String" value="OA_AS_InMode OA_AS_InMode"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_InMode"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASInModeAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_InMode"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_RepairType -->  
  <action name="createASRepairTypeAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairType"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASRepairTypeAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairType"/>  
    <private name="select" type="String" value="OA_AS_RepairType.*"/>  
    <private name="from" type="String" value="OA_AS_RepairType OA_AS_RepairType"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_RepairType"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASRepairTypeAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairType"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_DealMode -->  
  <action name="createASDealModeAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_DealMode"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASDealModeAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_DealMode"/>  
    <private name="select" type="String" value="OA_AS_DealMode.*"/>  
    <private name="from" type="String" value="OA_AS_DealMode OA_AS_DealMode"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_DealMode"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASDealModeAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_DealMode"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_BuyApplyM -->  
  <action name="createASBuyApplyMAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyM"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASBuyApplyMAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyM"/>  
    <private name="select" type="String" value="OA_AS_BuyApplyM.*"/>  
    <private name="from" type="String" value="OA_AS_BuyApplyM OA_AS_BuyApplyM"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_BuyApplyM"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASBuyApplyMAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyM"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_BuyApplyD -->  
  <action name="createASBuyApplyDAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyD"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASBuyApplyDAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyD"/>  
    <private name="select" type="String" value="OA_AS_BuyApplyD.*"/>  
    <private name="from" type="String" value="OA_AS_BuyApplyD OA_AS_BuyApplyD"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_BuyApplyD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASBuyApplyDAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyD"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_BuyApplyD Query -->  
  <action name="queryASSelectBuyApplyAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyD"/>  
    <private name="select" type="String" value="OA_AS_BuyApplyD,OA_AS_BuyApplyD.fName AS fName,OA_AS_BuyApplyD.fSpecType AS fSpecType,OA_AS_BuyApplyD.fKindID AS fKindID,k.fCode AS fKindCode,OA_AS_BuyApplyD.fUnitID AS fUnitID,OA_AS_BuyApplyD.fKind AS fKind,OA_AS_BuyApplyD.fUnit AS fUnit,OA_AS_BuyApplyD.fBuyNum AS fBuyNum,OA_AS_BuyApplyD.fInNum AS fInNum,OA_AS_BuyApplyD.fPrice AS fPrice,OA_AS_BuyApplyD.fAmount AS fAmount,OA_AS_BuyApplyD.fMasterID AS fMasterID,m.fNO AS fNO,m.fBizState AS fBizState,m.fBizStateName AS fBizStateName,m.fCreatePsnID AS fCreatePsnID,m.fCreatePsnFID AS fCreatePsnFID,m.fCreateTime AS fCreateTime,m.fApplyDeptName AS fApplyDeptName,m.fApplyPsnID AS fApplyPsnID,m.fApplyPsnName AS fApplyPsnName,m.fApplyPsnFID AS fApplyPsnFID,m.fApplyDate AS fApplyDate"/>  
    <private name="from" type="String" value="OA_AS_BuyApplyD OA_AS_BuyApplyD optional join OA_AS_BuyApplyM m on OA_AS_BuyApplyD.fMasterID = m optional join OA_AS_Kind k on OA_AS_BuyApplyD.fKindID = k"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String" value="OA_AS_BuyApplyD.fBuyNum&gt;OA_AS_BuyApplyD.fInNum and m.fBizState = 'bsFinished'"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_BuyApplyD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="queryASBuyApplyDetailAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_BuyApplyD"/>  
    <private name="select" type="String" value="OA_AS_BuyApplyD.*,m.fNO AS fNO,m.fBizState AS fBizState,m.fBizStateName AS fBizStateName,m.fCreatePsnID AS fCreatePsnID,m.fCreatePsnFID AS fCreatePsnFID,m.fCreateTime AS fCreateTime,m.fApplyDeptName AS fApplyDeptName,m.fApplyPsnID AS fApplyPsnID,m.fApplyPsnName AS fApplyPsnName,m.fApplyPsnFID AS fApplyPsnFID,m.fApplyDate AS fApplyDate"/>  
    <private name="from" type="String" value="OA_AS_BuyApplyD OA_AS_BuyApplyD optional join OA_AS_BuyApplyM m on OA_AS_BuyApplyD.fMasterID = m"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_BuyApplyD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <!-- OA_AS_Card -->  
  <action name="createASCardAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_Card"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASCardAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_Card"/>  
    <private name="select" type="String" value="OA_AS_Card.*"/>  
    <private name="from" type="String" value="OA_AS_Card OA_AS_Card"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_Card"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASCardAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_Card"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action> 
  <!-- MyAsset --> 
  <action name="queryASMyAssetAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_Card"/>  
    <private name="select" type="String" value="OA_AS_Card.*,V_SA_OPPerson.sMainOrgFID as sMainOrgFID"/>  
    <private name="from" type="String" value="OA_AS_Card OA_AS_Card  join V_SA_OPPerson V_SA_OPPerson on V_SA_OPPerson = OA_AS_Card.fDutyPsnID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String" value="OA_AS_Card.fStatus = '0' OR OA_AS_Card.fStatus = '1'"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_Card"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <!-- bb -->  
  <action name="createASInMAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_InM"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASInMAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_InM"/>  
    <private name="select" type="String" value="OA_AS_InM.*"/>  
    <private name="from" type="String" value="OA_AS_InM OA_AS_InM"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_InM"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASInMAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_InM"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_InD -->  
  <action name="createASInDAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_InD"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASInDAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_InD"/>  
    <private name="select" type="String" value="OA_AS_InD.*"/>  
    <private name="from" type="String" value="OA_AS_InD OA_AS_InD"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_InD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASInDAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_InD"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_InD Query -->  
  <action name="queryASInDetailAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_InD"/>  
    <private name="select" type="String" value="OA_AS_InD.*,m.fNO AS fNO,m.fDate AS fInDate,m.fAmount AS fInAmount,m.fMode AS fMode,m.fDutyDeptName AS fDutyDeptName,m.fDutyPsnName AS fDutyPsnName"/>  
    <private name="from" type="String" value="OA_AS_InD OA_AS_InD optional join OA_AS_InM m on OA_AS_InD.fMasterID = m"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_InD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <!-- OA_AS_Return -->  
  <action name="createASReturnAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_Return"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASReturnAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_Return"/>  
    <private name="select" type="String" value="OA_AS_Return.*"/>  
    <private name="from" type="String" value="OA_AS_Return OA_AS_Return"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_Return"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASReturnAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_Return"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_UseApplyM -->  
  <action name="createASUseApplyMAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseApplyM"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASUseApplyMAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseApplyM"/>  
    <private name="select" type="String" value="OA_AS_UseApplyM.*"/>  
    <private name="from" type="String" value="OA_AS_UseApplyM OA_AS_UseApplyM"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_UseApplyM"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASUseApplyMAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseApplyM"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_UseArrange -->  
  <action name="createASUseArrangeAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseArrange"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASUseArrangeAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseArrange"/>  
    <private name="select" type="String" value="OA_AS_UseArrange.*"/>  
    <private name="from" type="String" value="OA_AS_UseArrange OA_AS_UseArrange"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_UseArrange"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASUseArrangeAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseArrange"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_CheckM -->  
  <action name="createASCheckMAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_CheckM"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASCheckMAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_CheckM"/>  
    <private name="select" type="String" value="OA_AS_CheckM.*"/>  
    <private name="from" type="String" value="OA_AS_CheckM OA_AS_CheckM"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_CheckM"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASCheckMAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_CheckM"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_CheckD -->  
  <action name="createASCheckDAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_CheckD"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASCheckDAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_CheckD"/>  
    <private name="select" type="String" value="OA_AS_CheckD.*"/>  
    <private name="from" type="String" value="OA_AS_CheckD OA_AS_CheckD"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_CheckD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASCheckDAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_CheckD"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_RepairApply -->  
  <action name="createASRepairApplyAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairApply"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASRepairApplyAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairApply"/>  
    <private name="select" type="String" value="OA_AS_RepairApply.*"/>  
    <private name="from" type="String" value="OA_AS_RepairApply OA_AS_RepairApply"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_RepairApply"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASRepairApplyAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairApply"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_RepairItem -->  
  <action name="createASRepairItemAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairItem"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASRepairItemAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairItem"/>  
    <private name="select" type="String" value="OA_AS_RepairItem.*"/>  
    <private name="from" type="String" value="OA_AS_RepairItem OA_AS_RepairItem"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_RepairItem"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASRepairItemAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_RepairItem"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_FittingInfo -->  
  <action name="createASFittingInfoAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_FittingInfo"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASFittingInfoAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_FittingInfo"/>  
    <private name="select" type="String" value="OA_AS_FittingInfo.*"/>  
    <private name="from" type="String" value="OA_AS_FittingInfo OA_AS_FittingInfo"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_FittingInfo"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASFittingInfoAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_FittingInfo"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_DiscardApply -->  
  <action name="createASDiscardApplyAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_DiscardApply"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASDiscardApplyAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_DiscardApply"/>  
    <private name="select" type="String" value="OA_AS_DiscardApply.*"/>  
    <private name="from" type="String" value="OA_AS_DiscardApply OA_AS_DiscardApply"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_DiscardApply"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASDiscardApplyAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_DiscardApply"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_DealApply -->  
  <action name="createASDealApplyAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_DealApply"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASDealApplyAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_DealApply"/>  
    <private name="select" type="String" value="OA_AS_DealApply.*"/>  
    <private name="from" type="String" value="OA_AS_DealApply OA_AS_DealApply"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_DealApply"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASDealApplyAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_DealApply"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_UseRecord -->  
  <action name="createASUseRecordAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseRecord"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASUseRecordAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseRecord"/>  
    <private name="select" type="String" value="OA_AS_UseRecord.*"/>  
    <private name="from" type="String" value="OA_AS_UseRecord OA_AS_UseRecord"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_UseRecord"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASUseRecordAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_UseRecord"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_Inventory -->  
  <action name="createASInventoryAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_Inventory"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASInventoryAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_Inventory"/>  
    <private name="select" type="String" value="OA_AS_Inventory.*"/>  
    <private name="from" type="String" value="OA_AS_Inventory OA_AS_Inventory"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_Inventory"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASInventoryAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_Inventory"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!--  
  <action name="createASJoinInventoryAction" procedure="bizCreateProcedure"> 
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASJoinInventoryAction" procedure="bizQueryProcedure"> 
    <public name="idColumn" type="String" value="OA_AS_JoinInventory"/>  
    <private name="select" type="String" value="OA_AS_JoinInventory.*"/>  
    <private name="from" type="String" value="OA_AS_JoinInventory OA_AS_JoinInventory"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <private name="aggregate" type="String" value=""/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/>  
    <private name="fnModel" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <action name="saveASJoinInventoryAction" procedure="bizSaveProcedure"> 
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  -->  
  <!-- OA_AS_InventoryD -->  
  <action name="createASJoinInventoryAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_InventoryD"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASJoinInventoryAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_InventoryD"/>  
    <private name="select" type="String" value="OA_AS_InventoryD.*"/>  
    <private name="from" type="String" value="OA_AS_InventoryD OA_AS_InventoryD"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_InventoryD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASJoinInventoryAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_InventoryD"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_InventoryD Query -->  
  <action name="queryASInventoryRecordAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_InventoryD"/>  
    <private name="select" type="String" value="OA_AS_InventoryD.*,m.fInventoryNO AS fInventoryNO,m.fDeptName AS fDeptName,m.fPersonName AS fPersonName,m.fDate AS fDate,m.fDescription AS fDescription,m.fRemark AS fRemark,c.fKind AS fKind,c.fCode AS fCode,c.fName AS fName,c.fSpecType AS fSpecType,c.fUnit AS fUnit"/>  
    <private name="from" type="String" value="OA_AS_InventoryD OA_AS_InventoryD optional join OA_AS_Inventory m on OA_AS_InventoryD.fInventoryID = m optional join OA_AS_Card c on OA_AS_InventoryD.fAssetID = c"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_InventoryD"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action> 
  <!-- c -->  
  <action name="creaInyApplyQueryAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_Inventory"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="saveOAASBuyApplyQueryAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_Deprecition"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- OA_AS_Deprecition -->  
  <action name="createASDeprecitionAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_AS_Deprecition"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action name="queryASDeprecitionAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_AS_Deprecition"/>  
    <private name="select" type="String" value="OA_AS_Deprecition.*"/>  
    <private name="from" type="String" value="OA_AS_Deprecition OA_AS_Deprecition"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_AS_Deprecition"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String" value="OA_AS_Deprecition.fDepreYear desc,OA_AS_Deprecition.fDepreMonth desc,OA_AS_Deprecition.fCode asc"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveASDeprecitionAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_AS_Deprecition"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/asset/data"/> 
  </action>  
  <!-- asset -->  
  <action name="assetIn" procedure="assetInProcedure"> 
    <public name="assetInDate" type="String"/>  
    <public name="assetInIDs" type="String"/> 
  </action>  
  <procedure code="asset.assetIn" code-model="/OA/asset/logic/code" name="assetInProcedure"> 
    <parameter name="assetInDate" type="String"/>  
    <parameter name="assetInIDs" type="String"/> 
  </procedure>  
  <action name="assetArrangeRecordAction" procedure="assetArrangeRecordProcedure"> 
    <public name="assetID" type="String"/>  
    <public name="arrangeDate" type="String"/> 
  </action>  
  <procedure code="asset.assetArrangeRecord" code-model="/OA/asset/logic/code" name="assetArrangeRecordProcedure"> 
    <parameter name="assetID" type="String"/>  
    <parameter name="arrangeDate" type="String"/> 
  </procedure>  
  <action name="assetReturnAction" procedure="assetReturnProcedure"> 
    <public name="assetID" type="String"/>  
    <public name="returnDate" type="String"/> 
  </action>  
  <procedure code="asset.assetReturn" code-model="/OA/asset/logic/code" name="assetReturnProcedure"> 
    <parameter name="assetID" type="String"/>  
    <parameter name="returnDate" type="String"/> 
  </procedure>  
  <action name="insertDepreciationAction" procedure="insertDepreciationProcedure"> 
    <public name="year" type="Integer"/>  
    <public name="month" type="Integer"/> 
  </action>  
  <procedure code="asset.insertDepreciation" code-model="/OA/asset/logic/code" name="insertDepreciationProcedure"> 
    <parameter name="year" type="Integer"/>  
    <parameter name="month" type="Integer"/> 
  </procedure>  
  <action name="updateDepreciationAction" procedure="updateDepreciationProcedure"> 
    <public name="year" type="Integer"/>  
    <public name="month" type="Integer"/> 
  </action>  
  <procedure code="asset.updateDepreciation" code-model="/OA/asset/logic/code" name="updateDepreciationProcedure"> 
    <parameter name="year" type="Integer"/>  
    <parameter name="month" type="Integer"/> 
  </procedure>  
  <action name="deleteAssetUseArrangeAction" procedure="deleteAssetUseArrangeProcedure"> 
    <public name="id" type="String"/> 
  </action>  
  <procedure code="asset.deleteAssetUseArrange" code-model="/OA/asset/logic/code" name="deleteAssetUseArrangeProcedure"> 
    <parameter name="id" type="String"/> 
  </procedure> 
  
  <!-- 资产清查状态更新 -->
  <action name="updateAssetConfirmStatusAction" procedure="updateAssetConfirmStatusProcedure">
  </action>
  <procedure code="asset.updateAssetConfirmStatus" code-model="/OA/asset/logic/code" name="updateAssetConfirmStatusProcedure"> 
  </procedure> 
  <action name="checkCanDeleteAssetInDataAction" procedure="checkCanDeleteAssetInDataProcedure"> 
    <public name="id" type="String"/> 
  </action>  
  <procedure code="asset.checkCanDeleteAssetInData" code-model="/OA/asset/logic/code" name="checkCanDeleteAssetInDataProcedure"> 
    <parameter name="id" type="String"/> 
  </procedure> 
  <action name="deleteAssetInDataAction" procedure="deleteAssetInDataProcedure"> 
    <public name="id" type="String"/> 
  </action>  
  <procedure code="asset.deleteAssetInData" code-model="/OA/asset/logic/code" name="deleteAssetInDataProcedure"> 
    <parameter name="id" type="String"/> 
  </procedure> 
</model>

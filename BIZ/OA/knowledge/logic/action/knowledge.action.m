<?xml version="1.0" encoding="UTF-8"?><model xmlns="http://www.justep.com/model">  
  <action name="queryKMFolderAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_Folder"/>  
    <private name="select" type="String" value="OA_KM_Folder,OA_KM_Folder.fName as fName,OA_KM_Folder.fDescription as fDescription,OA_KM_Folder.fParent as fParent,OA_KM_Folder.fFullID as fFullID,OA_KM_Folder.fFullName as fFullName,OA_KM_Folder.fSequence as fSequence,OA_KM_Folder.fUseStatus as fUseStatus,OA_KM_Folder.fUseStatusName as fUseStatusName,OA_KM_Folder.fCreatePsnID as fCreatePsnID,OA_KM_Folder.fCreatePsnName as fCreatePsnName,OA_KM_Folder.fCreateTime as fCreateTime,OA_KM_Folder.version as version"/>  
    <private name="from" type="String" value="OA_KM_Folder OA_KM_Folder"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_Folder"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action name="saveKMFolderAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_Folder"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMFolderAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_Folder"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryFolderAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_Folder"/>  
    <private name="select" type="String" value="OA_KM_Folder,OA_KM_Folder.fName,OA_KM_Folder.fDescription,OA_KM_Folder.fParent,OA_KM_Folder.fFullID,OA_KM_Folder.fFullName,OA_KM_Folder.fSequence,OA_KM_Folder.fIsNeedApprove,OA_KM_Folder.fManagerNames,OA_KM_Folder.fIsInheritApprove,OA_KM_Folder.fIsInheritManager,OA_KM_Folder.fIsInheritRights,OA_KM_Folder.fUseStatus,OA_KM_Folder.fUseStatusName,OA_KM_Folder.fCreatePsnID,OA_KM_Folder.fCreatePsnName,OA_KM_Folder.fCreateTime,OA_KM_Folder.version"/>  
    <private name="from" type="String" value="OA_KM_Folder OA_KM_Folder"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_Folder"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMRightsAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_Rights"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMRightsAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_Rights"/>  
    <private name="select" type="String" value="OA_KM_Rights,OA_KM_Rights.fKWKind AS fKWKind,OA_KM_Rights.fFolderID AS fFolderID,OA_KM_Rights.fKWID AS fKWID,OA_KM_Rights.fKWFullID AS fKWFullID,OA_KM_Rights.fOrgKind AS fOrgKind,OA_KM_Rights.fOrgID AS fOrgID,OA_KM_Rights.fOrgName AS fOrgName,OA_KM_Rights.fOrgFID AS fOrgFID,OA_KM_Rights.fOrgFName AS fOrgFName,OA_KM_Rights.fCanCreateKW AS fCanCreateKW,OA_KM_Rights.fCanReadKW AS fCanReadKW,OA_KM_Rights.fCanReleaseKW AS fCanReleaseKW,OA_KM_Rights.fCanCreateComment AS fCanCreateComment,OA_KM_Rights.fCanReadComment AS fCanReadComment,OA_KM_Rights.fCanScore AS fCanScore,OA_KM_Rights.fCanReadRecord AS fCanReadRecord,OA_KM_Rights.fIsInherit AS fIsInherit,OA_KM_Rights.fCreatePsnID AS fCreatePsnID,OA_KM_Rights.fCreatePsnName AS fCreatePsnName,OA_KM_Rights.fCreateTime AS fCreateTime,OA_KM_Rights.version AS version,OA_KM_Folder.fName AS fFolderName"/>  
    <private name="from" type="String" value="OA_KM_Rights OA_KM_Rights OPTIONAL join OA_KM_Folder OA_KM_Folder on OA_KM_Rights.fFolderID = OA_KM_Folder"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_Rights"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMRightsAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_Rights"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMFDManagerAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_FDManager"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMFDManagerAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_FDManager"/>  
    <private name="select" type="String" value="OA_KM_FDManager,OA_KM_FDManager.version AS version,OA_KM_FDManager.fFolderID AS fFolderID,OA_KM_FDManager.fManagerID AS fManagerID,V_SA_OPPerson.sMainOrgFName AS sOrgFName,OA_KM_FDManager.fManagerName AS fManagerName,OA_KM_FDManager.fIsInherit AS fIsInherit,OA_KM_FDManager.fCreatePsnID AS fCreatePsnID,OA_KM_FDManager.fCreatePsnName AS fCreatePsnName,OA_KM_FDManager.fCreateTime AS fCreateTime"/>  
    <private name="from" type="String" value="OA_KM_FDManager OA_KM_FDManager join V_SA_OPPerson V_SA_OPPerson on OA_KM_FDManager.fManagerID = V_SA_OPPerson"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_FDManager"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMFDManagerAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_FDManager"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMKnowledgeAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_Knowledge"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMKnowledgeAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_Knowledge"/>  
    <private name="select" type="String" value="OA_KM_Knowledge.*"/>  
    <private name="from" type="String" value="OA_KM_Knowledge OA_KM_Knowledge"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_Knowledge"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKnowledgeAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_Knowledge"/>  
    <private name="select" type="String" value="OA_KM_Knowledge,OA_KM_Knowledge.fTitle AS fTitle,OA_KM_Knowledge.fKeyword AS fKeyword,OA_KM_Knowledge.fDocNumber AS fDocNumber,OA_KM_Knowledge.fImportant AS fImportant,OA_KM_Knowledge.fImportantName AS fImportantName,OA_KM_Knowledge.fWriter AS fWriter,OA_KM_Knowledge.fFolderID AS fFolderID,OA_KM_Knowledge.fFolderName AS fFolderName,OA_KM_Knowledge.fFolderFullID AS fFolderFullID,OA_KM_Knowledge.fFolderFullName AS fFolderFullName,OA_KM_Knowledge.fRightsText AS fRightsText,OA_KM_Knowledge.fIsNeedApprove AS fIsNeedApprove,OA_KM_Knowledge.fContentType AS fContentType,OA_KM_Knowledge.fContentTypeName AS fContentTypeName,OA_KM_Knowledge.fTemplateID AS fTemplateID,OA_KM_Knowledge.fTemplateName AS fTemplateName,OA_KM_Knowledge.fLinkURL AS fLinkURL,OA_KM_Knowledge.fContentURL AS fContentURL,OA_KM_Knowledge.fIsTop AS fIsTop,OA_KM_Knowledge.fTopBeginTime AS fTopBeginTime,OA_KM_Knowledge.fTopEndTime AS fTopEndTime,OA_KM_Knowledge.fCreateOgnID AS fCreateOgnID,OA_KM_Knowledge.fCreateOgnName AS fCreateOgnName,OA_KM_Knowledge.fCreateDeptID AS fCreateDeptID,OA_KM_Knowledge.fCreateDeptName AS fCreateDeptName,OA_KM_Knowledge.fCreatePsnID AS fCreatePsnID,OA_KM_Knowledge.fCreatePsnName AS fCreatePsnName,OA_KM_Knowledge.fCreatePsnFID AS fCreatePsnFID,OA_KM_Knowledge.fCreatePsnFName AS fCreatePsnFName,OA_KM_Knowledge.fCreateTime AS fCreateTime,OA_KM_Knowledge.fReleaseOgnID AS fReleaseOgnID,OA_KM_Knowledge.fReleaseOgnName AS fReleaseOgnName,OA_KM_Knowledge.fReleaseDeptID AS fReleaseDeptID,OA_KM_Knowledge.fReleaseDeptName AS fReleaseDeptName,OA_KM_Knowledge.fReleasePsnID AS fReleasePsnID,OA_KM_Knowledge.fReleasePsnName AS fReleasePsnName,OA_KM_Knowledge.fReleasePsnFID AS fReleasePsnFID,OA_KM_Knowledge.fReleasePsnFName AS fReleasePsnFName,OA_KM_Knowledge.fReleaseTime AS fReleaseTime,OA_KM_Knowledge.fReleaseStatus AS fReleaseStatus,OA_KM_Knowledge.fReleaseStatusName AS fReleaseStatusName,OA_KM_Knowledge.fApproverID AS fApproverID,OA_KM_Knowledge.fApproverName AS fApproverName,OA_KM_Knowledge.fApproveTime AS fApproveTime,OA_KM_Knowledge.fBizState AS fBizState,OA_KM_Knowledge.fBizStateName AS fBizStateName,OA_KM_Knowledge.fIsDisplayOnPortal AS fIsDisplayOnPortal,OA_KM_Knowledge.fIsInheritRights AS fIsInheritRights,OA_KM_Knowledge.fOtherFolders AS fOtherFolders,OA_KM_Knowledge.fBizID AS fBizID,OA_KM_Knowledge.fBizType AS fBizType,OA_KM_Knowledge.fBizTypeName AS fBizTypeName,OA_KM_Knowledge.fReaderCount AS fReaderCount,OA_KM_Knowledge.fRepliesCount AS fRepliesCount,OA_KM_Knowledge.version AS version,OA_KM_Knowledge.fPicture1 as fPicture1,OA_KM_Knowledge.fPicture2 as fPicture2,OA_KM_Knowledge.fPicture3 as fPicture3,OA_KM_Knowledge.fPicture4 as fPicture4,OA_KM_Knowledge.fPicture5 as fPicture5,OA_KM_Knowledge.fGZPsnIDs as fGZPsnIDs"/>  
    <private name="from" type="String" value="OA_KM_Knowledge OA_KM_Knowledge join OA_KM_Rights OA_KM_Rights on OA_KM_Knowledge = OA_KM_Rights.fKWID join OA_KM_KWFolder OA_KM_KWFolder on OA_KM_Knowledge = OA_KM_KWFolder.fKWID"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="true"/>  
    <public name="idColumn" type="String" value="OA_KM_Knowledge"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKnowledgeForFolderAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_Knowledge"/>  
    <private name="select" type="String" value="OA_KM_Knowledge.*"/>  
    <private name="from" type="String" value="OA_KM_Knowledge OA_KM_Knowledge join OA_KM_KWFolder OA_KM_KWFolder on OA_KM_KWFolder.fKWID = OA_KM_Knowledge"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_Knowledge"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMKnowledgeAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_Knowledge"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMKnowledgeAction1" procedure="knowledgeSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_Knowledge"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <public name="otherFolderIDs" type="String"/> 
  </action>  
  <procedure code="KMKnowledge.saveKnowledge" code-model="/OA/knowledge/logic/code" name="knowledgeSaveProcedure"> 
    <parameter name="table" type="Table"/>  
    <parameter name="concept" type="String"/>  
    <parameter name="range" type="List"/>  
    <parameter name="readOnly" type="String"/>  
    <parameter name="notNull" type="String"/>  
    <parameter name="dataModel" type="String"/> 
    <parameter name="otherFolderIDs" type="String"/> 
  </procedure>  
  <action data-model="/OA/knowledge/data" name="createKMKWFolderAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_KWFolder"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMKWFolderAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_KWFolder"/>  
    <private name="select" type="String" value="OA_KM_KWFolder.*"/>  
    <private name="from" type="String" value="OA_KM_KWFolder OA_KM_KWFolder"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_KWFolder"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKowledgeFolderAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_KWFolder"/>  
    <private name="select" type="String" value="OA_KM_KWFolder,OA_KM_KWFolder.fKWID AS fKWID,OA_KM_Knowledge.fTitle AS fTitle,OA_KM_Knowledge.fKeyword AS fKeyword,OA_KM_Knowledge.fWriter AS fWriter,OA_KM_Knowledge.fContentTypeName AS fContentTypeName,OA_KM_Knowledge.fReleaseTime AS fReleaseTime,OA_KM_KWFolder.fFolderKind AS fFolderKind,OA_KM_KWFolder.fFolderID AS fFolderID,OA_KM_KWFolder.fKWFullID AS fKWFullID,OA_KM_KWFolder.version AS version"/>  
    <private name="from" type="String" value="OA_KM_KWFolder join OA_KM_Knowledge on OA_KM_KWFolder.fKWID = OA_KM_Knowledge"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_KWFolder"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMKWFolderAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_KWFolder"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMKWPicturesAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_KWPictures"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMKWPicturesAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_KWPictures"/>  
    <private name="select" type="String" value="OA_KM_KWPictures.*"/>  
    <private name="from" type="String" value="OA_KM_KWPictures OA_KM_KWPictures"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_KWPictures"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMKWPicturesAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_KWPictures"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMTemplateAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_Template"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMTemplateAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_Template"/>  
    <private name="select" type="String" value="OA_KM_Template.*"/>  
    <private name="from" type="String" value="OA_KM_Template OA_KM_Template"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_Template"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMTemplateAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_Template"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMREADERSAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_READERS"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMREADERSAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_READERS"/>  
    <private name="select" type="String" value="OA_KM_READERS.*"/>  
    <private name="from" type="String" value="OA_KM_READERS OA_KM_READERS"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_READERS"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMREADERSAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_READERS"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="createKMBatchKWAction" procedure="bizCreateProcedure"> 
    <public name="concept" type="String" value="OA_KM_BatchKW"/>  
    <public name="table" type="Object"/>  
    <public name="defaultValues" type="Map"/>  
    <private name="fnModel" type="String" value="/system/logic/fn"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="queryKMBatchKWAction" procedure="bizQueryProcedure"> 
    <public name="concept" type="String" value="OA_KM_BatchKW"/>  
    <private name="select" type="String" value="OA_KM_BatchKW.*"/>  
    <private name="from" type="String" value="OA_KM_BatchKW OA_KM_BatchKW"/>  
    <private name="aggregate" type="String"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/>  
    <private name="fnModel" type="String"/>  
    <protected name="condition" type="String"/>  
    <permission name="range" type="List"/>  
    <public name="distinct" type="Boolean" value="false"/>  
    <public name="idColumn" type="String" value="OA_KM_BatchKW"/>  
    <public name="filter" type="String"/>  
    <public name="limit" type="Integer"/>  
    <public name="offset" type="Integer"/>  
    <public name="columns" type="String"/>  
    <public name="orderBy" type="String"/>  
    <public name="aggregateColumns" type="String"/>  
    <public name="variables" type="Map"/> 
  </action>  
  <action data-model="/OA/knowledge/data" name="saveKMBatchKWAction" procedure="bizSaveProcedure"> 
    <public name="concept" type="String" value="OA_KM_BatchKW"/>  
    <permission name="range" type="List"/>  
    <protected name="readOnly" type="String"/>  
    <protected name="notNull" type="String"/>  
    <public name="table" type="Object"/>  
    <private name="dataModel" type="String" value="/OA/knowledge/data"/> 
  </action> 
<action name="queryOA_KM_KnowledgeGZPsnAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="OA_KM_KnowledgeGZPsn"/>
<private name="select" type="String" value="OA_KM_KnowledgeGZPsn.*"/>
<private name="from" type="String" value="OA_KM_KnowledgeGZPsn OA_KM_KnowledgeGZPsn"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/OA/knowledge/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="OA_KM_KnowledgeGZPsn"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="saveOA_KM_KnowledgeGZPsnAction" procedure="bizSaveProcedure"><permission name="insertRange" type="List"/>
<permission name="deleteRange" type="List"/>
<permission name="updateRange" type="List"/>
<private name="concept" type="String" value="OA_KM_KnowledgeGZPsn"/>
<private name="dataModel" type="String" value="/OA/knowledge/data"/>
<private name="fnModel" type="String"/>
<protected name="readOnly" type="String"/>
<protected name="notNull" type="String"/>
<public name="table" required="true" type="Table"/>
</action>
<action name="createOA_KM_KnowledgeGZPsnAction" procedure="bizCreateProcedure"><private name="concept" type="String" value="OA_KM_KnowledgeGZPsn"/>
<private name="fnModel" type="String"/>
<public name="table" required="true" type="Table"/>
<public name="defaultValues" type="Map"/>
</action>
<action name="queryV_OA_KW_FirstFolderAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="V_OA_KW_FirstFolder"/>
<private name="select" type="String" value="V_OA_KW_FirstFolder.*"/>
<private name="from" type="String" value="V_OA_KW_FirstFolder V_OA_KW_FirstFolder"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/OA/knowledge/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="V_OA_KW_FirstFolder"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
<action name="queryV_OA_KW_SecondFolderAction" procedure="bizQueryProcedure"><permission name="range" type="List"/>
<private name="concept" type="String" value="V_OA_KW_SecondFolder"/>
<private name="select" type="String" value="V_OA_KW_SecondFolder.*"/>
<private name="from" type="String" value="V_OA_KW_SecondFolder V_OA_KW_SecondFolder"/>
<private name="aggregate" type="String"/>
<private name="dataModel" type="String" value="/OA/knowledge/data"/>
<private name="fnModel" type="String"/>
<protected name="condition" type="String"/>
<public name="distinct" type="Boolean" value="false"/>
<public name="idColumn" type="String" value="V_OA_KW_SecondFolder"/>
<public name="filter" type="String"/>
<public name="limit" type="Integer"/>
<public name="offset" type="Integer"/>
<public name="columns" type="String"/>
<public name="orderBy" type="String"/>
<public name="aggregateColumns" type="String"/>
<public name="variables" type="Map"/>
</action>
</model>
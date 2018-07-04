<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <action name="initFolderRootAction" procedure="initFolderRootProcedure"/>  
  <procedure name="initFolderRootProcedure" code="KMFolder.initFolderRoot" code-model="/OA/knowledge/logic/code"/>  
  <action name="allUseAction" procedure="allUseProcedure"> 
    <public name="kind" type="String"/> 
  </action>  
  <procedure name="allUseProcedure" code="KMFolder.allUse" code-model="/OA/knowledge/logic/code"> 
    <parameter name="kind" type="String"/> 
  </procedure>  
  <action name="updateAllSubNodeFullNameAction" procedure="updateAllSubNodeFullNameProcedure"> 
    <public name="oldFName" type="String"/>  
    <public name="newFName" type="String"/> 
  </action>  
  <procedure name="updateAllSubNodeFullNameProcedure" code="KMFolder.updateAllSubNodeFullName" code-model="/OA/knowledge/logic/code"> 
    <parameter name="oldFName" type="String"/>  
    <parameter name="newFName" type="String"/> 
  </procedure>  
  <action name="getFolderInfoAction" procedure="getFolderInfoProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getFolderInfoProcedure" code="KMFolder.getFolderInfo" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="setDefValueToFolderWhenNewAction" procedure="setDefValueToFolderWhenNewProcedure"> 
    <public name="folderID" type="String"/>  
    <public name="pid" type="String"/> 
  </action>  
  <procedure name="setDefValueToFolderWhenNewProcedure" code="KMFolder.setDefValueToFolderWhenNew" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/>  
    <parameter name="pid" type="String"/> 
  </procedure>  
  <action name="inheritApproveSetAction" procedure="inheritApproveSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="inheritApproveSetProcedure" code="KMFolder.inheritApproveSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="inheritManagerSetAction" procedure="inheritManagerSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="inheritManagerSetProcedure" code="KMFolder.inheritManagerSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="inheritRightsSetAction" procedure="inheritRightsSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="inheritRightsSetProcedure" code="KMFolder.inheritRightsSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="getParentFolderApproveSetAction" procedure="getParentFolderApproveSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getParentFolderApproveSetProcedure" code="KMFolder.getParentFolderApproveSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="updateFolderApproveSetAction" procedure="updateFolderApproveSetProcedure"> 
    <public name="folderID" type="String"/>  
    <public name="isNeedApprove" type="String"/>  
    <public name="isInherit" type="String"/>  
    <public name="isOverride" type="String"/> 
  </action>  
  <procedure name="updateFolderApproveSetProcedure" code="KMFolder.updateFolderApproveSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/>  
    <parameter name="isNeedApprove" type="String"/>  
    <parameter name="isInherit" type="String"/>  
    <parameter name="isOverride" type="String"/> 
  </procedure>  
  <action name="getParentFolderManagerSetAction" procedure="getParentFolderManagerSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getParentFolderManagerSetProcedure" code="KMFolder.getParentFolderManagerSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="getPsnMainOrgFullNameAction" procedure="getPsnMainOrgFullNameProcedure"> 
    <public name="psnID" type="String"/> 
  </action>  
  <procedure name="getPsnMainOrgFullNameProcedure" code="KMUtils.getPsnMainOrgFullName" code-model="/OA/knowledge/logic/code"> 
    <parameter name="psnID" type="String"/> 
  </procedure>  
  <action name="updateAllSubFolderManagerSetAction" procedure="updateAllSubFolderManagerSetProcedure"> 
    <public name="folderID" type="String"/>  
    <public name="isInherit" type="String"/>  
    <public name="kind" type="String"/> 
  </action>  
  <procedure name="updateAllSubFolderManagerSetProcedure" code="KMFolder.updateAllSubFolderManagerSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/>  
    <parameter name="isInherit" type="String"/>  
    <parameter name="kind" type="String"/> 
  </procedure>  
  <action name="getParentFolderRightsSetAction" procedure="getParentFolderRightsSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getParentFolderRightsSetProcedure" code="KMFolder.getParentFolderRightsSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="updateAllSubFDRightsSetAction" procedure="updateAllSubFDRightsSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="updateAllSubFDRightsSetProcedure" code="KMFolder.updateAllSubFDRightsSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="overrideAllSubFDRightsSetAction" procedure="overrideAllSubFDRightsSetProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="overrideAllSubFDRightsSetProcedure" code="KMFolder.overrideAllSubFDRightsSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="overrideKWRightsFromFDSetAction" procedure="overrideKWRightsFromFDSetProcedure"> 
    <public name="folderID" type="String"/>  
    <public name="includeSub" type="String"/> 
  </action>  
  <procedure name="overrideKWRightsFromFDSetProcedure" code="KMFolder.overrideKWRightsFromFDSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/>  
    <parameter name="includeSub" type="String"/> 
  </procedure>  
  <action name="getFolderRightsSetAction" procedure="getFolderRightsSetProcedure"> 
    <public name="folderIDs" type="String"/> 
  </action>  
  <procedure name="getFolderRightsSetProcedure" code="KMUtils.getFolderRightsSet" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderIDs" type="String"/> 
  </procedure>  
  <action name="getFolderManagersAction" procedure="getFolderManagersProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getFolderManagersProcedure" code="KMUtils.getFolderManagers" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="canDeleteFolderAction" procedure="canDeleteFolderProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="canDeleteFolderProcedure" code="KMFolder.canDeleteFolder" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="getAttachedFDRightsAction" procedure="getAttachedFDRightsProcedure"> 
    <public name="kwid" type="String"/> 
  </action>  
  <procedure name="getAttachedFDRightsProcedure" code="KMKnowledge.getAttachedFDRights" code-model="/OA/knowledge/logic/code"> 
    <parameter name="kwid" type="String"/> 
  </procedure>  
  <action name="canCreateKWAction" procedure="canCreateKWProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="canCreateKWProcedure" code="KMKnowledge.canCreateKW" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="canReleaseKWAction" procedure="canReleaseKWProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="canReleaseKWProcedure" code="KMKnowledge.canReleaseKW" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="publishKnowledgeInterfaceAction" global="TRUE" procedure="publishKnowledgeInterfaceProcedure" data-model="/OA/knowledge/data"> 
    <public name="bizData" type="Xml"/> 
    <public name="delFlag" type="String"/> 
  </action>  
  <procedure name="publishKnowledgeInterfaceProcedure" code="KMKnowledge.publishKnowledgeInterface" code-model="/OA/knowledge/logic/code"> 
    <parameter name="bizData" type="Xml"/> 
    <parameter name="delFlag" type="String"/> 
  </procedure>  
  <action name="publishKwInterfaceByFolderAction" global="TRUE" procedure="publishKwInterfaceByFolderProcedure" data-model="/OA/knowledge/data"> 
    <public name="bizData" type="Xml"/> 
  </action>  
  <procedure name="publishKwInterfaceByFolderProcedure" code="KMKnowledge.publishKwInterfaceByFolder" code-model="/OA/knowledge/logic/code"> 
    <parameter name="bizData" type="Xml"/> 
  </procedure>  
  <action name="isPublishedByBizAction" global="TRUE" procedure="isPublishedByBizProcedure" data-model="/OA/knowledge/data"> 
    <public name="fBizID" type="String"/>  
    <public name="fBizType" type="String"/> 
  </action>  
  <procedure name="isPublishedByBizProcedure" code="KMKnowledge.isPublishedByBiz" code-model="/OA/knowledge/logic/code"> 
    <parameter name="fBizID" type="String"/>  
    <parameter name="fBizType" type="String"/> 
  </procedure>  
  <action name="getPublishedRangeByBizAction" global="TRUE" procedure="getPublishedRangeByBizProcedure" data-model="/OA/knowledge/data"> 
    <public name="fBizID" type="String"/>  
    <public name="fBizType" type="String"/> 
  </action>  
  <procedure name="getPublishedRangeByBizProcedure" code="KMKnowledge.getPublishedRangeByBiz" code-model="/OA/knowledge/logic/code"> 
    <parameter name="fBizID" type="String"/>  
    <parameter name="fBizType" type="String"/> 
  </procedure>  
  <action name="getDirectSubFoldersAction" procedure="getDirectSubFoldersProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getDirectSubFoldersProcedure" code="KMUtils.getDirectSubFolders" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="getDirectSubFoldersMGAction" procedure="getDirectSubFoldersMGProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getDirectSubFoldersMGProcedure" code="KMUtils.getDirectSubFoldersMG" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="getPortletDataAction" procedure="getPortletDataProcedure"> 
    <public name="folderFullID" type="String"/>  
    <public name="count" type="String"/>  
    <public name="includeChildren" type="String"/>  
    <public name="isPic" type="String"/> 
  </action>  
  <procedure name="getPortletDataProcedure" code="KMUtils.getPortletData" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderFullID" type="String"/>  
    <parameter name="count" type="String"/>  
    <parameter name="includeChildren" type="String"/>  
    <parameter name="isPic" type="String"/> 
  </procedure>  
  <action name="getNoReadersAction" procedure="getNoReadersProcedure"> 
    <public name="KWID" type="String"/> 
  </action>  
  <procedure name="getNoReadersProcedure" code="ViewKnowledge.getNoReaders" code-model="/OA/knowledge/logic/code"> 
    <parameter name="KWID" type="String"/> 
  </procedure>  
  <action name="getNoReaderCountAction" procedure="getNoReaderCountProcedure"> 
    <public name="KWID" type="String"/> 
  </action>  
  <procedure name="getNoReaderCountProcedure" code="ViewKnowledge.getNoReaderCount" code-model="/OA/knowledge/logic/code"> 
    <parameter name="KWID" type="String"/> 
  </procedure>  
  <action name="insertReadersAction" procedure="insertReadersActionProcedure"> 
    <public name="KWID" type="String"/> 
  </action>  
  <procedure name="insertReadersActionProcedure" code="ViewKnowledge.insertReaders" code-model="/OA/knowledge/logic/code"> 
    <parameter name="KWID" type="String"/> 
  </procedure>  
  <action name="getKnowledgeMapManagersAction" procedure="getKnowledgeMapManagersProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="getKnowledgeMapManagersProcedure" code="KWMap.getKnowledgeMapManagers" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure>  
  <action name="getCurrentPsnKnowledgeMapAction" procedure="getCurrentPsnKnowledgeMapProcedure"> 
    <public name="folderID" type="String"/>  
    <public name="queryKind" type="String"/> 
  </action>  
  <procedure name="getCurrentPsnKnowledgeMapProcedure" code="KWMap.getCurrentPsnKnowledgeMap" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/>  
    <parameter name="queryKind" type="String"/> 
  </procedure>  
  <action name="executeSQLAction" procedure="executeSQLProcedure"> 
    <public name="sql" type="String"/> 
  </action>  
  <procedure name="executeSQLProcedure" code="KMUtils.executeSQL" code-model="/OA/knowledge/logic/code"> 
    <parameter name="sql" type="String"/> 
  </procedure> 
  <action name="docBatchPublishAction" procedure="docBatchPublishProcedure"> 
    <public name="id" type="String"/> 
  </action>  
  <procedure name="docBatchPublishProcedure" code="KMKnowledge.docBatchPublish" code-model="/OA/knowledge/logic/code"> 
    <parameter name="id" type="String"/> 
  </procedure> 
  <action name="updateFolderDataAction" procedure="updateFolderDataProcedure"> 
    <public name="folderID" type="String"/> 
    <public name="field" type="String"/> 
    <public name="dataType" type="String"/> 
    <public name="value" type="String"/> 
  </action>  
  <procedure name="updateFolderDataProcedure" code="KMFolder.updateFolderData" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
    <parameter name="field" type="String"/> 
    <parameter name="dataType" type="String"/> 
    <parameter name="value" type="String"/> 
  </procedure> 
  <action name="canReceiveDocAction" procedure="canReceiveDocProcedure"> 
    <public name="psnID" type="String"/> 
    <public name="docID" type="String"/> 
  </action>  
  <procedure name="canReceiveDocProcedure" code="KMKnowledge.canReceiveDoc" code-model="/OA/knowledge/logic/code"> 
    <parameter name="psnID" type="String"/> 
    <parameter name="docID" type="String"/> 
  </procedure> 
  <action name="copyKnowledgeAction" procedure="copyKnowledgeProcedure"> 
    <public name="kwid" type="String"/> 
  </action>  
  <procedure name="copyKnowledgeProcedure" code="KMKnowledge.copyKnowledge" code-model="/OA/knowledge/logic/code"> 
    <parameter name="kwid" type="String"/> 
  </procedure> 
  <action name="getPsnMaxSecretLevelAction" procedure="getPsnMaxSecretLevelProcedure"> 
  </action>  
  <procedure name="getPsnMaxSecretLevelProcedure" code="KMKnowledge.getPsnMaxSecretLevel" code-model="/OA/knowledge/logic/code"> 
  </procedure> 
  <action name="canDeleteNodeAction" procedure="canDeleteNodeProcedure"> 
    <public name="folderID" type="String"/> 
  </action>  
  <procedure name="canDeleteNodeProcedure" code="KMFolder.canDeleteNode" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderID" type="String"/> 
  </procedure> 
  <action name="getValueByConditionAction" procedure="getValueByConditionProcedure"> 
    <public name="tableName" type="String"/> 
    <public name="fields" type="String"/> 
    <public name="condition" type="String"/> 
  </action>  
  <procedure name="getValueByConditionProcedure" code="KMKnowledge.getValueByCondition" code-model="/OA/knowledge/logic/code"> 
    <parameter name="tableName" type="String"/> 
    <parameter name="fields" type="String"/> 
    <parameter name="condition" type="String"/> 
  </procedure> 
  <action name="getKWFolderIDsAction" procedure="getKWFolderIDsProcedure"> 
    <public name="kwID" type="String"/> 
  </action>  
  <procedure name="getKWFolderIDsProcedure" code="KMKnowledge.getKWFolderIDs" code-model="/OA/knowledge/logic/code"> 
    <parameter name="kwID" type="String"/> 
  </procedure> 
  <action name="deleteKWInfoAction" procedure="deleteKWInfoProcedure"> 
    <public name="BizID" type="String"/> 
  </action>  
  <procedure name="deleteKWInfoProcedure" code="KMKnowledge.deleteKWInfo" code-model="/OA/knowledge/logic/code"> 
    <parameter name="BizID" type="String"/> 
  </procedure> 
  <action name="getFolderDataAction" procedure="getFolderDataProcedure"> 
    <public name="folderFullID" type="String"/>  
    <public name="count" type="String"/>  
    <public name="includeChildren" type="String"/>  
    <public name="isPic" type="String"/> 
  </action>  
  <procedure name="getFolderDataProcedure" code="KMUtils.getFolderData" code-model="/OA/knowledge/logic/code"> 
    <parameter name="folderFullID" type="String"/>  
    <parameter name="count" type="String"/>  
    <parameter name="includeChildren" type="String"/>  
    <parameter name="isPic" type="String"/> 
  </procedure> 
  <action name="addKnowledgeGZAction" procedure="addKnowledgeGZProcedure"> 
    <public name="kwid" type="String"/>  
  </action>  
  <procedure name="addKnowledgeGZProcedure" code="KMUtils.addKnowledgeGZ" code-model="/OA/knowledge/logic/code"> 
    <parameter name="kwid" type="String"/>  
  </procedure> 
  <action name="cancelKnowledgeGZAction" procedure="cancelKnowledgeGZProcedure"> 
    <public name="kwid" type="String"/>  
  </action>  
  <procedure name="cancelKnowledgeGZProcedure" code="KMUtils.cancelKnowledgeGZ" code-model="/OA/knowledge/logic/code"> 
    <parameter name="kwid" type="String"/>  
  </procedure> 
</model>

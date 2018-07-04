<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="folderSetProcess">
    <label language="zh_CN">栏目设置</label>
    <has-action action="createKMFolderAction"/>
    <has-action action="queryKMFolderAction"/>
    <has-action action="saveKMFolderAction"/>
    <has-action action="createKMFDManagerAction"/>
    <has-action action="queryKMFDManagerAction"/>
    <has-action action="saveKMFDManagerAction"/>
    <has-action action="createKMRightsAction"/>
    <has-action action="queryKMRightsAction"/>
    <has-action action="saveKMRightsAction"/>
    <has-action action="initFolderRootAction"/>
    <has-action action="allUseAction"/>
    <has-action action="updateAllSubNodeFullNameAction"/>
    <has-action action="setDefValueToFolderWhenNewAction"/>
    <has-action action="getFolderInfoAction"/>
    <has-action action="inheritApproveSetAction"/>
    <has-action action="inheritManagerSetAction"/>
    <has-action action="inheritRightsSetAction"/>
    <has-action action="canDeleteFolderAction"/>
    <has-action action="getParentFolderApproveSetAction"/>
    <has-action action="updateFolderApproveSetAction"/>
    <has-action action="getParentFolderManagerSetAction"/>
    <has-action action="getPsnMainOrgFullNameAction"/>
    <has-action action="updateAllSubFolderManagerSetAction"/>
    <has-action action="getParentFolderRightsSetAction"/>
    <has-action action="updateAllSubFDRightsSetAction"/>
    <has-action action="overrideAllSubFDRightsSetAction"/>
    <has-action action="overrideKWRightsFromFDSetAction"/>
    <static-activity name="folderSetActivity">
      <label language="zh_CN">栏目设置</label>
    </static-activity>
  </process>
</model>

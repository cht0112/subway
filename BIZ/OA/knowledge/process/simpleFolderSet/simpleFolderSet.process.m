<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="simpleFolderSetProcess">
    <label language="zh_CN">简版栏目设置</label>
    <has-action action="saveKMFolderAction"/>
    <has-action action="queryKMFolderAction"/>  
    <has-action action="createKMFolderAction"/>
    <has-action action="createKMRightsAction"/>
    <has-action action="queryKMRightsAction"/>
    <has-action action="saveKMRightsAction"/>
    <has-action action="createKMFDManagerAction"/>
    <has-action action="queryKMFDManagerAction"/>
    <has-action action="saveKMFDManagerAction"/>
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
    <static-activity name="baseFDSetActivity">
      <label language="zh_CN">基类栏目设置</label>
    </static-activity>
    <static-activity name="newsFDSetActivity">
      <label language="zh_CN">新闻栏目设置</label>
    </static-activity>
    <static-activity name="noticeFDSetActivity">
      <label language="zh_CN">公告栏目设置</label>
    </static-activity>
    <static-activity name="docFDSetActivity">
      <label language="zh_CN">文件栏目设置</label>
    </static-activity>
    <static-activity name="ruleFDSetActivity">
      <label language="zh_CN">规章制度设置</label>
    </static-activity>
  </process>
</model>

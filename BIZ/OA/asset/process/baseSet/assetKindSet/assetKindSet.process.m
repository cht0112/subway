<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="assetKindSetProcess"> 
    <label language="zh_CN">assetKindSet</label>  
    <static-activity name="assetKindSetActivity"> 
      <label language="zh_CN">资产类别设置</label> 
    </static-activity>  
      
      
      
     
  






















































<has-action action="createASKindAction" access-permission="public"></has-action>
<has-action action="queryASKindAction" access-permission="public"></has-action>
<has-action action="saveASKindAction" access-permission="public"><public name="table" type="Object"></public>
</has-action>
<listener action="saveASKindAction" event="after" handler="assetKindSetProcessAfterSaveASKindActionProcedure"></listener>
<has-action action="queryTOOL_TYPE_CODEAction" access-permission="public"></has-action>
<has-action action="queryTOOL_CATEGORY_CODEAction" access-permission="public"></has-action>
<has-action action="queryTOOL_SORT_CODEAction" access-permission="public"></has-action>
</process> 
</model>

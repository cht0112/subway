<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">  
  <process name="recycledProcess"> 
    <label language="zh_CN">回收站</label>  
    <static-activity name="mainActivity"><label language="zh_CN">回收站</label>
</static-activity>  
      
      
      
      
      
     
  





































































































































<has-action action="queryOPOrgAction" access-permission="public"><protected name="condition" type="String" value="SA_OPOrg.sValidState = -1"></protected>
</has-action>
<has-action action="queryOPPersonAction" access-permission="public"><protected name="condition" type="String" value="SA_OPPerson.sValidState = -1"></protected>
</has-action>
<has-action action="physicalDeletePersonAction" access-permission="public"></has-action>
<has-action action="restorePersonAction" access-permission="public"></has-action>
<has-action action="restoreOrgAction" access-permission="public"></has-action>
<has-action action="physicalDeleteOrgAction" access-permission="public"><public name="id" type="String"></public>
<public name="version" type="Integer"></public>
<public name="deletePerson" type="Boolean"></public>
</has-action>
<listener action="physicalDeleteOrgAction" event="before" handler="recycledProcessBeforePhysicalDeleteOrgActionProcedure"></listener>
</process> 
</model>

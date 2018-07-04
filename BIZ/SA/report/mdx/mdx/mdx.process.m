<?xml version="1.0" encoding="utf-8"?>

<model xmlns="http://www.justep.com/model">
  <process name="mdxProcess" kind="SYSTEM">
    <has-action action="queryMDXAction">
    	<public name="dataModel" type="String" value="/demo/report/olap"/> 
    </has-action>
    <has-action action="queryDrillMDXAction">
    	<public name="dataModel" type="String" value="/demo/report/olap"/>     
    </has-action>
    <has-action action="initMDXCubeMetaDataAction">
    	<public name="dataModel" type="String" value="/demo/report/olap"/>     
    </has-action>
    <static-activity name="mdxActivity"></static-activity>
  </process>
</model>

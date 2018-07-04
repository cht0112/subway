<window 
  xmlns:xu="http://www.xmldb.org/xupdate" 
  xmlns:ev="http://www.w3.org/2001/xml-events" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml" 
  xmlns:xui="http://www.justep.com/xui" 
  xmlns:xs="http://www.w3.org/2001/XMLSchema" 
  xmlns:xforms="http://www.justep.com/xforms" 
  xmlns="http://www.justep.com/xui" 
  component="/UI/system/components/window.xbl.xml#window" 
  extends="/UI/OA/meeting/process/meetBudgetApply/mainActivity.w" >

   <xforms:model id="model1" style="top:224px;height:auto;left:405px;"  xui:update-mode="merge"/>
   <data id="DataMeetBugdetApply" auto-load="true" auto-new="false"  xui:update-mode="merge"/>
   <rule id="dataBizRule10" readonly="contains('bizActivity3,bizActivity4',call('justep.Context.getCurrentActivity'))"  xui:update-mode="merge"/>

</window>
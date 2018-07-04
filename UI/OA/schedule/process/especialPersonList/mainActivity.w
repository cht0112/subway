<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:184px;left:111px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="true" id="especialPersonData" concept="OA_SD_especialSchedulePerson" order-by="fOrderNum:desc" onBeforeSave="mainActivity.especialPersonDataBeforeSave"> 
      <creator id="default1" action="/OA/schedule/logic/action/createEspecialSchedulePersonAction"/>  
      <reader id="default2" action="/OA/schedule/logic/action/queryEspecialSchedulePersonAction"/>  
      <writer id="default3" action="/OA/schedule/logic/action/saveEspecialSchedulePersonAction"/>  
      <calculate-relation relation="checkbox" type="xs:string"/>  
      <rule id="dataBizRule1" relation="fExecutorID" required="true()" alert="'人员名称不能为空!'"/>  
      <rule id="dataBizRule2" relation="fExecutorName" required="true()" alert="'人员名称不能为空!'"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbarsOfPerson"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBarOfPerson" data="especialPersonData"> 
        <item name="insert-item" id="barItem1"/>  
        <item name="save-item" id="barItem2"/>  
        <item id="customBarItem1"> 
          <xforms:trigger id="trigger1" appearance="image" src="/UI/system/images/doc/deletefile.gif" dis-src="/UI/system/images/doc/deletefile_g.gif"> 
            <xforms:label id="xuiLabel1">删除</xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript2">mainActivity.trigger1Click(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="refresh-item" id="barItem4"/>  
        <item name="filter-item" id="barItem5"/>  
        <item name="filter-pattern-item" id="barItem6"/>  
        <item name="separator" id="separatorItem1"/>  
        <item name="first-item" id="barItem7"/>  
        <item name="pre-item" id="barItem8"/>  
        <item name="next-item" id="barItem9"/>  
        <item name="last-item" id="barItem10"/>  
        <item name="separator" id="separatorItem2"/>  
        <item name="custom-page-item" id="customPageItem1"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/orgSelect.xbl.xml#orgSelect" id="org-tree" show-org-types="ogn,dpt,grp,pos,psm" selectable-org-types="psm"> 
      <xforms:model id="mdOrg"> 
        <xui:data component="/UI/system/components/data.xbl.xml#bizData" id="dOrg"> 
          <reader id="orgAction" action="/SA/opm/logic/action/queryOrgAction1"/> 
        </xui:data> 
      </xforms:model>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" id="treeSltDept" data-ref="dOrg" ref="data('especialPersonData')/fExecutorID" label-ref="data('especialPersonData')/fExecutorName" onCloseup="mainActivity.treeSltDeptCloseup"> 
        <xforms:itemset/> 
      </xhtml:div> 
    </xhtml:div>  
    <!--  
      
    
    <xhtml:div id="org-tree" height="100%" component="/UI/system/components/orgTree.xbl.xml#orgTree"> 
      <data id="orgTreeData" component="/UI/system/components/data.xbl.xml#bizData"
        auto-load="true"/>  
      <xhtml:div height="100%" width="100%" style="background-color: white; overflow: auto"
        component="/UI/system/components/grid.xbl.xml#grid" ref="data('especialPersonData')/fExecutorID" label-ref="data('especialPersonData')/fExecutorName" /> 
    </xhtml:div>  
    -->  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridOfPersonList" data="especialPersonData"> 
      <xui:column ref="checkbox" type="checkbox" width="30" label="#master_checkbox"/>  
      <xui:column id="gridColumn2" ref="fExecutorName" label="人员名称" type="select" width="800" editor="org-tree"> 
        <xui:place control="orgSelectOfPerson" id="controlPlace6"/> 
      </xui:column> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%;" id="rootLayout"> 
      <xhtml:table style="height:100%;width:100%;table-layout:fixed; " component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr style="height:35px;"> 
          <xhtml:td> 
            <xui:place control="toolbarsOfPerson"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xui:place control="gridOfPersonList" id="controlPlace4" style="height:100%;width:100%;"/>  
            <xui:place control="org-tree" id="controlPlace5"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

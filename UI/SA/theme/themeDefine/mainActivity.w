<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:data="http://www.justep.com/x5/xui/data#" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:534px;left:24px;"> 
    <xforms:instance id="_no_" type="simple" columnids="name,value" language="CONSTANT"/>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" id="main" concept="SA_ThemeDefine" onBeforeSave="mainBeforeSave" onSaveCommit="mainSaveCommit" onAfterRefresh="mainAfterRefresh"> 
      <creator action="/SA/theme/logic/action/createThemeDefineAction"/>  
      <writer action="/SA/theme/logic/action/saveThemeDefineAction"/>  
      <reader action="/SA/theme/logic/action/queryThemeDefineAction"/>  
      <rule id="dataBizRule1" relation="sThemeName" required="true()" alert="'主题名不能为空！'"/>  
      <calculate-relation relation="btn" type="xs:string"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="activity" src="" auto-load="true" id="custom_filter" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell>activity</cell> 
        </row> 
      </rows> 
    </data>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">model1Load()</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view id="toolslist"> 
      <xhtml:table id="table_1"> 
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
              <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="navigatorBar1" data="main" mode="IMG_TXT_LR"> 
                <xui:item> 
                  <xforms:output id="insertManagement" mediatype="text/html" value="eval(&quot;template.generateSaveAsTemplateUI('main');&quot;)"/> 
                </xui:item>  
                <xui:item> 
                  <xforms:output id="disableManagement" mediatype="text/html" value="eval(&quot;template.generateDisableTemplateUI('main');&quot;)"/> 
                </xui:item>  
                <item name="save-item" id="barItem2"/>  
                <item name="refresh-item" id="barItem4"/>  
                <item name="filter-item" id="barItem5"/> 
              </xui:bar> 
            </xhtml:div> 
          </xhtml:td>  
          <xhtml:td> 
            <xforms:trigger id="trigger_1"> 
              <xforms:label>修改</xforms:label>  
              <xforms:action ev:event="DOMActivate"> 
                <xforms:script> <![CDATA[  
							        	loadLayOut()
									]]> </xforms:script> 
              </xforms:action> 
            </xforms:trigger> 
          </xhtml:td>  
          <xhtml:td> 
            <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" auto-size="false" default-label-ref="'选择状态'" ref="data('custom_filter')/activity" style="width:140px;" onCloseup="gridSelect3Dropdown" id="gridState"> 
              <xforms:label ref="label"/>  
              <xforms:value ref="value"/>  
              <xforms:itemset> 
                <xforms:column ref="label"/>  
                <xforms:column ref="value" visible="false"/>  
                <itemset-data> 
                  <rows xmlns="">  
                    <row> 
                      <cell>使用中</cell>  
                      <cell>activity</cell> 
                    </row>  
                    <row> 
                      <cell>停用</cell>  
                      <cell>disable</cell> 
                    </row>  
                    <row> 
                      <cell>全部</cell>  
                      <cell>all</cell> 
                    </row> 
                  </rows> 
                </itemset-data> 
              </xforms:itemset> 
            </xhtml:div> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:view>  
    <xui:view id="templatelist"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="themegrid" data="main" onRowClick="themegridRowClick" style="width:100%"> 
        <column id="gridColumn3" label="状态" ref="btn" type="html" onRender="template.showState" width="150px" align="center"/>  
        <column id="gridColumn1" ref="sThemeName" label="主题名" type="ed" width="200px" align="center"/> 
      </xhtml:div>  
      <xui:layout style="height:100%" id="layout2"> 
        <place control="themegrid" id="controlPlace4" style="width:100%;height:100%;"/> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table style="width:100%;height:100%;table-layout:fixed;"> 
        <xhtml:tr height="35px"> 
          <xhtml:td> 
            <place control="toolslist"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr valign="top"> 
          <xhtml:td style="height:100%;"> 
            <place control="templatelist"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script type="text/javascript" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

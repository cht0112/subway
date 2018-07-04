<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:118px;left:47px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_LogSetting" direct-delete="true" id="listData" limit="20" offset="1" relations="version,sModel,sModelName,sProcess,sProcessName,sActivity,sActivityName,sActionName,sAction,sCreateTime,sCreatorFID,sCreatorID,sCreatorFName,sCreatorName" xui:update-mode="whereVersion" order-by="sCreateTime:desc"> 
      <creator action="/system/logic/action/createLogSettingAction" id="default1"/>  
      <reader action="/system/logic/action/queryLogSettingAction" id="default2"/>  
      <writer action="/system/logic/action/saveLogSettingAction" id="default3"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="edit" auto-load="true" id="buttonStatus" store-type="simple"> 
      <rows xmlns="">  
        <row> 
          <cell/> 
        </row> 
      </rows>  
      <rule id="dataRule1" column="edit" readonly="call('settingActivity.allowEdit')"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbar"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="listData" id="navigatorBar"> 
        <item id="insertItem" name="insert-item"> 
          <xforms:action ev:event="DOMActivate" id="action5"> 
            <xforms:script id="xformsScript5">settingActivity.insertItemClick(event)</xforms:script> 
          </xforms:action> 
        </item>  
        <item id="edit-item"> 
          <xforms:trigger appearance="image" dis-src="/UI/system/images/standardToolbar/standard/un_edit.gif" id="trigger2" src="/UI/system/images/standardToolbar/standard/edit.gif" ref="data('buttonStatus')/edit"> 
            <xforms:label id="xuiLabel1">编辑</xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1"> 
              <xforms:script id="xformsScript1">settingActivity.trigger2Click(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="delete-item"/>  
        <item name="refresh-item"/>  
        <item name="filter-pro-item" id="barItem1"/>
        <item> 
          <xforms:trigger id="use"> 
            <xforms:label>启用</xforms:label>  
            <xforms:action id="action2" ev:event="DOMActivate"> 
              <xforms:script id="xformsScript2">settingActivity.useClick(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="separator"/>  
        <item name="custom-page-item"/>  
        <item name="separator"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" height="364px" id="detailDialog" modal="true" onReceive="settingActivity.detailDialogReceive" title="新建日志设置" url="/SA/log/settingActivityDetail.w" width="516px" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="listData" id="listGrid" onRowDblClick="settingActivity.listGridRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default100" label="模块" ref="sModelName" type="ro" width="150px"/>  
      <column id="default4" label="功能" ref="sActivityName" type="ro" width="150px"/>  
      <column id="default5" label="操作" ref="sActionName" type="ro" width="150px"/>  
      <column id="default6" label="创建时间" ref="sCreateTime" type="date" width="100px" readonly="true"/>  
      <column id="default7" label="创建者" ref="sCreatorName" type="ro" width="100px"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table component="/UI/system/components/tableLayout.xbl.xml#tableLayout" id="table" style="width:100%;height:100%;table-layout:fixed;"> 
        <xhtml:tr> 
          <xhtml:td style="height:35px"> 
            <xhtml:table> 
              <xhtml:tr> 
                <xhtml:td> 
                  <place control="toolbar"/> 
                </xhtml:td>  
                <xhtml:td> 
                  <xhtml:input id="searchText" style="width:150px; border: 0px; border-bottom: 1px solid #c0c0c0"/>  
                  <xforms:trigger id="search"> 
                    <xforms:label>查询</xforms:label>  
                    <xforms:action id="action3" ev:event="DOMActivate"> 
                      <xforms:script id="xformsScript3">settingActivity.searchClick(event)</xforms:script> 
                    </xforms:action> 
                  </xforms:trigger> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xui:place control="detailDialog" id="controlPlace1" style="top:130px;left:217px;"/>  
            <place control="listGrid" style="width:100%;height:100%;"/> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="settingActivity.js"/> 
  </xui:resource> 
</xui:window>

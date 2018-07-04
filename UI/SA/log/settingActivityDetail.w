<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="wMain">  
  <xforms:model id="model1" style="top:318px;height:auto;left:197px;"> 
    <data auto-load="false" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_LogSetting" confirm-refresh="false" direct-delete="true" id="detailData" limit="1" relations="version,sModel,sModelName,sProcess,sProcessName,sActivity,sActivityName,sActionName,sAction,sCreateTime,sCreatorFID,sCreatorID,sCreatorFName,sCreatorName" store-type="simple"> 
      <reader action="/system/logic/action/queryLogSettingAction"/>  
      <writer action="/system/logic/action/saveLogSettingAction"/>  
      <creator action="/system/logic/action/createLogSettingAction"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xui:view class="xui-container" id="detailView"> 
      <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="windowReceiver" onReceive="settingActivityDetail.windowReceiverReceive"/>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择业务功能" width="396px" height="314px" modal="true" id="wdSelectSingleFunction" url="/SA/OPM/dialogs/selectFunTree/selectSingleFunction.w" onReceive="settingActivityDetail.wdSelectSingleFunctionReceive" dialogUpdate="true"/>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择操作" width="396px" height="264px" modal="true" id="windowDialog1" url="/SA/log/selectSingleAction.w" onReceive="settingActivityDetail.windowDialog1Receive" dialogUpdate="true"/>  
      <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择模块" width="396px" height="264px" modal="true" id="modelDialog" url="/SA/OPM/dialogs/selectModelTree/selectSingleModelTree.w" onReceive="settingActivityDetail.modelDialogReceive" dialogUpdate="true"/>  
      <xforms:input id="iptSModelName" ref="data('detailData')/sModelName"/>  
      <xforms:input id="iptSProcessName" ref="data('detailData')/sActivityName"/>  
      <xforms:input id="iptSActionName" ref="data('detailData')/sActionName"/>  
      <xforms:output id="iptSCreateTime" ref="data('detailData')/sCreateTime" format="yyyy-MM-dd"/>  
      <xforms:output id="iptSCreatorName" ref="data('detailData')/sCreatorName"/>  
      <xui:layout id="layout1" style="height:100%;width:100%;"> 
        <xui:place control="windowReceiver" id="controlPlace1" style="position:absolute;top:262px;left:427px;"/>  
        <xui:place control="wdSelectSingleFunction" id="controlPlace2" style="position:absolute;top:262px;left:427px;"/>  
        <xui:place control="windowDialog1" id="controlPlace3"/>  
        <xui:place control="modelDialog" id="controlPlace4"/>  
        <xhtml:table style="table-layout:fixed;"> 
          <xhtml:tr> 
            <xhtml:td style="width:70px"> 
              <xhtml:label>模 块：</xhtml:label> 
            </xhtml:td>  
            <xhtml:td> 
              <place control="iptSModelName" id="default2" style="font-size:10pt;width:70%;border: 0; border-bottom: 1px solid #c0c0c0;"/>  
              <xhtml:img id="searchModelButton" src="/UI/system/images/doc/file_pro.gif" onclick="settingActivityDetail.searchModelButtonClick(event)" alt="选择模块"/>  
              <xhtml:input type="button" value="设置为所有" id="modelInitBtn" onclick="settingActivityDetail.modelInitBtnClick(event)"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr style="height:10px"/>  
          <xhtml:tr> 
            <xhtml:td style="width:70px"> 
              <xhtml:label>功 能：</xhtml:label> 
            </xhtml:td>  
            <xhtml:td> 
              <place control="iptSProcessName" id="default2" style="font-size:10pt;width:70%;border: 0; border-bottom: 1px solid #c0c0c0;"/>  
              <xhtml:img style="" id="searchProcessButton" src="/UI/system/images/doc/file_pro.gif" onclick="settingActivityDetail.searchProcessButtonClick(event)" alt="选择功能"/>  
              <xhtml:input type="button" value="设置为所有" id="activityInitBtn" onclick="settingActivityDetail.activityInitBtnClick(event)"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr style="height:10px"/>  
          <xhtml:tr> 
            <xhtml:td> 
              <xhtml:label>操 作：</xhtml:label> 
            </xhtml:td>  
            <xhtml:td> 
              <place control="iptSActionName" id="default6" style="font-size:10pt;width:70%;border: 0; border-bottom: 1px solid #c0c0c0;"/>  
              <xhtml:img style="" id="searchActionButton" src="/UI/system/images/doc/file_pro.gif" onclick="settingActivityDetail.searchActionButtonClick(event)" alt="选择操作"/>  
              <xhtml:input type="button" value="设置为所有" id="actionInitBtn" onclick="settingActivityDetail.actionInitBtnClick(event)"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr style="height:10px"/>  
          <xhtml:tr> 
            <xhtml:td> 
              <xhtml:label>创建者：</xhtml:label> 
            </xhtml:td>  
            <xhtml:td> 
              <place control="iptSCreatorName" id="default10" style="font-size:10pt;width:150px"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr style="height:10px"/>  
          <xhtml:tr> 
            <xhtml:td> 
              <xhtml:label>创建时间：</xhtml:label> 
            </xhtml:td>  
            <xhtml:td> 
              <place control="iptSCreateTime" id="default8" style="font-size:10pt;width:150px"/> 
            </xhtml:td> 
          </xhtml:tr> 
        </xhtml:table> 
      </xui:layout> 
    </xui:view>  
    <xui:layout style="width:100%;height:100%;"> 
      <xhtml:table id="table" component="/UI/system/components/tableLayout.xbl.xml#tableLayout" style="height:100%;width:100%;"> 
        <xhtml:tr> 
          <xhtml:td> 
            <place control="detailView" style="height:100%;width:100%;"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr1" height="30px"> 
          <xhtml:td id="td1"> 
            <xhtml:table class="xui-container" id="table1" style="height:100%;width:100%;"> 
              <xhtml:tr id="tr3"> 
                <xhtml:td id="td4"/>  
                <xhtml:td id="td5" style="width:65px;"> 
                  <xhtml:input id="btnOK" onclick="settingActivityDetail.btnOKClick(event)" style="width:60px;" type="button" value="确 定"/> 
                </xhtml:td>  
                <xhtml:td id="td6" style="width:65px;"> 
                  <xhtml:input id="btnCancel" onclick="settingActivityDetail.btnCancelClick(event)" onselect="(event)" style="width:60px;" type="button" value="取消"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="settingActivityDetail.js"/> 
  </resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:111px;left:166px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" auto-load="false" id="dSortOrgs" concept="SA_OPOrg" relations="sName,sCode,sOrgKindID,version" limit="-1"> 
      <reader id="default1" action="/SA/OPM/logic/action/queryOPOrgAction"/>  
      <filter name="validStateFilter" id="filter1">SA_OPOrg.sValidState = 1</filter> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xforms:trigger id="btnOK"> 
      <xforms:label id="xuiLabel1">确定</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action1"> 
        <xforms:script id="xformsScript6">sortOrgs.btnOKClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnCancel"> 
      <xforms:label id="xuiLabel2">取消</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action2"> 
        <xforms:script id="xformsScript5">sortOrgs.btnCancelClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xhtml:div component="/UI/system/components/windowDialogReceiver.xbl.xml#windowDialogReceiver" id="receiver" onReceive="sortOrgs.receiverReceive"/>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="gridSortOrg" data="dSortOrgs"> 
      <xui:column id="gridColumn3" ref="sOrgKindID" label=" " type="html" width="20px" onRender="sortOrgs.gridSortOrgSOrgKindIDRender"/>  
      <xui:column id="gridColumn1" ref="sName" label="名称" type="ro"/>  
      <xui:column id="gridColumn2" ref="sCode" label="编码" type="ro"/> 
    </xhtml:div>  
    <xforms:trigger id="btnMoveTop" src="/UI/SA/OPM/images/goTop.gif" dis-src="/UI/SA/OPM/images/un_goTop.gif" appearance="image"> 
      <xforms:label id="xuiLabel3">移到第一个</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action3"> 
        <xforms:script id="xformsScript4">sortOrgs.btnMoveTopClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnMoveUp" src="/UI/SA/OPM/images/goUp.gif" dis-src="/UI/SA/OPM/images/un_goUp.gif" appearance="image"> 
      <xforms:label id="xuiLabel4">移到上一个</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action4"> 
        <xforms:script id="xformsScript3">sortOrgs.btnMoveUpClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnMoveDown" src="/UI/SA/OPM/images/goDown.gif" dis-src="/UI/SA/OPM/images/un_goDown.gif" appearance="image"> 
      <xforms:label id="xuiLabel5">移到下一个</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action5"> 
        <xforms:script id="xformsScript2">sortOrgs.btnMoveDownClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="btnMoveBottom" src="/UI/SA/OPM/images/goBottom.gif" dis-src="/UI/SA/OPM/images/un_goBottom.gif" appearance="image"> 
      <xforms:label id="xuiLabel6">移到末一个</xforms:label>  
      <xforms:action ev:event="DOMActivate" id="action6"> 
        <xforms:script id="xformsScript1">sortOrgs.btnMoveBottomClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xui:layout style="height:100%;width:100%;position:relative;" id="rootLayout" type="flow"> 
      <xhtml:table id="table1" class="xui-container" style="height:100%;width:100%;table-layout:fixed;" cellpadding="0" cellspacing="8" border="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr id="tr1"> 
          <xhtml:td id="td1"> 
            <xhtml:table id="table3" class="xui-container" style="height:100%;width:100%;table-layout:fixed;" cellpadding="0" cellspacing="0" border="0"> 
              <xhtml:tr id="tr5"> 
                <xhtml:td id="td10"> 
                  <xui:place control="receiver" id="controlPlace1" style="top:188px;left:227px;"/>  
                  <xui:place control="gridSortOrg" id="controlPlace5" style="height:100%;width:100%;border-style:solid solid solid solid;border-width:1px 1px 1px 1px;border-color:#C0C0C0 #C0C0C0 #C0C0C0 #C0C0C0;"/> 
                </xhtml:td>  
                <xhtml:td id="td11" style="width:25px;"> 
                  <xhtml:table id="table4" class="xui-container" style="height:100%;width:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr id="tr10"> 
                      <xhtml:td id="td19"/> 
                    </xhtml:tr>  
                    <xhtml:tr id="tr11"> 
                      <xhtml:td id="td20" height="35px"> 
                        <xui:place control="btnMoveTop" id="controlPlace7" style="width:24px;"/> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr id="tr12"> 
                      <xhtml:td id="td21" height="35px"> 
                        <xui:place control="btnMoveUp" id="controlPlace8" style="width:24px;"/> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr id="tr9"> 
                      <xhtml:td id="td18" height="35px"> 
                        <xui:place control="btnMoveDown" id="controlPlace9" style="width:24px;"/> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr id="tr7"> 
                      <xhtml:td id="td14" height="35px"> 
                        <xui:place control="btnMoveBottom" id="controlPlace10" style="width:24px;"/> 
                      </xhtml:td> 
                    </xhtml:tr>  
                    <xhtml:tr id="tr8"> 
                      <xhtml:td id="td16"/> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="tr2" height="22px"> 
          <xhtml:td id="td3" align="right"> 
            <xhtml:table cellspacing="0" cellpadding="0" border="0" style="table-layout:fixed"> 
              <xhtml:tr> 
                <xhtml:td align="right"> 
                  <xui:place control="btnOK" style="width:75px;margin-right:8px;" id="controlPlace2"/> 
                </xhtml:td>  
                <xhtml:td width="75px"> 
                  <xui:place control="btnCancel" id="controlPlace3" style="width:75px"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="sortOrgs.js"/>  
    <xhtml:script id="opmUtils" src="/UI/SA/OPM/js/OpmUtils.js"/> 
  </xui:resource> 
</xui:window>

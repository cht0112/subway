<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="model1" style="top:35px;left:458px;"> 
    <data component="/UI/system/components/data.xbl.xml#data" columns="sRootName,sRootPath,sSubPath,sAccess,sLimitSize" src="" auto-load="false" id="docLinkDefine" style=";" store-type="simple"/>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="sDocId,sDocName,sFileID,sDocPath" src="" auto-load="true" id="docTemplate" style=";" confirm-refresh="false"> 
      <rule id="dataRule1" column="docName"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView" auto-load="true"> 
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择目录" width="396px" height="264px" modal="true" id="selectRootDialog" url="/SA/doc/docPermission/docNodeSelect.w" onReceive="docSetting.selectRootDialogReceive" dialogUpdate="true"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="选择模板" width="446px" height="274px" modal="true" id="selectTmpDialog" onReceive="docSetting.selectTmpReceive" url="/SA/doc/docPermission/selectTmpDialog.w" status="maximize" dialogUpdate="true"/>  
    <xui:view auto-load="true" id="view1"> 
      <layout style="width:100%;height:90px;" id="layout1"> 
        <xhtml:div id="div1"> 
          <xhtml:table border="0" cellspacing="0" cellpadding="0" style="width:100%;height:100%;table-layout:fixed;text-align:right;"> 
            <xhtml:tr height="30px" id="keyIdTr" style="display:none"> 
              <xhtml:td width="100px"> 
                <xhtml:div>keyId名称：</xhtml:div> 
              </xhtml:td>  
              <xhtml:td width="160px"> 
                <xhtml:input type="text" value="" id="keyIdIpt" style="width:100%"/> 
              </xhtml:td>  
              <xhtml:td/>  
              <xhtml:td width="160px"/> 
            </xhtml:tr>  
            <xhtml:tr height="30px"> 
              <xhtml:td width="100px">根文件夹名称：</xhtml:td>  
              <xhtml:td width="160px"> 
                <!--<xforms:input ref="data('docLinkDefine')/sRootName"/>-->  
                <xhtml:table border="0" cellspacing="0" cellpadding="0" style="width:100%;height:20px;table-layout:fixed;border: 1px solid #7F9DB9;"> 
                  <xhtml:tr> 
                    <xhtml:td> 
                      <xforms:output style="width:100%;text-align:left;" ref="data('docLinkDefine')/sRootName"/> 
                    </xhtml:td>  
                    <xhtml:td style="text-align:right;width:26px;padding-right:2px;"> 
                      <xforms:trigger style="width:100%;height:16px;"> 
                        <xforms:label>...</xforms:label>  
                        <xforms:action ev:event="DOMActivate"> 
                          <xforms:script>docSetting.newRootPath();</xforms:script> 
                        </xforms:action> 
                      </xforms:trigger> 
                    </xhtml:td> 
                  </xhtml:tr> 
                </xhtml:table> 
              </xhtml:td>  
              <xhtml:td>子文件夹名称(表达式)：</xhtml:td>  
              <xhtml:td> 
                <xforms:input ref="data('docLinkDefine')/sSubPath" style="width:100%"/> 
              </xhtml:td> 
            </xhtml:tr>  
            <xhtml:tr> 
              <xhtml:td width="100px">权限：</xhtml:td>  
              <xhtml:td> 
                <!--<xforms:input ref="data('docLinkDefine')/sAccess"/>-->  
                <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" ref="data('docLinkDefine')/sAccess" style="width:100%" id="authSelect"> 
                  <xforms:label ref="name"/>  
                  <xforms:value ref="access"/>  
                  <xforms:itemset independence="false"> 
                    <itemset-data xmlns="" id="default27">  
                      <rows id="default28"> 
                        <row id="default29"> 
                          <cell id="default30">列表</cell>  
                          <cell id="default31">1</cell> 
                        </row>  
                        <row id="default32"> 
                          <cell id="default33">读取</cell>  
                          <cell id="default34">3</cell> 
                        </row>  
                        <row id="default35"> 
                          <cell id="default36">下载</cell>  
                          <cell id="default37">7</cell> 
                        </row>  
                        <row id="default38"> 
                          <cell id="default39">下载 上传</cell>  
                          <cell id="default40">263</cell> 
                        </row>  
                        <row id="default41"> 
                          <cell id="default42">下载 修改</cell>  
                          <cell id="default43">519</cell> 
                        </row>  
                        <row id="default44"> 
                          <cell id="default45">下载 上传 修改</cell>  
                          <cell id="default46">775</cell> 
                        </row>  
                        <row id="default47"> 
                          <cell id="default48">下载 修改 删除</cell>  
                          <cell id="default49">1543</cell> 
                        </row>  
                        <row id="default50"> 
                          <cell id="default51">下载 上传 修改 删除</cell>  
                          <cell id="default52">1799</cell> 
                        </row> 
                      </rows> 
                    </itemset-data>  
                    <xforms:column ref="name" width="150" id="default14"/>  
                    <xforms:column ref="access" visible="false" id="default13"/> 
                  </xforms:itemset> 
                </xhtml:div> 
              </xhtml:td>  
              <xhtml:td>限制大小(Byte)：</xhtml:td>  
              <xhtml:td> 
                <xforms:input ref="data('docLinkDefine')/sLimitSize" style="width:100%"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div> 
      </layout> 
    </xui:view>  
    <xhtml:div style="height:100%;width:100%;" component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid1" data="docTemplate" class="grid-compact"> 
      <xui:column id="gridColumn1" ref="sDocId" label="模板ID" type="ed" width="130px"/>  
      <xui:column id="gridColumn2" ref="sDocName" label="模板名称" type="ed" width="130px"/>  
      <xui:column id="gridColumn3" ref="sFileID" label="模板FileID" type="ed" width="130px"/>  
      <xui:column id="gridColumn4" ref="sDocPath" label="模板全路径" type="ed" width="*"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%;" id="rootLayout"> 
      <xui:place control="selectTmpDialog" id="controlPlace10" style="top:175px;left:204px;"/>  
      <xui:place control="selectRootDialog" id="controlPlace6" style="top:182px;left:159px;"/>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="122px" id="borderLayout-top1"> 
          <xui:place control="view1" id="controlPlace1"/>  
          <xhtml:div component="/UI/system/components/buttonBar.xbl.xml#buttonBar" id="buttonBar1" style="width:100%;height:32px;"> 
            <xui:place control="trigger7" id="controlPlace12" style="width:70px;"/>  
            <xui:place control="trigger8" id="controlPlace13"/>  
            <xui:place control="trigger5" id="controlPlace9"/>  
            <xui:place control="trigger6" id="controlPlace11" style="width:93px;"/> 
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xui:place control="grid1" id="controlPlace5" style="width:100%;height:100%;"/> 
        </center>  
        <bottom size="38px"> 
          <xui:place control="trigger10" id="controlPlace15" style="float:right;width:75px;margin-top:8px;"/>  
          <xui:place control="trigger9" id="controlPlace14" style="float:right;width:75px;margin-top:8px;margin-right:8px;"/> 
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:trigger id="trigger5" appearance="minimal" icon-class="icon-system-refresh"> 
      <xforms:label id="default5">刷新</xforms:label>  
      <xforms:action id="action1" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript1">docSetting.docTemplateCustomRefresh(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger id="trigger6" appearance="minimal" icon-class="icon-system-ok"> 
      <xforms:label id="default6">选择模板</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">docSetting.selectTmpBtnClick(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger7" appearance="image-text" class="button-blue" icon-class="icon-system-plus" operation-owner="docTemplate" operation="new"> 
      <xforms:label id="default7"><![CDATA[新增]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger8" appearance="minimal" operation-owner="docTemplate" operation="delete"> 
      <xforms:label id="default8"><![CDATA[删除]]></xforms:label> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger10" appearance="minimal"> 
      <xforms:label id="default10"><![CDATA[取消]]></xforms:label>  
      <xforms:action id="action4" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript4"><![CDATA[justep.windowDialogReceiver.windowCancel(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger>  
    <xforms:trigger component="/UI/system/components/trigger.xbl.xml#trigger" id="trigger9" class="button-green"> 
      <xforms:label id="default9"><![CDATA[确定]]></xforms:label>  
      <xforms:action id="action3" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript3"><![CDATA[docSetting.windowEnsure(event)]]></xforms:script> 
      </xforms:action> 
    </xforms:trigger> 
  </xui:view>  
  <xui:resource id="resource1"> 
    <xhtml:script src="/UI/system/components/dialog/dialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialog.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/windowDialogReceiver.js"/>  
    <xhtml:script id="htmlScript1" src="docSetting.js"/> 
  </xui:resource> 
</xui:window>

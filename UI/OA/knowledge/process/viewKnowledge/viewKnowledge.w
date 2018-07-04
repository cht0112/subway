<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:ev="http://www.w3.org/2001/xml-events"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="viewKnowledge.js"/>  
    <xhtml:script src="/UI/system/service/doc/docUtil.js" /> 
  </xui:resource>  
  <resource id="resource1"> 
    <xhtml:script id="htmlScript1" src="viewKnowledge.js"/> 
  </resource>  
  <xforms:model id="mdKnowledge" style="top:126px;left:75px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1"
      limit="1" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge"
      store-type="simple"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKMKnowledgeAction"/> 
    </data>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdKnowledgeConstructDone(event)</xforms:script> 
    </xforms:action>  
    <xforms:action id="action1" ev:event="onload"> 
      <xforms:script id="xformsScript1">mdKnowledgeLoad(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <view id="noreadListView"> 
      <xhtml:div id="noReaderDiv" style="width:100%;height:100%;overflow-y:auto"/> 
    </view>  
    <xui:layout style="height:100%;width:100%"> 
      <place control="dlgReaded" style="top:55px;left:17px;" id="controlPlace9"/>   
      <xforms:dialog id="attachmentDialog" width="500px" height="200px" title="附件"> 
        <xhtml:div style="height:100%;width:100%;overflow:auto;"> 
          <xhtml:table height="100%" width="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
            <xhtml:tr> 
              <xhtml:td valign="top"> 
                <xhtml:div style="width:100%;height:100%;border:0px solid #808A87; padding-left:0px; padding-right:0px; padding-top:0px; padding-bottom:0px;"
                  component="/UI/system/components/attachmentEditor.xbl.xml#attachmentEditor"
                  id="attachmentEditor1" model="mdKnowledge" ref="data('dKnowledge')/fAttachment"
                  root-path="/root" sub-path="concat('业务附件/OA/知识中心',toString(yearOf(currentDate())),'/',toString(monthOf(currentDate())))"
                  access="7" display-style="list" auto-load="true" display-buttons="upload:false;download:true;template:false;edit:false;delete:false;history:false;"/> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </xhtml:div> 
      </xforms:dialog>  
      <xforms:dialog id="noReaderDialog" width="360px" height="378px" title="未阅人员"> 
        <place control="noreadListView"/> 
      </xforms:dialog>  
      <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
        id="borderLayout1" style="width:100%; height: 100%;;"> 
        <top size="50px" id="borderLayout-top1"> 
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top size="25px" id="borderLayout-top2"> 
              <xhtml:table style="width:100%;" border="0"> 
                <xhtml:tr> 
                  <xhtml:td width="65px;" align="left"> 
                    <xhtml:label id="label1" class="xui-label" style="width:65px;height:11px;left:0px;">主 栏 目:</xhtml:label> 
                  </xhtml:td>  
                  <xhtml:td align="left"> 
                    <xui:place control="optFolder" id="controlPlace4"/> 
                  </xhtml:td>  
                  <xhtml:td style="width:65px;" align="left"> 
                    <xhtml:label id="label4" class="xui-label" style="height:11px;width:65px;">发布部门:</xhtml:label> 
                  </xhtml:td>  
                  <xhtml:td align="left"> 
                    <xui:place control="optDept" id="controlPlace6" style=""/> 
                  </xhtml:td>  
                  <xhtml:td style="width:65px;" align="left"> 
                    <xhtml:label id="label5" class="xui-label" style="width:65px;height:11px;">发 布 人:</xhtml:label> 
                  </xhtml:td>  
                  <xhtml:td align="left"> 
                    <xui:place control="optPsn" id="controlPlace7" style=""/> 
                  </xhtml:td>  
                  <xhtml:td style="width:65px;" align="left"> 
                    <xhtml:label id="label6" class="xui-label" style="height:11px;width:65px;">发布时间:</xhtml:label> 
                  </xhtml:td>  
                  <xhtml:td align="left"> 
                    <xui:place control="optTime" id="controlPlace10"/> 
                  </xhtml:td>  
                  <xhtml:td align="right"> 
                    <xui:place control="trigger1" id="controlPlace1" style="width:64px;"/> 
                  </xhtml:td> 
                </xhtml:tr> 
              </xhtml:table> 
            </top>  
            <center id="borderLayout-center2"> 
              <xhtml:table style="height:100%;" border="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                <xhtml:tr> 
                  <xhtml:td style="width:65px;"> 
                    <xhtml:label id="label2" class="xui-label" style="width:65px;height:11px;vertical-align:middle;">其他栏目:</xhtml:label> 
                  </xhtml:td>  
                  <xhtml:td align="left" style="width:800px;"> 
                    <xui:place control="optOtherFolder" id="controlPlace5"/> 
                  </xhtml:td> 
                </xhtml:tr> 
              </xhtml:table> 
            </center> 
          </xhtml:div> 
        </top>  
        <center id="borderLayout-center1"> 
          <xhtml:div style="width:100%;height:100%;text-align: center;"> 
            <iframe frameborder="1" name="staticIframe" id="staticIframe" src=""
              style="width:100%;height:100%"/> 
          </xhtml:div> 
        </center>  
        <bottom size="20px" id="borderLayout-bottom1"> 
          <xhtml:table style="width:100%;height:100%"  component="/UI/system/components/tableLayout.xbl.xml#tableLayout">  
            <xhtml:tr height="20px" valign="middle"> 
              <xhtml:td align="left"> 
                <xhtml:div style="font-size:12px;align:right"> 
                  <span id="contentLinkSpan"/> 附件
                  <xhtml:a href="#" style="color:#0000FF;cursor:hand" id="aAtachment"
                    onclick="showAttachmentDialog();">0</xhtml:a> 个
                </xhtml:div> 
              </xhtml:td>  
              <xhtml:td align="right"> 
                <xhtml:div style="font-size:12px;align:right">已阅
                  <xhtml:a href="#" style="color:#0000FF;cursor:hand" onclick="showReadedDialog();"
                    id="readedCounts">0</xhtml:a> 人 未阅 
                  <xhtml:a href="#" style="color:#0000FF;cursor:hand" onclick="showNotReadedDialog();"
                    id="readingCounts">0</xhtml:a> 人
                </xhtml:div> 
              </xhtml:td> 
            </xhtml:tr> 
          </xhtml:table> 
        </bottom> 
      </xhtml:div> 
    </xui:layout>  
    <xforms:output id="optFolder" ref="data('dKnowledge')/fFolderName"/>  
    <xforms:output id="optOtherFolder" ref="data('dKnowledge')/fOtherFolders"/>  
    <xforms:output id="optDept" ref="data('dKnowledge')/fReleaseDeptName"/>  
    <xforms:output id="optPsn" ref="data('dKnowledge')/fReleasePsnName"/>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="已阅人员" width="300px" height="400px" modal="true" id="dlgReaded" url="/OA/knowledge/process/viewKnowledge/readed.w"
      onSend="dlgReadedSend"/>  
    <xforms:output id="optTime" ref="data('dKnowledge')/fReleaseTime" format="yyyy-MM-dd hh:mm"/>  
    <xforms:trigger id="trigger1"> 
      <xforms:label id="xuiLabel1">增加关注</xforms:label>  
      <xforms:action id="action2" ev:event="DOMActivate"> 
        <xforms:script id="xformsScript2">trigger1Click(event)</xforms:script> 
      </xforms:action> 
    </xforms:trigger> 
  </xui:view> 
</xui:window>

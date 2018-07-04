<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="selectKnowledge.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource>  
  <xforms:model id="mdMain" style="top:60px;left:12px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="true" id="dKnowledge" concept="OA_KM_Knowledge"> 
      <reader action="/OA/knowledge/logic/action/queryKnowledgeForFolderAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dFolder" concept="OA_KM_Folder" store-type="grid" is-tree="true"> 
      <reader action="/OA/knowledge/logic/action/queryFolderAction"/>  
      <tree-option parent-relation="fParent" root-filter="OA_KM_Folder.fParent = 'public'"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" columns="" src="" auto-load="false" id="dSelected"/> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="trbKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge" data="dKnowledge"> 
        <item name="refresh-item"/>  
        <item name="next-page-item"/>  
        <item name="all-page-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vFilterBar"> 
      <xhtml:div component="/UI/appCommon/components/filter.xbl.xml#treeFilter" id="trfFolder" filter-data="dKnowledge" filter-relation="OA_KM_Knowledge.fAttachFolder.fFolderID" multi-select="true" delay="true" default-label="'全部'" cascade="false" onShowNodeImg="trfFolderShowNodeImg"> 
        <xforms:label ref="fName"/>  
        <xforms:value ref="OA_KM_Folder"/>  
        <xforms:itemset data="dFolder" auto-load-data="true"> 
          <xforms:column ref="fName"/>  
          <xforms:column ref="OA_KM_Folder" visible="false"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dKnowledge" filter-relations="fFolderName,fTitle,fDocNumber,fWriter"/>  
      <layout style="height:100%;position:relative;width:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;width:27px;top:11px;left:3px;"> 
          <xhtml:font size="2">栏目</xhtml:font> 
        </xhtml:label>  
        <place control="trfFolder" id="controlPlace3" style="position:absolute;width:140px;top:7px;left:30px;"/>  
        <xhtml:label style="position:absolute;position:absolute;width:26px;top:11px;left:186px;"> 
          <xhtml:font size="2">查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;width:140px;top:7px;left:215px;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vSrcKnowledge"> 
      <xhtml:div style="border:1px solid #99bbe8;" component="/UI/system/components/grid.xbl.xml#grid" id="grdSrc" data="dKnowledge"> 
        <column label="序号" ref="recNo" show-index="true"/>  
        <column label="标题" ref="fTitle" type="ro" width="225"/>  
        <column label="关键字" ref="fKeyword" width="100" type="ro" visible="false"/>  
        <column label="作者" ref="fWriter" width="60" type="ro" visible="false"/>  
        <column label="正文类型" ref="fContentTypeName" width="80" type="ro" visible="false"/>  
        <column label="发布时间" ref="fReleaseTime" width="120" type="ro" visible="false"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <place control="grdSrc" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vButton"> 
      <xforms:trigger id="selectTrigger"> 
        <xforms:label>选 择 ＞</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script> <![CDATA[
						select();
					]]> </xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="cancelTrigger"> 
        <xforms:label>＜ 取 消</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script> <![CDATA[
						cancel();
					]]> </xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <xforms:trigger id="cancleAllTrigger"> 
        <xforms:label>全部取消</xforms:label>  
        <xforms:action ev:event="DOMActivate"> 
          <xforms:script> <![CDATA[
						cancelAll();
					]]> </xforms:script> 
        </xforms:action> 
      </xforms:trigger>  
      <layout style="height:100%;width:100%s;"> 
        <xhtml:table border="0px" width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
          <xhtml:tr> 
            <xhtml:td/> 
          </xhtml:tr>  
          <xhtml:tr height="10px"> 
            <xhtml:td/> 
          </xhtml:tr>  
          <xhtml:tr height="10px"> 
            <xhtml:td> 
              <place control="selectTrigger"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr height="40px"> 
            <xhtml:td/> 
          </xhtml:tr>  
          <xhtml:tr height="10px"> 
            <xhtml:td> 
              <place control="cancelTrigger"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr height="10px"> 
            <xhtml:td/> 
          </xhtml:tr>  
          <xhtml:tr height="10px"> 
            <xhtml:td> 
              <place control="cancleAllTrigger"/> 
            </xhtml:td> 
          </xhtml:tr>  
          <xhtml:tr> 
            <xhtml:td/> 
          </xhtml:tr> 
        </xhtml:table> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vDesKnowledge"> 
      <xhtml:div style="border:1px solid #99bbe8;" component="/UI/system/components/grid.xbl.xml#grid" id="grdDes" data="dSelected"> 
        <column label="序号" ref="recNo" show-index="true"/>  
        <column label="标题" ref="fTitle" type="ro" width="225"/>  
        <column label="关键字" ref="fKeyword" width="100" type="ro" visible="false"/>  
        <column label="作者" ref="fWriter" width="60" type="ro" visible="false"/>  
        <column label="正文类型" ref="fContentTypeName" width="80" type="ro" visible="false"/>  
        <column label="发布时间" ref="fReleaseTime" width="120" type="ro" visible="false"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <place control="grdDes" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table border="0" width="100%" height="100%" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr height="20px"> 
          <xhtml:td> 
            <xhtml:table width="100%" height="100%" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td width="90px"> 
                  <place control="trbKnowledge"/> 
                </xhtml:td>  
                <xhtml:td> 
                  <place control="vFilterBar"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr> 
          <xhtml:td> 
            <xhtml:table border="0" style="width:100%;height:100%;" cellspacing="0" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr> 
                <xhtml:td valign="top"> 
                  <place control="vSrcKnowledge"/> 
                </xhtml:td>  
                <xhtml:td> 
                  <place control="vButton"/> 
                </xhtml:td>  
                <xhtml:td valign="top"> 
                  <place control="vDesKnowledge"/> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr height="22px"> 
                <xhtml:td colspan="3"> 
                  <xhtml:table width="100%" height="100%" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr> 
                      <xhtml:td style="width:80%;height:20px" valign="top" align="left"> 
                        <input type="button" value="刷新" onclick="windowRefresh()" id="refresh-btn"/> 
                      </xhtml:td>  
                      <xhtml:td valign="top" align="right"> 
                        <input type="button" value="确定" onclick="windowEnsure(windowSend())" id="ensure-btn"/> 
                      </xhtml:td>  
                      <xhtml:td valign="top" align="left"> 
                        <input type="button" value="取消" onclick="windowCancel()" id="cancel-btn"/> 
                      </xhtml:td> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="selectFolder.js"/>  
    <xhtml:script src="/UI/system/components/windowDialog/FrameWindow.js"/> 
  </xui:resource>  
  <xforms:model id="model1" style="top:70px;left:21px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="-1" update-mode="whereVersion" auto-load="true" id="dFolder" concept="OA_KM_Folder" is-tree="true" order-by="fName asc"> 
      <reader action="/OA/knowledge/logic/action/queryFolderAction"/>  
      <tree-option parent-relation="fParent" root-filter="OA_KM_Folder.fParent = 'public'"/>  
      <filter name="dataFilter" id="filter1">OA_KM_Folder.fUseStatus = 1</filter> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="-1" update-mode="whereVersion" auto-load="false" id="dSelected" concept="OA_KM_Folder"> 
      <reader action="/OA/knowledge/logic/action/queryFolderAction"/> 
    </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vFolderTree"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdFolder" data="dFolder" onShowNodeImg="showNodeImg"> 
        <column ref="fName" label="名称" type="tree" width="180"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <place control="grdFolder" style="width:100%;height:100%;"/> 
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
          <xhtml:tr height="20px"> 
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
    <xui:view auto-load="true" id="vFolderSelected"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" id="grdDes" data="dSelected"> 
        <column label="序号" ref="recNo" show-index="true"/>  
        <column label="栏目ID" ref="fFolderID" type="ro" visible="false"/>  
        <column label="栏目ID路径" ref="fFolderFullID" type="ro" visible="false"/>  
        <column ref="fName" label="名称" width="180"/> 
      </xhtml:div>  
      <layout style="height:100%;width:100%;"> 
        <place control="grdDes" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table border="0" style="width:100%;height:100%;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td width="200px"> 
            <place control="vFolderTree"/> 
          </xhtml:td>  
          <xhtml:td width="85px"> 
            <place control="vButton"/> 
          </xhtml:td>  
          <xhtml:td height="240px"> 
            <place control="vFolderSelected"/> 
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
    </xui:layout> 
  </xui:view> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xui:resource> 
    <xhtml:script src="kwMapActivity.js"/>  
    <xhtml:script src="/UI/OA/knowledge/js/KWUtils.js"/>  
    <xhtml:script src="/UI/appCommon/js/appCommon.js"/> 
  </xui:resource>  
  <xforms:model id="mdKWMap" style="top:35px;left:9px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="1" limit="20" update-mode="whereVersion" auto-load="false" id="dKnowledge" concept="OA_KM_Knowledge" order-by="fReleaseTime:desc"> 
      <reader id="kwReader" action="/OA/knowledge/logic/action/queryKnowledgeAction"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#data" auto-load="true" columns="fName,folderFullID,fParent" store-type="simple" id="dFolder"> 
      <rows xmlns="">  
        <row id="map"> 
          <cell>知识地图</cell>  
          <cell>map</cell>  
          <cell/> 
        </row> 
      </rows> 
    </data>  
    <xforms:action ev:event="xforms-model-construct-done"> 
      <xforms:script>mdKWMapxforms_model_construct_done(event)</xforms:script> 
    </xforms:action> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xui:view auto-load="true" id="vFolderTree"> 
      <xhtml:div style="border:1px solid #99bbe8;;width:100%;height:100%" data="dFolder" id="grdFolder" appearance="tree" onRowExpand="grdFolderRowExpand" component="/UI/system/components/grid.xbl.xml#grid" delay="true" onShowNodeImg="grdFolderShowNodeImg" onAfterIndexChanged="grdFolderAfterIndexChanged"> 
        <column label="名称" ref="fName" type="tree" width="120"/>  
        <column label="栏目路径" ref="folderFullID"/>  
        <column label="父栏目" ref="fParent"/> 
      </xhtml:div>  
      <xui:layout style="height:100%;width:100%"> 
        <place control="grdFolder"/> 
      </xui:layout> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbrKnowledge"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" id="nvgKnowledge" data="dKnowledge"> 
        <item name="refresh-item"/>  
        <item name="next-page-item"/>  
        <item name="all-page-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vKnowledge"> 
      <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" style="border:1px solid #99bbe8;" id="grdKnowledge" data="dKnowledge" delay="false"> 
        <column label="" ref="recNo" show-index="true"/>  
        <column ref="fTitle" label="标题" width="300" type="html" onRender="hyperlink2Knowledge"/>  
        <column ref="fDocNumber" label="文号" type="ro" width="150"/>  
        <column ref="fWriter" label="作者" type="ro" width="60"/>  
        <column ref="fReleaseDeptName" label="发布部门" type="ro" width="100"/>  
        <column ref="fReleasePsnName" label="发布人" type="ro" width="60"/>  
        <column ref="fReleaseTime" label="发布时间" width="120" type="dateTime"/> 
      </xhtml:div>  
      <layout style="height:100%" id="layout1"> 
        <place control="grdKnowledge" style="width:100%;height:100%;"/> 
      </layout> 
    </xui:view>  
    <xui:view auto-load="true" id="vFilter"> 
      <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" id="smartFilter" filter-data="dKnowledge" filter-relations="fFolderName,fTitle,fDocNumber,fWriter"/>  
      <xhtml:div component="/UI/appCommon/components/extDateFilter.xbl.xml#extDateFilter" id="extDateFilter1" filter-data="dKnowledge" filter-date-relation1="fReleaseTime"/>  
      <layout style="height:100%;position:relative;width:100%;" type="absolute"> 
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;left:-2px;top:14px;"> 
          <xhtml:font size="2" id="default1">发布时间</xhtml:font> 
        </xhtml:label>  
        <place control="extDateFilter1" style="position:absolute;width:80px;left:53px;top:8px;"/>  
        <xhtml:label style="position:absolute;position:absolute;width:26px;left:149px;top:14px;"> 
          <xhtml:font size="2">查询</xhtml:font> 
        </xhtml:label>  
        <place control="smartFilter" id="controlPlace1" style="position:absolute;width:140px;top:7.5px;left:179px;"/>  
        <xhtml:input style="position:absolute;position:absolute;width:21px;top:10px;left:334px;" id="displaySubChb" type="checkbox" onclick="javascript:displayKnowledge()"/>  
        <xhtml:label style="position:absolute;position:absolute;position:absolute;width:55px;left:360px;top:14px;"> 
          <xhtml:font size="2">显示下级</xhtml:font> 
        </xhtml:label> 
      </layout> 
    </xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table width="100%" height="100%" border="0" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
        <xhtml:tr> 
          <xhtml:td width="200px"> 
            <place control="vFolderTree"/> 
          </xhtml:td>  
          <xhtml:td valign="top"> 
            <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
              <xhtml:tr height="35px"> 
                <xhtml:td valign="top"> 
                  <xhtml:table border="0" width="100%" height="100%" cellspacing="0" style="table-layout: fixed;" component="/UI/system/components/tableLayout.xbl.xml#tableLayout"> 
                    <xhtml:tr> 
                      <xhtml:td width="100px"> 
                        <place control="tbrKnowledge" style="width:100%;height:100%;"/> 
                      </xhtml:td>  
                      <xhtml:td> 
                        <place control="vFilter"/> 
                      </xhtml:td> 
                    </xhtml:tr> 
                  </xhtml:table> 
                </xhtml:td> 
              </xhtml:tr>  
              <xhtml:tr> 
                <xhtml:td valign="top"> 
                  <place control="vKnowledge"/> 
                </xhtml:td> 
              </xhtml:tr> 
            </xhtml:table> 
          </xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view> 
</xui:window>

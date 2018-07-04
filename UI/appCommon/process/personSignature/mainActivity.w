<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="model1" style="top:105px;left:52px;"> 
    <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="20" update-mode="whereVersion" auto-load="true" id="dPersonMember" concept="SA_OPOrg" onIndexChanged="dPersonMemberIndexChanged" onAfterRefresh="dPersonMemberAfterRefresh" onAfterRefreshPage="dPersonMemberAfterRefreshPage"> 
      <reader id="default1" action="/system/logic/action/queryOrgAction"/>  
      <filter name="filter0" id="filter1">sValidState = 1 and sOrgKindID = 'psm'</filter> 
    </data>
  <data component="/UI/system/components/data.xbl.xml#bizData" offset="0" limit="20" update-mode="whereVersion" auto-load="true" id="dPersonSignature" concept="AP_PersonSignature" store-type="simple"><reader id="default2" action="/appCommon/logic/action/queryPersonSignatureAction"></reader>
  </data> 
  </xforms:model>  
  <xui:view id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="toolbars1"> 
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"> 
        <item id="barItem3">
          <xhtml:div data="dPersonMember" component="/UI/system/components/pageNavigator.xbl.xml#pageNavigator" id="pageNavigator1"/>
        </item> 
        <item id="barItem1"> 
          <xhtml:div component="/UI/appCommon/components/extOrgFilter.xbl.xml#extOrgFilter" style="width:140px" id="extOrgFilter1" filter-data="dPersonMember" person-id-relation="sPersonID" org-url-relation="sFID"/> 
        </item>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/appCommon/components/smartFilter.xbl.xml#smartFilter" style="width:200px;" id="smartFilter1" filter-data="dPersonMember" filter-relations="sName,sCode,sFName"/> 
        </item>
  </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/blob.xbl.xml#image" id="blobImage1" data="dPersonSignature" concept="AP_PersonSignature" relation="fSignature"/>  
    <xhtml:div style="width:100%;height:100%" component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" id="grid2" data="dPersonMember"> 
      <column id="default7" ref="sName" label="名称" type="ed" width="100"/>  
      <column id="default8" ref="sCode" label="编码" type="ed" width="100"/>  
      <column id="default9" ref="sFName" label="全路径名" type="ed" width="242"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:table id="table1" style="width:100%;height:100%;"> 
        <xhtml:tr id="default5"> 
          <xhtml:td id="td1" colspan="2" style="height:30px;"> 
            <place control="toolbars1" id="controlPlace2"/> 
          </xhtml:td> 
        </xhtml:tr>  
        <xhtml:tr id="default6"> 
          <xhtml:td id="td3"> 
            <place control="grid2" id="controlPlace4"/> 
          </xhtml:td>  
          <xhtml:td id="td4" style="width:210px;"> 
            <place control="blobImage1" id="controlPlace3" style="width:200px;height:100px;"/> 
          <xhtml:span id="span1" style="width:200px;font-size:9pt">签名图片的高宽比为1:2</xhtml:span></xhtml:td> 
        </xhtml:tr> 
      </xhtml:table> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="resource1"><xhtml:script id="htmlScript1" src="mainActivity.js"></xhtml:script></xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:120px;left:366px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TRAINING_CONTENT_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" update-mode="whereAll" confirm-delete="false" onValueChanged="mainActivity.dataMainValueChanged" filter-relations="TRAINING_NAME,TRAINING_DOC_ID,TRAINING_DOC,TRAINING_CONTENT"> 
      <reader action="/metrodetection/training_management/logic/action/myQueryContentAction" id="default3"/>  
      <writer action="/metrodetection/training_management/logic/action/saveTRAINING_CONTENT_INFOAction" id="default4"/>  
      <creator action="/metrodetection/training_management/logic/action/createTRAINING_CONTENT_INFOAction" id="default5"/>  
      <rule id="default8" relation="TRAINING_NAME" required="true()"/> 
    <calculate-relation relation="recCB" id="calculate-relation1" type="xsd:integer"></calculate-relation>
  <calculate-relation relation="docNode" id="calculate-relation2" type="xsd:string"></calculate-relation></data> 
  <xforms:action id="action2" ev:event="xbl-loaded"><xforms:script id="xformsScript2"><![CDATA[mainActivity.mdDefaultXBLLoaded(event)]]></xforms:script></xforms:action>
  <data id="docNodeTree" component="/UI/system/components/data.xbl.xml#bizData" concept="SA_DocNode" is-tree="true" offset="1" limit="-1" auto-load="true" confirm-refresh="false">
   <reader action="/SA/doc/logic/action/queryDocNodeAction" id="default16"></reader>
   <writer id="default17"></writer>
   <creator id="default18"></creator>
   <filter name="sKindFilter" id="filter1">SA_DocNode.sKind='dir'</filter>
   <filter name="sFlagFilter" id="filter2">SA_DocNode.sFlag=1</filter>
   <tree-option parent-relation="sParentID" root-filter="SA_DocNode.sParentID IS NULL" id="docNodeTreeRootFilter"></tree-option></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereVersion" data-type="json" auto-load="false" id="docData" concept="SA_DocNode" limit="200"><reader id="default31" action="/SA/doc/logic/action/queryDocNodeAction"></reader></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem3" name="delete-item"/>  -->

        <item> 
          <xforms:trigger appearance="image-text" id="deleteTrigger" image-text-mode="LR"
            src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label id="default76"> <![CDATA[删除]]> </xforms:label>  
            <xforms:action id="action3" ev:event="DOMActivate"><xforms:script id="xformsScript3"><![CDATA[mainActivity.deleteTriggerClick(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item>
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter" filter-data="dataMain" filter-relations="TRAINING_NAME,COMPLAINT_CONTENT,TRAINING_DOC_ID" id="smartFilter1"></xhtml:div> 
        </item>  
        <item id="barItem5"> 
          <xforms:trigger appearance="image-text" id="trigger1" image-text-mode="LR" src="/UI/SA/OPM/images/search.gif">  
            <xforms:label id="default7">  <![CDATA[搜索]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate" id="action1">  
              <xforms:script id="xformsScript1">  <![CDATA[xforms.blur();justep.xbl('dataMain').refreshData();]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default1" label="培训内容名称" ref="TRAINING_NAME" type="ro" width="150px" align="center"/>  
      <xui:column id="gridColumn2" ref="sDocName" label="培训电子教材" type="ro" width="316px" align="center"></xui:column><xui:column id="gridColumn1" ref="TRAINING_DOC" label="培训纸质教材" type="ro" width="289px" align="center"></xui:column><column id="default2" label="培训内容描述" ref="TRAINING_CONTENT" type="ro" width="388px" align="center"/>  
      
  </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
<!--        <item id="barItem12" name="insert-item"/>  -->
        
         <item> 
          <xforms:trigger appearance="image-text" id="insertTrigger1" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action id="action4" ev:event="DOMActivate"><xforms:script id="xformsScript4"><![CDATA[mainActivity.insertTrigger1Click(event)]]></xforms:script></xforms:action></xforms:trigger> 
        </item>
        
<!--        <item id="barItem13" name="save-item"/>  -->

		<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif">  
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[mainActivity.saveMasClick(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>



        <item id="barItem14" name="delete-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <xhtml:span id="span1" style="font-size:10pt;position:absolute;color:#FF8080;top:33px;left:29px;">  <![CDATA[*]]> </xhtml:span>  
        <place control="iptTRAINING_NAME" id="default10" style="font-size:10pt;position: absolute;top:30px;width:493px;left:124px;"/>  
        <xhtml:label id="label1" style="position:absolute;color:#000000;left:41px;top:33px;" class="xui-label"><![CDATA[培训内容名称]]></xhtml:label>
  <xhtml:label id="label2" style="position:absolute;left:41px;top:251px;" class="xui-label"><![CDATA[培训内容描述]]></xhtml:label>
  <xhtml:label id="label3" style="position:absolute;left:41px;top:89px;" class="xui-label"><![CDATA[培训电子教材]]></xhtml:label>
  <xui:place control="textarea1" id="controlPlace3" style="position:absolute;width:494px;height:156px;left:124px;top:242px;"></xui:place>
  <xui:place control="gridSelect1" id="controlPlace7" style="position:absolute;left:124px;width:493px;top:89px;"></xui:place>
  <xui:place control="textarea2" id="controlPlace8" style="position:absolute;height:110px;width:494px;left:124px;top:121px;"></xui:place>
  <xhtml:label id="label4" class="xui-label" style="position:absolute;position:absolute;left:41px;top:130px;"><![CDATA[培训纸质教材]]></xhtml:label>
  <xui:place control="treeSelect1" id="controlPlace6" style="position:absolute;left:124px;top:59px;width:230px;"></xui:place>
  <xhtml:label id="label5" style="position:absolute;top:63px;left:16px;" class="xui-label"><![CDATA[选择电子教材目录]]></xhtml:label></layout>  
      <xforms:input id="iptTRAINING_NAME" ref="data('dataMain')/TRAINING_NAME" tabindex="1"></xforms:input>  
      <xforms:textarea ref="data('dataMain')/TRAINING_CONTENT" id="textarea1" tabindex="5"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMain')/TRAINING_DOC_ID" input-changeable="true" default-label-ref="'请选择培训电子教材'" label-ref="data('dataMain')/sDocName" tabindex="3">
   <xforms:label ref="sDocName" id="default9"></xforms:label>
   <xforms:value ref="SA_DocNode" id="default11"></xforms:value>
   <xforms:itemset id="default12" auto-load-data="true" data="docData">
  
  <xforms:column ref="SA_DocNode" visible="false" id="default32"></xforms:column>
  <xforms:column ref="sDocName" id="default33"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMain')/TRAINING_DOC" id="textarea2" tabindex="4"></xforms:textarea>
  <xhtml:div component="/UI/system/components/select.xbl.xml#treeSelect" label-separator="," value-separator="," ext-separator="," id="treeSelect1" ref="data('dataMain')/sParentID" delay="true" onCloseup="mainActivity.treeSelect1Closeup" default-label-ref="'请选择教材目录'" label-ref="data('dataMain')/sDocName1" tabindex="2">
   <xforms:label id="default19" ref="sDocName"></xforms:label>
   <xforms:value id="default20" ref="sParentID"></xforms:value>
   <xforms:itemset id="default21" data="docNodeTree" auto-load-data="true">
  
  
  
  
  
  
  
  
  <xforms:column ref="sParentID" visible="false" id="default46"></xforms:column>
  <xforms:column ref="sDocName" id="default47"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="40px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout" id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2" size="40px"> 
              <place control="tbsMain2" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="vDetail" id="controlPlace5"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

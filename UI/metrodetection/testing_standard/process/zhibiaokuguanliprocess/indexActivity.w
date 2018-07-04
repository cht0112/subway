<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" xmlns:ev="http://www.w3.org/2001/xml-events">  
  <xforms:model id="mdDefault" style="height:auto;top:407px;left:231px;"> 
      
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="INDEX_ID_APPLY_INFO" confirm-delete="false" id="dataDetail" limit="20"
      offset="0" update-mode="whereAll" direct-delete="true"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryIndexIdApplyInfoAction"
        id="default4"/>  
      <writer action="/metrodetection/system_code/logic/action/saveINDEX_ID_APPLY_INFOAction"
        id="default5"/>  
      <creator action="/metrodetection/system_code/logic/action/createINDEX_ID_APPLY_INFOAction"
        id="default6"/>  
      <master id="master1"/> 
    <rule id="dataBizRule7" relation="aPPLYFOROBJECT" required="true()" alert="'应用检测对象类别不能为空!'"></rule>
  <rule id="dataBizRule8" relation="aPPLYFORDEVICETYPE" required="true()" alert="'应用检测对象不能为空!'"></rule></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="jcfmdylbData" concept="DETECTION_RANGE_TYPE" store-type="simple"><creator id="default12" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"></creator>
  <reader id="default13" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"></reader>
  <writer id="default24" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="jcfmData" concept="DETECTION_RANGE_CODE" store-type="simple"><creator id="default25" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_CODEAction"></creator>
  <reader id="default26" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_CODEAction"></reader>
  <writer id="default27" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="jcdxdylbData" concept="DETECTION_OBJECT_TYPE"><creator id="default28" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"></creator>
  <reader id="default29" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"></reader>
  <writer id="default30" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" auto-load="true" id="jcdxdyData" concept="DEVICE_TYPE_CODE"><creator id="default31" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"></creator>
  <reader id="default32" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"></reader>
  <writer id="default33" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="zbsjD" concept="INDEX_SYSTEM_VALUE" store-type="simple"><reader id="default16" action="/metrodetection/system_code/logic/action/queryINDEX_SYSTEM_VALUEAction"></reader></data><data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="INDEX_ID_BASE_INFO" direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="grid" update-mode="whereAll" confirm-delete="false" confirm-refresh="false" filter-relations="iNDEXIDCNAME,iNDEXIDDEFINITION,dETECTIONRANGECNAME,rANGEIDCNAME"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryIndexIdBaseInfoAction" id="default1" />  
      <writer action="/metrodetection/system_code/logic/action/saveINDEX_ID_BASE_INFOAction" id="default2" />  
      <creator action="/metrodetection/system_code/logic/action/createINDEX_ID_BASE_INFOAction" id="default3" /> 
    <rule id="dataBizRule1" relation="iNDEXIDCNAME" required="true()" alert="'指标名称不能为空!'"></rule>
  <rule id="dataBizRule2" relation="iNDEXIDDEFINITION" required="true()" alert="'指标定义不能为空!'"></rule>
  <rule id="dataBizRule3" relation="dETECTIONRANGETYPE" required="true()" alert="'指标检测方面列别不能为空!'"></rule>
  <rule id="dataBizRule4" relation="dETECTIONRANGEID" required="true()" alert="'检测方面不能为空!'"></rule></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR" style="height:30px;"> 
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            id="insertTrigger" onclick="indexActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[indexActivity.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            id="insertTrigger" onclick="indexActivity.assetDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[indexActivity.assetDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item> 
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1" name="separator"/>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="indexActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column label="#master_checkbox" width="30px" ref="recCC" type="checkbox"
        align="center"/> 
      <column id="default7" label="指标名称" ref="iNDEXIDCNAME" type="ro" width="135px"/>  
      <column id="default8" label="指标定义" ref="iNDEXIDDEFINITION" type="ro" width="135px"/>  
      <xui:column id="gridColumn3" ref="dETECTIONRANGECNAME" label="检测方面类别" type="ro" width="143px"></xui:column><xui:column id="gridColumn4" ref="rANGEIDCNAME" label="检测方面" type="ro" width="148px"></xui:column><xui:column id="gridColumn7" ref="mEMO" label="备注" type="ed" width="143px" visible="false"></xui:column></xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
<!--        <item id="barItem12" name="insert-item"/>-->
		<item> 
          <xforms:trigger appearance="image-text" id="insertMore1" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script><![CDATA[indexActivity.insertMore1Click(event)]]></xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>
        <item> 
          <xforms:trigger appearance="image-text" id="saveMore" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[indexActivity.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail"
        id="ngtbDetail" style="width:102px;" mode="IMG_TXT_LR"> 

		<item> 
          <xforms:trigger appearance="image-text" id="insertMore" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[indexActivity.inserMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
			<item> 
          <xforms:trigger appearance="image-text" id="saveMore1" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[indexActivity.saveMore1(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            id="insertTrigger" onclick="indexActivity.setDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="remove2" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[indexActivity.setDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style="position:relative;height:153px;" type="absolute"> 
        <place control="iptINDEXIDCNAME" id="default15" style="font-size:10pt;position: absolute;top:25px;left:129px;"/>  
        <place control="iptINDEXIDDEFINITION" id="default17" style="font-size:10pt;position: absolute;top:26px;left:409px;"/>  
        <xui:place control="gridSelect1" id="controlPlace7" style="position:absolute;left:129px;top:57px;"></xui:place>
  <xui:place control="gridSelect2" id="controlPlace8" style="position:absolute;left:409px;top:57px;"></xui:place>
  <xhtml:label id="label1" style="position:absolute;width:55px;top:31px;left:70px;" class="xui-label">指标名称</xhtml:label>
  <xhtml:label id="label2" style="position:absolute;width:105px;top:61px;left:21px;" class="xui-label">指标检测方面类别</xhtml:label>
  <xhtml:label id="label3" style="position:absolute;width:26px;top:91px;left:95px;" class="xui-label">备注</xhtml:label>
  <xhtml:label id="label4" style="position:absolute;width:52px;top:31px;left:354px;" class="xui-label">指标定义</xhtml:label>
  <xhtml:label id="label5" style="position:absolute;width:52px;top:62px;left:354px;" class="xui-label">检测方面</xhtml:label>
  <xui:place control="textarea1" id="controlPlace9" style="position:absolute;top:89px;height:37px;left:129px;width:437px;"></xui:place>
  <xhtml:label id="label21" class="xui-label" style="position:absolute;color:#000000;font-weight:bold;position:absolute;height:18px;top:6px;left:4px;text-align:center;background-color:#F2FFFD;width:566px;">指标定义基础信息</xhtml:label>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;color:#000000;font-weight:bold;position:absolute;position:absolute;top:132px;height:18px;left:1px;text-align:center;background-color:#F2FFFD;width:566px;">
指标应用信息</xhtml:label>
  <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;width:10px;top:31px;left:63px;">
*</xhtml:label>
  <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;width:10px;top:63px;left:346px;">

*</xhtml:label>
  <xhtml:label id="label10" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;width:10px;top:61px;left:13px;">


*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;width:10px;top:31px;left:346px;">



*</xhtml:label></layout>  
      <xforms:input id="iptINDEXIDCNAME" ref="data('dataMaster')/iNDEXIDCNAME"><xforms:action id="action1" ev:event="xforms-value-changed"><xforms:script id="xformsScript1">(event)</xforms:script></xforms:action>
  <xforms:action id="action4" ev:event="DOMFocusIn"><xforms:script id="xformsScript4"><![CDATA[indexActivity.iptINDEXIDCNAMEFocus(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="iptINDEXIDDEFINITION" ref="data('dataMaster')/iNDEXIDDEFINITION"><xforms:action id="action2" ev:event="xforms-value-changed"><xforms:script id="xformsScript2">(event)</xforms:script></xforms:action>
  <xforms:action id="action5" ev:event="DOMFocusIn"><xforms:script id="xformsScript5"><![CDATA[indexActivity.iptINDEXIDDEFINITIONFocus(event)]]></xforms:script></xforms:action></xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/dETECTIONRANGETYPE" onCloseup="indexActivity.gridSelect1Closeup">
				   
				   
				   
				
   <xforms:label ref="dETECTIONRANGECNAME" id="xuiLabel3"></xforms:label>
   <xforms:value ref="DETECTION_RANGE_TYPE" id="default34"></xforms:value>
   <xforms:itemset id="default35" data="jcfmdylbData" auto-load-data="true">
  
  
  
  
  
  
  <xforms:column ref="DETECTION_RANGE_TYPE" visible="false" id="default60"></xforms:column>
  <xforms:column ref="dETECTIONRANGECNAME" id="default61"></xforms:column></xforms:itemset></xhtml:div>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMaster')/dETECTIONRANGEID" onCloseup="indexActivity.gridSelect2Closeup">
				   
				   
				   
				
   <xforms:label ref="rANGEIDCNAME" id="xuiLabel4"></xforms:label>
   <xforms:value ref="dETECTIONRANGEID" id="default48"></xforms:value>
   <xforms:itemset id="default49" data="jcfmData" auto-load-data="true">
  
  
  
  
  
  
  
  <xforms:column ref="dETECTIONRANGEID" visible="false" id="default11"></xforms:column>
  <xforms:column ref="rANGEIDCNAME" id="default14"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:textarea ref="data('dataMaster')/mEMO" id="textarea1"><xforms:action id="action3" ev:event="xforms-value-changed"><xforms:script id="xformsScript3">(event)</xforms:script></xforms:action>
  <xforms:action id="action6" ev:event="DOMFocusIn"><xforms:script id="xformsScript6"><![CDATA[indexActivity.textarea1Focus(event)]]></xforms:script></xforms:action></xforms:textarea></xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail"
      id="grdDetail"> 
      <column label="#master_checkbox" width="30px" ref="recC" type="checkbox"
        align="center"/> 
      <xui:column id="gridColumn1" ref="dETECTIONOBJECTCNAME" label="应用检测对象类别" type="select" width="173px" editor="gridSelect3"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect3" ref="data('dataDetail')/aPPLYFOROBJECT" label-ref="data('dataDetail')/dETECTIONOBJECTCNAME" onCloseup="indexActivity.gridSelect3Closeup">
				   
				   
				   
				
   <xforms:label ref="dETECTIONOBJECTCNAME" id="xuiLabel5"></xforms:label>
   <xforms:value ref="DETECTION_OBJECT_TYPE" id="default66"></xforms:value>
   <xforms:itemset id="default67" data="jcdxdylbData" auto-load-data="true">
  
  
  
  
  <xforms:column ref="DETECTION_OBJECT_TYPE" visible="false" id="default80"></xforms:column>
  <xforms:column ref="dETECTIONOBJECTCNAME" id="default81"></xforms:column></xforms:itemset></xhtml:div></xui:column>
  <xui:column id="gridColumn2" ref="dEVICETYPECNAME" label="应用检测对象" type="select" width="207px" editor="gridSelect4"><xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataDetail')/aPPLYFORDEVICETYPE" label-ref="data('dataDetail')/dEVICETYPECNAME" onCloseup="indexActivity.gridSelect4Closeup">
				   
				   
				   
				
   <xforms:label ref="dEVICETYPECNAME" id="xuiLabel6"></xforms:label>
   <xforms:value ref="dEVICETYPE" id="default68"></xforms:value>
   <xforms:itemset id="default69" data="jcdxdyData" auto-load-data="true">
  
  
  
  
  
  
  <xforms:column ref="dEVICETYPE" visible="false" id="default9"></xforms:column>
  <xforms:column ref="dEVICETYPECNAME" id="default10"></xforms:column></xforms:itemset></xhtml:div></xui:column></xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="indexActivity.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="42px"> 
              <place control="tbsMaster1" id="controlPlace1" style="height:63px;"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:95%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="indexActivity.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5" style="height:153px;width:566px;"/>  
              <place control="tbsDetail" id="controlPlace4"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <place control="grdDetail" id="controlPlace6" style="height:98%;width:566px;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="indexActivity.js"/> 
  </xui:resource> 
</xui:window>

<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="height:auto;top:95px;left:378px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      direct-delete="true" id="dataMaster" limit="20" offset="0" store-type="grid"
      update-mode="whereAll" concept="DETECTION_ROOM_INFO" confirm-delete="false"
      confirm-refresh="true" onValueChanged="mainActivity4.dataMasterValueChanged" onIndexChanged="mainActivity4.dataMasterIndexChanged" filter-relations="rOOMCNAME,rOOMAREA,oCCUPYSTARTDATETIME,oCCUPYENDDATETIME,dETECTIONOBJECTCNAME,dEVICETYPECNAME,dETECTIONRANGECNAME,pROJECTNAME"> 
      <reader id="default1" action="/metrodetection/system_code/logic/action/myQuerySiteRes"/>  
      <writer id="default2" action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction"/>  
      <creator id="default3" action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction"/>  
      <calculate-relation relation="calculate3" id="calculate-relation2"/>  
      <rule id="dataBizRule4" relation="rOOMTYPE" required="true()" alert="'房间类型不能为空'"/>  
      <rule id="dataBizRule5" relation="rOOMCNAME" required="true()" alert="'房间中文名不能为空'"/>  
      <rule id="dataBizRule6" relation="rOOMENAME" required="true()" alert="'房间英文名不能为空'"/>
    <rule id="dataBizRule1" relation="MANUFACTURE_ID"></rule>
  <rule id="dataBizRule2" relation="IS_DELEGATE"></rule></data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="ROOM_APPLY_INFO" confirm-delete="false" id="dataDetail" limit="20"
      offset="0" update-mode="whereAll" direct-delete="true"> 
      <reader action="/metrodetection/system_code/logic/action/querySiteCSQ" id="default4"/>  
      <writer action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction"
        id="default5"/>  
      <creator action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction"
        id="default6"/>  
      <master id="master1" data="dataMaster" relation="rOOMID"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="bizData4" concept="ROOM_TYPE_CODE"> 
      <creator id="default66" action="/metrodetection/system_code/logic/action/createROOM_TYPE_CODEAction"/>  
      <reader id="default67" action="/metrodetection/system_code/logic/action/queryROOM_TYPE_CODEAction"/>  
      <writer id="default68" action="/metrodetection/system_code/logic/action/saveROOM_TYPE_CODEAction"/> 
    </data>  
    <xforms:action id="action5" ev:event="onload">
      <xforms:script id="xformsScript5"><![CDATA[(event)]]></xforms:script>
    </xforms:action>
  <xforms:action id="action6" ev:event="xbl-loaded"><xforms:script id="xformsScript6">(event)</xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="bizData1" concept="AFC_MANUFACTURER_INFO"><creator id="default26" action="/metrodetection/system_code/logic/action/createAFC_MANUFACTURER_INFOAction"></creator>
  <reader id="default27" action="/metrodetection/system_code/logic/action/queryAFC_MANUFACTURER_INFOAction"></reader>
  <writer id="default28" action="/metrodetection/system_code/logic/action/saveAFC_MANUFACTURER_INFOAction"></writer></data>
  <xforms:action id="action10" ev:event="xforms-model-construct"><xforms:script id="xformsScript10"><![CDATA[(event)]]></xforms:script></xforms:action>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="room" concept="ROOM_APPLY_INFO" direct-delete="true" confirm-delete="false" store-type="simple"><creator id="default13" action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction"></creator>
  <reader id="default14" action="/metrodetection/system_code/logic/action/queryROOM_APPLY_INFOAction"></reader>
  <writer id="default15" action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction"></writer></data>
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="xml" auto-load="true" id="zhanyong" concept="ROOM_OCCUPY_INFO" direct-delete="true" confirm-delete="false" store-type="simple"><creator id="default16" action="/metrodetection/system_code/logic/action/createROOM_OCCUPY_INFOAction"></creator>
  <reader id="default17" action="/metrodetection/system_code/logic/action/queryROOM_OCCUPY_INFOAction"></reader>
  <writer id="default20" action="/metrodetection/system_code/logic/action/saveROOM_OCCUPY_INFOAction"></writer></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" style="height:33px;text-align:left;width:690px;" mode="IMG_TXT_LR"> 
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            id="insertTrigger1" onclick="mainActivity4.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none;" title="新建"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="insertTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"> 
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity4.newItemClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"-->
<!--            id="removeTrigger1" onclick="mainActivity4.assetDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none;" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="removeTrigger" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity4.assetDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>
        <item id="barItem5" name="filter-item"/>
        <item id="barItem6" name="filter-pattern-item"/>
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>
        </xui:bar>  
      <xui:bar component="/UI/system/components/customBar.xbl.xml#customBar" id="customBar1"
        style="height:40px;text-align:left;width:157px;">
        <item id="customBarItem3">
          <xforms:trigger id="trigger8" style="width:148px;height:31px;"> 
            <xforms:label id="xuiLabel11">查看房间占用状态</xforms:label>  
            <xforms:action id="action4" ev:event="DOMActivate">
              <xforms:script id="xformsScript4">mainActivity4.trigger8Click(event)</xforms:script>
            </xforms:action>
          </xforms:trigger>
        </item>
      </xui:bar>
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="" width="900px" height="400px" modal="true" id="windowDialog2" url="/UI/metrodetection/detection_Process_Related/process/detectionManager/RoomSchedule1.w" status="maximize"/>
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      edit-mode="true" dragable="true"> 
	<column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
      <column id="default8" label="房间名称" ref="rOOMCNAME" type="ro" width="106px"
        align="center"/>
      <xui:column id="gridColumn5" ref="im" type="html" width="100" label="房间位置图"
        onRender="mainActivity4.grdMaster_imRender" align="center"/>
      <xui:column id="gridColumn11" ref="rOOMAREA" label="区域" type="ro" width="98px"
        align="center"/>
      <xui:column id="gridColumn13" ref="dETECTIONOBJECTCNAME" type="ro" width="100"
        label="检测对象类型" align="center"/>
      <xui:column id="gridColumn14" ref="dEVICETYPECNAME" label="检测对象" type="ro" width="100"
        align="center"/>
      <xui:column id="gridColumn15" ref="dETECTIONRANGECNAME" label="检测方面类型" type="ro"
        width="100" align="center"/>
      <xui:column id="gridColumn4" ref="pROJECTNAME" label="项目名称" type="ed" width="85px"
        align="center"/>
      <xui:column id="gridColumn16" ref="oCCUPYSTARTDATETIME" label="计划占用起始日期时间" type="ed"
        width="111px"/>
      <xui:column id="gridColumn17" ref="oCCUPYENDDATETIME" label="计划占用结束日期时间" type="ed"
        width="124px"/>
      <column id="default9" label="房间英文名称" ref="rOOMENAME" type="ro" width="15px"
        align="center" visible="false"/>
      <xui:column id="gridColumn2" ref="rOOMTYPECNAME" label="房间类别" type="ro" width="9px"
        align="center" visible="false"/>  
      <xui:column id="gridColumn1" ref="iMAGE" label="房间位置图" type="html" width="10px"
        onRender="mainActivity4.grdMaster_iMAGERender" align="center" visible="false"/>  
      <xui:column id="gridColumn3" ref="mEMO" label="备注" type="ro" width="10px" visible="false"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="insert-item"/>  
<!--         <item id="barItem13"> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->
<!--            src="/UI/system/images/standardToolbar/standard/save.gif" style="border:none"-->
<!--            title="保存" id="saveMas" onclick="mainActivity4.saveMore(event)"/> -->
<!--        </item>  	-->
		<item> 
          <xforms:trigger appearance="image-text" id="saveMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity4.saveMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem14"> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            src="/UI/system/images/standardToolbar/standard/remove.gif" style="border:none"-->
<!--            title="删除" id="removeMas" onclick="mainActivity4.removeMore(event)"/> -->
<!--        </item>  -->
			<item> 
          <xforms:trigger appearance="image-text" id="removeTrigr" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity4.removeMore(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="barItem16" name="filter-item"/>  
        <item id="barItem17" name="filter-pattern-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog"
      title="" width="600px" height="400px" modal="true" id="windowDialog1" url="/UI/metrodetection/system_resource/process/siteRoomInfo/mainActivity5.w"
      onClose="mainActivity4.windowDialog1Close" status="maximize"/>
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail"
        id="ngtbDetail" mode="IMG_TXT_LR"> 
        <!-- <item id="barItem23" name="insert-item"/> -->  
<!--        <item id="barItem23"> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"-->
<!--            onclick="mainActivity4.insertMasClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"-->
<!--            style="border:none" title="新建" id="insertMas"/> -->
<!--        </item>  -->
			<item> 
          <xforms:trigger appearance="image-text" id="insertMas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/insert.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif">  
            <xforms:label> <![CDATA[新建]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity4.insertMasClick(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item id="barItem24"> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"-->
<!--            onclick="mainActivity4.save2More(event)" src="/UI/system/images/standardToolbar/standard/save.gif"-->
<!--            style="border:none" title="保存" id="save2Mas"/> -->
<!--        </item>  -->
			<item> 
          <xforms:trigger appearance="image-text" id="save2Mas" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/save.gif"
          dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"> 
            <xforms:label> <![CDATA[保存]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity4.save2More(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
<!--        <item> -->
<!--          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            id="insertTrigger" onclick="mainActivity4.setDelete(event)" src="/UI/system/images/standardToolbar/standard/remove.gif"-->
<!--            style="border:none" title="删除"/> -->
<!--        </item>  -->
		<item> 
          <xforms:trigger appearance="image-text" id="remove2" image-text-mode="LR" src="/UI/system/images/standardToolbar/standard/remove.gif"> 
            <xforms:label> <![CDATA[删除]]> </xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script> <![CDATA[mainActivity4.setDelete(event)]]> </xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item name="refresh-item" id="barItem22"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style="position:relative;height:305px;width:100%;"
        type="absolute"> 
        <place control="iptROOMCNAME" id="default21" style="font-size:10pt;position: absolute;left:118px;top:67px;"/>  
        <place control="iptROOMENAME" id="default23" style="font-size:10pt;position: absolute;left:118px;top:108px;"/>  
        <xui:place control="gridSelect1" id="controlPlace7" style="position:absolute;top:24px;left:118px;"/>  
        <column label="#master_checkbox" width="30px" ref="rec" type="checkbox"
          align="center"/>  
        <xhtml:label id="label1" style="position:absolute;top:28px;left:66px;"
          class="xui-label">房间类型</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;top:112px;left:42px;"
          class="xui-label"><![CDATA[房间英文名称]]></xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;top:70px;left:42px;" class="xui-label"><![CDATA[房间中文名称]]></xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:65px;top:24px;left:298px;"
          class="xui-label">房间位置图</xhtml:label>  
        <xhtml:label id="label5" style="position:absolute;top:261px;left:88px;"
          class="xui-label">备注</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;width:600px;left:2px;color:#000000;background-color:#ECFFFE;height:18px;top:5px;text-align:center;font-weight:bold;"
          class="xui-label">房间场地资源信息</xhtml:label>  
        <xhtml:label id="label21" style="position:absolute;width:600px;left:2px;background-color:#ECFFFE;height:18px;top:330px;text-align:center;font-weight:bold;"
          class="xui-label">房间应用检测信息</xhtml:label>  
        <xui:place control="textarea1" id="controlPlace9" style="position:absolute;width:480px;height:91px;left:118px;top:234px;"/>
      <xui:place control="blobImage1" id="controlPlace8" style="position:absolute;top:24px;height:189px;width:229px;left:370px;"></xui:place>
  <xui:place control="radio1" id="controlPlace16" style="position:absolute;left:118px;top:149px;"></xui:place>
  <xui:place control-label="gridSelect4" id="controlLabel1" style="position:absolute;top:196px;left:52px;" label="第三方机构"></xui:place><xui:place control="gridSelect4" id="controlPlace21" style="position:absolute;left:118px;top:191px;"></xui:place>
  <xhtml:label id="label7" style="position:absolute;top:152px;left:18px;" class="xui-label"><![CDATA[是否外部检测机构]]></xhtml:label>
 <xhtml:label id="label23" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;top:28px;left:50px;">*</xhtml:label>
  <xhtml:label id="label10" style="position:absolute;top:70px;color:#FF0000;left:27px;" class="xui-label"><![CDATA[*]]></xhtml:label>
  <xhtml:label id="label11" style="position:absolute;color:#FF0000;top:112px;left:27px;" class="xui-label"><![CDATA[*]]></xhtml:label></layout>  
      <xforms:input id="iptROOMCNAME" ref="data('dataMaster')/rOOMCNAME">
        <xforms:action id="action2" ev:event="xforms-value-changed">
          <xforms:script id="xformsScript2">(event)</xforms:script>
        </xforms:action>
      <xforms:action id="action7" ev:event="DOMFocusOut"><xforms:script id="xformsScript7"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action13" ev:event="DOMFocusIn"><xforms:script id="xformsScript13"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="iptROOMENAME" ref="data('dataMaster')/rOOMENAME">
        <xforms:action id="action1" ev:event="xforms-value-changed">
          <xforms:script id="xformsScript1">(event)</xforms:script>
        </xforms:action>
      <xforms:action id="action8" ev:event="DOMFocusOut"><xforms:script id="xformsScript8"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action14" ev:event="DOMFocusIn"><xforms:script id="xformsScript14"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:input>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/rOOMTYPE"
        input-changeable="true" label-ref="data('dataMaster')/rOOMTYPECNAME" onCloseup="mainActivity4.gridSelect1Closeup"> 
        <xforms:label ref="rOOMTYPECNAME" id="xuiLabel3"/>  
        <xforms:value ref="ROOM_TYPE_CODE" id="default18"/>  
        <xforms:itemset id="default19" data="bizData4" auto-load-data="true"> 
          <xforms:column ref="ROOM_TYPE_CODE" visible="false" id="default34"/>  
          <xforms:column ref="rOOMTYPECNAME" id="default35"/> 
        </xforms:itemset> 
      </xhtml:div>  
      <xforms:textarea ref="data('dataMaster')/mEMO" id="textarea1">
        <xforms:action id="action3" ev:event="xforms-value-changed">
          <xforms:script id="xformsScript3">(event)</xforms:script>
        </xforms:action>
      <xforms:action id="action9" ev:event="DOMFocusOut"><xforms:script id="xformsScript9"><![CDATA[(event)]]></xforms:script></xforms:action>
  <xforms:action id="action15" ev:event="DOMFocusIn"><xforms:script id="xformsScript15"><![CDATA[(event)]]></xforms:script></xforms:action></xforms:textarea>
    <xhtml:div component="/UI/system/components/blob.xbl.xml#image" id="blobImage1" data="dataMaster" concept="DETECTION_ROOM_INFO" relation="iMAGE"></xhtml:div>
  <xforms:select1 ref="data('dataMaster')/IS_DELEGATE" id="radio1" disabled="true">
   <xforms:item id="selectItem1">
    <xforms:label id="default7"><![CDATA[是]]></xforms:label>
    <xforms:value id="default10"><![CDATA[1]]></xforms:value>
  <xforms:action id="action11" ev:event="xforms-select"><xforms:script id="xformsScript11"><![CDATA[mainActivity4.selectItem1Select(event)]]></xforms:script></xforms:action></xforms:item> 
   <xforms:item id="selectItem2">
    <xforms:label id="default11"><![CDATA[否]]></xforms:label>
    <xforms:value id="default12"><![CDATA[0]]></xforms:value>
  <xforms:action id="action12" ev:event="xforms-select"><xforms:script id="xformsScript12"><![CDATA[mainActivity4.selectItem2Select(event)]]></xforms:script></xforms:action></xforms:item> </xforms:select1>
  <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect4" ref="data('dataMaster')/MANUFACTURE_ID" label-ref="data('dataMaster')/mANUFACTUREIDCNAME" disabled="true" onDropdown="mainActivity4.gridSelect4Dropdown">
   <xforms:label ref="mANUFACTUREIDCNAME" id="default22"></xforms:label>
   <xforms:value ref="AFC_MANUFACTURER_INFO" id="default24"></xforms:value>
   <xforms:itemset id="default25" data="bizData1" auto-load-data="true">
  <xforms:column ref="AFC_MANUFACTURER_INFO" visible="false" id="default32"></xforms:column>
  <xforms:column ref="mANUFACTUREIDCNAME" id="default33"></xforms:column></xforms:itemset></xhtml:div></xui:view>  
    <xui:layout style="height:100%;width:100%;position:relative;" type="flow"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:99%;"> 
        <xui:tab id="tabList" xforms-select="mainActivity4.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="31px"> 
              <place control="tbsMaster1" id="controlPlace1" style="width:676px;height:31px;"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <xui:place control="windowDialog2" id="controlPlace17" style="top:90px;left:44px;"/>
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:97%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail" xforms-select="mainActivity4.tabDetailSelect"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:100%;"> 
            <top id="borderLayout-top2" size="389px"> 
              <place control="tbsMaster2" id="controlPlace3" style="height:28px;"/>  
              <place control="vDetail" id="controlPlace5" style="width:100%;height:337px;"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <xui:place control="windowDialog1" id="controlPlace10" style="top:5px;left:393px;"/>
              <place control="tbsDetail" id="controlPlace4" style="width:639px;height:29px;"/>  
              <xui:place control="grid1" id="controlPlace13" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    <xui:place control="windowDialog3" id="controlPlace6" style="top:347px;left:164px;position:absolute;"></xui:place>
  <xui:place control="windowDialog4" id="controlPlace11" style="top:318px;left:277px;position:absolute;"></xui:place>
  <xui:place control="windowDialog5" id="controlPlace12" style="top:290px;left:257px;position:absolute;"></xui:place>
  <xui:place control="windowDialog6" id="controlPlace14" style="top:313px;left:379px;position:absolute;"></xui:place></xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      smart-render="20" id="grid1" data="dataDetail" onRowDblClick="mainActivity4.grid1RowDblClick"
      edit-mode="true"> 
      <column label="#master_checkbox" width="30px" ref="recC" type="checkbox"
        align="center"/>  
      <xui:column id="gridColumn6" ref="rOOMAREA" label="区域" type="ro" width="82px"/>  
      <xui:column id="gridColumn7" ref="dETECTIONOBJECTCNAME" type="ro" width="140px"
        label="应用检测对象类型"/>  
      <xui:column id="gridColumn8" ref="dEVICETYPECNAME" label="应用检测对象" type="ro"
        width="134px"/>  
      <xui:column id="gridColumn9" ref="dETECTIONRANGECNAME" label="应用检测方面类型" type="ro"
        width="146px"/>  
      <xui:column id="gridColumn10" ref="IM" label="区域位置图" type="html" width="100px"
        align="center" enter-selected="false" onRender="mainActivity4.grid1_IMRender"></xui:column>
    </xhtml:div> 
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" modal="true" id="windowDialog3" url="/UI/metrodetection/system_resource/process/siteRoomInfo/mainActivity7.w" onClose="mainActivity4.windowDialog3Close" status="maximize"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="900px" height="900px" modal="true" id="windowDialog4" url="/UI/metrodetection/system_resource/process/siteRoomInfo/mainActivity8.w" onClose="mainActivity4.windowDialog4Close" status="maximize"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="900px" height="900px" modal="true" id="windowDialog5" url="/UI/metrodetection/system_resource/process/siteRoomInfo/mainActivity6.w" onClose="mainActivity4.windowDialog5Close" status="maximize"></xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="900px" height="900px" modal="true" id="windowDialog6" onClose="mainActivity4.windowDialog6Close" url="/UI/metrodetection/system_resource/process/siteRoomInfo/mainActivity9.w" status="maximize"></xhtml:div></xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="mainActivity3.js"/> 
  </xui:resource>  
  <resource id="resource1">
    <xhtml:script id="htmlScript2" src="mainActivity4.js"/>  
    <xhtml:script id="htmlScript3" src="/UI/metrodetection/detection_Process_Related/process/detectionManager/js/dhtmlxgrid_rowspan.js"/>  
    <xhtml:script id="htmlScript4" src="/UI/metrodetection/detection_Process_Related/js/map.js"/>
  </resource>
</xui:window>

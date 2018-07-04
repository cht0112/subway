<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml"
  xmlns:ev="http://www.w3.org/2001/xml-events" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:134px;height:auto;left:14px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="DETECTION_ROOM_INFO" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll"> 
      <reader id="default1" action="/metrodetection/system_code/logic/action/myQuerySiteRes"/>  
      <writer action="/metrodetection/system_code/logic/action/saveDETECTION_ROOM_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/system_code/logic/action/createDETECTION_ROOM_INFOAction"
        id="default3"/> 
    </data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="ROOM_APPLY_INFO" confirm-delete="false" id="dataDetail" limit="20"
      offset="0" update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/querySiteCSQ"
        id="default4"/>  
      <writer action="/metrodetection/system_code/logic/action/saveROOM_APPLY_INFOAction"
        id="default5"/>  
      <creator action="/metrodetection/system_code/logic/action/createROOM_APPLY_INFOAction"
        id="default6"/>  
      <master id="master1"/> 
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="bizData1" concept="DETECTION_OBJECT_TYPE">
      <creator id="default40" action="/metrodetection/system_code/logic/action/createDETECTION_OBJECT_TYPEAction"/>  
      <reader id="default41" action="/metrodetection/system_code/logic/action/queryDETECTION_OBJECT_TYPEAction"/>  
      <writer id="default42" action="/metrodetection/system_code/logic/action/saveDETECTION_OBJECT_TYPEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="bizData2" concept="DEVICE_TYPE_CODE">
      <creator id="default50" action="/metrodetection/system_code/logic/action/createDEVICE_TYPE_CODEAction"/>  
      <reader id="default51" action="/metrodetection/system_code/logic/action/queryDEVICE_TYPE_CODEAction"/>  
      <writer id="default52" action="/metrodetection/system_code/logic/action/saveDEVICE_TYPE_CODEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="bizData3" concept="DETECTION_RANGE_TYPE">
      <creator id="default56" action="/metrodetection/system_code/logic/action/createDETECTION_RANGE_TYPEAction"/>  
      <reader id="default57" action="/metrodetection/system_code/logic/action/queryDETECTION_RANGE_TYPEAction"/>  
      <writer id="default58" action="/metrodetection/system_code/logic/action/saveDETECTION_RANGE_TYPEAction"/>
    </data>  
    <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll"
      auto-load="false" id="bizData4" concept="ROOM_TYPE_CODE">
      <creator id="default66" action="/metrodetection/system_code/logic/action/createROOM_TYPE_CODEAction"/>  
      <reader id="default67" action="/metrodetection/system_code/logic/action/queryROOM_TYPE_CODEAction"/>  
      <writer id="default68" action="/metrodetection/system_code/logic/action/saveROOM_TYPE_CODEAction"/>
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1"> 
        <item> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            id="insertTrigger" onclick="mainActivity3.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none;" title="新建"/> 
        </item>  
        <item id="customBarItem1"/>
        <item id="barItem3" name="delete-item"> 
          <xforms:trigger appearance="image" id="trgdeleteBtn" src="/UI/system/images/standardToolbar/standard/remove.gif"
            dis-src="/UI/system/images/standardToolbar/standard/un_remove.gif"> 
            <xforms:label>删除</xforms:label>  
            <xforms:action ev:event="DOMActivate"> 
              <xforms:script>assetDelete(event)</xforms:script> 
            </xforms:action> 
          </xforms:trigger> 
        </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1" name="separator"/>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMaster"
            id="excelExport1"/> 
        </item>  
        <item id="barItem7" name="separator"/>  
        <item id="barItem8"></item>  
        <item id="barItem9"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMaster" filter-relations="rOOMTYPE,rOOMCNAME,rOOMENAME,iMAGE,mEMO"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem10"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMaster').refreshData();"
            src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" show-header-menu="hide-column,save-layout,group-column,adjust-column"
      onRowDblClick="mainActivity3.grdMasterRowDblClick" onRowClick="mainActivity3.grdMasterRowClick"> 
       <column label="#master_checkbox" width="30px" ref="recCB" type="checkbox"
        align="center"/>  
         
      <xui:column id="gridColumn2" ref="rOOMTYPECNAME" label="房间类型" type="ro" width="133px"/>
      <column id="default8" label="房间中文名称" ref="rOOMCNAME" type="ro" width="133px"/>  
      <column id="default9" label="房间英文名称" ref="rOOMENAME" type="ro" width="133px"/>  
      <column id="default11" label="备注" ref="mEMO" type="ro" width="133px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2"> 
        <item id="barItem12" name="insert-item"/>  
        <!-- <item id="barItem13" name="save-item"/> -->  
        <item id="barItem13"> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"
            onclick="mainActivity3.saveMore(event)" src="/UI/system/images/standardToolbar/standard/save.gif"
            style="border:none" title="保存" id="saveMas"/> 
        </item>  
        <item id="barItem14" name="delete-item"/>  
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
    <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="" width="400px" height="300px" modal="true" id="windowDialog1" url="/UI/metrodetection/system_resource/process/siteRoomInfo/mainActivity5.w" onOpen="mainActivity3.windowDialog1Open" onClose="mainActivity3.windowDialog1Close"></xhtml:div><xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsDetail"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataDetail"
        id="ngtbDetail"> 
        <!-- <item id="barItem23" name="insert-item"/> -->  
        <item id="barItem23"> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            onclick="mainActivity3.insertMore(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none" title="新建" id="insertMas"/> 
        </item>  
        <item id="barItem24"> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_save.gif"
            onclick="mainActivity3.save2More(event)" src="/UI/system/images/standardToolbar/standard/save.gif"
            style="border:none" title="保存" id="save2Mas"/> 
        </item>  
        <item id="barItem25" name="delete-item"/>  
        <item name="refresh-item" id="barItem22"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style="position:relative;height:305px;" type="absolute"> 
        <place control="iptROOMCNAME" id="default21" style="font-size:10pt;position: absolute;top:113px;left:122px;"/>  
        <place control="iptROOMENAME" id="default23" style="font-size:10pt;position: absolute;top:65px;left:122px;"/>  
        <xui:place control="gridSelect1" id="controlPlace7" style="position:absolute;top:21px;left:122px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:55px;top:24px;left:60px;"
          class="xui-label">房间类型</xhtml:label>  
        <xhtml:label id="label2" style="position:absolute;width:80px;top:118px;left:35px;"
          class="xui-label">房间中文名称</xhtml:label>  
        <xhtml:label id="label3" style="position:absolute;top:73px;left:35px;" class="xui-label">房间英文名称</xhtml:label>  
        <xhtml:label id="label4" style="position:absolute;width:65px;top:24px;left:298px;"
          class="xui-label">房间位置图</xhtml:label>
        <xhtml:label id="label5" style="position:absolute;width:30px;top:173px;left:76px;"
          class="xui-label">备注</xhtml:label>  
        <xhtml:label id="label6" style="position:absolute;width:600px;top:4px;left:2px;color:#000000;background-color:#80FFFF;" class="xui-label">房间场地资源信息</xhtml:label>
  <xhtml:label id="label21" style="position:absolute;width:600px;top:260px;left:2px;background-color:#00FFFF;" class="xui-label">房间应用检测信息</xhtml:label>
  <xui:place control="blobImage4" id="controlPlace12" style="position:absolute;top:20px;height:120px;left:374px;"></xui:place>
  <place control="input4" id="controlPlace8" style="font-size:10pt;position:absolute;width:453px;top:167px;height:69px;left:119px;"></place></layout>  
      <xforms:input id="iptROOMCNAME" ref="data('dataMaster')/rOOMCNAME"/>  
      <xforms:input id="iptROOMENAME" ref="data('dataMaster')/rOOMENAME"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator=","
        value-separator="," ext-separator="," id="gridSelect1" ref="data('dataMaster')/rOOMTYPE"
        input-changeable="true" label-ref="data('dataMaster')/rOOMTYPECNAME"> 
        <xforms:label ref="rOOMTYPECNAME" id="xuiLabel3"/>  
        <xforms:value ref="ROOM_TYPE_CODE" id="default18"/>  
        <xforms:itemset id="default19" data="bizData4" auto-load-data="true"> 
          <xforms:column ref="ROOM_TYPE_CODE" visible="false" id="default34"/>  
          <xforms:column ref="rOOMTYPECNAME" id="default35"/>
        </xforms:itemset>
      </xhtml:div>  
      <xhtml:div component="/UI/system/components/blob.xbl.xml#image" id="blobImage4" data="dataMaster" relation="iMAGE"></xhtml:div>
  <xforms:input id="input4" ref="data('dataMaster')/mEMO"></xforms:input></xui:view>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
        <xui:tab id="tabList" xforms-select="mainActivity3.tabListSelect"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="32px"> 
              <place control="tbsMaster1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMaster" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:105%;"> 
            <top id="borderLayout-top2" size="304px"> 
              <place control="tbsMaster2" id="controlPlace3" style="height:28px;"/>  
              <place control="vDetail" id="controlPlace5" style="height:305px;"/> 
            </top>  
            <center id="borderLayout-center2"> 
              <xui:place control="windowDialog1" id="controlPlace10" style="top:0px;left:133px;"></xui:place><place control="tbsDetail" id="controlPlace4" style="width:639px;height:29px;"/>  
              <xui:place control="grid1" id="controlPlace13" style="width:100%;height:241px;"></xui:place>
  </center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="dataDetail"><xui:column id="gridColumn5" ref="rOOMID" label="房间编号" type="ro" width="91px"></xui:column>
  <xui:column id="gridColumn6" ref="rOOMAREA" label="区域" type="ro" width="82px"></xui:column>
  <xui:column id="gridColumn7" ref="dETECTIONOBJECTCNAME" type="ro" width="122px" label="应用检测对象类型"></xui:column>
  <xui:column id="gridColumn8" ref="dEVICETYPECNAME" label="应用检测对象" type="ro" width="113px"></xui:column>
  <xui:column id="gridColumn9" ref="dETECTIONRANGECNAME" label="应用检测方面类型" type="ro" width="128px"></xui:column>
  <xui:column id="gridColumn10" ref="iMAGE" label="区域位置图" type="ed" width="100" onButtonClick="mainActivity3.grid1_iMAGEButtonClick"  >
  </xui:column></xhtml:div>
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="mainActivity3.js"/> 
  </xui:resource> 
</xui:window>

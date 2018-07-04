<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui" xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window" id="window">  
  <xforms:model id="mdDefault" style="top:128px;left:173px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData" concept="TEST_PROJECT_INFO" direct-delete="true" id="dataMain" limit="20" offset="0" relations="aPPLICATIONNO,tESTSCHEMEID,pROJECTNAME,pROJECTTYPE,proASSIFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,lINEID,bUSINESSID,mANUFACTUREID1,pROJECTDATE,eNDINGDATE,pROJECTMANAGER,qAMANAGER,tESTMANAGER,tECHMANAGER,mAKEDATE,eXECUTESTATE,mEMO,aSSIGNEDMANUFACTUREID,pRODUCTNAME,dETECTIONOBJECTTYPE,dEVICETYPE,dECTIONBASEDONNAME,aPPLICATIONDATE,tESTSCHEMENAME,mANUFACTUREIDCNAME,bUSINESSIDCNAME,oPERATORNAME,dETECTIONOBJECTCNAME,dETECTIONOBJECTTYPE1,dEVICETYPE1,dEVICETYPECNAME" update-mode="whereAll" filter-relations="tESTSCHEMEID,pROJECTNAME,lINEID,eNDINGDATE,qAMANAGER,bUSINESSIDCNAME"> 
      <reader action="/metrodetection/system_code/logic/action/myTestProjectInfoAction" id="default3"/>  
      <writer id="default4"/>  
      <creator id="default5"/>  
      <rule id="default11" relation="pROJECTNAME" required="true()"/>  
      <rule id="default12" relation="pROJECTTYPE" required="true()"/>  
      <rule id="default13" relation="lINEID" required="true()"/>  
      <rule id="default14" relation="mANUFACTUREID" required="true()"/>  
      <rule id="default15" relation="pROJECTDATE" required="true()"/>  
      <rule id="default16" relation="pROJECTMANAGER" required="true()"/> 
    <master id="master1"></master></data> 
  <data component="/UI/system/components/data.xbl.xml#bizData" update-mode="whereAll" data-type="json" auto-load="true" id="recuScheProD" concept="RECURRENCE_TEST_SCHEME" confirm-refresh="false"><reader id="default2" action="/metrodetection/system_code/logic/action/recurrenceSchemeAndProjectAction"></reader></data></xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          </item>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem1" name="filter-pro-item"/>  
        <item id="barItem11" items="pre,next,ext" name="custom-page-item" page-count="0"/>  
        <item id="barItem2"> 
          </item>  
        </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain" id="grdMain" onRowDblClick="projectActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="项目名称" ref="pROJECTNAME" type="ro" width="100px"/>  
      <column id="default6" label="线路ID" ref="lINEID" type="ro" width="100px"/>  
      <column id="default8" label="立项日期" ref="pROJECTDATE" type="date" width="100px"/>  
      <xui:column id="gridColumn2" ref="bUSINESSIDCNAME" label="业务类型" type="ro" width="100px"></xui:column><xui:column id="gridColumn3" ref="oPERATORNAME" label="质量负责人" type="ro" width="100px"></xui:column><xui:column id="gridColumn1" ref="eNDINGDATE" label="项目结束日期" type="ro" width="100px"></xui:column>
  
  </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain" id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;" type="flow"> 
        <xhtml:div component="/UI/system/components/excelLayout.xbl.xml#excelLayout" id="excelLayout1" src="projectActivity.xls" style="width:100%; height: 100%;"></xhtml:div> 
      <xui:place control="schemeCaseWD" id="controlPlace7" style="position:absolute;top:411px;left:319px;"></xui:place></layout>  
      <xforms:input id="iptPROJECTNAME" ref="data('dataMain')/pROJECTNAME" readonly="true"><xforms:action id="action2" ev:event="xforms-value-changed"><xforms:script id="xformsScript2"><![CDATA[projectActivity.iptPROJECTNAMEChange(event)]]></xforms:script></xforms:action></xforms:input>  
      <xforms:input id="iptPROJECTTYPE" ref="data('dataMain')/tESTSCHEMENAME"></xforms:input>  
      <xforms:input id="iptLINEID" ref="data('dataMain')/lINEID" readonly="true"></xforms:input>  
      <xforms:input id="iptMANUFACTUREID" ref="data('dataMain')/bUSINESSIDCNAME" readonly="true"></xforms:input>  
      <xforms:input id="iptPROJECTDATE" ref="data('dataMain')/pROJECTDATE" readonly="true"></xforms:input>  
      <xforms:input id="iptPROJECTMANAGER" ref="data('dataMain')/oPERATORNAME" readonly="true"></xforms:input> 
    <xforms:input id="input1" class="xui-autofill" ref="data('dataMain')/pRODUCTNAME" readonly="true"></xforms:input>
  <xforms:input id="input2" class="xui-autofill" ref="data('dataMain')/dETECTIONOBJECTCNAME" readonly="true"></xforms:input>
  <xforms:input id="input3" class="xui-autofill" ref="data('dataMain')/dEVICETYPECNAME" readonly="true"></xforms:input>
  <xforms:input id="input4" class="xui-autofill" ref="data('dataMain')/aPPLICATIONDATE" readonly="true"></xforms:input>
  <xforms:input id="input5" class="xui-autofill" ref="data('dataMain')/tESTSCHEMENAME" readonly="true"></xforms:input>
  <xui:view auto-load="true" id="view1" class="xui-container">
   <layout type="absolute" style="position:relative;" id="layout1"></layout></xui:view>
  <xhtml:div style="width:618px;height:176px;" component="/UI/system/components/grid.xbl.xml#grid" header-row-height="36" row-height="36" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid1" data="recuScheProD" onRowDblClick="projectActivity.grid1RowDblClick"><xui:column id="gridColumn9" ref="tESTSCHEMENAME" label="检测方案名称" type="ro" width="100px"></xui:column>
  <xui:column id="gridColumn13" ref="bUSINESSIDCNAME" label="业务类型" type="ro" width="110px"></xui:column><xui:column id="gridColumn12" ref="dECTIONBASEDONNAME" label="检测依据文件名称" type="ro" width="111px"></xui:column><xui:column id="gridColumn11" ref="mAKEDATETIME" label="制作日期时间" type="ro" width="127px"></xui:column><xui:column id="gridColumn10" ref="tESTSCHEMEDESC" label="检测方案描述" type="ed" width="147px"></xui:column>
  
  
  </xhtml:div>
  <xhtml:div component="/UI/system/components/windowDialog.xbl.xml#windowDialog" title="检测方案用例" width="650px" height="400px" modal="true" id="schemeCaseWD" url="/UI/metrodetection/detection_Process_Related/process/projectApplycationSchemeProcess/schemeCaseActivity.w"></xhtml:div></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1" style="height:100%;width:100%;;"> 
        <xui:tab id="tabList"> 
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
        <xui:tab id="tabDetail" xforms-select="projectActivity.tabDetailSelect"> 
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
      <xui:place control="input6" id="controlPlace3"></xui:place>
  <xui:place control="grid2" id="controlPlace6" style="width:200px;height:100px;"></xui:place></xhtml:div> 
    </xui:layout> 
  <xforms:input id="input6"></xforms:input>
  <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" header-row-height="36" row-height="36" show-header-menu="hide-column,save-layout,group-column,adjust-column" smart-render="20" id="grid2" data="recuScheProD"><xui:column id="gridColumn4" ref="tESTSCHEMENAME" label="检测方案名称" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn5" ref="tESTSCHEMEDESC" label="检测方案描述" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn6" ref="mAKEDATETIME" label="制作日期时间" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn7" ref="dECTIONBASEDONNAME" label="检测依据文件名称" type="ed" width="100px"></xui:column>
  <xui:column id="gridColumn8" ref="bUSINESSIDCNAME" label="业务类型" type="ed" width="100px"></xui:column></xhtml:div></xui:view>  
  <xui:resource id="rsMain"> 
    <xhtml:script id="htmlScript1" src="projectActivity.js"/> 
  </xui:resource> 
</xui:window>

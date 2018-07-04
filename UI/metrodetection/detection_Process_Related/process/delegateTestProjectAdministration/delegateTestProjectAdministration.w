<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:575px;height:auto;left:525px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="TEST_PROJECT_INFO" direct-delete="true" id="dataMain" limit="20" offset="0"
      update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/myQueryAFCTestProjectAction"
        id="default3"/>  
      <writer action="/metrodetection/system_code/logic/action/saveTEST_PROJECT_INFOAction"
        id="default4"/>  
      <creator action="/metrodetection/system_code/logic/action/createTEST_PROJECT_INFOAction"
        id="default5"/>  
      </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1"> 
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1" name="separator"/>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMain"
            id="excelExport1"/> 
        </item>  
        <item id="barItem7" name="separator"/>  
        <item id="barItem8"> 
          <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
            id="printHtml1" is-preview="true" label="打印" target-id="grdMain"/> 
        </item>  
        <item id="barItem9"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="pROJECTNAME,pROJECTTYPE1,aPPLICATIONNO,aSSIGNEDMANUFACTUREID,cONTACTPERSON,cONTACTMOBILE,cONTACTTELEPHONE,cONTACTEMAIL,nOTIFYTYPE,bUSINESSID,lINEID1,mANUFACTUREID2,pROJECTDATE,eNDINGDATE,eXECUTESTATE1,pROJECTMANAGER,mAKEDATE,tESTSCHEMEID,mEMO,mANUFACTUREIDCNAME,nOTIFYTYPECNAME,bUSINESSIDCNAME,mANUFACTUREIDCNAME1,oPERATORNAME,tESTSCHEMENAME"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem10"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();"
            src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="delegateTestProjectAdministration.grdMainRowDblClick"
      show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="项目名称" ref="pROJECTNAME" type="ro" width="199px"/>  
      <xui:column id="gridColumn7" ref="oPERATORNAME" label="项目负责人" type="ed" width="100px"/>
      <column id="default16" ref="pROJECTDATE" type="date" width="100px" label="立项日期"
        format="yyyy-MM-dd"/>
      <column id="default17" ref="eNDINGDATE" type="date" width="100px" label="预计结项日期"
        format="yyyy-MM-dd"/>  
      <column id="default18" ref="eXECUTESTATE1" type="ro" width="100px" label="执行状态"/>  
      <xui:column id="gridColumn1" ref="tASKID" label="委托任务ID" type="ed" width="100px"/>  
      <xui:column id="gridColumn6" ref="assignManufactureIdCName" label="委派单位" type="ed"
        width="259px"/>
      <xui:column id="gridColumn2" ref="aSSIGNEDCONTRACTCODE" label="委托合同编号" type="ed"
        width="239px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2"> 
        <item id="barItem13" name="save-item"/>  
        <item id="barItem15" name="refresh-item"/>  
        <item id="separatorItem3" name="separator"/>  
        <item id="barItem18" name="first-item"/>  
        <item id="barItem19" name="pre-item"/>  
        <item id="barItem20" name="next-item"/>  
        <item id="barItem21" name="last-item"/> 
      </xui:bar> 
    </xhtml:div>  
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout2" style="height:100%;;position:relative;" type="absolute"> 
        <place control="iptPROJECTNAME" id="default30" style="font-size:10pt;position: absolute;width:450px;top:43px;left:129px;"/>  
        <place control="iptPROJECTTYPE1" id="default32" style="font-size:10pt;position: absolute;width:150px;top:73px;left:129px;"/>  
        <place control="iptLINEID1" id="default50" style="font-size:10pt;position: absolute;width:150px;top:193px;left:129px;"/>
        <place control="iptPROJECTMANAGER" id="default60" style="font-size:10pt;position: absolute;width:150px;top:73px;left:428px;"/>  
        <place control="iptMAKEDATE" id="default62" style="font-size:10pt;position: absolute;width:150px;top:133px;left:428px;"/>  
        <place control="iptNOTIFYTYPECNAME" id="default70" style="font-size:10pt;position: absolute;width:150px;top:164px;left:129px;"/>  
        <place control="iptBUSINESSIDCNAME" id="default72" style="font-size:10pt;position: absolute;width:150px;top:164px;left:428px;"/>  
        <place control="iptTESTSCHEMENAME" id="default78" style="font-size:10pt;position: absolute;width:150px;top:133px;left:129px;"/>  
        <xhtml:label id="label1" style="position:absolute;width:55px;top:48px;left:66px;"
          class="xui-label">项目名称</xhtml:label>  
        <xhtml:label id="label3" class="xui-label" style="position:absolute;position:absolute;width:80px;top:138px;left:337px;">方案制定日期</xhtml:label>  
        <xhtml:label id="label4" class="xui-label" style="position:absolute;position:absolute;width:55px;top:199px;left:362px;">执行状态</xhtml:label>  
        <xhtml:label id="label5" class="xui-label" style="position:absolute;position:absolute;width:55px;top:109px;left:66px;">立项日期</xhtml:label>  
        <xhtml:label id="label6" class="xui-label" style="position:absolute;position:absolute;width:105px;top:199px;left:16px;">监测对象应用线路</xhtml:label>  
        <xhtml:label id="label11" class="xui-label" style="position:absolute;position:absolute;width:55px;top:79px;left:66px;">项目类型</xhtml:label>  
        <xhtml:label id="label12" class="xui-label" style="position:absolute;position:absolute;position:absolute;width:55px;top:168px;left:66px;">通知类型</xhtml:label>  
        <xhtml:label id="label14" class="xui-label" style="position:absolute;position:absolute;position:absolute;width:80px;top:138px;left:41px;">检测方案名称</xhtml:label>  
        <xhtml:label id="label15" class="xui-label" style="position:absolute;position:absolute;position:absolute;width:80px;top:109px;left:337px;">预计结项日期</xhtml:label>  
        <xhtml:label id="label16" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;width:65px;top:80px;left:352px;">项目负责人</xhtml:label>  
        <xhtml:label id="label17" class="xui-label" style="position:absolute;position:absolute;position:absolute;width:55px;top:283px;left:67px;">委派单位</xhtml:label>  
        <xhtml:label id="label18" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;width:55px;top:171px;left:362px;">业务类型</xhtml:label>  
        <xhtml:label id="label19" style="position:absolute;top:6px;left:3px;width:580px;height:20px;font-size:14px;font-weight:bold;background-color:#BAE7FA;"
          class="xui-label">项目信息</xhtml:label>  
        <xhtml:label id="label20" style="position:absolute;top:241px;left:6px;width:580px;height:20px;font-size:14px;font-weight:bold;background-color:#BAE7FA;"
          class="xui-label">委派信息</xhtml:label>  
        <xui:place control="tASKID" style="position: absolute;width:153px;top:337px;left:130px;"
          id="controlPlace3"/>  
        <xui:place control="aSSIGNEDCONTRACTCODE" style="position: absolute;width:450px;top:308px;left:130px;"
          id="controlPlace6"/>  
        <xui:place control="dECTIONDEVICE" style="position: absolute;width:153px;left:426px;top:367px;"
          id="controlPlace7"/>  
        <xui:place control="dECTIONCONTENT" style="position: absolute;width:153px;top:337px;left:426px;"
          id="controlPlace8"/>  
        <xui:place control="aSSIGNEDDATE" style="position: absolute;width:153px;left:130px;top:367px;"
          id="controlPlace9"/>  
        <xui:place control="aSSIGNEDCONTACTOR" style="position: absolute;width:153px;left:130px;top:397px;"
          id="controlPlace10"/>  
        <xui:place control="cONTACTTELEPHONE1" style="position: absolute;width:153px;left:426px;top:397px;"
          id="controlPlace11"/>  
        <xui:place control="assignManufactureIdCName" style="position: absolute;width:450px;top:277px;left:130px;"
          id="controlPlace13"/>  
        <xhtml:label id="label21" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;width:55px;top:342px;left:67px;">委托任务</xhtml:label>  
        <xhtml:label id="label22" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:55px;top:373px;left:363px;">检测产品</xhtml:label>  
        <xhtml:label id="label23" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:55px;top:372px;left:67px;">委托日期</xhtml:label>  
        <xhtml:label id="label24" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:55px;top:405px;left:363px;">联系电话</xhtml:label>  
        <xhtml:label id="label26" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:65px;top:402px;left:57px;">受理联系人</xhtml:label>  
        <xhtml:label id="label27" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:55px;top:340px;left:363px;">检测内容</xhtml:label>  
        <xhtml:label id="label28" class="xui-label" style="position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;width:55px;top:313px;left:67px;">委托合同</xhtml:label>  
        <xui:place control="gridSelect2" id="controlPlace15" style="position:absolute;width:150px;top:194px;left:429px;"></xui:place>
  <place control="input2" id="controlPlace16" style="font-size:10pt;position:absolute;width:150px;top:103px;left:428px;"></place>
  <place control="input3" id="controlPlace17" style="font-size:10pt;position:absolute;width:150px;top:105px;left:129px;"></place>
  <xui:place control="textarea2" id="controlPlace19" style="position:absolute;width:450px;top:427px;height:45px;left:129px;"></xui:place>
  <xhtml:label id="label7" style="position:absolute;width:30px;top:433px;left:91px;" class="xui-label">备注</xhtml:label></layout>  
      <xforms:input id="iptPROJECTNAME" ref="data('dataMain')/pROJECTNAME" disabled="true" readonly="true"/>  
      <xforms:input id="iptPROJECTTYPE1" ref="data('dataMain')/pROJECTTYPE1" readonly="true" disabled="true"/>  
      <xforms:input id="iptLINEID1" ref="data('dataMain')/lINEID1" readonly="true" disabled="true"/>
      <xforms:input id="iptPROJECTMANAGER" ref="data('dataMain')/pROJECTMANAGER"/>  
      <xforms:input id="iptMAKEDATE" ref="data('dataMain')/mAKEDATE" format="yyyy-MM-dd"/>  
      <xforms:input id="iptNOTIFYTYPECNAME" ref="data('dataMain')/nOTIFYTYPECNAME" readonly="true" disabled="true"/>  
      <xforms:input id="iptBUSINESSIDCNAME" ref="data('dataMain')/bUSINESSIDCNAME"/>  
      <xforms:input id="iptTESTSCHEMENAME" ref="data('dataMain')/tESTSCHEMENAME"/>  
      <xforms:input ref="data('dataMain')/tASKID" id="tASKID"/>  
      <xforms:input ref="data('dataMain')/aSSIGNEDCONTRACTCODE" id="aSSIGNEDCONTRACTCODE"/>  
      <xforms:input ref="data('dataMain')/dECTIONDEVICE" id="dECTIONDEVICE"/>  
      <xforms:input ref="data('dataMain')/dECTIONCONTENT" id="dECTIONCONTENT"/>  
      <xforms:input ref="data('dataMain')/aSSIGNEDDATE" id="aSSIGNEDDATE" format="yyyy-MM-dd" readonly="true" disabled="true"/>  
      <xforms:input ref="data('dataMain')/aSSIGNEDCONTACTOR" id="aSSIGNEDCONTACTOR"/>  
      <xforms:input ref="data('dataMain')/cONTACTTELEPHONE1" id="cONTACTTELEPHONE1"/>  
      <xforms:input ref="data('dataMain')/mANUFACTUREIDCNAME" id="assignManufactureIdCName"/>  
      <xhtml:div component="/UI/system/components/select.xbl.xml#gridSelect" label-separator="," value-separator="," ext-separator="," id="gridSelect2" ref="data('dataMain')/eXECUTESTATE">
				   
				   
				   
				
   <xforms:label ref="col_1" id="xuiLabel4"></xforms:label>
   <xforms:value ref="col_0" id="default26"></xforms:value>
   <xforms:itemset id="default27" auto-load-data="true">
  
  
  <itemset-data xmlns="" id="default37">
   <rows xmlns="" id="default38">
    <row id="default39">
     <cell id="default40">0</cell>
     <cell id="default41">未开始</cell></row> 
    <row id="default42">
     <cell id="default43">1</cell>
     <cell id="default44">开始检测</cell></row> 
    <row id="default45">
     <cell id="default46">2</cell>
     <cell id="default47">检测完成</cell></row> 
    <row id="default48">
     <cell id="default49">3</cell>
     <cell id="default51">出具报告</cell></row> </rows> </itemset-data>
  <xforms:column ref="col_0" visible="false" id="default52"></xforms:column>
  <xforms:column ref="col_1" id="default53"></xforms:column></xforms:itemset></xhtml:div>
  <xforms:input id="input2" ref="data('dataMain')/eNDINGDATE" format="yyyy-MM-dd"></xforms:input>
  <xforms:input id="input3" ref="data('dataMain')/pROJECTDATE" format="yyyy-MM-dd" readonly="true" disabled="true"></xforms:input>
  <xforms:textarea ref="data('dataMain')/mEMO1" id="textarea2"></xforms:textarea></xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:152%;"> 
        <xui:tab id="tabList"> 
          <xui:label id="xuiLabel1">列表</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout1" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top1" size="32px"> 
              <place control="tbsMain1" id="controlPlace1"/> 
            </top>  
            <center id="borderLayout-center1"> 
              <place control="grdMain" id="controlPlace2" style="width:100%;height:100%;"/> 
            </center> 
          </xhtml:div> 
        </xui:tab>  
        <xui:tab id="tabDetail"> 
          <xui:label id="xuiLabel2">详细</xui:label>  
          <xhtml:div component="/UI/system/components/borderLayout.xbl.xml#borderLayout"
            id="borderLayout2" style="width:100%;height:600px;"> 
            <top id="borderLayout-top2" size="32px"> 
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
    <xhtml:script id="htmlScript1" src="delegateTestProjectAdministration.js"/> 
  </xui:resource> 
</xui:window>

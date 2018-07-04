<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:ev="http://www.w3.org/2001/xml-events" xmlns:xforms="http://www.justep.com/xforms"
  xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:128px;left:173px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SAMPLE_DEVICE_INFO" direct-delete="true" id="dataMain" limit="20" offset="0"
      update-mode="whereVersion"> 
      <reader action="/metrodetection/system_code/logic/action/myQuerysample_device_info"
        id="default3"/>  
      <writer id="default4"/>  
      <creator id="default5"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain1" mode="IMG_TXT_LR"> 
        <item> 
          <xhtml:img align="absmiddle" dis-src="/UI/system/images/standardToolbar/standard/un_insert.gif"
            id="insertTrigger" onclick="mainActivity.newItemClick(event)" src="/UI/system/images/standardToolbar/standard/insert.gif"
            style="border:none" title="新建"/> 
        </item>  
        <item id="barItem3" name="delete-item"/>  
        <item id="barItem4" name="refresh-item"/>  
        <item id="barItem5" name="filter-item"/>  
        <item id="barItem6" name="filter-pattern-item"/>  
        <item id="separatorItem1" name="separator"/>  
        <item id="barItem11" name="custom-page-item"/>  
        <item id="barItem1"> 
          <xhtml:div class="xui-input" component="/UI/system/components/smartFilter.xbl.xml#smartFilter"
            filter-data="dataMain" filter-relations="cONTRACTCODE,pROJECTID,mANUFACTUREID,dEVICETYPE,dEVICESTYLE,dECTIONTYPE,dEVICEID,sOFTWAREVERSION,hARDWAREVERSION,dEADLINERECEIVEDATE,iNDEEDRECEIVEDATE,rETURNDATE,iNDEEDRETURNDATE,sHAREDFLAG,mEMO"
            id="smartFilter1"/> 
        </item>  
        <item id="barItem2"> 
          <xhtml:img alt="" id="image1" onclick="xforms.blur();justep.xbl('dataMain').refreshData();"
            src="/UI/SA/task/taskCenter/images/search.gif"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMain"
      id="grdMain" onRowDblClick="mainActivity.grdMainRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default1" label="合同编号" ref="cONTRACTCODE" type="ro" width="100px"/>  
      <column id="default2" label="项目ID" ref="pROJECTID" type="ro" width="100px"/>  
      <column id="default6" label="供应商ID" ref="mANUFACTUREID" type="ro" width="100px"/>  
      <column id="default7" label="检测对象" ref="dEVICETYPE" type="ro" width="100px"/>  
      <column id="default8" label="对象型号" ref="dEVICESTYLE" type="ro" width="100px"/>  
      <column id="default9" label="检测类型" ref="dECTIONTYPE" type="ro" width="100px"/>  
      <column id="default10" label="设备ID" ref="dEVICEID" type="ro" width="100px"/>  
      <column id="default11" label="软件版本" ref="sOFTWAREVERSION" type="ro" width="100px"/>  
      <column id="default12" label="硬件版本" ref="hARDWAREVERSION" type="ro" width="100px"/>  
      <column id="default13" label="最晚进场日期" ref="dEADLINERECEIVEDATE" type="ro"
        width="100px"/>  
      <column id="default14" label="实际进场日期" ref="iNDEEDRECEIVEDATE" type="ro"
        width="100px"/>  
      <column id="default15" label="预计归还日期" ref="rETURNDATE" type="ro" width="100px"/>  
      <column id="default16" label="实际归还日期" ref="iNDEEDRETURNDATE" type="ro" width="100px"/>  
      <column id="default17" label="是否允许资源共用" ref="sHAREDFLAG" type="ro" width="100px"/>  
      <column id="default18" label="备注" ref="mEMO" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMain2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMain"
        id="ngtbMain2" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="insert-item"/>  
        <item id="barItem13" name="save-item"/>  
        <item id="barItem14" name="delete-item"/>  
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
        <place control-label="iptCONTRACTCODE" id="default19" style="font-size:10pt;position: absolute;left:30px;top:38px"/>  
        <place control="iptCONTRACTCODE" id="default20" style="font-size:10pt;position: absolute;left:130px;top:30px;width:150px;"/>  
        <place control-label="iptPROJECTID" id="default21" style="font-size:10pt;position: absolute;left:330px;top:38px"/>  
        <place control="iptPROJECTID" id="default22" style="font-size:10pt;position: absolute;left:430px;top:30px;width:150px;"/>  
        <place control-label="iptMANUFACTUREID" id="default23" style="font-size:10pt;position: absolute;left:30px;top:68px"/>  
        <place control="iptMANUFACTUREID" id="default24" style="font-size:10pt;position: absolute;left:130px;top:60px;width:150px;"/>  
        <place control-label="iptDEVICETYPE" id="default25" style="font-size:10pt;position: absolute;left:330px;top:68px"/>  
        <place control="iptDEVICETYPE" id="default26" style="font-size:10pt;position: absolute;left:430px;top:60px;width:150px;"/>  
        <place control-label="iptDEVICESTYLE" id="default27" style="font-size:10pt;position: absolute;left:30px;top:98px"/>  
        <place control="iptDEVICESTYLE" id="default28" style="font-size:10pt;position: absolute;left:130px;top:90px;width:150px;"/>  
        <place control-label="iptDECTIONTYPE" id="default29" style="font-size:10pt;position: absolute;left:330px;top:98px"/>  
        <place control="iptDECTIONTYPE" id="default30" style="font-size:10pt;position: absolute;left:430px;top:90px;width:150px;"/>  
        <place control-label="iptDEVICEID" id="default31" style="font-size:10pt;position: absolute;left:30px;top:128px"/>  
        <place control="iptDEVICEID" id="default32" style="font-size:10pt;position: absolute;left:130px;top:120px;width:150px;"/>  
        <place control-label="iptSOFTWAREVERSION" id="default33" style="font-size:10pt;position: absolute;left:330px;top:128px"/>  
        <place control="iptSOFTWAREVERSION" id="default34" style="font-size:10pt;position: absolute;left:430px;top:120px;width:150px;"/>  
        <place control-label="iptHARDWAREVERSION" id="default35" style="font-size:10pt;position: absolute;left:30px;top:158px"/>  
        <place control="iptHARDWAREVERSION" id="default36" style="font-size:10pt;position: absolute;left:130px;top:150px;width:150px;"/>  
        <place control-label="iptDEADLINERECEIVEDATE" id="default37" style="font-size:10pt;position: absolute;left:330px;top:158px"/>  
        <place control="iptDEADLINERECEIVEDATE" id="default38" style="font-size:10pt;position: absolute;left:430px;top:150px;width:150px;"/>  
        <place control-label="iptINDEEDRECEIVEDATE" id="default39" style="font-size:10pt;position: absolute;left:30px;top:188px"/>  
        <place control="iptINDEEDRECEIVEDATE" id="default40" style="font-size:10pt;position: absolute;left:130px;top:180px;width:150px;"/>  
        <place control-label="iptRETURNDATE" id="default41" style="font-size:10pt;position: absolute;left:330px;top:188px"/>  
        <place control="iptRETURNDATE" id="default42" style="font-size:10pt;position: absolute;left:430px;top:180px;width:150px;"/>  
        <place control-label="iptINDEEDRETURNDATE" id="default43" style="font-size:10pt;position: absolute;left:30px;top:218px"/>  
        <place control="iptINDEEDRETURNDATE" id="default44" style="font-size:10pt;position: absolute;left:130px;top:210px;width:150px;"/>  
        <place control-label="iptSHAREDFLAG" id="default45" style="font-size:10pt;position: absolute;left:330px;top:218px"/>  
        <place control="iptSHAREDFLAG" id="default46" style="font-size:10pt;position: absolute;left:430px;top:210px;width:150px;"/>  
        <place control-label="iptMEMO" id="default47" style="font-size:10pt;position: absolute;left:30px;top:248px"/>  
        <place control="iptMEMO" id="default48" style="font-size:10pt;position: absolute;left:130px;top:240px;width:150px;"/> 
      </layout>  
      <xforms:input id="iptCONTRACTCODE" ref="data('dataMain')/cONTRACTCODE"/>  
      <xforms:input id="iptPROJECTID" ref="data('dataMain')/pROJECTID"/>  
      <xforms:input id="iptMANUFACTUREID" ref="data('dataMain')/mANUFACTUREID"/>  
      <xforms:input id="iptDEVICETYPE" ref="data('dataMain')/dEVICETYPE"/>  
      <xforms:input id="iptDEVICESTYLE" ref="data('dataMain')/dEVICESTYLE"/>  
      <xforms:input id="iptDECTIONTYPE" ref="data('dataMain')/dECTIONTYPE"/>  
      <xforms:input id="iptDEVICEID" ref="data('dataMain')/dEVICEID"/>  
      <xforms:input id="iptSOFTWAREVERSION" ref="data('dataMain')/sOFTWAREVERSION"/>  
      <xforms:input id="iptHARDWAREVERSION" ref="data('dataMain')/hARDWAREVERSION"/>  
      <xforms:input id="iptDEADLINERECEIVEDATE" ref="data('dataMain')/dEADLINERECEIVEDATE"/>  
      <xforms:input id="iptINDEEDRECEIVEDATE" ref="data('dataMain')/iNDEEDRECEIVEDATE"/>  
      <xforms:input id="iptRETURNDATE" ref="data('dataMain')/rETURNDATE"/>  
      <xforms:input id="iptINDEEDRETURNDATE" ref="data('dataMain')/iNDEEDRETURNDATE"/>  
      <xforms:input id="iptSHAREDFLAG" ref="data('dataMain')/sHAREDFLAG"/>  
      <xforms:input id="iptMEMO" ref="data('dataMain')/mEMO"/> 
    </xui:view>  
    <xui:layout id="rootLayout" style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="height:100%;width:100%;;"> 
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
            id="borderLayout2" style="width:100%; height: 100%;;"> 
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
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>

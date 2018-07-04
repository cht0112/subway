<?xml version="1.0" encoding="utf-8"?>

<xui:window xmlns:xui="http://www.justep.com/xui" xmlns="http://www.justep.com/xui"
  xmlns:xforms="http://www.justep.com/xforms" xmlns:xhtml="http://www.w3.org/1999/xhtml" component="/UI/system/components/window.xbl.xml#window">  
  <xforms:model id="mdDefault" style="top:431px;height:auto;left:201px;"> 
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SAMPLE_DEVICE_INFO" direct-delete="true" id="dataMaster" limit="20"
      offset="0" store-type="grid" update-mode="whereAll"> 
      <reader action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_INFOAction"
        id="default1"/>  
      <writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_INFOAction"
        id="default2"/>  
      <creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_INFOAction"
        id="default3"/> 
    <rule id="dataBizRule1" relation="cONTRACTCODE" required="true()" alert="'合同编号不能为空!'"></rule>
  <rule id="dataBizRule2" relation="pROJECTID" required="true()" alert="'项目ID不能为空!'"></rule>
  <rule id="dataBizRule3" relation="mANUFACTUREID" required="true()" alert="'供应商ID不能为空!'"></rule>
  <rule id="dataBizRule4" relation="dEVICETYPE" required="true()" alert="'检测对象不能为空!'"></rule>
  <rule id="dataBizRule5" relation="dECTIONTYPE" required="true()" alert="'检测类型不能为空!'"></rule>
  <rule id="dataBizRule6" relation="sOFTWAREVERSION" required="true()" alert="'软件版本不能为空!'"></rule>
  <rule id="dataBizRule7" relation="hARDWAREVERSION" required="true()" alert="'硬件版本不能为空!'"></rule>
  <rule id="dataBizRule8" relation="dEADLINERECEIVEDATE" required="true()" alert="'最晚进场日期不能为空!'"></rule>
  <rule id="dataBizRule9" relation="iNDEEDRECEIVEDATE" required="true()" alert="'实际进场日期不能为空!'"></rule>
  <rule id="dataBizRule10" relation="rETURNDATE" required="true()" alert="'预计归还日期不能为空!'"></rule>
  <rule id="dataBizRule11" relation="iNDEEDRETURNDATE" required="true()" alert="'实际归还日期不能为空!'"></rule>
  <rule id="dataBizRule12" relation="sHAREDFLAG" required="true()" alert="'是否允许资源共用不能为空!'"></rule></data>  
    <data auto-load="true" component="/UI/system/components/data.xbl.xml#bizData"
      concept="SAMPLE_DEVICE_MOVING_RECORD" confirm-delete="false" id="dataDetail"
      limit="20" offset="0" update-mode="whereAll" store-type="grid"> 
      <reader action="/metrodetection/system_code/logic/action/querySAMPLE_DEVICE_MOVING_RECORDAction"
        id="default4"/>  
      <writer action="/metrodetection/system_code/logic/action/saveSAMPLE_DEVICE_MOVING_RECORDAction"
        id="default5"/>  
      <creator action="/metrodetection/system_code/logic/action/createSAMPLE_DEVICE_MOVING_RECORDAction"
        id="default6"/>  
      <master data="dataMaster" id="master1" relation="pROJECTID"/> 
    </data> 
  </xforms:model>  
  <xui:view auto-load="true" id="rootView"> 
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster1"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster1" mode="IMG_TXT_LR"> 
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
        <item id="barItem1" name="separator"/>  
        <item id="barItem2"> 
          <xhtml:div component="/UI/system/components/excel.xbl.xml#export" data="dataMaster"
            id="excelExport1"/> 
        </item>  
        <item id="barItem7" name="separator"/>  
        <item id="barItem8"> 
          <xhtml:div component="/UI/system/components/printHtml.xbl.xml#printHtml"
            id="printHtml1" is-preview="true" label="打印" target-id="grdMaster"/> 
        </item> 
      </xui:bar> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataMaster"
      id="grdMaster" onRowDblClick="mainActivity.grdMasterRowDblClick" show-header-menu="hide-column,save-layout,group-column,adjust-column"> 
      <column id="default7" label="合同编号 " ref="cONTRACTCODE" type="ro" width="100px"/>  
      <column id="default8" label="项目ID " ref="pROJECTID" type="ro" width="100px"/>  
      <column id="default9" label="供应商ID " ref="mANUFACTUREID" type="ro" width="100px"/>  
      <column id="default10" label="检测对象 " ref="dEVICETYPE" type="ro" width="100px"/>  
      <column id="default11" label="对象型号 " ref="dEVICESTYLE" type="ro" width="100px"/>  
      <column id="default12" label="检测类型 " ref="dECTIONTYPE" type="ro" width="100px"/>  
      <column id="default13" label="设备ID " ref="dEVICEID" type="ro" width="100px"/>  
      <column id="default14" label="软件版本 " ref="sOFTWAREVERSION" type="ro" width="100px"/>  
      <column id="default15" label="硬件版本 " ref="hARDWAREVERSION" type="ro" width="100px"/>  
      <column id="default16" label="最晚进场日期 " ref="dEADLINERECEIVEDATE" type="ro"
        width="100px"/>  
      <column id="default17" label="实际进场日期 " ref="iNDEEDRECEIVEDATE" type="ro"
        width="100px"/>  
      <column id="default18" label="预计归还日期 " ref="rETURNDATE" type="ro" width="100px"/>  
      <column id="default19" label="实际归还日期 " ref="iNDEEDRETURNDATE" type="ro"
        width="100px"/>  
      <column id="default20" label="是否允许资源共用 " ref="sHAREDFLAG" type="ro" width="100px"/>  
      <column id="default21" label="备注" ref="mEMO" type="ro" width="100px"/> 
    </xhtml:div>  
    <xhtml:div component="/UI/system/components/toolbars.xbl.xml#toolbars" id="tbsMaster2"> 
      <xui:bar component="/UI/system/components/bar.xbl.xml#navigatorBar" data="dataMaster"
        id="ngtbMaster2" mode="IMG_TXT_LR"> 
        <item id="barItem12" name="insert-item"/>  
        <item id="barItem13" name="save-item"/>  
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
    <xui:view auto-load="true" id="vDetail"> 
      <layout id="layout1" style="position:relative;height:346px;" type="absolute"> 
        <place control-label="iptCONTRACTCODE" id="default30" style="font-size:10pt;position: absolute;top:27px;left:30px;"/>  
        <place control="iptCONTRACTCODE" id="default31" style="font-size:10pt;position: absolute;width:150px;top:27px;left:130px;"/>  
        <place control-label="iptPROJECTID" id="default32" style="font-size:10pt;position: absolute;top:27px;left:304px;"/>  
        <place control="iptPROJECTID" id="default33" style="font-size:10pt;position: absolute;width:150px;top:27px;left:430px;"/>  
        <place control-label="iptMANUFACTUREID" id="default34" style="font-size:10pt;position: absolute;top:60px;left:30px;"/>  
        <place control="iptMANUFACTUREID" id="default35" style="font-size:10pt;position: absolute;width:150px;top:60px;left:130px;"/>  
        <place control-label="iptDEVICETYPE" id="default36" style="font-size:10pt;position: absolute;top:60px;left:304px;"/>  
        <place control="iptDEVICETYPE" id="default37" style="font-size:10pt;position: absolute;width:150px;top:60px;left:430px;"/>  
        <place control-label="iptDEVICESTYLE" id="default38" style="font-size:10pt;position: absolute;top:90px;left:30px;"/>  
        <place control="iptDEVICESTYLE" id="default39" style="font-size:10pt;position: absolute;width:150px;top:90px;left:130px;"/>  
        <place control-label="iptDECTIONTYPE" id="default40" style="font-size:10pt;position: absolute;top:90px;left:304px;"/>  
        <place control="iptDECTIONTYPE" id="default41" style="font-size:10pt;position: absolute;width:150px;top:90px;left:430px;"/>  
        <place control-label="iptDEVICEID" id="default42" style="font-size:10pt;position: absolute;top:120px;left:30px;"/>  
        <place control="iptDEVICEID" id="default43" style="font-size:10pt;position: absolute;width:150px;top:120px;left:130px;"/>  
        <place control-label="iptSOFTWAREVERSION" id="default44" style="font-size:10pt;position: absolute;top:120px;left:304px;"/>  
        <place control="iptSOFTWAREVERSION" id="default45" style="font-size:10pt;position: absolute;width:150px;top:120px;left:430px;"/>  
        <place control-label="iptHARDWAREVERSION" id="default46" style="font-size:10pt;position: absolute;top:150px;left:30px;"/>  
        <place control="iptHARDWAREVERSION" id="default47" style="font-size:10pt;position: absolute;width:150px;top:150px;left:130px;"/>  
        <place control-label="iptDEADLINERECEIVEDATE" id="default48" style="font-size:10pt;position: absolute;top:180px;left:304px;"/>  
        <place control="iptDEADLINERECEIVEDATE" id="default49" style="font-size:10pt;position: absolute;width:150px;top:180px;left:430px;"/>  
        <place control-label="iptINDEEDRECEIVEDATE" id="default50" style="font-size:10pt;position: absolute;top:180px;left:30px;"/>  
        <place control="iptINDEEDRECEIVEDATE" id="default51" style="font-size:10pt;position: absolute;width:150px;top:180px;left:130px;"/>  
        <place control-label="iptRETURNDATE" id="default52" style="font-size:10pt;position: absolute;top:210px;left:304px;"/>  
        <place control="iptRETURNDATE" id="default53" style="font-size:10pt;position: absolute;width:150px;top:210px;left:430px;"/>  
        <place control-label="iptINDEEDRETURNDATE" id="default54" style="font-size:10pt;position: absolute;top:210px;left:30px;"/>  
        <place control="iptINDEEDRETURNDATE" id="default55" style="font-size:10pt;position: absolute;width:150px;top:210px;left:130px;"/>  
        <place control-label="iptSHAREDFLAG" id="default56" style="font-size:10pt;position: absolute;top:150px;left:304px;"/>  
        <place control="iptSHAREDFLAG" id="default57" style="font-size:10pt;position: absolute;width:150px;top:150px;left:430px;"/>  
        <place control-label="iptMEMO" id="default58" style="font-size:10pt;position: absolute;top:248px;left:30px;"/>  
        <place control="iptMEMO" id="default59" style="font-size:10pt;position: absolute;width:454px;top:240px;height:98px;left:130px;"/> 
      <xhtml:label id="label2" style="position:absolute;color:#FF0000;top:26px;left:21px;" class="xui-label">*</xhtml:label>
  <xhtml:label id="label7" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;top:64px;left:295px;">


*</xhtml:label>
  <xhtml:label id="label3" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;top:152px;left:21px;">



*</xhtml:label>
  <xhtml:label id="label4" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:58px;left:21px;">




*</xhtml:label>
  <xhtml:label id="label5" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:94px;left:295px;">





*</xhtml:label>
  <xhtml:label id="label6" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:29px;left:295px;">





*</xhtml:label>
  <xhtml:label id="label8" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:125px;left:295px;">




*</xhtml:label>
  <xhtml:label id="label9" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:180px;left:21px;">




*</xhtml:label>
  <xhtml:label id="label11" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:213px;left:295px;">





*</xhtml:label>
  <xhtml:label id="label12" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:185px;left:295px;">





*</xhtml:label>
  <xhtml:label id="label13" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:155px;left:295px;">





*</xhtml:label>
  <xhtml:label id="label15" class="xui-label" style="position:absolute;color:#FF0000;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;position:absolute;top:212px;left:21px;">






*</xhtml:label></layout>  
      <xforms:input id="iptCONTRACTCODE" ref="data('dataMaster')/cONTRACTCODE"/>  
      <xforms:input id="iptPROJECTID" ref="data('dataMaster')/pROJECTID"/>  
      <xforms:input id="iptMANUFACTUREID" ref="data('dataMaster')/mANUFACTUREID"/>  
      <xforms:input id="iptDEVICETYPE" ref="data('dataMaster')/dEVICETYPE"/>  
      <xforms:input id="iptDEVICESTYLE" ref="data('dataMaster')/dEVICESTYLE"/>  
      <xforms:input id="iptDECTIONTYPE" ref="data('dataMaster')/dECTIONTYPE"/>  
      <xforms:input id="iptDEVICEID" ref="data('dataMaster')/dEVICEID"/>  
      <xforms:input id="iptSOFTWAREVERSION" ref="data('dataMaster')/sOFTWAREVERSION"/>  
      <xforms:input id="iptHARDWAREVERSION" ref="data('dataMaster')/hARDWAREVERSION"/>  
      <xforms:input id="iptDEADLINERECEIVEDATE" ref="data('dataMaster')/dEADLINERECEIVEDATE" format="yyyy-MM-dd hh:mm"/>  
      <xforms:input id="iptINDEEDRECEIVEDATE" ref="data('dataMaster')/iNDEEDRECEIVEDATE" format="yyyy-MM-dd hh:mm"/>  
      <xforms:input id="iptRETURNDATE" ref="data('dataMaster')/rETURNDATE" format="yyyy-MM-dd hh:mm"/>  
      <xforms:input id="iptINDEEDRETURNDATE" ref="data('dataMaster')/iNDEEDRETURNDATE" format="yyyy-MM-dd hh:mm"/>  
      <xforms:input id="iptSHAREDFLAG" ref="data('dataMaster')/sHAREDFLAG"/>  
      <xforms:input id="iptMEMO" ref="data('dataMaster')/mEMO" format="0,000.00"/> 
    </xui:view>  
    <xhtml:div component="/UI/system/components/grid.xbl.xml#grid" data="dataDetail"
      id="grdDetail" dragable="false"> 
      <column id="default22" label="操作日期时间" ref="oPERATEDATETIME" type="ed" width="100px"/>  
      <column id="default23" label="操作类型" ref="oPERATETYPE" type="ed" width="100px"/>  
      <column id="default24" label="操作员" ref="oPERATORID" type="ed" width="100px"/>  
      <column id="default25" label="项目ID" ref="pROJECTID" type="ed" width="100px"/>  
      <column id="default26" label="测试任务ID" ref="tESTTASKID" type="ed" width="100px"/>  
      <column id="default27" label="唯一编号" ref="dEVICEID" type="ed" width="100px"/>  
      <column id="default28" label="操作结果" ref="oPERATERESULTSTATE" type="ed" width="100px"/>  
      <column id="default29" label="备注" ref="mEMO" type="ed" width="89px"/> 
    </xhtml:div>  
    <xui:layout style="height:100%;width:100%"> 
      <xhtml:div component="/UI/system/components/tabs.xbl.xml#tabs" id="tabpanel1"
        style="width:100%;height:650px;"> 
        <xui:tab id="tabList"> 
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
            id="borderLayout2" style="width:100%; height: 100%;;"> 
            <top id="borderLayout-top2"> 
              <place control="tbsMaster2" id="controlPlace3"/>  
              <place control="vDetail" id="controlPlace5" style="height:346px;"/>  
              </top>  
            <center id="borderLayout-center2"> 
               
            <place control="grdDetail" id="controlPlace6" style="width:100%;height:99%;" /></center> 
          </xhtml:div> 
        </xui:tab> 
      </xhtml:div> 
    </xui:layout> 
  </xui:view>  
  <xui:resource> 
    <xhtml:script id="htmlScript1" src="mainActivity.js"/> 
  </xui:resource> 
</xui:window>
